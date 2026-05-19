"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { markSkipHomeIntro } from "@/lib/home-intro";
import { SiteLogo } from "@/components/site/SiteLogo";

type AppNavigationProps = {
  variant?: "hero" | "static";
};

const navShellStyle: CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 1000,
  padding: "18px 48px",
  background: "rgba(6, 9, 18, 0.5)",
  backdropFilter: "blur(20px) saturate(1.4)",
  WebkitBackdropFilter: "blur(20px) saturate(1.4)",
  borderBottom: "1px solid rgba(110, 184, 232, 0.15)",
  boxShadow: "0 1px 40px rgba(0, 0, 0, 0.45)",
};

const ff = "var(--font-body), system-ui, sans-serif";

const navItemStyle: CSSProperties = {
  fontFamily: ff,
  fontSize: "15px",
  fontWeight: "500",
  color: "rgba(244, 241, 236, 0.82)",
  cursor: "pointer",
  padding: "9px 18px",
  borderRadius: "8px",
  border: "1px solid transparent",
  letterSpacing: "0.01em",
  position: "relative",
};

function hoverNavItem(e: MouseEvent<HTMLElement>, enter: boolean) {
  gsap.to(e.currentTarget, {
    scale: enter ? 1.04 : 1,
    backgroundColor: enter ? "rgba(110,184,232,0.09)" : "transparent",
    borderColor: enter ? "rgba(110,184,232,0.25)" : "transparent",
    color: enter ? "#b4daf4" : "rgba(244,241,236,0.82)",
    duration: 0.25,
    ease: "power2.out",
  });
}

function hoverCta(e: MouseEvent<HTMLElement>, enter: boolean) {
  gsap.to(e.currentTarget, {
    scale: enter ? 1.05 : 1,
    boxShadow: enter
      ? "0 6px 28px rgba(110,184,232,0.55)"
      : "0 4px 18px rgba(110,184,232,0.35)",
    duration: 0.25,
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
        className="nav-link-wrap"
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
        <SiteLogo />

        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <NavItem href="/case-studies">Case studies</NavItem>
          <NavItem href="/#services">Services</NavItem>
          <NavItem href="/#about">About</NavItem>
          <NavItem href="/#contact">Contact</NavItem>

          <Link
            href="/#contact"
            style={{ textDecoration: "none", marginLeft: "8px" }}
            onClick={markSkipHomeIntro}
          >
            <div
              style={{
                fontFamily: ff,
                fontSize: "15px",
                fontWeight: "600",
                color: "#0a0a0a",
                background: "linear-gradient(135deg, #c5e8fa 0%, #6eb8e8 100%)",
                padding: "10px 22px",
                borderRadius: "10px",
                cursor: "pointer",
                border: "none",
                boxShadow: "0 4px 18px rgba(110,184,232,0.35)",
                letterSpacing: "0.01em",
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
