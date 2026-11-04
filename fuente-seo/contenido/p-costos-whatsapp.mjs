// Herramienta gratis: calculadora del precio de la API de WhatsApp Business.
//
// Las tarifas NO se escriben a mano ni salen de terceros. Fuente oficial de
// Meta, consultada el 02-11-2026:
// - Reglas de cobro (por mensaje desde el 01-07-2025, categorías, ventana de
//   24 h, 1.000 mensajes de servicio gratis por número, utilidad dentro de la
//   ventana cobrada desde el 01-10-2026, ventana gratuita de 7 días de los
//   anuncios clic a WhatsApp, niveles por volumen solo en utilidad y
//   autenticación, los 15 países de «Resto de América Latina»):
//   https://developers.facebook.com/docs/whatsapp/pricing
// - Las cifras en USD: el servicio que alimenta la calculadora oficial de
//   https://whatsappbusiness.com/products/platform-pricing/#rates
//   (https://whatsappbusiness.com/wp-json/wab/v1/pricing?market=CO&currency=USD&category=Marketing,
//   con market = CO, MX, AR, CL, PE, BR, ES, NAM, LATAM y category =
//   Marketing, Utility, Authentication, Service). Son las tarifas vigentes
//   desde el 01-10-2026. Las del rate card en CSV/PDF son las mismas, pero su
//   enlace de descarga no se pudo leer sin sesión.
//
// Para actualizar: Meta solo cambia tarifas el primer día de un trimestre
// (1 de enero, abril, julio, octubre) y avisa con un mes. Repetir la consulta,
// cambiar TARIFAS, CONSULTA y VIGENCIA.
//
// En los niveles por volumen, Meta devuelve las tarifas redondeadas a cuatro
// decimales; la tarifa de lista sí es exacta.

const CONSULTA = '2 de noviembre de 2026';
const VIGENCIA = '1 de octubre de 2026';

