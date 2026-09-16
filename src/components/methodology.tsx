import type { Dictionary } from "@/i18n/types";
import { CornerGrid } from "./corner-grid";
import { SectionHead } from "./section-head";

type Props = { dict: Dictionary["methodology"]; closeLabel: string };

export function Methodology({ dict, closeLabel }: Props) {
  return (
    <section id="metodologia" className="mx-auto max-w-5xl px-5 py-12">
      <SectionHead eyebrow={dict.eyebrow} title={dict.title} />
      <p className="reveal mb-7 max-w-[70ch] text-ink-soft">{dict.intro}</p>
      <CornerGrid dict={dict} closeLabel={closeLabel} />
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
