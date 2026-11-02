// El menú de acuarius.app: una sola fuente para todas las páginas.
//
// Lo usan los generadores (fuente-seo, fuente-novedades) y aplicar.mjs, que lo
// mete entre <!-- MENU:INICIO --> y <!-- MENU:FIN --> en las páginas escritas a
// mano (home, partners, legales). Cambiar un enlace aquí y correr los tres
// scripts lo cambia en todo el sitio.
//
// Cada enlace tiene `url` (su página propia). Mientras esa página no exista
// (`pendiente: true`), el menú usa `alterna`, la página que hoy mejor cubre el
// tema; si no hay ninguna buena, el enlace no se pinta. Así el menú nunca
// lleva a una página vacía y crece solo a medida que se publican las nuevas.
//
// Todo lleva el prefijo am-: el estilo base de partners.html aplica reglas a
// la etiqueta <nav> y a .nav-*, y aquí no se usan para no heredarlas.

const REGISTRO = 'https://app.acuarius.app/registro';
const LOGIN = 'https://app.acuarius.app/login.html';
const DEMO = 'https://app.acuarius.app/reunion/alejandro-reunion';

export const MENU = {
  producto: {
    titulo: 'Producto',
    columnas: [
      { titulo: 'Agente de IA', ia: true, enlaces: [
        { t: 'Agente de IA para WhatsApp', d: 'Responde, califica y te pasa el cliente con sus datos, las 24 horas.', url: '/agente-ia/' },
        { t: 'Calificación y reparto', d: 'Cada lead al tablero y al asesor que le toca.', url: '/agente-ia/calificacion-y-reparto/' },
      ] },
      { titulo: 'Conversaciones', icono: '◍', enlaces: [
        { t: 'Inbox de WhatsApp', d: 'Todo tu equipo en un mismo número, en tiempo real.', url: '/crm/whatsapp/' },
        { t: 'Plantillas y difusión', d: 'Escríbele primero y envía campañas aprobadas por Meta.', url: '/whatsapp/plantillas-y-difusion/' },
      ] },
      { titulo: 'CRM', icono: '▦', enlaces: [
        { t: 'CRM y pipeline', d: 'Tus etapas, tus asesores y cada venta a la vista.', url: '/crm/' },
        { t: 'Productos y propuestas', d: 'Catálogo, cotizaciones con IVA y enlaces de pago.', url: '/productos/' },
        { t: 'Agenda y reuniones', d: 'Que tus clientes te agenden sin ida y vuelta.', url: '/agenda/' },
      ] },
      { titulo: 'Marketing', icono: '↻', enlaces: [
        { t: 'Automatizaciones', d: 'El seguimiento sale solo, por correo o WhatsApp.', url: '/automatizaciones/' },
        { t: 'Campañas de correo y WhatsApp', d: 'A cada segmento, el mensaje que le sirve.', url: '/campanas/' },
        { t: 'Formularios y páginas', d: 'Cada lead de tu web y tus anuncios, directo al CRM.', url: '/formularios/' },
      ] },
      { titulo: 'Análisis y pauta', icono: '◔', enlaces: [
        { t: 'Reportes', d: 'Ventas, equipo y marketing, en PDF o enlace vivo.', url: '/reportes/' },
        { t: 'Google y Meta Ads', d: 'Qué campaña vende de verdad, no solo cuál trae clics.', url: '/pauta/' },
        { t: 'Encuestas NPS', d: 'Mide la satisfacción y reacciona a tiempo.', url: '/novedades/recompra-y-encuesta-nps/' },
      ] },
    ],
    franja: [
      { t: 'Integraciones', d: 'Shopify, WooCommerce, VTEX, Google Calendar, Meta, Google Ads y API', url: '/integraciones/', icono: 'enchufe' },
      { t: 'Novedades', d: 'Lo nuevo de cada quincena, con guías en video', url: '/novedades/', destacada: true, icono: 'brillo' },
    ],
  },
  soluciones: {
    titulo: 'Soluciones',
    columnas: [
      { titulo: 'Por industria', enlaces: [
        { t: 'Inmobiliarias', d: 'Arriendo y venta, cada uno con su proceso.', url: '/crm/inmobiliarias/' },
        { t: 'Clínicas y salud', d: 'Citas, recordatorios y seguimiento del paciente.', url: '/crm/clinicas/' },
        { t: 'Restaurantes', d: 'Reservas y pedidos que llegan por WhatsApp.', url: '/crm/restaurantes/' },
        { t: 'Tiendas en línea', d: 'Shopify, WooCommerce y VTEX conectados al CRM.', url: '/crm/tiendas-en-linea/' },
      ] },
      { titulo: 'Por tipo de empresa', enlaces: [
        { t: 'Pymes', d: 'Todo tu proceso comercial en un solo lugar.', url: '/crm/' },
        { t: 'Agencias de marketing', d: 'Varios clientes, cada uno con sus datos y reportes.', url: '/agencias/' },
        { t: 'CRM gratis', d: 'Empieza sin pagar y crece cuando lo necesites.', url: '/crm/gratis/' },
      ] },
      { titulo: 'Comparar', enlaces: [
        { t: 'Mejores CRM con WhatsApp', d: 'La comparativa completa para LatAm.', url: '/mejores-crm-con-whatsapp/' },
        { t: 'Acuarius vs HubSpot', url: '/comparativas/acuarius-vs-hubspot/' },
        { t: 'Acuarius vs Kommo', url: '/comparativas/acuarius-vs-kommo/' },
      ] },
    ],
    destacada: { etiqueta: 'Guía', t: '¿Qué CRM con WhatsApp te conviene?', d: 'Lo que de verdad incluye cada uno, comparado para LatAm.', cta: 'Leer la comparativa', url: '/mejores-crm-con-whatsapp/' },
  },
  recursos: {
    titulo: 'Recursos',
    columnas: [
      { titulo: 'Aprender', enlaces: [
        { t: 'Novedades', d: 'Cada función nueva, explicada con video.', url: '/novedades/' },
        { t: 'Academia en video', d: 'Aprende a usar Acuarius paso a paso.', url: '/academia/' },
        { t: 'Benchmarks LatAm', d: 'Costos de pauta y de leads por país y sector.', url: '/benchmarks/' },
      ] },
      { titulo: 'Herramientas gratis', enlaces: [
        { t: 'Generador de enlace de WhatsApp', d: 'Tu enlace wa.me con el mensaje listo.', url: '/herramientas/enlace-de-whatsapp/' },
        { t: 'Calculadora de costos de WhatsApp', d: 'Cuánto cobra Meta por mensaje en tu país.', url: '/herramientas/costos-de-whatsapp/' },
        { t: 'Calculadora de presupuesto de Google Ads', url: '/calculadora-presupuesto-google-ads/' },
      ] },
      { titulo: 'Empresa', enlaces: [
        { t: 'Programa de Partners', d: 'Comisión recurrente por recomendar Acuarius.', url: '/partners' },
        { t: 'Hablar con nosotros', d: 'Por WhatsApp, en horario de oficina.', url: 'https://wa.me/573219972333?text=' + encodeURIComponent('Hola, quiero saber más de Acuarius') },
      ] },
    ],
    destacada: { etiqueta: 'Guía en video', t: 'Campos personalizados que se llenan solos', d: 'Créalos, deja que el agente los llene y úsalos en automatizaciones.', cta: 'Ver la guía', url: '/novedades/campos-personalizados-crm/' },
  },
};

