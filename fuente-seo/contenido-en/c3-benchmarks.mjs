// Versión en inglés del Cluster 3 · Benchmarks LatAm (par de contenido/c3-benchmarks.mjs).
//
// Las cifras salen de los mismos datos que la versión en español
// (datos/planificador-2026-10.json y datos/keywords.mjs), con los mismos
// cálculos: aquí solo cambian los textos y el formato de número (en-US).
// Las keywords de la tabla se dejan en español: son las búsquedas reales.

import { readFileSync } from 'node:fs';

const DATOS = JSON.parse(readFileSync(new URL('../datos/planificador-2026-10.json', import.meta.url), 'utf8'));
const { INDUSTRIAS } = await import('../datos/keywords.mjs');

// Nombre de cada industria en inglés: [como título, dentro de una frase].
const NOMBRES = {
  inmobiliario: ['Real estate', 'real estate'],
  salud: ['Health and aesthetics', 'health and aesthetics'],
  legal: ['Lawyers and legal services', 'lawyers and legal services'],
  educacion: ['Education', 'education'],
  seguros: ['Insurance', 'insurance'],
  finanzas: ['Loans and finance', 'loans and finance'],
  software: ['B2B software', 'B2B software'],
  turismo: ['Travel and hotels', 'travel and hotels'],
  automotriz: ['Automotive', 'automotive'],
  hogar: ['Home services', 'home services'],
};

const FECHA = 'October 19, 2026';
const COP_USD = DATOS.cambio.COP_por_USD;
const COP_MXN = DATOS.cambio.COP_por_USD / DATOS.cambio.MXN_por_USD;
const L = 'en-US';

