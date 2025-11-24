"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { translations } from "../data/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].navbar;

  const handleLinkClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuLinks = (
    <>
      <a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('#about'); }} className="hover:text-emerald-600 dark:text-gray-200 dark:hover:text-emerald-400 font-medium transition-colors cursor-pointer">
        {t.about}
      </a>
      <a href="#skills" onClick={(e) => { e.preventDefault(); handleLinkClick('#skills'); }} className="hover:text-emerald-600 dark:text-gray-200 dark:hover:text-emerald-400 font-medium transition-colors cursor-pointer">
        {t.skills}
      </a>
      <a href="#projects" onClick={(e) => { e.preventDefault(); handleLinkClick('#projects'); }} className="hover:text-emerald-600 dark:text-gray-200 dark:hover:text-emerald-400 font-medium transition-colors cursor-pointer">
        {t.projects}
      </a>
      <a href="#contact" onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }} className="hover:text-emerald-600 dark:text-gray-200 dark:hover:text-emerald-400 font-medium transition-colors cursor-pointer">
        {t.contact}
      </a>
    </>
  );

  return (
    <nav className="fixed w-full z-50 top-0 px-6 py-4 pointer-events-none">
      <div className="max-w-5xl mx-auto flex justify-between items-center pointer-events-auto">
        
        {/* Hamburger Button (Mobile Only) */}
        <button 
          className="md:hidden order-1 z-50 text-black dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Brand/Logo */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1 bg-white dark:bg-slate-800 dark:border-white border-2 border-black px-4 py-2 font-bold text-xl neo-shadow transform -rotate-2 dark:text-white transition-colors duration-300"
        >
          Wahyu Sugiarto<span className="text-emerald-600 dark:text-emerald-400">.</span>
        </motion.div>
        
        {/* Desktop Menu & Toggles */}
        <div className="hidden md:flex order-2 gap-4 items-center">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4 bg-white dark:bg-slate-800 dark:border-white border-2 border-black px-6 py-2 rounded-full neo-shadow transition-colors duration-300"
          >
            {menuLinks}
          </motion.div>

          <motion.div
             initial={{ y: -20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="flex gap-2"
          >
            <button
              onClick={toggleLanguage}
              className="bg-white dark:bg-slate-800 dark:border-white border-2 border-black p-2 rounded-full neo-shadow hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300 font-bold text-sm w-10 h-10 flex items-center justify-center dark:text-white"
            >
              {language === 'id' ? 'ID' : 'EN'}
            </button>

            <button
              onClick={toggleTheme}
              className="bg-white dark:bg-slate-800 dark:border-white border-2 border-black p-2 rounded-full neo-shadow hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300"
            >
              {theme === "dark" ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Toggles */}
        <div className="md:hidden order-3 pointer-events-auto flex gap-2">
           <button
            onClick={toggleLanguage}
            className="bg-white dark:bg-slate-800 dark:border-white border-2 border-black p-2 rounded-full neo-shadow hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300 font-bold text-xs w-9 h-9 flex items-center justify-center dark:text-white"
          >
            {language === 'id' ? 'ID' : 'EN'}
          </button>
           <button
            onClick={toggleTheme}
            className="bg-white dark:bg-slate-800 dark:border-white border-2 border-black p-2 rounded-full neo-shadow hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300"
          >
            {theme === "dark" ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4 bg-white dark:bg-slate-800 dark:border-white border-2 border-black rounded-2xl neo-shadow p-6 flex flex-col gap-5 pointer-events-auto transition-colors duration-300"
        >
          {menuLinks}
        </motion.div>
      )}
    </nav>
  );
}