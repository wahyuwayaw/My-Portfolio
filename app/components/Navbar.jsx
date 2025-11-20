"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar({ onLinkClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (target) => {
    onLinkClick?.(target);
    setIsOpen(false); // Close menu on link click
  };

  const menuLinks = (
    <>
      <a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('#about'); }} className="hover:text-emerald-600 font-medium transition-colors">Tentang</a>
      <a href="#skills" onClick={(e) => { e.preventDefault(); handleLinkClick('#skills'); }} className="hover:text-emerald-600 font-medium transition-colors">Keahlian</a>
      <a href="#projects" onClick={(e) => { e.preventDefault(); handleLinkClick('#projects'); }} className="hover:text-emerald-600 font-medium transition-colors">Proyek</a>
      <a href="#contact" onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }} className="hover:text-emerald-600 font-medium transition-colors">Kontak</a>
    </>
  );

  return (
    <nav className="fixed w-full z-50 top-0 px-6 py-4 pointer-events-none">
      <div className="max-w-5xl mx-auto flex justify-between items-center pointer-events-auto">
        
        {/* Hamburger Button (Mobile Only) */}
        <button 
          className="md:hidden order-1 z-50 text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Brand/Logo */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1 bg-white border-2 border-black px-4 py-2 font-bold text-xl neo-shadow transform -rotate-2"
        >
          Wahyu Sugiarto<span className="text-emerald-600">.</span>
        </motion.div>
        
        {/* Desktop Menu */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex order-2 gap-4 bg-white border-2 border-black px-6 py-2 rounded-full neo-shadow"
        >
          {menuLinks}
        </motion.div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4 bg-white border-2 border-black rounded-2xl neo-shadow p-6 flex flex-col gap-5 pointer-events-auto"
        >
          {menuLinks}
        </motion.div>
      )}
    </nav>
  );
}