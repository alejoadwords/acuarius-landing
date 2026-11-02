export const ARTICULO = {
  slug: 'enlace-para-agendar-reuniones',
  kw: 'enlace para agendar reuniones',
  title: 'Enlace para agendar reuniones con Google Meet y tu marca',
  description: 'Crea un enlace para agendar reuniones que solo muestra tus horas libres de Google Calendar, crea el Meet, avisa por WhatsApp y guarda el lead en tu CRM.',
  h1: 'Enlace para agendar reuniones: que tu cliente elija la hora sin ir y venir por chat',
  modulo: 'Agenda',
  publicado: '2026-11-02',
  edicion: 1,
  resumen: 'Comparte un enlace con tus horas libres. Quien lo abre elige día y hora, la reunión se crea en tu Google Calendar con Meet y la persona entra al CRM.',
  respuesta: 'Un enlace para agendar reuniones es una página propia, como app.acuarius.app/reunion/tu-nombre-demo, que muestra solo las horas en que estás libre según tu horario y tu Google Calendar. La persona elige día y hora y deja sus datos. La reunión se crea en tu Google con enlace de Meet, le llega la invitación por correo y entra a tu CRM como lead asignado a ti.',
  video: { id: 'ubVfMIR_Sf4', titulo: 'Agenda del CRM: tareas, reuniones y sincronización con Google Calendar', subido: '2026-08-07', segundos: 144, propio: false },
  ilustracion: 'agenda',
  secciones: [
    {
      h2: '¿Por qué coordinar una reunión por chat hace perder ventas?',
      html: '<p>Coordinar una reunión por chat suele tomar cuatro o cinco mensajes y, en cada uno, el cliente puede enfriarse. Mientras tanto, respondes desde el celular sin ver tu calendario y a veces citas a dos personas a la misma hora.</p>' +
        '<p>Cuando la persona elige la hora en el momento en que tiene ganas de hablar contigo, la reunión queda agendada antes de que se le olvide.</p>',
    },
    {
      h2: '¿Qué es un enlace para agendar reuniones en Acuarius?',
      html: '<p>Un enlace para agendar reuniones es una dirección que compartes por WhatsApp, correo o en tu firma, y que ofrece solo tus horas libres. Lo creas en la Agenda del CRM con el botón «Enlace para agendar».</p>' +
        '<p>En cada enlace configuras:</p>' +
        '<ul>' +
        '<li><b>Nombre de la reunión</b> y una <b>descripción</b> opcional que ve quien agenda.</li>' +
        '<li><b>Dirección del enlace</b>: la parte final de app.acuarius.app/reunion/…</li>' +
        '<li><b>Duración</b>: 15, 20, 30, 45 o 60 minutos, o 1,5 y 2 horas.</li>' +
        '<li><b>Qué días</b> y <b>entre</b> qué horas atiendes.</li>' +
        '<li><b>Se puede agendar con</b>: la antelación mínima, desde «Sin mínimo» hasta «2 días antes».</li>' +
        '<li><b>Hasta</b>: qué tan lejos puede agendar, de «La próxima semana» a «Los próximos 2 meses».</li>' +
        '<li><b>Entra al tablero</b>: en qué tablero del CRM cae el lead.</li>' +
        '<li><b>Cómo te ven</b>: tu nombre y tu foto.</li>' +
        '<li>Si se crea <b>enlace de Google Meet</b>, tu <b>marca</b> (logo y color), el <b>correo de confirmación</b> y los <b>avisos por WhatsApp</b>.</li>' +
        '</ul>' +
        '<p>Puedes tener varios enlaces, por ejemplo una demo de 30 minutos y una llamada de 15, y pausar cualquiera desmarcando «Enlace activo».</p>',
    },
    {
      h2: '¿Qué ve tu cliente al abrir el enlace?',
      html: '<p>Tu cliente ve una página sencilla con tu foto, «Reunión con» tu nombre, el nombre de la reunión, la duración y, si lo activaste, la marca de Google Meet. Arriba aparece tu logo y los botones salen con tu color.</p>' +
        '<ol>' +
        '<li>Elige un día. Solo se muestran los días con horas libres.</li>' +
        '<li>Elige la hora. Las horas salen en tu zona horaria y, si la persona está en otro país, debajo de cada una ve la hora donde está ella.</li>' +
        '<li>Escribe su nombre, su correo y su WhatsApp. Puede contar de qué quiere hablar y, en «¿Viene alguien más?», invitar hasta 5 personas con su correo.</li>' +
        '<li>Pulsa «Agendar reunión» y ve la confirmación con el enlace de Meet.</li>' +
        '</ol>' +
        '<p>Si alguien toma esa misma hora un segundo antes, la página le pide elegir otra. Nunca quedan dos reuniones a la misma hora desde tus enlaces.</p>',
    },
    {
      h2: '¿Cómo usa tu Google Calendar y Google Meet?',
      html: '<p>El enlace necesita tu Google Calendar conectado: de ahí lee lo que tienes ocupado y ahí crea la reunión. Si un evento ya está en tu calendario, esa hora no se ofrece.</p>' +
        '<p>El calendario se elige una vez para toda la cuenta, en la Agenda, pulsando la etiqueta «Google Calendar». Ese es el que se mira para saber cuándo estás ocupado y donde se crean las reuniones. Desde la misma etiqueta lo puedes desconectar.</p>' +
        '<p><b>Sin Google Calendar conectado, el enlace no ofrece ninguna hora</b>: la página muestra «Este enlace no está disponible por ahora». Lo mismo pasa si Google no responde. Acuarius prefiere no ofrecer horas antes que citarte encima de algo que ya tenías apuntado.</p>' +
        '<p>Al agendar, la reunión queda en tu calendario con el Meet, el WhatsApp de la persona y su nota, y el contacto entra como lead con fuente «Enlace de reunión», asignado a ti y en el tablero que elegiste.</p>',
    },
    {
      h2: '¿Qué correo le llega a quien agenda?',
      html: '<p>La invitación la manda Acuarius, en español, no el correo genérico de Google. Lleva tu foto y tu nombre, la hora en el reloj de quien agenda, el botón de Google Meet, el botón para cancelar y la invitación para agregarla a su calendario. A cada invitado le llega también su invitación con el enlace de la reunión.</p>' +
        '<p>Con tu logo y tu color, el correo de confirmación, el de cancelación, el de los invitados y la página salen con tu marca. Sin logo, la cabecera del correo lleva tu nombre, no el de Acuarius. Si ya habías subido logo en Reservas, el enlace nuevo lo toma solo.</p>' +
        '<p>Si quieres tu propio texto, en «Correo de confirmación» eliges una de tus plantillas de correo y usas variables como {{nombre}}, {{fecha}}, {{meet}} o {{cancelar}}.</p>' +
        '<p>Para cancelar, la persona usa el enlace del correo, pulsa «Cancelar la reunión» y la hora vuelve a quedar libre. El evento se quita de tu Google Calendar y le llega el correo de cancelación.</p>',
    },
    {
      h2: '¿Cómo bajan las inasistencias los avisos por WhatsApp?',
      html: '<p>Si tienes un número de WhatsApp conectado, en cada enlace puedes marcar «Mandarle un WhatsApp al agendar y un recordatorio una hora antes». La hora va en el reloj de quien agenda y el mensaje trae el enlace para conectarse.</p>' +
        '<p>Como esa persona no te ha escrito antes, Meta exige dos plantillas aprobadas. Acuarius las escribe y las manda a revisión desde el mismo enlace con «Crear las plantillas»; ahí mismo ves si están «Aprobada» o «En revisión de Meta». Mientras no estén aprobadas, o si no tienes WhatsApp conectado, la reunión se agenda igual y la invitación llega por correo; solo el WhatsApp no sale. El envío lo cobra Meta a tu cuenta.</p>',
    },
    {
      h2: '¿Cuándo usar un enlace de reunión y cuándo Reservas?',
      html: '<p>El enlace de reunión es tu agenda personal: una persona, tus horas libres y una reunión con Meet. Sirve para demos, asesorías, llamadas de diagnóstico o una primera conversación comercial.</p>' +
        '<p>Reservas es otro módulo, pensado para negocios que venden citas de servicios. Si quieres que un prospecto hable contigo, usa el enlace de reunión.</p>' +
        '<table><tr><th>Negocio</th><th>Enlace sugerido</th><th>Cómo lo usa</th></tr>' +
        '<tr><td>Asesor inmobiliario</td><td>«Asesoría de compra» de 30 minutos</td><td>Lo manda a quien pregunta por un apartamento de 450.000.000 COP y lee su nota antes de la reunión.</td></tr>' +
        '<tr><td>Consultor</td><td>«Diagnóstico gratuito» de 45 minutos</td><td>Lo pone en su firma, con «1 día antes» para preparar la sesión.</td></tr>' +
        '<tr><td>Agencia de marketing</td><td>«Demo» de 30 y «Llamada rápida» de 15</td><td>El cliente suma a su socio como invitado y los dos reciben el Meet.</td></tr>' +
        '<tr><td>Clínica estética</td><td>«Valoración virtual» de 20 minutos</td><td>La valoración previa va por enlace; las citas presenciales de servicio, por Reservas.</td></tr>' +
        '</table>',
    },
    {
      h2: 'Buenas prácticas y errores comunes',
      html: '<ul>' +
        '<li><b>Conecta Google antes de compartir.</b> Es el error más común: sin Google Calendar el enlace no ofrece horas.</li>' +
        '<li><b>Un enlace por tipo de reunión.</b> Ponle un nombre claro, como «Demo de 30 minutos», y una descripción que diga qué va a pasar.</li>' +
        '<li><b>Elige bien la antelación.</b> Con «1 día antes» nadie te agenda para dentro de diez minutos.</li>' +
        '<li><b>Envía cada lead al tablero correcto.</b> Con «Entra al tablero» las demos caen en tu proceso de ventas y no se mezclan.</li>' +
        '</ul>',
    },
  ],
  pasos: {
    h2: 'Cómo crear y compartir tu enlace para agendar reuniones paso a paso',
    intro: 'Lo crea el dueño de la cuenta, porque el enlace usa su Google Calendar. Toma unos minutos.',
    items: [
      { t: 'Conecta Google Calendar', d: 'En CRM → Agenda, pulsa «Conectar Google Calendar». Si tienes varios calendarios, pulsa la etiqueta «Google Calendar» y elige en cuál trabajas.' },
      { t: 'Abre tus enlaces', d: 'En la misma Agenda, pulsa «Enlace para agendar» y luego «Nuevo enlace».' },
      { t: 'Configura la reunión', d: 'Completa «Cómo te ven», «Nombre de la reunión», «Dirección del enlace», «Duración», «Entra al tablero», «Qué días» y «Entre». Ajusta «Se puede agendar con» y «Hasta».' },
      { t: 'Ponle tu marca', d: 'En «Tu marca», sube tu logo y elige el color. En «Correo de confirmación», deja el «Diseño de Acuarius (recomendado)» o elige una plantilla tuya.' },
      { t: 'Activa los avisos por WhatsApp', d: 'Si tienes WhatsApp conectado, marca «Mandarle un WhatsApp al agendar y un recordatorio una hora antes» y pulsa «Crear las plantillas».' },
      { t: 'Crea y prueba el enlace', d: 'Pulsa «Crear enlace». En la lista, pulsa «Abrir» para verlo como lo ve tu cliente y comprobar que salen horas.' },
      { t: 'Compártelo', d: 'Pulsa «Copiar» y pégalo en WhatsApp, en tu firma de correo o en tu perfil.' },
    ],
  },
  faq: [
    { q: '¿Necesito Google Calendar para usar el enlace para agendar reuniones?', a: 'Sí. El enlace lee tu Google Calendar para saber cuándo estás ocupado y crea ahí la reunión. Sin Google conectado, la página muestra «Este enlace no está disponible por ahora» y no ofrece horas.' },
    { q: '¿Quien agenda necesita una cuenta en Acuarius?', a: 'No. Abre el enlace, elige día y hora, deja su nombre, correo y WhatsApp, y pulsa «Agendar reunión». La invitación le llega por correo.' },
    { q: '¿Se pueden agregar más personas a la reunión?', a: 'Sí, pero lo hace quien agenda: en «¿Viene alguien más?» puede sumar hasta 5 correos. A cada invitado le llega la invitación con el enlace de la reunión.' },
    { q: '¿Cómo cancela la persona una reunión?', a: 'Desde el enlace del correo de confirmación pulsa «Cancelar la reunión». La hora vuelve a quedar libre, el evento se quita de tu Google Calendar y le llega un correo de cancelación.' },
    { q: '¿Qué pasa si la persona está en otro país?', a: 'La página muestra las horas en tu zona horaria y, debajo, la hora donde está ella. El correo y los WhatsApp le dicen la hora en su propio reloj.' },
    { q: '¿El enlace de reunión es lo mismo que Reservas?', a: 'No. El enlace de reunión es tu agenda personal con Google Meet. Reservas es otro módulo, pensado para citas de servicios.' },
  ],
  relacionados: ['whatsapp-en-tiempo-real', 'campos-personalizados-crm', 'agente-ia-whatsapp-datos-de-contacto'],
  enlaces: [
    { url: '/crm/', texto: 'CRM con IA para pymes' },
    { url: '/crm/pipeline-de-ventas/', texto: 'Pipeline de ventas' },
  ],
};
