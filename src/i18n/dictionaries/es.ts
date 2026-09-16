import type { Dictionary } from "../types";

export const es: Dictionary = {
  meta: {
    title: "Arantxa Fernández — Maestra de Educación Infantil",
    description:
      "Portfolio de Arantxa Fernández, maestra de Educación Infantil (0-3 años): experiencia, formación, metodología de inglés temprano y un ejemplo de programación de aula.",
  },
  nav: {
    experience: "Experiencia",
    education: "Formación",
    methodology: "Metodología",
    programming: "Programación",
    contact: "Contacto",
    skip: "Saltar al contenido",
    language: "Idioma",
  },
  hero: {
    role: "Maestra de Educación Infantil · 0–3 años",
    bio: "Formada en el Grado Superior de Educación Infantil y terminando el Grado en Educación Infantil en la UNED. Combino la atención a la primera infancia con la docencia de refuerzo escolar e idiomas. Me define la empatía, la organización y la capacidad de adaptarme a edades y entornos distintos — y las ganas de seguir aprendiendo en un equipo que crea en el juego y el acompañamiento emocional.",
    location: "Esparreguera, Barcelona",
    photoAlt: "Retrato de Arantxa Fernández",
  },
  experience: {
    eyebrow: "Trayectoria",
    title: "Experiencia",
    jobs: [
      {
        role: "Maestra de Educación Infantil",
        place: "Llar d'Infants Quitxalla",
        dates: "2025–2026",
        desc: "Atención y cuidado de niños de 0 a 3 años, acompañamiento en rutinas diarias, actividades educativas y de psicomotricidad, fomento de la autonomía y seguimiento del desarrollo infantil.",
      },
      {
        role: "Profesora de catalán para adultos",
        place: "Punt i Coma",
        dates: "2025–2026",
        desc: "Enseñanza de catalán a personas adultas (nivel A1): preparación de actividades y materiales, práctica de expresión oral y escrita y seguimiento del progreso del alumnado.",
      },
      {
        role: "Monitora escolar (TSAE)",
        place: "Punt i Coma",
        dates: "2024–2026",
        desc: "Planificación, realización y evaluación de actividades con niños y niñas de primaria (1º–6º).",
      },
      {
        role: "Profesora de refuerzo",
        place: "Nascor Formación",
        dates: "2020–Actualidad",
        desc: "Técnicas de estudio y refuerzo en todas las asignaturas, trabajo de metodologías y estructuración del estudio.",
      },
    ],
  },
  education: {
    eyebrow: "Bagaje",
    title: "Formación e idiomas",
    studiesLabel: "Estudios",
    languagesLabel: "Idiomas",
    studies: [
      {
        title: "Grado en Educación Infantil",
        place: "UNED · Universidad Nacional de Educación a Distancia",
        years: "2022–2025",
      },
      {
        title: "Grado Superior en Educación Infantil",
        place: "Institut Milà i Fontanals, Igualada",
        years: "2020–2022",
      },
    ],
    languages: ["Castellano", "Catalán", "Inglés"],
  },
  methodology: {
    eyebrow: "Metodología",
    title: "Inglés desde la cuna: Great Little People",
    intro:
      "Es la metodología de inglés temprano con la que he trabajado en el aula. Parte de una idea sencilla: si el inglés se introduce antes de que entren en juego la traducción y la corrección de errores, se adquiere de forma natural, igual que la lengua materna. Las sesiones duran una hora, son 100% en inglés y rotan por seis espacios o corners.",
    corners: [
      "Asamblea inicial: emociones, día, tiempo, colores y números para entrar en el idioma jugando.",
      "Sonidos, pronunciación y primeros pasos de lectoescritura en inglés.",
      "Movimiento y psicomotricidad: el idioma también se aprende con el cuerpo.",
      "Arte y pequeños experimentos STEM en inglés.",
      "Cuentacuentos y comprensión lectora con historias propias del método.",
      "Recursos para que las familias sigan practicando en casa.",
    ],
    callout:
      "En el aula combino estos corners con materiales sensoriales y manipulativos — flashcards, mystery boxes, peluches, pañuelos de colores — para que cada sesión tenga siempre un componente de juego, movimiento y cuento.",
    credit: "Metodología desarrollada por Great Little People —",
  },
  programming: {
    eyebrow: "Ejemplo de trabajo",
    title: "Programación de aula",
    intro:
      "Programación pensada para un curso completo con niños y niñas de 2–3 años, con una línea de aprendizaje coherente: en cada estación, el grupo «viaja» a un país distinto según su clima, y todas las actividades —cuentos, canciones, manualidades, juego sensorial— giran alrededor de ese destino, con algo de vocabulario en inglés. Pulsa una tarjeta para ver su ficha técnica.",
    cta: "Ver ficha técnica",
    duration: "Duración: 3 semanas",
    labels: {
      objectives: "Objetivos",
      areas: "Áreas trabajadas",
      activities: "Actividades",
      materials: "Materiales",
      vocab: "Vocabulario en inglés",
      evaluation: "Evaluación",
      close: "Cerrar",
    },
    plans: [
      {
        id: "autumn",
        season: "Otoño",
        destination: "Alemania",
        teaser:
          "Recogida y clasificación de hojas por colores, cuentos sobre el bosque y manualidades con castañas.",
        objectives: [
          "Explorar los cambios del entorno natural en otoño a través de los sentidos.",
          "Desarrollar la motricidad fina mediante la manipulación y clasificación de elementos naturales.",
          "Iniciar al grupo en vocabulario básico en inglés relacionado con el otoño.",
        ],
        areas: [
          "Descubrimiento del entorno: el bosque y el ciclo de las hojas",
          "Comunicación y lenguajes: cuentos y canciones",
          "Coordinación óculo-manual",
        ],
        activities: [
          "Recogida de hojas en el patio y clasificación por colores y tamaños",
          "Cuentacuentos «El bosque que cambia de color»",
          "Erizos de plastilina decorados con castañas",
          "Circuito sensorial pisando hojas secas",
        ],
        materials: [
          "Hojas secas recogidas",
          "Castañas",
          "Plastilina",
          "Bandejas de clasificación",
          "Cuento ilustrado",
          "Música instrumental de bosque",
        ],
        vocab: ["autumn", "leaf", "brown", "orange", "tree"],
        evaluation:
          "Observación directa y registro fotográfico del proceso de clasificación y de la participación en la asamblea.",
      },
      {
        id: "winter",
        season: "Invierno",
        destination: "Laponia, Finlandia",
        teaser:
          "Experimentación sensorial con nieve artificial, canciones sobre el frío y decoración de renos.",
        objectives: [
          "Experimentar con materiales de textura fría a través del juego sensorial.",
          "Ampliar el vocabulario relacionado con el frío y las estaciones.",
          "Fomentar la expresión corporal y musical mediante canciones de invierno.",
        ],
        areas: [
          "Descubrimiento del entorno: el frío y la nieve",
          "Comunicación y lenguajes: canción y expresión plástica",
          "Desarrollo motriz",
        ],
        activities: [
          "Juego sensorial con nieve artificial (bicarbonato + espuma de afeitar)",
          "Canción «Frío, frío» con gestos y movimiento",
          "Decoración de renos con huellas de manos",
          "Copos de nieve con papel y punzón",
        ],
        materials: [
          "Bicarbonato",
          "Espuma de afeitar o acondicionador",
          "Bandejas",
          "Papel y témperas",
          "Plantillas de renos",
        ],
        vocab: ["winter", "snow", "cold", "reindeer", "white"],
        evaluation:
          "Observación del disfrute y la tolerancia a la textura, y registro de la participación en la canción.",
      },
      {
        id: "spring",
        season: "Primavera",
        destination: "Países Bajos",
        teaser:
          "Plantación de flores en el aula, observación del crecimiento y juegos con colores vivos.",
        objectives: [
          "Observar y respetar el proceso de crecimiento de una planta.",
          "Reconocer colores vivos a través de la manipulación de flores.",
          "Fomentar el cuidado del entorno natural.",
        ],
        areas: [
          "Descubrimiento del entorno: ciclo de vida de las plantas",
          "Actitudes de cuidado y respeto",
          "Psicomotricidad fina",
        ],
        activities: [
          "Plantación de bulbos de tulipán en macetas individuales",
          "Registro diario del crecimiento con dibujos",
          "Clasificación de flores por color",
          "Estampación con flores y témpera",
        ],
        materials: [
          "Bulbos o semillas",
          "Macetas y tierra",
          "Regaderas pequeñas",
          "Flores para estampar",
          "Témperas",
        ],
        vocab: ["spring", "flower", "grow", "colour", "tulip"],
        evaluation:
          "Seguimiento del registro de crecimiento y de la participación en el riego diario.",
      },
      {
        id: "summer",
        season: "Verano",
        destination: "El Caribe",
        teaser:
          "Juegos de agua, cuentos sobre el mar y manualidades con conchas y arena.",
        objectives: [
          "Disfrutar del juego sensorial con agua y arena de forma segura.",
          "Asociar vocabulario del mar a elementos reales.",
          "Desarrollar la creatividad mediante manualidades con elementos naturales.",
        ],
        areas: [
          "Descubrimiento del entorno: el mar y la playa",
          "Juego simbólico",
          "Expresión plástica",
        ],
        activities: [
          "Juego de agua con vasos, embudos y coladores",
          "Cuentacuentos «Un día en el mar»",
          "Manualidad con conchas y arena cinética",
          "Búsqueda del tesoro sensorial en bandeja de arena",
        ],
        materials: [
          "Bandejas de agua",
          "Arena cinética",
          "Conchas",
          "Embudos y coladores",
          "Cuento ilustrado",
        ],
        vocab: ["summer", "sea", "sand", "shell", "sun"],
        evaluation:
          "Observación de la exploración sensorial y del vocabulario incorporado espontáneamente.",
      },
    ],
  },
  contact: {
    eyebrow: "Hablemos",
    title: "¿Buscas a alguien así en tu equipo?",
    text: "Busco incorporarme a un centro de educación infantil, de refuerzo escolar o a una academia de idiomas donde pueda seguir creciendo. Escríbeme o llámame, estaré encantada de charlar.",
    email: "Escríbeme",
    footer: "Maestra de Educación Infantil",
  },
};
