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

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  /** Default true so SSR/first paint hides hero chrome until client knows to skip. */
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
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section as Element,
              start: "top 80%",
              end: "bottom 20%",
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

      gsap.utils.toArray(".client-logo").forEach((logo) => {
        gsap.fromTo(
          logo as gsap.TweenTarget,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
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

      if (navRef.current) {
        gsap.set(navRef.current, {
          y: 0,
          opacity: 1,
          backdropFilter: "blur(20px)",
        });
      }
      gsap.set(".nav-item", { y: 0, opacity: 1 });
      if (heroHeadingRef.current) {
        gsap.set(heroHeadingRef.current, { x: 0, opacity: 1, rotateY: 0 });
      }
      if (heroDescriptionRef.current) {
        gsap.set(heroDescriptionRef.current, { x: 0, opacity: 1, rotateY: 0 });
      }
      gsap.set(".hero-subtitle", { y: 0, opacity: 1 });
      gsap.set(".hero-cta", { scale: 1, opacity: 1 });

      const scrollTimer = setTimeout(setupScrollAnimations, 100);
      return () => clearTimeout(scrollTimer);
    }

    // Start video reveal animation (full page load / refresh only)
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 200);

    // Animate navigation after video reveal completes (timings aligned to faster hero reveal)
    const navTimer = setTimeout(() => {
      if (navRef.current) {
        gsap.fromTo(navRef.current, 
          { 
            y: -100, 
            opacity: 0,
            backdropFilter: "blur(0px)",
          },
          { 
            y: 0, 
            opacity: 1,
            backdropFilter: "blur(20px)",
            duration: 0.6,
            ease: "power3.out",
          }
        );

        // Animate nav items with stagger
        gsap.fromTo(".nav-item", 
          { 
            y: -30, 
            opacity: 0,
          },
          { 
            y: 0, 
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.05,
            delay: 0.15,
          }
        );
      }
    }, 1600);

    // Animate hero content after nav completes
    const heroTimer = setTimeout(() => {
      // Heading from left
      if (heroHeadingRef.current) {
        gsap.fromTo(heroHeadingRef.current,
          {
            x: -200,
            opacity: 0,
            rotateY: -15,
          },
          {
            x: 0,
            opacity: 1,
            rotateY: 0,
            duration: 0.75,
            ease: "power3.out",
          }
        );
      }

      // Description from right
      if (heroDescriptionRef.current) {
        gsap.fromTo(heroDescriptionRef.current,
          {
            x: 200,
            opacity: 0,
            rotateY: 15,
          },
          {
            x: 0,
            opacity: 1,
            rotateY: 0,
            duration: 0.75,
            ease: "power3.out",
            delay: 0.15,
          }
        );
      }

      // Animate the subtitle and CTA
      gsap.fromTo(".hero-subtitle",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.3,
        }
      );

      gsap.fromTo(".hero-cta",
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.45,
          ease: "back.out(1.7)",
          delay: 0.5,
        }
      );
    }, 2500);

    const scrollTimer = setTimeout(setupScrollAnimations, 3800);

    return () => {
      clearTimeout(timer);
      clearTimeout(navTimer);
      clearTimeout(heroTimer);
      clearTimeout(scrollTimer);
    };
  }, []);

  const services = HOME_SERVICES;

  return (
    <>
      <div style={{ backgroundColor: '#0a0a0a' }}>
        {/* Hero Section */}
        <div style={{ 
          height: '100vh', 
          width: '100vw', 
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #101827 45%, #1a1a2e 100%)',
        }}>
          {/* Full-size background video with animated clip-path */}
          <video 
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              clipPath:
                playIntro && !startAnimation
                  ? 'inset(75% 35% 5% 35% round 24px)'
                  : 'none',
              animation:
                playIntro && startAnimation
                  ? 'revealVideo 1.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards'
                  : 'none',
            }}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay for better text readability */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(0, 20, 40, 0.4), rgba(0, 0, 0, 0.3))',
            zIndex: 1,
          }} />

          {/* Futuristic Navigation */}
          <nav 
            ref={navRef}
            style={{
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100%',
              zIndex: 1000,
              opacity: showHeroChrome ? 1 : 0,
              padding: '20px 40px',
              background: 'rgba(0, 20, 40, 0.1)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(200, 190, 170, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              maxWidth: '1400px',
              margin: '0 auto',
            }}>
              <div className="nav-item">
                <SiteLogo linkToHome={false} />
              </div>

              {/* Navigation Items */}
              <div style={{
                display: 'flex',
                gap: '40px',
                alignItems: 'center',
              }}>
                <Link href="/case-studies" style={{ textDecoration: "none" }}>
                  <div
                    className="nav-item"
                    style={{
                      fontFamily: 'var(--font-body), system-ui, sans-serif',
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "rgba(255, 255, 255, 0.9)",
                      cursor: "pointer",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      border: "1px solid transparent",
                      transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, {
                        scale: 1.05,
                        backgroundColor: "rgba(200, 190, 170, 0.1)",
                        borderColor: "rgba(200, 190, 170, 0.3)",
                        color: "#d4cfc4",
                        duration: 0.3,
                        ease: "power2.out",
                      });
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, {
                        scale: 1,
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        color: "rgba(255, 255, 255, 0.9)",
                        duration: 0.3,
                        ease: "power2.out",
                      });
                    }}
                  >
                    Case studies
                  </div>
                </Link>

                {/* Services - Scroll to services section */}
                <div
                  className="nav-item"
                  style={{
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                    fontSize: '16px',
                    fontWeight: '500',
                    color: 'rgba(255, 255, 255, 0.9)',
                    cursor: 'pointer',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    border: '1px solid transparent',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onClick={() => {
                    document.querySelector('.scroll-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1.05,
                      backgroundColor: 'rgba(200, 190, 170, 0.1)',
                      borderColor: 'rgba(200, 190, 170, 0.3)',
                      color: '#d4cfc4',
                      duration: 0.3,
                      ease: "power2.out"
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1,
                      backgroundColor: 'transparent',
                      borderColor: 'transparent',
                      color: 'rgba(255, 255, 255, 0.9)',
                      duration: 0.3,
                      ease: "power2.out"
                    });
                  }}
                >
                  Services
                </div>

                {/* About - Scroll to about section */}
                <div
                  className="nav-item"
                  style={{
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                    fontSize: '16px',
                    fontWeight: '500',
                    color: 'rgba(255, 255, 255, 0.9)',
                    cursor: 'pointer',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    border: '1px solid transparent',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onClick={() => {
                    const aboutSection = document.querySelector('.scroll-section');
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1.05,
                      backgroundColor: 'rgba(200, 190, 170, 0.1)',
                      borderColor: 'rgba(200, 190, 170, 0.3)',
                      color: '#d4cfc4',
                      duration: 0.3,
                      ease: "power2.out"
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1,
                      backgroundColor: 'transparent',
                      borderColor: 'transparent',
                      color: 'rgba(255, 255, 255, 0.9)',
                      duration: 0.3,
                      ease: "power2.out"
                    });
                  }}
                >
                  About
                </div>

                {/* Contact - Link to contact page */}
                <Link href="/#contact" style={{ textDecoration: 'none' }}>
                  <div
                    className="nav-item"
                    style={{
                      fontFamily: 'var(--font-body), system-ui, sans-serif',
                      fontSize: '16px',
                      fontWeight: '500',
                      color: 'rgba(255, 255, 255, 0.9)',
                      cursor: 'pointer',
                      padding: '10px 20px',
                      borderRadius: '8px',
                      border: '1px solid transparent',
                      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, {
                        scale: 1.05,
                        backgroundColor: 'rgba(200, 190, 170, 0.1)',
                        borderColor: 'rgba(200, 190, 170, 0.3)',
                        color: '#d4cfc4',
                        duration: 0.3,
                        ease: "power2.out"
                      });
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, {
                        scale: 1,
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                        color: 'rgba(255, 255, 255, 0.9)',
                        duration: 0.3,
                        ease: "power2.out"
                      });
                    }}
                  >
                    Contact
                  </div>
                </Link>

                <Link href="/#contact" style={{ textDecoration: 'none' }}>
                  <div
                    className="nav-item"
                    style={{
                      fontFamily: 'var(--font-body), system-ui, sans-serif',
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#000',
                      background: 'linear-gradient(135deg, #e8e4dc, #b8a88a)',
                      padding: '12px 24px',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      border: 'none',
                      boxShadow: '0 4px 15px rgba(200, 190, 170, 0.3)',
                      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    }}
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, {
                        scale: 1.05,
                        boxShadow: '0 6px 25px rgba(200, 190, 170, 0.5)',
                        duration: 0.3,
                        ease: "power2.out"
                      });
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, {
                        scale: 1,
                        boxShadow: '0 4px 15px rgba(200, 190, 170, 0.3)',
                        duration: 0.3,
                        ease: "power2.out"
                      });
                    }}
                  >
                    Get Started
                  </div>
                </Link>
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <div style={{
            position: 'relative',
            zIndex: 10,
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 40px',
          }}>
            <div style={{
              maxWidth: '1400px',
              width: '100%',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'center',
            }}>
              {/* Left Side - Heading */}
              <div ref={heroHeadingRef} style={{ opacity: showHeroChrome ? 1 : 0 }}>
                <h1 style={{
                  fontFamily: 'var(--font-display), system-ui, sans-serif',
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  fontWeight: '900',
                  lineHeight: '1.1',
                  background: 'linear-gradient(135deg, #f5f3ef, #e8e4dc, #b8a88a)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 40px rgba(200, 190, 170, 0.4)',
                  marginBottom: '20px',
                }}>
                  METASYS<br />
                  CONSULTING
                </h1>
                
                <div 
                  className="hero-subtitle"
                  style={{
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                    marginBottom: '30px',
                    opacity: showHeroChrome ? 1 : 0,
                  }}
                >
                  <p style={{
                    fontSize: '1.25rem',
                    fontWeight: '400',
                    color: '#d4cfc4',
                    lineHeight: 1.55,
                    margin: 0,
                  }}>
                    Strategy, engineering, and AI — from idea to deployment.
                  </p>
                </div>

                <div
                  className="hero-cta"
                  style={{
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#000',
                    background: 'linear-gradient(135deg, #e8e4dc, #b8a88a)',
                    padding: '16px 32px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    border: 'none',
                    boxShadow: '0 8px 25px rgba(200, 190, 170, 0.4)',
                    display: 'inline-block',
                    opacity: showHeroChrome ? 1 : 0,
                    transform: 'perspective(1000px)',
                  }}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1.05,
                      boxShadow: '0 12px 35px rgba(200, 190, 170, 0.6)',
                      duration: 0.3,
                      ease: "power2.out"
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1,
                      boxShadow: '0 8px 25px rgba(200, 190, 170, 0.4)',
                      duration: 0.3,
                      ease: "power2.out"
                    });
                  }}
                >
                  Explore Our Services
                </div>
              </div>

              {/* Right Side - Description */}
              <div ref={heroDescriptionRef} style={{ opacity: showHeroChrome ? 1 : 0 }}>
                <p style={{
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                  fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.9)',
                  textAlign: 'justify',
                  background: 'rgba(0, 20, 40, 0.3)',
                  backdropFilter: 'blur(10px)',
                  padding: '40px',
                  borderRadius: '16px',
                  border: '1px solid rgba(200, 190, 170, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                }}>
                  Metasys is a <span style={{ color: '#d4cfc4', fontWeight: '600' }}>technical agency</span> that works with startups, scaleups, and enterprises to design, build, and ship digital products. We bring together full-stack engineering, AI integration, data science, and embedded systems expertise to help businesses move faster and build smarter — from early-stage MVPs to production-scale platforms.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="scroll-section" style={{
          padding: '120px 40px',
          background: 'linear-gradient(135deg, #0a0a0a, #1a1a2e)',
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            width: '100%',
          }}>
            {/* Vision Header */}
            <div style={{
              textAlign: 'center',
              marginBottom: '80px',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-display), system-ui, sans-serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #e8e4dc, #b8a88a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '30px',
              }}>
                Our Vision
              </h2>
              <h3 style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '1.8rem',
                fontWeight: '600',
                color: '#d4cfc4',
                marginBottom: '30px',
              }}>
                Strategy and execution, under one roof
              </h3>
              <p style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '1.3rem',
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '900px',
                margin: '0 auto 40px auto',
                lineHeight: '1.7',
              }}>
                We believe the best technical work happens when strategy and execution sit in the same room. Our team combines deep domain expertise across software, AI, and hardware to help clients navigate complex problems and build solutions that last.
              </p>
            </div>

            {/* Mission Statement */}
            <div style={{
              background: 'rgba(0, 20, 40, 0.4)',
              backdropFilter: 'blur(15px)',
              padding: '60px',
              borderRadius: '20px',
              border: '1px solid rgba(200, 190, 170, 0.2)',
              textAlign: 'center',
              marginBottom: '80px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '2rem',
                fontWeight: '700',
                color: '#d4cfc4',
                marginBottom: '30px',
              }}>
                Our Core Mission
              </h3>
              <p style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '1.4rem',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.7',
                margin: 0,
              }}>
                <span style={{ color: '#d4cfc4', fontWeight: '600' }}>Help businesses build faster, smarter, and at scale.</span>
              </p>
            </div>

            {/* Our Expertise */}
            <div style={{
              marginBottom: '60px',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-display), system-ui, sans-serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #e8e4dc, #b8a88a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '50px',
                textAlign: 'center',
              }}>
                Our Expertise
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
                gap: '40px',
              }}>
                {[
                  {
                    title: "AI-Powered Product Development",
                    description: "Build and scale AI-native products from MVP to production — LLM integrations, RAG pipelines, agents, and workflows that ship on real infrastructure, not slide decks."
                  },
                  {
                    title: "Technical Transformation",
                    description: "Migrate legacy systems, modernize stacks, and reduce technical debt with clear roadmaps, incremental delivery, and engineering teams that own the outcome."
                  },
                  {
                    title: "Full-Stack Engineering",
                    description: "End-to-end web, mobile, and API development with Next.js, React, Node, cloud deployment, and CI/CD — the stack clients post jobs for on Upwork."
                  },
                  {
                    title: "Data & Business Intelligence",
                    description: "Dashboards, data pipelines, ETL, and predictive models in Python and R — turning raw data into decisions stakeholders can act on."
                  }
                ].map((expertise, index) => (
                  <div key={index} style={{
                    background: 'rgba(0, 20, 40, 0.3)',
                    backdropFilter: 'blur(10px)',
                    padding: '40px',
                    borderRadius: '16px',
                    border: '1px solid rgba(200, 190, 170, 0.2)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '4px',
                      background: 'linear-gradient(90deg, #d4cfc4, #0080ff)',
                    }} />
                    <h3 style={{
                      fontFamily: 'var(--font-body), system-ui, sans-serif',
                      fontSize: '1.6rem',
                      fontWeight: '600',
                      color: '#d4cfc4',
                      marginBottom: '20px',
                    }}>
                      {expertise.title}
                    </h3>
                    <p style={{
                      fontFamily: 'var(--font-body), system-ui, sans-serif',
                      color: 'rgba(255, 255, 255, 0.8)',
                      lineHeight: '1.6',
                      fontSize: '1.1rem',
                    }}>
                      {expertise.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div style={{
              marginBottom: '60px',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-display), system-ui, sans-serif',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #e8e4dc, #b8a88a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '30px',
                textAlign: 'center',
              }}>
                Our Tech Stack
              </h2>

              <div style={{
                background: 'rgba(0, 20, 40, 0.3)',
                backdropFilter: 'blur(10px)',
                padding: '40px',
                borderRadius: '16px',
                border: '1px solid rgba(200, 190, 170, 0.2)',
                textAlign: 'center',
              }}>
                <TechnologyLogos technologies={TECHNOLOGIES} />
                <p style={{
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontStyle: 'italic',
                }}>
                  Plus the tools your stack needs — we match the right tech to each project
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(200, 190, 170, 0.1), rgba(0, 128, 255, 0.1))',
              backdropFilter: 'blur(15px)',
              padding: '50px',
              borderRadius: '20px',
              border: '1px solid rgba(200, 190, 170, 0.3)',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(200, 190, 170, 0.1)',
            }}>
              <p style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '1.3rem',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.6',
                marginBottom: '30px',
              }}>
                Have a project in mind? Tell us what you&apos;re building — we&apos;ll show you how we can help you ship it, 
                <span style={{ color: '#d4cfc4', fontWeight: '600' }}> schedule an introductory meeting with us today.</span>
              </p>
              <div style={{
                background: 'linear-gradient(135deg, #e8e4dc, #b8a88a)',
                padding: '16px 32px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '1.2rem',
                fontWeight: '600',
                color: '#000',
                display: 'inline-block',
                boxShadow: '0 8px 25px rgba(200, 190, 170, 0.4)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.05,
                  boxShadow: '0 12px 35px rgba(200, 190, 170, 0.6)',
                  duration: 0.3,
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  boxShadow: '0 8px 25px rgba(200, 190, 170, 0.4)',
                  duration: 0.3,
                });
              }}
              >
                Schedule Your Consultation
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="scroll-section" style={{
          padding: '120px 40px',
          background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            width: '100%',
          }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '80px',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-display), system-ui, sans-serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #e8e4dc, #b8a88a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '30px',
              }}>
                Our Services
              </h2>
              <p style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '1.3rem',
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '800px',
                margin: '0 auto',
              }}>
                AI, full-stack engineering, data science, embedded systems, and delivery — built for teams that need code shipped, not decks delivered.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '40px',
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
            0% {
              clip-path: inset(75% 35% 5% 35% round 24px);
            }
            40% {
              clip-path: inset(35% 35% 35% 35% round 24px);
            }
            60% {
              clip-path: inset(35% 35% 35% 35% round 24px);
            }
            100% {
              clip-path: inset(-5% -5% -5% -5% round 24px);
            }
          }
        `}</style>
      </div>
    </>
  );
}
