"use client";

import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AppNavigation } from "@/components/site/AppNavigation";
import type { CaseStudy } from "@/data/case-studies";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CaseStudyDetailView({ study }: { study: CaseStudy }) {
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
        }
      );
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const sectionTitle = {
    fontFamily: "var(--font-display), Georgia, serif",
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    fontWeight: "700",
    background: "linear-gradient(135deg, #e8e4dc, #b8a88a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "24px",
  } as const;

  const bodyText = {
    fontFamily: "var(--font-body), system-ui, sans-serif",
    fontSize: "1.1rem",
    color: "rgba(255, 255, 255, 0.8)",
    lineHeight: "1.7",
    marginBottom: "16px",
  } as const;

  const labelText = {
    fontFamily: 'var(--font-body), system-ui, sans-serif',
    fontSize: "1.6rem",
    fontWeight: "600",
    color: "#d4cfc4",
    marginBottom: "20px",
  } as const;

  return (
    <div style={{ backgroundColor: "#0a0a0a" }}>
      <AppNavigation variant="static" />

      <section
        className="scroll-section"
        style={{
          padding: "140px 40px 60px 40px",
          background: "linear-gradient(135deg, #0a0a0a, #1a1a2e)",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%" }}>
          <Link
            href="/case-studies"
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "0.95rem",
              color: "rgba(255, 255, 255, 0.6)",
              textDecoration: "none",
              marginBottom: "24px",
              display: "inline-block",
            }}
          >
            ← All case studies
          </Link>
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "700",
              background: "linear-gradient(135deg, #f5f3ef, #e8e4dc, #b8a88a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "20px",
            }}
          >
            {study.title}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "1.3rem",
              color: "#d4cfc4",
              maxWidth: "900px",
              lineHeight: "1.6",
            }}
          >
            {study.tagline}
          </p>
        </div>
      </section>

      <section
        className="scroll-section"
        style={{
          padding: "80px 40px 120px 40px",
          background: "linear-gradient(135deg, #1a1a2e, #16213e)",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto", width: "100%" }}>
          <h2 style={sectionTitle}>Challenge</h2>
          {study.challenge.map((p, i) => (
            <p key={`c-${i}`} style={bodyText}>
              {p}
            </p>
          ))}

          <h2 style={{ ...sectionTitle, marginTop: "48px" }}>Solution</h2>
          {study.solutionIntro.map((p, i) => (
            <p key={`s-${i}`} style={bodyText}>
              {p}
            </p>
          ))}
          {study.highlights.map((item) => (
            <div
              key={item.title}
              style={{
                background: "rgba(0, 20, 40, 0.3)",
                backdropFilter: "blur(10px)",
                padding: "32px",
                borderRadius: "16px",
                border: "1px solid rgba(200, 190, 170, 0.2)",
                marginBottom: "24px",
                position: "relative",
                overflow: "hidden",
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
                }}
              />
              <h3 style={labelText}>{item.title}</h3>
              <p style={{ ...bodyText, marginBottom: 0 }}>{item.description}</p>
            </div>
          ))}

          {study.process && (
            <>
              <h2 style={{ ...sectionTitle, marginTop: "48px" }}>{study.process.title}</h2>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {study.process.steps.map((step, i) => (
                  <li
                    key={`step-${i}`}
                    style={{
                      ...bodyText,
                      paddingLeft: "20px",
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "#d4cfc4" }}>•</span>
                    {step}
                  </li>
                ))}
              </ul>
            </>
          )}

          <h2 style={{ ...sectionTitle, marginTop: "48px" }}>Impact</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {study.impact.map((line, i) => (
              <li
                key={`impact-${i}`}
                style={{
                  ...bodyText,
                  paddingLeft: "20px",
                  position: "relative",
                }}
              >
                <span style={{ position: "absolute", left: 0, color: "#d4cfc4" }}>•</span>
                {line}
              </li>
            ))}
          </ul>

          {study.closing?.map((p, i) => (
            <p
              key={`close-${i}`}
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "1.15rem",
                color: "rgba(255, 255, 255, 0.7)",
                fontStyle: "italic",
                marginTop: "40px",
                lineHeight: "1.7",
                borderTop: "1px solid rgba(200, 190, 170, 0.2)",
                paddingTop: "32px",
              }}
            >
              {p}
            </p>
          ))}

          <div style={{ marginTop: "48px", textAlign: "center" }}>
            <Link href="/#contact" style={{ textDecoration: "none" }}>
              <div
                style={{
                  background: "linear-gradient(135deg, #e8e4dc, #b8a88a)",
                  padding: "16px 32px",
                  borderRadius: "12px",
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "#000",
                  display: "inline-block",
                  boxShadow: "0 8px 25px rgba(200, 190, 170, 0.4)",
                }}
              >
                Schedule Your Consultation
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
