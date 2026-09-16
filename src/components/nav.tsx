"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { locales, localeNames, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { LOCALE_STORAGE_KEY } from "./locale-redirect";
import { GlobeIcon } from "./icons";

type Props = { lang: Locale; dict: Dictionary["nav"] };

export function Nav({ lang, dict }: Props) {
  const links = [
    { id: "experiencia", label: dict.experience },
    { id: "formacion", label: dict.education },
    { id: "metodologia", label: dict.methodology },
    { id: "programacion", label: dict.programming },
    { id: "contacto", label: dict.contact },
  ];
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    for (const id of ["inicio", ...links.map((l) => l.id)]) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function rememberLocale(l: Locale) {
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, l);
    } catch {}
  }

  return (
    <nav className="sticky top-0 z-40 border-b border-line bg-ground/85 backdrop-blur-md">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-full focus:bg-rose focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-on-accent"
      >
        {dict.skip}
      </a>
      <div className="mx-auto grid max-w-5xl grid-cols-[1fr_auto] items-center gap-x-4 px-5 pt-3 pb-3 min-[860px]:grid-cols-[auto_1fr_auto]">
        <a
          href="#inicio"
          className="col-start-1 row-start-1 font-display text-lg font-semibold"
        >
          Arantxa Fernández
        </a>

        <ul className="col-span-2 col-start-1 row-start-2 -mx-5 mt-2 flex gap-1 overflow-x-auto px-4 [scrollbar-width:none] min-[860px]:col-span-1 min-[860px]:col-start-2 min-[860px]:row-start-1 min-[860px]:mx-0 min-[860px]:mt-0 min-[860px]:justify-center min-[860px]:px-0">
          {links.map((l) => (
            <li key={l.id} className="shrink-0">
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "location" : undefined}
                className={`block rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${
                  active === l.id
                    ? "bg-rose-soft text-rose"
                    : "text-ink-soft hover:text-rose"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          role="group"
          aria-label={dict.language}
          className="col-start-2 row-start-1 flex items-center gap-0.5 justify-self-end rounded-full border border-line bg-surface p-1 min-[860px]:col-start-3"
        >
          <GlobeIcon className="mx-1 h-4 w-4 stroke-ink-soft" />
          {locales.map((l) => (
            <Link
              key={l}
              href={`/${l}/`}
              scroll={false}
              lang={l}
              hrefLang={l}
              title={localeNames[l]}
              aria-label={localeNames[l]}
              aria-current={l === lang ? "true" : undefined}
              onClick={() => rememberLocale(l)}
              className={`rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide transition-colors ${
                l === lang
                  ? "bg-rose text-on-accent"
                  : "text-ink-soft hover:text-rose"
              }`}
            >
              {l}
            </Link>
          ))}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="scroll-progress absolute inset-x-0 bottom-[-1px] h-[2px] bg-rose"
      />
    </nav>
  );
}
