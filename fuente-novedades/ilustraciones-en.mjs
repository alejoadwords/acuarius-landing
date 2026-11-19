// Las mismas ilustraciones de ilustraciones.mjs, con los textos en inglés, para
// /en/whats-new/. Al cambiar una ilustración, cambiar las dos.

export const ILUSTRACIONES = {
  productos: () => `
<div class="m-win">
  <div class="m-bar"><i></i><i></i><i></i>&nbsp;Deal · Laura Méndez<em>3 products</em></div>
  <div class="m-body">
    <div class="m-row"><span class="m-foto" style="background:linear-gradient(135deg,#C9D4FF,#8C9BF0)"></span><span><b>Annual maintenance plan</b><small>1 × $1,200,000 · VAT 19%</small></span><span class="m-der m-precio">$1,428,000</span></div>
    <div class="m-row"><span class="m-foto" style="background:linear-gradient(135deg,#BFEBD6,#6FCF9F)"></span><span><b>On-site installation</b><small>1 × $350,000 · VAT 19%</small></span><span class="m-der m-precio">$416,500</span></div>
    <div class="m-row"><span class="m-foto" style="background:linear-gradient(135deg,#FFE0B8,#F5B06A)"></span><span><b>Spare parts kit</b><small>2 × $95,000 · −10%</small></span><span class="m-der m-precio">$203,490</span></div>
    <div class="m-total">Deal value <b>$2,047,990</b></div>
  </div>
</div>
<div class="m-flota" style="right:16px;bottom:14px"><span class="m-ico" style="background:var(--n-wa)">✓</span><span><b>Ready to send on WhatsApp</b><small>With photo, price and payment link</small></span></div>`,

  campos: () => `
<div class="m-win">
  <div class="m-bar"><i></i><i></i><i></i>&nbsp;Record · Andrés Rojas<em>Custom fields</em></div>
  <div class="m-body">
    <div class="m-campo"><span>Budget</span><b>$320,000,000</b></div>
    <div class="m-campo"><span>Property type</span><b>Apartment</b></div>
    <div class="m-campo"><span>Interests</span><span><span class="m-chip">Pool</span><span class="m-chip">Parking</span><span class="m-chip">Gym</span></span></div>
    <div class="m-campo"><span>Move-in date</span><b>January 15</b></div>
    <div class="m-campo"><span>Loan approved?</span><b>Yes</b></div>
  </div>
</div>
<div class="m-flota" style="left:16px;top:14px"><span class="m-ico" style="background:var(--blue)">IA</span><span><b>The agent filled in “Budget”</b><small>They said it in the chat 2 min ago</small></span></div>
<div class="m-flota" style="right:16px;bottom:14px"><span class="m-ico" style="background:var(--text)">⑂</span><span><b>Condition</b><small>Budget ≥ 100,000,000 → Yes</small></span></div>`,

  whatsapp: () => `
<div class="m-win">
  <div class="m-bar"><i></i><i></i><i></i>&nbsp;Conversations<em style="background:var(--n-tinte-rosa);color:var(--n-alerta)">3 unread</em></div>
  <div class="m-buscar">Valentina</div>
  <div class="m-chat">
    <div class="m-msg m-el">Hi, do you still have the model I saw in the ad?<sub>10:42</sub></div>
    <div class="m-msg m-yo">Hi, Valentina! Yes, there are two left. I’ll send you the details with price and photos.<sub>10:43 <em>✓✓</em></sub></div>
    <div class="m-msg m-el">Perfect, thanks 🙌<sub>10:44</sub></div>
  </div>
</div>
<div class="m-flota" style="right:16px;top:14px"><span class="m-ico" style="background:var(--n-wa)">●</span><span><b>New message, live</b><small>No page refresh</small></span></div>`,

  agente: () => `
<div class="m-win">
  <div class="m-bar"><i></i><i></i><i></i>&nbsp;AI agent · WhatsApp<em>Active</em></div>
  <div class="m-chat">
    <div class="m-msg m-el">I’d like to talk to a sales rep, please<sub>16:05</sub></div>
    <div class="m-msg m-ia"><u>AI agent</u>Sure! So they can reach you, could you share your name and email?<sub>16:05 <em>✓✓</em></sub></div>
    <div class="m-msg m-el">Carlos Pérez, carlos@email.com<sub>16:06</sub></div>
    <div class="m-msg m-ia"><u>AI agent</u>Thanks, Carlos. I’m passing you to Laura from our sales team, who’ll message you shortly.<sub>16:06 <em>✓✓</em></sub></div>
  </div>
</div>
<div class="m-flota" style="left:16px;bottom:14px"><span class="m-ico" style="background:var(--success)">✓</span><span><b>Handed to Laura</b><small>With name, phone and email</small></span></div>`,

  agenda: () => `
<div class="m-win">
  <div class="m-bar"><i></i><i></i><i></i>&nbsp;Book a meeting with Laura<em>30 min · Meet</em></div>
  <div class="m-body">
    <div class="m-dias"><span>Mon<b>10</b></span><span class="m-hoy">Tue<b>11</b></span><span>Wed<b>12</b></span><span>Thu<b>13</b></span><span>Fri<b>14</b></span></div>
    <div class="m-horas"><span>8:30</span><span>9:00</span><span class="m-elegida">10:30</span><span>11:00</span><span>2:30</span><span>4:00</span></div>
    <div class="m-total" style="margin-top:14px">Tuesday 11 · 10:30 a.m. <b style="font-size:14px">Confirm</b></div>
  </div>
</div>
<div class="m-flota" style="right:16px;top:14px"><span class="m-ico" style="background:var(--n-wa)">✓</span><span><b>Confirmation on WhatsApp</b><small>And a reminder 1 hour before</small></span></div>`,

  satisfaccion: () => `
<div class="m-win">
  <div class="m-bar"><i></i><i></i><i></i>&nbsp;Analytics · Satisfaction<em>Last 6 months</em></div>
  <div class="m-body">
    <div class="m-kpi"><div><small>NPS this month</small><b>62</b> <span class="m-ok">▲ 8</span></div><div><small>Responses</small><b>148</b></div><div><small>To call</small><b style="color:var(--n-alerta)">3</b></div></div>
    <div class="m-nps"><i style="height:38%"></i><i style="height:46%"></i><i style="height:44%"></i><i style="height:58%"></i><i style="height:66%"></i><i class="m-sube" style="height:82%"></i></div>
  </div>
</div>
<div class="m-flota" style="left:16px;bottom:14px"><span class="m-ico" style="background:var(--n-alerta)">!</span><span><b>Call Marta within 24 h</b><small>Rated 4 out of 10</small></span></div>`,

  pauta: () => `
<div class="m-win">
  <div class="m-bar"><i></i><i></i><i></i>&nbsp;Ad platforms · Meta Ads<em>Click to WhatsApp</em></div>
  <div class="m-body">
    <table class="m-tabla">
      <thead><tr><th>Campaign</th><th>Conv.</th><th>Chats</th><th>Sales</th></tr></thead>
      <tbody>
        <tr><td>October launch</td><td>214</td><td class="m-dest">198</td><td>17</td></tr>
        <tr><td>Catalog remarketing</td><td>96</td><td class="m-dest">91</td><td>9</td></tr>
        <tr><td>City prospecting</td><td>130</td><td class="m-dest">122</td><td>6</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="m-flota" style="right:16px;bottom:14px"><span class="m-ico" style="background:var(--blue)">◎</span><span><b>Came from the “15 s video” ad</b><small>Campaign, ad set and ad on the record</small></span></div>`,
};
