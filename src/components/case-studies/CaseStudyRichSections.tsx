"use client";

import type { CaseStudyRich } from "@/data/case-study-types";

const ff = "var(--font-body), system-ui, sans-serif";
const ffd = "var(--font-display), system-ui, sans-serif";
const mono = "var(--font-mono), ui-monospace, monospace";

const sectionTitle = {
  fontFamily: ffd,
  fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
  fontWeight: 700,
  letterSpacing: "-0.015em",
  background: "linear-gradient(135deg, #e8f4fc 0%, #b8daf0 40%, #6eb8e8 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  marginBottom: "22px",
} as const;

const bodyText = {
  fontFamily: ff,
  fontSize: "1.05rem",
  color: "rgba(244, 241, 236, 0.78)",
  lineHeight: 1.78,
  marginBottom: "16px",
} as const;

const cardShell = {
  background: "rgba(10, 15, 28, 0.7)",
  backdropFilter: "blur(14px)",
  padding: "24px 28px",
  borderRadius: "16px",
  border: "1px solid rgba(110, 184, 232, 0.14)",
  position: "relative" as const,
  overflow: "hidden" as const,
};

type CaseStudyRichSectionsProps = {
  rich: CaseStudyRich;
};

function CardAccent() {
  return (
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
  );
}

export function CaseStudyRichSections({ rich }: CaseStudyRichSectionsProps) {
  return (
    <>
      <h2 style={{ ...sectionTitle, marginTop: 8 }}>Executive summary</h2>
      {rich.executiveSummary.map((p, i) => (
        <p key={`exec-${i}`} style={bodyText}>
          {p}
        </p>
      ))}

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

      <h2 style={sectionTitle}>Questions MediRate answers</h2>
      <p style={{ ...bodyText, marginBottom: 24 }}>
        The platform was designed around the strategic questions provider organizations,
        consultants, and investors ask every day:
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
          <div key={`q-${i}`} style={{ ...cardShell, padding: "20px 22px" }}>
            <CardAccent />
            <span
              style={{
                fontFamily: mono,
                fontSize: "0.72rem",
                color: "#6eb8e8",
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
                  color: "#9ec8e8",
                  fontWeight: 600,
                  borderBottom: "1px solid rgba(110,184,232,0.25)",
                  width: "42%",
                }}
              >
                Challenge
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "14px 18px",
                  color: "#9ec8e8",
                  fontWeight: 600,
                  borderBottom: "1px solid rgba(110,184,232,0.25)",
                }}
              >
                MediRate response
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
                    borderBottom: "1px solid rgba(110,184,232,0.1)",
                    verticalAlign: "top",
                  }}
                >
                  {row.challenge}
                </td>
                <td
                  style={{
                    padding: "16px 18px",
                    color: "rgba(244,241,236,0.9)",
                    borderBottom: "1px solid rgba(110,184,232,0.1)",
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

      <h2 style={sectionTitle}>Subscriber product</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 18,
          marginBottom: 40,
        }}
      >
        {rich.productModules.map((m) => (
          <div key={m.title} style={cardShell}>
            <CardAccent />
            <h3
              style={{
                fontFamily: ffd,
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "#b4daf4",
                marginBottom: 10,
              }}
            >
              {m.title}
            </h3>
            <p style={{ ...bodyText, marginBottom: 0, fontSize: "0.92rem" }}>{m.description}</p>
          </div>
        ))}
      </div>

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
              color: "#d4e8f8",
              background: "rgba(110, 184, 232, 0.1)",
              border: "1px solid rgba(110, 184, 232, 0.28)",
              padding: "12px 18px",
              borderRadius: 10,
            }}
          >
            {heading}
          </span>
        ))}
      </div>

      <h2 style={sectionTitle}>Who MediRate serves &amp; what we track</h2>
      <p style={{ ...bodyText, marginBottom: 12 }}>
        Stakeholder segments and representative service lines covered in the product:
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>
        {rich.audiences.map((a) => (
          <span key={a} className="sector-tag">
            {a}
          </span>
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 48 }}>
        {rich.serviceLines.map((s) => (
          <span
            key={s}
            style={{
              fontFamily: ff,
              fontSize: "0.8rem",
              color: "rgba(244,241,236,0.75)",
              background: "rgba(110,184,232,0.08)",
              border: "1px solid rgba(110,184,232,0.2)",
              padding: "6px 12px",
              borderRadius: 8,
            }}
          >
            {s}
          </span>
        ))}
      </div>

      <h2 style={sectionTitle}>Technology &amp; architecture</h2>
      {rich.architectureProse && rich.architectureProse.length > 0 && (
        <>
          {rich.architectureProse.map((p, i) => (
            <p key={`arch-${i}`} style={bodyText}>
              {p}
            </p>
          ))}
        </>
      )}
      {rich.techStackPills && rich.techStackPills.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16, marginBottom: 40 }}>
          {rich.techStackPills.map((item) => (
            <span key={item} className="sector-tag">
              {item}
            </span>
          ))}
        </div>
      ) : (
        rich.techStackGroups &&
        rich.techStackGroups.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 18,
              marginBottom: 40,
            }}
          >
            {rich.techStackGroups.map((group) => (
              <div key={group.name} style={cardShell}>
                <CardAccent />
                <h3
                  style={{
                    fontFamily: mono,
                    fontSize: "0.72rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#6eb8e8",
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
        )
      )}

      {rich.keyProductDecisions && rich.keyProductDecisions.length > 0 && (
        <>
          <h2 style={{ ...sectionTitle, marginTop: 8 }}>Key product decisions</h2>
          <p style={{ ...bodyText, marginBottom: 20 }}>
            Judgment matters as much as features — a few deliberate choices that kept the build credible at enterprise scale:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px" }}>
            {rich.keyProductDecisions.map((line, i) => (
              <li
                key={`kpd-${i}`}
                className="impact-item"
                style={{
                  ...bodyText,
                  marginBottom: 14,
                  paddingLeft: 22,
                }}
              >
                {line}
              </li>
            ))}
          </ul>
        </>
      )}

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
          <div key={note.title} style={{ ...cardShell, padding: "20px 22px" }}>
            <CardAccent />
            <h3
              style={{
                fontFamily: ffd,
                fontSize: "0.98rem",
                fontWeight: 700,
                color: "#b4daf4",
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
  );
}
