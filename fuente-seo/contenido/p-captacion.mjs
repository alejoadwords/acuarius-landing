// Páginas de producto de la fase 2: /formularios/ e /integraciones/.
//
// Cada afirmación sale del código de Acuarius a 02-11-2026:
// - Formularios: public/app.js (frmOpen, frmDestinos, frmRenderPolitica,
//   frmDuplicar, frmSnippets, conAbrir, conSnippet, srcArmarFilas,
//   srcAgregarHtml, srcAbrirWebhook), api/forms.js, api/form-public.js,
//   api/_lead-intake.js, api/_origen.js, public/f.js y public/origen.js.
// - Páginas de aterrizaje: public/landings-base.js (tres diseños y bloques),
//   api/landings.js y public/novedades.json (31-08 y 01-09-2026).
// - Integraciones: index.html (Configuración → Integraciones), app.js
//   (CANALES_CATALOGO, tiendas, Conectar catálogo, API y agentes),
//   api/_api-llaves.js (EVENTOS), api/v1.js, api/mcp.js y novedades.json.
//
// Fuera a propósito: Lead Ads de Meta («Pronto» en Fuentes), Messenger,
// TikTok (canal y Ads), LinkedIn Ads, Tiendanube (oculta), el chat web, los
// precios y cualquier tope por plan. Los ejemplos por negocio son inventados.

export const FILAS = [
  { url: '/formularios/', cluster: 8, nivel: 'Producto', intencion: 'Comercial', estado: 'publicada',
    kw: 'formularios de captación de leads',
    title: 'Formularios de captación de leads para tu CRM | Acuarius',
    description: 'Formularios de captación de leads que llenan tu CRM solos: crea el tuyo, conecta el de tu web o arma una página de aterrizaje. Con origen y campaña.',
    h1: 'Formularios de captación de leads que entran solos a tu CRM',
    miga: 'Formularios y páginas' },
  { url: '/integraciones/', cluster: 8, nivel: 'Producto', intencion: 'Comercial', estado: 'publicada',
    kw: 'integraciones de CRM',
    title: 'Integraciones de CRM: Shopify, Google Ads y más | Acuarius',
    description: 'Integraciones de CRM que conectas tú mismo: Google Ads, Meta Ads, WhatsApp, Instagram, Google Calendar, Shopify, WooCommerce, VTEX, webhooks y API.',
    h1: 'Integraciones de CRM: conecta tus anuncios, tu tienda y tus canales',
    miga: 'Integraciones' },
];

