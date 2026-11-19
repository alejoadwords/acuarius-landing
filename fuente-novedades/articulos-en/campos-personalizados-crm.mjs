// Versión en inglés de fuente-novedades/articulos/campos-personalizados-crm.mjs.
// Mismas afirmaciones que el original; los href y relacionados quedan en español
// porque el generador los cambia por su URL en inglés.
export const ARTICULO = {
  slug: "crm-custom-fields",
  kw: "CRM custom fields",
  title: "CRM Custom Fields: A Practical Guide",
  description: "Create CRM custom fields to store a budget, health insurer, or event date, and use them in filters, automations, campaigns, and your AI agent.",
  h1: "CRM custom fields: your business data on every contact record",
  modulo: "CRM",
  publicado: "2026-11-02",
  edicion: 1,
  resumen: "Create the data your business needs (budget, health insurer, event date) and use it to filter, automate, segment campaigns, and personalize messages.",
  respuesta: "Custom fields in the Acuarius CRM are the contact details that don't come built in: budget, property type, EPS (health insurer), or event date. You create them in CRM → Custom fields with their type. They get filled in on the record, in forms, on import, or by your WhatsApp agent, and you use them to filter, automate, segment campaigns, and personalize messages.",
  video: {
    id: "Nz5Xlou3WG8", titulo: "Custom fields in Acuarius: data that decides, segments, and fills itself in", subido: "2026-11-02", segundos: 74, propio: true,
    capitulos: [
      { s: 6, t: "What custom fields are" },
      { s: 17, t: "Create the field" },
      { s: 33, t: "The WhatsApp agent fills it in" },
      { s: 44, t: "The field on the record" },
      { s: 51, t: "Condition in an automation" },
      { s: 61, t: "Campaign by segment" },
    ],
  },
  ilustracion: "campos",
  secciones: [
    {
      h2: "What are custom fields in a CRM?",
      html: "<p>A custom field is a piece of data specific to your business that you store on each contact record, with a name and a type you define. Acuarius comes with name, company, email, phone, stage, source, value, and rep built in. Everything else, you create.</p>" +
        "<p>A real estate agency needs to know the budget and the property type. A clinic, the EPS (health insurer) and the procedure. An events company, the event date. Without fields, that data ends up in a note, in a chat, or in the rep's head. With fields, it sits in the <b>Additional information</b> box on the record, organized and ready to use.</p>",
    },
    {
      h2: "Why aren't tags enough?",
      html: "<p>Tags tell you whether a contact belongs to a group; fields store a value. “Interested in an apartment” works fine as a tag. “Budget: 350,000,000” doesn't: you can't create a tag for every amount or ask “budget greater than or equal to 300 million” with tags.</p>" +
        "<p>Use them together. The tag marks the group (“Fair 2026”, “Repeat customer”). The field stores the data that changes from one contact to the next: an amount, a date, an option from a list.</p>",
    },
    {
      h2: "Field types and when to use each one",
      html: "<p>Every field has a type, and the type decides how it's filled in and how it's compared. There are eleven:</p>" +
        "<table><thead><tr><th>Type</th><th>Use it for</th></tr></thead><tbody>" +
        "<tr><td><b>Text</b> and <b>Paragraph</b></td><td>One line (neighborhood) or long text (customer needs).</td></tr>" +
        "<tr><td><b>Number</b></td><td>National ID number, number of people, square meters.</td></tr>" +
        "<tr><td><b>Currency</b></td><td>Budget or income; shown with $.</td></tr>" +
        "<tr><td><b>Date</b></td><td>Event date, surgery date, or expiration date.</td></tr>" +
        "<tr><td><b>Email</b>, <b>Phone</b>, and <b>Link</b></td><td>A second email, another contact number, a web address.</td></tr>" +
        "<tr><td><b>List</b></td><td>One option among several: Apartment, House, Retail space, Lot.</td></tr>" +
        "<tr><td><b>Multiple choice</b></td><td>Several options at once: Pool, Parking, Gym.</td></tr>" +
        "<tr><td><b>Yes / No</b></td><td>A checkbox: is the loan pre-approved?</td></tr>" +
        "</tbody></table>" +
        "<p>Each field can have a <b>Default value</b> (every new contact starts with it) and can be marked as required when someone creates or edits a contact by hand.</p>",
    },
    {
      h2: "Where do custom fields get filled in?",
      html: "<p>Fields get filled in from five places, and the data always ends up on the same record:</p>" +
        "<ul>" +
        "<li><b>On the contact record</b>, in the <b>Additional information</b> box, with one click.</li>" +
        "<li><b>In your forms</b>: each question can save its answer to a field, and the field decides how it's asked (its options, its type).</li>" +
        "<li><b>In the Bookings form</b>: with “Also save to the contact”, the answer lands on the record.</li>" +
        "<li><b>In your website connector</b>: you map each piece of data from your site's form to a field.</li>" +
        "<li><b>When importing from Excel</b>: a column with the same name as the field is recognized automatically.</li>" +
        "</ul>" +
        "<p>If loose data was already coming in from forms or integrations, the manager shows it under <b>Data already reaching your contacts</b>. Click <b>Add</b> and the existing values appear, with a name, on the record.</p>" +
        "<p>In the contact list, each field works as a filter (in <b>Filters</b> › <b>Custom field</b>) and as a column (in <b>Columns</b>).</p>",
    },
    {
      h2: "Using fields in automations, campaigns, and messages",
      html: "<h3>Automations that decide based on a value</h3>" +
        "<p>The <b>Condition</b> and <b>Yes / No branches</b> steps can check any field. The operators change with the type: for number, currency, and date you get “is”, “is not”, “≥”, and “≤” (for dates, “is on or after” and “is on or before”); for multiple choice, “includes” and “doesn't include”; for text, “contains”. All of them support “has a value” and “is empty”. Examples: “Budget ≥ 100,000,000”, “Interests includes Pool”, “National ID is empty”.</p>" +
        "<h3>Segmented campaigns</h3>" +
        "<p>In a campaign, go to <b>By filters</b> › <b>Custom field</b> and choose the field, the operator, and the value. With <b>Save this segment as a list</b> you can reuse it later from <b>Saved list</b>.</p>" +
        "<h3>Variables in emails and WhatsApp</h3>" +
        "<p>Every field is a variable: “Budget” is written {{budget}}. Below each message editor there's a button per field that inserts it, so you don't mistype it. If the value might be empty, use fallback text: {{budget|to be confirmed}}. The variable doesn't change even if you rename the field.</p>",
    },
    {
      h2: "Can the AI agent fill in fields on its own?",
      html: "<p>Yes. Your WhatsApp agent writes a field on the record when the person says it in the chat. You turn it on in the field itself, not in the agent: check <b>Filled in by the WhatsApp agent</b> and write what it has to find out, for example “how much they want to invest, in pesos”.</p>" +
        "<p>The agent only records what the person said, without making things up or inferring. When it fits the conversation, it asks, one question at a time and without interrogating. It never overwrites data that's already on the record, so whatever someone on your team wrote stays. In the agent's tester you can see which fields it would fill in with each test conversation.</p>",
    },
    {
      h2: "Examples by type of business",
      html: "<ul>" +
        "<li><b>Real estate agency</b>: Budget (currency), Property type (list), Area of interest (text), Pre-approved loan (Yes / No). A branch sends anyone with a budget ≥ 300,000,000 to the premium projects rep.</li>" +
        "<li><b>Clinic</b>: EPS (list), Procedure of interest (list), Assessment date (date). A campaign writes only to people who chose “Blepharoplasty”.</li>" +
        "<li><b>Events</b>: Event date (date), Number of guests (number), Event type (list). An “Event date is on or after” condition filters what's coming up this quarter.</li>" +
        "<li><b>Education</b>: Program (list), Schedule (list), Scholarship (Yes / No). The welcome email says “Hi {{nombre}}, we'll see you in {{program}}”.</li>" +
        "</ul>",
    },
    {
      h2: "Best practices and common mistakes",
      html: "<ul>" +
        "<li><b>Few fields, the ones you use.</b> If nobody filters or automates with a piece of data, you don't need it. Ten well-filled fields are worth more than forty empty ones.</li>" +
        "<li><b>Clear names.</b> “Budget”, not “Bdgt”. The name defines the variable.</li>" +
        "<li><b>Closed lists when you can.</b> “Apt”, “apartment”, and “Apartment” are three different values in free text; in a list, just one.</li>" +
        "<li><b>Archive, don't delete.</b> Archiving hides the field and keeps the data; when you restore it, the data shows up again. Before archiving, check whether a template or a form uses it.</li>" +
        "<li><b>Be careful changing the type.</b> If contacts already have data in it, the type can't be changed: pick it carefully from the start.</li>" +
        "</ul>",
    },
  ],
  pasos: {
    h2: "How to create a custom field and use it in an automation",
    intro: "Only the account admin can create or change fields. In this example, a real estate agency alerts the team when a lead with a high budget comes in.",
    items: [
      { t: "Open the manager", d: "Go to CRM → Custom fields. You can also open it with the “Fields” button in the “Additional information” box on a contact record." },
      { t: "Create the field", d: "Click “Create field”, type “Budget” in “Field name”, and choose the “Currency” type. Below it you'll see its variable: {{budget}}." },
      { t: "Decide who fills it in", d: "If you want your agent to record it, check “Filled in by the WhatsApp agent” and write what to find out. Click “Create field”." },
      { t: "Create the automation", d: "Go to Marketing → Automations and click “New automation”. Choose the “When a lead is created” trigger." },
      { t: "Add the condition", d: "Add the “Condition” step, choose “Field: Budget”, the “≥” operator, and the value 300,000,000. If it isn't met, the flow stops for that lead." },
      { t: "Set the action", d: "Below it, add “Notify me” or “Create task” for the rep. If you want a different path for each case, use “Yes / No branches”. Click “Create automation”." },
    ],
  },
  faq: [
    { q: "What's the difference between a tag and a custom field in a CRM?", a: "A tag marks that a contact belongs to a group. A field stores a value specific to each contact, like an amount, a date, or an option, and lets you compare: “Budget ≥ 100,000,000” or “Event date is on or after”." },
    { q: "Can I use a custom field in a WhatsApp message or an email?", a: "Yes. Every field is a variable, for example {{budget}}. If it might be empty, write {{budget|to be confirmed}} and the message will say “to be confirmed” instead of leaving a blank." },
    { q: "Can the WhatsApp agent fill in fields on its own?", a: "Yes, if you turn on “Filled in by the WhatsApp agent” in that field and tell it what to find out. It only records what the person said and never replaces data that's already on the record." },
    { q: "What happens to the data if I archive a field?", a: "It's kept. The field no longer shows on the record, in forms, or as a variable, and if you restore it the data appears again." },
    { q: "Can I filter the contact list by a custom field?", a: "Yes. In Filters › Custom field you pick the field and the value. You can also show it as a column from Columns." },
    { q: "How do I segment a campaign by a custom field?", a: "When building the audience, go to “By filters” › “Custom field”, choose field, operator, and value, and save the result with “Save this segment as a list” to reuse it." },
    { q: "Can I fill in custom fields when importing contacts from Excel?", a: "Yes. If a column in your file has the same name as the field, it's recognized automatically. If not, you map it by hand during the import." },
  ],
  relacionados: ["productos-en-el-crm", "agente-ia-whatsapp-datos-de-contacto", "recompra-y-encuesta-nps"],
  enlaces: [
    { url: "/crm/", texto: "AI CRM for small businesses" },
    { url: "/crm/inmobiliarias/", texto: "CRM for real estate agencies" },
    { url: "/crm/clinicas/", texto: "CRM for clinics" },
  ],
};
