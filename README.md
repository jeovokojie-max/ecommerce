# Jochiss Nig Global Enterprises storefront

## Pay-in-full checkout

The storefront uses Paystack's hosted checkout. The secret key stays on the server; the browser sends the cart and customer email, and the server recalculates every line from `assets/products.js` before creating a NGN payment. Prices are sent to Paystack in kobo. The return page verifies the transaction with Paystack before showing a successful payment confirmation.

### Set up locally

1. Create a Paystack merchant account and copy `.env.example` to `.env`.
2. Add your **test** secret key to `PAYSTACK_SECRET_KEY` in `.env`. Keep `.env` private; do not paste secret keys into the website files or chat.
3. Keep `SITE_URL=http://localhost:3000` for local development.
4. Run `npm start` from this folder and open `http://localhost:3000` in your browser. The `file://` preview does not have the server connection needed for checkout.
5. Use Paystack test credentials and test payment details while in test mode.
6. Before accepting real payments, complete your merchant verification, use the live secret key only in the host's server-side environment settings, deploy the server on HTTPS, set `HOST=0.0.0.0` if your hosting platform requires a public bind, and set `SITE_URL` to the public HTTPS site address.

Checkout intentionally blocks an order if any selected product or option does not have a specific price in the catalog. It does not guess delivery fees. The current checkout totals product prices only; add a delivery charge if you want shipping included in online payment.

Payment confirmation is checked server-side against Paystack's transaction verification response and the order reference. The current storefront does not yet save orders into a database or automate stock updates and fulfilment.
