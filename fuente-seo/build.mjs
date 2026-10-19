// Genera las páginas SEO de acuarius.app desde mapa.mjs + contenido/*.mjs.
//
//   node fuente-seo/build.mjs
//
// Escribe <url>/index.html en la raíz del repo (con cleanUrls de Vercel la
// carpeta responde en /crm/ y en /crm), sitemap.xml, robots.txt y
// fuente-seo/MAPA.md. Sin dependencias, como el resto del repo.
//
// El estilo, el logo y el pie se leen de partners.html en cada build: así las
// páginas nuevas se ven igual que el resto del sitio y no hay una segunda
// copia del CSS que se desfase.
//
// Si un title, una description o un H1 incumple las reglas SEO, el build se
// detiene y no escribe nada: preferible a publicar una página a medias.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { MAPA, CLUSTERS } from './mapa.mjs';
import { CONTENIDO as C1 } from './contenido/c1-crm.mjs';
import { CONTENIDO as C2 } from './contenido/c2-comparativas.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const DOMINIO = 'https://acuarius.app';
const REGISTRO = 'https://app.acuarius.app/registro';
const CONTENIDO = { ...C1, ...C2 };

// Nombres cortos para las migas de pan. Lo que no esté aquí se deriva del
// último tramo de la URL.
const MIGAS = {
  '/crm/': 'CRM', '/crm/whatsapp/': 'WhatsApp', '/crm/gratis/': 'Gratis',
  '/crm/inmobiliarias/': 'Inmobiliarias', '/crm/clinicas/': 'Clínicas',
  '/crm/restaurantes/': 'Restaurantes', '/crm/pipeline-de-ventas/': 'Pipeline de ventas',
  '/mejores-crm-con-whatsapp/': 'Mejores CRM con WhatsApp', '/alternativas/hubspot/': 'HubSpot',
  '/alternativas/kommo/': 'Kommo', '/alternativas/agencyanalytics/': 'AgencyAnalytics',
  '/comparativas/acuarius-vs-kommo/': 'Acuarius vs Kommo', '/comparativas/acuarius-vs-hubspot/': 'Acuarius vs HubSpot',
};

// ── Validación ──────────────────────────────────────────────────────────────
const VACIAS = new Set(['de', 'del', 'para', 'a', 'en', 'con', 'la', 'el', 'y', 'que', 'por', 'los', 'las', 'un', 'una']);
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
const palabras = (s) => norm(s).split(/[^a-z0-9]+/).filter((w) => w && !VACIAS.has(w));

function validar() {
  const errores = [];
  const vistos = { title: new Map(), description: new Map(), url: new Map() };
  for (const p of MAPA) {
    const e = (m) => errores.push(`${p.url}: ${m}`);
    if (!p.url.startsWith('/') || !p.url.endsWith('/')) e('la URL debe empezar y terminar en /');
    if (p.title.length > 60) e(`title de ${p.title.length} caracteres (máx. 60)`);
    if (p.description.length < 120 || p.description.length > 160) e(`description de ${p.description.length} caracteres (120-160)`);
    for (const campo of ['title', 'description', 'h1']) {
      const texto = new Set(palabras(p[campo]));
      const faltan = palabras(p.kw).filter((w) => !texto.has(w));
      if (faltan.length) e(`al ${campo} le falta la keyword «${p.kw}» (no está: ${faltan.join(', ')})`);
    }
    for (const campo of ['title', 'description', 'url']) {
      if (vistos[campo].has(p[campo])) e(`${campo} repetido con ${vistos[campo].get(p[campo])}`);
      vistos[campo].set(p[campo], p.url);
    }
    if (p.estado === 'publicada' && !CONTENIDO[p.url]) e('está publicada pero no tiene contenido');
    if (p.estado === 'bloqueada' && !p.nota) e('bloqueada sin nota que diga por qué');
  }
  for (const url of Object.keys(CONTENIDO)) {
    if (!MAPA.some((p) => p.url === url && p.estado === 'publicada')) errores.push(`${url}: tiene contenido pero no figura como publicada en mapa.mjs`);
  }
  return errores;
}

// ── Piezas tomadas de partners.html ─────────────────────────────────────────
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
const ICONO = extraer(/<link rel="icon"[^>]*>/, 'el favicon');
const PIE = extraer(/<footer>[\s\S]*?<\/footer>/, 'el pie');

