"use client";
import { useEffect, useRef, useState } from "react";

export default function CursorTrail() {
  const [particles, setParticles] = useState([]);
  const particleIdRef = useRef(0);

  useEffect(() => {
    let lastTime = 0;
    const throttleDelay = 30; // Only create particle every 30ms

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < throttleDelay) return;
      
      lastTime = now;

      const newParticle = {
        id: particleIdRef.current++,
        x: e.clientX,
        y: e.clientY,
      };

      setParticles((prev) => [...prev, newParticle]);

      // Remove particle after animation
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 800);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-particle"
          style={{
            left: particle.x - 4,
            top: particle.y - 4,
            animation: "particleFade 0.8s ease-out forwards",
          }}
        />
      ))}
    </div>
  );
}
