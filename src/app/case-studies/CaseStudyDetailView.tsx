"use client";

import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AppNavigation } from "@/components/site/AppNavigation";
import type { CaseStudy } from "@/data/case-studies";
import { CaseStudyRichSections } from "@/components/case-studies/CaseStudyRichSections";
import { CaseStudyVideoBlock } from "@/components/case-studies/CaseStudyVideoBlock";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ff = "var(--font-body), system-ui, sans-serif";
const ffd = "var(--font-display), system-ui, sans-serif";

export function CaseStudyDetailView({ study }: { study: CaseStudy }) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".scroll-section").forEach((section) => {
        gsap.fromTo(
          section as gsap.TweenTarget,
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1, ease: "power3.out",
            scrollTrigger: {
              trigger: section as Element,
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });
    return () => { ctx.revert(); ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  const sectionTitle = {
    fontFamily: ffd,
    fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
    fontWeight: "700",
    letterSpacing: "-0.015em",
    background: "linear-gradient(135deg, #e8f4fc 0%, #b8daf0 40%, #6eb8e8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "22px",
  } as const;

  const bodyText = {
    fontFamily: ff,
    fontSize: "1.05rem",
    color: "rgba(244, 241, 236, 0.78)",
    lineHeight: "1.78",
    marginBottom: "16px",
  } as const;

  const highlightTitle = {
    fontFamily: ffd,
    fontSize: "1.05rem",
    fontWeight: "700",
    color: "#b4daf4",
    marginBottom: "10px",
    letterSpacing: "-0.01em",
  } as const;

  return (
    <div style={{ backgroundColor: "#080b12" }}>
      <AppNavigation variant="static" />

      {/* Title hero */}
      <section
        className="scroll-section"
        style={{
          padding: "148px 48px 68px",
          background: "linear-gradient(160deg, #080b12 0%, #0e1526 60%, #121828 100%)",
          position: "relative", overflow: "hidden",
        }}
      >
        <div className="orb orb-blue" style={{ width: 380, height: 380, top: "-15%", right: "0%", zIndex: 0 }} />

        <div style={{ maxWidth: "1000px", margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
          <Link
            href="/case-studies"
            style={{
              fontFamily: ff,
              fontSize: "0.88rem",
              fontWeight: "500",
              color: "rgba(110,184,232,0.75)",
              textDecoration: "none",
              marginBottom: "28px",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              letterSpacing: "0.01em",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#6eb8e8"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(110,184,232,0.75)"; }}
          >
            ← All case studies
          </Link>

          {/* sector tags */}
          {study.sectors?.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 22 }}>
              {study.sectors.map((s) => (
                <span key={s} className="sector-tag">{s}</span>
              ))}
            </div>
          )}

          <h1 style={{
            fontFamily: ffd,
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            fontWeight: "700",
            letterSpacing: "-0.025em",
            background: "linear-gradient(135deg, #eef6fc 0%, #c5e8fa 40%, #6eb8e8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "20px",
            lineHeight: 1.1,
          }}>
            {study.title}
          </h1>

          <p style={{
            fontFamily: ff,
            fontSize: "1.2rem",
            color: "rgba(110,184,232,0.8)",
            maxWidth: "820px",
            lineHeight: "1.65",
            fontStyle: "italic",
            fontWeight: "400",
          }}>
            {study.tagline}
          </p>

          {study.rich?.stats && study.rich.stats.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: 20,
                marginTop: 40,
                maxWidth: 720,
              }}
            >
              {study.rich.stats.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "rgba(10, 20, 40, 0.5)",
                    border: "1px solid rgba(110, 184, 232, 0.2)",
                    borderRadius: 14,
                    padding: "20px 16px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: ffd,
                      fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      color: "#eef6fc",
                      lineHeight: 1.1,
                      marginBottom: 6,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                      fontSize: "0.68rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(110,184,232,0.75)",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {study.rich?.video && (
            <CaseStudyVideoBlock
              variant="hero"
              title={study.rich.video.title}
              description={study.rich.video.description}
              embedId={study.rich.video.embedId}
              url={study.rich.video.url}
            />
          )}

          <div className="shimmer-line" style={{ marginTop: 36, maxWidth: 400 }} />
        </div>
      </section>

      {/* Content */}
      <section
        className="scroll-section"
        style={{
          padding: "72px 48px 120px",
          background: "linear-gradient(160deg, #0d1120 0%, #101828 100%)",
        }}
      >
        <div style={{ maxWidth: study.rich ? "960px" : "860px", margin: "0 auto", width: "100%" }}>

          <h2 style={sectionTitle}>Challenge</h2>
          {study.challenge.map((p, i) => (
            <p key={`c-${i}`} style={bodyText}>{p}</p>
          ))}

          {study.rich?.testimonial && (
            <blockquote
              style={{
                background: "rgba(10, 15, 28, 0.7)",
                backdropFilter: "blur(14px)",
                margin: "36px 0 0",
                padding: "28px 32px",
                borderRadius: "16px",
                border: "1px solid rgba(110, 184, 232, 0.14)",
                borderLeft: "3px solid #6eb8e8",
              }}
            >
              <p
                style={{
                  fontFamily: ff,
                  fontSize: "1.08rem",
                  fontStyle: "italic",
                  color: "rgba(244,241,236,0.9)",
                  lineHeight: 1.7,
                  margin: "0 0 14px",
                }}
              >
                &ldquo;{study.rich.testimonial.quote}&rdquo;
              </p>
              <cite
                style={{
                  fontFamily: ff,
                  fontSize: "0.88rem",
                  color: "rgba(110,184,232,0.85)",
                  fontStyle: "normal",
                  fontWeight: 500,
                }}
              >
                — {study.rich.testimonial.attribution}
              </cite>
            </blockquote>
          )}

          <h2 style={{ ...sectionTitle, marginTop: "52px" }}>Solution</h2>
          {study.solutionIntro.map((p, i) => (
            <p key={`s-${i}`} style={bodyText}>{p}</p>
          ))}

          {study.rich && <CaseStudyRichSections rich={study.rich} />}

          <h2 style={{ ...sectionTitle, marginTop: study.rich ? 48 : 52 }}>Platform capabilities</h2>
          <div style={{ marginTop: 8 }}>
            {study.highlights.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "rgba(10, 15, 28, 0.7)",
                  backdropFilter: "blur(14px)",
                  padding: "28px 32px",
                  borderRadius: "16px",
                  border: "1px solid rgba(110, 184, 232, 0.14)",
                  marginBottom: "20px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.3s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(110,184,232,0.32)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(110,184,232,0.14)"; }}
              >
                <div style={{
                  position: "absolute", top: 0, left: 0, width: "100%", height: "2.5px",
                  background: "linear-gradient(90deg, #6eb8e8, #4f8ef7 60%, transparent)",
                }} />
                <h3 style={highlightTitle}>{item.title}</h3>
                <p style={{ ...bodyText, marginBottom: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>

          {study.techStack && study.techStack.length > 0 && (
            <>
              <h2 style={{ ...sectionTitle, marginTop: "52px" }}>Tech at a glance</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 8 }}>
                {study.techStack.map((tech) => (
                  <span key={tech} className="sector-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </>
          )}

          {study.process && (
            <>
              <h2 style={{ ...sectionTitle, marginTop: "52px" }}>{study.process.title}</h2>
              <ol style={{ listStyle: "none", padding: 0, counterReset: "step-counter" }}>
                {study.process.steps.map((step, i) => (
                  <li
                    key={`step-${i}`}
                    style={{
                      ...bodyText,
                      display: "flex",
                      gap: 16,
                      alignItems: "flex-start",
                      marginBottom: 14,
                    }}
                  >
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: "0.78rem",
                      color: "#6eb8e8", fontWeight: 600,
                      minWidth: 28, paddingTop: 3,
                    }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </>
          )}

          <h2 style={{ ...sectionTitle, marginTop: "52px" }}>Impact</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {study.impact.map((line, i) => (
              <li key={`impact-${i}`} className="impact-item" style={{
                ...bodyText,
                marginBottom: "12px",
                paddingLeft: "22px",
              }}>
                {line}
              </li>
            ))}
          </ul>

          {study.closing?.map((p, i) => (
            <p
              key={`close-${i}`}
              style={{
                fontFamily: ff,
                fontSize: "1.08rem",
                color: "rgba(244,241,236,0.62)",
                fontStyle: "italic",
                marginTop: "44px",
                lineHeight: "1.78",
                borderTop: "1px solid rgba(110,184,232,0.14)",
                paddingTop: "32px",
              }}
            >
              {p}
            </p>
          ))}

          <div style={{ marginTop: "52px", textAlign: "center" }}>
            <Link href="/#contact" style={{ textDecoration: "none" }}>
              <div
                style={{
                  background: "linear-gradient(135deg, #c5e8fa, #6eb8e8)",
                  padding: "15px 34px",
                  borderRadius: "11px",
                  fontFamily: ff,
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  color: "#0a0a0a",
                  display: "inline-block",
                  boxShadow: "0 8px 28px rgba(110,184,232,0.42)",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, boxShadow: "0 12px 38px rgba(110,184,232,0.62)", duration: 0.28 })}
                onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, boxShadow: "0 8px 28px rgba(110,184,232,0.42)", duration: 0.28 })}
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
