// Genera la portada en inglés (en/index.html) a partir de la española.
//
//   node fuente-en/build.mjs
//
// Correrlo DESPUÉS de fuente-menu/aplicar.mjs, y cada vez que cambie
// index.html. La portada española es la fuente: aquí solo se traduce (pares de
// textos.mjs), se cambia el menú por uno en inglés y se ajusta la cabecera.
//
// Falla a la vista, nunca en silencio:
//   · si una frase de textos.mjs ya no está en index.html (alguien la cambió);
//   · si después de traducir queda texto visible con pinta de español.
// En ambos casos no escribe nada y dice qué frase revisar.
//
// También deja en index.html los <link hreflang> que la emparejan con /en/.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PARES, NOMBRES } from './textos.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const DOMINIO = 'https://acuarius.app';
const REGISTRO = 'https://app.acuarius.app/registro';
const LOGIN = 'https://app.acuarius.app/login.html';
const DEMO = 'https://app.acuarius.app/reunion/alejandro-reunion';

const HREFLANG = `<!-- HREFLANG:INICIO (fuente-en/build.mjs) -->
<link rel="alternate" hreflang="es" href="${DOMINIO}/">
<link rel="alternate" hreflang="en" href="${DOMINIO}/en/">
<link rel="alternate" hreflang="x-default" href="${DOMINIO}/">
<!-- HREFLANG:FIN -->`;

const fallos = [];
const falla = (m) => fallos.push(m);

// ── 1. hreflang en la portada española ──────────────────────────────────────
const rutaEs = join(RAIZ, 'index.html');
let es = readFileSync(rutaEs, 'utf8');
es = es.replace(/<!-- HREFLANG:INICIO[\s\S]*?<!-- HREFLANG:FIN -->\n?/, '');
if (!es.includes('<link rel="canonical" href="https://acuarius.app/">')) throw new Error('index.html: no encontré el canonical para colgar el hreflang');
es = es.replace('<link rel="canonical" href="https://acuarius.app/">', (m) => `${m}\n${HREFLANG}`);

// ── 2. Menú en inglés ───────────────────────────────────────────────────────
// Las páginas del menú español (producto, soluciones, recursos) existen solo en
// español, así que este menú lleva a las secciones de la misma portada.
const FLECHA = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
const SECCIONES = [['#ciclo', 'Platform'], ['#crm', 'CRM'], ['#agentes', 'AI agent'], ['#planes', 'Pricing'], ['#faq', 'FAQ']];
const MENU_EN = `<!-- MENU:INICIO (generado por fuente-en/build.mjs; no editar a mano) -->
<header class="am-nav" id="am-nav">
  <div class="am-in">
    <a href="/en/" class="am-logo" aria-label="Acuarius, home"><img src="/logo.svg" alt="Acuarius" width="135" height="24"></a>
    <div class="am-items" role="navigation" aria-label="Main">${SECCIONES.map(([u, t]) => `<a class="am-item" href="${u}">${t}</a>`).join('')}</div>
    <div class="am-ctas">
      <a class="am-txt" href="/" hreflang="es" lang="es" title="Ver en español">ES</a>
      <a class="am-txt" href="${LOGIN}">Sign in</a>
      <a class="am-borde" href="${DEMO}">Book a demo</a>
      <a class="am-pri" href="${REGISTRO}">Start free ${FLECHA}</a>
      <button class="am-hamb" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="am-cajon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    </div>
  </div>
</header>
<div class="am-cajon" id="am-cajon">
  ${SECCIONES.map(([u, t]) => `<a class="am-solo" href="${u}">${t}</a>`).join('\n  ')}
  <div class="am-cajon-ctas"><a class="am-pri" href="${REGISTRO}">Create free account</a><a class="am-borde" href="${DEMO}">Book a demo</a><a class="am-txt" href="${LOGIN}">Sign in</a><a class="am-txt" href="/" hreflang="es" lang="es">Ver en español</a></div>
</div>
<!-- MENU:FIN -->`;

// ── 3. Traducción ───────────────────────────────────────────────────────────
let en = es;
const reemplazarBloque = (re, nuevo, nombre) => {
  if (!re.test(en)) { falla(`no encontré ${nombre}`); return; }
  en = en.replace(re, () => nuevo);
};

reemplazarBloque(/<html lang="es">/, '<html lang="en">', '<html lang="es">');
reemplazarBloque(/<title>[^<]*<\/title>/, '<title>Acuarius — CRM with an AI agent for WhatsApp, built for Latin America</title>', '<title>');
reemplazarBloque(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${DOMINIO}/en/">`, 'el canonical');
reemplazarBloque(/<meta name="description" content="[^"]*">/, '<meta name="description" content="CRM with an AI agent for WhatsApp: sales pipeline, WhatsApp and Instagram inbox, automations, campaigns and reports in one platform. Built for Latin America, from 39 USD a month.">', 'la meta description');
reemplazarBloque(/<!-- MENU:INICIO[\s\S]*?<!-- MENU:FIN -->/, MENU_EN, 'el bloque del menú');
// La calculadora de precios se mudó a /precios/: en la portada ese script ya
// no encuentra sus controles. Y la redirección de anclas viejas es del español.
reemplazarBloque(/<script>\n\/\* ── CALCULADORA DE PRECIO[\s\S]*?<\/script>\n/, '', 'el script de la calculadora');
reemplazarBloque(/<script>\n\/\/ Enlaces viejos a anclas[\s\S]*?<\/script>\n/, '', 'la redirección de anclas viejas');

// Solo dentro del <body>: así una palabra corta no toca el CSS ni los scripts.
const iBody = en.indexOf('<body>');
const iFin = en.indexOf('</footer>');
if (iBody < 0 || iFin < 0) throw new Error('index.html: no encontré <body> o </footer>');
let cuerpo = en.slice(iBody, iFin);
for (const [de, a] of [...PARES].sort((x, y) => y[0].length - x[0].length)) {
  if (!cuerpo.includes(de)) { falla(`frase que ya no está en index.html: «${de.slice(0, 90)}»`); continue; }
  cuerpo = cuerpo.split(de).join(a);
}
en = en.slice(0, iBody) + cuerpo + en.slice(iFin);

// ── 4. ¿Quedó español a la vista? ───────────────────────────────────────────
const visible = cuerpo
  .replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ')
  .replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/<!--[\s\S]*?-->/g, ' ');
const textos = [
  ...visible.replace(/<[^>]+>/g, '\n').split('\n'),
  ...[...visible.matchAll(/\b(?:aria-label|title|alt|placeholder)="([^"]*)"/g)].map((m) => m[1]),
].map((t) => t.trim()).filter(Boolean)
  .filter((t) => !NOMBRES.includes(t) && t !== 'Ver en español' && t !== 'ES');
const ESPANOL = /[¿¡ñáéíóú]|\b(?:de|del|la|las|los|el|que|para|con|tu|tus|sin|una|por|desde|gratis|cuenta)\b/i;
for (const t of textos) if (ESPANOL.test(t)) falla(`texto sin traducir: «${t.slice(0, 90)}»`);

if (fallos.length) {
  console.error(`✗ en/index.html NO se escribió:\n  ${fallos.join('\n  ')}`);
  process.exit(1);
}

writeFileSync(rutaEs, es);
mkdirSync(join(RAIZ, 'en'), { recursive: true });
writeFileSync(join(RAIZ, 'en/index.html'), en);
console.log(`✓ en/index.html (${PARES.length} frases) y hreflang en index.html`);
