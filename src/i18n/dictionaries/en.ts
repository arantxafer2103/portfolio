import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: {
    title: "Arantxa Fernández — Early Childhood Educator",
    description:
      "Portfolio of Arantxa Fernández, early childhood educator (ages 0–3): experience, education, early English methodology and a sample classroom plan.",
  },
  nav: {
    experience: "Experience",
    education: "Education",
    methodology: "Methodology",
    programming: "Teaching plan",
    contact: "Contact",
    skip: "Skip to content",
    language: "Language",
  },
  hero: {
    role: "Early Childhood Educator · Ages 0–3",
    bio: "Trained through the Higher Technician Diploma in Early Childhood Education and completing my Bachelor's Degree in Early Childhood Education at UNED. I combine early years care with tutoring and language teaching. I'm driven by empathy, organisation and the ability to adapt to different ages and settings — and I'm eager to keep learning in a team that believes in play and emotional support.",
    location: "Esparreguera, Barcelona",
    photoAlt: "Portrait of Arantxa Fernández",
  },
  experience: {
    eyebrow: "Career",
    title: "Experience",
    jobs: [
      {
        role: "Early Childhood Teacher",
        place: "Llar d'Infants Quitxalla",
        dates: "2025–2026",
        desc: "Care and education of children aged 0–3: support with daily routines, educational and psychomotor activities, encouraging autonomy and monitoring child development.",
      },
      {
        role: "Catalan Teacher for Adults",
        place: "Punt i Coma",
        dates: "2025–2026",
        desc: "Teaching Catalan to adults (A1 level): preparing activities and materials, speaking and writing practice, and tracking learners' progress.",
      },
      {
        role: "School Activities Monitor (TSAE)",
        place: "Punt i Coma",
        dates: "2024–2026",
        desc: "Planning, running and assessing activities with primary school children (grades 1–6).",
      },
      {
        role: "Academic Support Teacher",
        place: "Nascor Formación",
        dates: "2020–Present",
        desc: "Study skills and support across all subjects, working on learning methods and how to organise study time.",
      },
    ],
  },
  education: {
    eyebrow: "Background",
    title: "Education & languages",
    studiesLabel: "Studies",
    languagesLabel: "Languages",
    studies: [
      {
        title: "Bachelor's Degree in Early Childhood Education",
        place: "UNED · National University of Distance Education",
        years: "2022–2025",
      },
      {
        title: "Higher Technician Diploma in Early Childhood Education",
        place: "Institut Milà i Fontanals, Igualada",
        years: "2020–2022",
      },
    ],
    languages: ["Spanish", "Catalan", "English"],
  },
  methodology: {
    eyebrow: "Methodology",
    title: "English from the cradle: Great Little People",
    intro:
      "This is the early English methodology I have worked with in the classroom. It rests on a simple idea: if English is introduced before translation and error correction come into play, children pick it up naturally, just like their mother tongue. Sessions last one hour, run 100% in English and rotate through six spaces, or corners.",
    corners: [
      "Opening circle time: feelings, days, weather, colours and numbers to ease into the language through play.",
      "Sounds, pronunciation and first steps in reading and writing in English.",
      "Movement and psychomotor play: language is learnt with the body too.",
      "Art and small STEM experiments in English.",
      "Storytelling and reading comprehension with the method's own stories.",
      "Resources so families can keep practising at home.",
    ],
    callout:
      "In the classroom I combine these corners with sensory, hands-on materials — flashcards, mystery boxes, teddies, coloured scarves — so every session always includes play, movement and a story.",
    credit: "Methodology developed by Great Little People —",
  },
  programming: {
    eyebrow: "Sample work",
    title: "Classroom plan",
    intro:
      "A plan designed for a full school year with children aged 2–3, following one coherent learning thread: each season the group “travels” to a different country depending on its climate, and every activity — stories, songs, crafts, sensory play — revolves around that destination, with a little English vocabulary. Tap a card to see its full plan.",
    cta: "View full plan",
    duration: "Duration: 3 weeks",
    labels: {
      objectives: "Objectives",
      areas: "Learning areas",
      activities: "Activities",
      materials: "Materials",
      vocab: "English vocabulary",
      evaluation: "Assessment",
      close: "Close",
    },
    plans: [
      {
        id: "autumn",
        season: "Autumn",
        destination: "Germany",
        teaser:
          "Collecting and sorting leaves by colour, forest stories and crafts with chestnuts.",
        objectives: [
          "Explore the changes autumn brings to the natural world through the senses.",
          "Develop fine motor skills by handling and sorting natural materials.",
          "Introduce the group to basic English vocabulary about autumn.",
        ],
        areas: [
          "Discovering the environment: the forest and the life cycle of leaves",
          "Communication and languages: stories and songs",
          "Hand–eye coordination",
        ],
        activities: [
          "Collecting leaves in the playground and sorting them by colour and size",
          "Storytelling: “The forest that changes colour”",
          "Playdough hedgehogs decorated with chestnuts",
          "Sensory path walking on dry leaves",
        ],
        materials: [
          "Collected dry leaves",
          "Chestnuts",
          "Playdough",
          "Sorting trays",
          "Picture book",
          "Instrumental forest music",
        ],
        vocab: ["autumn", "leaf", "brown", "orange", "tree"],
        evaluation:
          "Direct observation and photo documentation of the sorting process and of participation in circle time.",
      },
      {
        id: "winter",
        season: "Winter",
        destination: "Lapland, Finland",
        teaser:
          "Sensory play with artificial snow, songs about the cold and reindeer decorations.",
        objectives: [
          "Experiment with cold-textured materials through sensory play.",
          "Expand vocabulary related to cold weather and the seasons.",
          "Encourage body and musical expression through winter songs.",
        ],
        areas: [
          "Discovering the environment: cold and snow",
          "Communication and languages: song and visual arts",
          "Motor development",
        ],
        activities: [
          "Sensory play with artificial snow (bicarbonate of soda + shaving foam)",
          "The song “Cold, cold” with gestures and movement",
          "Reindeer decorated with handprints",
          "Snowflakes made with paper and a punch tool",
        ],
        materials: [
          "Bicarbonate of soda",
          "Shaving foam or conditioner",
          "Trays",
          "Paper and poster paint",
          "Reindeer templates",
        ],
        vocab: ["winter", "snow", "cold", "reindeer", "white"],
        evaluation:
          "Observation of enjoyment and tolerance of the texture, and a record of participation in the song.",
      },
      {
        id: "spring",
        season: "Spring",
        destination: "The Netherlands",
        teaser:
          "Planting flowers in the classroom, watching them grow and games with bright colours.",
        objectives: [
          "Observe and respect how a plant grows.",
          "Recognise bright colours by handling flowers.",
          "Encourage care for the natural environment.",
        ],
        areas: [
          "Discovering the environment: the plant life cycle",
          "Attitudes of care and respect",
          "Fine motor skills",
        ],
        activities: [
          "Planting tulip bulbs in individual pots",
          "Daily growth diary with drawings",
          "Sorting flowers by colour",
          "Printing with flowers and poster paint",
        ],
        materials: [
          "Bulbs or seeds",
          "Pots and soil",
          "Small watering cans",
          "Flowers for printing",
          "Poster paint",
        ],
        vocab: ["spring", "flower", "grow", "colour", "tulip"],
        evaluation:
          "Follow-up of the growth diary and of participation in daily watering.",
      },
      {
        id: "summer",
        season: "Summer",
        destination: "The Caribbean",
        teaser:
          "Water play, stories about the sea and crafts with shells and sand.",
        objectives: [
          "Enjoy sensory play with water and sand safely.",
          "Link sea vocabulary to real objects.",
          "Develop creativity through crafts with natural materials.",
        ],
        areas: [
          "Discovering the environment: the sea and the beach",
          "Symbolic play",
          "Visual arts",
        ],
        activities: [
          "Water play with cups, funnels and sieves",
          "Storytelling: “A day at the sea”",
          "Craft with shells and kinetic sand",
          "Sensory treasure hunt in a sand tray",
        ],
        materials: [
          "Water trays",
          "Kinetic sand",
          "Shells",
          "Funnels and sieves",
          "Picture book",
        ],
        vocab: ["summer", "sea", "sand", "shell", "sun"],
        evaluation:
          "Observation of sensory exploration and of vocabulary used spontaneously.",
      },
    ],
  },
  contact: {
    eyebrow: "Let's talk",
    title: "Looking for someone like me for your team?",
    text: "I'm looking to join an early childhood centre, a tutoring service or a language academy where I can keep growing. Email or call me — I'd love to chat.",
    email: "Email me",
    footer: "Early Childhood Educator",
  },
};
