"use client";

import { CaseStudyVideoEmbed } from "@/components/case-studies/CaseStudyVideoEmbed";

type CaseStudyVideoBlockProps = {
  title: string;
  description: string;
  embedId: string;
  url: string;
  /** Wider layout for hero placement */
  variant?: "hero" | "inline";
};

const ff = "var(--font-body), system-ui, sans-serif";
const ffd = "var(--font-display), system-ui, sans-serif";
const mono = "var(--font-mono), ui-monospace, monospace";

export function CaseStudyVideoBlock({
  title,
  description,
  embedId,
  url,
  variant = "inline",
}: CaseStudyVideoBlockProps) {
  const isHero = variant === "hero";

  return (
    <div
      style={{
        marginTop: isHero ? 40 : 32,
        marginBottom: isHero ? 0 : 40,
        maxWidth: isHero ? "100%" : undefined,
        background: "rgba(10, 15, 28, 0.55)",
        backdropFilter: "blur(14px)",
        borderRadius: 16,
        border: "1px solid rgba(110, 184, 232, 0.18)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "2.5px",
          background: "linear-gradient(90deg, #6eb8e8, #4f8ef7 60%, transparent)",
        }}
      />
      <h2
        style={{
          fontFamily: ffd,
          fontSize: isHero ? "clamp(1.25rem, 2.5vw, 1.6rem)" : "clamp(1.4rem, 2.5vw, 1.9rem)",
          fontWeight: 700,
          letterSpacing: "-0.015em",
          color: "#eef6fc",
          margin: 0,
          padding: isHero ? "24px 24px 10px" : "28px 28px 12px",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontFamily: ff,
          fontSize: "0.95rem",
          color: "rgba(244, 241, 236, 0.72)",
          lineHeight: 1.65,
          margin: isHero ? "0 24px 16px" : "0 28px 20px",
        }}
      >
        {description}
      </p>
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
          background: "#000",
        }}
      >
        <CaseStudyVideoEmbed embedId={embedId} title={title} />
      </div>
      <p style={{ margin: "12px 24px 20px", fontFamily: mono, fontSize: "0.75rem" }}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "rgba(110,184,232,0.85)", textDecoration: "none" }}
        >
          Watch on YouTube →
        </a>
      </p>
    </div>
  );
}
