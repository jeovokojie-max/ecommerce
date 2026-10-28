const products=[
{id:1,name:'BUA Cement',category:'Cement',badge:'BUA',image:'bua cement.jpg',price:12200},
{id:2,name:'Dangote Cement',category:'Cement',badge:'Dangote',image:'dangote cement.jpg',price:12200},
{id:3,name:'Mangal Cement',category:'Cement',badge:'Mangal',image:'mangal cement.jpg',price:12200},
{id:4,name:'Reinforcement Rods',category:'Steel & Building',badge:'Quarter rod · 6mm–25mm',image:'Rods.jpg',priceLabel:'From ₦2,200',sizes:[{label:'Quarter rod — Long',price:3000},{label:'Quarter rod — Medium',price:2500},{label:'Quarter rod — Short',price:2200},{label:'6mm — Longest',price:null},{label:'6mm — Long',price:null},{label:'6mm — Short',price:null},{label:'8mm Normal rod',price:3700},{label:'8mm Standard rod',price:5300},{label:'10mm Normal rod',price:7300},{label:'10mm Standard rod',price:8300},{label:'10mm TMT',price:8400},{label:'12mm Normal rod',price:8400},{label:'12mm Standard rod',price:9400},{label:'12mm Aba Standard',price:12000},{label:'12mm Lagos Standard',price:12500},{label:'12mm Mak TMT',price:11500},{label:'12mm Mak Standard',price:9500},{label:'16mm Normal rod',price:14700},{label:'16mm Standard rod',price:16500},{label:'16mm TMT Standard',price:21500},{label:'20mm TMT',price:34000},{label:'25mm TMT',price:52000}]},
{id:5,name:'Binding Wire',category:'Steel & Building',badge:'Building essentials',image:'binding wire.jpg'},
{id:6,name:'Square & Round Steel',category:'Steel & Building',badge:'Steel sections',image:'square.jpg'},
{id:7,name:'Niger Pipe',category:'Plumbing',badge:'Pipe',image:'niger pipe.jpg'},
{id:8,name:'Normal Pipe',category:'Plumbing',badge:'Pipe',image:'normal pipe.jpg'},
{id:9,name:'Pressure Pipe',category:'Plumbing',badge:'Pipe',image:'pressure pipe.jpg'},
{id:10,name:'Plumbing Pipes',category:'Plumbing',badge:'Multiple sizes',image:'plumbing pipes.jpg'},
{id:11,name:'Yellow Line Pipe',category:'Plumbing',badge:'Pipe',image:'yellow line pipe.jpg'},
{id:12,name:'GP Water Tanks',category:'Bathroom & Tanks',badge:'450–1,500 litres',image:'gp tanks.jpg',priceLabel:'From ₦165,000',sizes:[{label:'450 Litres',price:165000},{label:'500 Litres',price:205000},{label:'750 Litres',price:235000},{label:'850 Litres',price:275000},{label:'1,000 Litres',price:290000},{label:'1,200 Litres',price:340000},{label:'1,500 Litres',price:422000}]},
{id:13,name:'Bath',category:'Bathroom & Tanks',badge:'Bathroom',image:'bath.jpg'},
{id:14,name:'White WC',category:'Bathroom & Tanks',badge:'Sanitary ware',image:'wc White.jpg'},
{id:15,name:'Water Closet',category:'Bathroom & Tanks',badge:'Sanitary ware',image:'WC.jpg'},
{id:16,name:'Basin Tap',category:'Bathroom & Tanks',badge:'Tap',image:'basin tap.jpg'},
{id:17,name:'Long Neck Tap',category:'Bathroom & Tanks',badge:'Tap',image:'long neck tap.jpg'},
{id:18,name:'PVC Tap',category:'Plumbing',badge:'Tap',image:'pvc tap.jpg'},
{id:19,name:'Tuk Tap',category:'Plumbing',badge:'Tap',image:'tuk tap.jpg'},
{id:20,name:'Tuk Stop Cock',category:'Plumbing',badge:'Stop cock',image:'tuk-Stop-Cock.jpg'},
{id:21,name:'Complete Mixer',category:'Bathroom & Tanks',badge:'Mixer',image:'complete mixer.jpg'},
{id:22,name:'Venus Shower Pole',category:'Bathroom & Tanks',badge:'Shower',image:'venus shower pole.jpg'},
{id:23,name:'Anus Wash Spray',category:'Bathroom & Tanks',badge:'Bathroom fitting',image:'anus wash.jpg'},
{id:24,name:'Adapter',category:'Plumbing',badge:'Pipe fitting',image:'adapter.jpg'},
{id:25,name:'Adapter Set',category:'Plumbing',badge:'Pipe fittings',image:'adapter summo.jpg'},
{id:26,name:'Ash Elbow',category:'Plumbing',badge:'Pipe fitting',image:'Ash elbow.jpg'},
{id:27,name:'Blue Pan Connector',category:'Plumbing',badge:'WC fitting',image:'blue pan connector.jpg'},
{id:28,name:'Bottle Trap',category:'Plumbing',badge:'Waste fitting',image:'bottle trap.jpg'},
{id:29,name:'Cap Plug',category:'Plumbing',badge:'Pipe fitting',image:'cap plug.webp'},
{id:30,name:'Capplug Blade',category:'Plumbing',badge:'Pipe fitting',image:'capplug blade.jpg'},
{id:31,name:'Cross Angle Valve',category:'Plumbing',badge:'Valve',image:'cross angle valve.jpg'},
{id:32,name:'Cross Tee',category:'Plumbing',badge:'Pipe fitting',image:'cross-tee.jpg'},
{id:33,name:'Digger Fitting',category:'Plumbing',badge:'Fitting',image:'digger.jpg'},
{id:34,name:'Floor Drain',category:'Plumbing',badge:'Drainage',image:'floor drain.jpg'},
{id:35,name:'Flushing Rubber Set',category:'Plumbing',badge:'WC fitting',image:'flushing rubber.jpg'},
{id:36,name:'Funnel Waste Fitting',category:'Plumbing',badge:'Waste fitting',image:'Funnel.jpg'},
{id:37,name:'Hose',category:'Plumbing',badge:'Hose',image:'hose.jpg'},
{id:38,name:'Magic Waste',category:'Plumbing',badge:'Waste fitting',image:'magic waste.jpg'},
{id:39,name:'Black Nylon Flexible Pipe',category:'Plumbing',badge:'Flexible pipe',image:'black nylon big.jpg'},
{id:40,name:'Plug Cap Set',category:'Plumbing',badge:'Pipe fitting',image:'plug cap.jpg'},
{id:41,name:'Reducer',category:'Plumbing',badge:'Pipe fitting',image:'reducer.jpg'},
{id:42,name:'Socket',category:'Plumbing',badge:'Pipe fitting',image:'Socket.jpg'},
{id:43,name:'Threaded Socket',category:'Plumbing',badge:'Pipe fitting',image:'threaded socket.jpg'},
{id:44,name:'Vent Fittings',category:'Plumbing',badge:'Drainage fittings',image:'vent ordinary.jpg'},
{id:45,name:'Vent Tiger',category:'Plumbing',badge:'Vent fitting',image:'vent-tiger.webp'},
{id:46,name:'Y Tee',category:'Plumbing',badge:'Pipe fitting',image:'Y-tee.jpg'},
{id:47,name:'PVC Cement & Sealants',category:'Plumbing',badge:'Adhesives',image:'smallest gum.jpg'},
{id:48,name:'GUM',category:'Plumbing',badge:'Gum & PVC adhesive',image:'abro gum.jpg',priceLabel:'From ₦2,000',sizes:[{label:'Topcat smallest gum',price:2500},{label:'Abro biggest gum',price:18000},{label:'Abro smallest gum',price:3500},{label:'Abro small gum',price:5500},{label:'VISA smallest gum',price:2000},{label:'VISA biggest gum',price:13000},{label:'VISA small gum',price:3500},{label:'Zuma smallest gum',price:2000},{label:'Esy smallest gum',price:25000},{label:'Abro Medium gum',price:8000},{label:'Dony small gum',price:2000}]},
{id:49,name:'Putty',category:'Plumbing',badge:'Sealant',image:'putty.jpg'},
{id:50,name:'Tapes & Thread Seal',category:'Plumbing',badge:'Sealing tapes',image:'tapes.jpg'},
{id:51,name:'Flash Band',category:'Building & Finishing',badge:'Waterproofing',image:'flash band.jpg'},
{id:52,name:'Citizen Paint',category:'Building & Finishing',badge:'Paint',image:'citizen paint.jpg'},
{id:53,name:'Paint Roller',category:'Tools',badge:'Painting tool',image:'paint roller.jpg'},
{id:54,name:'Nails',category:'Steel & Building',badge:'Fasteners',image:'nail.jpeg'},
{id:55,name:'Concrete Nails',category:'Steel & Building',badge:'Fasteners',image:'concrete nail.jpg'},
{id:56,name:'Nail Dip',category:'Steel & Building',badge:'Fasteners',image:'nail dip.jpeg'},
{id:57,name:'Nail Bag',category:'Tools',badge:'₦35,000',image:'nail bag-35000.jpg',price:35000},
{id:58,name:'Net Roll',category:'Steel & Building',badge:'Netting',image:'net roll.jpg'},
{id:59,name:'Black Nylon Sheet',category:'Building & Finishing',badge:'Nylon',image:'black nylon big.jpg'},
{id:60,name:'Measuring Tape',category:'Tools',badge:'Measuring tool',image:'Measuring-tape.jpg'},
{id:61,name:'Hammer',category:'Tools',badge:'Hand tool',image:'hummer.jpg'},
{id:62,name:'Saw',category:'Tools',badge:'Hand tool',image:'saw.jpg'},
{id:63,name:'Shovel',category:'Tools',badge:'Hand tool',image:'Shovel.jpg'},
{id:64,name:'Trowel',category:'Tools',badge:'Hand tool',image:'trowel.jpg'},
{id:65,name:'Cutlass',category:'Tools',badge:'Hand tool',image:'cutlass.jpg'},
{id:66,name:'Bore Gauge',category:'Tools',badge:'Measuring tool',image:'bore guage.jpg'},
{id:67,name:'Welder Glass',category:'Tools',badge:'Workshop tool',image:'welder glass.jpg'}
];

