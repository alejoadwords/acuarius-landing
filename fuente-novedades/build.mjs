// Genera acuarius.app/novedades/ desde articulos/*.mjs y ediciones.mjs.
//
//   node fuente-novedades/build.mjs
//
// Escribe:
//   novedades/index.html             el índice: artículos más recientes y ediciones
//   novedades/<articulo>/index.html  un artículo por función, con su URL propia
//   novedades/<edicion>/index.html   el resumen de cada quincena
//   novedades/feed.xml               RSS de los artículos
// El sitemap lo arma fuente-seo/build.mjs, que importa URLS de aquí.
//
// Cada artículo es una página SEO completa: title, description, canonical,
// Open Graph y JSON-LD (BlogPosting, VideoObject, HowTo, FAQPage, migas). El
// video se reproduce en la página: hasta el clic solo se carga la miniatura,
// y al pulsar se monta el reproductor de YouTube ahí mismo.
//
// Estilo base, logo, GTM y pie salen de partners.html en cada build, como las
// páginas SEO. Si algo incumple las reglas, el build se detiene sin escribir.

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { EDICIONES } from './ediciones.mjs';
import { ESTILO_NOV } from './estilo.mjs';
import { ILUSTRACIONES } from './ilustraciones.mjs';
import { menuHTML, MENU_CSS, MENU_JS } from '../fuente-menu/menu.mjs';

const AQUI = dirname(fileURLToPath(import.meta.url));
const RAIZ = join(AQUI, '..');
const DOMINIO = 'https://acuarius.app';
const REGISTRO = 'https://app.acuarius.app/registro';
const APP = 'https://app.acuarius.app/';
const BASE = '/novedades/';

// ── Artículos ───────────────────────────────────────────────────────────────
const ARTICULOS = [];
for (const f of readdirSync(join(AQUI, 'articulos')).filter((f) => f.endsWith('.mjs')).sort()) {
  const { ARTICULO } = await import(pathToFileURL(join(AQUI, 'articulos', f)).href);
  ARTICULOS.push({ ...ARTICULO, _fichero: f });
}
// Más nuevo primero; dentro de la misma fecha, en el orden de su edición.
const ordenEd = (a) => { const e = EDICIONES.find((x) => x.numero === a.edicion); return e ? e.articulos.indexOf(a.slug) : 99; };
ARTICULOS.sort((a, b) => (b.publicado.localeCompare(a.publicado)) || (ordenEd(a) - ordenEd(b)));
const porSlug = Object.fromEntries(ARTICULOS.map((a) => [a.slug, a]));

export const URLS = [BASE, ...ARTICULOS.map((a) => `${BASE}${a.slug}/`), ...EDICIONES.map((e) => `${BASE}${e.slug}/`)];

