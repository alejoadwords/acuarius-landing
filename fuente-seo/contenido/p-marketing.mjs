// Páginas de producto de Marketing: /automatizaciones/ y /campanas/.
//
// Cada afirmación sale del código de Acuarius a 02-11-2026:
// - Automatizaciones: public/app.js (AUTO_STEP_META, AUTO_TEMPLATES, el
//   lanzador con sus disparadores, AUTO_TRIGGERS_RESERVA y _TIENDA, los
//   campos de cada paso), api/cron-automations.js (motor cada 10 minutos,
//   horario de la Ley 2300), api/cron-recordatorios.js (los recordatorios de
//   cita NO son una automatización) y public/novedades.json.
// - Campañas: public/app.js (cmpNueva, el asistente de cuatro pasos, «Por
//   filtros» / «Lista guardada» / «Uno a uno», «No enviar a», producto de la
//   campaña, ficha del lead con el motivo), api/campaigns.js (una vez por
//   persona, bajas, rebotes), api/cron-campaigns.js (tandas, horario, tope
//   diario de WhatsApp) y public/novedades.json.
//
// Fuera a propósito: SMS (beta, solo en cuentas activadas a mano), precios,
// cupos y topes por plan, Messenger, y cifras del tope diario de WhatsApp.
// Los ejemplos por negocio son inventados.

export const FILAS = [
  { url: '/automatizaciones/', cluster: 8, nivel: 'Producto', intencion: 'Comercial', estado: 'publicada',
    kw: 'automatización de ventas',
    title: 'Automatización de ventas por WhatsApp y correo | Acuarius',
    description: 'Automatización de ventas para pymes: flujos que escriben por WhatsApp y correo, crean tareas, mueven etapas y piden reseñas solos, sin programar nada.',
    h1: 'Automatización de ventas: el seguimiento que corre solo',
    miga: 'Automatizaciones' },
  { url: '/campanas/', cluster: 8, nivel: 'Producto', intencion: 'Comercial', estado: 'publicada',
    kw: 'envío masivo de WhatsApp',
    title: 'Envío masivo de WhatsApp y correo desde tu CRM | Acuarius',
    description: 'Envío masivo de WhatsApp con plantillas aprobadas por Meta y campañas de correo segmentadas por etiquetas, campos y productos, con bajas y fallidos a la vista.',
    h1: 'Envío masivo de WhatsApp y correo, a la gente correcta',
    miga: 'Campañas' },
];

