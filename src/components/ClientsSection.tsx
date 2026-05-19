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
        background: "linear-gradient(180deg, #0f0f0f 0%, #0a0a0a 100%)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <p className="section-label" style={{ textAlign: "center", marginBottom: "16px" }}>
          Trusted partners
        </p>
        <h2
          className="brand-grad-text"
          style={{
            fontFamily: "var(--font-display), system-ui, sans-serif",
            fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Organizations we&apos;ve worked with
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            fontSize: "1.05rem",
            color: "rgba(255, 255, 255, 0.65)",
            textAlign: "center",
            maxWidth: "560px",
            margin: "0 auto 56px",
            lineHeight: 1.65,
          }}
        >
          Finance, media, fintech, and technology teams who rely on us for delivery.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "20px",
          }}
        >
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="client-logo"
              style={{
                background: "#141414",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                padding: "28px 20px 22px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "14px",
                transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  borderColor: "rgba(37, 99, 235, 0.5)",
                  boxShadow: "0 8px 32px rgba(37, 99, 235, 0.12)",
                  y: -4,
                  duration: 0.25,
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 0 0 rgba(0,0,0,0)",
                  y: 0,
                  duration: 0.25,
                });
              }}
            >
              <ClientLogo name={client.name} logo={client.logo} size={48} />
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#f8fafc",
                    marginBottom: "4px",
                  }}
                >
                  {client.name}
                </div>
                <div
                  className="font-mono"
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 500,
                    color: "rgba(255, 255, 255, 0.45)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {client.industry}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
