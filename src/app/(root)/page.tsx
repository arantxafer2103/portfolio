import type { Metadata } from "next";
import Link from "next/link";
import { locales, localeNames, siteUrl } from "@/i18n/config";
import { LocaleRedirect } from "@/components/locale-redirect";

export const metadata: Metadata = {
  title: "Arantxa Fernández",
  description:
    "Portfolio de Arantxa Fernández, maestra de Educación Infantil · Portfolio · Portfoli",
  alternates: {
    canonical: `${siteUrl}/es/`,
    languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}/`])),
  },
};

export default function RootPage() {
  return (
    <main className="grid min-h-dvh place-items-center px-5 text-center">
      <LocaleRedirect />
      <div>
        <p className="font-display text-3xl font-semibold">Arantxa Fernández</p>
        <ul className="mt-5 flex justify-center gap-3">
          {locales.map((l) => (
            <li key={l}>
              <Link
                href={`/${l}/`}
                lang={l}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold hover:border-rose"
              >
                {localeNames[l]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
