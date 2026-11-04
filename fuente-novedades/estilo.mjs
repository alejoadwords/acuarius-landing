// CSS propio de /novedades/. Lo base (tokens, menú, botones, pie) viene de partners.html.

export const ESTILO_NOV = `<style>
/* Novedades: lo que partners.html no trae. Mismos tokens de marca. */
:root{
  --n-tinte-azul:#EEF0FD;--n-tinte-menta:#E6F6EF;--n-tinte-lila:#F1ECFB;--n-tinte-arena:#FBF3E6;
  --n-tinte-cielo:#E7F4FA;--n-tinte-rosa:#FBEDEF;--n-tinte-gris:#F2F3F7;
  --n-wa:#25D366;--n-wa-burbuja:#DCF8C6;--n-leido:#34B7F1;--n-alerta:#E5484D;
  --n-sombra:0 18px 40px -18px rgba(10,10,18,.22),0 4px 12px rgba(10,10,18,.06);
}
.n-hero{padding:132px 40px 56px;background:var(--white);position:relative;overflow:hidden}
.n-hero::before{content:'';position:absolute;inset:0;background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px);background-size:56px 56px;opacity:.45;-webkit-mask-image:radial-gradient(ellipse at 70% 0%,#000 0%,transparent 65%);mask-image:radial-gradient(ellipse at 70% 0%,#000 0%,transparent 65%)}
.n-in{max-width:1160px;margin:0 auto;position:relative}
.n-migas{font-size:12.5px;color:var(--muted2);margin-bottom:26px}
.n-migas a{color:var(--muted);text-decoration:none}.n-migas a:hover{color:var(--blue)}
.n-migas span{margin:0 6px}
.n-eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--blue)}
.n-eyebrow::before{content:'';width:8px;height:8px;border-radius:50%;background:var(--blue)}
.n-h1{font-family:var(--font-display);font-weight:800;letter-spacing:0;line-height:1.04;color:var(--text);font-size:clamp(38px,6vw,72px);margin:18px 0 0;max-width:900px}
.n-h1 i{font-style:normal;color:var(--blue)}
.n-h1.n-h1-ed{font-size:clamp(32px,4.6vw,56px)}
.n-sub{font-size:18px;line-height:1.7;color:var(--muted);max-width:680px;margin-top:20px}
.n-acciones{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}
.n-btn-borde{padding:13px 26px;border:1.5px solid var(--border);border-radius:14px;font-size:15px;font-weight:600;color:var(--text);text-decoration:none;background:var(--white);transition:border-color .2s,color .2s}
.n-btn-borde:hover{border-color:var(--blue);color:var(--blue)}
.n-edicion{display:flex;flex-wrap:wrap;align-items:center;gap:14px;margin-top:34px;padding:16px 20px;border:1px solid var(--border);border-radius:var(--rlg);background:var(--white);max-width:760px;box-shadow:var(--n-sombra)}
.n-edicion b{font-family:var(--font-display);font-size:15px;color:var(--text)}
.n-edicion span:not(.n-pill){font-size:14px;color:var(--muted);flex:1;min-width:220px}
.n-edicion a{font-size:14px;font-weight:700;color:var(--blue);text-decoration:none;white-space:nowrap}
.n-pill{display:inline-block;font-size:11.5px;font-weight:700;letter-spacing:.04em;padding:4px 10px;border-radius:999px;background:var(--blue-lt);color:var(--blue)}
.n-sec{padding:72px 40px}
.n-sec-gris{background:var(--bg)}
.n-cab{display:flex;flex-wrap:wrap;align-items:end;justify-content:space-between;gap:16px;margin-bottom:34px}
.n-cab h2{font-family:var(--font-display);font-size:clamp(26px,3.4vw,38px);font-weight:800;letter-spacing:0;line-height:1.1;color:var(--text)}
.n-cab p{font-size:15.5px;color:var(--muted);max-width:520px;line-height:1.6}

/* Tarjetas del índice: panel de color con la ilustración + texto debajo. */
.n-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:28px}
.n-card{display:flex;flex-direction:column;text-decoration:none;color:inherit;border-radius:var(--rlg);transition:transform .25s}
.n-card:hover{transform:translateY(-3px)}
.n-card:hover .n-card-link{gap:10px}
.n-panel{border-radius:var(--rlg);padding:64px 34px 72px;min-height:300px;display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}
.n-card-txt{padding:20px 4px 0}
.n-mod{font-size:12px;font-weight:700;color:var(--muted);letter-spacing:.02em}
.n-card h3{font-family:var(--font-display);font-size:21px;font-weight:700;letter-spacing:0;line-height:1.25;color:var(--text);margin:8px 0 10px}
.n-card p{font-size:15px;line-height:1.65;color:var(--muted)}
.n-card-link{display:inline-flex;align-items:center;gap:6px;margin-top:14px;font-size:14px;font-weight:700;color:var(--blue);transition:gap .2s;border-bottom:2px solid var(--blue);padding-bottom:2px}

.n-mini{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
.n-mini div{background:var(--white);border:1px solid var(--border);border-radius:var(--r);padding:20px 20px 22px}
.n-mini small{font-size:11.5px;font-weight:700;color:var(--blue);letter-spacing:.04em;text-transform:uppercase}
.n-mini h3{font-size:16px;font-weight:700;color:var(--text);margin:8px 0 6px;line-height:1.35}
.n-mini p{font-size:14px;line-height:1.6;color:var(--muted)}

.n-lista-ed{display:flex;flex-direction:column;gap:12px}
.n-lista-ed a{display:grid;grid-template-columns:auto 1fr auto;gap:18px;align-items:center;padding:20px 22px;border:1px solid var(--border);border-radius:var(--r);background:var(--white);text-decoration:none;color:var(--text);transition:border-color .2s}
.n-lista-ed a:hover{border-color:var(--blue)}
.n-lista-ed b{font-family:var(--font-display);font-size:17px}
.n-lista-ed span{font-size:14px;color:var(--muted)}
.n-lista-ed em{font-style:normal;font-size:13px;color:var(--muted2);white-space:nowrap}

/* Página de una edición */
.n-indice{position:sticky;top:68px;z-index:50;background:rgba(255,255,255,.92);backdrop-filter:blur(14px);border-bottom:1px solid var(--border);border-top:1px solid var(--border)}
.n-indice div{max-width:1160px;margin:0 auto;padding:12px 40px;display:flex;gap:8px;overflow-x:auto;scrollbar-width:none}
.n-indice div::-webkit-scrollbar{display:none}
.n-indice a{flex:none;font-size:13.5px;font-weight:600;color:var(--muted);text-decoration:none;padding:8px 14px;border-radius:999px;transition:background .2s,color .2s}
.n-indice a:hover,.n-indice a.activo{background:var(--blue-lt);color:var(--blue)}
.n-func{padding:84px 40px;scroll-margin-top:130px}
.n-func:nth-of-type(even){background:var(--bg)}
.n-func-in{max-width:1160px;margin:0 auto;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.08fr);gap:56px;align-items:center}
.n-func.n-alt .n-func-media{order:-1}
.n-func h2{font-family:var(--font-display);font-size:clamp(24px,2.6vw,32px);font-weight:800;letter-spacing:0;line-height:1.12;color:var(--text);margin:14px 0 16px}
.n-func p{font-size:16.5px;line-height:1.75;color:var(--muted)}
.n-func p b{color:var(--text)}
.n-checks{list-style:none;margin:22px 0 0;padding:0;display:flex;flex-direction:column;gap:12px}
.n-checks li{position:relative;padding-left:32px;font-size:15px;line-height:1.6;color:var(--text)}
.n-checks li::before{content:'';position:absolute;left:0;top:2px;width:20px;height:20px;border-radius:50%;background:var(--blue-lt) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231E2BCC' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12l5 5L19 8'/%3E%3C/svg%3E") center/12px no-repeat}
.n-donde{display:inline-flex;align-items:center;gap:8px;margin-top:24px;font-size:13.5px;color:var(--muted);background:var(--white);border:1px solid var(--border);border-radius:999px;padding:7px 14px}
.n-donde b{color:var(--text);font-weight:600}
.n-guia{display:flex;align-items:center;gap:10px;margin-top:14px;font-size:14px;color:var(--muted);text-decoration:none}
.n-guia b{color:var(--blue)}
.n-guia svg{flex:none}
.n-func-media .n-panel{min-height:420px}

.n-video{position:relative;width:100%;aspect-ratio:16/9;border:0;padding:0;border-radius:var(--rlg);overflow:hidden;background:var(--text);cursor:pointer;box-shadow:var(--n-sombra);display:block}
.n-video img{width:100%;height:100%;object-fit:cover;display:block;opacity:.92;transition:opacity .2s}
.n-video:hover img{opacity:1}
.n-video span{position:absolute;inset:0;margin:auto;width:72px;height:72px;border-radius:50%;background:var(--white);display:flex;align-items:center;justify-content:center;box-shadow:var(--n-sombra)}
.n-video iframe{position:absolute;inset:0;width:100%;height:100%;border:0}

.n-arreglos{list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px 28px}
.n-arreglos li{position:relative;padding-left:22px;font-size:15px;line-height:1.6;color:var(--muted)}
.n-arreglos li::before{content:'';position:absolute;left:4px;top:10px;width:7px;height:7px;border-radius:50%;background:var(--muted2)}

/* ── Ilustraciones de producto ── */
.m-win{width:100%;max-width:440px;background:var(--white);border-radius:16px;box-shadow:var(--n-sombra);overflow:hidden;font-family:var(--font-body);color:var(--text);text-align:left}
.m-bar{display:flex;align-items:center;gap:8px;padding:12px 16px;border-bottom:1px solid var(--border);font-size:13px;font-weight:700}
.m-bar i{width:8px;height:8px;border-radius:50%;background:var(--border)}
.m-bar em{font-style:normal;margin-left:auto;font-size:11.5px;font-weight:600;color:var(--blue);background:var(--blue-lt);padding:3px 9px;border-radius:999px}
.m-body{padding:14px 16px}
.m-row{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border)}
.m-row:last-child{border-bottom:0}
.m-foto{width:42px;height:42px;border-radius:10px;flex:none}
.m-row b{display:block;font-size:13.5px}
.m-row small{display:block;font-size:12px;color:var(--muted)}
.m-row .m-der{margin-left:auto;text-align:right}
.m-precio{font-size:13.5px;font-weight:700}
.m-total{display:flex;justify-content:space-between;align-items:center;margin-top:8px;padding:12px 14px;border-radius:12px;background:var(--blue-lt);font-size:13px;color:var(--blue);font-weight:700}
.m-total b{font-size:17px;font-family:var(--font-body)}
.m-flota{position:absolute;background:var(--white);border-radius:14px;box-shadow:var(--n-sombra);padding:10px 14px;font-size:12.5px;display:flex;align-items:center;gap:10px;color:var(--text);text-align:left}
.m-flota b{display:block;font-size:12.5px}
.m-flota small{color:var(--muted);font-size:11.5px}
.m-ico{width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex:none;color:var(--white);font-size:13px;font-weight:800}
.m-campo{display:grid;grid-template-columns:120px 1fr;gap:10px;align-items:center;padding:9px 0;border-bottom:1px solid var(--border);font-size:13px}
.m-campo span{color:var(--muted)}
.m-campo b{font-weight:600}
.m-chip{display:inline-block;font-size:11.5px;font-weight:600;padding:3px 9px;border-radius:999px;background:var(--blue-lt);color:var(--blue);margin:0 4px 4px 0}
.m-chat{background:var(--n-tinte-gris);padding:14px;display:flex;flex-direction:column;gap:8px;min-height:220px}
.m-msg{max-width:78%;font-size:13px;line-height:1.45;padding:8px 11px;border-radius:12px;background:var(--white);box-shadow:0 1px 1px rgba(0,0,0,.05)}
.m-msg.m-yo{align-self:flex-end;background:var(--n-wa-burbuja);border-bottom-right-radius:4px}
.m-msg.m-el{border-bottom-left-radius:4px}
.m-msg.m-ia{align-self:flex-end;background:var(--blue);color:var(--white);border-bottom-right-radius:4px}
.m-msg sub{display:block;text-align:right;font-size:10.5px;color:var(--muted);margin-top:2px;vertical-align:baseline}
.m-msg.m-ia sub{color:rgba(255,255,255,.7)}
.m-msg sub em{font-style:normal;color:var(--n-leido);font-weight:700;letter-spacing:-2px;margin-left:4px}
.m-msg u{text-decoration:none;display:block;font-size:10.5px;font-weight:700;opacity:.75;margin-bottom:2px}
.m-buscar{display:flex;align-items:center;gap:8px;margin:12px 16px;padding:9px 12px;border:1.5px solid var(--blue);border-radius:10px;font-size:13px;color:var(--text)}
.m-buscar::after{content:'';width:1.5px;height:15px;background:var(--blue);animation:m-cursor 1s steps(1) infinite}
@keyframes m-cursor{50%{opacity:0}}
.m-dias{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;text-align:center;font-size:11.5px;color:var(--muted);margin-bottom:12px}
.m-dias b{display:block;font-size:15px;color:var(--text);margin-top:2px}
.m-dias .m-hoy{background:var(--blue);color:var(--white);border-radius:10px;padding:6px 0}
.m-dias .m-hoy b{color:var(--white)}
.m-horas{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.m-horas span{border:1.5px solid var(--border);border-radius:10px;padding:9px 0;text-align:center;font-size:13px;font-weight:600}
.m-horas .m-elegida{border-color:var(--blue);background:var(--blue);color:var(--white)}
.m-nps{display:flex;align-items:end;gap:6px;height:110px;margin:6px 0 12px}
.m-nps i{flex:1;border-radius:6px 6px 2px 2px;background:var(--blue-lt)}
.m-nps i.m-sube{background:var(--blue)}
.m-kpi{display:flex;gap:10px}
.m-kpi div{flex:1;border:1px solid var(--border);border-radius:12px;padding:10px 12px}
.m-kpi small{display:block;font-size:11px;color:var(--muted)}
.m-kpi b{font-family:var(--font-body);font-size:22px}
.m-kpi .m-ok{color:var(--success);font-size:12px;font-weight:700}
.m-tabla{width:100%;border-collapse:collapse;font-size:12.5px}
.m-tabla th{text-align:left;color:var(--muted);font-weight:600;padding:8px 6px;border-bottom:1px solid var(--border)}
.m-tabla td{padding:10px 6px;border-bottom:1px solid var(--border)}
.m-tabla td:not(:first-child),.m-tabla th:not(:first-child){text-align:right}
.m-tabla .m-dest{color:var(--blue);font-weight:800}

@media(max-width:960px){
  .n-func-in{grid-template-columns:1fr;gap:34px}
  .n-func.n-alt .n-func-media{order:0}
  .n-mini{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media(max-width:768px){
  .nav-links{display:none}
  .n-hero{padding:104px 16px 44px}
  .n-sec,.n-func{padding:56px 16px}
  .n-indice div{padding:10px 16px}
  .n-grid,.n-mini,.n-arreglos{grid-template-columns:1fr}
  .n-panel{padding:26px 16px;min-height:260px}
  .n-func-media .n-panel{min-height:300px}
  .n-lista-ed a{grid-template-columns:1fr}
  .m-flota{display:none}
}
</style>`;