const ESTILO_SEO = `<style>
/* Páginas SEO: lo que partners.html no trae. Mismos tokens. */
.s-hero h1{max-width:900px;margin-left:auto;margin-right:auto;font-size:clamp(30px,4.2vw,50px)}
.s-migas{font-size:12.5px;color:rgba(255,255,255,.55);margin-bottom:22px}
.s-migas a{color:rgba(255,255,255,.75);text-decoration:none}
.s-migas a:hover{color:white}
.s-migas span{margin:0 6px}
.s-sec{padding:80px 40px}
.s-sec:nth-of-type(even){background:var(--bg)}
.s-in{max-width:1080px;margin:0 auto}
.s-angosto{max-width:760px}
.s-texto p{font-size:17px;line-height:1.75;color:var(--muted);margin-top:18px}
.s-texto p b{color:var(--text)}
.s-sec a{color:var(--blue)}
.s-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:40px}
.s-card{background:var(--white);border:1px solid var(--border);border-radius:var(--rlg);padding:26px 24px}
.s-card h3{font-family:var(--font-display);font-size:18px;font-weight:700;letter-spacing:-.01em;margin-bottom:10px;color:var(--text)}
.s-card p{font-size:14.5px;line-height:1.65;color:var(--muted)}
.s-pasos{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:40px;counter-reset:paso}
.s-paso{counter-increment:paso;padding-top:4px}
.s-paso::before{content:counter(paso);display:flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:50%;background:var(--blue);color:white;font-family:var(--font-display);font-weight:800;margin-bottom:16px}
.s-paso h3{font-size:16px;font-weight:700;margin-bottom:8px;color:var(--text)}
.s-paso p{font-size:14.5px;line-height:1.6;color:var(--muted)}
.s-tabla-wrap{margin-top:36px;overflow-x:auto;border:1px solid var(--border);border-radius:var(--rlg);background:var(--white)}
.s-tabla{width:100%;border-collapse:collapse;font-size:14.5px;min-width:560px}
.s-tabla th{text-align:left;font-weight:700;color:var(--text);background:var(--blue-lt);padding:14px 18px}
.s-tabla td{padding:14px 18px;border-top:1px solid var(--border);color:var(--muted);line-height:1.55;vertical-align:top}
.s-tabla td:first-child{color:var(--text);font-weight:600}
.s-nota{font-size:14px;color:var(--muted);margin-top:16px;line-height:1.6}
.s-faq{max-width:760px;margin:40px auto 0;display:flex;flex-direction:column;gap:10px}
.s-faq details{border:1.5px solid var(--border);border-radius:var(--r);background:var(--white)}
.s-faq details[open]{border-color:var(--blue)}
.s-faq summary{cursor:pointer;list-style:none;padding:18px 22px;font-weight:600;font-size:15.5px;color:var(--text);display:flex;justify-content:space-between;gap:16px}
.s-faq summary::-webkit-details-marker{display:none}
.s-faq summary::after{content:'+';color:var(--blue);font-weight:700;font-size:20px;line-height:1}
.s-faq details[open] summary::after{content:'−'}
.s-faq details p{padding:0 22px 20px;font-size:15px;line-height:1.7;color:var(--muted)}
.s-rel{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:32px}
.s-rel a{display:block;padding:18px 20px;border:1px solid var(--border);border-radius:var(--r);background:var(--white);color:var(--text);text-decoration:none;font-weight:600;font-size:14.5px;line-height:1.45;transition:border-color .2s}
.s-rel a:hover{border-color:var(--blue);color:var(--blue)}
.s-rel small{display:block;font-weight:500;color:var(--muted2);font-size:12px;margin-bottom:4px}
@media(max-width:960px){.s-grid,.s-rel{grid-template-columns:repeat(2,1fr)}.s-pasos{grid-template-columns:repeat(2,1fr)}}
@media(max-width:768px){.s-sec{padding:60px 20px}.s-grid,.s-rel,.s-pasos{grid-template-columns:1fr}.nav-links{display:none}}
</style>`;

// ── Utilidades ──────────────────────────────────────────────────────────────
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const sinEtiquetas = (s) => String(s).replace(/<[^>]+>/g, '');
const nombreCorto = (p) => p.title.replace(/\s*\|\s*Acuarius$/, '');
const publicadas = () => MAPA.filter((p) => p.estado === 'publicada');

function migas(url) {
  const tramos = url.split('/').filter(Boolean);
  const lista = [{ nombre: 'Inicio', url: '/' }];
  let ruta = '/';
  for (const t of tramos) {
    ruta += t + '/';
    const enMapa = MAPA.find((p) => p.url === ruta);
    // Un tramo intermedio sin página propia (p. ej. /alternativas/) no se enlaza.
    const nombre = MIGAS[ruta] || t.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase());
    lista.push({ nombre, url: enMapa && enMapa.estado === 'publicada' ? ruta : null });
  }
  return lista;
}

