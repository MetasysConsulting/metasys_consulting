"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WebDevelopmentPage() {
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
      title: "Custom Web Development",
      description: "We adeptly handle inventory management and office process transitions to the cloud."
    },
    {
      title: "Mobile App Development",
      description: "We design intuitive and engaging mobile apps for a superior user experience."
    },
    {
      title: "SEO and Analytics",
      description: "Our SEO services are designed to increase your online visibility and drive more traffic to your site."
    }
  ];

  return (
    <>
      {/* Load futuristic fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
        {/* Navigation */}
        <nav style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          zIndex: 1000,
          padding: '20px 40px',
          background: 'rgba(0, 20, 40, 0.9)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1400px',
            margin: '0 auto',
          }}>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none' }}>
              <div style={{
                fontFamily: '"Orbitron", monospace',
                fontSize: '24px',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #00ffff, #0080ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
                cursor: 'pointer',
              }}>
                METASYS CONSULTING
              </div>
            </Link>

            {/* Back to Services */}
            <Link href="/" style={{ textDecoration: 'none' }}>
              <div style={{
                fontFamily: '"Rajdhani", sans-serif',
                fontSize: '16px',
                fontWeight: '600',
                color: '#000',
                background: 'linear-gradient(135deg, #00ffff, #0080ff)',
                padding: '12px 24px',
                borderRadius: '12px',
                cursor: 'pointer',
                border: 'none',
                boxShadow: '0 4px 15px rgba(0, 255, 255, 0.3)',
                transition: 'all 0.3s ease',
              }}>
                ← Back to Home
              </div>
            </Link>
          </div>
        </nav>

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
            {/* Web Development Icon */}
            <div style={{
              width: '120px',
              height: '120px',
              margin: '0 auto 40px auto',
              background: 'linear-gradient(135deg, #00ffff, #0080ff)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 40px rgba(0, 255, 255, 0.3)',
            }}>
              <div style={{
                width: '80px',
                height: '60px',
                background: '#000',
                borderRadius: '8px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px',
                fontWeight: 'bold',
                fontFamily: 'monospace',
                color: '#00ffff',
              }}>
                {'</>'}
              </div>
            </div>

            <h1 style={{
              fontFamily: '"Orbitron", monospace',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #00ffff, #ffffff, #0080ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '30px',
              textShadow: '0 0 40px rgba(0, 255, 255, 0.4)',
            }}>
              Professional Web Development
            </h1>

            <p style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: '1.4rem',
              color: '#00ffff',
              marginBottom: '40px',
              fontWeight: '500',
            }}>
              Metasys Consulting is the Leading Destination for Professional Web Development Services!
            </p>

            <div style={{
              background: 'rgba(0, 20, 40, 0.4)',
              backdropFilter: 'blur(15px)',
              padding: '50px',
              borderRadius: '20px',
              border: '1px solid rgba(0, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              textAlign: 'left',
            }}>
              <p style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.7',
                marginBottom: '30px',
              }}>
                Our approach to web development is <span style={{ color: '#00ffff', fontWeight: '600' }}>comprehensive, encompassing everything</span> from web design and content to coding and markup. As a group of seasoned professionals working together, we take great pride in our teamwork. Our objective is to develop your website such that it not only ranks higher in search engines but also provides your users with the best possible experience.
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
              fontFamily: '"Orbitron", monospace',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #00ffff, #0080ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '60px',
              textAlign: 'center',
            }}>
              Web Development Services by Metasys Consulting
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
                    border: '1px solid rgba(0, 255, 255, 0.2)',
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
                      boxShadow: '0 15px 40px rgba(0, 255, 255, 0.2)',
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
                    background: 'linear-gradient(90deg, #00ffff, #0080ff)',
                  }} />

                  <h3 style={{
                    fontFamily: '"Rajdhani", sans-serif',
                    fontSize: '1.8rem',
                    fontWeight: '600',
                    color: '#00ffff',
                    marginBottom: '20px',
                  }}>
                    {service.title}
                  </h3>

                  <p style={{
                    fontFamily: '"Space Grotesk", sans-serif',
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
              background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 128, 255, 0.1))',
              backdropFilter: 'blur(15px)',
              padding: '60px',
              borderRadius: '20px',
              border: '1px solid rgba(0, 255, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 255, 255, 0.1)',
            }}>
              <h2 style={{
                fontFamily: '"Orbitron", monospace',
                fontSize: '2.5rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #00ffff, #0080ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '30px',
              }}>
                Professional Web Development by Metasys Consulting
              </h2>

              <p style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '40px',
                lineHeight: '1.6',
              }}>
                Ready to develop your website with cutting-edge technology and superior user experience? Let our expert team create a comprehensive web solution that ranks higher in search engines.
              </p>

              <div style={{
                background: 'linear-gradient(135deg, #00ffff, #0080ff)',
                padding: '20px 40px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontFamily: '"Rajdhani", sans-serif',
                fontSize: '1.3rem',
                fontWeight: '700',
                color: '#000',
                display: 'inline-block',
                boxShadow: '0 8px 25px rgba(0, 255, 255, 0.4)',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.05,
                  boxShadow: '0 12px 35px rgba(0, 255, 255, 0.6)',
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  boxShadow: '0 8px 25px rgba(0, 255, 255, 0.4)',
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