// Precios va suelto, sin desplegable, como en toda la competencia.
export const PRECIOS = '/precios/';

// URLs propias que el sitio debería tener según el menú (para el mapa).
export const PENDIENTES = Object.values(MENU).flatMap((m) => [...m.columnas.flatMap((c) => c.enlaces), ...(m.franja || [])]).filter((e) => e.pendiente).map((e) => ({ url: e.url, t: e.t, alterna: e.alterna || null }));

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const destino = (e) => (e.pendiente ? e.alterna : e.url);
const externo = (u) => /^https?:/.test(u) && !u.startsWith('https://acuarius.app');
const enlace = (e, clase, cuerpo) => { const u = destino(e); return u ? `<a class="${clase}" href="${esc(u)}"${externo(u) ? ' target="_blank" rel="noopener"' : ''}>${cuerpo}</a>` : ''; };
const FLECHA = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
const CHEVRON = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
const ICONOS = {
  enchufe: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 7V3M15 7V3M7 7h10v4a5 5 0 01-10 0V7zM12 16v5"/></svg>',
  brillo: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.2 6.6L21 11l-6.8 2.4L12 20l-2.2-6.6L3 11l6.8-2.4z"/></svg>',
};

function columna(c) {
  const links = c.enlaces.map((e) => enlace(e, 'am-lk', `<b>${esc(e.t)}</b>${e.d ? `<small>${esc(e.d)}</small>` : ''}`)).filter(Boolean);
  if (!links.length) return '';
  return `<div class="am-col${c.ia ? ' am-ia' : ''}"><div class="am-h">${c.ia ? '<i>✦</i>' : c.icono ? `<i>${c.icono}</i>` : ''}${esc(c.titulo)}</div>${links.join('')}</div>`;
}

