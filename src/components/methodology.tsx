import { corners } from "@/lib/data";
import { cornerIcons } from "./icons";

export function Methodology() {
  return (
    <section id="metodologia" className="mx-auto max-w-4xl px-5 py-11">
      <div className="mb-7">
        <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.14em] text-ink-soft">
          Metodología
        </p>
        <h2 className="text-[clamp(1.6rem,2.3vw+1rem,2.2rem)] font-semibold">
          Inglés desde la cuna: Great Little People
        </h2>
      </div>
      <p className="mb-6.5 max-w-[70ch] text-ink-soft">
        Es la metodología de inglés temprano con la que he trabajado en el
        aula. Parte de una idea sencilla: si el inglés se introduce antes de
        que entren en juego la traducción y la corrección de errores, se
        adquiere igual que se adquirió la lengua materna. Las sesiones son
        de una hora, 100% en inglés, y rotan por seis espacios o{" "}
        <em>corners</em>.
      </p>
      <div className="grid grid-cols-3 gap-4 max-[720px]:grid-cols-2 max-[460px]:grid-cols-1">
        {corners.map((c) => {
          const Icon = cornerIcons[c.icon];
          return (
            <div
              key={c.title}
              className="rounded-[18px] border border-line bg-surface p-4.5"
            >
              <div className="mb-3 flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-rose-soft">
                <Icon className="h-5 w-5 stroke-rose" />
              </div>
              <b className="font-display mb-1 block text-[0.98rem] font-semibold">
                {c.title}
              </b>
              <p className="m-0 text-[0.86rem] text-ink-soft">{c.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-5 rounded-2xl bg-surface-soft p-4.5 px-4.5 text-sm text-ink-soft">
        En el aula combino estos corners con materiales sensoriales y
        manipulativos — flashcards, mystery boxes, teddys, pañuelos de
        colores — para que cada sesión tenga siempre un componente de juego,
        movimiento y cuento.
      </div>
      <p className="mt-5 text-sm text-ink-soft">
        Metodología desarrollada por Great Little People —{" "}
        <a
          href="https://greatlittlepeople.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-rose underline"
        >
          greatlittlepeople.com
        </a>
      </p>
    </section>
  );
}
