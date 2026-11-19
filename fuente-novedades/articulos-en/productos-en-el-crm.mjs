// Versión en inglés de fuente-novedades/articulos/productos-en-el-crm.mjs.
// Mismas afirmaciones que el original; los href y relacionados quedan en español
// porque el generador los cambia por su URL en inglés.
export const ARTICULO = {
  slug: "products-in-the-crm",
  kw: "product catalog in the CRM",
  title: "Product Catalog in the CRM: Quote and Sell Without Excel",
  description: "Build your product catalog in the CRM, add products to each deal, and the deal value is calculated for you. Sell them through chat, proposals, and campaigns.",
  h1: "Product catalog in the CRM: from quote to sale",
  modulo: "CRM",
  publicado: "2026-11-02",
  edicion: 1,
  resumen: "Upload what you sell to CRM → Products and use it in deals, proposals, chats, campaigns, and forms. The deal value is calculated for you.",
  respuesta: "Having your product catalog in the CRM means what you sell, with its price, VAT, photo, and payment link, lives in the same place as your customers. In Acuarius you build it in CRM → Products, by hand or from a CSV file. When you add products to a deal, its value is calculated automatically, and later you see in Analytics what sells most.",
  video: {
    id: "nRNwbMqukqY", titulo: "Products in the Acuarius CRM: your catalog in deals, the inbox, and proposals", subido: "2026-11-02", segundos: 82, propio: true,
    capitulos: [
      { s: 0, t: "Introduction" },
      { s: 7, t: "Products in the CRM" },
      { s: 18, t: "Create a product" },
      { s: 33, t: "Import from Excel or Google Sheets (CSV)" },
      { s: 42, t: "Products in the deal" },
      { s: 57, t: "Send a product from the inbox" },
      { s: 69, t: "Proposals with a product table" },
      { s: 77, t: "Available now" },
    ],
  },
  ilustracion: "productos",
  secciones: [
    {
      h2: "What is a product catalog in a CRM?",
      html:
        "<p>A product catalog in a CRM is the list of what you sell (products or services) stored next to your contacts and deals, so you can quote and sell without leaving the tool. In Acuarius it lives in <b>CRM → Products</b>, next to Pipeline and Contacts.</p>" +
        "<p>It solves three problems almost every small business runs into:</p>" +
        "<ul>" +
        "<li><b>Quoting by hand.</b> The rep looks up the price in an old spreadsheet or asks the boss. With the catalog, the current price is one click away.</li>" +
        "<li><b>Made-up deal values.</b> If every rep types “2 million” into the deal by gut feel, your pipeline isn't telling the truth. With products, the value is the sum of what was quoted.</li>" +
        "<li><b>Not knowing what sells.</b> You know how much you sold, but not what. With products on every won deal, the report shows it by units and revenue.</li>" +
        "</ul>" +
        "<p>There is one catalog per account, and the whole team sees it because they need it to quote.</p>",
    },
    {
      h2: "How do you build the catalog?",
      html:
        "<p>You build the catalog in three ways: by hand, by importing a CSV file, or by letting it come in automatically from your online store or your Google sheet.</p>" +
        "<h3>By hand</h3>" +
        "<p>Use the <b>New product</b> button. Only the name is required. You can also add price, currency, IVA (VAT) %, reference or SKU (generated for you if you leave it blank), category, units available, description, up to six photos, payment link, product page, and cost. If you check “It's a service (no inventory)”, units aren't counted.</p>" +
        "<h3>From a file</h3>" +
        "<p>With <b>Import file</b> you upload a CSV. If your list is in Excel or Google Sheets, save it as CSV (in Excel: File → Save As → “CSV UTF-8”); an .xlsx file isn't accepted. The first row holds the headers and only “Name” is required. Reference, Category, Price, Currency, VAT, Cost, Units, Description, Photo, Link, and Payment link are read too. You can get the template with <b>Download template</b>.</p>" +
        "<p>If a product already exists (same reference, or same name when there's no reference), it gets updated. Nothing is deleted. And “50.000” is read as fifty thousand, not fifty.</p>" +
        "<h3>From your store or your sheet</h3>" +
        "<p>If you connected Shopify, WooCommerce, or VTEX, or a Google product sheet, those products show up in the same catalog with their source. You edit them there, because the next sync would undo whatever you change here. What you can add to them from Acuarius is their payment link.</p>",
    },
    {
      h2: "How is a deal value calculated with products?",
      html:
        "<p>The deal value is the sum of its products: price times quantity, minus each line's discount, before VAT. It recalculates every time you add, change, or remove a product, and you see it on the record, on the board, and in reports.</p>" +
        "<p>On the deal record there's a <b>Products</b> box with an <b>+ Add</b> button. Tap a line to change quantity, unit price, and discount %. Changing the price there only affects that deal, not the catalog. The box shows the total before VAT, the VAT, and the total with VAT.</p>" +
        "<p>If you remove all products, the value stays as it was and you can type it in by hand. And if the customer asks for something outside the catalog, use “Something not in the catalog” in the same picker: you type a name and price, and it counts just the same.</p>",
    },
    {
      h2: "How do you sell products from the chat?",
      html:
        "<p>In the inbox, the product button fills the reply box with the name, the price, and a “Buy it here” link, and attaches the photo. It doesn't send anything on its own: you review it, add whatever you want, and hit Send.</p>" +
        "<p>If the product has no payment link, its page link goes instead.</p>" +
        "<p>Your AI agent also checks the same catalog when it replies. It can't see archived items, it doesn't offer sold-out ones, and when someone wants to buy, it shares the product's payment link.</p>",
    },
    {
      h2: "How do proposals with products work?",
      html:
        "<p>A proposal created from a lead already includes the products from its deal. You can add more from the catalog with <b>Add product</b> and adjust quantity, price, and discount. The total with VAT is calculated for you.</p>" +
        "<p>Your customer sees a table with subtotal, VAT, and total, and can download it as a PDF. If the proposal gets paid, the sale counts in Sales by product.</p>",
    },
    {
      h2: "Payment links and online stores",
      html:
        "<p>Each product can carry its payment link from Wompi, Bold, MercadoPago, or whatever payment gateway you use. It must start with https://. That link is what goes in the inbox, in your emails, in WhatsApp campaigns, and what your AI agent shares.</p>" +
        "<p>If you have Shopify, WooCommerce, or VTEX connected, single-variant products come with a link that opens checkout with the product already in the cart. If you add your own payment link, yours takes priority.</p>" +
        "<p>On top of that, every paid order in your store adds its products to the customer's deal, so it counts in your reports, campaigns, and automations.</p>",
    },
    {
      h2: "Campaigns, forms, and automations with products",
      html:
        "<ul>" +
        "<li><b>WhatsApp campaigns.</b> Pick a product and its name, price, and link fill the blanks in your template. If the template has an image, the product photo goes in.</li>" +
        "<li><b>Segments.</b> In the audience, pick a product and “Bought it” or “Showed interest (it's on one of their deals)”.</li>" +
        "<li><b>Emails.</b> The editor has a “Product” block: drag it in, pick from the catalog, and you get its card with photo, name, price, and button.</li>" +
        "<li><b>Forms.</b> The “Product of interest” field asks “What are you interested in?”. The choice goes into the deal with its price.</li>" +
        "<li><b>Automations.</b> The “When a product is added to their deal” trigger runs only once per lead. And conditions check whether the contact has it, doesn't have it, bought it, or hasn't bought it.</li>" +
        "</ul>",
    },
    {
      h2: "Measuring sales by product, with examples by business",
      html:
        "<p>In <b>Analytics → Sales</b> you'll find “Sales by product”: units, sales, revenue before VAT, and each product's share of the total, based on the deals won in the period. It also appears in the PDF you download and in the link you share.</p>" +
        "<table>" +
        "<tr><th>Business</th><th>How it uses it</th></tr>" +
        "<tr><td>Real estate agency</td><td>Appraisals or rental management as services, so the whole team quotes the same fees.</td></tr>" +
        "<tr><td>Clinic</td><td>An assessment or a package of sessions with its VAT. The proposal goes out with subtotal, VAT, and total.</td></tr>" +
        "<tr><td>Store</td><td>Catalog from Shopify. The rep sends the COP 45,000 T-shirt with photo and link right from the chat.</td></tr>" +
        "<tr><td>Restaurant</td><td>Event menu: 40 lunches at COP 28,000 with a 10% discount give a deal value of COP 1,008,000.</td></tr>" +
        "<tr><td>Services</td><td>Monthly plans and an automation that writes to anyone who added the plan but hasn't bought it.</td></tr>" +
        "</table>" +
        "<h3>Common mistakes</h3>" +
        "<ul>" +
        "<li>Uploading the .xlsx directly: save it as CSV first.</li>" +
        "<li>Deleting something you stopped selling for a while: <b>Archive</b> it instead, and you get it back in “View archived”.</li>" +
        "<li>Editing a product from your store in Acuarius: change it in the store.</li>" +
        "<li>Leaving the description empty: your AI agent uses it when it replies.</li>" +
        "</ul>",
    },
  ],
  pasos: {
    h2: "How to build your catalog and use it in a deal, step by step",
    intro: "Here's how to get your first product into a deal.",
    items: [
      { t: "Open Products", d: "Go to CRM and choose the Products tab." },
      { t: "Create or import", d: "Click “New product”, fill in name, price, currency, and VAT %, and click “Create product”. For many products, click “Import file”, get the template with “Download template”, and upload your list with “Choose .csv file”." },
      { t: "Add a payment link", d: "In the product, paste your payment gateway link into “Payment link (optional)”. It must start with https://." },
      { t: "Open the deal", d: "From the board, open the lead's record and find the “Products” box." },
      { t: "Add the product", d: "Click “+ Add”, search the catalog, and pick it. Tap the line to change quantity, unit price, or discount %, then click “Save”." },
      { t: "Check the value", d: "The deal value becomes the total before VAT. From the “Proposals” box, with “+ New”, you build the proposal with those same products." },
    ],
  },
  faq: [
    { q: "Can I import my products from Excel?", a: "Yes, but as CSV. Open your file in Excel or Google Sheets, save it as CSV (in Excel, “CSV UTF-8”), and upload it with “Import file”. An .xlsx file isn't accepted." },
    { q: "Does the deal value include VAT?", a: "No. The value is the sum of the products with their discounts and without VAT. The record and the proposal show the VAT and the total with VAT separately." },
    { q: "If I change a price in the catalog, do old deals change too?", a: "No. When you add a product to a deal, its name and price are copied. What was quoted or sold keeps the price from that moment." },
    { q: "Does the inbox product button send the message on its own?", a: "No. It fills the reply box with name, price, and the “Buy it here” link, and attaches the photo. You review it and hit Send." },
    { q: "Does my AI agent know the products?", a: "Yes. It checks the same catalog when it replies, doesn't offer archived or sold-out items, and shares the payment link when someone wants to buy." },
    { q: "Can a sales rep change catalog prices?", a: "Not with a Sales profile: they use the catalog in their deals, but prices are changed by whoever manages the account or runs marketing." },
  ],
  relacionados: ["campos-personalizados-crm", "recompra-y-encuesta-nps", "whatsapp-en-tiempo-real"],
  enlaces: [
    { url: "/crm/", texto: "AI CRM for small businesses" },
    { url: "/crm/pipeline-de-ventas/", texto: "Sales pipeline" },
  ],
};
