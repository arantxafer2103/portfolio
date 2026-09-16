import type { CSSProperties } from "react";
import type { Dictionary } from "@/i18n/types";
import { MailIcon, PhoneIcon } from "./icons";

export function Contact({ dict }: { dict: Dictionary["contact"] }) {
  return (
    <section id="contacto" className="mx-auto max-w-5xl px-5 pt-12 pb-10">
      <div
        className="reveal relative overflow-hidden rounded-[28px] border border-line px-6 py-12 text-center sm:px-10"
        style={{
          background: "linear-gradient(150deg, var(--rose-soft), var(--surface))",
        }}
      >
        <span aria-hidden="true" className="float absolute left-8 top-8 h-5 w-5 rounded-full bg-sage/70" />
        <span
          aria-hidden="true"
          style={{ "--delay": "1500ms" } as CSSProperties}
          className="float absolute bottom-10 right-10 h-8 w-8 rounded-full bg-ochre/60"
        />
        <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.14em] text-ink-soft">
          {dict.eyebrow}
        </p>
        <h2 className="text-[clamp(1.6rem,2.5vw+1rem,2.4rem)] font-semibold">
          {dict.title}
        </h2>
        <p className="mx-auto mt-3.5 mb-7 max-w-[52ch] text-ink-soft">{dict.text}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="mailto:arantxafer2103@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-rose px-6 py-3.5 text-sm font-bold text-on-accent transition-transform hover:-translate-y-0.5"
          >
            <MailIcon className="h-4 w-4" />
            {dict.email}
          </a>
          <a
            href="tel:+34645018085"
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-line bg-surface px-6 py-3.5 text-sm font-bold transition-transform hover:-translate-y-0.5"
          >
            <PhoneIcon className="h-4 w-4" />
            645 01 80 85
          </a>
        </div>
      </div>
      <footer className="pt-9 text-center text-[0.82rem] text-ink-soft">
        Arantxa Fernández · {dict.footer} · Esparreguera, Barcelona
      </footer>
    </section>
  );
}
