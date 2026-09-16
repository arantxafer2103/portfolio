import Image from "next/image";
import type { CSSProperties } from "react";
import type { Dictionary } from "@/i18n/types";
import photo from "@/assets/arantxa.webp";
import { MailIcon, PhoneIcon, PinIcon } from "./icons";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

const chip =
  "inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-2 text-sm font-semibold transition-[border-color,transform] hover:-translate-y-0.5 hover:border-rose";

export function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <header id="inicio" className="mx-auto max-w-5xl px-5 pb-12 pt-14">
      <div className="grid grid-cols-[230px_1fr] items-center gap-12 max-[720px]:grid-cols-1 max-[720px]:justify-items-center max-[720px]:gap-8 max-[720px]:text-center">
        <div className="enter-pop relative h-[230px] w-[230px] max-[720px]:h-[200px] max-[720px]:w-[200px]">
          <div
            aria-hidden="true"
            className="photo-frame absolute inset-[-10px] bg-rose-soft"
          />
          <Image
            src={photo}
            alt={dict.photoAlt}
            priority
            placeholder="blur"
            sizes="230px"
            className="photo-frame relative h-full w-full border-4 border-surface object-cover shadow-[0_24px_48px_-28px_rgba(43,32,39,0.45)]"
          />
          <span
            aria-hidden="true"
            className="float absolute -right-3 -top-2 h-7 w-7 rounded-full bg-sage"
          />
          <span
            aria-hidden="true"
            style={delay(1200)}
            className="float absolute -left-4 bottom-6 h-4 w-4 rounded-full bg-coral"
          />
          <span
            aria-hidden="true"
            style={delay(2400)}
            className="float absolute -bottom-1 right-8 h-3 w-3 rounded-full bg-ochre"
          />
        </div>

        <div>
          <h1
            style={delay(120)}
            className="enter text-[clamp(2.4rem,4.5vw+1rem,3.9rem)] leading-[1.02] font-semibold"
          >
            Arantxa Fernández
          </h1>
          <p style={delay(240)} className="enter mt-2 text-lg font-semibold text-rose">
            {dict.role}
          </p>
          <p style={delay(360)} className="enter mt-4 max-w-[60ch] text-ink-soft">
            {dict.bio}
          </p>
          <div
            style={delay(480)}
            className="enter mt-6 flex flex-wrap gap-2.5 max-[720px]:justify-center"
          >
            <a href="mailto:arantxafer2103@gmail.com" className={chip}>
              <MailIcon className="h-[15px] w-[15px] shrink-0 stroke-rose" />
              arantxafer2103@gmail.com
            </a>
            <a href="tel:+34645018085" className={chip}>
              <PhoneIcon className="h-[15px] w-[15px] shrink-0 stroke-rose" />
              645 01 80 85
            </a>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-2 text-sm font-semibold">
              <PinIcon className="h-[15px] w-[15px] shrink-0 stroke-rose" />
              {dict.location}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
