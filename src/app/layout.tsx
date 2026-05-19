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
  title: "Metasys Consulting - Strategic Business Solutions",
  description:
    "Transform your business with expert consulting services. We deliver strategic solutions that drive growth, optimize operations, and accelerate success.",
  keywords:
    "business consulting, strategy, operations, digital transformation, management consulting",
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
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased bg-[var(--surface)] text-[var(--ink)] overflow-x-hidden">
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
