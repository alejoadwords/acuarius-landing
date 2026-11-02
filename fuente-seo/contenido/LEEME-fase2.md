# Páginas de producto (fase 2 del menú) — contrato

Cada página nueva vive en `fuente-seo/contenido/p-<nombre>.mjs`. El build la
carga sola (no hay que tocar build.mjs ni mapa.mjs). El fichero exporta:

```js
export const FILAS = [
  { url: '/automatizaciones/', cluster: 8, nivel: 'Producto', intencion: 'Comercial', estado: 'publicada',
    kw: 'automatización de ventas',          // keyword principal
    title: '…',        // ≤ 60 caracteres, con la keyword; «| Acuarius» al final si cabe
    description: '…',  // 120–160 caracteres, con la keyword
    h1: '…',           // con la keyword
    miga: 'Automatizaciones' },              // nombre corto para las migas de pan
];
export const CONTENIDO = {
  '/automatizaciones/': { badge, sub, secciones: [...], faq: [...], cta: { h2, sub } },
};
```

El formato de `CONTENIDO` es el de `contenido/c1-crm.mjs` (léelo entero, y
también `build.mjs` para ver los tipos de sección: `texto`, `tarjetas`,
`pasos`, `tabla`, `html`). Reglas que valida el build: title ≤ 60, description
120–160, y cada palabra de la keyword (salvo de/la/el/para/con…) dentro de
title, description y h1. Si falla, el build se detiene y dice por qué.

## Reglas de contenido

- **1.200–1.800 palabras** de cuerpo útil por página: qué problema resuelve,
  cómo funciona en Acuarius, ejemplos por tipo de negocio (inmobiliaria,
  clínica, tienda, restaurante, servicios, educación), cómo empezar (pasos con
  los nombres EXACTOS de menús y botones), errores comunes, FAQ de 6–8.
- **Solo lo que el producto hace HOY.** Cada afirmación sale del código de la
  app (`/Users/mac/Documents/Claude/Acuarius/api/`, `public/app.js`,
  `public/movil-app.js`) o de `public/novedades.json`. Si no lo confirmas, no
  lo escribas. Solo lectura en ese repo.
- Español de LatAm, tuteo, frases cortas, desde la función terminada. Nada de
  «revolucionario», «potente», «en un mundo donde».
- **Prohibido**: precios, planes, cupos o límites por plan, la palabra
  «licencia» (enlaza a /precios/ si hace falta hablar de precio); nombres de
  clientes reales (en el código aparecen Certain, Karvio, La Matriarca, Pastel
  de Oro, VIVA 1A, Palomma, AMETT…); Messenger, Lead Ads y publicar en
  Facebook/Instagram (bloqueados en Meta); prometer conexión de WhatsApp «con un
  clic» (hoy se conecta con la app de Meta del propio negocio); Tiendanube
  (oculta); prometer que algo es «ilimitado».
- Datos de ejemplo inventados y verosímiles. Nunca datos reales.
- Sin comillas invertidas dentro de los textos: strings con comillas simples
  de JS y «» para citar.
- Enlaces internos con `<a href="/ruta/">` (barra final). Enlaza 3–6 páginas
  que existen: /agente-ia/, /crm/, /crm/whatsapp/, /crm/pipeline-de-ventas/,
  /crm/inmobiliarias/, /crm/clinicas/, /crm/restaurantes/, /precios/,
  /novedades/ y sus artículos (/novedades/productos-en-el-crm/,
  /novedades/campos-personalizados-crm/, /novedades/whatsapp-en-tiempo-real/,
  /novedades/agente-ia-whatsapp-datos-de-contacto/,
  /novedades/enlace-para-agendar-reuniones/,
  /novedades/recompra-y-encuesta-nps/,
  /novedades/anuncios-clic-a-whatsapp-meta-ads/), y las demás páginas de la
  fase 2: /agente-ia/calificacion-y-reparto/, /whatsapp/plantillas-y-difusion/,
  /productos/, /agenda/, /automatizaciones/, /campanas/, /formularios/,
  /reportes/, /pauta/, /integraciones/, /crm/tiendas-en-linea/, /agencias/.
- GEO: la primera frase de cada sección debe poder citarse sola; usa preguntas
  como h2 cuando tenga sentido.
- Comprueba: `node --check` del fichero y `cd /Users/mac/Documents/Claude/acuarius-landing && node fuente-seo/build.mjs`
  (debe terminar con ✓). Si el build falla por otra página que no es tuya, no
  la toques: dilo en tu respuesta.
