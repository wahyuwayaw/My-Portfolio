"use client";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiLinux,
  SiGit,
  SiMysql,
} from "react-icons/si";
import { Bot, Workflow, Network, Cpu } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import { useLanguage } from "./LanguageProvider";
import { translations } from "../data/translations";

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;

  const skillsData = [
    { name: "AI Agents", Icon: Bot, className: "text-emerald-600 dark:text-emerald-400" },
    { name: "Automation", Icon: Workflow, className: "text-purple-600 dark:text-purple-400" },
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", Icon: SiNextdotjs, className: "text-black dark:text-white" },
    { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    { name: "Python", Icon: SiPython, color: "#3776AB" },
    { name: "Linux", Icon: SiLinux, className: "text-black dark:text-white" },
    { name: "Git", Icon: SiGit, color: "#F05032" },
    { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
    { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", Icon: SiCss3, color: "#1572B6" },
    { name: "Networking", Icon: Network, className: "text-sky-600 dark:text-sky-400" },
    { name: "Hardware", Icon: Cpu, className: "text-gray-700 dark:text-gray-300" },
  ];

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
      <ScrollReveal>
        <h3 className="text-3xl font-bold mb-10 text-center font-heading dark:text-white">
            {t.title}
        </h3>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skillsData.map((skill, index) => (
          <ScrollReveal
            key={index}
            delay={index * 0.05}
          >
            <TiltCard>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-slate-800 border-2 border-black dark:border-white p-6 rounded-xl neo-shadow flex flex-col items-center justify-center gap-3 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors cursor-pointer h-full"
              >
                <skill.Icon
                  size={40}
                  className={skill.className}
                  style={skill.color ? { color: skill.color } : undefined}
                />
                <span className="font-bold font-heading dark:text-white">{skill.name}</span>
              </motion.div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