// mk = marketing, ut = utilidad, au = autenticación, sv = servicio, en USD
// por mensaje entregado. utT / auT = niveles por volumen [desde, hasta, tarifa]
// (hasta null = sin techo), por mes, mercado y categoría.
const TARIFAS = {
  CO: { nombre: 'Colombia', mk: 0.0125, ut: 0.0008, au: 0.0008, sv: 0.0008,
    utT: [[0, 100000, 0.0008], [100001, 1000000, 0.0008], [1000001, 4500000, 0.0007], [4500001, 15000000, 0.0007], [15000001, 30000000, 0.0006], [30000001, null, 0.0006]],
    auT: [[0, 120000, 0.0008], [120001, 400000, 0.0008], [400001, 1000000, 0.0007], [1000001, 5000000, 0.0007], [5000001, 10000000, 0.0006], [10000001, null, 0.0006]] },
  MX: { nombre: 'México', mk: 0.0397, ut: 0.0085, au: 0.0085, sv: 0.0085,
    utT: [[0, 1000000, 0.0085], [1000001, 5000000, 0.0081], [5000001, 10000000, 0.0077], [10000001, 20000000, 0.0072], [20000001, 40000000, 0.0068], [40000001, null, 0.0064]],
    auT: [[0, 250000, 0.0085], [250001, 1000000, 0.0081], [1000001, 3000000, 0.0077], [3000001, 5000000, 0.0072], [5000001, 10000000, 0.0068], [10000001, null, 0.0064]] },
  AR: { nombre: 'Argentina', mk: 0.0618, ut: 0.026, au: 0.026, sv: 0.026,
    utT: [[0, 100000, 0.026], [100001, 1000000, 0.0247], [1000001, 4500000, 0.0234], [4500001, 15000000, 0.0221], [15000001, 30000000, 0.0208], [30000001, null, 0.0195]],
    auT: [[0, 120000, 0.026], [120001, 400000, 0.0247], [400001, 1000000, 0.0234], [1000001, 5000000, 0.0221], [5000001, 10000000, 0.0208], [10000001, null, 0.0195]] },
  CL: { nombre: 'Chile', mk: 0.0889, ut: 0.02, au: 0.02, sv: 0.02,
    utT: [[0, 100000, 0.02], [100001, 1000000, 0.019], [1000001, 4500000, 0.018], [4500001, 15000000, 0.017], [15000001, 30000000, 0.016], [30000001, null, 0.015]],
    auT: [[0, 120000, 0.02], [120001, 400000, 0.019], [400001, 1000000, 0.018], [1000001, 5000000, 0.017], [5000001, 10000000, 0.016], [10000001, null, 0.015]] },
  PE: { nombre: 'Perú', mk: 0.0703, ut: 0.03, au: 0.03, sv: 0.03,
    utT: [[0, 100000, 0.03], [100001, 1000000, 0.0285], [1000001, 4500000, 0.027], [4500001, 15000000, 0.0255], [15000001, 30000000, 0.024], [30000001, null, 0.0225]],
    auT: [[0, 120000, 0.03], [120001, 400000, 0.0285], [400001, 1000000, 0.027], [1000001, 5000000, 0.0255], [5000001, 10000000, 0.024], [10000001, null, 0.0225]] },
  BR: { nombre: 'Brasil', mk: 0.0625, ut: 0.0068, au: 0.0068, sv: 0.0068,
    utT: [[0, 250000, 0.0068], [250001, 2000000, 0.0065], [2000001, 17000000, 0.0061], [17000001, 35000000, 0.0058], [35000001, 70000000, 0.0054], [70000001, null, 0.0051]],
    auT: [[0, 500000, 0.0068], [500001, 3000000, 0.0065], [3000001, 5250000, 0.0061], [5250001, 10000000, 0.0058], [10000001, 20000000, 0.0054], [20000001, null, 0.0051]] },
  ES: { nombre: 'España', mk: 0.0707, ut: 0.02, au: 0.02, sv: 0.02,
    utT: [[0, 100000, 0.02], [100001, 1000000, 0.019], [1000001, 4500000, 0.018], [4500001, 40000000, 0.017], [40000001, 80000000, 0.016], [80000001, null, 0.015]],
    auT: [[0, 300000, 0.02], [300001, 2000000, 0.019], [2000001, 10000000, 0.018], [10000001, 20000000, 0.017], [20000001, 40000000, 0.016], [40000001, null, 0.015]] },
  NAM: { nombre: 'Estados Unidos y Canadá', mk: 0.025, ut: 0.0034, au: 0.0034, sv: 0.0034,
    utT: [[0, 80000, 0.0034], [80001, 750000, 0.0032], [750001, 2250000, 0.0031], [2250001, 3000000, 0.0029], [3000001, 6000000, 0.0027], [6000001, null, 0.0026]],
    auT: [[0, 100000, 0.0034], [100001, 500000, 0.0032], [500001, 2000000, 0.0031], [2000001, 5000000, 0.0029], [5000001, 10000000, 0.0027], [10000001, null, 0.0026]] },
  LATAM: { nombre: 'Resto de América Latina', mk: 0.074, ut: 0.0113, au: 0.0113, sv: 0.0113,
    utT: [[0, 100000, 0.0113], [100001, 1000000, 0.0107], [1000001, 4500000, 0.0102], [4500001, 15000000, 0.0096], [15000001, 30000000, 0.009], [30000001, null, 0.0085]],
    auT: [[0, 120000, 0.0113], [120001, 400000, 0.0107], [400001, 1000000, 0.0102], [1000001, 5000000, 0.0096], [5000001, 10000000, 0.009], [10000001, null, 0.0085]] },
};
// Los 15 mercados que Meta agrupa en «Resto de América Latina».
const RESTO_LATAM = 'Bolivia, Costa Rica, Ecuador, El Salvador, Guatemala, Haití, Honduras, Jamaica, Nicaragua, Panamá, Paraguay, Puerto Rico, República Dominicana, Uruguay y Venezuela';
const SERVICIO_GRATIS = 1000; // por número de WhatsApp y por mes, sin acumular

const URL_PAG = '/herramientas/costos-de-whatsapp/';
const usd = (n) => n.toLocaleString('es-CO', { minimumFractionDigits: 4, maximumFractionDigits: 4 }) + ' USD';

