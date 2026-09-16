"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import type { Dictionary } from "@/i18n/types";
import { ArrowIcon } from "./icons";
import { SectionHead } from "./section-head";

const CARD_STEP = 300;

export function Experience({ dict }: { dict: Dictionary["experience"] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      setAtStart(track.scrollLeft <= 4);
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4);
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  function scroll(direction: 1 | -1) {
    trackRef.current?.scrollBy({ left: direction * CARD_STEP, behavior: "smooth" });
  }

  function startDrag(e: ReactPointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track || e.pointerType !== "mouse" || e.button !== 0) return;
    const startX = e.clientX;
    const startLeft = track.scrollLeft;
    track.style.scrollSnapType = "none";
    track.style.cursor = "grabbing";
    const move = (ev: PointerEvent) => {
      track.scrollLeft = startLeft - (ev.clientX - startX);
    };
    const end = () => {
      track.style.scrollSnapType = "";
      track.style.cursor = "";
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", end);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", end);
  }

  const arrow =
    "absolute top-[58%] z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface/90 shadow-[0_10px_24px_-12px_rgba(43,32,39,0.5)] backdrop-blur transition-[opacity,border-color,transform] hover:scale-105 hover:border-rose disabled:pointer-events-none disabled:opacity-0 max-[640px]:h-10 max-[640px]:w-10";
  const fade = "pointer-events-none absolute inset-y-0 z-[5] w-16 transition-opacity duration-300";

  return (
    <section id="experiencia" className="mx-auto max-w-5xl px-5 py-12">
      <SectionHead eyebrow={dict.eyebrow} title={dict.title} />

      <div className="reveal relative">
        <div
          aria-hidden="true"
          className={`${fade} -left-5 bg-gradient-to-r from-ground to-transparent ${atStart ? "opacity-0" : ""}`}
        />
        <div
          aria-hidden="true"
          className={`${fade} -right-5 bg-gradient-to-l from-ground to-transparent ${atEnd ? "opacity-0" : ""}`}
        />
        <button
          type="button"
          onClick={() => scroll(-1)}
          disabled={atStart}
          aria-label={dict.prev}
          className={`${arrow} -left-3 max-[640px]:-left-1 min-[1180px]:-left-16`}
        >
          <ArrowIcon className="h-5 w-5 rotate-180 stroke-ink" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          disabled={atEnd}
          aria-label={dict.next}
          className={`${arrow} -right-3 max-[640px]:-right-1 min-[1180px]:-right-16`}
        >
          <ArrowIcon className="h-5 w-5 stroke-ink" />
        </button>

      <div
        ref={trackRef}
        tabIndex={0}
        role="region"
        aria-label={dict.title}
        onPointerDown={startDrag}
        className="timeline-track -mx-5 cursor-grab snap-x snap-mandatory overflow-x-auto scroll-px-5 px-5 pb-4 select-none"
      >
        <div className="relative w-max">
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-[46px] h-[3px] rounded-full"
          style={{
            background:
              "linear-gradient(90deg, var(--rose-soft), var(--rose) 85%, var(--rose-soft))",
          }}
        />
        <ol className="relative flex gap-5">
          {dict.jobs.map((job) => (
            <li
              key={job.role + job.place}
              className="flex w-[280px] snap-start flex-col"
            >
              <p className="h-7 self-start rounded-full bg-surface px-3 py-1 text-[0.8rem] font-bold text-ink tabular-nums shadow-[0_4px_12px_-8px_rgba(43,32,39,0.4)]">
                {job.dates}
              </p>
              <div className="relative flex h-9 items-center pl-4">
                <span
                  className={`relative block h-4 w-4 rounded-full border-[3px] border-surface bg-rose shadow-[0_0_0_3px_var(--rose-soft)] ${
                    job.current ? "timeline-pulse" : ""
                  }`}
                />
              </div>
              <article className="group mt-2 flex flex-1 flex-col rounded-[20px] border border-line bg-surface p-5 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-rose hover:shadow-[0_18px_36px_-24px_rgba(193,105,122,0.55)]">
                {job.current && (
                  <span className="mb-2 self-start rounded-full bg-sage-soft px-2.5 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-sage">
                    {dict.ongoing}
                  </span>
                )}
                <h3 className="text-lg leading-snug font-semibold">{job.role}</h3>
                <p className="mt-1 text-sm font-semibold text-rose">{job.place}</p>
                <p className="mt-3 text-[0.92rem] text-ink-soft">{job.desc}</p>
              </article>
            </li>
          ))}
        </ol>
        </div>
      </div>
      </div>
    </section>
  );
}
