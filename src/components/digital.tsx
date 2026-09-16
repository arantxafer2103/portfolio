import type { Dictionary } from "@/i18n/types";
import { PaletteIcon, SparklesIcon, TrophyIcon } from "./icons";
import { SectionHead } from "./section-head";

const styles = [
  { Icon: PaletteIcon, tone: "bg-sky-soft", stroke: "stroke-sky", chip: "bg-sky-soft text-sky" },
  { Icon: TrophyIcon, tone: "bg-ochre-soft", stroke: "stroke-ochre", chip: "bg-ochre-soft text-ochre" },
  { Icon: SparklesIcon, tone: "bg-rose-soft", stroke: "stroke-rose", chip: "bg-rose-soft text-rose" },
];

export function Digital({ dict }: { dict: Dictionary["digital"] }) {
  return (
    <section id="tecnologia" className="mx-auto max-w-5xl px-5 py-12">
      <SectionHead eyebrow={dict.eyebrow} title={dict.title} />
      <p className="reveal mb-7 max-w-[70ch] text-ink-soft">{dict.intro}</p>
      <ul className="grid grid-cols-3 gap-4 max-[860px]:grid-cols-1">
        {dict.items.map((item, i) => {
          const { Icon, tone, stroke, chip } = styles[i];
          return (
            <li
              key={item.title}
              className="reveal group flex flex-col rounded-[22px] border border-line bg-surface p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-24px_rgba(43,32,39,0.4)]"
            >
              <span className={`mb-4 grid h-12 w-12 place-items-center rounded-2xl ${tone}`}>
                <Icon className={`digital-icon h-6 w-6 ${stroke}`} />
              </span>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-[0.93rem] text-ink-soft">{item.text}</p>
              {i === 1 && (
                <div aria-hidden="true" className="mt-4">
                  <div className="mb-1 flex justify-between text-[0.7rem] font-bold uppercase tracking-wider text-ochre">
                    <span>Level 3</span>
                    <span className="tabular-nums">750 / 1000 XP</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-ochre-soft">
                    <div className="xp-fill h-full w-3/4 rounded-full bg-ochre" />
                  </div>
                </div>
              )}
              <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                {item.tags.map((tag) => (
                  <li key={tag} className={`rounded-full px-3 py-1 text-[0.8rem] font-semibold ${chip}`}>
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
      <p className="reveal mt-5 rounded-2xl bg-surface-soft px-5 py-4 text-[0.95rem] text-ink-soft">
        {dict.note}
      </p>
    </section>
  );
}
