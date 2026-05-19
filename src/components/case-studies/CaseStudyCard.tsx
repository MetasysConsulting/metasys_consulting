"use client";

import Link from "next/link";
import { gsap } from "gsap";
import type { CaseStudy } from "@/data/case-studies";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  const preview =
    study.challenge[0]?.length > 200
      ? `${study.challenge[0].slice(0, 197)}…`
      : study.challenge[0];

  return (
    <Link href={`/case-studies/${study.slug}`} style={{ textDecoration: "none" }}>
      <div
        className="service-card"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "rgba(0, 20, 40, 0.4)",
          backdropFilter: "blur(15px)",
          padding: "40px",
          borderRadius: "20px",
          border: "1px solid rgba(200, 190, 170, 0.2)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          cursor: "pointer",
          transition: "all 0.3s ease",
          height: "100%",
        }}
        onMouseEnter={(e) => {
          gsap.to(e.currentTarget, {
            y: -10,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(200, 190, 170, 0.2)",
            duration: 0.3,
          });
        }}
        onMouseLeave={(e) => {
          gsap.to(e.currentTarget, {
            y: 0,
            scale: 1,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            duration: 0.3,
          });
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px",
            background: "linear-gradient(90deg, #d4cfc4, #b8a88a)",
            borderRadius: "20px 20px 0 0",
          }}
        />
        <h3
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            fontSize: "1.8rem",
            fontWeight: "600",
            color: "#d4cfc4",
            marginBottom: "15px",
            marginTop: "8px",
          }}
        >
          {study.title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            color: "rgba(255, 255, 255, 0.8)",
            lineHeight: "1.6",
            marginBottom: "20px",
            fontSize: "1rem",
          }}
        >
          {study.tagline}
        </p>
        <p
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            color: "rgba(255, 255, 255, 0.65)",
            lineHeight: "1.6",
            marginBottom: "25px",
            fontSize: "0.95rem",
          }}
        >
          {preview}
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {study.impact.slice(0, 3).map((item) => (
            <li
              key={item}
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                color: "rgba(255, 255, 255, 0.7)",
                marginBottom: "8px",
                paddingLeft: "20px",
                position: "relative",
                fontSize: "0.9rem",
              }}
            >
              <span style={{ position: "absolute", left: 0, color: "#d4cfc4" }}>•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