// ── Cálculos (idénticos al original) ────────────────────────────────────────
const mediana = (xs) => { const s = [...xs].sort((a, b) => a - b); const m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
function resumen(id, pais) {
  const filas = DATOS.datos[`${id}.${pais}`];
  const con = filas.filter((f) => f.alto > 0);
  return { id, nombre: NOMBRES[id][0], frase: NOMBRES[id][1], bajo: mediana(con.map((f) => f.bajo)), alto: mediana(con.map((f) => f.alto)),
    vol: filas.reduce((s, f) => s + f.busquedas, 0), n: con.length, total: filas.length, filas };
}
const tabla = (pais) => Object.keys(INDUSTRIAS).map((id) => resumen(id, pais)).sort((a, b) => b.alto - a.alto);

const nCO = (v) => Math.round(v / 10) * 10;
const fCOP = (cop) => '$' + nCO(cop).toLocaleString(L) + ' COP';
const fMXN = (cop) => '$' + (cop / COP_MXN).toLocaleString(L, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' MXN';
const fUSD = (cop) => (cop / COP_USD).toLocaleString(L, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' USD';
const fVol = (v) => v.toLocaleString(L);
const local = (pais) => (pais === 'co' ? fCOP : fMXN);
const rango = (pais, r) => `${local(pais)(r.bajo)} – ${local(pais)(r.alto)}`;
const rangoUSD = (r) => `${fUSD(r.bajo).replace(' USD', '')} – ${fUSD(r.alto)}`;

const CO = tabla('co');
const MX = tabla('mx');
const enCO = (id) => CO.find((r) => r.id === id);
const enMX = (id) => MX.find((r) => r.id === id);

// ── Piezas comunes ──────────────────────────────────────────────────────────
const METODO = {
  tipo: 'texto', label: 'Methodology', h2: 'Where this data comes from',
  parrafos: [
    `We queried <b>Google Keyword Planner</b> through the Google Ads API on ${FECHA}: ${Object.keys(INDUSTRIAS).length} industries, 8 commercial searches per industry and country, Spanish language, Google Search Network. That is ${Object.keys(DATOS.datos).length * 8} keywords in total.`,
    'For each keyword, Google gives two <b>top-of-page bid</b> figures: the low one (what the cheapest 20% of advertisers paid to show at the top) and the high one (80%). It is not exactly the CPC you will pay, which depends on your Quality Score and that day\'s competition, but it is the best public reference available and anyone can replicate it.',
    'For each industry we show the median of those bids, so one very expensive or very cheap keyword does not skew the result. Dollar figures use the same day\'s exchange rate: ' + COP_USD.toLocaleString(L, { maximumFractionDigits: 0 }) + ' COP and ' + DATOS.cambio.MXN_por_USD.toLocaleString(L, { maximumFractionDigits: 2 }) + ' MXN per dollar.',
  ],
};
const usoLibre = 'You can cite this data by linking to this page.';

const filaKw = (pais) => (f) => [f.kw, fVol(f.busquedas), f.alto > 0 ? local(pais)(f.bajo) : '—', f.alto > 0 ? local(pais)(f.alto) : '—'];
const tablaKeywords = (pais) => ({
  tipo: 'tabla', label: 'All keywords', h2: `The ${(pais === 'co' ? CO : MX).length * 8} searches we checked, one by one`,
  cab: ['Keyword (Spanish)', 'Monthly searches', 'Low bid', 'High bid'],
  filas: (pais === 'co' ? CO : MX).flatMap((r) => [[`<b>${r.nombre}</b>`, '', '', ''], ...[...r.filas].sort((a, b) => b.busquedas - a.busquedas).map(filaKw(pais))]),
  nota: 'Keywords are shown exactly as people search for them, in Spanish. "—": Google does not publish a bid for that search (this happens with several health searches). ' + usoLibre,
});

function dataset(pais, url) {
  const nombre = pais === 'co' ? 'Colombia' : 'Mexico';
  return { '@type': 'Dataset', name: `Google Ads CPC in ${nombre} by industry (October 2026)`,
    description: `Top-of-page bids and monthly searches for 80 commercial keywords in ${nombre}, across 10 industries, from Google Keyword Planner.`,
    url: 'https://acuarius.app' + url, creator: { '@type': 'Organization', name: 'Acuarius', url: 'https://acuarius.app/' },
    datePublished: DATOS.fecha, spatialCoverage: nombre, inLanguage: 'es',
    measurementTechnique: 'Google Ads API · KeywordPlanIdeaService.GenerateKeywordHistoricalMetrics' };
}

function paginaCPC(pais) {
  const T = pais === 'co' ? CO : MX;
  const nombre = pais === 'co' ? 'Colombia' : 'Mexico';
  const url = pais === 'co' ? '/benchmarks/cpc-google-ads-colombia/' : '/benchmarks/cpc-google-ads-mexico/';
  const caro = T[0], barato = T[T.length - 1], inm = T.find((r) => r.id === 'inmobiliario');
  const medGlobal = { bajo: mediana(T.map((r) => r.bajo)), alto: mediana(T.map((r) => r.alto)) };
  return {
    badge: `Google Keyword Planner data · ${FECHA}`,
    sub: `What a click costs on Google Ads in ${nombre}, industry by industry, with our own data pulled from Google Keyword Planner. Figures in ${pais === 'co' ? 'Colombian pesos' : 'Mexican pesos'} and in dollars.`,
    jsonld: [dataset(pais, url)],
    secciones: [
      { tipo: 'texto', label: 'The short answer', h2: `What a click costs on Google Ads in ${nombre}`,
        parrafos: [
          `In ${nombre}, the median across the ten industries we measured runs from <b>${local(pais)(medGlobal.bajo)} to ${local(pais)(medGlobal.alto)} per click</b> (${fUSD(medGlobal.bajo).replace(' USD', '')} to ${fUSD(medGlobal.alto)}) to show at the top of the results.`,
          `But the average tells you little: the most expensive industry, <b>${caro.frase}</b>, reaches ${local(pais)(caro.alto)} on the high bid, while <b>${barato.frase}</b> stays at ${local(pais)(barato.alto)}. What you pay depends mostly on how much a customer is worth in your industry.`,
        ] },
      { tipo: 'tabla', label: 'By industry', h2: `Google Ads CPC in ${nombre} by industry`,
        cab: ['Industry', `Bid range (${pais === 'co' ? 'COP' : 'MXN'})`, 'In dollars', 'Monthly searches*'],
        filas: T.map((r) => [r.nombre, rango(pais, r), rangoUSD(r), fVol(r.vol)]),
        nota: '* Sum of the average monthly searches for the 8 keywords in each industry. Sorted from most to least expensive by high bid. ' + usoLibre },
      { tipo: 'tarjetas', label: 'What the data says', h2: 'Three takeaways from the table',
        items: [
          { t: `${caro.nombre}: the most expensive`, d: `Searches in ${caro.frase} have the highest top bid: ${local(pais)(caro.alto)}. A customer is worth a lot, and many advertisers compete for them.` },
          { t: 'A cheap click is not a cheap lead', d: `In real estate a click costs ${rango(pais, inm)}, among the lowest in the table. But a visit is not a buyer: what matters is how many clicks end in a conversation. <a href="/benchmarks/costo-por-lead-inmobiliario/">See real estate cost per lead</a>.` },
          { t: 'Health has incomplete data', d: `Google does not publish a bid for several health searches (medical specialties and surgeries). In ${nombre} only ${T.find((r) => r.id === 'salud').n} of the 8 had a figure, so that row is the least reliable.` },
        ] },
      { tipo: 'texto', label: 'Budget', h2: 'How much budget do I need to start?',
        parrafos: [
          'CPC is only half the math. To know how much to spend each month you need three numbers: how many customers you want, what percentage of clicks become a contact, and what percentage of contacts end up buying.',
          `Example with ${inm.frase}: if you want 5 sales a month, you close 1 in 20 contacts, and 1 in 25 clicks messages you, you need ${fVol(2500)} clicks. At the low bid (${local(pais)(inm.bajo)}) that is ${local(pais)(2500 * inm.bajo)} a month; at the high bid (${local(pais)(inm.alto)}), ${local(pais)(2500 * inm.alto)}.`,
          'Run it with your own numbers in the <a href="/calculadora-presupuesto-google-ads/">Google Ads budget calculator</a>.',
        ] },
      METODO,
      tablaKeywords(pais),
    ],
    faq: [
      { q: `What is the average Google Ads CPC in ${nombre}?`, a: `Based on our Google Keyword Planner query (${FECHA}), the median across ten industries runs from ${local(pais)(medGlobal.bajo)} to ${local(pais)(medGlobal.alto)} per click to show at the top, though it varies a lot by industry.` },
      { q: `What is the most expensive industry on Google Ads in ${nombre}?`, a: `In our measurement, ${caro.frase}, with a high bid of ${local(pais)(caro.alto)} per click.` },
      { q: 'Is the Keyword Planner CPC what I will pay?', a: 'Not exactly. It is the range other advertisers paid to show at the top of the page. Your actual CPC depends on your Quality Score, your bid and the competition in each auction, and it usually lands within or below that range.' },
      { q: 'How often is this data updated?', a: 'We query it again periodically; the date of the query is always shown at the top of the page.' },
    ],
    cta: { h2: 'See which clicks turn into sales', sub: 'Acuarius saves the source campaign of every lead and tells you what each sale cost you. Try it free for 14 days.' },
  };
}

// ── Meta Ads Colombia (fuentes públicas) ────────────────────────────────────
const M = {
  superCPM: '<a href="https://www.superads.ai/facebook-ads-costs/cpm-cost-per-mille/colombia" rel="nofollow noopener" target="_blank">Superads</a>',
  superCPC: '<a href="https://www.superads.ai/facebook-ads-costs/cpc-cost-per-click/colombia" rel="nofollow noopener" target="_blank">Superads</a>',
  superCPL: '<a href="https://www.superads.ai/facebook-ads-costs/cost-per-lead/colombia" rel="nofollow noopener" target="_blank">Superads</a>',
  lebesgue: '<a href="https://lebesgue.io/facebook-ads/facebook-cpm-by-country" rel="nofollow noopener" target="_blank">Lebesgue</a>',
  stackmatix: '<a href="https://www.stackmatix.com/blog/facebook-ads-cpm-by-country-2026" rel="nofollow noopener" target="_blank">Stackmatix</a>',
  adamigo: '<a href="https://www.adamigo.ai/blog/meta-ads-cpm-cpc-benchmarks-by-country-2026" rel="nofollow noopener" target="_blank">AdAmigo</a>',
  adkit: '<a href="https://adkit.so/benchmarks" rel="nofollow noopener" target="_blank">AdKit</a>',
  wsMeta: '<a href="https://www.wordstream.com/blog/facebook-ads-benchmarks-2025" rel="nofollow noopener" target="_blank">WordStream/LocaliQ</a>',
  liqRE: '<a href="https://localiq.com/blog/real-estate-search-advertising-benchmarks/" rel="nofollow noopener" target="_blank">LocaliQ</a>',
};
const cop = (usd) => '$' + nCO(usd * COP_USD).toLocaleString(L) + ' COP';

export const PAGINAS = {
  '/benchmarks/': {
    kw: 'latam digital marketing benchmarks',
    title: 'LatAm Digital Marketing Benchmarks 2026',
    description: 'LatAm digital marketing benchmarks: CPC, CPM, CTR and cost per lead by industry and country, with the source and date of every figure. Updated for 2026.',
    h1: 'LatAm digital marketing benchmarks: 2026 data',
    miga: 'Benchmarks',
    badge: `Updated ${FECHA}`,
    sub: 'What a click, a thousand impressions and a lead cost in Colombia and Mexico, by industry. With our own Google Keyword Planner data and cited public sources, every figure dated.',
    secciones: [
      { tipo: 'texto', label: 'Why this page exists', h2: 'Digital marketing benchmarks built for Latin America',
        parrafos: [
          'Almost every digital advertising benchmark out there is from the United States. They do little to help you set a budget in Bogotá or Monterrey: a real estate click costs several dollars there and cents here.',
          'That is why we gathered Latin American data here: we pulled the Google Ads figures ourselves from Keyword Planner, and we took the Meta figures from public sources we cite one by one. When something is our own estimate, we say so.',
        ] },
      { tipo: 'tabla', label: 'Google Ads', h2: 'Google Ads CPC by industry: Colombia and Mexico',
        cab: ['Industry', 'Colombia (USD)', 'Mexico (USD)'],
        filas: CO.map((r) => [r.nombre, rangoUSD(r), rangoUSD(enMX(r.id))]),
        nota: `Top-of-page bid range (median of 8 keywords per industry), Google Keyword Planner, ${FECHA}. Local currency details: <a href="/benchmarks/cpc-google-ads-colombia/">Colombia</a> and <a href="/benchmarks/cpc-google-ads-mexico/">Mexico</a>.` },
      { tipo: 'tarjetas', label: 'Explore', h2: 'The benchmarks in detail',
        items: [
          { t: 'Google Ads CPC in Colombia', d: `A median of ${fCOP(mediana(CO.map((r) => r.bajo)))} to ${fCOP(mediana(CO.map((r) => r.alto)))} per click. <a href="/benchmarks/cpc-google-ads-colombia/">See by industry</a>.` },
          { t: 'Google Ads CPC in Mexico', d: `A median of ${fMXN(mediana(MX.map((r) => r.bajo)))} to ${fMXN(mediana(MX.map((r) => r.alto)))} per click. <a href="/benchmarks/cpc-google-ads-mexico/">See by industry</a>.` },
          { t: 'Facebook advertising cost in Colombia', d: 'Meta Ads CPM, CPC and cost per lead according to four public sources. <a href="/benchmarks/costo-meta-ads-colombia/">See Meta costs</a>.' },
          { t: 'Real estate cost per lead', d: 'U.S. benchmarks and our estimate for Colombia and Mexico. <a href="/benchmarks/costo-por-lead-inmobiliario/">See cost per lead</a>.' },
          { t: 'Budget calculator', d: 'How much to invest in Google Ads based on your target customers and your industry. <a href="/calculadora-presupuesto-google-ads/">Use the calculator</a>.' },
        ] },
      METODO,
    ],
    faq: [
      { q: 'What is a digital marketing benchmark?', a: 'It is a reference figure (CPC, CPM, conversion rate, cost per lead) that tells you whether your campaign results are in a normal range for your industry and your country.' },
      { q: 'Can I use this data in my own content?', a: 'Yes, as long as you cite the source with a link to this page.' },
      { q: 'Why are CPCs in Latin America so different from the United States?', a: 'Because the price of a click comes from an auction: it depends on how much a customer is worth to advertisers in that country and how many of them compete. In Latin America both numbers tend to be lower.' },
    ],
    cta: { h2: 'From benchmarks to your own numbers', sub: 'With Acuarius you see what each sale costs you, not just each click. Try it free for 14 days.' },
  },

  '/benchmarks/cpc-google-ads-colombia/': {
    kw: 'google ads cpc colombia',
    title: 'Google Ads CPC in Colombia 2026 by Industry',
    description: 'What Google Ads CPC looks like in Colombia in 2026, industry by industry, and how much monthly budget you need to get your first leads.',
    h1: 'Google Ads CPC in Colombia: what a click costs in 2026',
    miga: 'Google Ads CPC Colombia',
    ...paginaCPC('co'),
  },
  '/benchmarks/cpc-google-ads-mexico/': {
    kw: 'google ads cpc mexico',
    title: 'Google Ads CPC in Mexico 2026 by Industry',
    description: 'What Google Ads CPC looks like in Mexico in 2026, industry by industry, and how much to invest each month for a campaign to start getting results.',
    h1: 'Google Ads CPC in Mexico: what a click costs',
    miga: 'Google Ads CPC Mexico',
    ...paginaCPC('mx'),
  },

  '/benchmarks/costo-meta-ads-colombia/': {
    kw: 'facebook ads cost colombia',
    title: 'Facebook Ads Cost in Colombia (2026)',
    description: 'Facebook ads cost in Colombia: Meta Ads CPM, cost per click and cost per lead on Facebook and Instagram by industry, with 2026 data.',
    h1: 'Facebook ads cost in Colombia: what you pay in 2026',
    miga: 'Meta Ads cost in Colombia',
    badge: 'Public sources · October 2026',
    sub: 'What it costs to advertise on Facebook and Instagram in Colombia: CPM, cost per click and cost per lead, comparing what four different sources publish. With figures converted to Colombian pesos.',
    secciones: [
      { tipo: 'texto', label: 'The short answer', h2: 'How much Facebook advertising costs in Colombia',
        parrafos: [
          `According to the most recent public sources, showing an ad a thousand times on Facebook or Instagram in Colombia (<b>CPM</b>) costs between <b>1.60 and 4.00 USD</b>, or between ${cop(1.6)} and ${cop(4)}. A <b>click</b> runs about 0.22 to 0.42 USD (${cop(0.22)} to ${cop(0.42)}).`,
          'It is one of the cheapest audiences in the world for Meta: the same sources put the global average several times higher. But the figures shift a lot from month to month and from source to source, so treat them as a range, not a fixed price.',
        ] },
      { tipo: 'tabla', label: 'CPM', h2: 'Meta Ads CPM in Colombia by source',
        cab: ['Source', 'CPM in Colombia', 'In pesos', 'What it measures'],
        filas: [
          [M.superCPM, '~3.20 USD (13-month average)', cop(3.2), 'Over 3 billion USD in spend from thousands of accounts; monthly peaks from 1.70 to 13.06 USD'],
          [M.lebesgue, '2.00 USD', cop(2), 'Online stores, 2026'],
          [M.stackmatix, '1.60 – 3.80 USD', `${cop(1.6)} – ${cop(3.8)}`, 'Average range, 2026'],
          [M.adamigo, '4.00 USD (range 3.30 – 5.00)', cop(4), 'Projection for 2026'],
        ],
        nota: `Sources checked on ${FECHA}. As a global reference, ${M.adkit} reports a median Meta CPM of 9.31 USD in September 2026. Pesos at ${COP_USD.toLocaleString(L, { maximumFractionDigits: 0 })} COP per dollar.` },
      { tipo: 'tabla', label: 'Click and lead', h2: 'Meta Ads cost per click and per lead in Colombia',
        cab: ['Metric', 'Colombia', 'In pesos', 'Source'],
        filas: [
          ['Cost per click (median)', '~0.22 USD', cop(0.22), M.superCPC],
          ['Cost per click (average)', '0.42 USD', cop(0.42), M.adamigo],
          ['Cost per lead, all industries', '~3.73 USD', cop(3.73), M.superCPL],
        ],
        nota: 'Cost per lead varies enormously by industry and by month: in some sectors the same source shows averages inflated by one-off spikes. For real estate, see <a href="/benchmarks/costo-por-lead-inmobiliario/">real estate cost per lead</a>.' },
      { tipo: 'tarjetas', label: 'What drives it', h2: 'What makes your Facebook advertising cost more or less',
        items: [
          { t: 'The campaign objective', d: 'A reach campaign pays for cheap impressions; a leads or sales campaign pays more per thousand, because Meta shows it to the people most likely to act.' },
          { t: 'The season', d: 'November and December drive everything up because of e-commerce competition. The sources also show sharp jumps in specific months.' },
          { t: 'The audience', d: 'Small or tightly targeted audiences cost more per impression. A broad audience with a good creative usually comes out cheaper.' },
          { t: 'Facebook or Instagram', d: 'Instagram usually costs 20% to 40% more per thousand impressions than Facebook in the same country, according to one of the sources.' },
          { t: 'The creative', d: 'An ad people watch and share gets a better ranking and pays less. It is the cheapest lever you have.' },
          { t: 'What happens after the click', d: 'A cheap lead nobody follows up with is the most expensive one. Replying fast changes your cost per sale more than lowering your CPM.' },
        ] },
      { tipo: 'texto', label: 'Example', h2: 'How much should I invest to start?',
        parrafos: [
          `With a 3 USD CPM (${cop(3)}), a budget of ${cop(100)} a month (100 USD) buys you about 33,000 impressions. At a 4 USD cost per lead, that would be about 25 contacts a month: too few to draw conclusions, but enough to test messages.`,
          'The practical advice: start with a budget that gets the campaign at least 50 conversions a month, so Meta\'s algorithm can learn, and track how many of those contacts turn into sales.',
        ] },
    ],
    faq: [
      { q: 'How much does Facebook advertising cost in Colombia?', a: `According to 2026 public sources, between 1.60 and 4.00 USD per thousand impressions (${cop(1.6)} to ${cop(4)}) and about 0.22 to 0.42 USD per click. It depends on the objective, the season and the audience.` },
      { q: 'What is the minimum budget for Meta Ads in Colombia?', a: 'Meta allows campaigns with very low daily budgets, but for the algorithm to learn, the campaign should get at least about 50 conversions a month.' },
      { q: 'Is Instagram or Facebook cheaper?', a: 'Usually Facebook. One of the sources estimates Instagram costs 20% to 40% more per thousand impressions in the same country.' },
      { q: 'Why do the sources give different figures?', a: 'Because they measure different accounts, industries and periods. That is why we show all of them with their links and prefer a range over a single figure.' },
    ],
    cta: { h2: 'Follow up on every Meta lead on time', sub: 'Acuarius receives the leads from your campaigns and replies on WhatsApp in seconds. Try it free for 14 days.' },
  },

  '/benchmarks/costo-por-lead-inmobiliario/': (() => {
    const co = enCO('inmobiliario'), mx = enMX('inmobiliario');
    const CVR = 0.037; // LocaliQ 2026, inmobiliario en búsqueda (EE. UU.)
    return {
      kw: 'real estate cost per lead',
      title: 'Real Estate Cost per Lead in LatAm: 2026 Data',
      description: 'What a good real estate cost per lead looks like on Google and Meta, how many of those leads turn into showings, and how to lower cost without losing quality.',
      h1: 'Real estate cost per lead: what you should pay in 2026',
      miga: 'Real estate cost per lead',
      badge: 'Benchmarks and estimate · October 2026',
      sub: 'What a real estate lead costs on Google and Meta: the most cited U.S. benchmarks and our estimate for Colombia and Mexico based on the actual CPC in each country.',
      secciones: [
        { tipo: 'texto', label: 'The short answer', h2: 'How much a real estate lead costs',
          parrafos: [
            `In the United States, the most used benchmark (LocaliQ/WordStream) puts the <b>real estate cost per lead at 102.51 USD on Google</b> and <b>16.61 USD on Meta</b>. In Latin America it is far lower: with the CPC we measured in Google Keyword Planner and the same conversion rate, a search lead in Colombia would come out between <b>${fCOP(co.bajo / CVR)} and ${fCOP(co.alto / CVR)}</b>.`,
            'There is no serious public study of real estate cost per lead for Colombia or Mexico. So here we separate measured data from estimates, and we explain how to calculate yours.',
          ] },
        { tipo: 'tabla', label: 'U.S. benchmarks', h2: 'Real estate cost per lead: the reference figures',
          cab: ['Channel', 'Cost per lead', 'Conversion rate', 'Source and sample'],
          filas: [
            ['Google (search)', '102.51 USD', '3.70%', `${M.liqRE}: about 900 real estate campaigns in the U.S., April 2025 – March 2026`],
            ['Google · brokers', '162.39 USD', '—', M.liqRE + ', same sample'],
            ['Meta (lead campaigns)', '16.61 USD', '9.53%', `${M.wsMeta}: 726 campaigns in the U.S., April 2024 – June 2025`],
          ],
          nota: `Figures checked on ${FECHA} in publications that cite those studies. They are from the United States: use them to understand the ratio between channels, not as a local price.` },
        { tipo: 'tabla', label: 'LatAm estimate', h2: 'Estimated real estate cost per lead in Colombia and Mexico',
          cab: ['Country', 'Measured real estate CPC', 'Estimated cost per lead (Google)', 'In dollars'],
          filas: [
            ['Colombia', rango('co', co), `${fCOP(co.bajo / CVR)} – ${fCOP(co.alto / CVR)}`, `${fUSD(co.bajo / CVR).replace(' USD', '')} – ${fUSD(co.alto / CVR)}`],
            ['Mexico', rango('mx', mx), `${fMXN(mx.bajo / CVR)} – ${fMXN(mx.alto / CVR)}`, `${fUSD(mx.bajo / CVR).replace(' USD', '')} – ${fUSD(mx.alto / CVR)}`],
          ],
          nota: `<b>This is an estimate, not a measurement.</b> CPC: median of 8 real estate searches in Google Keyword Planner (${FECHA}). Conversion rate: 3.70%, LocaliQ's figure for U.S. real estate. Your actual rate may be very different. <a href="/benchmarks/cpc-google-ads-colombia/">See Colombia CPC</a>.` },
        { tipo: 'texto', label: 'What matters', h2: 'Cost per lead is misleading: track cost per showing',
          parrafos: [
            'In real estate, a cheap lead can be very expensive. A 4 USD Meta form lead who never picks up the phone costs more than a 15 USD Google lead who books a showing. That is why the real estate agencies that invest best track three things: cost per lead, <b>cost per showing</b> and <b>cost per sale</b>.',
            'The difference is almost always in what happens after the click: whoever replies in the first few minutes qualifies more leads and books more showings with the same budget. A <a href="/crm/inmobiliarias/">real estate CRM</a> that replies instantly and saves the source campaign of every lead lets you track all three.',
          ] },
        { tipo: 'pasos', label: 'Calculate yours', h2: 'How to calculate your own real estate cost per lead',
          items: [
            { t: 'Add up the spend', d: 'What you spent on a campaign over a period, excluding agency fees.' },
            { t: 'Count the real leads', d: 'Contacts with a name and phone number, without duplicates or spam.' },
            { t: 'Divide', d: 'Spend divided by leads. That is your cost per lead.' },
            { t: 'Follow it to the showing', d: 'Repeat the division with showings and with sales. That is the number that decides where to invest.' },
          ] },
      ],
      faq: [
        { q: 'What is a good real estate cost per lead?', a: 'It depends on the country, the channel and the type of property. As a reference, in the U.S. LocaliQ reports 102.51 USD on Google and 16.61 USD on Meta. In Colombia and Mexico, with local CPC, a search lead should cost a fraction of that.' },
        { q: 'Is a real estate lead cheaper on Meta or on Google?', a: 'It is usually cheaper on Meta, but with lower intent: the person was not looking for a property. On Google the lead costs more and is usually further along in their decision.' },
        { q: 'How much should a real estate agency spend on ads?', a: 'Work backward: how many sales you want, how many showings you need per sale and how many leads per showing. Multiply by your cost per lead. The <a href="/calculadora-presupuesto-google-ads/">budget calculator</a> helps you with Google Ads.' },
      ],
      cta: { h2: 'Turn more leads into showings', sub: 'The Acuarius real estate CRM replies instantly and tells you what each showing cost you. Try it free for 14 days.' },
    };
  })(),

  '/calculadora-presupuesto-google-ads/': {
    kw: 'google ads budget calculator',
    title: 'Free Google Ads Budget Calculator',
    description: 'Google Ads budget calculator: enter your industry, your country and how many customers you want each month, and see how much to invest based on real CPC.',
    h1: 'Google Ads budget calculator',
    miga: 'Budget calculator',
    badge: `Real CPC from Google Keyword Planner · ${FECHA}`,
    sub: 'Pick your country and your industry, say how many customers you want each month, and the calculator tells you how much to invest in Google Ads, using the real CPC in your market.',
    secciones: [
      { tipo: 'html', label: 'Calculator', h2: 'Calculate your Google Ads budget', html: calculadoraHTML() },
      { tipo: 'texto', label: 'How it works', h2: 'How the budget is calculated',
        parrafos: [
          'The calculator works backward. It starts from the customers you want and divides them by your close rate to find how many contacts you need. Then it divides those contacts by your page\'s conversion rate to find how many clicks. And it multiplies the clicks by your industry\'s CPC.',
          `The CPC comes from our Google Keyword Planner query on ${FECHA}: the median low and high bid across 8 commercial searches per industry. That is why the result is a range: what you would pay competing at the cheap end or the expensive end of the auction.`,
          'The default rates are a reasonable starting point. If you already run campaigns, enter your own: the result will be much more accurate. <a href="/benchmarks/cpc-google-ads-colombia/">See CPC for Colombia</a> or <a href="/benchmarks/cpc-google-ads-mexico/">for Mexico</a>.',
        ] },
      { tipo: 'tarjetas', label: 'Tips', h2: 'Before you invest',
        items: [
          { t: 'Start with what you can measure', d: 'A small, well-tracked budget teaches you more than a large one with no tracking. The bare minimum: knowing which campaign brought in each contact.' },
          { t: 'Your close rate is yours', d: 'It is the number that moves the result the most, and only you know it. Replying fast to every contact is the cheapest way to raise it.' },
          { t: 'Let the campaign learn', d: 'The first two to four weeks are usually more expensive. Do not judge the campaign by its first few days.' },
        ] },
    ],
    faq: [
      { q: 'How much should I invest in Google Ads?', a: 'It depends on how many customers you want, your conversion rate and your industry\'s CPC. The calculator on this page does the math with real CPC data from Colombia and Mexico.' },
      { q: 'What is the minimum budget for Google Ads?', a: 'Google does not require a minimum, but with very few clicks a day the campaign takes a long time to learn. Budget at least enough to get a few contacts a week.' },
      { q: 'What conversion rate should I enter?', a: 'If you do not have your own data, the calculator uses 5% of clicks becoming a contact and 10% of contacts buying. As a reference, LocaliQ reports 3.70% for real estate in the U.S.' },
      { q: 'Does the result include agency fees?', a: 'No. It is only your Google Ads spend.' },
    ],
    cta: { h2: 'See whether your budget is selling', sub: 'Acuarius connects each lead to the campaign that brought it in and to the sale. Try it free for 14 days.' },
  },
};

// ── Calculadora (HTML + script en línea) ─────────────────────────────────────
function calculadoraHTML() {
  // Solo viaja al navegador la mediana por industria y país, en COP.
  const datos = {};
  for (const id of Object.keys(INDUSTRIAS)) {
    datos[id] = { nombre: NOMBRES[id][0], co: [enCO(id).bajo, enCO(id).alto], mx: [enMX(id).bajo, enMX(id).alto] };
  }
  const opciones = Object.entries(datos).map(([id, d]) => `<option value="${id}"${id === 'inmobiliario' ? ' selected' : ''}>${d.nombre}</option>`).join('');
  return `
<div class="calc-seo">
  <div class="calc-seo-in">
    <label>Country<select id="cs-pais"><option value="co">Colombia</option><option value="mx">Mexico</option></select></label>
    <label>Industry<select id="cs-ind">${opciones}</select></label>
    <label>Customers you want per month<input id="cs-cli" type="number" min="1" max="10000" value="10"></label>
    <label>Out of 100 clicks, how many message you?<input id="cs-conv" type="number" min="0.1" max="100" step="0.1" value="5"><small>Conversion rate, in %</small></label>
    <label>Out of 100 contacts, how many buy?<input id="cs-cierre" type="number" min="0.1" max="100" step="0.1" value="10"><small>Close rate, in %</small></label>
  </div>
  <div class="calc-seo-out" aria-live="polite">
    <div class="calc-seo-tag">Estimated monthly spend</div>
    <div class="calc-seo-total" id="cs-total">—</div>
    <div class="calc-seo-usd" id="cs-usd"></div>
    <ul class="calc-seo-det">
      <li><span>Contacts needed</span><b id="cs-leads">—</b></li>
      <li><span>Clicks needed</span><b id="cs-clics">—</b></li>
      <li><span>Your industry's CPC</span><b id="cs-cpc">—</b></li>
      <li><span>Per day</span><b id="cs-dia">—</b></li>
    </ul>
    <a href="https://app.acuarius.app/registro" class="btn-primary" style="background:white;color:var(--blue);margin-top:18px;justify-content:center">See what each sale costs you</a>
  </div>
</div>
<style>
.calc-seo{display:grid;grid-template-columns:1fr 360px;margin-top:36px;border:1px solid var(--border);border-radius:var(--rlg);overflow:hidden;background:var(--white);box-shadow:0 12px 40px rgba(10,10,18,.06)}
.calc-seo-in{padding:32px;display:flex;flex-direction:column;gap:18px}
.calc-seo-in label{display:flex;flex-direction:column;gap:7px;font-size:14px;font-weight:600;color:var(--text)}
.calc-seo-in small{font-weight:400;color:var(--muted2);font-size:12px}
.calc-seo-in select,.calc-seo-in input{font:inherit;font-weight:500;padding:11px 14px;border:1.5px solid var(--border);border-radius:var(--r);background:var(--white);color:var(--text)}
.calc-seo-in select:focus,.calc-seo-in input:focus{outline:none;border-color:var(--blue)}
.calc-seo-out{background:linear-gradient(160deg,#0F1699 0%,var(--blue) 55%,#3A46D8 100%);color:white;padding:32px;display:flex;flex-direction:column}
.calc-seo-tag{font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.7}
.calc-seo-total{font-family:var(--font-body);font-size:30px;font-weight:800;line-height:1.15;margin-top:10px}
.calc-seo-usd{font-size:14px;opacity:.75;margin-top:6px}
.calc-seo-det{list-style:none;margin-top:22px;border-top:1px solid rgba(255,255,255,.2)}
.calc-seo-det li{display:flex;justify-content:space-between;gap:12px;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.12);font-size:14px}
.calc-seo-det span{opacity:.75}
@media(max-width:860px){.calc-seo{grid-template-columns:1fr}.calc-seo-in,.calc-seo-out{padding:24px 20px}}
</style>
<script>
(function () {
  var D = ${JSON.stringify(datos)};
  var COP_USD = ${COP_USD}, COP_MXN = ${COP_MXN};
  var $ = function (id) { return document.getElementById(id); };
  function dinero(cop, pais) {
    if (pais === 'co') return '$' + (Math.round(cop / 1000) * 1000).toLocaleString('en-US') + ' COP';
    return '$' + Math.round(cop / COP_MXN).toLocaleString('en-US') + ' MXN';
  }
  function cpc(cop, pais) {
    return pais === 'co' ? '$' + (Math.round(cop / 10) * 10).toLocaleString('en-US') : '$' + (cop / COP_MXN).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  function num(id) { var v = parseFloat(String($(id).value).replace(',', '.')); return isFinite(v) && v > 0 ? v : null; }
  function pintar() {
    var pais = $('cs-pais').value, d = D[$('cs-ind').value];
    var cli = num('cs-cli'), conv = num('cs-conv'), cierre = num('cs-cierre');
    // Un dato vacío o en cero no da un resultado engañoso: se dice qué falta.
    if (!cli || !conv || !cierre || conv > 100 || cierre > 100) {
      $('cs-total').textContent = 'Check your numbers';
      $('cs-usd').textContent = 'All three numbers must be greater than zero, and the percentages 100 or less.';
      ['cs-leads', 'cs-clics', 'cs-cpc', 'cs-dia'].forEach(function (k) { $(k).textContent = '—'; });
      return;
    }
    var leads = Math.ceil(cli / (cierre / 100));
    var clics = Math.ceil(leads / (conv / 100));
    var lo = clics * d[pais][0], hi = clics * d[pais][1];
    $('cs-total').textContent = dinero(lo, pais) + ' – ' + dinero(hi, pais);
    var L = 'en-US';
    $('cs-usd').textContent = Math.round(lo / COP_USD).toLocaleString(L) + ' – ' + Math.round(hi / COP_USD).toLocaleString(L) + ' USD per month';
    $('cs-leads').textContent = leads.toLocaleString(L);
    $('cs-clics').textContent = clics.toLocaleString(L);
    $('cs-cpc').textContent = cpc(d[pais][0], pais) + ' – ' + cpc(d[pais][1], pais);
    $('cs-dia').textContent = dinero(lo / 30.4, pais) + ' – ' + dinero(hi / 30.4, pais);
  }
  ['cs-pais', 'cs-ind', 'cs-cli', 'cs-conv', 'cs-cierre'].forEach(function (k) { $(k).addEventListener('input', pintar); $(k).addEventListener('change', pintar); });
  pintar();
})();
</script>`;
}
