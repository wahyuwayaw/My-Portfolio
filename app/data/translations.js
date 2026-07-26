export const translations = {
  id: {
    navbar: {
      about: "Tentang",
      skills: "Keahlian",
      experience: "Pengalaman",
      projects: "Proyek",
      contact: "Kontak",
    },
    hero: {
      greeting: "👋 Halo Semua, Saya",
      role: ["AI Automation & Web Developer", "AI Agent Builder", "IT Support"],
      description: "Saya Wahyu Sugiarto, mahasiswa semester 7 Teknik Informatika di Universitas Pamulang. Fokus saya di AI automation dan web development, dengan bekal IT Support untuk troubleshooting PC/laptop dan perangkat.",
      ctaProject: "🚀 Lihat Proyek",
      ctaCV: "📄 Unduh CV",
    },
    about: {
      title: "Tentang Saya",
      intro: "Perkenalkan, saya",
      name: "Wahyu Sugiarto",
      description1: "mahasiswa semester 7 Teknik Informatika di Universitas Pamulang.",
      description2: "Saya fokus di AI automation dan web development. Dalam kerja sehari-hari, saya terbiasa memanfaatkan AI sebagai asisten kerja — untuk riset, debugging, otomasi, dan mempercepat development — sambil tetap merancang, membangun, dan menguji sistem secara mandiri.",
      description3: "Saya membangun AI agent dan workflow otomasi yang benar-benar dipakai, bukan sekadar eksperimen. Di sisi web, saya terbiasa mengerjakan aplikasi end-to-end, dari frontend hingga integrasi backend/API.",
      description4: "Selain itu, saya juga berpengalaman di bidang IT Support — mulai dari troubleshooting PC/laptop, instalasi dan konfigurasi perangkat, hingga perbaikan dan perawatan hardware untuk memastikan sistem tetap berjalan stabil.",
      status: {
        current: "Belajar & Membangun",
        location: "Depok Selatan, ID",
        interests: ["AI Agents", "Otomasi", "Web", "IT Support"],
      }
    },
    skills: {
      title: "Keahlian & Alat",
    },
    experience: {
      title: "Pengalaman & Aktivitas",
      items: [
        {
          period: "2025 — Sekarang",
          title: "AI Agent & Automation",
          place: "Personal Project",
          description: "Men-setup dan mengoperasikan AI agent seperti Nous Hermes untuk workflow development, membangun pipeline otomatisasi laporan, serta berbagai bot untuk task otomatis (scraping, repetitive job).",
        },
        {
          period: "April 2024 — Agustus 2024",
          title: "Teknisi Lapangan",
          place: "PT Mega Royal IT Comindo",
          description: "Berhasil melakukan instalasi lebih dari 30 titik kabel LAN untuk proyek Indosat di kawasan Monas. Melakukan pengecekan dan maintenance ringan terhadap perangkat jaringan, serta bekerja dalam tim teknis untuk memastikan sistem jaringan berjalan stabil.",
        },
        {
          period: "Juni 2021 — Juni 2022",
          title: "Admin Toko Online",
          place: "Deanz Collection",
          description: "Mengelola pesanan, stok barang, dan layanan pelanggan melalui chat. Membuat laporan keuangan harian hingga bulanan menggunakan Excel dan Google Sheets.",
        },
        {
          period: "Agustus 2023 — Sekarang",
          title: "Mahasiswa Teknik Informatika",
          place: "Universitas Pamulang",
          description: "Saat ini semester 7 — fokus di AI automation dan web development. Aktif membangun proyek berbasis praktik, sistem web, dan otomasi.",
        }
      ],
    },
    projects: {
      title: "Proyek",
      viewProject: "Lihat Proyek",
      detail: "Detail Proyek →",
      showAll: "Lihat Semua Proyek",
      showLess: "Sembunyikan",
      items: [
                                {
          id: "absensi-face-api",
          title: "Sistem Absensi & Penggajian",
          description: "Aplikasi web untuk manajemen karyawan dengan fitur pengenalan wajah dan lokasi GPS.",
          longDescription: "Sistem absensi modern yang memanfaatkan teknologi Face Recognition API untuk verifikasi kehadiran karyawan. Dilengkapi dengan fitur Geolocation untuk memastikan karyawan berada di lokasi yang tepat saat melakukan absensi. Sistem ini juga terintegrasi dengan modul penggajian otomatis berdasarkan data kehadiran.",
          tags: ["Laravel", "Face API", "GPS", "MySQL"],
          tagColor: "emerald",
          image: "/projects/absen.png",
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
          screenshots: ["/projects/absen123.png"],
          github: "https://github.com/wahyuwayaw/Absensi-GPS",
          demo: "https://github.com/wahyuwayaw/Absensi-GPS"
        },
        {
          id: "pdf-converter",
          title: "PDF Converter Tools",
          description: "Aplikasi Python untuk konversi berbagai format file ke PDF dengan antarmuka GUI yang user-friendly.",
          longDescription: "Aplikasi desktop yang memungkinkan pengguna untuk mengkonversi berbagai format file (Word, Excel, PowerPoint, gambar) menjadi PDF dengan mudah. Dibangun menggunakan Python dengan antarmuka GUI yang intuitif menggunakan Tkinter.",
          tags: ["Python", "Tkinter", "PDF"],
          tagColor: "yellow",
          image: "/projects/pdf-1.png",
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
          screenshots: ["/projects/pdf1.png"],
          github: "https://github.com/wahyuwayaw/PDF-KONVERTER",
          demo: "https://github.com/wahyuwayaw/PDF-KONVERTER"
        },
        {
          id: "company-profile",
          title: "Company Profile Website",
          description: "Tugas PKM (Pengabdian Kepada Masyarakat) Pembuatan Website profil perusahaan modern dengan desain responsif dan animasi menarik menggunakan React.",
          longDescription: "Website company profile yang elegan dan modern, dibangun dengan React dan Tailwind CSS. Menampilkan informasi perusahaan, layanan, portfolio, dan tim dengan desain yang responsif di semua perangkat. Dilengkapi dengan animasi smooth menggunakan Framer Motion.",
          tags: ["React", "Tailwind", "Framer Motion"],
          tagColor: "blue",
          image: "/projects/pt.png",
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
          screenshots: ["/projects/pt1.png"],
          github: "https://github.com/wahyuwayaw/Project-PKM",
          demo: "https://github.com/wahyuwayaw/Project-PKM"
        }
      ]
    },
    contact: {
      title: "Hubungi Saya",
      subtitle: "Tertarik untuk berkolaborasi, berdiskusi tentang project, atau sekadar menyapa? Jangan ragu untuk menghubungi!",
      availability: "💼 Tersedia untuk proyek freelance dan peluang full-time",
      response: "Waktu respon: Biasanya dalam 24 jam",
    },
    footer: {
      text: "Wahyu Sugiarto",
    }
  },
  en: {
    navbar: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "👋 Hello Everyone, I am",
      role: ["AI Automation & Web Developer", "AI Agent Builder", "IT Support"],
      description: "I am Wahyu Sugiarto, a 6th-semester Informatics Engineering student at Universitas Pamulang. I focus on AI automation and web development, with IT Support skills for PC/laptop troubleshooting and device setup.",
      ctaProject: "🚀 View Projects",
      ctaCV: "📄 Download CV",
    },
    about: {
      title: "About Me",
      intro: "Let me introduce myself, I am",
      name: "Wahyu Sugiarto",
      description1: "a 6th-semester Informatics Engineering student at Universitas Pamulang.",
      description2: "I focus on AI automation and web development. In day-to-day work, I use AI as a working assistant — for research, debugging, automation, and faster development — while still designing, building, and testing systems myself.",
      description3: "I build AI agents and automation workflows that are actually used, not just experiments. On the web side, I work end-to-end — from frontend to backend/API integration.",
      description4: "I also have IT Support experience — from PC/laptop troubleshooting and device installation/configuration to hardware maintenance to keep systems running stably.",
      status: {
        current: "Learning & Building",
        location: "South Depok, ID",
        interests: ["AI Agents", "Automation", "Web", "IT Support"],
      }
    },
    skills: {
      title: "Skills & Tools",
    },
    experience: {
      title: "Experience & Activities",
      items: [
        {
          period: "2025 — Present",
          title: "AI Agent & Automation",
          place: "Personal Project",
          description: "Setting up and operating AI agents such as Nous Hermes for development workflows, building automated reporting pipelines, and various bots for automated tasks (scraping, repetitive jobs).",
        },
        {
          period: "April 2024 — August 2024",
          title: "Field Technician",
          place: "PT Mega Royal IT Comindo",
          description: "Installed more than 30 LAN cable points for an Indosat project around Monas. Performed basic network device checks and light maintenance, and worked with the technical team to keep the network stable.",
        },
        {
          period: "June 2021 — June 2022",
          title: "Online Store Admin",
          place: "Deanz Collection",
          description: "Managed orders, inventory, and customer service via chat. Created daily to monthly financial reports using Excel and Google Sheets.",
        },
        {
          period: "August 2023 — Present",
          title: "Informatics Engineering Student",
          place: "Universitas Pamulang",
          description: "Currently in 7th semester — focusing on AI automation and web development. Actively building practice-based projects, web systems, and automation.",
        }
      ],
    },
    projects: {
      title: "Projects",
      viewProject: "View Project",
      detail: "Project Detail →",
      showAll: "Show All Projects",
      showLess: "Show Less",
      items: [
                                {
          id: "absensi-face-api",
          title: "Attendance & Payroll System",
          description: "Web application for employee management with face recognition and GPS location features.",
          longDescription: "A modern attendance system utilizing Face Recognition API for employee verification. Equipped with Geolocation to ensure employees are at the correct location when clocking in. This system is also integrated with an automated payroll module based on attendance data.",
          tags: ["Laravel", "Face API", "GPS", "MySQL"],
          tagColor: "emerald",
          image: "/projects/absen.png",
          emoji: "📷",
          features: [
            "Face Recognition for identity verification",
            "GPS Location tracking for location validation",
            "Admin dashboard for real-time monitoring",
            "Automated payroll system",
            "Complete attendance reports",
            "Calculation of lateness, overtime, and absence"
          ],
          techStack: ["Laravel 10", "JavaScript", "Face-API.js", "Bootstrap", "MySQL", "Geolocation API"],
          screenshots: ["/projects/absen123.png"],
          github: "https://github.com/wahyuwayaw/Absensi-GPS",
          demo: "https://github.com/wahyuwayaw/Absensi-GPS"
        },
        {
          id: "pdf-converter",
          title: "PDF Converter Tools",
          description: "Python application for converting various file formats to PDF with a user-friendly GUI.",
          longDescription: "A desktop application allowing users to easily convert various file formats (Word, Excel, PowerPoint, images) into PDF. Built using Python with an intuitive GUI using Tkinter.",
          tags: ["Python", "Tkinter", "PDF"],
          tagColor: "yellow",
          image: "/projects/pdf-1.png",
          emoji: "📄",
          features: [
            "Convert Word, Excel, PowerPoint to PDF",
            "Batch conversion for multiple files",
            "Merge multiple PDFs into one",
            "Compress PDF for smaller size",
            "Extract images from PDF",
            "Password protection for PDF"
          ],
          techStack: ["Python 3.10", "Tkinter", "PyPDF2", "Pillow", "python-docx", "openpyxl"],
          screenshots: ["/projects/pdf1.png"],
          github: "https://github.com/wahyuwayaw/PDF-KONVERTER",
          demo: "https://github.com/wahyuwayaw/PDF-KONVERTER"
        },
        {
          id: "company-profile",
          title: "Company Profile Website",
          description: "Community Service (PKM) Project: Creating a modern company profile website with responsive design and engaging animations using React.",
          longDescription: "An elegant and modern company profile website built with React and Tailwind CSS. Displays company information, services, portfolio, and team with a responsive design across all devices. Features smooth animations using Framer Motion.",
          tags: ["React", "Tailwind", "Framer Motion"],
          tagColor: "blue",
          image: "/projects/pt.png",
          emoji: "🏢",
          features: [
            "Modern and responsive design",
            "Smooth animations with Framer Motion",
            "About, Services, Portfolio sections",
            "Integrated contact form",
            "SEO optimized",
            "Fast loading performance"
          ],
          techStack: ["React 18", "Next.js 14", "Tailwind CSS", "Framer Motion", "React Icons"],
          screenshots: ["/projects/pt1.png"],
          github: "https://github.com/wahyuwayaw/Project-PKM",
          demo: "https://github.com/wahyuwayaw/Project-PKM"
        }
      ]
    },
    contact: {
      title: "Contact Me",
      subtitle: "Interested in collaborating, discussing a project, or just saying hi? Don't hesitate to reach out!",
      availability: "💼 Available for freelance projects and full-time opportunities",
      response: "Response time: Usually within 24 hours",
    },
    footer: {
      text: "Wahyu Sugiarto",
    }
  }
};
