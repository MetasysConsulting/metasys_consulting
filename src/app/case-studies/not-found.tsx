import Link from "next/link";
import { AppNavigation } from "@/components/site/AppNavigation";

export default function CaseStudyNotFound() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", minHeight: "100vh" }}>
      <AppNavigation variant="static" />
      <section
        style={{
          padding: "160px 40px",
          background: "linear-gradient(135deg, #0a0a0a, #1a1a2e)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "2.5rem",
            background: "linear-gradient(135deg, #e8e4dc, #b8a88a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "16px",
          }}
        >
          Case study not found
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            color: "rgba(255, 255, 255, 0.7)",
            marginBottom: "32px",
          }}
        >
          This project may have moved or the link is incorrect.
        </p>
        <Link href="/case-studies" style={{ textDecoration: "none" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #e8e4dc, #b8a88a)",
              padding: "14px 28px",
              borderRadius: "12px",
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontWeight: "600",
              color: "#000",
              display: "inline-block",
            }}
          >
            View all case studies
          </div>
        </Link>
      </section>
    </div>
  );
}