export const FILAS = [
  { url: URL_PAG, cluster: 8, nivel: 'Herramienta', intencion: 'Informativa', estado: 'publicada',
    kw: 'precio de WhatsApp Business API',
    title: 'Precio de WhatsApp Business API 2026: calculadora | Acuarius',
    description: 'Precio de WhatsApp Business API por país: calcula lo que cobra Meta por tus mensajes de marketing, utilidad y autenticación, con la tarifa oficial vigente.',
    h1: 'Precio de WhatsApp Business API: calculadora por país',
    miga: 'Costos de WhatsApp' },
];

// ── La calculadora ──────────────────────────────────────────────────────────
// Todo corre en el navegador. Si el script no carga, la tabla de tarifas de
// más abajo sigue mostrando las cifras.
function calculadoraHTML() {
  const opciones = Object.entries(TARIFAS).map(([k, t]) => `<option value="${k}"${k === 'CO' ? ' selected' : ''}>${t.nombre}</option>`).join('');
  const campo = (id, label, valor, ayuda) => `<label>${label}<input id="${id}" type="number" min="0" step="1" inputmode="numeric" value="${valor}"><small>${ayuda}</small></label>`;
  return `
<div class="cw">
  <div class="cw-in">
    <label>País de tus clientes<select id="cw-pais">${opciones}</select><small>Meta cobra según el indicativo del número que recibe el mensaje, no según dónde está tu empresa.</small></label>
    ${campo('cw-mk', 'Mensajes de marketing al mes', 2000, 'Promociones, lanzamientos, recordatorios de carrito, reactivación.')}
    ${campo('cw-ut', 'Mensajes de utilidad al mes', 1500, 'Confirmaciones de pedido o cita, avisos de envío, facturas. Desde el 1 de octubre de 2026 se cobran también dentro de la ventana de 24 horas.')}
    ${campo('cw-au', 'Mensajes de autenticación al mes', 0, 'Códigos de verificación de un solo uso.')}
    ${campo('cw-sv', 'Respuestas de servicio al mes', 3000, 'Mensajes libres (sin plantilla) que tú o tu agente envían dentro de la ventana de 24 horas.')}
    ${campo('cw-num', 'Números de WhatsApp conectados', 1, 'Cada número trae 1.000 respuestas de servicio gratis al mes.')}
  </div>
  <div class="cw-out" aria-live="polite">
    <div class="cw-tag">Costo mensual estimado en Meta</div>
    <div class="cw-total" id="cw-total">—</div>
    <div class="cw-sub" id="cw-sub"></div>
    <ul class="cw-det">
      <li><span>Marketing</span><b id="cw-r-mk">—</b></li>
      <li><span>Utilidad</span><b id="cw-r-ut">—</b></li>
      <li><span>Autenticación</span><b id="cw-r-au">—</b></li>
      <li><span>Servicio</span><b id="cw-r-sv">—</b></li>
    </ul>
    <p class="cw-gratis" id="cw-gratis"></p>
    <p class="cw-nota">Esta tarifa la cobra Meta, no Acuarius: se paga en tu propia cuenta de WhatsApp Business. Tarifas oficiales de Meta en USD, vigentes desde el ${VIGENCIA} y consultadas el ${CONSULTA}. Antes de impuestos.</p>
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
  function plata(x) { return '$' + x.toLocaleString('es-CO', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' USD'; }
  function miles(x) { return x.toLocaleString('es-CO'); }
  // Los niveles se aplican por tramos: cada mensaje paga la tarifa del tramo
  // en el que cae, como en el ejemplo de la documentación de Meta.
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
    $('cw-sub').textContent = enviados ? miles(enviados) + ' mensajes al mes en ' + t.nombre : 'Escribe cuántos mensajes envías';
    $('cw-r-mk').textContent = plata(c.mk);
    $('cw-r-ut').textContent = plata(c.ut);
    $('cw-r-au').textContent = plata(c.au);
    $('cw-r-sv').textContent = plata(c.sv);
    $('cw-gratis').textContent = 'Gratis: ' + miles(svGratis) + ' respuestas de servicio (hasta ' + miles(GRATIS * num) + ' al mes con ' + num + (num === 1 ? ' número' : ' números') + ') y todo lo que te escriben tus clientes. Si el chat empezó por un anuncio de clic a WhatsApp, tampoco pagas las plantillas durante la ventana gratuita.';
    try { window.dataLayer = window.dataLayer || []; if (!pintar.usada && enviados) { pintar.usada = true; window.dataLayer.push({ event: 'herramienta_uso', herramienta: 'costos-whatsapp' }); } } catch (x) {}
  }
  try {
    ['cw-pais', 'cw-mk', 'cw-ut', 'cw-au', 'cw-sv', 'cw-num'].forEach(function (id) { $(id).addEventListener('input', pintar); });
    pintar.usada = true; pintar(); pintar.usada = false;
  } catch (e) {
    $('cw-err').textContent = 'La calculadora no pudo cargar en este navegador. Las tarifas por país están en la tabla de más abajo.';
  }
})();
</script>`;
}

