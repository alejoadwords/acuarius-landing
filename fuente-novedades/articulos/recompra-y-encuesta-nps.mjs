export const ARTICULO = {
  slug: 'recompra-y-encuesta-nps',
  kw: 'encuesta NPS',
  title: 'Encuesta NPS: mide la satisfacción y logra la recompra',
  description: 'Cómo enviar una encuesta NPS automática tras cada venta, avisar al equipo cuando un cliente califica de 0 a 6 y registrar la recompra en tu CRM.',
  h1: 'Encuesta NPS automática y recompra: escucha a tu cliente y haz que vuelva',
  modulo: 'Ventas',
  publicado: '2026-11-02',
  edicion: 1,
  resumen: 'Envía la encuesta NPS sola después de cada venta o cita, reacciona a un detractor en 24 horas y registra cada recompra como una venta nueva.',
  respuesta: 'Una encuesta NPS pregunta al cliente, del 0 al 10, qué tan probable es que te recomiende. En Acuarius sale sola por correo con el paso «Encuesta NPS» de una automatización, etiqueta a cada cliente como promotor, neutro o detractor, crea una tarea para llamar en 24 horas a quien califica de 0 a 6 y con «Nueva compra» registra la recompra como una oportunidad nueva.',
  video: { id: 'Edw6fql549A', titulo: 'Encuestas NPS automáticas: mide la satisfacción y reacciona sin intervenir', subido: '2026-08-09', segundos: 139, propio: false },
  ilustracion: 'satisfaccion',
  secciones: [
    {
      h2: '¿Qué es el NPS y cómo se calcula?',
      html:
        '<p>El NPS (Net Promoter Score) es un indicador de satisfacción que sale de una sola pregunta: «¿Qué tan probable es que nos recomiendes a un amigo o colega?», con respuesta del 0 al 10. Según la nota, cada cliente cae en uno de tres grupos:</p>' +
        '<ul>' +
        '<li><b>Promotores (9 y 10)</b>: les gustó y te recomiendan.</li>' +
        '<li><b>Neutros (7 y 8)</b>: quedaron conformes, pero se irían con otro sin pensarlo mucho.</li>' +
        '<li><b>Detractores (0 a 6)</b>: algo salió mal y pueden hablar mal de ti.</li>' +
        '</ul>' +
        '<p>La fórmula es: <b>NPS = % de promotores − % de detractores</b>. Los neutros cuentan en el total, pero no suman ni restan. El resultado va de −100 a +100.</p>' +
        '<p>Ejemplo: respondieron 50 clientes. 30 dieron 9 o 10 (60 %), 12 dieron 7 u 8 (24 %) y 8 dieron de 0 a 6 (16 %). El NPS es 60 − 16 = <b>44</b>. Un NPS positivo significa que te recomiendan más clientes de los que te critican.</p>',
    },
    {
      h2: '¿Por qué medir la satisfacción en una pyme?',
      html:
        '<p>Medir la satisfacción le dice a una pyme qué clientes van a volver y cuáles se están yendo en silencio. La mayoría de los clientes molestos no se quejan: simplemente no regresan y se lo cuentan a sus conocidos.</p>' +
        '<p>Una encuesta NPS constante te deja detectar problemas a tiempo, saber qué asesor atiende mejor y encontrar a tus promotores, que son los mejores candidatos para una reseña, un referido o una segunda compra.</p>',
    },
    {
      h2: '¿Cómo se envía la encuesta NPS de forma automática?',
      html:
        '<p>La encuesta NPS se envía con el paso «Encuesta NPS» dentro de una automatización: tú decides el momento y Acuarius la manda sola por correo. El cliente pulsa una nota del 0 al 10 en el mismo correo y se abre una página para dejar un comentario.</p>' +
        '<p>Momentos que funcionan bien:</p>' +
        '<ul>' +
        '<li><b>Después de una venta</b>: disparador «Cuando cambia de etapa» con etapa destino Ganado, una espera de 7 días y el paso «Encuesta NPS».</li>' +
        '<li><b>Después de una cita</b>: si usas Reservas, el disparador «Cuando asistió a su cita» manda la encuesta solo a quien vino.</li>' +
        '</ul>' +
        '<p>Al responder, el contacto recibe la etiqueta «nps promotor», «nps neutro» o «nps detractor», y en su ficha ves la nota con su color, el comentario y si la encuesta se envió y aún no la contesta. Para no cansar a nadie, la encuesta no se le reenvía a un mismo contacto antes de 30 días.</p>' +
        '<p>En «Personalizar encuesta» cambias los textos, pones tu logo y añades hasta 8 preguntas propias, escritas o de escala.</p>',
    },
    {
      h2: '¿Qué pasa cuando un cliente califica de 0 a 6?',
      html:
        '<p>Cuando un cliente califica de 0 a 6, Acuarius crea en su ficha una tarea para llamarlo en las próximas 24 horas y avisa al asesor que lo atendía y al dueño de la cuenta, por la campana, por correo y en el móvil. Si el cliente deja un comentario, se añade a la tarea.</p>' +
        '<p>Esta opción se llama «Avisar cuando califiquen de 0 a 6», viene encendida y la puedes apagar en «Personalizar encuesta».</p>' +
        '',
    },
    {
      h2: '¿Cómo leer el reporte de satisfacción?',
      html:
        '<p>El reporte de satisfacción está en Análisis › Satisfacción y muestra el NPS, cuántos respondieron de los que recibieron la encuesta, la nota promedio y cuánto tardan en responder. Debajo encuentras:</p>' +
        '<ul>' +
        '<li><b>Mes a mes</b>: el NPS de cada mes con su reparto de promotores, neutros y detractores.</li>' +
        '<li><b>Por asesor</b>: enviadas, respondidas, NPS y promedio de cada persona del equipo. La nota queda con el asesor que atendía al cliente cuando se envió la encuesta, aunque luego se reasigne.</li>' +
        '<li><b>Distribución del 0 al 10</b>: cuántos clientes dieron cada nota.</li>' +
        '<li><b>Tus preguntas propias</b>: cada escala con su promedio y las respuestas escritas listadas.</li>' +
        '<li><b>Cada respuesta</b> con su comentario, con filtro para ver solo los detractores, y el botón «Descargar respuestas» para abrirlas en Excel.</li>' +
        '</ul>' +
        '<p>Puedes filtrar por fechas, por asesor y por proceso de venta.</p>' +
        '<h3>El resumen mensual por correo</h3>' +
        '<p>El día 1 de cada mes te llega un correo con el mes anterior: el NPS y cuánto subió o bajó, el de cada asesor, los clientes insatisfechos (y si ya los llamaron) y lo mejor que dijeron. Solo sale si hubo encuestas ese mes. Si manejas varios clientes, llega un solo correo con una sección por cada uno.</p>',
    },
    {
      h2: '¿Cómo registrar la recompra en el CRM?',
      html:
        '<p>La recompra se registra con el botón «Nueva compra» en la ficha de un cliente ganado: se abre otra oportunidad, enlazada a la anterior, con sus mismos datos de contacto y la etiqueta «recompra». Eliges en qué proceso de venta entra, el mismo de su compra anterior u otro; los procesos donde ya tiene una oportunidad abierta aparecen desactivados.</p>' +
        '<p>¿Por qué no editar la venta vieja y moverla otra vez a Nuevo? Porque borrarías una venta que sí ocurrió. Con «Nueva compra» la venta anterior sigue ganada y cuenta en tus reportes, la nueva se trabaja en su propio tablero y con la etiqueta «recompra» filtras a los clientes que repiten.</p>' +
        '<p>Además, si un cliente cuya oportunidad cerraste hace más de un día vuelve a escribir por un formulario o por WhatsApp, Acuarius le abre la oportunidad nueva solo, en vez de esconder su mensaje en la venta cerrada.</p>',
    },
    {
      h2: 'Reseñas de Google para tus clientes satisfechos',
      html:
        '<p>El paso «Pedir reseña» manda al cliente, por correo o WhatsApp, el enlace de tu ficha de Google, que pegas antes en CRM → Reseñas de Google. Se pide una sola vez por lead.</p>' +
        '<p>Una combinación útil: una automatización con el disparador «Cuando se le añade una etiqueta», etiqueta «nps promotor», y el paso «Pedir reseña». Así solo le pides la reseña a quien ya te dio 9 o 10.</p>',
    },
    {
      h2: 'Ejemplos por tipo de negocio y errores comunes',
      html:
        '<ul>' +
        '<li><b>Clínica u odontología</b>: encuesta al día siguiente de la cita a quien asistió. Si Laura califica 4 porque esperó una hora, la recepción la llama esa misma mañana.</li>' +
        '<li><b>Inmobiliaria</b>: encuesta 7 días después de firmar. Un promotor es el mejor candidato para referir a un familiar que busca arriendo.</li>' +
        '<li><b>Tienda</b>: encuesta tras el pedido y «Nueva compra» cuando Andrés vuelve por otro producto de $180.000.</li>' +
        '<li><b>Restaurante</b>: encuesta tras una reserva grande, con una pregunta propia de escala 1 a 5 sobre la comida.</li>' +
        '</ul>' +
        '<h3>Errores comunes</h3>' +
        '<ul>' +
        '<li><b>Mandar la encuesta demasiado pronto</b>: si el cliente aún no recibe el producto, la nota no mide nada.</li>' +
        '<li><b>Apagar el aviso de 0 a 6 y no reemplazarlo</b>: el detractor se pierde sin que nadie se entere.</li>' +
        '<li><b>Editar la venta ganada para registrar la segunda compra</b>: usa «Nueva compra» para no perder la primera.</li>' +
        '</ul>',
    },
  ],
  pasos: {
    h2: 'Cómo activar la encuesta NPS con aviso al detractor paso a paso',
    intro: 'Así dejas la encuesta saliendo sola tras cada venta y a tu equipo avisado ante cada detractor.',
    items: [
      { t: 'Personaliza la encuesta', d: 'Ve a Análisis › Satisfacción y pulsa «Personalizar encuesta». Ajusta el asunto, la pregunta, tu logo y tu color, y añade tus preguntas propias si las necesitas.' },
      { t: 'Revisa el aviso al detractor', d: 'En la misma ventana, deja marcada la opción «Avisar cuando califiquen de 0 a 6» y pulsa «Guardar».' },
      { t: 'Crea la automatización', d: 'En Automatizaciones crea una nueva con el disparador «Cuando cambia de etapa» y elige Ganado como etapa destino. Si trabajas con citas, usa «Cuando asistió a su cita».' },
      { t: 'Agrega la espera y la encuesta', d: 'Añade una espera de unos días y luego el paso «Encuesta NPS». Guarda y activa la automatización.' },
      { t: 'Atiende las tareas y lee el reporte', d: 'Cuando llegue una tarea «Cliente insatisfecho», llama antes de 24 horas. Revisa Análisis › Satisfacción cada semana.' },
    ],
  },
  faq: [
    { q: '¿Cómo se calcula el NPS?', a: 'Restas el porcentaje de detractores (notas de 0 a 6) al porcentaje de promotores (9 y 10). Los neutros (7 y 8) cuentan en el total pero no suman ni restan. El resultado va de −100 a +100.' },
    { q: '¿Por qué canal llega la encuesta NPS?', a: 'Por correo. El cliente pulsa una nota del 0 al 10 en el correo y se abre una página donde puede dejar un comentario.' },
    { q: '¿Cuándo conviene enviar la encuesta de satisfacción?', a: 'Cuando el cliente ya vivió la experiencia completa: unos días después de ganar la venta o al día siguiente de la cita. Una misma persona no la recibe otra vez antes de 30 días.' },
    { q: '¿Quién se entera cuando un cliente califica mal?', a: 'El asesor que lo atendía y el dueño de la cuenta reciben un aviso por la campana, por correo y en el móvil, y se crea una tarea en la ficha del cliente para llamarlo en 24 horas. Se puede apagar en «Personalizar encuesta».' },
    { q: '¿Cómo registro que un cliente volvió a comprar?', a: 'Abre su ficha y pulsa «Nueva compra». Se crea otra oportunidad enlazada a la anterior, con la etiqueta «recompra», en el proceso de venta que elijas. La venta anterior sigue contando en tus reportes.' },
    { q: '¿Puedo pedir reseñas de Google solo a los promotores?', a: 'Sí. Crea una automatización con el disparador «Cuando se le añade una etiqueta», elige la etiqueta «nps promotor» y añade el paso «Pedir reseña».' },
  ],
  relacionados: ['productos-en-el-crm', 'campos-personalizados-crm', 'enlace-para-agendar-reuniones'],
  enlaces: [
    { url: '/crm/', texto: 'CRM con IA para pymes' },
    { url: '/crm/clinicas/', texto: 'CRM para clínicas' },
    { url: '/crm/pipeline-de-ventas/', texto: 'Pipeline de ventas' },
  ],
};
