"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skillsData = [
    { name: "Python", emoji: "🐍" },
    { name: "React JS", emoji: "⚛️" },
    { name: "Linux / WSL", emoji: "🐧" },
    { name: "Networking", emoji: "🌐" },
    { name: "Bot Auto", emoji: "🤖" },
    { name: "IT Support", emoji: "🛠️" },
  ];

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-10 text-center font-heading"
      >
          Skils & Tools
      </motion.h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skillsData.map((skill, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.08,
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -8, 
              scale: 1.05,
              boxShadow: "7px 7px 0px 0px #000",
              transition: { duration: 0.2 }
            }}
            className="bg-yellow-50 hover:bg-yellow-100 border-2 border-black p-4 rounded-lg neo-shadow text-center cursor-default transition-colors"
          >
            <motion.div 
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className="text-3xl mb-2"
            >
              {skill.emoji}
            </motion.div>
            <h4 className="font-bold">{skill.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}