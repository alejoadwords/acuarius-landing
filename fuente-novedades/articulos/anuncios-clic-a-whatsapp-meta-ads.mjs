export const ARTICULO = {
  slug: 'anuncios-clic-a-whatsapp-meta-ads',
  kw: 'anuncios de clic a WhatsApp',
  title: 'Anuncios de clic a WhatsApp: mide qué campaña vende',
  description: 'Une tus anuncios de clic a WhatsApp de Meta con cada conversación y cada venta del CRM: campaña, conjunto y anuncio en la ficha, y la venta de vuelta a Meta.',
  h1: 'Anuncios de clic a WhatsApp: de la conversación a la venta, campaña por campaña',
  modulo: 'Pauta',
  publicado: '2026-11-02',
  edicion: 1,
  resumen: 'Cada chat que llega desde un anuncio de Meta queda con su campaña, su conjunto y su anuncio, entra al tablero correcto y su venta vuelve a Meta.',
  respuesta: 'Los anuncios de clic a WhatsApp son anuncios de Meta (Facebook e Instagram) que abren un chat con tu negocio en vez de una página web. Acuarius une cada uno de esos chats con su campaña, su conjunto y su anuncio, los lleva al tablero de ventas que elijas y te muestra, campaña por campaña, cuántas conversaciones terminaron en venta. Además puede reportarle esas ventas a Meta.',
  video: { id: 'VrvLXCLwUX0', titulo: 'Conecta tus cuentas publicitarias a Acuarius: Google, Meta y LinkedIn', subido: '2026-08-05', segundos: 205, propio: false },
  ilustracion: 'pauta',
  secciones: [
    {
      h2: '¿Qué son los anuncios de clic a WhatsApp?',
      html: '<p>Los anuncios de clic a WhatsApp son anuncios de Meta cuyo botón abre una conversación de WhatsApp con tu negocio, con un primer mensaje ya escrito. La persona no llena un formulario ni visita tu web: te escribe.</p>' +
        '<p>En LatAm funcionan porque así se compra: la gente pregunta precio y disponibilidad por WhatsApp antes de decidir. El contacto llega caliente y con su teléfono. El reto es saber cuáles de esos chats compraron y qué campaña los trajo.</p>',
    },
    {
      h2: '¿Por qué es difícil medir los anuncios de clic a WhatsApp?',
      html: '<p>Porque Meta cuenta conversaciones, no ventas. En el Administrador de anuncios ves cuántas conversaciones inició cada campaña, pero la venta pasa después, dentro del chat, donde Meta ya no mira.</p>' +
        '<p>Lo de siempre: la campaña A dice 120 conversaciones, la B dice 80 y el equipo vendió 15. Nadie sabe de cuál vino cada venta, y se sube el presupuesto a la que más conversa, que no siempre es la que más vende.</p>' +
        '<p>Además, Meta solo le dice al WhatsApp de qué anuncio vino el chat, no la campaña ni el conjunto. Si nadie pregunta, el chat queda como «whatsapp» y se pierde el rastro.</p>',
    },
    {
      h2: '¿Cómo une Acuarius el anuncio con la conversación y la ficha?',
      html: '<p>Cuando alguien te escribe desde un anuncio, Acuarius toma el anuncio de origen y le pregunta a tu cuenta de Meta Ads a qué campaña y a qué conjunto pertenece. Para eso necesitas dos cosas: tu WhatsApp conectado a Acuarius y tu cuenta de Meta Ads conectada en <b>Plataformas de pauta</b>.</p>' +
        '<ul>' +
        '<li><b>En la conversación:</b> junto al canal aparece «Anuncio:» con el nombre de la campaña. Al pasar el cursor ves la ruta completa: campaña, conjunto y anuncio.</li>' +
        '<li><b>En la ficha del lead:</b> quedan la campaña, el conjunto, el anuncio y el identificador del clic. Pasa también si el contacto ya existía en tu CRM o si lo creaste a mano.</li>' +
        '<li><b>En el agente de IA:</b> si usas uno, entra a la conversación sabiendo qué anuncio vio la persona, así que no le pregunta lo que ella ya dijo al hacer clic.</li>' +
        '</ul>' +
        '<p>Si Meta no responde a tiempo, el mensaje entra igual y la campaña se completa después, al abrir el inbox.</p>',
    },
    {
      h2: '¿Qué diferencia hay entre las columnas Conv. y Chats?',
      html: '<p>En <b>Marketing → Plataformas de pauta</b>, la tabla de campañas se parte en dos: lo que dice la red y lo que dice tu CRM. En las campañas de clic a WhatsApp, dos columnas se miran juntas:</p>' +
        '<table><thead><tr><th>Columna</th><th>Qué cuenta</th><th>De dónde sale</th></tr></thead><tbody>' +
        '<tr><td><b>Conv.</b></td><td>Las conversaciones iniciadas que reporta Meta, el mismo «Resultados» del Administrador de anuncios.</td><td>Meta</td></tr>' +
        '<tr><td><b>Chats</b></td><td>Los chats de ese anuncio que llegaron a Acuarius, hayan pasado o no al pipeline.</td><td>Tu CRM</td></tr>' +
        '</tbody></table>' +
        '<p>Al lado siguen Leads, Ganados, Ingresos y CPL real. Un chat solo es lead si pasa al pipeline o deja sus datos, por eso Chats suele ser mayor que Leads.</p>' +
        '<h3>¿Por qué Conv. y Chats pueden no coincidir?</h3>' +
        '<ul>' +
        '<li><b>Conectaste tu WhatsApp a mitad del período.</b> La pantalla te avisa desde qué fecha cuenta Chats; usa en Meta ese mismo rango.</li>' +
        '<li><b>Miras rangos distintos.</b> Acuarius cuenta los días en la hora de Colombia, como la cuenta publicitaria. Usa en Meta exactamente las mismas fechas.</li>' +
        '<li><b>No tienes Meta Ads conectado.</b> Sin la cuenta publicitaria, Acuarius no puede saber de qué campaña es cada chat.</li>' +
        '</ul>' +
        '<p>Los leads sin dato de campaña salen aparte como «Sin campaña identificada».</p>',
    },
    {
      h2: '¿Cómo mandar cada campaña a su propio tablero?',
      html: '<p>Si tienes más de un proceso de venta, cada campaña puede caer en el suyo. Al pulsar «Pasar al pipeline» en una conversación que vino de un anuncio, la ventana te dice «Vino de la campaña…» con el anuncio y el conjunto, y si esa campaña ya tiene tablero, viene elegido.</p>' +
        '<p>Marca la casilla «Los próximos de esta campaña, directo al proceso elegido» y los siguientes chats de esa campaña entran solos ahí. La regla se guarda con el identificador de la campaña, así que sigue funcionando aunque le cambies el nombre en Meta.</p>' +
        '<p>Para no pasar cada chat a mano, en <b>Conversaciones → Canales</b> marca «Los que vienen de un anuncio entran siempre»: cada chat de pauta queda como lead con su campaña, aunque la persona no deje datos.</p>',
    },
    {
      h2: '¿Cómo se cierra el ciclo con las ventas?',
      html: '<p>Cuando ganas un lead que llegó por un anuncio, la venta y su valor aparecen en Ganados e Ingresos de su campaña. Con eso ves el costo real por venta de cada campaña, no solo el costo por conversación.</p>' +
        '<p>Además, en <b>Plataformas de pauta → Ventas a la pauta</b> puedes reportarle a Meta lo que pasa en tu CRM, unido al clic del anuncio: el chat nuevo como «lead enviado», la etapa que marques como «lead calificado» y la venta como «compra». Si vendes por WhatsApp no necesitas pixel: pulsa «Activar solo con WhatsApp». Así Meta puede buscar personas que compran, no solo personas que escriben.</p>' +
        '<p>Meta une la venta al clic solo durante 7 días desde que la persona escribió. Después, si tienes pixel, se envía con teléfono y correo cifrados. Ahí mismo ves cada venta enviada y, si alguna no llegó, por qué.</p>',
    },
    {
      h2: 'Ejemplos por tipo de negocio',
      html: '<ul>' +
        '<li><b>Inmobiliaria:</b> arriendo y venta en campañas separadas, cada una a su tablero. La de venta trae menos chats pero más cierres.</li>' +
        '<li><b>Clínica:</b> la valoración gratuita llena el inbox; la de ortodoncia trae menos chats, pero cada paciente vale $4.500.000.</li>' +
        '<li><b>Restaurante:</b> los chats de eventos privados van a un tablero con cotización; los de reservas, a otro.</li>' +
        '<li><b>Tienda:</b> un anuncio por producto. Ves cuál terminó en pedido y cuál solo trajo preguntas de precio.</li>' +
        '<li><b>Servicios:</b> una academia ve que los cursos de fin de semana cierran y los de entre semana no.</li>' +
        '</ul>',
    },
    {
      h2: 'Errores comunes al medir anuncios de clic a WhatsApp',
      html: '<ul>' +
        '<li><b>Comparar Conv. con Leads.</b> Lo que se compara con Meta es la columna Chats. Leads solo cuenta los chats que pasaron al pipeline.</li>' +
        '<li><b>Conectar el WhatsApp y no Meta Ads.</b> Verás que el chat vino de un anuncio, pero no de qué campaña.</li>' +
        '<li><b>Marcar la venta semanas después.</b> Meta ya no la une al clic. Pásala a ganado el día que se cierra.</li>' +
        '<li><b>Decidir por conversaciones.</b> Mira Ganados, Ingresos y CPL real antes de mover presupuesto.</li>' +
        '</ul>',
    },
  ],
  pasos: {
    h2: 'Cómo ver la campaña de cada conversación de WhatsApp paso a paso',
    intro: 'Antes, conecta tu WhatsApp a Acuarius con la app de Meta de tu negocio.',
    items: [
      { t: 'Conecta Meta Ads', d: 'Ve a Marketing → Plataformas de pauta y pulsa «Conectar Meta Ads». Autoriza con tu cuenta de Facebook. Lo hace el dueño o un administrador de la cuenta.' },
      { t: 'Elige la cuenta publicitaria', d: 'Si la tarjeta dice «Falta elegir la cuenta», pulsa «Elegir la cuenta» y marca la cuenta publicitaria de la que salen tus anuncios de WhatsApp.' },
      { t: 'Abre una conversación que vino de un anuncio', d: 'En Conversaciones, junto al canal verás «Anuncio:» con el nombre de la campaña. Pasa el cursor para ver campaña, conjunto y anuncio.' },
      { t: 'Pásala al pipeline', d: 'Pulsa «Pasar al pipeline». La ventana muestra «Vino de la campaña…». Elige el proceso y la etapa, marca «Los próximos de esta campaña, directo al proceso elegido» y pulsa «Crear lead».' },
      { t: 'Revisa tus campañas', d: 'En Plataformas de pauta compara Conv. con Chats y mira Ganados e Ingresos. Haz clic en una campaña para ver sus leads uno por uno y en qué etapa quedó cada uno.' },
      { t: 'Reporta las ventas a Meta', d: 'En Plataformas de pauta → Ventas a la pauta, pulsa «Activar solo con WhatsApp» o configura tu pixel. Desde ahí ves cada venta enviada.' },
    ],
  },
  faq: [
    {
      q: '¿Qué necesito para ver de qué campaña viene un WhatsApp?',
      a: 'Tu WhatsApp conectado a Acuarius y tu cuenta de Meta Ads conectada en Marketing → Plataformas de pauta. Meta solo dice de qué anuncio vino el chat; Acuarius le pregunta a tu cuenta publicitaria por la campaña y el conjunto.',
    },
    {
      q: '¿Por qué Meta dice más conversaciones de las que veo en mi CRM?',
      a: 'Compara Conv. con Chats, no con Leads: un chat solo es lead si pasa al pipeline o deja sus datos. Si la diferencia es grande, revisa si conectaste el WhatsApp a mitad del período.',
    },
    {
      q: '¿Acuarius cambia algo en mis campañas de Meta?',
      a: 'Lee tus campañas. Solo pausa un anuncio o baja un presupuesto cuando tú lo apruebas en Reglas o en el Analista IA. Nunca activa un anuncio ni sube un presupuesto.',
    },
    {
      q: '¿Puedo reportarle mis ventas de WhatsApp a Meta sin pixel?',
      a: 'Sí. En Plataformas de pauta → Ventas a la pauta pulsa «Activar solo con WhatsApp». La venta de quien llegó por un anuncio de clic a WhatsApp se le reporta a esa campaña, siempre que se marque dentro de los 7 días desde que la persona escribió.',
    },
    {
      q: '¿Puedo mandar cada campaña a un tablero distinto?',
      a: 'Sí. Al pasar la conversación al pipeline, marca «Los próximos de esta campaña, directo al proceso elegido» y los siguientes chats de esa campaña entran solos a ese tablero.',
    },
    {
      q: '¿Funciona con publicaciones orgánicas que tienen botón de WhatsApp?',
      a: 'El chat entra igual, pero se marca como orgánico y no se suma a los resultados de tus campañas pagadas.',
    },
  ],
  relacionados: ['whatsapp-en-tiempo-real', 'agente-ia-whatsapp-datos-de-contacto', 'productos-en-el-crm'],
  enlaces: [
    { url: '/crm/whatsapp/', texto: 'CRM con WhatsApp' },
    { url: '/benchmarks/costo-meta-ads-colombia/', texto: 'Costo de Meta Ads en Colombia' },
  ],
};
