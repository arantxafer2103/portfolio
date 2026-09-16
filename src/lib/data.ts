export type Experiencia = {
  rol: string;
  lugar: string;
  fechas: string;
  desc: string;
};

export const experiencias: Experiencia[] = [
  {
    rol: "Maestra de Educación Infantil",
    lugar: "Llar d'Infants Quitxalla",
    fechas: "2025–2026",
    desc: "Atención y cuidado de niños de 0 a 3 años, acompañamiento en rutinas diarias, actividades educativas y de psicomotricidad, fomento de la autonomía y seguimiento del desarrollo infantil.",
  },
  {
    rol: "Profesora de catalán para adultos",
    lugar: "Punt i Coma",
    fechas: "2025–2026",
    desc: "Enseñanza de catalán a personas adultas (nivel A1): preparación de actividades y materiales, práctica de expresión oral y escrita y seguimiento del progreso del alumnado.",
  },
  {
    rol: "Monitora escolar (TSAE)",
    lugar: "Punt i Coma",
    fechas: "2024–2026",
    desc: "Planificación, realización y evaluación de actividades con niños y niñas de primaria (1º–6º).",
  },
  {
    rol: "Profesora de refuerzo",
    lugar: "Nascor Formación",
    fechas: "2020–Presente",
    desc: "Métodos de estudio y refuerzo en todas las asignaturas, trabajo de metodologías y estructuración del estudio.",
  },
];

export type Programa = {
  id: string;
  clase: "otono" | "invierno" | "primavera" | "verano";
  icon: "leaf" | "snow" | "sprout" | "sun";
  season: string;
  destino: string;
  duracion: string;
  teaser: string;
  objetivos: string[];
  contenidos: string[];
  actividades: string[];
  materiales: string[];
  vocab: string[];
  evaluacion: string;
};

