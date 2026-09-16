import type { Dictionary } from "../types";

export const ca: Dictionary = {
  meta: {
    title: "Arantxa Fernández — Mestra d'Educació Infantil",
    description:
      "Portfoli d'Arantxa Fernández, mestra d'Educació Infantil (0-3 anys): experiència, formació, metodologia d'anglès primerenc i un exemple de programació d'aula.",
  },
  nav: {
    experience: "Experiència",
    education: "Formació",
    methodology: "Metodologia",
    programming: "Programació",
    contact: "Contacte",
    skip: "Salta al contingut",
    language: "Idioma",
  },
  hero: {
    role: "Mestra d'Educació Infantil · 0–3 anys",
    bio: "Formada al Cicle Formatiu de Grau Superior d'Educació Infantil i acabant el Grau en Educació Infantil a la UNED. Combino l'atenció a la primera infància amb la docència de reforç escolar i d'idiomes. Em defineixen l'empatia, l'organització i la capacitat d'adaptar-me a edats i entorns diferents — i les ganes de continuar aprenent en un equip que cregui en el joc i l'acompanyament emocional.",
    location: "Esparreguera, Barcelona",
    photoAlt: "Retrat d'Arantxa Fernández",
  },
  experience: {
    eyebrow: "Trajectòria",
    title: "Experiència",
    jobs: [
      {
        role: "Mestra d'Educació Infantil",
        place: "Llar d'Infants Quitxalla",
        dates: "2025–2026",
        desc: "Atenció i cura d'infants de 0 a 3 anys, acompanyament en les rutines diàries, activitats educatives i de psicomotricitat, foment de l'autonomia i seguiment del desenvolupament infantil.",
      },
      {
        role: "Professora de català per a adults",
        place: "Punt i Coma",
        dates: "2025–2026",
        desc: "Ensenyament del català a persones adultes (nivell A1): preparació d'activitats i materials, pràctica de l'expressió oral i escrita i seguiment del progrés de l'alumnat.",
      },
      {
        role: "Monitora escolar (TSAE)",
        place: "Punt i Coma",
        dates: "2024–2026",
        desc: "Planificació, realització i avaluació d'activitats amb nens i nenes de primària (1r–6è).",
      },
      {
        role: "Professora de reforç",
        place: "Nascor Formación",
        dates: "2020–Actualitat",
        desc: "Tècniques d'estudi i reforç en totes les assignatures, treball de metodologies i estructuració de l'estudi.",
      },
    ],
  },
  education: {
    eyebrow: "Bagatge",
    title: "Formació i idiomes",
    studiesLabel: "Estudis",
    languagesLabel: "Idiomes",
    studies: [
      {
        title: "Grau en Educació Infantil",
        place: "UNED · Universitat Nacional d'Educació a Distància",
        years: "2022–2025",
      },
      {
        title: "CFGS en Educació Infantil",
        place: "Institut Milà i Fontanals, Igualada",
        years: "2020–2022",
      },
    ],
    languages: ["Castellà", "Català", "Anglès"],
  },
  methodology: {
    eyebrow: "Metodologia",
    title: "Anglès des del bressol: Great Little People",
    intro:
      "És la metodologia d'anglès primerenc amb què he treballat a l'aula. Parteix d'una idea senzilla: si l'anglès s'introdueix abans que entrin en joc la traducció i la correcció d'errors, s'adquireix de manera natural, igual que la llengua materna. Les sessions duren una hora, són 100% en anglès i roten per sis espais o corners.",
    corners: [
      "Assemblea inicial: emocions, dia, temps, colors i nombres per entrar a l'idioma jugant.",
      "Sons, pronunciació i primeres passes de lectoescriptura en anglès.",
      "Moviment i psicomotricitat: l'idioma també s'aprèn amb el cos.",
      "Art i petits experiments STEM en anglès.",
      "Contacontes i comprensió lectora amb històries pròpies del mètode.",
      "Recursos perquè les famílies continuïn practicant a casa.",
    ],
    callout:
      "A l'aula combino aquests corners amb materials sensorials i manipulatius — flashcards, mystery boxes, peluixos, mocadors de colors — perquè cada sessió tingui sempre un component de joc, moviment i conte.",
    credit: "Metodologia desenvolupada per Great Little People —",
  },
  programming: {
    eyebrow: "Exemple de treball",
    title: "Programació d'aula",
    intro:
      "Programació pensada per a un curs complet amb nens i nenes de 2–3 anys, amb una línia d'aprenentatge coherent: a cada estació, el grup «viatja» a un país diferent segons el seu clima, i totes les activitats —contes, cançons, manualitats, joc sensorial— giren al voltant d'aquesta destinació, amb una mica de vocabulari en anglès. Toca una targeta per veure'n la fitxa tècnica.",
    cta: "Veure fitxa tècnica",
    duration: "Durada: 3 setmanes",
    labels: {
      objectives: "Objectius",
      areas: "Àrees treballades",
      activities: "Activitats",
      materials: "Materials",
      vocab: "Vocabulari en anglès",
      evaluation: "Avaluació",
      close: "Tancar",
    },
    plans: [
      {
        id: "autumn",
        season: "Tardor",
        destination: "Alemanya",
        teaser:
          "Recollida i classificació de fulles per colors, contes sobre el bosc i manualitats amb castanyes.",
        objectives: [
          "Explorar els canvis de l'entorn natural a la tardor a través dels sentits.",
          "Desenvolupar la motricitat fina mitjançant la manipulació i la classificació d'elements naturals.",
          "Iniciar el grup en vocabulari bàsic en anglès relacionat amb la tardor.",
        ],
        areas: [
          "Descoberta de l'entorn: el bosc i el cicle de les fulles",
          "Comunicació i llenguatges: contes i cançons",
          "Coordinació ull-mà",
        ],
        activities: [
          "Recollida de fulles al pati i classificació per colors i mides",
          "Contacontes «El bosc que canvia de color»",
          "Eriçons de plastilina decorats amb castanyes",
          "Circuit sensorial trepitjant fulles seques",
        ],
        materials: [
          "Fulles seques recollides",
          "Castanyes",
          "Plastilina",
          "Safates de classificació",
          "Conte il·lustrat",
          "Música instrumental de bosc",
        ],
        vocab: ["autumn", "leaf", "brown", "orange", "tree"],
        evaluation:
          "Observació directa i registre fotogràfic del procés de classificació i de la participació a l'assemblea.",
      },
      {
        id: "winter",
        season: "Hivern",
        destination: "Lapònia, Finlàndia",
        teaser:
          "Experimentació sensorial amb neu artificial, cançons sobre el fred i decoració de rens.",
        objectives: [
          "Experimentar amb materials de textura freda a través del joc sensorial.",
          "Ampliar el vocabulari relacionat amb el fred i les estacions.",
          "Fomentar l'expressió corporal i musical amb cançons d'hivern.",
        ],
        areas: [
          "Descoberta de l'entorn: el fred i la neu",
          "Comunicació i llenguatges: cançó i expressió plàstica",
          "Desenvolupament motor",
        ],
        activities: [
          "Joc sensorial amb neu artificial (bicarbonat + escuma d'afaitar)",
          "Cançó «Fred, fred» amb gestos i moviment",
          "Decoració de rens amb empremtes de mans",
          "Flocs de neu amb paper i punxó",
        ],
        materials: [
          "Bicarbonat",
          "Escuma d'afaitar o condicionador",
          "Safates",
          "Paper i tèmperes",
          "Plantilles de rens",
        ],
        vocab: ["winter", "snow", "cold", "reindeer", "white"],
        evaluation:
          "Observació del gaudi i de la tolerància a la textura, i registre de la participació a la cançó.",
      },
      {
        id: "spring",
        season: "Primavera",
        destination: "Països Baixos",
        teaser:
          "Plantació de flors a l'aula, observació del creixement i jocs amb colors vius.",
        objectives: [
          "Observar i respectar el procés de creixement d'una planta.",
          "Reconèixer colors vius a través de la manipulació de flors.",
          "Fomentar la cura de l'entorn natural.",
        ],
        areas: [
          "Descoberta de l'entorn: el cicle de vida de les plantes",
          "Actituds de cura i respecte",
          "Psicomotricitat fina",
        ],
        activities: [
          "Plantació de bulbs de tulipa en testos individuals",
          "Registre diari del creixement amb dibuixos",
          "Classificació de flors per color",
          "Estampació amb flors i tèmpera",
        ],
        materials: [
          "Bulbs o llavors",
          "Testos i terra",
          "Regadores petites",
          "Flors per estampar",
          "Tèmperes",
        ],
        vocab: ["spring", "flower", "grow", "colour", "tulip"],
        evaluation:
          "Seguiment del registre de creixement i de la participació en el reg diari.",
      },
      {
        id: "summer",
        season: "Estiu",
        destination: "El Carib",
        teaser:
          "Jocs d'aigua, contes sobre el mar i manualitats amb petxines i sorra.",
        objectives: [
          "Gaudir del joc sensorial amb aigua i sorra de manera segura.",
          "Associar vocabulari del mar a elements reals.",
          "Desenvolupar la creativitat amb manualitats fetes amb elements naturals.",
        ],
        areas: [
          "Descoberta de l'entorn: el mar i la platja",
          "Joc simbòlic",
          "Expressió plàstica",
        ],
        activities: [
          "Joc d'aigua amb gots, embuts i coladors",
          "Contacontes «Un dia al mar»",
          "Manualitat amb petxines i sorra cinètica",
          "Cerca del tresor sensorial en una safata de sorra",
        ],
        materials: [
          "Safates d'aigua",
          "Sorra cinètica",
          "Petxines",
          "Embuts i coladors",
          "Conte il·lustrat",
        ],
        vocab: ["summer", "sea", "sand", "shell", "sun"],
        evaluation:
          "Observació de l'exploració sensorial i del vocabulari incorporat espontàniament.",
      },
    ],
  },
  contact: {
    eyebrow: "Parlem",
    title: "Busques algú així per al teu equip?",
    text: "Busco incorporar-me a un centre d'educació infantil, de reforç escolar o a una acadèmia d'idiomes on pugui continuar creixent. Escriu-me o truca'm, estaré encantada de parlar-ne.",
    email: "Escriu-me",
    footer: "Mestra d'Educació Infantil",
  },
};
