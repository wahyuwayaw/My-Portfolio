"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import confetti from "canvas-confetti";
import { useLanguage } from "./LanguageProvider";
import { translations } from "../data/translations";

export default function Hero({ onNavClick }) {
  const typedRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language].hero;

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: t.role,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, [language, t.role]); // Re-run effect when language changes

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-10 relative overflow-hidden">
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.6, 0.5]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-64 h-64 bg-yellow-200 dark:bg-yellow-900/30 rounded-full blur-3xl -z-10 will-change-transform"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-10 w-64 h-64 bg-emerald-200 dark:bg-emerald-900/30 rounded-full blur-3xl -z-10 will-change-transform"
      />

      <div className="text-center max-w-3xl z-10">
        <motion.span 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-block bg-yellow-100 dark:bg-yellow-900/50 border-2 border-black dark:border-white px-4 py-1 rounded-full font-bold text-sm mb-6 neo-shadow dark:text-yellow-100"
        >
          {t.greeting}
        </motion.span>
        
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black mb-4 leading-tight text-gray-900 dark:text-white"
        >
          WAHYU <br /> 
          <motion.span 
            initial={{ rotate: -5, opacity: 0 }}
            animate={{ rotate: -1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-emerald-600 dark:text-emerald-400 bg-white dark:bg-slate-800 px-2 border-2 border-black dark:border-white transform inline-block"
          >
            SUGIARTO
          </motion.span>
        </motion.h1>
        
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 font-heading min-h-[2rem]"
        >
          <span ref={typedRef} className="text-emerald-600 dark:text-emerald-400"></span>
        </motion.h2>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-10 text-lg leading-relaxed border-l-4 border-black dark:border-emerald-500 pl-4 bg-white/50 dark:bg-slate-800/50 py-2"
        >
          {t.description}
        </motion.p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <motion.a 
            whileHover={{ y: -3, boxShadow: "7px 7px 0px 0px #000" }}
            whileTap={{ scale: 0.98 }}
            href="#projects" 
            onClick={(e) => { 
              e.preventDefault(); 
              const element = document.querySelector('#projects');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-emerald-400 dark:bg-emerald-600 border-2 border-black dark:border-white text-black dark:text-white font-bold py-3 px-8 rounded-lg neo-shadow flex items-center justify-center gap-2 transition-all"
          >
            {t.ctaProject}
          </motion.a>
          <motion.a 
            whileHover={{ y: -3, boxShadow: "7px 7px 0px 0px #000" }}
            whileTap={{ scale: 0.98 }}
            href="/kursor/cv.pdf"
            download="CV_Wahyu_Sugiarto.pdf"
            onClick={triggerConfetti}
            className="bg-yellow-100 dark:bg-yellow-900/50 border-2 border-black dark:border-white text-black dark:text-white font-bold py-3 px-8 rounded-lg neo-shadow flex items-center justify-center gap-2 transition-all"
          >
            {t.ctaCV}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}