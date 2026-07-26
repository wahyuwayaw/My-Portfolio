"use client";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "./LanguageProvider";
import { translations } from "../data/translations";

export default function Experience() {
  const { language } = useLanguage();
  const t = translations[language].experience;

  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
      <ScrollReveal>
        <h3 className="text-3xl font-bold mb-10 flex items-center gap-3 dark:text-white">
          <span className="bg-yellow-400 dark:bg-yellow-600 text-black dark:text-white px-3 py-1 text-xl transform -rotate-2 rounded border-2 border-black dark:border-white">
            02.
          </span>
          {t.title}
        </h3>
      </ScrollReveal>

      <div className="relative border-l-4 border-black dark:border-white ml-3 md:ml-6 space-y-10">
        {t.items.map((item, index) => (
          <ScrollReveal key={index} delay={index * 0.1} className="relative pl-8 md:pl-10">
            {/* Timeline dot */}
            <span className="absolute -left-[11px] top-2 w-4 h-4 bg-emerald-400 dark:bg-emerald-500 border-2 border-black dark:border-white rounded-full" />

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-slate-800 border-2 border-black dark:border-white p-6 rounded-xl neo-shadow"
            >
              <span className="inline-block bg-yellow-100 dark:bg-yellow-900/50 border border-black dark:border-white px-3 py-0.5 rounded-full text-xs font-bold mb-3 dark:text-yellow-100">
                {item.period}
              </span>
              <h4 className="text-lg font-bold dark:text-white">{item.title}</h4>
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400 mb-2">
                {item.place}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
