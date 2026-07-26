"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WhatsAppFloating from "./components/WhatsAppFloating";
import CursorTrail from "./components/CursorTrail";

export default function Home() {
  return (
    <>
      <CursorTrail />

      <section className="mt-20">
        <Hero />
      </section>

      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      <WhatsAppFloating />
    </>
  );
}
