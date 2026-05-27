/* ============================================================
 *  CONTENT.JS — TOT EL COPY, LINKS I RUTES D'ASSETS
 *  
 *  Aquest fitxer és l'únic que cal tocar per actualitzar:
 *    · Textos (copy)
 *    · URLs (links externs, mapes, Airbnbs…)
 *    · Rutes d'imatges
 *    · Endpoint del Google Apps Script
 *  
 *  No cal tocar l'HTML ni els estils.
 * ============================================================ */

window.SITE_CONTENT = {

  /* ─────────────────  GLOBAL  ───────────────── */
  meta: {
    title: "Carla & Alex · 5 de desembre de 2026",
  },

  // Endpoint del Google Apps Script (Web App URL acabada en /exec)
  rsvpEndpoint: "https://script.google.com/macros/s/AKfycbzln2RbrwvVblA_eaYxhB3Ksk2Emf3vzDE3qxZQdMibM6daxTKtRXfTzsGPoHkU-z-S/exec",


  /* ─────────────────  1 · HERO  ───────────────── */
  hero: {
    name1:      "Carla",
    name2:      "Alex",
    connector:  "&",
    date:       "5 de desembre de 2026",
    location:   "Et convidem al nostre casament",
    scrollHint: "Mira el dia",
    bgDesktop:  "assets/hero-desktop.webp",
    bgMobile:   "assets/hero-mobile.webp",
  },


  /* ─────────────────  2 · TIMELINE  ───────────────── */
  timeline: {
    label: "5 DE DESEMBRE DE 2026",
    title: "Programa del dia",
    scrollHint: "Confirma la teva assistència",
    items: [
      { time: "13:30", title: "Arribada dels convidats", icon: "assets/icon-arribada.webp", dotKind: "" },
      { time: "14:00", title: "Cerimònia",                icon: "assets/icon-rings.webp",    dotKind: "tl-dot--ceremony" },
      { time: "15:00", title: "Aperitiu",                 icon: "assets/icon-glasses.webp",  dotKind: "" },
      { time: "17:00", title: "Banquet",                  icon: "assets/icon-cake.webp",     dotKind: "" },
      { time: "20:00", title: "Festa",                    icon: "assets/icon-hat.webp",      dotKind: "tl-dot--party" },
    ],
  },


  /* ─────────────────  3 · RSVP  ───────────────── */
  rsvp: {
    label:      "RSVP",
    title:      "Confirma la teva assistència",
    subtitle:   "Estarem encantats de saber si podràs acompanyar-nos. Respon quan puguis, sense cap pressa.",
    soloNote:   "Una resposta per persona, si us plau.",
    deadline:   "Data límit: 15 de setembre de 2026",

    fieldNameLabel:       "Nom i cognoms",
    fieldNamePlaceholder: "El teu nom complet",
    fieldAttendanceLabel: "Assistiràs?",
    fieldAllergensLabel:  "Al·lèrgies o restriccions alimentàries",
    fieldAllergensHint:   "(opcional)",
    fieldAllergensPlaceholder: "Gluten, lactosa, fruits secs… o el que calgui que sapiguem",
    submitBtn:            "Confirmar assistència",
    submittingBtn:        "Enviant…",

    optionYes:            "Sí, hi seré",
    optionNo:             "No podré ser-hi",

    errorName:            "Si us plau, escriu el teu nom i cognoms.",
    errorAttendance:      "Selecciona una opció.",

    confirmLabel:         "Hem rebut la teva resposta",
    confirmYesHeading:    "Quina alegria, ens fa molt feliços!",
    confirmYesBody:       "Prepara't per a una tarda plena de llum, bona taula i molts bons moments junts.",
    confirmNoHeading:     "T'enyorarem aquell dia",
    confirmNoBody:        "Ho entenem perfectament. Gràcies per avisar-nos — t'ho explicarem tot amb fotos la pròxima ocasió que ens veiem.",

    scrollHint:           "On ens trobarem",
  },


  /* ─────────────────  4 · EL LLOC  ───────────────── */
  lloc: {
    label:       "El lloc",
    name:        "Ca n'Alzina",
    subtitle:    "Rubió, Catalunya",
    description: "Una masia de pedra catalana envoltada de vistes a la serra de Rubió. Els interiors plens d'encant, i els jardins oberts a la llum i els pins ens van atraure de seguida. Esperem que aquesta sensació ens acompanyi a tots el gran dia!",
    image:       "assets/lloc-canalzina.webp",
    imageAlt:    "Aquarel·la aèria de Ca n'Alzina amb la cerimònia al jardí",
    mapsUrl:     "https://maps.app.goo.gl/aN8j51X9TWWoTiS16",
    mapsLabel:   "Veure a Google Maps",

    arribar: {
      cotxe: {
        icon:  "assets/icon-cotxe.png",
        label: "En cotxe",
        title: "Accés directe i pàrquing disponible",
        body:  "Accés per l'A2, sortida 545 (Jorba). A 5.8km des de la sortida seguiu el desviament a mà dreta (indicat amb el cartell \"Ca n'Alzina - UAUU Weddings\") que us portarà fins al pàrquing del recinte.",
        recommended: true,
      },
      taxi: {
        icon:  "assets/icon-taxi.webp",
        label: "Taxi o VTC",
        title: "La millor opció si voleu gaudir plenament",
        body:  "Molt recomanat si no voleu conduir, especialment per a la tornada. Us recomanem reservar amb antelació des de Barcelona o Igualada.",
        recommended: true,
      },
      transport: {
        icon:  "assets/icon-train.webp",
        label: "Transport públic",
        title: "No arriba fins Ca n'Alzina",
        body:  "Rubió és un poble molt petit i no disposa de connexions directes.\n\nEn transport públic, la única opció és arribar fins a Igualada amb bus (línea e5 des d'Estació del Nord) o amb els Ferrocarrils (línia R6/R60 des de Plaça Espanya) des de Barcelona. Tingueu en compte que no hi ha connexió de transport públic fins a Ca n'Alzina, així que l'últim tram s'haurà de fer en taxi o compartint cotxe.",
        recommended: false,
      },
    },
  },


  /* ─────────────────  5 · VESTIMENTA  ───────────────── */
  vestimenta: {
    label: "Com venir",
    title: "Vestimenta",
    notes: [
      {
        title: "Estil elegant / còctel",
        body:  "Busquem un estil arreglat i festiu però el més important és que vingueu com us sentiu més còmodes i a gust; segur que estareu guapíssims! L'únic color reservat és el blanc, que és per a la núvia.",
      },
      {
        title: "Porteu una rebequeta!",
        body:  "Recomanem calçat còmode ja que la celebració combina espais rústics a l'aire lliure i a l'interior. El 5 de desembre pot refredar, així que us recomanem portar un abric o jaqueta. Si el temps no ens acompanya, ho tenim tot previst per celebrar-ho completament a dins.",
      },
    ],
    icon: "assets/icon-leaves.webp",
  },


  /* ─────────────────  6 · ALLOTJAMENT  ───────────────── */
  allotjament: {
    label: "Per als qui veniu de lluny",
    title: "On allotjar-se",
    intro: "La Carla, l'Alex i un grup molt reduït de persones properes dormiran a Ca n'Alzina aquella nit. L'espai és petit i ja és complet — però si voleu quedar-vos per la zona o aprofitar el pont de desembre, els organitzadors ens han recomanat uns quants llocs fantàstics aquí a prop.",
    // Cards principals (sempre visibles). recommended:true els mostra amb el tag "Recomanat".
    main: [
      {
        name: "Casa Tomàs",
        type: "Casa rural · Lloguer complet · Pla de Rubió",
        distance: "~5 min",
        linkHref: "http://www.casatomasrubio.com/",
        linkText: "casatomasrubio.com ↗",
        recommended: true,
      },
      {
        name: "Molí Blanc Hotel",
        type: "Hotel · Antic molí paperer · Jorba",
        distance: "~15 min",
        linkHref: "http://www.moliblanchotel.cat",
        linkText: "moliblanchotel.cat ↗",
        recommended: true,
      },
      {
        name: "Hotel Amèrica",
        type: "Hotel urbà · Reserves individuals · Igualada",
        distance: "~15 min",
        linkHref: "http://www.hotel-america.es",
        linkText: "hotel-america.es ↗",
        recommended: true,
        // Codi de descompte copiable (deixa null si no n'hi ha)
        discountCode: "CANALZINA10",
        discountLabel: "10% dto · CANALZINA10",
      },
    ],
    // Cards col·lapsades dins "Veure'n més"
    more: [
      {
        name: "Cal Peret Saboner",
        type: "Casa rural · Lloguer complet · Jorba",
        distance: "~12 min",
        linkHref: "tel:+34646976511",
        linkText: "+34 646 976 511",
      },
      {
        name: "Casa de camp Els Nocs",
        type: "Casa de disseny · Lloguer complet · Jorba",
        distance: "~16 min",
        linkHref: "https://es-l.airbnb.com/rooms/34060417?guests=1&adults=1&s=67&unique_share_id=3afa3a51-2f45-427b-86b2-baaa1ce1079f",
        linkText: 'Airbnb "Casa de campo Els Nocs" ↗',
      },
      {
        name: "Hotel Cal Roure",
        type: "Hotel boutique · Centre d'Igualada",
        distance: "~18 min",
        linkHref: "https://calroure.cat/",
        linkText: "calroure.cat ↗",
      },
      {
        name: "Hotel Somiatruites",
        type: "Hotel de disseny · Barri del Rec · Igualada",
        distance: "~18 min",
        linkHref: "https://hotel.somiatruites.eu/",
        linkText: "hotel.somiatruites.eu ↗",
      },
      {
        name: "Can Alemany",
        type: "Apartaments · Santa Margarida de Montbui",
        distance: "~22 min",
        linkHref: "http://www.canalemany.com",
        linkText: "canalemany.com ↗",
      },
    ],
    moreLabelClosed: "Veure'n més · 5 opcions",
    moreLabelOpen:   "Veure'n menys",
    recommendedTag:  "Recomanat",
  },


  /* ─────────────────  7 · REGALS  ───────────────── */
  regals: {
    label:       "Regals",
    icon:        "assets/icon-gift.webp",
    script:      "Gràcies",
    quote:       "La vostra presència ja és el millor regal.",
    body:        "Estem preparant aquest dia amb molta il.lusió de passar-lo amb vosaltres, i estem molt agraïts de l'energia i recolzament que ens esteu donant fins ara ❤︎⁠\n\nSi tot i així voleu tenir un gest, agrairíem molt una contribució a la nostra lluna de mel.",
    iban:        "ES15 1583 0001 1091 5809 6992",  // Omple amb p.ex. "ES15 1583 0001 1091 5809 6992" per mostrar-lo
    ibanLabel:   "Compte bancari",
  },

};
