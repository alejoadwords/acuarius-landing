// English version of fuente-seo/contenido/p-costos-whatsapp.mjs.
//
// Rates copied exactly from the Spanish original (official Meta rates,
// effective 01-10-2026, checked 02-11-2026). When the original's TARIFAS,
// CONSULTA or VIGENCIA change, update them here too.

const CONSULTA = 'November 2, 2026';
const VIGENCIA = 'October 1, 2026';

// mk = marketing, ut = utility, au = authentication, sv = service, in USD per
// delivered message. utT / auT = volume tiers [from, to, rate] (to null = no
// ceiling), per month, market and category.
const TARIFAS = {
  CO: { nombre: 'Colombia', mk: 0.0125, ut: 0.0008, au: 0.0008, sv: 0.0008,
    utT: [[0, 100000, 0.0008], [100001, 1000000, 0.0008], [1000001, 4500000, 0.0007], [4500001, 15000000, 0.0007], [15000001, 30000000, 0.0006], [30000001, null, 0.0006]],
    auT: [[0, 120000, 0.0008], [120001, 400000, 0.0008], [400001, 1000000, 0.0007], [1000001, 5000000, 0.0007], [5000001, 10000000, 0.0006], [10000001, null, 0.0006]] },
  MX: { nombre: 'Mexico', mk: 0.0397, ut: 0.0085, au: 0.0085, sv: 0.0085,
    utT: [[0, 1000000, 0.0085], [1000001, 5000000, 0.0081], [5000001, 10000000, 0.0077], [10000001, 20000000, 0.0072], [20000001, 40000000, 0.0068], [40000001, null, 0.0064]],
    auT: [[0, 250000, 0.0085], [250001, 1000000, 0.0081], [1000001, 3000000, 0.0077], [3000001, 5000000, 0.0072], [5000001, 10000000, 0.0068], [10000001, null, 0.0064]] },
  AR: { nombre: 'Argentina', mk: 0.0618, ut: 0.026, au: 0.026, sv: 0.026,
    utT: [[0, 100000, 0.026], [100001, 1000000, 0.0247], [1000001, 4500000, 0.0234], [4500001, 15000000, 0.0221], [15000001, 30000000, 0.0208], [30000001, null, 0.0195]],
    auT: [[0, 120000, 0.026], [120001, 400000, 0.0247], [400001, 1000000, 0.0234], [1000001, 5000000, 0.0221], [5000001, 10000000, 0.0208], [10000001, null, 0.0195]] },
  CL: { nombre: 'Chile', mk: 0.0889, ut: 0.02, au: 0.02, sv: 0.02,
    utT: [[0, 100000, 0.02], [100001, 1000000, 0.019], [1000001, 4500000, 0.018], [4500001, 15000000, 0.017], [15000001, 30000000, 0.016], [30000001, null, 0.015]],
    auT: [[0, 120000, 0.02], [120001, 400000, 0.019], [400001, 1000000, 0.018], [1000001, 5000000, 0.017], [5000001, 10000000, 0.016], [10000001, null, 0.015]] },
  PE: { nombre: 'Peru', mk: 0.0703, ut: 0.03, au: 0.03, sv: 0.03,
    utT: [[0, 100000, 0.03], [100001, 1000000, 0.0285], [1000001, 4500000, 0.027], [4500001, 15000000, 0.0255], [15000001, 30000000, 0.024], [30000001, null, 0.0225]],
    auT: [[0, 120000, 0.03], [120001, 400000, 0.0285], [400001, 1000000, 0.027], [1000001, 5000000, 0.0255], [5000001, 10000000, 0.024], [10000001, null, 0.0225]] },
  BR: { nombre: 'Brazil', mk: 0.0625, ut: 0.0068, au: 0.0068, sv: 0.0068,
    utT: [[0, 250000, 0.0068], [250001, 2000000, 0.0065], [2000001, 17000000, 0.0061], [17000001, 35000000, 0.0058], [35000001, 70000000, 0.0054], [70000001, null, 0.0051]],
    auT: [[0, 500000, 0.0068], [500001, 3000000, 0.0065], [3000001, 5250000, 0.0061], [5250001, 10000000, 0.0058], [10000001, 20000000, 0.0054], [20000001, null, 0.0051]] },
  ES: { nombre: 'Spain', mk: 0.0707, ut: 0.02, au: 0.02, sv: 0.02,
    utT: [[0, 100000, 0.02], [100001, 1000000, 0.019], [1000001, 4500000, 0.018], [4500001, 40000000, 0.017], [40000001, 80000000, 0.016], [80000001, null, 0.015]],
    auT: [[0, 300000, 0.02], [300001, 2000000, 0.019], [2000001, 10000000, 0.018], [10000001, 20000000, 0.017], [20000001, 40000000, 0.016], [40000001, null, 0.015]] },
  NAM: { nombre: 'United States and Canada', mk: 0.025, ut: 0.0034, au: 0.0034, sv: 0.0034,
    utT: [[0, 80000, 0.0034], [80001, 750000, 0.0032], [750001, 2250000, 0.0031], [2250001, 3000000, 0.0029], [3000001, 6000000, 0.0027], [6000001, null, 0.0026]],
    auT: [[0, 100000, 0.0034], [100001, 500000, 0.0032], [500001, 2000000, 0.0031], [2000001, 5000000, 0.0029], [5000001, 10000000, 0.0027], [10000001, null, 0.0026]] },
  LATAM: { nombre: 'Rest of Latin America', mk: 0.074, ut: 0.0113, au: 0.0113, sv: 0.0113,
    utT: [[0, 100000, 0.0113], [100001, 1000000, 0.0107], [1000001, 4500000, 0.0102], [4500001, 15000000, 0.0096], [15000001, 30000000, 0.009], [30000001, null, 0.0085]],
    auT: [[0, 120000, 0.0113], [120001, 400000, 0.0107], [400001, 1000000, 0.0102], [1000001, 5000000, 0.0096], [5000001, 10000000, 0.009], [10000001, null, 0.0085]] },
};
// The 15 markets Meta groups under "Rest of Latin America".
const RESTO_LATAM = 'Bolivia, Costa Rica, Ecuador, El Salvador, Guatemala, Haiti, Honduras, Jamaica, Nicaragua, Panama, Paraguay, Puerto Rico, the Dominican Republic, Uruguay and Venezuela';
const SERVICIO_GRATIS = 1000; // per WhatsApp number per month, does not roll over

