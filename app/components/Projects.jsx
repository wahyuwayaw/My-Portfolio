"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: "absensi-face-api",
      title: "Sistem Absensi & Penggajian",
      description:
        "Aplikasi web untuk manajemen karyawan dengan fitur pengenalan wajah dan lokasi GPS.",
      tags: ["Laravel", "Face API"],
      tagColor: "emerald",
      image: "/projects/absen.png",
    },
    {
      id: "pdf-converter",
      title: "PDF Converter Tools",
      description:
        "Aplikasi Python untuk konversi berbagai format file ke PDF dengan antarmuka GUI yang user-friendly.",
      tags: ["Python", "Tkinter"],
      tagColor: "yellow",
      image: "/projects/pdf-1.png",
    },
    {
      id: "company-profile",
      title: "Company Profile Website",
      description:
        "Tugas PKM (Pengabdian Kepada Masyarakat) Pembuatan Website profil perusahaan modern dengan desain responsif dan animasi menarik menggunakan React.",
      tags: ["React", "Tailwind"],
      tagColor: "blue",
      image: "/projects/pt.png",
    },
  ];

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-10 flex items-center gap-3"
      >
        <span className="bg-emerald-500 text-white px-3 py-1 text-xl transform rotate-2 rounded border-2 border-black">
          02.
        </span>
        Project
      </motion.h3>

      {/* GRID PORTRAIT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
            className="bg-white border-2 border-black rounded-2xl overflow-hidden neo-shadow flex flex-col max-w-sm mx-auto"
          >
            {/* IMAGE PORTRAIT */}
            <div className="relative w-full h-64 border-b-2 border-black overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-all duration-300"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex gap-2 mb-3 flex-wrap">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`bg-${project.tagColor}-100 border border-black px-2 py-0.5 text-xs font-bold rounded-md`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h4 className="text-lg font-bold mb-2 group-hover:text-emerald-600 transition-colors">
                {project.title}
              </h4>

              <p className="text-gray-600 text-sm mb-4 flex-1 leading-relaxed">
                {project.description}
              </p>

              <Link
                href={`/projects/${project.id}`}
                className="text-center w-full bg-black text-white font-bold py-2 px-4 rounded border-2 border-black hover:bg-white hover:text-black transition-all duration-300"
              >
                Detail Project →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