// Keep the five main shop categories in sync with the requested catalogue.
const plumbingNames = new Set([
  'Niger Pipe','Normal Pipe','Pressure Pipe','Plumbing Pipes','Yellow Line Pipe','PVC Tap','Tuk Tap','Tuk Stop Cock','Venus Shower Pole',
  'Adapter','Adapter Set','Ash Elbow','Blue Pan Connector','Bottle Trap','Cap Plug','Capplug Blade','Cross Angle Valve','Cross Tee',
  'Floor Drain','Flushing Rubber Set','Funnel Waste Fitting','Hose','Magic Waste','Black Nylon Flexible Pipe','Plug Cap Set','Reducer',
  'Socket','Threaded Socket','Vent Fittings','Vent Tiger','Y Tee','PVC Cement & Sealants','GUM','Putty','Tapes & Thread Seal','Concrete Nails'
]);
products.forEach(p => {
  p.category = p.id <= 3 ? 'Cement' : p.id === 4 ? 'Rod' : p.id === 12 ? 'Tanks' : plumbingNames.has(p.name) ? 'Plumbing' : 'Tools';
});
function updateProduct(id, changes) { Object.assign(products.find(p => p.id === id), changes); }
function addProduct(name, category, image, variants, price, badge) {
  const prices = (variants || []).map(v => v.price).filter(v => Number.isFinite(v));
  const entry = { id: Math.max(...products.map(p => p.id)) + 1, name, category, badge: badge || name, image: image || null };
  if (variants) entry.sizes = variants.map(v => ({label:v.label,price:v.price ?? null}));
  if (Number.isFinite(price)) entry.price = price;
  if (prices.length) entry.priceLabel = 'From ₦' + Math.min(...prices).toLocaleString('en-NG');
  products.push(entry);
  return entry;
}
const v = (label, price) => ({label, price: price ?? null});

