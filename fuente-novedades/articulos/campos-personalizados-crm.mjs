export const ARTICULO = {
  slug: 'campos-personalizados-crm',
  kw: 'campos personalizados en el CRM',
  title: 'Campos personalizados en el CRM: guía práctica',
  description: 'Crea campos personalizados en el CRM para guardar presupuesto, EPS o fecha del evento, y úsalos en filtros, automatizaciones, campañas y tu agente de IA.',
  h1: 'Campos personalizados en el CRM: los datos de tu negocio, en la ficha de cada contacto',
  modulo: 'CRM',
  publicado: '2026-11-02',
  edicion: 1,
  resumen: 'Crea los datos que tu negocio necesita (presupuesto, EPS, fecha del evento) y úsalos para filtrar, automatizar, segmentar campañas y personalizar mensajes.',
  respuesta: 'Los campos personalizados en el CRM de Acuarius son los datos de tus contactos que no vienen de serie: presupuesto, tipo de inmueble, EPS o fecha del evento. Los creas en CRM → Campos personalizados con su tipo, se llenan en la ficha, en formularios, al importar o por tu agente de WhatsApp, y sirven para filtrar, automatizar, segmentar campañas y personalizar mensajes.',
  video: { id: '7vltri_n8S4', titulo: 'Etiquetas en el CRM: el sistema que conecta filtros, campañas y automatizaciones', subido: '2026-08-07', segundos: 140, propio: false },
  ilustracion: 'campos',
  secciones: [
    {
      h2: '¿Qué son los campos personalizados en el CRM?',
      html: '<p>Un campo personalizado es un dato propio de tu negocio que guardas en la ficha de cada contacto, con un nombre y un tipo que tú defines. Acuarius trae de serie nombre, empresa, correo, teléfono, etapa, fuente, valor y asesor. Todo lo demás lo creas tú.</p>' +
        '<p>Una inmobiliaria necesita saber el presupuesto y el tipo de inmueble. Una clínica, la EPS y el procedimiento. Una empresa de eventos, la fecha del evento. Sin campos, esos datos terminan en una nota, en un chat o en la cabeza del asesor. Con campos, quedan en la caja <b>Información adicional</b> de la ficha, ordenados y listos para usarse.</p>',
    },
    {
      h2: '¿Por qué las etiquetas no bastan?',
      html: '<p>Las etiquetas dicen si un contacto pertenece a un grupo; los campos guardan un valor. «Interesado en apartamento» funciona bien como etiqueta. «Presupuesto: 350.000.000» no: no puedes crear una etiqueta por cada cifra ni preguntar «presupuesto mayor o igual a 300 millones» con etiquetas.</p>' +
        '<p>Úsalas juntas. La etiqueta marca el grupo («Feria 2026», «Cliente recurrente»). El campo guarda el dato que cambia de un contacto a otro: una cifra, una fecha, una opción de una lista.</p>',
    },
    {
      h2: 'Tipos de campo y cuándo usar cada uno',
      html: '<p>Cada campo tiene un tipo, y el tipo decide cómo se llena y cómo se compara. Hay once:</p>' +
        '<table><thead><tr><th>Tipo</th><th>Úsalo para</th></tr></thead><tbody>' +
        '<tr><td><b>Texto</b> y <b>Párrafo</b></td><td>Una línea (barrio) o un texto largo (necesidades del cliente).</td></tr>' +
        '<tr><td><b>Número</b></td><td>Cédula, número de personas, metros cuadrados.</td></tr>' +
        '<tr><td><b>Moneda</b></td><td>Presupuesto o ingreso; se lee con $.</td></tr>' +
        '<tr><td><b>Fecha</b></td><td>Fecha del evento, de la cirugía o de vencimiento.</td></tr>' +
        '<tr><td><b>Correo</b>, <b>Teléfono</b> y <b>Enlace</b></td><td>Un segundo email, otro número de contacto, una dirección web.</td></tr>' +
        '<tr><td><b>Lista</b></td><td>Una opción entre varias: Apartamento, Casa, Local, Lote.</td></tr>' +
        '<tr><td><b>Selección múltiple</b></td><td>Varias opciones a la vez: Piscina, Parqueadero, Gimnasio.</td></tr>' +
        '<tr><td><b>Sí / No</b></td><td>Una casilla: ¿tiene crédito preaprobado?</td></tr>' +
        '</tbody></table>' +
        '<p>Cada campo puede llevar un <b>Valor por defecto</b> (todo contacto nuevo empieza con él) y marcarse como obligatorio al crear o editar un contacto a mano.</p>',
    },
    {
      h2: '¿Dónde se llenan los campos personalizados?',
      html: '<p>Los campos se llenan en cinco lugares, y el dato siempre termina en la misma ficha:</p>' +
        '<ul>' +
        '<li><b>En la ficha del contacto</b>, en la caja <b>Información adicional</b>, con un clic.</li>' +
        '<li><b>En tus formularios</b>: cada pregunta puede guardar la respuesta en un campo, y el campo decide cómo se pregunta (sus opciones, su tipo).</li>' +
        '<li><b>En el formulario de Reservas</b>: con «Guardar también en el contacto», la respuesta queda en la ficha.</li>' +
        '<li><b>En el conector de tu web</b>: mapeas cada dato del formulario de tu sitio a un campo.</li>' +
        '<li><b>Al importar desde Excel</b>: una columna con el mismo nombre del campo se reconoce sola.</li>' +
        '</ul>' +
        '<p>Si ya te llegaban datos sueltos de formularios o integraciones, el gestor los muestra en <b>Datos que ya llegan a tus contactos</b>. Pulsa <b>Agregar</b> y los valores que ya existen aparecen con nombre en la ficha.</p>' +
        '<p>En la lista de contactos, cada campo sirve como filtro (en <b>Filtros</b> › <b>Campo personalizado</b>) y como columna (en <b>Columnas</b>).</p>',
    },
    {
      h2: 'Usar los campos en automatizaciones, campañas y mensajes',
      html: '<h3>Automatizaciones que deciden por un dato</h3>' +
        '<p>Los pasos <b>Condición</b> y <b>Ramas Sí / No</b> preguntan por cualquier campo. Los operadores cambian según el tipo: en número, moneda y fecha tienes «es», «no es», «≥» y «≤» (en fechas, «es desde» y «es hasta»); en selección múltiple, «incluye» y «no incluye»; en texto, «contiene». Todos admiten «tiene dato» y «está vacío». Ejemplos: «Presupuesto ≥ 100.000.000», «Intereses incluye Piscina», «Cédula está vacío».</p>' +
        '<h3>Campañas segmentadas</h3>' +
        '<p>En una campaña, entra a <b>Por filtros</b> › <b>Campo personalizado</b>, elige el campo, el operador y el valor. Con <b>Guardar este segmento como lista</b> lo reutilizas después desde <b>Lista guardada</b>.</p>' +
        '<h3>Variables en correos y WhatsApp</h3>' +
        '<p>Cada campo es una variable: «Presupuesto» se escribe {{presupuesto}}. Debajo de cada editor de mensajes hay un botón por campo que la inserta, para no escribirla mal. Si el dato puede venir vacío, usa un texto de respaldo: {{presupuesto|por definir}}. La variable no cambia aunque le cambies el nombre al campo.</p>',
    },
    {
      h2: '¿Puede el agente de IA llenar los campos solo?',
      html: '<p>Sí. Tu agente de WhatsApp apunta un campo en la ficha cuando la persona lo dice en el chat. Se activa en el propio campo, no en el agente: marca <b>Lo llena el agente de WhatsApp</b> y escribe qué tiene que averiguar, por ejemplo «cuánto quiere invertir, en pesos».</p>' +
        '<p>El agente solo apunta lo que la persona dijo, sin inventar ni deducir. Si viene a cuento lo pregunta, uno a la vez y sin interrogatorios. Nunca pisa un dato que ya está en la ficha, así que lo que escribió alguien de tu equipo se respeta. En el probador del agente ves qué campos llenaría con cada conversación de prueba.</p>',
    },
    {
      h2: 'Ejemplos por tipo de negocio',
      html: '<ul>' +
        '<li><b>Inmobiliaria</b>: Presupuesto (moneda), Tipo de inmueble (lista), Zona de interés (texto), Crédito preaprobado (Sí / No). Una rama envía a quien tiene presupuesto ≥ 300.000.000 al asesor de proyectos premium.</li>' +
        '<li><b>Clínica</b>: EPS (lista), Procedimiento de interés (lista), Fecha de valoración (fecha). Una campaña le escribe solo a quien eligió «Blefaroplastia».</li>' +
        '<li><b>Eventos</b>: Fecha del evento (fecha), Número de invitados (número), Tipo de evento (lista). Una condición «Fecha del evento es desde» filtra lo que viene este trimestre.</li>' +
        '<li><b>Educación</b>: Programa (lista), Jornada (lista), Beca (Sí / No). El correo de bienvenida dice «Hola {{nombre}}, te esperamos en {{programa}}».</li>' +
        '</ul>',
    },
    {
      h2: 'Buenas prácticas y errores comunes',
      html: '<ul>' +
        '<li><b>Pocos campos, los que usas.</b> Si nadie filtra ni automatiza con un dato, sobra. Diez campos bien llenos valen más que cuarenta vacíos.</li>' +
        '<li><b>Nombres claros.</b> «Presupuesto» y no «Ppto». El nombre define la variable.</li>' +
        '<li><b>Listas cerradas cuando puedas.</b> «Apto», «apartamento» y «Apartamento» son tres valores distintos en texto libre; en una lista, uno solo.</li>' +
        '<li><b>Archiva, no borres.</b> Archivar esconde el campo y conserva los datos; al recuperarlo vuelven a verse. Antes de archivar, revisa si una plantilla o un formulario lo usa.</li>' +
        '<li><b>Cuidado al cambiar el tipo.</b> Si ya hay contactos con el dato, el tipo no se puede cambiar: elígelo bien desde el principio.</li>' +
        '</ul>',
    },
  ],
  pasos: {
    h2: 'Cómo crear un campo personalizado y usarlo en una automatización',
    intro: 'Solo el administrador de la cuenta puede crear o cambiar campos. En este ejemplo, una inmobiliaria avisa al equipo cuando entra un lead con presupuesto alto.',
    items: [
      { t: 'Abre el gestor', d: 'Ve a CRM → Campos personalizados. También lo abres con el botón «Campos» de la caja «Información adicional» en la ficha de un contacto.' },
      { t: 'Crea el campo', d: 'Pulsa «Crear campo», escribe «Presupuesto» en «Nombre del campo» y elige el tipo «Moneda». Debajo verás su variable: {{presupuesto}}.' },
      { t: 'Decide quién lo llena', d: 'Si quieres que lo apunte tu agente, marca «Lo llena el agente de WhatsApp» y escribe qué averiguar. Pulsa «Crear campo».' },
      { t: 'Crea la automatización', d: 'Ve a Marketing → Automatizaciones y pulsa «Nueva automatización». Elige el disparador «Cuando se crea un lead».' },
      { t: 'Agrega la condición', d: 'Añade el paso «Condición», elige «Campo: Presupuesto», el operador «≥» y el valor 300.000.000. Si no se cumple, el flujo se detiene para ese lead.' },
      { t: 'Define la acción', d: 'Debajo agrega «Notificarme» o «Crear tarea» para el asesor. Si quieres un camino distinto para cada caso, usa «Ramas Sí / No». Pulsa «Crear automatización».' },
    ],
  },
  faq: [
    { q: '¿Cuál es la diferencia entre una etiqueta y un campo personalizado en el CRM?', a: 'La etiqueta marca que un contacto pertenece a un grupo. El campo guarda un valor propio de cada contacto, como una cifra, una fecha o una opción, y permite comparar: «Presupuesto ≥ 100.000.000» o «Fecha del evento es desde».' },
    { q: '¿Puedo usar un campo personalizado en un mensaje de WhatsApp o en un correo?', a: 'Sí. Cada campo es una variable, por ejemplo {{presupuesto}}. Si puede venir vacío, escribe {{presupuesto|por definir}} y el mensaje dirá «por definir» en lugar de quedar en blanco.' },
    { q: '¿El agente de WhatsApp puede llenar campos solo?', a: 'Sí, si en ese campo activas «Lo llena el agente de WhatsApp» y le dices qué averiguar. Apunta solo lo que la persona dijo y nunca reemplaza un dato que ya está en la ficha.' },
    { q: '¿Qué pasa con los datos si archivo un campo?', a: 'Se conservan. El campo deja de verse en la ficha, en los formularios y como variable, y si lo recuperas los datos vuelven a aparecer.' },
    { q: '¿Puedo filtrar la lista de contactos por un campo personalizado?', a: 'Sí. En Filtros › Campo personalizado eliges el campo y el valor. También puedes mostrarlo como columna desde Columnas.' },
    { q: '¿Cómo segmento una campaña por un campo personalizado?', a: 'Al armar la audiencia, entra a «Por filtros» › «Campo personalizado», elige campo, operador y valor, y guarda el resultado con «Guardar este segmento como lista» para reutilizarlo.' },
    { q: '¿Puedo llenar campos personalizados al importar contactos desde Excel?', a: 'Sí. Si una columna de tu archivo tiene el mismo nombre que el campo, se reconoce sola. Si no, la asignas a mano al importar.' },
  ],
  relacionados: ['productos-en-el-crm', 'agente-ia-whatsapp-datos-de-contacto', 'recompra-y-encuesta-nps'],
  enlaces: [
    { url: '/crm/', texto: 'CRM con IA para pymes' },
    { url: '/crm/inmobiliarias/', texto: 'CRM para inmobiliarias' },
    { url: '/crm/clinicas/', texto: 'CRM para clínicas' },
  ],
};
