"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import { useLanguage } from "./LanguageProvider";
import { translations } from "../data/translations";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].projects;
  const projects = t.items;

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <ScrollReveal>
        <h3 className="text-3xl font-bold mb-10 flex items-center gap-3 dark:text-white">
          <span className="bg-emerald-500 text-white px-3 py-1 text-xl transform rotate-2 rounded border-2 border-black dark:border-white">
            02.
          </span>
          {t.title}
        </h3>
      </ScrollReveal>

      {/* GRID PORTRAIT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <ScrollReveal 
            key={project.id} 
            delay={index * 0.1} 
            className="h-full"
          >
            <TiltCard className="h-full">
              <motion.div
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="bg-white dark:bg-slate-800 border-2 border-black dark:border-white rounded-2xl overflow-hidden neo-shadow flex flex-col h-full group"
              >
                {/* IMAGE PORTRAIT */}
                <div className="relative w-full h-64 border-b-2 border-black dark:border-white overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold border-2 border-white px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
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

                  <h4 className="text-lg font-bold mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors dark:text-white">
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
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-white dark:bg-slate-800 border-2 border-black dark:border-white px-8 py-3 rounded-full font-bold neo-shadow hover:bg-gray-100 dark:hover:bg-slate-700 transition-all dark:text-white"
          >
            {showAll ? t.showLess : t.showAll}
          </button>
        </div>
      )}
    </section>
  );
}
