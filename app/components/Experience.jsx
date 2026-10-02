"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot, BriefcaseBusiness, GraduationCap, Store, Wrench } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "./LanguageProvider";
import { translations } from "../data/translations";

const itemIcons = [Bot, Wrench, Store, GraduationCap];

export default function Experience() {
  const { language } = useLanguage();
  const t = translations[language].experience;
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="relative mx-auto max-w-6xl overflow-hidden px-6 py-24">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl"
        animate={reduceMotion ? undefined : { y: [0, 24, 0], x: [0, -12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <ScrollReveal className="relative z-10">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="flex items-center gap-3 text-3xl font-bold dark:text-white">
              <span className="-rotate-2 rounded-lg border-2 border-black bg-yellow-400 px-3 py-1 text-xl text-black shadow-[3px_3px_0_#111] dark:border-white dark:bg-yellow-500">
                02.
              </span>
              {t.title}
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {language === "id"
                ? "Perjalanan belajar, bekerja, dan membangun hal-hal yang berguna."
                : "A timeline of learning, working, and building useful things."}
            </p>
          </div>
          <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50/80 px-3 py-2 text-xs font-semibold text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            {language === "id" ? "Terus berkembang" : "Currently growing"}
          </div>
        </div>
      </ScrollReveal>

      <div className="relative z-10 grid gap-5 md:grid-cols-2">
        {t.items.map((item, index) => {
          const Icon = itemIcons[index] || BriefcaseBusiness;
          const current = index === 0;

          return (
            <ScrollReveal key={`${item.title}-${item.period}`} delay={index * 0.08}>
              <motion.article
                whileHover={reduceMotion ? undefined : { y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className={`group relative h-full overflow-hidden rounded-2xl border bg-white/85 p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-colors dark:bg-slate-900/80 ${
                  current
                    ? "border-emerald-300 dark:border-emerald-700"
                    : "border-gray-200 dark:border-slate-700"
                }`}
              >
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"
                  initial={reduceMotion ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-300/0 blur-2xl transition-colors duration-500 group-hover:bg-emerald-300/25" />

                <div className="relative flex items-start gap-4">
                  <motion.div
                    whileHover={reduceMotion ? undefined : { rotate: [-7, 7, 0], scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 ${current ? "shadow-[0_0_24px_rgba(16,185,129,0.2)]" : ""}`}
                  >
                    <Icon size={22} strokeWidth={2.2} />
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                        {item.period}
                      </span>
                      {current && (
                        <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-800 dark:bg-emerald-900/70 dark:text-emerald-200">
                          {language === "id" ? "Saat ini" : "Current"}
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h4>
                    <p className="mb-3 mt-1 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                      {item.place}
                    </p>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
