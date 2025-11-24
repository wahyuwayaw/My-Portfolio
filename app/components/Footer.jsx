"use client";
import { useLanguage } from "./LanguageProvider";
import { translations } from "../data/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-black text-white py-8 text-center mt-20">
      <p className="font-medium">
        {t.text}
      </p>
    </footer>
  );
}