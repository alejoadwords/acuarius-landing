// Contenido del Cluster 8 · Producto. Los metadatos (title, description, H1)
// viven en mapa.mjs; aquí solo el cuerpo.
//
// /agente-ia/ es el pilar del agente de IA para WhatsApp. Cada afirmación sale
// del código de Acuarius a 02-11-2026: api/_inbox-engine.js (motor y
// guardianes), api/_qualify.js (calificación y enrutado), api/chat-agents.js
// (opciones del agente), api/_campos.js (campos que llena el agente),
// api/cron-seguimiento.js (retomar a los 10 minutos), public/app.js (pasos del
// editor, probador, «Corregir») y public/novedades.json.
//
// Fuera a propósito: precios y cupos por plan, Messenger, TikTok, el chat web,
// Lead Ads y publicar en redes. Los ejemplos por negocio son inventados.
//
// El build no genera id en los h2: el de calificación lleva su ancla a mano
// (#califica-y-reparte) porque el menú del sitio enlaza ahí.

export const CONTENIDO = {
  '/agente-ia/': {
    badge: 'Agente de IA para WhatsApp e Instagram',
    sub: 'Responde a tus clientes con la información de tu negocio, averigua lo que tu equipo necesita saber y le pasa a cada asesor los leads que ya están listos. Lo pruebas y lo corriges antes de encenderlo.',
    secciones: [
      { tipo: 'texto', label: 'Qué es', h2: 'Un asesor más en tu WhatsApp, que nunca deja un chat sin responder',
        parrafos: [
          'Un <b>agente de IA para WhatsApp</b> contesta los mensajes de tu negocio como lo haría una persona de tu equipo: con frases cortas, en el tono que elijas y con lo que tú le enseñas. No adivina. Trabaja con el contexto de tu negocio, tus preguntas frecuentes y tu catálogo.',
          'Su trabajo no es reemplazar a tu equipo. Es atender la primera parte de la conversación —las preguntas repetidas, los datos de contacto, las preguntas para calificar— y pasarle a una persona lo que necesita una persona. Cuando el agente pasa la conversación, deja de contestar y el asesor sigue desde el <a href="/crm/whatsapp/">inbox de WhatsApp del CRM</a>.',
          'Todo lo que pasa en el chat queda en el <a href="/crm/">CRM</a>: el lead se crea con su nombre y su teléfono, entra a tu pipeline y llega con la conversación completa.',
        ] },
      { tipo: 'tarjetas', label: 'Cómo atiende', h2: 'Lo que hace tu agente en cada conversación',
        items: [
          { t: 'Responde con lo tuyo', d: 'Lee el contexto de tu negocio, tus preguntas frecuentes y las reglas que le vas enseñando. Si escribes un mensaje de bienvenida, lo manda tal cual a quien solo saluda.' },
          { t: 'Ofrece de tu catálogo', d: 'Con tu inventario conectado —una hoja de Google, un archivo o tu tienda de Shopify, WooCommerce o VTEX— ofrece solo lo que existe, con su precio exacto. Si tienes inmuebles con fotos, las ofrece y las manda cuando le dicen que sí.' },
          { t: 'Pide los datos a tiempo', d: 'Primero responde lo que le preguntaron y, en el mismo mensaje, pide el teléfono. Nunca condiciona una respuesta a un dato. Si ya tiene el número, no lo vuelve a pedir.' },
          { t: 'Respeta tu horario', d: 'Sabe qué hora es en tu país y si estás atendiendo. Si alguien pide que lo llamen fuera de horario o en un festivo de Colombia, se lo dice y le ofrece la franja válida más cercana.' },
          { t: 'Agenda citas', d: 'Si tu negocio tiene reservas, ofrece horas libres de verdad y deja la cita en tu agenda. También cambia o cancela la que esa persona ya tenía.' },
          { t: 'Retoma lo que se enfrió', d: 'Si la persona deja de responder, a los 10 minutos le escribe una vez con la pregunta que falta. Solo entre las 7 de la mañana y las 9 de la noche.' },
        ] },
      { tipo: 'texto', label: 'Calificación', h2: '<span id="califica-y-reparte"></span>Califica y reparte cada lead',
        parrafos: [
          'Le dices al agente qué necesita saber tu equipo antes de llamar: hasta ocho preguntas, cada una con su condición. Por ejemplo, «¿qué presupuesto maneja?», que cumple si es «más de 300 millones». El agente las hace de a una, dentro de la conversación, y no repite lo que la persona ya contó.',
          'Quien decide si el lead califica no es la IA: es una regla fija del sistema. Mientras falte alguna respuesta, el lead sigue pendiente. Cuando están todas, el contacto queda como <b>calificado</b> o <b>no calificado</b>, con su etiqueta, y la ficha guarda un resumen de cada respuesta. Si califica, puede avanzar sola a la etapa que elijas y pasar a un asesor.',
          'También puedes enrutar. Si vendes y arriendas, o tienes dos sedes, el agente averigua qué busca la persona y la manda al tablero que toca. Ahí se asigna a un asesor fijo o por turnos entre quienes atienden ese tablero. Si nadie lo tiene marcado, decide la regla de reparto de la fuente: el lead nunca se queda sin dueño. El asesor recibe el aviso al instante.',
          'Y si usas <a href="/novedades/campos-personalizados-crm/">campos personalizados</a>, marca los que quieres que llene el agente, como «Servicio de interés» o «Fecha del evento». Los apunta en la ficha sin pisar lo que haya escrito una persona.',
        ] },
      { tipo: 'tabla', label: 'Ejemplo', h2: 'Así se ve una calificación configurada',
        cab: ['Lo que averigua', 'Pregunta del agente', 'Cumple si'],
        filas: [
          ['Operación', '¿Busca comprar o arrendar?', 'Compra'],
          ['Zona', '¿En qué zona le interesa?', 'Norte o centro'],
          ['Presupuesto', '¿Qué presupuesto maneja?', 'Más de 300 millones'],
          ['Plazo', '¿Para cuándo lo necesita?', 'En los próximos tres meses'],
        ],
        nota: 'Datos inventados de una inmobiliaria de ejemplo. Puedes exigir que cumpla todas o solo un mínimo, por ejemplo tres de cuatro.' },
      { tipo: 'texto', label: 'Sin inventar', h2: 'Responde con lo que le das y pasa a una persona lo que no sabe',
        parrafos: [
          'El agente solo puede dar precios, disponibilidad, direcciones y condiciones que estén escritos en su contexto, en sus preguntas frecuentes o en el catálogo. Pedírselo no bastaba, así que no depende de que obedezca. Antes de enviar cada mensaje, el sistema comprueba que cada precio y cada código existan. Si no existen, el mensaje no sale: se reescribe, y si vuelve a fallar, el cliente recibe una respuesta segura y la conversación pasa a tu equipo.',
          'Lo mismo con «sí, tenemos» de algo que no está en tu catálogo, con un tuteo en un agente que trata de usted o con una hora fuera de tu horario: se corrige antes de que la persona lo lea.',
          'Cuando alguien pide hablar con una persona, el agente responde con tu frase, por ejemplo «Claro, en un momento te comunico con un asesor», y pasa la conversación. Si activas la opción, antes pide el nombre, el teléfono y el correo que falten, y en el mensaje siguiente la pasa igual, los dé o no. Lo explicamos en <a href="/novedades/agente-ia-whatsapp-datos-de-contacto/">tu agente pide los datos antes de pasar el chat</a>.',
        ] },
      { tipo: 'tabla', label: 'Ejemplos', h2: 'Cómo trabaja según tu tipo de negocio',
        cab: ['Negocio', 'Le escriben', 'Lo que hace el agente'],
        filas: [
          ['Inmobiliaria', '«Busco apartamento de 3 habitaciones en el norte, hasta 2,5 millones de arriendo.»', 'Busca en tu inventario por zona, habitaciones y presupuesto, ofrece hasta tres opciones con su código, manda fotos si se las piden y califica. <a href="/crm/inmobiliarias/">CRM inmobiliario</a>.'],
          ['Clínica', '«¿Cuánto cuesta la valoración de ortodoncia y tienen cita el jueves?»', 'Da el precio que está en tus preguntas frecuentes, ofrece las horas libres del jueves y deja la cita agendada. Lo clínico lo pasa a tu equipo, como tú le indiques. <a href="/crm/clinicas/">CRM para clínicas</a>.'],
          ['Restaurante', '«¿Tienen mesa para seis el sábado a las 8?»', 'Responde con tu carta y tu horario y, si tienes reservas activas, ofrece solo horas libres y deja la reserva en tu agenda.'],
          ['Tienda', '«¿Tienen la chaqueta negra en talla M?»', 'Mira tu catálogo o tu tienda conectada y responde con el precio exacto. Si no está, no dice que sí: lo confirma tu equipo. A quien ya te compró le dice en qué va su pedido.'],
          ['Servicios', '«Quiero cotizar la contabilidad de mi empresa.»', 'Pregunta lo que necesita tu asesor —tamaño de la empresa, qué servicio, para cuándo—, califica y pasa el lead con el resumen.'],
        ],
        nota: 'Mensajes y cifras de ejemplo.' },
      { tipo: 'pasos', label: 'Antes de encenderlo', h2: 'Lo configuras, lo pruebas y después lo enciendes',
        items: [
          { t: 'Cuéntale de tu negocio', d: 'Nombre, tono (tú o usted), contexto, preguntas frecuentes, mensaje de bienvenida y la frase para pasar a un asesor. Todo en un formulario por pasos.' },
          { t: 'Define qué averigua', d: 'Las preguntas de calificación, a qué tablero va cada tipo de cliente y quién lo atiende.' },
          { t: 'Pruébalo', d: 'En «Probar» le escribes como un cliente. Responde con su configuración real y las mismas comprobaciones, sin crear leads, y al lado ves lo que entendió.' },
          { t: 'Conecta el canal', d: 'Cuando te guste cómo responde, conecta tu WhatsApp o tu Instagram y el agente empieza a atender.' },
        ] },
      { tipo: 'texto', label: 'Mejora continua', h2: 'Lo corriges como corregirías a un asesor nuevo',
        parrafos: [
          'En el probador, debajo de cada respuesta, tocas <b>Corregir esta respuesta</b> y cuentas qué debió decir. Un entrenador con IA decide dónde va el cambio —una regla, el saludo, una pregunta frecuente o el contexto— y te lo muestra antes de aplicarlo. Puedes probar el cambio y, si no te convence, deshacerlo desde el historial de mejoras.',
          'Lo mismo funciona con conversaciones reales. En el inbox, junto a cada mensaje del agente, aparece «Corregir». Al cliente no se le reenvía nada: cambia cómo responde a partir de ahí. Además, cuando una conversación termina, la IA la revisa y te deja sugerencias en el paso «Mejoras».',
        ] },
      { tipo: 'tarjetas', label: 'Dónde atiende', h2: 'WhatsApp e Instagram, con el mismo entrenamiento',
        items: [
          { t: 'WhatsApp Business', d: 'Conectas tu número con la app de Meta de tu negocio: copias cinco datos y Acuarius configura el resto. El agente marca el mensaje como leído, muestra «escribiendo…» y responde con la negrita de WhatsApp.' },
          { t: 'Instagram', d: 'Los mensajes directos de tu cuenta de Instagram Business llegan a la misma bandeja. Ahí el agente escribe en texto plano, que es lo que se ve bien en ese chat.' },
          { t: 'Lo ve todo tu equipo', d: 'En WhatsApp, cada respuesta del agente lleva sus marcas de enviado, entregado y leído. Lo que conversa queda en la ficha del lead. Si prefieres que el cliente elija su hora, comparte tu <a href="/novedades/enlace-para-agendar-reuniones/">enlace para agendar reuniones</a>.' },
        ] },
    ],
    faq: [
      { q: '¿El agente responde a cualquier hora?', a: 'Sí. Por chat atiende a cualquier hora, también de noche y en festivos. Lo que respeta es tu horario para las llamadas y los contactos de un asesor: fuera de horario ofrece la próxima franja en la que alguien puede atender. Si tu cuenta agota los mensajes del agente del mes, el contacto recibe un aviso de que le responde una persona y la conversación pasa a tu equipo.' },
      { q: '¿La persona sabe que habla con una IA?', a: 'Lo decides tú. Por defecto el agente no se presenta como bot. Si marcas «Puede decir que es un asistente digital», cuando alguien se lo pregunta responde que es el asistente digital de tu negocio, nunca dice que es una persona y ofrece pasarle con alguien del equipo.' },
      { q: '¿Qué pasa si el agente no sabe algo?', a: 'Lo dice y pasa la conversación a un asesor. No estima precios ni inventa productos: si un mensaje trae un precio o un código que no está en tu información, no se envía.' },
      { q: '¿Puedo revisar y corregir lo que dice?', a: 'Sí. Todas sus respuestas quedan en el inbox. Puedes corregir cualquiera, en el probador o en una conversación real, y el entrenador ajusta su configuración. Cada cambio queda en un historial que puedes deshacer.' },
      { q: '¿Necesito saber programar?', a: 'No. El agente se configura en un formulario por pasos, en español. Para conectar WhatsApp hoy usas la app de Meta de tu negocio y copias cinco datos que te indicamos paso a paso.' },
      { q: '¿Funciona en Instagram?', a: 'Sí. El mismo agente atiende los mensajes directos de tu cuenta de Instagram Business, con el mismo entrenamiento y la misma calificación.' },
      { q: '¿Cómo sé que está listo para atender clientes?', a: 'Lo pruebas antes de conectarlo. En el probador ves qué datos capturó, si calificó al cliente, a qué tablero lo mandaría y qué le ofreció de tu catálogo. Nada de esa prueba entra a tu CRM.' },
    ],
    cta: { h2: 'Que ningún cliente se quede esperando respuesta', sub: 'Crea tu cuenta, configura tu agente y pruébalo antes de conectar tu WhatsApp.' },
  },
};

