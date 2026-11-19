// Versión en inglés de fuente-novedades/articulos/agente-ia-whatsapp-datos-de-contacto.mjs.
// Mismas afirmaciones que el original; los href y relacionados quedan en español
// porque el generador los cambia por su URL en inglés.
export const ARTICULO = {
  slug: "whatsapp-ai-agent-contact-details",
  kw: "WhatsApp AI agent",
  title: "WhatsApp AI Agent That Asks for Details Before Escalating",
  description: "A WhatsApp AI agent that answers, qualifies, and asks for name and email before handing the chat to your team, so nobody reaches a rep without contact info.",
  h1: "WhatsApp AI agent: nobody reaches your rep without contact details",
  modulo: "AI agent",
  publicado: "2026-11-02",
  edicion: 1,
  resumen: "Your WhatsApp AI agent now asks for missing details before handing the conversation to your team, and hands it off on the next message.",
  respuesta: "A WhatsApp AI agent is an assistant that answers your business's chats with the information you give it: context, FAQs, and catalog. In Acuarius it qualifies each person, sends them to the right sales process and, if you turn on the option, asks for name and email before handing the conversation to a rep. That way nobody reaches your team without contact details.",
  video: {
    id: "biA_Gsq3D0A", titulo: "Your WhatsApp AI agent asks for details before handing you the chat · Acuarius", subido: "2026-11-02", segundos: 66, propio: true,
    capitulos: [
      { s: 0, t: "Introduction" },
      { s: 6, t: "Your agent asks for details" },
      { s: 15, t: "Turn on the option" },
      { s: 25, t: "It asks for the missing details" },
      { s: 37, t: "It hands the conversation to the rep" },
      { s: 48, t: "Correct dates" },
      { s: 60, t: "Available now" },
    ],
  },
  ilustracion: "agente",
  secciones: [
    {
      h2: "What is a WhatsApp AI agent, and what isn't it?",
      html: "<p>A WhatsApp AI agent is an assistant that answers the messages on your WhatsApp Business number using your business's information. In Acuarius you create it in <b>Conversations → AI agents</b>: you give it a name, a role, the business context, FAQs and, if you sell products, your catalog.</p>" +
        "<p>What it isn't: it doesn't know anything you haven't told it. Before each message goes out, Acuarius checks that every price and every code it mentions really exists; if not, the message is rewritten. It doesn't replace your team either: it answers fast, finds out what's needed, and hands the chat to a rep at the right moment.</p>" +
        "<p>Your WhatsApp connects through your own business's Meta app, in <b>Sources → Set up channels → WhatsApp</b>.</p>",
    },
    {
      h2: "Why does it matter that nobody reaches the rep without details?",
      html: "<p>A conversation that reaches the rep with no name or email means starting from scratch: the rep asks again and the customer gets tired. And if the chat drops, there's no way to follow up with the lead through another channel.</p>" +
        "<p>That's why the agent has the option <b>“Ask for name, phone, and email before handing off to a rep”</b>. It's off by default. When you turn it on, every time someone asks to talk to your team, the agent first asks for the details it's missing.</p>",
    },
    {
      h2: "How does the handoff to the rep work?",
      html: "<p>The handoff to the rep happens over two messages, and the system controls it, not the AI.</p>" +
        "<ol><li><b>First message.</b> Someone writes “I want to talk to a rep”. If details are missing, the agent replies: “To keep helping you, we just need you to share your name and email address.”</li>" +
        "<li><b>Next message.</b> The agent hands the conversation to your team, with the phrase you set in “Phrase when escalating to a human”. It hands it off whether or not they share the details: the person was told someone would help them, and that promise is kept.</li></ol>" +
        "<p>The agent only asks for what it's missing. On WhatsApp it already has the phone number, so it asks for name and email. With a formal tone, the phrase uses the formal “usted”. Once the conversation goes to a person, the agent stops replying in that chat.</p>",
    },
    {
      h2: "Qualifying prospects and sending them to the right board",
      html: "<p>Qualifying means finding out, during the chat, whether the person is a fit for what you sell. In the “Qualification” step, turn on <b>“Qualify before handing off to sales”</b> and add questions. Each one has two boxes: “What it should find out” and “What answer counts as a yes”, which is optional.</p>" +
        "<ul><li>You choose how many criteria they must meet in “Qualifies if it meets at least”.</li>" +
        "<li>You pick which stage they move to if they qualify and which tag they get if they qualify or don't.</li>" +
        "<li>With “Notify the sales rep and stop replying automatically”, the agent hands the chat to the rep as soon as the person qualifies.</li></ul>" +
        "<p>In the “Process” step, turn on <b>“Send to a sales process based on what they're looking for”</b>. For example, whether they want to buy or rent. The agent only reports which option fits; you decide which process each one goes to. Then the lead is assigned in rotation among the people who handle that process, as set in <b>Settings → Users</b>. If you didn't select anyone, the source rule assigns it.</p>",
    },
    {
      h2: "Business hours, dates, and holidays",
      html: "<p>The agent knows what day and time it is in your business's time zone. If you write your business hours in the “Business context”, it knows whether you're open or closed right now.</p>" +
        "<ul><li>When it asks when to contact someone, it offers two or three specific times within your hours.</li>" +
        "<li>If the person asks for a time when you're closed, it explains that and offers the nearest available one.</li>" +
        "<li>It has the calendar for the next two weeks on hand. If today is Monday, November 2 and the customer says “on Friday”, it writes “Friday, November 6”. If it ever puts a number that doesn't match that day, it gets corrected before it's sent.</li>" +
        "<li>If your business uses Colombia time, it also knows the country's holidays and doesn't offer calls or visits on those days.</li></ul>",
    },
    {
      h2: "How to train it with your business information",
      html: "<p>The agent answers only as well as the information you give it. The editor has seven steps: Identity, Answers, Channels, Qualification, Process, Test, and Improvements.</p>" +
        "<ul><li><b>Business context:</b> what you sell, prices, process, areas, and hours.</li>" +
        "<li><b>FAQs:</b> answers the agent gives word for word, without improvising.</li>" +
        "<li><b>Welcome message:</b> the exact greeting for anyone who just writes “hi”. If their first message already says what they're looking for, the agent answers directly.</li>" +
        "<li><b>Catalog:</b> your products from CRM → Products, a Google sheet, or your connected store. The agent checks that same catalog when it replies.</li></ul>" +
        "<p>In the “Test” step you write to it as a customer. It doesn't create any lead or conversation, and next to it you see what data it captured, which sales process it sends the conversation to, and whether it qualifies it. With “Correct this answer” you explain what it should have said, and an AI trainer suggests the change before applying it.</p>",
    },
    {
      h2: "Examples by type of business",
      html: "<table><thead><tr><th>Business</th><th>What the agent finds out</th><th>When it hands off to a rep</th></tr></thead><tbody>" +
        "<tr><td>Real estate agency</td><td>Whether they want to buy or rent, area, and budget</td><td>When they qualify; it goes to the Sale or Rental process</td></tr>" +
        "<tr><td>Clinic</td><td>The treatment they're interested in and availability</td><td>If they ask for a service you didn't mark for the agent to book on its own</td></tr>" +
        "<tr><td>Store</td><td>The product, size, or color they want</td><td>If they ask about something that isn't in your catalog</td></tr>" +
        "<tr><td>Restaurant</td><td>When, and for how many people</td><td>When they ask to talk to someone; the agent records the day with its exact date</td></tr>" +
        "<tr><td>Services</td><td>What they need and by what date</td><td>When they meet the criteria, with name and email already requested</td></tr>" +
        "</tbody></table>" +
        "<p>Example: Andrés Rojas is looking for a rental in Medellín for up to COP 2,500,000 a month. The agent qualifies him, sends him to the Rental process and, before handing him off, asks for his email.</p>",
    },
    {
      h2: "Common mistakes when setting up an agent",
      html: "<ul><li><b>Leaving the context at two lines.</b> Without prices, areas, or hours, the agent has nothing to answer with and escalates almost everything.</li>" +
        "<li><b>Not writing your hours.</b> Without hours in the context, the agent can't offer specific times to call.</li>" +
        "<li><b>Writing a second question in “What answer counts as a yes”.</b> That box is the criterion, not another question.</li>" +
        "<li><b>Turning on routing without choosing who handles each process.</b> The lead gets assigned by the source rule and can land with someone who doesn't handle that process.</li>" +
        "<li><b>Turning it on without testing.</b> Ten minutes in “Test” saves you strange answers with real customers.</li></ul>",
    },
  ],
  pasos: {
    h2: "How to make the agent ask for details before escalating, step by step",
    intro: "The option is in the editor's first step. Turn it on, save, and test it before using it with customers.",
    items: [
      { t: "Open your agent", d: "Go to Conversations → AI agents and click your agent's card. If you don't have one yet, click “Create new agent”." },
      { t: "Check the handoff phrase", d: "In the “Identity” step, write in “Phrase when escalating to a human” what it will say when handing off the conversation, for example “Sure, I'll connect you with a rep in a moment”." },
      { t: "Turn on the option", d: "In the same step, check “Ask for name, phone, and email before handing off to a rep”." },
      { t: "Save", d: "Click “Save changes”. The tester answers with what's saved, so save before testing." },
      { t: "Test it", d: "Go to the “Test” step and write “I want to talk to a rep”. The agent should ask you for your details. On the next message, whether or not you share them, it should hand off the conversation." },
      { t: "Correct it if needed", d: "If an answer doesn't convince you, click “Correct this answer” and tell it what it should have said. What it learned stays in the “Improvements” step." },
    ],
  },
  faq: [
    {
      q: "Does the AI agent answer on WhatsApp 24 hours a day?",
      a: "Yes. The agent replies by chat at any hour. What respects your business hours is when a rep can call: outside your hours, it offers the next available slot instead of promising an immediate call.",
    },
    {
      q: "What happens if the agent doesn't know the answer?",
      a: "It doesn't make it up. It says a rep will confirm that and offers to hand off the conversation. If it mentions a price that isn't in your catalog or its training, the message doesn't go out: it's rewritten or the conversation goes to your team.",
    },
    {
      q: "Does the person know they're talking to an AI?",
      a: "You decide. If you check “Can say it's a digital assistant”, when asked it replies that it's your business's digital assistant and offers to connect them with someone on the team. If you don't check it, it neither confirms nor denies it.",
    },
    {
      q: "Can I review what the agent said?",
      a: "Yes. Everything stays in Conversations with WhatsApp's marks (sent, delivered, and read), and anything rejected shows in red with the reason. Next to each agent message there's “Correct”.",
    },
    {
      q: "Does the agent ask for the phone number on WhatsApp?",
      a: "No. On WhatsApp it already has the number. It only asks for what's missing, name and email, and hands off the conversation on the next message even if they don't share them.",
    },
    {
      q: "Can I test the agent without using real messages?",
      a: "Yes. In the “Test” step you chat with it as a customer. It doesn't create leads, and those tests don't count toward the agent's usage. With “Share with your client”, someone else can test it without an account.",
    },
  ],
  relacionados: ["whatsapp-en-tiempo-real", "campos-personalizados-crm", "anuncios-clic-a-whatsapp-meta-ads"],
  enlaces: [
    { url: "/agente-ia/", texto: "WhatsApp AI agent: the complete guide" },
    { url: "/crm/whatsapp/", texto: "CRM with WhatsApp" },
    { url: "/crm/", texto: "CRM for small businesses in Latin America" },
    { url: "/crm/pipeline-de-ventas/", texto: "Sales pipeline" },
  ],
};
