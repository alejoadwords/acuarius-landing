// Versión en inglés de fuente-novedades/ediciones.mjs: misma forma y orden.
// Los slugs de `articulos` se quedan en español; el generador los traduce.

export const EDICIONES = [
  {
    slug: 'edition-01',
    numero: 1,
    desde: '2026-10-19',
    hasta: '2026-11-01',
    publicada: '2026-11-02',
    periodo: 'October 19 to November 1, 2026',
    title: 'What\'s new in Acuarius: edition 01, October 2026',
    description: 'What\'s new in Acuarius from October 19 to November 1, 2026: products in the CRM, custom fields, real-time WhatsApp and more.',
    h1: 'Products in the CRM, real-time WhatsApp and scheduling links',
    sub: 'Over these two weeks your catalog moved into the CRM, the inbox started working in real time, and your customers can now book time with you without back-and-forth messages. Each feature has its own article with the full guide and a video.',
    resumen: 'Product catalog inside the CRM, fields built your way, real-time WhatsApp and meetings that book themselves.',
    articulos: [
      'productos-en-el-crm',
      'campos-personalizados-crm',
      'whatsapp-en-tiempo-real',
      'agente-ia-whatsapp-datos-de-contacto',
      'enlace-para-agendar-reuniones',
      'recompra-y-encuesta-nps',
      'anuncios-clic-a-whatsapp-meta-ads',
    ],
    mas: [
      {
        "modulo": "Mobile",
        "titulo": "Voice notes, photos and PDFs in the mobile version",
        "texto": "You can play voice notes and see the photos, videos and documents people send you. If you installed Acuarius on your phone, it opens straight to the mobile version."
      },
      {
        "modulo": "Mobile",
        "titulo": "Sales processes from your phone",
        "texto": "You pick the process and stage when you create a contact, and you move a lead to another process from its record."
      },
      {
        "modulo": "Marketing",
        "titulo": "Sources: how much each one brings in",
        "texto": "Each form, Meta page or webhook shows its leads from the last 30 days, and any source that stops bringing leads moves to the top marked \"No leads.\""
      },
      {
        "modulo": "Marketing",
        "titulo": "Forms with a data policy",
        "texto": "A required checkbox to accept your data processing policy, and the date it was accepted on the contact record. Plus, you can duplicate forms in one click."
      },
      {
        "modulo": "Campaigns",
        "titulo": "Know who didn't get your campaign",
        "texto": "If WhatsApp doesn't deliver a message, it counts as failed with its reason. And campaigns to thousands of contacts go out in batches without getting stuck."
      },
      {
        "modulo": "Automations",
        "titulo": "Templates and wait times your way",
        "texto": "The \"Send WhatsApp\" step uses your approved templates, and \"Wait\" accepts exact minutes, hours or days."
      },
      {
        "modulo": "Bookings",
        "titulo": "A booking form built your way",
        "texto": "Ask for whatever details you need when someone books, with a terms checkbox and dropdown lists of people. And you can duplicate services."
      },
      {
        "modulo": "CRM",
        "titulo": "A reference photo on every lead",
        "texto": "Upload the product they asked for or the design they want: it shows up as the cover of their card on the board."
      },
      {
        "modulo": "Team",
        "titulo": "Who gets leads from the rotation",
        "texto": "Turn off the rotation for people who only review. And every change of owner is logged in the lead's history."
      },
      {
        "modulo": "Analytics",
        "titulo": "The Marketing report counts every channel",
        "texto": "WhatsApp and SMS sit alongside email: how many messages went out and how many weren't delivered."
      },
      {
        "modulo": "SEO",
        "titulo": "Traffic report with dates and devices",
        "texto": "Filter by 7, 30 or 90 days and see visits by phone, computer or tablet and by age, also in the link you share."
      },
      {
        "modulo": "Home",
        "titulo": "Each module with its own screen",
        "texto": "CRM, Marketing, Conversations and Analytics show everything they include as cards, with direct shortcuts."
      }
    ],
    arreglos: [
      "Voice notes play in Safari and no longer cut off when another message arrives.",
      "WhatsApp campaigns with a template no longer ask for a separate message, and the image shows in full in the preview.",
      "\"One by one\" lists all your contacts, including those imported without a process.",
      "\"Open another opportunity\" works in the same process the person is already in.",
      "The WhatsApp ad reaches the contact record even if the contact already existed.",
      "AI proposals use your business details instead of guessing your industry.",
      "Phone notifications tell you on how many devices you have them turned on."
    ],
  },
];
