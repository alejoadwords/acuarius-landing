// Páginas de producto de la fase 2: /reportes/ (Análisis) y /pauta/
// (Plataformas de pauta). Cada afirmación sale del código de Acuarius a
// 02-11-2026:
//
//   /reportes/  public/informes.js (Resumen, Ventas, Productividad, Marketing,
//               Por comercial, Tienda, documento del PDF y del enlace /i/),
//               public/app.js (Conversaciones, Satisfacción, rangos y «Elegir
//               fechas», «Descargar PDF», «Compartir», «Descargar CSV», perfil
//               de Ventas que solo ve lo suyo), api/cron-reportes.js y
//               public/novedades.json.
//   /pauta/     api/pauta.js (campañas, pausar, bajar presupuesto), api/
//               _reglas-pauta.js (solo restar; proponer o hacerlo solo),
//               api/busquedas.js, api/analista.js, api/_conversiones.js
//               (llaves de Meta y Google), api/_gclid.js (90 días de Google),
//               api/_origen.js, public/app.js (pestañas de Plataformas de
//               pauta) y public/novedades.json.
//
// Fuera a propósito: precios, planes y cupos (el Analista IA y los reportes
// programados tienen tope por plan); los agentes de pauta del chat (apagados
// desde el 17-09-2026); TikTok Ads y LinkedIn Ads (en Conexiones solo «Escríbenos
// por soporte y lo activamos»); Messenger, Lead Ads y publicar en redes.
// Acuarius sí pausa, baja presupuesto y pone negativas en Google y Meta cuando
// alguien lo aprueba (pauta.js, busquedas.js); la app lo dice así desde el
// 02-11-2026.

export const FILAS = [
  { url: '/reportes/', cluster: 8, nivel: 'Producto', intencion: 'Comercial', estado: 'publicada',
    kw: 'reportes de ventas',
    title: 'Reportes de ventas del CRM, en PDF o enlace | Acuarius',
    description: 'Reportes de ventas que se arman solos con tu CRM: cierre, ticket, motivos de pérdida y velocidad de respuesta por asesor, en PDF o con un enlace en vivo.',
    h1: 'Reportes de ventas que se arman solos con los datos de tu CRM',
    miga: 'Reportes' },
  { url: '/pauta/', cluster: 8, nivel: 'Producto', intencion: 'Comercial', estado: 'publicada',
    kw: 'atribución de ventas de Google Ads y Meta Ads',
    title: 'Atribución de ventas de Google Ads y Meta Ads | Acuarius',
    description: 'Atribución de ventas de Google Ads y Meta Ads: cruza lo que gastas en cada campaña con los leads y las ventas de tu CRM, y devuélvele esas ventas a cada red.',
    h1: 'Atribución de ventas de Google Ads y Meta Ads: del clic a la venta',
    miga: 'Google y Meta Ads' },
];

