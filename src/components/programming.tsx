"use client";

import { useRef, useState } from "react";
import type { Dictionary, Plan, SeasonId } from "@/i18n/types";
import { ArrowIcon, CloseIcon, seasonIcons } from "./icons";
import { SectionHead } from "./section-head";

const gradients: Record<SeasonId, string> = {
  autumn: "linear-gradient(150deg, #b97728, #8c5a1e)",
  winter: "linear-gradient(150deg, #396e80, #254b57)",
  spring: "linear-gradient(150deg, #4f7a52, #345637)",
  summer: "linear-gradient(150deg, #c8613f, #8c3e27)",
};

type Props = { dict: Dictionary["programming"] };

export function Programming({ dict }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeId, setActiveId] = useState<SeasonId>("autumn");
  const active = dict.plans.find((p) => p.id === activeId) ?? dict.plans[0];

  function open(id: SeasonId) {
    setActiveId(id);
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  return (
    <section id="programacion" className="mx-auto max-w-5xl px-5 py-12">
      <SectionHead eyebrow={dict.eyebrow} title={dict.title} />
      <p className="reveal mb-7 max-w-[70ch] text-ink-soft">{dict.intro}</p>

      <ul className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
        {dict.plans.map((plan, i) => {
          const Icon = seasonIcons[plan.id];
          return (
            <li
              key={plan.id}
              className="reveal"
              style={{ animationRange: `entry ${5 + i * 6}% cover ${30 + i * 6}%` }}
            >
              <button
                type="button"
                onClick={() => open(plan.id)}
                aria-haspopup="dialog"
                className="season-card group flex h-full min-h-[240px] w-full flex-col rounded-[22px] p-5 text-left text-white shadow-[0_20px_40px_-28px_rgba(43,32,39,0.6)] transition-transform duration-300 hover:-translate-y-1.5"
                style={{ background: gradients[plan.id] }}
              >
                <Icon className="season-icon h-8 w-8 stroke-white" />
                <span className="mt-8 block font-display text-xl font-semibold">
                  {plan.season}
                </span>
                <span className="mt-0.5 block text-[0.82rem] font-semibold opacity-90">
                  {plan.destination}
                </span>
                <span className="mt-3 block text-[0.85rem] leading-snug opacity-85">
                  {plan.teaser}
                </span>
                <span className="mt-auto flex items-center gap-1.5 pt-4 text-[0.82rem] font-bold">
                  {dict.cta}
                  <ArrowIcon className="h-3.5 w-3.5 stroke-white transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <dialog
        ref={dialogRef}
        aria-labelledby="plan-title"
        className="plan-dialog"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <PlanSheet plan={active} dict={dict} onClose={close} />
      </dialog>
    </section>
  );
}

function PlanSheet({
  plan,
  dict,
  onClose,
}: {
  plan: Plan;
  dict: Props["dict"];
  onClose: () => void;
}) {
  const Icon = seasonIcons[plan.id];
  const sections: [string, string[]][] = [
    [dict.labels.objectives, plan.objectives],
    [dict.labels.areas, plan.areas],
    [dict.labels.activities, plan.activities],
    [dict.labels.materials, plan.materials],
  ];

  return (
    <div className="flex max-h-[inherit] flex-col">
      <header
        className="relative shrink-0 px-7 pt-6 pb-5 text-white"
        style={{ background: gradients[plan.id] }}
      >
        <Icon className="absolute right-16 top-5 h-16 w-16 stroke-white opacity-25" />
        <p className="text-xs font-bold uppercase tracking-[0.14em] opacity-85">
          {dict.duration}
        </p>
        <h3 id="plan-title" className="mt-1.5 text-3xl font-semibold">
          {plan.season}
        </h3>
        <p className="text-sm font-semibold opacity-90">{plan.destination}</p>
        <button
          type="button"
          onClick={onClose}
          aria-label={dict.labels.close}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/20 transition-colors hover:bg-white/35"
        >
          <CloseIcon className="h-4 w-4 stroke-white" />
        </button>
      </header>

      <div className="overflow-y-auto px-7 pt-2 pb-7">
        {sections.map(([title, items]) => (
          <div key={title} className="mt-5">
            <h4 className="mb-2 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
              {title}
            </h4>
            <ul className="list-disc space-y-1 pl-5 text-[0.93rem] marker:text-rose">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="mt-5">
          <h4 className="mb-2 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
            {dict.labels.vocab}
          </h4>
          <ul className="flex flex-wrap gap-2" lang="en">
            {plan.vocab.map((word) => (
              <li
                key={word}
                className="rounded-full bg-surface-soft px-3 py-1 text-[0.85rem] font-semibold"
              >
                {word}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <h4 className="mb-2 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
            {dict.labels.evaluation}
          </h4>
          <p className="text-[0.93rem] text-ink-soft">{plan.evaluation}</p>
        </div>
      </div>
    </div>
  );
}
