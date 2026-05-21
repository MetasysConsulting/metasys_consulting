"use client";

import type { CaseStudyPlatformPreview } from "@/data/case-study-types";

const ff = "var(--font-body), system-ui, sans-serif";
const mono = "var(--font-mono), ui-monospace, monospace";

type ResearchPlatformPreviewProps = {
  preview: CaseStudyPlatformPreview;
  accent: string;
};

export function ResearchPlatformPreview({ preview, accent }: ResearchPlatformPreviewProps) {
  return (
    <div
      style={{
        background: "rgba(10, 12, 24, 0.85)",
        border: `1px solid ${accent}33`,
        borderRadius: 16,
        overflow: "hidden",
        marginBottom: 48,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          padding: "16px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(0,0,0,0.25)",
        }}
      >
        <span style={{ fontFamily: ff, fontSize: "0.95rem", fontWeight: 600, color: "#e8e4f8" }}>
          {preview.title}
        </span>
        {preview.badge && (
          <span
            style={{
              fontFamily: mono,
              fontSize: "0.7rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: accent,
              background: `${accent}18`,
              border: `1px solid ${accent}44`,
              padding: "6px 12px",
              borderRadius: 999,
            }}
          >
            {preview.badge}
          </span>
        )}
      </div>

      <div style={{ padding: "20px 22px" }}>
        <p
          style={{
            fontFamily: mono,
            fontSize: "0.68rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
            marginBottom: 10,
          }}
        >
          Query
        </p>
        <p
          style={{
            fontFamily: ff,
            fontSize: "0.92rem",
            color: "rgba(244,241,236,0.9)",
            lineHeight: 1.6,
            marginBottom: 22,
            padding: "14px 16px",
            background: "rgba(255,255,255,0.04)",
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {preview.query}
        </p>

        <p
          style={{
            fontFamily: mono,
            fontSize: "0.68rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
            marginBottom: 12,
          }}
        >
          Agent pipeline
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
          {preview.pipelineSteps.map((step) => (
            <div
              key={step.label}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 8,
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontFamily: ff, fontSize: "0.85rem", color: "#d4cff0", fontWeight: 500 }}>
                  {step.label}
                </div>
                <div style={{ fontFamily: ff, fontSize: "0.78rem", color: "rgba(255,255,255,0.5)" }}>
                  {step.detail}
                </div>
              </div>
              <span
                style={{
                  fontFamily: mono,
                  fontSize: "0.75rem",
                  color: step.status === "ready" ? "#6ee7b7" : accent,
                  fontWeight: 600,
                }}
              >
                {step.duration}
              </span>
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: mono,
            fontSize: "0.68rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
            marginBottom: 10,
          }}
        >
          Grounded response
        </p>
        <p
          style={{
            fontFamily: ff,
            fontSize: "0.88rem",
            color: "rgba(244,241,236,0.82)",
            lineHeight: 1.65,
            marginBottom: preview.conflict ? 14 : 18,
          }}
        >
          {preview.response}
        </p>

        {preview.conflict && (
          <div
            style={{
              padding: "12px 14px",
              borderRadius: 10,
              background: "rgba(251, 146, 60, 0.12)",
              border: "1px solid rgba(251, 146, 60, 0.35)",
              marginBottom: 18,
            }}
          >
            <span
              style={{
                fontFamily: mono,
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#fb923c",
                marginRight: 8,
              }}
            >
              {preview.conflict.label}
            </span>
            <span style={{ fontFamily: ff, fontSize: "0.82rem", color: "rgba(255,255,255,0.8)" }}>
              {preview.conflict.text}
            </span>
          </div>
        )}

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {preview.sources.map((src) => (
            <span
              key={src}
              style={{
                fontFamily: ff,
                fontSize: "0.72rem",
                color: "rgba(244,241,236,0.75)",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "6px 10px",
                borderRadius: 8,
              }}
            >
              {src}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
