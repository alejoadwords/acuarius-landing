// Pone el menú de menu.mjs en las páginas escritas a mano.
//
//   node fuente-menu/aplicar.mjs
//
// Las páginas generadas (fuente-seo, fuente-novedades) ya lo traen de su
// build. Aquí van las demás. Es idempotente: la primera vez reemplaza el <nav>
// viejo; las siguientes, lo que haya entre <!-- MENU:INICIO --> y
// <!-- MENU:FIN -->. El CSS y el JS del menú llevan id y se sustituyen igual.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { menuHTML, MENU_CSS, MENU_JS } from './menu.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const PAGINAS = [
  { fichero: 'index.html', ruta: '/' },
  { fichero: 'partners.html', ruta: '/partners' },
  { fichero: 'precios/index.html', ruta: '/precios/' },
  { fichero: 'privacy.html', ruta: '/privacy', simple: true },
  { fichero: 'terms.html', ruta: '/terms', simple: true },
  { fichero: 'reembolsos.html', ruta: '/reembolsos', simple: true },
];

// Las páginas legales no cargan los tokens ni las fuentes del sitio: se les
// dan los mínimos para que el menú se vea igual y el texto no quede debajo.
const BASE_SIMPLE = `<style id="am-base">
:root{--blue:#1E2BCC;--blue-h:#1520AA;--blue-lt:#EEF0FD;--text:#0A0A12;--muted:#5A5A72;--muted2:#9090A8;--border:#E4E4EE;--bg:#FAFAFA;--white:#FFFFFF;--font-display:'Syne',sans-serif;--font-body:'DM Sans',sans-serif;--r:12px}
body{padding-top:68px}
</style>
<link id="am-fuentes" href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">`;

function reemplazar(html, re, nuevo, nombre, fichero) {
  if (!re.test(html)) throw new Error(`${fichero}: no encontré ${nombre}`);
  return html.replace(re, () => nuevo);
}

let n = 0;
for (const p of PAGINAS) {
  const ruta = join(RAIZ, p.fichero);
  if (!existsSync(ruta)) { console.log(`· ${p.fichero}: no existe, se salta`); continue; }
  let h = readFileSync(ruta, 'utf8');
  const menu = menuHTML(p.ruta);

  // 1. El menú.
  if (h.includes('<!-- MENU:INICIO')) h = reemplazar(h, /<!-- MENU:INICIO[\s\S]*?<!-- MENU:FIN -->/, menu, 'el bloque del menú', p.fichero);
  else if (/<nav>[\s\S]*?<\/nav>/.test(h)) h = reemplazar(h, /<nav>[\s\S]*?<\/nav>/, menu, 'el <nav> viejo', p.fichero);
  else {
    // Sin menú previo (las legales): justo después de <body> y del GTM.
    const m = h.match(/<body[^>]*>(?:\s*<!-- Google Tag Manager \(noscript\) -->[\s\S]*?<!-- End Google Tag Manager \(noscript\) -->)?/);
    if (!m) throw new Error(`${p.fichero}: no encontré <body>`);
    h = h.replace(m[0], () => `${m[0]}\n${menu}`);
  }

  // 2. CSS (y, en las legales, los tokens mínimos).
  h = h.replace(/<style id="am-css">[\s\S]*?<\/style>\n?/, '').replace(/<style id="am-base">[\s\S]*?<\/style>\n?<link id="am-fuentes"[^>]*>\n?/, '');
  h = reemplazar(h, /<\/head>/, `${p.simple ? BASE_SIMPLE + '\n' : ''}${MENU_CSS}\n</head>`, '</head>', p.fichero);

  // 3. JS.
  h = h.replace(/<script id="am-js">[\s\S]*?<\/script>\n?/, '');
  h = reemplazar(h, /<\/body>/, `${MENU_JS}\n</body>`, '</body>', p.fichero);

  // 4. El script que encogía el <nav> viejo al hacer scroll: sin <nav> daría
  //    error en cada scroll, y el menú nuevo tiene altura fija (los paneles
  //    cuelgan a 68 px).
  h = h.replace(/\n\/\/ Nav shrink on scroll\nwindow\.addEventListener\('scroll', \(\) => \{[\s\S]*?\n\}\);\n/, '\n');

  writeFileSync(ruta, h);
  n++;
}
console.log(`✓ menú aplicado en ${n} páginas escritas a mano`);
