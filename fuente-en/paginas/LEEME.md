# Páginas escritas a mano en inglés (pares de traducción)

Además del contrato general (`fuente-en/LEEME-traduccion.md`), las páginas escritas a
mano (precios, partners, legales) se traducen con **pares**: no se copia el HTML,
se lista cada texto español EXACTO y su inglés. `fuente-en/build.mjs` toma la página
española, reemplaza cada par y escribe la versión en `/en/...`. Si la página española
cambia, el par que ya no coincide hace fallar el build a la vista.

Cada módulo `fuente-en/paginas/<nombre>.mjs` exporta:

```js
export const CABEZA = { title: '...', description: '...' }; // la <title> y la meta description en inglés
export const PARES = [
  ['texto exacto tal como está en el HTML español', 'its English version'],
  ...
];
export const PERMITIDOS = ['El Salvador']; // opcional: nombres propios con pinta de español
```

Reglas de los pares:

- El texto español tiene que estar **literalmente** en el fichero (mismas comillas,
  entidades `&amp;`, saltos de línea, espacios). Copia del fichero, no de memoria.
- Solo cuenta lo que hay **después de `<!-- MENU:FIN -->`**: el `<head>` y el menú los
  pone el generador. El `<title>` y la description van en `CABEZA`.
- Los pares se aplican del más largo al más corto y reemplazan **todas** las
  apariciones. Un texto corto y genérico («Pro», «Sí») puede pisar otros sitios:
  inclúyele contexto (la etiqueta que lo rodea, `>Sí<`, etc.) para que sea único.
- Un párrafo largo con etiquetas dentro puede ir entero como un solo par.
- Traduce también las cadenas visibles dentro de `<script>` (con su par exacto,
  incluidas las comillas si hace falta para que sea único) y `'es-CO'` → `'en-US'` si
  formatea cifras que se ven.
- Enlaces internos: no los toques; el generador los pasa a inglés.
- **No traduzcas el pie si la página trae el pie común** (el que empieza «La plataforma
  donde vive toda tu estrategia de ventas»): ya está en `fuente-en/pie.mjs`. Si la
  página tiene otro pie distinto, ese sí va en tus pares.

## Probar

```
node fuente-en/build.mjs --parcial
```

Construye todas las páginas a mano que ya tienen módulo y lista: pares que no
encontró, enlaces sin URL en inglés y texto visible que parezca español. Itera hasta que
tu página no aparezca en la lista de fallos (otras páginas pueden fallar por falta de
módulo: eso no es tuyo). **El build no escribe nada si hay fallos**; cuando salga ✓
sí escribe en `en/`, y eso está bien. Para ver tu página traducida:
`en/pricing/index.html`, `en/partners.html`, `en/privacy.html`, `en/terms.html`,
`en/refunds.html`.
