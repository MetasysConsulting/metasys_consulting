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

      <div style={{ ...cardShell, marginTop: 32, marginBottom: 40, padding: 0 }}>
        <CardAccent />
        <h2
          style={{
            ...sectionTitle,
            margin: 0,
            padding: "28px 28px 12px",
            WebkitTextFillColor: "unset",
            color: "#eef6fc",
            background: "none",
          }}
        >
          {rich.video.title}
        </h2>
        <p
          style={{
            ...bodyText,
            margin: "0 28px 20px",
            fontSize: "0.95rem",
          }}
        >
          {rich.video.description}
        </p>
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            borderRadius: "0 0 16px 16px",
            background: "#000",
          }}
        >
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${rich.video.embedId}`}
            title={rich.video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>
        <p style={{ margin: "14px 28px 24px", fontFamily: mono, fontSize: "0.75rem" }}>
          <a
            href={rich.video.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(110,184,232,0.85)", textDecoration: "none" }}
          >
            Watch on YouTube →
          </a>
        </p>
      </div>

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

      <blockquote
        style={{
          ...cardShell,
          margin: "0 0 48px",
          borderLeft: "3px solid #6eb8e8",
          padding: "32px 36px",
        }}
      >
        <p
          style={{
            fontFamily: ff,
            fontSize: "1.1rem",
            fontStyle: "italic",
            color: "rgba(244,241,236,0.88)",
            lineHeight: 1.7,
            margin: "0 0 16px",
          }}
        >
          &ldquo;{rich.testimonial.quote}&rdquo;
        </p>
        <cite
          style={{
            fontFamily: ff,
            fontSize: "0.88rem",
            color: "rgba(110,184,232,0.85)",
            fontStyle: "normal",
            fontWeight: 500,
          }}
        >
          — {rich.testimonial.attribution}
        </cite>
      </blockquote>

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
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 18,
          marginBottom: 40,
        }}
      >
        {rich.adminCapabilities.map((m) => (
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

      <h2 style={sectionTitle}>Who MediRate serves</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
        {rich.audiences.map((a) => (
          <span key={a} className="sector-tag">
            {a}
          </span>
        ))}
      </div>

      <h2 style={{ ...sectionTitle, fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
        Service lines tracked
      </h2>
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

      <h2 style={sectionTitle}>Technology stack</h2>
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

      <h2 style={sectionTitle}>Architecture</h2>
      <pre
        style={{
          ...cardShell,
          fontFamily: mono,
          fontSize: "0.72rem",
          lineHeight: 1.5,
          color: "rgba(180, 218, 244, 0.9)",
          overflowX: "auto",
          whiteSpace: "pre",
          marginBottom: 40,
        }}
      >
        {rich.architecture}
      </pre>

      <h2 style={sectionTitle}>Performance & engineering</h2>
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
