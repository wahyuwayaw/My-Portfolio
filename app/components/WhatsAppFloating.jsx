"use client";

import { FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function WhatsAppFloating() {
  return (
    <motion.a
      href="https://wa.me/62895321834792"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 bg-whatsapp-button-green text-white p-4 rounded-full shadow-lg z-50 cursor-click"
      aria-label="Hubungi via WhatsApp"
    >
      <FaWhatsapp size={32} />
    </motion.a>
  );
}
