import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { createReadStream, readFileSync as readSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';
import vm from 'node:vm';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
function loadEnv() {
  try {
    for (const line of readSync(path.join(ROOT, '.env'), 'utf8').split(/\r?\n/)) {
      const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
      if (match && process.env[match[1]] === undefined) process.env[match[1]] = match[2].replace(/^['"]|['"]$/g, '');
    }
  } catch {}
}
loadEnv();

const PORT = Number(process.env.PORT || 3000);
const SITE_URL = (process.env.SITE_URL || `http://localhost:${PORT}`).replace(/\/$/, '');
const SECRET = process.env.PAYSTACK_SECRET_KEY || '';
const catalogSandbox = {};
const catalogSource = await readFile(path.join(ROOT, 'assets', 'products.js'), 'utf8');
vm.runInNewContext(`${catalogSource}\nglobalThis.__catalog = products;`, catalogSandbox, { timeout: 1000 });
const products = catalogSandbox.__catalog;

const mime = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.webp':'image/webp', '.png':'image/png', '.svg':'image/svg+xml' };
function send(res, status, body, type='application/json; charset=utf-8') {
  res.writeHead(status, { 'Content-Type': type, 'X-Content-Type-Options':'nosniff', 'Referrer-Policy':'strict-origin-when-cross-origin', 'Cache-Control':'no-store' });
  res.end(typeof body === 'string' ? body : JSON.stringify(body));
}
async function readJson(req) {
  let raw = '';
  for await (const chunk of req) {
    raw += chunk;
    if (raw.length > 100_000) throw new Error('Request is too large.');
  }
  return JSON.parse(raw || '{}');
}
function getPricedOrder(items) {
  if (!Array.isArray(items) || !items.length || items.length > 50) throw new Error('Your cart is empty or has too many items.');
  const lines = items.map((item) => {
    const product = products.find((entry) => entry.id === Number(item.id));
    if (!product) throw new Error('A product in your cart could not be found. Please refresh and try again.');
    let variant = '';
    let price = product.price ?? null;
    if (product.sizes) {
      if (!item.variant) throw new Error(`Choose a type or size for ${product.name}.`);
      const option = product.sizes.find((entry) => (typeof entry === 'string' ? entry : entry.label) === item.variant);
      if (!option) throw new Error(`The selected ${product.name} option is unavailable.`);
      variant = typeof option === 'string' ? option : option.label;
      price = typeof option === 'string' ? null : option.price ?? null;
    }
    if (!Number.isSafeInteger(price) || price <= 0) throw new Error(`A current price is needed for ${product.name}${variant ? ` — ${variant}` : ''} before checkout.`);
    return { id:product.id, name:product.name, variant, price };
  });
  const total = lines.reduce((sum, line) => sum + line.price, 0);
  if (!Number.isSafeInteger(total) || total <= 0 || total * 100 > Number.MAX_SAFE_INTEGER) throw new Error('The order total is invalid.');
  return { lines, total };
}
async function paystack(pathname, options={}) {
  const response = await fetch(`https://api.paystack.co${pathname}`, {
    ...options,
    headers: { Authorization:`Bearer ${SECRET}`, 'Content-Type':'application/json', ...(options.headers || {}) }
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.status) throw new Error(data.message || 'The payment provider could not process the request.');
  return data.data;
}
function escapeHtml(text) { return String(text).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])); }
function resultPage(success, reference, detail='') {
  const heading = success ? 'Payment confirmed' : 'Payment not confirmed';
  const message = success ? 'Thank you. Your payment was verified successfully.' : (detail || 'We could not verify this payment. You have not been charged by this page; contact us before trying again if your bank shows a debit.');
  const clearCart = success ? `<script>try{localStorage.removeItem('jochiss-enquiry')}catch{}</script>` : '';
  return `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${heading} | Jochiss</title><style>body{font:16px Arial,sans-serif;background:#f5f4ef;color:#242922;margin:0;min-height:100vh;display:grid;place-items:center}.card{background:#fffefa;padding:36px;max-width:510px;margin:20px;border:1px solid #e5e3db}h1{font:500 34px Georgia;margin:0 0 14px}p{color:#62675e;line-height:1.7}.ref{font-size:12px}.link{display:inline-block;margin-top:12px;padding:13px 18px;background:#242922;color:#fff;text-decoration:none;font-size:13px}</style><main class="card"><h1>${heading}</h1><p>${escapeHtml(message)}</p>${reference ? `<p class="ref">Payment reference: ${escapeHtml(reference)}</p>` : ''}<a class="link" href="/">Return to Jochiss</a></main>${clearCart}</html>`;
}
async function handle(req, res) {
  const url = new URL(req.url, SITE_URL);
  if (req.method === 'GET' && url.pathname === '/api/health') {
    return send(res, 200, { provider:'Paystack', configured:Boolean(SECRET) });
  }
  if (req.method === 'POST' && url.pathname === '/api/checkout') {
    if (!SECRET) return send(res, 503, { error:'Online checkout is not configured yet. Add the Paystack secret key to the server environment.' });
    try {
      const body = await readJson(req);
      const email = String(body.email || '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return send(res, 400, { error:'Enter a valid email address for your payment receipt.' });
      const { lines, total } = getPricedOrder(body.items);
      const reference = `JOCHISS-${randomUUID()}`;
      const data = await paystack('/transaction/initialize', { method:'POST', body:JSON.stringify({
        email, amount:String(total * 100), currency:'NGN', reference,
        callback_url:`${SITE_URL}/payment/callback`,
        metadata:{ order_reference:reference, expected_amount_kobo:total * 100, items:lines.map(({id,name,variant,price})=>({id,name,variant,price})) }
      }) });
      return send(res, 200, { authorization_url:data.authorization_url, reference });
    } catch (error) { return send(res, 400, { error:error.message || 'Could not start checkout.' }); }
  }
  if (req.method === 'GET' && url.pathname === '/payment/callback') {
    const reference = url.searchParams.get('reference') || '';
    if (!SECRET || !/^[a-zA-Z0-9.=\-]{1,100}$/.test(reference)) return send(res, 400, resultPage(false, reference, 'The payment reference is missing or invalid.'), 'text/html; charset=utf-8');
    try {
      const transaction = await paystack(`/transaction/verify/${encodeURIComponent(reference)}`, { method:'GET' });
      const metadata = typeof transaction.metadata === 'string' ? JSON.parse(transaction.metadata) : transaction.metadata;
      const expectedAmount = Number(metadata?.expected_amount_kobo);
      const verified = transaction.status === 'success' && transaction.currency === 'NGN' && transaction.reference === reference && metadata?.order_reference === reference && Number.isSafeInteger(expectedAmount) && transaction.amount === expectedAmount;
      const html = resultPage(verified, reference, verified ? '' : 'The payment is still pending or could not be matched to this order. Please contact us before trying again.');
      return send(res, verified ? 200 : 402, html, 'text/html; charset=utf-8');
    } catch (error) { return send(res, 502, resultPage(false, reference, error.message || 'We could not verify the payment right now. Please try again shortly.'), 'text/html; charset=utf-8'); }
  }
  if (req.method !== 'GET' && req.method !== 'HEAD') return send(res, 405, { error:'Method not allowed.' });
  let pathname;
  try { pathname = decodeURIComponent(url.pathname); } catch { return send(res, 400, { error:'Invalid URL.' }); }
  if (pathname === '/') pathname = '/index.html';
  const file = path.resolve(ROOT, `.${pathname}`);
  if (!file.startsWith(ROOT + path.sep)) return send(res, 403, { error:'Forbidden.' });
  try {
    const info = await stat(file);
    if (!info.isFile()) return send(res, 404, { error:'Not found.' });
    res.writeHead(200, { 'Content-Type':mime[path.extname(file).toLowerCase()] || 'application/octet-stream', 'X-Content-Type-Options':'nosniff' });
    if (req.method === 'HEAD') return res.end();
    createReadStream(file).pipe(res);
  } catch { return send(res, 404, { error:'Not found.' }); }
}

http.createServer((req,res)=>{handle(req,res).catch(()=>{if(!res.headersSent)send(res,500,{error:'Unexpected server error.'});else res.end()})}).listen(PORT, process.env.HOST || '127.0.0.1', () => {
  console.log(`Jochiss storefront available at ${SITE_URL}`);
  if (!SECRET) console.log('Checkout setup: add PAYSTACK_SECRET_KEY in .env before accepting payments.');
});
