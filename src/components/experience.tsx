import { experiencias } from "@/lib/data";

export function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-4xl px-5 py-11">
      <div className="mb-7">
        <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.14em] text-ink-soft">
          Trayectoria
        </p>
        <h2 className="text-[clamp(1.6rem,2.3vw+1rem,2.2rem)] font-semibold">
          Experiencia
        </h2>
      </div>
      <div className="flex flex-col">
        {experiencias.map((e, i) => (
          <div key={e.rol + e.lugar} className="grid grid-cols-[22px_1fr] gap-5">
            <div className="relative flex justify-center">
              {i !== experiencias.length - 1 && (
                <div className="absolute top-[26px] bottom-[-4px] w-[2px] bg-line" />
              )}
              <div className="mt-2 h-3 w-3 rounded-full bg-rose shadow-[0_0_0_4px_var(--rose-soft)]" />
            </div>
            <div
              className={`pb-8 ${
                i !== experiencias.length - 1 ? "border-b border-line" : ""
              }`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <div className="font-display text-lg font-semibold">
                    {e.rol}
                  </div>
                  <div className="mt-0.5 text-sm font-semibold text-rose">
                    {e.lugar}
                  </div>
                </div>
                <div className="whitespace-nowrap rounded-full bg-surface-soft px-2.5 py-1 text-[0.82rem] font-bold text-ink-soft">
                  {e.fechas}
                </div>
              </div>
              <p className="mt-2.5 max-w-[64ch] text-ink-soft">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
