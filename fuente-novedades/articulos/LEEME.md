# Artículos de novedades — contrato de contenido

Cada función nueva de Acuarius tiene **su propio artículo** en
`acuarius.app/novedades/<slug>/`. Un artículo = un fichero `<slug>.mjs` en esta
carpeta que exporta `ARTICULO`. `fuente-novedades/build.mjs` los pinta.

## Forma del objeto

```js
export const ARTICULO = {
  slug: 'productos-en-el-crm',          // = nombre del fichero, solo [a-z0-9-]
  kw: 'catálogo de productos en el CRM', // keyword principal
  title: '…',          // ≤ 60 caracteres, con la keyword. Sin «| Acuarius» (lo añade el build si cabe)
  description: '…',    // 120–160 caracteres, con la keyword
  h1: '…',             // con la keyword
  modulo: 'CRM',       // CRM | Conversaciones | Agente de IA | Agenda | Ventas | Pauta | Marketing
  publicado: '2026-11-02',
  edicion: 1,
  resumen: '…',        // 1–2 frases para las tarjetas del índice (≤ 160 car.)
  respuesta: '…',      // «En pocas palabras»: 40–70 palabras que responden directo qué es y qué resuelve. Texto plano. Es lo que citan las IAs (GEO).
  video: { id: 'YouTubeID', titulo: '…', subido: '2026-10-21', segundos: 111, propio: false },
  ilustracion: 'productos', // clave de ILUSTRACIONES en build.mjs
  secciones: [         // el cuerpo. 5–8 secciones. HTML simple: <p>, <ul><li>, <ol><li>, <h3>, <b>, <table>
    { h2: '¿Qué es …?', html: '<p>…</p>' },
  ],
  pasos: {             // cómo activarlo / usarlo, paso a paso (HowTo)
    h2: 'Cómo … paso a paso',
    intro: '…',
    items: [{ t: 'Título corto', d: 'Qué hacer, con los nombres EXACTOS de los botones y menús' }],
  },
  faq: [{ q: '¿…?', a: '…' }],   // 5–7 preguntas reales que alguien buscaría en Google o le haría a ChatGPT
  relacionados: ['otro-slug'],    // 2–3 slugs de esta carpeta
  enlaces: [{ url: '/crm/whatsapp/', texto: 'CRM con WhatsApp' }], // 1–3 páginas SEO existentes del sitio
};
```

Slugs de esta tanda (para `relacionados`): `productos-en-el-crm`,
`campos-personalizados-crm`, `whatsapp-en-tiempo-real`,
`agente-ia-whatsapp-datos-de-contacto`, `enlace-para-agendar-reuniones`,
`recompra-y-encuesta-nps`, `anuncios-clic-a-whatsapp-meta-ads`.

Páginas SEO que existen (para `enlaces`): `/crm/`, `/crm/whatsapp/`,
`/crm/gratis/`, `/crm/inmobiliarias/`, `/crm/clinicas/`, `/crm/restaurantes/`,
`/crm/pipeline-de-ventas/`, `/mejores-crm-con-whatsapp/`, `/benchmarks/`,
`/benchmarks/costo-meta-ads-colombia/`, `/calculadora-presupuesto-google-ads/`.

## Reglas de contenido

- **1.000–1.600 palabras** sumando respuesta, secciones, pasos y FAQ. Contenido
  útil de verdad: qué problema resuelve, cómo se usa, ejemplos por tipo de
  negocio (inmobiliaria, clínica, tienda, restaurante, servicios), errores
  comunes, buenas prácticas. No relleno.
- **Solo lo que el producto hace HOY.** Cada afirmación sale del código
  (`/Users/mac/Documents/Claude/Acuarius/api/`, `public/app.js`) o de
  `public/novedades.json`. Si no lo puedes confirmar, no lo escribas. Los
  nombres de botones y menús, exactos como en la app.
- Español de LatAm, tuteo, frases cortas, desde la función terminada. Nada de
  «revolucionario», «potente», «en un mundo donde…».
- **Prohibido**: precios, planes, límites por plan, la palabra «licencia»;
  nombres de clientes reales; Palomma; prometer conexión de WhatsApp «con un
  clic» (hoy se conecta con la app de Meta del propio negocio); prometer
  Messenger, Lead Ads o publicar en Facebook/Instagram.
- Datos de ejemplo inventados y verosímiles (nombres comunes, cifras en pesos
  colombianos). Nunca datos reales.
- Sin comillas invertidas (backtick) dentro de los textos. Usa comillas simples
  de JS para los strings y «» para citar en el texto.
- GEO: la `respuesta` y la primera frase de cada sección deben poder citarse
  solas. Usa preguntas como H2 cuando tenga sentido («¿Para qué sirve…?»).
- Comprueba con: `node --check fuente-novedades/articulos/<slug>.mjs`