function panel(clave, m) {
  const cols = m.columnas.map(columna).filter(Boolean);
  const franja = (m.franja || []).map((f) => enlace(f, f.destacada ? 'am-fr am-fr-dest' : 'am-fr', `<span class="am-fr-ico">${ICONOS[f.icono] || ''}</span><span><b>${esc(f.t)}</b><small>${esc(f.d)}</small></span>`)).filter(Boolean);
  const dest = m.destacada ? `<a class="am-dest" href="${esc(m.destacada.url)}"><span><small>${esc(m.destacada.etiqueta)}</small><b>${esc(m.destacada.t)}</b><em>${esc(m.destacada.d)}</em></span><span class="am-dest-cta">${esc(m.destacada.cta)} →</span></a>` : '';
  return `<div class="am-panel" id="am-p-${clave}" role="region" aria-label="${esc(m.titulo)}"><div class="am-panel-in">
    <div class="am-cols" style="--n:${cols.length + (dest ? 1 : 0)}">${cols.join('')}${dest}</div>
    ${franja.length ? `<div class="am-franja" style="--n:${franja.length}">${franja.join('')}</div>` : ''}
  </div></div>`;
}

// `activo`: ruta de la página actual, para marcar Precios o Novedades.
export function menuHTML(activo = '') {
  const claves = Object.keys(MENU);
  const botones = claves.map((k) => `<button class="am-item" type="button" aria-expanded="false" aria-controls="am-p-${k}" data-am="${k}">${esc(MENU[k].titulo)} ${CHEVRON}</button>`).join('');
  const cajon = claves.map((k) => {
    const m = MENU[k];
    const grupos = m.columnas.map((c) => { const l = c.enlaces.map((e) => enlace(e, 'am-lk', `<b>${esc(e.t)}</b>`)).filter(Boolean); return l.length ? `<div class="am-h">${esc(c.titulo)}</div>${l.join('')}` : ''; }).join('');
    const extra = (m.franja || []).map((f) => enlace(f, 'am-lk', `<b>${esc(f.t)}</b>`)).filter(Boolean).join('');
    return `<div class="am-acc"><button type="button" aria-expanded="false">${esc(m.titulo)} ${CHEVRON}</button><div class="am-acc-c">${grupos}${extra}</div></div>`;
  }).join('');
  const preciosAct = activo.startsWith(PRECIOS) ? ' aria-current="page"' : '';
  return `<!-- MENU:INICIO (generado por fuente-menu/menu.mjs; no editar a mano) -->
<header class="am-nav" id="am-nav">
  <div class="am-in">
    <a href="/" class="am-logo" aria-label="Acuarius, inicio"><img src="/logo.svg" alt="Acuarius" width="135" height="24"></a>
    <div class="am-items" role="navigation" aria-label="Principal">${botones}<a class="am-item" href="${PRECIOS}"${preciosAct}>Precios</a></div>
    <div class="am-ctas">
      <a class="am-txt" href="${LOGIN}">Iniciar sesión</a>
      <a class="am-borde" href="${DEMO}">Agendar demo</a>
      <a class="am-pri" href="${REGISTRO}">Crear cuenta gratis ${FLECHA}</a>
      <button class="am-hamb" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="am-cajon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    </div>
  </div>
  ${claves.map((k) => panel(k, MENU[k])).join('\n  ')}
</header>
<div class="am-cajon" id="am-cajon">
  ${cajon}
  <a class="am-solo" href="${PRECIOS}">Precios</a>
  <div class="am-cajon-ctas"><a class="am-pri" href="${REGISTRO}">Crear cuenta gratis</a><a class="am-borde" href="${DEMO}">Agendar demo</a><a class="am-txt" href="${LOGIN}">Iniciar sesión</a></div>
</div>
<!-- MENU:FIN -->`;
}

