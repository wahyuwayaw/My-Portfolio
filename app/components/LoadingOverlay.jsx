import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingOverlay = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-emerald-50 flex flex-col items-center justify-center default-cursor" // default-cursor agar tidak ikut custom hover
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-16 h-16 border-4 border-black border-t-emerald-500 rounded-full mb-4"
          />
          <h2 className="text-2xl font-bold font-mono animate-pulse">LOADING SYSTEM...</h2>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingOverlay;