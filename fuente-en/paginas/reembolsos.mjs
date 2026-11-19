// Reembolsos y cancelación en inglés (/en/refunds), por pares sobre reembolsos.html.
// Texto legal: traducción fiel. Empresa, dirección, correo, plazos y montos
// se quedan como en el original.

export const CABEZA = {
  title: 'Refunds and Cancellation — Acuarius',
  description: 'How to cancel your Acuarius subscription, when you can request a refund and what to do if you see a charge you do not recognize.',
};

export const PARES = [
  [`<h1>Política de reembolsos, cancelación y disputas</h1>`,
   `<h1>Refund, Cancellation and Dispute Policy</h1>`],
  [`<p class="updated">Vigente desde el 4 de noviembre de 2026</p>`,
   `<p class="updated">Effective as of November 4, 2026</p>\n\n  <p>This English version is a courtesy translation. If it differs from the Spanish version, the Spanish version prevails.</p>`],
  [`<p>Esta política explica cómo cancelar tu suscripción a Acuarius, cuándo puedes pedir un reembolso y qué hacer si ves un cobro que no reconoces. Hace parte de los <a href="https://acuarius.app/terms.html">Términos de Servicio</a>. Acuarius es una marca operada y facturada por Aixion Labs Solutions LLC (Texas, Estados Unidos).</p>`,
   `<p>This policy explains how to cancel your Acuarius subscription, when you can request a refund and what to do if you see a charge you do not recognize. It is part of the <a href="https://acuarius.app/terms.html">Terms of Service</a>. Acuarius is a brand operated and billed by Aixion Labs Solutions LLC (Texas, United States).</p>`],

  // 1
  [`<h2>1. Prueba gratuita</h2>`, `<h2>1. Free trial</h2>`],
  [`<li>Las cuentas nuevas pueden probar el plan Pro durante 14 días, sin tarjeta de crédito.</li>`,
   `<li>New accounts can try the Pro plan for 14 days, without a credit card.</li>`],
  [`<li>Al terminar la prueba no se te cobra nada: si no te suscribes, tu cuenta pasa al plan gratuito con sus límites.</li>`,
   `<li>When the trial ends you are not charged anything: if you do not subscribe, your account moves to the free plan with its limits.</li>`],

  // 2
  [`<h2>2. Cómo cancelar</h2>`, `<h2>2. How to cancel</h2>`],
  [`<li>Puedes cancelar cuando quieras desde tu cuenta en Acuarius o escribiéndonos a <a href="mailto:support@acuarius.app">support@acuarius.app</a>.</li>`,
   `<li>You can cancel at any time from your Acuarius account or by writing to us at <a href="mailto:support@acuarius.app">support@acuarius.app</a>.</li>`],
  [`<li>La cancelación aplica al final del periodo que ya pagaste: hasta esa fecha sigues usando tu plan y después no se vuelve a cobrar.</li>`,
   `<li>Cancellation takes effect at the end of the period you have already paid for: until that date you keep using your plan, and after that you are not charged again.</li>`],
  [`<li>No hay penalidad ni permanencia mínima.</li>`,
   `<li>There is no penalty and no minimum commitment period.</li>`],
  [`<li>Antes de cerrar tu cuenta puedes exportar tus contactos y tus datos.</li>`,
   `<li>Before closing your account you can export your contacts and your data.</li>`],

  // 3
  [`<h2>3. Reembolsos</h2>`, `<h2>3. Refunds</h2>`],
  [`<li><strong>Primera suscripción:</strong> si el servicio no cumple lo que describimos, puedes pedir el reembolso completo dentro de los primeros 7 días de tu primera suscripción, mensual o anual.</li>`,
   `<li><strong>First subscription:</strong> if the service does not deliver what we describe, you can request a full refund within the first 7 days of your first subscription, whether monthly or annual.</li>`],
  [`<li><strong>Periodos ya facturados:</strong> pasados esos 7 días no reembolsamos meses o años ya cobrados, ni la parte no usada de un periodo.</li>`,
   `<li><strong>Periods already billed:</strong> after those 7 days we do not refund months or years already charged, nor the unused portion of a period.</li>`],
  [`<li><strong>Pago anual («2 meses gratis»):</strong> pagas 10 meses y recibes 12. Si cancelas, el plan sigue activo hasta el final del año pagado; no se reembolsa la parte no usada, salvo dentro de los 7 días de la primera suscripción.</li>`,
   `<li><strong>Annual payment ("2 months free"):</strong> you pay for 10 months and get 12. If you cancel, the plan stays active until the end of the paid year; the unused portion is not refunded, except within 7 days of the first subscription.</li>`],
  [`<li><strong>Créditos de SMS:</strong> son prepago y no se reembolsan en dinero. Si el proveedor no acepta un mensaje, su crédito se devuelve solo a tu saldo.</li>`,
   `<li><strong>SMS credits:</strong> they are prepaid and are not refunded in cash. If the provider does not accept a message, its credit is automatically returned to your balance.</li>`],
  [`<li><strong>Cobros por error:</strong> si te cobramos dos veces o un valor equivocado, te devolvemos la diferencia completa, sin importar la fecha.</li>`,
   `<li><strong>Charges made in error:</strong> if we charge you twice or the wrong amount, we refund the full difference, regardless of the date.</li>`],
  [`<li><strong>Cuentas suspendidas por abuso</strong> (spam, fraude u otros usos prohibidos en los Términos): no tienen derecho a reembolso.</li>`,
   `<li><strong>Accounts suspended for abuse</strong> (spam, fraud or other uses prohibited by the Terms): are not entitled to a refund.</li>`],
  [`<p>Para pedir un reembolso escríbenos a <a href="mailto:support@acuarius.app">support@acuarius.app</a> con el correo de tu cuenta y el motivo. Respondemos en máximo 3 días hábiles. Si se aprueba, el dinero vuelve al mismo medio de pago; según tu banco, puede tardar entre 5 y 10 días hábiles en verse.</p>`,
   `<p>To request a refund, write to us at <a href="mailto:support@acuarius.app">support@acuarius.app</a> with your account email and the reason. We respond within a maximum of 3 business days. If it is approved, the money goes back to the same payment method; depending on your bank, it may take between 5 and 10 business days to appear.</p>`],

  // 4
  [`<h2>4. Cobros que no reconoces y disputas</h2>`, `<h2>4. Charges you do not recognize and disputes</h2>`],
  [`<li>Los cobros los factura Aixion Labs Solutions LLC, y en tu extracto aparecen como <strong>ACUARIUS</strong>.</li>`,
   `<li>Charges are billed by Aixion Labs Solutions LLC and appear on your statement as <strong>ACUARIUS</strong>.</li>`],
  [`<li>Si ves un cobro que no reconoces, escríbenos antes de abrir una disputa o un contracargo con tu banco: lo revisamos en máximo 3 días hábiles y, si hubo un error, lo devolvemos.</li>`,
   `<li>If you see a charge you do not recognize, write to us before opening a dispute or a chargeback with your bank: we review it within a maximum of 3 business days and, if there was an error, we refund it.</li>`],
  [`<li>Si abres una disputa, le enviaremos a tu banco la información de tu cuenta y de tu suscripción para que la resuelva. Mientras está abierta podemos pausar la cuenta.</li>`,
   `<li>If you open a dispute, we will send your bank the information about your account and your subscription so it can resolve it. While it is open, we may pause the account.</li>`],

  // 5
  [`<h2>5. Precios y moneda</h2>`, `<h2>5. Prices and currency</h2>`],
  [`<p>Los precios se publican y se cobran en dólares estadounidenses (USD) y no incluyen impuestos; si la ley de tu país los exige, se suman al cobro. Tu banco puede aplicar su propia comisión por pagos en otra moneda. Si cambiamos el precio de tu plan, te avisamos al menos 30 días antes.</p>`,
   `<p>Prices are published and charged in US dollars (USD) and do not include taxes; if the law of your country requires them, they are added to the charge. Your bank may apply its own fee for payments in another currency. If we change the price of your plan, we will notify you at least 30 days in advance.</p>`],

  // 6
  [`<h2>6. Contacto</h2>`, `<h2>6. Contact</h2>`],
  [`<li><strong>Correo:</strong> <a href="mailto:support@acuarius.app">support@acuarius.app</a></li>`,
   `<li><strong>Email:</strong> <a href="mailto:support@acuarius.app">support@acuarius.app</a></li>`],
  [`<li><strong>Teléfono y WhatsApp:</strong> +57 321 997 2333</li>`,
   `<li><strong>Phone and WhatsApp:</strong> +57 321 997 2333</li>`],
  [`<li><strong>Dirección:</strong> Aixion Labs Solutions LLC (Acuarius), 15723 Chapel Lake Dr, Cypress, TX 77429, Estados Unidos</li>`,
   `<li><strong>Address:</strong> Aixion Labs Solutions LLC (Acuarius), 15723 Chapel Lake Dr, Cypress, TX 77429, United States</li>`],

  // Pie propio de la página
  [`<p class="footer">© 2026 Acuarius · Operado y facturado por Aixion Labs Solutions LLC · 15723 Chapel Lake Dr, Cypress, TX 77429, EE. UU.</p>`,
   `<p class="footer">© 2026 Acuarius · Operated and billed by Aixion Labs Solutions LLC · 15723 Chapel Lake Dr, Cypress, TX 77429, USA</p>`],
];
