"use client";

import type { CaseStudyRich } from "@/data/case-study-types";
import { ResearchPlatformPreview } from "@/components/case-studies/ResearchPlatformPreview";
import { CaseStudyVideoBlock } from "@/components/case-studies/CaseStudyVideoBlock";

const ff = "var(--font-body), system-ui, sans-serif";
const ffd = "var(--font-display), system-ui, sans-serif";
const mono = "var(--font-mono), ui-monospace, monospace";

const ACCENTS = {
  blue: "#6eb8e8",
  violet: "#a78bfa",
};

type CaseStudyRichSectionsProps = {
  rich: CaseStudyRich;
};

function sectionTitleStyle(accent: string) {
  return {
    fontFamily: ffd,
    fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
    fontWeight: 700,
    letterSpacing: "-0.015em",
    background: `linear-gradient(135deg, #e8f4fc 0%, ${accent}88 50%, ${accent} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "22px",
  } as const;
}

const bodyText = {
  fontFamily: ff,
  fontSize: "1.05rem",
  color: "rgba(244, 241, 236, 0.78)",
  lineHeight: 1.78,
  marginBottom: "16px",
} as const;

const cardShell = (accent: string) => ({
  background: "rgba(10, 15, 28, 0.7)",
  backdropFilter: "blur(14px)",
  padding: "24px 28px",
  borderRadius: "16px",
  border: `1px solid ${accent}22`,
  position: "relative" as const,
  overflow: "hidden" as const,
});

function CardAccent({ accent }: { accent: string }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "2.5px",
        background: `linear-gradient(90deg, ${accent}, transparent 70%)`,
      }}
    />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: mono,
        fontSize: "0.72rem",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.45)",
        marginBottom: 14,
      }}
    >
      {children}
    </p>
  );
}

export function CaseStudyRichSections({ rich }: CaseStudyRichSectionsProps) {
  const accent = ACCENTS[rich.accent ?? "blue"];
  const sectionTitle = sectionTitleStyle(accent);

  return (
    <>
      {rich.executiveSummary && rich.executiveSummary.length > 0 && (
        <>
          <h2 style={{ ...sectionTitle, marginTop: 8 }}>Executive summary</h2>
          {rich.executiveSummary.map((p, i) => (
            <p key={`exec-${i}`} style={bodyText}>
              {p}
            </p>
          ))}
        </>
      )}

      {rich.dataFoundation && rich.dataFoundation.length > 0 && (
        <>
          <h2 style={{ ...sectionTitle, marginTop: 48 }}>Data foundation</h2>
          {rich.dataFoundation.map((p, i) => (
            <p key={`df-${i}`} style={bodyText}>
              {p}
            </p>
          ))}
        </>
      )}

      {rich.unifiedSchemaNote && rich.unifiedSchemaNote.length > 0 && (
        <>
          <h2 style={{ ...sectionTitle, marginTop: 48 }}>One model, fifty-one jurisdictions</h2>
          {rich.unifiedSchemaNote.map((p, i) => (
            <p key={`us-${i}`} style={bodyText}>
              {p}
            </p>
          ))}
        </>
      )}

      {rich.platformPreview && (
        <>
          <SectionLabel>Live platform preview</SectionLabel>
          <ResearchPlatformPreview preview={rich.platformPreview} accent={accent} />
        </>
      )}

      {rich.video &&
        (rich.video.placeholder || !rich.video.embedId) && (
        <CaseStudyVideoBlock
          variant="inline"
          title={rich.video.title}
          description={rich.video.description}
          embedId={rich.video.embedId}
          url={rich.video.url}
          placeholder={rich.video.placeholder}
          accent={accent}
        />
      )}

      {rich.keyQuestions && rich.keyQuestions.length > 0 && (
        <>
          <h2 style={sectionTitle}>{rich.keyQuestionsTitle ?? "Questions MediRate answers"}</h2>
          <p style={{ ...bodyText, marginBottom: 24 }}>
            The platform was designed around the strategic questions teams ask every day:
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
              marginBottom: 48,
            }}
          >
            {rich.keyQuestions.map((q, i) => (
              <div key={`q-${i}`} style={{ ...cardShell(accent), padding: "20px 22px" }}>
                <CardAccent accent={accent} />
                <span
                  style={{
                    fontFamily: mono,
                    fontSize: "0.72rem",
                    color: accent,
                    fontWeight: 600,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  style={{
                    fontFamily: ff,
                    fontSize: "0.92rem",
                    color: "rgba(244,241,236,0.82)",
                    lineHeight: 1.55,
                    margin: "10px 0 0",
                  }}
                >
                  {q}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      {rich.problemSolution && rich.problemSolution.length > 0 && (
        <>
          <h2 style={sectionTitle}>Challenge → platform response</h2>
          <div style={{ overflowX: "auto", marginBottom: 48 }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: ff,
                fontSize: "0.95rem",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px 18px",
                      color: accent,
                      fontWeight: 600,
                      borderBottom: `1px solid ${accent}44`,
                      width: "42%",
                    }}
                  >
                    Challenge
                  </th>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "14px 18px",
                      color: accent,
                      fontWeight: 600,
                      borderBottom: `1px solid ${accent}44`,
                    }}
                  >
                    {rich.problemSolutionResponseLabel ?? "Platform response"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rich.problemSolution.map((row, i) => (
                  <tr key={`ps-${i}`}>
                    <td
                      style={{
                        padding: "16px 18px",
                        color: "rgba(244,241,236,0.75)",
                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                        verticalAlign: "top",
                      }}
                    >
                      {row.challenge}
                    </td>
                    <td
                      style={{
                        padding: "16px 18px",
                        color: "rgba(244,241,236,0.9)",
                        borderBottom: "1px solid rgba(255,255,255,0.08)",
                        verticalAlign: "top",
                      }}
                    >
                      {row.response}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {rich.howItWorks && rich.howItWorks.length > 0 && (
        <>
          <SectionLabel>How it works</SectionLabel>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 20,
              marginBottom: 48,
            }}
          >
            {rich.howItWorks.map((step) => (
              <div key={step.number} style={{ textAlign: "left" }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: `${step.accent}22`,
                    border: `1px solid ${step.accent}55`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: mono,
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: step.accent,
                    marginBottom: 12,
                  }}
                >
                  {step.number}
                </div>
                <h3
                  style={{
                    fontFamily: ffd,
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#e8e4f8",
                    marginBottom: 8,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: ff,
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      {rich.productModules && rich.productModules.length > 0 && (
        <>
          <h2 style={sectionTitle}>{rich.productModulesTitle ?? "Subscriber product"}</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 18,
              marginBottom: 40,
            }}
          >
            {rich.productModules.map((m) => (
              <div key={m.title} style={cardShell(accent)}>
                <CardAccent accent={accent} />
                <h3
                  style={{
                    fontFamily: ffd,
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: accent,
                    marginBottom: 10,
                  }}
                >
                  {m.title}
                </h3>
                <p style={{ ...bodyText, marginBottom: 0, fontSize: "0.92rem" }}>{m.description}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {rich.adminHeadings && rich.adminHeadings.length > 0 && (
        <>
          <h2 style={sectionTitle}>Admin & operations</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 40,
            }}
          >
            {rich.adminHeadings.map((heading) => (
              <span
                key={heading}
                style={{
                  fontFamily: ffd,
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: accent,
                  background: `${accent}14`,
                  border: `1px solid ${accent}33`,
                  padding: "12px 18px",
                  borderRadius: 10,
                }}
              >
                {heading}
              </span>
            ))}
          </div>
        </>
      )}

      {rich.audiences && rich.audiences.length > 0 && (
        <>
          <h2 style={sectionTitle}>
            {rich.audiencesSectionTitle ?? "Who MediRate serves & what we track"}
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>
            {rich.audiences.map((a) => (
              <span key={a} className="sector-tag">
                {a}
              </span>
            ))}
          </div>
          {rich.serviceLines && rich.serviceLines.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 48 }}>
              {rich.serviceLines.map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: ff,
                    fontSize: "0.8rem",
                    color: "rgba(244,241,236,0.75)",
                    background: `${accent}10`,
                    border: `1px solid ${accent}28`,
                    padding: "6px 12px",
                    borderRadius: 8,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          )}
        </>
      )}

      {rich.techCategories && rich.techCategories.length > 0 && (
        <>
          <SectionLabel>Technology stack</SectionLabel>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 16,
              marginBottom: 40,
            }}
          >
            {rich.techCategories.map((cat) => (
              <div
                key={cat.category}
                style={{
                  ...cardShell(accent),
                  padding: "22px 20px",
                  borderColor: `${cat.accent}33`,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: `${cat.accent}22`,
                    marginBottom: 14,
                  }}
                />
                <h3
                  style={{
                    fontFamily: mono,
                    fontSize: "0.72rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: cat.accent,
                    marginBottom: 8,
                  }}
                >
                  {cat.category}
                </h3>
                <p
                  style={{
                    fontFamily: ff,
                    fontSize: "0.9rem",
                    color: "rgba(244,241,236,0.85)",
                    margin: 0,
                  }}
                >
                  {cat.detail}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      {(rich.architectureProse?.length || rich.techStackPills?.length || rich.techStackGroups?.length) ? (
        <>
          <h2 style={sectionTitle}>Technology &amp; architecture</h2>
          {rich.architectureProse?.map((p, i) => (
            <p key={`arch-${i}`} style={bodyText}>
              {p}
            </p>
          ))}
          {rich.techStackPills && rich.techStackPills.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16, marginBottom: 40 }}>
              {rich.techStackPills.map((item) => (
                <span key={item} className="sector-tag">
                  {item}
                </span>
              ))}
            </div>
          )}
          {rich.techStackGroups && rich.techStackGroups.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 18,
                marginBottom: 40,
              }}
            >
              {rich.techStackGroups.map((group) => (
                <div key={group.name} style={cardShell(accent)}>
                  <CardAccent accent={accent} />
                  <h3
                    style={{
                      fontFamily: mono,
                      fontSize: "0.72rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: accent,
                      marginBottom: 14,
                    }}
                  >
                    {group.name}
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {group.items.map((item) => (
                      <span
                        key={item}
                        style={{
                          fontFamily: ff,
                          fontSize: "0.78rem",
                          color: "rgba(244,241,236,0.8)",
                          background: "rgba(0,0,0,0.25)",
                          padding: "4px 10px",
                          borderRadius: 6,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : null}

      {rich.keyProductDecisions && rich.keyProductDecisions.length > 0 && (
        <>
          <h2 style={{ ...sectionTitle, marginTop: 8 }}>Key product decisions</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px" }}>
            {rich.keyProductDecisions.map((line, i) => (
              <li
                key={`kpd-${i}`}
                className="impact-item"
                style={{ ...bodyText, marginBottom: 14, paddingLeft: 22 }}
              >
                {line}
              </li>
            ))}
          </ul>
        </>
      )}

      {rich.outcomes && rich.outcomes.length > 0 && (
        <>
          <SectionLabel>Outcomes</SectionLabel>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 18,
              marginBottom: 40,
            }}
          >
            {rich.outcomes.map((o) => (
              <div key={o.title} style={{ ...cardShell(accent), padding: "24px 26px" }}>
                <CardAccent accent={accent} />
                <h3
                  style={{
                    fontFamily: ffd,
                    fontSize: "1.08rem",
                    fontWeight: 700,
                    color: "#e8e4f8",
                    marginBottom: 10,
                  }}
                >
                  {o.title}
                </h3>
                <p style={{ ...bodyText, marginBottom: 0, fontSize: "0.92rem" }}>{o.description}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {rich.performanceNotes && rich.performanceNotes.length > 0 && (
        <>
          <h2 style={sectionTitle}>Performance &amp; engineering</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
              marginBottom: 24,
            }}
          >
            {rich.performanceNotes.map((note) => (
              <div key={note.title} style={{ ...cardShell(accent), padding: "20px 22px" }}>
                <CardAccent accent={accent} />
                <h3
                  style={{
                    fontFamily: ffd,
                    fontSize: "0.98rem",
                    fontWeight: 700,
                    color: accent,
                    marginBottom: 8,
                  }}
                >
                  {note.title}
                </h3>
                <p style={{ ...bodyText, marginBottom: 0, fontSize: "0.88rem" }}>{note.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
