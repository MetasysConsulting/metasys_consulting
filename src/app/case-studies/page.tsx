"use client";

import { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CASE_STUDIES } from "@/data/case-studies";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const fontHref =
  "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap";

export default function CaseStudiesPage() {
  useEffect(() => {
    const sections = gsap.utils.toArray(".case-study-section");
    sections.forEach((section) => {
      gsap.fromTo(
        section as gsap.TweenTarget,
        { y: 56, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section as Element,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <link href={fontHref} rel="stylesheet" />

      <div style={{ backgroundColor: "#0a0a0a", minHeight: "100vh" }}>
        <nav
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 1000,
            padding: "18px 32px",
            background: "rgba(0, 20, 40, 0.92)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(0, 255, 255, 0.18)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.35)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "1200px",
              margin: "0 auto",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <div
                style={{
                  fontFamily: '"Orbitron", monospace',
                  fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #00ffff, #0080ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                METASYS CONSULTING
              </div>
            </Link>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
              <Link href="/" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    fontFamily: '"Rajdhani", sans-serif',
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.88)",
                    padding: "10px 16px",
                    borderRadius: "10px",
                    border: "1px solid rgba(0,255,255,0.25)",
                  }}
                >
                  Home
                </span>
              </Link>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    fontFamily: '"Rajdhani", sans-serif',
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#000",
                    background: "linear-gradient(135deg, #00ffff, #0080ff)",
                    padding: "10px 18px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 14px rgba(0, 255, 255, 0.25)",
                  }}
                >
                  Contact
                </span>
              </Link>
            </div>
          </div>
        </nav>

        <header
          style={{
            padding: "120px 24px 48px",
            background: "linear-gradient(135deg, #05060a, #101827)",
            borderBottom: "1px solid rgba(0, 255, 255, 0.12)",
          }}
        >
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p
              style={{
                fontFamily: '"Rajdhani", sans-serif',
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontSize: "0.78rem",
                color: "rgba(0,255,255,0.85)",
                marginBottom: "14px",
              }}
            >
              Work
            </p>
            <h1
              style={{
                fontFamily: '"Orbitron", monospace',
                fontSize: "clamp(2.1rem, 4vw, 3rem)",
                lineHeight: 1.15,
                fontWeight: 800,
                background: "linear-gradient(135deg, #e0f7ff, #00ffff, #6aa7ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "18px",
              }}
            >
              Case studies
            </h1>
            <p
              style={{
                fontFamily: '"Space Grotesk", system-ui, sans-serif',
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "rgba(226,232,240,0.92)",
              }}
            >
              Representative engagements spanning healthcare and public programs, life sciences, enterprise data
              platforms, marketing intelligence, and AI-enabled operations. Narratives are summarized for clarity while
              preserving the technical and business substance of each initiative.
            </p>
          </div>
        </header>

        <nav
          aria-label="Case study sections"
          style={{
            position: "sticky",
            top: "72px",
            zIndex: 50,
            backdropFilter: "blur(16px)",
            background: "rgba(5,8,16,0.86)",
            borderBottom: "1px solid rgba(148,163,184,0.25)",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "10px 20px 12px",
              display: "flex",
              gap: "8px",
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {CASE_STUDIES.map((cs) => (
              <a
                key={cs.slug}
                href={`#${cs.slug}`}
                style={{
                  flex: "0 0 auto",
                  fontFamily: '"Space Grotesk", system-ui, sans-serif',
                  fontSize: "0.8rem",
                  padding: "6px 11px",
                  borderRadius: "999px",
                  border: "1px solid rgba(148,163,184,0.45)",
                  color: "rgba(226,232,240,0.95)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {cs.title}
              </a>
            ))}
          </div>
        </nav>

        <main style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px 96px" }}>
          {CASE_STUDIES.map((study) => (
            <article
              key={study.slug}
              id={study.slug}
              className="case-study-section"
              style={{
                padding: "32px 26px 34px",
                marginBottom: "32px",
                borderRadius: "18px",
                background:
                  "radial-gradient(circle at top left, rgba(56,189,248,0.12), transparent 55%), rgba(15,23,42,0.96)",
                border: "1px solid rgba(148,163,184,0.35)",
                boxShadow: "0 18px 45px rgba(15,23,42,0.85)",
              }}
            >
              <header style={{ marginBottom: "22px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
                  {study.sectors.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontFamily: '"Space Grotesk", system-ui, sans-serif',
                        fontSize: "0.72rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.16em",
                        padding: "4px 9px",
                        borderRadius: "999px",
                        border: "1px solid rgba(56,189,248,0.55)",
                        color: "rgba(191,219,254,0.96)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <h2
                  style={{
                    fontFamily: '"Orbitron", monospace',
                    fontSize: "clamp(1.35rem, 2.4vw, 1.7rem)",
                    fontWeight: 700,
                    color: "#e5f4ff",
                    marginBottom: "6px",
                  }}
                >
                  {study.title}
                </h2>
                <p
                  style={{
                    fontFamily: '"Rajdhani", system-ui, sans-serif',
                    fontSize: "1.05rem",
                    color: "rgba(125,211,252,0.95)",
                  }}
                >
                  {study.tagline}
                </p>
              </header>

              <section style={{ marginBottom: "20px" }}>
                <h3
                  style={{
                    fontFamily: '"Rajdhani", system-ui, sans-serif',
                    fontSize: "0.9rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(148,163,184,0.95)",
                    marginBottom: "10px",
                  }}
                >
                  Challenge
                </h3>
                {study.challenge.map((p, i) => (
                  <p
                    key={`${study.slug}-challenge-${i}`}
                    style={{
                      fontFamily: '"Space Grotesk", system-ui, sans-serif',
                      fontSize: "0.95rem",
                      lineHeight: 1.75,
                      color: "rgba(226,232,240,0.92)",
                      marginBottom: "10px",
                    }}
                  >
                    {p}
                  </p>
                ))}
              </section>

              <section style={{ marginBottom: "20px" }}>
                <h3
                  style={{
                    fontFamily: '"Rajdhani", system-ui, sans-serif',
                    fontSize: "0.9rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(148,163,184,0.95)",
                    marginBottom: "10px",
                  }}
                >
                  Solution
                </h3>
                {study.solutionIntro.map((p, i) => (
                  <p
                    key={`${study.slug}-solution-${i}`}
                    style={{
                      fontFamily: '"Space Grotesk", system-ui, sans-serif',
                      fontSize: "0.95rem",
                      lineHeight: 1.75,
                      color: "rgba(226,232,240,0.92)",
                      marginBottom: "10px",
                    }}
                  >
                    {p}
                  </p>
                ))}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "12px 0 0",
                    display: "grid",
                    gap: "12px",
                  }}
                >
                  {study.highlights.map((h) => (
                    <li
                      key={h.title}
                      style={{
                        borderRadius: "12px",
                        padding: "12px 13px",
                        background: "rgba(15,23,42,0.9)",
                        border: "1px solid rgba(51,65,85,0.9)",
                      }}
                    >
                      <h4
                        style={{
                          fontFamily: '"Rajdhani", system-ui, sans-serif',
                          fontSize: "0.98rem",
                          color: "#7dd3fc",
                          marginBottom: "6px",
                        }}
                      >
                        {h.title}
                      </h4>
                      <p
                        style={{
                          fontFamily: '"Space Grotesk", system-ui, sans-serif',
                          fontSize: "0.9rem",
                          lineHeight: 1.7,
                          color: "rgba(226,232,240,0.9)",
                        }}
                      >
                        {h.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>

              {study.process && (
                <section style={{ marginBottom: "18px" }}>
                  <h3
                    style={{
                      fontFamily: '"Rajdhani", system-ui, sans-serif',
                      fontSize: "0.9rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(148,163,184,0.95)",
                      marginBottom: "8px",
                    }}
                  >
                    {study.process.title}
                  </h3>
                  <ol
                    style={{
                      paddingLeft: "1.1rem",
                      margin: 0,
                      display: "grid",
                      gap: "6px",
                    }}
                  >
                    {study.process.steps.map((step) => (
                      <li
                        key={step}
                        style={{
                          fontFamily: '"Space Grotesk", system-ui, sans-serif',
                          fontSize: "0.9rem",
                          lineHeight: 1.65,
                          color: "rgba(226,232,240,0.9)",
                        }}
                      >
                        {step}
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {study.techStack && study.techStack.length > 0 && (
                <section style={{ marginBottom: "18px" }}>
                  <h3
                    style={{
                      fontFamily: '"Rajdhani", system-ui, sans-serif',
                      fontSize: "0.9rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(148,163,184,0.95)",
                      marginBottom: "8px",
                    }}
                  >
                    Technology footprint
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {study.techStack.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: '"Space Grotesk", system-ui, sans-serif',
                          fontSize: "0.78rem",
                          padding: "4px 9px",
                          borderRadius: "999px",
                          border: "1px solid rgba(75,85,99,0.9)",
                          color: "rgba(209,213,219,0.96)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              <section>
                <h3
                  style={{
                    fontFamily: '"Rajdhani", system-ui, sans-serif',
                    fontSize: "0.9rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(148,163,184,0.95)",
                    marginBottom: "8px",
                  }}
                >
                  Impact
                </h3>
                <ul
                  style={{
                    paddingLeft: "1.1rem",
                    margin: 0,
                    display: "grid",
                    gap: "6px",
                  }}
                >
                  {study.impact.map((line, i) => (
                    <li
                      key={`${study.slug}-impact-${i}`}
                      style={{
                        fontFamily: '"Space Grotesk", system-ui, sans-serif',
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                        color: "rgba(226,232,240,0.92)",
                      }}
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </section>

              {study.closing && study.closing.length > 0 && (
                <section
                  style={{
                    marginTop: "16px",
                    paddingTop: "14px",
                    borderTop: "1px solid rgba(51,65,85,0.9)",
                  }}
                >
                  {study.closing.map((p, i) => (
                    <p
                      key={`${study.slug}-closing-${i}`}
                      style={{
                        fontFamily: '"Space Grotesk", system-ui, sans-serif',
                        fontSize: "0.9rem",
                        lineHeight: 1.7,
                        color: "rgba(148,163,184,0.95)",
                        fontStyle: "italic",
                      }}
                    >
                      {p}
                    </p>
                  ))}
                </section>
              )}
            </article>
          ))}
        </main>
      </div>
    </>
  );
}
