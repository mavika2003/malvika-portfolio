import Navigation from "./components/Navigation";
import NeuralBackground from "./components/NeuralBackground";
import Marquee from "./components/Marquee";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Gallery from "./sections/Gallery";
import Skills from "./sections/Skills";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      <NeuralBackground />
      <Navigation />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Gallery />
      <Skills />
      <Achievements />
      <Contact />

      <footer className="py-10 text-center text-ink/50 border-t border-ink/10">
        <p className="font-mono-tag text-xs">
          © 2026 Malvika Sawant — built with Next.js, Tailwind & Framer Motion
        </p>
      </footer>
    </main>
  );
}
