// Fase 2 del menú · /agenda/ y /agente-ia/calificacion-y-reparto/.
//
// Cada afirmación sale del código de Acuarius a 02-11-2026:
//   Agenda del CRM ........ api/agenda.js, public/app.js (agnRender, agnModalOpen)
//   Reservas .............. api/bookings.js, api/booking-public.js, api/_reservas.js,
//                           api/_formulario-reserva.js, api/_reservas-auto.js,
//                           api/_reservas-agente.js, public/app.js (rsv*), public/reservar.html
//   Enlaces de reunión .... api/_enlaces-reunion.js, api/_reunion-wa.js
//   Calificación .......... api/_qualify.js, api/_inbox-engine.js, public/index.html (pasos 4 y 5)
//   Reparto ............... api/_assign.js, api/_historial-responsable.js, public/app.js (asg*, team*)
//   Seguimiento ........... api/_followup.js, public/index.html (Seguimiento automático)
// y de public/novedades.json.
//
// Fuera a propósito: precios, planes y cupos; Messenger, TikTok y Lead Ads
// (aparecen en la lista de fuentes del reparto, pero no se nombran aquí);
// nombres de clientes reales. Los ejemplos por negocio son inventados.

export const FILAS = [
  { url: '/agenda/', cluster: 8, nivel: 'Producto', intencion: 'Comercial', estado: 'publicada',
    kw: 'agenda de citas online',
    title: 'Agenda de citas online con reservas | Acuarius',
    description: 'Agenda de citas online: tu página de reservas, recordatorios por correo y WhatsApp, y cada cita en tu CRM y en tu Google Calendar, sin ir y venir por chat.',
    h1: 'Agenda de citas online: reservas, reuniones y tareas en tu CRM',
    miga: 'Agenda y reuniones' },
  { url: '/agente-ia/calificacion-y-reparto/', cluster: 8, nivel: 'Producto', intencion: 'Comercial', estado: 'publicada',
    kw: 'calificación de leads',
    title: 'Calificación de leads y reparto automático | Acuarius',
    description: 'Calificación de leads en WhatsApp: el agente hace tus preguntas, el sistema decide quién califica y cada lead llega al asesor del tablero que le toca.',
    h1: 'Calificación de leads y reparto: cada contacto, al asesor que le toca',
    miga: 'Calificación y reparto' },
];