// ── Utilidades ──────────────────────────────────────────────────────────────
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const sinEtiquetas = (s) => String(s ?? '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const VACIAS = new Set(['de', 'del', 'para', 'a', 'en', 'con', 'la', 'el', 'y', 'que', 'por', 'los', 'las', 'un', 'una', 'tu', 'tus']);
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const palabrasClave = (s) => norm(s).split(/[^a-z0-9]+/).filter((w) => w && !VACIAS.has(w));
const idDe = (s) => norm(sinEtiquetas(s)).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);
const FLECHA = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
const PLAY = (t = 26) => `<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const fechaLarga = (iso) => { const [a, m, d] = iso.split('-').map(Number); return `${d} de ${MESES[m - 1]} de ${a}`; };
const dos = (n) => String(n).padStart(2, '0');
const TINTE_ILU = { productos: 'azul', campos: 'menta', whatsapp: 'lila', agente: 'arena', agenda: 'cielo', satisfaccion: 'rosa', pauta: 'gris' };
const tinteDe = (a) => `var(--n-tinte-${TINTE_ILU[a.ilustracion] || 'azul'})`;
const minSeg = (s) => `${Math.floor(s / 60)}:${dos(s % 60)}`;
const isoDur = (s) => `PT${Math.floor(s / 60)}M${s % 60}S`;
const tituloSeo = (t) => (t.length + 11 <= 60 ? `${t} | Acuarius` : t);

function texto(a) {
  return [a.respuesta, ...a.secciones.map((s) => s.h2 + ' ' + s.html), a.pasos?.intro, ...(a.pasos?.items || []).map((i) => i.t + ' ' + i.d), ...a.faq.map((f) => f.q + ' ' + f.a)].map(sinEtiquetas).join(' ');
}
const palabras = (a) => texto(a).split(/\s+/).filter(Boolean).length;

// ── Validación ──────────────────────────────────────────────────────────────
function validar() {
  const errores = [];
  const vistos = new Map();
  for (const a of ARTICULOS) {
    const e = (m) => errores.push(`${a._fichero}: ${m}`);
    if (`${a.slug}.mjs` !== a._fichero) e('el slug no coincide con el nombre del fichero');
    if (!/^[a-z0-9-]+$/.test(a.slug)) e('slug con caracteres no permitidos');
    for (const c of ['kw', 'title', 'description', 'h1', 'modulo', 'publicado', 'resumen', 'respuesta']) if (!a[c]) e(`falta ${c}`);
    if (a.title.length > 60) e(`title de ${a.title.length} caracteres (máx. 60)`);
    if (a.description.length < 120 || a.description.length > 160) e(`description de ${a.description.length} caracteres (120-160)`);
    for (const campo of ['title', 'description', 'h1']) {
      const t = new Set(palabrasClave(a[campo]));
      const faltan = palabrasClave(a.kw).filter((w) => !t.has(w));
      if (faltan.length) e(`al ${campo} le falta la keyword «${a.kw}» (no está: ${faltan.join(', ')})`);
    }
    for (const c of ['title', 'description']) { if (vistos.has(a[c])) e(`${c} repetido con ${vistos.get(a[c])}`); vistos.set(a[c], a.slug); }
    if (!a.video?.id || !/^[\w-]{11}$/.test(a.video.id)) e('video sin ID de YouTube válido');
    if (!a.video?.subido || !a.video?.segundos) e('al video le falta subido o segundos (los pide VideoObject)');
    if (!ILUSTRACIONES[a.ilustracion]) e(`ilustración desconocida «${a.ilustracion}»`);
    if (!a.secciones?.length) e('sin secciones');
    if (!a.faq?.length) e('sin FAQ');
    for (const r of a.relacionados || []) if (!porSlug[r]) e(`relacionado inexistente: ${r}`);
    if (/`/.test(texto(a))) e('tiene una comilla invertida en el texto');
    const n = palabras(a);
    if (n < 900) e(`solo ${n} palabras (mínimo 900)`);
  }
  for (const ed of EDICIONES) {
    if (ed.title.length > 60) errores.push(`${ed.slug}: title de ${ed.title.length} caracteres`);
    if (ed.description.length < 120 || ed.description.length > 160) errores.push(`${ed.slug}: description de ${ed.description.length} caracteres`);
    for (const s of ed.articulos) if (!porSlug[s]) errores.push(`${ed.slug}: falta el artículo ${s}`);
  }
  for (let i = 1; i < EDICIONES.length; i++) if (EDICIONES[i].publicada > EDICIONES[i - 1].publicada) errores.push('ediciones.mjs: la más nueva tiene que ir primero');
  return errores;
}

// ── Piezas de partners.html ─────────────────────────────────────────────────
const partners = readFileSync(join(RAIZ, 'partners.html'), 'utf8');
function extraer(re, nombre) {
  const m = partners.match(re);
  if (!m) throw new Error(`No encontré ${nombre} en partners.html: revisa si cambió su estructura.`);
  return m[0];
}
const ESTILO_BASE = extraer(/<style>[\s\S]*?<\/style>/, 'el bloque <style>');
const GTM_HEAD = extraer(/<!-- Google Tag Manager -->[\s\S]*?<!-- End Google Tag Manager -->/, 'GTM del head');
const GTM_BODY = extraer(/<!-- Google Tag Manager \(noscript\) -->[\s\S]*?<!-- End Google Tag Manager \(noscript\) -->/, 'GTM del body');
const ICONO = extraer(/<link rel="icon"[^>]*>\n<link rel="icon"[^>]*>\n<link rel="apple-touch-icon"[^>]*>/, 'el favicon');
const PIE = extraer(/<footer>[\s\S]*?<\/footer>/, 'el pie');