// Enlaces del mismo clúster: el pilar enlaza a todos sus hijos y cada hijo al
// pilar y a sus hermanos. Es la estructura hub-and-spoke del plan.
function relacionadas(p) {
  return publicadas().filter((o) => o.cluster === p.cluster && o.url !== p.url);
}

function seccionHTML(s) {
  const cab = `${s.label ? `<div class="section-label">${esc(s.label)}</div>` : ''}<h2 class="section-title">${s.h2}</h2>`;
  let cuerpo = '';
  if (s.tipo === 'texto') {
    return `<section class="s-sec"><div class="s-in s-angosto s-texto">${cab}${s.parrafos.map((t) => `<p>${t}</p>`).join('')}</div></section>`;
  }
  if (s.tipo === 'tarjetas') cuerpo = `<div class="s-grid">${s.items.map((i) => `<div class="s-card"><h3>${i.t}</h3><p>${i.d}</p></div>`).join('')}</div>`;
  if (s.tipo === 'pasos') cuerpo = `<div class="s-pasos">${s.items.map((i) => `<div class="s-paso"><h3>${i.t}</h3><p>${i.d}</p></div>`).join('')}</div>`;
  if (s.tipo === 'tabla') {
    cuerpo = `<div class="s-tabla-wrap"><table class="s-tabla"><thead><tr>${s.cab.map((c) => `<th>${c}</th>`).join('')}</tr></thead><tbody>${s.filas.map((f) => `<tr>${f.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>${s.nota ? `<p class="s-nota">${s.nota}</p>` : ''}`;
  }
  if (!cuerpo) throw new Error(`Tipo de sección desconocido: ${s.tipo}`);
  return `<section class="s-sec"><div class="s-in">${cab}${cuerpo}</div></section>`;
}

function jsonLD(p, c) {
  const url = DOMINIO + p.url;
  const grafo = [
    { '@type': 'WebPage', '@id': url, url, name: p.title, description: p.description, inLanguage: 'es-419',
      isPartOf: { '@type': 'WebSite', name: 'Acuarius', url: DOMINIO + '/' } },
    { '@type': 'BreadcrumbList', itemListElement: migas(p.url).map((m, i) => ({
      '@type': 'ListItem', position: i + 1, name: m.nombre, ...(m.url || i === migas(p.url).length - 1 ? { item: DOMINIO + (m.url || p.url) } : {}),
    })) },
  ];
  if (c.faq?.length) {
    grafo.push({ '@type': 'FAQPage', mainEntity: c.faq.map((f) => ({
      '@type': 'Question', name: sinEtiquetas(f.q), acceptedAnswer: { '@type': 'Answer', text: sinEtiquetas(f.a) },
    })) });
  }
  if (p.nivel === 'Pilar' && p.cluster === 1) {
    grafo.push({ '@type': 'SoftwareApplication', name: 'Acuarius', applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web', url: DOMINIO + '/', inLanguage: 'es',
      offers: [['Free', '0'], ['Pro', '39'], ['Agency', '99']].map(([name, price]) => ({ '@type': 'Offer', name, price, priceCurrency: 'USD' })) });
  }
  // </script> dentro del JSON cerraría la etiqueta antes de tiempo.
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': grafo }).replace(/</g, '\\u003c');
}

function pagina(p) {
  const c = CONTENIDO[p.url];
  const url = DOMINIO + p.url;
  const m = migas(p.url);
  const rel = relacionadas(p);
  const flecha = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
  return `<!DOCTYPE html>
<html lang="es">
<head>
${GTM_HEAD}
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_419">
<meta property="og:site_name" content="Acuarius">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.description)}">
<meta property="og:url" content="${url}">
<meta name="twitter:card" content="summary">
${ICONO}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
${ESTILO_BASE}
${ESTILO_SEO}
<script type="application/ld+json">${jsonLD(p, c)}</script>
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
      <a href="/#planes">Precios</a>
      <a href="/partners">Partners</a>
    </div>
    <div class="nav-cta">
      <a href="https://app.acuarius.app/login.html" class="btn-ghost">Iniciar sesión</a>
      <a href="${REGISTRO}" class="btn-primary">Crear cuenta gratis ${flecha}</a>
    </div>
  </div>
</nav>

<section class="p-hero s-hero">
  <div class="hero-overlay"></div>
  <div class="hero-bg"><div class="hero-bg-grid"></div></div>
  <div class="p-hero-inner">
    <div class="s-migas" role="navigation" aria-label="Migas de pan">${m.map((x, i) => i === m.length - 1 ? `<span aria-current="page">${esc(x.nombre)}</span>` : (x.url ? `<a href="${x.url}">${esc(x.nombre)}</a>` : esc(x.nombre)) + '<span>›</span>').join('')}</div>
    ${c.badge ? `<div class="hero-badge"><span class="hero-badge-dot"></span>${esc(c.badge)}</div>` : ''}
    <h1>${esc(p.h1)}</h1>
    <p class="hero-sub">${c.sub}</p>
    <div class="hero-actions">
      <a href="${REGISTRO}" class="btn-primary btn-primary-lg">Empieza gratis ${flecha}</a>
      <a href="/#planes" class="btn-outline-lg">Ver precios</a>
    </div>
    <div class="hero-note"><span>Sin tarjeta de crédito</span><span>·</span><span>Pro gratis 14 días</span><span>·</span><span>En español</span></div>
  </div>
</section>

${c.secciones.map(seccionHTML).join('\n')}

${c.faq?.length ? `<section class="s-sec"><div class="s-in"><div class="section-label" style="text-align:center">Preguntas frecuentes</div><h2 class="section-title" style="text-align:center">Lo que más nos preguntan</h2><div class="s-faq">${c.faq.map((f) => `<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join('')}</div></div></section>` : ''}

${rel.length ? `<section class="s-sec"><div class="s-in"><div class="section-label">${esc(CLUSTERS[p.cluster])}</div><h2 class="section-title">Sigue leyendo</h2><div class="s-rel">${rel.map((o) => `<a href="${o.url}"><small>${esc(o.nivel)}</small>${esc(nombreCorto(o))}</a>`).join('')}</div></div></section>` : ''}

<section class="cta-section">
  <div class="cta-inner">
    <h2 class="cta-title">${esc(c.cta.h2)}</h2>
    <p class="cta-sub">${esc(c.cta.sub)}</p>
    <div class="cta-actions">
      <a href="${REGISTRO}" class="btn-primary btn-primary-lg" style="background:white;color:var(--blue)">Crear cuenta gratis</a>
      <a href="https://wa.me/573219972333?text=${encodeURIComponent('Hola, quiero saber más de Acuarius')}" class="btn-outline-lg">Hablar por WhatsApp</a>
    </div>
  </div>
</section>

${PIE}

<script>
// Conversión: clic en CTA hacia la app → dataLayer, igual que el home.
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a[href*="app.acuarius.app"]');
  if (!a) return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cta_click', cta_text: (a.textContent || '').trim().slice(0, 60), pagina: location.pathname });
  } catch (err) {}
});
</script>
</body>
</html>
`;
}

