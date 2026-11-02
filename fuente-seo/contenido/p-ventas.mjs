// Páginas de producto de la fase 2: /productos/ (cotizaciones y propuestas) y
// /crm/tiendas-en-linea/ (CRM para ecommerce).
//
// Cada afirmación sale del repo de la app a 02-11-2026: api/proposals.js
// (plantillas de la IA, totales con IVA y descuento, firma, marcar pagada),
// public/proposal.html (página /p/{token}, PDF, «Aceptar y firmar», «Aceptar y
// pagar»), api/productos.js y api/_productos.js (catálogo y valor del negocio),
// api/tiendas.js, api/_tienda.js, api/_tienda-vtex.js, api/_tienda-motor.js,
// api/_tienda-agente.js y api/_tienda-ventas.js (tiendas), public/app.js
// (nombres de menús y botones), public/informes.js (Análisis → Tienda) y
// public/novedades.json.
//
// Fuera a propósito: precios y planes, el cobro con MercadoPago dentro de las
// propuestas (oculto), Tiendanube (oculta), Messenger, el deck interno
// /propuesta.html (es la presentación comercial de Acuarius, no una función
// para clientes) y cualquier promesa de que un pago por enlace propio marque
// sola la propuesta como pagada: no lo hace.
//
// Keywords elegidas para no competir con el artículo
// /novedades/productos-en-el-crm/ («catálogo de productos en el CRM»).

export const FILAS = [
  { url: '/productos/', cluster: 8, nivel: 'Producto', intencion: 'Comercial', estado: 'publicada',
    kw: 'software de cotizaciones',
    title: 'Software de cotizaciones con IA, firma y pago | Acuarius',
    description: 'Software de cotizaciones con IA: arma la propuesta con tus productos, IVA y descuentos, envíala con un enlace y tu cliente la firma en línea y paga.',
    h1: 'Software de cotizaciones: propuestas con IA que tu cliente firma en línea',
    miga: 'Productos y propuestas' },
  { url: '/crm/tiendas-en-linea/', cluster: 1, nivel: 'Vertical', intencion: 'BOFU', estado: 'publicada',
    kw: 'crm para ecommerce',
    title: 'CRM para ecommerce: Shopify, WooCommerce y VTEX | Acuarius',
    description: 'CRM para ecommerce: conecta Shopify, WooCommerce o VTEX y cada pedido entra con su cliente. Recupera carritos, impulsa la recompra y vende por WhatsApp.',
    h1: 'CRM para ecommerce: pedidos, clientes y recompra en un solo lugar',
    miga: 'Tiendas en línea' },
];