// ── Herramienta gratis: generador de enlace de WhatsApp ─────────────────────
// Todo corre en el navegador: el número y el mensaje no salen de la página.
const PAISES = [['CO', '57', 'Colombia'], ['MX', '52', 'México'], ['AR', '54', 'Argentina'], ['CL', '56', 'Chile'], ['PE', '51', 'Perú'], ['EC', '593', 'Ecuador'], ['VE', '58', 'Venezuela'], ['BO', '591', 'Bolivia'], ['PY', '595', 'Paraguay'], ['UY', '598', 'Uruguay'], ['PA', '507', 'Panamá'], ['CR', '506', 'Costa Rica'], ['GT', '502', 'Guatemala'], ['SV', '503', 'El Salvador'], ['HN', '504', 'Honduras'], ['NI', '505', 'Nicaragua'], ['DO', '1', 'República Dominicana'], ['US', '1', 'Estados Unidos'], ['ES', '34', 'España']];
function generadorHTML() {
  return '<div class="wl">'
    + '<style>.wl{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:28px;margin-top:32px;text-align:left}'
    + '.wl-f{background:var(--white);border:1px solid var(--border);border-radius:var(--rlg);padding:26px}'
    + '.wl label{display:block;font-size:13.5px;font-weight:600;color:var(--text);margin:0 0 6px}'
    + '.wl-fila{display:grid;grid-template-columns:150px 1fr;gap:10px;margin-bottom:18px}'
    + '.wl select,.wl input,.wl textarea{width:100%;font:inherit;font-size:15px;padding:12px 14px;border:1.5px solid var(--border);border-radius:var(--r);background:var(--white);color:var(--text)}'
    + '.wl select:focus,.wl input:focus,.wl textarea:focus{outline:none;border-color:var(--blue)}'
    + '.wl textarea{min-height:110px;resize:vertical}'
    + '.wl small{display:block;font-size:12.5px;color:var(--muted);margin-top:6px}'
    + '.wl-r{background:var(--blue-lt);border-radius:var(--rlg);padding:26px;display:flex;flex-direction:column;gap:14px}'
    + '.wl-link{font-family:ui-monospace,Menlo,monospace;font-size:14px;word-break:break-all;background:var(--white);border:1px solid var(--border);border-radius:var(--r);padding:14px;color:var(--text);min-height:52px}'
    + '.wl-bot{display:flex;flex-wrap:wrap;gap:10px}'
    + '.wl-bot button,.wl-bot a{font:inherit;font-size:14px;font-weight:600;padding:11px 18px;border-radius:var(--r);cursor:pointer;text-decoration:none;border:1.5px solid var(--blue)}'
    + '.wl-bot button{background:var(--blue);color:var(--white)}'
    + '.wl-bot a{background:var(--white);color:var(--blue)}'
    + '.wl-bot [aria-disabled="true"]{opacity:.45;pointer-events:none}'
    + '.wl-err{color:#B42318;font-size:13px;min-height:18px}'
    + '@media(max-width:860px){.wl{grid-template-columns:1fr}.wl-fila{grid-template-columns:1fr}}</style>'
    + '<div class="wl-f">'
    + '<div class="wl-fila"><div><label for="wl-pais">País</label><select id="wl-pais">' + PAISES.map(([c, n, t]) => '<option value="' + n + '"' + (c === 'CO' ? ' selected' : '') + '>' + t + ' (+' + n + ')</option>').join('') + '</select></div>'
    + '<div><label for="wl-num">Número de WhatsApp</label><input id="wl-num" inputmode="tel" autocomplete="off" placeholder="300 123 4567"><small>Sin el indicativo del país: ya lo pone el selector.</small></div></div>'
    + '<label for="wl-msg">Mensaje que llega escrito (opcional)</label><textarea id="wl-msg" placeholder="Hola, vi su anuncio y quiero más información"></textarea>'
    + '<small>Tu cliente lo ve en la caja de texto y solo tiene que pulsar enviar.</small>'
    + '</div>'
    + '<div class="wl-r"><label>Tu enlace</label><div class="wl-link" id="wl-out">Escribe tu número para crear el enlace</div><div class="wl-err" id="wl-err"></div>'
    + '<div class="wl-bot"><button type="button" id="wl-copiar" aria-disabled="true">Copiar enlace</button><a id="wl-probar" href="#" target="_blank" rel="noopener" aria-disabled="true">Probar enlace</a></div>'
    + '<small>El número y el mensaje no salen de tu navegador: no guardamos nada.</small></div>'
    + '<script>(function(){var p=document.getElementById("wl-pais"),n=document.getElementById("wl-num"),m=document.getElementById("wl-msg"),o=document.getElementById("wl-out"),e=document.getElementById("wl-err"),c=document.getElementById("wl-copiar"),t=document.getElementById("wl-probar");'
    + 'function hacer(){var d=(n.value||"").replace(/\\D/g,"");var pre=p.value;if(d.indexOf(pre)===0&&d.length>pre.length+6)d=d.slice(pre.length);if(pre==="54"&&d.charAt(0)!=="9")d="9"+d;var ok=d.length>=7&&d.length<=13;e.textContent=d&&!ok?"Revisa el número: parece incompleto.":"";'
    + 'if(!ok){o.textContent="Escribe tu número para crear el enlace";c.setAttribute("aria-disabled","true");t.setAttribute("aria-disabled","true");return;}'
    + 'var u="https://wa.me/"+pre+d+(m.value.trim()?"?text="+encodeURIComponent(m.value.trim()):"");o.textContent=u;t.href=u;c.setAttribute("aria-disabled","false");t.setAttribute("aria-disabled","false");}'
    + '[p,n,m].forEach(function(x){x.addEventListener("input",hacer);});'
    + 'c.addEventListener("click",function(){var u=o.textContent;var fin=function(){c.textContent="Copiado ✓";setTimeout(function(){c.textContent="Copiar enlace";},1800);try{window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:"herramienta_uso",herramienta:"enlace-whatsapp"});}catch(x){}};'
    + 'if(navigator.clipboard)navigator.clipboard.writeText(u).then(fin,function(){prompt("Copia tu enlace:",u);});else prompt("Copia tu enlace:",u);});})();</' + 'script>'
    + '</div>';
}

