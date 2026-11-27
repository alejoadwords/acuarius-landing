// El pie de partners.html (el que llevan todas las páginas menos la portada)
// en inglés. Los enlaces los cambia aIngles(); aquí solo van los textos.

export const PARES_PIE = [
  ['La plataforma donde vive toda tu estrategia de ventas: CRM, marketing, automatización y agentes de IA. Hecha para latinoamérica, en español y con precios justos.', 'The platform where your entire sales strategy lives: CRM, marketing, automation and AI agents. Built for Latin America, with fair pricing.'],
  ['<div class="footer-col-title">Producto</div>', '<div class="footer-col-title">Product</div>'],
  ['>CRM y pipeline<', '>CRM and pipeline<'],
  ['>La plataforma completa<', '>The complete platform<'],
  ['>Agentes de IA<', '>AI agent<'],
  ['>Cómo funciona<', '>How it works<'],
  ['>Precios<', '>Pricing<'],
  ['>Novedades<', '>What’s new<'],
  ['>Programa de Partners<', '>Partner program<'],
  ['>Iniciar sesión<', '>Sign in<'],
  ['<div class="footer-col-title">Soluciones</div>', '<div class="footer-col-title">Solutions</div>'],
  ['>CRM para pymes<', '>CRM for small businesses<'],
  ['>CRM con WhatsApp<', '>WhatsApp CRM<'],
  ['>CRM gratis<', '>Free CRM<'],
  ['>CRM inmobiliario<', '>Real estate CRM<'],
  ['>CRM para clínicas<', '>CRM for clinics<'],
  ['>CRM para restaurantes<', '>CRM for restaurants<'],
  ['>Pipeline de ventas<', '>Sales pipeline<'],
  ['>Mejores CRM con WhatsApp<', '>Best WhatsApp CRMs<'],
  ['>Alternativas a HubSpot<', '>HubSpot alternatives<'],
  ['>Benchmarks LatAm<', '>Latin America benchmarks<'],
  ['>Calculadora de presupuesto<', '>Google Ads budget calculator<'],
  ['>Política de privacidad<', '>Privacy policy<'],
  ['>Términos de servicio<', '>Terms of service<'],
  ['>Reembolsos y cancelación<', '>Refunds and cancellation<'],
  ['<div class="footer-col-title" style="margin-top:22px">Contacto</div>', '<div class="footer-col-title" style="margin-top:22px">Contact</div>'],
  ['· Bogotá, Colombia', '· Bogotá, Colombia'],
  ['Hecho con ❤️ para latinoamérica', 'Made with ❤️ for Latin America'],
];

// Aplica pares a un texto; devuelve los que no encontró.
export function aplicarPares(texto, pares) {
  const faltan = [];
  for (const [de, a] of [...pares].sort((x, y) => y[0].length - x[0].length)) {
    if (!texto.includes(de)) { faltan.push(de); continue; }
    texto = texto.split(de).join(a);
  }
  return { texto, faltan };
}

// Texto visible con pinta de español (para fallar a la vista).
const ESPANOL = /[¿¡ñ]|\b(?:de|del|las|los|el|que|para|con|tus|sin|una|por|desde|cuenta|gratis|también|más|cómo|qué|está|son|hasta|cada|puedes|tienes|según|aquí)\b/i;
export function restosEnEspanol(html, permitidos = []) {
  const visible = html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/<!--[\s\S]*?-->/g, ' ');
  const textos = [
    ...visible.replace(/<[^>]+>/g, '\n').split('\n'),
    ...[...visible.matchAll(/\b(?:aria-label|title|alt|placeholder)="([^"]*)"/g)].map((m) => m[1]),
  ].map((t) => t.trim()).filter(Boolean);
  return textos.filter((t) => ESPANOL.test(permitidos.reduce((s, p) => s.split(p).join(''), t)));
}