export const CONTENIDO = {
  // ══════════════════════════════════════════════════════════════════════════
  '/agenda/': {
    badge: 'Agenda, reservas y reuniones',
    sub: 'Tus clientes eligen hora en una página propia, tu equipo ve sus citas y tareas en un solo calendario y cada reserva crea el contacto en tu CRM. Con recordatorios para que la gente llegue.',
    secciones: [
      { tipo: 'texto', label: 'Qué resuelve', h2: '¿Qué es una agenda de citas online y qué cambia en tu negocio?',
        parrafos: [
          'Una <b>agenda de citas online</b> es una página donde tu cliente elige el servicio, el día y la hora sin escribirte para coordinar. Solo ve las horas que de verdad están libres, deja sus datos y recibe la confirmación al instante.',
          'Coordinar por chat cuesta cuatro o cinco mensajes por cita, y en cada uno el cliente se puede enfriar. En Acuarius la cita entra a la agenda de quien atiende, se escribe en su Google Calendar y el contacto queda en tu <a href="/crm/">CRM</a>.',
          'Acuarius tiene tres piezas para esto, y conviene no mezclarlas: la <b>Agenda</b> del CRM, donde vive el trabajo del equipo; <b>Reservas</b>, para negocios que venden citas de servicios; y los <b>enlaces de reunión</b>, para que un prospecto agende una llamada contigo.',
        ] },
      { tipo: 'tabla', label: 'Tres piezas', h2: '¿Agenda, Reservas o enlace de reunión? Cuándo usar cada una',
        cab: ['', 'Agenda del CRM', 'Reservas', 'Enlace de reunión'],
        filas: [
          ['Para qué sirve', 'Tareas y reuniones de tu equipo, ligadas a cada lead', 'Que tus clientes reserven un servicio: una consulta, un corte, una clase', 'Que un prospecto agende una reunión contigo'],
          ['Dónde está', 'CRM → Agenda', 'Marketing → Reservas', 'CRM → Agenda → «Enlace para agendar»'],
          ['Quién atiende', 'Cada asesor', 'Personas o sitios: una doctora, el consultorio 2, la sala de fotos', 'Tú, con tu horario'],
          ['Google Calendar', 'Muestra tus eventos y escribe tus reuniones', 'Cada persona puede conectar el suyo', 'Obligatorio: sin él no ofrece horas'],
        ],
        nota: 'Las tres escriben en la misma agenda, así que todo lo ves en un solo calendario.' },
      { tipo: 'texto', label: 'Agenda del CRM', h2: '¿Qué hace la Agenda del CRM?',
        parrafos: [
          'La Agenda muestra en un calendario mensual las tareas y reuniones de tu equipo, y al lado el detalle del día. Con <b>Agregar actividad</b> creas una <b>Tarea</b> o una <b>Reunión</b> ligada a un lead, y a la reunión puedes invitarlo por Google Calendar.',
          'Si conectas Google Calendar, tus reuniones se crean, se mueven y se borran también allí, y tus eventos de Google aparecen en la Agenda con su propio color. Lo conecta una vez para toda la cuenta el dueño o un administrador, y con la etiqueta «Google Calendar» eliges el calendario o lo desconectas.',
          'Con el desplegable de asesores ves el calendario de una persona o el de «Todo el equipo». Y si una etapa de tu <a href="/crm/pipeline-de-ventas/">pipeline de ventas</a> significa que hay una visita, márcala con «Pedir cita»: al mover un lead ahí se abre la ventana para agendarla. Al cerrar una cita marcas «¿Asistió?» y cómo te fue.',
        ] },
      { tipo: 'tarjetas', label: 'Reservas', h2: 'Cómo funciona tu página de reservas',
        items: [
          { t: 'Servicios', d: 'Cada servicio lleva nombre, descripción, duración, precio si quieres, color e icono. Con «Duplicar» armas una variante sin configurarlo todo otra vez.' },
          { t: 'Quién atiende', d: 'Una persona o un sitio, cada uno con su propia agenda: dos citas nunca se pisan. Puede seguir el horario del negocio o tener uno propio.' },
          { t: 'Horario y reglas', d: 'Tramos por día, días especiales, ratos bloqueados para todo el negocio o una persona, respiro entre citas, antelación mínima y hasta cuándo se puede reservar.' },
          { t: 'Tu marca', d: 'Tu logo, tu color, el título de la página, la pregunta con la que recibes al cliente y una dirección con tu nombre.' },
          { t: 'Formulario a tu medida', d: 'Pide lo que necesites: textos, números, opciones, fechas, aceptar tus términos o una lista de personas con «Agregar otra persona». Las respuestas llegan a la cita, a la ficha y a Google Calendar.' },
          { t: 'Sin choques', d: 'La página nunca ofrece una hora que no quepa entera ni una ya tomada. Si dos piden la misma a la vez, solo una la consigue. Cada reserva crea el contacto con la fuente «Reserva en línea».' },
        ] },
      { tipo: 'texto', label: 'Google Calendar', h2: '¿Cómo se conecta el Google Calendar de cada persona?',
        parrafos: [
          'En Reservas → Quién atiende, cada persona tiene un botón <b>Calendario</b>. Si es tu calendario, usas el Google que ya conectaste en la Agenda. Si es el de otra persona, le mandas un enlace para conectar el suyo desde el celular, sin cuenta en Acuarius. Desde ese momento, lo que tenga como «Ocupado» en Google deja de ofrecerse y cada cita nueva le llega a su calendario. Si Google no responde, sus horas no se ofrecen: mejor eso que citar a alguien encima de otro compromiso.',
        ] },
      { tipo: 'texto', label: 'Recordatorios', h2: '¿Cómo bajan las inasistencias los recordatorios y la asistencia?',
        parrafos: [
          'En Reservas → Recordatorios eliges cuándo avisar: un día antes, 4 horas, 2 horas o 1 hora antes. Cada aviso sale una sola vez por cita, quien ya canceló no recibe nada y, si se juntan dos, solo sale el más cercano.',
          'El correo sale siempre a quien dejó su correo, con la dirección y el enlace para cambiar o cancelar. Por WhatsApp sale solo el aviso más cercano, si tienes tu número conectado al <a href="/crm/whatsapp/">CRM con WhatsApp</a>, y necesita una plantilla aprobada por Meta: Acuarius la escribe como mensaje de utilidad y la manda a revisión con <b>Crear la plantilla</b>. El envío lo cobra Meta a tu cuenta.',
          'Lo que pasa después de la cita se arma en <a href="/automatizaciones/">Automatizaciones</a>, con cuatro disparadores de Reservas: cuando alguien reserva, cancela, asiste o no asiste. Una cita cuenta como asistida al terminar, salvo que la cierres marcando «No asistió». Desde Recordatorios creas con un clic «Pedir reseña un día después».',
        ] },
      { tipo: 'texto', label: 'Agente de IA', h2: '¿El agente de IA puede agendar citas por WhatsApp?',
        parrafos: [
          'Sí, si tienes Reservas. Cuando alguien pide una cita por chat, tu <a href="/agente-ia/">agente de IA para WhatsApp</a>, que antes puede <a href="/agente-ia/calificacion-y-reparto/">calificar al lead y repartirlo</a>, le ofrece horas libres de verdad, confirma el día y la hora y deja la cita agendada, igual que si hubiera reservado en tu página. La persona recibe en el chat la confirmación con un enlace para cancelar. Si escribe «no puedo ir, ¿me la pasas al jueves?», el agente la mueve o la cancela.',
          'Solo agenda los servicios en los que marcaste «El agente del chat puede agendarlo solo». Si alguien pide otro, pasa la conversación a tu equipo. Y la hora la comprueba el sistema antes de guardarla: si otra persona la tomó mientras tanto, el agente no confirma nada y ofrece otras.',
        ] },
      { tipo: 'texto', label: 'Enlaces de reunión', h2: '¿Y si quieres que un prospecto agende una reunión contigo?',
        parrafos: [
          'Para eso está el enlace de reunión, tu agenda personal. En CRM → Agenda pulsas «Enlace para agendar» y creas direcciones como app.acuarius.app/reunion/tu-nombre, que solo muestran tus horas libres. La reunión se crea en tu Google con Meet, quien agenda puede sumar hasta 5 invitados y entra al CRM como lead asignado a ti. Sin Google Calendar conectado, el enlace no ofrece horas. Todo el detalle está en <a href="/novedades/enlace-para-agendar-reuniones/">enlace para agendar reuniones</a>.',
        ] },
      { tipo: 'tabla', label: 'Ejemplos', h2: 'Cómo usa la agenda cada tipo de negocio',
        cab: ['Negocio', 'Cómo lo arma', 'Qué gana'],
        filas: [
          ['Clínica', 'Servicios «Valoración de ortodoncia» de 30 min y «Limpieza» de 45 min; cada odontóloga en «Quién atiende» con su Google. <a href="/crm/clinicas/">CRM para clínicas</a>.', 'Recordatorio un día antes y 2 horas antes; a quien marca «No asistió» se le ofrece otra hora por automatización.'],
          ['Peluquería o barbería', 'Un servicio por corte, cada barbero con horario propio y la tarde del martes bloqueada para uno solo.', 'El agente de WhatsApp agenda los cortes y deja sin marcar el tinte, que prefiere cotizar una persona.'],
          ['Restaurante', 'Un servicio «Mesa para 4» de 90 minutos y cada mesa o zona como un sitio en «Quién atiende». <a href="/crm/restaurantes/">CRM para restaurantes</a>.', 'No se reserva dos veces la misma mesa y el festivo se cierra en «Días especiales».'],
          ['Inmobiliaria', 'Etapa «Visita» con «Pedir cita» en el pipeline y un enlace de reunión «Asesoría de compra». <a href="/crm/inmobiliarias/">CRM inmobiliario</a>.', 'Cada visita queda en la agenda del asesor asignado y, con Google Calendar conectado, también en el calendario.'],
          ['Educación', 'Servicio «Clase de prueba» con formulario que pide edad del estudiante y programa de interés.', 'Las respuestas llegan a la cita y a la ficha del contacto, y el asesor llega a la clase sabiendo qué busca.'],
        ],
        nota: 'Servicios, horarios y nombres de ejemplo.' },
      { tipo: 'pasos', label: 'Cómo empezar', h2: 'Tu página de reservas funcionando en una tarde',
        items: [
          { t: 'Conecta Google Calendar', d: 'En CRM → Agenda pulsa «Conectar Google Calendar». Lo hace el dueño o un administrador de la cuenta.' },
          { t: 'Crea tus servicios', d: 'En Marketing → Reservas → Servicios pulsa «+ Nuevo servicio». Pon duración, precio si quieres, y quién lo presta.' },
          { t: 'Di quién atiende', d: 'En «Quién atiende» agrega personas o sitios. Con «Calendario», cada persona conecta su Google.' },
          { t: 'Ajusta horario y página', d: 'En «Horario y página» define tramos, días especiales, reglas y tu marca. Personaliza la dirección.' },
          { t: 'Pide lo que necesites', d: 'En «Formulario» agrega tus campos y decide si el WhatsApp o el correo son obligatorios.' },
          { t: 'Activa los recordatorios', d: 'En «Recordatorios» marca cuándo avisar y pulsa «Crear la plantilla» para WhatsApp.' },
          { t: 'Enciende y comparte', d: 'Activa «Página activa», abre «Ver la página» para probar una reserva y pulsa «Copiar» para compartir el enlace.' },
        ] },
      { tipo: 'texto', label: 'Errores comunes', h2: 'Errores comunes al montar tu agenda de citas',
        parrafos: [
          '<b>Un servicio sin nadie que lo preste.</b> Si un servicio no tiene a nadie en «Quién atiende», no se puede reservar. Reservas te lo marca en rojo.',
          '<b>Vacaciones marcadas como «Disponible» en Google.</b> Los eventos de todo el día nacen como «Disponible» en Google Calendar y no bloquean nada. Márcalos como «Ocupado» o ciérralos en «Días especiales».',
        ] },
    ],
    faq: [
      { q: '¿Qué es una agenda de citas online?', a: 'Es una página donde tus clientes eligen el servicio, el día y la hora de su cita sin escribirte para coordinar. En Acuarius solo ofrece horas libres de verdad, envía la confirmación y deja la cita en tu agenda y en tu CRM.' },
      { q: '¿Necesito Google Calendar para usar Reservas?', a: 'No es obligatorio: las citas viven en la Agenda de Acuarius. Conectarlo evita ofrecer lo que ya está ocupado en Google. El enlace de reunión, en cambio, sí lo necesita.' },
      { q: '¿Mi cliente puede cambiar o cancelar su cita?', a: 'Sí. Desde el enlace del correo de confirmación elige otra hora libre del mismo servicio o cancela, y el turno vuelve a quedar libre. También puede pedírselo a tu agente de IA por WhatsApp.' },
      { q: '¿Cómo envío recordatorios por WhatsApp?', a: 'Conecta tu WhatsApp, marca cuándo avisar en Reservas → Recordatorios y pulsa «Crear la plantilla». Cuando Meta la aprueba, el aviso más cercano a la cita sale también por WhatsApp. El correo sale siempre.' },
      { q: '¿Puedo pedir datos extra al reservar?', a: 'Sí. En la pestaña «Formulario» agregas campos de texto, número, fecha, opciones, una casilla para aceptar tus términos o una lista de personas. También puedes pedir tus <a href="/novedades/campos-personalizados-crm/">campos personalizados</a>.' },
      { q: '¿En qué se diferencia de un enlace para agendar reuniones?', a: 'Reservas es para negocios que venden citas de servicios, con varias personas o sitios atendiendo. El enlace de reunión es tu agenda personal con Google Meet, para demos o asesorías. Puedes usar los dos.' },
    ],
    cta: { h2: 'Que tus clientes reserven solos', sub: 'Crea tu cuenta, arma tus servicios y comparte tu página de reservas hoy mismo.' },
  },

  // ══════════════════════════════════════════════════════════════════════════
  '/agente-ia/calificacion-y-reparto/': {
    badge: 'Calificación y reparto de leads',
    sub: 'Tu agente de IA hace las preguntas que tu equipo necesita, una regla fija decide quién califica y cada lead llega al tablero y al asesor que le toca. Con aviso, tarea y registro de cada cambio.',
    secciones: [
      { tipo: 'texto', label: 'El problema', h2: '¿Qué es la calificación de leads y por qué repartir sin calificar sale caro?',
        parrafos: [
          'La <b>calificación de leads</b> es averiguar, antes de que un asesor llame, si un contacto encaja con lo que vendes: presupuesto, zona, plazo, servicio. Sin ella, tu equipo pasa la mañana llamando a gente que solo preguntaba y llega tarde a quien estaba listo para comprar.'
          , 'El reparto es la otra mitad. Un lead calificado que cae sin dueño, o en el tablero equivocado, es un lead que nadie llama. En Acuarius las dos cosas van juntas: el <a href="/agente-ia/">agente de IA</a> averigua dentro de la conversación, el sistema decide y el lead llega a una persona con su resumen.',
        ] },
      { tipo: 'pasos', label: 'Cómo funciona', h2: 'Del primer mensaje al asesor correcto',
        items: [
          { t: 'El agente pregunta', d: 'Hace tus preguntas de a una, después de responder lo que le preguntaron, y no repite lo que la persona ya contó.' },
          { t: 'El sistema decide', d: 'Con todas las respuestas, una regla fija marca el lead como calificado o no calificado. Mientras falte alguna, sigue pendiente.' },
          { t: 'Elige el tablero', d: 'Si lo configuraste, manda el lead al proceso de venta que corresponde a lo que busca.' },
          { t: 'Asigna un asesor', d: 'Uno fijo, por turnos entre quienes atienden ese tablero o según la regla de la fuente.' },
          { t: 'Avisa y deja tarea', d: 'El asesor recibe el correo «Nuevo lead para ti» y la tarea de primer contacto con su plazo.' },
        ] },
      { tipo: 'texto', label: 'Calificación', h2: '¿Cómo califica el agente sin que la IA decida?',
        parrafos: [
          'En el editor del agente, en el paso <b>Calificación</b>, activas «Calificar antes de pasar al comercial» y agregas hasta ocho preguntas. Cada una tiene dos casillas: <b>Qué debe averiguar</b>, por ejemplo «en qué zona busca», y <b>Qué respuesta lo da por bueno</b>, por ejemplo «Chapinero o Usaquén». La segunda es opcional: vacía, cualquier respuesta vale.',
          'La IA no decide quién pasa. Solo reporta lo que le contestaron y si cumple cada condición. El veredicto lo da una regla del sistema que no cambia de opinión entre mensajes: mientras falte una respuesta, el lead sigue <b>pendiente</b>. Un «sin información» no cuenta como respuesta, así que nadie llega calificado sin haber dado el dato.',
          'Con «Califica si cumple al menos» decides si debe cumplir todas o un mínimo, por ejemplo 3 de 4. Si alguien cambia un dato más adelante, el veredicto se recalcula y se quita la etiqueta contraria: nadie queda marcado como las dos cosas.',
        ] },
      { tipo: 'tabla', label: 'Qué pasa después', h2: 'Lo que hace Acuarius con cada veredicto',
        cab: ['Veredicto', 'En la ficha', 'En el pipeline', 'Asesor'],
        filas: [
          ['Pendiente', 'Las respuestas que ya tiene', 'Sin cambios', 'Todavía ninguno: el reparto espera al veredicto'],
          ['Calificado', 'Etiqueta «calificado», resumen de cada respuesta y una nota en el historial', 'Pasa a la etapa que elegiste, si seguía en la primera, y al tablero de su ruta', 'Se asigna y, si marcaste la opción, el agente deja de responder y la conversación pasa a esa persona'],
          ['No calificado', 'Etiqueta «no-calificado» y el mismo resumen', 'Se queda donde estaba', 'No se le carga a nadie de forma automática'],
        ],
        nota: 'Las etiquetas y la etapa las eliges tú. La etapa solo avanza: nunca baja a alguien que un asesor ya movió a mano.' },
      { tipo: 'texto', label: 'Enrutado', h2: '¿Cómo llega cada lead al tablero que le toca?',
        parrafos: [
          'Si tienes varios procesos de venta, en el paso <b>Proceso</b> activas «Enviar a un proceso de venta según lo que busque». Escribes qué debe averiguar el agente para decidirlo, por ejemplo «si quiere comprar o arrendar», y agregas las opciones: el nombre, a qué proceso va y quién lo atiende.',
          'El agente solo reporta cuál opción encaja. A qué tablero va cada una lo decides tú en esa pantalla, donde se puede revisar y cambiar sin tocar el entrenamiento. Si no lo tiene claro, no la inventa y sigue conversando. Si la etapa elegida no existe en el tablero destino, el lead entra en la primera etapa: nunca queda en una columna que no se ve.',
        ] },
      { tipo: 'tabla', label: 'Ejemplos', h2: 'Calificación y reparto según tu tipo de negocio',
        cab: ['Negocio', 'Qué averigua el agente', 'A dónde va y quién lo atiende'],
        filas: [
          ['Inmobiliaria', 'Compra o arriendo, zona, presupuesto y plazo. Para arriendo, «cumple si» es hasta 3 millones; para venta, más de 300 millones.', 'Arriendo al tablero «Arriendos», por turnos entre las tres personas que lo llevan. Venta al tablero «Ventas», fijo a la gerente comercial. <a href="/crm/inmobiliarias/">CRM inmobiliario</a>.'],
          ['Clínica', 'Qué procedimiento busca, si ya tuvo valoración y en qué sede le queda mejor.', 'Ortodoncia a un tablero, estética a otro, cada uno con su equipo. Si tienes <a href="/agenda/">Reservas</a>, el agente le ofrece la valoración en una hora libre. <a href="/crm/clinicas/">CRM para clínicas</a>.'],
          ['Educación', 'Qué programa le interesa, para cuándo quiere empezar y si estudiaría en modalidad virtual o presencial.', 'Pregrado, posgrado y cursos cortos en tableros distintos, cada uno con sus asesores de admisiones.'],
        ],
        nota: 'Preguntas, cifras y tableros de ejemplo.' },
      { tipo: 'tarjetas', label: 'Reparto', h2: '¿Cómo se reparten los leads entre tu equipo?',
        items: [
          { t: 'Por fuente', d: 'En Configuración → Equipo → «Reparto automático de leads» eliges, para WhatsApp, Instagram, formularios web, webhook, tienda en línea, importación, creados a mano o cualquier otra fuente: «Sin asignar», «En turnos» o «Fijo» a una persona. Cada fuente lleva su propio turno.' },
          { t: 'Quién recibe', d: 'Cada persona del equipo muestra «Recibe leads del reparto». Apágalo para quien solo revisa: sale de todos los turnos, aunque una regla «Fijo» que la nombre se respeta.' },
          { t: 'Asesores por tablero', d: 'En Configuración → Equipo, debajo de cada persona, marcas qué tableros atiende. «Marcar donde ya trabaja» te lo propone según sus leads de hoy.' },
          { t: 'Lo que pasas tú', d: 'Si atiendes una conversación del inbox y la pasas al pipeline, el lead queda a tu nombre. En un lead sin dueño, cualquiera puede pulsar «Asignármelo».' },
          { t: 'Formularios e importaciones', d: 'Cada formulario dice quién atiende sus leads, y uno solo puede alimentar varios tableros según una respuesta. Al importar eliges regla, persona, turnos o nadie. Más en <a href="/formularios/">formularios</a>.' },
        ] },
      { tipo: 'texto', label: 'Avisos', h2: '¿Cómo se entera el asesor de que tiene un lead nuevo?',
        parrafos: [
          'Al asignarse un lead, el asesor recibe un correo «Nuevo lead para ti» con el nombre, los datos de contacto y el botón para abrir el CRM. Al dueño de la cuenta no se le manda ese correo, porque lo ve todo: le queda la tarea.',
          'Antes del correo se crea la <b>tarea de primer contacto</b>, con el plazo que elijas, para que aparezca en su lista de pendientes y en el resumen diario por correo. Y si el contacto vuelve a escribir después de que el agente pasó la conversación, a quien lo tiene a su nombre le llega el aviso en la campana y en el celular, si activó los avisos en Configuración → Notificaciones. Con el <a href="/novedades/whatsapp-en-tiempo-real/">inbox de WhatsApp en tiempo real</a>, el mensaje aparece sin recargar.',
        ] },
      { tipo: 'texto', label: 'Historial', h2: '¿Queda registro de quién tenía cada lead?',
        parrafos: [
          'Sí. Cada cambio de responsable deja una línea en el historial de la ficha, por ejemplo «Responsable: Camila → Andrés, por Reparto automático». Dice de quién pasó a quién y quién lo decidió: una persona, el reparto, la regla de la fuente o la API.',
          'Esas líneas no se pueden borrar y no cuentan como actividad en los reportes de productividad. La calificación deja su propia nota: «Calificado por el agente de whatsapp (3 de 4)», el interés detectado y las respuestas de cada pregunta. Con el filtro por asesor del <a href="/crm/pipeline-de-ventas/">pipeline de ventas</a> ves la cartera de cada persona, y el perfil de Ventas solo ve los leads que le asignaron.',
        ] },
      { tipo: 'pasos', label: 'Cómo empezar', h2: 'Configura la calificación y el reparto paso a paso',
        items: [
          { t: 'Invita a tu equipo', d: 'En Configuración → Equipo. Si trabajas solo, todos los leads nuevos se te asignan a ti.' },
          { t: 'Define el reparto', d: 'En «Reparto automático de leads» elige el modo de cada fuente y pulsa «Guardar reparto».' },
          { t: 'Marca los tableros', d: 'Debajo de cada persona, pulsa «cambiar» y marca los procesos de venta que atiende.' },
          { t: 'Escribe las preguntas', d: 'En Agentes IA, abre tu agente y ve al paso «Calificación». Agrega cada pregunta y lo que la da por buena.' },
          { t: 'Enruta si hace falta', d: 'En el paso «Proceso» activa el envío por interés y asigna un tablero a cada opción.' },
          { t: 'Pruébalo', d: 'En «Probar» escríbele como un cliente y revisa a qué proceso te manda, si te califica y quién te recibiría.' },
          { t: 'Ajusta el seguimiento', d: 'En «Seguimiento automático» elige el plazo del primer contacto y, si quieres, «Solo para los leads que califican». Pulsa «Guardar seguimiento».' },
        ] },
      { tipo: 'texto', label: 'Errores comunes', h2: 'Errores comunes al calificar y repartir leads',
        parrafos: [
          '<b>Escribir otra pregunta en «Qué respuesta lo da por bueno».</b> Esa casilla es la condición, no una segunda pregunta. Si quieres averiguar otra cosa, agrégala como pregunta aparte.',
          '<b>Hacer un interrogatorio.</b> Ocho preguntas es el máximo, no la meta. Con tres o cuatro bien elegidas el agente califica sin cansar a nadie. Para guardar más datos en la ficha, usa <a href="/novedades/campos-personalizados-crm/">campos personalizados</a> que llena el agente.',
          '<b>No marcar quién atiende cada tablero.</b> Si nadie lo tiene marcado, decide la regla de la fuente y el lead puede ir a quien no lleva ese proceso. Nunca se queda sin dueño, pero sí con el dueño equivocado.',
        ] },
    ],
    faq: [
      { q: '¿Qué es la calificación de leads?', a: 'Es averiguar si un contacto encaja con lo que vendes antes de que un asesor lo llame: presupuesto, zona, plazo o servicio. En Acuarius la hace tu agente de IA dentro de la conversación y el veredicto lo da una regla del sistema.' },
      { q: '¿La IA decide quién califica?', a: 'No. El agente solo reporta las respuestas y si cada una cumple tu condición. Quién califica lo decide una regla fija: mientras falte una respuesta el lead sigue pendiente, y con todas cuenta cuántas cumple frente al mínimo que pusiste.' },
      { q: '¿Qué pasa con un lead que no califica?', a: 'Queda con la etiqueta «no-calificado», el resumen de sus respuestas y en su etapa, sin cargárselo a ningún asesor de forma automática. Puedes revisarlo, asignarlo a mano o trabajarlo con una <a href="/automatizaciones/">automatización</a>.' },
      { q: '¿Puedo mandar arriendos y ventas a equipos distintos?', a: 'Sí. Con el enrutado del agente, cada interés va a su tablero, y en Configuración → Equipo marcas quién atiende cada uno. El reparto rota solo entre esas personas. Lo mismo puedes hacer con un formulario web.' },
      { q: '¿El asesor recibe un aviso?', a: 'Sí: un correo con los datos del lead y una tarea de primer contacto con su plazo. Si el cliente vuelve a escribir después de que el agente pasó la conversación, le llega el aviso a la campana y, si activó las notificaciones, al celular.' },
      { q: '¿Funciona en Instagram además de WhatsApp?', a: 'Sí. La calificación es del agente, no del canal: el mismo agente califica igual en WhatsApp y en los mensajes directos de Instagram. Lo ves en el <a href="/crm/whatsapp/">CRM con WhatsApp</a>.' },
    ],
    cta: { h2: 'Que cada lead llegue calificado y con dueño', sub: 'Crea tu cuenta, configura las preguntas de tu agente y tu reparto, y pruébalo antes de conectar tu WhatsApp.' },
  },
};
