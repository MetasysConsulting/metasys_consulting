"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { AppNavigation } from "@/components/site/AppNavigation";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TalentResourcingPage() {
  useEffect(() => {
    // Animate sections on scroll
    gsap.utils.toArray(".scroll-section").forEach((section) => {
      gsap.fromTo(section as gsap.TweenTarget,
        {
          y: 100,
          opacity: 0,
        },
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

    // Service features animation
    gsap.utils.toArray(".service-feature").forEach((feature) => {
      gsap.fromTo(feature as gsap.TweenTarget,
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: feature as Element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const services = [
    {
      title: "Professional Search",
      description: "Discover the most suitable individuals for the appropriate positions to execute your strategy effectively."
    },
    {
      title: "Interim Executives & Professionals",
      description: "Seize the opportunity to adapt swiftly and propel forward by harnessing the capabilities of interim talent."
    },
    {
      title: "Recruitment Process Outsourcing",
      description: "Beyond traditional Recruitment Process Outsourcing (RPO), we bring tangible talent results to fruition."
    }
  ];

  return (
    <>
      <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
        <AppNavigation variant="static" />

        {/* Hero Section */}
        <section className="scroll-section" style={{
          padding: '140px 40px 80px 40px',
          background: 'linear-gradient(135deg, #0a0a0a, #1a1a2e)',
          textAlign: 'center',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}>
            {/* Talent Resourcing Icon */}
            <div style={{
              width: '120px',
              height: '120px',
              margin: '0 auto 40px auto',
              background: 'linear-gradient(135deg, #c5e8fa, #6eb8e8)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 40px rgba(110, 184, 232, 0.3)',
            }}>
              <div style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-end',
              }}>
                <div style={{
                  width: '24px',
                  height: '40px',
                  background: '#000',
                  borderRadius: '12px 12px 4px 4px',
                }} />
                <div style={{
                  width: '24px',
                  height: '52px',
                  background: '#000',
                  borderRadius: '12px 12px 4px 4px',
                }} />
                <div style={{
                  width: '24px',
                  height: '36px',
                  background: '#000',
                  borderRadius: '12px 12px 4px 4px',
                }} />
              </div>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display), system-ui, sans-serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #e8f4fc, #c5e8fa, #6eb8e8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '30px',
              textShadow: '0 0 40px rgba(110, 184, 232, 0.4)',
            }}>
              Talent Resourcing Excellence
            </h1>

            <p style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: '1.4rem',
              color: '#6eb8e8',
              marginBottom: '40px',
              fontWeight: '500',
            }}>
              Enhance Your Talent Resourcing with Metasys Consulting Solutions
            </p>

            <div style={{
              background: 'rgba(0, 20, 40, 0.4)',
              backdropFilter: 'blur(15px)',
              padding: '50px',
              borderRadius: '20px',
              border: '1px solid rgba(110, 184, 232, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              textAlign: 'left',
            }}>
              <p style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.7',
                marginBottom: '30px',
              }}>
                Metasys facilitates businesses in <span style={{ color: '#6eb8e8', fontWeight: '600' }}>efficiently finding and onboarding new team members</span> in critical global locations. Organizations can leverage an unparalleled network of recruitment specialists to identify the perfect candidate tailored to their precise requirements, including industry, geographical region, and past expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section style={{
          padding: '80px 40px',
          background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-display), system-ui, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #c5e8fa, #6eb8e8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '60px',
              textAlign: 'center',
            }}>
              Our Talent Resourcing Services
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
              gap: '40px',
            }}>
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-feature"
                  style={{
                    background: 'rgba(0, 20, 40, 0.4)',
                    backdropFilter: 'blur(15px)',
                    padding: '40px',
                    borderRadius: '20px',
                    border: '1px solid rgba(110, 184, 232, 0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      y: -5,
                      scale: 1.02,
                      boxShadow: '0 15px 40px rgba(110, 184, 232, 0.2)',
                      duration: 0.3,
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      y: 0,
                      scale: 1,
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                      duration: 0.3,
                    });
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    background: 'linear-gradient(90deg, #6eb8e8, #4f8ef7)',
                  }} />

                  <h3 style={{
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                    fontSize: '1.8rem',
                    fontWeight: '600',
                    color: '#6eb8e8',
                    marginBottom: '20px',
                  }}>
                    {service.title}
                  </h3>

                  <p style={{
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.6',
                    fontSize: '1.1rem',
                  }}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{
          padding: '80px 40px',
          background: 'linear-gradient(135deg, #16213e, #0a0a0a)',
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(110, 184, 232, 0.1), rgba(0, 128, 255, 0.1))',
              backdropFilter: 'blur(15px)',
              padding: '60px',
              borderRadius: '20px',
              border: '1px solid rgba(110, 184, 232, 0.3)',
              boxShadow: '0 8px 32px rgba(110, 184, 232, 0.1)',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-display), system-ui, sans-serif',
                fontSize: '2.5rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #c5e8fa, #6eb8e8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '30px',
              }}>
                Elevate Your Talent Acquisition with Metasys Consulting Solutions
              </h2>

              <p style={{
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '40px',
                lineHeight: '1.6',
              }}>
                Ready to find and onboard the perfect talent for your organization? Let our expert network of recruitment specialists help you identify candidates tailored to your precise requirements.
              </p>

              <div style={{
                background: 'linear-gradient(135deg, #c5e8fa, #6eb8e8)',
                padding: '20px 40px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontFamily: 'var(--font-body), system-ui, sans-serif',
                fontSize: '1.3rem',
                fontWeight: '700',
                color: '#000',
                display: 'inline-block',
                boxShadow: '0 8px 25px rgba(110, 184, 232, 0.4)',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.05,
                  boxShadow: '0 12px 35px rgba(110, 184, 232, 0.6)',
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  boxShadow: '0 8px 25px rgba(110, 184, 232, 0.4)',
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
              >
                Setup A Free Consultation
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 