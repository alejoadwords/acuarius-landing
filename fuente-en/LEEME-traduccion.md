# Traducir acuarius.app al inglés — contrato para quien traduce

## Para quien mantiene el sitio

Cada URL española tiene su par en inglés (`fuente-en/urls.mjs`, slugs en inglés).
Reconstruir todo, en este orden:

```
node fuente-novedades/build.mjs && node fuente-seo/build.mjs && node fuente-menu/aplicar.mjs && node fuente-en/build.mjs
```

| Cambias… | Actualiza también… |
|---|---|
| Una página SEO (`fuente-seo/contenido/x.mjs`) | `fuente-seo/contenido-en/x.mjs` |
| Una página SEO nueva | su fila en `fuente-en/urls.mjs` + su entrada en `contenido-en/` |
| Un artículo de novedades | `fuente-novedades/articulos-en/<mismo fichero>` (+ fila en urls.mjs si es nuevo) |
| Una edición | `fuente-novedades/ediciones-en.mjs` |
| Una ilustración | `fuente-novedades/ilustraciones-en.mjs` |
| Portada, precios, partners, legales | el par en `fuente-en/textos.mjs` o `fuente-en/paginas/*.mjs` |
| El pie de partners.html | `fuente-en/pie.mjs` |
| El menú | el objeto `EN` de `fuente-menu/menu.mjs` |

Si falta algo, los builds fallan y dicen qué: ninguno publica una página a medias.

---

Repo: `/Users/mac/Documents/Claude/acuarius-landing` (sitio estático de acuarius.app,
un CRM con agente de IA para WhatsApp, pensado para pymes de Latinoamérica).

Cada página en español sale de un fichero de datos `.mjs`. La versión en inglés es
un fichero **nuevo** con la misma forma, que los generadores convierten en
`/en/...`. Tú solo creas los ficheros que te tocan. **No modifiques ningún fichero
existente, no hagas commit ni push.**

## Reglas de traducción

- Inglés natural de EE. UU., para dueños de negocio y equipos de ventas. Directo,
  segunda persona, frases cortas. Nada de relleno de marketing («unlock», «seamless»,
  «elevate», «game-changer», «in today's fast-paced…»). Pocos guiones largos.
- **Mismas afirmaciones que el original, ni una más.** No inventes funciones,
  cifras, clientes ni garantías. Precios, cupos, porcentajes y fechas idénticos.
- La interfaz de Acuarius se usa sobre todo en español (el inglés dentro de la app
  está en beta). **No digas que la app está en inglés.** Donde el español vende
  «en español» como ventaja, dilo como «built for Latin America» / «made for
  Latin American businesses», o quítalo si no aporta.
- Nombres de menús y pantallas de la app (p. ej. «CRM → Campos personalizados»):
  tradúcelos al inglés de forma natural («CRM → Custom fields»).
- Datos locales (Colombia, México, COP, IVA, EPS, DIAN, Nequi…) se quedan: la
  audiencia sigue siendo LatAm. Puedes aclarar entre paréntesis si hace falta
  («IVA (VAT)», «EPS (health insurer)»).
- **Enlaces internos: deja los `href` exactamente como están en español**
  (`/crm/`, `/precios/`, `/novedades/...`). El generador los cambia por su URL
  en inglés. No escribas URLs `/en/...` a mano.
- HTML: misma estructura, mismas clases, ids, atributos `data-*` y lógica JS.
  Traduce solo lo que ve la persona: textos, `alt`, `title`, `aria-label`,
  `placeholder`, y las cadenas visibles dentro de `<script>` (etiquetas,
  mensajes). Si un script formatea cifras con `'es-CO'` para mostrarlas, usa
  `'en-US'`. No cambies nombres de variables ni funciones.
- Los videos de YouTube están en español: no cambies los ids; traduce sus
  títulos y capítulos.

## SEO (title, description, h1, kw)

- `kw`: la búsqueda que haría alguien en inglés para esa página (natural, no
  calcada: «crm inmobiliario» → «real estate crm»).
- `title`: máx. 60 caracteres. Si el español termina en « | Acuarius», el inglés también.
- `description`: entre 120 y 160 caracteres.
- Cada palabra de `kw` (salvo a, an, the, of, for, to, in, on, with, and, or,
  your, by, from, vs, is, how, what) tiene que aparecer en el title, en la
  description y en el h1.
- Titles y descriptions únicos.

## Comprobar

```
node --check <tu fichero>
node fuente-en/validar.mjs <tu fichero relativo al repo>
```

El validador revisa estructura, reglas SEO y texto que parezca español. Tiene que
salir `✓`. Si marca algo que de verdad es un nombre propio (ciudad, marca), dilo
en tu informe en vez de deformar el texto. Si crees que el validador tiene un
error, dilo; no lo modifiques.

## Informe final

Corto: ficheros creados, resultado del validador, y cualquier frase del original
que no supiste cómo decir sin inventar o que te pareció dudosa.
