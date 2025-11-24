export const translations = {
  id: {
    navbar: {
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      contact: "Kontak",
    },
    hero: {
      greeting: "👋 Halo Semua, Saya",
      role: ["AI Automation Developer", "Web Developer", "IT Support", "Full Stack Developer"],
      description: "Saya Wahyu Sugiarto, seorang mahasiswa Teknik Informatika UNPAM yang memiliki ketertarikan besar pada AI Automation, Web Development, Networking, dan IT Support.",
      ctaProject: "🚀 Lihat Proyek",
      ctaCV: "📄 Unduh CV",
    },
    about: {
      title: "Tentang Saya",
      intro: "Perkenalkan, saya",
      name: "Wahyu Sugiarto",
      description1: "seorang mahasiswa aktif Semester 5 Teknik Informatika yang antusias dengan dunia teknologi, khususnya web development, automasi, dan IT support.",
      description2: "Saya terbiasa bekerja menggunakan Linux/WSL, membangun aplikasi sederhana, hingga membuat bot otomatis untuk menyelesaikan berbagai task seperti testnet, scraping, dan repetitive job lainnya. Selain itu, saya juga berpengalaman dalam instalasi jaringan LAN, troubleshooting perangkat, dan konfigurasi komputer/laptop.",
      description3: "Saat ini, saya terus mengembangkan kemampuan di bidang Fullstack Web, Automation, dan DevOps kecil, sambil membangun berbagai proyek pribadi.",
      status: {
        current: "Belajar & Membangun",
        location: "Depok Selatan, ID",
        interests: ["AI", "Otomasi", "Web"],
      }
    },
    skills: {
      title: "Keahlian & Alat",
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
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "👋 Hello Everyone, I am",
      role: ["AI Automation Developer", "Web Developer", "IT Support", "Full Stack Developer"],
      description: "I am Wahyu Sugiarto, an Informatics Engineering student at UNPAM with a strong interest in AI Automation, Web Development, Networking, and IT Support.",
      ctaProject: "🚀 View Projects",
      ctaCV: "📄 Download CV",
    },
    about: {
      title: "About Me",
      intro: "Let me introduce myself, I am",
      name: "Wahyu Sugiarto",
      description1: "an active 5th-semester Informatics Engineering student enthusiastic about technology, especially web development, automation, and IT support.",
      description2: "I am accustomed to working with Linux/WSL, building simple applications, and creating automated bots to handle various tasks such as testnets, scraping, and other repetitive jobs. Additionally, I have experience in LAN network installation, device troubleshooting, and computer/laptop configuration.",
      description3: "Currently, I am continuously developing my skills in Fullstack Web, Automation, and small-scale DevOps while building various personal projects.",
      status: {
        current: "Learning & Building",
        location: "South Depok, ID",
        interests: ["AI", "Automation", "Web"],
      }
    },
    skills: {
      title: "Skills & Tools",
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
      text: "Made with ❤️ by Wahyu Sugiarto",
    }
  }
};
