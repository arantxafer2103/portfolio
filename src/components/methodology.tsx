import type { Dictionary } from "@/i18n/types";
import {
  BookIcon,
  CircleIcon,
  HomeIcon,
  PaletteIcon,
  RunIcon,
  SoundIcon,
} from "./icons";
import { SectionHead } from "./section-head";

const corners = [
  { title: "Start Corner", Icon: CircleIcon },
  { title: "Phonics Corner", Icon: SoundIcon },
  { title: "Active Corner", Icon: RunIcon },
  { title: "Creative Corner", Icon: PaletteIcon },
  { title: "Reading Corner", Icon: BookIcon },
  { title: "Home Corner", Icon: HomeIcon },
];

export function Methodology({ dict }: { dict: Dictionary["methodology"] }) {
  return (
    <section id="metodologia" className="mx-auto max-w-5xl px-5 py-12">
      <SectionHead eyebrow={dict.eyebrow} title={dict.title} />
      <p className="reveal mb-7 max-w-[70ch] text-ink-soft">{dict.intro}</p>
      <ul className="grid grid-cols-3 gap-4 max-[760px]:grid-cols-2 max-[480px]:grid-cols-1">
        {corners.map(({ title, Icon }, i) => (
          <li
            key={title}
            style={{ animationRange: `entry ${5 + (i % 3) * 8}% cover ${30 + (i % 3) * 8}%` }}
            className="reveal group rounded-[18px] border border-line bg-surface p-5 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-rose hover:shadow-[0_18px_36px_-24px_rgba(193,105,122,0.55)]"
          >
            <span className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-rose-soft transition-colors duration-300 group-hover:bg-rose">
              <Icon className="h-5 w-5 stroke-rose transition-colors duration-300 group-hover:stroke-white" />
            </span>
            <h3 className="mb-1 text-base font-semibold">{title}</h3>
            <p className="text-[0.88rem] text-ink-soft">{dict.corners[i]}</p>
          </li>
        ))}
      </ul>
      <p className="reveal mt-5 rounded-2xl bg-surface-soft px-5 py-4 text-[0.95rem] text-ink-soft">
        {dict.callout}
      </p>
      <p className="mt-4 text-sm text-ink-soft">
        {dict.credit}{" "}
        <a
          href="https://greatlittlepeople.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-rose underline underline-offset-2"
        >
          greatlittlepeople.com
        </a>
      </p>
    </section>
  );
}
