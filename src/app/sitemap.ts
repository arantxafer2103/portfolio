import type { MetadataRoute } from "next";
import { locales, siteUrl } from "@/i18n/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${siteUrl}/${l}/`])
  );
  return locales.map((l) => ({
    url: `${siteUrl}/${l}/`,
    changeFrequency: "monthly",
    priority: l === "es" ? 1 : 0.8,
    alternates: { languages },
  }));
}
