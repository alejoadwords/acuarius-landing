export const ARTICULO = {
  slug: 'meeting-scheduling-link',
  kw: 'meeting scheduling link',
  title: 'Meeting Scheduling Link with Google Meet and Your Brand',
  description: 'Create a meeting scheduling link that shows only your free Google Calendar slots, creates the Meet, sends WhatsApp alerts and saves the lead in your CRM.',
  h1: 'Meeting scheduling link: let your client pick the time without the back-and-forth over chat',
  modulo: 'Calendar',
  publicado: '2026-11-02',
  edicion: 1,
  resumen: 'Share a link with your free time slots. Whoever opens it picks a day and time, the meeting is created in your Google Calendar with Meet, and the person lands in your CRM.',
  respuesta: 'A meeting scheduling link is your own page, like app.acuarius.app/reunion/your-name-demo, that shows only the times you are free based on your hours and your Google Calendar. The person picks a day and time and leaves their details. The meeting is created in your Google account with a Meet link, they get the invitation by email, and they enter your CRM as a lead assigned to you.',
  video: { id: 'YGTOLEr-D10', titulo: "Calendar and meeting links: your Google calendar and a link to get booked", subido: '2026-11-23', segundos: 104, propio: false },
  ilustracion: 'agenda',
  secciones: [
    {
      h2: 'Why does setting up a meeting over chat cost you sales?',
      html: '<p>Setting up a meeting over chat usually takes four or five messages, and the client can lose interest with each one. Meanwhile, you reply from your phone without seeing your calendar, and sometimes you book two people at the same time.</p>' +
        '<p>When the person picks the time right when they want to talk to you, the meeting gets booked before they forget.</p>',
    },
    {
      h2: 'What is a meeting scheduling link in Acuarius?',
      html: '<p>A meeting scheduling link is an address you share over WhatsApp, email or in your signature, and it offers only your free time slots. You create it in the CRM Calendar with the «Scheduling link» button.</p>' +
        '<p>For each link you set:</p>' +
        '<ul>' +
        '<li><b>Meeting name</b> and an optional <b>description</b> that the person booking sees.</li>' +
        '<li><b>Link address</b>: the last part of app.acuarius.app/reunion/…</li>' +
        '<li><b>Duration</b>: 15, 20, 30, 45 or 60 minutes, or 1.5 and 2 hours.</li>' +
        '<li><b>Which days</b> and <b>between</b> which hours you take meetings.</li>' +
        '<li><b>Can be booked</b>: the minimum notice, from «No minimum» to «2 days ahead».</li>' +
        '<li><b>Up to</b>: how far ahead people can book, from «Next week» to «Next 2 months».</li>' +
        '<li><b>Goes to board</b>: which CRM board the lead lands on.</li>' +
        '<li><b>How people see you</b>: your name and your photo.</li>' +
        '<li>Whether a <b>Google Meet link</b> is created, your <b>brand</b> (logo and color), the <b>confirmation email</b> and the <b>WhatsApp alerts</b>.</li>' +
        '</ul>' +
        '<p>You can have several links, for example a 30-minute demo and a 15-minute call, and pause any of them by unchecking «Link active».</p>',
    },
    {
      h2: 'What does your client see when they open the link?',
      html: '<p>Your client sees a simple page with your photo, «Meeting with» and your name, the meeting name, the duration and, if you turned it on, the Google Meet logo. Your logo shows at the top and the buttons use your color.</p>' +
        '<ol>' +
        '<li>They pick a day. Only days with free slots are shown.</li>' +
        '<li>They pick a time. Times show in your time zone and, if the person is in another country, they see their local time under each one.</li>' +
        '<li>They enter their name, email and WhatsApp number. They can add what they want to talk about and, under «Is anyone else coming?», invite up to 5 people by email.</li>' +
        '<li>They click «Book meeting» and see the confirmation with the Meet link.</li>' +
        '</ol>' +
        '<p>If someone takes that same slot a second earlier, the page asks them to pick another. Your links never book two meetings at the same time.</p>',
    },
    {
      h2: 'How does it use your Google Calendar and Google Meet?',
      html: '<p>The link needs your Google Calendar connected: it reads your busy times from there and creates the meeting there. If an event is already on your calendar, that time is not offered.</p>' +
        '<p>The calendar is chosen once for the whole account, in the Calendar, by clicking the «Google Calendar» label. That calendar is checked to know when you are busy, and that is where meetings are created. You can disconnect it from the same label.</p>' +
        '<p><b>Without Google Calendar connected, the link offers no times</b>: the page shows «This link is not available right now». The same happens if Google does not respond. Acuarius would rather offer no times than book you on top of something you already had scheduled.</p>' +
        '<p>Once booked, the meeting sits on your calendar with the Meet link, the person’s WhatsApp number and their note, and the contact enters as a lead with the source «Meeting link», assigned to you and on the board you chose.</p>',
    },
    {
      h2: 'What email does the person booking receive?',
      html: '<p>Acuarius sends the invitation, not Google’s generic email. It includes your photo and name, the time in the booker’s own time zone, the Google Meet button, the cancel button and the invitation to add it to their calendar. Each guest also gets their own invitation with the meeting link.</p>' +
        '<p>With your logo and color, the confirmation email, the cancellation email, the guest email and the page all carry your brand. Without a logo, the email header shows your name, not Acuarius. If you already uploaded a logo in Bookings, the new link picks it up automatically.</p>' +
        '<p>If you want your own text, under «Confirmation email» you choose one of your email templates and use variables like {{nombre}}, {{fecha}}, {{meet}} or {{cancelar}}.</p>' +
        '<p>To cancel, the person uses the link in the email, clicks «Cancel meeting» and the slot opens up again. The event is removed from your Google Calendar and they get the cancellation email.</p>',
    },
    {
      h2: 'How do WhatsApp alerts cut no-shows?',
      html: '<p>If you have a WhatsApp number connected, on each link you can check «Send them a WhatsApp when they book and a reminder one hour before». The time shows in the booker’s own time zone and the message includes the link to join.</p>' +
        '<p>Since that person has not messaged you before, Meta requires two approved templates. Acuarius writes them and submits them for review from the same link with «Create the templates»; right there you see whether they are «Approved» or «In Meta review». Until they are approved, or if you have no WhatsApp connected, the meeting is still booked and the invitation goes out by email; only the WhatsApp message is not sent. Meta charges the sending to your account.</p>',
    },
    {
      h2: 'When should you use a meeting link and when Bookings?',
      html: '<p>The meeting link is your personal calendar: one person, your free slots and a meeting with Meet. It works for demos, consultations, discovery calls or a first sales conversation.</p>' +
        '<p>Bookings is a separate module, built for businesses that sell service appointments. If you want a prospect to talk to you, use the meeting link.</p>' +
        '<table><tr><th>Business</th><th>Suggested link</th><th>How they use it</th></tr>' +
        '<tr><td>Real estate agent</td><td>30-minute «Buying consultation»</td><td>Sends it to anyone asking about a COP 450,000,000 apartment and reads their note before the meeting.</td></tr>' +
        '<tr><td>Consultant</td><td>45-minute «Free assessment»</td><td>Puts it in their signature, with «1 day ahead» to prepare the session.</td></tr>' +
        '<tr><td>Marketing agency</td><td>30-minute «Demo» and 15-minute «Quick call»</td><td>The client adds their business partner as a guest and both get the Meet link.</td></tr>' +
        '<tr><td>Aesthetic clinic</td><td>20-minute «Virtual assessment»</td><td>The initial assessment goes through the link; in-person service appointments go through Bookings.</td></tr>' +
        '</table>',
    },
    {
      h2: 'Best practices and common mistakes',
      html: '<ul>' +
        '<li><b>Connect Google before you share.</b> This is the most common mistake: without Google Calendar the link offers no times.</li>' +
        '<li><b>One link per meeting type.</b> Give it a clear name, like «30-minute demo», and a description that says what will happen.</li>' +
        '<li><b>Pick the right notice.</b> With «1 day ahead», nobody books you ten minutes from now.</li>' +
        '<li><b>Send each lead to the right board.</b> With «Goes to board», demos land in your sales process and do not get mixed up.</li>' +
        '</ul>',
    },
  ],
  pasos: {
    h2: 'How to create and share your meeting scheduling link step by step',
    intro: 'The account owner creates it, because the link uses their Google Calendar. It takes a few minutes.',
    items: [
      { t: 'Connect Google Calendar', d: 'In CRM → Calendar, click «Connect Google Calendar». If you have several calendars, click the «Google Calendar» label and choose the one you work in.' },
      { t: 'Open your links', d: 'In the same Calendar, click «Scheduling link» and then «New link».' },
      { t: 'Set up the meeting', d: 'Fill in «How people see you», «Meeting name», «Link address», «Duration», «Goes to board», «Which days» and «Between». Adjust «Can be booked» and «Up to».' },
      { t: 'Add your brand', d: 'Under «Your brand», upload your logo and choose the color. Under «Confirmation email», keep the «Acuarius design (recommended)» or choose one of your own templates.' },
      { t: 'Turn on WhatsApp alerts', d: 'If you have WhatsApp connected, check «Send them a WhatsApp when they book and a reminder one hour before» and click «Create the templates».' },
      { t: 'Create and test the link', d: 'Click «Create link». In the list, click «Open» to see it the way your client does and check that times show up.' },
      { t: 'Share it', d: 'Click «Copy» and paste it into WhatsApp, your email signature or your profile.' },
    ],
  },
  faq: [
    { q: 'Do I need Google Calendar to use the meeting scheduling link?', a: 'Yes. The link reads your Google Calendar to know when you are busy and creates the meeting there. Without Google connected, the page shows «This link is not available right now» and offers no times.' },
    { q: 'Does the person booking need an Acuarius account?', a: 'No. They open the link, pick a day and time, leave their name, email and WhatsApp number, and click «Book meeting». The invitation arrives by email.' },
    { q: 'Can more people be added to the meeting?', a: 'Yes, but the person booking does it: under «Is anyone else coming?» they can add up to 5 emails. Each guest gets the invitation with the meeting link.' },
    { q: 'How does the person cancel a meeting?', a: 'From the link in the confirmation email, they click «Cancel meeting». The slot opens up again, the event is removed from your Google Calendar and they get a cancellation email.' },
    { q: 'What if the person is in another country?', a: 'The page shows times in your time zone and, below each one, the time where they are. The email and WhatsApp messages give them the time on their own clock.' },
    { q: 'Is the meeting link the same as Bookings?', a: 'No. The meeting link is your personal calendar with Google Meet. Bookings is a separate module, built for service appointments.' },
  ],
  relacionados: ['whatsapp-en-tiempo-real', 'campos-personalizados-crm', 'agente-ia-whatsapp-datos-de-contacto'],
  enlaces: [
    { url: '/crm/', texto: 'AI CRM for small businesses' },
    { url: '/crm/pipeline-de-ventas/', texto: 'Sales pipeline' },
  ],
};
