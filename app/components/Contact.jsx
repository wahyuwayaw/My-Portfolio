"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiTelegramFill } from "react-icons/ri";

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
    link: "https://linkedin.com/in/wahyu-sugiarto-8426b5376", 
    bgColor: "bg-blue-50",
    hoverBg: "group-hover:bg-blue-600",
    iconColor: "text-blue-600",
    hoverIcon: "group-hover:text-white"
  },
  { 
    name: "Gmail", 
    icon: MdEmail, 
    link: "mailto:wayawairdrop@gmail.com", 
    bgColor: "bg-red-50",
    hoverBg: "group-hover:bg-red-500",
    iconColor: "text-red-600",
    hoverIcon: "group-hover:text-white"
  },
  { 
    name: "WhatsApp", 
    icon: FaWhatsapp, 
    link: "https://wa.me/62895321834792", 
    bgColor: "bg-green-50",
    hoverBg: "group-hover:bg-green-500",
    iconColor: "text-green-600",
    hoverIcon: "group-hover:text-white"
  },
  { 
    name: "Telegram", 
    icon: RiTelegramFill, 
    link: "https://t.me/Wayaw214", 
    bgColor: "bg-sky-50",
    hoverBg: "group-hover:bg-sky-400",
    iconColor: "text-sky-600",
    hoverIcon: "group-hover:text-white"
  },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          <span className="bg-yellow-200 text-black px-3 py-1 text-xl transform -rotate-2 rounded border-2 border-black">03.</span>
          Contact me
        </h3>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Tertarik untuk berkolaborasi, berdiskusi tentang project, atau sekadar menyapa? Jangan ragu untuk menghubungi!
        </p>
      </motion.div>

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
              className={`${social.bgColor} ${social.hoverBg} border-2 border-black rounded-xl p-6 neo-shadow flex flex-col items-center gap-3 transition-all duration-300 group`}
            >
              <Icon className={`text-4xl ${social.iconColor} ${social.hoverIcon} transition-colors duration-300`} />
              <span className="font-bold text-sm text-gray-800 group-hover:text-white transition-colors">
                {social.name}
              </span>
            </motion.a>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="mt-12 text-center"
      >
        <div className="bg-gradient-to-r from-emerald-100 to-yellow-100 border-2 border-black rounded-2xl p-8 neo-shadow">
          <p className="text-lg font-medium text-gray-800 mb-2">
            💼 Tersedia untuk project freelance dan full-time opportunities
          </p>
          <p className="text-gray-600 text-sm">
            Response time: Usually within 24 hours
          </p>
        </div>
      </motion.div>
    </section>
  );
}