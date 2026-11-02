// Ediciones quincenales de acuarius.app/novedades/.
//
// Una edición = una página propia + sus tarjetas en el índice. La más nueva va
// PRIMERO. El texto sale de public/novedades.json del repo de la app, pero se
// reescribe para quien todavía no usa Acuarius: lo que un usuario ya entiende
// por el nombre del botón, aquí hay que contarlo.
//
// Reglas de contenido:
//  · Nunca nombres de clientes, ni precios ni planes (eso vive en el home).
//  · Solo lo que ya está en producción: se escribe desde la función terminada.
//  · `video` es el ID de YouTube del video propio de la función. Mientras no
//    exista, la sección muestra su ilustración (`ilustracion`) y, si hay,
//    enlaza el video de la Academia más cercano (`relacionado`).

export const EDICIONES = [
  {
    slug: 'productos-en-el-crm-y-whatsapp-en-vivo',
    numero: 1,
    desde: '2026-10-19',
    hasta: '2026-11-01',
    publicada: '2026-11-02',
    periodo: '19 de octubre al 1 de noviembre de 2026',
    title: 'Novedades: productos en el CRM y WhatsApp en vivo | Acuarius',
    description: 'Lo nuevo en Acuarius: catálogo de productos en el CRM, campos personalizados, WhatsApp en vivo, enlaces para agendar reuniones y alertas de satisfacción.',
    h1: 'Productos en el CRM, WhatsApp en vivo y enlaces para agendar',
    sub: 'En estas dos semanas tu catálogo entró al CRM, el inbox empezó a funcionar en tiempo real y tus clientes ya pueden agendarte sin ida y vuelta de mensajes. Aquí está todo, función por función.',
    resumen: 'Catálogo de productos dentro del CRM, campos a tu medida, WhatsApp en tiempo real y reuniones que se agendan solas.',

    destacadas: [
      {
        id: 'productos',
        chip: 'Productos',
        modulo: 'CRM',
        titulo: 'Tu catálogo de productos, dentro del CRM',
        corto: 'Sube lo que vendes con precio, IVA y fotos, y úsalo en oportunidades, chats, correos y propuestas.',
        // CSV, no .xlsx: el importador rechaza el formato de Excel.
        texto: 'En <b>CRM → Productos</b> subes lo que vendes —productos o servicios— con precio, moneda, IVA, fotos y descripción, uno a uno o desde un archivo CSV (lo guardas así desde Excel o Google Sheets). En cada oportunidad agregas lo que le vas a vender y el valor del negocio se calcula solo, sin escribirlo a mano.',
        puntos: [
          'En el inbox insertas un producto con un clic: el nombre, el precio, el enlace para comprar y la foto quedan listos para enviar.',
          'Tus propuestas traen los productos de la oportunidad, con subtotal, IVA y total calculados.',
          'Cada producto puede llevar su enlace de pago (Wompi, Bold, MercadoPago o tu pasarela).',
          'Si conectas Shopify, WooCommerce o VTEX, cada pedido pagado deja sus productos en la oportunidad del cliente.',
          'Los usas en correos (bloque «Producto»), en campañas de WhatsApp y en formularios que preguntan «¿Qué te interesa?».',
          'El informe de Ventas muestra cuánto vendes de cada producto, también en el PDF.',
        ],
        donde: 'CRM → Productos',
        ilustracion: 'productos',
        relacionado: { id: 'j7YStHfsR7o', titulo: 'Propuestas comerciales con IA: créalas, envíalas y cóbralas' },
      },
      {
        id: 'campos-personalizados',
        chip: 'Campos personalizados',
        modulo: 'CRM',
        titulo: 'Campos personalizados que deciden, segmentan y se llenan solos',
        corto: 'Crea los datos que tu negocio necesita y úsalos en automatizaciones, campañas y en tu agente de IA.',
        texto: 'Crea los campos que tu negocio necesita —Presupuesto, Tipo de inmueble, Cédula, Fecha del evento— con su tipo: texto, número, moneda, fecha, lista, selección múltiple o Sí/No. Se llenan en la ficha con un clic y se piden en tus formularios.',
        puntos: [
          'En automatizaciones, los pasos «Condición» y «Rama Sí/No» preguntan por cualquier campo: «Presupuesto ≥ 100.000.000» o «Cédula está vacío».',
          'En campañas segmentas por ellos («Por filtros» → «Campo personalizado»): solo a quienes buscan en arriendo, o a quienes les interesa la piscina.',
          'Activas «Lo llena el agente de WhatsApp» y tu agente lo apunta en la ficha cuando el cliente lo dice, sin pisar lo que haya escrito tu equipo.',
          'Los usas como variables en mensajes y plantillas: {{presupuesto}} se reemplaza por el valor de cada contacto.',
        ],
        donde: 'CRM → Campos personalizados',
        ilustracion: 'campos',
        relacionado: { id: '7vltri_n8S4', titulo: 'Etiquetas en el CRM: el sistema que conecta filtros, campañas y automatizaciones' },
      },
      {
        id: 'whatsapp-en-vivo',
        chip: 'WhatsApp',
        modulo: 'Conversaciones',
        titulo: 'WhatsApp en tiempo real, con ✓✓ y buscador',
        corto: 'Los mensajes llegan sin recargar, ves si tu cliente leyó y encuentras cualquier chat por nombre o teléfono.',
        texto: 'El inbox ahora se siente como WhatsApp. Los mensajes nuevos aparecen solos, sin recargar, y si estás en otra parte de Acuarius te sale un aviso con quién escribió. Cada mensaje que envías muestra ✓ enviado, ✓✓ entregado y ✓✓ en azul cuando el cliente lo leyó.',
        puntos: [
          'Buscador de conversaciones: escribe el nombre o parte del teléfono y aparece el chat, aunque sea de hace semanas.',
          '«Descartar» manda un chat a la papelera o lo marca como spam, y una pastilla roja te dice cuántas conversaciones tienes sin leer.',
          'Envías plantillas aprobadas por Meta desde la misma conversación cuando pasaron más de 24 horas.',
          '«Iniciar WhatsApp» desde la ficha del contacto: le escribes primero, aunque nunca te haya escrito.',
          'Mensaje de ausencia con tu horario de atención, que cuenta los festivos de Colombia.',
          'Pegas pantallazos con Ctrl+V y envías documentos de hasta 50 MB.',
          'Traes el historial de tus chats exportados desde la app de WhatsApp.',
        ],
        donde: 'Conversaciones',
        ilustracion: 'whatsapp',
        relacionado: { id: 'LW-DJTNFNak', titulo: 'El inbox: todas tus conversaciones en un solo lugar' },
      },
      {
        id: 'agente-ia',
        chip: 'Agente de IA',
        modulo: 'Agente de IA',
        titulo: 'Tu agente pide los datos antes de pasarte el chat',
        corto: 'Nadie llega a tu equipo sin forma de contactarlo, y el agente ya no se equivoca con las fechas.',
        texto: 'Activa <b>«Pide nombre, teléfono y correo antes de pasar a un asesor»</b>. Cuando alguien pide hablar con tu equipo, el agente primero pide los datos que le faltan —en WhatsApp ya tiene el teléfono, así que pide nombre y correo— y en el mensaje siguiente le pasa la conversación, los dé o no.',
        puntos: [
          'Cuando un cliente dice «para el viernes», el agente tiene a mano el calendario de las dos semanas siguientes, con festivos, y escribe la fecha correcta: «viernes 6 de noviembre».',
          'Sus respuestas por WhatsApp muestran ✓✓ entregado y leído, como las de tu equipo.',
          'Si WhatsApp rechaza una respuesta del agente, la ves en rojo con el motivo.',
          'Llena los campos personalizados que le encargues mientras conversa.',
        ],
        donde: 'Conversaciones → Agentes IA',
        ilustracion: 'agente',
        relacionado: { id: 'ntRgbc6J2Nk', titulo: 'Agentes IA: atiende tus chats y califica prospectos' },
      },
      {
        id: 'enlaces-para-agendar',
        chip: 'Agenda',
        modulo: 'Agenda',
        titulo: 'Enlaces para que te agenden una reunión',
        corto: 'Comparte tu enlace, tu cliente elige una hora libre y la reunión queda en tu Google Calendar con Meet.',
        texto: 'En la Agenda, el botón <b>«Enlace para agendar»</b> crea una página tuya donde tu cliente solo ve las horas libres de tu horario y de tu Google Calendar. Elige una, deja sus datos y la reunión se crea en tu Google con su enlace de Google Meet.',
        puntos: [
          'La invitación le llega en español, con tu foto, tu logo, tu color y la hora en su propio reloj.',
          'Al agendar, tu cliente puede invitar hasta a 5 personas más.',
          'En cada enlace eliges la duración, los días y el horario, y si lleva Google Meet.',
          'Si conectaste WhatsApp, le llega una confirmación y un recordatorio una hora antes.',
          'Tus eventos de Google Calendar se ven dentro de la Agenda, y eliges una vez en cuál de tus calendarios trabaja Acuarius.',
        ],
        donde: 'CRM → Agenda → Enlace para agendar',
        ilustracion: 'agenda',
        relacionado: { id: 'ubVfMIR_Sf4', titulo: 'Agenda del CRM: tareas, reuniones y sincronización con Google Calendar' },
      },
      {
        id: 'recompra-y-satisfaccion',
        chip: 'Recompra y satisfacción',
        modulo: 'Ventas',
        titulo: 'Clientes que vuelven a comprar y alertas de satisfacción',
        corto: 'Registra la segunda compra sin perder la primera y reacciona a tiempo cuando alguien queda insatisfecho.',
        texto: 'Cuando un cliente que ya compró quiere volver a comprar, abres su ficha y pulsas <b>«Nueva compra»</b>: se crea otra oportunidad enlazada a la anterior, en el proceso de venta que elijas, y la venta que ya ganaste sigue contando en tus reportes.',
        puntos: [
          'Si alguien califica de 0 a 6 en tu encuesta de satisfacción, se crea una tarea para llamarlo en 24 horas y le avisamos al asesor y al dueño de la cuenta (lo activas en «Personalizar encuesta»).',
          'Análisis → Satisfacción muestra el NPS por asesor, la tendencia mes a mes y cada respuesta con su comentario.',
          'El día 1 de cada mes te llega un correo con el resumen de satisfacción del mes anterior.',
          'Las automatizaciones de Reservas piden la reseña al día siguiente, solo a quien asistió.',
        ],
        donde: 'Ficha del cliente → Nueva compra · Análisis → Satisfacción',
        ilustracion: 'satisfaccion',
        relacionado: { id: 'Edw6fql549A', titulo: 'Encuestas NPS automáticas: mide la satisfacción y reacciona sin intervenir' },
      },
      {
        id: 'pauta',
        chip: 'Pauta',
        modulo: 'Pauta',
        titulo: 'Meta Ads conectado y cada chat de anuncio con su campaña',
        corto: 'Conecta tu cuenta de Meta Ads y mira qué campaña trajo cada conversación de WhatsApp.',
        texto: 'Meta aprobó la aplicación de Acuarius: en <b>Plataformas de pauta</b> conectas tu cuenta publicitaria de Facebook e Instagram y ves tus campañas junto a los leads y ventas del CRM. Acuarius solo pausa un anuncio o baja un presupuesto cuando tú lo apruebas.',
        puntos: [
          'Cuando alguien te escribe desde un anuncio de clic a WhatsApp, la conversación y la ficha muestran la campaña, el conjunto y el anuncio.',
          'En las campañas de clic a WhatsApp, la columna Chats cuenta cuántas conversaciones llegaron a Acuarius por cada anuncio.',
          'Al pasar esa conversación al pipeline, el tablero de su campaña ya viene elegido.',
        ],
        donde: 'Plataformas de pauta',
        ilustracion: 'pauta',
        relacionado: { id: 'VrvLXCLwUX0', titulo: 'Conecta tus cuentas publicitarias a Acuarius: Google, Meta y LinkedIn' },
      },
    ],

    // Lo que no da para sección propia, pero se busca.
    mas: [
      { modulo: 'Celular', titulo: 'Notas de voz, fotos y PDF en la versión móvil', texto: 'Escuchas las notas de voz y ves las fotos, videos y documentos que te envían. Si instalaste Acuarius en tu teléfono, abre directo la versión móvil.' },
      { modulo: 'Celular', titulo: 'Procesos de venta desde el teléfono', texto: 'Eliges el proceso y la etapa al crear un contacto, y mueves un lead de proceso desde su ficha.' },
      { modulo: 'Marketing', titulo: 'Fuentes: cuánto trae cada una', texto: 'Cada formulario, página de Meta o webhook muestra sus leads de los últimos 30 días, y la que deja de traer sube marcada «Sin leads».' },
      { modulo: 'Marketing', titulo: 'Formularios con política de datos', texto: 'Una casilla obligatoria para aceptar tu política de tratamiento de datos, y la fecha en que la aceptó en la ficha. Además, duplicas formularios con un clic.' },
      { modulo: 'Campañas', titulo: 'Sabes a quién no le llegó tu campaña', texto: 'Si WhatsApp no entrega un mensaje, se cuenta como fallido con su motivo. Y las campañas de miles de contactos salen por tandas sin trabarse.' },
      { modulo: 'Automatizaciones', titulo: 'Plantillas y esperas a tu medida', texto: 'El paso «Enviar WhatsApp» usa tus plantillas aprobadas, y «Esperar» acepta minutos, horas o días exactos.' },
      { modulo: 'Reservas', titulo: 'Formulario de reserva a tu medida', texto: 'Pide los datos que necesites al reservar, con casilla de términos y listas de personas. Y duplicas servicios.' },
      { modulo: 'CRM', titulo: 'Foto de referencia en cada lead', texto: 'Sube el producto que pidió o el diseño que quiere: aparece como portada de su tarjeta en el tablero.' },
      { modulo: 'Equipo', titulo: 'Quién recibe leads del reparto', texto: 'Apaga el reparto para quien solo revisa. Y cada cambio de responsable queda en el historial del lead.' },
      { modulo: 'Análisis', titulo: 'El informe de Marketing cuenta todos los canales', texto: 'WhatsApp y SMS entran junto al correo: cuántos mensajes salieron y cuántos no llegaron.' },
      { modulo: 'SEO', titulo: 'Reporte de tráfico con fechas y dispositivos', texto: 'Filtra por 7, 30 o 90 días y ve las visitas por celular, computador o tableta y por edad, también en el enlace que compartes.' },
      { modulo: 'Inicio', titulo: 'Cada módulo con su pantalla', texto: 'CRM, Marketing, Conversaciones y Análisis muestran todo lo que tienen en tarjetas, con atajos directos.' },
    ],

    arreglos: [
      'Las notas de voz se escuchan en Safari y ya no se cortan cuando llega otro mensaje.',
      'Las campañas de WhatsApp con plantilla ya no piden un mensaje aparte, y la imagen se ve completa en la vista previa.',
      'En «Uno a uno» aparecen todos tus contactos, también los importados sin proceso.',
      '«Abrir otra oportunidad» funciona en el mismo proceso en el que ya está la persona.',
      'El anuncio de WhatsApp llega a la ficha aunque el contacto ya existiera.',
      'Las propuestas con IA usan los datos de tu negocio en vez de suponer el giro.',
      'Los avisos del celular te dicen en cuántos dispositivos los tienes activos.',
    ],
  },
];
