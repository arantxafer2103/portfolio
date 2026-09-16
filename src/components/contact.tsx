import { MailIcon, PhoneIcon } from "./icons";

export function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-4xl px-5 py-11">
      <div
        className="rounded-[28px] border border-line p-10 text-center"
        style={{
          background: "linear-gradient(150deg, var(--rose-soft), var(--surface))",
        }}
      >
        <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.14em] text-ink-soft">
          Hablemos
        </p>
        <h2 className="text-[clamp(1.6rem,2.5vw+1rem,2.3rem)] font-semibold">
          ¿Buscas a alguien así en tu equipo?
        </h2>
        <p className="mx-auto my-3.5 max-w-[52ch] text-ink-soft">
          Estoy buscando incorporarme a un centro de educación infantil,
          refuerzo escolar o academia de idiomas donde pueda seguir
          creciendo. Escríbeme o llámame, encantada de charlar.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="mailto:arantxafer2103@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-rose px-5.5 py-3.5 text-sm font-bold text-white"
          >
            <MailIcon className="h-4 w-4" />
            Escríbeme
          </a>
          <a
            href="tel:+34645018085"
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-line px-5.5 py-3.5 text-sm font-bold"
          >
            <PhoneIcon className="h-4 w-4" />
            645 01 80 85
          </a>
        </div>
      </div>
      <footer className="pt-9 text-center text-[0.82rem] text-ink-soft">
        Arantxa Fernández · Maestra de Educación Infantil · Esparreguera,
        Barcelona
      </footer>
    </section>
  );
}
