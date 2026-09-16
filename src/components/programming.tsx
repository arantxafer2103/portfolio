"use client";

import { useEffect, useRef, useState } from "react";
import { programas, type Programa } from "@/lib/data";
import { ArrowIcon, CloseIcon, seasonIcons } from "./icons";

const gradients: Record<Programa["clase"], string> = {
  otono: "linear-gradient(150deg, var(--ochre), #8c5a1e)",
  invierno: "linear-gradient(150deg, var(--sky), #254b57)",
  primavera: "linear-gradient(150deg, var(--sage), #345637)",
  verano: "linear-gradient(150deg, var(--coral), #8c3e27)",
};

const tagColors: Record<Programa["clase"], string> = {
  otono: "var(--ochre)",
  invierno: "var(--sky)",
  primavera: "var(--sage)",
  verano: "var(--coral)",
};

export function Programming() {
  const [active, setActive] = useState<Programa | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (active) {
      closeRef.current?.focus();
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") close();
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
  }, [active]);

  function open(p: Programa, trigger: HTMLElement) {
    lastFocused.current = trigger;
    setActive(p);
  }

  function close() {
    setActive(null);
    lastFocused.current?.focus();
  }

  return (
    <section id="programacion" className="mx-auto max-w-4xl px-5 py-11">
      <div className="mb-7">
        <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.14em] text-ink-soft">
          Ejemplo de trabajo
        </p>
        <h2 className="text-[clamp(1.6rem,2.3vw+1rem,2.2rem)] font-semibold">
          Programación de aula
        </h2>
      </div>
      <p className="mb-6.5 max-w-[70ch] text-ink-soft">
        Programación pensada para un curso completo con niños y niñas de
        2–3 años, con una línea de aprendizaje coherente: en cada estación,
        el grupo &quot;viaja&quot; a un país distinto según su clima, y
        todas las actividades —cuentos, canciones, manualidades, juego
        sensorial— giran alrededor de ese destino, con algo de vocabulario
        en inglés. Haz clic en una tarjeta para ver la ficha técnica.
      </p>
      <div className="grid grid-cols-4 gap-4 max-[820px]:grid-cols-2 max-[460px]:grid-cols-1">
        {programas.map((p) => {
          const Icon = seasonIcons[p.icon];
          return (
            <button
              key={p.id}
              onClick={(e) => open(p, e.currentTarget)}
              className="flex min-h-[180px] flex-col gap-9 rounded-[20px] p-5 text-left text-white transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-3 focus-visible:outline-ink focus-visible:outline-offset-2"
              style={{ background: gradients[p.clase] }}
            >
              <Icon className="h-[30px] w-[30px] stroke-white" />
              <div>
                <b className="font-display text-xl font-semibold">
                  {p.season}
                </b>
                <div className="mt-0.5 text-[0.82rem] font-semibold opacity-90">
                  {p.destino}
                </div>
              </div>
              <div className="mt-auto flex items-center gap-1.5 text-[0.82rem] font-bold">
                Ver ficha técnica <ArrowIcon className="h-3.5 w-3.5 stroke-white" />
              </div>
            </button>
          );
        })}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-5 backdrop-blur-[2px]"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="max-h-[86vh] w-full max-w-[560px] overflow-y-auto rounded-3xl bg-surface p-7 shadow-[0_24px_48px_-28px_rgba(43,32,39,0.38)]"
          >
            <div className="mb-4.5 flex items-start justify-between gap-3">
              <div>
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[0.78rem] font-bold text-white"
                  style={{ background: tagColors[active.clase] }}
                >
                  {active.season}
                </span>
                <h3 id="modal-title" className="mt-2.5 text-2xl font-semibold">
                  {active.season}
                </h3>
                <div className="text-sm font-semibold text-ink-soft">
                  {active.destino}
                </div>
              </div>
              <button
                ref={closeRef}
                onClick={close}
                aria-label="Cerrar"
                className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-surface-soft"
              >
                <CloseIcon className="h-4 w-4 stroke-ink" />
              </button>
            </div>
            <div className="text-sm text-ink-soft">{active.duracion}</div>

            <ModalSection title="Objetivos" items={active.objetivos} />
            <ModalSection title="Áreas trabajadas" items={active.contenidos} />
            <ModalSection title="Actividades" items={active.actividades} />
            <ModalSection title="Materiales" items={active.materiales} />

            <div className="mt-4.5">
              <h4 className="mb-2 text-[0.82rem] font-bold uppercase tracking-[0.08em] text-ink-soft">
                Vocabulario en inglés
              </h4>
              <div className="flex flex-wrap gap-2">
                {active.vocab.map((v) => (
                  <span
                    key={v}
                    className="rounded-full bg-surface-soft px-2.5 py-1 text-[0.82rem] font-semibold"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4.5">
              <h4 className="mb-2 text-[0.82rem] font-bold uppercase tracking-[0.08em] text-ink-soft">
                Evaluación
              </h4>
              <p className="m-0 text-sm text-ink-soft">{active.evaluacion}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ModalSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-4.5">
      <h4 className="mb-2 text-[0.82rem] font-bold uppercase tracking-[0.08em] text-ink-soft">
        {title}
      </h4>
      <ul className="m-0 list-disc space-y-1 pl-4.5 text-sm">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
}
