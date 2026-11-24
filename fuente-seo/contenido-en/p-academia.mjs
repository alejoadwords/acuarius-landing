// Versión en inglés de /academia/ (par de contenido/p-academia.mjs).
// Los videos están en español: se dejan los mismos ids y se traducen títulos
// y descripciones. Al agregar un video en el original, agregarlo aquí también.
// Ningún texto puede prometer Messenger (bloqueado en Meta).

const CATEGORIAS = {"primeros-pasos": "Getting started", "crm": "CRM", "conversaciones": "Conversations and AI agent", "marketing": "Marketing", "analisis": "Analytics", "seo": "SEO and AI visibility", "novedades": "What's new guides"};
const ORDEN = ["primeros-pasos", "novedades", "conversaciones", "crm", "marketing", "analisis", "seo"];
const VIDEOS = [
 { "cat": "primeros-pasos", "dur": "2:08", "id": "3AjyaeCQzPk",
   "t": "Acuarius in 2 minutes: CRM, AI agent and marketing in one place",
   "d": "What Acuarius is and what it can do for your business: an AI agent that handles your chats, the CRM, automatic follow-up, your campaigns and your ads connected to your sales." },
 { "cat": "primeros-pasos", "dur": "3:57", "id": "NEXArTIcM_c",
   "t": "Full tour of Acuarius: CRM and marketing in one place",
   "d": "Where everything is and what it is for: Home and the Pulse, CRM, Marketing, Ad platforms, Conversations, Analytics, Command K and in-app support." },
 { "cat": "primeros-pasos", "dur": "2:09", "id": "j05ZT7bsFZk",
   "t": "Your 14-day Pro trial in Acuarius: what it includes and how to make the most of it",
   "d": "What the trial includes, its monthly limits, a week-by-week order to get the most out of it, and what happens when it ends." },
 { "cat": "primeros-pasos", "dur": "2:38", "id": "MMgjFbp4S1M",
   "t": "Your first 30 minutes in Acuarius: get your account ready",
   "d": "Import your contacts, connect the form you already have on your website, turn on the automatic welcome message and set up your sales process." },
 { "cat": "primeros-pasos", "dur": "3:25", "id": "VrvLXCLwUX0",
   "t": "Connect your ad accounts to Acuarius: Google, Meta and LinkedIn",
   "d": "Grant access and check that your campaign data actually loads." },
 { "cat": "seo", "dur": "2:29", "id": "d2xCVGA3rq8",
   "t": "SEO project: rankings month by month and your visibility inside AI tools",
   "d": "Rank tracking and the GEO report: whether ChatGPT, Gemini, Claude and Perplexity mention you." },
 { "cat": "crm", "dur": "2:39", "id": "VJvmwWSeMeU",
   "t": "The pipeline and the prospect record",
   "d": "The stage board, moving and closing deals, searching and filtering, avoiding duplicates, the full prospect record and the AI Copilot." },
 { "cat": "crm", "dur": "1:27", "id": "FlWZq8bgvkU",
   "t": "Sales processes: boards with your business's stages",
   "d": "Create up to 10 sales processes, each with its own stages, colors and close probability, and choose the default process for new prospects." },
 { "cat": "crm", "dur": "1:50", "id": "shozxp5u_KQ",
   "t": "Import your database in minutes: Excel, CSV or Google Sheets",
   "d": "Move your contacts into Acuarius: review the columns, tag the group, decide what to do with duplicates and who handles them." },
 { "cat": "crm", "dur": "2:17", "id": "eKQam-fUqJI",
   "t": "Tasks: never forget a follow-up",
   "d": "Your to-do list per sales rep, the automatic first-contact task, tasks from automations and the morning summary." },
 { "cat": "crm", "dur": "2:21", "id": "7vltri_n8S4",
   "t": "CRM tags: the system that ties together filters, campaigns and automations",
   "d": "A well-placed tag helps you segment, trigger workflows and measure later." },
 { "cat": "crm", "dur": "2:24", "id": "ubVfMIR_Sf4",
   "t": "CRM calendar: tasks, meetings and Google Calendar sync",
   "d": "Everything you need to do today, synced with the calendar you already use." },
 { "cat": "marketing", "dur": "2:02", "id": "WsKoAfDXNq0",
   "t": "Your first email campaign, step by step",
   "d": "Subject line and preheader, a template or AI writing, image and button, who receives it, testing and review before you send or schedule." },
 { "cat": "marketing", "dur": "2:02", "id": "_hbP-UkHnbc",
   "t": "Automations: follow-up that runs on its own",
   "d": "Triggers, actions, waits, conditions and branches, and the sending hours the law allows." },
 { "cat": "marketing", "dur": "2:38", "id": "2GS-vDr0OUk",
   "t": "Lead sources: forms, webhooks and chats connected to your CRM",
   "d": "Create a form or connect the one you already have, receive prospects from Hotmart, Zapier or Make, and decide when a chat enters your pipeline." },
 { "cat": "marketing", "dur": "1:49", "id": "xIzDRTkwr-E",
   "t": "AI sales proposals: create them, send them and get paid",
   "d": "From the prospect record: amount, payment link, four AI-written styles, client signature and payment, the status of each proposal, and Won when you mark it paid." },
 { "cat": "marketing", "dur": "2:19", "id": "Edw6fql549A",
   "t": "Automatic NPS surveys: measure satisfaction and react hands-free",
   "d": "Measure satisfaction automatically and react based on the score: promoter, passive or detractor." },
 { "cat": "conversaciones", "dur": "2:10", "id": "LW-DJTNFNak",
   "t": "The inbox: all your conversations in one place",
   "d": "Handle WhatsApp and Instagram with your AI agent or your team: filters, the 24-hour window, internal notes, quick replies, scheduled messages and Move to pipeline." },
 { "cat": "conversaciones", "dur": "2:38", "id": "ntRgbc6J2Nk",
   "t": "AI agents: handle your chats and qualify prospects",
   "d": "Create your AI agent, connect it to your chats, define how it qualifies each prospect and test it before turning it on without using up your quota." },
 { "cat": "analisis", "dur": "2:43", "id": "6KRXWuXjK7k",
   "t": "Sales analytics: how much you sell, why you lose and how well you follow up",
   "d": "How much you sell, why opportunities are lost and how each sales rep's follow-up is going." },
 { "cat": "analisis", "dur": "2:37", "id": "EmGkQWfJSXU",
   "t": "Marketing and customer analytics: what brings in leads, how fast you reply and how happy customers are",
   "d": "Which source brings in leads, how long you take to reply and how happy your customers are." },
 { "cat": "novedades", "dur": "1:22", "id": "nRNwbMqukqY",
   "t": "Products in the Acuarius CRM: your catalog in opportunities, the inbox and proposals",
   "d": "Your catalog inside the CRM: create products, add them to the opportunity, send them from the inbox and use them in proposals." },
 { "cat": "novedades", "dur": "1:06", "id": "biA_Gsq3D0A",
   "t": "Your WhatsApp AI agent asks for details before handing you the chat · Acuarius",
   "d": "Turn on the option and the agent asks for any missing details before handing the conversation to your team." },
 { "cat": "novedades", "dur": "1:03", "id": "XiCqCL77JLo",
   "t": "Repeat purchases and satisfaction (NPS) alerts in Acuarius",
   "d": "Log a second purchase with \"New purchase\", get the alert for scores from 0 to 6 and see NPS by sales rep." },
 { "cat": "novedades", "dur": "1:14", "id": "Nz5Xlou3WG8",
   "t": "Custom fields in Acuarius: data that decides, segments and fills itself in",
   "d": "Create your fields, let the agent fill them in and use them in automations and campaigns." },
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
function academiaHTML() {
  const css = '<style>.ac-cat{margin-top:44px}.ac-cat:first-child{margin-top:8px}.ac-cat h3{font-family:var(--font-display);font-size:22px;font-weight:800;letter-spacing:0;color:var(--text);margin-bottom:16px;text-align:left}'
    + '.ac-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px;text-align:left}'
    + '.ac-v{display:flex;flex-direction:column}'
    + '.ac-p{position:relative;width:100%;aspect-ratio:16/9;border:0;padding:0;border-radius:14px;overflow:hidden;background:var(--text);cursor:pointer;display:block}'
    + '.ac-p img{width:100%;height:100%;object-fit:cover;display:block;opacity:.92}.ac-p:hover img{opacity:1}'
    + '.ac-p span{position:absolute;inset:0;margin:auto;width:56px;height:56px;border-radius:50%;background:var(--white);display:flex;align-items:center;justify-content:center;color:var(--blue)}'
    + '.ac-p iframe{position:absolute;inset:0;width:100%;height:100%;border:0}'
    + '.ac-v b{font-size:15.5px;line-height:1.35;color:var(--text);margin-top:12px}.ac-v small{font-size:13.5px;line-height:1.5;color:var(--muted);margin-top:6px}.ac-v em{font-style:normal;font-size:12px;font-weight:700;color:var(--blue);margin-top:6px}'
    + '@media(max-width:960px){.ac-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:640px){.ac-grid{grid-template-columns:1fr}}</style>';
  const play = '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="margin-left:3px"><path d="M8 5v14l11-7z"/></svg>';
  const bloques = ORDEN.map((c) => {
    const vs = VIDEOS.filter((v) => v.cat === c);
    if (!vs.length) return '';
    return '<div class="ac-cat"><h3>' + esc(CATEGORIAS[c]) + '</h3><div class="ac-grid">' + vs.map((v) =>
      '<div class="ac-v"><button class="ac-p" type="button" data-ac="' + v.id + '" aria-label="Play: ' + esc(v.t) + '"><img src="https://i.ytimg.com/vi/' + v.id + '/hqdefault.jpg" alt="' + esc(v.t) + '" loading="lazy" width="480" height="360"><span>' + play + '</span></button>'
      + '<b>' + esc(v.t) + '</b><small>' + esc(v.d) + '</small><em>' + esc(v.dur) + ' min</em></div>').join('') + '</div></div>';
  }).join('');
  const js = '<script>document.addEventListener("click",function(e){var b=e.target.closest&&e.target.closest(".ac-p[data-ac]");if(!b)return;var f=document.createElement("iframe");f.src="https://www.youtube-nocookie.com/embed/"+b.getAttribute("data-ac")+"?autoplay=1&rel=0&playsinline=1";f.title=b.getAttribute("aria-label");f.allow="autoplay; encrypted-media; picture-in-picture; fullscreen";f.allowFullscreen=true;b.replaceChildren(f);b.removeAttribute("data-ac");try{window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:"video_play",pagina:location.pathname});}catch(x){}});</' + 'script>';
  return css + bloques + js;
}

export const PAGINAS = {
  '/academia/': {
    kw: 'crm video course',
    title: 'Acuarius Academy: Free CRM Video Course',
    description: 'Acuarius Academy: a free CRM video course. Learn to use the pipeline, the WhatsApp inbox, the AI agent, automations and reports, step by step.',
    h1: 'Academy: a CRM video course to use Acuarius from start to finish',
    miga: 'Academy',
    badge: VIDEOS.length + ' videos · free · in Spanish',
    sub: 'Short videos, two to four minutes each, to get your account ready and make the most of every module. They play right here on the page. The videos are in Spanish.',
    secciones: [
      { tipo: 'html', label: 'Videos', h2: 'Learn Acuarius step by step', html: academiaHTML() },
      { tipo: 'texto', label: 'Where to start', h2: 'Where do I start?',
        parrafos: [
          'If you just created your account, watch <b>Acuarius in 2 minutes</b> and <b>Your first 30 minutes</b> first: in half an hour you will have your contacts imported, your form connected and someone replying to every lead.',
          'Then follow the order your team works in: the pipeline and the prospect record, the WhatsApp inbox with the <a href="/agente-ia/">AI agent</a>, <a href="/automatizaciones/">automations</a> and, finally, <a href="/reportes/">reports</a>. Every new feature also has its written guide in <a href="/novedades/">What\'s new</a>.',
        ] },
    ],
    faq: [
      { q: 'Is the Academy free?', a: 'Yes. All the videos are free and you do not need an account to watch them.' },
      { q: 'How often are new videos added?', a: 'Every major new feature comes with its video guide in <a href="/novedades/">What\'s new</a>, which we publish every two weeks.' },
      { q: 'Can I watch the videos inside Acuarius?', a: 'Yes. Inside the app, the Academy section has the same videos, organized by module.' },
    ],
    cta: { h2: 'Practice while you learn', sub: 'Create your account and follow the videos with your own data: you get 14 days of Pro free, no credit card.' },
  },
};
