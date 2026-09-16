export type SeasonId = "autumn" | "winter" | "spring" | "summer";

export type Job = {
  role: string;
  place: string;
  dates: string;
  desc: string;
};

export type Plan = {
  id: SeasonId;
  season: string;
  destination: string;
  teaser: string;
  objectives: string[];
  areas: string[];
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
    programming: string;
    contact: string;
    skip: string;
    language: string;
  };
  hero: { role: string; bio: string; location: string; photoAlt: string };
  experience: { eyebrow: string; title: string; jobs: Job[] };
  education: {
    eyebrow: string;
    title: string;
    studiesLabel: string;
    languagesLabel: string;
    studies: { title: string; place: string; years: string }[];
    languages: string[];
  };
  methodology: {
    eyebrow: string;
    title: string;
    intro: string;
    corners: string[];
    callout: string;
    credit: string;
  };
  programming: {
    eyebrow: string;
    title: string;
    intro: string;
    cta: string;
    duration: string;
    labels: {
      objectives: string;
      areas: string;
      activities: string;
      materials: string;
      vocab: string;
      evaluation: string;
      close: string;
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
