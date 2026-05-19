import React from "react";
import Link from "next/link";

export default function DataAnalyticsPage() {
  const services = [
    {
      title: "Python & R Analytics",
      description: "Statistical analysis, experimentation, and reporting with Python and R—built for the questions Upwork clients actually hire for."
    },
    {
      title: "Machine Learning & Predictive Modeling",
      description: "Classification, regression, forecasting, and NLP models trained on your data and validated before deployment."
    },
    {
      title: "Business Intelligence & Dashboards",
      description: "Power BI, Tableau, and custom dashboards that turn live data into decisions stakeholders can act on."
    },
    {
      title: "Data Pipelines & ETL",
      description: "Reliable ingestion, cleansing, and warehouse loads across SQL databases, cloud storage, and APIs."
    },
    {
      title: "Data Annotation & Labeling",
      description: "High-quality labeled datasets for computer vision, NLP, and fine-tuning—aligned with fast-growing Upwork demand."
    },
    {
      title: "Digital Marketing Analytics",
      description: "Campaign and SEO analytics with clear attribution, conversion tracking, and executive-ready reporting."
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
        <section style={{
          padding: '140px 40px 80px 40px',
          background: 'linear-gradient(135deg, #0a0a0a, #1a1a2e)',
          textAlign: 'center',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}>
            {/* Data Analytics Icon */}
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
                height: '80px',
                border: '4px solid #000',
                borderRadius: '12px',
                position: 'relative',
                background: 'rgba(0, 0, 0, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  alignItems: 'flex-end',
                }}>
                  <div style={{
                    width: '8px',
                    height: '30px',
                    background: '#000',
                    borderRadius: '2px',
                  }} />
                  <div style={{
                    width: '8px',
                    height: '20px',
                    background: '#000',
                    borderRadius: '2px',
                  }} />
                  <div style={{
                    width: '8px',
                    height: '40px',
                    background: '#000',
                    borderRadius: '2px',
                  }} />
                </div>
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
              Data Analytics & Science
            </h1>

            <p style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: '1.4rem',
              color: '#00ffff',
              marginBottom: '40px',
              fontWeight: '500',
            }}>
              Unlock Business Insights with Data Analytics Expertise from Metasys
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
                Data has evolved into a valuable currency, holding the potential to provide crucial insights vital for your organization&apos;s success, given proper analysis. At Metasys, our skilled team of data analysts can unleash your data&apos;s full potential using <span style={{ color: '#00ffff', fontWeight: '600' }}>advanced feature engineering, meticulous data cleansing, insightful analysis, and visualization</span>. With their extensive experience in data transformation, we empower you to harness the true value of your data.
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
              Our Data Analytics Services
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
              gap: '40px',
            }}>
              {services.map((service, index) => (
                <div
                  key={index}
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
                Data Analytics Solutions by Metasys Consulting
              </h2>
              
              <p style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: '1.2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '40px',
                lineHeight: '1.6',
              }}>
                Ready to transform your data into actionable insights? Let our expert team help you unlock the full potential of your data with cutting-edge analytics and visualization.
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
              }}>
                Setup A Free Consultation
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 