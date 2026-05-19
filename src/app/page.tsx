"use client";

import { useEffect, useState, useRef, startTransition } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { consumeSkipHomeIntro } from "@/lib/home-intro";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactSection } from "@/components/ContactSection";
import { TechnologyLogos } from "@/components/TechnologyLogos";
import { ClientsSection } from "@/components/ClientsSection";
import { SiteLogo } from "@/components/site/SiteLogo";
import { HOME_SERVICES } from "@/data/services";
import { TECHNOLOGIES } from "@/data/technologies";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Floating particle canvas ──────────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number; hue: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 55;
    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        size: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.35 + 0.08,
        hue: Math.random() < 0.45 ? 220 : 195,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 65%, 72%, ${p.alpha})`;
        ctx.fill();
      }
      // Draw faint connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(110,184,232,${0.055 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0, left: 0, width: "100%", height: "100%",
        zIndex: 2,
        pointerEvents: "none",
      }}
    />
  );
}

/* ─── Home page ─────────────────────────────────────────────────────────── */
export default function Home() {
  const [playIntro, setPlayIntro] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const heroHeadingRef = useRef<HTMLDivElement>(null);
  const heroDescriptionRef = useRef<HTMLDivElement>(null);

  const showHeroChrome = !playIntro;

  useEffect(() => {
    const skipIntro = consumeSkipHomeIntro();

    const setupScrollAnimations = () => {
      gsap.utils.toArray(".scroll-section").forEach((section) => {
        gsap.fromTo(
          section as gsap.TweenTarget,
          { y: 80, opacity: 0 },
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

      gsap.utils.toArray(".service-card").forEach((card) => {
        gsap.fromTo(
          card as gsap.TweenTarget,
          { y: 60, opacity: 0, scale: 0.94 },
          {
            y: 0, opacity: 1, scale: 1, duration: 0.75, ease: "power2.out",
            scrollTrigger: {
              trigger: card as Element,
              start: "top 87%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.utils.toArray(".client-logo").forEach((logo) => {
        gsap.fromTo(
          logo as gsap.TweenTarget,
          { scale: 0.7, opacity: 0 },
          {
            scale: 1, opacity: 1, duration: 0.55, ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: logo as Element,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    };

    if (skipIntro) {
      startTransition(() => {
        setPlayIntro(false);
        setStartAnimation(true);
      });
      if (navRef.current) gsap.set(navRef.current, { y: 0, opacity: 1, backdropFilter: "blur(20px)" });
      gsap.set(".nav-item", { y: 0, opacity: 1 });
      if (heroHeadingRef.current) gsap.set(heroHeadingRef.current, { x: 0, opacity: 1, rotateY: 0 });
      if (heroDescriptionRef.current) gsap.set(heroDescriptionRef.current, { x: 0, opacity: 1, rotateY: 0 });
      gsap.set(".hero-subtitle", { y: 0, opacity: 1 });
      gsap.set(".hero-cta", { scale: 1, opacity: 1 });
      const t = setTimeout(setupScrollAnimations, 100);
      return () => clearTimeout(t);
    }

    const t0 = setTimeout(() => setStartAnimation(true), 200);

    const t1 = setTimeout(() => {
      if (navRef.current) {
        gsap.fromTo(navRef.current,
          { y: -100, opacity: 0, backdropFilter: "blur(0px)" },
          { y: 0, opacity: 1, backdropFilter: "blur(20px)", duration: 0.6, ease: "power3.out" }
        );
        gsap.fromTo(".nav-item",
          { y: -24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power2.out", stagger: 0.05, delay: 0.15 }
        );
      }
    }, 1600);

    const t2 = setTimeout(() => {
      if (heroHeadingRef.current) {
        gsap.fromTo(heroHeadingRef.current,
          { x: -180, opacity: 0, rotateY: -12 },
          { x: 0, opacity: 1, rotateY: 0, duration: 0.8, ease: "power3.out" }
        );
      }
      if (heroDescriptionRef.current) {
        gsap.fromTo(heroDescriptionRef.current,
          { x: 180, opacity: 0, rotateY: 12 },
          { x: 0, opacity: 1, rotateY: 0, duration: 0.8, ease: "power3.out", delay: 0.12 }
        );
      }
      gsap.fromTo(".hero-subtitle",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.28 }
      );
      gsap.fromTo(".hero-cta",
        { scale: 0.82, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(1.7)", delay: 0.48 }
      );
    }, 2500);

    const t3 = setTimeout(setupScrollAnimations, 3800);

    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const services = HOME_SERVICES;

  /* shared style shorthands */
  const ff = "var(--font-body), system-ui, sans-serif";
  const ffd = "var(--font-display), system-ui, sans-serif";

  return (
    <>
      <div style={{ backgroundColor: "#0a0a0a" }}>

        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <div style={{
          height: "100vh", width: "100vw",
          position: "relative", overflow: "hidden",
          background: "linear-gradient(135deg, #080b12 0%, #0d1221 45%, #121828 100%)",
        }}>
          {/* Video */}
          <video
            style={{
              position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
              objectFit: "cover",
              clipPath: playIntro && !startAnimation
                ? "inset(75% 35% 5% 35% round 24px)"
                : "none",
              animation: playIntro && startAnimation
                ? "revealVideo 1.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards"
                : "none",
            }}
            autoPlay muted loop playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>

          {/* Multi-layer overlay */}
          <div style={{
            position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
            background: "linear-gradient(135deg, rgba(5,10,22,0.62) 0%, rgba(8,14,28,0.45) 50%, rgba(4,8,18,0.55) 100%)",
            zIndex: 1,
          }} />

          {/* Ambient orbs */}
          <div className="orb orb-blue" style={{ width: 520, height: 520, top: "-15%", left: "-10%", zIndex: 1 }} />
          <div className="orb orb-amber" style={{ width: 420, height: 420, top: "30%", right: "-8%", zIndex: 1 }} />

          {/* Particle canvas */}
          <ParticleCanvas />

          {/* Navigation */}
          <nav
            ref={navRef}
            style={{
              position: "fixed", top: 0, left: 0, width: "100%",
              zIndex: 1000,
              opacity: showHeroChrome ? 1 : 0,
              padding: "18px 48px",
              background: "rgba(6, 9, 18, 0.35)",
              backdropFilter: "blur(20px) saturate(1.4)",
              WebkitBackdropFilter: "blur(20px) saturate(1.4)",
              borderBottom: "1px solid rgba(110, 184, 232, 0.15)",
              boxShadow: "0 1px 40px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              maxWidth: "1400px", margin: "0 auto",
            }}>
              <div className="nav-item">
                <SiteLogo linkToHome={false} />
              </div>

              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                {(["Case studies", "Services", "About", "Contact"] as const).map((label) => {
                  const href =
                    label === "Case studies" ? "/case-studies"
                    : label === "Services" ? "#services"
                    : label === "About" ? "#about"
                    : "#contact";
                  const isAnchor = href.startsWith("#");
                  const inner = (
                    <div
                      className="nav-item nav-link-wrap"
                      style={{
                        fontFamily: ff,
                        fontSize: "15px",
                        fontWeight: "500",
                        color: "rgba(244, 241, 236, 0.82)",
                        cursor: "pointer",
                        padding: "9px 18px",
                        borderRadius: "8px",
                        border: "1px solid transparent",
                        letterSpacing: "0.01em",
                      }}
                      onMouseEnter={(e) => gsap.to(e.currentTarget, {
                        scale: 1.04, backgroundColor: "rgba(110,184,232,0.09)",
                        borderColor: "rgba(110,184,232,0.25)", color: "#b4daf4",
                        duration: 0.25, ease: "power2.out",
                      })}
                      onMouseLeave={(e) => gsap.to(e.currentTarget, {
                        scale: 1, backgroundColor: "transparent",
                        borderColor: "transparent", color: "rgba(244,241,236,0.82)",
                        duration: 0.25, ease: "power2.out",
                      })}
                    >
                      {label}
                    </div>
                  );
                  return isAnchor ? (
                    <a key={label} href={href} style={{ textDecoration: "none" }}>{inner}</a>
                  ) : (
                    <Link key={label} href={href} style={{ textDecoration: "none" }}>{inner}</Link>
                  );
                })}

                <Link href="/#contact" style={{ textDecoration: "none" }}>
                  <div
                    className="nav-item"
                    style={{
                      fontFamily: ff, fontSize: "15px", fontWeight: "600",
                      color: "#0a0a0a",
                      background: "linear-gradient(135deg, #c5e8fa 0%, #6eb8e8 100%)",
                      padding: "10px 22px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      boxShadow: "0 4px 18px rgba(110,184,232,0.35)",
                      marginLeft: "8px",
                      letterSpacing: "0.01em",
                    }}
                    onMouseEnter={(e) => gsap.to(e.currentTarget, {
                      scale: 1.05, boxShadow: "0 6px 28px rgba(110,184,232,0.55)",
                      duration: 0.25, ease: "power2.out",
                    })}
                    onMouseLeave={(e) => gsap.to(e.currentTarget, {
                      scale: 1, boxShadow: "0 4px 18px rgba(110,184,232,0.35)",
                      duration: 0.25, ease: "power2.out",
                    })}
                  >
                    Get Started
                  </div>
                </Link>
              </div>
            </div>
          </nav>

          {/* Hero content */}
          <div style={{
            position: "relative", zIndex: 10, height: "100vh",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "0 48px",
          }}>
            <div style={{
              maxWidth: "1400px", width: "100%",
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "80px", alignItems: "center",
            }}>
              {/* Left — heading */}
              <div ref={heroHeadingRef} style={{ opacity: showHeroChrome ? 1 : 0 }}>
                {/* Label */}
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "10px",
                  marginBottom: "28px",
                }}>
                  <div style={{ width: 28, height: 1, background: "linear-gradient(90deg, #6eb8e8, transparent)" }} />
                  <span style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: "0.68rem", fontWeight: 500,
                    letterSpacing: "0.22em", textTransform: "uppercase",
                    color: "#6eb8e8",
                  }}>
                    Technical Agency
                  </span>
                </div>

                <h1
                  className="hero-title-gradient"
                  style={{
                    fontFamily: ffd,
                    fontSize: "clamp(3rem, 6.5vw, 5.2rem)",
                    fontWeight: "800",
                    lineHeight: "1.06",
                    letterSpacing: "-0.02em",
                    marginBottom: "24px",
                  }}
                >
                  METASYS<br />CONSULTING
                </h1>

                <div
                  className="hero-subtitle"
                  style={{ marginBottom: "36px", opacity: showHeroChrome ? 1 : 0 }}
                >
                  <p style={{
                    fontFamily: ff,
                    fontSize: "1.2rem",
                    fontWeight: "400",
                    color: "rgba(180, 220, 245, 0.88)",
                    lineHeight: 1.6,
                    margin: 0,
                    letterSpacing: "0.01em",
                  }}>
                    Strategy, engineering, and AI —{" "}
                    <span style={{ color: "#6eb8e8", fontWeight: 500 }}>from idea to deployment.</span>
                  </p>
                </div>

                <div style={{ display: "flex", gap: 16, flexWrap: "wrap", opacity: showHeroChrome ? 1 : 0 }}>
                  <a href="#services" style={{ textDecoration: "none" }}>
                    <div
                      className="hero-cta"
                      style={{
                        fontFamily: ff, fontSize: "16px", fontWeight: "600",
                        color: "#0a0a0a",
                        background: "linear-gradient(135deg, #c5e8fa 0%, #6eb8e8 100%)",
                        padding: "15px 30px",
                        borderRadius: "11px",
                        cursor: "pointer",
                        boxShadow: "0 8px 28px rgba(110,184,232,0.45)",
                        display: "inline-block",
                        letterSpacing: "0.01em",
                      }}
                      onMouseEnter={(e) => gsap.to(e.currentTarget, {
                        scale: 1.05, boxShadow: "0 12px 38px rgba(110,184,232,0.65)",
                        duration: 0.28, ease: "power2.out",
                      })}
                      onMouseLeave={(e) => gsap.to(e.currentTarget, {
                        scale: 1, boxShadow: "0 8px 28px rgba(110,184,232,0.45)",
                        duration: 0.28, ease: "power2.out",
                      })}
                    >
                      Explore Services
                    </div>
                  </a>

                  <Link href="/case-studies" style={{ textDecoration: "none" }}>
                    <div
                      className="hero-cta"
                      style={{
                        fontFamily: ff, fontSize: "16px", fontWeight: "500",
                        color: "rgba(180, 220, 245, 0.92)",
                        background: "transparent",
                        padding: "15px 30px",
                        borderRadius: "11px",
                        cursor: "pointer",
                        border: "1px solid rgba(110,184,232,0.35)",
                        display: "inline-block",
                        letterSpacing: "0.01em",
                      }}
                      onMouseEnter={(e) => gsap.to(e.currentTarget, {
                        scale: 1.04, borderColor: "rgba(110,184,232,0.7)",
                        backgroundColor: "rgba(110,184,232,0.08)",
                        duration: 0.25, ease: "power2.out",
                      })}
                      onMouseLeave={(e) => gsap.to(e.currentTarget, {
                        scale: 1, borderColor: "rgba(110,184,232,0.35)",
                        backgroundColor: "transparent",
                        duration: 0.25, ease: "power2.out",
                      })}
                    >
                      View Case Studies
                    </div>
                  </Link>
                </div>
              </div>

              {/* Right — description panel */}
              <div ref={heroDescriptionRef} style={{ opacity: showHeroChrome ? 1 : 0 }}>
                <div className="glass-warm" style={{
                  padding: "44px 40px",
                  borderRadius: "20px",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
                  position: "relative", overflow: "hidden",
                }}>
                  {/* top shimmer accent */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, width: "100%", height: "3px",
                    background: "linear-gradient(90deg, transparent, #6eb8e8 35%, #4f8ef7 65%, transparent)",
                    opacity: 0.7,
                  }} />
                  <p style={{
                    fontFamily: ff,
                    fontSize: "clamp(1rem, 1.8vw, 1.22rem)",
                    lineHeight: "1.72",
                    color: "rgba(244, 241, 236, 0.88)",
                    margin: 0,
                    letterSpacing: "0.01em",
                  }}>
                    Metasys is a{" "}
                    <span style={{ color: "#b4daf4", fontWeight: "600" }}>technical agency</span>{" "}
                    that works with startups, scaleups, and enterprises to design, build, and ship digital products. We bring together full-stack engineering, AI integration, data science, and embedded systems expertise to help businesses move faster and build smarter — from early-stage MVPs to production-scale platforms.
                  </p>
                  {/* bottom decorative row */}
                  <div style={{
                    display: "flex", gap: 16, marginTop: 28, flexWrap: "wrap",
                  }}>
                    {["Full-Stack", "AI / LLM", "Data Science", "Embedded"].map((tag) => (
                      <span key={tag} className="sector-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* scroll indicator */}
          <div style={{
            position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
            zIndex: 20, display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
            opacity: showHeroChrome ? 0.55 : 0,
          }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.2em", color: "#6eb8e8", textTransform: "uppercase" }}>scroll</span>
            <div style={{
              width: 1, height: 32,
              background: "linear-gradient(180deg, #6eb8e8, transparent)",
              animation: "scrollPulse 1.6s ease-in-out infinite",
            }} />
          </div>
        </div>

        {/* ── About Section ──────────────────────────────────────────────── */}
        <section id="about" className="scroll-section" style={{
          padding: "130px 48px",
          background: "linear-gradient(160deg, #080b12 0%, #0e1526 55%, #121828 100%)",
        }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%" }}>
            {/* header */}
            <div style={{ textAlign: "center", marginBottom: "80px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 32, height: 1, background: "linear-gradient(90deg, transparent, #6eb8e8)" }} />
                <span className="section-label">Who We Are</span>
                <div style={{ width: 32, height: 1, background: "linear-gradient(90deg, #6eb8e8, transparent)" }} />
              </div>
              <h2 className="heading-gradient" style={{
                fontFamily: ffd,
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: "700",
                letterSpacing: "-0.02em",
                marginBottom: "24px",
                lineHeight: 1.12,
              }}>
                Our Vision
              </h2>
              <h3 style={{
                fontFamily: ff, fontSize: "1.45rem", fontWeight: "500",
                color: "rgba(228,218,196,0.75)", marginBottom: "28px",
              }}>
                Strategy and execution, under one roof
              </h3>
              <p style={{
                fontFamily: ff, fontSize: "1.15rem",
                color: "rgba(244,241,236,0.82)",
                maxWidth: "860px", margin: "0 auto",
                lineHeight: "1.75", letterSpacing: "0.01em",
              }}>
                We believe the best technical work happens when strategy and execution sit in the same room. Our team combines deep domain expertise across software, AI, and hardware to help clients navigate complex problems and build solutions that last.
              </p>
            </div>

            {/* mission card */}
            <div style={{
              background: "rgba(14, 20, 38, 0.55)",
              backdropFilter: "blur(18px) saturate(1.2)",
              padding: "56px 64px",
              borderRadius: "22px",
              border: "1px solid rgba(110,184,232,0.18)",
              textAlign: "center",
              marginBottom: "80px",
              boxShadow: "0 12px 50px rgba(0,0,0,0.35)",
              position: "relative", overflow: "hidden",
            }}>
              <div className="shimmer-line" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "3px" }} />
              <h3 style={{
                fontFamily: ffd, fontSize: "1.5rem", fontWeight: "700",
                color: "#b4daf4", marginBottom: "20px", letterSpacing: "-0.01em",
              }}>
                Our Core Mission
              </h3>
              <p style={{
                fontFamily: ff, fontSize: "1.35rem", fontWeight: "400",
                color: "rgba(244,241,236,0.88)", lineHeight: "1.65", margin: 0,
              }}>
                <span style={{ color: "#6eb8e8", fontWeight: "600" }}>Help businesses build faster, smarter, and at scale.</span>
              </p>
            </div>

            {/* expertise grid */}
            <h2 className="heading-gradient" style={{
              fontFamily: ffd, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: "700", letterSpacing: "-0.02em",
              marginBottom: "48px", textAlign: "center", lineHeight: 1.2,
            }}>
              Our Expertise
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(430px, 1fr))",
              gap: "32px",
              marginBottom: "72px",
            }}>
              {[
                {
                  title: "AI-Powered Product Development",
                  icon: "⬡",
                  description: "Build and scale AI-native products from MVP to production — LLM integrations, RAG pipelines, agents, and workflows that ship on real infrastructure, not slide decks.",
                },
                {
                  title: "Technical Transformation",
                  icon: "◈",
                  description: "Migrate legacy systems, modernize stacks, and reduce technical debt with clear roadmaps, incremental delivery, and engineering teams that own the outcome.",
                },
                {
                  title: "Full-Stack Engineering",
                  icon: "◻",
                  description: "End-to-end web, mobile, and API development with Next.js, React, Node, cloud deployment, and CI/CD — the stack clients post jobs for on Upwork.",
                },
                {
                  title: "Data & Business Intelligence",
                  icon: "◇",
                  description: "Dashboards, data pipelines, ETL, and predictive models in Python and R — turning raw data into decisions stakeholders can act on.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(12, 18, 34, 0.6)",
                    backdropFilter: "blur(14px)",
                    padding: "36px 40px",
                    borderRadius: "18px",
                    border: "1px solid rgba(110,184,232,0.14)",
                    position: "relative", overflow: "hidden",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(110,184,232,0.38)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.3), 0 0 0 1px rgba(110,184,232,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(110,184,232,0.14)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div style={{
                    position: "absolute", top: 0, left: 0, width: "100%", height: "3px",
                    background: "linear-gradient(90deg, #6eb8e8, #4f8ef7)",
                  }} />
                  <div style={{
                    fontFamily: ff, fontSize: "1.5rem", color: "#6eb8e8",
                    marginBottom: "14px", lineHeight: 1,
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{
                    fontFamily: ffd, fontSize: "1.15rem", fontWeight: "600",
                    color: "#b4daf4", marginBottom: "14px", letterSpacing: "-0.01em",
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontFamily: ff, color: "rgba(244,241,236,0.72)",
                    lineHeight: "1.7", fontSize: "0.98rem",
                  }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* tech stack */}
            <h2 className="heading-gradient" style={{
              fontFamily: ffd, fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: "700", letterSpacing: "-0.02em",
              marginBottom: "28px", textAlign: "center",
            }}>
              Our Tech Stack
            </h2>
            <div style={{
              background: "rgba(10, 16, 30, 0.55)",
              backdropFilter: "blur(14px)",
              padding: "40px",
              borderRadius: "18px",
              border: "1px solid rgba(110,184,232,0.14)",
              textAlign: "center",
              marginBottom: "72px",
            }}>
              <TechnologyLogos technologies={TECHNOLOGIES} />
              <p style={{
                fontFamily: ff, fontSize: "0.95rem",
                color: "rgba(244,241,236,0.55)", fontStyle: "italic", marginTop: 16,
              }}>
                Plus the tools your stack needs — we match the right tech to each project
              </p>
            </div>

            {/* CTA banner */}
            <div style={{
              background: "linear-gradient(135deg, rgba(110,184,232,0.1) 0%, rgba(79,142,247,0.08) 100%)",
              backdropFilter: "blur(16px)",
              padding: "52px 60px",
              borderRadius: "22px",
              border: "1px solid rgba(110,184,232,0.25)",
              textAlign: "center",
              boxShadow: "0 12px 40px rgba(110,184,232,0.08)",
              position: "relative", overflow: "hidden",
            }}>
              <div className="shimmer-line" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "2px" }} />
              <p style={{
                fontFamily: ff, fontSize: "1.2rem",
                color: "rgba(244,241,236,0.88)",
                lineHeight: "1.65", marginBottom: "28px",
              }}>
                Have a project in mind? Tell us what you&apos;re building — we&apos;ll show you how we can help you ship it,{" "}
                <span style={{ color: "#6eb8e8", fontWeight: "600" }}>schedule an introductory meeting with us today.</span>
              </p>
              <a href="#contact" style={{ textDecoration: "none" }}>
                <div
                  style={{
                    background: "linear-gradient(135deg, #c5e8fa, #6eb8e8)",
                    padding: "15px 32px",
                    borderRadius: "11px",
                    cursor: "pointer",
                    fontFamily: ff, fontSize: "1.05rem", fontWeight: "600",
                    color: "#0a0a0a",
                    display: "inline-block",
                    boxShadow: "0 8px 28px rgba(110,184,232,0.4)",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, boxShadow: "0 12px 38px rgba(110,184,232,0.62)", duration: 0.28 })}
                  onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, boxShadow: "0 8px 28px rgba(110,184,232,0.4)", duration: 0.28 })}
                >
                  Schedule Your Consultation
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ── Services Section ───────────────────────────────────────────── */}
        <section id="services" className="scroll-section" style={{
          padding: "130px 48px",
          background: "linear-gradient(160deg, #0d1120 0%, #111828 55%, #0e1522 100%)",
        }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%" }}>
            <div style={{ textAlign: "center", marginBottom: "72px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 32, height: 1, background: "linear-gradient(90deg, transparent, #6eb8e8)" }} />
                <span className="section-label">What We Do</span>
                <div style={{ width: 32, height: 1, background: "linear-gradient(90deg, #6eb8e8, transparent)" }} />
              </div>
              <h2 className="heading-gradient" style={{
                fontFamily: ffd,
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: "700", letterSpacing: "-0.02em",
                marginBottom: "24px", lineHeight: 1.12,
              }}>
                Our Services
              </h2>
              <p style={{
                fontFamily: ff, fontSize: "1.1rem",
                color: "rgba(244,241,236,0.72)",
                maxWidth: "760px", margin: "0 auto", lineHeight: "1.7",
              }}>
                AI, full-stack engineering, data science, embedded systems, and delivery — built for teams that need code shipped, not decks delivered.
              </p>
            </div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "36px",
            }}>
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        <ClientsSection />
        <ContactSection />

        <style jsx>{`
          @keyframes revealVideo {
            0%   { clip-path: inset(75% 35% 5% 35% round 24px); }
            40%  { clip-path: inset(35% 35% 35% 35% round 24px); }
            60%  { clip-path: inset(35% 35% 35% 35% round 24px); }
            100% { clip-path: inset(-5% -5% -5% -5% round 24px); }
          }
          @keyframes scrollPulse {
            0%, 100% { opacity: 0.4; transform: scaleY(1); }
            50%       { opacity: 0.9; transform: scaleY(1.15); }
          }
        `}</style>
      </div>
    </>
  );
}
