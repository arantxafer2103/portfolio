export type SeasonId = "autumn" | "winter" | "spring" | "summer";

export type Job = {
  role: string;
  place: string;
  dates: string;
  desc: string;
  current?: boolean;
};

export type Plan = {
  id: SeasonId;
  season: string;
  destination: string;
  teaser: string;
  objectives: string[];
  activities: string[];
  materials: string[];
  vocab: string[];
  evaluation: string;
};

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    experience: string;
    education: string;
    methodology: string;
    digital: string;
    programming: string;
    contact: string;
    skip: string;
    language: string;
  };
  hero: { role: string; bio: string; location: string; photoAlt: string };
  experience: {
    eyebrow: string;
    title: string;
    ongoing: string;
    prev: string;
    next: string;
    jobs: Job[];
  };
  education: {
    eyebrow: string;
    title: string;
    studiesLabel: string;
    languagesLabel: string;
    studies: { title: string; place: string; years: string }[];
    languages: { name: string; level: string }[];
  };
  methodology: {
    eyebrow: string;
    title: string;
    intro: string;
    corners: { desc: string; detail: string }[];
    materialsLabel: string;
    openLabel: string;
    callout: string;
    credit: string;
  };
  digital: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; text: string; tags: string[] }[];
    note: string;
  };
  programming: {
    eyebrow: string;
    title: string;
    intro: string;
    cta: string;
    duration: string;
    decreeBadge: string;
    labels: {
      tabPlan: string;
      tabCurriculum: string;
      objectives: string;
      activities: string;
      materials: string;
      vocab: string;
      evaluation: string;
      close: string;
      eixos: string;
      generalObjectives: string;
      competences: string;
      criteria: string;
      sabers: string;
      eix: string;
      competence: string;
      source: string;
    };
    plans: Plan[];
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    email: string;
    footer: string;
  };
};
