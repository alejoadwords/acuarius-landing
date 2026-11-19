// Versión en inglés de fuente-novedades/articulos/whatsapp-en-tiempo-real.mjs.
// Mismas afirmaciones que el original; los href y relacionados quedan en español
// porque el generador los cambia por su URL en inglés.
export const ARTICULO = {
  slug: "real-time-whatsapp",
  kw: "WhatsApp for sales teams",
  title: "WhatsApp for Sales Teams: One Live Inbox",
  description: "WhatsApp for sales teams: your whole team works the same number from a live inbox, with ✓✓ receipts, search, templates, and one step to the pipeline.",
  h1: "WhatsApp for sales teams: one number, the whole inbox live",
  modulo: "Conversations",
  publicado: "2026-11-02",
  edicion: 1,
  resumen: "Your team handles the company WhatsApp from Acuarius: messages show up on their own, you see if they were read, and you move each chat to the pipeline under your name.",
  respuesta: "In Acuarius, WhatsApp for sales teams is a shared inbox: your WhatsApp Business number connects to Conversations and your whole team replies from there. Messages appear live, without reloading, with ✓ sent, ✓✓ delivered, and blue ✓✓ read. You search chats by name or phone, discard spam, reply with templates after 24 hours, and move each conversation to the pipeline under your name.",
  video: { id: "LW-DJTNFNak", titulo: "The inbox: all your conversations in one place", subido: "2026-10-21", segundos: 131, propio: false },
  ilustracion: "whatsapp",
  secciones: [
    {
      h2: "Why does running WhatsApp from a single phone slow down a sales team?",
      html:
        "<p>When the company WhatsApp lives on a single phone, only one person can reply and the rest of the team doesn't know what was said. If that person is out, customers wait.</p>" +
        "<p>On top of that, nobody knows if the customer read the quote, a chat from three weeks ago gets lost among hundreds, and the sale that closes in the chat never reaches the CRM.</p>",
    },
    {
      h2: "What changes with a shared real-time inbox?",
      html:
        "<p>With the Conversations inbox, your whole team sees the same company WhatsApp and new messages appear on their own, without reloading the page.</p>" +
        "<ul>" +
        "<li><b>Alerts wherever you are.</b> If you're in another part of Acuarius, you get a pop-up showing who wrote, with a sound. With the tab in the background, the title shows how many new messages you have. Conversations handled by your AI agent update without a sound.</li>" +
        "<li><b>Internal notes.</b> Leave a note in the conversation that the customer can't see, so your teammate knows where things stand.</li>" +
        "<li><b>Files like on your phone.</b> Paste a screenshot with Ctrl+V (Cmd+V on Mac), drag in a file, or send documents up to 50 MB. You can also record voice notes.</li>" +
        "<li><b>On mobile too.</b> In the mobile version you can listen to the voice notes people send you, see their photos and videos, and open their PDFs.</li>" +
        "</ul>",
    },
    {
      h2: "How do I know if the customer got and read my message?",
      html:
        "<p>Every message you send from the inbox shows its status, just like in WhatsApp: ✓ sent, ✓✓ delivered, and blue ✓✓ when the customer read it.</p>" +
        "<p>Your AI agent's replies carry the same marks. If WhatsApp can't deliver a message, you see it in red underneath, with the reason.</p>",
    },
    {
      h2: "How do I find and organize conversations?",
      html:
        "<p>Above the filters there's a search box: type the contact's name or part of their number and you'll find their chat even if it's weeks old.</p>" +
        "<ul>" +
        "<li><b>Search that ignores accents and spaces.</b> “jose” finds José, and you can type the phone number with or without spaces.</li>" +
        "<li><b>Unread at a glance.</b> A red badge at the top of the inbox tells you how many conversations you haven't read. Click it to see only those. The “AI agent”, “Manual and escalated”, and “Resolved” filters also show their unread count.</li>" +
        "<li><b>Discard.</b> With “Discard” you choose “Move to trash” (deleted after 30 days; if the person writes again, it comes back) or “Mark as spam” (anything they write afterward won't alert you, the agent won't reply, and no lead is created). Both can be undone from their filter with “Restore”.</li>" +
        "</ul>",
    },
    {
      h2: "What is the WhatsApp 24-hour window?",
      html:
        "<p>The 24-hour window is a Meta rule, not an Acuarius one: every time a customer writes to you, you have 24 hours to reply with free-form messages. If they write again, the clock restarts.</p>" +
        "<p>Once 24 hours have passed since their last message, WhatsApp only lets you write to them with a <b>Meta-approved template</b>. If you send a free-form message, Meta rejects it. The same goes for an imported chat with someone who hasn't written to your number yet.</p>" +
        "<p>Acuarius tells you in the conversation, with the “Send template” button: you pick an approved template, Acuarius fills in the contact's name, and shows you how it will look when it arrives. When the customer replies, you can write freely again.</p>" +
        "<p>You create templates and submit them for review in Marketing → Templates → WhatsApp, where you see whether they're approved, under review, or rejected.</p>",
    },
    {
      h2: "Can I message a customer first on WhatsApp?",
      html:
        "<p>Yes. Every contact record has “Start WhatsApp”: you pick a Meta-approved template, fill in the name, and it goes out from your company number, even if that person has never written to you.</p>" +
        "<p>You need your WhatsApp Business number connected and at least one approved template. The conversation stays in the inbox, handled by whoever started it. If you have several numbers, you choose which one it goes out from.</p>",
    },
    {
      h2: "How do the away message and business hours work?",
      html:
        "<p>The away message automatically replies to anyone who writes outside your business hours, so they know you got it and when you'll get back to them.</p>" +
        "<ul>" +
        "<li>You set your hours per day, in Colombia time. A day left unchecked counts as closed.</li>" +
        "<li>In the message you can use {nombre} (the contact's name) and {horario} (your hours written out in words).</li>" +
        "<li>You check “Colombian holidays count as closed” and choose how often it repeats to the same contact: 4, 8, 12, or 24 hours.</li>" +
        "<li>It only goes out when your team is handling the conversation. If an AI agent handles that number, the agent replies at any hour.</li>" +
        "</ul>" +
        "<p>A common mistake is saving it turned off; that's why Acuarius asks if you want to “Turn on and save”.</p>",
    },
    {
      h2: "What happens to my history and to sales that close in the chat?",
      html:
        "<p>If you move your number from the WhatsApp app to Acuarius, your earlier conversations aren't lost: you bring them over with “Import WhatsApp chats”, at the bottom of the inbox.</p>" +
        "<p>Each chat lands in its contact's conversation, with its original date. Only the text is imported: photos, audio, and documents aren't.</p>" +
        "<p>From chat to CRM is a single step: “Move to pipeline”. You choose which process it goes into and at what stage, and the lead is assigned to you, not to whoever is next in the rotation. If the sale started and ended in the same conversation, you choose the won stage and record the value, currency, reason, and date.</p>" +
        "<h3>Examples by type of business</h3>" +
        "<ul>" +
        "<li><b>Real estate agency.</b> At 9:40 p.m. an inquiry comes in about a COP 420,000,000 apartment. The away message replies; in the morning, Camila finds it among the unread chats and moves it to the pipeline.</li>" +
        "<li><b>Clinic.</b> A patient asked about a treatment three days ago and never wrote back. The receptionist sends a follow-up template.</li>" +
        "<li><b>Store.</b> Andrés sends the 30 MB PDF catalog and sees the blue ✓✓: he knows the customer opened it before he calls.</li>" +
        "<li><b>Restaurant.</b> On a Sunday holiday the place is closed; anyone who writes gets the business hours and nobody is left without a reply.</li>" +
        "<li><b>Services.</b> An agency closes a COP 1,800,000 service in the chat and records it as won without leaving the conversation.</li>" +
        "</ul>",
    },
  ],
  pasos: {
    h2: "How to connect your number and handle your first conversation",
    intro: "Today your WhatsApp Business number connects to Acuarius through a Meta app owned by your business. You do it once and Acuarius sets up the webhook.",
    items: [
      { t: "Set up your Meta app", d: "On developers.facebook.com, create a Business-type app, add WhatsApp to it, and verify your number. Create a system user, add a payment method to the WhatsApp account, and publish the app." },
      { t: "Open the WhatsApp channel", d: "In Acuarius, go to Conversations → Channels → “Connect a channel” and choose WhatsApp. In the “Connect WhatsApp Business” window, open “Connect with your own Meta app”." },
      { t: "Copy the details", d: "Paste the app ID, the app secret, the phone number ID, the WhatsApp Business account ID, and the permanent token. Click “Connect with my app”." },
      { t: "Set up the away message", d: "In Conversations → Channels → “My channels”, click “Away” on your number, set your hours, write the message, and save it turned on." },
      { t: "Handle your first conversation", d: "Go to Conversations, open the chat, and reply. The ✓✓ tells you if it arrived and was read." },
      { t: "Move it to the pipeline", d: "Click “Move to pipeline” and choose the process and the stage. The lead is assigned to you." },
    ],
  },
  faq: [
    {
      q: "Can I use the WhatsApp number I already have?",
      a: "Yes, as long as you add and verify it as a WhatsApp Business number in your business's Meta app. If you currently answer it from the WhatsApp app on your phone, your earlier chats don't come over automatically: export them and upload them with “Import WhatsApp chats”.",
    },
    {
      q: "What happens if the customer doesn't reply within 24 hours?",
      a: "Under Meta's rules, once 24 hours have passed since their last message you can only write to them with an approved template. “Send template” appears in the conversation. When the customer replies, a new 24-hour window opens for free-form messages.",
    },
    {
      q: "Can several people handle the same WhatsApp at once?",
      a: "Yes. Your whole team sees the same inbox in real time. Whoever moves a chat to the pipeline becomes the lead owner, and internal notes help you coordinate without the customer seeing them.",
    },
    {
      q: "What's the difference between a template and a quick reply?",
      a: "A template is approved by Meta and is used to write after 24 hours or to someone who has never written to you. A quick reply is saved text to answer faster; it doesn't go through Meta and only works within the 24 hours.",
    },
    {
      q: "What do I do with spam or useless chats?",
      a: "Click “Discard” and choose “Move to trash” or “Mark as spam”. Both can be undone from their filter.",
    },
    {
      q: "Does the away message take holidays into account?",
      a: "Yes, if you check “Colombian holidays count as closed”. Hours are set per day, in Colombia time, and you choose how often the message repeats to the same contact.",
    },
  ],
  relacionados: ["agente-ia-whatsapp-datos-de-contacto", "anuncios-clic-a-whatsapp-meta-ads", "productos-en-el-crm"],
  enlaces: [
    { url: "/crm/whatsapp/", texto: "CRM with WhatsApp" },
    { url: "/mejores-crm-con-whatsapp/", texto: "The best CRMs with WhatsApp" },
  ],
};