const filasTabla = Object.values(TARIFAS).map((t) => [t.nombre, usd(t.mk), usd(t.ut), usd(t.au), usd(t.sv)]);

export const CONTENIDO = {
  [URL_PAG]: {
    badge: 'Herramienta gratis · sin registro',
    sub: 'Elige el país de tus clientes y cuántos mensajes envías al mes. Ves cuánto te cobraría Meta por la API de WhatsApp Business, por categoría y en total, con la tarifa oficial vigente.',
    secciones: [
      { tipo: 'html', label: 'Calculadora', h2: 'Calcula cuánto te cuesta la API de WhatsApp', html: calculadoraHTML() },
      { tipo: 'texto', label: 'La respuesta corta', h2: '¿Cuánto cuesta la API de WhatsApp Business?',
        parrafos: [
          `La API de WhatsApp Business se cobra por mensaje entregado: Meta cobra cada plantilla que envías y la tarifa depende del país de quien la recibe y de la categoría del mensaje. Con la tarifa vigente desde el ${VIGENCIA}, un mensaje de marketing cuesta <b>${usd(TARIFAS.CO.mk)} en Colombia</b> y <b>${usd(TARIFAS.MX.mk)} en México</b>; uno de utilidad, ${usd(TARIFAS.CO.ut)} y ${usd(TARIFAS.MX.ut)}.`,
          'Lo que te escriben tus clientes no se cobra. Lo que tú les respondes dentro de la conversación tiene un cupo gratis cada mes, y los chats que empiezan en un anuncio de clic a WhatsApp abren una ventana en la que no pagas nada.',
          'Esa tarifa la cobra Meta directamente en tu cuenta de WhatsApp Business, con el método de pago que registres allí. No la cobra Acuarius. Lo que cuesta usar Acuarius está en la página de <a href="/precios/">precios</a>.',
        ] },
      { tipo: 'texto', label: 'Cómo cobra Meta', h2: '¿Cómo cobra Meta los mensajes de WhatsApp?',
        parrafos: [
          'Desde el 1 de julio de 2025, Meta cobra por cada mensaje entregado y ya no por conversación de 24 horas. Si un mensaje no llega, no se cobra. Si envías tres plantillas a la misma persona el mismo día, pagas tres.',
          'El precio sale de dos datos. El primero es el <b>mercado</b>: el país del número que recibe el mensaje, según su indicativo. Una empresa en Bogotá que le escribe a un cliente con número de México paga la tarifa de México. El segundo es la <b>categoría</b> de la plantilla, que Meta revisa al aprobarla.',
          'Hubo un cambio importante el 1 de octubre de 2026: las plantillas de utilidad enviadas dentro de la ventana de 24 horas, que eran gratis, ahora se cobran, y las respuestas de servicio pasaron a tener un cupo gratis de 1.000 al mes por número; desde la respuesta 1.001 se pagan. Si tu cuenta no tiene un método de pago registrado en Meta, solo se entregan las respuestas del cupo gratis.',
        ] },
      { tipo: 'tabla', label: 'Categorías', h2: 'Las categorías de mensajes, con ejemplos',
        cab: ['Categoría', 'Para qué sirve', 'Ejemplos', '¿Se cobra?'],
        filas: [
          ['Marketing', 'Promocionar, ofrecer o reactivar.', 'Una promoción de temporada de una tienda, el lanzamiento de un curso, «Hace tres meses que no vienes a tu limpieza dental».', 'Sí, siempre. No tiene descuento por volumen.'],
          ['Utilidad', 'Informar sobre algo que el cliente pidió o ya compró.', 'La confirmación de un pedido, el recordatorio de una cita médica, el aviso de que tu domicilio salió, una factura.', 'Sí, también dentro de la ventana de 24 horas. Tiene descuento por volumen.'],
          ['Autenticación', 'Verificar la identidad con un código.', 'El código de 6 dígitos para entrar a una app o confirmar un pago.', 'Sí. Tiene descuento por volumen.'],
          ['Servicio', 'Responder dentro de la conversación, sin plantilla.', 'Contestar «¿tienen parqueadero?», enviar la ubicación o la carta del restaurante.', '1.000 gratis al mes por número; después, sí.'],
        ],
        nota: 'Meta revisa la categoría al aprobar cada plantilla, y el cobro sigue a la categoría aprobada: una plantilla con una promoción se paga como marketing.' },
      { tipo: 'texto', label: 'La ventana de 24 horas', h2: '¿Qué es la ventana de 24 horas de WhatsApp?',
        parrafos: [
          'La ventana de 24 horas es el plazo que se abre cada vez que un cliente te escribe o te llama por WhatsApp: durante esas 24 horas puedes responderle con mensajes libres, sin plantilla. Cada mensaje nuevo del cliente reinicia el plazo.',
          'Fuera de esa ventana solo puedes escribir con plantillas aprobadas por Meta, y cada una se cobra según su categoría. Por eso un seguimiento a los tres días, un recordatorio de cita para mañana o una promoción a clientes antiguos siempre pasan por una plantilla.',
          'Hay una ventana más larga: si la persona te escribe desde un <a href="/novedades/anuncios-clic-a-whatsapp-meta-ads/">anuncio de clic a WhatsApp</a> y respondes a tiempo, se abre una ventana gratuita de hasta 7 días. Mientras está abierta, Meta no cobra plantillas de marketing, utilidad ni autenticación, ni respuestas de servicio.',
        ] },
      { tipo: 'tabla', label: 'Tarifas por país', h2: `Tarifas de WhatsApp Business API por país (${VIGENCIA})`,
        cab: ['Mercado', 'Marketing', 'Utilidad', 'Autenticación', 'Servicio (desde la respuesta 1.001)'],
        filas: filasTabla,
        nota: `Precio en USD por mensaje entregado, tarifa de lista antes de impuestos. Fuente: tarifas oficiales de Meta (<a href="https://developers.facebook.com/docs/whatsapp/pricing" rel="noopener">documentación de precios de la plataforma de WhatsApp Business</a> y su calculadora oficial), vigentes desde el ${VIGENCIA}, consultadas el ${CONSULTA}. «Resto de América Latina» agrupa ${RESTO_LATAM}. Utilidad y autenticación bajan por tramos a partir de cierto volumen mensual; la calculadora ya los aplica. Meta solo cambia tarifas el primer día de un trimestre y avisa con un mes.` },
      { tipo: 'tarjetas', label: 'Ahorro', h2: 'Cómo bajar lo que pagas por WhatsApp',
        items: [
          { t: 'Responde dentro de la ventana', d: 'Contestar a tiempo te ahorra la plantilla. Si un cliente escribe a las 7 p. m. y le respondes al día siguiente a las 8 p. m., ya necesitas una plantilla pagada. Un <a href="/agente-ia/">agente de IA</a> responde de noche y mantiene la conversación viva.' },
          { t: 'Atrae chats con anuncios', d: 'Las conversaciones que empiezan en un anuncio de clic a WhatsApp abren hasta 7 días sin costo por mensaje. Úsalos para cotizar y agendar sin pagar plantillas.' },
          { t: 'Segmenta tus envíos', d: 'Un envío masivo de marketing a toda tu base se paga completo, compre o no compre la gente. Envía a quien tiene sentido: por etiqueta, campo o producto de interés. Así lo hacen las <a href="/campanas/">campañas</a> de Acuarius.' },
          { t: 'Usa la categoría correcta', d: 'Un recordatorio de cita es utilidad, no marketing. Si le mezclas una promoción, Meta lo cobra como marketing, que en Colombia cuesta más de quince veces lo que cuesta un mensaje de utilidad.' },
        ] },
      { tipo: 'texto', label: 'Ejemplo', h2: 'Ejemplo: una clínica estética en Colombia',
        parrafos: [
          `Una clínica en Medellín envía al mes 2.000 promociones (marketing), 1.500 recordatorios de cita (utilidad) y responde 3.000 mensajes de pacientes con un solo número. Con la tarifa de Colombia paga 2.000 × ${usd(TARIFAS.CO.mk)} = <b>25,00 USD</b> en marketing, 1.500 × ${usd(TARIFAS.CO.ut)} = <b>1,20 USD</b> en utilidad, y 2.000 respuestas por encima del cupo gratis × ${usd(TARIFAS.CO.sv)} = <b>1,60 USD</b> en servicio. Total: <b>27,80 USD al mes</b>.`,
          `El mismo volumen con pacientes en México costaría 79,40 USD en marketing, 12,75 USD en utilidad y 17,00 USD en servicio: 109,15 USD. La diferencia entre países es grande, y casi todo el gasto está en marketing. Es la categoría que más conviene cuidar.`,
        ] },
      { tipo: 'texto', label: 'Con Acuarius', h2: 'Plantillas, envíos y respuestas desde un solo lugar',
        parrafos: [
          'En Acuarius conectas tu número de WhatsApp Business con la app de Meta de tu propio negocio, así que la facturación de los mensajes queda en tu cuenta de Meta, a tu nombre. Las conversaciones llegan a una <a href="/crm/whatsapp/">bandeja de WhatsApp compartida</a> donde tu equipo responde dentro de la ventana de 24 horas.',
          'Las plantillas aprobadas por Meta las usas en <a href="/whatsapp/plantillas-y-difusion/">plantillas y difusión</a> y en <a href="/campanas/">campañas segmentadas</a>, y el <a href="/agente-ia/">agente de IA</a> contesta mientras nadie está disponible, para que menos chats se enfríen y tengas que retomarlos con una plantilla pagada.',
        ] },
    ],
    faq: [
      { q: '¿Cuánto cuesta un mensaje de WhatsApp Business API en Colombia?', a: `Con la tarifa vigente desde el ${VIGENCIA}: ${usd(TARIFAS.CO.mk)} por mensaje de marketing, ${usd(TARIFAS.CO.ut)} por mensaje de utilidad, ${usd(TARIFAS.CO.au)} por autenticación y ${usd(TARIFAS.CO.sv)} por respuesta de servicio después de las 1.000 gratis del mes.` },
      { q: '¿Y en México?', a: `${usd(TARIFAS.MX.mk)} por marketing, ${usd(TARIFAS.MX.ut)} por utilidad, ${usd(TARIFAS.MX.au)} por autenticación y ${usd(TARIFAS.MX.sv)} por respuesta de servicio después de las 1.000 gratis. La tarifa de marketing en México subió el 1 de octubre de 2026.` },
      { q: '¿La app de WhatsApp Business normal también cobra?', a: 'No. La app de WhatsApp Business que instalas en el celular es gratis. Lo que se cobra por mensaje es la API, que es la versión para conectar WhatsApp a un CRM, a un agente de IA o a varios asesores con un mismo número.' },
      { q: '¿Responder a un cliente es gratis?', a: 'Lo que te escribe el cliente nunca se cobra. Tus respuestas libres dentro de la ventana de 24 horas son gratis hasta 1.000 al mes por número; desde la 1.001 se cobran con la tarifa de servicio. Si el chat vino de un anuncio de clic a WhatsApp, no pagas nada durante la ventana gratuita de hasta 7 días.' },
      { q: '¿Quién me cobra: Meta o Acuarius?', a: 'Meta. La tarifa por mensaje se paga en tu cuenta de WhatsApp Business con el método de pago que registres en Meta. Acuarius no cobra por mensaje de WhatsApp; lo que cuesta usar Acuarius está en la página de precios.' },
      { q: '¿Los precios incluyen impuestos?', a: 'No. Son las tarifas de lista de Meta en USD. Meta también publica tarifas en monedas locales (COP, MXN, ARS, CLP, PEN, BRL, entre otras), y los impuestos dependen de tu país y tu facturación.' },
    ],
    cta: { h2: 'Que cada mensaje que pagas termine en una venta', sub: 'Con Acuarius, tus chats de WhatsApp llegan a tu CRM, un agente de IA responde a tiempo y tus campañas van solo a quien tiene sentido. Empieza gratis.' },
  },
};
