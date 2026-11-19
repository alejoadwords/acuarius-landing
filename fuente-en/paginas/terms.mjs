// Términos de servicio en inglés (/en/terms): pares [texto exacto de terms.html, inglés].
// Es un texto legal: traducción fiel, sin resumir ni añadir obligaciones. La versión
// española prevalece (lo dice el aviso que se añade bajo el primer título).
// Esta página no trae el pie común: su pie va aquí.

export const CABEZA = {
  title: 'Terms of Service — Acuarius',
  description: 'Acuarius Terms of Service: who provides the service, plans and payments, acceptable use, your contacts\' data, SMS, AI, integrations and governing law.',
};

export const PERMITIDOS = [
  'Comisión de Regulación de Comunicaciones',
  'Registro de Números Excluidos',
];

export const PARES = [
  // Cabecera
  ['>Inicio</a>', '>Home</a>'],
  ['>Privacidad</a>', '>Privacy</a>'],
  ['>Términos</a>', '>Terms</a>'],
  ['>Ingresar</a>', '>Log in</a>'],

  // Portada
  ['<h1>Términos de Servicio</h1>', '<h1>Terms of Service</h1>'],
  ['<p>Al usar Acuarius, aceptas los siguientes términos. Léelos con atención antes de comenzar.</p>',
    '<p>By using Acuarius, you agree to the following terms. Please read them carefully before you begin.</p>'],
  ['Última actualización: 4 de noviembre de 2026', 'Last updated: November 4, 2026'],

  // Índice y títulos de sección (el índice y el h2 comparten texto)
  ['<div class="toc-title">Contenido</div>', '<div class="toc-title">Contents</div>'],
  ['<a href="#aceptacion">Quién presta el servicio y aceptación</a>', '<a href="#aceptacion">Who provides the service and acceptance</a>'],
  ['<span class="sec-num">1</span>Quién presta el servicio y aceptación</h2>',
    '<span class="sec-num">1</span>Who provides the service and acceptance</h2>\n    <p>This English version is a courtesy translation. If it differs from the Spanish version, the Spanish version prevails.</p>'],
  ['>Qué es Acuarius<', '>What Acuarius is<'],
  ['>Cuentas, equipo y accesos<', '>Accounts, team and access<'],
  ['>Planes, prueba gratuita y pagos<', '>Plans, free trial and payments<'],
  ['>Cupos y consumos<', '>Quotas and usage<'],
  ['>Uso aceptable<', '>Acceptable use<'],
  ['>Los datos de tus contactos<', '>Your contacts\' data<'],
  ['>Correo y WhatsApp<', '>Email and WhatsApp<'],
  ['>Mensajes de texto (SMS)<', '>Text messages (SMS)<'],
  ['>Inteligencia artificial<', '>Artificial intelligence<'],
  ['>Integraciones de terceros<', '>Third-party integrations<'],
  ['>Propiedad intelectual<', '>Intellectual property<'],
  ['>Disponibilidad y soporte<', '>Availability and support<'],
  ['>Limitación de responsabilidad<', '>Limitation of liability<'],
  ['>Suspensión, cancelación y tus datos<', '>Suspension, cancellation and your data<'],
  ['>Cambios a los términos<', '>Changes to these terms<'],
  ['>Ley aplicable y contacto<', '>Governing law and contact<'],

  // 1. Aceptación
  [`Al crear una cuenta o usar Acuarius (<strong>app.acuarius.app</strong>) aceptas estos Términos de Servicio y la <a href="https://acuarius.app/privacy.html">Política de Tratamiento de Datos Personales</a>. Si no estás de acuerdo, no uses el servicio.`,
    `By creating an account or using Acuarius (<strong>app.acuarius.app</strong>) you accept these Terms of Service and the <a href="https://acuarius.app/privacy.html">Personal Data Processing Policy</a>. If you do not agree, do not use the service.`],
  [`<p>Acuarius es una marca operada y facturada por <strong>Aixion Labs Solutions LLC</strong>, sociedad de responsabilidad limitada registrada en el estado de Texas, Estados Unidos (File Number 805940283), con dirección en <strong>15723 Chapel Lake Dr, Cypress, TX 77429</strong> («Acuarius», «nosotros»). Estos términos son un acuerdo entre esa sociedad y la persona o empresa que crea la cuenta («tú»).</p>`,
    `<p>Acuarius is a brand operated and billed by <strong>Aixion Labs Solutions LLC</strong>, a limited liability company registered in the State of Texas, United States (File Number 805940283), with its address at <strong>15723 Chapel Lake Dr, Cypress, TX 77429</strong> (“Acuarius,” “we”). These terms are an agreement between that company and the person or business that creates the account (“you”).</p>`],
  [`<p>El envío de mensajes de texto (SMS) a Colombia lo presta <strong>Check In Col SAS</strong>, sociedad colombiana vinculada a Acuarius (NIT 900.825.601-2, Carrera 53 #106-280, Centro Empresarial, Barranquilla), como se explica en la sección 9.</p>`,
    `<p>Text message (SMS) delivery to Colombia is provided by <strong>Check In Col SAS</strong>, a Colombian company affiliated with Acuarius (NIT 900.825.601-2, Carrera 53 #106-280, Centro Empresarial, Barranquilla), as explained in section 9.</p>`],
  [`<p>Acuarius está pensado para empresas, agencias y profesionales. Si usas el servicio en nombre de una empresa, confirmas que tienes facultad para aceptar estos términos por ella.</p>`,
    `<p>Acuarius is intended for businesses, agencies and professionals. If you use the service on behalf of a business, you confirm that you have the authority to accept these terms on its behalf.</p>`],

  // 2. Descripción
  [`<p>Acuarius es una plataforma en la nube de marketing y ventas con inteligencia artificial. Según tu plan, incluye entre otras cosas:</p>`,
    `<p>Acuarius is a cloud-based marketing and sales platform with artificial intelligence. Depending on your plan, it includes, among other things:</p>`],
  [`<li>Un CRM con pipelines de venta, contactos, tareas, agenda, reservas y reportes</li>`,
    `<li>A CRM with sales pipelines, contacts, tasks, calendar, bookings and reports</li>`],
  [`<li>Una bandeja de entrada que reúne las conversaciones de WhatsApp, Instagram, Messenger, TikTok y el chat de tu sitio web</li>`,
    `<li>An inbox that brings together conversations from WhatsApp, Instagram, Messenger, TikTok and your website chat</li>`],
  [`<li>Agentes de inteligencia artificial que responden y califican a tus contactos en esos canales</li>`,
    `<li>Artificial intelligence agents that reply to and qualify your contacts on those channels</li>`],
  [`<li>Automatizaciones y campañas de correo, WhatsApp y mensajes de texto (SMS)</li>`,
    `<li>Automations and email, WhatsApp and text message (SMS) campaigns</li>`],
  [`<li>Propuestas comerciales, páginas de aterrizaje y formularios para captar contactos</li>`,
    `<li>Sales proposals, landing pages and forms to capture contacts</li>`],
  [`<li>Conexión con tus cuentas de publicidad (Google Ads, Meta Ads, TikTok Ads, LinkedIn Ads) y asistentes de IA para planearlas y analizarlas</li>`,
    `<li>Connection to your advertising accounts (Google Ads, Meta Ads, TikTok Ads, LinkedIn Ads) and AI assistants to plan and analyze them</li>`],
  [`<p>El detalle de lo que incluye cada plan está publicado en <a href="https://acuarius.app">acuarius.app</a>. Podemos mejorar, cambiar o retirar funciones; si retiramos algo esencial de tu plan pagado, te avisaremos con anticipación razonable.</p>`,
    `<p>The details of what each plan includes are published at <a href="https://acuarius.app">acuarius.app</a>. We may improve, change or remove features; if we remove something essential from your paid plan, we will notify you with reasonable advance notice.</p>`],

  // 3. Cuentas
  [`<li>Debes dar información veraz y mantenerla actualizada.</li>`,
    `<li>You must provide truthful information and keep it up to date.</li>`],
  [`<li>Eres responsable de la seguridad de tu acceso y de toda la actividad de tu cuenta, incluida la de las personas que invites a tu equipo y la de los sistemas que conectes con una llave de la API.</li>`,
    `<li>You are responsible for the security of your access and for all activity in your account, including that of the people you invite to your team and that of the systems you connect with an API key.</li>`],
  [`<li>Como dueño de la cuenta decides quién entra y con qué perfil (administración, ventas o mercadeo). Los asientos de equipo dependen de tu plan.</li>`,
    `<li>As the account owner, you decide who has access and with which profile (administration, sales or marketing). Team seats depend on your plan.</li>`],
  [`<li>Si una agencia administra varias marcas desde Acuarius, la agencia responde por el uso que haga de los datos de cada una.</li>`,
    `<li>If an agency manages several brands from Acuarius, the agency is responsible for its use of each brand's data.</li>`],
  [`<li>Avísanos de inmediato a <a href="mailto:support@acuarius.app">support@acuarius.app</a> si sospechas un acceso no autorizado.</li>`,
    `<li>Notify us immediately at <a href="mailto:support@acuarius.app">support@acuarius.app</a> if you suspect unauthorized access.</li>`],
  [`<p>Para atender un problema que nos reportes, o una falla que detectemos, nuestro equipo de soporte puede entrar a tu cuenta. Cada acceso queda registrado con quién entró y por qué, y lo usamos solo para resolver ese asunto.</p>`,
    `<p>To address a problem you report to us, or a failure we detect, our support team may access your account. Each access is logged with who accessed it and why, and we use it only to resolve that matter.</p>`],

  // 4. Pagos
  [`Los cobros los factura <strong>Aixion Labs Solutions LLC</strong>. Los pagos se procesan a través de <strong>Stripe</strong> y se cobran en dólares estadounidenses (USD). Al suscribirte autorizas el cobro recurrente del plan que elijas hasta que lo canceles. Nunca vemos ni guardamos los datos de tu tarjeta. Las suscripciones contratadas antes por Hotmart se siguen cobrando por Hotmart hasta que las pasemos a Stripe, y te avisaremos antes.`,
    `Charges are billed by <strong>Aixion Labs Solutions LLC</strong>. Payments are processed through <strong>Stripe</strong> and charged in US dollars (USD). By subscribing, you authorize recurring charges for the plan you choose until you cancel it. We never see or store your card details. Subscriptions previously purchased through Hotmart will continue to be charged through Hotmart until we move them to Stripe, and we will notify you beforehand.`],
  [`<li><strong>Prueba gratuita:</strong> las cuentas nuevas pueden tener 14 días de prueba del plan Pro, sin tarjeta de crédito. Al terminar, si no te suscribes, la cuenta pasa al plan gratuito con sus límites; no se te cobra nada automáticamente. Es una prueba por empresa.</li>`,
    `<li><strong>Free trial:</strong> new accounts may get a 14-day trial of the Pro plan, with no credit card. When it ends, if you do not subscribe, the account moves to the free plan with its limits; you are not charged anything automatically. One trial per business.</li>`],
  [`<li><strong>Planes:</strong> Gratuito, Pro y Agencia, con los precios y límites publicados en <a href="https://acuarius.app">acuarius.app</a>.</li>`,
    `<li><strong>Plans:</strong> Free, Pro and Agency, with the prices and limits published at <a href="https://acuarius.app">acuarius.app</a>.</li>`],
  [`<li><strong>Pago anual («2 meses gratis»):</strong> si pagas un año por adelantado, pagas 10 meses y recibes 12. El descuento aplica al plan y a sus complementos de suscripción (usuarios, contactos y mensajes del agente de IA), no a los créditos de SMS. Si cancelas, el plan sigue activo hasta el final del año pagado; no se reembolsa la parte no usada, salvo lo previsto en el punto de reembolso.</li>`,
    `<li><strong>Annual payment (“2 months free”):</strong> if you pay for one year in advance, you pay for 10 months and receive 12. The discount applies to the plan and its subscription add-ons (users, contacts and AI agent messages), not to SMS credits. If you cancel, the plan remains active until the end of the paid year; the unused portion is not refunded, except as provided in the refund item.</li>`],
  [`<li><strong>Complementos:</strong> puedes ampliar tu plan con usuarios, contactos, mensajes del agente de IA, correos y créditos de SMS, según los precios publicados. Los créditos de SMS son prepago.</li>`,
    `<li><strong>Add-ons:</strong> you can expand your plan with users, contacts, AI agent messages, emails and SMS credits, at the published prices. SMS credits are prepaid.</li>`],
  [`<li><strong>Cancelación:</strong> puedes cancelar cuando quieras desde tu cuenta o escribiéndonos a <a href="mailto:support@acuarius.app">support@acuarius.app</a>. La cancelación aplica al final del periodo ya pagado y no se vuelve a cobrar; no hay reembolsos por periodos ya facturados.</li>`,
    `<li><strong>Cancellation:</strong> you can cancel at any time from your account or by writing to us at <a href="mailto:support@acuarius.app">support@acuarius.app</a>. Cancellation takes effect at the end of the period already paid and you are not charged again; there are no refunds for periods already billed.</li>`],
  [`<li><strong>Reembolso:</strong> si el servicio no cumple lo descrito, puedes pedir el reembolso completo dentro de los primeros 7 días de tu primera suscripción. El detalle está en la <a href="https://acuarius.app/reembolsos.html">Política de reembolsos, cancelación y disputas</a>.</li>`,
    `<li><strong>Refund:</strong> if the service does not perform as described, you may request a full refund within the first 7 days of your first subscription. The details are in the <a href="https://acuarius.app/reembolsos.html">Refund, Cancellation and Dispute Policy</a>.</li>`],
  [`<li><strong>Cobros no reconocidos:</strong> si ves un cobro de Acuarius que no reconoces, escríbenos antes de abrir una disputa con tu banco; lo revisamos y respondemos en máximo 3 días hábiles.</li>`,
    `<li><strong>Unrecognized charges:</strong> if you see a charge from Acuarius that you do not recognize, write to us before opening a dispute with your bank; we will review it and respond within 3 business days at most.</li>`],
  [`<li><strong>Impuestos:</strong> los precios publicados no incluyen impuestos; si la ley de tu país los exige, se suman al cobro.</li>`,
    `<li><strong>Taxes:</strong> published prices do not include taxes; if the law of your country requires them, they are added to the charge.</li>`],
  [`<li><strong>Precios:</strong> si cambiamos el precio de tu plan, te avisaremos al menos 30 días antes de que aplique.</li>`,
    `<li><strong>Prices:</strong> if we change the price of your plan, we will notify you at least 30 days before it takes effect.</li>`],

  // 5. Cupos
  [`<p>Algunas funciones tienen un cupo según tu plan y lo que hayas comprado aparte: las respuestas del agente de IA, los contactos, los usuarios, los correos y los SMS. En la plataforma ves cuánto llevas.</p>`,
    `<p>Some features have a quota based on your plan and on what you have purchased separately: AI agent replies, contacts, users, emails and SMS. You can see how much you have used in the platform.</p>`],
  [`<li>Al agotar un cupo, la función correspondiente se detiene hasta el siguiente ciclo o hasta que amplíes el cupo. En el agente de IA, además, te avisamos por correo cuando te acercas al límite.</li>`,
    `<li>When a quota runs out, the corresponding feature stops until the next cycle or until you expand the quota. For the AI agent, we also notify you by email when you are close to the limit.</li>`],
  [`<li>Para proteger la plataforma y a los demás clientes aplicamos límites antifraude, por ejemplo un tope de envíos por campaña durante los primeros días de una cuenta. No son límites de tu plan: desaparecen solos o los levantamos si nos escribes.</li>`,
    `<li>To protect the platform and other customers, we apply anti-fraud limits, for example a cap on sends per campaign during an account's first days. These are not limits of your plan: they go away on their own, or we lift them if you write to us.</li>`],

  // 6. Uso aceptable
  [`<p>Acuarius es para marketing y ventas legítimos. <strong>Está prohibido:</strong></p>`,
    `<p>Acuarius is for legitimate marketing and sales. <strong>The following is prohibited:</strong></p>`],
  [`<li>Enviar spam, mensajes a listas compradas o a personas que no aceptaron recibir comunicaciones de tu negocio</li>`,
    `<li>Sending spam, or messages to purchased lists or to people who did not agree to receive communications from your business</li>`],
  [`<li>Phishing, suplantación de marcas, personas o entidades, y cualquier contenido engañoso, fraudulento o ilegal</li>`,
    `<li>Phishing, impersonation of brands, people or organizations, and any misleading, fraudulent or illegal content</li>`],
  [`<li>Contactar a consumidores fuera de los canales y horarios que permite la ley, o insistir a quien pidió no ser contactado</li>`,
    `<li>Contacting consumers outside the channels and hours permitted by law, or persisting with anyone who asked not to be contacted</li>`],
  [`<li>Usar el servicio para cobranzas abusivas, apuestas o contenido no permitido por las políticas de WhatsApp, Meta, Google o TikTok</li>`,
    `<li>Using the service for abusive debt collection, gambling or content not permitted by the policies of WhatsApp, Meta, Google or TikTok</li>`],
  [`<li>Intentar acceder a datos o cuentas de otros, sobrecargar la plataforma o usar bots no autorizados contra ella</li>`,
    `<li>Attempting to access other people's data or accounts, overloading the platform or using unauthorized bots against it</li>`],
  [`<li>Revender el servicio sin un acuerdo escrito con nosotros</li>`,
    `<li>Reselling the service without a written agreement with us</li>`],
  [`<p>Si detectamos un uso prohibido podemos detener los envíos o suspender la cuenta de inmediato, sin reembolso, para proteger a los destinatarios y a los demás clientes.</p>`,
    `<p>If we detect a prohibited use, we may stop sending or suspend the account immediately, without a refund, to protect recipients and other customers.</p>`],

  // 7. Contactos
  [`Los datos de las personas que cargas o que llegan a tu cuenta (tus contactos, leads y clientes) son tuyos. Frente a ellos <strong>tú eres el responsable del tratamiento</strong> y Acuarius actúa como <strong>encargado</strong>: los procesamos solo para prestarte el servicio y según tus instrucciones.`,
    `The data of the people you upload or who come into your account (your contacts, leads and customers) is yours. With respect to that data, <strong>you are the data controller</strong> and Acuarius acts as the <strong>data processor</strong>: we process it only to provide you with the service and according to your instructions.`],
  [`<li>Garantizas que tienes autorización de esas personas para tratar sus datos y escribirles por cada canal que uses, conforme a la Ley 1581 de 2012 y demás normas aplicables.</li>`,
    `<li>You warrant that you have authorization from those people to process their data and to write to them on each channel you use, in accordance with Law 1581 of 2012 and other applicable regulations.</li>`],
  [`<li>Atiendes sus solicitudes de consulta, corrección, baja y supresión. En correo y SMS la plataforma marca las bajas y deja de escribirles por ese canal; en los demás canales lo gestionas tú.</li>`,
    `<li>You handle their requests for access, correction, unsubscription and deletion. For email and SMS, the platform records unsubscriptions and stops writing to them on that channel; on the other channels, you manage this yourself.</li>`],
  [`<li>No vendemos ni usamos los datos de tus contactos para fines propios, ni los compartimos con otros clientes.</li>`,
    `<li>We do not sell or use your contacts' data for our own purposes, nor do we share it with other customers.</li>`],
  [`<li>Puedes exportar tus contactos a CSV y borrarlos cuando quieras. Lo que borras pasa a una papelera por 30 días y luego se elimina.</li>`,
    `<li>You can export your contacts to CSV and delete them whenever you want. What you delete goes to a trash bin for 30 days and is then erased.</li>`],

  // 8. Correo y WhatsApp
  [`<li><strong>Correo:</strong> las campañas salen desde nuestro dominio verificado y cada correo lleva un enlace para darse de baja. Quien se da de baja, o cuyo correo rebota o marca spam, deja de recibir correos tuyos. Aplicamos topes diarios para cuidar la entrega de todos.</li>`,
    `<li><strong>Email:</strong> campaigns are sent from our verified domain and every email includes an unsubscribe link. Anyone who unsubscribes, or whose email bounces or who marks it as spam, stops receiving your emails. We apply daily caps to protect deliverability for everyone.</li>`],
  [`<li><strong>WhatsApp:</strong> los mensajes salen por tu propio número conectado y debes cumplir las políticas de WhatsApp Business. Para escribir a quien no te escribió en las últimas 24 horas, Meta exige plantillas aprobadas. Meta puede limitar o bloquear tu número por su cuenta; Acuarius no controla esas decisiones.</li>`,
    `<li><strong>WhatsApp:</strong> messages are sent from your own connected number and you must comply with WhatsApp Business policies. To write to someone who has not written to you in the last 24 hours, Meta requires approved templates. Meta may limit or block your number on its own; Acuarius does not control those decisions.</li>`],

  // 9. SMS
  [`<p>Acuarius te permite enviar SMS a tus contactos en Colombia desde campañas y automatizaciones. Este servicio lo presta <strong>Check In Col SAS</strong> (ver sección 1), y solo llega a celulares de Colombia. Los mensajes salen a través de un proveedor de telecomunicaciones, actualmente <strong>LabsMobile (001TECH SL, España)</strong>, y por eso aplican también a ti las condiciones que ese proveedor exige a quien envía.</p>`,
    `<p>Acuarius lets you send SMS to your contacts in Colombia from campaigns and automations. This service is provided by <strong>Check In Col SAS</strong> (see section 1), and it only reaches Colombian mobile phones. Messages are sent through a telecommunications provider, currently <strong>LabsMobile (001TECH SL, Spain)</strong>, and therefore the conditions that provider requires of senders also apply to you.</p>`],
  [`<strong>Consentimiento:</strong> solo puedes enviar SMS a personas que te dieron su consentimiento previo, expreso e informado para recibir mensajes de tu negocio. Antes de cada envío lo confirmas en la plataforma, y te comprometes a conservar la prueba y entregarla si Acuarius o el proveedor te la piden.`,
    `<strong>Consent:</strong> you may only send SMS to people who gave you their prior, express and informed consent to receive messages from your business. You confirm this in the platform before each send, and you agree to keep the proof and provide it if Acuarius or the provider asks you for it.`],
  [`<p>Al usar los SMS, además:</p>`, `<p>In addition, when you use SMS:</p>`],
  [`<li>Cumples la ley colombiana aplicable, entre otras la Ley 1581 de 2012 de protección de datos, la Ley 2300 de 2023 y la regulación de la Comisión de Regulación de Comunicaciones (CRC), incluido el Registro de Números Excluidos.</li>`,
    `<li>You comply with applicable Colombian law, including, among others, Law 1581 of 2012 on data protection, Law 2300 of 2023 and the regulations of the Communications Regulation Commission (Comisión de Regulación de Comunicaciones, CRC), including the Excluded Numbers Registry (Registro de Números Excluidos).</li>`],
  [`<li>Atiendes las solicitudes de baja. Cada SMS termina con un enlace para darse de baja: quien lo usa deja de recibir tus SMS sin que tengas que hacer nada. Si alguien te lo pide por otro medio, márcalo con la etiqueta «no-sms» y no volverá a recibir SMS desde la plataforma. Los SMS se envían desde un código corto que no recibe respuestas, así que responder al mensaje no sirve para darse de baja.</li>`,
    `<li>You handle unsubscribe requests. Every SMS ends with an unsubscribe link: anyone who uses it stops receiving your SMS without you having to do anything. If someone asks you through another channel, mark them with the “no-sms” tag and they will no longer receive SMS from the platform. SMS are sent from a short code that does not receive replies, so replying to the message does not unsubscribe.</li>`],
  [`<li>No envías contenido engañoso, fraudulento ni ilegal: suplantación de marcas o entidades, enlaces maliciosos (<em>smishing</em>), cobranzas abusivas o mensajes que el destinatario no espera de tu negocio.</li>`,
    `<li>You do not send misleading, fraudulent or illegal content: impersonation of brands or organizations, malicious links (<em>smishing</em>), abusive debt collection or messages the recipient does not expect from your business.</li>`],
  [`<li>Aceptas que la plataforma solo envía en el horario permitido (lunes a viernes de 7:00 a 19:00 y sábados de 8:00 a 15:00, sin domingos ni festivos) y que las cuentas nuevas tienen un límite de mensajes por campaña durante sus primeros días.</li>`,
    `<li>You accept that the platform only sends during permitted hours (Monday to Friday from 7:00 to 19:00 and Saturdays from 8:00 to 15:00, never on Sundays or public holidays) and that new accounts have a limit on messages per campaign during their first days.</li>`],
  [`<p><strong>Créditos:</strong> los SMS se pagan por adelantado con paquetes de créditos. Un crédito equivale a un SMS de hasta 160 caracteres; un mensaje más largo, o con emojis o símbolos especiales, gasta más de un crédito, y la plataforma te muestra cuántos antes de enviar. Los créditos se suman entre paquetes y no vencen mientras tu cuenta esté activa. Si el proveedor no acepta un mensaje, su crédito se devuelve solo; un mensaje aceptado que luego el operador no entrega sí consume su crédito. Los créditos no son reembolsables en dinero.</p>`,
    `<p><strong>Credits:</strong> SMS are paid in advance with credit packages. One credit equals one SMS of up to 160 characters; a longer message, or one with emojis or special symbols, uses more than one credit, and the platform shows you how many before sending. Credits add up across packages and do not expire while your account is active. If the provider does not accept a message, its credit is returned automatically; an accepted message that the carrier then does not deliver does consume its credit. Credits are not refundable for cash.</p>`],
  [`<p><strong>Entrega:</strong> la entrega depende de los operadores móviles. Acuarius no garantiza que cada mensaje llegue ni el tiempo que tarde, y te muestra en cada campaña los mensajes que el operador no entregó.</p>`,
    `<p><strong>Delivery:</strong> delivery depends on mobile carriers. Acuarius does not guarantee that each message will arrive or how long it will take, and it shows you, in each campaign, the messages the carrier did not deliver.</p>`],
  [`<strong>Suspensión:</strong> podemos suspender de inmediato el envío de SMS de una cuenta si detectamos un uso que incumpla esta sección, o si el proveedor o una autoridad lo exigen. Los créditos de una cuenta suspendida por abuso no se reembolsan.`,
    `<strong>Suspension:</strong> we may immediately suspend an account's SMS sending if we detect use that breaches this section, or if the provider or an authority requires it. Credits of an account suspended for abuse are not refunded.`],

  // 10. IA
  [`<li>Las respuestas de los agentes y asistentes de IA pueden contener errores. Revísalas antes de usarlas en decisiones importantes, en campañas o en ofertas a tus clientes.</li>`,
    `<li>Responses from AI agents and assistants may contain errors. Review them before using them in important decisions, in campaigns or in offers to your customers.</li>`],
  [`<li>Cuando activas un agente para responder a tus contactos, responde en nombre de tu negocio con la información que tú le das (catálogo, horarios, preguntas frecuentes). Eres responsable de que esa información sea correcta y de supervisar sus conversaciones; puedes tomar cualquier conversación en cualquier momento.</li>`,
    `<li>When you activate an agent to reply to your contacts, it replies on behalf of your business using the information you give it (catalog, hours, frequently asked questions). You are responsible for that information being correct and for supervising its conversations; you can take over any conversation at any time.</li>`],
  [`<li>Para generar respuestas, textos o imágenes enviamos a proveedores de IA solo la información necesaria para esa tarea. Cuáles son y qué reciben está en la Política de Tratamiento de Datos.</li>`,
    `<li>To generate responses, text or images, we send AI providers only the information needed for that task. Which providers they are and what they receive is described in the Data Processing Policy.</li>`],
  [`<li>Lo que la IA genera a partir de tus instrucciones es tuyo para usar en tu negocio, pero no garantizamos que sea exclusivo ni que esté libre de derechos de terceros.</li>`,
    `<li>What the AI generates from your instructions is yours to use in your business, but we do not guarantee that it is exclusive or free of third-party rights.</li>`],

  // 11. Integraciones
  [`<p>Acuarius se conecta con servicios de terceros que tú decides activar: Google (Ads, Calendar, Drive y Sheets), Meta (WhatsApp, Instagram, Messenger y Ads), TikTok, LinkedIn, Mercado Pago, tu sitio web y otros. Al conectarlos:</p>`,
    `<p>Acuarius connects with third-party services that you choose to activate: Google (Ads, Calendar, Drive and Sheets), Meta (WhatsApp, Instagram, Messenger and Ads), TikTok, LinkedIn, Mercado Pago, your website and others. By connecting them:</p>`],
  [`<li>Aceptas también los términos de cada servicio y eres responsable de mantener tus cuentas en regla</li>`,
    `<li>You also accept the terms of each service and you are responsible for keeping your accounts in good standing</li>`],
  [`<li>Nos autorizas a acceder solo a lo necesario para la función que activaste; puedes desconectarlos cuando quieras</li>`,
    `<li>You authorize us to access only what is necessary for the feature you activated; you can disconnect them whenever you want</li>`],
  [`<li>Acuarius no responde por cambios, caídas o decisiones de esos servicios (por ejemplo, la suspensión de una cuenta publicitaria o de un número de WhatsApp)</li>`,
    `<li>Acuarius is not responsible for changes, outages or decisions of those services (for example, the suspension of an advertising account or of a WhatsApp number)</li>`],
  [`<h3>La API, tus llaves y los sistemas que conectes</h3>`,
    `<h3>The API, your keys and the systems you connect</h3>`],
  [`<p>Acuarius tiene una API, un servidor MCP y avisos a tu sistema (webhooks) para que conectes a tu cuenta sistemas externos: el agente de inteligencia artificial de tu empresa, tu aplicación, tu ERP u otros. Al crear una llave de la API o un webhook:</p>`,
    `<p>Acuarius has an API, an MCP server and notifications to your system (webhooks) so you can connect external systems to your account: your company's artificial intelligence agent, your application, your ERP or others. By creating an API key or a webhook:</p>`],
  [`<li>Lo que haga un sistema con tu llave se considera hecho por tu cuenta, igual que lo que hace una persona de tu equipo. Tú eliges los permisos de cada llave y eres responsable de supervisar lo que hacen esos sistemas y las decisiones que toman, incluidas las de un agente de inteligencia artificial que actúe sin intervención humana.</li>`,
    `<li>Anything a system does with your key is considered done by your account, just like what a person on your team does. You choose the permissions of each key and you are responsible for supervising what those systems do and the decisions they make, including those of an artificial intelligence agent that acts without human intervention.</li>`],
  [`<li>Al conectar un sistema o un webhook decides enviar a ese tercero (tu proveedor de inteligencia artificial, tu servidor u otro) datos de tu cuenta y de tus contactos. Esa entrega la haces tú como responsable del tratamiento: debes contar con la autorización de tus contactos, informarla en tu propia política de tratamiento de datos y tener un acuerdo con quien los recibe. Lo que ese tercero haga con los datos queda fuera de nuestro control.</li>`,
    `<li>By connecting a system or a webhook, you decide to send data from your account and about your contacts to that third party (your artificial intelligence provider, your server or another). You make that transfer as the data controller: you must have your contacts' authorization, disclose it in your own data processing policy and have an agreement with whoever receives the data. What that third party does with the data is outside our control.</li>`],
  [`<li>Guarda tus llaves y los secretos de tus webhooks como una contraseña: no los publiques ni los pongas en una página web o en una aplicación que se instale en un teléfono. Si uno se filtra, revócalo de inmediato desde Configuración → API y agentes y avísanos.</li>`,
    `<li>Keep your keys and your webhook secrets like a password: do not publish them or put them in a web page or in an app installed on a phone. If one is leaked, revoke it immediately from Settings → API and agents and let us know.</li>`],
  [`<li>Para reducir el riesgo pedimos a quien crea una llave o un webhook que confirme con un código enviado a su correo, le avisamos al dueño de la cuenta cada vez que se crea o cambia uno, y revocamos las llaves y desactivamos los webhooks de quien deja de ser administrador de tu equipo. Estas medidas no reemplazan tu supervisión.</li>`,
    `<li>To reduce risk, we ask whoever creates a key or a webhook to confirm with a code sent to their email, we notify the account owner each time one is created or changed, and we revoke the keys and deactivate the webhooks of anyone who stops being an administrator of your team. These measures do not replace your supervision.</li>`],
  [`<li>Cada llave tiene límites de uso. Podemos limitar, suspender o revocar una llave o un webhook que ponga en riesgo la seguridad de tu cuenta, la de otros clientes o la estabilidad de la plataforma; te avisaremos cuando sea posible.</li>`,
    `<li>Each key has usage limits. We may limit, suspend or revoke a key or a webhook that puts at risk the security of your account, that of other customers or the stability of the platform; we will notify you when possible.</li>`],
  [`<strong>Importante:</strong> las decisiones sobre tus campañas publicitarias y tus presupuestos son tuyas. Acuarius no garantiza resultados de ventas ni de publicidad.`,
    `<strong>Important:</strong> decisions about your advertising campaigns and your budgets are yours. Acuarius does not guarantee sales or advertising results.`],

  // 12. Propiedad intelectual
  [`<p>La plataforma, su código, su diseño, sus agentes, sus instrucciones y su marca son de Acuarius. Te damos una licencia limitada, no exclusiva e intransferible para usarla mientras tu cuenta esté vigente.</p>`,
    `<p>The platform, its code, its design, its agents, its instructions and its brand belong to Acuarius. We grant you a limited, non-exclusive and non-transferable license to use it while your account is active.</p>`],
  [`<p>Tu contenido (tus datos, contactos, textos, imágenes y plantillas) sigue siendo tuyo. Nos das permiso de procesarlo solo para prestarte el servicio.</p>`,
    `<p>Your content (your data, contacts, text, images and templates) remains yours. You give us permission to process it only to provide you with the service.</p>`],

  // 13. Disponibilidad
  [`<p>Trabajamos para que Acuarius esté disponible siempre, pero puede haber interrupciones por mantenimiento, fallas de nuestros proveedores o causas ajenas a nosotros. No ofrecemos un acuerdo de nivel de servicio (SLA) salvo que lo firmemos por escrito. El soporte se atiende por el chat de la plataforma y en <a href="mailto:support@acuarius.app">support@acuarius.app</a>.</p>`,
    `<p>We work to keep Acuarius available at all times, but there may be interruptions due to maintenance, failures of our providers or causes beyond our control. We do not offer a service level agreement (SLA) unless we sign one in writing. Support is provided through the platform chat and at <a href="mailto:support@acuarius.app">support@acuarius.app</a>.</p>`],
  [`<p>Algunas tareas, como el envío de campañas o automatizaciones, se procesan en ciclos periódicos y no son instantáneas.</p>`,
    `<p>Some tasks, such as sending campaigns or automations, are processed in periodic cycles and are not instantaneous.</p>`],

  // 14. Limitación
  [`<p>En la medida en que la ley lo permita, Acuarius no responde por:</p>`,
    `<p>To the extent permitted by law, Acuarius is not liable for:</p>`],
  [`<li>Lucro cesante, pérdida de ventas o daños indirectos derivados del uso del servicio</li>`,
    `<li>Lost profits, lost sales or indirect damages arising from the use of the service</li>`],
  [`<li>El contenido que tú o tu equipo envían, ni por la falta de autorización de tus contactos</li>`,
    `<li>The content that you or your team send, or the lack of authorization from your contacts</li>`],
  [`<li>Resultados de campañas o respuestas de la IA que no hayas revisado</li>`,
    `<li>Campaign results or AI responses that you have not reviewed</li>`],
  [`<li>Decisiones o fallas de servicios de terceros conectados</li>`,
    `<li>Decisions or failures of connected third-party services</li>`],
  [`<li>Lo que hagan los sistemas y agentes que conectes con tus llaves de la API, ni el uso que terceros hagan de los datos que les envías por la API o los webhooks</li>`,
    `<li>What the systems and agents you connect with your API keys do, or the use that third parties make of the data you send them through the API or webhooks</li>`],
  [`<p>En cualquier caso, nuestra responsabilidad total no superará lo que hayas pagado por el servicio en los 3 meses anteriores al hecho que origine el reclamo. Nada de esta sección limita derechos que la ley no permita limitar.</p>`,
    `<p>In any case, our total liability will not exceed what you paid for the service in the 3 months prior to the event giving rise to the claim. Nothing in this section limits rights that the law does not allow to be limited.</p>`],

  // 15. Terminación
  [`<p>Puedes dejar de usar Acuarius y pedir el cierre de tu cuenta cuando quieras. Podemos suspenderla o cerrarla si incumples estos términos, si un pago no se resuelve en 7 días, si tu uso pone en riesgo a otros clientes o a la plataforma, o si la ley lo exige.</p>`,
    `<p>You can stop using Acuarius and request that your account be closed at any time. We may suspend or close it if you breach these terms, if a payment is not resolved within 7 days, if your use puts other customers or the platform at risk, or if the law requires it.</p>`],
  [`<p>Antes de cerrar tu cuenta puedes exportar tus datos. Al eliminarla borramos de forma definitiva los datos de la cuenta y los de tus contactos; las copias de seguridad se sobrescriben en los días siguientes. Conservamos lo que la ley nos obligue a guardar, como los registros de facturación.</p>`,
    `<p>Before closing your account, you can export your data. When it is deleted, we permanently erase the account's data and your contacts' data; backups are overwritten in the following days. We retain what the law requires us to keep, such as billing records.</p>`],

  // 16. Cambios
  [`<p>Podemos actualizar estos términos. Cambiaremos la fecha de esta página y, si el cambio es importante, te avisaremos por correo o dentro de la plataforma antes de que aplique. Si sigues usando el servicio después, aceptas la nueva versión.</p>`,
    `<p>We may update these terms. We will change the date on this page and, if the change is significant, we will notify you by email or within the platform before it takes effect. If you continue using the service afterward, you accept the new version.</p>`],

  // 17. Ley aplicable
  [`<p>Estos términos se rigen por las leyes del estado de Texas, Estados Unidos. Lo relativo al servicio de SMS y al tratamiento de datos de personas en Colombia se rige además por la ley colombiana. Las diferencias se intentarán resolver primero de forma directa; si no es posible, serán competentes los jueces del condado de Harris, Texas, sin perjuicio de los derechos que la ley de protección al consumidor de tu país te reconozca.</p>`,
    `<p>These terms are governed by the laws of the State of Texas, United States. Matters relating to the SMS service and to the processing of data of people in Colombia are also governed by Colombian law. Disputes will first be attempted to be resolved directly; if that is not possible, the courts of Harris County, Texas, will have jurisdiction, without prejudice to the rights granted to you by the consumer protection law of your country.</p>`],
  [`<p>Para cualquier pregunta sobre estos términos:</p>`, `<p>For any questions about these terms:</p>`],

  // Tarjeta de contacto
  [`<h3>¿Tienes preguntas?</h3>`, `<h3>Have questions?</h3>`],
  [`<p>Acuarius · Aixion Labs Solutions LLC · 15723 Chapel Lake Dr, Cypress, TX 77429, Estados Unidos<br>Correo: support@acuarius.app · Teléfono y WhatsApp: +57 321 997 2333</p>`,
    `<p>Acuarius · Aixion Labs Solutions LLC · 15723 Chapel Lake Dr, Cypress, TX 77429, United States<br>Email: support@acuarius.app · Phone and WhatsApp: +57 321 997 2333</p>`],
  [`>Escribir a support@acuarius.app</a>`, `>Email support@acuarius.app</a>`],

  // Pie propio de la página
  [`© 2026 Acuarius · Operado y facturado por Aixion Labs Solutions LLC · 15723 Chapel Lake Dr, Cypress, TX 77429, EE. UU.`,
    `© 2026 Acuarius · Operated and billed by Aixion Labs Solutions LLC · 15723 Chapel Lake Dr, Cypress, TX 77429, USA`],
  ['>Política de privacidad</a>', '>Privacy policy</a>'],
  ['>Términos de servicio</a>', '>Terms of service</a>'],
  ['>Reembolsos y cancelación</a>', '>Refunds and cancellation</a>'],
];
