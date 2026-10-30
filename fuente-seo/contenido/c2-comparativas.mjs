// Contenido del Cluster 2 · Comparativas y alternativas.
//
// Los precios de terceros se consultaron en sus páginas oficiales el
// 19-10-2026 (CONSULTA). Cambian a menudo: cada página dice la fecha y enlaza
// la fuente, y antes de tocar una cifra hay que volver a consultarla. Un dato
// viejo de un competidor es lo primero que te reclaman.
//
// Regla de tono: decir en qué gana el otro. Una comparativa que solo elogia a
// Acuarius no la cree nadie, ni Google ni el lector.

const CONSULTA = '19 de octubre de 2026';

const F = {
  hubspot: '<a href="https://www.hubspot.com/pricing/sales" rel="nofollow noopener" target="_blank">precios de HubSpot</a>',
  hubspotWA: '<a href="https://knowledge.hubspot.com/inbox/connect-whatsapp-to-the-conversations-inbox" rel="nofollow noopener" target="_blank">requisitos de WhatsApp en HubSpot</a>',
  kommo: '<a href="https://www.kommo.com/pricing/" rel="nofollow noopener" target="_blank">precios de Kommo</a>',
  clientify: '<a href="https://clientify.com/es/precios" rel="nofollow noopener" target="_blank">precios de Clientify</a>',
  leadsales: '<a href="https://leadsales.io/precios/" rel="nofollow noopener" target="_blank">precios de Leadsales</a>',
  callbell: '<a href="https://www.callbell.eu/es/precios/" rel="nofollow noopener" target="_blank">precios de Callbell</a>',
  aa: '<a href="https://agencyanalytics.com/pricing" rel="nofollow noopener" target="_blank">precios de AgencyAnalytics</a>',
};
const fuentes = (...k) => `Precios consultados el ${CONSULTA} en ${k.map((x) => F[x]).join(', ')}. Pueden cambiar; confírmalos antes de decidir.`;

const META = 'En todos los casos, Meta cobra aparte las conversaciones que inicia la empresa con plantillas de WhatsApp.';