export const CONTENIDO = {
  '/reportes/': {
    badge: 'Análisis · informes del CRM',
    sub: 'Ventas, productividad, marketing, satisfacción y el rendimiento de cada asesor, calculados con lo que pasa en tu pipeline. Los filtras por fechas y por proceso, los descargas en PDF o los compartes con un enlace que se actualiza solo.',
    secciones: [
      { tipo: 'texto', label: 'El problema', h2: '¿Por qué tus reportes de ventas siempre llegan tarde?',
        parrafos: [
          'Los <b>reportes de ventas</b> de una pyme suelen salir de una hoja de cálculo que alguien arma el último día del mes: copiar los cierres, preguntarle a cada asesor cuánto vendió, adivinar de dónde llegó cada cliente. Cuando el reporte está listo, ya no sirve para corregir nada.',
          'En Acuarius los informes se calculan con lo que ya está en el <a href="/crm/">CRM</a>: cada lead con su fuente, su responsable, su etapa, su valor y, al cerrarse, su motivo y su fecha de cierre. No hay que armar fórmulas ni pedirle datos a nadie. Abres <b>Análisis</b>, eliges el periodo y ves la cifra de hoy, con la venta que se cerró hace una hora incluida.',
          'La fecha de cierre la sella el sistema cuando el negocio entra en una etapa de cierre, venga de donde venga: el botón Ganado o Perdido, un arrastre en el tablero, una automatización o una importación. Por eso una venta de agosto no se muda a septiembre porque alguien editó el contacto.',
        ] },
      { tipo: 'tarjetas', label: 'Qué informes trae', h2: 'Los informes de Análisis, uno por pregunta',
        items: [
          { t: 'Resumen', d: 'Total de leads, valor del pipeline activo, negocios ganados, valor promedio, el embudo por etapa, las fuentes de tus leads y los leads por etiqueta.' },
          { t: 'Ventas', d: 'Importe ganado frente al periodo anterior, ticket medio, tasa de cierre, ciclo de venta en días, pipeline abierto, embudo con forecast ponderado, evolución de ingresos, ventas por responsable y oportunidades por origen.' },
          { t: 'Ventas por producto', d: 'Dentro de Ventas: unidades, ventas, ingresos y el peso de cada producto en el total, si registras <a href="/productos/">productos</a> en tus oportunidades.' },
          { t: 'Productividad', d: 'Actividades del periodo, tasa de cumplimiento, tareas vencidas sin hacer, lo agendado para los próximos 7 días y cuántos leads abiertos tienen un seguimiento programado.' },
          { t: 'Por comercial', d: 'Por cada asesor: leads recibidos, porcentaje contactado, mediana del primer contacto, cerrados e importe. Más los motivos de pérdida del equipo y los leads sin contactar todavía.' },
          { t: 'Marketing', d: 'Campañas enviadas, mensajes por correo, WhatsApp y SMS, cuántos no llegaron, tasa de apertura del correo, automatizaciones activas y captación de leads.' },
          { t: 'Conversaciones', d: 'Volumen del inbox, reparto por canal, cuántas resolvió el agente y cuántas necesitaron a una persona, y el tiempo de primera respuesta: mediana y las más lentas.' },
          { t: 'Satisfacción', d: 'NPS por asesor, tendencia mes a mes, tasa de respuesta y cada comentario, con filtro por fechas, asesor y proceso. <a href="/novedades/recompra-y-encuesta-nps/">Cómo funciona la encuesta</a>.' },
          { t: 'Tienda', d: 'Si conectas tu <a href="/crm/tiendas-en-linea/">tienda en línea</a>: pedidos, ticket promedio, clientes que repiten, carritos recuperados y cuánto le vendiste a quien antes te escribió por chat.' },
        ] },
      { tipo: 'texto', label: 'Por qué se gana y se pierde', h2: '¿Qué te dicen los motivos de cierre?',
        parrafos: [
          'Los motivos de cierre son la parte del reporte de ventas que más enseña. Cada vez que un asesor marca un negocio como ganado o perdido se abre la ventana de cierre: valor, moneda, motivo, fecha y una nota opcional para lo que no cabe en el motivo, como el descuento con el que cerró o cuándo vuelve a buscar el cliente.',
          'El informe de Ventas agrupa esos cierres en <b>Motivos de pérdida</b> y <b>Motivos de ganada</b>, con cuántos negocios y cuánto valor tiene cada uno. Por comercial muestra los motivos de pérdida del equipo. Si «precio» se lleva la mitad de las pérdidas o «no respondió» crece cada mes, ya sabes qué conversación tener el lunes.',
          'Los motivos son tuyos: los cambias en <b>CRM → Motivos de cierre</b>. Quitar uno no toca los negocios ya cerrados, así que tus reportes del pasado no cambian. Si todavía no tienes etapas claras, empieza por la <a href="/crm/pipeline-de-ventas/">guía del pipeline de ventas</a>.',
        ] },
      { tipo: 'texto', label: 'Velocidad de respuesta', h2: '¿Cuánto tarda tu equipo en contestar a un lead nuevo?',
        parrafos: [
          'Acuarius mide la velocidad de respuesta en dos lugares. En <b>Análisis → Por comercial</b> ves la mediana del primer contacto de cada asesor, al lado de cuántos leads recibió y cuántos cerró. En <b>Análisis → Conversaciones</b> ves cuánto tarda la primera respuesta en el inbox, en mediana y en las conversaciones más lentas.',
          'Mirar las dos cifras juntas evita conclusiones falsas. Un asesor con muchos cierres y respuesta lenta probablemente recibe leads más calientes que el resto. Uno que contesta rápido y no cierra quizá necesita ayuda con la propuesta, no con la velocidad.',
        ] },
      { tipo: 'tabla', label: 'Ejemplos por negocio', h2: 'Qué mirar primero según tu tipo de negocio',
        cab: ['Negocio', 'Informe', 'La pregunta que responde'],
        filas: [
          ['Inmobiliaria', 'Ventas → Oportunidades por origen', '¿Los 40 leads del portal compran igual que los 12 que llegaron por WhatsApp?'],
          ['Clínica', 'Productividad y Satisfacción', '¿Cuántas valoraciones vencidas quedaron sin llamar y cómo calificaron los pacientes a cada profesional?'],
          ['Tienda en línea', 'Tienda', '¿Cuánto vendí a quien primero escribió por chat y cuántos carritos recuperé?'],
          ['Restaurante', 'Marketing', '¿Cuántos mensajes de la promoción del martes no llegaron y cuántos clientes volvieron a pedir?'],
          ['Servicios B2B', 'Ventas → Motivos de pérdida', '¿Se pierden las propuestas por precio o porque nadie hizo el seguimiento?'],
          ['Educación', 'Por comercial', '¿Qué asesora contacta antes a los interesados en el programa y cuántas matrículas cierra?'],
        ],
        nota: 'Las cifras de los ejemplos son inventadas. Las tuyas salen de tu propio CRM.' },
      { tipo: 'texto', label: 'Compartir', h2: '¿Cómo comparto un reporte de ventas con mi jefe o mi socio?',
        parrafos: [
          'Un reporte de ventas se comparte de dos formas en Acuarius, y las dos usan el mismo cálculo que ves en pantalla. <b>Descargar PDF</b> arma un documento con los informes que marques, cada uno en su página y con el periodo que tiene elegido. <b>Compartir</b> crea un enlace que se abre sin usuario ni contraseña y muestra los informes en vivo, con las cifras del momento.',
          'Quien abre el enlace no ve nombres, teléfonos ni correos de tus leads: solo las cifras y los nombres de tu equipo. En la lista de enlaces activos ves cuántas visitas tuvo cada uno y lo puedes desactivar cuando quieras.',
          'Si trabajas con varias marcas, el informe sale con el nombre del negocio que elijas. Y si manejas la pauta de tus clientes, el reporte para ellos vive en <a href="/pauta/">Plataformas de pauta → Reportes</a>: se programa cada semana, quincena o mes, con tu logo y tu color. Más sobre eso en la página para <a href="/agencias/">agencias</a>.',
        ] },
      { tipo: 'pasos', label: 'Cómo empezar', h2: 'Tu primer reporte de ventas en cuatro pasos',
        items: [
          { t: 'Abre Análisis', d: 'En el menú, entra a <b>Análisis</b> y elige el informe: Ventas, Productividad, Por comercial, Marketing, Conversaciones, Resumen o Satisfacción.' },
          { t: 'Elige el periodo', d: 'Usa 7 días, 30 días, 90 días, Todo o <b>Elegir fechas</b> para un rango a mano. Ambos días quedan incluidos.' },
          { t: 'Filtra por proceso', d: 'Con el selector de arriba ves un solo proceso de venta o «Todos los procesos».' },
          { t: 'Descarga o comparte', d: 'Pulsa <b>Descargar PDF</b> y elige «Guardar como PDF», o <b>Compartir</b> → <b>Crear enlace</b> y copia el enlace.' },
        ] },
      { tipo: 'texto', label: 'Errores comunes', h2: 'Errores que hacen que un reporte de ventas mienta',
        parrafos: [
          '<b>Cerrar sin motivo.</b> Si el asesor marca perdido y no elige motivo, el informe lo cuenta como «Sin motivo registrado». Un mes así y no sabes por qué se cae la venta.',
          '<b>No registrar el valor.</b> La tasa de cierre se calcula igual, pero el importe ganado, el ticket medio y el forecast quedan en cero.',
          '<b>Leads sin fuente.</b> Si los leads entran a mano sin decir de dónde vienen, Oportunidades por origen no te sirve. Conecta tus <a href="/formularios/">formularios</a> para que cada lead traiga su canal de origen solo.',
          '<b>Mezclar procesos.</b> Si tienes un proceso para ventas nuevas y otro para renovaciones, compáralos por separado con el selector de proceso. Juntos, el ciclo de venta promedio no describe a ninguno.',
        ] },
    ],
    faq: [
      { q: '¿Qué es un reporte de ventas?', a: 'Es un resumen de lo que vendiste en un periodo y de cómo llegaste ahí: cuánto se ganó, cuántos negocios se cerraron y se perdieron, en cuánto tiempo, por qué motivos y quién de tu equipo los atendió. En un CRM se arma solo con los datos del pipeline.' },
      { q: '¿Tengo que armar fórmulas o exportar a Excel?', a: 'No. Los informes de Análisis se calculan con los datos de tu CRM en el momento en que los abres. Si quieres trabajar las ventas por tu cuenta, en Ventas el botón «Descargar CSV» baja el listado de oportunidades ganadas del periodo.' },
      { q: '¿Puedo ver el reporte de un solo asesor?', a: 'En Análisis → Por comercial ves a cada asesor lado a lado: leads recibidos, contactados, primer contacto, cerrados e importe. En Satisfacción puedes filtrar por asesor. Una persona con perfil de Ventas ve en sus reportes solo su propia gestión.' },
      { q: '¿El enlace compartido muestra los datos de mis clientes?', a: 'No. El enlace muestra cifras y los nombres de tu equipo, nunca nombres, teléfonos ni correos de tus leads. Lo puedes desactivar en cualquier momento desde la misma ventana de Compartir.' },
      { q: '¿El enlace se actualiza solo?', a: 'Sí. Quien lo abre ve las cifras del momento, calculadas con el mismo código que usa la app y el PDF, así que los tres dicen lo mismo sobre la misma cuenta.' },
      { q: '¿Puedo ver qué campaña de pauta trajo las ventas?', a: 'En Ventas, Oportunidades por origen te dice de qué fuente llegan tus leads. Para ver campaña por campaña cuánto gastaste y qué pasó con esos leads, usa <a href="/pauta/">Plataformas de pauta</a>.' },
      { q: '¿Los reportes cuentan las ventas de hoy?', a: 'Sí. Los rangos terminan al final del día de hoy, así que una venta marcada como ganada esta mañana ya aparece en el informe de Ventas.' },
    ],
    cta: { h2: 'Mira tus reportes de ventas hoy mismo', sub: 'Crea tu cuenta, carga tus contactos y abre Análisis. Sin fórmulas y sin hojas de cálculo.' },
  },

  '/pauta/': {
    badge: 'Plataformas de pauta · Google Ads y Meta Ads',
    sub: 'Conecta tus cuentas de Google Ads y Meta Ads y ve, campaña por campaña, lo que gastaste y lo que pasó con esos leads dentro de tu CRM. Después, devuélvele a cada red las ventas que cerraste para que aprenda a buscar compradores.',
    secciones: [
      { tipo: 'texto', label: 'El problema', h2: '¿Por qué Google y Meta no saben cuáles de tus leads compraron?',
        parrafos: [
          'Google Ads y Meta Ads cuentan clics, formularios y conversaciones. Si el lead fue a la cita o compró, solo lo sabe tu CRM. Sin unir las dos cosas, una campaña de leads baratos que nunca compran parece mejor que otra de leads caros que sí cierran.',
          'La <b>atribución de ventas de Google Ads y Meta Ads</b> en Acuarius une cada lead con el anuncio que lo trajo y sigue ese lead por tu pipeline. En <b>Marketing → Plataformas de pauta</b> la tabla de campañas se parte en dos: a la izquierda lo que dice la red, a la derecha lo que dice tu <a href="/crm/">CRM</a>.',
        ] },
      { tipo: 'tabla', label: 'La pantalla de campañas', h2: 'Lo que ves en cada campaña',
        cab: ['Mitad', 'Columna', 'De dónde sale'],
        filas: [
          ['En la plataforma', 'Inversión y Conv.', 'Lo que reporta Google o Meta en el periodo. En clic a WhatsApp, Conv. son las conversaciones que cuenta Meta.'],
          ['En tu CRM', 'Chats', 'Cuántas conversaciones de ese anuncio llegaron de verdad a tu inbox.'],
          ['En tu CRM', 'Leads, En proceso y Ganados', 'Los leads de esa campaña que entraron al CRM y en qué quedaron.'],
          ['En tu CRM', 'Ingresos y CPL real', 'Lo que facturaron las ventas ganadas y el costo por lead calculado con los leads que sí entraron.'],
        ],
        nota: 'Al hacer clic en una campaña ves sus leads uno por uno y en qué etapa quedó cada uno. Los leads sin campaña identificada van aparte: si algo no se puede calcular, la pantalla dice «no calculable» en vez de inventar un número.' },
      { tipo: 'texto', label: 'Cómo sabe de dónde vino', h2: '¿Cómo sabe Acuarius de qué anuncio llegó cada lead?',
        parrafos: [
          'Cada lead guarda su campaña de origen por la vía que tenga. Los <a href="/formularios/">formularios de tu web</a> y tus páginas de aterrizaje guardan los parámetros del anuncio desde que la persona entra, aunque navegue por varias páginas antes de escribir, y también su canal de origen: Google Ads, Meta Ads, buscadores, asistentes de IA, redes sociales o directo.',
          'Con Google no hace falta etiquetar nada a mano: cada clic trae un identificador, y Acuarius le pregunta a Google de qué campaña y de qué palabra clave es. Google conserva ese dato 90 días, así que eso es lo que se puede recuperar hacia atrás.',
          'Con los anuncios de clic a WhatsApp de Meta, el contacto queda con la campaña, el conjunto y el anuncio en su ficha, aunque ya existiera en tu CRM. Lo explicamos paso a paso en <a href="/novedades/anuncios-clic-a-whatsapp-meta-ads/">anuncios de clic a WhatsApp con Meta Ads</a>.',
        ] },
      { tipo: 'tarjetas', label: 'Las pestañas', h2: 'Todo lo que hay en Plataformas de pauta',
        items: [
          { t: 'Diagnóstico', d: 'Campañas que no están saliendo, anuncios rechazados y por qué, pagos pendientes y campañas que gastan sin traer un lead al CRM. Cada mañana te escribimos solo si pasó algo.' },
          { t: 'Analista IA', d: 'Pulsas <b>Pedir revisión</b> y recibes, en orden, qué haría un experto esta semana con tu cuenta, con los números del CRM que lo sostienen.' },
          { t: 'Reglas', d: 'Por ejemplo: si el costo por lead real de los últimos 7 días pasa de un límite, pausar la campaña. Se mide con los leads y las ventas del CRM, no solo con lo que dice la red.' },
          { t: 'Búsquedas', d: 'Por qué búsquedas salen tus anuncios de Google, cuáles gastan sin resultados y qué palabras ajenas se cuelan. Y qué palabras clave traen leads que nunca avanzan en tu CRM.' },
          { t: 'Audiencias', d: 'Convierte un grupo del CRM —clientes, leads en proceso, perdidos o los de una etiqueta— en una audiencia de Google o de Meta, para excluirlos de la captación o buscar parecidos. Se actualizan cada mañana.' },
          { t: 'Ventas a la pauta', d: 'Cada lead ganado se le reporta a Meta y a Google como venta, con su valor. También las etapas del embudo que marques, para que cada red busque personas que avanzan.' },
          { t: 'Reportes', d: 'Un reporte semanal, quincenal o mensual para tu cliente, con tu nombre, tu logo y tu color: inversión, leads, ventas y «Del clic a la venta». Lo revisas antes de que salga. Ver <a href="/agencias/">agencias</a>.' },
        ] },
      { tipo: 'texto', label: 'Conversiones de vuelta', h2: '¿Cómo le devuelvo mis ventas a Google Ads y a Meta Ads?',
        parrafos: [
          'Ventas a la pauta le cuenta a cada red qué leads compraron, para que optimice hacia ventas y no solo hacia formularios. Está en <b>Marketing → Plataformas de pauta → Ventas a la pauta</b>, y ahí mismo ves cada venta enviada y, si alguna se rechazó, por qué.',
          '<b>Meta.</b> Pegas el ID de tu pixel y un token de la API de conversiones del Administrador de eventos, y pulsas <b>Guardar y comprobar</b>. Si vendes por WhatsApp, puedes usar <b>Activar solo con WhatsApp</b>, sin pixel: el lead nuevo y la venta de quien llegó por un anuncio de clic a WhatsApp se le reportan a esa campaña si la venta se gana dentro de los 7 días del clic.',
          '<b>Google.</b> Las ventas van por la Data Manager API de Google. La primera vez pulsas <b>Dar permiso a Google</b>, marcas la casilla de Data Manager y luego <b>Activar envío de ventas</b>. La venta se une al clic del anuncio y, si no lo hay, al correo y al teléfono cifrados.',
          '<b>Etapas del embudo.</b> Puedes marcar una o dos etapas, como «Cita» o «Propuesta enviada», para que también se reporten. En Google cada una entra como conversión secundaria: se mide sin cambiar tus pujas hasta que tú lo decidas.',
        ] },
      { tipo: 'texto', label: 'Qué cambia en tus cuentas', h2: '¿Acuarius puede cambiar mis campañas sin permiso?',
        parrafos: [
          'Acuarius solo puede restar, nunca sumar: pausar una campaña, bajar un presupuesto diario o excluir una búsqueda de Google. Nunca activa una campaña ni sube un presupuesto: eso se hace en el administrador de anuncios de cada red.',
          'Esas acciones se hacen cuando una persona de tu equipo las aprueba: el botón <b>Pausar campaña</b> del Diagnóstico, la propuesta del Analista IA o la de una regla. Cada una pide confirmación y explica cómo deshacerla; una búsqueda excluida se deshace desde la app. La única excepción la eliges tú: una regla puede quedar en «Hacerlo solo y avisarme», y entonces actúa cada mañana y te llega un correo con lo que hizo.',
        ] },
      { tipo: 'tabla', label: 'Ejemplos por negocio', h2: 'Cómo se usa según tu tipo de negocio',
        cab: ['Negocio', 'Lo que mira', 'Lo que decide'],
        filas: [
          ['Inmobiliaria', 'Ganados e Ingresos por campaña de Google', 'Mover presupuesto a la campaña de proyectos sobre planos, que trae menos leads pero cierra separaciones.'],
          ['Clínica', 'Búsquedas', 'Excluir «gratis» y «empleo», que gastaban sin traer valoraciones.'],
          ['Tienda en línea', 'Audiencias', 'Excluir a los clientes de los últimos 90 días de la campaña de captación.'],
          ['Restaurante', 'Columna Chats en clic a WhatsApp', 'Ver que de 180 conversaciones que contó Meta, 150 llegaron de verdad al inbox.'],
          ['Servicios B2B', 'Reglas', 'Proponer pausar cualquier campaña que gaste más de un límite sin ninguna venta ganada en 14 días.'],
          ['Educación', 'Ventas a la pauta con la etapa «Entrevista»', 'Que Meta busque interesados que llegan a la entrevista, no solo que llenan el formulario.'],
        ],
        nota: 'Ejemplos ilustrativos con cifras inventadas. Para saber cuánto cuesta un clic o un lead en tu país, mira los <a href="/benchmarks/">benchmarks de pauta</a>.' },
      { tipo: 'pasos', label: 'Cómo empezar', h2: 'Conecta tu pauta en cuatro pasos',
        items: [
          { t: 'Conecta tus cuentas', d: 'En <b>Marketing → Plataformas de pauta → Conexiones</b>, pulsa <b>Conectar Google Ads</b> o <b>Conectar Meta Ads</b>. Autorizas con tu cuenta, sin darnos contraseñas.' },
          { t: 'Elige la cuenta', d: 'Si tienes varias cuentas publicitarias, pulsa <b>Elegir la cuenta</b> y di cuál es la de este negocio o cliente.' },
          { t: 'Asegura el origen', d: 'Usa el conector de <a href="/formularios/">formularios</a> en tu web y conecta tu WhatsApp para que cada lead llegue con su campaña.' },
          { t: 'Activa Ventas a la pauta', d: 'Configura Meta, Google o ambos, y marca las etapas del embudo que quieras reportar.' },
        ] },
      { tipo: 'texto', label: 'Errores comunes', h2: 'Errores que dejan la mitad del CRM en cero',
        parrafos: [
          '<b>Leads sin campaña.</b> Si tus formularios no guardan el origen, la mitad derecha de la tabla queda vacía. Revisa que el formulario use el conector de Acuarius.',
          '<b>Ventas sin valor.</b> Si marcas ganado sin importe, Ingresos queda en cero y la red recibe una venta sin valor para optimizar.',
          '<b>Medir con pocos días.</b> Con 7 días una campaña con ciclo de venta largo parece no vender nada. Mira 30 o 90 días antes de pausar, y calcula tu presupuesto con la <a href="/calculadora-presupuesto-google-ads/">calculadora de presupuesto de Google Ads</a>.',
        ] },
    ],
    faq: [
      { q: '¿Qué es la atribución de ventas en Google Ads y Meta Ads?', a: 'Es saber qué anuncio trajo cada venta, no solo cada clic o cada formulario. Se logra uniendo el lead con el anuncio de origen y siguiéndolo en el CRM hasta el cierre, y luego devolviéndole esa venta a la red para que optimice hacia compradores.' },
      { q: '¿Qué redes puedo conectar?', a: 'Hoy Google Ads (búsqueda, Performance Max y Display) y Meta Ads (Facebook e Instagram). Cada cuenta se conecta con tu propio usuario de Google o de Meta.' },
      { q: '¿Acuarius activa campañas o sube presupuestos?', a: 'No. Solo puede pausar, bajar un presupuesto diario o excluir una búsqueda de Google, y lo hace cuando alguien lo aprueba o cuando tú dejaste una regla en automático. Activar y subir presupuesto se hace siempre en el administrador de anuncios de cada red.' },
      { q: '¿Por qué las conversiones de la red no coinciden con los leads del CRM?', a: 'Porque miden cosas distintas: la red cuenta lo que pasó en su plataforma y el CRM, los leads que de verdad entraron. Plataformas de pauta muestra las dos cifras lado a lado.' },
      { q: '¿Necesito un pixel para reportar ventas a Meta?', a: 'No si vendes por WhatsApp: con «Activar solo con WhatsApp» se reportan el lead y la venta de quien llegó por un anuncio de clic a WhatsApp, si se gana dentro de los 7 días del clic. Para el resto de ventas hace falta tu pixel.' },
      { q: '¿Cuánto tiempo hacia atrás recupera la campaña de un lead de Google?', a: 'Hasta 90 días, que es lo que Google conserva de cada clic. Los leads más antiguos se quedan como «sin campaña identificada» y se muestran aparte.' },
      { q: '¿Sirve para una agencia con varios clientes?', a: 'Sí. Cada cliente tiene sus propias conexiones, la pestaña Cartera muestra una fila por cliente y Reportes le envía a cada uno su informe con tu marca. Más en la página para <a href="/agencias/">agencias</a>.' },
      { q: '¿Dónde veo los reportes de ventas de mi equipo?', a: 'En <a href="/reportes/">Análisis</a>: ventas, productividad, motivos de cierre y velocidad de respuesta por asesor. Plataformas de pauta se enfoca en lo que pasó con los leads de cada campaña.' },
    ],
    cta: { h2: 'Descubre qué campañas te traen ventas', sub: 'Crea tu cuenta, conecta Google Ads o Meta Ads y mira lo que pasó con los leads de cada campaña.' },
  },
};
