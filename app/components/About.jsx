"use client";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "./LanguageProvider";
import { translations } from "../data/translations";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        <ScrollReveal 
          direction="right" 
          className="relative group mx-auto md:mx-0"
        >
          <div className="absolute inset-0 bg-yellow-200 dark:bg-yellow-900/50 border-2 border-black dark:border-white rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
          <div className="relative bg-white dark:bg-slate-800 border-2 border-black dark:border-white rounded-2xl overflow-hidden neo-shadow h-80 w-72 flex items-center justify-center">
            <img src="/wahyu.jpeg" alt="Wahyu Sugiarto" className="w-full h-full object-cover" />
          </div>
        </ScrollReveal>
        
        <ScrollReveal 
          direction="left" 
          delay={0.2}
        >
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 dark:text-white">
            <span className="bg-black dark:bg-white text-white dark:text-black px-3 py-1 text-xl transform -rotate-2 rounded">01.</span>
            {t.title}
          </h3>
          
          <div className="bg-white dark:bg-slate-800 border-2 border-black dark:border-white p-6 rounded-xl neo-shadow">
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              {t.intro} <strong className="bg-yellow-200 dark:bg-yellow-900/50 px-1 border border-black dark:border-white dark:text-white">{t.name}</strong>, {t.description1}
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              {t.description2}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              {t.description3}
            </p>
            
            <div className="mt-6 bg-gray-900 dark:bg-black rounded-lg p-4 border-2 border-black dark:border-emerald-500 text-sm font-mono text-green-400 shadow-lg">
              <p>$ current_status: "{t.status.current}"</p>
              <p>$ location: "{t.status.location}"</p>
              <p>$ interests: {JSON.stringify(t.status.interests)}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}