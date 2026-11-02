// Fase 2 del menú: /whatsapp/plantillas-y-difusion/ y /agencias/.
//
// Cada afirmación sale del código de Acuarius a 02-11-2026:
//   Plantillas: api/whatsapp-templates.js (listar, crear, borrar rechazadas),
//   api/_whatsapp.js (revisarBorrador: reglas y avisos de Meta),
//   api/cron-plantillas-wa.js (cada 30 min, correo y webhook plantilla.cambiada),
//   api/_wa-envio.js (tope diario de Meta compartido por campañas y
//   automatizaciones, valores de los huecos), api/cron-campaigns.js (horario de
//   envío), api/cron-automations.js (paso «Enviar WhatsApp» con plantilla),
//   api/_wa-plantilla-api.js + api/v1.js (POST /v1/whatsapp/enviar, bajas),
//   api/_wa-bajas.js + api/_inbox-engine.js (PARAR) y public/app.js (editor,
//   Marketing → Plantillas → WhatsApp, botón de plantilla del inbox, «Iniciar
//   WhatsApp» en la ficha).
//   Agencias: public/app.js (panel de clientes, selector, Pulso de tu cartera,
//   Plataformas de pauta → Reportes), api/_reportes.js y api/cron-reportes.js
//   (semanal, quincenal, mensual; revisión antes de enviar; hasta 5 correos),
//   api/informes-compartidos.js (/i/<código> en vivo, sin datos personales),
//   api/seo-publico.js (enlace del Proyecto SEO, aprobación de contenido),
//   api/team.js (miembros acotados a un cliente), partners.html (20 %).
//
// Fuera a propósito: precios y topes por plan, el plan Agency (ya no se vende),
// botones de respuesta rápida en plantillas (el editor solo ofrece un botón de
// enlace), cabeceras de video o documento, Messenger, Lead Ads y publicar en
// redes. Los ejemplos son inventados.

export const FILAS = [
  { url: '/whatsapp/plantillas-y-difusion/', cluster: 8, nivel: 'Producto', intencion: 'Comercial', estado: 'publicada',
    kw: 'plantillas de whatsapp business',
    title: 'Plantillas de WhatsApp Business y difusión | Acuarius',
    description: 'Plantillas de WhatsApp Business: créalas en tu CRM, envíalas a revisión de Meta y úsalas para escribir primero, en campañas y en automatizaciones.',
    h1: 'Plantillas de WhatsApp Business para escribir primero y enviar campañas',
    miga: 'Plantillas y difusión' },
  { url: '/agencias/', cluster: 5, nivel: 'Pilar', intencion: 'Comercial', estado: 'publicada',
    kw: 'software para agencias de marketing',
    title: 'Software para agencias de marketing | Acuarius',
    description: 'Software para agencias de marketing: cada cliente con su CRM, su agente de WhatsApp, su pauta, su SEO y reportes con tu marca, en una sola cuenta.',
    h1: 'Software para agencias de marketing: todos tus clientes en una cuenta',
    miga: 'Agencias' },
];

