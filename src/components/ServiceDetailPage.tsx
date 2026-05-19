"use client";

import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ServicePageContent } from "@/data/services";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ServiceDetailPageProps = {
  content: ServicePageContent;
};

export function ServiceDetailPage({ content }: ServiceDetailPageProps) {
  useEffect(() => {
    gsap.utils.toArray(".scroll-section").forEach((section) => {
      gsap.fromTo(
        section as gsap.TweenTarget,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section as Element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }, []);

  return (
    <div
      style={{ backgroundColor: "#0a0a0a", minHeight: "100vh" }}
    >
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          padding: "20px 40px",
          background: "rgba(0, 20, 40, 0.9)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(140, 200, 235, 0.2)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: "var(--font-display), system-ui, sans-serif",
                fontSize: "1.35rem",
                fontWeight: 600,
                color: "#9ec8e8",
                letterSpacing: "0.06em",
              }}
            >
              METASYS CONSULTING
            </span>
          </Link>
          <Link href="/#services" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "#0a0a0a",
                background: "linear-gradient(135deg, #d0e8f8, #6eaed4)",
                padding: "10px 20px",
                borderRadius: "10px",
              }}
            >
              ← All services
            </span>
          </Link>
        </div>
      </nav>

      <section
        className="scroll-section"
        style={{
          padding: "140px 40px 60px",
          background: "linear-gradient(135deg, #0a0a0a, #101827, #1a1a2e)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "var(--font-display), system-ui, sans-serif",
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 600,
              color: "#9ec8e8",
              marginBottom: "16px",
            }}
          >
            {content.title}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "1.2rem",
              color: "rgba(255, 255, 255, 0.75)",
              marginBottom: "32px",
            }}
          >
            {content.tagline}
          </p>
          <div
            style={{
              background: "rgba(0, 20, 40, 0.4)",
              backdropFilter: "blur(15px)",
              padding: "36px",
              borderRadius: "16px",
              border: "1px solid rgba(140, 200, 235, 0.2)",
              textAlign: "left",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "1.1rem",
                color: "rgba(255, 255, 255, 0.9)",
                lineHeight: 1.7,
                marginBottom: "24px",
              }}
            >
              {content.intro}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {content.highlights.map((item) => (
                <span
                  key={item}
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "0.85rem",
                    padding: "8px 14px",
                    borderRadius: "8px",
                    background: "rgba(140, 200, 235, 0.12)",
                    border: "1px solid rgba(140, 200, 235, 0.25)",
                    color: "#9ec8e8",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="scroll-section"
        style={{ padding: "40px 40px 100px", maxWidth: "1000px", margin: "0 auto" }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display), system-ui, sans-serif",
            fontSize: "2rem",
            color: "#9ec8e8",
            marginBottom: "32px",
            textAlign: "center",
          }}
        >
          What we deliver
        </h2>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "24px" }}
        >
          {content.offerings.map((offering) => (
            <div
              key={offering.title}
              style={{
                background: "rgba(0, 20, 40, 0.35)",
                backdropFilter: "blur(12px)",
                padding: "28px 32px",
                borderRadius: "14px",
                border: "1px solid rgba(140, 200, 235, 0.2)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "#9ec8e8",
                  marginBottom: "10px",
                }}
              >
                {offering.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  color: "rgba(255, 255, 255, 0.8)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {offering.description}
              </p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link href="/#contact" style={{ textDecoration: "none" }}>
            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                padding: "14px 32px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #d0e8f8, #6eaed4)",
                color: "#0a0a0a",
              }}
            >
              Discuss your project
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
