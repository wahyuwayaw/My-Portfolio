"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Reveal on scroll. Fail-safe: force visible after short timeout so
 * Lenis/IO edge cases never leave the page blank (opacity: 0 forever).
 */
export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, {
    once: true,
    amount: 0.05,
    // generous margin so cards near fold still trigger with smooth-scroll
    margin: "120px 0px 120px 0px",
  });
  const [forceVisible, setForceVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setForceVisible(true), 700);
    return () => clearTimeout(t);
  }, []);

  const show = reduceMotion || isInView || forceVisible;

  const offsetY = direction === "up" ? 28 : direction === "down" ? -28 : 0;
  const offsetX = direction === "left" ? 28 : direction === "right" ? -28 : 0;

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: offsetY, x: offsetX }}
      animate={
        show
          ? { opacity: 1, y: 0, x: 0 }
          : { opacity: 0, y: offsetY, x: offsetX }
      }
      transition={reduceMotion ? { duration: 0 } : {
        duration: 0.65,
        delay: Math.min(delay, 0.25),
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}
