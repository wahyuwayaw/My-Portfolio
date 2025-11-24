"use client";
import { createContext, useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import SkateboardLoader from "./SkateboardLoader";

const TransitionContext = createContext();

export function TransitionProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const startTransition = (callback) => {
    console.log("🚀 startTransition called!");
    setIsLoading(true);
    console.log("✅ isLoading set to TRUE");
    // Wait for animation (e.g., 1.5s) before navigating
    setTimeout(() => {
      console.log("⏰ Executing callback after 1.5s");
      callback();
      // Keep loader for a bit after navigation starts to ensure smooth exit
      setTimeout(() => {
        console.log("❌ isLoading set to FALSE");
        setIsLoading(false);
      }, 500);
    }, 1500);
  };

  return (
    <TransitionContext.Provider value={{ isLoading, startTransition }}>
      {children}
      <AnimatePresence mode="wait">
        {isLoading && <SkateboardLoader key="loader" />}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  return useContext(TransitionContext);
}
