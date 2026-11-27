// Versión en inglés del Cluster 8 · Producto. Misma forma que
// contenido/c8-producto.mjs, más la meta (kw, title, description, h1, miga).
// Las afirmaciones son las del original; no se agrega ninguna. El generador
// de enlace conserva la lógica tal cual: solo cambian los textos visibles.

export const PAGINAS = {
  '/agente-ia/': {
    kw: 'whatsapp ai agent',
    title: 'WhatsApp AI Agent That Qualifies Leads | Acuarius',
    description: 'A WhatsApp AI agent that also works on Instagram: it answers with your business info, qualifies each customer and hands them to the right rep. Test it first.',
    h1: 'A WhatsApp AI agent that answers, qualifies and routes your leads',
    miga: 'AI agent',
    badge: 'AI agent for WhatsApp and Instagram',
    sub: 'It answers your customers with your business information, finds out what your team needs to know and hands each rep the leads that are ready. You test it and correct it before you turn it on.',
    secciones: [
      { tipo: 'texto', label: 'What it is', h2: 'One more rep on your WhatsApp, who never leaves a chat unanswered',
        parrafos: [
          'A <b>WhatsApp AI agent</b> answers your business\'s messages the way someone on your team would: in short sentences, in the tone you choose and with what you teach it. It doesn\'t guess. It works from your business context, your FAQs and your catalog.',
          'Its job isn\'t to replace your team. It handles the first part of the conversation (repeated questions, contact details, qualifying questions) and hands off to a person whatever needs a person. Once the agent hands off the conversation, it stops replying and the rep picks up from the <a href="/crm/whatsapp/">CRM\'s WhatsApp inbox</a>.',
          'Everything that happens in the chat is saved in the <a href="/crm/">CRM</a>: the lead is created with their name and phone number, enters your pipeline and arrives with the full conversation.',
        ] },
      { tipo: 'tarjetas', label: 'How it handles chats', h2: 'What your agent does in every conversation',
        items: [
          { t: 'Answers with your information', d: 'It reads your business context, your FAQs and the rules you teach it over time. If you write a welcome message, it sends it word for word to anyone who just says hi.' },
          { t: 'Offers from your catalog', d: 'With your inventory connected (a Google Sheet, a file, or your Shopify, WooCommerce or VTEX store), it only offers what exists, at its exact price. If you have properties with photos, it offers them and sends them when the person says yes.' },
          { t: 'Asks for details at the right time', d: 'First it answers what it was asked and, in the same message, asks for a phone number. It never makes an answer depend on getting a detail. If it already has the number, it doesn\'t ask again.' },
          { t: 'Respects your business hours', d: 'It knows what time it is in your country and whether you\'re open. If someone asks for a call outside business hours or on a Colombian public holiday, it tells them and offers the nearest available time slot.' },
          { t: 'Books appointments', d: 'If your business uses bookings, it offers times that are actually free and puts the appointment on your calendar. It can also reschedule or cancel the one that person already had.' },
          { t: 'Follows up when a chat goes cold', d: 'If the person stops replying, after 10 minutes it writes once with the question that\'s still missing. Only between 7 a.m. and 9 p.m.' },
        ] },
      { tipo: 'texto', label: 'Qualification', h2: '<span id="califica-y-reparte"></span>Qualifies and routes every lead',
        parrafos: [
          'You tell the agent what your team needs to know before calling: up to eight questions, each with its own condition. For example, "What\'s your budget?", which qualifies if it\'s "more than 300 million." The agent asks them one at a time, inside the conversation, and doesn\'t repeat what the person already said.',
          'The AI doesn\'t decide whether the lead qualifies: a fixed system rule does. While any answer is missing, the lead stays pending. Once all of them are in, the contact is marked <b>qualified</b> or <b>not qualified</b>, with its tag, and the record keeps a summary of each answer. If it qualifies, it can move on its own to the stage you choose and go to a rep.',
          'You can also route. If you sell and rent, or have two locations, the agent finds out what the person is looking for and sends them to the right board. There, it\'s assigned to a fixed rep or in rotation among the people who handle that board. If nobody is set up for it, the source\'s assignment rule decides: the lead is never left without an owner. The rep gets notified instantly.',
          'And if you use <a href="/novedades/campos-personalizados-crm/">custom fields</a>, mark the ones you want the agent to fill in, like "Service of interest" or "Event date." It writes them on the record without overwriting what a person entered.',
        ] },
      { tipo: 'tabla', label: 'Example', h2: 'What a configured qualification looks like',
        cab: ['What it finds out', 'Agent\'s question', 'Qualifies if'],
        filas: [
          ['Transaction', 'Are you looking to buy or rent?', 'Buy'],
          ['Area', 'Which area are you interested in?', 'North or downtown'],
          ['Budget', 'What\'s your budget?', 'More than 300 million'],
          ['Timeline', 'When do you need it?', 'Within the next three months'],
        ],
        nota: 'Made-up data from a sample real estate agency. You can require it to meet all of them or just a minimum, for example three out of four.' },
      { tipo: 'texto', label: 'No making things up', h2: 'It answers with what you give it and hands off what it doesn\'t know',
        parrafos: [
          'The agent can only give prices, availability, addresses and terms that are written in its context, its FAQs or the catalog. Asking it to wasn\'t enough, so it doesn\'t rely on the agent obeying. Before each message is sent, the system checks that every price and every code exists. If they don\'t, the message doesn\'t go out: it gets rewritten, and if it fails again, the customer receives a safe reply and the conversation goes to your team.',
          'The same goes for a "yes, we have it" about something that isn\'t in your catalog, an informal tone from an agent set to be formal, or a time outside your business hours: it\'s corrected before the person reads it.',
          'When someone asks to talk to a person, the agent replies with your phrase, for example "Sure, I\'ll connect you with a rep in a moment," and hands off the conversation. If you turn on the option, it first asks for any missing name, phone number and email, and hands it off in the next message either way, whether they give them or not. We explain it in <a href="/novedades/agente-ia-whatsapp-datos-de-contacto/">your agent asks for contact details before handing off the chat</a>.',
        ] },
      { tipo: 'tabla', label: 'Examples', h2: 'How it works for your type of business',
        cab: ['Business', 'Customer writes', 'What the agent does'],
        filas: [
          ['Real estate agency', '"I\'m looking for a 3-bedroom apartment in the north, up to 2.5 million in rent."', 'It searches your inventory by area, bedrooms and budget, offers up to three options with their code, sends photos if asked and qualifies. <a href="/crm/inmobiliarias/">Real estate CRM</a>.'],
          ['Clinic', '"How much is the orthodontics consultation, and do you have an appointment on Thursday?"', 'It gives the price that\'s in your FAQs, offers Thursday\'s open times and books the appointment. Anything clinical goes to your team, as you instruct it. <a href="/crm/clinicas/">CRM for clinics</a>.'],
          ['Restaurant', '"Do you have a table for six on Saturday at 8?"', 'It answers with your menu and your hours and, if you have bookings turned on, offers only open times and puts the reservation on your calendar.'],
          ['Store', '"Do you have the black jacket in size M?"', 'It checks your catalog or your connected store and answers with the exact price. If it\'s not there, it doesn\'t say yes: your team confirms. It tells people who already bought from you where their order is.'],
          ['Services', '"I\'d like a quote for my company\'s accounting."', 'It asks what your rep needs (company size, which service, by when), qualifies and hands off the lead with the summary.'],
        ],
        nota: 'Sample messages and figures.' },
      { tipo: 'pasos', label: 'Before you turn it on', h2: 'You set it up, test it and then turn it on',
        items: [
          { t: 'Tell it about your business', d: 'Name, tone (formal or informal), context, FAQs, welcome message and the phrase for handing off to a rep. All in a step-by-step form.' },
          { t: 'Define what it finds out', d: 'The qualifying questions, which board each type of customer goes to and who handles it.' },
          { t: 'Test it', d: 'In "Test," you write to it as a customer. It replies with its real configuration and the same checks, without creating leads, and next to it you see what it understood.' },
          { t: 'Connect the channel', d: 'When you like how it replies, connect your WhatsApp or your Instagram and the agent starts handling conversations.' },
        ] },
      { tipo: 'texto', label: 'Ongoing improvement', h2: 'You correct it the way you\'d correct a new rep',
        parrafos: [
          'In the tester, below each reply, you tap <b>Correct this reply</b> and say what it should have said. An AI trainer decides where the change goes (a rule, the greeting, an FAQ or the context) and shows it to you before applying it. You can test the change and, if you don\'t like it, undo it from the improvement history.',
          'The same works with real conversations. In the inbox, next to each agent message, there\'s a "Correct" option. Nothing is resent to the customer: it changes how the agent replies from then on. Also, when a conversation ends, the AI reviews it and leaves you suggestions in the "Improvements" step.',
        ] },
      { tipo: 'tarjetas', label: 'Where it works', h2: 'WhatsApp and Instagram, with the same training',
        items: [
          { t: 'WhatsApp Business', d: 'You connect your number with your business\'s Meta app: you copy five details and Acuarius sets up the rest. The agent marks the message as read, shows "typing…" and replies with WhatsApp bold formatting.' },
          { t: 'Instagram', d: 'Direct messages from your Instagram Business account arrive in the same inbox. There, the agent writes in plain text, which is what looks right in that chat.' },
          { t: 'Your whole team sees everything', d: 'On WhatsApp, every agent reply shows its sent, delivered and read marks. What it talks about is saved on the lead\'s record. If you\'d rather the customer pick their own time, share your <a href="/novedades/enlace-para-agendar-reuniones/">meeting booking link</a>.' },
        ] },
    ],
    faq: [
      { q: 'Does the agent reply at any time?', a: 'Yes. On chat it replies at any hour, including nights and public holidays. What it respects is your schedule for calls and contact from a rep: outside business hours it offers the next time slot when someone can help. If your account runs out of agent messages for the month, the contact is told a person will reply and the conversation goes to your team.' },
      { q: 'Does the person know they\'re talking to an AI?', a: 'You decide. By default the agent doesn\'t introduce itself as a bot. If you check "Can say it\'s a digital assistant," when someone asks, it replies that it\'s your business\'s digital assistant, never says it\'s a person and offers to connect them with someone on the team.' },
      { q: 'What happens if the agent doesn\'t know something?', a: 'It says so and hands the conversation to a rep. It doesn\'t estimate prices or make up products: if a message includes a price or a code that isn\'t in your information, it isn\'t sent.' },
      { q: 'Can I review and correct what it says?', a: 'Yes. All its replies are kept in the inbox. You can correct any of them, in the tester or in a real conversation, and the trainer adjusts its configuration. Every change is saved in a history you can undo.' },
      { q: 'Do I need to know how to code?', a: 'No. You set up the agent in a step-by-step form. To connect WhatsApp today, you use your business\'s Meta app and copy five details that we walk you through step by step.' },
      { q: 'Does it work on Instagram?', a: 'Yes. The same agent handles direct messages from your Instagram Business account, with the same training and the same qualification.' },
      { q: 'How do I know it\'s ready to talk to customers?', a: 'You test it before connecting it. In the tester you see what details it captured, whether it qualified the customer, which board it would send them to and what it offered from your catalog. Nothing from that test goes into your CRM.' },
    ],
    cta: { h2: 'Never leave a customer waiting for a reply', sub: 'Create your account, set up your agent and test it before you connect your WhatsApp.' },
  },
};