export const CONTENIDO = {
  '/mejores-crm-con-whatsapp/': {
    badge: 'Comparativa actualizada · octubre 2026',
    sub: 'Seis CRM que trabajan con WhatsApp, comparados por lo que importa a una pyme en Latinoamérica: precio real con tres usuarios, API oficial, agente de IA, pipeline de ventas y forma de pago.',
    secciones: [
      { tipo: 'texto', label: 'Cómo comparamos', h2: 'Qué mirar antes de elegir un CRM con WhatsApp',
        parrafos: [
          'Casi todos los CRM dicen "integración con WhatsApp", pero significa cosas muy distintas. En algunos es un botón que abre WhatsApp Web; en otros, una bandeja compartida con la API oficial, asignación de chats y respuestas automáticas. Antes de comparar precios, hay que comparar lo mismo.',
          'Para esta comparativa usamos cinco criterios: <b>precio mensual con tres usuarios</b> (el tamaño típico de un equipo comercial pequeño), si usa la <b>API oficial de WhatsApp</b>, si trae un <b>agente de IA</b> que responda por ti, si tiene un <b>pipeline de ventas</b> de verdad y si puedes <b>pagar mes a mes</b> o te exige un compromiso largo.',
          'Aclaración necesaria: Acuarius es nuestro producto. Por eso enlazamos la página de precios oficial de cada competidor y decimos en qué gana cada uno.',
        ] },
      { tipo: 'tabla', label: 'Tabla comparativa', h2: 'Los mejores CRM con WhatsApp, lado a lado',
        cab: ['CRM', 'Precio con 3 usuarios', 'Pago', 'Agente de IA', 'Mejor para'],
        filas: [
          ['Acuarius', '39 USD/mes (3 usuarios incluidos)', 'Mensual o anual', 'Incluido: 500 respuestas al mes en Pro', 'Pymes de LatAm que venden por WhatsApp y quieren CRM, agente y campañas en un solo precio'],
          ['Kommo', 'Desde 75 USD/mes (25 USD por usuario)', 'Mínimo 6 meses por adelantado', 'Desde el plan Advanced (35 USD por usuario)', 'Equipos con mucho volumen de chats y varios números'],
          ['HubSpot', 'WhatsApp nativo desde ~300 USD/mes + 1.500 USD de incorporación', 'Mensual o anual', 'Funciones de IA según el plan', 'Empresas con marketing complejo y presupuesto alto'],
          ['Clientify', 'Desde 65 USD/mes (39 USD/mes pagando el año)', 'Mensual o anual', 'Según el plan', 'Pymes que quieren CRM y marketing en una herramienta española'],
          ['Leadsales', '97 USD/mes; con API oficial, 133 USD/mes', 'Mensual, trimestral o anual', 'Aparte: desde 87 USD/mes tras el primer mes', 'Equipos de ventas en México que viven en WhatsApp'],
          ['Callbell', '~67 USD/mes (15 USD por agente + WhatsApp desde 22 USD)', 'Mensual', 'Integración con ChatGPT en Enterprise', 'Atención al cliente multiagente más que ventas'],
        ],
        nota: fuentes('kommo', 'hubspot', 'clientify', 'leadsales', 'callbell') + ' ' + META },
      { tipo: 'tarjetas', label: 'Uno por uno', h2: 'Lo bueno y lo no tan bueno de cada uno',
        items: [
          { t: 'Acuarius', d: '<b>A favor:</b> CRM, bandeja de WhatsApp, Instagram y Messenger, agente de IA, automatizaciones y campañas en el mismo plan de 39 USD con tres usuarios. En español y pensado para LatAm. <b>En contra:</b> es más joven que los demás y su catálogo de integraciones es más corto. <a href="/crm/whatsapp/">Ver CRM con WhatsApp</a>.' },
          { t: 'Kommo', d: '<b>A favor:</b> nació para vender por chat, tiene Salesbot, mucha experiencia en WhatsApp y un marketplace amplio. <b>En contra:</b> cobra por usuario, no permite pago mensual (mínimo seis meses) y el agente de IA no está en el plan básico. <a href="/comparativas/acuarius-vs-kommo/">Kommo vs Acuarius</a>.' },
          { t: 'HubSpot', d: '<b>A favor:</b> el ecosistema más completo del mercado, con marketing, servicio, contenidos e integraciones para todo. <b>En contra:</b> WhatsApp nativo solo llega con Marketing Hub o Service Hub Professional, con incorporación obligatoria de 1.500 USD. <a href="/alternativas/hubspot/">Alternativas a HubSpot</a>.' },
          { t: 'Clientify', d: '<b>A favor:</b> en español, combina CRM y marketing, con prueba sin tarjeta. <b>En contra:</b> el precio mensual sube bastante si no pagas el año completo.' },
          { t: 'Leadsales', d: '<b>A favor:</b> muy enfocado en ventas por WhatsApp, con precios en pesos mexicanos. <b>En contra:</b> la API oficial empieza en el plan de 133 USD y el agente de IA se paga aparte.' },
          { t: 'Callbell', d: '<b>A favor:</b> barato por agente y fácil de arrancar para atender chats en equipo. <b>En contra:</b> WhatsApp e Instagram son complementos de pago, y no es un CRM de ventas con pipeline.' },
        ] },
      { tipo: 'texto', label: 'Recomendación', h2: 'Cuál elegir según tu caso',
        parrafos: [
          '<b>Si eres una pyme de 2 a 10 personas que vende por WhatsApp</b> y quieres pagar mes a mes un precio predecible, Acuarius es la opción con más incluido por menos dinero. Puedes probarlo 14 días gratis.',
          '<b>Si manejas un volumen muy alto de chats con varios números</b> y no te importa pagar seis meses por adelantado, Kommo es una alternativa madura.',
          '<b>Si tu empresa ya vive en HubSpot</b> para marketing y servicio, sumar su canal de WhatsApp tiene sentido aunque cueste más.',
          '<b>Si solo necesitas que varias personas respondan el mismo WhatsApp</b>, sin pipeline de ventas, una herramienta de atención como Callbell puede bastarte.',
        ] },
    ],
    faq: [
      { q: '¿Cuál es el mejor CRM con WhatsApp para pymes?', a: 'Depende del tamaño y del presupuesto. Para una pyme latinoamericana de pocos usuarios que vende por WhatsApp, lo más importante es que incluya la API oficial, una bandeja compartida y un pipeline sin cobrar cada cosa por separado. En esa comparación, Acuarius incluye todo en 39 USD al mes con tres usuarios.' },
      { q: '¿Qué diferencia hay entre WhatsApp Business y un CRM con WhatsApp?', a: 'WhatsApp Business funciona en un teléfono y para pocas personas. Un CRM con WhatsApp usa la API oficial para que todo el equipo atienda el mismo número, cada chat quede asociado a un cliente y puedas medir qué conversaciones terminan en venta.' },
      { q: '¿Hay un CRM con WhatsApp gratis?', a: 'Algunos tienen planes gratis sin WhatsApp. En Acuarius, el plan Free incluye CRM para 50 contactos, y la bandeja de WhatsApp se puede probar 14 días gratis en el plan Pro. <a href="/crm/gratis/">Ver CRM gratis</a>.' },
      { q: '¿Cuánto cobra Meta por los mensajes de WhatsApp?', a: 'Meta cobra por las conversaciones que la empresa inicia con plantillas, con una tarifa que depende del país y del tipo de mensaje. Ese costo es el mismo en cualquier CRM que use la API oficial.' },
    ],
    cta: { h2: 'Prueba el CRM con WhatsApp que más incluye', sub: '14 días gratis del plan Pro, sin tarjeta de crédito.' },
  },

  '/alternativas/hubspot/': {
    badge: 'Alternativa a HubSpot para LatAm',
    sub: 'HubSpot es un gran producto, pero para una pyme latinoamericana suele quedar grande y caro, sobre todo cuando quieres WhatsApp. Estas son las alternativas y lo que cuesta cada una.',
    secciones: [
      { tipo: 'texto', label: 'Por qué buscar alternativas', h2: 'Por qué tantas pymes buscan alternativas a HubSpot',
        parrafos: [
          'El CRM gratis de HubSpot es una excelente puerta de entrada. El problema llega cuando el negocio crece y necesita lo que en Latinoamérica es básico: <b>vender por WhatsApp</b>. Según la propia documentación de HubSpot, conectar WhatsApp a su bandeja exige Marketing Hub o Service Hub en nivel Professional.',
          'El nivel Professional cuesta desde 90 a 100 USD por usuario al mes y lleva una incorporación obligatoria de 1.500 USD. Para un equipo de tres personas, eso es más de 3.000 USD el primer año antes de enviar el primer mensaje.',
        ] },
      { tipo: 'tabla', label: 'Comparación de costos', h2: 'Cuánto cuesta HubSpot frente a sus alternativas',
        cab: ['', 'Con 3 usuarios', 'WhatsApp oficial', 'Costo de entrada'],
        filas: [
          ['HubSpot Starter', '~60 USD/mes', 'No incluido', '0 USD'],
          ['HubSpot Service Hub Professional', '~300 USD/mes', 'Sí', '1.500 USD de incorporación'],
          ['Acuarius Pro', '39 USD/mes', 'Sí, con agente de IA', '0 USD, 14 días gratis'],
          ['Kommo Advanced', '105 USD/mes', 'Sí', '630 USD (6 meses por adelantado)'],
          ['Clientify', 'Desde 65 USD/mes', 'Sí', '0 USD'],
        ],
        nota: fuentes('hubspot', 'hubspotWA', 'kommo', 'clientify') + ' ' + META },
      { tipo: 'tarjetas', label: 'Las alternativas', h2: 'Las mejores alternativas a HubSpot en español',
        items: [
          { t: 'Acuarius', d: 'CRM en español con WhatsApp, Instagram y Messenger en una bandeja, agente de IA, automatizaciones, campañas, propuestas y reportes. 39 USD al mes con tres usuarios. <a href="/comparativas/acuarius-vs-hubspot/">HubSpot vs Acuarius en detalle</a>.' },
          { t: 'Kommo', d: 'CRM pensado para mensajería, con WhatsApp desde el plan básico. Cobra por usuario y exige pagar al menos seis meses. <a href="/alternativas/kommo/">Ver alternativas a Kommo</a>.' },
          { t: 'Clientify', d: 'CRM y marketing en español, con precio más bajo si pagas el año completo.' },
          { t: 'Zoho CRM', d: 'Muy configurable y con buena relación precio-funciones, aunque su curva de aprendizaje es más alta y WhatsApp va por integraciones.' },
          { t: 'Pipedrive', d: 'Excelente pipeline visual y fácil de usar para equipos de ventas; la mensajería de WhatsApp depende de complementos.' },
          { t: 'Leadsales', d: 'Enfocado en vender por WhatsApp desde México; la API oficial y el agente de IA van en planes superiores o aparte.' },
        ] },
      { tipo: 'texto', label: 'Cuándo quedarse', h2: 'Cuándo sí conviene quedarse con HubSpot',
        parrafos: [
          'Si tu empresa ya tiene un equipo de marketing que usa a fondo los flujos, el blog, las landing pages y los reportes de atribución de HubSpot, cambiar tiene un costo real. También si dependes de integraciones muy específicas de su marketplace.',
          'Pero si lo que necesitas es que tu equipo comercial atienda WhatsApp, siga cada oportunidad y no pierda leads, pagar el nivel Professional suele ser comprar mucho más de lo que vas a usar.',
        ] },
      { tipo: 'pasos', label: 'Migrar', h2: 'Cómo pasar de HubSpot a Acuarius',
        items: [
          { t: 'Exporta tus contactos', d: 'Desde HubSpot descargas tus contactos y negocios en CSV.' },
          { t: 'Impórtalos', d: 'El importador de Acuarius reconoce las columnas y reparte los contactos entre tu equipo.' },
          { t: 'Recrea tus etapas', d: 'Copia las etapas de tu pipeline; son libres y se editan en segundos.' },
          { t: 'Conecta WhatsApp', d: 'Y deja que el agente de IA atienda desde el primer día.' },
        ] },
    ],
    faq: [
      { q: '¿Cuál es la mejor alternativa a HubSpot en español?', a: 'Para pymes latinoamericanas que venden por WhatsApp, Acuarius, Kommo y Clientify son las más usadas. Acuarius es la que incluye WhatsApp, agente de IA y tres usuarios por menos dinero: 39 USD al mes.' },
      { q: '¿HubSpot tiene WhatsApp en el plan gratis?', a: 'No. Según la documentación de HubSpot, la conexión nativa con WhatsApp requiere Marketing Hub o Service Hub Professional o Enterprise.' },
      { q: '¿Cuánto cuesta HubSpot Professional?', a: 'Desde 90 a 100 USD por usuario al mes, más una incorporación obligatoria de 1.500 USD, según su página de precios consultada en octubre de 2026.' },
      { q: '¿Puedo llevarme mis datos de HubSpot?', a: 'Sí. HubSpot permite exportar contactos y negocios en CSV, y el importador de Acuarius los carga reconociendo las columnas.' },
    ],
    cta: { h2: 'Todo lo que usas de HubSpot, con WhatsApp y sin pagar de más', sub: 'Prueba Acuarius 14 días gratis, sin tarjeta.' },
  },

  '/alternativas/kommo/': {
    badge: 'Alternativa a Kommo',
    sub: 'Kommo es uno de los CRM más conocidos para vender por WhatsApp. Si te frena el pago mínimo de seis meses, el precio por usuario o que el agente de IA no esté en el plan base, estas son las alternativas.',
    secciones: [
      { tipo: 'texto', label: 'Por qué buscar alternativas', h2: 'Las razones más comunes para buscar alternativas a Kommo',
        parrafos: [
          '<b>No hay pago mensual.</b> Según su página de precios, el periodo mínimo de suscripción es de seis meses, y se paga por adelantado. Para una pyme que está probando, es un compromiso grande.',
          '<b>El precio crece con cada usuario.</b> Los planes van de 25 a 45 USD por usuario al mes. Con cinco asesores en el plan Advanced son 175 USD al mes, o 1.050 USD por semestre.',
          '<b>El agente de IA no está en el plan Base.</b> Los agentes de IA aparecen desde el plan Advanced.',
        ] },
      { tipo: 'tabla', label: 'Comparación', h2: 'Kommo frente a sus principales alternativas',
        cab: ['', 'Precio con 3 usuarios', 'Pago mínimo', 'Agente de IA', 'Instagram y Messenger'],
        filas: [
          ['Kommo Base', '75 USD/mes', '6 meses (450 USD)', 'No', 'Sí'],
          ['Kommo Advanced', '105 USD/mes', '6 meses (630 USD)', 'Hasta 3 agentes', 'Sí'],
          ['Acuarius Pro', '39 USD/mes', '1 mes', 'Incluido (500 respuestas al mes)', 'Sí'],
          ['Leadsales Profesional', '133 USD/mes (4 usuarios)', '1 mes', 'Aparte, desde 87 USD/mes', 'Sí'],
          ['Clientify', 'Desde 65 USD/mes', '1 mes', 'Según el plan', 'Sí'],
        ],
        nota: fuentes('kommo', 'leadsales', 'clientify') + ' ' + META },
      { tipo: 'tarjetas', label: 'Las alternativas', h2: 'Alternativas a Kommo para vender por WhatsApp',
        items: [
          { t: 'Acuarius', d: 'WhatsApp, Instagram, Messenger y chat web en una bandeja, agente de IA incluido, pipeline, automatizaciones, campañas y reportes. 39 USD al mes con tres usuarios y pago mensual. <a href="/comparativas/acuarius-vs-kommo/">Kommo vs Acuarius</a>.' },
          { t: 'Leadsales', d: 'CRM mexicano centrado en WhatsApp. La API oficial empieza en el plan Profesional, y el agente de IA se paga aparte.' },
          { t: 'Clientify', d: 'CRM y marketing en español. Más completo en email marketing; el precio baja si pagas anual.' },
          { t: 'HubSpot', d: 'Mucho más grande, pero WhatsApp nativo exige el nivel Professional y una incorporación de 1.500 USD. <a href="/alternativas/hubspot/">Alternativas a HubSpot</a>.' },
          { t: 'Callbell', d: 'Bandeja multiagente barata si lo que necesitas es atención al cliente y no un pipeline de ventas.' },
        ] },
      { tipo: 'texto', label: 'Lo que hace bien Kommo', h2: 'En qué sigue ganando Kommo',
        parrafos: [
          'Kommo lleva años en mensajería y tiene un Salesbot muy flexible, planes con números de WhatsApp ilimitados y un marketplace grande de integraciones. Si tu operación maneja muchos números o muchísimo volumen de chats, es una opción sólida.',
          'Si lo tuyo es un equipo de pocos asesores que necesita pagar mes a mes y tener el agente de IA desde el primer día, una alternativa como Acuarius te sale más barata.',
        ] },
    ],
    faq: [
      { q: '¿Kommo tiene pago mensual?', a: 'No. Según su página de precios, el periodo mínimo de suscripción es de seis meses y no ofrece pago mensual.' },
      { q: '¿Cuánto cuesta Kommo?', a: 'Entre 25 y 45 USD por usuario al mes en los planes Base, Advanced y Pro, facturados al menos por seis meses. Enterprise tiene precio a medida.' },
      { q: '¿Cuál es la alternativa a Kommo más barata?', a: 'Con tres usuarios, Acuarius Pro cuesta 39 USD al mes con pago mensual, frente a 75 USD al mes de Kommo Base pagados por seis meses.' },
      { q: '¿Puedo migrar mis contactos de Kommo?', a: 'Sí. Exporta tus leads de Kommo en CSV o Excel e impórtalos en Acuarius; el importador reconoce las columnas.' },
    ],
    cta: { h2: 'Vende por WhatsApp pagando mes a mes', sub: 'Prueba Acuarius 14 días gratis, sin tarjeta y sin permanencia.' },
  },

  '/comparativas/acuarius-vs-kommo/': {
    badge: 'Comparativa punto por punto',
    sub: 'Los dos son CRM para vender por WhatsApp. Se diferencian en cómo cobran, qué incluye cada plan y para qué tamaño de equipo tiene sentido cada uno.',
    secciones: [
      { tipo: 'tabla', label: 'Resumen', h2: 'Kommo vs Acuarius en una tabla',
        cab: ['', 'Kommo', 'Acuarius'],
        filas: [
          ['Modelo de precio', 'Por usuario: 25, 35 o 45 USD al mes', 'Por plan: Pro 39 USD con 3 usuarios; 9 USD por usuario extra'],
          ['Con 3 usuarios', '75 a 135 USD al mes', '39 USD al mes'],
          ['Con 5 usuarios', '125 a 225 USD al mes', '57 USD al mes'],
          ['Pago mínimo', '6 meses por adelantado', 'Mensual; anual con 2 meses gratis'],
          ['Plan gratis', 'No (prueba gratuita)', 'Sí, para 50 contactos'],
          ['WhatsApp, Instagram y Messenger', 'Sí', 'Sí, más chat web'],
          ['Agente de IA', 'Desde el plan Advanced', 'Incluido en Pro: 500 respuestas al mes'],
          ['Pipeline de ventas', 'Sí', 'Sí, hasta 10 pipelines'],
          ['Automatizaciones', 'Salesbot y automatización del pipeline', 'Flujos con correo, WhatsApp, esperas y condiciones'],
          ['Campañas de correo', 'Por integraciones', 'Incluidas, envíos ilimitados en los planes de pago'],
          ['Propuestas con firma y pago', 'Por integraciones', 'Incluidas'],
          ['Integraciones', 'Marketplace amplio', 'Webhooks, API pública y conectores propios'],
        ],
        nota: fuentes('kommo') + ' ' + META },
      { tipo: 'texto', label: 'Precio', h2: 'La mayor diferencia: cómo cobra cada uno',
        parrafos: [
          'Kommo cobra por usuario y exige pagar al menos seis meses. Con tres asesores en el plan Advanced, son 105 USD al mes, es decir 630 USD por adelantado.',
          'Acuarius cobra por plan. El Pro cuesta 39 USD al mes con tres usuarios incluidos, y cada usuario adicional cuesta 9 USD. Se paga mes a mes y se cancela cuando quieras; si pagas el año, te ahorras dos meses.',
        ] },
      { tipo: 'tarjetas', label: 'Quién gana en qué', h2: 'En qué gana cada uno',
        items: [
          { t: 'Gana Kommo', d: 'Si manejas muchos números de WhatsApp o un volumen de chats muy alto, o si necesitas una integración concreta de su marketplace.' },
          { t: 'Gana Kommo', d: 'Si tu equipo ya sabe usar Salesbot y tienes bots armados que no quieres rehacer.' },
          { t: 'Gana Acuarius', d: 'Si eres una pyme de 2 a 10 personas y quieres pagar mes a mes un precio predecible, con el agente de IA incluido.' },
          { t: 'Gana Acuarius', d: 'Si además del chat necesitas campañas de correo, propuestas con firma y pago, y reportes de ventas sin sumar herramientas.' },
          { t: 'Gana Acuarius', d: 'Si quieres empezar gratis: el plan Free no vence y la prueba de Pro dura 14 días sin tarjeta.' },
          { t: 'Empate', d: 'Los dos usan la API oficial de WhatsApp, y en los dos Meta cobra aparte las plantillas.' },
        ] },
      { tipo: 'pasos', label: 'Migrar', h2: 'Cómo cambiar de Kommo a Acuarius sin perder nada',
        items: [
          { t: 'Exporta desde Kommo', d: 'Tus leads y contactos en CSV o Excel.' },
          { t: 'Importa en Acuarius', d: 'El importador reconoce las columnas y reparte entre tu equipo.' },
          { t: 'Recrea tus etapas', d: 'Copia los nombres de tu pipeline; las etapas son libres.' },
          { t: 'Conecta tus canales', d: 'WhatsApp, Instagram y Messenger, y configura el agente.' },
        ] },
    ],
    faq: [
      { q: '¿Qué es más barato, Kommo o Acuarius?', a: 'Con tres usuarios, Acuarius Pro cuesta 39 USD al mes; Kommo cuesta entre 75 y 135 USD al mes según el plan, pagando al menos seis meses.' },
      { q: '¿Los dos tienen agente de IA?', a: 'Sí, pero en Kommo aparece desde el plan Advanced. En Acuarius está incluido en el plan Pro, con 500 respuestas al mes y paquetes adicionales si necesitas más.' },
      { q: '¿Acuarius tiene permanencia?', a: 'No. Se paga mes a mes y se cancela desde la cuenta. Pagando el año completo te ahorras dos meses.' },
      { q: '¿Cuál es mejor para un equipo grande?', a: 'Para equipos grandes con muchos números de WhatsApp, Kommo ofrece planes con números ilimitados. Para equipos de hasta diez personas, Acuarius suele salir bastante más barato.' },
    ],
    cta: { h2: 'Compáralo tú mismo', sub: 'Prueba Acuarius 14 días gratis con tu propio WhatsApp.' },
  },

  '/comparativas/acuarius-vs-hubspot/': {
    badge: 'Comparativa para pymes',
    sub: 'HubSpot es el estándar del mercado; Acuarius nació para pymes latinoamericanas que venden por WhatsApp. Aquí, lo que cuesta cada uno y en qué gana cada uno.',
    secciones: [
      { tipo: 'tabla', label: 'Resumen', h2: 'HubSpot vs Acuarius en una tabla',
        cab: ['', 'HubSpot', 'Acuarius'],
        filas: [
          ['Plan gratis', 'Sí, hasta 2 usuarios', 'Sí, 50 contactos'],
          ['Plan de entrada', 'Starter: desde ~20 USD por usuario al mes', 'Pro: 39 USD al mes con 3 usuarios'],
          ['WhatsApp nativo', 'Desde Marketing Hub o Service Hub Professional', 'Incluido en Pro'],
          ['Costo con WhatsApp y 3 usuarios', '~300 USD al mes + 1.500 USD de incorporación', '39 USD al mes'],
          ['Agente de IA en WhatsApp', 'Según el plan', 'Incluido: 500 respuestas al mes'],
          ['Pipeline de ventas', 'Sí', 'Sí, hasta 10 pipelines'],
          ['Email marketing', 'Muy completo en Marketing Hub', 'Campañas por etiquetas, envíos ilimitados'],
          ['Ecosistema de integraciones', 'El más amplio del mercado', 'Webhooks, API pública y conectores propios'],
          ['Idioma y soporte', 'Multilenguaje', 'Español latinoamericano'],
        ],
        nota: fuentes('hubspot', 'hubspotWA') + ' ' + META },
      { tipo: 'texto', label: 'El punto clave', h2: 'WhatsApp: donde más se separan',
        parrafos: [
          'En Latinoamérica la venta pasa por WhatsApp, y ahí está la diferencia más grande. Según la documentación de HubSpot, su conexión nativa con WhatsApp requiere Marketing Hub o Service Hub en nivel Professional o Enterprise. Professional cuesta desde 90 a 100 USD por usuario al mes, más una incorporación obligatoria de 1.500 USD.',
          'En Acuarius, WhatsApp, Instagram y Messenger están en el plan Pro de 39 USD al mes, junto con el agente de IA que responde por ti.',
        ] },
      { tipo: 'tarjetas', label: 'Quién gana en qué', h2: 'En qué gana cada uno',
        items: [
          { t: 'Gana HubSpot', d: 'En marketing avanzado: blog, SEO, atribución multitoque y automatización de marketing a gran escala.' },
          { t: 'Gana HubSpot', d: 'En integraciones: si tu operación depende de herramientas muy específicas, su marketplace probablemente las tiene.' },
          { t: 'Gana HubSpot', d: 'Si ya tienes un equipo formado en HubSpot y procesos montados sobre él.' },
          { t: 'Gana Acuarius', d: 'En costo total para una pyme que vende por WhatsApp: 39 USD contra cientos de dólares al mes.' },
          { t: 'Gana Acuarius', d: 'En arranque: se configura en una tarde, sin incorporación de pago ni consultor.' },
          { t: 'Gana Acuarius', d: 'En atención por chat: agente de IA que responde, califica y agenda, incluido en el plan.' },
        ] },
      { tipo: 'texto', label: 'Recomendación', h2: 'Cuál elegir',
        parrafos: [
          'Elige HubSpot si eres una empresa mediana o grande con un equipo de marketing que va a usar a fondo su suite, y si el presupuesto de cientos de dólares al mes no es un problema.',
          'Elige Acuarius si eres una pyme latinoamericana que vende por WhatsApp, quieres CRM, agente de IA, campañas y reportes en un solo precio, y prefieres pagar mes a mes. <a href="/alternativas/hubspot/">Ver todas las alternativas a HubSpot</a>.',
        ] },
    ],
    faq: [
      { q: '¿Acuarius es más barato que HubSpot?', a: 'Para una pyme que necesita WhatsApp, sí: Acuarius Pro cuesta 39 USD al mes con tres usuarios, mientras que el WhatsApp nativo de HubSpot exige un nivel Professional de cientos de dólares al mes más 1.500 USD de incorporación.' },
      { q: '¿HubSpot gratis sirve para vender por WhatsApp?', a: 'El CRM gratis de HubSpot no incluye la conexión nativa con WhatsApp; según su documentación, requiere Marketing Hub o Service Hub Professional.' },
      { q: '¿Puedo usar Acuarius y HubSpot a la vez?', a: 'Sí. Acuarius tiene webhooks y una API pública, así que puedes enviar los leads o los eventos que necesites a otras herramientas.' },
      { q: '¿Cuánto tarda la migración?', a: 'Para una pyme, normalmente una tarde: exportas contactos y negocios de HubSpot en CSV, los importas en Acuarius y recreas tus etapas.' },
    ],
    cta: { h2: 'WhatsApp, CRM y agente de IA por 39 USD al mes', sub: 'Prueba Acuarius 14 días gratis, sin tarjeta.' },
  },

  '/alternativas/agencyanalytics/': {
    badge: 'Para agencias de marketing',
    sub: 'AgencyAnalytics hace muy bien los reportes de marketing. Pero una agencia en Latinoamérica también necesita el CRM de sus clientes, sus leads y su WhatsApp, en español. Estas son las alternativas.',
    secciones: [
      { tipo: 'texto', label: 'Por qué buscar alternativas', h2: 'Por qué una agencia latinoamericana busca alternativas a AgencyAnalytics',
        parrafos: [
          'AgencyAnalytics es una plataforma de reportes de marketing muy completa: conecta decenas de fuentes, tiene portal de cliente con marca blanca y usuarios ilimitados. Su precio, según su página, es de 20 USD por cliente al mes con pago anual.',
          'El límite es lo que viene después del reporte. Tu cliente no te pregunta solo por clics e impresiones: te pregunta cuántos de esos leads compraron. Para responder eso hace falta el CRM, y AgencyAnalytics no lo trae.',
        ] },
      { tipo: 'tabla', label: 'Comparación', h2: 'AgencyAnalytics frente a Acuarius para una agencia con 10 clientes',
        cab: ['', 'AgencyAnalytics', 'Acuarius'],
        filas: [
          ['Precio con 10 clientes', '200 USD/mes (pago anual)', '120 USD/mes (39 de la licencia, que incluye un negocio, y 9 USD por cada cliente adicional)'],
          ['Usuarios', 'Ilimitados', '3 incluidos; 9 USD por usuario extra'],
          ['Reportes de marketing', 'Muy completos, decenas de integraciones', 'Enlace vivo y PDF con leads, ventas y pauta'],
          ['Portal de cliente', 'Con marca blanca', 'Enlace compartido por cliente'],
          ['CRM y pipeline por cliente', 'No', 'Sí, un pipeline propio por cliente'],
          ['WhatsApp y agente de IA para el cliente', 'No', 'Sí'],
          ['SEO por cliente', 'Rank tracker como complemento', 'Proyecto SEO con posiciones y reporte GEO'],
          ['Idioma', 'Inglés', 'Español'],
        ],
        nota: fuentes('aa') },
      { tipo: 'tarjetas', label: 'Las alternativas', h2: 'Alternativas a AgencyAnalytics',
        items: [
          { t: 'Acuarius', d: 'Para agencias que además de reportar quieren operar las ventas del cliente: CRM, WhatsApp con agente de IA, SEO y reportes por cliente. Desde 39 USD al mes y 9 USD por cada cliente adicional.' },
          { t: 'Looker Studio', d: 'Gratis y muy flexible, pero cada reporte se arma a mano y conectar algunas fuentes exige conectores de pago.' },
          { t: 'DashThis', d: 'Reportes de marketing simples de armar; cobra por cantidad de dashboards.' },
          { t: 'Whatagraph', d: 'Reportes visuales y automáticos para agencias, con precio orientado a agencias medianas y grandes.' },
        ] },
      { tipo: 'texto', label: 'La diferencia', h2: 'Reportar el marketing no es lo mismo que mostrar ventas',
        parrafos: [
          'Un reporte que dice "conseguimos 300 leads a 4 USD" no responde la pregunta del dueño: ¿cuánto vendí? Cuando el CRM del cliente vive en la misma herramienta que la pauta, puedes mostrarle qué campaña trajo los clientes que compraron y cuánto costó cada venta.',
          'Eso cambia la conversación de la renovación: dejas de defender clics y empiezas a mostrar negocio. Si solo necesitas reportes de marketing en inglés con muchas fuentes, AgencyAnalytics sigue siendo una excelente opción.',
        ] },
    ],
    faq: [
      { q: '¿Cuánto cuesta AgencyAnalytics?', a: 'Según su página de precios, 20 USD por cliente al mes con pago anual, con usuarios ilimitados. El rank tracker y el seguimiento en IA son complementos aparte.' },
      { q: '¿AgencyAnalytics está en español?', a: 'Su sitio y su plataforma están en inglés. Acuarius está completamente en español latinoamericano.' },
      { q: '¿Acuarius tiene reportes para clientes?', a: 'Sí. Cada informe se comparte con un enlace vivo o en PDF, con leads, ventas y pauta del cliente. El enlace no expone los datos personales de los leads.' },
      { q: '¿Cuántos clientes puedo manejar en Acuarius?', a: 'Los que necesites. La licencia de 39 USD al mes incluye un negocio y cada cliente adicional cuesta 9 USD al mes, con su propio pipeline. Por encima de 30 clientes hay planes a medida.' },
    ],
    cta: { h2: 'Reporta ventas, no solo clics', sub: 'Prueba Acuarius 14 días gratis, sin tarjeta.' },
  },
};
