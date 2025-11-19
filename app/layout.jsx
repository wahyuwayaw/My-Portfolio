import "./globals.css";

export const metadata = {
  title: "Portofolio Wahyu Sugiarto",
  description: "AI Automation Developer | IT Support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-emerald-50 text-gray-900 selection:bg-yellow-200 selection:text-black">
        {children}
      </body>
    </html>
  );
}
