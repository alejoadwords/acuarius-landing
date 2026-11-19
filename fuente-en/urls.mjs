// Cada URL del sitio en español y su par en inglés. Única fuente para:
//   · dónde se escribe cada página en inglés;
//   · el <link hreflang> de las dos versiones;
//   · el botón ES / EN del menú, que lleva a la misma página en el otro idioma;
//   · reescribir los enlaces internos de las páginas en inglés (aIngles).
//
// Las páginas en inglés llevan slug en inglés: quien busca en inglés busca
// «real estate crm», no «crm inmobiliario».
//
// Página nueva en español = fila nueva aquí. Si falta, el build en inglés
// falla diciendo qué URL no tiene par.

export const URLS_EN = {
  '/': '/en/',
  '/precios/': '/en/pricing/',
  '/partners': '/en/partners',
  '/privacy': '/en/privacy',
  '/terms': '/en/terms',
  '/reembolsos': '/en/refunds',

  // Clúster 1 · CRM
  '/crm/': '/en/crm/',
  '/crm/whatsapp/': '/en/crm/whatsapp/',
  '/crm/gratis/': '/en/crm/free/',
  '/crm/inmobiliarias/': '/en/crm/real-estate/',
  '/crm/clinicas/': '/en/crm/clinics/',
  '/crm/restaurantes/': '/en/crm/restaurants/',
  '/crm/pipeline-de-ventas/': '/en/crm/sales-pipeline/',
  '/crm/tiendas-en-linea/': '/en/crm/ecommerce/',

  // Clúster 2 · Comparativas
  '/mejores-crm-con-whatsapp/': '/en/best-whatsapp-crm/',
  '/alternativas/hubspot/': '/en/alternatives/hubspot/',
  '/alternativas/kommo/': '/en/alternatives/kommo/',
  '/alternativas/agencyanalytics/': '/en/alternatives/agencyanalytics/',
  '/comparativas/acuarius-vs-kommo/': '/en/compare/acuarius-vs-kommo/',
  '/comparativas/acuarius-vs-hubspot/': '/en/compare/acuarius-vs-hubspot/',

  // Clúster 3 · Benchmarks
  '/benchmarks/': '/en/benchmarks/',
  '/benchmarks/cpc-google-ads-colombia/': '/en/benchmarks/google-ads-cpc-colombia/',
  '/benchmarks/costo-meta-ads-colombia/': '/en/benchmarks/meta-ads-cost-colombia/',
  '/benchmarks/costo-por-lead-inmobiliario/': '/en/benchmarks/real-estate-cost-per-lead/',
  '/benchmarks/cpc-google-ads-mexico/': '/en/benchmarks/google-ads-cpc-mexico/',
  '/calculadora-presupuesto-google-ads/': '/en/google-ads-budget-calculator/',

  // Clúster 5 · Agencias
  '/agencias/': '/en/agencies/',

  // Clúster 8 · Producto
  '/agente-ia/': '/en/ai-agent/',
  '/agente-ia/calificacion-y-reparto/': '/en/ai-agent/lead-qualification-and-routing/',
  '/herramientas/enlace-de-whatsapp/': '/en/tools/whatsapp-link-generator/',
  '/herramientas/costos-de-whatsapp/': '/en/tools/whatsapp-api-pricing/',
  '/academia/': '/en/academy/',
  '/agenda/': '/en/scheduling/',
  '/reportes/': '/en/reports/',
  '/pauta/': '/en/ad-attribution/',
  '/formularios/': '/en/forms/',
  '/integraciones/': '/en/integrations/',
  '/automatizaciones/': '/en/automations/',
  '/campanas/': '/en/campaigns/',
  '/productos/': '/en/quotes-and-proposals/',
  '/whatsapp/plantillas-y-difusion/': '/en/whatsapp/templates-and-broadcasts/',

  // Novedades
  '/novedades/': '/en/whats-new/',
  '/novedades/edicion-01/': '/en/whats-new/edition-01/',
  '/novedades/productos-en-el-crm/': '/en/whats-new/products-in-the-crm/',
  '/novedades/campos-personalizados-crm/': '/en/whats-new/crm-custom-fields/',
  '/novedades/whatsapp-en-tiempo-real/': '/en/whats-new/real-time-whatsapp/',
  '/novedades/agente-ia-whatsapp-datos-de-contacto/': '/en/whats-new/whatsapp-ai-agent-contact-details/',
  '/novedades/enlace-para-agendar-reuniones/': '/en/whats-new/meeting-scheduling-link/',
  '/novedades/recompra-y-encuesta-nps/': '/en/whats-new/repeat-purchase-and-nps-survey/',
  '/novedades/anuncios-clic-a-whatsapp-meta-ads/': '/en/whats-new/click-to-whatsapp-meta-ads/',
};

export const URLS_ES = Object.fromEntries(Object.entries(URLS_EN).map(([es, en]) => [en, es]));

// Las legales se enlazan con .html en algunas páginas; Vercel las sirve igual.
const normal = (ruta) => ruta.replace(/\.html$/, '');

// La URL en inglés de una ruta española (con ancla o sin ella). null si no hay.
export function enDe(ruta) {
  const m = String(ruta).match(/^([^#?]*)([#?].*)?$/);
  const base = normal(m[1]);
  const en = URLS_EN[base] ?? URLS_EN[base + '/'];
  return en ? en + (m[2] || '') : null;
}
export function esDe(ruta) {
  const m = String(ruta).match(/^([^#?]*)([#?].*)?$/);
  return URLS_ES[m[1]] ?? null;
}

// Reescribe los enlaces internos de una página en inglés. Lo que no tenga par
// se devuelve en `sinPar` para que el build falle a la vista.
export function aIngles(html) {
  const sinPar = new Set();
  // El enlace «Ver en español» (hreflang="es") se queda en español a propósito.
  // También se reescriben los absolutos a https://acuarius.app/...
  const out = html.replace(/(href=")(?:https:\/\/acuarius\.app)?(\/(?!en\/|fonts\/|favicon|logo|apple-touch|hero-)[^"]*)"(?!\s+hreflang="es")/g, (todo, pre, ruta) => {
    const abs = todo.includes('https://acuarius.app') ? 'https://acuarius.app' : '';
    if (ruta.startsWith('/#')) return `${pre}${abs}/en/${ruta.slice(1)}"`;
    const en = enDe(ruta);
    if (!en) { sinPar.add(ruta); return todo; }
    return `${pre}${abs}${en}"`;
  });
  return { html: out, sinPar: [...sinPar] };
}

// Bloque <link hreflang> para el par de páginas.
export function hreflang(rutaEs) {
  const en = enDe(rutaEs);
  if (!en) throw new Error(`hreflang: ${rutaEs} no tiene par en fuente-en/urls.mjs`);
  const D = 'https://acuarius.app';
  return `<link rel="alternate" hreflang="es" href="${D}${normal(rutaEs)}">
<link rel="alternate" hreflang="en" href="${D}${en}">
<link rel="alternate" hreflang="x-default" href="${D}${normal(rutaEs)}">`;
}
