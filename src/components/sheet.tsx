"use client";

import type { ReactNode, Ref } from "react";
import { CloseIcon } from "./icons";

type Props = {
  ref: Ref<HTMLDialogElement>;
  labelledBy: string;
  background: string;
  closeLabel: string;
  header: ReactNode;
  children: ReactNode;
};

export function Sheet({ ref, labelledBy, background, closeLabel, header, children }: Props) {
  return (
    <dialog
      ref={ref}
      aria-labelledby={labelledBy}
      className="sheet-dialog"
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
    >
      <div className="flex max-h-[inherit] flex-col">
        <header
          className="relative shrink-0 px-7 pt-6 pb-5 text-white"
          style={{ background }}
        >
          {header}
          <button
            type="button"
            onClick={(e) => e.currentTarget.closest("dialog")?.close()}
            aria-label={closeLabel}
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/20 transition-colors hover:bg-white/35"
          >
            <CloseIcon className="h-4 w-4 stroke-white" />
          </button>
        </header>
        {children}
      </div>
    </dialog>
  );
}
