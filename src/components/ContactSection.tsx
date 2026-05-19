"use client";

import { useState, type CSSProperties, type FocusEvent } from "react";
import { BOOKING_URL, CONTACT_EMAIL } from "@/lib/site-config";

const fieldStyle: CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  background: "rgba(200, 190, 170, 0.08)",
  border: "1px solid rgba(200, 190, 170, 0.25)",
  borderRadius: "10px",
  color: "white",
  fontFamily: "var(--font-body), system-ui, sans-serif",
  fontSize: "1rem",
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};

const labelStyle: CSSProperties = {
  fontFamily: "var(--font-body), system-ui, sans-serif",
  fontSize: "0.9rem",
  fontWeight: 600,
  color: "#d4cfc4",
  display: "block",
  marginBottom: "8px",
};

function focusField(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.target.style.borderColor = "#d4cfc4";
  e.target.style.boxShadow = "0 0 0 3px rgba(200, 190, 170, 0.15)";
}

function blurField(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.target.style.borderColor = "rgba(200, 190, 170, 0.25)";
  e.target.style.boxShadow = "none";
}

type ContactSectionProps = {
  showHeading?: boolean;
};

export function ContactSection({ showHeading = true }: ContactSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Website inquiry from ${name}`;
    const body = `${message}\n\n—\n${name}\n${email}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="scroll-section"
      style={{
        padding: "120px 40px",
        background: "linear-gradient(135deg, #0a0a0a, #1a1a2e)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
        {showHeading && (
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
                fontWeight: 700,
                background: "linear-gradient(135deg, #e8e4dc, #b8a88a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "16px",
              }}
            >
              Let&apos;s Talk
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "1.15rem",
                color: "rgba(255, 255, 255, 0.75)",
                maxWidth: "520px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Tell us about your project — we&apos;ll get back within one business day.
            </p>
          </div>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            alignItems: "start",
          }}
        >
          {/* Message form */}
          <div
            style={{
              background: "rgba(0, 20, 40, 0.4)",
              backdropFilter: "blur(15px)",
              padding: "40px",
              borderRadius: "20px",
              border: "1px solid rgba(200, 190, 170, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "22px" }}
            >
              <div>
                <label htmlFor="contact-name" style={labelStyle}>
                  Your name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={fieldStyle}
                  onFocus={focusField}
                  onBlur={blurField}
                />
              </div>

              <div>
                <label htmlFor="contact-email" style={labelStyle}>
                  Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={fieldStyle}
                  onFocus={focusField}
                  onBlur={blurField}
                />
              </div>

              <div>
                <label htmlFor="contact-message" style={labelStyle}>
                  Your message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What are you building? Timeline, goals, anything that helps us prepare."
                  style={{ ...fieldStyle, resize: "vertical", minHeight: "140px" }}
                  onFocus={focusField}
                  onBlur={blurField}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: "linear-gradient(135deg, #e8e4dc, #b8a88a)",
                  padding: "16px 28px",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "#0a0a0a",
                  marginTop: "4px",
                }}
              >
                Send message
              </button>

              {sent && (
                <p
                  style={{
                    fontFamily: "var(--font-body), system-ui, sans-serif",
                    fontSize: "0.9rem",
                    color: "rgba(255, 255, 255, 0.7)",
                    margin: 0,
                  }}
                >
                  Opening your email app… If it didn&apos;t open, write us at{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    style={{ color: "#d4cfc4" }}
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
              )}
            </form>
          </div>

          {/* Discovery call + email */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div
              style={{
                background: "rgba(0, 20, 40, 0.35)",
                backdropFilter: "blur(15px)",
                padding: "36px",
                borderRadius: "20px",
                border: "1px solid rgba(200, 190, 170, 0.2)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "1.35rem",
                  fontWeight: 600,
                  color: "#d4cfc4",
                  marginBottom: "12px",
                }}
              >
                Free 30-Min Discovery Call
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "1rem",
                  color: "rgba(255, 255, 255, 0.8)",
                  lineHeight: 1.65,
                  marginBottom: "24px",
                }}
              >
                Tell us about your project and we&apos;ll figure out the best path
                forward together.
              </p>
              <a
                href={BOOKING_URL}
                target={BOOKING_URL.startsWith("mailto") ? undefined : "_blank"}
                rel={BOOKING_URL.startsWith("mailto") ? undefined : "noopener noreferrer"}
                style={{
                  display: "inline-block",
                  textDecoration: "none",
                  background: "linear-gradient(135deg, #e8e4dc, #b8a88a)",
                  padding: "14px 28px",
                  borderRadius: "12px",
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#0a0a0a",
                  textAlign: "center",
                }}
              >
                Schedule a Call
              </a>
            </div>

            <div
              style={{
                padding: "24px 28px",
                borderRadius: "16px",
                border: "1px solid rgba(200, 190, 170, 0.15)",
                background: "rgba(200, 190, 170, 0.06)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "0.85rem",
                  color: "rgba(255, 255, 255, 0.55)",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Email
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  color: "#d4cfc4",
                  textDecoration: "none",
                }}
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
