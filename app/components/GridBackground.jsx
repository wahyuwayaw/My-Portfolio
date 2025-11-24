"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function GridBackground() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Use spring for smoother, less jittery movement
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Subtract half the spotlight size (300px) to center it
      mouseX.set(e.clientX - 300);
      mouseY.set(e.clientY - 300);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-20 h-full w-full bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Floating Orbs for Depth */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] -z-10 will-change-transform"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[120px] -z-10 will-change-transform"
      />

      {/* Optimized Mouse Spotlight Effect (Moving Div) */}
      <motion.div
        className="pointer-events-none absolute w-[600px] h-[600px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          x,
          y,
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.15), transparent 70%)",
          willChange: "transform", // Hint to browser for optimization
        }}
      />
      
      {/* Static Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-slate-950 dark:via-transparent dark:to-transparent"></div>
    </div>
  );
}