export const programas: Programa[] = [
  {
    id: "otono",
    clase: "otono",
    icon: "leaf",
    season: "Otoño",
    destino: "Destino: Alemania",
    duracion: "Duración: 3 semanas",
    teaser:
      "Recogida y clasificación de hojas por colores, cuentos sobre el bosque y manualidades con castañas.",
    objetivos: [
      "Explorar los cambios del entorno natural en otoño a través de los sentidos.",
      "Desarrollar la motricidad fina mediante la manipulación y clasificación de elementos naturales.",
      "Iniciar al grupo en vocabulario básico en inglés relacionado con el otoño.",
    ],
    contenidos: [
      "Descubrimiento del entorno: el bosque y el ciclo de las hojas",
      "Comunicación y lenguajes: cuentos y canciones",
      "Coordinación óculo-manual",
    ],
    actividades: [
      "Recogida de hojas en el patio y clasificación por colores y tamaños",
      'Cuentacuentos "El bosque que cambia de color"',
      "Erizos de plastilina decorados con castañas",
      "Circuito sensorial pisando hojas secas",
    ],
    materiales: [
      "Hojas secas recogidas",
      "Castañas",
      "Plastilina",
      "Bandejas de clasificación",
      "Cuento ilustrado",
      "Música instrumental de bosque",
    ],
    vocab: ["autumn", "leaf", "brown", "orange", "tree"],
    evaluacion:
      "Observación directa y registro fotográfico del proceso de clasificación y de la participación en la asamblea.",
  },
  {
    id: "invierno",
    clase: "invierno",
    icon: "snow",
    season: "Invierno",
    destino: "Destino: Laponia, Finlandia",
    duracion: "Duración: 3 semanas",
    teaser:
      "Experimentación sensorial con nieve artificial, canciones sobre el frío y decoración de renos.",
    objetivos: [
      "Experimentar con materiales de textura fría a través del juego sensorial.",
      "Ampliar el vocabulario relacionado con el frío y las estaciones.",
      "Fomentar la expresión corporal y musical mediante canciones de invierno.",
    ],
    contenidos: [
      "Descubrimiento del entorno: el frío y la nieve",
      "Comunicación y lenguajes: canción y expresión plástica",
      "Desarrollo motriz",
    ],
    actividades: [
      "Juego sensorial con nieve artificial (bicarbonato + espuma de afeitar)",
      '"Canción Frío, frío" con gestos y movimiento',
      "Decoración de renos con huellas de manos",
      "Copos de nieve con papel y punzón",
    ],
    materiales: [
      "Bicarbonato",
      "Espuma de afeitar o acondicionador",
      "Bandejas",
      "Papel y témperas",
      "Plantillas de renos",
    ],
    vocab: ["winter", "snow", "cold", "reindeer", "white"],
    evaluacion:
      "Observación del disfrute y la tolerancia a la textura, y registro de la participación en la canción.",
  },
  {
    id: "primavera",
    clase: "primavera",
    icon: "sprout",
    season: "Primavera",
    destino: "Destino: Países Bajos",
    duracion: "Duración: 3 semanas",
    teaser:
      "Plantación de flores en el aula, observación del crecimiento y juegos con colores vivos.",
    objetivos: [
      "Observar y respetar el proceso de crecimiento de una planta.",
      "Reconocer colores vivos a través de la manipulación de flores.",
      "Fomentar el cuidado del entorno natural.",
    ],
    contenidos: [
      "Descubrimiento del entorno: ciclo de vida de las plantas",
      "Actitudes de cuidado y respeto",
      "Psicomotricidad fina",
    ],
    actividades: [
      "Plantación de bulbos de tulipán en macetas individuales",
      "Registro diario del crecimiento con dibujos",
      "Clasificación de flores por color",
      "Estampación con flores y témpera",
    ],
    materiales: [
      "Bulbos o semillas",
      "Macetas y tierra",
      "Regaderas pequeñas",
      "Flores para estampar",
      "Témperas",
    ],
    vocab: ["spring", "flower", "grow", "colour", "tulip"],
    evaluacion:
      "Seguimiento del registro de crecimiento y de la participación en el riego diario.",
  },
  {
    id: "verano",
    clase: "verano",
    icon: "sun",
    season: "Verano",
    destino: "Destino: El Caribe",
    duracion: "Duración: 3 semanas",
    teaser:
      "Juegos de agua, cuentos sobre el mar y manualidades con conchas y arena.",
    objetivos: [
      "Disfrutar del juego sensorial con agua y arena de forma segura.",
      "Asociar vocabulario del mar a elementos reales.",
      "Desarrollar la creatividad mediante manualidades con elementos naturales.",
    ],
    contenidos: [
      "Descubrimiento del entorno: el mar y la playa",
      "Juego simbólico",
      "Expresión plástica",
    ],
    actividades: [
      "Juego de agua con vasos, embudos y coladores",
      'Cuentacuentos "Un día en el mar"',
      "Manualidad con conchas y arena cinética",
      "Búsqueda del tesoro sensorial en bandeja de arena",
    ],
    materiales: [
      "Bandejas de agua",
      "Arena cinética",
      "Conchas",
      "Embudos y coladores",
      "Cuento ilustrado",
    ],
    vocab: ["summer", "sea", "sand", "shell", "sun"],
    evaluacion:
      "Observación de la exploración sensorial y del vocabulario incorporado espontáneamente.",
  },
];

export const corners = [
  {
    icon: "circle" as const,
    title: "Start Corner",
    desc: "Asamblea inicial: emociones, día, tiempo, colores y números para entrar en el idioma jugando.",
  },
  {
    icon: "sound" as const,
    title: "Phonics Corner",
    desc: "Sonidos, pronunciación y primeros pasos de lectoescritura en inglés.",
  },
  {
    icon: "run" as const,
    title: "Active Corner",
    desc: "Movimiento y psicomotricidad: el idioma también se aprende con el cuerpo.",
  },
  {
    icon: "palette" as const,
    title: "Creative Corner",
    desc: "Arte y pequeños experimentos STEM en inglés.",
  },
  {
    icon: "book" as const,
    title: "Reading Corner",
    desc: "Cuentacuentos y comprensión lectora con historias propias del método.",
  },
  {
    icon: "home" as const,
    title: "Home Corner",
    desc: "Recursos para que las familias sigan practicando en casa.",
  },
];
