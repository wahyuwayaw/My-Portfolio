"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Bot, Workflow, Sparkles, Network, Cpu, Star, Wrench, ChevronDown, ArrowUpRight } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { translations } from "../data/translations";

const mainSkills = [
  {
    name: "AI Agents",
    category: "AI & Automation",
    Icon: Bot,
    color: "text-emerald-500",
    description: {
      id: "Membangun dan menggunakan AI agent untuk otomatisasi, analisis, dan pengembangan aplikasi.",
      en: "Building and using AI agents for automation, analysis, and application development.",
    },
    details: {
      id: ["Nous Hermes", "Bot untuk tugas berulang", "Workflow development"],
      en: ["Nous Hermes", "Bots for repetitive tasks", "Development workflows"],
    },
  },
  {
    name: "Python",
    category: "Backend & Data",
    Icon: SiPython,
    color: "text-sky-500",
    description: {
      id: "Digunakan untuk scripting, otomatisasi, pengolahan data, dan pengembangan AI.",
      en: "Used for scripting, automation, data processing, and AI development.",
    },
    details: {
      id: ["Scripting", "Otomatisasi tugas", "Pemrosesan data"],
      en: ["Scripting", "Task automation", "Data processing"],
    },
  },
  {
    name: "AI-Assisted Development",
    category: "AI & Development",
    Icon: Sparkles,
    color: "text-violet-500",
    description: {
      id: "Memakai AI tools dan coding agents untuk riset, debugging, dan mempercepat pengembangan.",
      en: "Using AI tools and coding agents for research, debugging, and faster development.",
    },
    details: {
      id: ["Riset dan brainstorming", "Bantuan debugging", "Review ide dan kode"],
      en: ["Research and brainstorming", "Debugging assistance", "Idea and code review"],
    },
  },
  {
    name: "Automation",
    category: "Workflow Design",
    Icon: Workflow,
    color: "text-purple-500",
    description: {
      id: "Membuat workflow otomatis dengan script dan tools untuk meningkatkan efisiensi kerja.",
      en: "Creating automated workflows with scripts and tools to improve efficiency.",
    },
    details: {
      id: ["Pipeline laporan otomatis", "Web scraping", "Pekerjaan repetitif"],
      en: ["Automated reporting pipelines", "Web scraping", "Repetitive tasks"],
    },
  },
];

