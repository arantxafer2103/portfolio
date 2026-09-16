import type { Locale } from "./config";
import type { SeasonId } from "./types";

// Catalan texts are verbatim from Decret 21/2023 (DOGC 8851); es/en are translations.
export const DECREE_URL =
  "https://portaldogc.gencat.cat/utilsEADOP/PDF/8851/1955221.pdf";

type Eix = 1 | 2 | 3 | 4;
type Objective = "a" | "b" | "d" | "e" | "f" | "g" | "h";
type Competence = "1.1" | "1.2" | "1.3" | "1.4" | "2.1" | "2.2" | "3.1" | "3.2" | "3.3" | "4.2";

type Criterion =
  | "c31rel" | "c11manip" | "c22lit" | "c22explore" | "c12emo" | "c32hyp"
  | "c33care" | "c14habits" | "c13time" | "c31qty" | "c42lang" | "c21oral";
type Saber =
  | "sClassif" | "sQualities" | "sManip" | "sLit" | "sSongs" | "sDance" | "sEmotions"
  | "sTrial" | "sEffects" | "sNatureCare" | "sTimeTerms" | "sArtLang" | "sQuantity"
  | "sCulture" | "sVocab";

type DecreeTexts = {
  eixos: Record<Eix, string>;
  objectives: Record<Objective, string>;
  competences: Record<Competence, string>;
  criteria: Record<Criterion, string>;
  sabers: Record<Saber, string>;
};

export type CurriculumLink = {
  eixos: Eix[];
  objectives: Objective[];
  competences: Competence[];
  criteria: Criterion[];
  sabers: Saber[];
};

export const curriculum: Record<SeasonId, CurriculumLink> = {
  autumn: {
    eixos: [3, 1, 2],
    objectives: ["a", "d", "e"],
    competences: ["3.1", "1.1", "2.2"],
    criteria: ["c31rel", "c11manip", "c22lit"],
    sabers: ["sClassif", "sQualities", "sManip", "sLit"],
  },
  winter: {
    eixos: [1, 2, 3],
    objectives: ["b", "e", "g"],
    competences: ["1.2", "2.2", "3.2"],
    criteria: ["c12emo", "c22explore", "c32hyp"],
    sabers: ["sEmotions", "sSongs", "sDance", "sTrial"],
  },
  spring: {
    eixos: [3, 1, 2],
    objectives: ["d", "h", "e"],
    competences: ["3.3", "1.4", "1.3"],
    criteria: ["c33care", "c14habits", "c13time"],
    sabers: ["sEffects", "sNatureCare", "sTimeTerms", "sArtLang"],
  },
  summer: {
    eixos: [3, 4, 2],
    objectives: ["d", "f", "g"],
    competences: ["3.1", "4.2", "2.1"],
    criteria: ["c31qty", "c42lang", "c21oral"],
    sabers: ["sQuantity", "sCulture", "sVocab", "sQualities"],
  },
};

