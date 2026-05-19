"use client";

import { gsap } from "gsap";
import { ClientLogo } from "@/components/ClientLogo";
import { CLIENTS } from "@/data/clients";

export function ClientsSection() {
  return (
    <section
      className="scroll-section"
      style={{
        padding: "120px 40px",
        background: "linear-gradient(135deg, #16213e, #0a0a0a)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display), system-ui, sans-serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 700,
            background: "linear-gradient(135deg, #e8e4dc, #b8a88a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "30px",
          }}
        >
          Our Prestigious Clients
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            fontSize: "1.3rem",
            color: "rgba(255, 255, 255, 0.8)",
            marginBottom: "60px",
          }}
        >
          Trusted by world-class organizations across finance, technology, media,
          and analytics
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            alignItems: "stretch",
          }}
        >
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="client-logo"
              style={{
                background: "rgba(0, 20, 40, 0.4)",
                backdropFilter: "blur(15px)",
                padding: "40px 30px",
                borderRadius: "20px",
                border: "1px solid rgba(200, 190, 170, 0.2)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                minHeight: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  y: -8,
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(200, 190, 170, 0.2)",
                  borderColor: "rgba(200, 190, 170, 0.4)",
                  duration: 0.3,
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  y: 0,
                  scale: 1,
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  borderColor: "rgba(200, 190, 170, 0.2)",
                  duration: 0.3,
                });
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "3px",
                  background: "linear-gradient(90deg, #d4cfc4, #0080ff)",
                }}
              />

              <div
                style={{
                  marginBottom: "20px",
                  minHeight: 56,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ClientLogo name={client.name} logo={client.logo} size={56} />
              </div>

              <div
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "6px",
                  textAlign: "center",
                }}
              >
                {client.name}
              </div>

              <div
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 400,
                  color: "#d4cfc4",
                  textAlign: "center",
                  opacity: 0.8,
                }}
              >
                {client.industry}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
