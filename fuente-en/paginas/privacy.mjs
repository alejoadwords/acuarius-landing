// Política de privacidad en inglés (/en/privacy), por pares sobre privacy.html.
// Texto legal: traducción fiel. Leyes, autoridades, empresas, direcciones,
// correos y fechas se quedan como en el original.

export const CABEZA = {
  title: 'Personal Data Processing Policy — Acuarius',
  description: 'How Acuarius (Aixion Labs Solutions LLC) processes personal data: what we collect, why, who we share it with, how long we keep it and your rights.',
};

export const PARES = [
  [`<h1>Política de Tratamiento de Datos Personales</h1>`,
   `<h1>Personal Data Processing Policy</h1>`],
  [`<p class="updated">Vigente desde el 4 de noviembre de 2026</p>`,
   `<p class="updated">Effective as of November 4, 2026</p>\n\n  <p>This English version is a courtesy translation. If it differs from the Spanish version, the Spanish version prevails.</p>`],
  [`<p>Esta política explica cómo tratamos los datos personales en Acuarius (<a href="https://app.acuarius.app">app.acuarius.app</a> y <a href="https://acuarius.app">acuarius.app</a>), conforme a la Ley 1581 de 2012, el Decreto 1377 de 2013 (compilado en el Decreto 1074 de 2015) y demás normas colombianas de protección de datos, y a las leyes de los demás países donde prestamos el servicio.</p>`,
   `<p>This policy explains how we process personal data at Acuarius (<a href="https://app.acuarius.app">app.acuarius.app</a> and <a href="https://acuarius.app">acuarius.app</a>), in accordance with Ley 1581 de 2012, Decreto 1377 de 2013 (compiled into Decreto 1074 de 2015) and other Colombian data protection regulations, and with the laws of the other countries where we provide the service.</p>`],

  // 1
  [`<h2>1. Responsable del tratamiento</h2>`, `<h2>1. Data controller</h2>`],
  [`<li><strong>Responsable:</strong> Aixion Labs Solutions LLC, sociedad que opera y factura la marca Acuarius (Texas, Estados Unidos; File Number 805940283)</li>`,
   `<li><strong>Controller:</strong> Aixion Labs Solutions LLC, the company that operates and bills the Acuarius brand (Texas, United States; File Number 805940283)</li>`],
  [`<li><strong>Dirección:</strong> 15723 Chapel Lake Dr, Cypress, TX 77429, Estados Unidos</li>`,
   `<li><strong>Address:</strong> 15723 Chapel Lake Dr, Cypress, TX 77429, United States</li>`],
  [`<li><strong>En Colombia:</strong> Check In Col SAS, NIT 900.825.601-2, Carrera 53 #106-280, Centro Empresarial, Barranquilla, presta el servicio de SMS; frente a los datos de ese servicio actúa también como responsable.</li>`,
   `<li><strong>In Colombia:</strong> Check In Col SAS, NIT 900.825.601-2, Carrera 53 #106-280, Centro Empresarial, Barranquilla, provides the SMS service; with respect to the data of that service, it also acts as a controller.</li>`],
  [`<li><strong>Correo:</strong> <a href="mailto:support@acuarius.app">support@acuarius.app</a></li>`,
   `<li><strong>Email:</strong> <a href="mailto:support@acuarius.app">support@acuarius.app</a></li>`],
  [`<li><strong>Teléfono y WhatsApp:</strong> +57 321 997 2333</li>`,
   `<li><strong>Phone and WhatsApp:</strong> +57 321 997 2333</li>`],

  // 2
  [`<h2>2. Dos tipos de datos, dos papeles distintos</h2>`, `<h2>2. Two types of data, two different roles</h2>`],
  [`<p><strong>Datos de nuestros usuarios.</strong> Los de las personas que crean una cuenta en Acuarius o forman parte de su equipo. Frente a ellos somos <strong>responsables del tratamiento</strong>, y esta política aplica en su totalidad.</p>`,
   `<p><strong>Data of our users.</strong> The data of people who create an account on Acuarius or are part of an account's team. For this data we are the <strong>data controller</strong>, and this policy applies in full.</p>`],
  [`<p><strong>Datos de los contactos de nuestros clientes.</strong> Los leads, clientes y contactos que cada empresa carga en Acuarius o que llegan a su cuenta por sus formularios y canales. Frente a ellos el responsable es la empresa cliente, y Acuarius actúa como <strong>encargado del tratamiento</strong>: los procesamos solo por cuenta de esa empresa y según sus instrucciones. Si eres uno de esos contactos y quieres ejercer tus derechos, dirígete a la empresa que te escribió; si nos contactas a nosotros, le trasladaremos tu solicitud.</p>`,
   `<p><strong>Data of our customers' contacts.</strong> The leads, customers and contacts that each company uploads to Acuarius or that reach its account through its forms and channels. For this data the controller is the customer company, and Acuarius acts as the <strong>data processor</strong>: we process it only on behalf of that company and according to its instructions. If you are one of those contacts and want to exercise your rights, contact the company that wrote to you; if you contact us, we will forward your request to that company.</p>`],

  // 3
  [`<h2>3. Qué datos tratamos</h2>`, `<h2>3. What data we process</h2>`],
  [`<li><strong>Cuenta:</strong> nombre, correo, empresa y, si lo das, teléfono. Las contraseñas las gestiona nuestro proveedor de autenticación; nosotros nunca las vemos.</li>`,
   `<li><strong>Account:</strong> name, email, company and, if you provide it, phone number. Passwords are managed by our authentication provider; we never see them.</li>`],
  [`<li><strong>Pagos:</strong> los procesa Stripe (y Hotmart, en las suscripciones contratadas antes por esa vía). Recibimos el correo del comprador, el producto y el estado del pago; nunca los datos de tu tarjeta.</li>`,
   `<li><strong>Payments:</strong> processed by Stripe (and Hotmart, for subscriptions previously purchased through that channel). We receive the buyer's email, the product and the payment status; never your card details.</li>`],
  [`<li><strong>Lo que cargas y produces:</strong> contactos, conversaciones de la bandeja de entrada, tareas, notas, campañas, plantillas, propuestas y archivos.</li>`,
   `<li><strong>What you upload and create:</strong> contacts, inbox conversations, tasks, notes, campaigns, templates, proposals and files.</li>`],
  [`<li><strong>Integraciones:</strong> los permisos de acceso a las cuentas que conectas (Google, Meta, TikTok, LinkedIn, Mercado Pago y otras). Los de Google, Meta y los canales de mensajería se guardan cifrados; estamos terminando de cifrar los demás.</li>`,
   `<li><strong>Integrations:</strong> the access permissions for the accounts you connect (Google, Meta, TikTok, LinkedIn, Mercado Pago and others). Those for Google, Meta and the messaging channels are stored encrypted; we are finishing encrypting the rest.</li>`],
  [`<li><strong>API:</strong> si creas llaves de la API o webhooks, de cada llave guardamos solo una huella que no permite usarla; el secreto de cada webhook se guarda cifrado; y registramos lo que hace cada llave y los avisos que enviamos a tus sistemas.</li>`,
   `<li><strong>API:</strong> if you create API keys or webhooks, for each key we store only a fingerprint that cannot be used to operate it; each webhook's secret is stored encrypted; and we log what each key does and the notifications we send to your systems.</li>`],
  [`<li><strong>Uso y técnicos:</strong> registros de actividad y errores, dirección IP, navegador y las cookies descritas en la sección 9.</li>`,
   `<li><strong>Usage and technical data:</strong> activity and error logs, IP address, browser and the cookies described in section 9.</li>`],
  [`<p>No pedimos datos sensibles. Si una conversación de un cliente llega a contenerlos, su tratamiento es responsabilidad de la empresa a la que pertenece esa conversación.</p>`,
   `<p>We do not request sensitive data. If a customer's conversation happens to contain it, its processing is the responsibility of the company that the conversation belongs to.</p>`],

  // 4
  [`<h2>4. Para qué los usamos</h2>`, `<h2>4. What we use it for</h2>`],
  [`<li>Crear y administrar tu cuenta, tu equipo y tus permisos</li>`, `<li>Creating and managing your account, your team and your permissions</li>`],
  [`<li>Prestar las funciones que usas: CRM, bandeja de entrada, agentes de IA, automatizaciones, campañas, reservas y reportes</li>`,
   `<li>Providing the features you use: CRM, inbox, AI agents, automations, campaigns, bookings and reports</li>`],
  [`<li>Cobrar, facturar y gestionar tu plan</li>`, `<li>Charging, invoicing and managing your plan</li>`],
  [`<li>Darte soporte y avisarte de cambios, cupos o incidentes de tu cuenta</li>`,
   `<li>Providing support and notifying you of changes, usage limits or incidents affecting your account</li>`],
  [`<li>Prevenir fraude y abuso, por ejemplo el envío masivo de mensajes engañosos</li>`,
   `<li>Preventing fraud and abuse, for example the mass sending of deceptive messages</li>`],
  [`<li>Medir y mejorar el servicio con datos agregados</li>`, `<li>Measuring and improving the service with aggregated data</li>`],
  [`<li>Enviarte comunicaciones sobre Acuarius; puedes darte de baja cuando quieras</li>`,
   `<li>Sending you communications about Acuarius; you can unsubscribe at any time</li>`],

  // 5
  [`<h2>5. Con quién los compartimos</h2>`, `<h2>5. Who we share it with</h2>`],
  [`<p>No vendemos datos personales. Los compartimos solo con proveedores que necesitamos para prestar el servicio, que actúan como encargados, y con las plataformas que tú decides conectar:</p>`,
   `<p>We do not sell personal data. We share it only with providers we need in order to deliver the service, who act as processors, and with the platforms you choose to connect:</p>`],
  [`<li><strong>Infraestructura:</strong> Vercel (aplicación) y Supabase (base de datos), en Estados Unidos; Clerk (inicio de sesión), en Estados Unidos.</li>`,
   `<li><strong>Infrastructure:</strong> Vercel (application) and Supabase (database), in the United States; Clerk (sign-in), in the United States.</li>`],
  [`<li><strong>Inteligencia artificial:</strong> Anthropic, para los agentes y asistentes; fal.ai y BytePlus, para generar imágenes y videos cuando lo pides; y OpenAI, Google (Gemini) y Perplexity, solo para el informe de visibilidad de tu marca en buscadores de IA, que envía preguntas sobre tu marca y no datos de tus contactos.</li>`,
   `<li><strong>Artificial intelligence:</strong> Anthropic, for the agents and assistants; fal.ai and BytePlus, to generate images and videos when you request them; and OpenAI, Google (Gemini) and Perplexity, only for the report on your brand's visibility in AI search engines, which sends questions about your brand and not data about your contacts.</li>`],
  [`<li><strong>Mensajería:</strong> Resend, para los correos; LabsMobile (001TECH SL, España), para los SMS; y Meta, para WhatsApp, Instagram y Messenger.</li>`,
   `<li><strong>Messaging:</strong> Resend, for emails; LabsMobile (001TECH SL, Spain), for SMS; and Meta, for WhatsApp, Instagram and Messenger.</li>`],
  [`<li><strong>Búsqueda:</strong> Serper, para las consultas de posiciones en Google del módulo de SEO.</li>`,
   `<li><strong>Search:</strong> Serper, for the Google ranking lookups in the SEO module.</li>`],
  [`<li><strong>Pagos:</strong> Stripe (y Hotmart, en las suscripciones anteriores), para tus suscripciones; Mercado Pago, solo si lo conectas para cobrar tus propuestas.</li>`,
   `<li><strong>Payments:</strong> Stripe (and Hotmart, for earlier subscriptions), for your subscriptions; Mercado Pago, only if you connect it to collect payment for your proposals.</li>`],
  [`<li><strong>Plataformas que conectas:</strong> Google (Ads, Calendar, Drive y Sheets), Meta Ads, TikTok y LinkedIn, que reciben lo necesario para la función que activaste.</li>`,
   `<li><strong>Platforms you connect:</strong> Google (Ads, Calendar, Drive and Sheets), Meta Ads, TikTok and LinkedIn, which receive what is necessary for the feature you turned on.</li>`],
  [`<li><strong>Autoridades:</strong> cuando una ley o una orden judicial lo exija.</li>`,
   `<li><strong>Authorities:</strong> when required by law or a court order.</li>`],
  [`<p><strong>SMS.</strong> Si envías mensajes de texto, el número de cada destinatario y el contenido del mensaje pasan a LabsMobile, que los usa solo para entregarlos. LabsMobile conserva el historial de envíos 12 meses accesible y hasta 4 años más en copias de seguridad, y parte de su personal de soporte está en Colombia y Uruguay, bajo cláusulas contractuales tipo de la Comisión Europea.</p>`,
   `<p><strong>SMS.</strong> If you send text messages, each recipient's number and the content of the message are passed to LabsMobile, which uses them only to deliver them. LabsMobile keeps the sending history accessible for 12 months and for up to 4 more years in backups, and part of its support staff is located in Colombia and Uruguay, under the European Commission's standard contractual clauses.</p>`],
  [`<p><strong>Sistemas que conectas por la API.</strong> Si creas una llave de la API, conectas un agente por MCP o configuras un webhook, los datos que ese sistema consulte o que el webhook envíe (por ejemplo, datos de tus prospectos, sus conversaciones y sus tareas) llegan al destino que tú elegiste. Esa entrega la ordenas tú, como responsable de los datos de tus contactos; quien los recibe no es un proveedor nuestro, y lo que haga con ellos queda bajo su responsabilidad y la tuya. Solo enviamos lo que permiten los permisos de cada llave y lo que eligiste para cada webhook, y solo a direcciones seguras (https). Puedes revocar una llave o eliminar un webhook cuando quieras, y el envío se detiene en ese momento.</p>`,
   `<p><strong>Systems you connect through the API.</strong> If you create an API key, connect an agent through MCP or set up a webhook, the data that system queries or that the webhook sends (for example, data about your prospects, their conversations and their tasks) reaches the destination you chose. You order that delivery, as the controller of your contacts' data; whoever receives it is not one of our providers, and what they do with it is their responsibility and yours. We only send what each key's permissions allow and what you chose for each webhook, and only to secure (https) addresses. You can revoke a key or delete a webhook at any time, and sending stops at that moment.</p>`],
  [`<p><strong>Medición de compras.</strong> Cuando compras un plan o un complemento, informamos esa compra a Meta por su API de conversiones para medir nuestra publicidad. Enviamos el valor, la moneda y tu correo cifrado con SHA-256, un formato que Meta solo puede usar para reconocer si ya te conoce, no para leerlo.</p>`,
   `<p><strong>Purchase measurement.</strong> When you buy a plan or an add-on, we report that purchase to Meta through its Conversions API to measure our advertising. We send the amount, the currency and your email hashed with SHA-256, a format that Meta can only use to recognize whether it already knows you, not to read it.</p>`],
  [`<p><strong>Datos que recibimos de Meta (Facebook e Instagram).</strong> Cuando conectas tu cuenta de Meta, tus páginas o tu cuenta de Instagram, recibimos solo lo que la función que activas necesita: el rendimiento de tus campañas, la lista de tus portafolios, páginas y cuentas para que elijas cuáles conectar, el nombre y la foto de esas cuentas, y los mensajes que te escriben por Messenger e Instagram, con el nombre de quien escribe. Los usamos únicamente para mostrártelos en Acuarius, responder desde el inbox y las acciones que tú ordenas (como pausar una campaña). No los vendemos, no los compartimos con terceros para publicidad y no los usamos para entrenar modelos de inteligencia artificial. Puedes revocar el acceso cuando quieras: al desconectar Meta en Configuración → Integraciones borramos su token, y al desconectar un canal en Fuentes → Configurar canales borramos su token y la página deja de enviarnos mensajes. También puedes quitar a Acuarius desde la configuración de tu cuenta de Facebook. Para pedir que borremos los datos recibidos de Meta, escríbenos a support@acuarius.app.</p>`,
   `<p><strong>Data we receive from Meta (Facebook and Instagram).</strong> When you connect your Meta account, your pages or your Instagram account, we receive only what the feature you turn on needs: the performance of your campaigns, the list of your portfolios, pages and accounts so you can choose which ones to connect, the name and photo of those accounts, and the messages people send you through Messenger and Instagram, with the sender's name. We use them only to show them to you in Acuarius, to reply from the inbox and for the actions you order (such as pausing a campaign). We do not sell them, we do not share them with third parties for advertising and we do not use them to train artificial intelligence models. You can revoke access at any time: when you disconnect Meta in Settings → Integrations we delete its token, and when you disconnect a channel in Sources → Configure channels we delete its token and the page stops sending us messages. You can also remove Acuarius from your Facebook account settings. To ask us to delete the data received from Meta, write to us at support@acuarius.app.</p>`],

  // 6
  [`<h2>6. Datos de Google</h2>`, `<h2>6. Google data</h2>`],
  [`<p>Si conectas tu cuenta de Google, Acuarius accede solo a lo que necesita la función que activaste:</p>`,
   `<p>If you connect your Google account, Acuarius accesses only what the feature you turned on needs:</p>`],
  [`<li><strong>Google Calendar</strong> (<code>calendar.events</code>): crear, cambiar y borrar los eventos de las reuniones que agendas en Acuarius, y leer tus eventos para mostrarte cuándo estás ocupado y para que tus enlaces de reunión y tu página de reservas solo ofrezcan horas libres. Solo en el calendario que elijas (el principal, si no eliges otro).</li>`,
   `<li><strong>Google Calendar</strong> (<code>calendar.events</code>): create, change and delete the events for the meetings you schedule in Acuarius, and read your events to show you when you are busy and so that your meeting links and your booking page only offer free times. Only in the calendar you choose (the primary one, if you don't choose another).</li>`],
  [`<li><strong>Lista de tus calendarios</strong> (<code>calendar.calendarlist.readonly</code>): ver los nombres de tus calendarios de Google para que elijas en cuál trabaja Acuarius. Este permiso no da acceso a sus eventos, y solo guardamos cuál elegiste.</li>`,
   `<li><strong>List of your calendars</strong> (<code>calendar.calendarlist.readonly</code>): see the names of your Google calendars so you can choose which one Acuarius works in. This permission does not give access to their events, and we only store which one you chose.</li>`],
  [`<li><strong>Google Ads</strong> (<code>adwords</code>): leer tus campañas y métricas, crear las campañas que preparas en Acuarius (siempre en pausa) y hacer los cambios que pides.</li>`,
   `<li><strong>Google Ads</strong> (<code>adwords</code>): read your campaigns and metrics, create the campaigns you prepare in Acuarius (always paused) and make the changes you request.</li>`],
  [`<li><strong>Google Data Manager</strong> (<code>datamanager</code>): enviar a tu cuenta de Google Ads las ventas de tu CRM como conversiones y, si lo pides, tus listas de clientes como audiencias. El correo y el teléfono viajan cifrados con SHA-256.</li>`,
   `<li><strong>Google Data Manager</strong> (<code>datamanager</code>): send your CRM sales to your Google Ads account as conversions and, if you request it, your customer lists as audiences. Email addresses and phone numbers are sent hashed with SHA-256.</li>`],
  [`<p>Estos datos solo los ven tú y tu equipo. No los vendemos, no los usamos para publicidad, nadie de nuestro equipo los lee salvo que nos lo pidas para darte soporte, y <strong>no los usamos para entrenar modelos de inteligencia artificial</strong>, ni nuestros ni de terceros. Puedes desconectar Google cuando quieras desde Acuarius y también desde <a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a>; al desconectarlo borramos el acceso guardado.</p>`,
   `<p>Only you and your team see this data. We do not sell it, we do not use it for advertising, no one on our team reads it unless you ask us to in order to give you support, and <strong>we do not use it to train artificial intelligence models</strong>, whether ours or third parties'. You can disconnect Google at any time from Acuarius and also from <a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a>; when you disconnect it we delete the stored access.</p>`],

  // 7
  [`<h2>7. Transferencia internacional de datos</h2>`, `<h2>7. International data transfer</h2>`],
  [`<p>Varios de nuestros proveedores están fuera de Colombia, principalmente en Estados Unidos y España, y nuestros datos se alojan en Estados Unidos (Virginia). Al aceptar esta política autorizas esa transferencia y transmisión internacional de datos, que hacemos con proveedores que ofrecen niveles adecuados de protección y bajo sus acuerdos de tratamiento de datos.</p>`,
   `<p>Several of our providers are located outside Colombia, mainly in the United States and Spain, and our data is hosted in the United States (Virginia). By accepting this policy you authorize that international transfer and transmission of data, which we carry out with providers that offer adequate levels of protection and under their data processing agreements.</p>`],

  // 8
  [`<h2>8. Seguridad</h2>`, `<h2>8. Security</h2>`],
  [`<p>Toda la comunicación viaja cifrada (HTTPS). Nadie se conecta directamente a la base de datos: solo nuestra aplicación accede a ella, después de verificar tu sesión y tus permisos, y tu navegador nunca recibe sus claves. Los accesos a las cuentas que conectas se guardan protegidos, y cifrados en el caso de Google, Meta y los canales de mensajería. Hacemos copias de seguridad diarias. Corremos sobre infraestructura de proveedores certificados; Acuarius como empresa no tiene una certificación propia de seguridad. Ningún sistema es infalible: si ocurre un incidente que afecte tus datos, te lo informaremos y lo reportaremos a la Superintendencia de Industria y Comercio cuando la ley lo exija.</p>`,
   `<p>All communication is encrypted in transit (HTTPS). No one connects directly to the database: only our application accesses it, after verifying your session and your permissions, and your browser never receives its keys. Access credentials for the accounts you connect are stored protected, and encrypted in the case of Google, Meta and the messaging channels. We make daily backups. We run on infrastructure from certified providers; Acuarius as a company does not hold its own security certification. No system is infallible: if an incident affecting your data occurs, we will inform you and report it to the Superintendencia de Industria y Comercio when the law requires it.</p>`],

  // 9
  [`<h2>9. Cookies y analítica</h2>`, `<h2>9. Cookies and analytics</h2>`],
  [`<p>Usamos cookies necesarias para mantener tu sesión y cookies de analítica (Google Tag Manager y Google Analytics) para entender cómo se usa el servicio. En acuarius.app usamos además el píxel de Meta para medir nuestras campañas. Puedes bloquear las cookies de analítica y publicidad desde tu navegador sin perder el acceso a la aplicación.</p>`,
   `<p>We use necessary cookies to keep your session active and analytics cookies (Google Tag Manager and Google Analytics) to understand how the service is used. On acuarius.app we also use the Meta pixel to measure our campaigns. You can block analytics and advertising cookies from your browser without losing access to the application.</p>`],

  // 10
  [`<h2>10. Cuánto tiempo los guardamos</h2>`, `<h2>10. How long we keep it</h2>`],
  [`<li>Los datos de tu cuenta, mientras la cuenta exista.</li>`, `<li>Your account data, for as long as the account exists.</li>`],
  [`<li>Lo que borras dentro de la aplicación, como contactos, pasa a una papelera por 30 días y luego se elimina.</li>`,
   `<li>What you delete inside the application, such as contacts, goes to a trash bin for 30 days and is then deleted.</li>`],
  [`<li>Si eliminas tu cuenta, borramos sus datos y los de sus contactos; las copias de seguridad se sobrescriben en unos 7 días.</li>`,
   `<li>If you delete your account, we delete its data and the data of its contacts; backups are overwritten in about 7 days.</li>`],
  [`<li>El registro de lo que hacen las llaves de la API y de los avisos enviados a tus sistemas, 30 días.</li>`,
   `<li>The log of what API keys do and of the notifications sent to your systems, 30 days.</li>`],
  [`<li>Los registros de facturación y pagos, el tiempo que exijan las normas comerciales y tributarias.</li>`,
   `<li>Billing and payment records, for as long as commercial and tax regulations require.</li>`],

  // 11
  [`<h2>11. Tus derechos</h2>`, `<h2>11. Your rights</h2>`],
  [`<p>Como titular de tus datos tienes derecho a:</p>`, `<p>As the owner of your data (data subject), you have the right to:</p>`],
  [`<li>Conocer, actualizar y rectificar tus datos</li>`, `<li>Know, update and correct your data</li>`],
  [`<li>Pedir prueba de la autorización que nos diste</li>`, `<li>Request proof of the authorization you gave us</li>`],
  [`<li>Ser informado sobre el uso que les damos</li>`, `<li>Be informed about how we use it</li>`],
  [`<li>Revocar la autorización y pedir la supresión de tus datos, cuando no exista un deber legal o contractual de conservarlos</li>`,
   `<li>Revoke the authorization and request the deletion of your data, when there is no legal or contractual duty to keep it</li>`],
  [`<li>Acceder gratis a tus datos</li>`, `<li>Access your data free of charge</li>`],
  [`<li>Presentar quejas ante la Superintendencia de Industria y Comercio, después de haber hecho tu solicitud ante nosotros</li>`,
   `<li>File complaints with the Superintendencia de Industria y Comercio, after having first submitted your request to us</li>`],

  // 12
  [`<h2>12. Cómo ejercerlos</h2>`, `<h2>12. How to exercise them</h2>`],
  [`<p>Escríbenos a <a href="mailto:support@acuarius.app">support@acuarius.app</a> con tu nombre, el correo de tu cuenta y lo que pides. El Equipo de Soporte de Acuarius es el área encargada de atender estas solicitudes.</p>`,
   `<p>Write to us at <a href="mailto:support@acuarius.app">support@acuarius.app</a> with your name, your account email and what you are requesting. The Acuarius Support Team is the department responsible for handling these requests.</p>`],
  [`<li><strong>Consultas:</strong> las respondemos en máximo 10 días hábiles. Si no alcanzamos, te avisamos el motivo y respondemos en los 5 días hábiles siguientes.</li>`,
   `<li><strong>Inquiries:</strong> we answer them within a maximum of 10 business days. If we cannot meet that deadline, we will tell you why and answer within the following 5 business days.</li>`],
  [`<li><strong>Reclamos</strong> (corrección, actualización, supresión o incumplimiento): los atendemos en máximo 15 días hábiles. Si no alcanzamos, te avisamos el motivo y respondemos en los 8 días hábiles siguientes. Si el reclamo está incompleto, te pediremos lo que falte dentro de los 5 días hábiles siguientes a recibirlo.</li>`,
   `<li><strong>Claims</strong> (correction, update, deletion or non-compliance): we handle them within a maximum of 15 business days. If we cannot meet that deadline, we will tell you why and answer within the following 8 business days. If the claim is incomplete, we will ask you for what is missing within 5 business days of receiving it.</li>`],

  // 13
  [`<h2>13. Menores de edad</h2>`, `<h2>13. Minors</h2>`],
  [`<p>Acuarius es un servicio para empresas y profesionales. No está dirigido a menores de 18 años y no recogemos sus datos de forma intencional.</p>`,
   `<p>Acuarius is a service for businesses and professionals. It is not directed at people under 18 years of age, and we do not knowingly collect their data.</p>`],

  // 14
  [`<h2>14. Cambios a esta política</h2>`, `<h2>14. Changes to this policy</h2>`],
  [`<p>Si cambiamos esta política actualizaremos la fecha de vigencia y, si el cambio es importante, te avisaremos por correo o dentro de la plataforma antes de que aplique.</p>`,
   `<p>If we change this policy, we will update the effective date and, if the change is significant, we will notify you by email or within the platform before it takes effect.</p>`],

  // Pie propio de la página
  [`<p class="footer">© 2026 Acuarius · Operado y facturado por Aixion Labs Solutions LLC · 15723 Chapel Lake Dr, Cypress, TX 77429, EE. UU.</p>`,
   `<p class="footer">© 2026 Acuarius · Operated and billed by Aixion Labs Solutions LLC · 15723 Chapel Lake Dr, Cypress, TX 77429, USA</p>`],
];

// Normas y autoridad colombianas: se citan por su nombre oficial, sin traducir.
export const PERMITIDOS = [
  'Ley 1581 de 2012',
  'Decreto 1377 de 2013',
  'Decreto 1074 de 2015',
  'Superintendencia de Industria y Comercio',
];
