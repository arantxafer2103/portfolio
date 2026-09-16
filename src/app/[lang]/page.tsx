import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { resolveCurriculum } from "@/i18n/decree";
import { Methodology } from "@/components/methodology";
import { Digital } from "@/components/digital";
import { Programming } from "@/components/programming";
import { Contact } from "@/components/contact";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const curricula = {
    autumn: resolveCurriculum(lang, "autumn"),
    winter: resolveCurriculum(lang, "winter"),
    spring: resolveCurriculum(lang, "spring"),
    summer: resolveCurriculum(lang, "summer"),
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arantxa Fernández",
    jobTitle: dict.hero.role,
    email: "mailto:arantxafer2103@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Esparreguera",
      addressRegion: "Barcelona",
      addressCountry: "ES",
    },
    alumniOf: dict.education.studies.map((s) => s.place),
    knowsLanguage: ["es", "ca", "en"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Nav lang={lang} dict={dict.nav} />
      <main id="contenido">
        <Hero dict={dict.hero} />
        <Experience dict={dict.experience} />
        <Education dict={dict.education} />
        <Methodology
          dict={dict.methodology}
          closeLabel={dict.programming.labels.close}
        />
        <Digital dict={dict.digital} />
        <Programming dict={dict.programming} curricula={curricula} />
        <Contact dict={dict.contact} />
      </main>
    </>
  );
}
