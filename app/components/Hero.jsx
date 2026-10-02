"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Activity, Braces, Sparkles, Workflow, Zap } from "lucide-react";
import Typed from "typed.js";
import { useLanguage } from "./LanguageProvider";
import { translations } from "../data/translations";

export default function Hero({ onNavClick }) {
  const typedRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language].hero;
  const reduceMotion = useReducedMotion();
  const showcaseCopy = language === "id"
    ? { live: "ALUR AKTIF", automation: "Otomatisasi AI", running: "Alur berjalan lancar", sloganTop: "Bikin berguna", sloganBottom: "Bikin terasa hidup.", stack: "Teknologi pilihan", shipping: "meracik ide", systems: "semua sistem kreatif" }
    : { live: "LIVE FLOW", automation: "AI Automation", running: "Workflow running smoothly", sloganTop: "Make it useful", sloganBottom: "Make it feel alive.", stack: "Creative stack", shipping: "shipping ideas", systems: "all systems creative" };
  const titleLetterVariants = reduceMotion
    ? { hidden: {}, visible: { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)", transition: { duration: 0 } } }
    : {
        hidden: { opacity: 0, y: 58, rotateX: -70, filter: "blur(8px)" },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)",
          transition: { type: "spring", stiffness: 230, damping: 17 },
        },
      };
  const titleVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.045, delayChildren: reduceMotion ? 0 : 0.15 },
    },
  };

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

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-10 relative overflow-hidden">
      
      <motion.div 
        animate={reduceMotion ? undefined : {
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.6, 0.5]
        }}
        transition={reduceMotion ? { duration: 0 } : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-64 h-64 bg-yellow-200 dark:bg-yellow-900/30 rounded-full blur-3xl -z-10 will-change-transform"
      />
      <motion.div 
        animate={reduceMotion ? undefined : {
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={reduceMotion ? { duration: 0 } : { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-10 w-64 h-64 bg-emerald-200 dark:bg-emerald-900/30 rounded-full blur-3xl -z-10 will-change-transform"
      />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[5] hidden md:block [perspective:1000px]">
        <motion.div
          initial={{ opacity: 0, x: -36, rotate: -12, scale: 0.88 }}
          animate={reduceMotion ? { opacity: 1, x: 0, rotate: -7, scale: 1 } : { opacity: 1, x: 0, y: [0, -13, 0], rotate: [-7, -4, -7], scale: 1 }}
          transition={reduceMotion ? { duration: 0.2 } : { opacity: { duration: 0.7, delay: 0.55 }, x: { duration: 0.7, delay: 0.55 }, y: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }, rotate: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 } }}
          className="absolute left-[2%] top-[13%] w-40 rounded-2xl border-2 border-black/80 bg-white/85 p-3 shadow-[10px_10px_0_rgba(16,185,129,0.42)] backdrop-blur-xl dark:border-white/70 dark:bg-slate-900/80 xl:left-[4%] xl:top-[24%] xl:w-52 xl:p-4"
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-black bg-emerald-300 text-black dark:border-white"><Workflow size={21} /></span>
            <span className="rounded-full border border-emerald-600/30 bg-emerald-100 px-2 py-1 text-[9px] font-black tracking-[0.15em] text-emerald-800 dark:bg-emerald-400/15 dark:text-emerald-300">{showcaseCopy.live}</span>
          </div>
          <p className="text-left text-xs font-black uppercase tracking-[0.14em] text-slate-900 dark:text-white">{showcaseCopy.automation}</p>
          <div className="mt-3 flex items-center gap-2 text-[10px] font-semibold text-slate-500 dark:text-slate-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            {showcaseCopy.running}
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-emerald-100 dark:bg-slate-700">
            <motion.div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" animate={reduceMotion ? { width: "76%" } : { width: ["28%", "78%", "54%"] }} transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 42, rotate: 9, scale: 0.9 }}
          animate={reduceMotion ? { opacity: 1, x: 0, rotate: 5, scale: 1 } : { opacity: 1, x: 0, y: [0, 12, 0], rotate: [5, 2, 5], scale: 1 }}
          transition={reduceMotion ? { duration: 0.2 } : { opacity: { duration: 0.7, delay: 0.72 }, x: { duration: 0.7, delay: 0.72 }, y: { duration: 6.1, repeat: Infinity, ease: "easeInOut", delay: 1 }, rotate: { duration: 6.1, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
          className="absolute right-[2%] top-[13%] w-44 rounded-2xl border-2 border-slate-700/80 bg-slate-950/90 p-3 text-left shadow-[10px_10px_0_rgba(250,204,21,0.55)] backdrop-blur-xl dark:border-emerald-300/50 xl:right-[4%] xl:top-[27%] xl:w-56 xl:p-4"
        >
          <div className="mb-4 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-400" /><span className="h-2 w-2 rounded-full bg-yellow-300" /><span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="ml-auto font-mono text-[9px] text-slate-400">wahyu.dev</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-300"><Braces size={14} /> {showcaseCopy.shipping}</div>
          <div className="mt-3 space-y-2 font-mono text-[9px] text-slate-400">
            <div><span className="text-fuchsia-300">const</span> future = <span className="text-yellow-200">"in motion"</span></div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800"><motion.div className="h-full rounded-full bg-emerald-400" animate={reduceMotion ? { x: 0 } : { x: ["-100%", "0%", "100%"] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }} /></div>
            <div className="flex items-center gap-1.5 text-emerald-300"><Activity size={11} /> {showcaseCopy.systems}</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.8 }}
          animate={reduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: [0, -9, 0], scale: 1, rotate: [2, 0, 2] }}
          transition={reduceMotion ? { duration: 0.2 } : { opacity: { duration: 0.65, delay: 1 }, y: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1 }, rotate: { duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
          className="absolute bottom-[4%] left-[2%] hidden items-center gap-2 rounded-2xl border-2 border-black bg-yellow-100/95 px-3 py-2 shadow-[8px_8px_0_rgba(0,0,0,0.85)] dark:border-white dark:bg-yellow-300 dark:text-slate-950 lg:flex xl:bottom-[17%] xl:left-[13%] xl:gap-3 xl:px-4 xl:py-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-300 text-slate-950"><Zap size={18} fill="currentColor" /></span>
          <span className="text-left"><span className="block text-[9px] font-black uppercase tracking-[0.16em]">{showcaseCopy.sloganTop}</span><span className="text-xs font-extrabold">{showcaseCopy.sloganBottom}</span></span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.8 }}
          animate={reduceMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: [0, 10, 0], scale: [1, 1.04, 1] }}
          transition={reduceMotion ? { duration: 0.2 } : { opacity: { duration: 0.65, delay: 1.12 }, y: { duration: 5.7, repeat: Infinity, ease: "easeInOut", delay: 1.1 }, scale: { duration: 5.7, repeat: Infinity, ease: "easeInOut", delay: 1.1 } }}
          className="absolute bottom-[5%] right-[2%] hidden w-40 rounded-2xl border-2 border-black bg-white/90 p-3 shadow-[8px_8px_0_rgba(59,130,246,0.38)] backdrop-blur-xl dark:border-white dark:bg-slate-900/90 lg:block xl:bottom-[19%] xl:right-[11%] xl:w-48"
        >
          <div className="flex items-center gap-2 text-left">
            <Sparkles size={16} className="text-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.16em] dark:text-white">{showcaseCopy.stack}</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5 text-[9px] font-bold">
            <span className="rounded-md border border-black/10 bg-emerald-100 px-2 py-1 text-emerald-900">React</span>
            <span className="rounded-md border border-black/10 bg-cyan-100 px-2 py-1 text-cyan-900">Next.js</span>
            <span className="rounded-md border border-black/10 bg-yellow-100 px-2 py-1 text-yellow-900">Motion</span>
            <span className="rounded-md border border-black/10 bg-violet-100 px-2 py-1 text-violet-900">AI</span>
          </div>
        </motion.div>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[7%] z-[5] md:hidden">
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -5, 0], rotate: [-2, -1, -2] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[3%] top-0 w-[39%] rounded-xl border-2 border-slate-800 bg-slate-950 px-2.5 py-2 text-left text-white shadow-[4px_4px_0_rgba(16,185,129,0.65)] dark:border-emerald-300/60"
        >
          <div className="flex items-center justify-between gap-1">
            <span className="flex min-w-0 items-center gap-1 text-[9px] font-bold text-emerald-300"><Workflow size={12} className="shrink-0" /><span className="truncate">{showcaseCopy.automation}</span></span>
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-emerald-400" />
          </div>
          <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-slate-700">
            <motion.div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300" animate={reduceMotion ? { width: "70%" } : { width: ["32%", "82%", "55%"] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }} />
          </div>
        </motion.div>
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 5, 0], rotate: [2, 1, 2] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[3%] top-8 w-[37%] rounded-xl border-2 border-emerald-700/30 bg-white/90 px-2.5 py-2 text-left shadow-[4px_4px_0_rgba(59,130,246,0.36)] backdrop-blur dark:border-emerald-300/40 dark:bg-slate-900/90"
        >
          <div className="mb-1.5 flex items-center gap-1 text-[9px] font-black uppercase tracking-wide text-slate-800 dark:text-white"><Sparkles size={12} className="shrink-0 text-emerald-500" /><span className="truncate">{showcaseCopy.stack}</span></div>
          <div className="flex flex-wrap gap-1 text-[8px] font-bold">
            <span className="rounded bg-emerald-100 px-1 py-0.5 text-emerald-900">React</span>
            <span className="rounded bg-cyan-100 px-1 py-0.5 text-cyan-900">Next.js</span>
            <span className="rounded bg-violet-100 px-1 py-0.5 text-violet-900">AI</span>
          </div>
        </motion.div>
      </div>

      <div className="text-center max-w-3xl z-10">
        <motion.span 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block bg-yellow-100 dark:bg-yellow-900/50 border-2 border-black dark:border-white px-4 py-1 rounded-full font-bold text-sm mb-6 neo-shadow dark:text-yellow-100"
        >
          {t.greeting}
        </motion.span>
        
        <motion.h1
          aria-label="Wahyu Sugiarto"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={titleVariants}
          className="mb-4 text-5xl font-black leading-tight text-gray-900 dark:text-white md:text-7xl xl:text-8xl [perspective:700px]"
        >
          <span aria-hidden="true" className="block">
            {[..."WAHYU"].map((letter, index) => <motion.span key={`${letter}-${index}`} variants={titleLetterVariants} className="inline-block">{letter}</motion.span>)}
          </span>
          <motion.span
            aria-hidden="true"
            variants={{
              hidden: { opacity: 0, rotate: -8, scale: 0.82 },
              visible: { opacity: 1, rotate: -1, scale: 1, transition: { type: "spring", stiffness: 170, damping: 13, delay: reduceMotion ? 0 : 0.42, staggerChildren: reduceMotion ? 0 : 0.04 } },
            }}
            whileHover={reduceMotion ? undefined : { rotate: 1, y: -4, scale: 1.035 }}
            className="relative inline-block border-2 border-black bg-white px-2 text-emerald-600 neo-shadow dark:border-white dark:bg-slate-800 dark:text-emerald-400"
          >
            {[..."SUGIARTO"].map((letter, index) => <motion.span key={`${letter}-${index}`} variants={titleLetterVariants} className="inline-block">{letter}</motion.span>)}
          </motion.span>
        </motion.h1>
        
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 font-heading min-h-[2rem]"
        >
          <span ref={typedRef} className="text-emerald-600 dark:text-emerald-400"></span>
        </motion.h2>

        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
          className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8 md:mb-10 text-base md:text-lg leading-relaxed border-l-4 border-black dark:border-emerald-500 pl-4 bg-white/50 dark:bg-slate-800/50 py-2"
        >
          {t.description}
        </motion.p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <motion.a 
            whileHover={reduceMotion ? undefined : { y: -3, boxShadow: "7px 7px 0px 0px #000" }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
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
            whileHover={reduceMotion ? undefined : { y: -3, boxShadow: "7px 7px 0px 0px #000" }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            href="/kursor/cv.pdf"
            download="CV_Wahyu_Sugiarto.pdf"
            className="bg-yellow-100 dark:bg-yellow-900/50 border-2 border-black dark:border-white text-black dark:text-white font-bold py-3 px-8 rounded-lg neo-shadow flex items-center justify-center gap-2 transition-all"
          >
            {t.ctaCV}
          </motion.a>
        </motion.div>
        <motion.a
          href="#about"
          aria-label={language === "id" ? "Gulir ke bagian tentang saya" : "Scroll to about section"}
          onClick={(event) => {
            event.preventDefault();
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: reduceMotion ? 0 : [0, 7, 0] }}
          transition={reduceMotion ? { duration: 0 } : { opacity: { delay: 1.2 }, y: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 } }}
          className="relative mt-9 flex flex-col items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 md:absolute md:bottom-7 md:left-0 md:right-0 md:mt-0"
        >
          <span>{language === "id" ? "Jelajahi" : "Explore"}</span>
          <span className="h-9 w-5 rounded-full border-2 border-current p-1">
            <span className="block h-2 w-1 rounded-full bg-emerald-500" />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