export const CONTENIDO = {
  '/formularios/': {
    badge: 'Formularios y páginas de aterrizaje',
    sub: 'Crea un formulario con enlace propio, conecta el que ya tienes en tu web o publica una página para tus anuncios. Cada envío entra al CRM con dueño, etiquetas y la campaña que lo trajo.',
    secciones: [
      { tipo: 'texto', label: 'El problema', h2: '¿Por qué se pierden los leads de un formulario web?',
        parrafos: [
          'Los leads de un formulario se pierden porque llegan a un correo que nadie reparte. Alguien llena el formulario de tu web, el aviso cae en una bandeja compartida y, cuando un asesor lo ve, han pasado dos días. Nadie sabe si ya lo llamaron ni de qué anuncio venía.',
          'Unos <b>formularios de captación de leads</b> conectados al <a href="/crm/">CRM</a> cambian el recorrido. El envío crea el contacto en tu pipeline, lo asigna a una persona, le pone etiquetas y anota de dónde vino. En Acuarius todo esto vive en <b>Marketing → Fuentes</b>.',
        ] },
      { tipo: 'tarjetas', label: 'Tres caminos', h2: 'Tres formas de recibir leads desde la web',
        items: [
          { t: 'Crear formulario', d: 'Lo armas en Acuarius y te queda un enlace para tu bio, un anuncio o un QR, y un código para incrustarlo en tu web.' },
          { t: 'Conectar el de tu web', d: 'Si tu web ya tiene formulario, no lo cambias: pegas una línea de código o usas un webhook.' },
          { t: 'Página de aterrizaje', d: 'En <b>Marketing → Páginas</b> armas una página con formulario para tus anuncios, desde tres diseños.' },
        ] },
      { tipo: 'texto', label: 'El editor', h2: '¿Qué puedes pedir en un formulario de Acuarius?',
        parrafos: [
          'Un formulario de Acuarius pide lo que tu equipo necesita para llamar, y cada respuesta cae en su sitio de la ficha. Arranca con Nombre, Email y Teléfono / WhatsApp, y sumas campos con <b>+ Agregar campo</b>.',
          'Cada campo tiene su tipo —texto, email, teléfono, párrafo, lista, fecha o número— y su destino: nombre, email, teléfono, empresa, una nota o uno de tus <a href="/novedades/campos-personalizados-crm/">campos personalizados</a>, que guarda la respuesta lista para filtrar o usar en tus correos. Los campos se ordenan arrastrándolos.',
          'Si tienes catálogo, agrega el campo <b>Producto de interés</b>. Aparece como «¿Qué te interesa?» con los productos que elijas, y lo elegido entra a la oportunidad con su precio. Lo contamos en <a href="/novedades/productos-en-el-crm/">tus productos, en todo el CRM</a>.',
          'También eliges el título, el texto del botón, el color, las etiquetas y quién atiende: una persona fija o el reparto automático. Y con <b>Pedir que acepten la política de tratamiento de datos</b> aparece una casilla obligatoria con el enlace a tu política. En la ficha queda cuándo la aceptó cada contacto.',
        ] },
      { tipo: 'texto', label: 'Tu web', h2: 'Conecta el formulario de tu web sin rehacerlo',
        parrafos: [
          'Si tu web ya tiene formulario, no hace falta reemplazarlo. En <b>Marketing → Fuentes</b> pulsas <b>Conectar el de tu web</b>, eliges etiquetas y quién atiende, y recibes los envíos de dos formas.',
          '<b>Una línea de código</b>, al final de las páginas que tienen el formulario. En WordPress sirve cualquier complemento para insertar código en el pie. Detecta cada envío y manda los datos a Acuarius, y tu formulario sigue funcionando igual.',
          '<b>Un webhook.</b> Elementor, WPForms y casi todos los constructores traen esa acción. Los envíos llegan desde el servidor de tu web: no se pierden y no se cuelan los que tu formulario rechaza por spam. Usa el código o el webhook, no los dos.',
          'Los datos propios de tu web, como el tipo de inmueble, los llevas a tus campos personalizados con <b>Llevar datos de tu web a campos personalizados</b>.',
        ] },
      { tipo: 'texto', label: 'Varios tableros', h2: 'Un solo formulario en tu web, varios tableros en el CRM',
        parrafos: [
          'Si el mismo formulario pregunta qué quiere la persona —comprar o arrendar, una sede u otra—, Acuarius reparte según esa respuesta. Al editar la conexión marcas <b>El mismo formulario alimenta varios tableros</b>, dices qué campo decide y, para cada respuesta, a qué tablero va, quién lo atiende y con qué etiqueta.',
          'Cada rama lleva su propio turno de reparto, y lo que no coincida cae en el tablero por defecto. Para armar esos tableros, mira <a href="/crm/pipeline-de-ventas/">cómo armar tu pipeline de ventas</a>.',
        ] },
      { tipo: 'texto', label: 'Origen', h2: '¿De qué campaña vino cada lead de tu web?',
        parrafos: [
          'Cada lead que llega por el conector de tu web o por una página de aterrizaje guarda su canal de origen y la página por la que entró. El canal puede ser un buscador como Google o Bing, un asistente de IA como ChatGPT o Gemini, Google Ads, Meta Ads, redes sociales, correo, otro sitio o directo.',
          'Si llegó por un anuncio, guarda también la campaña: Acuarius lee las etiquetas UTM y el identificador de clic de Google desde que la persona entra, aunque navegue por varias páginas antes de escribir. Con ese dato, en <a href="/pauta/">Plataformas de pauta</a> ves qué pasó con los leads de cada campaña y el costo real por lead.',
        ] },
      { tipo: 'texto', label: 'Páginas', h2: 'Páginas de aterrizaje para tus anuncios',
        parrafos: [
          'Una página de aterrizaje de Acuarius es una página con formulario cuyos leads entran directo a tu CRM. En <b>Marketing → Páginas</b> pulsas <b>+ Nueva página</b> y eliges uno de tres diseños: <b>Captación con formulario</b>, <b>Agendar una cita</b> o <b>Descarga de guía</b>.',
          'En un constructor visual arrastras secciones ya hechas, como portada, beneficios, formulario, testimonios o botón de WhatsApp, que se adaptan solas al celular. En <b>Ajustes</b> cambias la dirección, la imagen que se ve al compartir por WhatsApp y la página de gracias, y pegas tu píxel de Meta o tu identificador de Google Analytics. En <b>Dónde entran los leads</b> eliges el tablero.',
          'Con <b>Duplicar</b> creas una copia en borrador para probar otro titular. La copia nace con su propio formulario, así ves cuál convierte.',
        ] },
      { tipo: 'tabla', label: 'Ejemplos', h2: 'Cómo lo usa cada tipo de negocio',
        cab: ['Negocio', 'Formulario', 'Qué pasa al llegar el lead'],
        filas: [
          ['Inmobiliaria', 'El de su web, con «¿Busca comprar o arrendar?»', 'Las compras van al tablero de Venta y los arriendos al de Arriendo, cada uno con su turno de asesores. <a href="/crm/inmobiliarias/">CRM inmobiliario</a>.'],
          ['Clínica', 'Página «Agendar una cita» para una campaña de valoración', 'El lead entra con su campaña y la casilla de política de datos aceptada. Recepción lo ve asignado al momento. <a href="/crm/clinicas/">CRM para clínicas</a>.'],
          ['Tienda', 'Formulario propio con «¿Qué te interesa?»', 'El producto elegido queda en la oportunidad con su precio, y una automatización le manda la ficha del producto.'],
          ['Restaurante', 'Enlace del formulario de eventos en la bio y en un QR', 'Pide fecha del evento y número de personas en campos personalizados. El lead llega con la etiqueta «eventos». <a href="/crm/restaurantes/">CRM para restaurantes</a>.'],
          ['Servicios', 'El de su web en WordPress, por webhook', 'Cada solicitud de cotización entra al pipeline con «Servicio de interés» lleno, sin copiar nada del correo.'],
          ['Educación', 'Página «Descarga de guía» con el plan de estudios', 'Quien descarga entra como lead del programa, con etiqueta y asesor, y empieza una secuencia de seguimiento.'],
        ],
        nota: 'Casos y datos de ejemplo.' },
      { tipo: 'texto', label: 'Fuentes', h2: 'Sabes cuánto trae cada fuente y cuál se calló',
        parrafos: [
          '<b>Marketing → Fuentes</b> muestra en una sola lista todo lo que te trae contactos: formularios, conexiones con tu web, páginas, canales de chat, tienda, webhook y API. Cada fila dice cuántos leads trajo en 30 días, cuándo llegó el último y quién atiende.',
          'Si una fuente deja de traer leads más tiempo de lo normal para ella, sube arriba marcada <b>Sin leads</b>, con qué revisar, y te llega un correo. Desde ahí también duplicas un formulario con sus campos, etiquetas y reparto, o lo pausas.',
        ] },
      { tipo: 'pasos', label: 'Cómo empezar', h2: 'Tu primer formulario conectado en cinco minutos',
        items: [
          { t: 'Abre Fuentes', d: 'En <b>Marketing → Fuentes</b>, en «Agregar una fuente», elige <b>Crear formulario</b> o <b>Conectar el de tu web</b>.' },
          { t: 'Define campos y dueño', d: 'Lo que tu equipo necesita saber, a qué campo va cada respuesta y quién atiende estos leads.' },
          { t: 'Instálalo', d: 'Con <b>Instalar</b> copias el enlace o el código para incrustar. En una conexión, <b>Ver código</b> te da la línea o el webhook.' },
          { t: 'Pruébalo', d: 'Envía tu formulario una vez y busca el lead en el CRM. El contador de envíos de la fuente también sube.' },
        ] },
      { tipo: 'texto', label: 'Errores comunes', h2: 'Errores comunes al conectar formularios',
        parrafos: [
          '<b>Instalar el código y el webhook a la vez.</b> Cada envío entra dos veces. Elige uno.',
          '<b>Rehacer la web y olvidar el código.</b> Al cambiar el tema o rehacer la página, el código del pie se pierde. Fuentes te avisa con «Sin leads», pero mejor revisarlo cuando toques la web.',
          '<b>Mandar todo a la nota.</b> Si el dato importa para filtrar o para un correo, créalo como campo personalizado y llévalo ahí.',
        ] },
      { tipo: 'texto', label: 'Y después', h2: 'Qué pasa cuando entra el lead',
        parrafos: [
          'Un lead de formulario se compara con tus contactos para no duplicarlo, se reparte según tus reglas, el responsable recibe su aviso y se disparan tus <a href="/automatizaciones/">automatizaciones</a> de lead creado. Si la persona ya había comprado, se le abre una oportunidad nueva en vez de esconder su mensaje en la venta cerrada.',
          '¿Usas Zapier, Make o Hotmart? Los leads también entran por tu webhook de entrada. Lo explicamos en <a href="/integraciones/">integraciones</a>.',
        ] },
    ],
    faq: [
      { q: '¿Qué es un formulario de captación de leads?', a: 'Es un formulario que pide los datos de alguien interesado en lo que vendes. En Acuarius cada envío crea el lead en el CRM con dueño, etiquetas y origen, en vez de quedarse en un correo.' },
      { q: '¿Tengo que cambiar el formulario de mi web?', a: 'No. Con «Conectar el de tu web» pegas una línea de código o usas un webhook, y tu formulario sigue haciendo lo de siempre.' },
      { q: '¿Funciona con WordPress y Elementor?', a: 'Sí. En WordPress pegas la línea con cualquier complemento para insertar código en el pie, o usas la acción de webhook de Elementor o WPForms. Acuarius entiende el formato en que Elementor manda los campos.' },
      { q: '¿Puedo incrustar el formulario en mi web?', a: 'Sí. Al pulsar «Instalar» te damos un enlace para compartir y un código para incrustarlo en tu web.' },
      { q: '¿Se duplican los contactos si alguien llena el formulario dos veces?', a: 'No. Antes de crear el lead, Acuarius lo compara con tus contactos. Si ya existe, el envío se suma a su ficha. Si su venta anterior se cerró hace más de un día, se le abre una oportunidad nueva enlazada.' },
      { q: '¿Cómo sé de qué anuncio vino un lead?', a: 'Los leads del conector de tu web y de tus páginas de aterrizaje guardan su canal de origen, la página por la que entraron y, si vinieron de un anuncio, la campaña. Lo ves en la ficha y en Plataformas de pauta.' },
      { q: '¿Puedo pedir la aceptación de la política de datos?', a: 'Sí. En el editor activas la casilla, pegas el enlace a tu política y aparece obligatoria antes de enviar. La ficha del contacto guarda cuándo la aceptó.' },
      { q: '¿Sirve para mis anuncios?', a: 'Sí. Lleva tu anuncio a una página de aterrizaje de Acuarius o a tu web con el conector, y el lead entra con su campaña. Así ves en Plataformas de pauta qué anuncio trae ventas.' },
    ],
    cta: { h2: 'Que ningún formulario se quede en un correo', sub: 'Crea tu cuenta, arma tu primer formulario o conecta el de tu web, y mira llegar el primer lead a tu pipeline.' },
  },

  '/integraciones/': {
    badge: 'Integraciones',
    sub: 'Conecta tus cuentas de anuncios, tu WhatsApp, tu Instagram, tu calendario y tu tienda en línea desde la propia app. Lo que no esté en la lista entra por webhook o por la API.',
    secciones: [
      { tipo: 'texto', label: 'Para qué', h2: '¿Para qué sirven las integraciones de un CRM?',
        parrafos: [
          'Las integraciones de un CRM sirven para que los datos lleguen solos y nadie tenga que copiarlos. Un pedido, un chat de WhatsApp o un clic en un anuncio terminan en la misma ficha del cliente.',
          'Las <b>integraciones de CRM</b> de Acuarius se conectan desde la app, sin consultor. Cada una deja algo concreto en el <a href="/crm/">CRM</a>: leads, ventas, conversaciones, citas o productos.',
        ] },
      { tipo: 'tabla', label: 'La lista', h2: 'Lo que puedes conectar hoy',
        cab: ['Integración', 'Qué trae o qué hace', 'Dónde se conecta'],
        filas: [
          ['Google Ads', 'Inversión y clics de cada campaña al lado de sus leads y ventas en el CRM, y las ventas de vuelta a Google.', 'Marketing → Plataformas de pauta → Conectar Google Ads'],
          ['Meta Ads', 'Tus campañas de Facebook e Instagram con sus leads, sus chats de WhatsApp y sus ventas.', 'Marketing → Plataformas de pauta → Conectar Meta Ads'],
          ['WhatsApp Business', 'Los mensajes de tu número en el inbox del equipo, atendidos por personas o por tu agente de IA.', 'Conversaciones → Canales → WhatsApp, con la app de Meta de tu negocio'],
          ['Instagram', 'Los mensajes directos de tu cuenta de Instagram Business en la misma bandeja.', 'Conversaciones → Canales → Instagram'],
          ['Google Calendar', 'Tus citas en tu calendario y tus eventos de Google en la Agenda.', 'Agenda → Conectar Google Calendar'],
          ['Shopify, WooCommerce y VTEX', 'Cada pedido pagado entra como venta ganada con su cliente. Tu agente conoce tus productos con precio y stock.', 'Marketing → Fuentes → Tienda en línea'],
          ['Hoja de Google', 'Tu inventario en una hoja, para que el agente ofrezca solo lo que existe.', 'Conversaciones → Agentes IA → Hoja de productos'],
          ['Domus', 'El inventario de tu inmobiliaria, para tu agente.', 'Conversaciones → Agentes IA → Conectar catálogo → Desde Domus'],
          ['Webhook de entrada', 'Leads desde Zapier, Make, Hotmart, portales o tu propio sistema.', 'Marketing → Fuentes → Zapier, Make, Hotmart'],
          ['API y webhooks de salida', 'Tu sistema o tu agente de IA operan el CRM con una llave, y Acuarius le avisa cuando pasa algo.', 'Configuración → API y agentes'],
        ],
        nota: 'Meta Ads, WhatsApp y el Google Calendar de la Agenda los conecta el dueño o un administrador de la cuenta.' },
      { tipo: 'texto', label: 'Pauta', h2: 'Google Ads y Meta Ads: del clic a la venta',
        parrafos: [
          'Al conectar Google Ads o Meta Ads, Acuarius pone lo que dice la red al lado de lo que dice tu CRM: inversión y clics frente a cuántos leads entraron de verdad, cuántos se ganaron y el costo real por lead. Al abrir una campaña ves sus leads uno por uno.',
          '<b>Diagnóstico</b> te dice qué falla, como anuncios rechazados o campañas que gastan sin traer un lead al CRM, y puedes pausarlas desde ahí. En <b>Ventas a la pauta</b> eliges qué etapas y qué ventas se le reportan a Meta y a Google, para que aprendan quién compra. Si anuncias con clic a WhatsApp, cada chat queda con su campaña: lo contamos en <a href="/novedades/anuncios-clic-a-whatsapp-meta-ads/">anuncios de clic a WhatsApp</a>. Todo vive en <a href="/pauta/">Plataformas de pauta</a>.',
        ] },
      { tipo: 'texto', label: 'Canales', h2: 'WhatsApp e Instagram en una misma bandeja',
        parrafos: [
          'Tu número de WhatsApp Business se conecta con la app de Meta de tu propio negocio. En <b>Conversaciones → Canales → WhatsApp</b> eliges «Conectar con tu propia app de Meta», sigues los pasos y copias cinco datos. Acuarius configura el resto.',
          'Los mensajes llegan al inbox al instante, como explicamos en <a href="/novedades/whatsapp-en-tiempo-real/">WhatsApp en tiempo real</a>, y los atiende una persona o tu <a href="/agente-ia/">agente de IA</a>. Más en <a href="/crm/whatsapp/">CRM con WhatsApp</a>.',
          'Instagram se conecta en <b>Conversaciones → Canales → Instagram</b>, eligiendo la cuenta de una lista. Acuarius comprueba que sus mensajes directos se pueden leer y, si falta un permiso, te dice cómo arreglarlo.',
        ] },
      { tipo: 'texto', label: 'Calendario', h2: 'Google Calendar en tu agenda y en tus reservas',
        parrafos: [
          'Con Google Calendar conectado, las reuniones que agendas en Acuarius quedan en tu calendario y lo que ya tenías en Google se ve en la Agenda. Se conecta desde <b>Conectar Google Calendar</b>, en la Agenda.',
          'En Reservas, cada persona conecta su Google desde <b>Quién atiende → Calendario</b>, y lo que tenga ocupado deja de ofrecerse. Con tus <a href="/novedades/enlace-para-agendar-reuniones/">enlaces para agendar reuniones</a>, la cita se crea en tu Google con su enlace de Google Meet. Todo esto está en <a href="/agenda/">Agenda</a>.',
        ] },
      { tipo: 'texto', label: 'Tienda', h2: 'Shopify, WooCommerce y VTEX: tus ventas en el CRM',
        parrafos: [
          'Al conectar tu tienda en línea, cada pedido pagado entra solo como venta ganada, con su cliente, su valor y sus productos. En <b>Marketing → Fuentes</b> pulsas <b>Tienda en línea</b> y eliges Shopify, WooCommerce o VTEX. Con VTEX se conecta con una llave de aplicación.',
          'Puedes traer tus pedidos anteriores sin enviarle nada a nadie. Tu agente de IA conoce tus productos con precio y stock, y sabe qué compró quien le escribe. Las automatizaciones ganan cinco disparadores: pedido pagado, primera compra, pedido enviado, carrito abandonado y días sin comprar. El recordatorio de carrito funciona con Shopify y WooCommerce; VTEX no entrega los carritos abandonados. Más en <a href="/crm/tiendas-en-linea/">CRM para tiendas en línea</a> y <a href="/productos/">Productos</a>.',
        ] },
      { tipo: 'texto', label: 'Catálogo', h2: 'Tu catálogo para el agente: hoja de Google o Domus',
        parrafos: [
          'Si tu inventario no está en una tienda en línea, igual se lo puedes dar a tu agente. Con una hoja de Google en <b>Hoja de productos</b>, el agente ofrece solo lo que está en la hoja, con su precio, y no ofrece lo agotado. La hoja se relee cada media hora.',
          'Si tu inmobiliaria usa Domus, lo conectas en <b>Conectar catálogo → Desde Domus</b>: el agente ve los inmuebles con precios, fotos y metros cuadrados.',
        ] },
      { tipo: 'texto', label: 'Webhook', h2: 'Zapier, Make, Hotmart y cualquier sistema que envíe datos',
        parrafos: [
          'Tu webhook de entrada es una dirección que crea leads cuando cualquier plataforma le envía datos. La encuentras en <b>Marketing → Fuentes → Zapier, Make, Hotmart</b>. Ahí también ves a qué tablero llegan sus leads, y te avisamos si están cayendo en uno vacío.',
          'Acepta nombre, correo, teléfono, empresa, valor, nota y etiquetas, y reconoce solo el formato de Hotmart: una compra aprobada entra como ganada. Los leads se reparten con tus reglas y disparan tus <a href="/automatizaciones/">automatizaciones</a>. Para los formularios de tu web hay un camino propio: lo contamos en <a href="/formularios/">formularios y páginas</a>.',
        ] },
      { tipo: 'texto', label: 'API', h2: 'API pública, conexión por MCP y webhooks de salida',
        parrafos: [
          'Con la API de Acuarius, tu app, tu ERP o el agente de IA de tu empresa operan el CRM como una persona del equipo. Leen prospectos, los mueven de etapa, los asignan, dejan notas y agendan citas, con las mismas reglas que tu equipo. Todo queda firmado en el historial con el nombre de la llave.',
          'Las llaves se crean en <b>Configuración → API y agentes → Crear llave</b>, cada una con solo los permisos que marques. Para crearla te mandamos un código a tu correo, y el dueño recibe un aviso de cada llave nueva. Si tu agente de IA habla MCP, se conecta con esa llave sin programarle nada.',
          'Con <b>Añadir webhook</b>, Acuarius le avisa a una dirección tuya en menos de un minuto cuando entra un prospecto, cambia de etapa o de responsable, o llega un mensaje. Cada aviso va firmado y, si tu servidor no responde, se reintenta durante un día.',
        ] },
      { tipo: 'tabla', label: 'Ejemplos', h2: 'Qué conectar según tu negocio',
        cab: ['Negocio', 'Integraciones', 'Lo que gana'],
        filas: [
          ['Inmobiliaria', 'Domus, WhatsApp, Meta Ads', 'El agente ofrece inmuebles reales con fotos, y cada chat de un anuncio llega con su campaña. <a href="/crm/inmobiliarias/">CRM inmobiliario</a>.'],
          ['Clínica', 'Google Calendar, WhatsApp, Google Ads', 'Las citas no chocan con lo que ya hay en Google, y ves qué campaña trae pacientes que agendan. <a href="/crm/clinicas/">CRM para clínicas</a>.'],
          ['Tienda', 'Shopify o WooCommerce, WhatsApp, Instagram', 'Cada pedido es una venta en el CRM y el carrito abandonado tiene su recordatorio.'],
          ['Restaurante', 'WhatsApp, Instagram, Google Calendar', 'Los mensajes de las dos redes en una bandeja y las reservas en el calendario del equipo. <a href="/crm/restaurantes/">CRM para restaurantes</a>.'],
          ['Servicios', 'Webhook con Zapier, API', 'Los leads de un portal o del sistema propio entran solos, y el ERP se entera cuando un lead se gana.'],
          ['Educación', 'Hotmart por webhook, Meta Ads', 'Cada compra aprobada entra como ganada con el curso como etiqueta, y Meta aprende de quién se matricula.'],
        ],
        nota: 'Combinaciones de ejemplo.' },
      { tipo: 'pasos', label: 'Cómo empezar', h2: 'Conecta tu primera integración',
        items: [
          { t: 'Empieza por donde te escriben', d: 'Si vendes por chat, conecta WhatsApp e Instagram en <b>Conversaciones → Canales</b>.' },
          { t: 'Suma tus anuncios', d: 'En <b>Marketing → Plataformas de pauta</b> conecta Google Ads o Meta Ads para ver qué campaña trae ventas.' },
          { t: 'Conecta lo que vendes', d: 'Tu tienda en <b>Marketing → Fuentes → Tienda en línea</b>, o tu hoja de productos para el agente.' },
          { t: 'Cierra el círculo', d: 'Conecta Google Calendar en la Agenda y, si tienes otros sistemas, crea una llave en <b>Configuración → API y agentes</b>.' },
        ] },
      { tipo: 'texto', label: 'Errores comunes', h2: 'Errores comunes al conectar integraciones',
        parrafos: [
          '<b>Conectar con una cuenta sin permisos.</b> Meta Ads, WhatsApp y el calendario de la Agenda los conecta el dueño o un administrador. Si conectas un Google donde no está la cuenta de anuncios que buscas, Acuarius te lo dice con esas palabras.',
          '<b>Dejar al agente sin catálogo.</b> Sin tienda ni hoja de productos, el agente no conoce tu surtido: responde que te lo confirma tu equipo y pregunta qué buscan. Conecta tu catálogo antes de encenderlo.',
          '<b>Una sola llave para todo.</b> Crea una llave por sistema, con solo los permisos que necesita. Si una se filtra, la revocas sin tumbar las demás.',
        ] },
    ],
    faq: [
      { q: '¿Qué integraciones tiene Acuarius?', a: 'Google Ads, Meta Ads, WhatsApp Business, Instagram, Google Calendar, Shopify, WooCommerce, VTEX, una hoja de Google o Domus como catálogo, un webhook de entrada y la API con webhooks de salida.' },
      { q: '¿Necesito un programador para conectarlas?', a: 'No para la mayoría: anuncios, canales, calendario y tienda se conectan desde la app. La API sí es para tu equipo técnico.' },
      { q: '¿Cómo conecto mi WhatsApp?', a: 'Con la app de Meta de tu negocio. En Conversaciones → Canales → WhatsApp eliges «Conectar con tu propia app de Meta», sigues los pasos y copias cinco datos. Acuarius configura el resto.' },
      { q: '¿Acuarius cambia mis campañas de Google o Meta?', a: 'Solo pausa una campaña cuando tú lo confirmas. Para activarla de nuevo o cambiar el presupuesto, usas el administrador de anuncios de cada red. El resto es lectura y reporte de ventas.' },
      { q: '¿Funciona con Zapier o Make?', a: 'Sí. Tu webhook de entrada recibe datos de Zapier, Make o cualquier sistema y crea el lead con tus reglas. Los webhooks de salida avisan a tu sistema cuando pasa algo en el CRM.' },
      { q: '¿Qué tiendas en línea puedo conectar?', a: 'Shopify, WooCommerce y VTEX. Cada pedido pagado entra como venta ganada con su cliente, y tu agente conoce tus productos con precio y stock.' },
      { q: '¿Mis datos están seguros al conectar una integración?', a: 'Los permisos de Google Ads y Meta Ads se guardan en nuestros servidores, no en tu navegador. Y cada llave de la API tiene solo los permisos que marques y se revoca al instante.' },
    ],
    cta: { h2: 'Conecta lo que ya usas y deja de copiar datos', sub: 'Crea tu cuenta y conecta tu WhatsApp, tus anuncios o tu tienda.' },
  },
};
