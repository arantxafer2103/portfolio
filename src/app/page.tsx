import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Methodology } from "@/components/methodology";
import { Programming } from "@/components/programming";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Experience />
      <Education />
      <Methodology />
      <Programming />
      <Contact />
    </>
  );
}