export const MENU_CSS = `<style id="am-css">
/* Menú del sitio (fuente-menu/menu.mjs). Tokens de partners.html. */
.am-nav{position:fixed;top:0;left:0;right:0;z-index:200;height:68px;background:rgba(255,255,255,.92);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-bottom:1px solid var(--border);font-family:var(--font-body)}
.am-in{max-width:1200px;height:100%;margin:0 auto;padding:0 32px;display:flex;align-items:center;gap:24px}
.am-logo{display:flex;align-items:center;flex:none}
.am-logo img{height:24px;width:auto;display:block}
.am-items{display:flex;align-items:center;gap:2px;margin-right:auto}
.am-item{display:inline-flex;align-items:center;gap:5px;padding:9px 13px;border-radius:10px;font:500 14px/1 var(--font-body);color:var(--muted);background:none;border:0;cursor:pointer;text-decoration:none;transition:background .15s,color .15s}
.am-item:hover,.am-item[aria-expanded="true"],.am-item[aria-current="page"]{background:var(--blue-lt);color:var(--blue)}
.am-item svg{transition:transform .2s}
.am-item[aria-expanded="true"] svg{transform:rotate(180deg)}
.am-ctas{display:flex;align-items:center;gap:8px}
.am-txt{font-size:13.5px;font-weight:600;color:var(--muted);padding:9px 10px;text-decoration:none;white-space:nowrap}
.am-txt:hover{color:var(--text)}
.am-borde{font-size:13.5px;font-weight:600;color:var(--text);padding:9px 16px;border:1.5px solid var(--border);border-radius:var(--r);text-decoration:none;white-space:nowrap;transition:border-color .15s,color .15s}
.am-borde:hover{border-color:var(--blue);color:var(--blue)}
.am-pri{display:inline-flex;align-items:center;gap:7px;font-size:13.5px;font-weight:600;padding:10px 18px;background:var(--blue);color:var(--white);border-radius:var(--r);text-decoration:none;white-space:nowrap;transition:background .15s}
.am-pri:hover{background:var(--blue-h)}
.am-hamb{display:none;width:40px;height:40px;border-radius:10px;align-items:center;justify-content:center;background:none;border:0;color:var(--text);cursor:pointer}
.am-panel{position:absolute;left:0;right:0;top:68px;background:var(--white);border-bottom:1px solid var(--border);box-shadow:0 24px 60px -24px rgba(10,10,18,.28),0 6px 18px rgba(10,10,18,.06);opacity:0;visibility:hidden;transform:translateY(-6px);transition:opacity .18s,transform .18s,visibility .18s}
.am-panel.am-abierto{opacity:1;visibility:visible;transform:none}
.am-panel-in{max-width:1200px;margin:0 auto;padding:26px 32px 24px}
.am-cols{display:grid;grid-template-columns:repeat(var(--n),minmax(0,1fr));gap:8px 22px}
.am-h{display:flex;align-items:center;gap:8px;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted2);margin:0 0 10px 10px}
.am-h i{width:22px;height:22px;border-radius:7px;display:inline-flex;align-items:center;justify-content:center;background:var(--blue-lt);color:var(--blue);font-style:normal;font-size:12px}
.am-ia .am-h{color:var(--blue)}
.am-ia .am-h i{background:var(--blue);color:var(--white)}
.am-lk{display:block;padding:10px;border-radius:12px;text-decoration:none;transition:background .15s}
.am-lk:hover{background:var(--bg)}
.am-lk b{display:block;font-size:14.5px;font-weight:600;color:var(--text);line-height:1.3}
.am-lk small{display:block;font-size:13px;line-height:1.45;color:var(--muted);margin-top:3px}
.am-lk:hover b{color:var(--blue)}
.am-ia .am-lk{background:var(--blue-lt)}
.am-ia .am-lk+.am-lk{margin-top:8px}
.am-franja{display:grid;grid-template-columns:repeat(var(--n),minmax(0,1fr));gap:12px;margin-top:18px;padding-top:18px;border-top:1px solid var(--border)}
.am-fr{display:flex;align-items:center;gap:14px;padding:12px 14px;border-radius:14px;border:1px solid var(--border);text-decoration:none;transition:border-color .15s}
.am-fr:hover{border-color:var(--blue)}
.am-fr-ico{width:40px;height:40px;border-radius:11px;flex:none;display:flex;align-items:center;justify-content:center;background:var(--bg);color:var(--blue)}
.am-fr b{display:block;font-size:14px;color:var(--text)}
.am-fr small{font-size:12.5px;color:var(--muted)}
.am-fr-dest{background:var(--blue-lt);border-color:transparent}
.am-fr-dest .am-fr-ico{background:var(--white)}
.am-dest{border-radius:16px;padding:20px;background:var(--text);color:var(--white);display:flex;flex-direction:column;justify-content:space-between;min-height:210px;text-decoration:none;position:relative;overflow:hidden}
.am-dest::after{content:'';position:absolute;right:-40px;top:-40px;width:160px;height:160px;border-radius:50%;background:var(--blue);opacity:.55;filter:blur(10px)}
.am-dest>span{position:relative}
.am-dest small{display:block;font-size:11.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.6}
.am-dest b{display:block;font-family:var(--font-display);font-size:20px;line-height:1.25;margin:10px 0 8px;color:var(--white)}
.am-dest em{display:block;font-style:normal;font-size:13.5px;line-height:1.5;opacity:.75}
.am-dest-cta{font-size:13.5px;font-weight:700;margin-top:16px}
.am-cajon{display:none}
@media(max-width:1080px){.am-in{padding:0 20px;gap:14px}.am-borde{display:none}}
@media(max-width:960px){
  .am-items,.am-txt,.am-panel{display:none}
  .am-in{padding:0 16px}.am-logo{margin-right:auto}
  .am-ctas .am-pri{padding:9px 14px;font-size:13px}
  .am-hamb{display:flex}
  .am-cajon{display:block;position:fixed;top:68px;left:0;right:0;bottom:0;z-index:199;background:var(--white);overflow-y:auto;padding:6px 16px 40px;visibility:hidden;opacity:0;transition:opacity .2s,visibility .2s;font-family:var(--font-body)}
  .am-cajon.am-abierto{visibility:visible;opacity:1}
  .am-acc{border-bottom:1px solid var(--border)}
  .am-acc>button{width:100%;display:flex;justify-content:space-between;align-items:center;padding:18px 4px;font:600 17px var(--font-body);color:var(--text);background:none;border:0;cursor:pointer}
  .am-acc>button svg{transition:transform .2s}
  .am-acc.am-abierto>button svg{transform:rotate(180deg)}
  .am-acc-c{display:none;padding:0 0 12px}
  .am-acc.am-abierto .am-acc-c{display:block}
  .am-acc-c .am-h{margin:14px 4px 4px}
  .am-acc-c .am-lk{padding:9px 4px;background:none}
  .am-solo{display:block;padding:18px 4px;font-size:17px;font-weight:600;color:var(--text);text-decoration:none;border-bottom:1px solid var(--border)}
  .am-cajon-ctas{display:flex;flex-direction:column;gap:10px;margin-top:22px}
  .am-cajon-ctas a{justify-content:center;text-align:center;padding:13px;display:flex}
  .am-cajon-ctas .am-borde{display:flex}
  body.am-bloqueo{overflow:hidden}
}
</style>`;

