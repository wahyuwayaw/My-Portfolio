"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiTelegramFill } from "react-icons/ri";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "./LanguageProvider";
import { translations } from "../data/translations";

const socialLinks = [
  { 
    name: "GitHub", 
    icon: FaGithub, 
    link: "https://github.com/wahyuwayaw", 
    bgColor: "bg-gray-50",
    hoverBg: "group-hover:bg-gray-800",
    iconColor: "text-gray-800",
    hoverIcon: "group-hover:text-white"
  },
  { 
    name: "LinkedIn", 
    icon: FaLinkedin, 
    link: "https://linkedin.com/in/wahyu-sugiarto", 
    bgColor: "bg-blue-50",
    hoverBg: "group-hover:bg-blue-600",
    iconColor: "text-blue-600",
    hoverIcon: "group-hover:text-white"
  },
  { 
    name: "Email", 
    icon: MdEmail, 
    link: "mailto:wahyusugiarto@example.com", 
    bgColor: "bg-red-50",
    hoverBg: "group-hover:bg-red-600",
    iconColor: "text-red-600",
    hoverIcon: "group-hover:text-white"
  },
  { 
    name: "WhatsApp", 
    icon: FaWhatsapp, 
    link: "https://wa.me/6281234567890", 
    bgColor: "bg-green-50",
    hoverBg: "group-hover:bg-green-600",
    iconColor: "text-green-600",
    hoverIcon: "group-hover:text-white"
  },
  { 
    name: "Telegram", 
    icon: RiTelegramFill, 
    link: "https://t.me/wahyuwayaw", 
    bgColor: "bg-sky-50",
    hoverBg: "group-hover:bg-sky-500",
    iconColor: "text-sky-500",
    hoverIcon: "group-hover:text-white"
  },
];

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
      <ScrollReveal className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3 dark:text-white">
          <span className="bg-yellow-200 dark:bg-yellow-900/50 text-black dark:text-white px-3 py-1 text-xl transform -rotate-2 rounded border-2 border-black dark:border-white">03.</span>
          {t.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: "easeOut" 
              }}
              whileHover={{ y: -8, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${social.bgColor} dark:bg-slate-800 ${social.hoverBg} border-2 border-black dark:border-white rounded-xl p-6 neo-shadow flex flex-col items-center gap-3 transition-all duration-300 group`}
            >
              <Icon className={`text-4xl ${social.iconColor} dark:text-white ${social.hoverIcon} transition-colors duration-300`} />
              <span className="font-bold text-sm text-gray-800 dark:text-gray-200 group-hover:text-white transition-colors">
                {social.name}
              </span>
            </motion.a>
          );
        })}
      </div>

      <ScrollReveal 
        delay={0.3}
        className="mt-12 text-center"
      >
        <div className="bg-gradient-to-r from-emerald-100 to-yellow-100 dark:from-emerald-900/30 dark:to-yellow-900/30 border-2 border-black dark:border-white rounded-2xl p-8 neo-shadow">
          <p className="text-lg font-medium text-gray-800 dark:text-white mb-2">
            {t.availability}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {t.response}
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}