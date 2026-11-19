export const ARTICULO = {
  slug: 'click-to-whatsapp-meta-ads',
  kw: 'click to WhatsApp ads',
  title: 'Click to WhatsApp Ads: See Which Campaign Actually Sells',
  description: 'Connect your Meta click to WhatsApp ads to every conversation and sale in the CRM: campaign, ad set and ad on the record, and the sale sent back to Meta.',
  h1: 'Click to WhatsApp ads: from conversation to sale, campaign by campaign',
  modulo: 'Ads',
  publicado: '2026-11-02',
  edicion: 1,
  resumen: 'Every chat that comes from a Meta ad keeps its campaign, ad set and ad, lands on the right board, and its sale goes back to Meta.',
  respuesta: 'Click to WhatsApp ads are Meta ads (Facebook and Instagram) that open a chat with your business instead of a web page. Acuarius links each of those chats to its campaign, ad set and ad, sends them to the sales board you choose and shows you, campaign by campaign, how many conversations ended in a sale. It can also report those sales back to Meta.',
  video: { id: 'VrvLXCLwUX0', titulo: 'Connect your ad accounts to Acuarius: Google, Meta and LinkedIn', subido: '2026-08-05', segundos: 205, propio: false },
  ilustracion: 'pauta',
  secciones: [
    {
      h2: 'What are click to WhatsApp ads?',
      html: '<p>Click to WhatsApp ads are Meta ads whose button opens a WhatsApp conversation with your business, with a first message already written. The person does not fill out a form or visit your website: they message you.</p>' +
        '<p>They work in Latin America because that is how people buy: they ask about price and availability on WhatsApp before deciding. The contact arrives warm and with their phone number. The challenge is knowing which of those chats bought and which campaign brought them in.</p>',
    },
    {
      h2: 'Why are click to WhatsApp ads hard to measure?',
      html: '<p>Because Meta counts conversations, not sales. In Ads Manager you see how many conversations each campaign started, but the sale happens later, inside the chat, where Meta no longer looks.</p>' +
        '<p>The usual story: campaign A says 120 conversations, campaign B says 80, and the team closed 15 sales. Nobody knows which one each sale came from, and the budget goes up on the campaign with the most conversations, which is not always the one that sells the most.</p>' +
        '<p>On top of that, Meta only tells WhatsApp which ad the chat came from, not the campaign or the ad set. If nobody asks, the chat is labeled «whatsapp» and the trail is lost.</p>',
    },
    {
      h2: 'How does Acuarius link the ad to the conversation and the record?',
      html: '<p>When someone messages you from an ad, Acuarius takes the source ad and asks your Meta Ads account which campaign and ad set it belongs to. For that you need two things: your WhatsApp connected to Acuarius and your Meta Ads account connected in <b>Ad platforms</b>.</p>' +
        '<ul>' +
        '<li><b>In the conversation:</b> next to the channel you see «Ad:» with the campaign name. Hover over it to see the full path: campaign, ad set and ad.</li>' +
        '<li><b>On the lead record:</b> the campaign, ad set, ad and click ID are saved. This also happens if the contact already existed in your CRM or if you created it by hand.</li>' +
        '<li><b>In the AI agent:</b> if you use one, it joins the conversation knowing which ad the person saw, so it does not ask about what they already said when they clicked.</li>' +
        '</ul>' +
        '<p>If Meta does not respond in time, the message still comes in and the campaign is filled in later, when you open the inbox.</p>',
    },
    {
      h2: 'What is the difference between the Conv. and Chats columns?',
      html: '<p>In <b>Marketing → Ad platforms</b>, the campaign table is split in two: what the ad network says and what your CRM says. For click to WhatsApp campaigns, two columns are read together:</p>' +
        '<table><thead><tr><th>Column</th><th>What it counts</th><th>Where it comes from</th></tr></thead><tbody>' +
        '<tr><td><b>Conv.</b></td><td>Conversations started as reported by Meta, the same «Results» figure as in Ads Manager.</td><td>Meta</td></tr>' +
        '<tr><td><b>Chats</b></td><td>The chats from that ad that reached Acuarius, whether or not they moved to the pipeline.</td><td>Your CRM</td></tr>' +
        '</tbody></table>' +
        '<p>Next to them you still have Leads, Won, Revenue and Real CPL. A chat only becomes a lead if it moves to the pipeline or leaves its details, which is why Chats is usually higher than Leads.</p>' +
        '<h3>Why might Conv. and Chats not match?</h3>' +
        '<ul>' +
        '<li><b>You connected your WhatsApp partway through the period.</b> The screen tells you which date Chats counts from; use that same range in Meta.</li>' +
        '<li><b>You are looking at different ranges.</b> Acuarius counts days in Colombia time, like the ad account. Use exactly the same dates in Meta.</li>' +
        '<li><b>You do not have Meta Ads connected.</b> Without the ad account, Acuarius cannot tell which campaign each chat came from.</li>' +
        '</ul>' +
        '<p>Leads with no campaign data are shown separately as «No campaign identified».</p>',
    },
    {
      h2: 'How do you send each campaign to its own board?',
      html: '<p>If you have more than one sales process, each campaign can land in its own. When you click «Move to pipeline» on a conversation that came from an ad, the window tells you «Came from campaign…» with the ad and the ad set, and if that campaign already has a board, it comes preselected.</p>' +
        '<p>Check the box «Send the next ones from this campaign straight to the chosen process», and the following chats from that campaign go there automatically. The rule is saved with the campaign ID, so it keeps working even if you rename the campaign in Meta.</p>' +
        '<p>To avoid moving every chat by hand, in <b>Conversations → Channels</b> check «Chats from an ad always come in»: every chat from paid ads becomes a lead with its campaign, even if the person leaves no details.</p>',
    },
    {
      h2: 'How do you close the loop with sales?',
      html: '<p>When you win a lead that came from an ad, the sale and its value show up under Won and Revenue for its campaign. With that you see the real cost per sale of each campaign, not just the cost per conversation.</p>' +
        '<p>Also, in <b>Ad platforms → Sales to ads</b> you can report to Meta what happens in your CRM, linked to the ad click: the new chat as «lead submitted», the stage you choose as «qualified lead» and the sale as «purchase». If you sell over WhatsApp you do not need a pixel: click «Turn on with WhatsApp only». That way Meta can find people who buy, not just people who message.</p>' +
        '<p>Meta links the sale to the click only for 7 days after the person messaged. After that, if you have a pixel, it is sent with encrypted phone and email. Right there you see every sale sent and, if one did not go through, why.</p>',
    },
    {
      h2: 'Examples by type of business',
      html: '<ul>' +
        '<li><b>Real estate agency:</b> rentals and sales in separate campaigns, each to its own board. The sales campaign brings fewer chats but more closed deals.</li>' +
        '<li><b>Clinic:</b> the free assessment fills the inbox; the orthodontics campaign brings fewer chats, but each patient is worth COP 4,500,000.</li>' +
        '<li><b>Restaurant:</b> chats about private events go to a board with quotes; reservation chats go to another.</li>' +
        '<li><b>Store:</b> one ad per product. You see which one ended in an order and which one only brought price questions.</li>' +
        '<li><b>Services:</b> a training academy sees that weekend courses close and weekday courses do not.</li>' +
        '</ul>',
    },
    {
      h2: 'Common mistakes when measuring click to WhatsApp ads',
      html: '<ul>' +
        '<li><b>Comparing Conv. with Leads.</b> The column to compare with Meta is Chats. Leads only counts the chats that moved to the pipeline.</li>' +
        '<li><b>Connecting WhatsApp but not Meta Ads.</b> You will see that the chat came from an ad, but not from which campaign.</li>' +
        '<li><b>Marking the sale weeks later.</b> Meta no longer links it to the click. Move it to won the day it closes.</li>' +
        '<li><b>Deciding based on conversations.</b> Look at Won, Revenue and Real CPL before you move budget.</li>' +
        '</ul>',
    },
  ],
  pasos: {
    h2: 'How to see the campaign behind each WhatsApp conversation step by step',
    intro: 'First, connect your WhatsApp to Acuarius with your business’s own Meta app.',
    items: [
      { t: 'Connect Meta Ads', d: 'Go to Marketing → Ad platforms and click «Connect Meta Ads». Authorize with your Facebook account. The owner or an admin of the account does this.' },
      { t: 'Choose the ad account', d: 'If the card says «Account not selected yet», click «Choose the account» and select the ad account your WhatsApp ads run from.' },
      { t: 'Open a conversation that came from an ad', d: 'In Conversations, next to the channel you will see «Ad:» with the campaign name. Hover over it to see the campaign, ad set and ad.' },
      { t: 'Move it to the pipeline', d: 'Click «Move to pipeline». The window shows «Came from campaign…». Choose the process and stage, check «Send the next ones from this campaign straight to the chosen process» and click «Create lead».' },
      { t: 'Review your campaigns', d: 'In Ad platforms, compare Conv. with Chats and look at Won and Revenue. Click a campaign to see its leads one by one and which stage each one reached.' },
      { t: 'Report sales to Meta', d: 'In Ad platforms → Sales to ads, click «Turn on with WhatsApp only» or set up your pixel. From there you see every sale sent.' },
    ],
  },
  faq: [
    {
      q: 'What do I need to see which campaign a WhatsApp chat came from?',
      a: 'Your WhatsApp connected to Acuarius and your Meta Ads account connected in Marketing → Ad platforms. Meta only says which ad the chat came from; Acuarius asks your ad account for the campaign and the ad set.',
    },
    {
      q: 'Why does Meta report more conversations than I see in my CRM?',
      a: 'Compare Conv. with Chats, not with Leads: a chat only becomes a lead if it moves to the pipeline or leaves its details. If the gap is large, check whether you connected WhatsApp partway through the period.',
    },
    {
      q: 'Does Acuarius change anything in my Meta campaigns?',
      a: 'It reads your campaigns. It only pauses an ad or lowers a budget when you approve it in Rules or in the AI Analyst. It never turns on an ad or raises a budget.',
    },
    {
      q: 'Can I report my WhatsApp sales to Meta without a pixel?',
      a: 'Yes. In Ad platforms → Sales to ads, click «Turn on with WhatsApp only». A sale from someone who came through a click to WhatsApp ad is reported to that campaign, as long as it is marked within 7 days after the person messaged.',
    },
    {
      q: 'Can I send each campaign to a different board?',
      a: 'Yes. When you move the conversation to the pipeline, check «Send the next ones from this campaign straight to the chosen process», and the following chats from that campaign go to that board automatically.',
    },
    {
      q: 'Does it work with organic posts that have a WhatsApp button?',
      a: 'The chat still comes in, but it is marked as organic and is not added to the results of your paid campaigns.',
    },
  ],
  relacionados: ['whatsapp-en-tiempo-real', 'agente-ia-whatsapp-datos-de-contacto', 'productos-en-el-crm'],
  enlaces: [
    { url: '/crm/whatsapp/', texto: 'CRM with WhatsApp' },
    { url: '/benchmarks/costo-meta-ads-colombia/', texto: 'Meta Ads cost in Colombia' },
  ],
};
