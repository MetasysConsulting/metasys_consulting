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

export function CaseStudiesView() {
  useEffect(() => {
    gsap.utils.toArray(".scroll-section").forEach((section) => {
      gsap.fromTo(
        section as gsap.TweenTarget,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section as Element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.utils.toArray(".service-card").forEach((card) => {
      gsap.fromTo(
        card as gsap.TweenTarget,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card as Element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div style={{ backgroundColor: "#0a0a0a" }}>
      <AppNavigation variant="static" />

      <section
        className="scroll-section"
        style={{
          padding: "140px 40px 80px 40px",
          background: "linear-gradient(135deg, #0a0a0a, #1a1a2e)",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%", textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "700",
              background: "linear-gradient(135deg, #e8e4dc, #b8a88a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "30px",
            }}
          >
            Case Studies
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "1.3rem",
              color: "rgba(255, 255, 255, 0.8)",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Selected engagements across healthcare, public programs, enterprise data, and digital operations.
          </p>
        </div>
      </section>

      <section
        className="scroll-section"
        style={{
          padding: "120px 40px",
          background: "linear-gradient(135deg, #1a1a2e, #16213e)",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "40px",
            }}
          >
            {CASE_STUDIES.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="scroll-section"
        style={{
          padding: "120px 40px",
          background: "linear-gradient(135deg, #16213e, #0a0a0a)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            fontSize: "1.3rem",
            color: "rgba(255, 255, 255, 0.9)",
            marginBottom: "30px",
            maxWidth: "600px",
            margin: "0 auto 30px auto",
          }}
        >
          Ready to discuss your initiative? Schedule a consultation with our team.
        </p>
        <Link href="/contact" style={{ textDecoration: "none" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #e8e4dc, #b8a88a)",
              padding: "16px 32px",
              borderRadius: "12px",
              cursor: "pointer",
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
      </section>
    </div>
  );
}
