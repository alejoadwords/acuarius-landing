// Valida un fichero de traducción antes de integrarlo.
//
//   node fuente-en/validar.mjs fuente-seo/contenido-en/c1-crm.mjs
//   node fuente-en/validar.mjs fuente-novedades/articulos-en/productos-en-el-crm.mjs
//
// Revisa que tenga las mismas páginas que su original en español, las reglas
// SEO del title, la description y la keyword, y que no quede texto en español.

import { join, basename, dirname } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';
import { URLS_EN } from './urls.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const VACIAS = new Set(['a', 'an', 'the', 'of', 'for', 'to', 'in', 'on', 'with', 'and', 'or', 'your', 'by', 'from', 'vs', 'is', 'how', 'what']);
const palabras = (s) => String(s).toLowerCase().split(/[^a-z0-9]+/).filter((w) => w && !VACIAS.has(w));
// Palabras que en inglés no existen o casi nunca aparecen: delatan una frase sin traducir.
const ESPANOL = /[¿¡ñ]|\b(?:de|del|las|los|el|que|para|con|tus|sin|una|por|desde|cuenta|gratis|también|más|cómo|qué|está|son|hasta|cada|puedes|tienes|según|aquí)\b/i;
const NOMBRES_OK = /Clínica del Norte|Distribuciones|Inversiones|Restrepo|Villamil|Céspedes|Guzmán|Peña|Ortiz|Miralta|Bahía|Bogotá|El Salvador|Medellín|México|Perú|Panamá|Cartagena|Barranquilla|Cali|San José|Santo Domingo|Ciudad de|EPS|Nequi|Bancolombia|Daviplata|Mercado Pago|Mercado Libre|Rappi|Fincaraíz|Metrocuadrado|Ciencuadras|Inmuebles24|Lamudi|Vivanuncios|Domus|Siigo|Alegra|wa\.me|text=|Hola|reunion\/|\(Spanish\)|in Spanish|Spanish:/;

function textosVisibles(v, ruta = '', out = []) {
  if (typeof v === 'string') {
    if (/^(url|slug|id|icono|ilustracion|tipo|publicado|subido|edicion|relacionados|modulo)$/.test(ruta.split('.').pop().replace(/\[\d+\]$/, ''))) return out;
    // De los scripts solo cuenta el texto entre comillas con espacios (lo que se
    // muestra); los nombres de variables pueden quedar en español.
    const literales = [];
    const sinCodigo = v.replace(/<script[\s\S]*?<\/script>/g, (s) => { for (const m of s.matchAll(/(['"`])((?:(?!\1)[^\\\n]|\\.)*\s(?:(?!\1)[^\\\n]|\\.)*)\1/g)) literales.push(m[2]); return ' '; }).replace(/<style[\s\S]*?<\/style>/g, '').replace(/<svg[\s\S]*?<\/svg>/g, '');
    for (const t of literales) if (!/^[\s\w.#:,()\[\]=>{}+*\/-]*$/.test(t) || /[a-z]{3,} [a-z]{3,}/i.test(t)) out.push([ruta + ' (script)', t.trim()]);
    for (const t of sinCodigo.replace(/<[^>]+>/g, '\n').split('\n')) if (t.trim()) out.push([ruta, t.trim()]);
    return out;
  }
  if (Array.isArray(v)) v.forEach((x, i) => textosVisibles(x, `${ruta}[${i}]`, out));
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) textosVisibles(x, ruta ? `${ruta}.${k}` : k, out);
  return out;
}

function meta(e, id, p) {
  for (const c of ['kw', 'title', 'description', 'h1']) if (!p[c]) e(`${id}: falta ${c}`);
  if (!p.title) return;
  if (p.title.length > 60) e(`${id}: title de ${p.title.length} caracteres (máx. 60)`);
  if (p.description.length < 120 || p.description.length > 160) e(`${id}: description de ${p.description.length} caracteres (120-160)`);
  for (const campo of ['title', 'description', 'h1']) {
    const texto = new Set(palabras(p[campo]));
    const faltan = palabras(p.kw).filter((w) => !texto.has(w));
    if (faltan.length) e(`${id}: al ${campo} le falta la keyword «${p.kw}» (no está: ${faltan.join(', ')})`);
  }
}

const fichero = process.argv[2];
if (!fichero) { console.error('uso: node fuente-en/validar.mjs <fichero>'); process.exit(2); }
const ruta = join(RAIZ, fichero);
const errores = [];
const e = (m) => errores.push(m);
const mod = await import(pathToFileURL(ruta).href);
const original = join(dirname(dirname(ruta)), fichero.includes('novedades') ? 'articulos' : 'contenido', basename(ruta));

if (mod.PAGINAS) {
  const es = existsSync(original) ? await import(pathToFileURL(original).href) : null;
  if (!es) e(`no existe el original ${original}`);
  const urlsEs = Object.keys(es?.CONTENIDO || {});
  for (const u of urlsEs) if (!mod.PAGINAS[u]) e(`falta la página ${u}`);
  for (const [u, p] of Object.entries(mod.PAGINAS)) {
    if (!urlsEs.includes(u)) e(`${u}: no está en el original en español`);
    if (!URLS_EN[u]) e(`${u}: no tiene URL en inglés en fuente-en/urls.mjs`);
    meta(e, u, p);
    const c = es?.CONTENIDO?.[u];
    if (c) {
      if ((p.secciones || []).length !== c.secciones.length) e(`${u}: ${p.secciones?.length} secciones, el original tiene ${c.secciones.length}`);
      if ((p.faq || []).length !== (c.faq || []).length) e(`${u}: ${p.faq?.length || 0} preguntas, el original tiene ${(c.faq || []).length}`);
      if (!p.cta?.h2 || !p.cta?.sub) e(`${u}: falta cta.h2 o cta.sub`);
    }
  }
} else if (mod.ARTICULO) {
  const a = mod.ARTICULO;
  meta(e, a.slug, a);
  if (!Object.values(URLS_EN).includes(`/en/whats-new/${a.slug}/`)) e(`slug «${a.slug}» no coincide con fuente-en/urls.mjs`);
  const n = palabras(textosVisibles(a.secciones).map((x) => x[1]).join(' ') + ' ' + textosVisibles(a.faq || []).map((x) => x[1]).join(' ')).length;
  if (n < 700) e(`solo ${n} palabras de contenido`);
} else e('el fichero no exporta PAGINAS ni ARTICULO');

for (const [donde, t] of textosVisibles(mod.PAGINAS || mod.ARTICULO)) {
  if (ESPANOL.test(t.replace(new RegExp(NOMBRES_OK.source, 'g'), ''))) e(`¿español? ${donde}: «${t.slice(0, 100)}»`);
}

if (errores.length) { console.error(`✗ ${fichero}: ${errores.length} problema(s)\n  ${errores.join('\n  ')}`); process.exit(1); }
console.log(`✓ ${fichero}`);
