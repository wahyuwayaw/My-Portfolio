import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import ReadingProgress from "./components/ReadingProgress";
import GridBackground from "./components/GridBackground";
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
      <body className={`${inter.className} ${spaceGrotesk.variable} transition-colors duration-300`}>
        <ThemeProvider>
          <LanguageProvider>
            <GridBackground />
            <SmoothScroll />
            <ReadingProgress />
            <Navbar />
            <main className="relative z-10 min-h-screen pt-16">
              {children}
            </main>
            <div className="relative z-10"><Footer /></div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
