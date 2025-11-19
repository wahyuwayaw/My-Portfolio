"use client";
import { motion } from "framer-motion";

export default function Navbar({ onLinkClick }) {
  return (
    <nav className="fixed w-full z-50 top-0 px-6 py-4 pointer-events-none">
      <div className="max-w-5xl mx-auto flex justify-between items-center pointer-events-auto">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white border-2 border-black px-4 py-2 font-bold text-xl neo-shadow transform -rotate-2"
        >
          Wahyu Sugiarto<span className="text-emerald-600">.</span>
        </motion.div>
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex gap-4 bg-white border-2 border-black px-6 py-2 rounded-full neo-shadow"
        >
          <a href="#about" onClick={(e) => { e.preventDefault(); onLinkClick?.('#about'); }} className="hover:text-emerald-600 font-medium transition-colors">Tentang</a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); onLinkClick?.('#skills'); }} className="hover:text-emerald-600 font-medium transition-colors">Keahlian</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); onLinkClick?.('#projects'); }} className="hover:text-emerald-600 font-medium transition-colors">Proyek</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); onLinkClick?.('#contact'); }} className="hover:text-emerald-600 font-medium transition-colors">Kontak</a>
        </motion.div>
      </div>
    </nav>
  );
}