const ca: DecreeTexts = {
  eixos: {
    1: "Un infant que creix amb autonomia i confiança",
    2: "Un infant que es comunica amb diferents llenguatges",
    3: "Un infant que descobreix l'entorn amb curiositat",
    4: "Un infant que forma part de la diversitat del món que l'envolta",
  },
  objectives: {
    a: "Conèixer el propi cos i el dels altres, adonant-se de les seves possibilitats, i progressar en el seu domini, el moviment i la coordinació.",
    b: "Assolir progressivament seguretat afectiva i benestar emocional, i anar-se formant una autoimatge positiva i una imatge positiva dels altres.",
    d: "Observar i explorar l'entorn proper, natural, social i cultural, amb una actitud de curiositat, indagació i respecte.",
    e: "Comunicar-se i representar la realitat a través de diferents llenguatges i formes d'expressió.",
    f: "Gaudir i relacionar-se positivament amb els altres en igualtat, conviure en la diversitat i adquirir progressivament hàbits de convivència i relació social.",
    g: "Explorar l'ús del raonament matemàtic, la lectura i l'escriptura, la imatge, el moviment, el gest i el ritme, des de les situacions quotidianes i contextualitzades, i resoldre, organitzar, comprendre o comunicar aspectes de la realitat propera.",
    h: "Desenvolupar actituds que fomentin la igualtat entre tots els gèneres, la salut, la cura, el consum responsable, els hàbits sostenibles i el respecte i la valoració de la diversitat.",
  },
  competences: {
    "1.1": "Progressar en el coneixement i el domini del cos, en el moviment i la coordinació, adonant-se de les pròpies possibilitats, per anar desenvolupant autonomia personal i una autoimatge ajustada i positiva.",
    "1.2": "Viure les emocions, expressant i reconeixent sentiments i necessitats, per anar creixent en benestar emocional i seguretat afectiva.",
    "1.3": "Adonar-se de la influència de l'espai i el temps en les situacions de vida quotidiana a partir de les experiències viscudes, per créixer amb seguretat i entendre el món.",
    "1.4": "Progressar en l'adquisició de normes i hàbits saludables i ecosocialment responsables, guanyant confiança en les pròpies possibilitats i capacitats per construir la pròpia identitat.",
    "2.1": "Interpretar, comprendre i expressar missatges, emprant recursos i coneixements basats en la pròpia experiència, per avançar en la comunicació i la construcció de nous aprenentatges.",
    "2.2": "Expressar-se de manera entenedora, personal i creativa mitjançant diferents llenguatges, explorant-ne les possibilitats i gaudint-ne, per respondre a diferents contextos comunicatius.",
    "3.1": "Observar i reconèixer característiques de materials i elements i establir relacions entre ells, mitjançant l'experimentació i la manipulació sensorial, per avançar cap a estructures de pensament cada vegada més complexes desenvolupant habilitats de raonament matemàtic.",
    "3.2": "Desenvolupar, de manera progressiva, diferents formes de raonament i procediments del pensament científic, a través de l'observació i la manipulació, per iniciar-se en la interpretació de l'entorn i respondre de manera creativa als diferents reptes i situacions.",
    "3.3": "Explorar i reconèixer elements i fenòmens del món natural, establint relacions entre la pròpia acció i les conseqüències que se'n deriven, per iniciar hàbits de sostenibilitat i conservació de l'entorn.",
    "4.2": "Apreciar progressivament l'entorn social i cultural proper i la seva diversitat, mostrant interès i respecte per conviure.",
  },
  criteria: {
    c31rel: "Establir relacions entre elements, diferenciant-ne qualitats o atributs, captant patrons i sabent-ho comunicar.",
    c11manip: "Adquirir habilitats manipulatives en situacions quotidianes, mostrant una coordinació progressiva.",
    c22lit: "Gaudir i participar en propostes de literatura infantil, explorant, descobrint i apreciant la bellesa del llenguatge literari.",
    c22explore: "Explorar les possibilitats sonores, simbòliques, cinètiques, visuals i plàstiques a través dels elements de l'entorn.",
    c12emo: "Expressar progressivament les necessitats i els desitjos derivats de les pròpies emocions adquirint confiança i seguretat afectiva i emocional.",
    c32hyp: "Plantejar i verificar hipòtesis a partir de la manipulació i l'experimentació sobre diferents elements i materials per tal d'entendre els seus comportaments.",
    c33care: "Conèixer i cuidar amb una actitud de respecte el medi natural, identificant l'impacte de les accions humanes en la conservació i la preservació de l'entorn.",
    c14habits: "Incorporar estratègies i hàbits saludables relacionats amb la cura personal i la cura de l'entorn, mostrant progressivament iniciativa i confiança.",
    c13time: "Utilitzar les nocions temporals i espacials bàsiques a partir de les pròpies vivències.",
    c31qty: "Construir la noció de quantitat a partir de situacions contextualitzades i significatives.",
    c42lang: "Participar en situacions d'ús de diferents llengües, mostrant curiositat i respecte per la diversitat de perfils lingüístics.",
    c21oral: "Fer un ús funcional de la llengua oral augmentant el repertori lingüístic i expressant idees, desitjos, sentiments i emocions.",
  },
  sabers: {
    sClassif: "Iniciació en la classificació i el repartiment d'objectes.",
    sQualities: "Diferenciació d'algunes qualitats sensorials fruit de l'observació i l'exploració dels objectes, materials i elements de l'entorn natural i de la comparació dels seus atributs i propietats.",
    sManip: "Curiositat i interès en l'exploració sensoriomotriu i en les habilitats manipulatives necessàries.",
    sLit: "Interès progressiu pels textos literaris infantils orals i escrits. Gaudi d'aquests textos.",
    sSongs: "Reconeixement i reproducció de cançons, cantarelles, poemes, jocs de falda i ritmes coneguts.",
    sDance: "Participació en jocs i danses senzilles reproduint alguns moviments i gestos.",
    sEmotions: "Vivència i expressió d'emocions, sentiments i sensacions.",
    sTrial: "Desenvolupament d'habilitats com l'observació, la comprovació i l'assaig-error en els contextos de joc i la vida quotidiana.",
    sEffects: "Descoberta dels efectes de les pròpies accions en el medi natural.",
    sNatureCare: "Manipulació i experimentació d'elements de l'entorn natural amb cura i respecte.",
    sTimeTerms: "Iniciació en l'ús de termes relatius a l'organització del temps (ara, després, avui, demà, etc.).",
    sArtLang: "Iniciació en la descoberta i l'ús del llenguatge plàstic com a oportunitat d'expressió i representació.",
    sQuantity: "Reconeixement progressiu de les primeres nocions quantitatives (molt, poc, bastant…) en situacions quotidianes.",
    sCulture: "Exploració progressiva de l'entorn social i cultural amb interès i curiositat.",
    sVocab: "Ampliació progressiva del repertori lingüístic.",
  },
};

