// Traducción de la portada (index.html) al inglés, frase por frase. La usa
// fuente-en/build.mjs, igual que paginas/*.mjs para las demás páginas a mano.
//
// Cada par es [texto exacto en index.html, texto en inglés]. build.mjs los
// aplica del más largo al más corto y FALLA si alguno ya no aparece: así,
// cuando alguien cambia una frase de la portada en español, el build avisa en
// vez de dejar la versión en inglés con la frase vieja o a medio traducir.
//
// Tono: el mismo de la portada — directo, en segunda persona, sin promesas que
// el producto no cumple. La app todavía se usa en español (el inglés dentro de
// la app es beta), así que aquí no se dice que la plataforma esté en inglés.

export const PARES = [
  // ── Hero ──
  ['Hecho para latinoamérica · En español', 'Built for Latin America'],
  ['<h1>Toda tu <span class="gradient-text">estrategia de ventas</span> en una sola plataforma</h1>', '<h1>Your entire <span class="gradient-text">sales strategy</span> on one platform</h1>'],
  ['CRM con pipeline, inbox de WhatsApp, un agente de IA que responde y califica, automatizaciones y reportes de cierre. Desde el primer contacto hasta la venta firmada — sin saltar entre siete herramientas.', 'A CRM with a sales pipeline, a WhatsApp inbox, an AI agent that answers and qualifies, automations and closing reports. From the first message to the signed deal, without jumping between seven tools.'],
  ['Empieza gratis — 14 días de Pro', 'Start free: 14 days of Pro'],
  ['>Ver el CRM<', '>See the CRM<'],
  ['Hoy no se cobra nada</span>', 'Nothing charged today</span>'],
  ['14 días de Pro gratis</span>', '14 days of Pro, free</span>'],
  ['Cancela cuando quieras</span>', 'Cancel anytime</span>'],
  ['CRM y clientes', 'CRM and customers'],

  // ── Franja que corre ──
  ['CRM con pipeline de ventas', 'CRM with a sales pipeline'],
  ['Todos tus leads en un tablero', 'All your leads on one board'],
  ['Automatizaciones de seguimiento', 'Follow-up automations'],
  ['Reportes de cierre', 'Closing reports'],
  ['Agente de IA para WhatsApp', 'AI agent for WhatsApp'],
  ['Inbox de WhatsApp e Instagram', 'WhatsApp and Instagram inbox'],
  ['Productos y propuestas', 'Products and proposals'],
  ['Campañas de correo y WhatsApp', 'Email and WhatsApp campaigns'],
  ['Encuestas de satisfacción', 'Customer satisfaction surveys'],
  ['Hecho para LatAm', 'Built for Latin America'],
  ['Desde $39 USD/mes', 'From $39 USD/month'],

  // ── Canales ──
  ['Y conectada a los canales de donde vienen tus ventas', 'Connected to the channels your sales come from'],

  // ── El ciclo ──
  ['La plataforma completa', 'The complete platform'],
  ['Vender no es una tarea.<br>Es un ciclo.', 'Selling isn’t a task.<br>It’s a cycle.'],
  ['Y hasta ahora te tocaba armarlo con cinco herramientas que no se hablan entre ellas. En Acuarius las cinco etapas viven en el mismo sitio y comparten los mismos datos.', 'Until now you had to piece it together from five tools that don’t talk to each other. In Acuarius all five stages live in one place and share the same data.'],
  ['Captación', 'Lead capture'],
  ['Formularios, tu web y los anuncios de clic a WhatsApp traen cada lead al CRM, con la campaña de donde vino.', 'Forms, your website and click-to-WhatsApp ads bring every lead into the CRM, tagged with the campaign it came from.'],
  ['<div class="ciclo-where">Fuentes</div>', '<div class="ciclo-where">Sources</div>'],
  ['Conversación', 'Conversation'],
  ['Tu agente de IA responde por WhatsApp, califica a cada persona y le pasa el cliente a tu equipo con sus datos.', 'Your AI agent answers on WhatsApp, qualifies each person and hands the customer to your team with their details.'],
  ['<div class="ciclo-where">Agente de IA</div>', '<div class="ciclo-where">AI agent</div>'],
  ['Gestión de clientes', 'Customer management'],
  ['Cada persona que levanta la mano entra al CRM con su etapa, su responsable y su próxima tarea. Nadie se queda sin respuesta.', 'Everyone who raises their hand enters the CRM with a stage, an owner and a next task. Nobody goes unanswered.'],
  ['<div class="ciclo-where">Automatizaciones</div>', '<div class="ciclo-where">Automations</div>'],
  ['Automatización', 'Automation'],
  ['Correos, mensajes, etiquetas y tareas que salen solos según lo que hace el lead. El seguimiento deja de depender de la memoria.', 'Emails, messages, tags and tasks that go out on their own based on what the lead does. Follow-up no longer depends on anyone’s memory.'],
  ['Optimización', 'Optimization'],
  ['Cuánto entró, qué se cerró, quién vendió y por qué se perdió el resto. Los números vuelven a la captación y el ciclo empieza otra vez.', 'How much came in, what closed, who sold it and why the rest was lost. The numbers feed back into lead capture and the cycle starts again.'],
  ['<div class="ciclo-where">Análisis</div>', '<div class="ciclo-where">Analytics</div>'],
  ['Lo que hace distinto a Acuarius no es tener las cinco piezas. Es que <strong>el lead que trajo tu campaña es el mismo que ves en el pipeline</strong>, el que recibe el seguimiento automático y el que aparece en el reporte de cierre. Un solo dato, de punta a punta.', 'What makes Acuarius different isn’t having all five pieces. It’s that <strong>the lead your campaign brought in is the same one you see in the pipeline</strong>, the one that gets the automatic follow-up and the one that shows up in the closing report. One record, end to end.'],

  // ── CRM ──
  ['El corazón de la plataforma', 'The heart of the platform'],
  ['Aquí es donde<br>se cierra la venta', 'This is where<br>the deal gets closed'],
  ['Un tablero con todos tus contactos, su etapa y quién responde por cada uno. Se arrastra con el dedo, se entiende en cinco segundos y no necesita que nadie lo capacite.', 'One board with all your contacts, their stage and who owns each one. Drag cards with your finger, understand it in five seconds, no training needed.'],
  ['Pipeline a tu medida', 'A pipeline that fits you'],
  ['Las etapas las pones tú, no el software. Y si arriendas y vendes, cada operación lleva su propio proceso — hasta 10 por cliente.', 'You set the stages, not the software. And if you both rent and sell, each line of business gets its own process: up to 10 per client.'],
  ['La ficha del lead, completa', 'The full lead record'],
  ['Llamadas, notas, correos, etiquetas y todo el historial en un solo lugar. Escribes o llamas desde ahí mismo, sin buscar el número en otro lado.', 'Calls, notes, emails, tags and the whole history in one place. Message or call right from there, without hunting for the number somewhere else.'],
  ['Cierras con el número puesto', 'Every close comes with a number'],
  ['Al mover un lead a Ganado o Perdido, Acuarius te pide el importe y el motivo. Por eso al final del mes el reporte existe sin que nadie lo arme.', 'When you move a lead to Won or Lost, Acuarius asks for the amount and the reason. That’s why the month-end report already exists without anyone building it.'],
  ['Tareas y agenda del comercial', 'Tasks and calendar for every rep'],
  ['Cada lead asignado nace con su tarea de seguimiento. Las reuniones se sincronizan de verdad con Google Calendar, en los dos sentidos.', 'Every assigned lead starts with a follow-up task. Meetings truly sync with Google Calendar, both ways.'],
  ['Te avisa antes de perderlo', 'It warns you before a lead slips away'],
  ['Cuando un lead lleva días sin contacto, aparece en tu inicio con nombre y apellido. No un número: la lista exacta de a quién hay que llamar hoy.', 'When a lead has gone days without contact, it shows up on your home screen by name. Not a number: the exact list of who to call today.'],
  ['Tu equipo, cada uno en lo suyo', 'Your team, each on their own leads'],
  ['Reparte los leads por turnos o fijos a una persona. Cada comercial ve los suyos, y tú ves todo y quién está cerrando.', 'Assign leads in rotation or to one fixed person. Each rep sees their own, and you see everything and who’s closing.'],

  // Tablero de muestra (cifras en dólares para quien lee en inglés)
  ['Pipeline · Proceso de venta', 'Pipeline · Sales process'],
  ['<span class="board-col-name">Nuevo</span>', '<span class="board-col-name">New</span>'],
  ['<span class="board-col-name">Contactado</span>', '<span class="board-col-name">Contacted</span>'],
  ['<span class="board-col-name">Propuesta</span>', '<span class="board-col-name">Proposal</span>'],
  ['<span class="board-col-name">Ganado</span>', '<span class="board-col-name">Won</span>'],
  ['Formulario web · hoy', 'Web form · today'],
  ['<span class="board-tag">Web</span>', '<span class="board-tag">Web</span>'],
  ['Meta Ads · hace 2 h', 'Meta Ads · 2 h ago'],
  ['<span class="board-tag">Campaña</span>', '<span class="board-tag">Campaign</span>'],
  ['Referido · ayer', 'Referral · yesterday'],
  ['<span class="board-tag">Referido</span>', '<span class="board-tag">Referral</span>'],
  ['Llamada · hace 3 días', 'Call · 3 days ago'],
  ['Reunión agendada', 'Meeting booked'],
  ['Sin actividad · 9 días', 'No activity · 9 days'],
  ['Se enfría', 'Going cold'],
  ['Propuesta vista 3 veces', 'Proposal viewed 3 times'],
  ['Esperando respuesta', 'Awaiting reply'],
  ['Cerrado el 12 de agosto', 'Closed on August 12'],
  ['Cerrado el 8 de agosto', 'Closed on August 8'],
  ['$ 4.200.000', '$4,200'],
  ['$ 12.500.000', '$12,500'],
  ['$ 8.900.000', '$8,900'],
  ['$ 3.100.000', '$3,100'],
  ['$ 21.400.000', '$21,400'],
  ['$ 5.600.000', '$5,600'],

  ['Los leads entran solos', 'Leads come in on their own'],
  ['Formularios propios, el formulario que ya tienes en tu web con una línea de código, o cualquier plataforma externa por webhook. Sin copiar y pegar nunca más.', 'Our own forms, the form already on your website with one line of code, or any external platform via webhook. No more copy and paste.'],
  ['Todas las conversaciones juntas', 'All your conversations together'],
  ['WhatsApp e Instagram en una sola bandeja, con respuestas rápidas, notas internas y un agente de IA que atiende y califica si tú quieres.', 'WhatsApp and Instagram in one inbox, with quick replies, internal notes and an AI agent that answers and qualifies if you want it to.'],
  ['Trae lo que ya tienes', 'Bring what you already have'],
  ['Importa tu base en CSV en un par de minutos. Y si borras algo por error, la papelera lo guarda 30 días.', 'Import your list from a CSV in a couple of minutes. And if you delete something by mistake, the trash keeps it for 30 days.'],
  ['El reporte ya está hecho', 'The report is already done'],
  ['Ventas, productividad, rendimiento por comercial y motivos de pérdida. Con el rango de fechas que tú elijas, listo para exportar.', 'Sales, productivity, performance by rep and reasons for lost deals. For any date range you choose, ready to export.'],

  // ── Cómo funciona ──
  ['Así de simple', 'It’s that simple'],
  ['Empieza en minutos,<br>no en semanas', 'Get started in minutes,<br>not weeks'],
  ['Sin curvas de aprendizaje complicadas. Sin configuraciones interminables. El primer día ya tienes tus contactos ordenados y a alguien respondiendo por cada uno.', 'No steep learning curve. No endless setup. On day one your contacts are organized and someone owns each of them.'],
  ['Empieza tu prueba gratis', 'Start your free trial'],
  ['Regístrate en segundos con tu correo o con Google y deja tu tarjeta: hoy no se cobra nada. Arrancas con 14 días del plan Pro completo, sin restricciones.', 'Sign up in seconds with your email or Google and add your card: nothing is charged today. You start with 14 days of the full Pro plan, no restrictions.'],
  ['Trae tus contactos y tus canales', 'Bring in your contacts and channels'],
  ['Importa tu base en CSV, conecta el formulario de tu web con una línea de código y vincula Google Ads o Meta en un clic. Desde ahí, los leads entran solos.', 'Import your list from a CSV, connect your website form with one line of code and link Google Ads or Meta in one click. From then on, leads come in on their own.'],
  ['Tu equipo vende y tú mides', 'Your team sells, you measure'],
  ['Cada comercial trabaja su lista y mueve el pipeline. Las automatizaciones hacen el seguimiento. Y al final del mes el reporte de cierre ya está armado.', 'Each rep works their list and moves the pipeline. Automations handle the follow-up. And at month end the closing report is already built.'],

  // ── Agente de IA ──
  ['Tu agente de IA', 'Your AI agent'],
  ['Un agente de IA que atiende tu WhatsApp como tu mejor asesor', 'An AI agent that handles your WhatsApp like your best rep'],
  ['Responde con la información de tu negocio, hace las preguntas que tú le pides, manda a cada persona al tablero que le toca y le pasa el cliente a tu equipo con sus datos. Tú lo pruebas antes de encenderlo y corriges lo que diga.', 'It answers with your business information, asks the questions you tell it to, sends each person to the right board and hands the customer to your team with their details. You test it before turning it on and correct anything it says.'],
  ['✓ Responde con tu catálogo, tus preguntas frecuentes y tu horario', '✓ Answers with your catalog, your FAQs and your business hours'],
  ['✓ Califica y reparte cada lead al asesor que le toca', '✓ Qualifies each lead and routes it to the right rep'],
  ['✓ Pide nombre y correo antes de pasarte la conversación', '✓ Asks for name and email before handing you the conversation'],
  ['✓ Llena los campos de la ficha mientras conversa', '✓ Fills in the lead record while it chats'],
    ['>Conoce el agente de IA<', '>Meet the AI agent<'],
  ['>Inbox de WhatsApp</a>', '>WhatsApp inbox</a>'],
  ['Agente de IA · WhatsApp', 'AI agent · WhatsApp'],
  ['Hola, ¿tienen apartamentos en arriendo en el norte?', 'Hi, do you have apartments for rent on the north side?'],
  ['¡Claro! Tengo tres opciones en el norte. ¿Cuál es tu presupuesto mensual?', 'Sure! I have three options on the north side. What’s your monthly budget?'],
  ['Hasta 2 millones', 'Up to $1,500'],
  ['Perfecto. Te paso con Laura, que te muestra las opciones hoy mismo.', 'Perfect. I’m connecting you with Laura, who can show you the options today.'],

  // ── Precios ──
  ['<p class="section-label">Precios</p>', '<p class="section-label">Pricing</p>'],
  ['14 días gratis. Después, desde 39 USD al mes', '14 days free. Then from 39 USD a month'],
  ['Una sola licencia con 3 usuarios, 1.000 contactos y el agente de IA para WhatsApp. Sumas solo lo que necesites: usuarios, contactos, mensajes del agente o clientes.', 'One license with 3 users, 1,000 contacts and the AI agent for WhatsApp. Add only what you need: users, contacts, agent messages or clients.'],
  ['>Ver precios y calcular el tuyo<', '>See pricing and calculate yours<'],
  ['>Probar 14 días gratis<', '>Try 14 days free<'],

  // ── Preguntas frecuentes ──
  ['Preguntas frecuentes', 'Frequently asked questions'],
  ['Todo lo que necesitas saber', 'Everything you need to know'],
  ['¿Puedo usar Acuarius solo como CRM, sin la parte de marketing?', 'Can I use Acuarius just as a CRM, without the marketing side?'],
  ['Sí, y mucha gente lo usa así. El CRM funciona completo por su cuenta: pipeline, fichas de lead, tareas, agenda, equipo y reportes. Los agentes de IA están ahí el día que los quieras usar, pero no tienes que tocarlos para sacarle provecho a la plataforma.', 'Yes, and plenty of people use it that way. The CRM works fully on its own: pipeline, lead records, tasks, calendar, team and reports. The AI agents are there whenever you want them, but you don’t have to touch them to get value from the platform.'],
  ['¿Puedo traer los contactos que ya tengo?', 'Can I bring the contacts I already have?'],
  ['Sí. Exportas tu base a CSV desde Excel, Google Sheets o el CRM que uses hoy, y la importas desde el pipeline. Acuarius avisa si detecta correos o teléfonos repetidos para que no te queden contactos duplicados, y lo que borres queda 30 días en la papelera por si te arrepientes.', 'Yes. Export your list to CSV from Excel, Google Sheets or the CRM you use today, and import it from the pipeline. Acuarius flags repeated emails or phone numbers so you don’t end up with duplicate contacts, and anything you delete stays in the trash for 30 days in case you change your mind.'],
  ['¿Cómo llegan al CRM los leads de mi página web?', 'How do leads from my website get into the CRM?'],
  ['De tres formas. Puedes crear un formulario en Acuarius y compartirlo o incrustarlo; puedes conectar el formulario que ya tienes pegando una línea de código en tu web, sin rehacer nada; o puedes recibir los datos desde cualquier plataforma externa por webhook. En los tres casos el lead entra al pipeline con su etiqueta, su responsable asignado y su tarea de seguimiento.', 'Three ways. You can build a form in Acuarius and share or embed it; you can connect the form you already have by pasting one line of code on your site, without rebuilding anything; or you can receive the data from any external platform via webhook. In all three cases the lead enters the pipeline with its tag, an assigned owner and a follow-up task.'],
  ['¿Cuánta gente de mi equipo puede trabajar en el CRM?', 'How many people on my team can work in the CRM?'],
  ['La licencia incluye 3 usuarios y puedes sumar más por 9 USD al mes cada uno. Los invitas por correo, cada uno entra con su propia cuenta y trabaja los leads que tiene asignados. Los leads se reparten por turnos entre el equipo o fijos a una persona según la fuente, y tú ves el rendimiento de cada comercial en el reporte.', 'The license includes 3 users, and you can add more for 9 USD a month each. You invite them by email, each one signs in with their own account and works the leads assigned to them. Leads are distributed in rotation across the team or fixed to one person depending on the source, and you see each rep’s performance in the report.'],
  ['¿Necesito una tarjeta para la prueba gratuita?', 'Do I need a card for the free trial?'],
  ['Sí. Para empezar los 14 días registras una tarjeta a través de Stripe, pero hoy no se cobra nada. Si no cancelas antes de que termine la prueba, al día siguiente se cobra el plan Pro mensual (39 USD) y se renueva cada mes hasta que lo canceles. Antes de ese cobro puedes elegir tu plan y sus complementos, y puedes cancelar desde tu cuenta en cualquier momento de la prueba, sin costo.', 'Yes. To start the 14 days you add a card through Stripe, but nothing is charged today. If you don’t cancel before the trial ends, the monthly Pro plan (39 USD) is charged the next day and renews every month until you cancel. Before that charge you can choose your plan and its add-ons, and you can cancel from your account at any time during the trial, at no cost.'],
  ['¿Puedo usar Acuarius si soy freelancer con múltiples clientes?', 'Can I use Acuarius if I’m a freelancer with several clients?'],
  ['Sí. Cada cliente es un perfil aparte, con su propio pipeline, sus leads, sus conexiones de Google Ads y Meta y sus reportes. Tu licencia incluye tu negocio y cada cliente adicional cuesta 9 USD al mes. Cambias de cliente con un clic y el agente sabe exactamente con quién estás trabajando.', 'Yes. Each client is a separate profile, with its own pipeline, leads, Google Ads and Meta connections and reports. Your license covers your own business, and each additional client costs 9 USD a month. You switch clients in one click and the agent knows exactly who you’re working with.'],
  ['¿Mis datos de campañas están seguros?', 'Is my campaign data secure?'],
  ['Sí. Todos los tokens de acceso a plataformas se almacenan encriptados. No compartimos tus datos con terceros. Puedes revocar el acceso en cualquier momento desde la configuración de Acuarius o directamente desde Google/Meta.', 'Yes. All platform access tokens are stored encrypted. We don’t share your data with third parties. You can revoke access at any time from your Acuarius settings or directly in Google/Meta.'],

  // ── Llamado final ──
  ['Deja de perder ventas<br>que ya tenías.', 'Stop losing sales<br>you already had.'],
  ['Ordena tus contactos, dale un responsable a cada uno y mide lo que se cierra. Empieza con 14 días gratis del plan Pro completo: hoy no se cobra nada.', 'Organize your contacts, give each one an owner and measure what closes. Start with 14 free days of the full Pro plan: nothing is charged today.'],
  ['        Prueba 14 días gratis\n', '        Start 14-day free trial\n'],
  ['mailto:support@acuarius.app?subject=Quiero%20hablar%20con%20el%20equipo%20de%20Acuarius&body=Hola%2C%20me%20gustar%C3%ADa%20conocer%20Acuarius%20antes%20de%20crear%20la%20cuenta.', 'mailto:support@acuarius.app?subject=I%27d%20like%20to%20talk%20to%20the%20Acuarius%20team&body=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Acuarius%20before%20creating%20an%20account.'],
  ['>Hablar con el equipo<', '>Talk to the team<'],
  ['14 días gratis · Hoy no se cobra nada · Cancela cuando quieras', '14 days free · Nothing charged today · Cancel anytime'],

  // ── Pie ── (los enlaces los pasa a inglés aIngles)
  ['La plataforma donde vive toda tu estrategia de ventas: CRM, marketing, automatización y agentes de IA. Hecha para latinoamérica, en español y con precios justos.', 'The platform where your entire sales strategy lives: CRM, marketing, automation and AI agents. Built for Latin America, with fair pricing.'],
  ['<div class="footer-col-title">Producto</div>', '<div class="footer-col-title">Product</div>'],
  ['>CRM y pipeline<', '>CRM and pipeline<'],
  ['<a href="#ciclo">La plataforma completa</a>', '<a href="#ciclo">The complete platform</a>'],
  ['>Agentes de IA<', '>AI agent<'],
  ['>Cómo funciona<', '>How it works<'],
  ['<a href="/precios/">Precios</a>', '<a href="/precios/">Pricing</a>'],
  ['<a href="/novedades/">Novedades</a>', '<a href="/novedades/">What’s new</a>'],
  ['>Programa de Partners<', '>Partner program<'],
  ['<a href="https://app.acuarius.app">Iniciar sesión</a>', '<a href="https://app.acuarius.app">Sign in</a>'],
  ['<div class="footer-col-title">Soluciones</div>', '<div class="footer-col-title">Solutions</div>'],
  ['>CRM para pymes<', '>CRM for small businesses<'],
  ['>CRM con WhatsApp<', '>WhatsApp CRM<'],
  ['>CRM gratis<', '>Free CRM<'],
  ['>CRM inmobiliario<', '>Real estate CRM<'],
  ['>CRM para clínicas<', '>CRM for clinics<'],
  ['>CRM para restaurantes<', '>CRM for restaurants<'],
  ['>Pipeline de ventas<', '>Sales pipeline<'],
  ['>Mejores CRM con WhatsApp<', '>Best WhatsApp CRMs<'],
  ['>Alternativas a HubSpot<', '>HubSpot alternatives<'],
  ['>Benchmarks LatAm<', '>Latin America benchmarks<'],
  ['>Calculadora de presupuesto<', '>Google Ads budget calculator<'],
  ['>Política de privacidad<', '>Privacy policy<'],
  ['>Términos de servicio<', '>Terms of service<'],
  ['>Reembolsos y cancelación<', '>Refunds and cancellation<'],
  ['<div class="footer-col-title" style="margin-top:22px">Contacto</div>', '<div class="footer-col-title" style="margin-top:22px">Contact</div>'],
  ['· Bogotá, Colombia', '· Bogotá, Colombia'],
  ['Hecho con ❤️ para latinoamérica', 'Made with ❤️ for Latin America'],
];

// Nombres propios del tablero de muestra: pueden llevar tildes sin ser texto
// en español sin traducir.
export const CABEZA = {
  title: 'Acuarius — CRM with an AI agent for WhatsApp, built for Latin America',
  description: 'CRM with an AI agent for WhatsApp: sales pipeline, WhatsApp and Instagram inbox, automations, campaigns and reports in one platform. Built for Latin America, from 39 USD a month.',
};

export const PERMITIDOS = ['Carolina Restrepo', 'Andrés Villamil', 'Distribuciones Lara', 'Paula Céspedes', 'Grupo Miralta', 'Sebastián Ortiz', 'Inversiones Bahía', 'Natalia Guzmán', 'Clínica del Norte', 'Mauricio Peña'];
