"use client";
import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Smooth scroll via Lenis. Kept lightweight — no transform root that
 * breaks IntersectionObserver / framer-motion useInView.
 */
export default function SmoothScroll() {
  useEffect(() => {
    // Skip on touch-primary / reduced motion
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // don't take over touch scroll
      syncTouch: false,
    });

    let rafId = 0;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
