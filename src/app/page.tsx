"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { consumeSkipHomeIntro } from "@/lib/home-intro";
import { ServiceCard } from "@/components/ServiceCard";
import { TechnologyLogos } from "@/components/TechnologyLogos";
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
      setPlayIntro(false);
      setStartAnimation(true);

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

    setPlayIntro(true);

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

  const clients = [
    { name: "Barclays", industry: "Financial Services" },
    { name: "Everstell", industry: "Technology" },
    { name: "Al Jazeera", industry: "Media & Broadcasting" },
    { name: "EY", industry: "Professional Services" },
    { name: "Prepay Nation", industry: "Fintech" },
    { name: "Innova Analytics", industry: "Data Analytics" },
    { name: "TimeBox", industry: "Software Solutions" },
    { name: "Odessa", industry: "Technology" },
    { name: "Trusum Visions", industry: "Business Solutions" }
  ];

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
              {/* Logo */}
              <div 
                className="nav-item"
                style={{
                  fontFamily: 'var(--font-display), Georgia, serif',
                  fontSize: '24px',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #e8e4dc, #b8a88a)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 20px rgba(200, 190, 170, 0.3)',
                }}
              >
                Metasys Consulting
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
                <Link href="/contact" style={{ textDecoration: 'none' }}>
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

                {/* CTA Button */}
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
                  fontFamily: 'var(--font-display), Georgia, serif',
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
                    fontSize: '1.5rem',
                    fontWeight: '400',
                    color: '#d4cfc4',
                    marginBottom: '30px',
                    opacity: showHeroChrome ? 1 : 0,
                  }}
                >
                  Digital Agency & Product Innovation Organization
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
                  Metasys is a <span style={{ color: '#d4cfc4', fontWeight: '600' }}>digital agency and product innovation organization</span> that works with ambitious businesses and brands on strategy, design, and technology.
                  <br /><br />
                  We create captivating experiences for our clients and their customers by leveraging our design-driven approach to produce <span style={{ color: '#d4cfc4', fontWeight: '600' }}>leading-edge digital solutions</span> that drive growth and maximize efficiency.
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
                fontFamily: 'var(--font-display), Georgia, serif',
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
                Discover Comprehensive Insights About Metasys Consulting Services
              </h3>
              <p style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '1.3rem',
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '900px',
                margin: '0 auto 40px auto',
                lineHeight: '1.7',
              }}>
                Metasys, a Management and Technology Consulting firm, is dedicated to empowering individuals and teams, fostering high-performing cross-functional collaborations, and enabling mastery in their respective fields. We prioritize supporting seamless transformations in alignment with emerging technologies and market dynamics.
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
                marginBottom: '30px',
              }}>
                <span style={{ color: '#d4cfc4', fontWeight: '600' }}>Help businesses enhance their agility and productivity.</span>
              </p>
              <p style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '1.6',
                maxWidth: '800px',
                margin: '0 auto',
              }}>
                We offer clients a diverse array of services aimed at facilitating their success and expansion. From project planning and business analyses to crisis management, digital transformation, and supply chain optimization, we stand ready to support our clients wherever and whenever they need us.
              </p>
            </div>

            {/* Our Expertise */}
            <div style={{
              marginBottom: '60px',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-display), Georgia, serif',
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
                    title: "Digital Products Growth",
                    description: "Experienced in propelling the expansion of digital products by devising strategic blueprints, fine-tuning user engagement tactics, and harnessing data analytics to amplify product efficacy and market penetration."
                  },
                  {
                    title: "Change Management",
                    description: "Experienced in spearheading and guiding organizational change initiatives, with a talent for crafting and executing plans that foster seamless transitions, reduce disturbances, and bolster stakeholder engagement amidst substantial transformations."
                  },
                  {
                    title: "Product Development",
                    description: "Experienced in building products from Inception. Proficient in managing the entire product development lifecycle, from ideation and conceptualization to market launch, emphasizing user-centric design, agile methodologies, and cross-functional collaboration."
                  },
                  {
                    title: "People Analytics",
                    description: "Skilled in using People Analytics for digital transformation, enhancing workforce planning, engagement, and organizational effectiveness. Expert in integrating advanced tools to align HR processes with digital innovation for growth and adaptability."
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
                fontFamily: 'var(--font-display), Georgia, serif',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #e8e4dc, #b8a88a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '30px',
                textAlign: 'center',
              }}>
                Technologies We Work With
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
                  And many more cutting-edge tools to deliver exceptional results
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
                If you&apos;re interested in discovering how consulting services can contribute to your or your business&apos;s growth, 
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
                fontFamily: 'var(--font-display), Georgia, serif',
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
                Comprehensive solutions spanning data analytics, project management, product innovation, talent acquisition, and web development.
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

        {/* Clients Section */}
        <section className="scroll-section" style={{
          padding: '120px 40px',
          background: 'linear-gradient(135deg, #16213e, #0a0a0a)',
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            width: '100%',
            textAlign: 'center',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #e8e4dc, #b8a88a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '30px',
            }}>
              Our Prestigious Clients
            </h2>
            <p style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: '1.3rem',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '60px',
            }}>
              Trusted by world-class organizations across finance, technology, media, and analytics
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px',
              alignItems: 'stretch',
            }}>
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="client-logo"
                  style={{
                    background: 'rgba(0, 20, 40, 0.4)',
                    backdropFilter: 'blur(15px)',
                    padding: '40px 30px',
                    borderRadius: '20px',
                    border: '1px solid rgba(200, 190, 170, 0.2)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '120px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      y: -8,
                      scale: 1.03,
                      boxShadow: '0 20px 40px rgba(200, 190, 170, 0.2)',
                      borderColor: 'rgba(200, 190, 170, 0.4)',
                      duration: 0.3,
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      y: 0,
                      scale: 1,
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      borderColor: 'rgba(200, 190, 170, 0.2)',
                      duration: 0.3,
                    });
                  }}
                >
                  {/* Accent line */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '3px',
                    background: 'linear-gradient(90deg, #d4cfc4, #0080ff)',
                  }} />
                  
                  {/* Client Name */}
                  <div style={{
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '8px',
                    textAlign: 'center',
                  }}>
                    {client.name}
                  </div>
                  
                  {/* Industry */}
                  <div style={{
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                    fontSize: '0.9rem',
                    fontWeight: '400',
                    color: '#d4cfc4',
                    textAlign: 'center',
                    opacity: 0.8,
                  }}>
                    {client.industry}
                  </div>

                  {/* Logo placeholder area */}
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, rgba(200, 190, 170, 0.1), rgba(0, 128, 255, 0.1))',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(200, 190, 170, 0.2)',
                  }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      background: 'linear-gradient(45deg, #d4cfc4, #0080ff)',
                      borderRadius: '4px',
                      opacity: 0.6,
                    }} />
                  </div>
                </div>
              ))}
            </div>


          </div>
        </section>

        {/* Contact Section */}
        <section className="scroll-section" style={{
          padding: '120px 40px',
          background: 'linear-gradient(135deg, #0a0a0a, #1a1a2e)',
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            width: '100%',
            textAlign: 'center',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #e8e4dc, #b8a88a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '30px',
            }}>
              Let&apos;s Transform Your Business
            </h2>
            <p style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: '1.3rem',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '60px',
              maxWidth: '600px',
              margin: '0 auto 60px auto',
            }}>
              Ready to unlock your organization&apos;s full potential? Schedule a consultation with our experts.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px',
              marginBottom: '60px',
            }}>
              {[
                { service: "Data Analytics", duration: "25 min" },
                { service: "Project Management", duration: "25 min" },
                { service: "Product Management", duration: "25 min" },
                { service: "Talent Resourcing", duration: "25 min" },
                { service: "Web Development", duration: "25 min" }
              ].map((item, index) => (
                <div key={index} style={{
                  background: 'linear-gradient(135deg, #e8e4dc, #b8a88a)',
                  padding: '20px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                  fontWeight: '600',
                  color: '#000',
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1.05,
                    boxShadow: '0 10px 30px rgba(200, 190, 170, 0.4)',
                    duration: 0.3,
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1,
                    boxShadow: 'none',
                    duration: 0.3,
                  });
                }}
                >
                  <div style={{ fontSize: '1.2rem', marginBottom: '5px' }}>
                    {item.service}
                  </div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                    {item.duration}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              background: 'rgba(0, 20, 40, 0.3)',
              backdropFilter: 'blur(15px)',
              padding: '40px',
              borderRadius: '20px',
              border: '1px solid rgba(200, 190, 170, 0.2)',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '1.8rem',
                color: '#d4cfc4',
                marginBottom: '20px',
              }}>
                Contact Information
              </h3>
              <p style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '10px',
              }}>
                📧 consultmetasys@gmail.com
              </p>
              <p style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '20px',
              }}>
                📞 Tel. 123-456-7890
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                marginTop: '30px',
              }}>
                {['LinkedIn', 'Instagram', 'Facebook', 'Twitter'].map((social, index) => (
                  <div key={index} style={{
                    background: 'linear-gradient(135deg, #e8e4dc, #b8a88a)',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                    fontWeight: '600',
                    color: '#000',
                    fontSize: '0.9rem',
                  }}>
                    {social}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

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
