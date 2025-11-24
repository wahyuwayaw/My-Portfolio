import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CursorTrail from "./components/CursorTrail";
import SmoothScroll from "./components/SmoothScroll";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./components/LanguageProvider";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

export const metadata = {
  title: "Wahyu Sugiarto | Portfolio",
  description: "Portfolio of Wahyu Sugiarto - AI Automation & Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${spaceGrotesk.variable} bg-emerald-50 dark:bg-slate-900 transition-colors duration-300`}>
        <ThemeProvider>
          <LanguageProvider>
            <SmoothScroll />
            <CursorTrail />
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
