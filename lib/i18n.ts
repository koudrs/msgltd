export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    ogDescription: string;
    keywords: string[];
  };
  nav: {
    about: string;
    services: string;
    news: string;
    contact: string;
    cta: string;
    openMenu: string;
  };
  hero: {
    eyebrow: string;
    line1: string;
    markWord: string;
    line3: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    assetIndexTitle: string;
    assets: { code: string; name: string; note: string }[];
  };
  ticker: {
    aria: string;
    fallback: { tag: string; title: string }[];
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    principles: { term: string; detail: string }[];
  };
  services: {
    eyebrow: string;
    heading: string;
    sub: string;
    items: { id: string; code: string; title: string; description: string }[];
  };
  news: {
    eyebrow: string;
    heading: string;
    sub: string;
    tabs: Record<
      "markets" | "oil" | "gold" | "crypto" | "ecommerce" | "business",
      string
    >;
    tablistAria: string;
    empty: string;
    readAtSource: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    sub: string;
    emailLabel: string;
    officesLabel: string;
    offices: string[];
    sensitiveLabel: string;
    sensitiveDetail: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      sector: string;
      sectorPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  footer: {
    navigate: string;
    desks: string;
    deskItems: string[];
    officesLabel: string;
    offices: string[];
    blurb: string;
    rights: string;
    developedBy: string;
    footerAria: string;
  };
}

