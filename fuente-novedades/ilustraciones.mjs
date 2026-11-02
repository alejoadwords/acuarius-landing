// Ilustraciones de producto en HTML y CSS (clases .m-* de estilo.mjs).
// Datos de ejemplo inventados. Nunca un nombre o una cifra de un cliente real.

export const ILUSTRACIONES = {
  productos: () => `
<div class="m-win">
  <div class="m-bar"><i></i><i></i><i></i>&nbsp;Oportunidad · Laura Méndez<em>3 productos</em></div>
  <div class="m-body">
    <div class="m-row"><span class="m-foto" style="background:linear-gradient(135deg,#C9D4FF,#8C9BF0)"></span><span><b>Plan anual de mantenimiento</b><small>1 × $1.200.000 · IVA 19 %</small></span><span class="m-der m-precio">$1.428.000</span></div>
    <div class="m-row"><span class="m-foto" style="background:linear-gradient(135deg,#BFEBD6,#6FCF9F)"></span><span><b>Instalación en sitio</b><small>1 × $350.000 · IVA 19 %</small></span><span class="m-der m-precio">$416.500</span></div>
    <div class="m-row"><span class="m-foto" style="background:linear-gradient(135deg,#FFE0B8,#F5B06A)"></span><span><b>Kit de repuestos</b><small>2 × $95.000 · −10 %</small></span><span class="m-der m-precio">$203.490</span></div>
    <div class="m-total">Valor del negocio <b>$2.047.990</b></div>
  </div>
</div>
<div class="m-flota" style="right:16px;bottom:14px"><span class="m-ico" style="background:var(--n-wa)">✓</span><span><b>Listo para enviar por WhatsApp</b><small>Con foto, precio y enlace de pago</small></span></div>`,

  campos: () => `
<div class="m-win">
  <div class="m-bar"><i></i><i></i><i></i>&nbsp;Ficha · Andrés Rojas<em>Campos propios</em></div>
  <div class="m-body">
    <div class="m-campo"><span>Presupuesto</span><b>$ 320.000.000</b></div>
    <div class="m-campo"><span>Tipo de inmueble</span><b>Apartamento</b></div>
    <div class="m-campo"><span>Intereses</span><span><span class="m-chip">Piscina</span><span class="m-chip">Parqueadero</span><span class="m-chip">Gimnasio</span></span></div>
    <div class="m-campo"><span>Fecha de mudanza</span><b>15 de enero</b></div>
    <div class="m-campo"><span>¿Crédito aprobado?</span><b>Sí</b></div>
  </div>
</div>
<div class="m-flota" style="left:16px;top:14px"><span class="m-ico" style="background:var(--blue)">IA</span><span><b>El agente llenó «Presupuesto»</b><small>Lo dijo en el chat hace 2 min</small></span></div>
<div class="m-flota" style="right:16px;bottom:14px"><span class="m-ico" style="background:var(--text)">⑂</span><span><b>Condición</b><small>Presupuesto ≥ 100.000.000 → Sí</small></span></div>`,

  whatsapp: () => `
<div class="m-win">
  <div class="m-bar"><i></i><i></i><i></i>&nbsp;Conversaciones<em style="background:var(--n-tinte-rosa);color:var(--n-alerta)">3 sin leer</em></div>
  <div class="m-buscar">Valentina</div>
  <div class="m-chat">
    <div class="m-msg m-el">Hola, ¿todavía tienen disponible el modelo que vi en el anuncio?<sub>10:42</sub></div>
    <div class="m-msg m-yo">¡Hola, Valentina! Sí, quedan dos unidades. Te paso la ficha con precio y fotos.<sub>10:43 <em>✓✓</em></sub></div>
    <div class="m-msg m-el">Perfecto, gracias 🙌<sub>10:44</sub></div>
  </div>
</div>
<div class="m-flota" style="right:16px;top:14px"><span class="m-ico" style="background:var(--n-wa)">●</span><span><b>Mensaje nuevo, en vivo</b><small>Sin recargar la página</small></span></div>`,

  agente: () => `
<div class="m-win">
  <div class="m-bar"><i></i><i></i><i></i>&nbsp;Agente de IA · WhatsApp<em>Activo</em></div>
  <div class="m-chat">
    <div class="m-msg m-el">Quiero hablar con un asesor, por favor<sub>16:05</sub></div>
    <div class="m-msg m-ia"><u>Agente de IA</u>¡Claro! Para que te contacte, ¿me compartes tu nombre y tu correo?<sub>16:05 <em>✓✓</em></sub></div>
    <div class="m-msg m-el">Carlos Pérez, carlos@correo.com<sub>16:06</sub></div>
    <div class="m-msg m-ia"><u>Agente de IA</u>Gracias, Carlos. Te paso con Laura, del equipo comercial, que te escribe en un momento.<sub>16:06 <em>✓✓</em></sub></div>
  </div>
</div>
<div class="m-flota" style="left:16px;bottom:14px"><span class="m-ico" style="background:var(--success)">✓</span><span><b>Pasado a Laura</b><small>Con nombre, teléfono y correo</small></span></div>`,

  agenda: () => `
<div class="m-win">
  <div class="m-bar"><i></i><i></i><i></i>&nbsp;Agenda una reunión con Laura<em>30 min · Meet</em></div>
  <div class="m-body">
    <div class="m-dias"><span>lun<b>10</b></span><span class="m-hoy">mar<b>11</b></span><span>mié<b>12</b></span><span>jue<b>13</b></span><span>vie<b>14</b></span></div>
    <div class="m-horas"><span>8:30</span><span>9:00</span><span class="m-elegida">10:30</span><span>11:00</span><span>2:30</span><span>4:00</span></div>
    <div class="m-total" style="margin-top:14px">Martes 11 · 10:30 a. m. <b style="font-size:14px">Confirmar</b></div>
  </div>
</div>
<div class="m-flota" style="right:16px;top:14px"><span class="m-ico" style="background:var(--n-wa)">✓</span><span><b>Confirmación por WhatsApp</b><small>Y recordatorio 1 hora antes</small></span></div>`,

  satisfaccion: () => `
<div class="m-win">
  <div class="m-bar"><i></i><i></i><i></i>&nbsp;Análisis · Satisfacción<em>Últimos 6 meses</em></div>
  <div class="m-body">
    <div class="m-kpi"><div><small>NPS del mes</small><b>62</b> <span class="m-ok">▲ 8</span></div><div><small>Respuestas</small><b>148</b></div><div><small>Por llamar</small><b style="color:var(--n-alerta)">3</b></div></div>
    <div class="m-nps"><i style="height:38%"></i><i style="height:46%"></i><i style="height:44%"></i><i style="height:58%"></i><i style="height:66%"></i><i class="m-sube" style="height:82%"></i></div>
  </div>
</div>
<div class="m-flota" style="left:16px;bottom:14px"><span class="m-ico" style="background:var(--n-alerta)">!</span><span><b>Llamar a Marta antes de 24 h</b><small>Calificó 4 de 10</small></span></div>`,

  pauta: () => `
<div class="m-win">
  <div class="m-bar"><i></i><i></i><i></i>&nbsp;Plataformas de pauta · Meta Ads<em>Clic a WhatsApp</em></div>
  <div class="m-body">
    <table class="m-tabla">
      <thead><tr><th>Campaña</th><th>Conv.</th><th>Chats</th><th>Ventas</th></tr></thead>
      <tbody>
        <tr><td>Lanzamiento octubre</td><td>214</td><td class="m-dest">198</td><td>17</td></tr>
        <tr><td>Remarketing catálogo</td><td>96</td><td class="m-dest">91</td><td>9</td></tr>
        <tr><td>Prospección ciudad</td><td>130</td><td class="m-dest">122</td><td>6</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="m-flota" style="right:16px;bottom:14px"><span class="m-ico" style="background:var(--blue)">◎</span><span><b>Viene del anuncio «Video 15 s»</b><small>Campaña, conjunto y anuncio en la ficha</small></span></div>`,
};
