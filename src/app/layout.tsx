import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScrolling } from "@/components/SmoothScrolling";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Metasys Consulting — Engineering, AI & Embedded Systems",
  description:
    "Technical agency for startups and enterprises. Full-stack development, AI integration, data science, and embedded systems — from MVP to production.",
  keywords:
    "full-stack development, AI integration, LLM, RAG, data science, embedded systems, ESP32, firmware, Upwork agency",
  authors: [{ name: "Metasys Consulting" }],
  openGraph: {
    title: "Metasys Consulting — Engineering, AI & Embedded Systems",
    description:
      "Strategy, engineering, and AI — from idea to deployment.",
    type: "website",
    url: "https://metasysconsulting.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metasys Consulting — Engineering, AI & Embedded Systems",
    description:
      "Strategy, engineering, and AI — from idea to deployment.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased bg-[#0a0a0a] text-white overflow-x-hidden">
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