// Lo que solo usan los artículos.
const ESTILO_ART = `<style>
.a-hero{padding:124px 40px 40px}
.a-meta{display:flex;flex-wrap:wrap;gap:6px 16px;margin-top:22px;font-size:13.5px;color:var(--muted)}
.a-meta b{color:var(--text);font-weight:600}
.a-video-wrap{max-width:1000px;margin:0 auto;padding:0 40px}
.a-video-cap{font-size:13.5px;color:var(--muted);margin-top:12px;text-align:center}
.a-caps{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-top:12px}
.a-caps button{font:inherit;font-size:13px;color:var(--text);background:var(--white);border:1px solid var(--border);border-radius:999px;padding:6px 12px;cursor:pointer}
.a-caps button:hover{border-color:var(--blue);color:var(--blue)}
.a-caps b{color:var(--blue);font-weight:700;margin-right:4px}
.a-cuerpo{max-width:1160px;margin:0 auto;padding:56px 40px 24px;display:grid;grid-template-columns:minmax(0,1fr) 280px;gap:64px;align-items:start}
.a-art{min-width:0;max-width:740px}
.a-corta{border:1px solid var(--border);border-left:4px solid var(--blue);border-radius:var(--r);padding:20px 22px;background:var(--n-tinte-azul);margin-bottom:40px}
.a-corta b{display:block;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--blue);margin-bottom:8px}
.a-corta p{font-size:17px;line-height:1.7;color:var(--text);margin:0}
.a-art h2{font-family:var(--font-display);font-size:clamp(21px,2.1vw,26px);font-weight:800;letter-spacing:0;line-height:1.2;color:var(--text);margin:48px 0 14px;scroll-margin-top:96px}
.a-art h3{font-size:18px;font-weight:700;color:var(--text);margin:26px 0 8px}
.a-art p{font-size:17px;line-height:1.8;color:var(--muted);margin:0 0 16px}
.a-art p b,.a-art li b{color:var(--text)}
.a-art ul,.a-art ol{margin:0 0 18px;padding-left:22px}
.a-art li{font-size:16.5px;line-height:1.75;color:var(--muted);margin-bottom:8px}
.a-art a{color:var(--blue)}
.a-art table{width:100%;border-collapse:collapse;margin:8px 0 22px;font-size:15px;display:block;overflow-x:auto}
.a-art th{text-align:left;background:var(--blue-lt);color:var(--text);padding:12px 14px}
.a-art td{border-top:1px solid var(--border);padding:12px 14px;color:var(--muted);vertical-align:top}
.a-ilu{margin:34px 0}
.a-ilu .n-panel{min-height:380px}
.a-pasos{list-style:none;padding:0!important;margin:20px 0 0;counter-reset:p}
.a-pasos li{counter-increment:p;position:relative;padding:0 0 22px 58px;margin:0}
.a-pasos li::before{content:counter(p);position:absolute;left:0;top:0;width:38px;height:38px;border-radius:50%;background:var(--blue);color:var(--white);font-family:var(--font-body);font-weight:800;display:flex;align-items:center;justify-content:center}
.a-pasos li:not(:last-child)::after{content:'';position:absolute;left:18px;top:42px;bottom:4px;width:2px;background:var(--border)}
.a-pasos b{display:block;font-size:17px;color:var(--text);margin-bottom:4px}
.a-faq{display:flex;flex-direction:column;gap:10px;margin-top:18px}
.a-faq details{border:1.5px solid var(--border);border-radius:var(--r);background:var(--white)}
.a-faq details[open]{border-color:var(--blue)}
.a-faq summary{cursor:pointer;list-style:none;padding:17px 20px;font-weight:600;font-size:16px;color:var(--text);display:flex;justify-content:space-between;gap:16px}
.a-faq summary::-webkit-details-marker{display:none}
.a-faq summary::after{content:'+';color:var(--blue);font-weight:700;font-size:20px;line-height:1}
.a-faq details[open] summary::after{content:'−'}
.a-faq details p{padding:0 20px 18px;margin:0;font-size:15.5px}
.a-lado{position:sticky;top:92px;display:flex;flex-direction:column;gap:18px}
.a-toc{border:1px solid var(--border);border-radius:var(--r);padding:18px}
.a-toc b{display:block;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted2);margin-bottom:10px}
.a-toc a{display:block;font-size:14px;line-height:1.45;color:var(--muted);text-decoration:none;padding:6px 0 6px 12px;border-left:2px solid var(--border)}
.a-toc a:hover,.a-toc a.activo{color:var(--blue);border-left-color:var(--blue)}
.a-caja{border-radius:var(--r);padding:20px;background:var(--text);color:var(--white)}
.a-caja b{display:block;font-family:var(--font-display);font-size:18px;line-height:1.3;margin-bottom:8px}
.a-caja p{font-size:14px;line-height:1.6;color:rgba(255,255,255,.72);margin:0 0 14px}
.a-caja a{display:block;text-align:center;padding:11px;border-radius:10px;background:var(--white);color:var(--blue);font-weight:700;font-size:14px;text-decoration:none}
.a-caja a+a{background:transparent;color:var(--white);border:1px solid rgba(255,255,255,.3);margin-top:8px}
.a-compartir{display:flex;flex-wrap:wrap;gap:8px;margin-top:40px;padding-top:24px;border-top:1px solid var(--border);align-items:center;font-size:14px;color:var(--muted)}
.a-compartir a,.a-compartir button{font:inherit;font-size:13.5px;font-weight:600;color:var(--text);background:var(--white);border:1px solid var(--border);border-radius:999px;padding:7px 14px;text-decoration:none;cursor:pointer}
.a-compartir a:hover,.a-compartir button:hover{border-color:var(--blue);color:var(--blue)}
.a-enlaces{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
.a-enlaces a{font-size:14px;font-weight:600;padding:8px 14px;border-radius:999px;background:var(--blue-lt);color:var(--blue);text-decoration:none}
.a-rel{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}
.a-rel .n-panel{min-height:220px;padding:24px 18px}
.a-rel .n-panel .m-win{transform:scale(.82);transform-origin:center}
.a-rel .m-flota{display:none}
@media(max-width:1020px){.a-cuerpo{grid-template-columns:1fr;gap:24px}.a-lado{position:static}.a-toc{display:none}.a-rel{grid-template-columns:1fr}}
@media(max-width:768px){.a-hero{padding:100px 16px 28px}.a-video-wrap{padding:0 16px}.a-cuerpo{padding:36px 16px 16px}.a-ilu .n-panel{min-height:280px}}
</style>`;

