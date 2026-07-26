"use client";
import { motion } from "framer-motion";

// Keep template transition light so first paint never looks blank.
export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0.96, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
