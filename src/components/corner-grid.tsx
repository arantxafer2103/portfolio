"use client";

import { useRef, useState } from "react";
import type { Dictionary } from "@/i18n/types";
import {
  BookIcon,
  CircleIcon,
  HomeIcon,
  PaletteIcon,
  PlusIcon,
  RunIcon,
  SoundIcon,
} from "./icons";
import { Sheet } from "./sheet";

const corners = [
  { title: "Start Corner", Icon: CircleIcon, materials: ["Emotions Mirrors", "Colored Scarves", "Beans"] },
  { title: "Phonics Corner", Icon: SoundIcon, materials: ["Phonics Magnets", "Phonics Songs", "Literacy Boards"] },
  { title: "Active Corner", Icon: RunIcon, materials: [] },
  { title: "Creative Corner", Icon: PaletteIcon, materials: [] },
  { title: "Reading Corner", Icon: BookIcon, materials: ["Tales", "Tales Scenes", "Tales Elements", "Flashcards"] },
  { title: "Home Corner", Icon: HomeIcon, materials: ["Digital Book", "App"] },
];

const gradient = "linear-gradient(150deg, #c1697a, #8f4453)";

type Props = { dict: Dictionary["methodology"]; closeLabel: string };

export function CornerGrid({ dict, closeLabel }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const active = corners[index];

  function open(i: number) {
    setIndex(i);
    dialogRef.current?.showModal();
  }

  return (
    <>
      <ul className="grid grid-cols-3 gap-4 max-[760px]:grid-cols-2 max-[480px]:grid-cols-1">
        {corners.map(({ title, Icon }, i) => (
          <li key={title} className="reveal">
            <button
              type="button"
              onClick={() => open(i)}
              aria-haspopup="dialog"
              className="group flex h-full w-full flex-col rounded-[18px] border border-line bg-surface p-5 text-left transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-rose hover:shadow-[0_18px_36px_-24px_rgba(193,105,122,0.55)]"
            >
              <span className="mb-3 flex w-full items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-rose-soft transition-colors duration-300 group-hover:bg-rose">
                  <Icon className="h-5 w-5 stroke-rose transition-colors duration-300 group-hover:stroke-white" />
                </span>
                <span className="flex items-center gap-1 text-xs font-bold text-ink-soft transition-colors group-hover:text-rose">
                  {dict.openLabel}
                  <PlusIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-90" />
                </span>
              </span>
              <span className="mb-1 block font-display text-base font-semibold">{title}</span>
              <span className="block text-[0.88rem] text-ink-soft">{dict.corners[i].desc}</span>
            </button>
          </li>
        ))}
      </ul>

      <Sheet
        ref={dialogRef}
        labelledBy="corner-title"
        background={gradient}
        closeLabel={closeLabel}
        header={
          <>
            <active.Icon className="absolute right-16 top-5 h-16 w-16 stroke-white opacity-25" />
            <p className="text-xs font-bold uppercase tracking-[0.14em] opacity-85">
              Great Little People
            </p>
            <h3 id="corner-title" className="mt-1.5 text-3xl font-semibold" lang="en">
              {active.title}
            </h3>
          </>
        }
      >
        <div key={index} className="tab-panel overflow-y-auto px-7 pt-5 pb-7">
          <p className="text-[0.98rem] leading-relaxed">{dict.corners[index].detail}</p>
          {active.materials.length > 0 && (
            <>
              <h4 className="mb-2 mt-6 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
                {dict.materialsLabel}
              </h4>
              <ul className="flex flex-wrap gap-2" lang="en">
                {active.materials.map((m) => (
                  <li
                    key={m}
                    className="rounded-full bg-rose-soft px-3 py-1 text-[0.85rem] font-semibold text-rose"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </>
          )}
          <p className="mt-6 border-t border-line pt-4 text-[0.8rem] text-ink-soft">
            {dict.credit}{" "}
            <a
              href="https://greatlittlepeople.com/metodologia"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-rose underline underline-offset-2"
            >
              greatlittlepeople.com
            </a>
          </p>
        </div>
      </Sheet>
    </>
  );
}
