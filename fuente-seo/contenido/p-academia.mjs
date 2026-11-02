// /academia/: los videos de la Academia de Acuarius, reproducibles en la página.
// Copia de academia_videos (sin los retirados) del 02-11-2026 más las guías en
// video de /novedades/. Al subir un video nuevo, agrégalo aquí y reconstruye.
// Ningún texto puede prometer Messenger (bloqueado en Meta).

const CATEGORIAS = {"primeros-pasos": "Primeros pasos", "crm": "CRM", "conversaciones": "Conversaciones y agente de IA", "marketing": "Marketing", "analisis": "Análisis", "seo": "SEO y visibilidad en IA", "novedades": "Guías de novedades"};
const ORDEN = ["primeros-pasos", "novedades", "conversaciones", "crm", "marketing", "analisis", "seo"];
const VIDEOS = [
 {
  "cat": "primeros-pasos",
  "t": "Acuarius en 2 minutos — CRM, agente de IA y marketing en un solo lugar",
  "d": "Qué es Acuarius y qué puede hacer por tu negocio: un agente de IA que atiende tus chats, el CRM, el seguimiento automático, tus campañas y tu publicidad conectada a tus ventas.",
  "dur": "2:08",
  "id": "3AjyaeCQzPk"
 },
 {
  "cat": "primeros-pasos",
  "t": "Tour completo de Acuarius — CRM y marketing en un solo lugar",
  "d": "Dónde está cada cosa y para qué sirve: Inicio y el Pulso, CRM, Marketing, Plataformas de pauta, Conversaciones, Análisis, Comando K y el soporte dentro de la app.",
  "dur": "3:57",
  "id": "NEXArTIcM_c"
 },
 {
  "cat": "primeros-pasos",
  "t": "Tu prueba Pro de 14 días en Acuarius — qué incluye y cómo aprovecharla",
  "d": "Qué incluye la prueba, sus cupos mensuales, un orden para aprovecharla semana a semana y qué pasa cuando termina.",
  "dur": "2:09",
  "id": "j05ZT7bsFZk"
 },
 {
  "cat": "primeros-pasos",
  "t": "Tus primeros 30 minutos en Acuarius — deja tu cuenta lista",
  "d": "Importa tus contactos, conecta el formulario que ya tienes en tu web, activa la bienvenida automática y arma tu proceso de venta.",
  "dur": "2:56",
  "id": "9cewSgD222o"
 },
 {
  "cat": "primeros-pasos",
  "t": "Conecta tus cuentas publicitarias a Acuarius — Google, Meta y LinkedIn",
  "d": "Autoriza el acceso y verifica que los datos de tus campañas se cargan de verdad.",
  "dur": "3:25",
  "id": "VrvLXCLwUX0"
 },
 {
  "cat": "seo",
  "t": "Proyecto SEO: posiciones mes a mes y tu visibilidad dentro de las IAs",
  "d": "Seguimiento de posiciones y el reporte GEO: si ChatGPT, Gemini, Claude y Perplexity te mencionan.",
  "dur": "2:29",
  "id": "d2xCVGA3rq8"
 },
 {
  "cat": "crm",
  "t": "El pipeline y la ficha del prospecto",
  "d": "El tablero por etapas, mover y cerrar negocios, buscar y filtrar, evitar duplicados, la ficha completa del prospecto y el Copiloto con IA.",
  "dur": "2:39",
  "id": "VJvmwWSeMeU"
 },
 {
  "cat": "crm",
  "t": "Procesos de venta: tableros con las etapas de tu negocio",
  "d": "Crea hasta 10 procesos de venta, cada uno con sus etapas, colores y probabilidad de cierre, y elige el proceso por defecto para los prospectos nuevos.",
  "dur": "1:27",
  "id": "FlWZq8bgvkU"
 },
 {
  "cat": "crm",
  "t": "Importa tu base en minutos: Excel, CSV o Google Sheets",
  "d": "Pasa tus contactos a Acuarius: revisa las columnas, ponle una etiqueta al grupo, decide qué hacer con los repetidos y quién los atiende.",
  "dur": "1:50",
  "id": "shozxp5u_KQ"
 },
 {
  "cat": "crm",
  "t": "Tareas: que ningún seguimiento se te olvide",
  "d": "Tu lista de pendientes por asesor, la tarea automática de primer contacto, tareas desde las automatizaciones y el resumen de cada mañana.",
  "dur": "2:16",
  "id": "87AJsr7nd78"
 },
 {
  "cat": "crm",
  "t": "Etiquetas en el CRM: el sistema que conecta filtros, campañas y automatizaciones",
  "d": "Una etiqueta bien puesta te sirve para segmentar, disparar flujos y medir después.",
  "dur": "2:21",
  "id": "7vltri_n8S4"
 },
 {
  "cat": "crm",
  "t": "Agenda del CRM: tareas, reuniones y sincronización con Google Calendar",
  "d": "Todo lo que tienes que hacer hoy, sincronizado con el calendario que ya usas.",
  "dur": "2:24",
  "id": "ubVfMIR_Sf4"
 },
 {
  "cat": "marketing",
  "t": "Tu primera campaña de correo — paso a paso",
  "d": "Asunto y preencabezado, plantilla o redacción con IA, imagen y botón, a quién le llega, prueba y revisión antes de enviar o programar.",
  "dur": "2:02",
  "id": "WsKoAfDXNq0"
 },
 {
  "cat": "marketing",
  "t": "Automatizaciones — seguimiento que sale solo",
  "d": "Lanzadores, acciones, esperas, condiciones y ramas, y el horario de envío que permite la ley.",
  "dur": "2:02",
  "id": "_hbP-UkHnbc"
 },
 {
  "cat": "marketing",
  "t": "Fuentes de prospectos: formularios, webhooks y chats conectados a tu CRM",
  "d": "Crea un formulario o conecta el que ya tienes, recibe prospectos de Hotmart, Zapier o Make y decide cuándo un chat entra a tu pipeline.",
  "dur": "2:21",
  "id": "eZ4Q2voIgso"
 },
 {
  "cat": "marketing",
  "t": "Propuestas comerciales con IA: créalas, envíalas y cóbralas",
  "d": "Desde la ficha del prospecto: monto, enlace de pago, cuatro estilos redactados con IA, firma del cliente y pago, estados de cada propuesta y Ganado al marcarla pagada.",
  "dur": "1:51",
  "id": "j7YStHfsR7o"
 },
 {
  "cat": "marketing",
  "t": "Encuestas NPS automáticas: mide la satisfacción y reacciona sin intervenir",
  "d": "Mide la satisfacción sola y reacciona según la nota: promotor, neutro o detractor.",
  "dur": "2:19",
  "id": "Edw6fql549A"
 },
 {
  "cat": "conversaciones",
  "t": "El inbox: todas tus conversaciones en un solo lugar",
  "d": "Atiende WhatsApp e Instagram con tu agente de IA o tu equipo: filtros, ventana de 24 horas, notas internas, respuestas rápidas, mensajes programados y Pasar al pipeline.",
  "dur": "2:10",
  "id": "LW-DJTNFNak"
 },
 {
  "cat": "conversaciones",
  "t": "Agentes IA — atiende tus chats y califica prospectos",
  "d": "Crea tu agente de IA, conéctalo a tus chats, define cómo califica a cada prospecto y pruébalo antes de encenderlo sin gastar tu cupo.",
  "dur": "2:38",
  "id": "ntRgbc6J2Nk"
 },
 {
  "cat": "analisis",
  "t": "Análisis comercial: cuánto vendes, por qué pierdes y qué tan bien haces seguimiento",
  "d": "Cuánto vendes, por qué se pierden las oportunidades y cómo va el seguimiento de cada comercial.",
  "dur": "2:43",
  "id": "6KRXWuXjK7k"
 },
 {
  "cat": "analisis",
  "t": "Análisis de marketing y clientes: qué trae leads, qué tan rápido respondes y qué tan contentos están",
  "d": "Qué fuente trae leads, cuánto tardas en responder y qué tan contentos están tus clientes.",
  "dur": "2:37",
  "id": "EmGkQWfJSXU"
 },
 {
  "cat": "novedades",
  "t": "Productos en el CRM de Acuarius: tu catálogo en oportunidades, inbox y propuestas",
  "d": "Tu catálogo dentro del CRM: crea productos, agrégalos a la oportunidad, envíalos desde el inbox y úsalos en propuestas.",
  "dur": "1:22",
  "id": "nRNwbMqukqY"
 },
 {
  "cat": "novedades",
  "t": "Tu agente de IA de WhatsApp pide los datos antes de pasarte el chat · Acuarius",
  "d": "Activa la opción y el agente pide los datos que faltan antes de pasarle la conversación a tu equipo.",
  "dur": "1:06",
  "id": "biA_Gsq3D0A"
 },
 {
  "cat": "novedades",
  "t": "Recompra y alertas de satisfacción (NPS) en Acuarius",
  "d": "Registra la segunda compra con «Nueva compra», recibe el aviso de 0 a 6 y mira el NPS por asesor.",
  "dur": "1:03",
  "id": "XiCqCL77JLo"
 },
 {
  "cat": "novedades",
  "t": "Campos personalizados en Acuarius: datos que deciden, segmentan y se llenan solos",
  "d": "Crea tus campos, deja que el agente los llene y úsalos en automatizaciones y campañas.",
  "dur": "1:14",
  "id": "Nz5Xlou3WG8"
 }
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
function academiaHTML() {
  const css = '<style>.ac-cat{margin-top:44px}.ac-cat:first-child{margin-top:8px}.ac-cat h3{font-family:var(--font-display);font-size:22px;font-weight:800;letter-spacing:-.02em;color:var(--text);margin-bottom:16px;text-align:left}'
    + '.ac-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px;text-align:left}'
    + '.ac-v{display:flex;flex-direction:column}'
    + '.ac-p{position:relative;width:100%;aspect-ratio:16/9;border:0;padding:0;border-radius:14px;overflow:hidden;background:var(--text);cursor:pointer;display:block}'
    + '.ac-p img{width:100%;height:100%;object-fit:cover;display:block;opacity:.92}.ac-p:hover img{opacity:1}'
    + '.ac-p span{position:absolute;inset:0;margin:auto;width:56px;height:56px;border-radius:50%;background:var(--white);display:flex;align-items:center;justify-content:center;color:var(--blue)}'
    + '.ac-p iframe{position:absolute;inset:0;width:100%;height:100%;border:0}'
    + '.ac-v b{font-size:15.5px;line-height:1.35;color:var(--text);margin-top:12px}.ac-v small{font-size:13.5px;line-height:1.5;color:var(--muted);margin-top:6px}.ac-v em{font-style:normal;font-size:12px;font-weight:700;color:var(--blue);margin-top:6px}'
    + '@media(max-width:960px){.ac-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:640px){.ac-grid{grid-template-columns:1fr}}</style>';
  const play = '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="margin-left:3px"><path d="M8 5v14l11-7z"/></svg>';
  const bloques = ORDEN.map((c) => {
    const vs = VIDEOS.filter((v) => v.cat === c);
    if (!vs.length) return '';
    return '<div class="ac-cat"><h3>' + esc(CATEGORIAS[c]) + '</h3><div class="ac-grid">' + vs.map((v) =>
      '<div class="ac-v"><button class="ac-p" type="button" data-ac="' + v.id + '" aria-label="Reproducir: ' + esc(v.t) + '"><img src="https://i.ytimg.com/vi/' + v.id + '/hqdefault.jpg" alt="' + esc(v.t) + '" loading="lazy" width="480" height="360"><span>' + play + '</span></button>'
      + '<b>' + esc(v.t) + '</b><small>' + esc(v.d) + '</small><em>' + esc(v.dur) + ' min</em></div>').join('') + '</div></div>';
  }).join('');
  const js = '<script>document.addEventListener("click",function(e){var b=e.target.closest&&e.target.closest(".ac-p[data-ac]");if(!b)return;var f=document.createElement("iframe");f.src="https://www.youtube-nocookie.com/embed/"+b.getAttribute("data-ac")+"?autoplay=1&rel=0&playsinline=1";f.title=b.getAttribute("aria-label");f.allow="autoplay; encrypted-media; picture-in-picture; fullscreen";f.allowFullscreen=true;b.replaceChildren(f);b.removeAttribute("data-ac");try{window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:"video_play",pagina:location.pathname});}catch(x){}});</' + 'script>';
  return css + bloques + js;
}

export const FILAS = [
  { url: '/academia/', cluster: 8, nivel: 'Recurso', intencion: 'Informativa', estado: 'publicada',
    kw: 'curso de CRM en video',
    title: 'Academia Acuarius: curso de CRM en video, gratis',
    description: 'Academia de Acuarius: curso de CRM en video y gratis. Aprende a usar el pipeline, el inbox de WhatsApp, el agente de IA, las automatizaciones y los reportes.',
    h1: 'Academia: curso de CRM en video para usar Acuarius de punta a punta',
    miga: 'Academia' },
];

export const CONTENIDO = {
  '/academia/': {
    badge: VIDEOS.length + ' videos · gratis · en español',
    sub: 'Videos cortos, de dos a cuatro minutos, para dejar tu cuenta lista y sacarle provecho a cada módulo. Se reproducen aquí mismo.',
    secciones: [
      { tipo: 'html', label: 'Videos', h2: 'Aprende Acuarius paso a paso', html: academiaHTML() },
      { tipo: 'texto', label: 'Por dónde empezar', h2: '¿Por dónde empiezo?',
        parrafos: [
          'Si acabas de crear tu cuenta, mira primero <b>Acuarius en 2 minutos</b> y <b>Tus primeros 30 minutos</b>: en media hora tienes tus contactos importados, tu formulario conectado y alguien respondiendo por cada lead.',
          'Después sigue el orden en que trabaja tu equipo: el pipeline y la ficha, el inbox de WhatsApp con el <a href="/agente-ia/">agente de IA</a>, las <a href="/automatizaciones/">automatizaciones</a> y, al final, los <a href="/reportes/">reportes</a>. Cada función nueva tiene además su guía escrita en <a href="/novedades/">Novedades</a>.',
        ] },
    ],
    faq: [
      { q: '¿La Academia es gratis?', a: 'Sí. Todos los videos son gratis y no necesitas una cuenta para verlos.' },
      { q: '¿Cada cuánto hay videos nuevos?', a: 'Cada función nueva importante sale con su guía en video en <a href="/novedades/">Novedades</a>, que publicamos cada quincena.' },
      { q: '¿Puedo ver los videos dentro de Acuarius?', a: 'Sí. Dentro de la aplicación, la sección Academia tiene los mismos videos, ordenados por módulo.' },
    ],
    cta: { h2: 'Practica mientras aprendes', sub: 'Crea tu cuenta y sigue los videos con tus propios datos: tienes 14 días de Pro gratis, sin tarjeta.' },
  },
};