// ── Herramienta gratis: generador de enlace de WhatsApp ─────────────────────
// Misma lógica que el original; solo cambian las cadenas visibles.
const PAISES = [['CO', '57', 'Colombia'], ['MX', '52', 'Mexico'], ['AR', '54', 'Argentina'], ['CL', '56', 'Chile'], ['PE', '51', 'Peru'], ['EC', '593', 'Ecuador'], ['VE', '58', 'Venezuela'], ['BO', '591', 'Bolivia'], ['PY', '595', 'Paraguay'], ['UY', '598', 'Uruguay'], ['PA', '507', 'Panama'], ['CR', '506', 'Costa Rica'], ['GT', '502', 'Guatemala'], ['SV', '503', 'El Salvador'], ['HN', '504', 'Honduras'], ['NI', '505', 'Nicaragua'], ['DO', '1', 'Dominican Republic'], ['US', '1', 'United States'], ['ES', '34', 'Spain']];
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
    + '<div class="wl-fila"><div><label for="wl-pais">Country</label><select id="wl-pais">' + PAISES.map(([c, n, t]) => '<option value="' + n + '"' + (c === 'CO' ? ' selected' : '') + '>' + t + ' (+' + n + ')</option>').join('') + '</select></div>'
    + '<div><label for="wl-num">WhatsApp number</label><input id="wl-num" inputmode="tel" autocomplete="off" placeholder="300 123 4567"><small>Without the country code: the selector adds it.</small></div></div>'
    + '<label for="wl-msg">Pre-filled message (optional)</label><textarea id="wl-msg" placeholder="Hi, I saw your ad and I\'d like more information"></textarea>'
    + '<small>Your customer sees it in the text box and only has to tap send.</small>'
    + '</div>'
    + '<div class="wl-r"><label>Your link</label><div class="wl-link" id="wl-out">Enter your number to create the link</div><div class="wl-err" id="wl-err"></div>'
    + '<div class="wl-bot"><button type="button" id="wl-copiar" aria-disabled="true">Copy link</button><a id="wl-probar" href="#" target="_blank" rel="noopener" aria-disabled="true">Test link</a></div>'
    + '<small>Your number and message never leave your browser: we don\'t store anything.</small></div>'
    + '<script>(function(){var p=document.getElementById("wl-pais"),n=document.getElementById("wl-num"),m=document.getElementById("wl-msg"),o=document.getElementById("wl-out"),e=document.getElementById("wl-err"),c=document.getElementById("wl-copiar"),t=document.getElementById("wl-probar");'
    + 'function hacer(){var d=(n.value||"").replace(/\\D/g,"");var pre=p.value;if(d.indexOf(pre)===0&&d.length>pre.length+6)d=d.slice(pre.length);if(pre==="54"&&d.charAt(0)!=="9")d="9"+d;var ok=d.length>=7&&d.length<=13;e.textContent=d&&!ok?"Check the number: it looks incomplete.":"";'
    + 'if(!ok){o.textContent="Enter your number to create the link";c.setAttribute("aria-disabled","true");t.setAttribute("aria-disabled","true");return;}'
    + 'var u="https://wa.me/"+pre+d+(m.value.trim()?"?text="+encodeURIComponent(m.value.trim()):"");o.textContent=u;t.href=u;c.setAttribute("aria-disabled","false");t.setAttribute("aria-disabled","false");}'
    + '[p,n,m].forEach(function(x){x.addEventListener("input",hacer);});'
    + 'c.addEventListener("click",function(){var u=o.textContent;var fin=function(){c.textContent="Copied ✓";setTimeout(function(){c.textContent="Copy link";},1800);try{window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:"herramienta_uso",herramienta:"enlace-whatsapp"});}catch(x){}};'
    + 'if(navigator.clipboard)navigator.clipboard.writeText(u).then(fin,function(){prompt("Copy your link:",u);});else prompt("Copy your link:",u);});})();</' + 'script>'
    + '</div>';
}

