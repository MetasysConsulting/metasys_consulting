import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { SmoothScrolling } from "@/components/SmoothScrolling";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Metasys Consulting - Strategic Business Solutions",
  description: "Transform your business with expert consulting services. We deliver strategic solutions that drive growth, optimize operations, and accelerate success.",
  keywords: "business consulting, strategy, operations, digital transformation, management consulting",
  authors: [{ name: "Metasys Consulting" }],
  openGraph: {
    title: "Metasys Consulting - Strategic Business Solutions",
    description: "Transform your business with expert consulting services.",
    type: "website",
    url: "https://metasysconsulting.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metasys Consulting - Strategic Business Solutions",
    description: "Transform your business with expert consulting services.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-inter antialiased bg-black text-white overflow-x-hidden">
        <SmoothScrolling>
        {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
