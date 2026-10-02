"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function ReadingProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-emerald-400 via-teal-400 to-yellow-300 shadow-[0_0_12px_rgba(16,185,129,0.65)]"
      style={{ scaleX }}
    />
  );
}
