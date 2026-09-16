import type { Dictionary } from "@/i18n/types";
import { CapIcon } from "./icons";
import { SectionHead } from "./section-head";

const label =
  "mb-4 text-xs font-bold uppercase tracking-[0.14em] text-ink-soft";

export function Education({ dict }: { dict: Dictionary["education"] }) {
  return (
    <section id="formacion" className="mx-auto max-w-5xl px-5 py-12">
      <SectionHead eyebrow={dict.eyebrow} title={dict.title} />
      <div className="grid grid-cols-[1.5fr_1fr] gap-6 max-[760px]:grid-cols-1">
        <div className="reveal rounded-[22px] border border-line bg-surface p-6">
          <h3 className={label}>{dict.studiesLabel}</h3>
          <ul className="flex flex-col gap-5">
            {dict.studies.map((s) => (
              <li key={s.title} className="flex items-start gap-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky-soft">
                  <CapIcon className="h-5 w-5 stroke-sky" />
                </span>
                <div>
                  <p className="font-display font-semibold">{s.title}</p>
                  <p className="text-sm text-ink-soft">{s.place}</p>
                  <p className="text-sm font-semibold text-sky tabular-nums">{s.years}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal rounded-[22px] border border-line bg-surface p-6">
          <h3 className={label}>{dict.languagesLabel}</h3>
          <ul className="flex flex-col gap-3">
            {dict.languages.map((l) => (
              <li key={l.name} className="flex items-center justify-between gap-3">
                <span className="font-semibold">{l.name}</span>
                <span className="rounded-full bg-sage-soft px-3 py-1 text-sm font-bold text-sage">
                  {l.level}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
