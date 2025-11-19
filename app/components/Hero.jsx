"use client";
import { motion } from "framer-motion";

export default function Hero({ onNavClick }) {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-10 relative overflow-hidden">
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.6, 0.5]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-64 h-64 bg-yellow-200 rounded-full blur-3xl -z-10"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-10 w-64 h-64 bg-emerald-200 rounded-full blur-3xl -z-10"
      />

      <div className="text-center max-w-3xl z-10">
        <motion.span 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-block bg-yellow-100 border-2 border-black px-4 py-1 rounded-full font-bold text-sm mb-6 neo-shadow"
        >
          👋 Halo Semua, Saya
        </motion.span>
        
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black mb-4 leading-tight text-gray-900"
        >
          WAHYU <br /> 
          <motion.span 
            initial={{ rotate: -5, opacity: 0 }}
            animate={{ rotate: -1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-emerald-600 bg-white px-2 border-2 border-black transform inline-block"
          >
            SUGIARTO
          </motion.span>
        </motion.h1>
        
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-2xl font-medium text-gray-700 mb-8 font-heading"
        >
          AI Automation Developer <span className="text-emerald-500">|</span> Web Developer <span className="text-emerald-500">|</span> IT Support
        </motion.h2>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-600 max-w-xl mx-auto mb-10 text-lg leading-relaxed border-l-4 border-black pl-4 bg-white/50 py-2"
        >
          Saya Wahyu Sugiarto, seorang mahasiswa Teknik Informatika UNPAM yang memiliki ketertarikan besar pada AI Automation, Web Development, Networking, dan IT Support.
        </motion.p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <motion.a 
            whileHover={{ y: -3, boxShadow: "7px 7px 0px 0px #000" }}
            whileTap={{ scale: 0.98 }}
            href="#projects" 
            onClick={(e) => { 
              e.preventDefault(); 
              const element = document.querySelector('#projects');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-emerald-400 border-2 border-black text-black font-bold py-3 px-8 rounded-lg neo-shadow flex items-center justify-center gap-2 transition-all"
          >
            🚀 Lihat Proyek
          </motion.a>
          <motion.a 
            whileHover={{ y: -3, boxShadow: "7px 7px 0px 0px #000" }}
            whileTap={{ scale: 0.98 }}
            href="/kursor/cv.pdf"
            download="CV_Wahyu_Sugiarto.pdf"
            className="bg-yellow-100 border-2 border-black text-black font-bold py-3 px-8 rounded-lg neo-shadow flex items-center justify-center gap-2 transition-all"
          >
            📄 Unduh CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}