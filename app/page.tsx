import Hero from "./sections/hero";
import About from "./sections/about";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Achievements from "./sections/achievements";
import Gallery from "./sections/gallery";
import Learning from "./sections/learning";
import Resume from "./sections/resume";
import Contact from "./sections/contact";

export default function HomePage() {
  return (
    <main className="relative pt-20 space-y-8">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Gallery />
      <Learning />
      <Resume />
      <Contact />
    </main>
  );
}