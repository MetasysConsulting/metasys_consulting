"use client";

import { useState, type CSSProperties, type FocusEvent } from "react";
import { CONTACT_EMAIL } from "@/lib/site-config";

const fieldStyle: CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  background: "rgba(140, 200, 235, 0.08)",
  border: "1px solid rgba(140, 200, 235, 0.25)",
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
  color: "#9ec8e8",
  display: "block",
  marginBottom: "8px",
};

function focusField(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.target.style.borderColor = "#9ec8e8";
  e.target.style.boxShadow = "0 0 0 3px rgba(140, 200, 235, 0.15)";
}

function blurField(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.target.style.borderColor = "rgba(140, 200, 235, 0.25)";
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
      <div style={{ maxWidth: "640px", margin: "0 auto", width: "100%" }}>
        {showHeading && (
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2
              style={{
                fontFamily: "var(--font-display), system-ui, sans-serif",
                fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
                fontWeight: 700,
                background: "linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)",
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
              Send us a message and we&apos;ll get back to you.
            </p>
          </div>
        )}

        <div
          style={{
            background: "rgba(0, 20, 40, 0.4)",
            backdropFilter: "blur(15px)",
            padding: "40px",
            borderRadius: "20px",
            border: "1px solid rgba(140, 200, 235, 0.2)",
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
                  background: "#2563eb",
                  padding: "16px 28px",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "#ffffff",
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
                    style={{ color: "#9ec8e8" }}
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
              )}
            </form>

            <p
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontSize: "0.95rem",
                color: "rgba(255, 255, 255, 0.6)",
                marginTop: "28px",
                marginBottom: 0,
                textAlign: "center",
              }}
            >
              Or email us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{ color: "#9ec8e8", textDecoration: "none" }}
              >
                {CONTACT_EMAIL}
              </a>
            </p>
        </div>
      </div>
    </section>
  );
}