CONTENIDO['/herramientas/enlace-de-whatsapp/'] = {
  badge: 'Herramienta gratis · sin registro',
  sub: 'Escribe tu número y el mensaje con el que quieres que te escriban. Copias el enlace y lo pegas en tu Instagram, tu web, un anuncio o un código QR.',
  secciones: [
    { tipo: 'html', label: 'Generador', h2: 'Crea tu enlace de WhatsApp', html: generadorHTML() },
    { tipo: 'texto', label: 'Qué es', h2: '¿Qué es un enlace de WhatsApp?',
      parrafos: [
        'Un enlace de WhatsApp (también llamado <b>link wa.me</b>) abre un chat con tu número sin que la otra persona tenga que guardarte como contacto. Funciona en el celular y en el computador: en el celular abre la app de WhatsApp y en el computador abre WhatsApp Web.',
        'Si le agregas un mensaje, ese texto aparece ya escrito en la caja del chat. La persona solo pulsa enviar. Es la forma más simple de que te escriban desde tu biografía de Instagram, tu página web, un correo o una publicación.',
      ] },
    { tipo: 'tarjetas', label: 'Dónde usarlo', h2: 'Dónde poner tu enlace de WhatsApp',
      items: [
        { t: 'Biografía de Instagram y TikTok', d: 'El enlace de tu perfil lleva directo a tu chat, con un mensaje que te dice de dónde vino la persona.' },
        { t: 'Botón de tu página web', d: 'Un botón «Escríbenos por WhatsApp» con el enlace. Si cambias el mensaje por página, sabes desde cuál te escribieron.' },
        { t: 'Anuncios y correos', d: 'En un correo o una publicación pagada que no sea de clic a WhatsApp, el enlace hace el mismo trabajo.' },
        { t: 'Código QR impreso', d: 'Convierte el enlace en un código QR para tu local, tus volantes o tus empaques.' },
        { t: 'Firma de correo', d: 'Cada correo de tu equipo puede llevar un enlace al WhatsApp de ventas.' },
        { t: 'Mensajes distintos por campaña', d: 'Usa un mensaje diferente en cada lugar («Vi el anuncio de octubre»): cuando te escriban, sabrás qué funcionó.' },
      ] },
    { tipo: 'pasos', label: 'Paso a paso', h2: 'Cómo crear tu enlace de WhatsApp',
      items: [
        { t: 'Elige tu país', d: 'El selector pone el indicativo. No lo escribas otra vez en el número.' },
        { t: 'Escribe tu número', d: 'Solo los dígitos de tu WhatsApp, sin espacios ni el cero inicial que algunos países usan dentro del país.' },
        { t: 'Agrega un mensaje', d: 'Es opcional, pero ayuda: la persona no tiene que pensar qué escribir y tú sabes de dónde viene.' },
        { t: 'Copia y prueba', d: 'Pulsa «Probar enlace» para verlo funcionar y «Copiar enlace» para pegarlo donde quieras.' },
      ] },
    { tipo: 'texto', label: 'Y después', h2: 'Cuando empiecen a escribirte',
      parrafos: [
        'Un enlace trae conversaciones; atenderlas es otro tema. Si varias personas de tu equipo responden el mismo número, o si te escriben de noche, conviene tener los chats en una <a href="/crm/whatsapp/">bandeja de WhatsApp compartida</a> y un <a href="/agente-ia/">agente de IA que responda</a> mientras nadie está disponible.',
        'En Acuarius, cada persona que te escribe queda como contacto en tu CRM, con su conversación, su etapa y el asesor que la atiende. Puedes empezar gratis.',
      ] },
  ],
  faq: [
    { q: '¿Es gratis?', a: 'Sí. El generador es gratis, no pide registro y no guarda tu número ni tu mensaje: todo pasa en tu navegador.' },
    { q: '¿Funciona con WhatsApp Business?', a: 'Sí. El enlace abre un chat con cualquier número de WhatsApp, sea la app normal, WhatsApp Business o un número conectado a la API.' },
    { q: '¿Por qué mi enlace no abre el chat?', a: 'Casi siempre es el número: revisa que no repitas el indicativo del país y que no tenga espacios, guiones ni el cero inicial. En Argentina, los celulares llevan un 9 después del 54; el generador lo agrega solo.' },
    { q: '¿Puedo cambiar el mensaje después?', a: 'El mensaje va dentro del enlace. Si lo cambias, se crea un enlace nuevo y tienes que reemplazarlo donde lo pegaste.' },
    { q: '¿Cómo lo convierto en código QR?', a: 'Copia el enlace y pégalo en cualquier generador de códigos QR. Al escanearlo, se abre el chat con tu mensaje.' },
  ],
  cta: { h2: 'Que cada chat se convierta en una venta', sub: 'Con Acuarius, las conversaciones de WhatsApp llegan a tu CRM y un agente de IA responde mientras tu equipo vende. Empieza gratis.' },
};