export const MENU_JS = `<script id="am-js">
// Menú: desplegables por hover (con pausa para no abrirse al cruzar la barra),
// clic o teclado; Esc y clic fuera cierran. En el celular, cajón con acordeón.
(function () {
  var nav = document.getElementById('am-nav'); if (!nav) return;
  var abierto = null, t = null;
  function panelDe(b) { return document.getElementById(b.getAttribute('aria-controls')); }
  function cerrar() { if (!abierto) return; abierto.setAttribute('aria-expanded', 'false'); panelDe(abierto).classList.remove('am-abierto'); abierto = null; }
  function abrir(b) { if (abierto === b) return; cerrar(); abierto = b; b.setAttribute('aria-expanded', 'true'); panelDe(b).classList.add('am-abierto'); }
  var fino = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  nav.querySelectorAll('[data-am]').forEach(function (b) {
    b.addEventListener('click', function () { abierto === b ? cerrar() : abrir(b); });
    if (fino) b.addEventListener('mouseenter', function () { clearTimeout(t); t = setTimeout(function () { abrir(b); }, 90); });
  });
  if (fino) {
    nav.addEventListener('mouseleave', function () { clearTimeout(t); t = setTimeout(cerrar, 180); });
    nav.addEventListener('mouseenter', function () { clearTimeout(t); });
    nav.querySelectorAll('a.am-item').forEach(function (a) { a.addEventListener('mouseenter', function () { clearTimeout(t); cerrar(); }); });
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { cerrar(); cerrarCajon(); } });
  document.addEventListener('click', function (e) { if (!e.target.closest('#am-nav')) cerrar(); });
  var hamb = nav.querySelector('.am-hamb'), cajon = document.getElementById('am-cajon');
  function cerrarCajon() { if (!cajon) return; cajon.classList.remove('am-abierto'); hamb.setAttribute('aria-expanded', 'false'); document.body.classList.remove('am-bloqueo'); }
  hamb && hamb.addEventListener('click', function () { var a = cajon.classList.toggle('am-abierto'); hamb.setAttribute('aria-expanded', a); document.body.classList.toggle('am-bloqueo', a); });
  cajon && cajon.querySelectorAll('.am-acc>button').forEach(function (b) { b.addEventListener('click', function () { var a = b.parentElement.classList.toggle('am-abierto'); b.setAttribute('aria-expanded', a); }); });
  cajon && cajon.addEventListener('click', function (e) { if (e.target.closest('a')) cerrarCajon(); });
})();
</script>`;
