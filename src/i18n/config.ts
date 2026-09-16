export const locales = ["es", "en", "ca"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  ca: "Català",
};

export const siteUrl = "https://arantxafer2103.github.io/portfolio";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
