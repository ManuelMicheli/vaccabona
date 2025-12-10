export const businessInfo = {
  name: "Vacca Bòna",
  owner: "Danilo Lacagnina",
  address: "Via Roma 39 (ang. Piazza Garibaldi 2), 20003 Casorezzo (MI)",
  vat: "13665200963",
  phone: "02 98049358",
  mobile: "+39 333 804 7549",
  socials: {
    instagram: "https://www.instagram.com/vaccabona_",
    facebook: "https://www.facebook.com/vaccabona",
  },
  emails: {
    booking: "prenotazioni@vaccabona.it",
    info: "info@vaccabona.it",
  },
  website: "https://vaccabona.vercel.app",
};

export const hours = {
  macelleria: "Mar-Sab 8:30-12:30 / 15:30-19:30",
  ristorante: "Gio-Dom dalle 19:00",
};

export const marqueeItems = [
  { title: "Fiorentina", caption: "Selezione marezzata 21 giorni dry-aged", tone: "rosso" },
  { title: "Tomahawk", caption: "Cottura lenta alla brace, glassa al burro nocciola", tone: "ambra" },
  { title: "Battuta al Coltello", caption: "Fassona piemontese, olio al fumo, tuorlo marinato", tone: "bronzo" },
  { title: "Picanha", caption: "Frollatura controllata, sale affumicato, lime brûlé", tone: "oro" },
  { title: "Costata Prime", caption: "Taglio da condividere, crosta caramellata", tone: "rame" },
] as const;

export const butcherProducts = [
  {
    name: "Bistecca Fiorentina",
    price: "€38/kg",
    description: "Scottona scelta, frollatura 21 giorni per una marezzatura equilibrata.",
    badge: "Dry-aged",
    image: "/images/bistecca-fiorentina.png",
  },
  {
    name: "Salsiccia Rustica",
    price: "€12/kg",
    description: "Impasto tradizionale con finocchietto e vino rosso, leggera affumicatura.",
    badge: "Best Seller",
    image: "/images/salsiccia-rustica.png",
  },
  {
    name: "Pronto Cuoci BBQ",
    price: "€16/kg",
    description: "Mix gourmet marinato con erbe alpine e agrumi, pronto da grigliare.",
    badge: "BBQ Ready",
    image: "/images/taglio-del-giorno.png",
  },
  {
    name: "Tagliata di Angus",
    price: "€34/kg",
    description: "Angus irlandese selezionato, marezzatura fine, resa morbida al sangue.",
    badge: "Angus",
    image: "/images/tagliata-di-angus.png",
  },
  {
    name: "Costine Glassate",
    price: "€18/kg",
    description: "Cottura lenta, glassa al miele di castagno e pepe di Timut.",
    badge: "Low & Slow",
    image: "/images/dalla-brace.png",
  },
  {
    name: "Arrosto della Casa",
    price: "€22/kg",
    description: "Spalla di vitello arrotolata con erbe, burro chiarificato e senape antica.",
    badge: "Signature",
    image: "/images/taglio-pregio.png",
  },
] as const;

export const restaurantMenu = {
  starters: [
    { name: "Battuta di Fassona", note: "Olio affumicato, capperi croccanti, tuorlo cremoso" },
    { name: "Carpaccio di Chianina", note: "Julienne di sedano croccante, riduzione al Barolo" },
    { name: "Tartare affumicata", note: "Leggera affumicatura al faggio, mayo al rafano" },
  ],
  mains: [
    { name: "Costata Prime 1kg", note: "Cottura alla brace, sale Maldon affumicato, rosmarino bruciato" },
    { name: "Picanha alla Brace", note: "Crosta caramellata, lime brûlé, chimichurri di casa" },
    { name: "Filetto al Foie Gras", note: "Scaloppa rosolata, jus ridotto al Marsala" },
    { name: "Burger Vacca Bòna", note: "200g black angus, provola affumicata, cipolla caramellata" },
  ],
  sides: [
    { name: "Patate al Timo", note: "Forno a legna, sale affumicato" },
    { name: "Verdure alla Brace", note: "Olio evo, limone, erbe fresche" },
    { name: "Insalata di Campo", note: "Misticanza, dressing allo scalogno" },
  ],
  signatures: [
    {
      title: "Memuuu Experience",
      description: "Percorso degustazione di tagli iconici, servizio al carrello e carving a vista.",
    },
    {
      title: "Frollatura House",
      description: "Dry-aging proprietario controllato: umidità, ventilazione e sale rosa dell'Himalaya.",
    },
    {
      title: "Griglia a Brace Viva",
      description: "Legna di quercia e faggio per una crosta aromatica e una cottura precisa al cuore.",
    },
  ],
} as const;

export const socialHighlights = [
  {
    title: "Reel dal bancone",
    description: "Il taglio del giorno, luce calda e colpi di coltello netti.",
    image: "/images/taglio-del-giorno.png",
  },
  {
    title: "Dalla brace",
    description: "Croste caramellate, burro nocciola, glasse lucide.",
    image: "/images/dalla-brace.png",
  },
  {
    title: "Sala piena",
    description: "Legno scuro, calici rossi, servizio curato e sorridente.",
    image: "/images/sala-piena.png",
  },
  {
    title: "Cantina & Vini",
    description: "Selezione rossi importanti per abbinamenti di carattere.",
    image: "/images/vini.png",
  },
] as const;

