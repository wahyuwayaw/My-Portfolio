"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "./LanguageProvider";
import { translations } from "../data/translations";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const t = translations[language].projects;
  const projects = t.items;

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <ScrollReveal>
        <h3 className="text-3xl font-bold mb-10 flex items-center gap-3 dark:text-white">
          <span className="bg-emerald-500 text-white px-3 py-1 text-xl transform rotate-2 rounded border-2 border-black dark:border-white">
            03.
          </span>
          {t.title}
        </h3>
      </ScrollReveal>

      {/* GRID PORTRAIT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout" initial={false}>
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.id} 
            layout
            initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.4, delay: reduceMotion ? 0 : Math.min(index * 0.08, 0.24), ease: [0.22, 1, 0.36, 1], layout: { duration: 0.35 } }}
            className="h-full"
          >
            <ScrollReveal delay={index * 0.05} className="h-full">
                <motion.div
                  className="flex h-full flex-col overflow-hidden rounded-2xl border-2 border-black bg-white neo-shadow group/card dark:border-white dark:bg-slate-800"
                >
                {/* IMAGE PORTRAIT */}
                <div className="group/image relative h-64 w-full overflow-hidden border-b-2 border-black dark:border-white">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale-[35%] contrast-[1.05] group-hover/image:grayscale-0 group-hover/image:scale-110 transition-all duration-500 ease-out"
                  />

                  {/* shine sweep — kilau diagonal nyapu pas hover */}
                  <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
                    <div className="absolute -inset-y-8 -left-1/3 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/45 to-transparent -translate-x-[120%] group-hover/image:translate-x-[420%] transition-transform duration-[900ms] ease-out" />
                  </div>

                  {/* colored glow ring pas hover */}
                  <div className="pointer-events-none absolute inset-0 z-10 ring-0 group-hover/image:ring-4 ring-inset ring-emerald-400/70 transition-all duration-300" />

                  {/* overlay + CTA */}
                  <div className="absolute inset-0 z-20 flex items-end justify-center bg-gradient-to-t from-black/70 via-black/20 to-transparent pb-5 opacity-0 transition-opacity duration-300 group-hover/image:opacity-100">
                    <span className="translate-y-4 transform rounded-full border-2 border-white px-4 py-2 font-bold text-white transition-transform duration-300 group-hover/image:translate-y-0">
                      {t.viewProject}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`bg-${project.tagColor}-100 dark:bg-${project.tagColor}-900/50 border border-black dark:border-white px-2 py-0.5 text-xs font-bold rounded-md dark:text-gray-200`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h4 className="mb-2 text-lg font-bold transition-colors group-hover/card:text-emerald-600 dark:text-white dark:group-hover/card:text-emerald-400">
                    {project.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  <Link
                    href={`/projects/${project.id}`}
                    className="text-center w-full bg-black dark:bg-white text-white dark:text-black font-bold py-2 px-4 rounded border-2 border-black dark:border-white hover:bg-white dark:hover:bg-slate-800 hover:text-black dark:hover:text-white transition-all duration-300"
                  >
                    {t.detail}
                  </Link>
                </div>
                </motion.div>
            </ScrollReveal>
          </motion.div>
        ))}
        </AnimatePresence>
      </div>

      {projects.length > 3 && (
        <div className="mt-12 text-center">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={reduceMotion ? undefined : { y: -3, scale: 1.03 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 340, damping: 20 }}
            className="bg-white dark:bg-slate-800 border-2 border-black dark:border-white px-8 py-3 rounded-full font-bold neo-shadow hover:bg-gray-100 dark:hover:bg-slate-700 transition-all dark:text-white"
          >
            {showAll ? t.showLess : t.showAll}
          </motion.button>
        </div>
      )}
    </section>
  );
}