const es: DecreeTexts = {
  eixos: {
    1: "Un niño o niña que crece con autonomía y confianza",
    2: "Un niño o niña que se comunica con diferentes lenguajes",
    3: "Un niño o niña que descubre el entorno con curiosidad",
    4: "Un niño o niña que forma parte de la diversidad del mundo que le rodea",
  },
  objectives: {
    a: "Conocer el propio cuerpo y el de los demás, dándose cuenta de sus posibilidades, y progresar en su dominio, el movimiento y la coordinación.",
    b: "Alcanzar progresivamente seguridad afectiva y bienestar emocional, e ir formándose una autoimagen positiva y una imagen positiva de los demás.",
    d: "Observar y explorar el entorno cercano, natural, social y cultural, con una actitud de curiosidad, indagación y respeto.",
    e: "Comunicarse y representar la realidad a través de diferentes lenguajes y formas de expresión.",
    f: "Disfrutar y relacionarse positivamente con los demás en igualdad, convivir en la diversidad y adquirir progresivamente hábitos de convivencia y relación social.",
    g: "Explorar el uso del razonamiento matemático, la lectura y la escritura, la imagen, el movimiento, el gesto y el ritmo, desde situaciones cotidianas y contextualizadas, y resolver, organizar, comprender o comunicar aspectos de la realidad cercana.",
    h: "Desarrollar actitudes que fomenten la igualdad entre todos los géneros, la salud, el cuidado, el consumo responsable, los hábitos sostenibles y el respeto y la valoración de la diversidad.",
  },
  competences: {
    "1.1": "Progresar en el conocimiento y el dominio del cuerpo, en el movimiento y la coordinación, dándose cuenta de las propias posibilidades, para ir desarrollando autonomía personal y una autoimagen ajustada y positiva.",
    "1.2": "Vivir las emociones, expresando y reconociendo sentimientos y necesidades, para ir creciendo en bienestar emocional y seguridad afectiva.",
    "1.3": "Darse cuenta de la influencia del espacio y el tiempo en las situaciones de la vida cotidiana a partir de las experiencias vividas, para crecer con seguridad y entender el mundo.",
    "1.4": "Progresar en la adquisición de normas y hábitos saludables y ecosocialmente responsables, ganando confianza en las propias posibilidades y capacidades para construir la propia identidad.",
    "2.1": "Interpretar, comprender y expresar mensajes, empleando recursos y conocimientos basados en la propia experiencia, para avanzar en la comunicación y la construcción de nuevos aprendizajes.",
    "2.2": "Expresarse de manera comprensible, personal y creativa mediante diferentes lenguajes, explorando sus posibilidades y disfrutándolos, para responder a diferentes contextos comunicativos.",
    "3.1": "Observar y reconocer características de materiales y elementos y establecer relaciones entre ellos, mediante la experimentación y la manipulación sensorial, para avanzar hacia estructuras de pensamiento cada vez más complejas desarrollando habilidades de razonamiento matemático.",
    "3.2": "Desarrollar, de manera progresiva, diferentes formas de razonamiento y procedimientos del pensamiento científico, a través de la observación y la manipulación, para iniciarse en la interpretación del entorno y responder de manera creativa a los diferentes retos y situaciones.",
    "3.3": "Explorar y reconocer elementos y fenómenos del mundo natural, estableciendo relaciones entre la propia acción y las consecuencias que se derivan, para iniciar hábitos de sostenibilidad y conservación del entorno.",
    "4.2": "Apreciar progresivamente el entorno social y cultural cercano y su diversidad, mostrando interés y respeto para convivir.",
  },
  criteria: {
    c31rel: "Establecer relaciones entre elementos, diferenciando sus cualidades o atributos, captando patrones y sabiendo comunicarlo.",
    c11manip: "Adquirir habilidades manipulativas en situaciones cotidianas, mostrando una coordinación progresiva.",
    c22lit: "Disfrutar y participar en propuestas de literatura infantil, explorando, descubriendo y apreciando la belleza del lenguaje literario.",
    c22explore: "Explorar las posibilidades sonoras, simbólicas, cinéticas, visuales y plásticas a través de los elementos del entorno.",
    c12emo: "Expresar progresivamente las necesidades y los deseos derivados de las propias emociones adquiriendo confianza y seguridad afectiva y emocional.",
    c32hyp: "Plantear y verificar hipótesis a partir de la manipulación y la experimentación sobre diferentes elementos y materiales para entender sus comportamientos.",
    c33care: "Conocer y cuidar con una actitud de respeto el medio natural, identificando el impacto de las acciones humanas en la conservación y la preservación del entorno.",
    c14habits: "Incorporar estrategias y hábitos saludables relacionados con el cuidado personal y el cuidado del entorno, mostrando progresivamente iniciativa y confianza.",
    c13time: "Utilizar las nociones temporales y espaciales básicas a partir de las propias vivencias.",
    c31qty: "Construir la noción de cantidad a partir de situaciones contextualizadas y significativas.",
    c42lang: "Participar en situaciones de uso de diferentes lenguas, mostrando curiosidad y respeto por la diversidad de perfiles lingüísticos.",
    c21oral: "Hacer un uso funcional de la lengua oral aumentando el repertorio lingüístico y expresando ideas, deseos, sentimientos y emociones.",
  },
  sabers: {
    sClassif: "Iniciación en la clasificación y el reparto de objetos.",
    sQualities: "Diferenciación de algunas cualidades sensoriales fruto de la observación y la exploración de los objetos, materiales y elementos del entorno natural y de la comparación de sus atributos y propiedades.",
    sManip: "Curiosidad e interés en la exploración sensoriomotriz y en las habilidades manipulativas necesarias.",
    sLit: "Interés progresivo por los textos literarios infantiles orales y escritos. Disfrute de estos textos.",
    sSongs: "Reconocimiento y reproducción de canciones, cantinelas, poemas, juegos de regazo y ritmos conocidos.",
    sDance: "Participación en juegos y danzas sencillas reproduciendo algunos movimientos y gestos.",
    sEmotions: "Vivencia y expresión de emociones, sentimientos y sensaciones.",
    sTrial: "Desarrollo de habilidades como la observación, la comprobación y el ensayo-error en los contextos de juego y la vida cotidiana.",
    sEffects: "Descubrimiento de los efectos de las propias acciones en el medio natural.",
    sNatureCare: "Manipulación y experimentación de elementos del entorno natural con cuidado y respeto.",
    sTimeTerms: "Iniciación en el uso de términos relativos a la organización del tiempo (ahora, después, hoy, mañana, etc.).",
    sArtLang: "Iniciación en el descubrimiento y el uso del lenguaje plástico como oportunidad de expresión y representación.",
    sQuantity: "Reconocimiento progresivo de las primeras nociones cuantitativas (mucho, poco, bastante…) en situaciones cotidianas.",
    sCulture: "Exploración progresiva del entorno social y cultural con interés y curiosidad.",
    sVocab: "Ampliación progresiva del repertorio lingüístico.",
  },
};

