"use client";

import Link from "next/link";
import { gsap } from "gsap";
import type { CaseStudy } from "@/data/case-studies";

type CaseStudyCardProps = {
  study: CaseStudy;
};

const ff = "var(--font-body), system-ui, sans-serif";
const ffd = "var(--font-display), system-ui, sans-serif";

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  const preview =
    study.challenge[0]?.length > 180
      ? `${study.challenge[0].slice(0, 177)}…`
      : study.challenge[0];

  return (
    <Link href={`/case-studies/${study.slug}`} style={{ textDecoration: "none", display: "flex" }}>
      <div
        className="service-card"
        style={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          background: "rgba(10, 15, 28, 0.65)",
          backdropFilter: "blur(16px) saturate(1.2)",
          WebkitBackdropFilter: "blur(16px) saturate(1.2)",
          padding: "36px 36px 32px",
          borderRadius: "20px",
          border: "1px solid rgba(201, 169, 110, 0.14)",
          boxShadow: "0 8px 36px rgba(0, 0, 0, 0.35)",
          cursor: "pointer",
          transition: "border-color 0.3s ease",
          display: "flex",
          flexDirection: "column",
        }}
        onMouseEnter={(e) => {
          gsap.to(e.currentTarget, {
            y: -8, scale: 1.015,
            boxShadow: "0 24px 50px rgba(201,169,110,0.18)",
            duration: 0.3, ease: "power2.out",
          });
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.35)";
        }}
        onMouseLeave={(e) => {
          gsap.to(e.currentTarget, {
            y: 0, scale: 1,
            boxShadow: "0 8px 36px rgba(0,0,0,0.35)",
            duration: 0.3, ease: "power2.out",
          });
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.14)";
        }}
      >
        {/* top accent line */}
        <div style={{
          position: "absolute", top: 0, left: 0, width: "100%", height: "3px",
          background: "linear-gradient(90deg, #c9a96e 0%, #4f8ef7 60%, transparent 100%)",
          borderRadius: "20px 20px 0 0",
        }} />

        {/* sector tags */}
        {study.sectors && study.sectors.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16, marginTop: 4 }}>
            {study.sectors.slice(0, 3).map((sector) => (
              <span key={sector} className="sector-tag">{sector}</span>
            ))}
          </div>
        )}

        <h3 style={{
          fontFamily: ffd,
          fontSize: "1.22rem",
          fontWeight: "700",
          color: "#e8d9b8",
          marginBottom: "10px",
          letterSpacing: "-0.01em",
          lineHeight: 1.3,
        }}>
          {study.title}
        </h3>

        <p style={{
          fontFamily: ff,
          color: "rgba(201,169,110,0.85)",
          lineHeight: "1.55",
          marginBottom: "14px",
          fontSize: "0.88rem",
          fontWeight: "500",
          fontStyle: "italic",
        }}>
          {study.tagline}
        </p>

        <p style={{
          fontFamily: ff,
          color: "rgba(244,241,236,0.6)",
          lineHeight: "1.65",
          marginBottom: "22px",
          fontSize: "0.92rem",
          flexGrow: 1,
        }}>
          {preview}
        </p>

        {/* impact bullets */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {study.impact.slice(0, 3).map((item) => (
            <li key={item} className="impact-item" style={{
              fontFamily: ff,
              color: "rgba(244,241,236,0.65)",
              marginBottom: "6px",
              fontSize: "0.86rem",
              lineHeight: 1.5,
            }}>
              {item}
            </li>
          ))}
        </ul>

        {/* read more */}
        <div style={{
          marginTop: 20,
          display: "flex", alignItems: "center", gap: 6,
          fontFamily: ff, fontSize: "0.82rem", fontWeight: "600",
          color: "#c9a96e", letterSpacing: "0.04em",
        }}>
          Read case study
          <span style={{ fontSize: "0.9rem" }}>→</span>
        </div>
      </div>
    </Link>
  );
}
