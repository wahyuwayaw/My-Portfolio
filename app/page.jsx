"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WhatsAppFloating from "./components/WhatsAppFloating";
import Footer from "./components/Footer";
import LoadingOverlay from "./components/LoadingOverlay";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [targetHref, setTargetHref] = useState("");

  const handlePageTransition = (href) => {
    setIsLoading(true);
    setTargetHref(href);
  };

  useEffect(() => {
    let loadingScrollTimeout;
    if (isLoading && targetHref) {
      loadingScrollTimeout = setTimeout(() => {
        document.querySelector(targetHref)?.scrollIntoView({ behavior: 'smooth' });
        setIsLoading(false);
        setTargetHref("");
      }, 1200);
    }

    return () => {
      clearTimeout(loadingScrollTimeout);
    };
  }, [isLoading, targetHref]);

  return (
    <main className="relative">
      <LoadingOverlay isLoading={isLoading} />

      <Navbar onLinkClick={handlePageTransition} />

      <section className="mt-20">
        <Hero onNavClick={handlePageTransition} />
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />

      <WhatsAppFloating />
      <Footer />
    </main>
  );
}
