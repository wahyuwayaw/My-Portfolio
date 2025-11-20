import { notFound } from "next/navigation";
import ProjectClient from "./ProjectClient";

export async function generateStaticParams() {
  // Ambil semua kunci slug dari objek projectsData
  const projectSlugs = Object.keys(projectsData);

  // Map setiap slug menjadi format yang diharapkan Next.js: { slug: string }
  return projectSlugs.map((slug) => ({
    slug: slug,
  }));
}
const projectsData = {
  "absensi-face-api": {
    title: "Sistem Absensi & Penggajian",
    description: "Aplikasi web untuk manajemen karyawan dengan fitur pengenalan wajah dan lokasi GPS.",
    longDescription: "Sistem absensi modern yang memanfaatkan teknologi Face Recognition API untuk verifikasi kehadiran karyawan. Dilengkapi dengan fitur Geolocation untuk memastikan karyawan berada di lokasi yang tepat saat melakukan absensi. Sistem ini juga terintegrasi dengan modul penggajian otomatis berdasarkan data kehadiran.",
    tags: ["Laravel", "Face API", "GPS", "MySQL"],
    emoji: "📷",
    features: [
      "Face Recognition untuk verifikasi identitas",
      "GPS Location tracking untuk validasi lokasi",
      "Dashboard admin untuk monitoring real-time",
      "Sistem penggajian otomatis",
      "Laporan kehadiran lengkap",
      "Perhitungan telat, lembur, dan tidak hadir"
    ],
    techStack: ["Laravel 10", "JavaScript", "Face-API.js", "Bootstrap", "MySQL", "Geolocation API"],
    screenshots: [
      "/projects/absen123.png",
      
    ],
    github: "https://github.com/wahyuwayaw/Absensi-GPS",
    demo: "https://github.com/wahyuwayaw/Absensi-GPS"
  },
  "pdf-converter": {
    title: "PDF Converter Tools",
    description: "Aplikasi Python untuk konversi berbagai format file ke PDF dengan antarmuka GUI yang user-friendly.",
    longDescription: "Aplikasi desktop yang memungkinkan pengguna untuk mengkonversi berbagai format file (Word, Excel, PowerPoint, gambar) menjadi PDF dengan mudah. Dibangun menggunakan Python dengan antarmuka GUI yang intuitif menggunakan Tkinter.",
    tags: ["Python", "Tkinter", "PDF"],
    emoji: "📄",
    features: [
      "Konversi Word, Excel, PowerPoint ke PDF",
      "Batch conversion untuk multiple files",
      "Merge multiple PDFs menjadi satu",
      "Compress PDF untuk ukuran lebih kecil",
      "Extract images dari PDF",
      "Password protection untuk PDF"
    ],
    techStack: ["Python 3.10", "Tkinter", "PyPDF2", "Pillow", "python-docx", "openpyxl"],
    screenshots: [
      "/projects/pdf1.png",
      
    ],
    github: "hhttps://github.com/wahyuwayaw/PDF-KONVERTER",
    demo: "https://github.com/wahyuwayaw/PDF-KONVERTER"
  },
  "company-profile": {
    title: "Company Profile Website",
    description: "Tugas PKM (Pengabdian Kepada Masyarakat) Pembuatan Website profil perusahaan modern dengan desain responsif dan animasi menarik menggunakan React.",
    longDescription: "Website company profile yang elegan dan modern, dibangun dengan React dan Tailwind CSS. Menampilkan informasi perusahaan, layanan, portfolio, dan tim dengan desain yang responsif di semua perangkat. Dilengkapi dengan animasi smooth menggunakan Framer Motion.",
    tags: ["React", "Tailwind", "Framer Motion"],
    emoji: "🏢",
    features: [
      "Desain modern dan responsif",
      "Animasi smooth dengan Framer Motion",
      "Section About, Services, Portfolio",
      "Contact form terintegrasi",
      "SEO optimized",
      "Fast loading performance"
    ],
    techStack: ["React 18", "Next.js 14", "Tailwind CSS", "Framer Motion", "React Icons"],
    screenshots: [
      "/projects/pt1.png",
  
    ],
    github: "https://github.com/wahyuwayaw/Project-PKM",
    demo: "https://github.com/wahyuwayaw/Project-PKM"
  }
};

export default function ProjectDetail({ params }) {
  const project = projectsData[params.slug];

  if (!project) {
    notFound();
  }

  return <ProjectClient project={project} />;
}