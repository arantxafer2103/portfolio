"use client";

import { useRef, useState, type ReactNode } from "react";
import { DECREE_URL, type ResolvedCurriculum } from "@/i18n/decree";
import type { Dictionary, Plan, SeasonId } from "@/i18n/types";
import { ArrowIcon, seasonIcons } from "./icons";
import { SectionHead } from "./section-head";
import { Sheet } from "./sheet";

const gradients: Record<SeasonId, string> = {
  autumn: "linear-gradient(150deg, #b97728, #8c5a1e)",
  winter: "linear-gradient(150deg, #396e80, #254b57)",
  spring: "linear-gradient(150deg, #4f7a52, #345637)",
  summer: "linear-gradient(150deg, #c8613f, #8c3e27)",
};

const eixColors: Record<number, string> = {
  1: "bg-rose-soft text-rose",
  2: "bg-sky-soft text-sky",
  3: "bg-sage-soft text-sage",
  4: "bg-ochre-soft text-ochre",
};

type Dict = Dictionary["programming"];
type Tab = "plan" | "curriculum";

type Props = {
  dict: Dict;
  curricula: Record<SeasonId, ResolvedCurriculum>;
};

export function Programming({ dict, curricula }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeId, setActiveId] = useState<SeasonId>("autumn");
  const [tab, setTab] = useState<Tab>("plan");
  const active = dict.plans.find((p) => p.id === activeId) ?? dict.plans[0];
  const ActiveIcon = seasonIcons[active.id];

  function open(id: SeasonId) {
    setActiveId(id);
    setTab("plan");
    dialogRef.current?.showModal();
  }

  return (
    <section id="programacion" className="mx-auto max-w-5xl px-5 py-12">
      <SectionHead eyebrow={dict.eyebrow} title={dict.title} />
      <p className="reveal mb-7 max-w-[70ch] text-ink-soft">{dict.intro}</p>

      <ul className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
        {dict.plans.map((plan) => {
          const Icon = seasonIcons[plan.id];
          return (
            <li key={plan.id} className="reveal">
              <button
                type="button"
                onClick={() => open(plan.id)}
                aria-haspopup="dialog"
                className="season-card group flex h-full min-h-[260px] w-full flex-col rounded-[22px] p-5 text-left text-white shadow-[0_20px_40px_-28px_rgba(43,32,39,0.6)] transition-transform duration-300 hover:-translate-y-1.5"
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
                <span className="mt-4 block text-[0.72rem] font-semibold opacity-90">
                  {dict.decreeBadge}
                  <span className="mt-1.5 flex gap-1.5">
                    {curricula[plan.id].eixos.map(({ n }) => (
                      <span
                        key={n}
                        className="grid h-6 w-6 place-items-center rounded-full bg-white/25 text-[0.72rem] font-bold tabular-nums"
                      >
                        {n}
                      </span>
                    ))}
                  </span>
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

      <Sheet
        ref={dialogRef}
        labelledBy="plan-title"
        background={gradients[active.id]}
        closeLabel={dict.labels.close}
        header={
          <>
            <ActiveIcon className="absolute right-16 top-5 h-16 w-16 stroke-white opacity-25" />
            <p className="text-xs font-bold uppercase tracking-[0.14em] opacity-85">
              {dict.duration}
            </p>
            <h3 id="plan-title" className="mt-1.5 text-3xl font-semibold">
              {active.season}
            </h3>
            <p className="text-sm font-semibold opacity-90">{active.destination}</p>
          </>
        }
      >
        <div
          role="tablist"
          aria-label={active.season}
          className="flex shrink-0 gap-1 border-b border-line px-5 pt-3"
        >
          {(["plan", "curriculum"] as const).map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              id={`tab-${t}`}
              aria-selected={tab === t}
              aria-controls={`panel-${t}`}
              onClick={() => setTab(t)}
              className={`-mb-px rounded-t-lg border-b-2 px-3 pb-2.5 pt-1 text-sm font-bold transition-colors ${
                tab === t
                  ? "border-rose text-rose"
                  : "border-transparent text-ink-soft hover:text-ink"
              }`}
            >
              {t === "plan" ? dict.labels.tabPlan : dict.labels.tabCurriculum}
            </button>
          ))}
        </div>

        <div
          key={`${active.id}-${tab}`}
          role="tabpanel"
          id={`panel-${tab}`}
          aria-labelledby={`tab-${tab}`}
          className="tab-panel overflow-y-auto px-7 pt-1 pb-7"
        >
          {tab === "plan" ? (
            <PlanPanel plan={active} dict={dict} />
          ) : (
            <CurriculumPanel curriculum={curricula[active.id]} dict={dict} />
          )}
        </div>
      </Sheet>
    </section>
  );
}

function Heading({ children }: { children: ReactNode }) {
  return (
    <h4 className="mb-2 mt-5 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
      {children}
    </h4>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-5 text-[0.93rem] marker:text-rose">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function PlanPanel({ plan, dict }: { plan: Plan; dict: Dict }) {
  return (
    <>
      <Heading>{dict.labels.objectives}</Heading>
      <Bullets items={plan.objectives} />
      <Heading>{dict.labels.activities}</Heading>
      <Bullets items={plan.activities} />
      <Heading>{dict.labels.materials}</Heading>
      <Bullets items={plan.materials} />
      <Heading>{dict.labels.vocab}</Heading>
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
      <Heading>{dict.labels.evaluation}</Heading>
      <p className="text-[0.93rem] text-ink-soft">{plan.evaluation}</p>
    </>
  );
}

function CurriculumPanel({
  curriculum,
  dict,
}: {
  curriculum: ResolvedCurriculum;
  dict: Dict;
}) {
  const { labels } = dict;
  return (
    <>
      <Heading>{labels.eixos}</Heading>
      <ul className="flex flex-col gap-2">
        {curriculum.eixos.map(({ n, text }) => (
          <li
            key={n}
            className={`flex items-center gap-3 rounded-xl px-3 py-2 text-[0.9rem] font-semibold ${eixColors[n]}`}
          >
            <span className="shrink-0 text-[0.72rem] font-bold uppercase tracking-wider">
              {labels.eix} {n}
            </span>
            <span className="text-ink">{text}</span>
          </li>
        ))}
      </ul>

      <Heading>{labels.generalObjectives}</Heading>
      <ul className="flex flex-col gap-2 text-[0.93rem]">
        {curriculum.objectives.map(({ letter, text }) => (
          <li key={letter} className="flex gap-3">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-surface-soft text-xs font-bold text-rose">
              {letter}
            </span>
            <span>{text}</span>
          </li>
        ))}
      </ul>

      <Heading>{labels.competences}</Heading>
      <ul className="flex flex-col gap-3">
        {curriculum.competences.map(({ id, text }) => {
          const [eix, ce] = id.split(".");
          return (
            <li key={id} className="rounded-xl border border-line p-3">
              <p
                className={`mb-1 inline-block rounded-full px-2 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider ${eixColors[Number(eix)]}`}
              >
                {labels.eix} {eix} · {labels.competence} {ce}
              </p>
              <p className="text-[0.93rem]">{text}</p>
            </li>
          );
        })}
      </ul>

      <Heading>{labels.criteria}</Heading>
      <Bullets items={curriculum.criteria} />

      <Heading>{labels.sabers}</Heading>
      <Bullets items={curriculum.sabers} />

      <p className="mt-6 border-t border-line pt-4 text-[0.8rem] text-ink-soft">
        {labels.source}{" "}
        <a
          href={DECREE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-rose underline underline-offset-2"
        >
          DOGC (PDF)
        </a>
      </p>
    </>
  );
}
