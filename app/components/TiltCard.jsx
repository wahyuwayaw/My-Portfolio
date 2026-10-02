"use client";
import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

const ROTATION_RANGE = 6;

export default function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const boundsRef = useRef(null);
  const canTiltRef = useRef(false);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 180, damping: 24, mass: 0.35 });
  const ySpring = useSpring(y, { stiffness: 180, damping: 24, mass: 0.35 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseEnter = () => {
    canTiltRef.current = Boolean(
      ref.current &&
      !reduceMotion &&
      !window.matchMedia("(pointer: coarse)").matches,
    );
    boundsRef.current = canTiltRef.current
      ? ref.current.getBoundingClientRect()
      : null;
  };

  const handleMouseMove = (e) => {
    const rect = boundsRef.current;
    if (!canTiltRef.current || !rect || !rect.width || !rect.height) return;

    const relativeX = (e.clientX - rect.left) / rect.width;
    const relativeY = (e.clientY - rect.top) / rect.height;
    const rX = (0.5 - relativeY) * ROTATION_RANGE;
    const rY = (relativeX - 0.5) * ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    canTiltRef.current = false;
    boundsRef.current = null;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onFocus={() => {
        canTiltRef.current = false;
        boundsRef.current = null;
        x.set(0);
        y.set(0);
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 900,
        transform,
        willChange: "transform",
      }}
      className={className}
    >
      <div
        style={{
          transform: "translateZ(18px)",
          transformStyle: "preserve-3d",
        }}
        className="h-full"
      >
        {children}
      </div>
    </motion.div>
  );
}