// Plumbing stock and current prices supplied by Jochiss.
updateProduct(7,{sizes:[v('4"(110mm)',6200),v('3"(75mm)',3000),v('3/4"(25mm)',6200),v('1"(32mm)',6200),v('1/2"(20mm)',4000),v('1 1/2"(50mm)',4000)]});
addProduct('Pressure Niger Pipe','Plumbing','niger pipe.jpg',[v('1 1/2"(50mm)',7000)]);
updateProduct(8,{sizes:[v('4"(110mm)',3000),v('3"(75mm)',2500),v('3/4"(25mm)',2500),v('1"(32mm)',2500),v('1/2"(20mm)',2500),v('1 1/2"(50mm)',2500)]});
addProduct('Pressure Normal Pipe','Plumbing','normal pipe.jpg',[v('1 1/2"(50mm)',9000)]);
updateProduct(11,{sizes:[v('4"(110mm)',3000),v('3"(75mm)',3500),v('3/4"(25mm)',3000),v('1"(32mm)',3000),v('1 1/2"(50mm)',3500)]});
addProduct('Yellow Tap','Plumbing','pvc tap.jpg',[v('1/2"(20mm)',1000)]);
updateProduct(9,{sizes:[v('4"(110mm)',9000)]});
addProduct('Blue Pipe','Plumbing','plumbing pipes.jpg',[v('6"(160mm)',7000),v('4"(110mm)',5500),v('3"(75mm)',3500)]);
addProduct('Elbow White','Plumbing','vent ordinary.jpg',[v('4"(110mm)',1000),v('6"(160mm)',3000),v('3"(75mm)',600),v('3/4"(25mm)',400),v('1"(32mm)',500),v('1/2"(20mm)',300),v('1 1/2"(50mm)',400),v('1 1/4"(40mm)',600)]);
updateProduct(26,{name:'Elbow Ash',sizes:[v('4"(110mm)',600),v('6"(160mm)',2000),v('3"(75mm)',400),v('3/4"(25mm)',300),v('1"(32mm)',400),v('1/2"(20mm)',200),v('1 1/2"(50mm)',300)]});
addProduct('By 1" Elbow','Plumbing','vent ordinary.jpg',[v('1 1/4"(40mm)',700)]);
addProduct('Elbow','Plumbing','vent ordinary.jpg',[v('1 1/4"(40mm)',600),v('2"(63mm)',2000)]);
updateProduct(45,{name:'Vent Tiger',sizes:[v('4"(110mm)',700),v('3"(75mm)',500),v('1 1/2"(50mm)',500)]});
updateProduct(44,{name:'Vent Ordinary',sizes:[v('4"(110mm)',400)]});
addProduct('Nail Clip','Plumbing','concrete nail.jpg',[v('4"(110mm)',500),v('3"(75mm)',300),v('3/4"(25mm)',300),v('1"(32mm)',300),v('1 1/2"(50mm)',500)]);
addProduct('By 2" Tee','Plumbing','cross-tee.jpg',[v('4"(110mm)',1200),v('6"(160mm)',600),v('3"(75mm)',400)]);
addProduct('Tee Pressure','Plumbing','cross-tee.jpg',[v('1 1/4"(40mm)',1200)]);
addProduct('Tee Waste','Plumbing','vent ordinary.jpg',[v('1 1/4"(40mm)',700)]);
updateProduct(30,{name:'By 2" Cap Plug Blade',sizes:[v('4"(110mm)',1000)]});
addProduct('3 Way Tee','Plumbing','cross-tee.jpg',[v('4"(110mm)',2000)]);
addProduct('By 45" Elbow','Plumbing','vent ordinary.jpg',[v('4"(110mm)',1500),v('3"(75mm)',700)]);
updateProduct(46,{name:'By Y Tee',sizes:[v('4"(110mm)',2000),v('3"(75mm)',800)]});
updateProduct(32,{name:'Cross Tee White',sizes:[v('4"(110mm)',2000)]});
addProduct('Tee White','Plumbing','vent ordinary.jpg',[v('4"(110mm)',1500),v('6"(160mm)',5500),v('3"(75mm)',700),v('3/4"(25mm)',400),v('1"(32mm)',500),v('1/2"(20mm)',300),v('1 1/2"(50mm)',500),v('1 1/4"(40mm)',500)]);
addProduct('Tee Ash','Plumbing','cross-tee.jpg',[v('4"(110mm)',700),v('6"(160mm)',2500),v('3"(75mm)',500),v('3/4"(25mm)',300),v('1"(32mm)',400),v('1/2"(20mm)',200),v('1 1/2"(50mm)',400)]);
updateProduct(55,{name:'Concrete Nail',category:'Plumbing',sizes:[v('4"(110mm)',1500),v('1"(32mm)',800)]});
addProduct('By 2" Socket','Plumbing','Socket.jpg',[v('4"(110mm)',1500),v('3"(75mm)',600)]);
addProduct('By 3" Socket','Plumbing','Socket.jpg',[v('4"(110mm)',1200)]);
addProduct('By 1" Socket','Plumbing','Socket.jpg',[v('1 1/4"(40mm)',600)]);
addProduct('By 1 1/2" Socket','Plumbing','Socket.jpg',[v('2"(63mm)',2000)]);
addProduct('Plugcap Blade Waste','Plumbing','capplug blade.jpg',[v('4"(110mm)',500),v('6"(160mm)',1000),v('3"(75mm)',500),v('3/4"(25mm)',300),v('1"(32mm)',300),v('1 1/2"(50mm)',200),v('1 1/4"(40mm)',400)]);
addProduct('Ash Pipe','Plumbing','Ash elbow.jpg',[v('6"(160mm)',7000)]);
updateProduct(19,{sizes:[v('3/4"(25mm)',8000),v('1/2"(20mm)',5000)]});
updateProduct(20,{name:'Tuk Stop Cork',sizes:[v('3/4"(25mm)',8000),v('1/2"(20mm)',5000)]});
addProduct('Venus Tap Blue Head','Plumbing','tuk tap.jpg',[v('3/4"(25mm)',3500),v('1/2"(20mm)',2500)]);
addProduct('Boreguage Blue Head','Plumbing','tuk tap.jpg',[v('3/4"(25mm)',700),v('1/2"(20mm)',600),v('1 1/2"(50mm)',2500),v('2"(63mm)',3500)]);
addProduct('Boreguage White Head','Plumbing','basin tap.jpg',[v('3/4"(25mm)',800),v('1"(32mm)',1000),v('1/2"(20mm)',500)]);
addProduct('Boreguage Red Head','Plumbing','pvc tap.jpg',[v('1 1/4"(40mm)',2000),v('2"(63mm)',3000)]);
addProduct('Mlf Socket','Plumbing','Socket.jpg',[v('3/4"(25mm)',300),v('1"(32mm)',800),v('1 1/2"(50mm)',600),v('1 1/4"(40mm)',600),v('2"(63mm)',2000)]);
addProduct('Ordinary Magic Waste','Plumbing','magic waste.jpg',[v('1/2"(20mm)',1000),v('1 1/4"(40mm)',1000)]);
updateProduct(38,{name:'Magic Waste',sizes:[v('1 1/2"(50mm)',1500)]});
addProduct('Curly Waste','Plumbing','magic waste.jpg',[v('1 1/4"(40mm)',500)]);
addProduct('Backnut Ash','Plumbing','Ash elbow.jpg',[v('1 1/4"(40mm)',1500),v('2"(63mm)',3000)]);
addProduct('Capplug Pressure','Plumbing','cap plug.webp',[v('1 1/4"(40mm)',500)]);
addProduct('By 2" Reducer','Plumbing','reducer.jpg',[v('1 1/4"(40mm)',700)]);
updateProduct(24,{sizes:[v('3/4"(25mm)',300),v('1"(32mm)',400),v('1/2"(20mm)',200),v('1 1/2"(50mm)',500),v('1 1/4"(40mm)',400),v('2"(63mm)',2000)]});
addProduct('White Adapter','Plumbing','adapter.jpg',[v('1 1/4"(40mm)',700)]);
addProduct('By 1/2 Elbow Ash','Plumbing','Ash elbow.jpg',[v('3/4"(25mm)',300)]);
updateProduct(18,{name:'PVC Tap',sizes:[v('3/4"(25mm)',700),v('1/2"(20mm)',600)]});
addProduct('PPR Tap','Plumbing','pvc tap.jpg',[v('3/4"(25mm)',1000),v('1/2"(20mm)',1000)]);
addProduct('Plain Socket','Plumbing','Socket.jpg',[v('3/4"(25mm)',300),v('1"(32mm)',300),v('1/2"(20mm)',200),v('1 1/2"(50mm)',600),v('1 1/4"(40mm)',600),v('2"(63mm)',2000)]);
addProduct('China Tap White Iron','Plumbing','basin tap.jpg',[v('3/4"(25mm)',1200),v('1/2"(20mm)',1500)]);
addProduct('By 1/2 Reducer','Plumbing','reducer.jpg',[v('3/4"(25mm)',300),v('1 1/4"(40mm)',600)]);
addProduct('By 1/2 Tee Ash','Plumbing','cross-tee.jpg',[v('3/4"(25mm)',300)]);
addProduct('Mlf Elbow','Plumbing','Ash elbow.jpg',[v('3/4"(25mm)',300),v('1"(32mm)',400),v('1/2"(20mm)',200)]);
addProduct('By 1/2 Mlf Elbow','Plumbing','Ash elbow.jpg',[v('3/4"(25mm)',300)]);
addProduct('By 1/2 Mlf Socket','Plumbing','Socket.jpg',[v('3/4"(25mm)',300),v('1"(32mm)',800)]);
addProduct('By Threaded Socket','Plumbing','threaded socket.jpg',[v('3/4"(25mm)',300)]);
updateProduct(37,{sizes:[v('3/4"(25mm)',24000),v('1"(32mm)',30000)]});
updateProduct(22,{name:'Venus Shower Pole',sizes:[v('3/4"(25mm)',4000),v('1/2"(20mm)',4000)]});
addProduct('Galvanizer Pipe','Plumbing','niger pipe.jpg',[v('3/4"(25mm)',5000),v('1/2"(20mm)',4500)]);
addProduct('BS 10/10 Stop Cork','Plumbing','tuk-Stop-Cock.jpg',[v('3/4"(25mm)',1500),v('1/2"(20mm)',1500)]);
addProduct('Lesso Tap','Plumbing','pvc tap.jpg',[v('3/4"(25mm)',600),v('1/2"(20mm)',600)]);
addProduct('Angle Valve','Plumbing','cross angle valve.jpg',[v('3/4"(25mm)',800),v('1/2"(20mm)',600)]);
addProduct('Union Ash','Plumbing','Ash elbow.jpg',[v('1"(32mm)',600)]);
addProduct('Union','Plumbing','adapter summo.jpg',[v('3/4"(25mm)',300),v('1/2"(20mm)',500),v('1 1/2"(50mm)',2500),v('1 1/4"(40mm)',1500),v('2"(63mm)',3000)]);