export const CONTENIDO = {
  '/whatsapp/plantillas-y-difusion/': {
    badge: 'WhatsApp · plantillas aprobadas por Meta',
    sub: 'Escríbele primero a un contacto, retoma un chat que lleva más de un día quieto o envía una campaña a tu base. Creas la plantilla en Acuarius, Meta la revisa y la usas en el inbox, en campañas y en automatizaciones.',
    secciones: [
      { tipo: 'texto', label: 'La regla de las 24 horas', h2: '¿Por qué WhatsApp pide una plantilla para escribir primero?',
        parrafos: [
          'WhatsApp solo deja enviar mensajes libres dentro de las 24 horas siguientes al último mensaje del cliente. Pasado ese plazo, o si la persona nunca te ha escrito, la única forma de hablarle es con una <b>plantilla aprobada por Meta</b>. Es una regla de WhatsApp, no de Acuarius.',
          'La razón es proteger a los usuarios del spam. Meta revisa cada plantilla antes de que la uses: que el texto corresponda a su categoría, que los datos variables tengan ejemplos y que no sea engañoso. Después vigila la calidad: si mucha gente bloquea un mensaje, pausa la plantilla o limita el número.',
        ] },
      { tipo: 'tarjetas', label: 'Dónde las usas', h2: 'Una plantilla aprobada, cinco formas de usarla',
        items: [
          { t: 'Desde la conversación', d: 'Si pasaron más de 24 horas o el chat es importado, usas el botón de plantilla del inbox, junto al de respuestas rápidas. Acuarius pone el nombre del contacto y ves el mensaje antes de enviarlo.' },
          { t: 'Desde la ficha del contacto', d: 'El botón <b>Iniciar WhatsApp</b> le escribe desde el número de tu empresa a alguien que nunca te escribió. La conversación queda en el inbox, a cargo de quien la empezó.' },
          { t: 'En campañas de difusión', d: 'En Marketing → Campañas eliges el canal WhatsApp, una plantilla aprobada y la audiencia por etiquetas, por lista o uno a uno. Con plantilla le llega a cualquier contacto de tu base, no solo a quien te escribió ayer. <a href="/campanas/">Ver campañas</a>.' },
          { t: 'En automatizaciones', d: 'El paso «Enviar WhatsApp» puede usar una plantilla: el mensaje llega aunque el lead nunca te haya escrito. Sirve para bienvenidas, seguimientos y recordatorios. <a href="/automatizaciones/">Ver automatizaciones</a>.' },
          { t: 'Desde tu propio sistema', d: 'Con la API, tu sistema pide el envío con los datos del caso: un pedido despachado, una reserva confirmada. Queda en el inbox y en la ficha del contacto.' },
        ] },
      { tipo: 'texto', label: 'Crear y aprobar', h2: 'Cómo creas una plantilla sin salir de Acuarius',
        parrafos: [
          'En <b>Marketing → Plantillas</b>, pestaña <b>WhatsApp</b>, pulsas <b>Plantilla de WhatsApp</b>. Escribes un nombre interno (por ejemplo promo_noviembre), el tipo, una cabecera opcional de texto o imagen, el mensaje, un pie y un botón con enlace si quieres. Al lado ves cómo le llegará a tu cliente.',
          'Los datos que cambian en cada envío van en <b>huecos</b> numerados: {{1}}, {{2}}… Cada hueco necesita un ejemplo real, como «María Restrepo»: sin ejemplos, Meta la rechaza sin revisarla. Mientras escribes, Acuarius te avisa de lo que Meta suele rechazar.',
          'Pulsas <b>Enviar a revisión</b> y Meta suele responder de minutos a unas horas. En la misma pantalla ves cada plantilla con su estado: <b>Aprobada</b>, <b>En revisión</b>, <b>Rechazada</b> (con el motivo traducido), <b>Pausada por calidad</b> o <b>Deshabilitada</b>. Si te rechazan una, la borras desde ahí y la rehaces con el mismo nombre.',
        ] },
      { tipo: 'tabla', label: 'Categorías', h2: 'Marketing, utilidad o autenticación: qué categoría elegir',
        cab: ['Categoría', 'Para qué sirve', 'Ejemplo'],
        filas: [
          ['Marketing', 'Promociones, lanzamientos, invitaciones, reactivar clientes.', '«Hola {{1}}, esta semana tenemos 20 % en la línea de verano. ¿Te mando el catálogo?»'],
          ['Utilidad', 'Avisos sobre algo que la persona pidió: confirmaciones, recordatorios, estado de un pedido.', '«Hola {{1}}, tu cita quedó para el {{2}}. Si necesitas cambiarla, respóndenos aquí.»'],
          ['Autenticación', 'Códigos de verificación de un solo uso.', 'Las ves en la lista si tu número ya las tiene; en Acuarius creas las de marketing y utilidad.'],
        ],
        nota: 'La categoría cambia lo que Meta cobra por envío. Si un texto promocional va como utilidad, Meta lo pasa a marketing; Acuarius te avisa antes y si ocurre después.' },
      { tipo: 'texto', label: 'Que te la aprueben', h2: 'Reglas prácticas para que Meta apruebe tu plantilla',
        parrafos: [
          '<b>Elige la categoría honesta.</b> Un recordatorio de cita es utilidad; un descuento es marketing.',
          '<b>Pon un ejemplo en cada hueco.</b> Escribe un valor creíble, no «xxx» ni «nombre».',
          '<b>No empieces ni termines con un hueco.</b> «{{1}}, tu pedido salió» suele caer. «Hola {{1}}, tu pedido salió hoy» pasa. Y numera los huecos 1, 2, 3, sin saltarte ninguno.',
          '<b>Escribe texto propio alrededor de los huecos.</b> Cuatro huecos y diez palabras parecen una plantilla genérica.',
          '<b>Nombres cortos y limpios.</b> Nombre de plantilla y parámetros en minúsculas, con guion bajo, sin tildes ni espacios. Meta rechaza los nombres de parámetro de más de 31 letras.',
        ] },
      { tipo: 'texto', label: 'Datos de cada contacto', h2: 'Huecos que se llenan solos con los datos del CRM',
        parrafos: [
          'En una campaña o una automatización eliges qué va en cada hueco: nombre, empresa, teléfono, correo, etapa, fuente, valor de la oportunidad o asesor asignado. Si el contacto no tiene asesor, {{asesor}} se llena con «nuestro equipo».',
          'También puedes usar tus <a href="/novedades/campos-personalizados-crm/">campos personalizados</a>, como «Fecha del evento» o «Tipo de inmueble». Y si la campaña anuncia un producto de tu catálogo, su nombre, su precio y su enlace entran en los huecos, y su foto puede ir en la cabecera de imagen. Lo explicamos en <a href="/novedades/productos-en-el-crm/">productos en el CRM</a>.',
          'WhatsApp no admite huecos vacíos: a quien le falte un dato no se le envía y aparece como saltado, con su motivo.',
        ] },
      { tipo: 'tabla', label: 'Ejemplos', h2: 'Plantillas de ejemplo por tipo de negocio',
        cab: ['Negocio', 'Categoría', 'Mensaje de la plantilla'],
        filas: [
          ['Inmobiliaria', 'Marketing', '«Hola {{1}}, entró un apartamento en {{2}} que encaja con lo que buscabas. ¿Te mando las fotos?»'],
          ['Clínica', 'Utilidad', '«Hola {{1}}, te recordamos tu cita de {{2}} mañana a las {{3}}. Responde SÍ para confirmarla.»'],
          ['Tienda', 'Utilidad', '«Hola {{1}}, tu pedido {{2}} ya salió. Llega en dos días hábiles.»'],
          ['Restaurante', 'Marketing', '«Hola {{1}}, este jueves estrenamos menú de temporada. ¿Te reservamos mesa?»'],
          ['Servicios', 'Marketing', '«Hola {{1}}, hace un tiempo nos pediste una cotización de {{2}}. ¿Sigues interesado? Te atiende {{3}}.»'],
          ['Educación', 'Utilidad', '«Hola {{1}}, las clases del curso {{2}} empiezan el {{3}}. Aquí tienes el enlace de acceso.»'],
        ],
        nota: 'Mensajes inventados.' },
      { tipo: 'texto', label: 'Difusión con cuidado', h2: '¿Cómo envía Acuarius una campaña de WhatsApp sin quemar tu número?',
        parrafos: [
          'Meta limita cuántas personas distintas puede contactar primero un número cada día. Un número nuevo empieza con 250 y el tope sube con buena calidad y con tu negocio verificado. Pasarse cuesta caro: la calidad cae, las plantillas se pausan y el número puede quedar restringido.',
          'Acuarius lleva esa cuenta por número, y campañas, automatizaciones y API comparten el mismo tope. Lo que no cabe sale al día siguiente. Las campañas salen por tandas cada 10 minutos, en horario comercial: de lunes a viernes de 7 a. m. a 7 p. m. y los sábados de 8 a. m. a 3 p. m., hora de Colombia, nunca domingos ni festivos.',
          'En cada campaña puedes excluir listas o etiquetas, por ejemplo una lista «No contactar». Y si alguien responde <b>PARAR</b> o «No me avises más», queda anotado como baja y los envíos por API ya no le llegan.',
        ] },
      { tipo: 'texto', label: 'Avisos de Meta', h2: 'Te avisamos si Meta cambia una plantilla',
        parrafos: [
          'Meta puede rechazar, pausar o recategorizar una plantilla en cualquier momento. Acuarius revisa tus plantillas cada 30 minutos y, si una cambia a algo malo, le llega un correo al dueño de la cuenta. Si conectaste tu sistema por API, también recibe el aviso <b>plantilla.cambiada</b> por webhook.',
        ] },
      { tipo: 'texto', label: 'API', h2: 'Envía plantillas desde tu propio sistema con la API',
        parrafos: [
          'Con una llave creada en <b>Marketing → Fuentes → API</b>, tu sistema envía una plantilla con <b>POST /v1/whatsapp/enviar</b>: el teléfono con indicativo, el nombre de la plantilla y el valor de cada parámetro. Acuarius comprueba que siga aprobada, que lleguen todos sus datos, que la persona no esté de baja y que no se pase el tope del número; si algo falla, responde con el motivo. Lo enviado queda en el inbox y en la ficha del contacto, y con <b>GET /v1/whatsapp/bajas</b> consultas quién pidió no recibir más.',
        ] },
      { tipo: 'pasos', label: 'Cómo empezar', h2: 'De cero a tu primera plantilla aprobada',
        items: [
          { t: 'Conecta tu número', d: 'En Conversaciones → Canales conectas tu WhatsApp con la app de Meta de tu negocio. Copias los datos que te pedimos, incluido el WhatsApp Business Account ID, que es donde viven las plantillas. <a href="/crm/whatsapp/">Ver inbox de WhatsApp</a>.' },
          { t: 'Escribe la plantilla', d: 'En Marketing → Plantillas → WhatsApp pulsa «Plantilla de WhatsApp». Elige el tipo, escribe el mensaje con sus huecos y un ejemplo para cada uno.' },
          { t: 'Envíala a revisión', d: 'Pulsa «Enviar a revisión» y sigue el estado en la misma pantalla.' },
          { t: 'Úsala', d: 'Cuando esté aprobada, aparece en el inbox, en «Iniciar WhatsApp», en el asistente de campañas y en el paso «Enviar WhatsApp» de tus automatizaciones.' },
        ] },
      { tipo: 'texto', label: 'Errores comunes', h2: 'Errores que hacen perder una campaña de WhatsApp',
        parrafos: [
          '<b>Mandar una campaña sin plantilla.</b> Sale igual, pero solo le llega a quien te escribió en las últimas 24 horas.',
          '<b>Confundir respuestas rápidas con plantillas.</b> Una respuesta rápida no pasa por Meta: sirve dentro de la ventana de 24 horas, nunca para escribir primero.',
          '<b>Enviar a toda la base el primer día.</b> Empieza por quienes más te conocen: si muchos bloquean, Meta pausa la plantilla.',
          '<b>Usar huecos que tus contactos no tienen llenos.</b> Si la mitad de tu base no tiene empresa, un hueco {{empresa}} deja fuera a la mitad.',
        ] },
    ],
    faq: [
      { q: '¿Qué es una plantilla de WhatsApp Business?', a: 'Es un mensaje que Meta revisa y aprueba antes de que puedas usarlo. Sirve para escribirle a alguien que no te ha escrito en las últimas 24 horas o que nunca te escribió. Puede llevar huecos con datos de cada contacto, una cabecera de texto o imagen, un pie y un botón con enlace.' },
      { q: '¿Cuánto tarda Meta en aprobar una plantilla?', a: 'Suele responder de minutos a unas horas. Mientras tanto la plantilla aparece «En revisión» y no se puede enviar. Acuarius revisa el estado cada 30 minutos y te avisa por correo si la rechazan o la pausan.' },
      { q: '¿Por qué me rechazaron la plantilla?', a: 'Los motivos más comunes son una categoría que no corresponde al texto, huecos sin ejemplo, un mensaje que empieza o termina con un hueco y textos que parecen engañosos. En Marketing → Plantillas → WhatsApp ves el motivo traducido. Para rehacerla con el mismo nombre, bórrala primero.' },
      { q: '¿Las plantillas pueden llevar imagen?', a: 'Sí. Al crearla eliges si la cabecera es texto o imagen y subes un JPG o un PNG. Desde la conversación del inbox, por ahora, se envían las de cabecera de texto.' },
      { q: '¿Necesito conectar mi número de una forma especial?', a: 'Tu número debe estar conectado a la API oficial de WhatsApp con la app de Meta de tu negocio, con su WhatsApp Business Account ID. Si falta, Acuarius te pide reconectar en Conversaciones → Canales.' },
      { q: '¿Qué pasa si alguien no quiere recibir más mensajes?', a: 'Si responde PARAR o toca «No me avises más», queda anotado como baja y la API ya no le envía plantillas. En campañas, además, puedes excluir listas o etiquetas, como una lista «No contactar».' },
    ],
    cta: { h2: 'Escríbele primero a quien ya te conoce', sub: 'Crea tu cuenta, conecta tu número de WhatsApp y envía tu primera plantilla a revisión desde Acuarius.' },
  },

  '/agencias/': {
    badge: 'Para agencias de marketing y negocios con varias marcas',
    sub: 'Cada cliente con su pipeline, sus leads, su agente de IA, su pauta y su SEO, separados dentro de una sola cuenta. Le mandas reportes con tu marca y le das un enlace para que vea su avance sin crear usuario.',
    secciones: [
      { tipo: 'texto', label: 'El problema', h2: 'Una agencia no debería necesitar diez herramientas por cliente',
        parrafos: [
          'La agencia típica de Latinoamérica maneja la pauta en Google y Meta, el reporte en una hoja de cálculo, el SEO en otra herramienta y, si el cliente tiene CRM, en uno que la agencia no ve. Resultado: puedes mostrar clics y costo por lead, pero no qué pasó con esos leads, y el cliente termina diciendo que «los leads son malos».',
          'Un <b>software para agencias de marketing</b> pone todo en el mismo sitio: los leads que trae tu pauta llegan al CRM del cliente, el agente los atiende por WhatsApp, el equipo comercial los mueve por el pipeline y el reporte cuenta cuántos se volvieron venta. Así demuestras el valor de tu trabajo con números del CRM, no solo con métricas de plataforma.',
        ] },
      { tipo: 'tarjetas', label: 'Cómo se organiza', h2: 'Varios clientes o marcas en una sola cuenta',
        items: [
          { t: 'Selector de cliente', d: 'Arriba eliges el cliente en el que trabajas y todo cambia con él: pipeline, contactos, inbox, agentes, campañas e informes. Nada de un cliente aparece en otro.' },
          { t: 'Pipeline y leads propios', d: 'Cada cliente tiene sus procesos de venta, sus etapas y sus contactos. Una inmobiliaria y una clínica viven en la misma cuenta con procesos distintos.' },
          { t: 'Su agente de IA', d: 'Cada agente pertenece a un cliente, con su tono, su catálogo y sus reglas. Si buscas un agente en otro cliente, la pantalla te dice dónde está. <a href="/agente-ia/">Ver agente de IA</a>.' },
          { t: 'Sus fuentes y canales', d: 'Los formularios, las páginas de aterrizaje y el número de WhatsApp de cada cliente llenan solo su CRM, con el canal de origen de cada lead.' },
          { t: 'Panel de clientes', d: 'Cada cliente es una tarjeta con su semáforo de salud. El Pulso de tu cartera te muestra cada día qué cuentas necesitan atención: conversiones caídas, presupuestos o conexiones vencidas.' },
          { t: 'Su equipo, acotado', d: 'Invitas a los vendedores de tu cliente y los dejas acotados a ese cliente: solo ven lo suyo, sin ver los nombres de tus otros clientes. Cada persona tiene su perfil: Administrador, Mercadeo o Ventas.' },
        ] },
      { tipo: 'texto', label: 'Reportes', h2: '¿Cómo le mandas a cada cliente un reporte que se arma solo?',
        parrafos: [
          'En <b>Marketing → Plataformas de pauta → Reportes</b> programas un reporte <b>semanal</b> (cada lunes, la semana anterior), <b>quincenal</b> (los días 1 y 16) o <b>mensual</b> (el día 1, el mes anterior) para cada cliente. Se arma con lo que Acuarius ya sabe: la inversión, los leads que llegaron al CRM, las ventas y su costo, comparados con el período anterior.',
          'Sale con tu firma, tu logo y tu color, hasta a cinco correos del cliente, y trae un enlace a una página con las cifras de ese día. Puedes sumarle un resumen escrito por IA. Cada campaña muestra las conversiones que cuenta Google o Meta al lado de los leads que de verdad llegaron al CRM, y si no cuadran, el reporte explica por qué.',
          'Nada sale sin que lo veas, salvo que tú lo decidas. Por defecto, el día del envío te avisamos por correo, revisas el reporte, ajustas el resumen y lo apruebas. Si el cliente responde el correo, la respuesta te llega a ti. <a href="/reportes/">Ver reportes</a>.',
        ] },
      { tipo: 'tabla', label: 'Para compartir', h2: 'Tres formas de mostrarle resultados a tu cliente',
        cab: ['Formato', 'Qué muestra', 'Cuándo usarlo'],
        filas: [
          ['Reporte programado por correo', 'Pauta y CRM del período, comparado con el anterior, con tu marca y un resumen opcional por IA.', 'El seguimiento de rutina: cada semana, quincena o mes, sin armarlo a mano.'],
          ['PDF de Análisis', 'Los informes que elijas (Ventas, Productividad, Marketing y otros), cada uno en su página y con su período.', 'La reunión mensual o el comité del cliente.'],
          ['Enlace vivo de Análisis', 'Los mismos informes con las cifras del momento. Sin nombres, teléfonos, correos ni notas de los leads.', 'Para el gerente o la junta del cliente, que no tienen usuario. Lo revocas cuando quieras.'],
        ],
        nota: 'El PDF y el enlace vivo se crean desde Análisis con los botones «Descargar PDF» y «Compartir».' },
      { tipo: 'texto', label: 'Pauta', h2: 'La pauta de cada cliente, cruzada con sus ventas',
        parrafos: [
          'En <b>Marketing → Plataformas de pauta</b> conectas la cuenta de Google Ads y de Meta Ads de cada cliente. Ves lo que gasta cada campaña y lo que pasó con esos leads dentro del CRM: cuántos se calificaron, cuántos compraron y a qué costo. Si tus cuentas cuelgan de tu propia cuenta administradora de Google, también se leen.',
          'Cuando un lead se marca como ganado, Acuarius puede reportar esa venta a Google y a Meta para que sus algoritmos busquen más clientes como ese. Y como cada lead guarda su campaña de origen, el reporte habla de ventas por campaña, no solo de clics. Lo contamos en <a href="/pauta/">pauta conectada al CRM</a> y en <a href="/novedades/anuncios-clic-a-whatsapp-meta-ads/">anuncios de clic a WhatsApp</a>.',
        ] },
      { tipo: 'texto', label: 'SEO', h2: 'Proyecto SEO con un enlace en vivo para tu cliente',
        parrafos: [
          'En <b>Marketing → Proyecto SEO</b> creas uno o varios proyectos por cliente. Organizas las keywords en clústeres con su página pilar; las posiciones en Google se miden solas cada semana y la presencia de la marca en ChatGPT, Gemini, Claude y Perplexity, cada mes. Si el cliente te da acceso de lectura a su Search Console y su Google Analytics, el proyecto suma el tráfico desde buscadores y desde asistentes de IA.',
          'El cliente lo ve todo desde un enlace con su nombre, sin crear cuenta. Ahí también aprueba el contenido: subes cada artículo con su keyword y su fecha, lo mandas a revisión, y el cliente lo aprueba o pide cambios con una nota. A ti te llega el aviso.',
        ] },
      { tipo: 'tabla', label: 'Ejemplos', h2: 'Cómo trabaja una agencia según el cliente que atiende',
        cab: ['Cliente', 'Lo que monta la agencia en Acuarius'],
        filas: [
          ['Inmobiliaria', 'Pauta en Google y Meta hacia formularios y WhatsApp, agente que recomienda inmuebles del inventario y califica, reporte quincenal con costo por lead y por venta. <a href="/crm/inmobiliarias/">CRM inmobiliario</a>.'],
          ['Clínica', 'Agente que agenda valoraciones, recordatorios por plantilla de WhatsApp, encuesta de satisfacción y reporte mensual a la dirección. <a href="/crm/clinicas/">CRM para clínicas</a>.'],
          ['Tienda en línea', 'Campañas de WhatsApp con productos del catálogo, ventas de la tienda en Análisis y enlace vivo de informes para el dueño.'],
          ['Restaurante', 'Agente con la carta y las reservas, campañas por etiquetas para días flojos y reporte semanal de pauta y leads. <a href="/crm/restaurantes/">CRM para restaurantes</a>.'],
          ['Servicios B2B', 'Formularios del sitio con su canal de origen, pipeline de propuesta y negociación, Proyecto SEO con aprobación de contenido.'],
          ['Educación', 'Leads de pauta por programa, seguimiento automático por correo y WhatsApp y reporte de leads y ventas por campaña.'],
        ],
        nota: 'Combinaciones de ejemplo. Cada cliente usa solo lo que necesita.' },
      { tipo: 'texto', label: 'Partners', h2: 'Gana una comisión recurrente por los clientes que traes',
        parrafos: [
          'Con el <a href="/partners">Programa de Partners</a>, cada cuenta que recomiendas te deja el <b>20 % de lo que paga, todos los meses</b>, mientras siga pagando. La comisión es sobre su factura completa, con sus usuarios y contactos adicionales.',
          'Te postulas desde «Partners» en el menú de la app. Al aprobarte recibes tu enlace de registro y un panel con tus cuentas activas, en prueba y desactivadas, y cada comisión. Una vez al mes eliges tus comisiones, subes tu factura y solicitas la liquidación. Lo que le cobres a tu cliente por implementación o campañas lo facturas tú, directo.',
        ] },
      { tipo: 'pasos', label: 'Cómo empezar', h2: 'Tu agencia funcionando en Acuarius',
        items: [
          { t: 'Crea tu cuenta', d: 'Crea tu cuenta y monta tu primer cliente. Para sumar clientes o marcas, escríbenos desde Soporte y te los dejamos listos. El costo de cada uno está en <a href="/precios/">precios</a>.' },
          { t: 'Configura cada cliente', d: 'Desde el panel de clientes, con su pipeline, sus fuentes, su número de WhatsApp y su agente. <a href="/crm/whatsapp/">Ver inbox de WhatsApp</a>.' },
          { t: 'Conecta su pauta', d: 'Google Ads y Meta Ads en Plataformas de pauta, para cruzar inversión con ventas.' },
          { t: 'Programa sus reportes', d: 'Genera la vista previa con los números reales, revísala y deja el envío programado.' },
        ] },
      { tipo: 'texto', label: 'Errores comunes', h2: 'Errores al llevar varios clientes en una herramienta',
        parrafos: [
          '<b>Mezclar clientes en un mismo pipeline.</b> Los reportes dejan de cuadrar y un vendedor ve leads que no son suyos. Cada cliente va en su propio espacio.',
          '<b>Mandar el reporte sin mirarlo.</b> Deja activa la revisión antes del envío, sobre todo los primeros meses: es tu firma la que va al pie.',
          '<b>Reportar solo métricas de plataforma.</b> Si el cliente ve 300 leads y su equipo dice que vendió poco, el problema puede estar en la atención. Conectar el CRM te deja mostrar dónde se cae la venta. Automatiza el seguimiento con <a href="/automatizaciones/">automatizaciones</a> y reactiva la base con <a href="/campanas/">campañas</a>.',
          '<b>Darle al cliente una cuenta con todo abierto.</b> Invita a su equipo acotado a su cliente y con el perfil que corresponde.',
        ] },
    ],
    faq: [
      { q: '¿Qué es un software para agencias de marketing?', a: 'Es una herramienta en la que una agencia maneja a todos sus clientes: sus leads, su pauta, su atención por WhatsApp, su SEO y sus reportes, cada uno separado. En Acuarius además une la pauta con el CRM, así el reporte muestra ventas y no solo clics.' },
      { q: '¿Cada cliente tiene sus datos separados?', a: 'Sí. Cada cliente tiene su pipeline, sus contactos, sus agentes, sus fuentes y sus informes. Una persona acotada a un cliente solo ve ese cliente, y el servidor lo aplica en cada petición.' },
      { q: '¿Mi cliente necesita un usuario para ver sus resultados?', a: 'No. El reporte programado le llega por correo con un enlace, el enlace vivo de Análisis se abre sin usuario y el Proyecto SEO tiene su propio enlace. Si quieres que su equipo trabaje los leads, lo invitas acotado a su cliente.' },
      { q: '¿Los reportes llevan mi marca?', a: 'Sí. Cada reporte programado sale con tu firma, tu logo y tu color. Por defecto lo revisas antes de que le llegue al cliente.' },
      { q: '¿Puedo conectar la cuenta de Google Ads y Meta Ads de cada cliente?', a: 'Sí, cada cuenta publicitaria va en su cliente. Ves la inversión de cada campaña al lado de los leads y las ventas que trajo en el CRM.' },
      { q: '¿Cuánto cuesta sumar clientes?', a: 'Cada cliente o marca adicional tiene un costo mensual que ves en <a href="/precios/">precios</a>. Escríbenos desde Soporte y lo dejamos activo en tu cuenta.' },
      { q: '¿Cómo funciona el Programa de Partners?', a: 'Recomiendas Acuarius, tu cliente paga y tú recibes el 20 % de lo que paga cada mes, mientras siga pagando. Lo sigues en tu panel de Partners. Más detalles en <a href="/partners">el programa</a>.' },
    ],
    cta: { h2: 'Todos tus clientes en una sola cuenta', sub: 'Crea tu cuenta, monta tu primer cliente y programa su reporte con los números reales.' },
  },
};
