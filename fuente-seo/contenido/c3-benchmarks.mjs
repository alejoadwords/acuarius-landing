// Contenido del Cluster 3 · Benchmarks LatAm.
//
// Las cifras de Google Ads NO se escriben a mano: salen de
// datos/planificador-2026-10.json, la consulta al Planificador de palabras
// clave de Google (API, GenerateKeywordHistoricalMetrics) hecha el 19-10-2026
// desde el MCC de Acuarius, con las keywords de datos/keywords.mjs. Para
// actualizar: repetir la consulta, guardar un JSON nuevo y cambiar DATOS.
//
// Las cifras de Meta y del costo por lead en EE. UU. son de fuentes públicas
// citadas con su enlace. Lo que es estimación propia se dice en el texto.

import { readFileSync } from 'node:fs';

const DATOS = JSON.parse(readFileSync(new URL('../datos/planificador-2026-10.json', import.meta.url), 'utf8'));
const { INDUSTRIAS } = await import('../datos/keywords.mjs');

const FECHA = '19 de octubre de 2026';
const COP_USD = DATOS.cambio.COP_por_USD;
const COP_MXN = DATOS.cambio.COP_por_USD / DATOS.cambio.MXN_por_USD;

// ── Cálculos ────────────────────────────────────────────────────────────────
const mediana = (xs) => { const s = [...xs].sort((a, b) => a - b); const m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
// Solo cuentan las keywords con puja: en salud, Google no da cifras de varias.
function resumen(id, pais) {
  const filas = DATOS.datos[`${id}.${pais}`];
  const con = filas.filter((f) => f.alto > 0);
  return { id, nombre: INDUSTRIAS[id].nombre, bajo: mediana(con.map((f) => f.bajo)), alto: mediana(con.map((f) => f.alto)),
    vol: filas.reduce((s, f) => s + f.busquedas, 0), n: con.length, total: filas.length, filas };
}
const tabla = (pais) => Object.keys(INDUSTRIAS).map((id) => resumen(id, pais)).sort((a, b) => b.alto - a.alto);

const nCO = (v) => Math.round(v / 10) * 10;
const fCOP = (cop) => '$' + nCO(cop).toLocaleString('es-CO') + ' COP';
const fMXN = (cop) => '$' + (cop / COP_MXN).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' MXN';
// Cada país con su formato de número: México usa coma de miles y punto decimal.
const LOCALE = { co: 'es-CO', mx: 'es-MX' };
const fUSD = (cop, pais = 'co') => (cop / COP_USD).toLocaleString(LOCALE[pais], { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' USD';
// «Software B2B» → «software B2B»: solo la primera letra, para no romper siglas.
const min = (s) => s[0].toLowerCase() + s.slice(1);
const fVol = (v, pais = 'co') => v.toLocaleString(LOCALE[pais]);
const local = (pais) => (pais === 'co' ? fCOP : fMXN);
const rango = (pais, r) => `${local(pais)(r.bajo)} – ${local(pais)(r.alto)}`;
const rangoUSD = (r, pais = 'co') => `${fUSD(r.bajo, pais).replace(' USD', '')} – ${fUSD(r.alto, pais)}`;

const CO = tabla('co');
const MX = tabla('mx');
const enCO = (id) => CO.find((r) => r.id === id);
const enMX = (id) => MX.find((r) => r.id === id);

// ── Piezas comunes ──────────────────────────────────────────────────────────
const METODO = {
  tipo: 'texto', label: 'Metodología', h2: 'De dónde salen estos datos',
  parrafos: [
    `Consultamos el <b>Planificador de palabras clave de Google</b> a través de la API de Google Ads el ${FECHA}: ${Object.keys(INDUSTRIAS).length} industrias, 8 búsquedas comerciales por industria y país, idioma español, red de búsqueda de Google. Son ${Object.keys(DATOS.datos).length * 8} keywords en total.`,
    'Para cada keyword, Google da dos cifras de <b>puja por la parte superior de la página</b>: la baja (lo que pagó el 20 % más barato de los anunciantes por salir arriba) y la alta (el 80 %). No es exactamente el CPC que vas a pagar, que depende de tu nivel de calidad y de la competencia de ese día, pero es la mejor referencia pública que existe y se puede replicar.',
    'Por industria mostramos la mediana de esas pujas, para que una keyword muy cara o muy barata no distorsione el resultado. Las cifras en dólares usan la tasa del mismo día: ' + COP_USD.toLocaleString('es-CO', { maximumFractionDigits: 0 }) + ' COP y ' + DATOS.cambio.MXN_por_USD.toLocaleString('es-MX', { maximumFractionDigits: 2 }) + ' MXN por dólar.',
  ],
};
const usoLibre = 'Puedes citar estos datos enlazando esta página.';

const filaKw = (pais) => (f) => [f.kw, fVol(f.busquedas, pais), f.alto > 0 ? local(pais)(f.bajo) : '—', f.alto > 0 ? local(pais)(f.alto) : '—'];
const tablaKeywords = (pais) => ({
  tipo: 'tabla', label: 'Todas las keywords', h2: `Las ${(pais === 'co' ? CO : MX).length * 8} búsquedas consultadas, una por una`,
  cab: ['Keyword', 'Búsquedas al mes', 'Puja baja', 'Puja alta'],
  filas: (pais === 'co' ? CO : MX).flatMap((r) => [[`<b>${r.nombre}</b>`, '', '', ''], ...[...r.filas].sort((a, b) => b.busquedas - a.busquedas).map(filaKw(pais))]),
  nota: '«—»: Google no publica puja para esa búsqueda (pasa con varias de salud). ' + usoLibre,
});

function dataset(pais, url) {
  const nombre = pais === 'co' ? 'Colombia' : 'México';
  return { '@type': 'Dataset', name: `CPC de Google Ads en ${nombre} por industria (octubre de 2026)`,
    description: `Pujas por la parte superior de la página y búsquedas mensuales de 80 keywords comerciales en ${nombre}, en 10 industrias, según el Planificador de palabras clave de Google.`,
    url: 'https://acuarius.app' + url, creator: { '@type': 'Organization', name: 'Acuarius', url: 'https://acuarius.app/' },
    datePublished: DATOS.fecha, spatialCoverage: nombre, inLanguage: 'es',
    measurementTechnique: 'Google Ads API · KeywordPlanIdeaService.GenerateKeywordHistoricalMetrics' };
}

function paginaCPC(pais) {
  const T = pais === 'co' ? CO : MX;
  const nombre = pais === 'co' ? 'Colombia' : 'México';
  const url = pais === 'co' ? '/benchmarks/cpc-google-ads-colombia/' : '/benchmarks/cpc-google-ads-mexico/';
  const caro = T[0], barato = T[T.length - 1], inm = T.find((r) => r.id === 'inmobiliario');
  const medGlobal = { bajo: mediana(T.map((r) => r.bajo)), alto: mediana(T.map((r) => r.alto)) };
  return {
    badge: `Datos del Planificador de Google · ${FECHA}`,
    sub: `Cuánto cuesta un clic en Google Ads en ${nombre}, industria por industria, con datos propios consultados en el Planificador de palabras clave de Google. Con las cifras en ${pais === 'co' ? 'pesos colombianos' : 'pesos mexicanos'} y en dólares.`,
    jsonld: [dataset(pais, url)],
    secciones: [
      { tipo: 'texto', label: 'La respuesta corta', h2: `Cuánto cuesta un clic en Google Ads en ${nombre}`,
        parrafos: [
          `En ${nombre}, la mediana de las diez industrias que medimos va de <b>${local(pais)(medGlobal.bajo)} a ${local(pais)(medGlobal.alto)} por clic</b> (${fUSD(medGlobal.bajo, pais).replace(' USD', '')} a ${fUSD(medGlobal.alto, pais)}), para aparecer en la parte superior de los resultados.`,
          `Pero el promedio dice poco: la industria más cara, <b>${min(caro.nombre)}</b>, llega a ${local(pais)(caro.alto)} en la puja alta, mientras que <b>${min(barato.nombre)}</b> se queda en ${local(pais)(barato.alto)}. Lo que pagas depende sobre todo de cuánto vale un cliente en tu sector.`,
        ] },
      { tipo: 'tabla', label: 'Por industria', h2: `CPC de Google Ads en ${nombre} por industria`,
        cab: ['Industria', `Rango de puja (${pais === 'co' ? 'COP' : 'MXN'})`, 'En dólares', 'Búsquedas al mes*'],
        filas: T.map((r) => [r.nombre, rango(pais, r), rangoUSD(r, pais), fVol(r.vol, pais)]),
        nota: '* Suma de las búsquedas mensuales promedio de las 8 keywords de cada industria. Ordenado de la más cara a la más barata según la puja alta. ' + usoLibre },
      { tipo: 'tarjetas', label: 'Lo que dicen los datos', h2: 'Tres lecturas de la tabla',
        items: [
          { t: `${caro.nombre}: la más cara`, d: `Las búsquedas de ${min(caro.nombre)} tienen la puja alta más elevada: ${local(pais)(caro.alto)}. Un cliente vale mucho y muchos anunciantes compiten por él.` },
          { t: 'El clic barato no es el lead barato', d: `En inmobiliario el clic cuesta ${rango(pais, inm)}, de lo más bajo de la tabla. Pero una visita no es un comprador: lo que importa es cuántos clics terminan en una conversación. <a href="/benchmarks/costo-por-lead-inmobiliario/">Ver costo por lead inmobiliario</a>.` },
          { t: 'Salud tiene datos incompletos', d: `Google no publica puja para varias búsquedas de salud (especialidades médicas y cirugías). En ${nombre} solo ${T.find((r) => r.id === 'salud').n} de las 8 tenían cifra, así que esa fila es la menos fiable.` },
        ] },
      { tipo: 'texto', label: 'Presupuesto', h2: '¿Cuánto presupuesto necesito para empezar?',
        parrafos: [
          'El CPC solo es la mitad de la cuenta. Para saber cuánto invertir al mes necesitas tres números: cuántos clientes quieres, qué porcentaje de los clics se convierte en contacto y qué porcentaje de los contactos termina comprando.',
          `Ejemplo con ${min(inm.nombre)}: si quieres 5 ventas al mes, cierras 1 de cada 20 contactos y 1 de cada 25 clics te escribe, necesitas ${fVol(2500, pais)} clics. A la puja baja (${local(pais)(inm.bajo)}) son ${local(pais)(2500 * inm.bajo)} al mes; a la alta (${local(pais)(inm.alto)}), ${local(pais)(2500 * inm.alto)}.`,
          'Hazlo con tus números en la <a href="/calculadora-presupuesto-google-ads/">calculadora de presupuesto de Google Ads</a>.',
        ] },
      METODO,
      tablaKeywords(pais),
    ],
    faq: [
      { q: `¿Cuál es el CPC promedio de Google Ads en ${nombre}?`, a: `Según nuestra consulta del Planificador de palabras clave de Google (${FECHA}), la mediana de diez industrias va de ${local(pais)(medGlobal.bajo)} a ${local(pais)(medGlobal.alto)} por clic para aparecer arriba, aunque varía mucho por industria.` },
      { q: `¿Cuál es la industria más cara en Google Ads en ${nombre}?`, a: `En nuestra medición, ${min(caro.nombre)}, con una puja alta de ${local(pais)(caro.alto)} por clic.` },
      { q: '¿El CPC del Planificador es lo que voy a pagar?', a: 'No exactamente. Es el rango que pagaron otros anunciantes por aparecer en la parte superior. Tu CPC real depende de tu nivel de calidad, tu puja y la competencia en cada subasta, y suele quedar dentro o por debajo de ese rango.' },
      { q: '¿Cada cuánto se actualizan estos datos?', a: 'Los volvemos a consultar periódicamente; la fecha de la consulta está siempre arriba en la página.' },
    ],
    cta: { h2: 'Mide qué clics se convierten en ventas', sub: 'Acuarius guarda la campaña de origen de cada lead y te dice cuánto te costó cada venta. Pruébalo 14 días gratis.' },
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
const cop = (usd) => '$' + nCO(usd * COP_USD).toLocaleString('es-CO') + ' COP';

export const CONTENIDO = {
  '/benchmarks/': {
    badge: `Actualizado el ${FECHA}`,
    sub: 'Cuánto cuesta un clic, mil impresiones y un lead en Colombia y México, por industria. Con datos propios del Planificador de Google y fuentes públicas citadas, cada cifra con su fecha.',
    secciones: [
      { tipo: 'texto', label: 'Por qué existe esta página', h2: 'Benchmarks de marketing digital pensados para Latinoamérica',
        parrafos: [
          'Casi todos los benchmarks de publicidad digital que circulan son de Estados Unidos. Sirven poco para decidir un presupuesto en Bogotá o en Monterrey: un clic de inmobiliario allá cuesta varios dólares y aquí, centavos.',
          'Por eso reunimos aquí datos de Latinoamérica: los de Google Ads los sacamos nosotros mismos del Planificador de palabras clave, y los de Meta los tomamos de fuentes públicas que citamos una por una. Cuando algo es una estimación nuestra, lo decimos.',
        ] },
      { tipo: 'tabla', label: 'Google Ads', h2: 'CPC de Google Ads por industria: Colombia y México',
        cab: ['Industria', 'Colombia (USD)', 'México (USD)'],
        filas: CO.map((r) => [r.nombre, rangoUSD(r), rangoUSD(enMX(r.id), 'mx')]),
        nota: `Rango de puja por la parte superior de la página (mediana de 8 keywords por industria), Planificador de palabras clave de Google, ${FECHA}. Detalle en moneda local: <a href="/benchmarks/cpc-google-ads-colombia/">Colombia</a> y <a href="/benchmarks/cpc-google-ads-mexico/">México</a>.` },
      { tipo: 'tarjetas', label: 'Explora', h2: 'Los benchmarks en detalle',
        items: [
          { t: 'CPC de Google Ads en Colombia', d: `De ${fCOP(mediana(CO.map((r) => r.bajo)))} a ${fCOP(mediana(CO.map((r) => r.alto)))} de mediana por clic. <a href="/benchmarks/cpc-google-ads-colombia/">Ver por industria</a>.` },
          { t: 'CPC de Google Ads en México', d: `De ${fMXN(mediana(MX.map((r) => r.bajo)))} a ${fMXN(mediana(MX.map((r) => r.alto)))} de mediana por clic. <a href="/benchmarks/cpc-google-ads-mexico/">Ver por industria</a>.` },
          { t: 'Costo de la publicidad en Facebook en Colombia', d: 'CPM, CPC y costo por lead de Meta Ads según cuatro fuentes públicas. <a href="/benchmarks/costo-meta-ads-colombia/">Ver costos de Meta</a>.' },
          { t: 'Costo por lead inmobiliario', d: 'Referencias de EE. UU. y nuestra estimación para Colombia y México. <a href="/benchmarks/costo-por-lead-inmobiliario/">Ver costo por lead</a>.' },
          { t: 'Calculadora de presupuesto', d: 'Cuánto invertir en Google Ads según tus clientes objetivo y tu industria. <a href="/calculadora-presupuesto-google-ads/">Usar la calculadora</a>.' },
        ] },
      METODO,
    ],
    faq: [
      { q: '¿Qué es un benchmark de marketing digital?', a: 'Es una cifra de referencia —CPC, CPM, tasa de conversión, costo por lead— que te dice si los resultados de tus campañas están en un rango normal para tu industria y tu país.' },
      { q: '¿Puedo usar estos datos en mi propio contenido?', a: 'Sí, citando la fuente con un enlace a esta página.' },
      { q: '¿Por qué los CPC de Latinoamérica son tan distintos a los de Estados Unidos?', a: 'Porque el precio de un clic sale de una subasta: depende de cuánto vale un cliente para los anunciantes de ese país y de cuántos compiten. En Latinoamérica los dos números suelen ser más bajos.' },
    ],
    cta: { h2: 'De los benchmarks a tus propios números', sub: 'Con Acuarius ves cuánto te cuesta cada venta, no solo cada clic. Pruébalo 14 días gratis.' },
  },

  '/benchmarks/cpc-google-ads-colombia/': paginaCPC('co'),
  '/benchmarks/cpc-google-ads-mexico/': paginaCPC('mx'),

  '/benchmarks/costo-meta-ads-colombia/': {
    badge: 'Fuentes públicas · octubre 2026',
    sub: 'Cuánto cuesta anunciar en Facebook e Instagram en Colombia: CPM, costo por clic y costo por lead, comparando lo que publican cuatro fuentes distintas. Con las cifras pasadas a pesos colombianos.',
    secciones: [
      { tipo: 'texto', label: 'La respuesta corta', h2: 'Cuánto cuesta la publicidad en Facebook en Colombia',
        parrafos: [
          `Según las fuentes públicas más recientes, mostrar un anuncio mil veces en Facebook o Instagram en Colombia (<b>CPM</b>) cuesta entre <b>1,60 y 4,00 USD</b>, es decir, entre ${cop(1.6)} y ${cop(4)}. Un <b>clic</b> ronda los 0,22 a 0,42 USD (${cop(0.22)} a ${cop(0.42)}).`,
          'Es una de las audiencias más baratas del mundo para Meta: las mismas fuentes ubican el promedio global varias veces por encima. Pero las cifras cambian mucho de un mes a otro y de una fuente a otra, así que tómalas como rango, no como precio fijo.',
        ] },
      { tipo: 'tabla', label: 'CPM', h2: 'CPM de Meta Ads en Colombia según cada fuente',
        cab: ['Fuente', 'CPM en Colombia', 'En pesos', 'Qué mide'],
        filas: [
          [M.superCPM, '~3,20 USD (promedio de 13 meses)', cop(3.2), 'Más de 3.000 millones de USD de inversión de miles de cuentas; con picos mensuales de 1,70 a 13,06 USD'],
          [M.lebesgue, '2,00 USD', cop(2), 'Tiendas en línea, 2026'],
          [M.stackmatix, '1,60 – 3,80 USD', `${cop(1.6)} – ${cop(3.8)}`, 'Rango promedio 2026'],
          [M.adamigo, '4,00 USD (rango 3,30 – 5,00)', cop(4), 'Proyección para 2026'],
        ],
        nota: `Fuentes consultadas el ${FECHA}. Como referencia global, ${M.adkit} reporta una mediana de 9,31 USD de CPM en Meta en septiembre de 2026. Pesos a ${COP_USD.toLocaleString('es-CO', { maximumFractionDigits: 0 })} COP por dólar.` },
      { tipo: 'tabla', label: 'Clic y lead', h2: 'Costo por clic y por lead en Meta Ads en Colombia',
        cab: ['Métrica', 'Colombia', 'En pesos', 'Fuente'],
        filas: [
          ['Costo por clic (mediana)', '~0,22 USD', cop(0.22), M.superCPC],
          ['Costo por clic (promedio)', '0,42 USD', cop(0.42), M.adamigo],
          ['Costo por lead, todas las industrias', '~3,73 USD', cop(3.73), M.superCPL],
        ],
        nota: 'El costo por lead varía muchísimo por industria y por mes: en algunos sectores la misma fuente muestra promedios inflados por picos puntuales. Para inmobiliario, ver <a href="/benchmarks/costo-por-lead-inmobiliario/">costo por lead inmobiliario</a>.' },
      { tipo: 'tarjetas', label: 'De qué depende', h2: 'Qué hace que tu publicidad en Facebook cueste más o menos',
        items: [
          { t: 'El objetivo de la campaña', d: 'Una campaña de alcance paga impresiones baratas; una de clientes potenciales o de ventas paga más por cada mil, porque Meta la muestra a quien tiene más probabilidad de actuar.' },
          { t: 'La temporada', d: 'Noviembre y diciembre encarecen todo por la competencia de comercio electrónico. Las fuentes muestran saltos fuertes también en meses puntuales.' },
          { t: 'La audiencia', d: 'Audiencias pequeñas o muy segmentadas cuestan más por impresión. Una audiencia amplia con buen creativo suele salir más barata.' },
          { t: 'Facebook o Instagram', d: 'Instagram suele costar entre 20 % y 40 % más por cada mil impresiones que Facebook en el mismo país, según una de las fuentes.' },
          { t: 'El creativo', d: 'Un anuncio que la gente mira y comparte tiene mejor clasificación y paga menos. Es la palanca más barata que tienes.' },
          { t: 'Lo que pasa después del clic', d: 'Un lead barato que nadie atiende es el más caro. Responder rápido cambia más tu costo por venta que bajar el CPM.' },
        ] },
      { tipo: 'texto', label: 'Ejemplo', h2: '¿Cuánto debería invertir para empezar?',
        parrafos: [
          `Con un CPM de 3 USD (${cop(3)}), un presupuesto de ${cop(100)} al mes (100 USD) te compra unas 33.000 impresiones. Con un costo por lead de 4 USD serían unos 25 contactos al mes, que es poco para sacar conclusiones pero suficiente para probar mensajes.`,
          'La recomendación práctica: empieza con un presupuesto que te permita al menos 50 conversiones al mes en la campaña, para que el algoritmo de Meta aprenda, y mide cuántos de esos contactos se convierten en ventas.',
        ] },
    ],
    faq: [
      { q: '¿Cuánto cuesta la publicidad en Facebook en Colombia?', a: `Según fuentes públicas de 2026, entre 1,60 y 4,00 USD por cada mil impresiones (${cop(1.6)} a ${cop(4)}) y unos 0,22 a 0,42 USD por clic. Depende del objetivo, la temporada y la audiencia.` },
      { q: '¿Cuál es el presupuesto mínimo para Meta Ads en Colombia?', a: 'Meta permite campañas con presupuestos diarios muy bajos, pero para que el algoritmo aprenda conviene que la campaña consiga al menos unas 50 conversiones al mes.' },
      { q: '¿Es más barato Instagram o Facebook?', a: 'Normalmente Facebook. Una de las fuentes estima que Instagram cuesta entre 20 % y 40 % más por cada mil impresiones en el mismo país.' },
      { q: '¿Por qué las fuentes dan cifras distintas?', a: 'Porque miden cuentas, industrias y periodos distintos. Por eso mostramos todas con su enlace y preferimos un rango a una sola cifra.' },
    ],
    cta: { h2: 'Atiende cada lead de Meta a tiempo', sub: 'Acuarius recibe los leads de tus campañas y responde por WhatsApp en segundos. Pruébalo 14 días gratis.' },
  },

  '/benchmarks/costo-por-lead-inmobiliario/': (() => {
    const co = enCO('inmobiliario'), mx = enMX('inmobiliario');
    const CVR = 0.037; // LocaliQ 2026, inmobiliario en búsqueda (EE. UU.)
    return {
      badge: 'Referencias y estimación · octubre 2026',
      sub: 'Cuánto cuesta un lead inmobiliario en Google y en Meta: las referencias más citadas de Estados Unidos y nuestra estimación para Colombia y México a partir del CPC real de cada país.',
      secciones: [
        { tipo: 'texto', label: 'La respuesta corta', h2: 'Cuánto cuesta un lead inmobiliario',
          parrafos: [
            `En Estados Unidos, la referencia más usada (LocaliQ/WordStream) ubica el <b>costo por lead inmobiliario en 102,51 USD en Google</b> y en <b>16,61 USD en Meta</b>. En Latinoamérica es muchísimo menos: con el CPC que medimos en el Planificador de Google y la misma tasa de conversión, un lead de búsqueda en Colombia saldría entre <b>${fCOP(co.bajo / CVR)} y ${fCOP(co.alto / CVR)}</b>.`,
            'No existe un estudio público serio de costo por lead inmobiliario para Colombia o México. Por eso aquí separamos lo que es dato medido de lo que es estimación, y te explicamos cómo calcular el tuyo.',
          ] },
        { tipo: 'tabla', label: 'Referencias de EE. UU.', h2: 'Costo por lead inmobiliario: las cifras de referencia',
          cab: ['Canal', 'Costo por lead', 'Tasa de conversión', 'Fuente y muestra'],
          filas: [
            ['Google (búsqueda)', '102,51 USD', '3,70 %', `${M.liqRE}: unas 900 campañas inmobiliarias en EE. UU., abril 2025 – marzo 2026`],
            ['Google · corredores', '162,39 USD', '—', M.liqRE + ', misma muestra'],
            ['Meta (campañas de clientes potenciales)', '16,61 USD', '9,53 %', `${M.wsMeta}: 726 campañas en EE. UU., abril 2024 – junio 2025`],
          ],
          nota: `Cifras consultadas el ${FECHA} en publicaciones que citan esos estudios. Son de Estados Unidos: sirven para entender la proporción entre canales, no como precio local.` },
        { tipo: 'tabla', label: 'Estimación para LatAm', h2: 'Estimación del costo por lead inmobiliario en Colombia y México',
          cab: ['País', 'CPC inmobiliario medido', 'Costo por lead estimado (Google)', 'En dólares'],
          filas: [
            ['Colombia', rango('co', co), `${fCOP(co.bajo / CVR)} – ${fCOP(co.alto / CVR)}`, `${fUSD(co.bajo / CVR).replace(' USD', '')} – ${fUSD(co.alto / CVR)}`],
            ['México', rango('mx', mx), `${fMXN(mx.bajo / CVR)} – ${fMXN(mx.alto / CVR)}`, `${fUSD(mx.bajo / CVR, 'mx').replace(' USD', '')} – ${fUSD(mx.alto / CVR, 'mx')}`],
          ],
          nota: `<b>Esto es una estimación, no una medición.</b> CPC: mediana de 8 búsquedas inmobiliarias en el Planificador de Google (${FECHA}). Tasa de conversión: 3,70 %, la de LocaliQ para inmobiliario en EE. UU. Tu tasa real puede ser muy distinta. <a href="/benchmarks/cpc-google-ads-colombia/">Ver CPC de Colombia</a>.` },
        { tipo: 'texto', label: 'Lo que importa', h2: 'El costo por lead engaña: mide el costo por visita',
          parrafos: [
            'En finca raíz, un lead barato puede ser carísimo. Un formulario de Meta a 4 USD que nunca contesta el teléfono cuesta más que un lead de Google a 15 USD que agenda una visita. Por eso las inmobiliarias que mejor invierten miden tres cosas: costo por lead, <b>costo por visita</b> y <b>costo por venta</b>.',
            'La diferencia casi siempre está en lo que pasa después del clic: quien responde en los primeros minutos califica más leads y agenda más visitas con el mismo presupuesto. Un <a href="/crm/inmobiliarias/">CRM inmobiliario</a> que responde al instante y guarda la campaña de origen de cada lead te deja medir las tres.',
          ] },
        { tipo: 'pasos', label: 'Calcula el tuyo', h2: 'Cómo calcular tu propio costo por lead inmobiliario',
          items: [
            { t: 'Suma la inversión', d: 'Lo que gastaste en una campaña en un periodo, sin comisiones de agencia.' },
            { t: 'Cuenta los leads reales', d: 'Contactos con nombre y teléfono, sin duplicados ni spam.' },
            { t: 'Divide', d: 'Inversión entre leads. Ese es tu costo por lead.' },
            { t: 'Sigue hasta la visita', d: 'Repite la división con las visitas y con las ventas. Ese es el número que decide dónde invertir.' },
          ] },
      ],
      faq: [
        { q: '¿Cuál es un buen costo por lead inmobiliario?', a: 'Depende del país, del canal y del tipo de inmueble. Como referencia, en EE. UU. LocaliQ reporta 102,51 USD en Google y 16,61 USD en Meta. En Colombia y México, con el CPC local, un lead de búsqueda debería costar una fracción de eso.' },
        { q: '¿Es más barato el lead inmobiliario en Meta o en Google?', a: 'En Meta suele ser más barato, pero también de menor intención: la persona no estaba buscando inmueble. En Google el lead cuesta más y suele estar más avanzado en su decisión.' },
        { q: '¿Cuánto debe invertir una inmobiliaria en pauta?', a: 'Calcula al revés: cuántas ventas quieres, cuántas visitas necesitas por venta y cuántos leads por visita. Multiplica por tu costo por lead. La <a href="/calculadora-presupuesto-google-ads/">calculadora de presupuesto</a> te ayuda con Google Ads.' },
      ],
      cta: { h2: 'Convierte más leads en visitas', sub: 'El CRM inmobiliario de Acuarius responde al instante y te dice cuánto te costó cada visita. Pruébalo 14 días gratis.' },
    };
  })(),

  '/calculadora-presupuesto-google-ads/': {
    badge: `CPC reales del Planificador de Google · ${FECHA}`,
    sub: 'Elige tu país y tu industria, di cuántos clientes quieres al mes y la calculadora te dice cuánto invertir en Google Ads, con el CPC real de tu mercado.',
    secciones: [
      { tipo: 'html', label: 'Calculadora', h2: 'Calcula tu presupuesto de Google Ads', html: calculadoraHTML() },
      { tipo: 'texto', label: 'Cómo funciona', h2: 'Cómo se calcula el presupuesto',
        parrafos: [
          'La calculadora va de atrás hacia adelante. Parte de los clientes que quieres y los divide por tu tasa de cierre para saber cuántos contactos necesitas. Luego divide esos contactos por la tasa de conversión de tu página para saber cuántos clics. Y multiplica los clics por el CPC de tu industria.',
          `El CPC sale de nuestra consulta al Planificador de palabras clave de Google del ${FECHA}: la mediana de la puja baja y de la alta de 8 búsquedas comerciales por industria. Por eso el resultado es un rango: lo que pagarías si compites en la parte barata o en la parte cara de la subasta.`,
          'Las tasas por defecto son un punto de partida razonable. Si ya tienes campañas, pon las tuyas: el resultado será mucho más preciso. <a href="/benchmarks/cpc-google-ads-colombia/">Ver los CPC de Colombia</a> o <a href="/benchmarks/cpc-google-ads-mexico/">de México</a>.',
        ] },
      { tipo: 'tarjetas', label: 'Consejos', h2: 'Antes de invertir',
        items: [
          { t: 'Empieza con lo que puedas medir', d: 'Un presupuesto pequeño bien medido enseña más que uno grande sin seguimiento. Lo mínimo: saber qué campaña trajo cada contacto.' },
          { t: 'La tasa de cierre es tuya', d: 'Es el número que más mueve el resultado y el que solo tú conoces. Responder rápido a cada contacto es la forma más barata de subirla.' },
          { t: 'Deja que la campaña aprenda', d: 'Las primeras dos a cuatro semanas suelen ser más caras. No juzgues la campaña por los primeros días.' },
        ] },
    ],
    faq: [
      { q: '¿Cuánto debo invertir en Google Ads?', a: 'Depende de cuántos clientes quieres, de tu tasa de conversión y del CPC de tu industria. La calculadora de esta página hace la cuenta con los CPC reales de Colombia y México.' },
      { q: '¿Cuál es el presupuesto mínimo para Google Ads?', a: 'Google no exige un mínimo, pero con muy pocos clics al día la campaña tarda en aprender. Calcula al menos lo necesario para conseguir unos cuantos contactos por semana.' },
      { q: '¿Qué tasa de conversión debo poner?', a: 'Si no tienes datos propios, la calculadora usa un 5 % de clics que se convierten en contacto y un 10 % de contactos que compran. Como referencia, LocaliQ reporta 3,70 % en inmobiliario en EE. UU.' },
      { q: '¿El resultado incluye el costo de la agencia?', a: 'No. Es solo la inversión en Google Ads.' },
    ],
    cta: { h2: 'Mide si tu presupuesto está vendiendo', sub: 'Acuarius conecta cada lead con la campaña que lo trajo y con la venta. Pruébalo 14 días gratis.' },
  },
};

// ── Calculadora (HTML + script en línea) ─────────────────────────────────────
function calculadoraHTML() {
  // Solo viaja al navegador la mediana por industria y país, en COP.
  const datos = {};
  for (const id of Object.keys(INDUSTRIAS)) {
    datos[id] = { nombre: INDUSTRIAS[id].nombre, co: [enCO(id).bajo, enCO(id).alto], mx: [enMX(id).bajo, enMX(id).alto] };
  }
  const opciones = Object.entries(datos).map(([id, d]) => `<option value="${id}"${id === 'inmobiliario' ? ' selected' : ''}>${d.nombre}</option>`).join('');
  return `
<div class="calc-seo">
  <div class="calc-seo-in">
    <label>País<select id="cs-pais"><option value="co">Colombia</option><option value="mx">México</option></select></label>
    <label>Industria<select id="cs-ind">${opciones}</select></label>
    <label>Clientes que quieres al mes<input id="cs-cli" type="number" min="1" max="10000" value="10"></label>
    <label>De cada 100 clics, ¿cuántos te escriben?<input id="cs-conv" type="number" min="0.1" max="100" step="0.1" value="5"><small>Tasa de conversión, en %</small></label>
    <label>De cada 100 contactos, ¿cuántos compran?<input id="cs-cierre" type="number" min="0.1" max="100" step="0.1" value="10"><small>Tasa de cierre, en %</small></label>
  </div>
  <div class="calc-seo-out" aria-live="polite">
    <div class="calc-seo-tag">Inversión mensual estimada</div>
    <div class="calc-seo-total" id="cs-total">—</div>
    <div class="calc-seo-usd" id="cs-usd"></div>
    <ul class="calc-seo-det">
      <li><span>Contactos necesarios</span><b id="cs-leads">—</b></li>
      <li><span>Clics necesarios</span><b id="cs-clics">—</b></li>
      <li><span>CPC de tu industria</span><b id="cs-cpc">—</b></li>
      <li><span>Al día</span><b id="cs-dia">—</b></li>
    </ul>
    <a href="https://app.acuarius.app/registro" class="btn-primary" style="background:white;color:var(--blue);margin-top:18px;justify-content:center">Mide cuánto te cuesta cada venta</a>
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
.calc-seo-total{font-family:var(--font-display);font-size:30px;font-weight:800;line-height:1.15;margin-top:10px}
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
    if (pais === 'co') return '$' + (Math.round(cop / 1000) * 1000).toLocaleString('es-CO') + ' COP';
    return '$' + Math.round(cop / COP_MXN).toLocaleString('es-MX') + ' MXN';
  }
  function cpc(cop, pais) {
    return pais === 'co' ? '$' + (Math.round(cop / 10) * 10).toLocaleString('es-CO') : '$' + (cop / COP_MXN).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  function num(id) { var v = parseFloat(String($(id).value).replace(',', '.')); return isFinite(v) && v > 0 ? v : null; }
  function pintar() {
    var pais = $('cs-pais').value, d = D[$('cs-ind').value];
    var cli = num('cs-cli'), conv = num('cs-conv'), cierre = num('cs-cierre');
    // Un dato vacío o en cero no da un resultado engañoso: se dice qué falta.
    if (!cli || !conv || !cierre || conv > 100 || cierre > 100) {
      $('cs-total').textContent = 'Revisa los datos';
      $('cs-usd').textContent = 'Los tres números deben ser mayores que cero, y los porcentajes, de 100 o menos.';
      ['cs-leads', 'cs-clics', 'cs-cpc', 'cs-dia'].forEach(function (k) { $(k).textContent = '—'; });
      return;
    }
    var leads = Math.ceil(cli / (cierre / 100));
    var clics = Math.ceil(leads / (conv / 100));
    var lo = clics * d[pais][0], hi = clics * d[pais][1];
    $('cs-total').textContent = dinero(lo, pais) + ' – ' + dinero(hi, pais);
    var L = pais === 'co' ? 'es-CO' : 'es-MX';
    $('cs-usd').textContent = Math.round(lo / COP_USD).toLocaleString(L) + ' – ' + Math.round(hi / COP_USD).toLocaleString(L) + ' USD al mes';
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
