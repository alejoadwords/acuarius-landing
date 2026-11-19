// Genera en inglés las páginas escritas a mano (portada, precios, partners y
// legales) a partir de las españolas.
//
//   node fuente-en/build.mjs
//
// Va DESPUÉS de fuente-menu/aplicar.mjs. La página española es la fuente: aquí
// se traduce con los pares [texto exacto en español, inglés] de cada módulo,
// se pone el menú en inglés y se pasan los enlaces a su URL en inglés.
//
// Falla a la vista, nunca en silencio. No escribe NADA si:
//   · una frase de los pares ya no está en la página española (alguien la cambió);
//   · queda texto visible con pinta de español;
//   · un enlace interno no tiene par en fuente-en/urls.mjs.
//
// También deja el <link hreflang> en las dos versiones de cada página.
// Las páginas generadas (fuente-seo, fuente-novedades) hacen lo mismo en su build.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { menuHTML } from '../fuente-menu/menu.mjs';
import { enDe, aIngles, hreflang } from './urls.mjs';
import { PARES_PIE, aplicarPares, restosEnEspanol } from './pie.mjs';

const AQUI = dirname(fileURLToPath(import.meta.url));
const RAIZ = join(AQUI, '..');
const DOMINIO = 'https://acuarius.app';
const PARCIAL = process.argv.includes('--parcial'); // para probar mientras faltan traducciones

const PAGINAS = [
  { fichero: 'index.html', ruta: '/', modulo: 'textos.mjs', pie: false,
    // La calculadora se mudó a /precios/ (en la portada ya no tiene controles)
    // y la redirección de anclas viejas es del español.
    quitar: [/<script>\n\/\* ── CALCULADORA DE PRECIO[\s\S]*?<\/script>\n/, /<script>\n\/\/ Enlaces viejos a anclas[\s\S]*?<\/script>\n/] },
  { fichero: 'precios/index.html', ruta: '/precios/', modulo: 'paginas/precios.mjs' },
  { fichero: 'partners.html', ruta: '/partners', modulo: 'paginas/partners.mjs' },
  { fichero: 'privacy.html', ruta: '/privacy', modulo: 'paginas/privacy.mjs', pie: false },
  { fichero: 'terms.html', ruta: '/terms', modulo: 'paginas/terms.mjs', pie: false },
  { fichero: 'reembolsos.html', ruta: '/reembolsos', modulo: 'paginas/reembolsos.mjs', pie: false },
];

// Dónde se escribe la versión en inglés: /en/pricing/ → en/pricing/index.html,
// /en/partners → en/partners.html (cleanUrls la sirve sin .html).
const ficheroDe = (rutaEn) => rutaEn.endsWith('/') ? join(rutaEn.slice(1), 'index.html') : rutaEn.slice(1) + '.html';

function conHreflang(html, ruta, fichero) {
  html = html.replace(/<!-- HREFLANG:INICIO[\s\S]*?<!-- HREFLANG:FIN -->\n?/, '');
  const bloque = `<!-- HREFLANG:INICIO (fuente-en) -->\n${hreflang(ruta)}\n<!-- HREFLANG:FIN -->`;
  const canon = html.match(/<link rel="canonical"[^>]*>/);
  if (canon) return html.replace(canon[0], (m) => `${m}\n${bloque}`);
  if (!html.includes('</head>')) throw new Error(`${fichero}: sin </head>`);
  return html.replace('</head>', `${bloque}\n</head>`);
}

const fallos = [];
const escribir = [];
for (const p of PAGINAS) {
  const falla = (m) => fallos.push(`${p.fichero}: ${m}`);
  const rutaEs = join(RAIZ, p.fichero);
  const rutaEn = enDe(p.ruta);
  const modRuta = join(AQUI, p.modulo);
  let es = readFileSync(rutaEs, 'utf8');
  es = conHreflang(es, p.ruta, p.fichero);
  escribir.push([rutaEs, es]);
  if (!existsSync(modRuta)) { (PARCIAL ? console.log : falla)(`· falta la traducción ${p.modulo}`); continue; }
  const { PARES, CABEZA, PERMITIDOS = [] } = await import(pathToFileURL(modRuta).href);

  let en = es;
  const cambiar = (re, nuevo, nombre, obligatorio = true) => {
    if (!re.test(en)) { if (obligatorio) falla(`no encontré ${nombre}`); return; }
    en = en.replace(re, () => nuevo);
  };
  const attr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  cambiar(/<html lang="es[^"]*">/, '<html lang="en">', '<html lang="es">');
  cambiar(/<title>[^<]*<\/title>/, `<title>${CABEZA.title}</title>`, '<title>');
  cambiar(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${attr(CABEZA.description)}">`, 'la meta description', false);
  cambiar(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${DOMINIO}${rutaEn}">`, 'el canonical', false);
  cambiar(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${DOMINIO}${rutaEn}">`, 'og:url', false);
  cambiar(/<meta property="og:locale" content="[^"]*">/, '<meta property="og:locale" content="en_US">', 'og:locale', false);
  cambiar(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${attr(CABEZA.title)}">`, 'og:title', false);
  cambiar(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${attr(CABEZA.description)}">`, 'og:description', false);
  cambiar(/<!-- MENU:INICIO[\s\S]*?<!-- MENU:FIN -->/, menuHTML(rutaEn, 'en'), 'el bloque del menú');
  for (const re of p.quitar || []) cambiar(re, '', `el bloque ${re.source.slice(0, 40)}`);

  // Se traduce solo después del menú: una palabra corta no toca el CSS.
  const corte = en.indexOf('<!-- MENU:FIN -->');
  let cuerpo = en.slice(corte);
  const r = aplicarPares(cuerpo, [...PARES, ...(p.pie === false ? [] : PARES_PIE)]);
  for (const f of r.faltan) falla(`frase que ya no está: «${f.slice(0, 90)}»`);
  cuerpo = r.texto;
  en = en.slice(0, corte) + cuerpo;

  const { html, sinPar } = aIngles(en);
  en = html;
  for (const u of sinPar) falla(`enlace sin URL en inglés: ${u}`);
  for (const t of restosEnEspanol(cuerpo, PERMITIDOS)) falla(`texto sin traducir: «${t.slice(0, 90)}»`);

  escribir.push([join(RAIZ, ficheroDe(rutaEn)), en]);
}

if (fallos.length) {
  console.error(`✗ no se escribió nada (${fallos.length}):\n  ${fallos.join('\n  ')}`);
  process.exit(1);
}
for (const [f, html] of escribir) { mkdirSync(dirname(f), { recursive: true }); writeFileSync(f, html); }
console.log(`✓ ${escribir.length} ficheros (español con hreflang + versión en inglés)`);
