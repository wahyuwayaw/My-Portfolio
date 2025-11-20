"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectClient({ project }) {
  return (
    <div className="min-h-screen bg-emerald-50">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-bold mb-8 group">
            ← <span className="group-hover:underline">Kembali ke Home</span>
          </Link>

          <div className="bg-white border-2 border-black rounded-2xl p-8 neo-shadow mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-6xl">{project.emoji}</div>
              <div className="flex-1">
                <h1 className="text-4xl font-black mb-3 text-gray-900">{project.title}</h1>
                <p className="text-xl text-gray-700 mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-emerald-100 border border-black px-3 py-1 text-sm font-bold rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <a
                href={project.github}
                className="flex-1 bg-black text-white font-bold py-3 px-6 rounded-lg border-2 border-black hover:bg-white hover:text-black transition-all text-center"
              >
                GitHub →
              </a>
              <a
                href={project.demo}
                className="flex-1 bg-emerald-400 text-black font-bold py-3 px-6 rounded-lg border-2 border-black hover:bg-emerald-500 transition-all text-center"
              >
                Live Demo →
              </a>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-yellow-200 px-2 py-1 text-lg border-2 border-black rounded">📖</span>
                Deskripsi Lengkap
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">{project.longDescription}</p>

              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-emerald-200 px-2 py-1 text-lg border-2 border-black rounded">✨</span>
                Fitur Utama
              </h2>
              <ul className="space-y-2 mb-6">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-blue-200 px-2 py-1 text-lg border-2 border-black rounded">🛠️</span>
                Tech Stack
              </h2>
              <div className="flex gap-2 flex-wrap mb-6">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="bg-gray-100 border-2 border-black px-3 py-1 text-sm font-medium rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="bg-yellow-200 px-3 py-2 border-2 border-black rounded">📸</span>
              Screenshots
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {project.screenshots.map((screenshot, i) => (
                <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border-2 border-black rounded-xl overflow-hidden neo-shadow"
              >
                <img
                  src={screenshot}
                  alt={`Screenshot ${i + 1}`}
                  className="w-full h-96 object-cover"
                />
              </motion.div>

              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-100 to-yellow-100 border-2 border-black rounded-2xl p-8 neo-shadow text-center">
            <h3 className="text-2xl font-bold mb-3">Tertarik dengan project ini?</h3>
            <p className="text-gray-700 mb-6">Hubungi saya untuk diskusi lebih lanjut atau project serupa!</p>
            <Link
              href="/#contact"
              className="inline-block bg-black text-white font-bold py-3 px-8 rounded-lg border-2 border-black hover:bg-white hover:text-black transition-all"
            >
              Hubungi Saya →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
