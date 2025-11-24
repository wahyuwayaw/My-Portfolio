"use client";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import { useLanguage } from "./LanguageProvider";
import { translations } from "../data/translations";

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;

  const skillsData = [
    { name: "HTML", emoji: "🌐" },
    { name: "CSS", emoji: "🎨" },
    { name: "JavaScript", emoji: "⚡" },
    { name: "React", emoji: "⚛️" },
    { name: "Next.js", emoji: "🚀" },
    { name: "Tailwind", emoji: "💅" },
    { name: "Node.js", emoji: "🟢" },
    { name: "Git", emoji: "📦" },
    { name: "Linux", emoji: "🐧" },
    { name: "Python", emoji: "🐍" },
    { name: "Networking", emoji: "📡" },
    { name: "Hardware", emoji: "🖥️" },
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
                <span className="text-4xl">{skill.emoji}</span>
                <span className="font-bold font-heading dark:text-white">{skill.name}</span>
              </motion.div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}