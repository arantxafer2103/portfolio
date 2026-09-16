import { MailIcon, PhoneIcon, PinIcon } from "./icons";

export function Hero() {
  return (
    <header id="inicio" className="mx-auto max-w-4xl px-5 pb-10 pt-14">
      <div className="grid grid-cols-[180px_1fr] items-center gap-10 max-[640px]:grid-cols-1 max-[640px]:justify-items-center max-[640px]:text-center">
        <div className="relative h-[180px] w-[180px]">
          <div
            className="flex h-[180px] w-[180px] items-center justify-center rounded-full border-[3px] border-surface font-display text-5xl font-semibold text-rose shadow-[0_24px_48px_-28px_rgba(43,32,39,0.38)]"
            style={{
              background:
                "linear-gradient(150deg, var(--rose-soft), var(--ochre-soft))",
            }}
          >
            AF
          </div>
          <div className="absolute -right-1 -top-1.5 h-[22px] w-[22px] rounded-full bg-sage" />
          <div className="absolute -left-2.5 bottom-2 h-[14px] w-[14px] rounded-full bg-coral" />
        </div>
        <div>
          <h1 className="text-[clamp(2.2rem,4.5vw+1rem,3.6rem)] leading-[1.05] font-semibold">
            Arantxa Fernández
          </h1>
          <p className="mt-1.5 text-lg font-semibold text-rose">
            Maestra de Educación Infantil · 0–3 años
          </p>
          <p className="mt-4 max-w-[60ch] text-ink-soft">
            Formada en el Grado Superior de Educación Infantil y terminando
            el Grado en Educación Infantil en la UNED. Combino la atención a
            la primera infancia con la docencia de refuerzo escolar e
            idiomas. Me define la empatía, la organización y la capacidad de
            adaptarme a edades y entornos distintos — y las ganas de seguir
            aprendiendo en un equipo que crea en el juego y el
            acompañamiento emocional.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5 max-[640px]:justify-center">
            <a
              href="mailto:arantxafer2103@gmail.com"
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-2 text-sm font-semibold transition-colors hover:border-rose"
            >
              <MailIcon className="h-[15px] w-[15px] shrink-0 stroke-rose" />
              arantxafer2103@gmail.com
            </a>
            <a
              href="tel:+34645018085"
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-2 text-sm font-semibold transition-colors hover:border-rose"
            >
              <PhoneIcon className="h-[15px] w-[15px] shrink-0 stroke-rose" />
              645 01 80 85
            </a>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-2 text-sm font-semibold">
              <PinIcon className="h-[15px] w-[15px] shrink-0 stroke-rose" />
              Esparreguera, Barcelona
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