const technologies = [
  { name: "JavaScript", group: "Frontend", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", group: "Frontend", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", group: "Frontend", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", group: "Frontend", Icon: SiNextdotjs, className: "text-slate-950 dark:text-white" },
  { name: "Node.js", group: "Backend", Icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind CSS", group: "Frontend", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MySQL", group: "Database", Icon: SiMysql, color: "#4479A1" },
  { name: "Git", group: "Tools", Icon: SiGit, color: "#F05032" },
  { name: "Linux", group: "Tools", Icon: SiLinux, className: "text-slate-950 dark:text-white" },
  { name: "HTML", group: "Frontend", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", group: "Frontend", Icon: SiCss3, color: "#1572B6" },
  { name: "Networking", group: "IT Support", Icon: Network, className: "text-sky-600 dark:text-sky-400" },
  { name: "Hardware", group: "IT Support", Icon: Cpu, className: "text-slate-600 dark:text-slate-300" },
];

const groupColors = {
  Frontend: "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300",
  Backend: "bg-sky-100 text-sky-700 dark:bg-sky-400/15 dark:text-sky-300",
  Database: "bg-cyan-100 text-cyan-700 dark:bg-cyan-400/15 dark:text-cyan-300",
  Tools: "bg-violet-100 text-violet-700 dark:bg-violet-400/15 dark:text-violet-300",
  "IT Support": "bg-amber-100 text-amber-800 dark:bg-amber-400/15 dark:text-amber-300",
};

export default function Skills() {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const t = translations[language].skills;
  const [expandedSkill, setExpandedSkill] = useState(null);

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24">
      <motion.header
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 text-center"
      >
        <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
          {language === "id" ? "YANG SAYA GUNAKAN UNTUK MEMBANGUN" : "WHAT I USE TO BUILD"}
        </p>
        <h3 className="font-heading text-3xl font-black dark:text-white md:text-5xl">
          {t.title.split(" & ")[0]} <span className="text-emerald-600 dark:text-emerald-400">& {t.title.split(" & ")[1]}</span>
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
          {language === "id"
            ? "Teknologi dan tools yang saya gunakan untuk membangun proyek dengan bantuan AI dan pendekatan vibe coding."
            : "The technologies and tools I use to build projects with AI assistance and a hands-on development approach."}
        </p>
      </motion.header>

      <div className="space-y-4">
        <motion.section
          initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-emerald-200/80 bg-white/65 p-4 shadow-[0_18px_60px_rgba(16,185,129,0.08)] backdrop-blur-xl dark:border-emerald-400/20 dark:bg-slate-900/55 md:p-5"
        >
          <div className="mb-4 flex flex-wrap items-center gap-3 px-1">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-slate-900 dark:bg-emerald-400/20 dark:text-emerald-200"><Star size={19} fill="currentColor" /></span>
            <h4 className="font-heading text-xl font-black text-slate-900 dark:text-white md:text-2xl">{language === "id" ? "Keahlian Utama" : "Main Skills"}</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">{language === "id" ? "Keahlian yang paling sering saya gunakan dalam pengembangan proyek." : "The skills I rely on most when building projects."}</p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {mainSkills.map((skill, index) => (
              <motion.article
                key={skill.name}
                layout
                role="button"
                tabIndex={0}
                aria-expanded={expandedSkill === index}
                aria-controls={`skill-details-${index}`}
                aria-label={`${skill.name}: ${language === "id" ? "lihat detail" : "show details"}`}
                onClick={() => setExpandedSkill(expandedSkill === index ? null : index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setExpandedSkill(expandedSkill === index ? null : index);
                  }
                }}
                initial={reduceMotion ? false : { opacity: 0, y: 24, rotateX: -8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={reduceMotion ? undefined : { y: -7, scale: 1.015, transition: { type: "spring", stiffness: 260, damping: 20 } }}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl border p-5 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${index === 0 ? "border-emerald-300 bg-emerald-50/75 dark:border-emerald-400/60 dark:bg-emerald-400/[0.08]" : "border-emerald-100/90 bg-white/85 dark:border-white/10 dark:bg-slate-900/60"} ${expandedSkill === index ? "ring-2 ring-emerald-300/70 dark:ring-emerald-400/40" : ""}`}
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-200/40 blur-2xl transition-transform duration-700 group-hover:scale-150 dark:bg-emerald-300/10" />
                <div className="relative flex items-start justify-between gap-2">
                  <skill.Icon size={38} className={`${skill.color || ""} transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`} />
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300">{language === "id" ? "Fokus utama" : "Core focus"}</span>
                </div>
                <h5 className="relative mt-4 text-base font-extrabold text-slate-900 dark:text-white">{skill.name}</h5>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{skill.description[language]}</p>
                <div className="relative mt-4 flex items-center justify-between border-t border-emerald-100/80 pt-3 text-xs font-bold text-emerald-700 dark:border-white/10 dark:text-emerald-300">
                  <span>{expandedSkill === index ? (language === "id" ? "Tutup detail" : "Hide details") : (language === "id" ? "Lihat yang saya kerjakan" : "See how I use it")}</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${expandedSkill === index ? "rotate-180" : ""}`} />
                </div>
                <AnimatePresence initial={false}>
                  {expandedSkill === index && (
                    <motion.div
                      id={`skill-details-${index}`}
                      initial={reduceMotion ? false : { opacity: 0, height: 0, y: -5 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, height: 0, y: -5 }}
                      transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
                      className="relative overflow-hidden"
                    >
                      <p className="mb-2 mt-3 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {language === "id" ? "Contoh penerapan" : "Examples"}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {skill.details[language].map((detail) => (
                          <span key={detail} className="inline-flex items-center gap-1 rounded-lg border border-emerald-200/80 bg-white/80 px-2 py-1 text-[11px] font-medium text-slate-700 dark:border-emerald-800 dark:bg-slate-950/50 dark:text-slate-200">
                            <ArrowUpRight size={11} className="text-emerald-600 dark:text-emerald-400" />{detail}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={reduceMotion ? false : { opacity: 0, y: 36, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-emerald-200/80 bg-white/65 p-4 shadow-[0_18px_60px_rgba(16,185,129,0.08)] backdrop-blur-xl dark:border-emerald-400/20 dark:bg-slate-900/55 md:p-5"
        >
          <div className="mb-4 flex flex-wrap items-center gap-3 px-1">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-slate-900 dark:bg-emerald-400/20 dark:text-emerald-200"><Wrench size={19} /></span>
            <h4 className="font-heading text-xl font-black text-slate-900 dark:text-white md:text-2xl">{language === "id" ? "Teknologi yang Saya Gunakan" : "Technologies I Work With"}</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">{language === "id" ? "Tools dan teknologi dari berbagai proyek." : "Tools and technologies used across my projects."}</p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.42, delay: reduceMotion ? 0 : index * 0.045, ease: [0.22, 1, 0.36, 1] }}
                whileHover={reduceMotion ? undefined : { y: -5, scale: 1.025, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group flex min-h-[76px] min-w-0 items-center gap-3 rounded-xl border border-emerald-100 bg-white/90 p-3 shadow-sm transition-colors hover:border-emerald-300 hover:bg-emerald-50/80 dark:border-white/10 dark:bg-slate-900/75 dark:hover:border-emerald-400/40 dark:hover:bg-emerald-400/[0.06]"
              >
                <tech.Icon size={34} className={`shrink-0 transition-transform duration-300 group-hover:scale-110 ${tech.className || ""}`} style={tech.color ? { color: tech.color } : undefined} />
                <div className="min-w-0 text-left">
                  <p className="truncate text-xs font-extrabold text-slate-900 dark:text-white">{tech.name}</p>
                  <span className={`mt-1 inline-flex rounded-full px-2 py-0.5 text-[9px] font-semibold ${groupColors[tech.group]}`}>{tech.group}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
}
