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
    tabs: Record<"markets" | "oil" | "gold" | "crypto" | "business", string>;
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
      "Independent advisory firm for complex, high-value transactions: aircraft, vessels, premium real estate, gold and precious metals, oil and energy, and digital assets. Discreet facilitation from Miami and Panama City, operating globally.",
    ogDescription:
      "Independent advisory for complex, high-value transactions: aircraft, vessels, premium real estate, gold, oil and energy, and digital assets. Miami · Panama City · Global.",
    keywords: [
      "complex transaction advisory",
      "aircraft sales facilitation",
      "vessel brokerage",
      "premium real estate transactions",
      "gold trading advisory",
      "precious metals transactions",
      "oil and energy deals",
      "commodity transaction facilitation",
      "digital asset advisory",
      "high-value asset sales",
      "business advisory Miami",
      "business advisory Panama",
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
    eyebrow:
      "Middleton Services Group LTD — Independent transaction advisory",
    line1: "Making the",
    markWord: "markets",
    line3: "accessible.",
    sub: "Some assets don't fit the standard playbook — an aircraft, a vessel, an estate, a position in gold or crude. We bring order, discretion, and the right counterparties to transactions others find too complex.",
    ctaPrimary: "Start a conversation",
    ctaSecondary: "What we handle",
    assetIndexTitle: "Asset index",
    assets: [
      { code: "AVN", name: "Aircraft", note: "Acquisition & disposal" },
      { code: "MRT", name: "Vessels", note: "Commercial & private" },
      { code: "RES", name: "Estates", note: "Premium property" },
      { code: "CMD", name: "Bullion", note: "Gold & precious metals" },
      { code: "ENR", name: "Energy", note: "Crude & refined products" },
      { code: "DGA", name: "Digital assets", note: "Regulated markets" },
    ],
  },
  ticker: {
    aria: "Live market headlines",
    fallback: [
      { tag: "BIZ", title: "Aviation · Maritime · Estates · Bullion · Energy" },
      { tag: "MKT", title: "Making the Markets Accessible" },
      {
        tag: "BIZ",
        title: "Independent transaction advisory — Miami · Panama City",
      },
    ],
  },
  about: {
    eyebrow: "About us",
    heading: "A partner for transactions that don't fit the standard playbook.",
    paragraphs: [
      "Middleton Services Group is an independent advisory firm built around one idea: the most interesting markets are the hardest to enter. An aircraft, a commercial vessel, a landmark estate, a position in bullion or crude — these assets move through private channels, between people who know each other.",
      "We open those channels. We help owners bring exceptional assets to market, connect capital with opportunity, and stand between parties when a transaction needs a steady, neutral hand. Not a marketplace, not a fund — a firm that solves the deal in front of it.",
      "Our work is quiet by design. What our clients share is a situation most firms would call too complex, and what they get back is a path to done.",
    ],
    principles: [
      {
        term: "Discretion",
        detail:
          "High-value transactions attract attention. We keep every mandate confidential from first contact to closing — and beyond.",
      },
      {
        term: "Network",
        detail:
          "Decades of relationships across aviation, maritime, property, commodities, and energy. When a deal needs a counterparty, we usually know where to look.",
      },
      {
        term: "Execution",
        detail:
          "A deal is only as good as its closing. We manage process, verification, and pace so complexity never becomes an excuse.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    heading: "Every asset class is a market. We know our way around these.",
    sub: "Seven desks, one method: understand the asset, verify the parties, structure the path, close. Mandates are taken on a case-by-case basis.",
    items: [
      {
        id: "aviation",
        code: "AVN",
        title: "Aviation",
        description:
          "Aircraft rarely change hands quickly. We manage the full arc of an aircraft transaction — valuation, positioning, counterparties, and closing — so owners and buyers move with confidence.",
      },
      {
        id: "maritime",
        code: "MRT",
        title: "Maritime",
        description:
          "Commercial vessels and private yachts trade in a narrow, relationship-driven market. We bring the right parties to the table and keep the transaction on course.",
      },
      {
        id: "real-estate",
        code: "RES",
        title: "Premium Real Estate",
        description:
          "Exceptional properties don't sell through listings. We arrange discreet introductions between principals for estates and landmark assets that require a private market.",
      },
      {
        id: "commodities",
        code: "CMD",
        title: "Gold & Precious Metals",
        description:
          "Bullion and precious metals transactions demand verified counterparties and clean procedure. We structure the process end to end, with compliance at the center.",
      },
      {
        id: "energy",
        code: "ENR",
        title: "Oil & Energy",
        description:
          "Crude, refined products, and energy assets move through complex channels. We help principals navigate sourcing, verification, and execution in a market built on trust.",
      },
      {
        id: "digital-assets",
        code: "DGA",
        title: "Digital Assets",
        description:
          "Regulated digital assets call for the same discipline as any other market: verified counterparties, sound custody, clean settlement. We help principals move between traditional and digital value with confidence.",
      },
      {
        id: "advisory",
        code: "ADV",
        title: "Business Advisory",
        description:
          "Some deals don't fit any category. When a transaction stalls or a market seems closed, we find the structure — and the people — that make it possible.",
      },
    ],
  },
  news: {
    eyebrow: "News",
    heading: "What the markets are doing, right now.",
    sub: "Stocks, oil, gold, crypto, and global business — curated from the world's financial press and refreshed throughout the day. The same feeds our desks read.",
    tabs: {
      markets: "Stock Markets",
      oil: "Oil & Energy",
      gold: "Gold & Metals",
      crypto: "Crypto",
      business: "Business",
    },
    tablistAria: "News categories",
    empty: "Feed temporarily unavailable. Refresh in a few minutes.",
    readAtSource: "Read at source",
  },
  contact: {
    eyebrow: "Contact",
    heading: "Bring us the complex one.",
    sub: "Tell us what you're working with — an asset, a market, a deal that stalled. First conversations are informal and always confidential.",
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
      sector: "Asset or sector",
      sectorPlaceholder: "e.g. Aircraft, gold, energy, property",
      message: "Message",
      messagePlaceholder:
        "A few lines about the situation. No detail is too early — or too late.",
      submit: "Send message",
      sending: "Sending…",
      success: "Message sent. We'll get back to you shortly.",
      error: "Something went wrong. Please try again or email info@msgltd.net.",
    },
  },
  footer: {
    navigate: "Navigate",
    desks: "Desks",
    deskItems: [
      "Aviation",
      "Maritime",
      "Premium Real Estate",
      "Gold & Precious Metals",
      "Oil & Energy",
      "Digital Assets",
      "Business Advisory",
    ],
    officesLabel: "Offices",
    offices: ["Miami, Florida, United States", "Panama City, Panama"],
    blurb:
      "Independent advisory for complex, high-value transactions. Operating globally.",
    rights: "All rights reserved.",
    developedBy: "Developed by",
    footerAria: "Footer",
  },
};

