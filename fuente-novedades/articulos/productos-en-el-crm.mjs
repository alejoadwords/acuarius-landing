// Artículo de novedades: CRM → Productos (función del 30-10-2026).
// Cada afirmación sale de api/productos.js, api/_productos.js, api/proposals.js,
// api/_tienda-motor.js, api/_inbox-engine.js, public/app.js, public/informes.js
// y public/novedades.json del repo de la app.
export const ARTICULO = {
  slug: 'productos-en-el-crm',
  kw: 'catálogo de productos en el CRM',
  title: 'Catálogo de productos en el CRM: cotiza y vende sin Excel',
  description: 'Arma tu catálogo de productos en el CRM, agrégalos a cada oportunidad y el valor del negocio se calcula solo. Véndelos por chat, propuestas y campañas.',
  h1: 'Catálogo de productos en el CRM: de la cotización a la venta',
  modulo: 'CRM',
  publicado: '2026-11-02',
  edicion: 1,
  resumen: 'Sube lo que vendes a CRM → Productos y úsalo en oportunidades, propuestas, chats, campañas y formularios. El valor del negocio se calcula solo.',
  respuesta: 'Tener el catálogo de productos en el CRM significa que lo que vendes, con su precio, IVA, foto y enlace de pago, vive en el mismo lugar que tus clientes. En Acuarius lo armas en CRM → Productos, a mano o desde un archivo CSV. Al agregar productos a una oportunidad, su valor se calcula solo, y luego ves en Análisis qué se vende más.',
  video: { id: 'j7YStHfsR7o', titulo: 'Propuestas comerciales con IA: créalas, envíalas y cóbralas', subido: '2026-10-21', segundos: 111, propio: false },
  ilustracion: 'productos',
  secciones: [
    {
      h2: '¿Qué es un catálogo de productos en el CRM?',
      html:
        '<p>Un catálogo de productos en el CRM es la lista de lo que vendes —productos o servicios— guardada junto a tus contactos y oportunidades, para cotizar y vender sin salir de la herramienta. En Acuarius está en <b>CRM → Productos</b>, al lado de Pipeline y Contactos.</p>' +
        '<p>Resuelve tres problemas que se repiten en casi todas las pymes:</p>' +
        '<ul>' +
        '<li><b>Cotizar a mano.</b> El asesor busca el precio en un Excel viejo o se lo pregunta al jefe. Con el catálogo, el precio vigente está a un clic.</li>' +
        '<li><b>Valores del negocio inventados.</b> Si cada asesor escribe «2 millones» a ojo en la oportunidad, tu pipeline no dice la verdad. Con productos, el valor es la suma de lo que se cotizó.</li>' +
        '<li><b>No saber qué se vende.</b> Sabes cuánto vendiste, pero no qué. Con productos en cada venta ganada, el informe te lo dice por unidades e ingresos.</li>' +
        '</ul>' +
        '<p>Es un solo catálogo por cuenta, y lo ve todo el equipo porque hace falta para cotizar.</p>',
    },
    {
      h2: '¿Cómo se arma el catálogo?',
      html:
        '<p>El catálogo se arma de tres formas: a mano, importando un archivo CSV o dejando que llegue solo desde tu tienda en línea o tu hoja de Google.</p>' +
        '<h3>A mano</h3>' +
        '<p>Con el botón <b>Nuevo producto</b>. Solo el nombre es obligatorio. También puedes poner precio, moneda, IVA %, referencia o SKU (se genera sola si no la pones), categoría, unidades disponibles, descripción, hasta seis fotos, enlace de pago, página del producto y costo. Si marcas «Es un servicio (no lleva inventario)», no se cuentan unidades.</p>' +
        '<h3>Desde un archivo</h3>' +
        '<p>Con <b>Importar archivo</b> subes un CSV. Si tu lista está en Excel o Google Sheets, guárdala como CSV (en Excel: Archivo → Guardar como → «CSV UTF-8»); un .xlsx no se acepta. La primera fila son los títulos y solo «Nombre» es obligatorio. Se leen también Referencia, Categoría, Precio, Moneda, IVA, Costo, Unidades, Descripción, Foto, Enlace y Enlace de pago. Puedes bajar la plantilla con <b>Descargar plantilla</b>.</p>' +
        '<p>Si un producto ya existe (misma referencia, o mismo nombre si no hay referencia), se actualiza. Nada se borra. Y «50.000» se lee como cincuenta mil, no cincuenta.</p>' +
        '<h3>Desde tu tienda o tu hoja</h3>' +
        '<p>Si conectaste Shopify, WooCommerce o VTEX, o una hoja de productos de Google, esos productos aparecen en el mismo catálogo con su origen. Se editan allá, porque la siguiente sincronización desharía lo que cambies aquí. Lo que sí puedes ponerles desde Acuarius es su enlace de pago.</p>',
    },
    {
      h2: '¿Cómo se calcula el valor de una oportunidad con productos?',
      html:
        '<p>El valor de la oportunidad es la suma de sus productos: precio por cantidad, menos el descuento de cada línea, sin IVA. Se recalcula solo cada vez que agregas, cambias o quitas un producto, y se ve en la ficha, en el tablero y en los informes.</p>' +
        '<p>En la ficha de la oportunidad hay una caja <b>Productos</b> con su botón <b>+ Agregar</b>. Al tocar una línea cambias cantidad, precio unitario y descuento %. Cambiar el precio ahí solo afecta a esa oportunidad, no al catálogo. La caja te muestra el total antes de IVA, el IVA y el total con IVA.</p>' +
        '<p>Si quitas todos los productos, el valor queda como estaba y puedes escribirlo a mano. Y si el cliente pide algo fuera del catálogo, usa «Algo que no está en el catálogo» en el mismo selector: escribes nombre y precio, y cuenta igual.</p>',
    },
    {
      h2: '¿Cómo se venden los productos desde el chat?',
      html:
        '<p>En el inbox, el botón de producto llena la caja de respuesta con el nombre, el precio y el enlace «Cómpralo aquí», y adjunta la foto. No envía nada solo: revisas, agregas lo que quieras y pulsas Enviar.</p>' +
        '<p>Si el producto no tiene enlace de pago, va el enlace de su página.</p>' +
        '<p>Tu agente de IA también consulta el mismo catálogo al responder. Lo archivado no lo ve, lo agotado no lo ofrece y, cuando alguien quiere comprar, comparte el enlace de pago del producto.</p>',
    },
    {
      h2: '¿Cómo funcionan las propuestas con productos?',
      html:
        '<p>Una propuesta creada desde un lead ya trae los productos de su oportunidad. Puedes agregar más del catálogo con <b>Agregar producto</b> y ajustar cantidad, precio y descuento. El total con IVA se calcula solo.</p>' +
        '<p>Tu cliente ve una tabla con subtotal, IVA y total, y puede descargarla en PDF. Si la propuesta se paga, la venta cuenta en Ventas por producto.</p>',
    },
    {
      h2: 'Enlaces de pago y tiendas en línea',
      html:
        '<p>Cada producto puede llevar su enlace de pago de Wompi, Bold, MercadoPago o la pasarela que uses. Debe empezar por https://. Ese enlace es el que va en el inbox, en tus correos, en las campañas de WhatsApp y el que comparte tu agente de IA.</p>' +
        '<p>Si tienes Shopify, WooCommerce o VTEX conectado, los productos de una sola variante traen un enlace que abre el pago con el producto ya en el carrito. Si les pones tu propio enlace de pago, ese manda.</p>' +
        '<p>Además, cada pedido pagado en tu tienda deja sus productos en la oportunidad del cliente, y así cuenta en tus informes, campañas y automatizaciones.</p>',
    },
    {
      h2: 'Campañas, formularios y automatizaciones con productos',
      html:
        '<ul>' +
        '<li><b>Campañas de WhatsApp.</b> Eliges un producto y su nombre, precio y enlace llenan los huecos de tu plantilla. Si la plantilla lleva imagen, va su foto.</li>' +
        '<li><b>Segmentos.</b> En la audiencia eliges un producto y «Lo compró» o «Se interesó (lo tiene en una oportunidad)».</li>' +
        '<li><b>Correos.</b> El editor tiene un bloque «Producto»: lo arrastras, eliges del catálogo y queda su tarjeta con foto, nombre, precio y botón.</li>' +
        '<li><b>Formularios.</b> El campo «Producto de interés» pregunta «¿Qué te interesa?». Lo elegido entra en la oportunidad con su precio.</li>' +
        '<li><b>Automatizaciones.</b> El disparador «Cuando se agrega un producto a su oportunidad» corre una sola vez por lead. Y las condiciones deciden si el contacto lo tiene, no lo tiene, lo compró o no lo ha comprado.</li>' +
        '</ul>',
    },
    {
      h2: 'Medir las ventas por producto y ejemplos por negocio',
      html:
        '<p>En <b>Análisis → Ventas</b> está «Ventas por producto»: unidades, ventas, ingresos sin IVA y el peso de cada producto en el total, con las oportunidades ganadas del periodo. Sale también en el PDF que descargas y en el enlace que compartes.</p>' +
        '<table>' +
        '<tr><th>Negocio</th><th>Cómo lo usa</th></tr>' +
        '<tr><td>Inmobiliaria</td><td>Avalúo o administración de arriendo como servicios, para cotizar honorarios iguales en todo el equipo.</td></tr>' +
        '<tr><td>Clínica</td><td>Valoración o paquete de sesiones con su IVA. La propuesta sale con subtotal, IVA y total.</td></tr>' +
        '<tr><td>Tienda</td><td>Catálogo desde Shopify. El asesor envía la camiseta de $45.000 con foto y enlace desde el chat.</td></tr>' +
        '<tr><td>Restaurante</td><td>Menú para eventos: 40 almuerzos de $28.000 con 10 % de descuento dan un valor de $1.008.000 en la oportunidad.</td></tr>' +
        '<tr><td>Servicios</td><td>Planes mensuales y una automatización que escribe a quien agregó el plan pero no lo ha comprado.</td></tr>' +
        '</table>' +
        '<h3>Errores comunes</h3>' +
        '<ul>' +
        '<li>Subir el .xlsx directo: guárdalo antes como CSV.</li>' +
        '<li>Borrar lo que dejaste de vender un tiempo: mejor <b>Archivar</b>, y lo recuperas en «Ver archivados».</li>' +
        '<li>Editar en Acuarius un producto de tu tienda: cámbialo en la tienda.</li>' +
        '<li>Dejar la descripción vacía: tu agente de IA la usa al responder.</li>' +
        '</ul>',
    },
  ],
  pasos: {
    h2: 'Cómo crear tu catálogo y usarlo en una oportunidad paso a paso',
    intro: 'Así llevas tu primer producto a una oportunidad.',
    items: [
      { t: 'Abre Productos', d: 'Entra a CRM y elige la pestaña Productos.' },
      { t: 'Crea o importa', d: 'Pulsa «Nuevo producto», llena nombre, precio, moneda e IVA % y pulsa «Crear producto». Para muchos, pulsa «Importar archivo», baja la plantilla con «Descargar plantilla» y sube tu lista con «Elegir archivo .csv».' },
      { t: 'Ponle enlace de pago', d: 'En el producto, pega en «Enlace de pago (opcional)» el enlace de tu pasarela, que empiece por https://.' },
      { t: 'Abre la oportunidad', d: 'Desde el tablero, abre la ficha del lead y busca la caja «Productos».' },
      { t: 'Agrega el producto', d: 'Pulsa «+ Agregar», búscalo en el catálogo y elígelo. Toca la línea para cambiar cantidad, precio unitario o descuento % y pulsa «Guardar».' },
      { t: 'Revisa el valor', d: 'El valor de la oportunidad pasa a ser el total antes de IVA. Desde la caja «Propuestas», con «+ Nueva», armas la propuesta con esos mismos productos.' },
    ],
  },
  faq: [
    { q: '¿Puedo importar mis productos desde Excel?', a: 'Sí, pero como CSV. Abre tu archivo en Excel o Google Sheets, guárdalo como CSV (en Excel, «CSV UTF-8») y súbelo con «Importar archivo». Un .xlsx no se acepta.' },
    { q: '¿El valor de la oportunidad incluye el IVA?', a: 'No. El valor es la suma de los productos con sus descuentos y sin IVA. La ficha y la propuesta te muestran aparte el IVA y el total con IVA.' },
    { q: '¿Si cambio un precio en el catálogo, cambian las oportunidades viejas?', a: 'No. Al agregar un producto a una oportunidad, su nombre y su precio se copian. Lo cotizado o vendido conserva el precio de ese momento.' },
    { q: '¿El botón de producto del inbox envía el mensaje solo?', a: 'No. Llena la caja de respuesta con nombre, precio y el enlace «Cómpralo aquí», y adjunta la foto. Tú lo revisas y pulsas Enviar.' },
    { q: '¿Mi agente de IA conoce los productos?', a: 'Sí. Consulta el mismo catálogo al responder, no ofrece lo archivado ni lo agotado y comparte el enlace de pago cuando alguien quiere comprar.' },
    { q: '¿Un asesor puede cambiar los precios del catálogo?', a: 'No, si tiene perfil de Ventas: usa el catálogo en sus oportunidades, pero lo cambia quien administra la cuenta o lleva el mercadeo.' },
  ],
  relacionados: ['campos-personalizados-crm', 'recompra-y-encuesta-nps', 'whatsapp-en-tiempo-real'],
  enlaces: [
    { url: '/crm/', texto: 'CRM con IA para pymes' },
    { url: '/crm/pipeline-de-ventas/', texto: 'Pipeline de ventas' },
  ],
};
