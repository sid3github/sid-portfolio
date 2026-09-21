import { About } from "@/components/about";
import { Approach } from "@/components/approach";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Nav } from "@/components/nav";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Experience />
      <Approach />
      <Contact />
    </main>
  );
}
