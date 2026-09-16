import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { fontVariables } from "../fonts";
import { isLocale, locales, siteUrl } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf5f1" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1417" },
  ],
};

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  const url = `${siteUrl}/${lang}/`;

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${siteUrl}/${l}/`])
      ),
    },
    openGraph: {
      type: "profile",
      url,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: { es: "es_ES", en: "en_GB", ca: "ca_ES" }[lang],
      images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [`${siteUrl}/og.png`],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${fontVariables} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
