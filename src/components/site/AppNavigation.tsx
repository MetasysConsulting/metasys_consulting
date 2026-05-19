"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { markSkipHomeIntro } from "@/lib/home-intro";

type AppNavigationProps = {
  variant?: "hero" | "static";
};

const navShellStyle: CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 1000,
  padding: "20px 40px",
  background: "rgba(0, 20, 40, 0.1)",
  backdropFilter: "blur(20px)",
  borderBottom: "1px solid rgba(200, 190, 170, 0.2)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
};

const navItemStyle: CSSProperties = {
  fontFamily: "var(--font-body), system-ui, sans-serif",
  fontSize: "16px",
  fontWeight: "500",
  color: "rgba(255, 255, 255, 0.9)",
  cursor: "pointer",
  padding: "10px 20px",
  borderRadius: "8px",
  border: "1px solid transparent",
  transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  position: "relative",
  overflow: "hidden",
};

const logoStyle: CSSProperties = {
  fontFamily: "var(--font-display), system-ui, sans-serif",
  fontSize: "24px",
  fontWeight: "800",
  letterSpacing: "-0.02em",
  background: "linear-gradient(90deg, #2563eb 0%, #e89b2b 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

function hoverNavItem(e: MouseEvent<HTMLElement>, enter: boolean) {
  gsap.to(e.currentTarget, {
    scale: enter ? 1.05 : 1,
    backgroundColor: enter ? "rgba(200, 190, 170, 0.1)" : "transparent",
    borderColor: enter ? "rgba(200, 190, 170, 0.3)" : "transparent",
    color: enter ? "#d4cfc4" : "rgba(255, 255, 255, 0.9)",
    duration: 0.3,
    ease: "power2.out",
  });
}

function hoverCta(e: MouseEvent<HTMLElement>, enter: boolean) {
  gsap.to(e.currentTarget, {
    scale: enter ? 1.05 : 1,
    boxShadow: enter
      ? "0 6px 28px rgba(37, 99, 235, 0.5)"
      : "0 4px 20px rgba(37, 99, 235, 0.35)",
    duration: 0.3,
    ease: "power2.out",
  });
}

function NavItem({ href, children }: { href: string; children: ReactNode }) {
  const goesHome = href === "/" || href.startsWith("/#");

  return (
    <Link
      href={href}
      style={{ textDecoration: "none" }}
      onClick={goesHome ? markSkipHomeIntro : undefined}
    >
      <div
        style={navItemStyle}
        onMouseEnter={(e) => hoverNavItem(e, true)}
        onMouseLeave={(e) => hoverNavItem(e, false)}
      >
        {children}
      </div>
    </Link>
  );
}

export function AppNavigation({ variant = "static" }: AppNavigationProps) {
  const opacity = variant === "static" ? 1 : 0;

  return (
    <nav style={{ ...navShellStyle, opacity }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }} onClick={markSkipHomeIntro}>
          <div style={logoStyle}>Metasys Consulting</div>
        </Link>

        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          <NavItem href="/case-studies">Case studies</NavItem>
          <NavItem href="/#services">Services</NavItem>
          <NavItem href="/#about">About</NavItem>
          <NavItem href="/#contact">Contact</NavItem>
          <Link href="/#contact" style={{ textDecoration: "none" }} onClick={markSkipHomeIntro}>
            <div
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "16px",
                fontWeight: "600",
                background: "#2563eb",
                padding: "12px 24px",
                borderRadius: "9999px",
                cursor: "pointer",
                border: "none",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(37, 99, 235, 0.35)",
              }}
              onMouseEnter={(e) => hoverCta(e, true)}
              onMouseLeave={(e) => hoverCta(e, false)}
            >
              Get Started
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