// ── Piezas comunes ──────────────────────────────────────────────────────────
function head({ title, description, url, tipo, jsonld, extra = '' }) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
${GTM_HEAD}
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow, max-image-preview:large, max-video-preview:-1">
<meta property="og:type" content="${tipo}">
<meta property="og:locale" content="es_419">
<meta property="og:site_name" content="Acuarius">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
${extra}
<link rel="alternate" type="application/rss+xml" title="Novedades de Acuarius" href="${DOMINIO}${BASE}feed.xml">
${ICONO}
<link rel="preload" href="/fonts/Velocity.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/Outfit-Regular.woff2" as="font" type="font/woff2" crossorigin>
${ESTILO_BASE}
${ESTILO_NOV}
${ESTILO_ART}
${MENU_CSS}
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': jsonld }).replace(/</g, '\\u003c')}</script>
<script src="https://app.acuarius.app/origen.js" defer></script>
</head>
<body>
${GTM_BODY}

${menuHTML(url.replace(DOMINIO, ''))}
`;
}

const CTA = (h2 = 'Pruébalo en tu cuenta') => `
<section class="cta-section">
  <div class="cta-inner">
    <h2 class="cta-title">${esc(h2)}</h2>
    <p class="cta-sub">Si ya usas Acuarius, entra y pruébalo. Si todavía no, crea tu cuenta: tienes 14 días de Pro gratis, sin tarjeta.</p>
    <div class="cta-actions">
      <a href="${APP}" class="btn-primary btn-primary-lg" style="background:white;color:var(--blue)">Entrar a Acuarius</a>
      <a href="${REGISTRO}" class="btn-outline-lg">Crear cuenta gratis</a>
    </div>
  </div>