// ── Sitemap, robots y mapa legible ──────────────────────────────────────────
function sitemap() {
  const urls = ['/', '/partners', ...publicadas().map((p) => p.url)];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${DOMINIO}${u}</loc></url>`).join('\n')}
</urlset>
`;
}

const ROBOTS = `User-agent: *
Allow: /

Sitemap: ${DOMINIO}/sitemap.xml
`;

function mapaMD() {
  const filas = MAPA.map((p) => `| ${p.cluster} | ${p.nivel} | \`${p.url}\` | ${p.estado} | ${p.kw} | ${p.title} (${p.title.length}) | ${p.description} (${p.description.length}) | ${p.h1} |${p.nota ? ' ' + p.nota : ''} |`);
  const cuenta = (e) => MAPA.filter((p) => p.estado === e).length;
  return `# Mapa SEO de acuarius.app

Generado por \`node fuente-seo/build.mjs\` desde \`mapa.mjs\`. No editar a mano.

${MAPA.length} URLs: ${cuenta('publicada')} publicadas, ${cuenta('pendiente')} pendientes de contenido, ${cuenta('bloqueada')} bloqueadas.

| C | Nivel | URL | Estado | Keyword | Meta title (car.) | Meta description (car.) | H1 | Nota |
|---|---|---|---|---|---|---|---|---|
${filas.join('\n')}
`;
}

// ── Main ────────────────────────────────────────────────────────────────────
const errores = validar();
if (errores.length) {
  console.error(`✗ ${errores.length} problema(s); no se escribió nada:\n  ` + errores.join('\n  '));
  process.exit(1);
}
for (const p of publicadas()) {
  const destino = join(RAIZ, p.url, 'index.html');
  mkdirSync(dirname(destino), { recursive: true });
  writeFileSync(destino, pagina(p));
}
writeFileSync(join(RAIZ, 'sitemap.xml'), sitemap());
writeFileSync(join(RAIZ, 'robots.txt'), ROBOTS);
writeFileSync(join(RAIZ, 'fuente-seo', 'MAPA.md'), mapaMD());
console.log(`✓ ${publicadas().length} páginas, sitemap.xml, robots.txt y MAPA.md (${MAPA.length} URLs en el mapa).`);
