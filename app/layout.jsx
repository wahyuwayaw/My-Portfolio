import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./components/LanguageProvider";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

export const metadata = {
  title: "Wahyu Sugiarto | AI Automation & Web Developer",
  description:
    "Portfolio Wahyu Sugiarto — mahasiswa Teknik Informatika Universitas Pamulang semester 7. AI automation, web development, dan IT Support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${spaceGrotesk.variable} bg-emerald-50 dark:bg-slate-900 transition-colors duration-300`}>
        <ThemeProvider>
          <LanguageProvider>
            <SmoothScroll />
            <Navbar />
            <main className="min-h-screen pt-16">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