PAGINAS['/herramientas/enlace-de-whatsapp/'] = {
  kw: 'whatsapp link generator',
  title: 'Free WhatsApp Link Generator | Acuarius',
  description: 'Free WhatsApp link generator: create your wa.me link with a ready-made message for Instagram, your website or a QR code. No sign-up, and we store nothing.',
  h1: 'WhatsApp link generator: create your wa.me link for free',
  miga: 'WhatsApp link',
  badge: 'Free tool · no sign-up',
  sub: 'Enter your number and the message you want people to send you. Copy the link and paste it on your Instagram, your website, an ad or a QR code.',
  secciones: [
    { tipo: 'html', label: 'Generator', h2: 'Create your WhatsApp link', html: generadorHTML() },
    { tipo: 'texto', label: 'What it is', h2: 'What is a WhatsApp link?',
      parrafos: [
        'A WhatsApp link (also called a <b>wa.me link</b>) opens a chat with your number without the other person having to save you as a contact. It works on phones and computers: on a phone it opens the WhatsApp app, and on a computer it opens WhatsApp Web.',
        'If you add a message, that text shows up already typed in the chat box. The person just taps send. It\'s the simplest way to get people to message you from your Instagram bio, your website, an email or a post.',
      ] },
    { tipo: 'tarjetas', label: 'Where to use it', h2: 'Where to put your WhatsApp link',
      items: [
        { t: 'Instagram and TikTok bio', d: 'The link on your profile goes straight to your chat, with a message that tells you where the person came from.' },
        { t: 'Button on your website', d: 'A "Message us on WhatsApp" button with the link. If you change the message on each page, you know which one they wrote from.' },
        { t: 'Ads and emails', d: 'In an email or a paid post that isn\'t a click-to-WhatsApp ad, the link does the same job.' },
        { t: 'Printed QR code', d: 'Turn the link into a QR code for your store, your flyers or your packaging.' },
        { t: 'Email signature', d: 'Every email from your team can include a link to your sales WhatsApp.' },
        { t: 'Different messages per campaign', d: 'Use a different message in each place ("I saw the October ad"): when people write to you, you\'ll know what worked.' },
      ] },
    { tipo: 'pasos', label: 'Step by step', h2: 'How to create your WhatsApp link',
      items: [
        { t: 'Choose your country', d: 'The selector adds the country code. Don\'t type it again in the number.' },
        { t: 'Enter your number', d: 'Just the digits of your WhatsApp, with no spaces and without the leading zero some countries use for domestic calls.' },
        { t: 'Add a message', d: 'It\'s optional, but it helps: the person doesn\'t have to think about what to write, and you know where they came from.' },
        { t: 'Copy and test', d: 'Click "Test link" to see it work and "Copy link" to paste it wherever you want.' },
      ] },
    { tipo: 'texto', label: 'What comes next', h2: 'When people start messaging you',
      parrafos: [
        'A link brings conversations; handling them is another matter. If several people on your team answer the same number, or if people message you at night, it helps to have your chats in a <a href="/crm/whatsapp/">shared WhatsApp inbox</a> and an <a href="/agente-ia/">AI agent that replies</a> while nobody is available.',
        'In Acuarius, everyone who messages you becomes a contact in your CRM, with their conversation, their stage and the rep handling them. You can try it free for 14 days.',
      ] },
  ],
  faq: [
    { q: 'Is it free?', a: 'Yes. The generator is free, doesn\'t require sign-up and doesn\'t store your number or your message: everything happens in your browser.' },
    { q: 'Does it work with WhatsApp Business?', a: 'Yes. The link opens a chat with any WhatsApp number, whether it\'s the regular app, WhatsApp Business or a number connected to the API.' },
    { q: 'Why doesn\'t my link open the chat?', a: 'It\'s almost always the number: make sure you don\'t repeat the country code and that it has no spaces, dashes or leading zero. In Argentina, mobile numbers have a 9 after the 54; the generator adds it for you.' },
    { q: 'Can I change the message later?', a: 'The message is part of the link. If you change it, a new link is created and you have to replace it wherever you pasted it.' },
    { q: 'How do I turn it into a QR code?', a: 'Copy the link and paste it into any QR code generator. When someone scans it, the chat opens with your message.' },
  ],
  cta: { h2: 'Turn every chat into a sale', sub: 'With Acuarius, your WhatsApp conversations go into your CRM and an AI agent replies while your team sells. Try it free for 14 days.' },
};
