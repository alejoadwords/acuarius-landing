// Contenido del Cluster 1 · CRM para pymes. Los metadatos (title,
// description, H1) viven en mapa.mjs; aquí solo el cuerpo.
//
// Todo lo que se afirma aquí tiene que existir en el producto y coincidir con
// la sección de planes del home (index.html, #planes). Si cambia un precio o
// un límite allí, cambia aquí: PLANES abajo es el único sitio con cifras.
//
// El texto admite HTML en línea (<a>, <b>); los enlaces internos llevan la
// barra final, igual que el canonical.

const PLANES = {
  free: '50 contactos con pipeline, tareas y agenda, sin tarjeta',
  pro: '39 USD al mes: 1.000 contactos, 3 usuarios, bandeja de WhatsApp, Instagram y Messenger, automatizaciones y campañas',
  agency: '99 USD al mes: 10 clientes, 10 usuarios y 5.000 contactos',
  extras: 'usuario extra a 9 USD al mes y 1.000 contactos más por 4 USD',
};

export const CONTENIDO = {
  '/crm/': {
    badge: 'CRM en español para Latinoamérica',
    sub: 'Leads de WhatsApp, formularios y pauta en un mismo pipeline, con un agente de IA que responde mientras tu equipo vende. Sin implementación de tres meses ni precios en euros.',
    secciones: [
      { tipo: 'texto', label: 'Por qué un CRM', h2: 'Si tus ventas viven en WhatsApp y en una hoja de cálculo, estás perdiendo clientes',
        parrafos: [
          'La mayoría de las pymes de Latinoamérica venden por chat. El problema no es la falta de clientes potenciales: es que nadie sabe quién escribió ayer, a quién se le prometió una cotización y qué asesor tenía que llamar a quién. Un <b>CRM para pymes</b> resuelve exactamente eso: un solo lugar donde cada contacto tiene dueño, etapa y próximo paso.',
          'Acuarius nació para ese día a día. Está en español, se configura en una tarde, conecta los canales por donde ya te escriben y cobra en dólares a precio latinoamericano. No necesitas un consultor para arrancar.',
        ] },
      { tipo: 'tarjetas', label: 'Qué incluye', h2: 'Todo lo que tu equipo comercial necesita, en una sola herramienta',
        items: [
          { t: 'Pipeline visual', d: 'Arrastra cada oportunidad entre etapas que tú defines. Hasta 10 pipelines por cuenta, con vista de tablero o de lista. <a href="/crm/pipeline-de-ventas/">Cómo armar tu pipeline de ventas</a>.' },
          { t: 'Bandeja multicanal', d: 'WhatsApp, Instagram, Messenger y el chat de tu web en una sola bandeja. Cada conversación nueva crea o actualiza el lead. <a href="/crm/whatsapp/">Ver CRM con WhatsApp</a>.' },
          { t: 'Agente de IA 24/7', d: 'Responde preguntas con la información de tu negocio, califica al cliente y le pasa la conversación a un asesor cuando ya está listo para comprar.' },
          { t: 'Reparto automático', d: 'Los leads se asignan por turnos entre tu equipo, por fuente. Cada asesor ve lo suyo y tú lo ves todo.' },
          { t: 'Automatizaciones', d: 'Flujos con correo, WhatsApp, esperas y condiciones: bienvenida, seguimiento a los tres días, aviso al asesor si un lead se enfría.' },
          { t: 'Tareas y agenda', d: 'Llamadas, visitas y reuniones con recordatorio, sincronizadas con Google Calendar para que nadie olvide un seguimiento.' },
          { t: 'Campañas', d: 'Correos masivos por etiquetas y campañas de WhatsApp a tu base de contactos, con baja automática para quien no quiera recibir más.' },
          { t: 'Propuestas comerciales', d: 'Cotizaciones con enlace, firma del cliente y botón de pago. Sabes cuándo la abrió y cuándo la aceptó.' },
          { t: 'Reportes de ventas', d: 'Ventas, productividad por asesor y marketing: de qué fuente llegan los leads que de verdad compran y por qué se pierden los que no.' },
        ] },
      { tipo: 'pasos', label: 'Cómo empezar', h2: 'De la hoja de cálculo a un CRM funcionando en una tarde',
        items: [
          { t: 'Crea tu cuenta', d: 'Gratis y sin tarjeta. Si quieres el plan Pro, tienes 14 días de prueba sin pagar.' },
          { t: 'Importa tus contactos', d: 'Sube tu Excel o CSV. El importador reconoce las columnas y reparte los contactos entre tu equipo.' },
          { t: 'Conecta tus canales', d: 'WhatsApp, Instagram, Messenger, formularios de tu web o un webhook: cada lead entra solo al pipeline.' },
          { t: 'Define tus etapas', d: 'Ajusta el pipeline a tu proceso real y deja que el agente de IA atienda las primeras preguntas.' },
        ] },
      { tipo: 'tabla', label: 'Precios', h2: 'Un CRM con precio pensado para pymes latinoamericanas',
        cab: ['Plan', 'Precio', 'Para quién'],
        filas: [
          ['Free', '0 USD', 'Para probar: ' + PLANES.free + '.'],
          ['Pro', '39 USD/mes', 'Pymes y equipos comerciales: ' + PLANES.pro.replace('39 USD al mes: ', '') + '.'],
          ['Agency', '99 USD/mes', 'Agencias que manejan varias marcas: ' + PLANES.agency.replace('99 USD al mes: ', '') + '.'],
        ],
        nota: 'Pagando al año te ahorras dos meses. Si creces: ' + PLANES.extras + '. <a href="/#planes">Calcula tu precio exacto</a>.' },
      { tipo: 'texto', label: 'Cómo elegir', h2: 'Qué debe tener un buen CRM para pymes',
        parrafos: [
          '<b>Que tu equipo lo use.</b> Un CRM que nadie actualiza no sirve. Por eso Acuarius registra solo lo que pasa en los chats y los formularios: el asesor no tiene que copiar datos a mano.',
          '<b>Que hable tu idioma y tus canales.</b> En Latinoamérica la venta pasa por WhatsApp. Un CRM que trata WhatsApp como un complemento de pago aparte termina saliendo caro.',
          '<b>Que el precio no se dispare al crecer.</b> Revisa cuánto pagarías con tres, cinco y diez usuarios. En Acuarius el plan Pro ya incluye tres, y cada usuario adicional cuesta 9 USD al mes.',
          '<b>Que te diga de dónde vienen las ventas.</b> Saber cuántos leads entraron es fácil; saber cuáles compraron y de qué campaña llegaron es lo que te deja invertir mejor.',
        ] },
    ],
    faq: [
      { q: '¿Qué es un CRM para pymes?', a: 'Es un sistema para registrar a cada cliente potencial, en qué etapa de la venta está y quién lo atiende. En una pyme reemplaza la mezcla de chats, libretas y hojas de cálculo por un solo lugar que todo el equipo consulta.' },
      { q: '¿Acuarius tiene un plan gratis?', a: 'Sí. El plan Free es para siempre e incluye ' + PLANES.free + '. Cuando necesites más, el plan Pro tiene 14 días de prueba gratis. <a href="/crm/gratis/">Ver CRM gratis</a>.' },
      { q: '¿Necesito saber de tecnología para usarlo?', a: 'No. Se configura desde el navegador, sin instalar nada, y todo está en español. La mayoría de las cuentas tiene su pipeline funcionando el mismo día.' },
      { q: '¿Puedo conectar mi WhatsApp?', a: 'Sí. En los planes de pago, WhatsApp, Instagram, Messenger y el chat web llegan a una bandeja compartida, y cada conversación queda asociada al lead.' },
      { q: '¿Sirve para mi industria?', a: 'El pipeline y los campos se adaptan a cualquier proceso de venta. Tenemos configuraciones pensadas para <a href="/crm/inmobiliarias/">inmobiliarias</a>, <a href="/crm/clinicas/">clínicas</a> y <a href="/crm/restaurantes/">restaurantes</a>.' },
      { q: '¿Puedo cancelar cuando quiera?', a: 'Sí. Los planes son mensuales y se cancelan desde la cuenta, sin permanencia mínima.' },
    ],
    cta: { h2: 'Empieza a vender con orden hoy', sub: 'Crea tu cuenta gratis o prueba el plan Pro 14 días. Sin tarjeta de crédito.' },
  },

  '/crm/whatsapp/': {
    badge: 'WhatsApp, Instagram y Messenger',
    sub: 'Todas las conversaciones de tu negocio en una bandeja que comparte tu equipo. Cada chat crea el lead, lo asigna a un asesor y deja el historial a la vista. Un agente de IA atiende cuando nadie puede.',
    secciones: [
      { tipo: 'texto', label: 'El problema', h2: 'WhatsApp Business se queda corto cuando vendes en equipo',
        parrafos: [
          'Con WhatsApp Business en un solo celular, el negocio depende de quién lo tenga en la mano. No sabes cuántos chats quedaron sin responder, un asesor no puede ver lo que habló otro y, si alguien se va de la empresa, se lleva las conversaciones.',
          'Un <b>CRM con WhatsApp</b> separa el número del teléfono: varias personas atienden el mismo WhatsApp desde el computador, cada conversación tiene dueño y todo queda registrado en la ficha del cliente.',
        ] },
      { tipo: 'tarjetas', label: 'Cómo funciona', h2: 'Lo que cambia cuando WhatsApp vive dentro de tu CRM',
        items: [
          { t: 'Una bandeja para todo', d: 'WhatsApp, Instagram, Messenger y el chat de tu web en la misma pantalla, con filtros por canal, por asesor y por estado.' },
          { t: 'Cada chat es un lead', d: 'Cuando alguien escribe por primera vez se crea el lead con su número y su canal de origen. Si ya existía, la conversación se suma a su historial.' },
          { t: 'Asignación por turnos', d: 'Las conversaciones nuevas se reparten entre tus asesores de forma automática, sin que nadie tenga que repartirlas a mano.' },
          { t: 'Agente de IA que responde', d: 'Contesta en segundos con la información de tu negocio: precios, horarios, catálogo. Califica al cliente y le pasa la conversación a una persona cuando hace falta.' },
          { t: 'Notas internas', d: 'Tu equipo deja comentarios en la conversación que el cliente no ve. Ideal para pasar el contexto antes de una llamada.' },
          { t: 'Aviso de chats sin responder', d: 'Si un cliente lleva tiempo esperando, el responsable recibe el aviso. Ningún lead se enfría por olvido.' },
        ] },
      { tipo: 'texto', label: 'Agente de IA', h2: 'Un agente de IA que vende contigo, no en tu lugar',
        parrafos: [
          'El agente aprende de la información que tú le das: tu catálogo, tus precios, tus horarios y tus reglas. Responde de inmediato a las preguntas repetidas, pide los datos que tu equipo necesita y agenda citas cuando el cliente está listo.',
          'Está hecho para no inventar: si no tiene un dato, lo dice y pasa la conversación a un asesor. Y tú decides hasta dónde llega. Puedes revisar cada respuesta, corregirla, y el agente aprende de esa corrección para la próxima vez.',
        ] },
      { tipo: 'tabla', label: 'Comparación', h2: 'WhatsApp Business frente a un CRM con WhatsApp',
        cab: ['', 'WhatsApp Business', 'Acuarius'],
        filas: [
          ['Personas atendiendo el mismo número', 'Limitado a los dispositivos vinculados', 'Todo tu equipo, desde el navegador'],
          ['Historial del cliente', 'Dentro del chat del teléfono', 'En la ficha del lead, con etapa, tareas y notas'],
          ['Instagram y Messenger', 'En otra aplicación', 'En la misma bandeja'],
          ['Respuestas fuera de horario', 'Mensaje de ausencia fijo', 'Agente de IA que entiende y responde'],
          ['Saber qué chats se convirtieron en venta', 'No', 'Sí, con reportes por fuente y por asesor'],
        ] },
      { tipo: 'pasos', label: 'Cómo empezar', h2: 'Conecta tu WhatsApp en cuatro pasos',
        items: [
          { t: 'Crea tu cuenta', d: 'Prueba el plan Pro 14 días gratis, sin tarjeta.' },
          { t: 'Conecta tus canales', d: 'Vincula WhatsApp, Instagram y Messenger desde la sección de canales.' },
          { t: 'Configura el agente', d: 'Cuéntale de tu negocio y define cuándo debe pasarle la conversación a una persona.' },
          { t: 'Invita a tu equipo', d: 'El plan Pro incluye tres usuarios; cada usuario adicional cuesta 9 USD al mes.' },
        ] },
    ],
    faq: [
      { q: '¿Qué es un CRM con WhatsApp?', a: 'Es un CRM que recibe y envía los mensajes de WhatsApp dentro de la misma herramienta donde gestionas a tus clientes. Así cada conversación queda asociada a un lead, a un asesor y a una etapa de venta.' },
      { q: '¿Varias personas pueden responder el mismo WhatsApp?', a: 'Sí. Todo tu equipo atiende el mismo número desde el navegador, y cada conversación tiene un responsable para que nadie responda dos veces ni deje a un cliente esperando.' },
      { q: '¿Puedo enviar mensajes masivos por WhatsApp?', a: 'Sí, con campañas a tu base de contactos segmentada por etiquetas. WhatsApp exige plantillas aprobadas para escribir a quien no te ha escrito en las últimas 24 horas.' },
      { q: '¿El agente de IA responde solo?', a: 'Responde lo que sabe con la información que tú le das y pasa la conversación a un asesor cuando el cliente pide algo que no puede resolver o está listo para comprar. Tú defines esas reglas.' },
      { q: '¿También funciona con Instagram y Messenger?', a: 'Sí. Los mensajes directos de Instagram y de Messenger llegan a la misma bandeja que WhatsApp.' },
    ],
    cta: { h2: 'Ordena tus chats y vende más', sub: 'Prueba Acuarius 14 días gratis y atiende WhatsApp, Instagram y Messenger con tu equipo.' },
  },

  '/crm/gratis/': {
    badge: 'Plan Free para siempre',
    sub: 'Un CRM gratis de verdad: sin tarjeta de crédito, sin prueba que se vence y en español. Organiza tus primeros clientes y pasa a un plan de pago solo cuando lo necesites.',
    secciones: [
      { tipo: 'tarjetas', label: 'Qué incluye gratis', h2: 'Lo que trae el plan Free de Acuarius',
        items: [
          { t: 'Hasta 50 contactos', d: 'Suficiente para ordenar tus primeros clientes y comprobar si un CRM le sirve a tu negocio.' },
          { t: 'Pipeline de ventas', d: 'Tablero con etapas que tú defines para ver en qué punto está cada oportunidad. <a href="/crm/pipeline-de-ventas/">Cómo armarlo</a>.' },
          { t: 'Tareas y agenda', d: 'Recordatorios de llamadas, visitas y seguimientos para que ningún cliente quede sin respuesta.' },
          { t: 'Asistente de IA', d: '50 mensajes de IA al mes para redactar correos, preparar seguimientos o resumir lo que pasó con un cliente.' },
          { t: 'En español', d: 'Toda la plataforma, la ayuda y el soporte están en español latinoamericano.' },
          { t: 'Sin fecha de vencimiento', d: 'No es una prueba. El plan Free sigue activo mientras lo uses.' },
        ] },
      { tipo: 'texto', label: 'Gratis de verdad', h2: 'Qué revisar antes de elegir un CRM gratis',
        parrafos: [
          'Muchos "CRM gratis" son pruebas de 14 días disfrazadas, o planes que no dejan exportar tus datos para que te cueste irte. Antes de cargar tus clientes, revisa tres cosas: si el plan gratis vence, cuántos contactos permite y si después puedes llevarte tu información.',
          'En Acuarius el plan Free no vence y tus contactos son tuyos. El límite está claro desde el principio: 50 contactos. Si tu negocio ya maneja más, el plan Pro arranca con 14 días de prueba gratis y no te pide tarjeta para probarlo.',
        ] },
      { tipo: 'tabla', label: 'Comparación', h2: 'Free, prueba Pro y Pro: qué cambia',
        cab: ['', 'Free', 'Prueba Pro (14 días)', 'Pro'],
        filas: [
          ['Precio', '0 USD', '0 USD', '39 USD/mes'],
          ['Contactos', '50', '1.000', '1.000 (+4 USD por cada 1.000 más)'],
          ['Usuarios', '1', '3', '3 (+9 USD por usuario)'],
          ['Pipeline, tareas y agenda', 'Sí', 'Sí', 'Sí'],
          ['Bandeja de WhatsApp, Instagram y Messenger', 'No', 'Sí', 'Sí'],
          ['Automatizaciones y campañas', 'No', 'Sí', 'Sí'],
          ['Tarjeta de crédito', 'No', 'No', 'Al contratar'],
        ],
        nota: 'Al terminar la prueba, si no contratas, tu cuenta pasa sola al plan Free: no se te cobra nada. <a href="/#planes">Ver todos los planes</a>.' },
      { tipo: 'pasos', label: 'Cómo empezar', h2: 'Tu CRM gratis funcionando en diez minutos',
        items: [
          { t: 'Crea tu cuenta', d: 'Solo con tu correo. No pedimos tarjeta.' },
          { t: 'Carga tus contactos', d: 'A mano o desde un Excel o CSV.' },
          { t: 'Ajusta tus etapas', d: 'Nombra las etapas como las llamas en tu negocio: cotizado, visita, negociación…' },
          { t: 'Agenda tu primer seguimiento', d: 'Crea la tarea y el CRM te avisa cuándo toca.' },
        ] },
    ],
    faq: [
      { q: '¿El CRM gratis de Acuarius tiene límite de tiempo?', a: 'No. El plan Free es permanente. Lo que tiene es un límite de 50 contactos y algunas funciones reservadas para los planes de pago.' },
      { q: '¿Me piden tarjeta de crédito?', a: 'No, ni para el plan Free ni para los 14 días de prueba del plan Pro.' },
      { q: '¿Qué pasa si paso de 50 contactos?', a: 'Puedes pasar al plan Pro, que incluye 1.000 contactos y tres usuarios por 39 USD al mes, o probarlo antes 14 días gratis.' },
      { q: '¿Puedo usar WhatsApp en el plan gratis?', a: 'La bandeja de WhatsApp, Instagram y Messenger es parte de los planes de pago. Puedes probarla gratis durante los 14 días de prueba del plan Pro. <a href="/crm/whatsapp/">Ver CRM con WhatsApp</a>.' },
      { q: '¿Es seguro guardar mis clientes en un CRM gratis?', a: 'Tus datos se guardan igual en todos los planes: con acceso por usuario y contraseña, y solo las personas que tú invitas pueden verlos.' },
    ],
    cta: { h2: 'Crea tu CRM gratis ahora', sub: 'Sin tarjeta, sin vencimiento y en español.' },
  },

  '/crm/inmobiliarias/': {
    badge: 'Para inmobiliarias y constructoras',
    sub: 'Los leads de portales, pauta y WhatsApp llegan al mismo pipeline. Un agente de IA responde al instante, recomienda inmuebles de tu inventario, califica al interesado y agenda la visita.',
    secciones: [
      { tipo: 'texto', label: 'El problema', h2: 'En finca raíz gana el que responde primero',
        parrafos: [
          'Un interesado en un apartamento escribe a tres inmobiliarias el mismo día. La primera que le responde con opciones concretas se queda con la visita. Pero los leads llegan de noche, el fin de semana y desde cinco fuentes distintas, y los asesores están mostrando inmuebles.',
          'Un <b>CRM inmobiliario</b> junta todas esas entradas, responde de inmediato y deja a cada asesor con los interesados que ya están calificados, en vez de perder la tarde respondiendo "¿todavía está disponible?".',
        ] },
      { tipo: 'tarjetas', label: 'Hecho para finca raíz', h2: 'Lo que hace Acuarius por tu inmobiliaria',
        items: [
          { t: 'Todas las fuentes en un pipeline', d: 'Formularios de tu web, campañas de Google y Meta, WhatsApp, Instagram y webhooks de otras plataformas. Cada lead llega con su fuente y su campaña.' },
          { t: 'Agente que conoce tu inventario', d: 'Conecta tu catálogo desde Domus, una hoja de Google o un CSV. El agente recomienda inmuebles según zona, presupuesto y número de habitaciones.' },
          { t: 'Calificación automática', d: 'El agente pregunta lo que importa —compra o arriendo, presupuesto, zona, fecha— y marca al lead como calificado o no antes de pasarlo a un asesor.' },
          { t: 'Visitas agendadas', d: 'Cuando el interesado quiere conocer el inmueble, el agente propone horarios y la cita queda en la agenda del asesor y en Google Calendar.' },
          { t: 'Reparto por turnos', d: 'Los leads se asignan entre tus asesores de forma rotativa, y el responsable recibe un aviso al instante.' },
          { t: 'Seguimiento de la venta', d: 'Etapas propias: calificado, visita agendada, visita hecha, oferta, separación, cierre. Con motivos de pérdida para saber por qué se cae una venta.' },
        ] },
      { tipo: 'texto', label: 'Inversión en pauta', h2: 'Deja de pagar por leads que nadie atiende',
        parrafos: [
          'Las inmobiliarias invierten mucho en Google y Meta, pero pocas saben qué campaña trae los clientes que de verdad compran. Acuarius guarda la campaña de origen de cada lead y la cruza con el resultado: puedes ver cuánto te costó cada visita y cada venta, no solo cada clic.',
          'Cuando un lead se marca como ganado, Acuarius puede reportar esa venta a Google Ads y a Meta para que sus algoritmos busquen más personas como esa.',
        ] },
      { tipo: 'pasos', label: 'Cómo empezar', h2: 'Tu inmobiliaria en Acuarius en una semana',
        items: [
          { t: 'Conecta tus fuentes', d: 'Formularios, WhatsApp y tus campañas activas.' },
          { t: 'Carga tu inventario', d: 'Desde Domus, una hoja de Google o un CSV con tus inmuebles.' },
          { t: 'Entrena al agente', d: 'Define qué preguntar, qué zonas atiendes y cuándo pasar el lead a un asesor.' },
          { t: 'Asigna a tu equipo', d: 'Turnos por fuente y avisos para que cada asesor sepa qué le llegó.' },
        ] },
    ],
    faq: [
      { q: '¿Qué es un CRM inmobiliario?', a: 'Es un CRM adaptado al proceso de venta y arriendo de inmuebles: recibe los leads de portales y campañas, los califica, agenda visitas y sigue cada negocio hasta el cierre.' },
      { q: '¿Sirve para constructoras con proyectos sobre planos?', a: 'Sí. Puedes crear un pipeline por proyecto, con las etapas de tu proceso comercial, y medir qué campaña trae los compradores de cada uno.' },
      { q: '¿El agente de IA puede recomendar inmuebles?', a: 'Sí, a partir del inventario que conectes. Solo recomienda inmuebles que existen en tu catálogo y no inventa precios ni disponibilidad.' },
      { q: '¿Se conecta con mi software inmobiliario?', a: 'Lee el inventario desde Domus y también desde una hoja de Google o un CSV. Para otras plataformas, los leads pueden entrar por webhook.' },
      { q: '¿Cuánto cuesta?', a: 'El plan Pro cuesta 39 USD al mes con tres usuarios incluidos; cada asesor adicional cuesta 9 USD al mes. Puedes probarlo 14 días gratis.' },
    ],
    cta: { h2: 'Responde primero y cierra más negocios', sub: 'Prueba el CRM inmobiliario de Acuarius 14 días gratis.' },
  },

  '/crm/clinicas/': {
    badge: 'Para clínicas, consultorios y centros estéticos',
    sub: 'Tus pacientes escriben por WhatsApp a cualquier hora. Acuarius les responde al instante, agenda la cita, envía el recordatorio y, después de la consulta, les pide una reseña en Google.',
    secciones: [
      { tipo: 'texto', label: 'El problema', h2: 'Cada mensaje sin responder es un paciente que agenda en otro lado',
        parrafos: [
          'En una clínica la recepción atiende el teléfono, el WhatsApp, el mostrador y las redes al mismo tiempo. Los mensajes de la noche se responden al día siguiente, cuando el paciente ya agendó con otro. Y quienes sí agendan a veces no llegan.',
          'Un <b>CRM para clínicas</b> ordena ese flujo: cada persona que pregunta queda registrada, recibe respuesta en segundos y tiene un próximo paso claro, desde la primera pregunta hasta la cita confirmada.',
        ] },
      { tipo: 'tarjetas', label: 'Qué resuelve', h2: 'Lo que hace Acuarius por tu clínica o consultorio',
        items: [
          { t: 'Respuesta inmediata', d: 'Un agente de IA responde por WhatsApp, Instagram y Messenger con la información de tus servicios, precios de referencia y horarios.' },
          { t: 'Citas en la agenda', d: 'El agente propone horarios disponibles y la cita queda en la agenda del profesional, sincronizada con Google Calendar.' },
          { t: 'Recordatorios automáticos', d: 'Mensajes antes de la cita para confirmarla y reducir las inasistencias.' },
          { t: 'Reseñas en Google', d: 'Después de la consulta, un mensaje automático invita al paciente a dejar su reseña en tu perfil de Google.' },
          { t: 'Encuestas de satisfacción', d: 'Encuestas NPS que separan a los pacientes satisfechos de los que necesitan una llamada.' },
          { t: 'Pacientes que vuelven', d: 'Campañas por etiquetas para controles, tratamientos de seguimiento o temporadas, a quien sí quiere recibirlas.' },
        ] },
      { tipo: 'pasos', label: 'El recorrido del paciente', h2: 'Del primer mensaje a la siguiente visita',
        items: [
          { t: 'Pregunta', d: 'El paciente escribe por WhatsApp. El agente responde en segundos y registra el lead con su motivo de consulta.' },
          { t: 'Agenda', d: 'Elige un horario y la cita queda en la agenda. Si pide algo que el agente no puede resolver, pasa a recepción.' },
          { t: 'Asiste', d: 'Recibe el recordatorio antes de la cita y la confirma.' },
          { t: 'Vuelve y recomienda', d: 'Recibe la invitación a reseñar y, cuando toca, el recordatorio de su control.' },
        ] },
      { tipo: 'texto', label: 'Buenas prácticas', h2: 'Cómo usar la IA con pacientes sin perder la confianza',
        parrafos: [
          'El agente está para resolver lo administrativo: horarios, ubicación, preparación para un examen, precios de referencia, disponibilidad. No da diagnósticos ni recomendaciones médicas, y tú defines en qué momento la conversación pasa a una persona de tu equipo.',
          'Cada respuesta queda registrada y la puedes revisar. Si el agente respondió algo que preferirías decir de otra forma, lo corriges y aprende para la próxima.',
        ] },
    ],
    faq: [
      { q: '¿Qué es un CRM para clínicas?', a: 'Es una herramienta para gestionar a los pacientes potenciales y actuales: quién preguntó, por qué servicio, cuándo tiene cita y qué seguimiento necesita. Se diferencia de la historia clínica en que se ocupa de la atención comercial y la agenda, no de la información médica.' },
      { q: '¿Reemplaza a mi software de historia clínica?', a: 'No. Acuarius se ocupa de la atención, la agenda comercial y el seguimiento. La historia clínica sigue en el sistema que ya usas.' },
      { q: '¿El agente de IA da consejos médicos?', a: 'No. Responde información administrativa de tu clínica y pasa a una persona cualquier consulta clínica. Tú defines esas reglas.' },
      { q: '¿Sirve para consultorios de un solo profesional?', a: 'Sí. El plan Pro incluye tres usuarios, así que sirve igual para un consultorio con recepción que para una clínica con varios profesionales.' },
      { q: '¿Cuánto cuesta?', a: 'El plan Pro cuesta 39 USD al mes y puedes probarlo 14 días gratis, sin tarjeta.' },
    ],
    cta: { h2: 'Que ningún paciente se quede sin respuesta', sub: 'Prueba el CRM para clínicas de Acuarius 14 días gratis.' },
  },

  '/crm/restaurantes/': {
    badge: 'Para restaurantes y negocios de domicilios',
    sub: 'Tus clientes piden por WhatsApp. Un agente de IA les responde con tu menú, toma el pedido o la reserva y se lo pasa a tu equipo. Después, tu base de clientes recibe campañas para volver a pedir.',
    secciones: [
      { tipo: 'texto', label: 'El problema', h2: 'En hora pico, el WhatsApp del restaurante se vuelve un cuello de botella',
        parrafos: [
          'A la hora del almuerzo llegan decenas de mensajes con la misma pregunta: "¿me pasas el menú?", "¿hacen domicilios a mi barrio?", "¿cuánto cuesta el plato del día?". Mientras alguien responde, otros clientes se cansan de esperar y piden por otro lado.',
          'Un <b>CRM para restaurantes</b> responde esas preguntas al instante, ordena los pedidos y, sobre todo, guarda a cada cliente para que puedas volver a escribirle. Sin depender solo de las aplicaciones de domicilios y sus comisiones.',
        ] },
      { tipo: 'tarjetas', label: 'Qué resuelve', h2: 'Lo que hace Acuarius por tu restaurante',
        items: [
          { t: 'Menú siempre a mano', d: 'Carga tu carta desde una hoja de Google o un CSV y el agente de IA responde precios, ingredientes y disponibilidad sin inventar.' },
          { t: 'Pedidos por WhatsApp', d: 'El agente toma los datos del pedido —qué quiere, dirección, forma de pago— y se lo pasa a tu equipo para confirmarlo.' },
          { t: 'Reservas', d: 'El cliente pide mesa por chat y la reserva queda en la agenda, con recordatorio antes de la hora.' },
          { t: 'Tablero de pedidos', d: 'Un pipeline con tus estados: nuevo, confirmado, en preparación, despachado, entregado.' },
          { t: 'Tu propia base de clientes', d: 'Cada persona que pide queda registrada con su historial. Esa base es tuya, no de una aplicación de domicilios.' },
          { t: 'Campañas para volver', d: 'Mensajes y correos por etiquetas: promociones de días flojos, lanzamientos de carta, fechas especiales.' },
        ] },
      { tipo: 'texto', label: 'Recompra', h2: 'El cliente que ya te pidió es el más barato de conseguir',
        parrafos: [
          'Conseguir un cliente nuevo con pauta o con aplicaciones de domicilios cuesta caro. Volver a venderle a quien ya te compró cuesta casi nada, siempre que tengas su contacto y sepas qué le gusta.',
          'Con las etiquetas de Acuarius puedes separar a tus clientes por lo que piden y por cuánto hace que no compran, y enviarles la promoción correcta. Y con las encuestas y las reseñas de Google después de cada pedido, conviertes a los clientes contentos en tu mejor publicidad.',
        ] },
      { tipo: 'pasos', label: 'Cómo empezar', h2: 'Tu restaurante en Acuarius en una tarde',
        items: [
          { t: 'Conecta tu WhatsApp', d: 'Y también Instagram, si te piden por ahí.' },
          { t: 'Carga tu menú', d: 'Desde una hoja de Google o un CSV, con precios y descripciones.' },
          { t: 'Configura el agente', d: 'Zonas de entrega, horarios, formas de pago y cuándo pasar el pedido a tu equipo.' },
          { t: 'Define tus estados', d: 'Arma el tablero de pedidos con las etapas de tu cocina.' },
        ] },
    ],
    faq: [
      { q: '¿Qué es un CRM para restaurantes?', a: 'Es una herramienta para atender a tus clientes por chat, organizar pedidos y reservas, y guardar el historial de cada cliente para volver a venderle con campañas.' },
      { q: '¿El agente de IA toma pedidos solo?', a: 'Toma los datos del pedido con la información de tu menú y se lo pasa a tu equipo para confirmarlo. Tú defines si confirma de inmediato o si siempre revisa una persona.' },
      { q: '¿Reemplaza a mi sistema de punto de venta?', a: 'No. Acuarius se ocupa de la atención por chat, los pedidos que llegan por esa vía y el contacto con tus clientes. La facturación sigue en tu punto de venta.' },
      { q: '¿Puedo enviar promociones por WhatsApp?', a: 'Sí, con campañas a tu base de clientes segmentada por etiquetas. Quien no quiera recibir más, se da de baja y no le vuelve a llegar.' },
      { q: '¿Cuánto cuesta?', a: 'El plan Pro cuesta 39 USD al mes con tres usuarios incluidos, y puedes probarlo 14 días gratis.' },
    ],
    cta: { h2: 'Atiende más pedidos sin contratar más gente', sub: 'Prueba Acuarius en tu restaurante 14 días gratis.' },
  },

  '/crm/pipeline-de-ventas/': {
    badge: 'Guía práctica',
    sub: 'Qué es un pipeline de ventas, qué etapas debería tener el tuyo, qué métricas mirar cada semana y los errores que hacen que un pipeline se llene de oportunidades muertas.',
    secciones: [
      { tipo: 'texto', label: 'Definición', h2: 'Qué es un pipeline de ventas',
        parrafos: [
          'Un <b>pipeline de ventas</b> es la representación visual de tu proceso comercial: una serie de etapas, de izquierda a derecha, por las que pasa cada oportunidad desde el primer contacto hasta el cierre. Cada tarjeta es un negocio en curso y su posición te dice qué falta para cerrarlo.',
          'Sirve para tres cosas: saber qué tiene que hacer hoy cada asesor, prever cuánto vas a vender este mes y detectar en qué etapa se están cayendo las ventas.',
        ] },
      { tipo: 'texto', label: 'Pipeline vs embudo', h2: 'Pipeline de ventas y embudo de ventas: no son lo mismo',
        parrafos: [
          'Se usan como sinónimos, pero miran cosas distintas. El <b>embudo de ventas</b> mide personas: cuántas visitas se convierten en leads, cuántos leads en clientes. Es una vista de marketing, en porcentajes.',
          'El <b>pipeline</b> mide negocios y acciones: qué oportunidades tiene abiertas cada asesor, cuánto valen y qué paso sigue en cada una. Es una vista de ventas, para trabajar todos los días. Los dos se complementan.',
        ] },
      { tipo: 'tabla', label: 'Etapas', h2: 'Las etapas del proceso de venta en un pipeline típico',
        cab: ['Etapa', 'Qué significa', 'Cómo se pasa a la siguiente'],
        filas: [
          ['Nuevo', 'El lead acaba de llegar y nadie lo ha contactado.', 'Primer contacto, idealmente en minutos.'],
          ['Contactado', 'Ya hubo conversación.', 'Confirmar que tiene necesidad, presupuesto y poder de decisión.'],
          ['Calificado', 'Es un cliente posible de verdad.', 'Agendar una reunión, una visita o una demostración.'],
          ['Propuesta enviada', 'Tiene una cotización en la mano.', 'Resolver objeciones y negociar.'],
          ['Negociación', 'Discuten condiciones, precio o plazos.', 'Acuerdo y firma.'],
          ['Ganado / Perdido', 'El negocio se cerró, para bien o para mal.', 'Registrar el motivo para aprender de él.'],
        ],
        nota: 'No copies estas etapas tal cual: cada una debe corresponder a algo que el cliente hace, no a algo que el asesor siente.' },
      { tipo: 'tarjetas', label: 'Ejemplos', h2: 'Ejemplos de pipeline de ventas por industria',
        items: [
          { t: 'Inmobiliaria', d: 'Nuevo → Calificado → Visita agendada → Visita hecha → Oferta → Separación → Escrituración. <a href="/crm/inmobiliarias/">CRM inmobiliario</a>.' },
          { t: 'Clínica', d: 'Consulta → Valoración agendada → Valoración hecha → Plan de tratamiento → Tratamiento iniciado. <a href="/crm/clinicas/">CRM para clínicas</a>.' },
          { t: 'Agencia o servicios B2B', d: 'Lead → Reunión de diagnóstico → Propuesta → Negociación → Contrato firmado.' },
          { t: 'Restaurante con eventos', d: 'Solicitud → Cotización → Degustación → Anticipo → Evento realizado. <a href="/crm/restaurantes/">CRM para restaurantes</a>.' },
        ] },
      { tipo: 'tarjetas', label: 'Métricas', h2: 'Las cuatro métricas de un pipeline que deberías mirar cada semana',
        items: [
          { t: 'Tasa de conversión por etapa', d: 'Qué porcentaje pasa de una etapa a la siguiente. Donde cae en picada, ahí está el problema.' },
          { t: 'Tiempo en cada etapa', d: 'Cuántos días pasa una oportunidad en cada etapa. Las que llevan el doble del promedio probablemente están muertas.' },
          { t: 'Valor del pipeline', d: 'La suma de lo que valen las oportunidades abiertas. Comparada con tu meta, te dice si tienes suficiente para cerrar el mes.' },
          { t: 'Motivos de pérdida', d: 'Por qué se pierden los negocios: precio, tiempo, competencia, falta de respuesta. Es la métrica que más enseña.' },
        ] },
      { tipo: 'texto', label: 'Errores comunes', h2: 'Errores que llenan un pipeline de oportunidades muertas',
        parrafos: [
          '<b>Demasiadas etapas.</b> Si tienes doce columnas, nadie las mueve. Entre cinco y siete suele bastar.',
          '<b>Oportunidades sin próximo paso.</b> Cada tarjeta debería tener una tarea con fecha. Si no la tiene, se olvida.',
          '<b>No cerrar las perdidas.</b> Un negocio que lleva tres meses sin respuesta no es una oportunidad: es ruido que infla tus proyecciones. Márcalo como perdido y anota por qué.',
          '<b>Actualizar a mano.</b> Si el asesor tiene que mover todo él mismo, el pipeline siempre va atrasado. Lo ideal es que los chats, los formularios y las propuestas lo muevan solos.',
        ] },
      { tipo: 'pasos', label: 'Plantilla', h2: 'Arma tu pipeline de ventas en Acuarius',
        items: [
          { t: 'Crea tu cuenta gratis', d: 'El plan Free incluye pipeline, tareas y agenda para 50 contactos. <a href="/crm/gratis/">Ver CRM gratis</a>.' },
          { t: 'Renombra las etapas', d: 'Las etapas son libres, salvo nuevo, ganado y perdido, que el sistema necesita para medir.' },
          { t: 'Conecta tus fuentes', d: 'Formularios, WhatsApp o un webhook: los leads entran solos a la primera etapa.' },
          { t: 'Revisa tus reportes', d: 'Conversión, motivos de cierre y productividad por asesor, sin armar una sola fórmula.' },
        ] },
    ],
    faq: [
      { q: '¿Qué es un pipeline de ventas?', a: 'Es la representación visual de las etapas por las que pasa una oportunidad de venta, desde el primer contacto hasta el cierre. Permite ver qué negocios están abiertos, en qué punto está cada uno y qué hay que hacer para avanzar.' },
      { q: '¿Cuántas etapas debe tener un pipeline de ventas?', a: 'Entre cinco y siete es lo habitual. Cada etapa debe corresponder a un hecho verificable, como "propuesta enviada" o "visita hecha", no a una sensación del asesor.' },
      { q: '¿Cuál es la diferencia entre pipeline y embudo de ventas?', a: 'El embudo mide cuántas personas avanzan de una fase a otra, en porcentajes. El pipeline muestra los negocios concretos abiertos, su valor y la próxima acción de cada uno.' },
      { q: '¿Puedo tener varios pipelines?', a: 'Sí. En Acuarius puedes tener hasta 10 pipelines por cuenta, por ejemplo uno por línea de negocio o por proyecto.' },
      { q: '¿Necesito un CRM para tener un pipeline?', a: 'Puedes empezar en una hoja de cálculo, pero pronto se desactualiza. Un CRM mueve las oportunidades solo, guarda el historial y calcula las métricas por ti.' },
    ],
    cta: { h2: 'Tu pipeline de ventas, listo en diez minutos', sub: 'Crea tu cuenta gratis y empieza con las etapas que ya usas.' },
  },
};