export const CONTENIDO = {
  '/automatizaciones/': {
    badge: 'Automatizaciones del CRM',
    sub: 'Un disparador y unos pasos: cuando entra un lead, cambia de etapa, reserva o compra, Acuarius le escribe, crea la tarea, avisa al asesor y sigue solo. Lo armas en un lienzo, sin programar.',
    secciones: [
      { tipo: 'texto', label: 'El problema', h2: '¿Por qué se pierden ventas que ya estaban casi cerradas?',
        parrafos: [
          'La mayoría de las ventas se pierden por falta de seguimiento, no por precio. Alguien pidió información un martes, el asesor quedó en escribirle el jueves y el jueves se llenó de otras cosas. Nadie decidió perder ese cliente: simplemente nadie volvió a escribirle.',
          'La <b>automatización de ventas</b> resuelve exactamente eso. Tú decides una vez qué pasa en cada momento —cuando entra un lead, cuando lleva tres días quieto, cuando gana, cuando asiste a su cita— y el sistema lo hace cada vez, con cada contacto, aunque tu equipo esté ocupado o la app esté cerrada.',
          'En Acuarius las automatizaciones viven dentro del <a href="/crm/">CRM</a>: leen la etapa, las etiquetas, los productos y los campos de cada lead, y lo que hacen queda en su historial.',
        ] },
      { tipo: 'texto', label: 'Cómo funciona', h2: 'Cómo funciona una automatización en Acuarius',
        parrafos: [
          'Cada automatización tiene un <b>lanzador</b> y una cadena de <b>pasos</b>. El lanzador dice cuándo empieza; los pasos dicen qué hacer, en orden. La armas en un lienzo: haces clic en un bloque de la paleta y se añade al final del flujo; haces clic en un nodo para configurarlo.',
          'El motor revisa la cola cada 10 minutos, así que las acciones salen en minutos, no al segundo. Una espera de un día puede alargarse hasta diez minutos más. Para un seguimiento comercial no cambia nada, y a cambio el flujo corre aunque nadie tenga la app abierta.',
          'Los mensajes al cliente —correo, WhatsApp, encuestas y pedidos de reseña— respetan el horario de contacto comercial de la Ley 2300 de Colombia: de lunes a viernes de 7:00 a 19:00 y sábados de 8:00 a 15:00, sin domingos ni festivos. Si un paso cae fuera de ese horario, espera y sigue solo. Las notas, etiquetas, tareas y avisos a tu equipo corren a cualquier hora. Además puedes acotar el envío a «Solo de 8:00 a 18:00» o «Solo de 9:00 a 17:00».',
        ] },
      { tipo: 'tabla', label: 'Disparadores', h2: '¿Qué puede disparar una automatización?',
        cab: ['Lanzador', 'Cuándo arranca'],
        filas: [
          ['Cuando se crea un lead', 'Al entrar un contacto nuevo, llegue por un formulario, por WhatsApp o lo cree alguien de tu equipo.'],
          ['Cuando cambia de etapa', 'Al pasar a una etapa concreta del pipeline, por ejemplo Ganado o Perdido, o a cualquiera.'],
          ['Cuando lleva días sin actividad', 'Cuando un lead suma 2, 3, 5, 7 o 14 días sin movimiento.'],
          ['Cuando se le añade una etiqueta', 'Al recibir una etiqueta, la ponga una persona, un formulario u otra automatización. Corre una sola vez por lead, así dos flujos nunca entran en bucle.'],
          ['Cuando se agrega un producto a su oportunidad', 'Cuando un asesor añade ese producto en la ficha o el cliente lo elige en un formulario. Una vez por lead.'],
          ['Webhook externo', 'Con una URL secreta que recibe datos de formularios, Zapier o Make, crea el lead y arranca el flujo.'],
          ['Reservas', 'Cuando alguien reserva, cancela, asistió a su cita o no asistió. Puedes filtrar por servicio.'],
          ['Tienda en línea', 'Cuando paga un pedido, compra por primera vez, se envía su pedido, deja un carrito sin pagar o lleva días sin comprar.'],
        ],
        nota: 'Los disparadores de tienda necesitan Shopify, WooCommerce o VTEX conectados (<a href="/crm/tiendas-en-linea/">ver tiendas en línea</a>). Con VTEX no se dispara el de carrito abandonado.' },
      { tipo: 'tarjetas', label: 'Pasos', h2: 'Los pasos que puedes encadenar',
        items: [
          { t: 'Enviar email', d: 'Un correo con variables como {{nombre}}, {{etapa}} o {{asesor}}, escrito ahí mismo o a partir de una de tus plantillas de correo. Sale del dominio de Acuarius con el nombre de tu negocio.' },
          { t: 'Enviar WhatsApp', d: 'Con una plantilla aprobada por Meta le llega a cualquier lead con teléfono, aunque nunca te haya escrito. Un mensaje libre solo llega a quien te escribió en las últimas 24 horas.' },
          { t: 'Pedir reseña', d: 'Manda por correo o WhatsApp tu enlace de Google. Se pide una sola vez por lead, y en su historial queda si pulsó el enlace.' },
          { t: 'Encuesta NPS', d: 'Una escala del 0 al 10 por correo. Al responder, el lead queda con la etiqueta nps promotor, nps neutro o nps detractor.' },
          { t: 'Crear tarea y Notificarme', d: 'Una tarea en la Agenda ligada al lead, para el mismo día o los siguientes, y un correo a ti con los datos del contacto.' },
          { t: 'Cambiar etapa, etiquetas y notas', d: 'Mueve el lead en el pipeline, le pone o le quita una etiqueta y deja una nota en su historial.' },
          { t: 'Esperar', d: 'Pausa el flujo los minutos, horas o días que escribas: 15 minutos, 1 día, 7 días o lo que necesites.' },
          { t: 'Condición', d: 'Sigue solo si se cumple algo: la etapa, la fuente, el valor, si tiene email o teléfono, si abrió el correo, una etiqueta, un producto o un campo propio.' },
          { t: 'Ramas Sí / No', d: 'Divide el flujo en dos carriles. Por ejemplo: si tiene email, se le escribe; si no, se crea una tarea para conseguirlo.' },
        ] },
      { tipo: 'tabla', label: 'Ejemplos', h2: 'Ejemplos de automatización de ventas por tipo de negocio',
        cab: ['Negocio', 'Lanzador', 'Lo que hace el flujo'],
        filas: [
          ['Inmobiliaria', 'Cuando se crea un lead', 'Notificarme y crear la tarea «Llamar a {{nombre}}» para mañana. Un segundo flujo con «Cuando lleva días sin actividad» le manda, a los 3 días, un WhatsApp con plantilla preguntando si sigue buscando.'],
          ['Clínica o consultorio', 'Cuando asistió a su cita', 'Esperar un día y «Pedir reseña» con el nombre del servicio en el mensaje. Si no asistió, otro flujo le ofrece una nueva hora.'],
          ['Tienda en línea', 'Cuando deja un carrito sin pagar', 'Un correo con {{enlace_carrito}} para terminar la compra. Si paga mientras el flujo espera, el resto se cancela solo.'],
          ['Restaurante', 'Cuando se le añade la etiqueta «nps promotor»', '«Pedir reseña» solo a quien ya te dio 9 o 10.'],
          ['Servicios', 'Cuando cambia de etapa a Ganado', 'Correo de bienvenida, esperar 7 días y «Encuesta NPS». Si sale detractor, otro flujo crea la tarea de llamarlo.'],
          ['Educación', 'Cuando se agrega un producto a su oportunidad', 'Si se interesó en el diplomado de marzo, enviar el temario por correo y crear una tarea para el asesor.'],
        ],
        nota: 'Ejemplos inventados. Para recompra, si no tienes tienda conectada, usa «Cuando cambia de etapa» a Ganado y una espera de los días que tarde tu cliente en volver a necesitarte. Lo contamos en <a href="/novedades/recompra-y-encuesta-nps/">encuesta NPS automática y recompra</a>.' },
      { tipo: 'texto', label: 'Recordatorios de cita', h2: '¿Y el recordatorio antes de la cita?',
        parrafos: [
          'El recordatorio de una cita no se arma con una automatización: lo manda Reservas por su cuenta. Las automatizaciones se disparan por lo que le pasa al lead, y un recordatorio depende de lo cerca que está la cita. Por eso Reservas avisa por defecto el día antes y dos horas antes, sin que tengas que configurar un flujo.',
          'Con las automatizaciones haces lo que pasa alrededor: confirmar al reservar, reaccionar a una cancelación, agradecer al día siguiente o recuperar a quien no vino. Variables como {{servicio}} y {{fecha_cita}} ponen los datos de la cita en el mensaje. Más sobre citas en <a href="/agenda/">agenda y reservas</a>.',
        ] },
      { tipo: 'texto', label: 'Campos propios', h2: 'Automatizaciones que leen tus propios datos',
        parrafos: [
          'Los pasos «Condición» y «Ramas Sí / No» pueden preguntar por cualquiera de tus <a href="/novedades/campos-personalizados-crm/">campos personalizados</a>: «Presupuesto mayor o igual a 100.000.000», «Intereses incluye Piscina» o «Cédula está vacío». Y esos campos se usan como variables en los mensajes.',
          'Si tu <a href="/agente-ia/">agente de IA</a> llena esos campos durante la conversación de WhatsApp, la automatización ya tiene con qué decidir cuando el lead llega al CRM.',
        ] },
      { tipo: 'pasos', label: 'Cómo empezar', h2: 'Crea tu primera automatización',
        items: [
          { t: 'Abre Automatizaciones', d: 'Ve a Marketing → Automatizaciones y pulsa «Nueva automatización». Si es tu primera vez, puedes arrancar desde una plantilla, como «Bienvenida a lead nuevo» o «Pedir reseña al ganar el negocio».' },
          { t: 'Elige el lanzador', d: 'Haz clic en el nodo Lanzador y elige en «Cuándo se dispara». Si es por etapa, elige la etapa destino; si es por inactividad, los días.' },
          { t: 'Añade los pasos', d: 'Haz clic en los bloques de la paleta, de «Acciones» o de «Control del flujo», y configura cada nodo en el panel de la derecha.' },
          { t: 'Actívala', d: 'Ponle nombre, cambia de «Borrador» a «Activa» y pulsa «Crear automatización». En la lista ves su «Historial» paso a paso y puedes pausarla o duplicarla.' },
        ] },
      { tipo: 'texto', label: 'Errores comunes', h2: 'Errores comunes al automatizar el seguimiento',
        parrafos: [
          '<b>Mandar un WhatsApp libre a quien nunca te escribió.</b> No le llega. Para escribirle a cualquier lead, el paso «Enviar WhatsApp» necesita una plantilla aprobada por Meta.',
          '<b>Preguntar «¿abrió el correo?» sin esperar.</b> Pon un paso «Esperar» entre el correo y la rama «Abrió el email», o casi nadie habrá tenido tiempo de abrirlo.',
          '<b>Pedir la reseña en caliente.</b> Al minuto de cerrar, el cliente todavía no usó lo que compró. Un día después de la cita o un par de días después de ganar funciona mejor.',
          '<b>Esperar que salga a las 10 de la noche.</b> Un correo programado fuera del horario legal sale en el siguiente hueco permitido. Revisa el «Historial»: ahí queda el motivo.',
          '<b>Escribirle dos veces a la misma persona.</b> Si alguien entra el mismo día a dos procesos, como Venta y Arriendo, la segunda bienvenida no sale si ya recibió la primera en las últimas 24 horas.',
        ] },
    ],
    faq: [
      { q: '¿Qué es la automatización de ventas?', a: 'Es dejar que el sistema haga los pasos repetidos del seguimiento comercial —escribir, recordar, mover de etapa, avisar al asesor— a partir de reglas que defines una vez. En Acuarius cada regla es un lanzador más una cadena de pasos.' },
      { q: '¿Las automatizaciones son instantáneas?', a: 'No. El motor revisa la cola cada 10 minutos, así que los pasos salen en minutos. Los mensajes al cliente además esperan el horario de la Ley 2300: lunes a viernes de 7:00 a 19:00 y sábados de 8:00 a 15:00.' },
      { q: '¿Puedo enviar WhatsApp automáticos a cualquier contacto?', a: 'Sí, con una plantilla aprobada por Meta y tu WhatsApp conectado. Sin plantilla, el mensaje solo llega a quien te escribió en las últimas 24 horas. Puedes crear la plantilla desde el mismo paso.' },
      { q: '¿Desde qué correo salen los emails?', a: 'Desde el dominio de Acuarius, con el nombre de tu negocio. Los avisos de «Notificarme» llegan a tu correo, no al lead.' },
      { q: '¿Puedo usar datos de mi tienda o de mis reservas?', a: 'Sí. Hay lanzadores de Reservas (reservó, canceló, asistió, no asistió) y de tienda en línea (pedido pagado, primera compra, pedido enviado, carrito abandonado y días sin comprar), con variables como {{servicio}} o {{enlace_carrito}}.' },
      { q: '¿Cómo sé si una automatización funcionó con un lead?', a: 'Cada automatización tiene su «Historial»: qué hizo con cada lead, paso por paso, y el detalle cuando algo no salió o quedó esperando el horario permitido.' },
      { q: '¿Puedo conectar un formulario externo?', a: 'Sí. Con el lanzador «Webhook externo» obtienes una URL secreta. Un POST con nombre, email y teléfono crea el lead, o usa el existente por email, y arranca el flujo. Funciona con Zapier y Make.' },
      { q: '¿Qué diferencia hay con una campaña?', a: 'Una automatización reacciona a lo que le pasa a cada lead, uno por uno. Una <a href="/campanas/">campaña</a> le escribe a un grupo entero en un momento que tú eliges.' },
    ],
    cta: { h2: 'Deja que el seguimiento corra solo', sub: 'Crea tu cuenta y arma tu primera automatización desde una plantilla en cinco minutos.' },
  },

  '/campanas/': {
    badge: 'Campañas de WhatsApp y correo',
    sub: 'Escríbele a una parte de tu base, o a toda, por WhatsApp con plantillas aprobadas por Meta o por correo con tu diseño. Segmentas por etiquetas, campos y productos, y ves a quién le llegó y a quién no, con el motivo.',
    secciones: [
      { tipo: 'texto', label: 'Qué es', h2: '¿Qué es una campaña en Acuarius?',
        parrafos: [
          'Una campaña es un mensaje que sale a un grupo de contactos de tu CRM en un momento que tú eliges. En Acuarius se envía por correo o por WhatsApp, a la audiencia que armas con los datos que ya tienes: etiquetas, etapa, fuente, campos propios y productos.',
          'El <b>envío masivo de WhatsApp</b> desde un teléfono termina en números bloqueados y en listas de difusión que solo llegan a quien te tiene guardado. Desde el <a href="/crm/">CRM</a> sale por la plataforma oficial de WhatsApp, con plantillas aprobadas por Meta, y cada envío queda en la ficha del contacto.',
        ] },
      { tipo: 'texto', label: 'WhatsApp', h2: '¿Por qué WhatsApp masivo solo sale con plantillas aprobadas por Meta?',
        parrafos: [
          'Porque son las reglas de WhatsApp, no de Acuarius. Una empresa solo puede mandar un mensaje libre a quien le escribió en las últimas 24 horas. Para escribirle primero a alguien, o después de ese plazo, WhatsApp exige una plantilla que Meta revisó y aprobó.',
          'Las plantillas protegen tu número. Meta mide la calidad de lo que envías: si mucha gente bloquea o reporta tus mensajes, puede pausar la plantilla o limitar el número. Por eso Acuarius le pregunta a Meta el estado de tus plantillas cada vez que armas una campaña: una aprobada ayer puede estar pausada hoy.',
          'No tienes que salir de Acuarius para tenerlas. En la tarjeta «Plantilla aprobada de WhatsApp» pulsas «Crear plantilla», la escribes con su encabezado, imagen, botón y variables, y la mandas a revisión. Más detalle en <a href="/whatsapp/plantillas-y-difusion/">plantillas y difusión de WhatsApp</a>.',
          'Para enviar necesitas tu WhatsApp conectado a Acuarius. Hoy se conecta con la app de Meta de tu propio negocio; te lo explicamos en <a href="/crm/whatsapp/">CRM con WhatsApp</a>.',
        ] },
      { tipo: 'tarjetas', label: 'Audiencia', h2: 'Tres formas de elegir a quién le llega',
        items: [
          { t: 'Por filtros', d: 'Etiquetas, etapa del pipeline, fuente, un campo personalizado y un producto. Ves cuántos contactos cumplen antes de enviar, y guardas el segmento como lista.' },
          { t: 'Lista guardada', d: 'Listas dinámicas, que se resuelven al enviar con quien cumpla los filtros en ese momento, o estáticas, con los contactos exactos que guardaste.' },
          { t: 'Uno a uno', d: 'Eliges contacto por contacto, buscando por nombre o por teléfono. Aparecen también los contactos importados sin proceso.' },
          { t: 'Por producto', d: 'Escríbele a quien compró un producto o a quien «Se interesó» porque lo tiene en una oportunidad. Ideal para avisar de un reabastecimiento o una promoción.' },
          { t: 'Por campo personalizado', d: 'Segmenta por tus propios datos: ciudad, presupuesto, fecha del evento. Lo contamos en <a href="/novedades/campos-personalizados-crm/">campos personalizados</a>.' },
          { t: 'No enviar a', d: 'Excluye listas o etiquetas, la audiencia la elijas como la elijas. Se aplica en el envío, no solo en el contador.' },
        ] },
      { tipo: 'tabla', label: 'Correo y WhatsApp', h2: 'Correo masivo y WhatsApp masivo: qué trae cada uno',
        cab: ['', 'Correo', 'WhatsApp'],
        filas: [
          ['Qué se envía', 'Correo con tu diseño: imagen, botón y color, o un diseño de tus plantillas de correo', 'Una plantilla aprobada por Meta, con texto, imagen y botón'],
          ['A quién le llega', 'A quien tenga un email válido y no se haya dado de baja', 'A cualquier contacto con teléfono, gracias a la plantilla'],
          ['Remitente', 'Sale del dominio de Acuarius con el nombre de tu negocio y tu correo en «Responder a»', 'Tu propio número de WhatsApp conectado'],
          ['Producto en el mensaje', 'Bloque «Producto» en el editor de correos', 'Nombre, precio, enlace y foto del producto en los huecos de la plantilla'],
          ['Bajas', 'Enlace de baja en cada correo; quien lo pulsa no recibe más', 'Etiqueta a quien pida no recibir más y exclúyela con «No enviar a»'],
          ['Qué mides', 'Enviados, omitidos, fallidos y quién abrió', 'Enviados, omitidos y fallidos, incluido lo que WhatsApp aceptó y no entregó'],
        ] },
      { tipo: 'texto', label: 'Productos', h2: 'Anuncia un producto a quien ya se interesó',
        parrafos: [
          'En una campaña de WhatsApp eliges un producto de tu catálogo en «Producto de la campaña». Su nombre, su precio y su enlace se ponen en los huecos de la plantilla, y si la plantilla lleva imagen, la foto del producto va arriba.',
          'Combínalo con el filtro de producto en modo «Se interesó»: le escribes solo a quien tuvo ese producto en una oportunidad. Más en <a href="/novedades/productos-en-el-crm/">productos en el CRM</a> y en <a href="/productos/">productos</a>.',
        ] },
      { tipo: 'texto', label: 'El envío', h2: 'Cómo sale una campaña grande',
        parrafos: [
          'Una campaña sale por tandas: el motor revisa la cola cada 10 minutos y en cada vuelta envía todo lo que alcanza. El contador avanza a medida que se envía, así que ves cuántos van y cuántos faltan.',
          'Las campañas respetan el horario de contacto comercial de la Ley 2300 de Colombia: de lunes a viernes de 7:00 a 19:00 y sábados de 8:00 a 15:00, sin domingos ni festivos. Fuera de ese horario la campaña espera y sigue donde iba, y la lista te dice cuándo continúa. También puedes marcar «Programar el envío» y elegir fecha y hora.',
          'En WhatsApp, Acuarius respeta el límite diario de mensajes que Meta le da a tu número. Lo que no alcance hoy sale al día siguiente: forzar ese techo es como se pierde un número.',
          'Cada persona recibe la campaña una sola vez, aunque esté en dos procesos. Y si se dio de baja del correo desde una oportunidad, no lo recibe por ninguna. Un correo que rebotó o que se marcó como spam sale de todas las campañas siguientes, y la ficha del contacto lo dice.',
        ] },
      { tipo: 'tabla', label: 'Ejemplos', h2: 'Ideas de campaña por tipo de negocio',
        cab: ['Negocio', 'Audiencia', 'Mensaje'],
        filas: [
          ['Inmobiliaria', 'Campo «Zona de interés» es Norte, etapa Contactado', 'WhatsApp con plantilla: «{{nombre}}, salió un apartamento nuevo en el norte. ¿Te mando las fotos?»'],
          ['Clínica', 'Etiqueta «limpieza-2025»', 'Correo: «Ya va un año desde tu última limpieza. Agenda tu control».'],
          ['Tienda', 'Producto «Tenis trail» en modo «Se interesó»', 'WhatsApp con el producto de la campaña: foto, precio y enlace para comprar.'],
          ['Restaurante', 'Lista «Clientes frecuentes», sin la etiqueta «no-contactar»', 'Correo con el menú del mes y la fecha de la noche de catas.'],
          ['Servicios', 'Etapa Perdido de los últimos meses', 'Correo con una oferta para retomar la conversación.'],
          ['Educación', 'Campo «Programa de interés» es Inglés', 'WhatsApp: «{{nombre}}, abrimos inscripciones para el nivel B1».'],
        ],
        nota: 'Datos inventados. Las variables como {{nombre}} se llenan con los datos de cada contacto.' },
      { tipo: 'pasos', label: 'Cómo empezar', h2: 'Envía tu primera campaña',
        items: [
          { t: 'Elige el canal', d: 'Ve a Marketing → Campañas, pulsa «Nueva campaña» y elige Correo o WhatsApp.' },
          { t: 'Escribe el mensaje', d: 'En correo: «Nombre de la campaña», «Asunto», «Preencabezado», «Remitente» y «Responder a», y luego el contenido. En WhatsApp: elige la plantilla aprobada. Puedes partir de una plantilla o pedir «Redactar con IA».' },
          { t: 'Elige la audiencia', d: 'En «¿A quién le llega?» usa «Por filtros», «Lista guardada» o «Uno a uno», y añade lo que no debe recibirla en «No enviar a». En correo, manda antes un correo de prueba.' },
          { t: 'Revisa y envía', d: 'En «Revisión y envío» comprueba la vista previa y los destinatarios, y pulsa «Enviar campaña» o «Programar envío».' },
        ] },
      { tipo: 'texto', label: 'Errores comunes', h2: 'Errores comunes en un envío masivo',
        parrafos: [
          '<b>Escribirle a toda la base con el mismo mensaje.</b> Una campaña a quien se interesó en un producto rinde más que una a todos. Usa etiquetas, campos o productos.',
          '<b>Usar una plantilla de marketing para todo.</b> Si mucha gente bloquea tus mensajes, Meta baja la calidad de la plantilla y puede pausarla. Manda menos y mejor dirigido.',
          '<b>No mirar los fallidos.</b> Cada contacto al que no le llegó tiene su motivo en la ficha, en la caja Campañas: sin teléfono, dado de baja, email con formato inválido o lo que respondió WhatsApp.',
          '<b>Ignorar a quien pide no recibir más.</b> En correo la baja es automática. En WhatsApp, etiquétalo y excluye esa etiqueta en «No enviar a».',
        ] },
    ],
    faq: [
      { q: '¿Cómo hago un envío masivo de WhatsApp?', a: 'Con tu WhatsApp conectado a Acuarius, crea una campaña de WhatsApp, elige una plantilla aprobada por Meta, arma la audiencia y envíala. La plantilla permite escribirle a contactos que no te han escrito en las últimas 24 horas.' },
      { q: '¿Por qué necesito una plantilla aprobada?', a: 'WhatsApp solo deja enviar mensajes libres dentro de las 24 horas siguientes al último mensaje del cliente. Fuera de ese plazo, cualquier empresa necesita una plantilla aprobada por Meta. Puedes crearla y mandarla a revisión desde Acuarius.' },
      { q: '¿Puedo enviar correos masivos con mi diseño?', a: 'Sí. Puedes usar imagen de cabecera, botón y color, o un diseño de tus plantillas de correo. Sale del dominio de Acuarius con el nombre de tu negocio, y las respuestas llegan al correo que pongas en «Responder a».' },
      { q: '¿Las campañas salen al instante?', a: 'Salen por tandas, con el motor revisando la cola cada 10 minutos, y solo dentro del horario de la Ley 2300. Una campaña grande puede tardar un rato; el contador avanza mientras se envía.' },
      { q: '¿Qué pasa con quien se da de baja?', a: 'En correo, cada mensaje lleva su enlace de baja. Quien lo pulsa no recibe más campañas por correo, aunque esté en varios procesos.' },
      { q: '¿Cómo sé a quién no le llegó?', a: 'La campaña muestra enviados, omitidos y fallidos. En la ficha de cada contacto, la caja Campañas dice qué recibió y, si no le llegó, el motivo.' },
      { q: '¿Puedo programar una campaña?', a: 'Sí. En el último paso marca «Programar el envío» y elige la fecha y la hora.' },
      { q: '¿En qué se diferencia de una automatización?', a: 'La campaña le escribe a un grupo en un momento. Una <a href="/automatizaciones/">automatización</a> le escribe a cada lead cuando le pasa algo: entra, cambia de etapa, reserva o compra. Para conversar después del envío, tu <a href="/agente-ia/">agente de IA</a> responde a quien conteste.' },
    ],
    cta: { h2: 'Escríbele a tu base sin arriesgar tu número', sub: 'Crea tu cuenta, conecta tu WhatsApp y envía tu primera campaña segmentada.' },
  },
};
