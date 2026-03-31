import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "cesarevc | Software Developer",
  description:
    "Portfolio profesional de cesarevc — Desarrollador Full Stack especializado en React, Node.js, Java y más.",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