const es: Dictionary = {
  meta: {
    title: "Middleton Services Group LTD — Making the Markets Accessible",
    description:
      "Firma independiente de asesoría para transacciones complejas de alto valor: aeronaves, embarcaciones, bienes raíces premium, oro y metales preciosos, petróleo y energía, y activos digitales. Facilitación discreta desde Miami y Ciudad de Panamá, con operación global.",
    ogDescription:
      "Asesoría independiente para transacciones complejas de alto valor: aeronaves, embarcaciones, bienes raíces premium, oro, petróleo y energía, y activos digitales. Miami · Ciudad de Panamá · Global.",
    keywords: [
      "asesoría de transacciones complejas",
      "venta de aeronaves",
      "compraventa de embarcaciones",
      "bienes raíces de lujo",
      "oro y metales preciosos",
      "petróleo y energía",
      "commodities",
      "activos digitales",
      "asesoría de negocios Miami",
      "asesoría de negocios Panamá",
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
    eyebrow:
      "Middleton Services Group LTD — Asesoría independiente de transacciones",
    line1: "Hacemos los",
    markWord: "mercados",
    line3: "accesibles.",
    sub: "Hay activos que no caben en el manual — una aeronave, una embarcación, una propiedad excepcional, una posición en oro o crudo. Aportamos orden, discreción y las contrapartes correctas a transacciones que otros consideran demasiado complejas.",
    ctaPrimary: "Iniciar la conversación",
    ctaSecondary: "Qué manejamos",
    assetIndexTitle: "Índice de activos",
    assets: [
      { code: "AVN", name: "Aeronaves", note: "Compra y venta" },
      { code: "MRT", name: "Embarcaciones", note: "Comerciales y privadas" },
      { code: "RES", name: "Propiedades", note: "Inmuebles premium" },
      { code: "CMD", name: "Metales", note: "Oro y metales preciosos" },
      { code: "ENR", name: "Energía", note: "Crudo y refinados" },
      { code: "DGA", name: "Activos digitales", note: "Mercados regulados" },
    ],
  },
  ticker: {
    aria: "Titulares de mercado en vivo",
    fallback: [
      {
        tag: "BIZ",
        title: "Aviación · Marítimo · Propiedades · Metales · Energía",
      },
      { tag: "MKT", title: "Making the Markets Accessible" },
      {
        tag: "BIZ",
        title: "Asesoría independiente de transacciones — Miami · Ciudad de Panamá",
      },
    ],
  },
  about: {
    eyebrow: "Nosotros",
    heading: "Un socio para transacciones que no siguen el manual estándar.",
    paragraphs: [
      "Middleton Services Group es una firma independiente de asesoría construida sobre una idea: los mercados más interesantes son los más difíciles de entrar. Una aeronave, un buque comercial, una propiedad emblemática, una posición en oro o crudo — estos activos se mueven por canales privados, entre gente que se conoce.",
      "Nosotros abrimos esos canales. Ayudamos a propietarios a llevar activos excepcionales al mercado, conectamos capital con oportunidad y actuamos como mano neutral cuando una transacción necesita firmeza. No somos un marketplace ni un fondo — somos una firma que resuelve la operación que tiene enfrente.",
      "Nuestro trabajo es silencioso por diseño. Lo que nuestros clientes comparten es una situación que la mayoría llamaría demasiado compleja; lo que reciben de vuelta es un camino al cierre.",
    ],
    principles: [
      {
        term: "Discreción",
        detail:
          "Las transacciones de alto valor atraen atención. Mantenemos cada mandato confidencial desde el primer contacto hasta el cierre — y después.",
      },
      {
        term: "Red",
        detail:
          "Décadas de relaciones en aviación, marítimo, propiedades, commodities y energía. Cuando una operación necesita contraparte, normalmente sabemos dónde buscar.",
      },
      {
        term: "Ejecución",
        detail:
          "Una operación vale lo que vale su cierre. Gestionamos proceso, verificación y ritmo para que la complejidad nunca sea excusa.",
      },
    ],
  },
  services: {
    eyebrow: "Servicios",
    heading: "Cada clase de activo es un mercado. Estos los conocemos bien.",
    sub: "Siete mesas, un método: entender el activo, verificar las partes, estructurar el camino, cerrar. Los mandatos se aceptan caso por caso.",
    items: [
      {
        id: "aviation",
        code: "AVN",
        title: "Aviación",
        description:
          "Una aeronave rara vez cambia de manos rápido. Gestionamos el arco completo de la transacción — valuación, posicionamiento, contrapartes y cierre — para que propietarios y compradores avancen con confianza.",
      },
      {
        id: "maritime",
        code: "MRT",
        title: "Marítimo",
        description:
          "Los buques comerciales y yates privados se negocian en un mercado estrecho, de relaciones. Sentamos a las partes correctas en la mesa y mantenemos la transacción en curso.",
      },
      {
        id: "real-estate",
        code: "RES",
        title: "Bienes Raíces Premium",
        description:
          "Las propiedades excepcionales no se venden por listados. Organizamos presentaciones discretas entre principales para propiedades y activos emblemáticos que requieren un mercado privado.",
      },
      {
        id: "commodities",
        code: "CMD",
        title: "Oro y Metales Preciosos",
        description:
          "Las transacciones de oro y metales preciosos exigen contrapartes verificadas y un procedimiento limpio. Estructuramos el proceso de punta a punta, con el cumplimiento en el centro.",
      },
      {
        id: "energy",
        code: "ENR",
        title: "Petróleo y Energía",
        description:
          "El crudo, los refinados y los activos energéticos se mueven por canales complejos. Ayudamos a los principales a navegar el abastecimiento, la verificación y la ejecución en un mercado construido sobre la confianza.",
      },
      {
        id: "digital-assets",
        code: "DGA",
        title: "Activos Digitales",
        description:
          "Los activos digitales regulados exigen la misma disciplina que cualquier otro mercado: contrapartes verificadas, custodia sólida y liquidación limpia. Ayudamos a los principales a moverse entre el valor tradicional y el digital con confianza.",
      },
      {
        id: "advisory",
        code: "ADV",
        title: "Asesoría de Negocios",
        description:
          "Hay operaciones que no caben en ninguna categoría. Cuando una transacción se estanca o un mercado parece cerrado, encontramos la estructura — y las personas — que la hacen posible.",
      },
    ],
  },
  news: {
    eyebrow: "Noticias",
    heading: "Qué están haciendo los mercados, ahora mismo.",
    sub: "Bolsa, petróleo, oro, cripto y negocios globales — curado de la prensa financiera mundial y actualizado durante el día. Los mismos feeds que leen nuestras mesas.",
    tabs: {
      markets: "Bolsa de Valores",
      oil: "Petróleo y Energía",
      gold: "Oro y Metales",
      crypto: "Cripto",
      business: "Negocios",
    },
    tablistAria: "Categorías de noticias",
    empty: "Feed temporalmente no disponible. Actualiza en unos minutos.",
    readAtSource: "Leer en la fuente",
  },
  contact: {
    eyebrow: "Contacto",
    heading: "Tráenos la difícil.",
    sub: "Cuéntanos con qué estás trabajando — un activo, un mercado, una operación estancada. Las primeras conversaciones son informales y siempre confidenciales.",
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
      sector: "Activo o sector",
      sectorPlaceholder: "p. ej. aeronave, oro, energía, propiedad",
      message: "Mensaje",
      messagePlaceholder:
        "Unas líneas sobre la situación. Ningún detalle llega demasiado temprano — ni demasiado tarde.",
      submit: "Enviar mensaje",
      sending: "Enviando…",
      success: "Mensaje enviado. Te responderemos a la brevedad.",
      error: "Algo salió mal. Intenta de nuevo o escribe a info@msgltd.net.",
    },
  },
  footer: {
    navigate: "Navegar",
    desks: "Mesas",
    deskItems: [
      "Aviación",
      "Marítimo",
      "Bienes Raíces Premium",
      "Oro y Metales Preciosos",
      "Petróleo y Energía",
      "Activos Digitales",
      "Asesoría de Negocios",
    ],
    officesLabel: "Oficinas",
    offices: ["Miami, Florida, Estados Unidos", "Ciudad de Panamá, Panamá"],
    blurb:
      "Asesoría independiente para transacciones complejas de alto valor. Operación global.",
    rights: "Todos los derechos reservados.",
    developedBy: "Desarrollado por",
    footerAria: "Pie de página",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
