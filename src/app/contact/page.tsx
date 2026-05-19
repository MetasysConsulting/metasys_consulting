"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

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

    // Animate contact cards
    gsap.utils.toArray(".contact-card").forEach((card) => {
      gsap.fromTo(card as gsap.TweenTarget,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card as Element,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We&apos;ll get back to you soon.');
  };

  const services = [
    "Data Analytics & Science",
    "Project Management", 
    "Product Management",
    "Talent Resourcing",
    "Web Development",
    "General Inquiry"
  ];

  return (
    <>
      <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
        <SiteHeader />

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
            <h1 style={{
              fontFamily: 'var(--font-display), Georgia, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #f5f3ef, #e8e4dc, #b8a88a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '30px',
              textShadow: '0 0 40px rgba(200, 190, 170, 0.4)',
            }}>
              Get In Touch With Us
            </h1>

            <p style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: '1.4rem',
              color: '#d4cfc4',
              marginBottom: '40px',
              fontWeight: '500',
            }}>
              Ready to Transform Your Business? Let&apos;s Start the Conversation
            </p>

            <p style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}>
              Whether you&apos;re looking to optimize operations, drive digital transformation, or explore new market opportunities, our team is ready to help you succeed.
            </p>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section style={{
          padding: '80px 40px',
          background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
              marginBottom: '80px',
            }}>
              {/* Email Card */}
              <div className="contact-card" style={{
                background: 'rgba(0, 20, 40, 0.4)',
                backdropFilter: 'blur(15px)',
                padding: '40px',
                borderRadius: '20px',
                border: '1px solid rgba(200, 190, 170, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #d4cfc4, #0080ff)',
                }} />
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px',
                }}>📧</div>
                <h3 style={{
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#d4cfc4',
                  marginBottom: '15px',
                }}>Email Us</h3>
                <p style={{
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '1.1rem',
                }}>consultmetasys@gmail.com</p>
              </div>

              {/* Phone Card */}
              <div className="contact-card" style={{
                background: 'rgba(0, 20, 40, 0.4)',
                backdropFilter: 'blur(15px)',
                padding: '40px',
                borderRadius: '20px',
                border: '1px solid rgba(200, 190, 170, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #d4cfc4, #0080ff)',
                }} />
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px',
                }}>📞</div>
                <h3 style={{
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#d4cfc4',
                  marginBottom: '15px',
                }}>Call Us</h3>
                <p style={{
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '1.1rem',
                }}>Tel. 123-456-7890</p>
              </div>

              {/* Schedule Card */}
              <div className="contact-card" style={{
                background: 'rgba(0, 20, 40, 0.4)',
                backdropFilter: 'blur(15px)',
                padding: '40px',
                borderRadius: '20px',
                border: '1px solid rgba(200, 190, 170, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #d4cfc4, #0080ff)',
                }} />
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '20px',
                }}>📅</div>
                <h3 style={{
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#d4cfc4',
                  marginBottom: '15px',
                }}>Schedule Meeting</h3>
                <p style={{
                  fontFamily: 'var(--font-body), system-ui, sans-serif',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '1.1rem',
                }}>25 min consultation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="scroll-section" style={{
          padding: '80px 40px',
          background: 'linear-gradient(135deg, #16213e, #0a0a0a)',
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            <div style={{
              background: 'rgba(0, 20, 40, 0.4)',
              backdropFilter: 'blur(15px)',
              padding: '60px',
              borderRadius: '20px',
              border: '1px solid rgba(200, 190, 170, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-display), Georgia, serif',
                fontSize: '2.5rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #e8e4dc, #b8a88a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '30px',
                textAlign: 'center',
              }}>
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                {/* Name and Email Row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '20px',
                }}>
                  <div>
                    <label style={{
                      fontFamily: 'var(--font-body), system-ui, sans-serif',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: '#d4cfc4',
                      display: 'block',
                      marginBottom: '8px',
                    }}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '15px',
                        background: 'rgba(200, 190, 170, 0.1)',
                        border: '1px solid rgba(200, 190, 170, 0.3)',
                        borderRadius: '8px',
                        color: 'white',
                        fontFamily: 'var(--font-body), system-ui, sans-serif',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'all 0.3s ease',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#d4cfc4';
                        e.target.style.boxShadow = '0 0 10px rgba(200, 190, 170, 0.3)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(200, 190, 170, 0.3)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div>
                    <label style={{
                      fontFamily: 'var(--font-body), system-ui, sans-serif',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: '#d4cfc4',
                      display: 'block',
                      marginBottom: '8px',
                    }}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '15px',
                        background: 'rgba(200, 190, 170, 0.1)',
                        border: '1px solid rgba(200, 190, 170, 0.3)',
                        borderRadius: '8px',
                        color: 'white',
                        fontFamily: 'var(--font-body), system-ui, sans-serif',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'all 0.3s ease',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#d4cfc4';
                        e.target.style.boxShadow = '0 0 10px rgba(200, 190, 170, 0.3)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(200, 190, 170, 0.3)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                {/* Company and Service Row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '20px',
                }}>
                  <div>
                    <label style={{
                      fontFamily: 'var(--font-body), system-ui, sans-serif',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: '#d4cfc4',
                      display: 'block',
                      marginBottom: '8px',
                    }}>Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '15px',
                        background: 'rgba(200, 190, 170, 0.1)',
                        border: '1px solid rgba(200, 190, 170, 0.3)',
                        borderRadius: '8px',
                        color: 'white',
                        fontFamily: 'var(--font-body), system-ui, sans-serif',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'all 0.3s ease',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#d4cfc4';
                        e.target.style.boxShadow = '0 0 10px rgba(200, 190, 170, 0.3)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(200, 190, 170, 0.3)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div>
                    <label style={{
                      fontFamily: 'var(--font-body), system-ui, sans-serif',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      color: '#d4cfc4',
                      display: 'block',
                      marginBottom: '8px',
                    }}>Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '15px',
                        background: 'rgba(200, 190, 170, 0.1)',
                        border: '1px solid rgba(200, 190, 170, 0.3)',
                        borderRadius: '8px',
                        color: 'white',
                        fontFamily: 'var(--font-body), system-ui, sans-serif',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'all 0.3s ease',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#d4cfc4';
                        e.target.style.boxShadow = '0 0 10px rgba(200, 190, 170, 0.3)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(200, 190, 170, 0.3)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service} style={{ background: '#1a1a2e', color: 'white' }}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#d4cfc4',
                    display: 'block',
                    marginBottom: '8px',
                  }}>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell us about your project and how we can help..."
                    style={{
                      width: '100%',
                      padding: '15px',
                      background: 'rgba(200, 190, 170, 0.1)',
                      border: '1px solid rgba(200, 190, 170, 0.3)',
                      borderRadius: '8px',
                      color: 'white',
                      fontFamily: 'var(--font-body), system-ui, sans-serif',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      resize: 'vertical',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#d4cfc4';
                      e.target.style.boxShadow = '0 0 10px rgba(200, 190, 170, 0.3)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(200, 190, 170, 0.3)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #e8e4dc, #b8a88a)',
                    padding: '20px 40px',
                    borderRadius: '12px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: '#000',
                    boxShadow: '0 8px 25px rgba(200, 190, 170, 0.4)',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginTop: '20px',
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
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Social Media Links */}
        <section style={{
          padding: '80px 40px',
          background: 'linear-gradient(135deg, #0a0a0a, #1a1a2e)',
          textAlign: 'center',
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            <h3 style={{
              fontFamily: 'var(--font-body), system-ui, sans-serif',
              fontSize: '2rem',
              fontWeight: '700',
              color: '#d4cfc4',
              marginBottom: '30px',
            }}>
              Follow Us
            </h3>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '30px',
              flexWrap: 'wrap',
            }}>
              {['LinkedIn', 'Instagram', 'Facebook', 'Twitter'].map((social) => (
                <div
                  key={social}
                  style={{
                    background: 'linear-gradient(135deg, #e8e4dc, #b8a88a)',
                    padding: '15px 30px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body), system-ui, sans-serif',
                    fontWeight: '600',
                    color: '#000',
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(200, 190, 170, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1.1,
                      boxShadow: '0 8px 25px rgba(200, 190, 170, 0.5)',
                      duration: 0.3,
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      scale: 1,
                      boxShadow: '0 4px 15px rgba(200, 190, 170, 0.3)',
                      duration: 0.3,
                    });
                  }}
                >
                  {social}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 