const usd = (n) => n.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4 }) + ' USD';

// ── The calculator ──────────────────────────────────────────────────────────
// Same markup, classes, ids and logic as the Spanish version; only the visible
// strings change.
function calculadoraHTML() {
  const opciones = Object.entries(TARIFAS).map(([k, t]) => `<option value="${k}"${k === 'CO' ? ' selected' : ''}>${t.nombre}</option>`).join('');
  const campo = (id, label, valor, ayuda) => `<label>${label}<input id="${id}" type="number" min="0" step="1" inputmode="numeric" value="${valor}"><small>${ayuda}</small></label>`;
  return `
<div class="cw">
  <div class="cw-in">
    <label>Your customers’ country<select id="cw-pais">${opciones}</select><small>Meta charges based on the country code of the number receiving the message, not where your business is located.</small></label>
    ${campo('cw-mk', 'Marketing messages per month', 2000, 'Promotions, launches, cart reminders, reactivation.')}
    ${campo('cw-ut', 'Utility messages per month', 1500, 'Order or appointment confirmations, shipping updates, invoices. As of October 1, 2026 they are also charged inside the 24-hour window.')}
    ${campo('cw-au', 'Authentication messages per month', 0, 'One-time verification codes.')}
    ${campo('cw-sv', 'Service replies per month', 3000, 'Free-form messages (no template) that you or your agent send inside the 24-hour window.')}
    ${campo('cw-num', 'Connected WhatsApp numbers', 1, 'Each number includes 1,000 free service replies per month.')}
  </div>
  <div class="cw-out" aria-live="polite">
    <div class="cw-tag">Estimated monthly cost at Meta</div>
    <div class="cw-total" id="cw-total">—</div>
    <div class="cw-sub" id="cw-sub"></div>
    <ul class="cw-det">
      <li><span>Marketing</span><b id="cw-r-mk">—</b></li>
      <li><span>Utility</span><b id="cw-r-ut">—</b></li>
      <li><span>Authentication</span><b id="cw-r-au">—</b></li>
      <li><span>Service</span><b id="cw-r-sv">—</b></li>
    </ul>
    <p class="cw-gratis" id="cw-gratis"></p>
    <p class="cw-nota">This rate is charged by Meta, not Acuarius: you pay it in your own WhatsApp Business account. Official Meta rates in USD, effective ${VIGENCIA} and checked on ${CONSULTA}. Before taxes.</p>
  </div>
</div>
<p class="s-nota" id="cw-err" role="status"></p>
<style>
.cw{display:grid;grid-template-columns:minmax(0,1fr) 380px;margin-top:36px;border:1px solid var(--border);border-radius:var(--rlg);overflow:hidden;background:var(--white);text-align:left}
.cw-in{padding:32px;display:flex;flex-direction:column;gap:18px}
.cw-in label{display:flex;flex-direction:column;gap:7px;font-size:14px;font-weight:600;color:var(--text)}
.cw-in small{font-weight:400;color:var(--muted2);font-size:12.5px;line-height:1.5}
.cw-in select,.cw-in input{font:inherit;font-weight:500;padding:11px 14px;border:1.5px solid var(--border);border-radius:var(--r);background:var(--white);color:var(--text)}
.cw-in select:focus,.cw-in input:focus{outline:none;border-color:var(--blue)}
.cw-out{background:var(--blue);color:var(--white);padding:32px;display:flex;flex-direction:column}
.cw-tag{font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.75}
.cw-total{font-family:var(--font-body);font-size:34px;font-weight:800;line-height:1.15;margin-top:10px}
.cw-sub{font-size:14px;opacity:.8;margin-top:6px}
.cw-det{list-style:none;margin-top:22px;border-top:1px solid rgba(255,255,255,.2)}
.cw-det li{display:flex;justify-content:space-between;gap:12px;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.14);font-size:14px}
.cw-det span{opacity:.8}
.cw-gratis{font-size:13.5px;line-height:1.55;margin-top:16px}
.cw-nota{font-size:12.5px;line-height:1.55;opacity:.75;margin-top:14px}
@media(max-width:860px){.cw{grid-template-columns:1fr}.cw-in,.cw-out{padding:24px 20px}}
</style>
<script>
(function () {
  var T = ${JSON.stringify(TARIFAS)};
  var GRATIS = ${SERVICIO_GRATIS};
  var $ = function (id) { return document.getElementById(id); };
  function n(id) { var v = Math.floor(Number(String($(id).value).replace(/[^0-9]/g, ''))); return isFinite(v) && v > 0 ? v : 0; }
  function plata(x) { return '$' + x.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' USD'; }
  function miles(x) { return x.toLocaleString('en-US'); }
  // Tiers apply in brackets: each message pays the rate of the bracket it
  // falls in, as in the example in Meta's documentation.
  function porNiveles(cant, niveles, lista) {
    if (!niveles) return cant * lista;
    var total = 0;
    niveles.forEach(function (t) {
      var desde = t[0] === 0 ? 1 : t[0], hasta = t[1] === null ? Infinity : t[1];
      var c = Math.max(0, Math.min(cant, hasta) - desde + 1);
      total += c * t[2];
    });
    return total;
  }
  function pintar() {
    var t = T[$('cw-pais').value];
    var mk = n('cw-mk'), ut = n('cw-ut'), au = n('cw-au'), sv = n('cw-sv'), num = Math.max(1, n('cw-num'));
    var svGratis = Math.min(sv, GRATIS * num), svCobro = sv - svGratis;
    var c = { mk: mk * t.mk, ut: porNiveles(ut, t.utT, t.ut), au: porNiveles(au, t.auT, t.au), sv: svCobro * t.sv };
    var total = c.mk + c.ut + c.au + c.sv;
    $('cw-total').textContent = plata(total);
    var enviados = mk + ut + au + sv;
    $('cw-sub').textContent = enviados ? miles(enviados) + ' messages per month in ' + t.nombre : 'Enter how many messages you send';
    $('cw-r-mk').textContent = plata(c.mk);
    $('cw-r-ut').textContent = plata(c.ut);
    $('cw-r-au').textContent = plata(c.au);
    $('cw-r-sv').textContent = plata(c.sv);
    $('cw-gratis').textContent = 'Free: ' + miles(svGratis) + ' service replies (up to ' + miles(GRATIS * num) + ' per month with ' + num + (num === 1 ? ' number' : ' numbers') + ') and everything your customers send you. If the chat started from a click-to-WhatsApp ad, you don’t pay for templates during the free window either.';
    try { window.dataLayer = window.dataLayer || []; if (!pintar.usada && enviados) { pintar.usada = true; window.dataLayer.push({ event: 'herramienta_uso', herramienta: 'costos-whatsapp' }); } } catch (x) {}
  }
  try {
    ['cw-pais', 'cw-mk', 'cw-ut', 'cw-au', 'cw-sv', 'cw-num'].forEach(function (id) { $(id).addEventListener('input', pintar); });
    pintar.usada = true; pintar(); pintar.usada = false;
  } catch (e) {
    $('cw-err').textContent = 'The calculator couldn’t load in this browser. The rates by country are in the table below.';
  }
})();
</script>`;
}

