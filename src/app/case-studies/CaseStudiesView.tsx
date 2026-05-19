"use client";

import { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AppNavigation } from "@/components/site/AppNavigation";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { CASE_STUDIES } from "@/data/case-studies";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ff = "var(--font-body), system-ui, sans-serif";
const ffd = "var(--font-display), system-ui, sans-serif";

export function CaseStudiesView() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".scroll-section").forEach((section) => {
        gsap.fromTo(
          section as gsap.TweenTarget,
          { y: 70, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1.1, ease: "power3.out",
            scrollTrigger: {
              trigger: section as Element,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.utils.toArray(".service-card").forEach((card, i) => {
        gsap.fromTo(
          card as gsap.TweenTarget,
          { y: 55, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power2.out",
            delay: (i % 3) * 0.08,
            scrollTrigger: {
              trigger: card as Element,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => { ctx.revert(); ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  return (
    <div style={{ backgroundColor: "#080b12" }}>
      <AppNavigation variant="static" />

      {/* Hero */}
      <section
        className="scroll-section"
        style={{
          padding: "148px 48px 88px",
          background: "linear-gradient(160deg, #080b12 0%, #0e1526 60%, #121828 100%)",
          position: "relative", overflow: "hidden",
        }}
      >
        {/* ambient orb */}
        <div className="orb orb-blue" style={{ width: 400, height: 400, top: "-10%", right: "5%", zIndex: 0 }} />

        <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%", textAlign: "center", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 32, height: 1, background: "linear-gradient(90deg, transparent, #c9a96e)" }} />
            <span className="section-label">Client Work</span>
            <div style={{ width: 32, height: 1, background: "linear-gradient(90deg, #c9a96e, transparent)" }} />
          </div>

          <h1
            className="heading-gradient"
            style={{
              fontFamily: ffd,
              fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)",
              fontWeight: "700",
              letterSpacing: "-0.025em",
              marginBottom: "24px",
              lineHeight: 1.1,
            }}
          >
            Case Studies
          </h1>
          <p style={{
            fontFamily: ff,
            fontSize: "1.1rem",
            color: "rgba(244, 241, 236, 0.7)",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.72",
          }}>
            Selected engagements across healthcare, public programs, enterprise data, and digital operations.
          </p>
        </div>
      </section>

      {/* Cards grid */}
      <section
        className="scroll-section"
        style={{
          padding: "80px 48px 120px",
          background: "linear-gradient(160deg, #0d1120 0%, #101828 100%)",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: "32px",
            alignItems: "start",
          }}>
            {CASE_STUDIES.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="scroll-section"
        style={{
          padding: "100px 48px",
          background: "linear-gradient(160deg, #101828 0%, #080b12 100%)",
          textAlign: "center",
          position: "relative", overflow: "hidden",
        }}
      >
        <div className="orb orb-amber" style={{ width: 360, height: 360, bottom: "-20%", left: "10%", zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <p style={{
            fontFamily: ff,
            fontSize: "1.2rem",
            color: "rgba(244,241,236,0.88)",
            marginBottom: "32px",
            maxWidth: "560px",
            margin: "0 auto 32px auto",
            lineHeight: "1.65",
          }}>
            Ready to discuss your initiative? Schedule a consultation with our team.
          </p>
          <Link href="/#contact" style={{ textDecoration: "none" }} onClick={() => { /* markSkipHomeIntro called via Link */ }}>
            <div
              style={{
                background: "linear-gradient(135deg, #e8dfc8, #c9a96e)",
                padding: "15px 34px",
                borderRadius: "11px",
                cursor: "pointer",
                fontFamily: ff,
                fontSize: "1.05rem",
                fontWeight: "600",
                color: "#0a0a0a",
                display: "inline-block",
                boxShadow: "0 8px 28px rgba(201,169,110,0.42)",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, boxShadow: "0 12px 38px rgba(201,169,110,0.62)", duration: 0.28 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, boxShadow: "0 8px 28px rgba(201,169,110,0.42)", duration: 0.28 })}
            >
              Schedule Your Consultation
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