const en: Dictionary = {
  meta: {
    title: "Middleton Services Group LTD — Making the Markets Accessible",
    description:
      "Middleton Services Group LTD is a private business consulting firm engaged in the world's strongest markets: commodities, premium real estate, luxury assets, digital assets, and e-commerce. Miami and Panama City, operating globally.",
    ogDescription:
      "Private business consulting engaged in the world's strongest markets: commodities, premium real estate, luxury assets, digital assets, and e-commerce. Miami · Panama City · Global.",
    keywords: [
      "private business consulting",
      "business consulting Miami",
      "business consulting Panama",
      "strategic advisory",
      "commodities",
      "premium real estate",
      "luxury assets",
      "digital assets",
      "e-commerce",
      "high-value markets",
      "Middleton Services Group",
    ],
  },
  nav: {
    about: "About",
    services: "Services",
    news: "News",
    contact: "Contact",
    cta: "Start a conversation",
    openMenu: "Open menu",
  },
  hero: {
    eyebrow: "Middleton Services Group LTD — Private business consulting",
    line1: "Making the",
    markWord: "markets",
    line3: "accessible.",
    sub: "A private consulting firm with an active presence in the world's strongest markets — commodities, premium real estate, luxury assets, digital assets, and e-commerce. Discreet, connected, and open for serious business.",
    ctaPrimary: "Start a conversation",
    ctaSecondary: "Where we operate",
    assetIndexTitle: "Sector index",
    assets: [
      { code: "CMD", name: "Commodities", note: "Physical markets" },
      { code: "RES", name: "Real Estate", note: "Prime property" },
      { code: "LUX", name: "Luxury Assets", note: "Rare & coveted" },
      { code: "DGA", name: "Digital Assets", note: "Regulated value" },
      { code: "ECM", name: "E-Commerce", note: "Digital trade" },
    ],
  },
  ticker: {
    aria: "Live market headlines",
    fallback: [
      {
        tag: "BIZ",
        title:
          "Commodities · Real Estate · Luxury Assets · Digital Assets · E-Commerce",
      },
      { tag: "MKT", title: "Making the Markets Accessible" },
      {
        tag: "BIZ",
        title: "Private business consulting — Miami · Panama City",
      },
    ],
  },
  about: {
    eyebrow: "About us",
    heading: "We don't observe markets. We operate inside them.",
    paragraphs: [
      "Middleton Services Group is a private business consulting firm built on one conviction: the most interesting markets are the hardest to enter. Commodities, premium property, luxury assets, digital value, global commerce — the serious side of these worlds moves in private circles, between people who know each other.",
      "We are in those circles. We study markets, identify serious ventures, and involve ourselves where judgment, structure, and discretion make the difference. We are not a marketplace, not a fund, and not an intermediary — we are a firm that does business, at the level where business is done.",
      "Our work is quiet by design. What reaches us is an opportunity; what we bring is presence, experience, and a network built over decades.",
    ],
    principles: [
      {
        term: "Discretion",
        detail:
          "Serious business attracts attention. Every engagement stays confidential from the first conversation onward — and after.",
      },
      {
        term: "Network",
        detail:
          "Decades of relationships across commodities, property, luxury, and digital markets. When something serious is moving, we usually hear about it early.",
      },
      {
        term: "Execution",
        detail:
          "We see every engagement through. Process, verification, pace — complexity is never an excuse.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    heading: "Five markets are booming. We are active in all of them.",
    sub: "One discipline across every sector: understand the market, know the players, engage with discretion. Engagements are considered case by case.",
    items: [
      {
        id: "commodities",
        code: "CMD",
        title: "Commodities",
        description:
          "Energy, metals, and the staples the world runs on. These markets never sleep — and neither does our attention. We keep an active presence where the world's fundamentals are decided.",
      },
      {
        id: "real-estate",
        code: "RES",
        title: "Premium Real Estate",
        description:
          "Real estate never dies. Prime property holds its value through every cycle, and we stay engaged in the markets — and the ventures — where it matters most.",
      },
      {
        id: "luxury-assets",
        code: "LUX",
        title: "Luxury Assets",
        description:
          "A world of rare and coveted things that moves on trust and access. We are at home in it — quietly, and at the highest level.",
      },
      {
        id: "digital-assets",
        code: "DGA",
        title: "Digital Assets",
        description:
          "Digital value has grown a professional class — regulated, institutional, and here to stay. We engage where discipline meets opportunity.",
      },
      {
        id: "ecommerce",
        code: "ECM",
        title: "E-Commerce",
        description:
          "Commerce has moved online and keeps compounding. We stay close to the platforms, the operators, and the ventures defining digital trade.",
      },
    ],
  },
  news: {
    eyebrow: "News",
    heading: "What the markets are doing, right now.",
    sub: "Stocks, oil, gold, crypto, e-commerce, and global business — curated from the world's financial press and refreshed throughout the day. The markets we live in.",
    tabs: {
      markets: "Stock Markets",
      oil: "Oil & Energy",
      gold: "Gold & Metals",
      crypto: "Crypto",
      ecommerce: "E-Commerce",
      business: "Business",
    },
    tablistAria: "News categories",
    empty: "Feed temporarily unavailable. Refresh in a few minutes.",
    readAtSource: "Read at source",
  },
  contact: {
    eyebrow: "Contact",
    heading: "Open for business.",
    sub: "Tell us what you're working on — a market, a venture, an idea that needs the right people around it. First conversations are informal and always confidential.",
    emailLabel: "Email",
    officesLabel: "Offices",
    offices: ["Miami, Florida, United States", "Panama City, Panama"],
    sensitiveLabel: "Sensitive matters",
    sensitiveDetail:
      "Mention it in your message and we'll arrange a secure channel before any details are shared.",
    form: {
      name: "Full name",
      namePlaceholder: "Jordan Reyes",
      email: "Email",
      emailPlaceholder: "you@company.com",
      sector: "Sector",
      sectorPlaceholder: "e.g. Commodities, real estate, e-commerce",
      message: "Message",
      messagePlaceholder:
        "A few lines about what you have in mind. No detail is too early — or too late.",
      submit: "Send message",
      sending: "Sending…",
      success: "Message sent. We'll get back to you shortly.",
      error: "Something went wrong. Please try again or email info@msgltd.net.",
    },
  },
  footer: {
    navigate: "Navigate",
    desks: "Sectors",
    deskItems: [
      "Commodities",
      "Premium Real Estate",
      "Luxury Assets",
      "Digital Assets",
      "E-Commerce",
    ],
    officesLabel: "Offices",
    offices: ["Miami, Florida, United States", "Panama City, Panama"],
    blurb:
      "Private business consulting engaged in high-value markets. Operating globally.",
    rights: "All rights reserved.",
    developedBy: "Developed by",
    footerAria: "Footer",
  },
};

const es: Dictionary = {
  meta: {
    title: "Middleton Services Group LTD — Making the Markets Accessible",
    description:
      "Middleton Services Group LTD es una consultoría privada de negocios con presencia activa en los mercados más fuertes del mundo: commodities, bienes raíces premium, activos de lujo, activos digitales y e-commerce. Miami y Ciudad de Panamá, con operación global.",
    ogDescription:
      "Consultoría privada de negocios con presencia en los mercados más fuertes del mundo: commodities, bienes raíces premium, activos de lujo, activos digitales y e-commerce. Miami · Ciudad de Panamá · Global.",
    keywords: [
      "consultoría privada de negocios",
      "consultoría de negocios Miami",
      "consultoría de negocios Panamá",
      "asesoría estratégica",
      "commodities",
      "bienes raíces premium",
      "activos de lujo",
      "activos digitales",
      "e-commerce",
      "mercados de alto valor",
      "Middleton Services Group",
    ],
  },
  nav: {
    about: "Nosotros",
    services: "Servicios",
    news: "Noticias",
    contact: "Contacto",
    cta: "Conversemos",
    openMenu: "Abrir menú",
  },
  hero: {
    eyebrow: "Middleton Services Group LTD — Consultoría privada de negocios",
    line1: "Hacemos los",
    markWord: "mercados",
    line3: "accesibles.",
    sub: "Una consultoría privada con presencia activa en los mercados más fuertes del mundo — commodities, bienes raíces premium, activos de lujo, activos digitales y e-commerce. Discretos, conectados y abiertos a negocios serios.",
    ctaPrimary: "Iniciar la conversación",
    ctaSecondary: "Dónde operamos",
    assetIndexTitle: "Índice de sectores",
    assets: [
      { code: "CMD", name: "Commodities", note: "Mercados físicos" },
      { code: "RES", name: "Bienes Raíces", note: "Propiedad prime" },
      { code: "LUX", name: "Activos de Lujo", note: "Escasos y codiciados" },
      { code: "DGA", name: "Activos Digitales", note: "Valor regulado" },
      { code: "ECM", name: "E-Commerce", note: "Comercio digital" },
    ],
  },
  ticker: {
    aria: "Titulares de mercado en vivo",
    fallback: [
      {
        tag: "BIZ",
        title:
          "Commodities · Bienes Raíces · Activos de Lujo · Activos Digitales · E-Commerce",
      },
      { tag: "MKT", title: "Making the Markets Accessible" },
      {
        tag: "BIZ",
        title: "Consultoría privada de negocios — Miami · Ciudad de Panamá",
      },
    ],
  },
  about: {
    eyebrow: "Nosotros",
    heading: "No observamos los mercados. Operamos dentro de ellos.",
    paragraphs: [
      "Middleton Services Group es una consultoría privada de negocios construida sobre una convicción: los mercados más interesantes son los más difíciles de entrar. Commodities, propiedad premium, activos de lujo, valor digital, comercio global — el lado serio de estos mundos se mueve en círculos privados, entre gente que se conoce.",
      "Nosotros estamos en esos círculos. Estudiamos mercados, identificamos negocios serios y nos involucramos donde el criterio, la estructura y la discreción hacen la diferencia. No somos un marketplace, no somos un fondo y no somos intermediarios — somos una firma que hace negocios, al nivel donde se hacen los negocios.",
      "Nuestro trabajo es silencioso por diseño. Lo que nos llega es una oportunidad; lo que ponemos sobre la mesa es presencia, experiencia y una red construida durante décadas.",
    ],
    principles: [
      {
        term: "Discreción",
        detail:
          "Los negocios serios atraen atención. Cada compromiso se mantiene confidencial desde la primera conversación — y después.",
      },
      {
        term: "Red",
        detail:
          "Décadas de relaciones en commodities, propiedad, lujo y mercados digitales. Cuando algo serio se está moviendo, normalmente nos enteramos temprano.",
      },
      {
        term: "Ejecución",
        detail:
          "Llevamos cada compromiso hasta el final. Proceso, verificación, ritmo — la complejidad nunca es excusa.",
      },
    ],
  },
  services: {
    eyebrow: "Servicios",
    heading: "Cinco mercados están en auge. Estamos activos en todos.",
    sub: "Una disciplina en todos los sectores: entender el mercado, conocer a los jugadores, involucrarse con discreción. Los compromisos se evalúan caso por caso.",
    items: [
      {
        id: "commodities",
        code: "CMD",
        title: "Commodities",
        description:
          "Energía, metales y las materias primas que mueven al mundo. Estos mercados nunca duermen — y nuestra atención tampoco. Mantenemos presencia activa donde se deciden los fundamentos.",
      },
      {
        id: "real-estate",
        code: "RES",
        title: "Bienes Raíces Premium",
        description:
          "El real estate nunca muere. La propiedad prime sostiene su valor en cada ciclo, y nosotros seguimos involucrados en los mercados — y los negocios — donde más importa.",
      },
      {
        id: "luxury-assets",
        code: "LUX",
        title: "Activos de Lujo",
        description:
          "Un mundo de piezas escasas y codiciadas que se mueve por confianza y acceso. En él estamos en casa — con discreción y al más alto nivel.",
      },
      {
        id: "digital-assets",
        code: "DGA",
        title: "Activos Digitales",
        description:
          "El valor digital ya tiene una capa profesional — regulada, institucional y aquí para quedarse. Nos involucramos donde la disciplina encuentra oportunidad.",
      },
      {
        id: "ecommerce",
        code: "ECM",
        title: "E-Commerce",
        description:
          "El comercio se mudó a internet y no deja de crecer. Estamos cerca de las plataformas, los operadores y los negocios que definen el comercio digital.",
      },
    ],
  },
  news: {
    eyebrow: "Noticias",
    heading: "Qué están haciendo los mercados, ahora mismo.",
    sub: "Bolsa, petróleo, oro, cripto, e-commerce y negocios globales — curado de la prensa financiera mundial y actualizado durante el día. Los mercados en los que vivimos.",
    tabs: {
      markets: "Bolsa de Valores",
      oil: "Petróleo y Energía",
      gold: "Oro y Metales",
      crypto: "Cripto",
      ecommerce: "E-Commerce",
      business: "Negocios",
    },
    tablistAria: "Categorías de noticias",
    empty: "Feed temporalmente no disponible. Actualiza en unos minutos.",
    readAtSource: "Leer en la fuente",
  },
  contact: {
    eyebrow: "Contacto",
    heading: "Abiertos a negocios.",
    sub: "Cuéntanos en qué estás trabajando — un mercado, un negocio, una idea que necesita a la gente correcta alrededor. Las primeras conversaciones son informales y siempre confidenciales.",
    emailLabel: "Correo",
    officesLabel: "Oficinas",
    offices: ["Miami, Florida, Estados Unidos", "Ciudad de Panamá, Panamá"],
    sensitiveLabel: "Asuntos sensibles",
    sensitiveDetail:
      "Menciónalo en tu mensaje y coordinaremos un canal seguro antes de compartir cualquier detalle.",
    form: {
      name: "Nombre completo",
      namePlaceholder: "Jordan Reyes",
      email: "Correo",
      emailPlaceholder: "tu@empresa.com",
      sector: "Sector",
      sectorPlaceholder: "p. ej. commodities, bienes raíces, e-commerce",
      message: "Mensaje",
      messagePlaceholder:
        "Unas líneas sobre lo que tienes en mente. Ningún detalle llega demasiado temprano — ni demasiado tarde.",
      submit: "Enviar mensaje",
      sending: "Enviando…",
      success: "Mensaje enviado. Te responderemos a la brevedad.",
      error: "Algo salió mal. Intenta de nuevo o escribe a info@msgltd.net.",
    },
  },
  footer: {
    navigate: "Navegar",
    desks: "Sectores",
    deskItems: [
      "Commodities",
      "Bienes Raíces Premium",
      "Activos de Lujo",
      "Activos Digitales",
      "E-Commerce",
    ],
    officesLabel: "Oficinas",
    offices: ["Miami, Florida, Estados Unidos", "Ciudad de Panamá, Panamá"],
    blurb:
      "Consultoría privada de negocios con presencia en mercados de alto valor. Operación global.",
    rights: "Todos los derechos reservados.",
    developedBy: "Desarrollado por",
    footerAria: "Pie de página",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
