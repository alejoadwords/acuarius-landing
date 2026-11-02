// Ediciones quincenales de acuarius.app/novedades/.
//
// Una edición es el resumen de una quincena: enlaza los artículos de cada
// función nueva (articulos/<slug>.mjs, uno por URL) y lista las mejoras
// menores y los arreglos, que no dan para un artículo propio. La más nueva va
// PRIMERO.
//
// Reglas: nunca nombres de clientes, precios ni planes; solo lo que ya está en
// producción.

export const EDICIONES = [
  {
    slug: 'edicion-01',
    numero: 1,
    desde: '2026-10-19',
    hasta: '2026-11-01',
    publicada: '2026-11-02',
    periodo: '19 de octubre al 1 de noviembre de 2026',
    title: 'Novedades de Acuarius: edición 01, octubre de 2026',
    description: 'Novedades de Acuarius del 19 de octubre al 1 de noviembre de 2026: productos en el CRM, campos personalizados, WhatsApp en tiempo real y más.',
    h1: 'Productos en el CRM, WhatsApp en tiempo real y enlaces para agendar',
    sub: 'En estas dos semanas tu catálogo entró al CRM, el inbox empezó a funcionar en tiempo real y tus clientes ya pueden agendarte sin ida y vuelta de mensajes. Cada función tiene su artículo con la guía completa y su video.',
    resumen: 'Catálogo de productos dentro del CRM, campos a tu medida, WhatsApp en tiempo real y reuniones que se agendan solas.',
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
        "modulo": "Celular",
        "titulo": "Notas de voz, fotos y PDF en la versión móvil",
        "texto": "Escuchas las notas de voz y ves las fotos, videos y documentos que te envían. Si instalaste Acuarius en tu teléfono, abre directo la versión móvil."
      },
      {
        "modulo": "Celular",
        "titulo": "Procesos de venta desde el teléfono",
        "texto": "Eliges el proceso y la etapa al crear un contacto, y mueves un lead de proceso desde su ficha."
      },
      {
        "modulo": "Marketing",
        "titulo": "Fuentes: cuánto trae cada una",
        "texto": "Cada formulario, página de Meta o webhook muestra sus leads de los últimos 30 días, y la que deja de traer sube marcada «Sin leads»."
      },
      {
        "modulo": "Marketing",
        "titulo": "Formularios con política de datos",
        "texto": "Una casilla obligatoria para aceptar tu política de tratamiento de datos, y la fecha en que la aceptó en la ficha. Además, duplicas formularios con un clic."
      },
      {
        "modulo": "Campañas",
        "titulo": "Sabes a quién no le llegó tu campaña",
        "texto": "Si WhatsApp no entrega un mensaje, se cuenta como fallido con su motivo. Y las campañas de miles de contactos salen por tandas sin trabarse."
      },
      {
        "modulo": "Automatizaciones",
        "titulo": "Plantillas y esperas a tu medida",
        "texto": "El paso «Enviar WhatsApp» usa tus plantillas aprobadas, y «Esperar» acepta minutos, horas o días exactos."
      },
      {
        "modulo": "Reservas",
        "titulo": "Formulario de reserva a tu medida",
        "texto": "Pide los datos que necesites al reservar, con casilla de términos y listas de personas. Y duplicas servicios."
      },
      {
        "modulo": "CRM",
        "titulo": "Foto de referencia en cada lead",
        "texto": "Sube el producto que pidió o el diseño que quiere: aparece como portada de su tarjeta en el tablero."
      },
      {
        "modulo": "Equipo",
        "titulo": "Quién recibe leads del reparto",
        "texto": "Apaga el reparto para quien solo revisa. Y cada cambio de responsable queda en el historial del lead."
      },
      {
        "modulo": "Análisis",
        "titulo": "El informe de Marketing cuenta todos los canales",
        "texto": "WhatsApp y SMS entran junto al correo: cuántos mensajes salieron y cuántos no llegaron."
      },
      {
        "modulo": "SEO",
        "titulo": "Reporte de tráfico con fechas y dispositivos",
        "texto": "Filtra por 7, 30 o 90 días y ve las visitas por celular, computador o tableta y por edad, también en el enlace que compartes."
      },
      {
        "modulo": "Inicio",
        "titulo": "Cada módulo con su pantalla",
        "texto": "CRM, Marketing, Conversaciones y Análisis muestran todo lo que tienen en tarjetas, con atajos directos."
      }
    ],
    arreglos: [
      "Las notas de voz se escuchan en Safari y ya no se cortan cuando llega otro mensaje.",
      "Las campañas de WhatsApp con plantilla ya no piden un mensaje aparte, y la imagen se ve completa en la vista previa.",
      "En «Uno a uno» aparecen todos tus contactos, también los importados sin proceso.",
      "«Abrir otra oportunidad» funciona en el mismo proceso en el que ya está la persona.",
      "El anuncio de WhatsApp llega a la ficha aunque el contacto ya existiera.",
      "Las propuestas con IA usan los datos de tu negocio en vez de suponer el giro.",
      "Los avisos del celular te dicen en cuántos dispositivos los tienes activos."
    ],
  },
];
