// Artículo: el agente de IA para WhatsApp pide los datos de contacto antes de
// pasar la conversación a un asesor. Cada afirmación sale del código de
// Acuarius (api/_inbox-engine.js, api/chat-agents.js, public/app.js,
// public/index.html) o de public/novedades.json a 02-11-2026.
export const ARTICULO = {
  slug: 'agente-ia-whatsapp-datos-de-contacto',
  kw: 'agente de IA para WhatsApp',
  title: 'Agente de IA para WhatsApp que pide datos antes de escalar',
  description: 'Un agente de IA para WhatsApp que responde, califica y pide nombre y correo antes de pasar el chat a tu equipo. Así nadie llega al asesor sin datos.',
  h1: 'Agente de IA para WhatsApp: nadie llega a tu asesor sin datos de contacto',
  modulo: 'Agente de IA',
  publicado: '2026-11-02',
  edicion: 1,
  resumen: 'Tu agente de IA para WhatsApp ahora pide los datos que faltan antes de pasarle la conversación a tu equipo, y la pasa en el mensaje siguiente.',
  respuesta: 'Un agente de IA para WhatsApp es un asistente que contesta los chats de tu negocio con la información que tú le das: contexto, preguntas frecuentes y catálogo. En Acuarius califica a cada persona, la manda al proceso de venta correcto y, si activas la opción, pide nombre y correo antes de pasar la conversación a un asesor. Así nadie llega a tu equipo sin datos de contacto.',
  video: { id: 'ntRgbc6J2Nk', titulo: 'Agentes IA: atiende tus chats y califica prospectos', subido: '2026-10-08', segundos: 158, propio: false },
  ilustracion: 'agente',
  secciones: [
    {
      h2: '¿Qué es un agente de IA para WhatsApp y qué no es?',
      html: '<p>Un agente de IA para WhatsApp es un asistente que responde los mensajes de tu número de WhatsApp Business con la información de tu negocio. En Acuarius lo creas en <b>Conversaciones → Agentes IA</b>: le das un nombre, un rol, el contexto del negocio, preguntas frecuentes y, si vendes productos, tu catálogo.</p>' +
        '<p>Lo que no es: no sabe nada que no le hayas contado. Antes de enviar cada mensaje, Acuarius revisa que cada precio y cada código que menciona exista de verdad; si no, el mensaje se reescribe. Tampoco reemplaza a tu equipo: atiende rápido, averigua lo que hace falta y entrega el chat a un asesor en el momento justo.</p>' +
        '<p>Tu WhatsApp se conecta con la app de Meta de tu propio negocio, en <b>Fuentes → Configurar canales → WhatsApp</b>.</p>',
    },
    {
      h2: '¿Por qué importa que nadie llegue al asesor sin datos?',
      html: '<p>Una conversación que llega al asesor sin nombre ni correo obliga a empezar de cero: el asesor vuelve a preguntar y el cliente se cansa. Y si el chat se corta, el lead queda sin forma de seguirlo por otro medio.</p>' +
        '<p>Por eso el agente tiene la opción <b>«Pide nombre, teléfono y correo antes de pasar a un asesor»</b>. Viene apagada. Cuando la activas, cada vez que alguien pide hablar con tu equipo, el agente primero pide los datos que le faltan.</p>',
    },
    {
      h2: '¿Cómo funciona la entrega al asesor?',
      html: '<p>La entrega al asesor ocurre en dos mensajes, y lo controla el sistema, no la IA.</p>' +
        '<ol><li><b>Primer mensaje.</b> Alguien escribe «quiero hablar con un asesor». Si faltan datos, el agente responde: «Para poder seguir ayudándote, solo necesitamos que nos compartas tu nombre y correo electrónico».</li>' +
        '<li><b>Mensaje siguiente.</b> El agente pasa la conversación a tu equipo, con la frase que configuraste en «Frase cuando escala a humano». La pasa los dé o no: se le dijo a la persona que la atendería alguien, y eso se cumple.</li></ol>' +
        '<p>El agente pide solo lo que le falta. En WhatsApp ya tiene el teléfono, así que pide nombre y correo. Con tono formal, la frase va de usted. Cuando la conversación pasa a una persona, el agente deja de responder en ese chat.</p>',
    },
    {
      h2: 'Calificar prospectos y mandarlos al tablero correcto',
      html: '<p>Calificar es averiguar, durante la charla, si la persona encaja con lo que vendes. En el paso «Calificación» activas <b>«Calificar antes de pasar al comercial»</b> y añades preguntas. Cada una tiene dos casillas: «Qué debe averiguar» y «Qué respuesta lo da por bueno», que es opcional.</p>' +
        '<ul><li>Eliges cuántos criterios debe cumplir en «Califica si cumple al menos».</li>' +
        '<li>Escoges a qué etapa pasa si califica y qué etiqueta lleva si califica o si no.</li>' +
        '<li>Con «Avisar al comercial y dejar de responder automáticamente», el agente le entrega el chat al comercial en cuanto califica.</li></ul>' +
        '<p>En el paso «Proceso» activas <b>«Enviar a un proceso de venta según lo que busque»</b>. Por ejemplo, si quiere comprar o arrendar. El agente solo reporta qué opción encaja; tú decides a qué proceso va cada una. Luego, el lead se reparte por turnos entre quienes atienden ese proceso, según lo marcado en <b>Ajustes → Usuarios</b>. Si no marcaste a nadie, lo reparte la regla de la fuente.</p>',
    },
    {
      h2: 'Horario de atención, fechas y festivos',
      html: '<p>El agente sabe qué día y qué hora es en la zona de tu negocio. Si escribes tu horario de atención en el «Contexto del negocio», sabe si en este momento estás dentro o fuera de él.</p>' +
        '<ul><li>Cuando pregunta cuándo contactar a alguien, ofrece dos o tres horas concretas dentro de tu horario.</li>' +
        '<li>Si la persona pide una hora en la que no atiendes, se lo explica y le ofrece la más cercana.</li>' +
        '<li>Tiene a mano el calendario de las próximas dos semanas. Si hoy es lunes 2 de noviembre y el cliente dice «para el viernes», escribe «viernes 6 de noviembre». Si alguna vez pone un número que no corresponde a ese día, se corrige antes de enviarse.</li>' +
        '<li>Si tu negocio usa la hora de Colombia, también conoce los festivos del país y no ofrece llamadas ni visitas esos días.</li></ul>',
    },
    {
      h2: 'Cómo entrenarlo con la información de tu negocio',
      html: '<p>El agente responde tan bien como la información que le das. El editor tiene siete pasos: Identidad, Respuestas, Canales, Calificación, Proceso, Probar y Mejoras.</p>' +
        '<ul><li><b>Contexto del negocio:</b> qué vendes, precios, proceso, zonas y horario.</li>' +
        '<li><b>Preguntas frecuentes:</b> respuestas que el agente da tal cual, sin improvisar.</li>' +
        '<li><b>Mensaje de bienvenida:</b> el saludo exacto para quien escribe solo «hola». Si en su primer mensaje ya dice qué busca, el agente le responde directo.</li>' +
        '<li><b>Catálogo:</b> tus productos de CRM → Productos, una hoja de Google o tu tienda conectada. El agente consulta ese mismo catálogo al responder.</li></ul>' +
        '<p>En el paso «Probar» le escribes como un cliente. No crea ningún lead ni conversación, y al lado ves qué datos capturó, a qué proceso de venta manda la conversación y si la califica. Con «Corregir esta respuesta» cuentas qué debió decir y un entrenador con IA te propone el cambio antes de aplicarlo.</p>',
    },
    {
      h2: 'Ejemplos por tipo de negocio',
      html: '<table><thead><tr><th>Negocio</th><th>Qué averigua el agente</th><th>Cuándo pasa a un asesor</th></tr></thead><tbody>' +
        '<tr><td>Inmobiliaria</td><td>Si quiere comprar o arrendar, zona y presupuesto</td><td>Cuando califica; va al proceso de Venta o de Arriendo</td></tr>' +
        '<tr><td>Clínica</td><td>Tratamiento que le interesa y disponibilidad</td><td>Si pide un servicio que no marcaste para que el agente lo agende solo</td></tr>' +
        '<tr><td>Tienda</td><td>Producto, talla o color que busca</td><td>Si pregunta por algo que no está en tu catálogo</td></tr>' +
        '<tr><td>Restaurante</td><td>Para cuándo y para cuántas personas</td><td>Cuando pide hablar con alguien; el agente toma el día con su fecha exacta</td></tr>' +
        '<tr><td>Servicios</td><td>Qué necesita y para qué fecha</td><td>Cuando cumple los criterios, con nombre y correo ya pedidos</td></tr>' +
        '</tbody></table>' +
        '<p>Ejemplo: Andrés Rojas busca arriendo en Medellín hasta $2.500.000 al mes. El agente lo califica, lo manda al proceso de Arriendo y, antes de entregarlo, pide su correo.</p>',
    },
    {
      h2: 'Errores comunes al configurar un agente',
      html: '<ul><li><b>Dejar el contexto en dos líneas.</b> Sin precios, zonas ni horario, el agente no tiene con qué responder y escala casi todo.</li>' +
        '<li><b>No escribir el horario.</b> Sin horario en el contexto, el agente no puede ofrecer horas concretas para llamar.</li>' +
        '<li><b>Escribir una segunda pregunta en «Qué respuesta lo da por bueno».</b> Esa casilla es el criterio, no otra pregunta.</li>' +
        '<li><b>Activar el enrutado sin marcar quién atiende cada proceso.</b> El lead se reparte por la regla de la fuente y puede caerle a quien no lleva ese proceso.</li>' +
        '<li><b>Encenderlo sin probar.</b> Diez minutos en «Probar» te ahorran respuestas raras con clientes reales.</li></ul>',
    },
  ],
  pasos: {
    h2: 'Cómo activar que el agente pida datos antes de escalar, paso a paso',
    intro: 'La opción está en el primer paso del editor. Actívala, guarda y pruébala antes de usarla con clientes.',
    items: [
      { t: 'Abre tu agente', d: 'Ve a Conversaciones → Agentes IA y pulsa la tarjeta de tu agente. Si aún no tienes uno, pulsa «Crear nuevo agente».' },
      { t: 'Revisa la frase de entrega', d: 'En el paso «Identidad», escribe en «Frase cuando escala a humano» lo que dirá al pasar la conversación, por ejemplo «Claro, en un momento te comunico con un asesor».' },
      { t: 'Activa la opción', d: 'En el mismo paso, marca «Pide nombre, teléfono y correo antes de pasar a un asesor».' },
      { t: 'Guarda', d: 'Pulsa «Guardar cambios». El probador responde con lo que está guardado, así que guarda antes de probar.' },
      { t: 'Pruébalo', d: 'Ve al paso «Probar» y escribe «quiero hablar con un asesor». El agente debe pedirte los datos. En el mensaje siguiente, dé o no los datos, debe pasar la conversación.' },
      { t: 'Corrige si hace falta', d: 'Si una respuesta no te convence, pulsa «Corregir esta respuesta» y cuéntale qué debió decir. Lo que aprendió queda en el paso «Mejoras».' },
    ],
  },
  faq: [
    {
      q: '¿El agente de IA responde en WhatsApp las 24 horas?',
      a: 'Sí. El agente contesta por chat a cualquier hora. Lo que respeta tu horario de atención es cuándo un asesor puede llamar: fuera de horario, ofrece la próxima franja disponible en vez de prometer una llamada inmediata.',
    },
    {
      q: '¿Qué pasa si el agente no sabe la respuesta?',
      a: 'No la inventa. Dice que eso lo confirma un asesor y ofrece pasar la conversación. Si menciona un precio que no está en tu catálogo ni en su entrenamiento, el mensaje no sale: se reescribe o la conversación pasa a tu equipo.',
    },
    {
      q: '¿La persona sabe que habla con una IA?',
      a: 'Tú decides. Si marcas «Puede decir que es un asistente digital», cuando le pregunten responde que es el asistente digital de tu negocio y ofrece pasar con alguien del equipo. Si no la marcas, ni lo confirma ni lo niega.',
    },
    {
      q: '¿Puedo revisar lo que dijo el agente?',
      a: 'Sí. Todo queda en Conversaciones con las marcas de WhatsApp (enviado, entregado y leído), y lo rechazado aparece en rojo con el motivo. Junto a cada mensaje del agente está «Corregir».',
    },
    {
      q: '¿El agente pide el teléfono en WhatsApp?',
      a: 'No. En WhatsApp ya tiene el número. Pide solo lo que falta, nombre y correo, y pasa la conversación en el mensaje siguiente aunque no los den.',
    },
    {
      q: '¿Puedo probar el agente sin gastar mensajes reales?',
      a: 'Sí. En el paso «Probar» conversas con él como un cliente. No crea leads y esas pruebas no cuentan en el consumo del agente. Con «Compartir con tu cliente» otra persona lo prueba sin cuenta.',
    },
  ],
  relacionados: ['whatsapp-en-tiempo-real', 'campos-personalizados-crm', 'anuncios-clic-a-whatsapp-meta-ads'],
  enlaces: [
    { url: '/crm/whatsapp/', texto: 'CRM con WhatsApp' },
    { url: '/crm/', texto: 'CRM para pymes de LatAm' },
    { url: '/crm/pipeline-de-ventas/', texto: 'Pipeline de ventas' },
  ],
};