export const CONTENIDO = {
  '/productos/': {
    badge: 'Productos y propuestas',
    sub: 'Tu catálogo, tus oportunidades y tus cotizaciones en el mismo lugar. La IA redacta la propuesta con los datos de tu negocio, el total con IVA se calcula solo y tu cliente la abre, la firma y la paga desde un enlace.',
    secciones: [
      { tipo: 'texto', label: 'El problema', h2: '¿Por qué cotizar en Word y Excel te hace perder ventas?',
        parrafos: [
          'Cotizar fuera del CRM obliga a copiar precios a mano, a rehacer el documento para cada cliente y a perseguir por WhatsApp si lo abrió. Mientras tanto, el valor de la oportunidad en tu tablero es un número que alguien escribió a ojo.',
          'Un <b>software de cotizaciones</b> une las tres piezas: lo que vendes, a quién se lo vendes y el documento que le mandas. En Acuarius el catálogo vive en <b>CRM → Productos</b>, cada oportunidad lleva sus productos y la propuesta sale de ahí, con la tabla de precios armada.',
          'El resultado es un solo dato en todas partes. Lo que cotizaste es lo que vale la oportunidad, lo que ves en tu <a href="/crm/pipeline-de-ventas/">pipeline de ventas</a> y lo que cuenta en tus informes cuando la ganas.',
        ] },
      { tipo: 'tarjetas', label: 'Qué hace', h2: 'Lo que hace Acuarius con cada cotización',
        items: [
          { t: 'Parte de tu catálogo', d: 'Una propuesta creada desde un lead ya trae los productos de su oportunidad. Agregas más con «Agregar producto» y ajustas cantidad, precio y descuento de cada línea.' },
          { t: 'Calcula el total', d: 'Subtotal con descuentos, IVA por línea y total. Cambiar un precio en la propuesta no toca la oportunidad ni el catálogo: cotizar no es vender.' },
          { t: 'Redacta con IA', d: 'Elige un estilo y pulsa «Generar con IA». La IA usa los datos del lead, el perfil de tu negocio y los productos. No inventa clientes, premios ni cifras tuyas.' },
          { t: 'Se envía como enlace', d: 'Cada propuesta tiene su página propia. Tu cliente la abre en el celular o el computador, ve la tabla de precios y la descarga en PDF.' },
          { t: 'Se firma en línea', d: 'Con «Aceptar y firmar» tu cliente pone su nombre, su correo y dibuja su firma. A ti te llega un correo con quién firmó y cuándo.' },
          { t: 'Lleva a tu pago', d: 'Si pegas el enlace de tu pasarela, el botón es «Aceptar y pagar»: primero firma y después pasa a pagar.' },
        ] },
      { tipo: 'texto', label: 'Cómo se redacta', h2: '¿Cómo redacta la IA una propuesta comercial?',
        parrafos: [
          'La IA de Acuarius escribe la propuesta con el nombre, la empresa, la fuente, la etapa y las notas del lead, más el perfil de tu negocio y lo que contaste al crear la cuenta. Si no tiene datos de tu negocio, no supone a qué te dedicas: completa tu perfil para que salga más precisa.',
          'Eliges entre cuatro estilos. <b>Consultiva</b>: diagnóstico, objetivos, plan de trabajo e inversión, la más completa. <b>Ejecutiva</b>: una página directa, para quien ya te conoce. <b>Comercial</b>: el costo de no actuar y la oferta. <b>Paquetes</b>: tres opciones de precio, Esencial, Recomendado y Premium.',
          'En «Instrucciones para la IA» le pides lo que quieras, por ejemplo «enfatiza el paquete mensual». El texto aparece mientras se escribe y lo puedes editar antes de crear la propuesta. Si no hay monto, deja el marcador [DEFINIR INVERSIÓN] para que no se te pase.',
        ] },
      { tipo: 'tabla', label: 'Ejemplo', h2: 'Así se calcula una cotización con productos',
        cab: ['Producto', 'Cantidad', 'Precio', 'Descuento', 'Total de la línea'],
        filas: [
          ['Uniforme antifluido', '30', '$85.000', '10 %', '$2.295.000'],
          ['Bordado del logo', '30', '$6.000', '—', '$180.000'],
          ['Envío a domicilio (servicio)', '1', '$25.000', '—', '$25.000'],
          ['Subtotal', '', '', '', '$2.500.000'],
          ['IVA 19 %', '', '', '', '$475.000'],
          ['Total', '', '', '', '$2.975.000'],
        ],
        nota: 'Cifras inventadas de una empresa de dotación. El valor de la oportunidad queda en $2.500.000: la suma de los productos con sus descuentos y sin IVA. La propuesta muestra aparte el IVA y el total.' },
      { tipo: 'texto', label: 'Valor del negocio', h2: '¿Cómo se calcula el valor de una oportunidad?',
        parrafos: [
          'El valor de una oportunidad con productos es precio por cantidad, menos el descuento de cada línea, sin IVA. Se recalcula cada vez que agregas, cambias o quitas un producto en la caja <b>Productos</b> de la ficha, y se ve en el tablero y en los informes.',
          'Si el cliente pide algo que no está en el catálogo, usa «Algo que no está en el catálogo» en el mismo selector: escribes nombre y precio y cuenta igual. Si quitas todos los productos, el valor queda como estaba y lo puedes escribir a mano.',
          'Al agregar un producto, su nombre y su precio se copian a la oportunidad. Si mañana subes el precio en el catálogo, lo que ya cotizaste conserva el de ese momento. El detalle de cómo se arma el catálogo está en <a href="/novedades/productos-en-el-crm/">productos en el CRM, paso a paso</a>.',
        ] },
      { tipo: 'texto', label: 'Seguimiento', h2: '¿Cómo sabes si tu cliente abrió, firmó o pagó?',
        parrafos: [
          'Cada propuesta pasa por cuatro estados que ves sin preguntarle a nadie: <b>Enviada</b>, <b>Vista</b> (cuando tu cliente la abre por primera vez), <b>Aceptada</b> (cuando firma) y <b>Pagada</b>. Los ves en la caja «Propuestas» de la ficha del lead y, todas juntas, en <b>Marketing → Propuestas</b>.',
          'La firma guarda el nombre, el correo, el documento si lo escribe, la fecha, la dirección IP y una huella del contenido exacto que aceptó. Si la propuesta se edita después, se nota.',
          'Cuando te pagan, pulsa el botón de pagada en la propuesta. El lead pasa a Ganado y, si la propuesta tiene productos, el valor de la oportunidad sale de ellos. Desde ese momento la venta cuenta en «Ventas por producto», en <b>Análisis → Ventas</b>.',
        ] },
      { tipo: 'tarjetas', label: 'Tu catálogo en todo el CRM', h2: 'Los mismos productos, en cada canal de venta',
        items: [
          { t: 'Inbox', d: 'El botón de producto llena la caja de respuesta con nombre, precio y el enlace «Cómpralo aquí», y adjunta la foto. Revisas y pulsas Enviar.' },
          { t: 'Agente de IA', d: 'Tu <a href="/agente-ia/">agente de IA</a> consulta el catálogo al responder, no ofrece lo archivado ni lo agotado y comparte el enlace de pago cuando alguien quiere comprar.' },
          { t: 'Campañas', d: 'En una <a href="/campanas/">campaña de WhatsApp</a> eliges un producto y su nombre, precio y enlace llenan tu plantilla. El segmento puede ser «Lo compró» o «Se interesó».' },
          { t: 'Automatizaciones', d: 'El disparador «Cuando se agrega un producto a su oportunidad» corre una vez por lead. Más en <a href="/automatizaciones/">automatizaciones</a>.' },
          { t: 'Formularios y correos', d: 'El campo «Producto de interés» mete lo elegido en la oportunidad con su precio. El editor de correos tiene un bloque «Producto».' },
          { t: 'Tienda en línea', d: 'Con Shopify, WooCommerce o VTEX conectado, cada pedido pagado deja sus productos en la oportunidad. Lo explicamos en <a href="/crm/tiendas-en-linea/">CRM para tiendas en línea</a>.' },
        ] },
      { tipo: 'tabla', label: 'Por tipo de negocio', h2: 'Cómo cotiza cada tipo de negocio con Acuarius',
        cab: ['Negocio', 'Qué cotiza', 'Cómo lo usa'],
        filas: [
          ['Inmobiliaria', 'Avalúo y administración de arriendo', 'Servicios en el catálogo, para que todo el equipo cotice los mismos honorarios. Propuesta Ejecutiva para el propietario que ya decidió.'],
          ['Clínica', 'Paquete de sesiones', 'Paquete de 6 sesiones con su IVA y un descuento por pago anticipado. El paciente firma desde el celular.'],
          ['Tienda', 'Pedido al por mayor', '40 unidades con 15 % de descuento. Si la tienda está conectada, los productos y sus fotos ya están en el catálogo.'],
          ['Restaurante', 'Evento corporativo', '40 almuerzos de $28.000 con 10 % de descuento dan $1.008.000 en la oportunidad. Estilo Paquetes para ofrecer tres menús.'],
          ['Servicios', 'Plan mensual', 'Estilo Consultiva con diagnóstico y plan de trabajo. El enlace de tu pasarela va en el botón «Aceptar y pagar».'],
          ['Educación', 'Curso para empresas', '25 cupos de $380.000 con 10 % de descuento: $8.550.000. La empresa descarga el PDF para su área de compras.'],
        ],
        nota: 'Ejemplos y cifras inventados.' },
      { tipo: 'pasos', label: 'Cómo empezar', h2: 'Tu primera cotización en cuatro pasos',
        items: [
          { t: 'Sube tu catálogo', d: 'En CRM → Productos pulsa «Nuevo producto», o «Importar archivo» para subir tu lista en CSV. Un .xlsx no se acepta: guárdalo antes como CSV.' },
          { t: 'Agrega productos', d: 'Abre la ficha del lead y, en la caja «Productos», pulsa «+ Agregar». Toca la línea para cambiar cantidad, precio o descuento.' },
          { t: 'Crea la propuesta', d: 'En la caja «Propuestas» pulsa «+ Nueva». Elige el estilo, pega tu enlace de pago si tienes y pulsa «Generar con IA».' },
          { t: 'Envíala', d: 'Revisa el texto y pulsa «Crear y copiar link». Pégalo en el chat o en un correo y sigue el estado desde la ficha.' },
        ] },
      { tipo: 'texto', label: 'Errores comunes', h2: 'Errores que conviene evitar al cotizar',
        parrafos: [
          '<b>Dejar vacío el perfil del negocio.</b> La IA redacta con lo que sabe de ti. Sin perfil, la propuesta sale genérica.',
          '<b>Esperar que el pago se marque solo.</b> El enlace de pago es de tu pasarela, no de Acuarius. Cuando el dinero llegue, márcala como pagada para que el lead pase a Ganado.',
          '<b>Cambiar el precio en la propuesta y creer que cambió el catálogo.</b> Ese cambio solo vale para esa propuesta. El precio de lista se cambia en CRM → Productos.',
          '<b>Borrar una propuesta ya enviada.</b> Al eliminarla, el enlace deja de funcionar para tu cliente. Si cambió algo, crea una nueva.',
        ] },
    ],
    faq: [
      { q: '¿Qué es un software de cotizaciones?', a: 'Es una herramienta para armar, enviar y seguir las cotizaciones de tu negocio sin rehacer un documento cada vez. En Acuarius la cotización sale de tu catálogo y de la oportunidad del cliente, con el total calculado, y se envía como un enlace que tu cliente puede firmar.' },
      { q: '¿Mi cliente puede descargar la propuesta en PDF?', a: 'Sí. En la página de la propuesta hay un botón «Descargar en PDF». El PDF sale sin los botones de aceptar y pagar.' },
      { q: '¿La firma de la propuesta tiene validez?', a: 'Es una firma electrónica: guarda nombre, correo, documento opcional, fecha, dirección IP y una huella del contenido aceptado. Si tu negocio necesita requisitos legales específicos, consúltalo con tu asesor legal.' },
      { q: '¿Puedo cobrar la propuesta en línea?', a: 'Sí, con el enlace de pago de tu pasarela, como Wompi o Stripe. Lo pegas al crear la propuesta y tu cliente ve «Aceptar y pagar»: primero firma y luego pasa al pago. Acuarius no toca el dinero.' },
      { q: '¿El valor de la oportunidad incluye el IVA?', a: 'No. El valor es la suma de los productos con sus descuentos y sin IVA. La propuesta muestra aparte el subtotal, el IVA y el total.' },
      { q: '¿Puedo cotizar sin tener catálogo?', a: 'Sí. Sin productos, escribes el monto de la propuesta a mano. También puedes agregar líneas sueltas con «Algo que no está en el catálogo».' },
      { q: '¿Dónde veo todas mis propuestas?', a: 'En Marketing → Propuestas, con su estado y el botón «Copiar link». Las de cada cliente también están en la caja «Propuestas» de su ficha.' },
    ],
    cta: { h2: 'Cotiza en minutos, con el precio correcto', sub: 'Sube tu catálogo, arma tu primera propuesta con IA y envíala hoy. Si conectas tu tienda, tus productos llegan solos.' },
  },

  '/crm/tiendas-en-linea/': {
    badge: 'CRM para tiendas en línea',
    sub: 'Conecta tu tienda de Shopify, WooCommerce o VTEX y cada pedido pagado entra con su cliente, sus productos y su valor. Recuperas carritos, traes de vuelta a quien dejó de comprar y tu agente de IA vende por WhatsApp con tu catálogo.',
    secciones: [
      { tipo: 'texto', label: 'El problema', h2: '¿Por qué una tienda en línea necesita un CRM?',
        parrafos: [
          'Tu tienda sabe qué se vendió, pero no conversa con tus clientes. Las preguntas llegan por WhatsApp e Instagram, los carritos a medias se pierden y nadie le escribe a quien compró hace tres meses y no volvió.',
          'Un <b>CRM para ecommerce</b> junta las dos mitades: los pedidos de la tienda y las conversaciones con cada persona. En Acuarius, cada pedido pagado deja al cliente como venta ganada, con lo que compró, y desde ahí lo atiendes, le escribes y lo mides.',
          'No reemplaza tu tienda. Shopify, WooCommerce o VTEX siguen cobrando, despachando y llevando el inventario. Acuarius lee lo que pasa allá y lo convierte en ventas de vuelta. Es el mismo <a href="/crm/">CRM para pymes</a>, con lo que la venta en línea necesita.',
        ] },
      { tipo: 'tarjetas', label: 'Qué trae la conexión', h2: 'Lo que entra a Acuarius desde tu tienda',
        items: [
          { t: 'Pedidos pagados', d: 'Cada pedido pagado entra solo, con su cliente, como venta ganada y con su valor. Sus productos quedan en la oportunidad, así que cuentan en «Ventas por producto».' },
          { t: 'Clientes', d: 'Quien compra queda como contacto con su nombre, correo y teléfono. Si ya estaba en tu CRM, por ejemplo porque te escribió por WhatsApp, el pedido se suma a esa misma persona.' },
          { t: 'Catálogo con stock', d: 'Tus productos llegan a CRM → Productos con su precio y sus unidades. Se editan en la tienda: la siguiente sincronización desharía lo que cambies aquí.' },
          { t: 'Enlace directo al pago', d: 'Los productos de una sola variante traen un enlace que abre el pago con el producto ya en el carrito. Si les pones tu propio enlace de pago, ese manda.' },
          { t: 'Carritos abandonados', d: 'En Shopify y WooCommerce, quien deja un carrito sin pagar puede recibir un recordatorio con el enlace para terminar la compra.' },
          { t: 'Pedidos anteriores', d: 'Con «Traer pedidos anteriores» importas los últimos 90 días, el último año o todo el historial. A esos clientes no se les envía nada.' },
        ] },
      { tipo: 'texto', label: 'Recompra', h2: '¿Cómo recuperar carritos y traer de vuelta a quien compró?',
        parrafos: [
          'Las <a href="/automatizaciones/">automatizaciones</a> de Acuarius tienen un grupo de disparadores «Tienda en línea» para cada momento de la compra. Cada uno corre una sola vez por pedido o por cliente, aunque tu tienda avise varias veces del mismo pedido.',
          'El recordatorio de carrito arranca cuando pasa una hora sin que la persona termine de pagar. Si compra mientras el flujo espera, el resto se cancela solo: nadie recibe «se te olvidó algo» después de pagar. Desde la caja de tu tienda en Fuentes, el botón «Activar recuperación de carritos» lo deja armado.',
          'Para la recompra, el disparador «Cuando lleva días sin comprar» le escribe a cada cliente a los 15, 30, 45, 60 o 90 días de su última compra, si no ha vuelto. Y en <a href="/campanas/">campañas</a> puedes escribirle a todos los que compraron un producto, o a los que se interesaron en él, con el segmento «Lo compró» o «Se interesó».',
        ] },
      { tipo: 'tabla', label: 'Disparadores', h2: 'Los cinco momentos de tu tienda que pueden disparar un mensaje',
        cab: ['Disparador', 'Cuándo corre', 'Ejemplo de uso'],
        filas: [
          ['Cuando paga un pedido', 'Una vez por pedido pagado', 'Gracias por tu compra, con el número de pedido y lo que llevó.'],
          ['Cuando compra por primera vez', 'Solo la primera vez que esa persona paga', 'Bienvenida al cliente nuevo y cómo cuidar su producto.'],
          ['Cuando se envía su pedido', 'Al marcarse enviado (Shopify) o completado (WooCommerce)', 'Aviso de que el pedido va en camino.'],
          ['Cuando deja un carrito sin pagar', 'Una hora sin terminar la compra', 'Recordatorio con el enlace para terminar de pagar.'],
          ['Cuando lleva días sin comprar', 'Una vez por cliente, a los días que elijas', 'Una sugerencia de recompra a los 45 días.'],
        ],
        nota: 'En el mensaje puedes usar {{tienda}}, {{pedido}}, {{total}} y {{productos}}, más {{enlace_carrito}} o {{enlace_pedido}} según el disparador. VTEX no entrega los carritos abandonados, así que con VTEX ese recordatorio no aplica.' },
      { tipo: 'texto', label: 'Ventas por chat', h2: '¿Cómo vende tu agente de IA por WhatsApp con tu catálogo?',
        parrafos: [
          'Con la tienda conectada, tu <a href="/agente-ia/">agente de IA</a> responde con tus productos reales: su precio y su stock al día. No ofrece lo agotado y, cuando alguien quiere comprar, comparte el enlace para pagar.',
          'También reconoce a quien ya te compró. Sabe qué se llevó y en qué va cada pedido: pagado y en preparación, o enviado con su enlace de seguimiento si lo hay. Si la persona pregunta por la guía, la fecha de entrega o quiere cambiar algo, no se lo inventa: le pasa la conversación a tu equipo.',
          'Si esa persona dejó un carrito sin terminar, el agente puede ofrecerle el enlace para completar la compra cuando venga al caso. Y tu equipo, desde el inbox, envía cualquier producto con foto, precio y enlace: el botón llena la caja de respuesta y el asesor pulsa Enviar.',
        ] },
      { tipo: 'texto', label: 'Medición', h2: 'Lo que vende tu tienda, en Análisis → Tienda',
        parrafos: [
          'El informe <b>Análisis → Tienda</b> muestra lo que vendes comparado con el periodo anterior: pedidos, ventas, ticket promedio, clientes nuevos y los que repiten, y carritos recuperados con cuánto valían.',
          'También ves tus productos más vendidos, la gráfica de ventas por día o por semana y cuánto le vendiste a quien antes te escribió por WhatsApp o Instagram, por canal. Es la respuesta a «¿el chat vende o solo pregunta?».',
          'Como los demás <a href="/reportes/">reportes</a>, se descarga en PDF y se comparte con un enlace vivo, sin datos personales de tus clientes. En Análisis → Ventas, «Ventas por producto» suma lo de la tienda con lo que vende tu equipo por chat o con propuestas.',
        ] },
      { tipo: 'tabla', label: 'Por tipo de tienda', h2: 'Cómo lo usa cada tipo de tienda en línea',
        cab: ['Tienda', 'Lo que conecta', 'Lo que hace con Acuarius'],
        filas: [
          ['Moda', 'Shopify', 'Recordatorio de carrito a la hora con {{enlace_carrito}}. El agente responde «¿la tienen en talla M?» con el stock real.'],
          ['Cosmética', 'WooCommerce', 'Recompra a los 45 días para productos que se acaban, con la campaña a «Lo compró».'],
          ['Repuestos', 'VTEX', 'Pedidos y clientes en el CRM; el asesor arma la cotización de un taller con los productos del catálogo. Ver <a href="/productos/">cotizaciones y propuestas</a>.'],
          ['Pastelería', 'WooCommerce', 'Pedidos de la web junto a los que llegan por WhatsApp. Gracias por la primera compra con un mensaje de bienvenida.'],
          ['Cursos en línea', 'WooCommerce', 'Quien compra un curso queda como venta ganada; a los 30 días sin comprar le llega el siguiente nivel.'],
        ],
        nota: 'Ejemplos inventados.' },
      { tipo: 'pasos', label: 'Cómo empezar', h2: 'Conecta tu tienda en cuatro pasos',
        items: [
          { t: 'Abre Fuentes', d: 'Ve a Marketing → Fuentes y, en «Ventas e integraciones», pulsa «Tienda en línea». Elige Shopify, WooCommerce o VTEX.' },
          { t: 'Pega tus llaves', d: 'Shopify: Client ID y secreto de una app creada en tu tienda. WooCommerce: clave y secreto de la API REST. VTEX: App Key y App Token. Pulsa «Conectar».' },
          { t: 'Trae tu historial', d: 'Pulsa «Traer pedidos anteriores» y elige 90 días, un año o todo. Cada cliente entra una vez, sin mensajes ni reparto a tu equipo.' },
          { t: 'Activa la recompra', d: 'Pulsa «Activar recuperación de carritos» o crea en Automatizaciones un flujo con un disparador del grupo «Tienda en línea».' },
        ] },
      { tipo: 'texto', label: 'Errores comunes', h2: 'Errores comunes al conectar tu tienda',
        parrafos: [
          '<b>Usar el dominio propio en Shopify.</b> La API de Shopify solo responde en la dirección que termina en .myshopify.com. Tu dominio de marca no sirve para conectar.',
          '<b>Olvidar el acceso a datos de clientes en Shopify.</b> Sin marcar nombre, correo, teléfono y dirección en «Acceso a datos protegidos de clientes», Shopify no manda los pedidos. Y para traer más de 60 días de historial, la app necesita también el permiso read_all_orders.',
          '<b>Compartir la llave de VTEX con otra herramienta.</b> VTEX admite un solo aviso de pedidos por llave. Crea una llave solo para Acuarius.',
          '<b>Editar en Acuarius los productos de la tienda.</b> Cámbialos en tu tienda. Lo único que les pones desde Acuarius es su enlace de pago.',
          '<b>Esperar que todo sea instantáneo.</b> Los avisos de la tienda se procesan cada pocos minutos. Un pedido recién pagado tarda un momento en aparecer.',
        ] },
    ],
    faq: [
      { q: '¿Qué es un CRM para ecommerce?', a: 'Es un CRM conectado a tu tienda en línea: guarda a cada cliente con lo que compró y te deja escribirle, recuperarlo y medir lo que vende cada canal. En Acuarius, los pedidos de Shopify, WooCommerce o VTEX entran solos como ventas ganadas.' },
      { q: '¿Con qué plataformas se conecta?', a: 'Con Shopify, WooCommerce y VTEX. Se conectan desde Marketing → Fuentes → «Tienda en línea», pegando las llaves que generas en tu tienda. Se guardan cifradas.' },
      { q: '¿Necesito instalar una app en mi tienda?', a: 'En Shopify creas una app propia en tu tienda e instalas esa, siguiendo los pasos que te mostramos. En WooCommerce generas una clave de la API REST y en VTEX una llave de aplicación. No hay que instalar nada de terceros.' },
      { q: '¿Funciona la recuperación de carritos con VTEX?', a: 'No. VTEX no entrega los carritos abandonados por API, así que con VTEX el recordatorio de carrito no aplica. Pedidos, clientes, catálogo e historial sí funcionan.' },
      { q: '¿Si importo mis pedidos anteriores, les llega un mensaje a mis clientes?', a: 'No. Cada cliente entra una sola vez como venta ganada, con lo que lleva gastado y la fecha de su primera compra. No se les envía nada, no se reparten a tu equipo y no cuentan como leads nuevos de hoy.' },
      { q: '¿Mi agente de IA conoce el estado de los pedidos?', a: 'Sí, el de la persona con la que conversa: qué compró y si su pedido está pagado o enviado, con el enlace de seguimiento si lo hay. Lo que no sabe, como una fecha de entrega, se lo pasa a tu equipo.' },
      { q: '¿Puedo ver cuánto vende el chat?', a: 'Sí. En Análisis → Tienda ves cuánto le vendiste a quien antes te escribió por WhatsApp o Instagram, por canal, junto a pedidos, ticket promedio y carritos recuperados.' },
      { q: '¿Qué pasa si desconecto la tienda?', a: 'Acuarius quita los avisos que creó en tu tienda, los productos sincronizados y las credenciales. Los clientes y oportunidades que ya entraron siguen en tu CRM.' },
    ],
    cta: { h2: 'Que cada pedido traiga el siguiente', sub: 'Conecta tu tienda, trae tus pedidos anteriores y deja armada la recuperación de carritos en una tarde.' },
  },
};