const en: DecreeTexts = {
  eixos: {
    1: "A child who grows with autonomy and confidence",
    2: "A child who communicates through different languages",
    3: "A child who discovers their surroundings with curiosity",
    4: "A child who is part of the diversity of the world around them",
  },
  objectives: {
    a: "Get to know their own body and those of others, becoming aware of its possibilities, and make progress in body control, movement and coordination.",
    b: "Progressively gain emotional security and well-being, and build a positive self-image and a positive image of others.",
    d: "Observe and explore their immediate natural, social and cultural surroundings with curiosity, inquiry and respect.",
    e: "Communicate and represent reality through different languages and forms of expression.",
    f: "Enjoy and relate positively to others on equal terms, live together in diversity and gradually acquire habits of coexistence and social interaction.",
    g: "Explore the use of mathematical reasoning, reading and writing, images, movement, gesture and rhythm in everyday, contextualised situations, and solve, organise, understand or communicate aspects of their immediate reality.",
    h: "Develop attitudes that promote equality between all genders, health, care, responsible consumption, sustainable habits, and respect for and appreciation of diversity.",
  },
  competences: {
    "1.1": "Make progress in knowing and controlling the body, movement and coordination, becoming aware of one's own possibilities, to develop personal autonomy and a realistic, positive self-image.",
    "1.2": "Experience emotions, expressing and recognising feelings and needs, to grow in emotional well-being and security.",
    "1.3": "Become aware of how space and time shape everyday situations through lived experiences, to grow with confidence and understand the world.",
    "1.4": "Make progress in acquiring healthy and eco-socially responsible rules and habits, gaining confidence in one's own possibilities and abilities to build one's identity.",
    "2.1": "Interpret, understand and express messages, using resources and knowledge based on one's own experience, to advance in communication and in building new learning.",
    "2.2": "Express oneself clearly, personally and creatively through different languages, exploring and enjoying their possibilities, to respond to different communicative contexts.",
    "3.1": "Observe and recognise the features of materials and objects and establish relationships between them through experimentation and sensory handling, moving towards increasingly complex thinking and developing mathematical reasoning skills.",
    "3.2": "Progressively develop different forms of reasoning and scientific thinking processes through observation and handling, to begin interpreting the environment and respond creatively to different challenges and situations.",
    "3.3": "Explore and recognise elements and phenomena of the natural world, relating one's own actions to their consequences, to start building habits of sustainability and care for the environment.",
    "4.2": "Progressively appreciate the immediate social and cultural environment and its diversity, showing interest and respect in living together.",
  },
  criteria: {
    c31rel: "Establish relationships between objects, distinguishing their qualities or attributes, noticing patterns and being able to communicate them.",
    c11manip: "Acquire hands-on skills in everyday situations, showing increasing coordination.",
    c22lit: "Enjoy and take part in children's literature activities, exploring, discovering and appreciating the beauty of literary language.",
    c22explore: "Explore the sound, symbolic, kinetic, visual and artistic possibilities of the elements around them.",
    c12emo: "Gradually express the needs and wishes arising from their own emotions, gaining confidence and emotional security.",
    c32hyp: "Pose and test hypotheses by handling and experimenting with different objects and materials to understand how they behave.",
    c33care: "Get to know and care for the natural environment with respect, identifying the impact of human actions on conserving and preserving it.",
    c14habits: "Adopt healthy strategies and habits related to personal care and care for the environment, showing growing initiative and confidence.",
    c13time: "Use basic notions of time and space based on their own experiences.",
    c31qty: "Build the notion of quantity through meaningful, contextualised situations.",
    c42lang: "Take part in situations where different languages are used, showing curiosity and respect for linguistic diversity.",
    c21oral: "Use spoken language functionally, expanding their vocabulary and expressing ideas, wishes, feelings and emotions.",
  },
  sabers: {
    sClassif: "First steps in sorting and sharing out objects.",
    sQualities: "Distinguishing some sensory qualities by observing and exploring objects, materials and natural elements and comparing their attributes and properties.",
    sManip: "Curiosity and interest in sensorimotor exploration and the necessary hands-on skills.",
    sLit: "Growing interest in, and enjoyment of, oral and written children's literature.",
    sSongs: "Recognising and reproducing familiar songs, chants, poems, lap games and rhythms.",
    sDance: "Taking part in simple games and dances, copying some movements and gestures.",
    sEmotions: "Experiencing and expressing emotions, feelings and sensations.",
    sTrial: "Developing skills such as observation, checking and trial and error in play and everyday life.",
    sEffects: "Discovering the effects of their own actions on the natural environment.",
    sNatureCare: "Handling and experimenting with natural elements with care and respect.",
    sTimeTerms: "First use of words about time (now, later, today, tomorrow, etc.).",
    sArtLang: "First discovery and use of visual art as a means of expression and representation.",
    sQuantity: "Gradually recognising first notions of quantity (a lot, a little, quite a lot…) in everyday situations.",
    sCulture: "Gradually exploring the social and cultural environment with interest and curiosity.",
    sVocab: "Gradually expanding their vocabulary.",
  },
};

const texts: Record<Locale, DecreeTexts> = { ca, es, en };

export function resolveCurriculum(locale: Locale, season: SeasonId) {
  const t = texts[locale];
  const link = curriculum[season];
  return {
    eixos: [...link.eixos].sort().map((n) => ({ n, text: t.eixos[n] })),
    objectives: link.objectives.map((letter) => ({ letter, text: t.objectives[letter] })),
    competences: link.competences.map((id) => ({ id, text: t.competences[id] })),
    criteria: link.criteria.map((k) => t.criteria[k]),
    sabers: link.sabers.map((k) => t.sabers[k]),
  };
}

export type ResolvedCurriculum = ReturnType<typeof resolveCurriculum>;
