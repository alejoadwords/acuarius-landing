export const ARTICULO = {
  slug: 'repeat-purchase-and-nps-survey',
  kw: 'NPS survey',
  title: 'NPS Survey: Measure Satisfaction and Win Repeat Purchases',
  description: 'How to send an automatic NPS survey after every sale, alert your team when a customer scores 0 to 6, and record the repeat purchase in your CRM.',
  h1: 'Automatic NPS survey and repeat purchases: listen to your customer and bring them back',
  modulo: 'Sales',
  publicado: '2026-11-02',
  edicion: 1,
  resumen: 'Send the NPS survey automatically after every sale or appointment, respond to a detractor within 24 hours and record each repeat purchase as a new sale.',
  respuesta: 'An NPS survey asks the customer, from 0 to 10, how likely they are to recommend you. In Acuarius it goes out automatically by email with the «NPS survey» step in an automation, tags each customer as a promoter, passive or detractor, creates a task to call anyone who scores 0 to 6 within 24 hours, and with «New purchase» records the repeat purchase as a new opportunity.',
  video: {
    id: 'XiCqCL77JLo', titulo: 'Repeat purchases and satisfaction alerts (NPS) in Acuarius', subido: '2026-11-02', segundos: 63, propio: true,
    capitulos: [
      { s: 0, t: 'Introduction' },
      { s: 6, t: 'Repeat purchases and satisfaction' },
      { s: 16, t: 'New purchase' },
      { s: 29, t: 'Alert on scores of 0 to 6' },
      { s: 36, t: 'The task to call them' },
      { s: 46, t: 'NPS by month and by rep' },
      { s: 57, t: 'Available now' },
    ],
  },
  ilustracion: 'satisfaccion',
  secciones: [
    {
      h2: 'What is NPS and how is it calculated?',
      html:
        '<p>NPS (Net Promoter Score) is a satisfaction metric based on a single question: «How likely are you to recommend us to a friend or colleague?», answered from 0 to 10. Depending on the score, each customer falls into one of three groups:</p>' +
        '<ul>' +
        '<li><b>Promoters (9 and 10)</b>: they liked it and recommend you.</li>' +
        '<li><b>Passives (7 and 8)</b>: they were satisfied, but would switch to someone else without thinking twice.</li>' +
        '<li><b>Detractors (0 to 6)</b>: something went wrong and they may speak badly of you.</li>' +
        '</ul>' +
        '<p>The formula is: <b>NPS = % promoters − % detractors</b>. Passives count toward the total, but they neither add nor subtract. The result ranges from −100 to +100.</p>' +
        '<p>Example: 50 customers responded. 30 gave a 9 or 10 (60%), 12 gave a 7 or 8 (24%) and 8 gave 0 to 6 (16%). The NPS is 60 − 16 = <b>44</b>. A positive NPS means more customers recommend you than criticize you.</p>',
    },
    {
      h2: 'Why measure satisfaction in a small business?',
      html:
        '<p>Measuring satisfaction tells a small business which customers will come back and which ones are quietly leaving. Most unhappy customers do not complain: they just do not return, and they tell the people they know.</p>' +
        '<p>A steady NPS survey lets you catch problems in time, see which rep serves customers best and find your promoters, who are the best candidates for a review, a referral or a second purchase.</p>',
    },
    {
      h2: 'How is the NPS survey sent automatically?',
      html:
        '<p>The NPS survey is sent with the «NPS survey» step inside an automation: you decide when, and Acuarius sends it by email on its own. The customer clicks a score from 0 to 10 right in the email, and a page opens where they can leave a comment.</p>' +
        '<p>Timing that works well:</p>' +
        '<ul>' +
        '<li><b>After a sale</b>: the «When the stage changes» trigger with Won as the target stage, a 7-day wait and the «NPS survey» step.</li>' +
        '<li><b>After an appointment</b>: if you use Bookings, the «When they attended their appointment» trigger sends the survey only to people who showed up.</li>' +
        '</ul>' +
        '<p>When they respond, the contact gets the tag «nps promotor», «nps neutro» or «nps detractor» (promoter, passive or detractor), and on their record you see the score with its color, the comment and whether the survey was sent but not answered yet. To avoid wearing anyone out, the survey is not sent again to the same contact within 30 days.</p>' +
        '<p>In «Customize survey» you change the wording, add your logo and add up to 8 questions of your own, either open text or rating scale.</p>',
    },
    {
      h2: 'What happens when a customer scores 0 to 6?',
      html:
        '<p>When a customer scores 0 to 6, Acuarius creates a task on their record to call them within the next 24 hours and alerts the rep who was handling them and the account owner, through the bell, by email and on mobile. If the customer leaves a comment, it is added to the task.</p>' +
        '<p>This option is called «Alert me when they score 0 to 6». It is on by default, and you can turn it off in «Customize survey».</p>' +
        '',
    },
    {
      h2: 'How do you read the satisfaction report?',
      html:
        '<p>The satisfaction report is in Analytics › Satisfaction and shows the NPS, how many people responded out of those who received the survey, the average score and how long they take to respond. Below that you will find:</p>' +
        '<ul>' +
        '<li><b>Month by month</b>: each month’s NPS with its split of promoters, passives and detractors.</li>' +
        '<li><b>By rep</b>: sent, answered, NPS and average for each team member. The score stays with the rep who was handling the customer when the survey was sent, even if the customer is reassigned later.</li>' +
        '<li><b>Distribution from 0 to 10</b>: how many customers gave each score.</li>' +
        '<li><b>Your own questions</b>: each scale with its average, and the written answers listed.</li>' +
        '<li><b>Every response</b> with its comment, a filter to see only detractors, and the «Download responses» button to open them in Excel.</li>' +
        '</ul>' +
        '<p>You can filter by date, by rep and by sales process.</p>' +
        '<h3>The monthly summary email</h3>' +
        '<p>On the 1st of every month you get an email about the previous month: the NPS and how much it rose or fell, each rep’s score, the unhappy customers (and whether they were already called) and the best things customers said. It only goes out if there were surveys that month. If you manage several clients, you get a single email with one section per client.</p>',
    },
    {
      h2: 'How do you record a repeat purchase in the CRM?',
      html:
        '<p>A repeat purchase is recorded with the «New purchase» button on a won customer’s record: it opens another opportunity, linked to the previous one, with the same contact details and the tag «recompra» (repeat purchase). You choose which sales process it goes into, the same one as the previous purchase or another; processes where the customer already has an open opportunity appear disabled.</p>' +
        '<p>Why not edit the old sale and move it back to New? Because you would erase a sale that really happened. With «New purchase» the previous sale stays won and counts in your reports, the new one is worked on its own board, and the «recompra» tag lets you filter the customers who buy again.</p>' +
        '<p>Also, if a customer whose opportunity you closed more than a day ago writes again through a form or WhatsApp, Acuarius opens the new opportunity automatically, instead of burying their message in the closed sale.</p>',
    },
    {
      h2: 'Google reviews from your happy customers',
      html:
        '<p>The «Request review» step sends the customer, by email or WhatsApp, the link to your Google Business Profile, which you paste first in CRM → Google reviews. It is requested only once per lead.</p>' +
        '<p>A useful combination: an automation with the «When a tag is added» trigger, the tag «nps promotor», and the «Request review» step. That way you only ask for a review from people who already gave you a 9 or 10.</p>',
    },
    {
      h2: 'Examples by type of business and common mistakes',
      html:
        '<ul>' +
        '<li><b>Clinic or dental practice</b>: a survey the day after the appointment to patients who attended. If Laura scores a 4 because she waited an hour, the front desk calls her that same morning.</li>' +
        '<li><b>Real estate agency</b>: a survey 7 days after signing. A promoter is the best candidate to refer a relative who is looking for a rental.</li>' +
        '<li><b>Store</b>: a survey after the order, and «New purchase» when Andrés comes back for another COP 180,000 product.</li>' +
        '<li><b>Restaurant</b>: a survey after a large reservation, with a custom 1-to-5 scale question about the food.</li>' +
        '</ul>' +
        '<h3>Common mistakes</h3>' +
        '<ul>' +
        '<li><b>Sending the survey too early</b>: if the customer has not received the product yet, the score measures nothing.</li>' +
        '<li><b>Turning off the 0-to-6 alert and not replacing it</b>: the detractor slips away without anyone noticing.</li>' +
        '<li><b>Editing the won sale to record the second purchase</b>: use «New purchase» so you do not lose the first one.</li>' +
        '</ul>',
    },
  ],
  pasos: {
    h2: 'How to turn on the NPS survey with detractor alerts step by step',
    intro: 'This way the survey goes out on its own after every sale, and your team is alerted about every detractor.',
    items: [
      { t: 'Customize the survey', d: 'Go to Analytics › Satisfaction and click «Customize survey». Adjust the subject, the question, your logo and your color, and add your own questions if you need them.' },
      { t: 'Check the detractor alert', d: 'In the same window, leave «Alert me when they score 0 to 6» checked and click «Save».' },
      { t: 'Create the automation', d: 'In Automations, create a new one with the «When the stage changes» trigger and choose Won as the target stage. If you work with appointments, use «When they attended their appointment».' },
      { t: 'Add the wait and the survey', d: 'Add a wait of a few days and then the «NPS survey» step. Save and turn on the automation.' },
      { t: 'Handle the tasks and read the report', d: 'When an «Unhappy customer» task comes in, call within 24 hours. Check Analytics › Satisfaction every week.' },
    ],
  },
  faq: [
    { q: 'How is NPS calculated?', a: 'Subtract the percentage of detractors (scores of 0 to 6) from the percentage of promoters (9 and 10). Passives (7 and 8) count toward the total but neither add nor subtract. The result ranges from −100 to +100.' },
    { q: 'Which channel does the NPS survey go out on?', a: 'Email. The customer clicks a score from 0 to 10 in the email, and a page opens where they can leave a comment.' },
    { q: 'When is the best time to send the satisfaction survey?', a: 'Once the customer has had the full experience: a few days after the sale is won or the day after the appointment. The same person does not get it again within 30 days.' },
    { q: 'Who finds out when a customer gives a low score?', a: 'The rep who was handling them and the account owner get an alert through the bell, by email and on mobile, and a task is created on the customer’s record to call them within 24 hours. You can turn this off in «Customize survey».' },
    { q: 'How do I record that a customer bought again?', a: 'Open their record and click «New purchase». Another opportunity is created, linked to the previous one, with the «recompra» tag, in the sales process you choose. The previous sale still counts in your reports.' },
    { q: 'Can I ask only promoters for Google reviews?', a: 'Yes. Create an automation with the «When a tag is added» trigger, choose the «nps promotor» tag and add the «Request review» step.' },
  ],
  relacionados: ['productos-en-el-crm', 'campos-personalizados-crm', 'enlace-para-agendar-reuniones'],
  enlaces: [
    { url: '/crm/', texto: 'AI CRM for small businesses' },
    { url: '/crm/clinicas/', texto: 'CRM for clinics' },
    { url: '/crm/pipeline-de-ventas/', texto: 'Sales pipeline' },
  ],
};
