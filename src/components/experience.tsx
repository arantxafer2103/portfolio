import type { Dictionary } from "@/i18n/types";
import { SectionHead } from "./section-head";

export function Experience({ dict }: { dict: Dictionary["experience"] }) {
  const last = dict.jobs.length - 1;
  return (
    <section id="experiencia" className="mx-auto max-w-5xl px-5 py-12">
      <SectionHead eyebrow={dict.eyebrow} title={dict.title} />
      <ol className="flex flex-col">
        {dict.jobs.map((job, i) => (
          <li key={job.role + job.place} className="reveal grid grid-cols-[22px_1fr] gap-5">
            <div className="relative flex justify-center">
              {i !== last && (
                <div className="absolute top-[26px] bottom-[-4px] w-[2px] bg-line" />
              )}
              <div className="mt-2 h-3 w-3 rounded-full bg-rose shadow-[0_0_0_4px_var(--rose-soft)]" />
            </div>
            <div className={`pb-8 ${i !== last ? "mb-6 border-b border-line" : ""}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-rose">{job.place}</p>
                </div>
                <p className="whitespace-nowrap rounded-full bg-surface-soft px-2.5 py-1 text-[0.82rem] font-bold text-ink-soft tabular-nums">
                  {job.dates}
                </p>
              </div>
              <p className="mt-2.5 max-w-[64ch] text-ink-soft">{job.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
