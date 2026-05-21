"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";
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

const ACCENT_MAP = {
  blue: {
    primary: "#6eb8e8",
    gradient: "linear-gradient(135deg, #eef6fc 0%, #c5e8fa 40%, #6eb8e8 100%)",
    tagline: "rgba(110,184,232,0.8)",
    link: "rgba(110,184,232,0.75)",
    statBorder: "rgba(110, 184, 232, 0.2)",
    statLabel: "rgba(110,184,232,0.75)",
    orb: "orb-blue",
  },
  violet: {
    primary: "#a78bfa",
    gradient: "linear-gradient(135deg, #f0ecfc 0%, #c4b5fd 40%, #a78bfa 100%)",
    tagline: "rgba(167,139,250,0.85)",
    link: "rgba(167,139,250,0.75)",
    statBorder: "rgba(167, 139, 250, 0.25)",
    statLabel: "rgba(167,139,250,0.8)",
    orb: "orb-blue",
  },
} as const;

export function CaseStudyDetailView({ study }: { study: CaseStudy }) {
  const accentKey = study.rich?.accent ?? "blue";
  const theme = ACCENT_MAP[accentKey];

  const showHeroVideo = Boolean(
    study.rich?.video &&
      study.rich.video.embedId &&
      !study.rich.video.placeholder
  );

  const showHighlights =
    study.highlights.length > 0 &&
    !study.rich?.outcomes?.length &&
    !study.rich?.platformPreview;

  const showProcess = study.process && !study.rich?.howItWorks?.length;

  const showTechGlance =
    study.techStack &&
    study.techStack.length > 0 &&
    !study.rich?.techCategories?.length;

  const showImpact =
    study.impact.length > 0 && !study.rich?.outcomes?.length;

  const sectionTitle = useMemo(
    () =>
      ({
        fontFamily: ffd,
        fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
        fontWeight: "700",
        letterSpacing: "-0.015em",
        background: `linear-gradient(135deg, #e8f4fc 0%, ${theme.primary}88 50%, ${theme.primary} 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        marginBottom: "22px",
      }) as const,
    [theme.primary]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".scroll-section").forEach((section) => {
        gsap.fromTo(
          section as gsap.TweenTarget,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section as Element,
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

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
    color: theme.primary,
    marginBottom: "10px",
    letterSpacing: "-0.01em",
  } as const;

  const ctaLabel =
    study.slug === "clinical-research-assistant"
      ? "Let's talk"
      : "Schedule Your Consultation";

  const ctaSubtext =
    study.slug === "clinical-research-assistant"
      ? "Want to deploy a citation-grounded research intelligence layer for your clinical or regulatory team?"
      : null;

  return (
    <div style={{ backgroundColor: "#080b12" }}>
      <AppNavigation variant="static" />

      <section
        className="scroll-section"
        style={{
          padding: "148px 48px 68px",
          background: "linear-gradient(160deg, #080b12 0%, #0e1526 60%, #121828 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className={`orb ${theme.orb}`}
          style={{ width: 380, height: 380, top: "-15%", right: "0%", zIndex: 0 }}
        />

        <div style={{ maxWidth: "1000px", margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
          <Link
            href="/case-studies"
            style={{
              fontFamily: ff,
              fontSize: "0.88rem",
              fontWeight: "500",
              color: theme.link,
              textDecoration: "none",
              marginBottom: "28px",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              letterSpacing: "0.01em",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = theme.primary;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = theme.link;
            }}
          >
            ← All case studies
          </Link>

          {study.sectors?.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 22 }}>
              {study.sectors.map((s) => (
                <span key={s} className="sector-tag">
                  {s}
                </span>
              ))}
            </div>
          )}

          {study.rich?.heroTags && study.rich.heroTags.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
              {study.rich.heroTags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: ff,
                    fontSize: "0.78rem",
                    color: "rgba(244,241,236,0.85)",
                    background: `${theme.primary}14`,
                    border: `1px solid ${theme.primary}40`,
                    padding: "8px 14px",
                    borderRadius: 999,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1
            style={{
              fontFamily: ffd,
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: "700",
              letterSpacing: "-0.025em",
              background: theme.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "20px",
              lineHeight: 1.1,
            }}
          >
            {study.title}
          </h1>

          <p
            style={{
              fontFamily: ff,
              fontSize: "1.2rem",
              color: theme.tagline,
              maxWidth: "820px",
              lineHeight: "1.65",
              fontStyle: study.rich?.heroTags ? "normal" : "italic",
              fontWeight: study.rich?.heroTags ? 500 : 400,
            }}
          >
            {study.tagline}
          </p>

          {study.rich?.productLink && (
            <p style={{ marginTop: 20 }}>
              <a
                href={study.rich.productLink.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: ff,
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: theme.primary,
                  textDecoration: "none",
                  borderBottom: `1px solid ${theme.primary}55`,
                  paddingBottom: 2,
                }}
              >
                {study.rich.productLink.label}
              </a>
            </p>
          )}

          {study.rich?.stats && study.rich.stats.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: 20,
                marginTop: 40,
                maxWidth: 820,
              }}
            >
              {study.rich.stats.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "rgba(10, 20, 40, 0.5)",
                    border: `1px solid ${theme.statBorder}`,
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
                      color: theme.statLabel,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {showHeroVideo && study.rich?.video && (
            <CaseStudyVideoBlock
              variant="hero"
              title={study.rich.video.title}
              description={study.rich.video.description}
              embedId={study.rich.video.embedId}
              url={study.rich.video.url}
              accent={theme.primary}
            />
          )}

          <div className="shimmer-line" style={{ marginTop: 36, maxWidth: 400 }} />
        </div>
      </section>

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
            <p key={`c-${i}`} style={bodyText}>
              {p}
            </p>
          ))}

          {study.rich?.testimonial && (
            <blockquote
              style={{
                background: "rgba(10, 15, 28, 0.7)",
                backdropFilter: "blur(14px)",
                margin: "36px 0 0",
                padding: "28px 32px",
                borderRadius: "16px",
                border: `1px solid ${theme.primary}24`,
                borderLeft: `3px solid ${theme.primary}`,
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
                  color: `${theme.primary}dd`,
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
            <p key={`s-${i}`} style={bodyText}>
              {p}
            </p>
          ))}

          {study.rich && <CaseStudyRichSections rich={study.rich} />}

          {showHighlights && (
            <>
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
                      border: `1px solid ${theme.primary}24`,
                      marginBottom: "20px",
                      position: "relative",
                      overflow: "hidden",
                      transition: "border-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${theme.primary}52`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${theme.primary}24`;
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "2.5px",
                        background: `linear-gradient(90deg, ${theme.primary}, transparent 70%)`,
                      }}
                    />
                    <h3 style={highlightTitle}>{item.title}</h3>
                    <p style={{ ...bodyText, marginBottom: 0 }}>{item.description}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {showTechGlance && study.techStack && (
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

          {showProcess && study.process && (
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
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.78rem",
                        color: theme.primary,
                        fontWeight: 600,
                        minWidth: 28,
                        paddingTop: 3,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </>
          )}

          {showImpact && (
            <>
              <h2 style={{ ...sectionTitle, marginTop: "52px" }}>Impact</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {study.impact.map((line, i) => (
                  <li
                    key={`impact-${i}`}
                    className="impact-item"
                    style={{
                      ...bodyText,
                      marginBottom: "12px",
                      paddingLeft: "22px",
                    }}
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </>
          )}

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
                borderTop: `1px solid ${theme.primary}24`,
                paddingTop: "32px",
              }}
            >
              {p}
            </p>
          ))}

          <div style={{ marginTop: "52px", textAlign: "center" }}>
            {ctaSubtext && (
              <p
                style={{
                  fontFamily: ff,
                  fontSize: "1.05rem",
                  color: "rgba(244,241,236,0.75)",
                  maxWidth: 560,
                  margin: "0 auto 24px",
                  lineHeight: 1.65,
                }}
              >
                {ctaSubtext}
              </p>
            )}
            <Link href="/#contact" style={{ textDecoration: "none" }}>
              <div
                style={{
                  background: `linear-gradient(135deg, #e8f4fc, ${theme.primary})`,
                  padding: "15px 34px",
                  borderRadius: "11px",
                  fontFamily: ff,
                  fontSize: "1.05rem",
                  fontWeight: "600",
                  color: "#0a0a0a",
                  display: "inline-block",
                  boxShadow: `0 8px 28px ${theme.primary}6b`,
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) =>
                  gsap.to(e.currentTarget, {
                    scale: 1.05,
                    boxShadow: `0 12px 38px ${theme.primary}9e`,
                    duration: 0.28,
                  })
                }
                onMouseLeave={(e) =>
                  gsap.to(e.currentTarget, {
                    scale: 1,
                    boxShadow: `0 8px 28px ${theme.primary}6b`,
                    duration: 0.28,
                  })
                }
              >
                {ctaLabel}
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