</section>`;

const SCRIPTS = `
<script>
// Video bajo demanda: hasta el clic solo se carga la miniatura; al pulsar, el
// reproductor de YouTube se monta aquí mismo y el video corre en la página.
document.addEventListener('click', function (e) {
  var b = e.target.closest && e.target.closest('.n-video[data-video]');
  if (!b) return;
  var f = document.createElement('iframe');
  f.src = 'https://www.youtube-nocookie.com/embed/' + b.getAttribute('data-video') + '?autoplay=1&rel=0&modestbranding=1&playsinline=1';
  f.title = b.getAttribute('aria-label') || 'Video';
  f.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen';
  f.allowFullscreen = true;
  b.replaceChildren(f);
  b.removeAttribute('data-video');
  try { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'video_play', pagina: location.pathname }); } catch (err) {}
});
// Capítulos: montan (o reinician) el reproductor en ese segundo.
document.addEventListener('click', function (e) {
  var c = e.target.closest && e.target.closest('[data-ir-a]');
  if (!c) return;
  var w = c.closest('.a-video-wrap'), v = w && w.querySelector('.n-video');
  if (!v) return;
  var id = v.getAttribute('data-video') || v.getAttribute('data-id');
  v.setAttribute('data-id', id);
  var f = document.createElement('iframe');
  f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&modestbranding=1&playsinline=1&start=' + c.getAttribute('data-ir-a');
  f.title = v.getAttribute('aria-label') || 'Video';
  f.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen';
  f.allowFullscreen = true;
  v.replaceChildren(f);
  v.removeAttribute('data-video');
  v.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
// Índices (barra de la edición y tabla de contenido del artículo): marcan la
// sección que se está leyendo.
(function () {
  var links = document.querySelectorAll('.n-indice a, .a-toc a');
  if (!links.length || !('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (en) {
      if (!en.isIntersecting) return;
      links.forEach(function (a) { a.classList.toggle('activo', a.getAttribute('href') === '#' + en.target.id); });
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  document.querySelectorAll('.n-func[id], .a-art h2[id]').forEach(function (s) { io.observe(s); });
})();
// Copiar el enlace del artículo.
document.addEventListener('click', function (e) {
  var b = e.target.closest && e.target.closest('[data-copiar]');
  if (!b) return;
  var listo = function () { b.textContent = 'Enlace copiado ✓'; setTimeout(function () { b.textContent = 'Copiar enlace'; }, 2000); };
  if (navigator.clipboard) navigator.clipboard.writeText(b.getAttribute('data-copiar')).then(listo, function () { prompt('Copia el enlace:', b.getAttribute('data-copiar')); });
  else prompt('Copia el enlace:', b.getAttribute('data-copiar'));
});
// Conversión: clic hacia la app → dataLayer, igual que el resto del sitio.
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a[href*="app.acuarius.app"]');
  if (!a) return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cta_click', cta_text: (a.textContent || '').trim().slice(0, 60), pagina: location.pathname });
  } catch (err) {}
});
</script>`;

const migasHTML = (lista) => `<div class="n-migas" role="navigation" aria-label="Migas de pan">${lista.map((x, i) => i === lista.length - 1 ? `<span aria-current="page" style="margin:0">${esc(x.nombre)}</span>` : `<a href="${x.url}">${esc(x.nombre)}</a><span>›</span>`).join('')}</div>`;
const migasLD = (lista) => ({ '@type': 'BreadcrumbList', itemListElement: lista.map((m, i) => ({ '@type': 'ListItem', position: i + 1, name: m.nombre, item: DOMINIO + m.url })) });
const ORG = { '@type': 'Organization', '@id': DOMINIO + '/#org', name: 'Acuarius', url: DOMINIO + '/', logo: { '@type': 'ImageObject', url: DOMINIO + '/logo.svg' } };

const panel = (a) => `<div class="n-panel" style="background:${tinteDe(a)}">${ILUSTRACIONES[a.ilustracion]()}</div>`;
const miniatura = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
function reproductor(a) {
  return `<button class="n-video" type="button" data-video="${esc(a.video.id)}" data-id="${esc(a.video.id)}" aria-label="Reproducir el video: ${esc(a.video.titulo)}"><img src="${miniatura(a.video.id)}" alt="${esc(a.video.titulo)}" width="480" height="360"><span>${PLAY().replace('<svg', '<svg style="color:var(--blue);margin-left:3px"')}</span></button>`;
}
const tarjeta = (a) => `<a class="n-card" href="${BASE}${a.slug}/">
        ${panel(a)}
        <div class="n-card-txt"><div class="n-mod">${esc(a.modulo)}</div><h3>${esc(a.h1)}</h3><p>${esc(a.resumen)}</p><span class="n-card-link">Leer la guía ${FLECHA}</span></div>
      </a>`;

// ── Artículo: /novedades/<slug>/ ────────────────────────────────────────────
function articulo(a) {
  const url = `${DOMINIO}${BASE}${a.slug}/`;
  const ed = EDICIONES.find((e) => e.numero === a.edicion);
  const corto = a.h1.split(':')[0];
  const lista = [{ nombre: 'Inicio', url: '/' }, { nombre: 'Novedades', url: BASE }, { nombre: corto, url: `${BASE}${a.slug}/` }];
  const secciones = a.secciones.map((s) => ({ ...s, id: idDe(s.h2) }));
  const idPasos = a.pasos ? idDe(a.pasos.h2) : null;
  const toc = [...secciones.map((s) => ({ id: s.id, t: s.h2 })), ...(a.pasos ? [{ id: idPasos, t: a.pasos.h2 }] : []), { id: 'preguntas-frecuentes', t: 'Preguntas frecuentes' }];
  const n = palabras(a);
  const minutos = Math.max(3, Math.round(n / 200));
  const rel = (a.relacionados || []).map((s) => porSlug[s]).filter(Boolean);
  const imagen = `https://i.ytimg.com/vi/${a.video.id}/maxresdefault.jpg`;
  const jsonld = [
    ORG,
    { '@type': 'BlogPosting', '@id': url + '#articulo', url, mainEntityOfPage: url, headline: a.h1, description: a.description,
      abstract: a.respuesta, inLanguage: 'es-419', datePublished: a.publicado, dateModified: a.actualizado || a.publicado,
      author: { '@id': ORG['@id'] }, publisher: { '@id': ORG['@id'] }, image: imagen,
      articleSection: a.modulo, keywords: a.kw, wordCount: n, video: { '@id': url + '#video' },
      isPartOf: { '@type': 'Blog', name: 'Novedades de Acuarius', url: DOMINIO + BASE },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.a-corta p'] } },
    { '@type': 'VideoObject', '@id': url + '#video', name: a.video.titulo, description: a.resumen,
      thumbnailUrl: [miniatura(a.video.id), imagen], uploadDate: a.video.subido + 'T12:00:00-05:00', duration: isoDur(a.video.segundos),
      embedUrl: `https://www.youtube-nocookie.com/embed/${a.video.id}`, contentUrl: `https://www.youtube.com/watch?v=${a.video.id}`,
      inLanguage: 'es', publisher: { '@id': ORG['@id'] },
      ...(a.video.capitulos?.length ? { hasPart: a.video.capitulos.map((c, i, l) => ({ '@type': 'Clip', name: c.t, startOffset: c.s, endOffset: (l[i + 1]?.s ?? a.video.segundos), url: `https://www.youtube.com/watch?v=${a.video.id}&t=${c.s}s` })) } : {}) },
    migasLD(lista),
    { '@type': 'FAQPage', mainEntity: a.faq.map((f) => ({ '@type': 'Question', name: sinEtiquetas(f.q), acceptedAnswer: { '@type': 'Answer', text: sinEtiquetas(f.a) } })) },
  ];
  if (a.pasos) {
    jsonld.push({ '@type': 'HowTo', name: sinEtiquetas(a.pasos.h2), description: sinEtiquetas(a.pasos.intro || a.resumen), inLanguage: 'es',
      step: a.pasos.items.map((p, i) => ({ '@type': 'HowToStep', position: i + 1, name: sinEtiquetas(p.t), text: sinEtiquetas(p.d), url: `${url}#${idPasos}` })) });
  }
  const ogExtra = `<meta property="og:image" content="${imagen}">
<meta property="og:video" content="https://www.youtube.com/watch?v=${a.video.id}">
<meta property="article:published_time" content="${a.publicado}">
<meta property="article:section" content="${esc(a.modulo)}">
<meta name="twitter:card" content="summary_large_image">`;
  // La ilustración va después de la segunda sección: corta el texto largo con
  // algo que mirar sin repetir el video.
  const cuerpo = secciones.map((s, i) => `<h2 id="${s.id}">${esc(s.h2)}</h2>\n${s.html}${i === 1 ? `\n<div class="a-ilu">${panel(a)}</div>` : ''}`).join('\n');
  const compartirTxt = encodeURIComponent(`${a.h1} ${url}`);
  return `${head({ title: tituloSeo(a.title), description: a.description, url, tipo: 'article', jsonld, extra: ogExtra })}
<header class="n-hero a-hero">
  <div class="n-in">
    ${migasHTML(lista)}
    <span class="n-eyebrow">${esc(a.modulo)}${ed ? ` · Novedades, edición ${dos(ed.numero)}` : ''}</span>
    <h1 class="n-h1 n-h1-ed">${esc(a.h1)}</h1>
    <p class="n-sub">${esc(a.resumen)}</p>
    <div class="a-meta"><span>Publicado el <b>${esc(fechaLarga(a.publicado))}</b></span><span>${minutos} min de lectura</span><span>Video de ${minSeg(a.video.segundos)}</span></div>
  </div>
</header>

<div class="a-video-wrap">
  ${reproductor(a)}
  <p class="a-video-cap">${a.video.propio ? 'Video guía' : 'Video de la Academia de Acuarius'}: ${esc(a.video.titulo)} · ${minSeg(a.video.segundos)}</p>
  ${a.video.capitulos?.length ? `<div class="a-caps" aria-label="Capítulos del video">${a.video.capitulos.map((c) => `<button type="button" data-ir-a="${c.s}"><b>${minSeg(c.s)}</b> ${esc(c.t)}</button>`).join('')}</div>` : ''}
</div>

<div class="a-cuerpo">
  <article class="a-art">
    <div class="a-corta"><b>En pocas palabras</b><p>${esc(a.respuesta)}</p></div>
${cuerpo}
${a.pasos ? `<h2 id="${idPasos}">${esc(a.pasos.h2)}</h2>\n${a.pasos.intro ? `<p>${a.pasos.intro}</p>` : ''}\n<ol class="a-pasos">${a.pasos.items.map((p) => `<li><b>${esc(p.t)}</b><p>${p.d}</p></li>`).join('')}</ol>` : ''}
<h2 id="preguntas-frecuentes">Preguntas frecuentes</h2>
<div class="a-faq">${a.faq.map((f) => `<details><summary>${esc(f.q)}</summary><p>${f.a}</p></details>`).join('')}</div>
${a.enlaces?.length ? `<h3>Para leer después</h3><div class="a-enlaces">${a.enlaces.map((l) => `<a href="${esc(l.url)}">${esc(l.texto)}</a>`).join('')}</div>` : ''}
    <div class="a-compartir">Comparte esta guía:
      <button type="button" data-copiar="${url}">Copiar enlace</button>
      <a href="https://wa.me/?text=${compartirTxt}" target="_blank" rel="noopener">WhatsApp</a>
      <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}" target="_blank" rel="noopener">LinkedIn</a>
    </div>
  </article>
  <aside class="a-lado">
    <div class="a-toc" role="navigation" aria-label="En este artículo"><b>En este artículo</b>${toc.map((t) => `<a href="#${t.id}">${esc(t.t)}</a>`).join('')}</div>
    <div class="a-caja"><b>Pruébalo en tu cuenta</b><p>14 días de Pro gratis, sin tarjeta. Si ya tienes cuenta, ya está activo.</p><a href="${REGISTRO}">Crear cuenta gratis</a><a href="${APP}">Entrar a Acuarius</a></div>
  </aside>
</div>

${rel.length ? `<section class="n-sec n-sec-gris">
  <div class="n-in">
    <div class="n-cab"><h2>Sigue leyendo</h2><p>Otras novedades${ed ? ` de la edición ${dos(ed.numero)}` : ''}. <a href="${BASE}" style="color:var(--blue);font-weight:600">Ver todas</a></p></div>
    <div class="a-rel">${rel.map(tarjeta).join('')}</div>
  </div>
</section>` : ''}
${CTA()}

${PIE}
${SCRIPTS}
${MENU_JS}
</body>
</html>
`;
}

// ── Índice: /novedades/ ─────────────────────────────────────────────────────
function indice() {
  const ult = EDICIONES[0];
  const title = 'Novedades de Acuarius: lo nuevo en tu CRM con IA';
  const description = 'Lo nuevo en Acuarius cada quincena: funciones del CRM, WhatsApp, agentes de IA, campañas y reportes, explicadas en guías con video.';
  const lista = [{ nombre: 'Inicio', url: '/' }, { nombre: 'Novedades', url: BASE }];
  const jsonld = [
    ORG,
    { '@type': 'Blog', '@id': DOMINIO + BASE, url: DOMINIO + BASE, name: 'Novedades de Acuarius', description, inLanguage: 'es-419', publisher: { '@id': ORG['@id'] },
      blogPost: ARTICULOS.map((a) => ({ '@type': 'BlogPosting', headline: a.h1, url: `${DOMINIO}${BASE}${a.slug}/`, datePublished: a.publicado })) },
    migasLD(lista),
  ];
  return `${head({ title, description, url: DOMINIO + BASE, tipo: 'website', jsonld, extra: '<meta name="twitter:card" content="summary">' })}
<section class="n-hero">
  <div class="n-in">
    ${migasHTML(lista)}
    <span class="n-eyebrow">Novedades</span>
    <h1 class="n-h1">Lo nuevo en Acuarius<i>.</i></h1>
    <p class="n-sub">Cada función nueva de tu CRM, tu WhatsApp y tus agentes de IA, explicada en una guía con video: qué hace, dónde está y cómo sacarle provecho.</p>
    <div class="n-edicion">
      <span class="n-pill">Edición ${dos(ult.numero)}</span>
      <span>${esc(ult.resumen)}</span>
      <a href="${BASE}${ult.slug}/">Ver la edición ${FLECHA}</a>
    </div>
  </div>
</section>

<section class="n-sec">
  <div class="n-in">
    <div class="n-cab"><h2>Lo más reciente</h2><p>Las guías de la última quincena, del ${esc(ult.periodo)}.</p></div>
    <div class="n-grid">
${ARTICULOS.map(tarjeta).join('\n')}
    </div>
  </div>
</section>

<section class="n-sec n-sec-gris">
  <div class="n-in">
    <div class="n-cab"><h2>Ediciones</h2><p>El resumen de cada quincena, con las mejoras menores y los arreglos.</p></div>
    <div class="n-lista-ed">${EDICIONES.map((e) => `<a href="${BASE}${e.slug}/"><span class="n-pill">Edición ${dos(e.numero)}</span><span><b>${esc(e.h1)}</b><br>${esc(e.resumen)}</span><em>${esc(fechaLarga(e.publicada))}</em></a>`).join('')}</div>
  </div>
</section>
${CTA('Todo esto ya está en tu cuenta')}

${PIE}
${SCRIPTS}
${MENU_JS}
</body>
</html>
`;
}

// ── Edición: /novedades/<edicion>/ ──────────────────────────────────────────
function edicion(e) {
  const url = `${DOMINIO}${BASE}${e.slug}/`;
  const lista = [{ nombre: 'Inicio', url: '/' }, { nombre: 'Novedades', url: BASE }, { nombre: `Edición ${dos(e.numero)}`, url: `${BASE}${e.slug}/` }];
  const arts = e.articulos.map((s) => porSlug[s]);
  const otras = EDICIONES.filter((o) => o.slug !== e.slug);
  const jsonld = [
    ORG,
    { '@type': 'CollectionPage', '@id': url, url, name: e.h1, description: e.description, inLanguage: 'es-419', datePublished: e.publicada,
      isPartOf: { '@type': 'Blog', name: 'Novedades de Acuarius', url: DOMINIO + BASE },
      hasPart: arts.map((a) => ({ '@type': 'BlogPosting', headline: a.h1, url: `${DOMINIO}${BASE}${a.slug}/` })) },
    migasLD(lista),
  ];
  return `${head({ title: e.title, description: e.description, url, tipo: 'website', jsonld, extra: '<meta name="twitter:card" content="summary">' })}
<section class="n-hero">
  <div class="n-in">
    ${migasHTML(lista)}
    <span class="n-eyebrow">Edición ${dos(e.numero)} · ${esc(e.periodo)}</span>
    <h1 class="n-h1 n-h1-ed">${esc(e.h1)}</h1>
    <p class="n-sub">${esc(e.sub)}</p>
    <div class="n-acciones">
      <a href="${APP}" class="btn-primary btn-primary-lg">Entrar a Acuarius ${FLECHA}</a>
      <a href="${REGISTRO}" class="n-btn-borde">Pruébalo gratis 14 días</a>
    </div>
  </div>
</section>

<section class="n-sec">
  <div class="n-in">
    <div class="n-cab"><h2>Lo nuevo, función por función</h2><p>Cada una tiene su guía completa con video.</p></div>
    <div class="n-grid">
${arts.map(tarjeta).join('\n')}
    </div>
  </div>
</section>

<section class="n-sec n-sec-gris" id="mas">
  <div class="n-in">
    <div class="n-cab"><h2>Más mejoras</h2><p>Cambios más pequeños que también llegaron en esta edición.</p></div>
    <div class="n-mini">${e.mas.map((m) => `<div><small>${esc(m.modulo)}</small><h3>${esc(m.titulo)}</h3><p>${esc(m.texto)}</p></div>`).join('')}</div>
  </div>
</section>

<section class="n-sec" id="arreglos">
  <div class="n-in">
    <div class="n-cab"><h2>Arreglos</h2><p>Lo que no funcionaba como debía y ya quedó bien.</p></div>
    <ul class="n-arreglos">${e.arreglos.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
  </div>
</section>

${otras.length ? `<section class="n-sec n-sec-gris"><div class="n-in"><div class="n-cab"><h2>Otras ediciones</h2></div><div class="n-lista-ed">${otras.map((o) => `<a href="${BASE}${o.slug}/"><span class="n-pill">Edición ${dos(o.numero)}</span><span><b>${esc(o.h1)}</b><br>${esc(o.resumen)}</span><em>${esc(fechaLarga(o.publicada))}</em></a>`).join('')}</div></div></section>` : ''}
${CTA('Todo esto ya está en tu cuenta')}

${PIE}
${SCRIPTS}
${MENU_JS}
</body>
</html>
`;
}

// ── Feed RSS ────────────────────────────────────────────────────────────────
function feed() {
  const x = (s) => esc(sinEtiquetas(s));
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Novedades de Acuarius</title>
  <link>${DOMINIO}${BASE}</link>
  <atom:link href="${DOMINIO}${BASE}feed.xml" rel="self" type="application/rss+xml"/>
  <description>Lo nuevo en Acuarius cada quincena, función por función.</description>
  <language>es</language>
${ARTICULOS.map((a) => `  <item>
    <title>${x(a.h1)}</title>
    <link>${DOMINIO}${BASE}${a.slug}/</link>
    <guid>${DOMINIO}${BASE}${a.slug}/</guid>
    <pubDate>${new Date(a.publicado + 'T12:00:00-05:00').toUTCString()}</pubDate>
    <category>${x(a.modulo)}</category>
    <description>${x(a.respuesta)}</description>
  </item>`).join('\n')}
</channel>
</rss>
`;
}

// ── Main (solo si se ejecuta directo; fuente-seo lo importa por URLS) ──────
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const errores = validar();
  if (errores.length) {
    console.error(`✗ ${errores.length} problema(s); no se escribió nada:\n  ` + errores.join('\n  '));
    process.exit(1);
  }
  const escribir = (ruta, html) => { const d = join(RAIZ, ruta); mkdirSync(dirname(d), { recursive: true }); writeFileSync(d, html); };
  escribir('novedades/index.html', indice());
  for (const a of ARTICULOS) escribir(`novedades/${a.slug}/index.html`, articulo(a));
  for (const e of EDICIONES) escribir(`novedades/${e.slug}/index.html`, edicion(e));
  escribir('novedades/feed.xml', feed());
  console.log(`✓ /novedades/: ${ARTICULOS.length} artículos (${ARTICULOS.map((a) => `${a.slug} ${palabras(a)}`).join(', ')}), ${EDICIONES.length} edición(es) y feed.xml`);
}
