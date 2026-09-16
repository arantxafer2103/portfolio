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
    digital: "Tecnologia",
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
    ongoing: "En curs",
    prev: "Anterior",
    next: "Següent",
    jobs: [
      {
        role: "Professora de reforç",
        place: "Nascor Formación",
        dates: "2020–Actualitat",
        desc: "Tècniques d'estudi i reforç en totes les assignatures, treball de metodologies i estructuració de l'estudi.",
        current: true,
      },
      {
        role: "Tècnica d'Educació Infantil (TEI)",
        place: "Escola Emili Vallès, Igualada · I3",
        dates: "2022–2024",
        desc: "Suport a l'aula d'I3 (3 anys): participació en les programacions d'aula, acompanyament en les rutines (acollida, higiene, alimentació i descans), atenció individualitzada i preparació de materials i espais.",
      },
      {
        role: "Monitora escolar (TSAE)",
        place: "Punt i Coma",
        dates: "2024–2026",
        desc: "Planificació, realització i avaluació d'activitats amb nens i nenes de primària (1r–6è).",
      },
      {
        role: "Professora de català per a adults",
        place: "Punt i Coma",
        dates: "2025–2026",
        desc: "Ensenyament del català a persones adultes (nivell A1): preparació d'activitats i materials, pràctica de l'expressió oral i escrita i seguiment del progrés de l'alumnat.",
      },
      {
        role: "Mestra d'Educació Infantil",
        place: "Llar d'Infants Quitxalla",
        dates: "2025–2026",
        desc: "Atenció i cura d'infants de 0 a 3 anys, acompanyament en les rutines diàries, activitats educatives i de psicomotricitat, foment de l'autonomia i seguiment del desenvolupament infantil.",
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
    languages: [
      { name: "Castellà", level: "Llengua materna" },
      { name: "Català", level: "C1" },
      { name: "Anglès", level: "B1" },
    ],
  },
  methodology: {
    eyebrow: "Metodologia",
    title: "Anglès des del bressol: Great Little People",
    intro:
      "És la metodologia d'anglès primerenc amb què he treballat a l'aula. Parteix d'una idea senzilla: si l'anglès s'introdueix abans que entrin en joc la traducció i la correcció d'errors, s'adquireix de manera natural, igual que la llengua materna. Les sessions duren una hora, són 100% en anglès i roten per sis espais o corners.",
    corners: [
      {
        desc: "Assemblea inicial: emocions, dia, temps, colors i nombres per entrar a l'idioma jugant.",
        detail:
          "Obre la sessió amb jocs d'assemblea i escalfament. Ens saludem, expliquem com ens sentim, parlem del dia i del temps i repassem colors i nombres: una rutina que dona seguretat i posa el grup en «mode anglès».",
      },
      {
        desc: "Sons, pronunciació i primeres passes de lectoescriptura en anglès.",
        detail:
          "Amb el mètode GLP Phonics es treballen la pronunciació i la comprensió auditiva: sons, cançons i jocs que preparen el camí cap a la lectoescriptura en anglès.",
      },
      {
        desc: "Moviment i psicomotricitat: l'idioma també s'aprèn amb el cos.",
        detail:
          "Jocs col·laboratius basats en el moviment. El vocabulari s'entén i es fixa amb el cos mentre es treballen la psicomotricitat, la coordinació i la cooperació.",
      },
      {
        desc: "Art i petits experiments STEM en anglès.",
        detail:
          "Un espai per a la imaginació, la creativitat i l'expressió artística: manualitats i petits experiments STEM connectats amb el tema de la sessió, sempre en anglès.",
      },
      {
        desc: "Contacontes i comprensió lectora amb històries pròpies del mètode.",
        detail:
          "Contacontes amb les històries del mètode per desenvolupar la comprensió i l'expressió oral. Els infants manipulen escenes i personatges i recreen la història.",
      },
      {
        desc: "Recursos perquè les famílies continuïn practicant a casa.",
        detail:
          "Blended learning: les famílies reben recursos digitals i imprimibles per continuar practicant a casa i donar continuïtat al que s'ha après a l'aula.",
      },
    ],
    materialsLabel: "Materials del mètode",
    openLabel: "Veure'n més",
    callout:
      "A l'aula combino aquests corners amb materials sensorials i manipulatius — flashcards, mystery boxes, peluixos, mocadors de colors — perquè cada sessió tingui sempre un component de joc, moviment i conte.",
    credit: "Metodologia desenvolupada per Great Little People —",
  },
  digital: {
    eyebrow: "Competència digital",
    title: "Tecnologia, gamificació i IA",
    intro:
      "Faig servir la tecnologia com a aliada del joc, no com a substituta: preparo materials visuals i interactius, dissenyo dinàmiques gamificades i em recolzo en la intel·ligència artificial per planificar i adaptar les propostes a cada grup.",
    items: [
      {
        title: "Materials visuals i interactius",
        text: "Dissenyo fitxes, cartelleria d'aula, contes il·lustrats i presentacions interactives adaptades a l'edat i als objectius de cada proposta.",
        tags: ["Canva", "Genially"],
      },
      {
        title: "Gamificació",
        text: "Converteixo el repàs i el reforç en un joc amb reptes, nivells i recompenses que mantenen la motivació i fan visible el progrés.",
        tags: ["Reptes", "Recompenses", "Jocs interactius"],
      },
      {
        title: "Intel·ligència artificial",
        text: "Em recolzo en eines d'IA per generar idees d'activitats, adaptar i traduir materials i personalitzar el reforç, sempre amb criteri pedagògic i revisió pròpia.",
        tags: ["IA generativa", "Personalització", "Traducció"],
      },
    ],
    note: "Amb els més petits, la tecnologia es queda al costat de la preparació: a l'aula manen el joc, la manipulació i el vincle.",
  },
  programming: {
    eyebrow: "Exemple de treball",
    title: "Programació d'aula",
    intro:
      "Programació pensada per a un curs complet amb nens i nenes de 2–3 anys, amb una línia d'aprenentatge coherent: a cada estació, el grup «viatja» a un país diferent segons el seu clima, i totes les activitats —contes, cançons, manualitats, joc sensorial— giren al voltant d'aquesta destinació, amb una mica de vocabulari en anglès. Cada fitxa tècnica inclou la vinculació amb el currículum de Catalunya (Decret 21/2023). Toca una targeta per veure-la.",
    cta: "Veure fitxa tècnica",
    duration: "Durada: 3 setmanes",
    decreeBadge: "Decret 21/2023 · Eixos",
    labels: {
      tabPlan: "Proposta",
      tabCurriculum: "Currículum",
      objectives: "Objectius didàctics",
      activities: "Activitats",
      materials: "Materials",
      vocab: "Vocabulari en anglès",
      evaluation: "Avaluació",
      close: "Tancar",
      eixos: "Eixos de desenvolupament i aprenentatge",
      generalObjectives: "Objectius generals de l'etapa (art. 4)",
      competences: "Competències específiques",
      criteria: "Criteris d'avaluació",
      sabers: "Sabers · primer cicle",
      eix: "Eix",
      competence: "CE",
      source:
        "Decret 21/2023, de 7 de febrer, d'ordenació dels ensenyaments de l'educació infantil (DOGC núm. 8851).",
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
