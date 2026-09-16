"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

export const LOCALE_STORAGE_KEY = "portfolio-lang";

function preferredLocale(): Locale {
  try {
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved && isLocale(saved)) return saved;
  } catch {}
  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag.toLowerCase().split("-")[0];
    if (isLocale(base)) return base;
  }
  return defaultLocale;
}

export function LocaleRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace(`/${preferredLocale()}/`);
  }, [router]);
  return null;
}
