// Genera acuarius.app/novedades/ desde ediciones.mjs.
//
//   node fuente-novedades/build.mjs
//
// Escribe novedades/index.html (el índice), novedades/<slug>/index.html (una
// por edición) y novedades/feed.xml. El sitemap lo arma fuente-seo/build.mjs,
// que importa URLS de aquí: un solo sitemap para todo el sitio.
//
// Igual que las páginas SEO, el estilo base, el logo, GTM y el pie se leen de
// partners.html en cada build. Lo propio de novedades va en ESTILO_NOV.
//
// Las ilustraciones son HTML y CSS, no capturas: se ven nítidas en cualquier
// pantalla, no pesan, y nunca muestran datos de un cliente real. Cuando una
// función tiene su video, el video ocupa ese lugar.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { EDICIONES } from './ediciones.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const DOMINIO = 'https://acuarius.app';
const REGISTRO = 'https://app.acuarius.app/registro';
const APP = 'https://app.acuarius.app/';
const BASE = '/novedades/';

export const URLS = [BASE, ...EDICIONES.map((e) => `${BASE}${e.slug}/`)];

// ── Validación ──────────────────────────────────────────────────────────────
function validar() {
  const errores = [];
  const slugs = new Set();
  for (const e of EDICIONES) {
    const err = (m) => errores.push(`${e.slug}: ${m}`);
    if (slugs.has(e.slug)) err('slug repetido');
    slugs.add(e.slug);
    if (e.title.length > 60) err(`title de ${e.title.length} caracteres (máx. 60)`);
    if (e.description.length < 120 || e.description.length > 160) err(`description de ${e.description.length} caracteres (120-160)`);
    const ids = new Set();
    for (const d of e.destacadas) {
      if (ids.has(d.id)) err(`sección repetida: ${d.id}`);
      ids.add(d.id);
      if (!d.video && !ILUSTRACIONES[d.ilustracion]) err(`${d.id}: sin video ni ilustración conocida («${d.ilustracion}»)`);
      if (d.video && !/^[\w-]{11}$/.test(d.video)) err(`${d.id}: el video no parece un ID de YouTube`);
    }
  }
  // La más nueva primero: el índice y el feed dependen de ese orden.
  for (let i = 1; i < EDICIONES.length; i++) {
    if (EDICIONES[i].publicada > EDICIONES[i - 1].publicada) errores.push('ediciones.mjs: la más nueva tiene que ir primero');
  }
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
const LOGO = extraer(/<a href="\/" class="nav-logo">[\s\S]*?<\/a>/, 'el logo del menú');
const GTM_HEAD = extraer(/<!-- Google Tag Manager -->[\s\S]*?<!-- End Google Tag Manager -->/, 'GTM del head');
const GTM_BODY = extraer(/<!-- Google Tag Manager \(noscript\) -->[\s\S]*?<!-- End Google Tag Manager \(noscript\) -->/, 'GTM del body');
const ICONO = extraer(/<link rel="icon"[^>]*>\n<link rel="icon"[^>]*>\n<link rel="apple-touch-icon"[^>]*>/, 'el favicon');
const PIE = extraer(/<footer>[\s\S]*?<\/footer>/, 'el pie');

const ESTILO_NOV = `<style>
/* Novedades: lo que partners.html no trae. Mismos tokens de marca. */
:root{
  --n-tinte-azul:#EEF0FD;--n-tinte-menta:#E6F6EF;--n-tinte-lila:#F1ECFB;--n-tinte-arena:#FBF3E6;
  --n-tinte-cielo:#E7F4FA;--n-tinte-rosa:#FBEDEF;--n-tinte-gris:#F2F3F7;
  --n-wa:#25D366;--n-wa-burbuja:#DCF8C6;--n-leido:#34B7F1;--n-alerta:#E5484D;
  --n-sombra:0 18px 40px -18px rgba(10,10,18,.22),0 4px 12px rgba(10,10,18,.06);
}
.n-hero{padding:132px 40px 56px;background:var(--white);position:relative;overflow:hidden}
.n-hero::before{content:'';position:absolute;inset:0;background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px);background-size:56px 56px;opacity:.45;-webkit-mask-image:radial-gradient(ellipse at 70% 0%,#000 0%,transparent 65%);mask-image:radial-gradient(ellipse at 70% 0%,#000 0%,transparent 65%)}
.n-in{max-width:1160px;margin:0 auto;position:relative}
.n-migas{font-size:12.5px;color:var(--muted2);margin-bottom:26px}
.n-migas a{color:var(--muted);text-decoration:none}.n-migas a:hover{color:var(--blue)}
.n-migas span{margin:0 6px}
.n-eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--blue)}
.n-eyebrow::before{content:'';width:8px;height:8px;border-radius:50%;background:var(--blue)}
.n-h1{font-family:var(--font-display);font-weight:800;letter-spacing:-.035em;line-height:1.04;color:var(--text);font-size:clamp(38px,6vw,72px);margin:18px 0 0;max-width:900px}
.n-h1 i{font-style:normal;color:var(--blue)}
.n-h1.n-h1-ed{font-size:clamp(32px,4.6vw,56px)}
.n-sub{font-size:18px;line-height:1.7;color:var(--muted);max-width:680px;margin-top:20px}
.n-acciones{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}
.n-btn-borde{padding:13px 26px;border:1.5px solid var(--border);border-radius:14px;font-size:15px;font-weight:600;color:var(--text);text-decoration:none;background:var(--white);transition:border-color .2s,color .2s}
.n-btn-borde:hover{border-color:var(--blue);color:var(--blue)}
.n-edicion{display:flex;flex-wrap:wrap;align-items:center;gap:14px;margin-top:34px;padding:16px 20px;border:1px solid var(--border);border-radius:var(--rlg);background:var(--white);max-width:760px;box-shadow:var(--n-sombra)}
.n-edicion b{font-family:var(--font-display);font-size:15px;color:var(--text)}
.n-edicion span:not(.n-pill){font-size:14px;color:var(--muted);flex:1;min-width:220px}
.n-edicion a{font-size:14px;font-weight:700;color:var(--blue);text-decoration:none;white-space:nowrap}
.n-pill{display:inline-block;font-size:11.5px;font-weight:700;letter-spacing:.04em;padding:4px 10px;border-radius:999px;background:var(--blue-lt);color:var(--blue)}
.n-sec{padding:72px 40px}
.n-sec-gris{background:var(--bg)}
.n-cab{display:flex;flex-wrap:wrap;align-items:end;justify-content:space-between;gap:16px;margin-bottom:34px}
.n-cab h2{font-family:var(--font-display);font-size:clamp(26px,3.4vw,38px);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:var(--text)}
.n-cab p{font-size:15.5px;color:var(--muted);max-width:520px;line-height:1.6}

/* Tarjetas del índice: panel de color con la ilustración + texto debajo. */
.n-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:28px}
.n-card{display:flex;flex-direction:column;text-decoration:none;color:inherit;border-radius:var(--rlg);transition:transform .25s}
.n-card:hover{transform:translateY(-3px)}
.n-card:hover .n-card-link{gap:10px}
.n-panel{border-radius:var(--rlg);padding:64px 34px 72px;min-height:300px;display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}
.n-card-txt{padding:20px 4px 0}
.n-mod{font-size:12px;font-weight:700;color:var(--muted);letter-spacing:.02em}
.n-card h3{font-family:var(--font-display);font-size:21px;font-weight:700;letter-spacing:-.015em;line-height:1.25;color:var(--text);margin:8px 0 10px}
.n-card p{font-size:15px;line-height:1.65;color:var(--muted)}
.n-card-link{display:inline-flex;align-items:center;gap:6px;margin-top:14px;font-size:14px;font-weight:700;color:var(--blue);transition:gap .2s;border-bottom:2px solid var(--blue);padding-bottom:2px}

.n-mini{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
.n-mini div{background:var(--white);border:1px solid var(--border);border-radius:var(--r);padding:20px 20px 22px}
.n-mini small{font-size:11.5px;font-weight:700;color:var(--blue);letter-spacing:.04em;text-transform:uppercase}
.n-mini h3{font-size:16px;font-weight:700;color:var(--text);margin:8px 0 6px;line-height:1.35}
.n-mini p{font-size:14px;line-height:1.6;color:var(--muted)}

.n-lista-ed{display:flex;flex-direction:column;gap:12px}
.n-lista-ed a{display:grid;grid-template-columns:auto 1fr auto;gap:18px;align-items:center;padding:20px 22px;border:1px solid var(--border);border-radius:var(--r);background:var(--white);text-decoration:none;color:var(--text);transition:border-color .2s}
.n-lista-ed a:hover{border-color:var(--blue)}
.n-lista-ed b{font-family:var(--font-display);font-size:17px}
.n-lista-ed span{font-size:14px;color:var(--muted)}
.n-lista-ed em{font-style:normal;font-size:13px;color:var(--muted2);white-space:nowrap}

/* Página de una edición */
.n-indice{position:sticky;top:68px;z-index:50;background:rgba(255,255,255,.92);backdrop-filter:blur(14px);border-bottom:1px solid var(--border);border-top:1px solid var(--border)}
.n-indice div{max-width:1160px;margin:0 auto;padding:12px 40px;display:flex;gap:8px;overflow-x:auto;scrollbar-width:none}
.n-indice div::-webkit-scrollbar{display:none}
.n-indice a{flex:none;font-size:13.5px;font-weight:600;color:var(--muted);text-decoration:none;padding:8px 14px;border-radius:999px;transition:background .2s,color .2s}
.n-indice a:hover,.n-indice a.activo{background:var(--blue-lt);color:var(--blue)}
.n-func{padding:84px 40px;scroll-margin-top:130px}
.n-func:nth-of-type(even){background:var(--bg)}
.n-func-in{max-width:1160px;margin:0 auto;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.08fr);gap:56px;align-items:center}
.n-func.n-alt .n-func-media{order:-1}
.n-func h2{font-family:var(--font-display);font-size:clamp(24px,2.6vw,32px);font-weight:800;letter-spacing:-.03em;line-height:1.12;color:var(--text);margin:14px 0 16px}
.n-func p{font-size:16.5px;line-height:1.75;color:var(--muted)}
.n-func p b{color:var(--text)}
.n-checks{list-style:none;margin:22px 0 0;padding:0;display:flex;flex-direction:column;gap:12px}
.n-checks li{position:relative;padding-left:32px;font-size:15px;line-height:1.6;color:var(--text)}
.n-checks li::before{content:'';position:absolute;left:0;top:2px;width:20px;height:20px;border-radius:50%;background:var(--blue-lt) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231E2BCC' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12l5 5L19 8'/%3E%3C/svg%3E") center/12px no-repeat}
.n-donde{display:inline-flex;align-items:center;gap:8px;margin-top:24px;font-size:13.5px;color:var(--muted);background:var(--white);border:1px solid var(--border);border-radius:999px;padding:7px 14px}
.n-donde b{color:var(--text);font-weight:600}
.n-guia{display:flex;align-items:center;gap:10px;margin-top:14px;font-size:14px;color:var(--muted);text-decoration:none}
.n-guia b{color:var(--blue)}
.n-guia svg{flex:none}
.n-func-media .n-panel{min-height:420px}

.n-video{position:relative;width:100%;aspect-ratio:16/9;border:0;padding:0;border-radius:var(--rlg);overflow:hidden;background:var(--text);cursor:pointer;box-shadow:var(--n-sombra);display:block}
.n-video img{width:100%;height:100%;object-fit:cover;display:block;opacity:.92;transition:opacity .2s}
.n-video:hover img{opacity:1}
.n-video span{position:absolute;inset:0;margin:auto;width:72px;height:72px;border-radius:50%;background:var(--white);display:flex;align-items:center;justify-content:center;box-shadow:var(--n-sombra)}
.n-video iframe{position:absolute;inset:0;width:100%;height:100%;border:0}

.n-arreglos{list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px 28px}
.n-arreglos li{position:relative;padding-left:22px;font-size:15px;line-height:1.6;color:var(--muted)}
.n-arreglos li::before{content:'';position:absolute;left:4px;top:10px;width:7px;height:7px;border-radius:50%;background:var(--muted2)}

/* ── Ilustraciones de producto ── */
.m-win{width:100%;max-width:440px;background:var(--white);border-radius:16px;box-shadow:var(--n-sombra);overflow:hidden;font-family:var(--font-body);color:var(--text);text-align:left}
.m-bar{display:flex;align-items:center;gap:8px;padding:12px 16px;border-bottom:1px solid var(--border);font-size:13px;font-weight:700}
.m-bar i{width:8px;height:8px;border-radius:50%;background:var(--border)}
.m-bar em{font-style:normal;margin-left:auto;font-size:11.5px;font-weight:600;color:var(--blue);background:var(--blue-lt);padding:3px 9px;border-radius:999px}
.m-body{padding:14px 16px}
.m-row{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border)}
.m-row:last-child{border-bottom:0}
.m-foto{width:42px;height:42px;border-radius:10px;flex:none}
.m-row b{display:block;font-size:13.5px}
.m-row small{display:block;font-size:12px;color:var(--muted)}
.m-row .m-der{margin-left:auto;text-align:right}
.m-precio{font-size:13.5px;font-weight:700}
.m-total{display:flex;justify-content:space-between;align-items:center;margin-top:8px;padding:12px 14px;border-radius:12px;background:var(--blue-lt);font-size:13px;color:var(--blue);font-weight:700}
.m-total b{font-size:17px;font-family:var(--font-display)}
.m-flota{position:absolute;background:var(--white);border-radius:14px;box-shadow:var(--n-sombra);padding:10px 14px;font-size:12.5px;display:flex;align-items:center;gap:10px;color:var(--text);text-align:left}
.m-flota b{display:block;font-size:12.5px}
.m-flota small{color:var(--muted);font-size:11.5px}
.m-ico{width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex:none;color:var(--white);font-size:13px;font-weight:800}
.m-campo{display:grid;grid-template-columns:120px 1fr;gap:10px;align-items:center;padding:9px 0;border-bottom:1px solid var(--border);font-size:13px}
.m-campo span{color:var(--muted)}
.m-campo b{font-weight:600}
.m-chip{display:inline-block;font-size:11.5px;font-weight:600;padding:3px 9px;border-radius:999px;background:var(--blue-lt);color:var(--blue);margin:0 4px 4px 0}
.m-chat{background:var(--n-tinte-gris);padding:14px;display:flex;flex-direction:column;gap:8px;min-height:220px}
.m-msg{max-width:78%;font-size:13px;line-height:1.45;padding:8px 11px;border-radius:12px;background:var(--white);box-shadow:0 1px 1px rgba(0,0,0,.05)}
.m-msg.m-yo{align-self:flex-end;background:var(--n-wa-burbuja);border-bottom-right-radius:4px}
.m-msg.m-el{border-bottom-left-radius:4px}
.m-msg.m-ia{align-self:flex-end;background:var(--blue);color:var(--white);border-bottom-right-radius:4px}
.m-msg sub{display:block;text-align:right;font-size:10.5px;color:var(--muted);margin-top:2px;vertical-align:baseline}
.m-msg.m-ia sub{color:rgba(255,255,255,.7)}
.m-msg sub em{font-style:normal;color:var(--n-leido);font-weight:700;letter-spacing:-2px;margin-left:4px}
.m-msg u{text-decoration:none;display:block;font-size:10.5px;font-weight:700;opacity:.75;margin-bottom:2px}
.m-buscar{display:flex;align-items:center;gap:8px;margin:12px 16px;padding:9px 12px;border:1.5px solid var(--blue);border-radius:10px;font-size:13px;color:var(--text)}
.m-buscar::after{content:'';width:1.5px;height:15px;background:var(--blue);animation:m-cursor 1s steps(1) infinite}
@keyframes m-cursor{50%{opacity:0}}
.m-dias{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;text-align:center;font-size:11.5px;color:var(--muted);margin-bottom:12px}
.m-dias b{display:block;font-size:15px;color:var(--text);margin-top:2px}
.m-dias .m-hoy{background:var(--blue);color:var(--white);border-radius:10px;padding:6px 0}
.m-dias .m-hoy b{color:var(--white)}
.m-horas{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.m-horas span{border:1.5px solid var(--border);border-radius:10px;padding:9px 0;text-align:center;font-size:13px;font-weight:600}
.m-horas .m-elegida{border-color:var(--blue);background:var(--blue);color:var(--white)}
.m-nps{display:flex;align-items:end;gap:6px;height:110px;margin:6px 0 12px}
.m-nps i{flex:1;border-radius:6px 6px 2px 2px;background:var(--blue-lt)}
.m-nps i.m-sube{background:var(--blue)}
.m-kpi{display:flex;gap:10px}
.m-kpi div{flex:1;border:1px solid var(--border);border-radius:12px;padding:10px 12px}
.m-kpi small{display:block;font-size:11px;color:var(--muted)}
.m-kpi b{font-family:var(--font-display);font-size:22px}
.m-kpi .m-ok{color:var(--success);font-size:12px;font-weight:700}
.m-tabla{width:100%;border-collapse:collapse;font-size:12.5px}
.m-tabla th{text-align:left;color:var(--muted);font-weight:600;padding:8px 6px;border-bottom:1px solid var(--border)}
.m-tabla td{padding:10px 6px;border-bottom:1px solid var(--border)}
.m-tabla td:not(:first-child),.m-tabla th:not(:first-child){text-align:right}
.m-tabla .m-dest{color:var(--blue);font-weight:800}

@media(max-width:960px){
  .n-func-in{grid-template-columns:1fr;gap:34px}
  .n-func.n-alt .n-func-media{order:0}
  .n-mini{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media(max-width:768px){
  .nav-links{display:none}
  .n-hero{padding:104px 16px 44px}
  .n-sec,.n-func{padding:56px 16px}
  .n-indice div{padding:10px 16px}
  .n-grid,.n-mini,.n-arreglos{grid-template-columns:1fr}
  .n-panel{padding:26px 16px;min-height:260px}
  .n-func-media .n-panel{min-height:300px}
  .n-lista-ed a{grid-template-columns:1fr}
  .m-flota{display:none}
}
</style>`;

// ── Utilidades ──────────────────────────────────────────────────────────────
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const sinEtiquetas = (s) => String(s).replace(/<[^>]+>/g, '');
const FLECHA = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
const PLAY = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const fechaLarga = (iso) => { const [a, m, d] = iso.split('-').map(Number); return `${d} de ${MESES[m - 1]} de ${a}`; };
const dos = (n) => String(n).padStart(2, '0');
const TINTES = ['azul', 'menta', 'lila', 'arena', 'cielo', 'rosa', 'gris'];
const tinte = (i) => `var(--n-tinte-${TINTES[i % TINTES.length]})`;

// ── Ilustraciones ───────────────────────────────────────────────────────────
// Datos de ejemplo inventados. Nunca un nombre o una cifra de un cliente real.
const ILUSTRACIONES = {
  productos: () => `
<div class="m-win">
  <div class="m-bar"><i></i><i></i><i></i>&nbsp;Oportunidad · Laura Méndez<em>3 productos</em></div>
  <div class="m-body">
    <div class="m-row"><span class="m-foto" style="background:linear-gradient(135deg,#C9D4FF,#8C9BF0)"></span><span><b>Plan anual de mantenimiento</b><small>1 × $1.200.000 · IVA 19 %</small></span><span class="m-der m-precio">$1.428.000</span></div>
    <div class="m-row"><span class="m-foto" style="background:linear-gradient(135deg,#BFEBD6,#6FCF9F)"></span><span><b>Instalación en sitio</b><small>1 × $350.000 · IVA 19 %</small></span><span class="m-der m-precio">$416.500</span></div>
    <div class="m-row"><span class="m-foto" style="background:linear-gradient(135deg,#FFE0B8,#F5B06A)"></span><span><b>Kit de repuestos</b><small>2 × $95.000 · −10 %</small></span><span class="m-der m-precio">$203.490</span></div>
    <div class="m-total">Valor del negocio <b>$2.047.990</b></div>
  </div>
</div>
<div class="m-flota" style="right:16px;bottom:14px"><span class="m-ico" style="background:var(--n-wa)">✓</span><span><b>Producto enviado por WhatsApp</b><small>Con foto, precio y enlace de pago</small></span></div>`,

  campos: () => `
<div class="m-win">
  <div class="m-bar"><i></i><i></i><i></i>&nbsp;Ficha · Andrés Rojas<em>Campos propios</em></div>
  <div class="m-body">
    <div class="m-campo"><span>Presupuesto</span><b>$ 320.000.000</b></div>
    <div class="m-campo"><span>Tipo de inmueble</span><b>Apartamento</b></div>
    <div class="m-campo"><span>Intereses</span><span><span class="m-chip">Piscina</span><span class="m-chip">Parqueadero</span><span class="m-chip">Gimnasio</span></span></div>
    <div class="m-campo"><span>Fecha de mudanza</span><b>15 de enero</b></div>
    <div class="m-campo"><span>¿Crédito aprobado?</span><b>Sí</b></div>
  </div>
</div>
<div class="m-flota" style="left:16px;top:14px"><span class="m-ico" style="background:var(--blue)">IA</span><span><b>El agente llenó «Presupuesto»</b><small>Lo dijo en el chat hace 2 min</small></span></div>
<div class="m-flota" style="right:16px;bottom:14px"><span class="m-ico" style="background:var(--text)">⑂</span><span><b>Condición</b><small>Presupuesto ≥ 100.000.000 → Sí</small></span></div>`,

  whatsapp: () => `
<div class="m-win">
  <div class="m-bar"><i></i><i></i><i></i>&nbsp;Conversaciones<em style="background:var(--n-tinte-rosa);color:var(--n-alerta)">3 sin leer</em></div>
  <div class="m-buscar">Valentina</div>
  <div class="m-chat">
    <div class="m-msg m-el">Hola, ¿todavía tienen disponible el modelo que vi en el anuncio?<sub>10:42</sub></div>
    <div class="m-msg m-yo">¡Hola, Valentina! Sí, quedan dos unidades. Te paso la ficha con precio y fotos.<sub>10:43 <em>✓✓</em></sub></div>
    <div class="m-msg m-el">Perfecto, gracias 🙌<sub>10:44</sub></div>
  </div>
</div>
<div class="m-flota" style="right:16px;top:14px"><span class="m-ico" style="background:var(--n-wa)">●</span><span><b>Mensaje nuevo, en vivo</b><small>Sin recargar la página</small></span></div>`,

  agente: () => `
<div class="m-win">
  <div class="m-bar"><i></i><i></i><i></i>&nbsp;Agente de IA · WhatsApp<em>Activo</em></div>
  <div class="m-chat">
    <div class="m-msg m-el">Quiero hablar con un asesor, por favor<sub>16:05</sub></div>
    <div class="m-msg m-ia"><u>Agente de IA</u>¡Claro! Para que te contacte, ¿me compartes tu nombre y tu correo?<sub>16:05 <em>✓✓</em></sub></div>
    <div class="m-msg m-el">Carlos Pérez, carlos@correo.com<sub>16:06</sub></div>
    <div class="m-msg m-ia"><u>Agente de IA</u>Gracias, Carlos. Te paso con Laura, del equipo comercial, que te escribe en un momento.<sub>16:06 <em>✓✓</em></sub></div>
  </div>
</div>
<div class="m-flota" style="left:16px;bottom:14px"><span class="m-ico" style="background:var(--success)">✓</span><span><b>Pasado a Laura</b><small>Con nombre, teléfono y correo</small></span></div>`,

  agenda: () => `
<div class="m-win">
  <div class="m-bar"><i></i><i></i><i></i>&nbsp;Agenda una reunión con Laura<em>30 min · Meet</em></div>
  <div class="m-body">
    <div class="m-dias"><span>lun<b>10</b></span><span class="m-hoy">mar<b>11</b></span><span>mié<b>12</b></span><span>jue<b>13</b></span><span>vie<b>14</b></span></div>
    <div class="m-horas"><span>8:30</span><span>9:00</span><span class="m-elegida">10:30</span><span>11:00</span><span>2:30</span><span>4:00</span></div>
    <div class="m-total" style="margin-top:14px">Martes 11 · 10:30 a. m. <b style="font-size:14px">Confirmar</b></div>
  </div>
</div>
<div class="m-flota" style="right:16px;top:14px"><span class="m-ico" style="background:var(--n-wa)">✓</span><span><b>Confirmación por WhatsApp</b><small>Y recordatorio 1 hora antes</small></span></div>`,

  satisfaccion: () => `
<div class="m-win">
  <div class="m-bar"><i></i><i></i><i></i>&nbsp;Análisis · Satisfacción<em>Últimos 6 meses</em></div>
  <div class="m-body">
    <div class="m-kpi"><div><small>NPS del mes</small><b>62</b> <span class="m-ok">▲ 8</span></div><div><small>Respuestas</small><b>148</b></div><div><small>Por llamar</small><b style="color:var(--n-alerta)">3</b></div></div>
    <div class="m-nps"><i style="height:38%"></i><i style="height:46%"></i><i style="height:44%"></i><i style="height:58%"></i><i style="height:66%"></i><i class="m-sube" style="height:82%"></i></div>
  </div>
</div>
<div class="m-flota" style="left:16px;bottom:14px"><span class="m-ico" style="background:var(--n-alerta)">!</span><span><b>Llamar a Marta antes de 24 h</b><small>Calificó 4 de 10</small></span></div>`,

  pauta: () => `
<div class="m-win">
  <div class="m-bar"><i></i><i></i><i></i>&nbsp;Plataformas de pauta · Meta Ads<em>Clic a WhatsApp</em></div>
  <div class="m-body">
    <table class="m-tabla">
      <thead><tr><th>Campaña</th><th>Conv.</th><th>Chats</th><th>Ventas</th></tr></thead>
      <tbody>
        <tr><td>Lanzamiento octubre</td><td>214</td><td class="m-dest">198</td><td>17</td></tr>
        <tr><td>Remarketing catálogo</td><td>96</td><td class="m-dest">91</td><td>9</td></tr>
        <tr><td>Prospección ciudad</td><td>130</td><td class="m-dest">122</td><td>6</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="m-flota" style="right:16px;bottom:14px"><span class="m-ico" style="background:var(--blue)">◎</span><span><b>Viene del anuncio «Video 15 s»</b><small>Campaña, conjunto y anuncio en la ficha</small></span></div>`,
};

const panel = (d, i) => `<div class="n-panel" style="background:${tinte(i)}">${ILUSTRACIONES[d.ilustracion]()}</div>`;

function media(d, i) {
  if (d.video) {
    return `<button class="n-video" type="button" data-video="${esc(d.video)}" aria-label="Ver el video: ${esc(sinEtiquetas(d.titulo))}"><img src="https://i.ytimg.com/vi/${esc(d.video)}/hqdefault.jpg" alt="" loading="lazy" width="480" height="360"><span>${PLAY.replace('width="16" height="16"', 'width="26" height="26" style="color:var(--blue);margin-left:3px"')}</span></button>`;
  }
  return panel(d, i);
}

// ── Cabecera, menú, pie ─────────────────────────────────────────────────────
function head({ title, description, url, tipo, jsonld, feed }) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
${GTM_HEAD}
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta property="og:type" content="${tipo}">
<meta property="og:locale" content="es_419">
<meta property="og:site_name" content="Acuarius">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta name="twitter:card" content="summary">
${feed ? `<link rel="alternate" type="application/rss+xml" title="Novedades de Acuarius" href="${DOMINIO}${BASE}feed.xml">` : ''}
${ICONO}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
${ESTILO_BASE}
${ESTILO_NOV}
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': jsonld }).replace(/</g, '\\u003c')}</script>
<script src="https://app.acuarius.app/origen.js" defer></script>
</head>
<body>
${GTM_BODY}

<nav>
  <div class="nav-inner">
    ${LOGO}
    <div class="nav-links">
      <a href="/">Inicio</a>
      <a href="/crm/">CRM</a>
      <a href="/crm/whatsapp/">WhatsApp</a>
      <a href="${BASE}" style="color:var(--text)">Novedades</a>
      <a href="/#planes">Precios</a>
    </div>
    <div class="nav-cta">
      <a href="https://app.acuarius.app/login.html" class="btn-ghost">Iniciar sesión</a>
      <a href="${REGISTRO}" class="btn-primary">Crear cuenta gratis ${FLECHA}</a>
    </div>
  </div>
</nav>
`;
}

const CTA = `
<section class="cta-section">
  <div class="cta-inner">
    <h2 class="cta-title">Todo esto ya está en tu cuenta</h2>
    <p class="cta-sub">Si ya usas Acuarius, entra y pruébalo. Si todavía no, crea tu cuenta: tienes 14 días de Pro gratis, sin tarjeta.</p>
    <div class="cta-actions">
      <a href="${APP}" class="btn-primary btn-primary-lg" style="background:white;color:var(--blue)">Entrar a Acuarius</a>
      <a href="${REGISTRO}" class="btn-outline-lg">Crear cuenta gratis</a>
    </div>
  </div>
</section>`;

const SCRIPTS = `
<script>
// Video de YouTube bajo demanda: hasta el clic solo se carga la miniatura.
document.addEventListener('click', function (e) {
  var b = e.target.closest && e.target.closest('.n-video[data-video]');
  if (!b) return;
  var f = document.createElement('iframe');
  f.src = 'https://www.youtube-nocookie.com/embed/' + b.getAttribute('data-video') + '?autoplay=1&rel=0';
  f.title = b.getAttribute('aria-label') || 'Video';
  f.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
  f.allowFullscreen = true;
  b.replaceChildren(f);
  b.removeAttribute('data-video');
});
// Índice de la edición: marca la sección que se está leyendo.
(function () {
  var links = document.querySelectorAll('.n-indice a');
  if (!links.length || !('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (en) {
      if (!en.isIntersecting) return;
      links.forEach(function (a) { a.classList.toggle('activo', a.getAttribute('href') === '#' + en.target.id); });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('.n-func[id]').forEach(function (s) { io.observe(s); });
})();
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
const ORG = { '@type': 'Organization', name: 'Acuarius', url: DOMINIO + '/', logo: DOMINIO + '/logo.svg' };

// ── Índice: /novedades/ ─────────────────────────────────────────────────────
function indice() {
  const ult = EDICIONES[0];
  const urlUlt = `${BASE}${ult.slug}/`;
  const title = 'Novedades de Acuarius: lo nuevo en tu CRM con IA';
  const description = 'Lo nuevo en Acuarius cada quincena: funciones del CRM, WhatsApp, agentes de IA, campañas y reportes, explicadas con ejemplos y videos guía.';
  const lista = [{ nombre: 'Inicio', url: '/' }, { nombre: 'Novedades', url: BASE }];
  const jsonld = [
    { '@type': 'CollectionPage', '@id': DOMINIO + BASE, url: DOMINIO + BASE, name: title, description, inLanguage: 'es-419', isPartOf: { '@type': 'WebSite', name: 'Acuarius', url: DOMINIO + '/' } },
    migasLD(lista),
    { '@type': 'ItemList', itemListElement: EDICIONES.map((e, i) => ({ '@type': 'ListItem', position: i + 1, url: `${DOMINIO}${BASE}${e.slug}/`, name: e.h1 })) },
  ];
  return `${head({ title, description, url: DOMINIO + BASE, tipo: 'website', jsonld, feed: true })}
<section class="n-hero">
  <div class="n-in">
    ${migasHTML(lista)}
    <span class="n-eyebrow">Novedades</span>
    <h1 class="n-h1">Lo nuevo en Acuarius<i>.</i></h1>
    <p class="n-sub">Cada quincena te contamos qué cambió en tu CRM, tu WhatsApp y tus agentes de IA: qué hace cada función, dónde está y cómo sacarle provecho.</p>
    <div class="n-edicion">
      <span class="n-pill">Edición ${dos(ult.numero)}</span>
      <span>${esc(ult.resumen)}</span>
      <a href="${urlUlt}">Leer la edición ${FLECHA}</a>
    </div>
  </div>
</section>

<section class="n-sec">
  <div class="n-in">
    <div class="n-cab"><h2>Lo más reciente</h2><p>Del ${esc(ult.periodo)}.</p></div>
    <div class="n-grid">
${ult.destacadas.map((d, i) => `      <a class="n-card" href="${urlUlt}#${d.id}">
        ${panel(d, i)}
        <div class="n-card-txt"><div class="n-mod">${esc(d.modulo)}</div><h3>${esc(d.titulo)}</h3><p>${esc(d.corto)}</p><span class="n-card-link">Ver cómo funciona ${FLECHA}</span></div>
      </a>`).join('\n')}
    </div>
  </div>
</section>

<section class="n-sec n-sec-gris">
  <div class="n-in">
    <div class="n-cab"><h2>Más mejoras de la quincena</h2><p>Cambios más pequeños que te ahorran tiempo todos los días.</p></div>
    <div class="n-mini">${ult.mas.map((m) => `<div><small>${esc(m.modulo)}</small><h3>${esc(m.titulo)}</h3><p>${esc(m.texto)}</p></div>`).join('')}</div>
  </div>
</section>

<section class="n-sec">
  <div class="n-in">
    <div class="n-cab"><h2>Todas las ediciones</h2><p>El historial de lo que hemos lanzado, de la más nueva a la más antigua.</p></div>
    <div class="n-lista-ed">${EDICIONES.map((e) => `<a href="${BASE}${e.slug}/"><span class="n-pill">Edición ${dos(e.numero)}</span><span><b>${esc(e.h1)}</b><br>${esc(e.resumen)}</span><em>${esc(fechaLarga(e.publicada))}</em></a>`).join('')}</div>
  </div>
</section>
${CTA}

${PIE}
${SCRIPTS}
</body>
</html>
`;
}

// ── Una edición: /novedades/<slug>/ ─────────────────────────────────────────
function edicion(e, idx) {
  const url = `${DOMINIO}${BASE}${e.slug}/`;
  const lista = [{ nombre: 'Inicio', url: '/' }, { nombre: 'Novedades', url: BASE }, { nombre: `Edición ${dos(e.numero)}`, url: `${BASE}${e.slug}/` }];
  const otras = EDICIONES.filter((o) => o.slug !== e.slug);
  const jsonld = [
    { '@type': 'BlogPosting', '@id': url, url, mainEntityOfPage: url, headline: e.h1, description: e.description, inLanguage: 'es-419',
      datePublished: e.publicada, dateModified: e.publicada, author: ORG, publisher: ORG,
      about: e.destacadas.map((d) => sinEtiquetas(d.titulo)),
      isPartOf: { '@type': 'Blog', name: 'Novedades de Acuarius', url: DOMINIO + BASE } },
    migasLD(lista),
  ];
  return `${head({ title: e.title, description: e.description, url, tipo: 'article', jsonld, feed: true })}
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

<nav class="n-indice" aria-label="En esta edición"><div>${e.destacadas.map((d) => `<a href="#${d.id}">${esc(d.chip || d.modulo)}</a>`).join('')}<a href="#mas">Más mejoras</a><a href="#arreglos">Arreglos</a></div></nav>

${e.destacadas.map((d, i) => `<section class="n-func${i % 2 ? ' n-alt' : ''}" id="${d.id}">
  <div class="n-func-in">
    <div>
      <span class="n-eyebrow">${esc(d.modulo)}</span>
      <h2>${esc(d.titulo)}</h2>
      <p>${d.texto}</p>
      <ul class="n-checks">${d.puntos.map((p) => `<li>${p}</li>`).join('')}</ul>
      <div class="n-donde">Dónde está: <b>${esc(d.donde)}</b></div>
      ${!d.video && d.relacionado ? `<a class="n-guia" href="https://www.youtube.com/watch?v=${esc(d.relacionado.id)}" target="_blank" rel="noopener"><span class="m-ico" style="background:var(--blue);width:26px;height:26px">${PLAY.replace('width="16" height="16"', 'width="12" height="12"')}</span><span>Guía en video: <b>${esc(d.relacionado.titulo)}</b></span></a>` : ''}
    </div>
    <div class="n-func-media">${media(d, i)}</div>
  </div>
</section>`).join('\n')}

<section class="n-sec n-sec-gris" id="mas" style="scroll-margin-top:130px">
  <div class="n-in">
    <div class="n-cab"><h2>Más mejoras</h2><p>Cambios más pequeños que también llegaron en esta edición.</p></div>
    <div class="n-mini">${e.mas.map((m) => `<div><small>${esc(m.modulo)}</small><h3>${esc(m.titulo)}</h3><p>${esc(m.texto)}</p></div>`).join('')}</div>
  </div>
</section>

<section class="n-sec" id="arreglos" style="scroll-margin-top:130px">
  <div class="n-in">
    <div class="n-cab"><h2>Arreglos</h2><p>Lo que no funcionaba como debía y ya quedó bien.</p></div>
    <ul class="n-arreglos">${e.arreglos.map((a) => `<li>${esc(a)}</li>`).join('')}</ul>
  </div>
</section>

<section class="n-sec n-sec-gris">
  <div class="n-in">
    <div class="n-cab"><h2>${otras.length ? 'Otras ediciones' : 'Sigue al tanto'}</h2><p>${otras.length ? 'Lo que lanzamos en quincenas anteriores.' : 'Publicamos una edición cada quincena. Esta es la primera.'}</p></div>
    <div class="n-lista-ed">${otras.length
      ? otras.map((o) => `<a href="${BASE}${o.slug}/"><span class="n-pill">Edición ${dos(o.numero)}</span><span><b>${esc(o.h1)}</b><br>${esc(o.resumen)}</span><em>${esc(fechaLarga(o.publicada))}</em></a>`).join('')
      : `<a href="${BASE}"><span class="n-pill">Novedades</span><span><b>Todas las novedades de Acuarius</b><br>El índice con cada edición y cada función nueva.</span><em>Ver ${FLECHA}</em></a>`}</div>
  </div>
</section>
${CTA}

${PIE}
${SCRIPTS}
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
  <description>Lo nuevo en Acuarius cada quincena.</description>
  <language>es</language>
${EDICIONES.map((e) => `  <item>
    <title>${x(e.h1)}</title>
    <link>${DOMINIO}${BASE}${e.slug}/</link>
    <guid>${DOMINIO}${BASE}${e.slug}/</guid>
    <pubDate>${new Date(e.publicada + 'T12:00:00-05:00').toUTCString()}</pubDate>
    <description>${x(e.resumen)}</description>
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
  EDICIONES.forEach((e, i) => escribir(`novedades/${e.slug}/index.html`, edicion(e, i)));
  escribir('novedades/feed.xml', feed());
  console.log(`✓ /novedades/, ${EDICIONES.length} edición(es) y feed.xml`);
}
