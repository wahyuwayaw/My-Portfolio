"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function SkateboardLoader() {
  useEffect(() => {
    console.log("🛹 Skateboard Loader MOUNTED!");
    return () => console.log("🛹 Skateboard Loader UNMOUNTED!");
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-emerald-50 dark:bg-slate-900 pointer-events-auto"
      />

      {/* Skateboarder Animation */}
      <motion.div
        initial={{ x: "-120vw" }}
        animate={{ x: "120vw" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="relative z-10 w-64 h-64"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Speed Lines */}
          <motion.g
            animate={{ x: [-10, 0, -10], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.2, repeat: Infinity }}
          >
            <path d="M20 100H60" stroke="#10b981" strokeWidth="4" strokeLinecap="round" />
            <path d="M10 120H40" stroke="#10b981" strokeWidth="4" strokeLinecap="round" />
            <path d="M30 80H70" stroke="#10b981" strokeWidth="4" strokeLinecap="round" />
          </motion.g>

          {/* Character */}
          <g transform="translate(50, 50)">
            {/* Head */}
            <circle cx="50" cy="30" r="15" fill="#fbbf24" />
            {/* Cap */}
            <path d="M35 25H65L60 15H40L35 25Z" fill="#ef4444" />
            <path d="M65 25H75" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />

            {/* Body */}
            <rect x="35" y="45" width="30" height="40" rx="5" fill="#10b981" />
            
            {/* Arms */}
            <path d="M35 50L15 70" stroke="#fbbf24" strokeWidth="8" strokeLinecap="round" />
            <path d="M65 50L85 40" stroke="#fbbf24" strokeWidth="8" strokeLinecap="round" />

            {/* Legs */}
            <path d="M40 85L30 110" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
            <path d="M60 85L70 105" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />

            {/* Skateboard */}
            <rect x="20" y="115" width="80" height="10" rx="5" fill="#f59e0b" />
            {/* Wheels */}
            <circle cx="35" cy="130" r="6" fill="#1e293b" />
            <circle cx="85" cy="130" r="6" fill="#1e293b" />
            <circle cx="35" cy="130" r="2" fill="#94a3b8" />
            <circle cx="85" cy="130" r="2" fill="#94a3b8" />
          </g>
        </svg>
      </motion.div>

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-20 font-bold text-xl text-emerald-600 dark:text-emerald-400 font-heading"
      >
        Loading...
      </motion.div>
    </div>
  );
}
