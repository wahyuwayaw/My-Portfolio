"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group mx-auto md:mx-0"
        >
          <div className="absolute inset-0 bg-yellow-200 border-2 border-black rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
          <div className="relative bg-white border-2 border-black rounded-2xl overflow-hidden neo-shadow h-80 w-72 flex items-center justify-center">
            <img src="/wahyu.jpeg" alt="Wahyu Sugiarto" className="w-full h-full object-cover" />
          </div>
        </motion.div>
        
        <motion.div
           initial={{ x: 50, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           viewport={{ once: false, amount: 0.3 }}
           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="bg-black text-white px-3 py-1 text-xl transform -rotate-2 rounded">01.</span>
            About me
          </h3>
          
          <div className="bg-white border-2 border-black p-6 rounded-xl neo-shadow">
            <p className="mb-4 text-gray-700">
              Perkenalkan, saya <strong className="bg-yellow-200 px-1 border border-black">Wahyu Sugiarto</strong>, seorang mahasiswa aktif Semester 5 Teknik Informatika yang antusias dengan dunia teknologi, khususnya web development, automasi, dan IT support.
            </p>
            <p className="mb-4 text-gray-700">
              Saya terbiasa bekerja menggunakan Linux/WSL, membangun aplikasi sederhana, hingga membuat bot otomatis untuk menyelesaikan berbagai task seperti testnet, scraping, dan repetitive job lainnya. Selain itu, saya juga berpengalaman dalam instalasi jaringan LAN, troubleshooting perangkat, dan konfigurasi komputer/laptop.
            </p>
            <p className="text-gray-700">
              Saat ini, saya terus mengembangkan kemampuan di bidang Fullstack Web, Automation, dan DevOps kecil, sambil membangun berbagai proyek pribadi.
            </p>
            
            <div className="mt-6 bg-gray-900 rounded-lg p-4 border-2 border-black text-sm font-mono text-green-400 shadow-lg">
              <p>$ current_status: "Learning & Building"</p>
              <p>$ location: "South Depok, ID"</p>
              <p>$ interests: ["AI", "Automation", "Web"]</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}