const filasTabla = Object.values(TARIFAS).map((t) => [t.nombre, usd(t.mk), usd(t.ut), usd(t.au), usd(t.sv)]);

export const PAGINAS = {
  '/herramientas/costos-de-whatsapp/': {
    kw: 'whatsapp business api pricing',
    title: 'WhatsApp Business API Pricing 2026: Calculator | Acuarius',
    description: 'WhatsApp Business API pricing by country: calculate what Meta charges for your marketing, utility and authentication messages at the current official rate.',
    h1: 'WhatsApp Business API pricing: calculator by country',
    miga: 'WhatsApp pricing',
    badge: 'Free tool · no sign-up',
    sub: 'Pick your customers’ country and how many messages you send per month. You see what Meta would charge you for the WhatsApp Business API, by category and in total, at the current official rate.',
    secciones: [
      { tipo: 'html', label: 'Calculator', h2: 'Calculate what the WhatsApp API costs you', html: calculadoraHTML() },
      { tipo: 'texto', label: 'The short answer', h2: 'How much does the WhatsApp Business API cost?',
        parrafos: [
          `The WhatsApp Business API is charged per delivered message: Meta charges for each template you send, and the rate depends on the recipient’s country and the message category. At the rate effective ${VIGENCIA}, a marketing message costs <b>${usd(TARIFAS.CO.mk)} in Colombia</b> and <b>${usd(TARIFAS.MX.mk)} in Mexico</b>; a utility message, ${usd(TARIFAS.CO.ut)} and ${usd(TARIFAS.MX.ut)}.`,
          'What your customers send you isn’t charged. What you reply inside the conversation has a free allowance each month, and chats that start from a click-to-WhatsApp ad open a window in which you pay nothing.',
          'Meta charges that rate directly to your WhatsApp Business account, with the payment method you register there. Acuarius doesn’t charge it. What it costs to use Acuarius is on the <a href="/precios/">pricing</a> page.',
        ] },
      { tipo: 'texto', label: 'How Meta charges', h2: 'How does Meta charge for WhatsApp messages?',
        parrafos: [
          'Since July 1, 2025, Meta charges per delivered message instead of per 24-hour conversation. If a message isn’t delivered, it isn’t charged. If you send three templates to the same person on the same day, you pay for three.',
          'The price comes from two things. The first is the <b>market</b>: the country of the number receiving the message, based on its country code. A business in Bogotá messaging a customer with a Mexican number pays the Mexico rate. The second is the template’s <b>category</b>, which Meta reviews when approving it.',
          'There was a major change on October 1, 2026: utility templates sent inside the 24-hour window, which used to be free, are now charged, and service replies now have a free allowance of 1,000 per month per number; from reply 1,001 on, you pay. If your account has no payment method registered with Meta, only the replies within the free allowance are delivered.',
        ] },
      { tipo: 'tabla', label: 'Categories', h2: 'Message categories, with examples',
        cab: ['Category', 'What it’s for', 'Examples', 'Is it charged?'],
        filas: [
          ['Marketing', 'Promote, offer or reactivate.', 'A store’s seasonal promotion, a course launch, “It’s been three months since your last dental cleaning.”', 'Yes, always. No volume discount.'],
          ['Utility', 'Inform about something the customer requested or already bought.', 'An order confirmation, a doctor’s appointment reminder, a notice that your delivery is on its way, an invoice.', 'Yes, also inside the 24-hour window. Has a volume discount.'],
          ['Authentication', 'Verify identity with a code.', 'The 6-digit code to log into an app or confirm a payment.', 'Yes. Has a volume discount.'],
          ['Service', 'Reply inside the conversation, without a template.', 'Answering “Do you have parking?”, sending the location or the restaurant menu.', '1,000 free per month per number; after that, yes.'],
        ],
        nota: 'Meta reviews the category when approving each template, and charges follow the approved category: a template with a promotion is billed as marketing.' },
      { tipo: 'texto', label: 'The 24-hour window', h2: 'What is the WhatsApp 24-hour window?',
        parrafos: [
          'The 24-hour window is the period that opens every time a customer messages or calls you on WhatsApp: during those 24 hours you can reply with free-form messages, without a template. Each new message from the customer restarts the clock.',
          'Outside that window you can only write using templates approved by Meta, and each one is charged according to its category. That’s why a follow-up three days later, an appointment reminder for tomorrow or a promotion to past customers always goes through a template.',
          'There is a longer window: if the person messages you from a <a href="/novedades/anuncios-clic-a-whatsapp-meta-ads/">click-to-WhatsApp ad</a> and you reply in time, a free window of up to 7 days opens. While it’s open, Meta doesn’t charge for marketing, utility or authentication templates, or for service replies.',
        ] },
      { tipo: 'tabla', label: 'Rates by country', h2: `WhatsApp Business API rates by country (${VIGENCIA})`,
        cab: ['Market', 'Marketing', 'Utility', 'Authentication', 'Service (from reply 1,001)'],
        filas: filasTabla,
        nota: `Price in USD per delivered message, list rate before taxes. Source: official Meta rates (<a href="https://developers.facebook.com/docs/whatsapp/pricing" rel="noopener">WhatsApp Business Platform pricing documentation</a> and its official calculator), effective ${VIGENCIA}, checked on ${CONSULTA}. “Rest of Latin America” covers ${RESTO_LATAM}. Utility and authentication drop in tiers above a certain monthly volume; the calculator already applies them. Meta only changes rates on the first day of a quarter and gives one month’s notice.` },
      { tipo: 'tarjetas', label: 'Savings', h2: 'How to lower what you pay for WhatsApp',
        items: [
          { t: 'Reply inside the window', d: 'Replying in time saves you the template. If a customer writes at 7 p.m. and you reply the next day at 8 p.m., you already need a paid template. An <a href="/agente-ia/">AI agent</a> replies at night and keeps the conversation alive.' },
          { t: 'Drive chats with ads', d: 'Conversations that start from a click-to-WhatsApp ad open up to 7 days with no per-message cost. Use them to quote and book without paying for templates.' },
          { t: 'Segment your sends', d: 'A mass marketing send to your whole base is paid in full, whether people buy or not. Send to the people it makes sense for: by tag, field or product of interest. That’s how Acuarius <a href="/campanas/">campaigns</a> work.' },
          { t: 'Use the right category', d: 'An appointment reminder is utility, not marketing. If you mix in a promotion, Meta charges it as marketing, which in Colombia costs more than fifteen times what a utility message costs.' },
        ] },
      { tipo: 'texto', label: 'Example', h2: 'Example: an aesthetic clinic in Colombia',
        parrafos: [
          `A clinic in Medellín sends 2,000 promotions (marketing) and 1,500 appointment reminders (utility) per month, and answers 3,000 patient messages with a single number. At the Colombia rate it pays 2,000 × ${usd(TARIFAS.CO.mk)} = <b>25.00 USD</b> in marketing, 1,500 × ${usd(TARIFAS.CO.ut)} = <b>1.20 USD</b> in utility, and 2,000 replies above the free allowance × ${usd(TARIFAS.CO.sv)} = <b>1.60 USD</b> in service. Total: <b>27.80 USD per month</b>.`,
          `The same volume with patients in Mexico would cost 79.40 USD in marketing, 12.75 USD in utility and 17.00 USD in service: 109.15 USD. The difference between countries is large, and almost all the spend is in marketing. That’s the category most worth watching.`,
        ] },
      { tipo: 'texto', label: 'With Acuarius', h2: 'Templates, sends and replies from one place',
        parrafos: [
          'In Acuarius you connect your WhatsApp Business number through your own business’s Meta app, so message billing stays in your Meta account, under your name. Conversations arrive in a <a href="/crm/whatsapp/">shared WhatsApp inbox</a> where your team replies inside the 24-hour window.',
          'You use Meta-approved templates in <a href="/whatsapp/plantillas-y-difusion/">templates and broadcasts</a> and in <a href="/campanas/">segmented campaigns</a>, and the <a href="/agente-ia/">AI agent</a> replies while nobody is available, so fewer chats go cold and need to be picked back up with a paid template.',
        ] },
    ],
    faq: [
      { q: 'How much does a WhatsApp Business API message cost in Colombia?', a: `At the rate effective ${VIGENCIA}: ${usd(TARIFAS.CO.mk)} per marketing message, ${usd(TARIFAS.CO.ut)} per utility message, ${usd(TARIFAS.CO.au)} per authentication message and ${usd(TARIFAS.CO.sv)} per service reply after the 1,000 free ones each month.` },
      { q: 'And in Mexico?', a: `${usd(TARIFAS.MX.mk)} for marketing, ${usd(TARIFAS.MX.ut)} for utility, ${usd(TARIFAS.MX.au)} for authentication and ${usd(TARIFAS.MX.sv)} per service reply after the 1,000 free ones. The marketing rate in Mexico went up on October 1, 2026.` },
      { q: 'Does the regular WhatsApp Business app charge too?', a: 'No. The WhatsApp Business app you install on your phone is free. What’s charged per message is the API, which is the version for connecting WhatsApp to a CRM, an AI agent or several sales reps on the same number.' },
      { q: 'Is replying to a customer free?', a: 'What the customer sends you is never charged. Your free-form replies inside the 24-hour window are free up to 1,000 per month per number; from reply 1,001 on they’re charged at the service rate. If the chat came from a click-to-WhatsApp ad, you pay nothing during the free window of up to 7 days.' },
      { q: 'Who charges me: Meta or Acuarius?', a: 'Meta. The per-message rate is paid in your WhatsApp Business account with the payment method you register with Meta. Acuarius doesn’t charge per WhatsApp message; what it costs to use Acuarius is on the pricing page.' },
      { q: 'Do the prices include taxes?', a: 'No. They’re Meta’s list rates in USD. Meta also publishes rates in local currencies (COP, MXN, ARS, CLP, PEN, BRL, among others), and taxes depend on your country and your billing.' },
    ],
    cta: { h2: 'Make every message you pay for end in a sale', sub: 'With Acuarius, your WhatsApp chats land in your CRM, an AI agent replies in time and your campaigns go only to the people they make sense for. Start for free.' },
  },
};
