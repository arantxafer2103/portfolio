import { CapIcon } from "./icons";

const studies = [
  {
    title: "Grado en Educación Infantil",
    place: "UNED — Universidad Nacional de Educación a Distancia · 2022–2025",
  },
  {
    title: "Grado Superior en Educación Infantil",
    place: "Milà i Fontanals, Igualada · 2020–2022",
  },
];

const languages = [
  { name: "Español", level: 100 },
  { name: "Català", level: 100 },
  { name: "Inglés", level: 60 },
];

export function Education() {
  return (
    <section id="formacion" className="mx-auto max-w-4xl px-5 py-11">
      <div className="mb-7">
        <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.14em] text-ink-soft">
          Bagaje
        </p>
        <h2 className="text-[clamp(1.6rem,2.3vw+1rem,2.2rem)] font-semibold">
          Formación e idiomas
        </h2>
      </div>
      <div className="grid grid-cols-[1.4fr_1fr] gap-7 max-[720px]:grid-cols-1">
        <div className="rounded-[22px] border border-line bg-surface p-6">
          {studies.map((s, i) => (
            <div
              key={s.title}
              className={`flex items-start gap-3.5 ${
                i !== studies.length - 1 ? "mb-4.5" : ""
              }`}
            >
              <CapIcon className="mt-0.5 h-[22px] w-[22px] shrink-0 stroke-sky" />
              <div>
                <b className="font-display block font-semibold">{s.title}</b>
                <span className="text-sm text-ink-soft">{s.place}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-[22px] border border-line bg-surface p-6">
          {languages.map((l, i) => (
            <div
              key={l.name}
              className={`flex items-center justify-between ${
                i !== languages.length - 1 ? "mb-3.5" : ""
              }`}
            >
              <span>{l.name}</span>
              <div className="ml-3.5 h-1.5 flex-1 overflow-hidden rounded-full bg-surface-soft">
                <div
                  className="h-full rounded-full bg-sage"
                  style={{ width: `${l.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