// Tools, fittings and sanitary goods entered under the requested Tools category.
updateProduct(5,{price:35000}); updateProduct(16,{name:'Basin Tap Short Iron Heavy Gauge',price:3000});
updateProduct(13,{price:35000}); updateProduct(17,{name:'Long Neck Tap Ordinary',price:4000}); updateProduct(21,{name:'Bath Mixer',price:18000});
updateProduct(23,{name:'Anus Wash',price:5000}); updateProduct(27,{price:4500}); updateProduct(31,{price:1000});
updateProduct(36,{name:'Funnel',sizes:[v('Biggest Funnel',6000),v('Medium Funnel',4000),v('Small Funnel',3500),v('Smallest Funnel',3000)]});
updateProduct(51,{category:'Tools'}); updateProduct(54,{category:'Tools'}); updateProduct(56,{category:'Tools'});
updateProduct(57,{category:'Tools',price:35000}); updateProduct(58,{category:'Tools',price:1500});
updateProduct(59,{category:'Tools',name:'Black Nylon',sizes:[v('Big',40000),v('Small',20000)]});
updateProduct(60,{sizes:[v('12 fit',1500),v('16 fit',2000),v('25 fit',2500)]});
updateProduct(63,{name:'Original Shovel',price:7000}); updateProduct(64,{name:'Trowel'}); updateProduct(65,{price:3500});
updateProduct(67,{price:1500});
addProduct('Water Filter','Tools','bore guage.jpg',null,9000);
addProduct('Cobra PVC Tap','Tools','pvc tap.jpg',null,3500);
addProduct('Basin Tap Long (PVC)','Tools','long neck tap.jpg',null,3500);
addProduct('Silicon Gum Abro (2000)','Tools','abro gum.jpg',null,5500);
addProduct('Original Flushing Handle Blue','Tools','flushing rubber.jpg',null,2500);
addProduct('Original Flushing Handle Red','Tools','flushing rubber.jpg',null,2000);
addProduct('Cone Rubber','Tools','flushing rubber.jpg',null,500);
addProduct('Small PVC Shower Rose','Tools','venus shower pole.jpg',null,500);
addProduct('Original Block Industrial Shovel','Tools','Shovel.jpg',null,7000);
addProduct('Black Stone Ordinary Shovel','Tools','Shovel.jpg',null,6000);
addProduct('Block Industry Ordinary Shovel','Tools','Shovel.jpg',null,6500);
addProduct('Digger','Tools','digger.jpg',null,6000);
addProduct('Big Square','Tools','square.jpg',null,1500);
addProduct('Small Square','Tools','square.jpg',null,1000);
addProduct('Head Pan','Tools',null,null,7000);
addProduct('Cutting Stone','Tools',null,null,1500);
addProduct('100 Meter Tape','Tools','Measuring-tape.jpg',null,1000);
addProduct('50 Meter Tape','Tools','Measuring-tape.jpg',null,500);
addProduct('Carpenter Saw','Tools','saw.jpg',null,1500);
addProduct('Yama Original','Tools','saw.jpg'); addProduct('G.man Saw Blade','Tools','saw.jpg');
addProduct('30 Meter Tape Rubber','Tools','Measuring-tape.jpg'); addProduct('30 Meter Tape Fiber','Tools','Measuring-tape.jpg'); addProduct('50 Meter Tape Fiber','Tools','Measuring-tape.jpg');
addProduct('Filling Stone','Tools',null,null,2000);
addProduct('Shining Trowel','Tools','trowel.jpg',null,2000);
addProduct('Trowel','Tools','trowel.jpg',[v('Size 10',2000),v('Size 9',2000)]);
addProduct('Original Fill','Tools','trowel.jpg',null,2500);
addProduct('Small Carpenter Hammer','Tools','hummer.jpg'); addProduct('Big Carpenter Hammer','Tools','hummer.jpg');
addProduct('Punch Original','Tools',null); addProduct('Wall Bracket','Tools',null);
addProduct('Handle Key','Tools',null); addProduct('Big Ordinary Handle Key','Tools',null);
addProduct('Medium Handle Key','Tools',null,null,12000);
addProduct('Alarm Key','Tools',null,null,6000);
addProduct('Water Heater','Tools',null,null,77000);
addProduct('Twy Ford WC','Tools','wc White.jpg',null,40000);
addProduct('Close Couple WC','Tools','wc White.jpg'); addProduct('Pedestral','Tools','wc White.jpg',null,10000);
addProduct('Washing Hand Basin Big','Tools','wc White.jpg',null,13000);
addProduct('WC Squard','Tools','wc White.jpg',null,15000);
addProduct('Unilary Vesie','Tools',null,null,15000);
addProduct('Washing Hand Basin Medium','Tools','wc White.jpg',null,10000);
addProduct('Kitchen Sink Lay','Tools',null,null,40000);
addProduct('Golden Stop Cork Original','Tools','tuk-Stop-Cock.jpg');
addProduct('Ordinary Flexible Connector','Tools','hose.jpg',null,700);
addProduct('Bromix Angle Valve','Tools','cross angle valve.jpg',null,1200);
addProduct('Venus Thread Tape','Tools','tapes.jpg',[v('Small',300),v('Big',500)]);
addProduct('Choice Thread Tape Big','Tools','tapes.jpg',null,700);
addProduct('Choice Angle Valve','Tools','cross angle valve.jpg',null,2500);
addProduct('Venus Angle Valve','Tools','cross angle valve.jpg',null,2000);
addProduct('Ordinary Thread Tape','Tools','tapes.jpg',[v('Big',280),v('Small',200)]);
addProduct('Candle Filter','Tools',null,[v('White',1500),v('Black',1200)]);
addProduct('Floor Master Flush','Tools','floor drain.jpg',[v('Top flush',7000),v('Size flush',8000)]);
addProduct('Bore Valve','Tools','cross angle valve.jpg',null,2500);
addProduct('Small Shower Rose Iron','Tools','venus shower pole.jpg',null,1000);
addProduct('Stainless Shower Rose','Tools','venus shower pole.jpg',null,3500);
addProduct('Mercedes Shower Rose','Tools','venus shower pole.jpg',null,1500);
addProduct('Putty','Tools','putty.jpg',[v('Big',700),v('Small',500)]);
addProduct('Telephone Shower','Tools','venus shower pole.jpg',null,3500);
addProduct('Choice Pan Connector','Tools','blue pan connector.jpg',null,5500);
addProduct('Venus Pan Connector','Tools','blue pan connector.jpg',null,3500);
addProduct('Shower Mixer Heavy Gauge','Tools','complete mixer.jpg');
addProduct('Choice Basin Mixer','Tools','complete mixer.jpg');
addProduct('Basin Tap Short','Tools','basin tap.jpg',null,2500);
addProduct('Smallest Kitchen Sink','Tools',null,null,9000);
addProduct('Small Kitchen Sink','Tools',null,null,10000);
addProduct('Troy Ford Side Flush','Tools','wc White.jpg',null,40000);
addProduct('Golden Diamond WC','Tools','wc White.jpg'); addProduct('Toilet Cover','Tools','wc White.jpg');
addProduct('Smallest Washing Hand Basin','Tools','wc White.jpg',null,7000);
addProduct('Wheel Biro Bolt','Tools',null,null,500);
addProduct('Big Shower Rose PVC','Tools','pvc tap.jpg',null,600);
addProduct('Flushing Rubber','Tools','flushing rubber.jpg',null,500);
addProduct('Sitter Curly WC','Tools','WC.jpg',null,30000);
addProduct('WC Ninto Complete Set','Tools','wc White.jpg',null,51000);
addProduct('Complete Mixer Promax','Tools','complete mixer.jpg',null,33000);
addProduct('Lesso Basin Tap','Tools','basin tap.jpg',null,1300);
addProduct('Big Basin Tap','Tools','basin tap.jpg',null,2500);
addProduct('D/D Sink Short','Tools',null,null,35000);
addProduct('Black Flexible Iron','Tools','hose.jpg',null,1500);
addProduct('Mixer Flexible','Tools','hose.jpg',null,2500);
