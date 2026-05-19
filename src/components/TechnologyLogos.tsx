"use client";

import Image from "next/image";
import { useState } from "react";
import { gsap } from "gsap";
import type { Technology } from "@/data/technologies";

type TechnologyLogosProps = {
  technologies: Technology[];
};

function TechLogoCard({ tech }: { tech: Technology }) {
  const [failed, setFailed] = useState(false);
  const logoSrc = `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`;

  return (
    <div
      className="tech-logo-card"
      style={{
        background: "rgba(200, 190, 170, 0.1)",
        padding: "20px 16px 14px",
        borderRadius: "12px",
        border: "1px solid rgba(200, 190, 170, 0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        minHeight: "110px",
        transition: "all 0.3s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        gsap.to(e.currentTarget, {
          scale: 1.05,
          backgroundColor: "rgba(200, 190, 170, 0.2)",
          borderColor: "rgba(200, 190, 170, 0.4)",
          duration: 0.2,
        });
      }}
      onMouseLeave={(e) => {
        gsap.to(e.currentTarget, {
          scale: 1,
          backgroundColor: "rgba(200, 190, 170, 0.1)",
          borderColor: "rgba(200, 190, 170, 0.2)",
          duration: 0.2,
        });
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {!failed ? (
          <Image
            src={logoSrc}
            alt={`${tech.name} logo`}
            width={48}
            height={48}
            style={{ objectFit: "contain", width: "auto", height: "auto", maxWidth: 48, maxHeight: 48 }}
            onError={() => setFailed(true)}
          />
        ) : (
          <span
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#d4cfc4",
            }}
          >
            {tech.name.charAt(0)}
          </span>
        )}
      </div>
      <span
        style={{
          fontFamily: "var(--font-body), system-ui, sans-serif",
          fontSize: "0.8rem",
          fontWeight: 500,
          color: "rgba(255, 255, 255, 0.85)",
          textAlign: "center",
          lineHeight: 1.3,
        }}
      >
        {tech.name}
      </span>
    </div>
  );
}

export function TechnologyLogos({ technologies }: TechnologyLogosProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
        gap: "20px",
        marginBottom: "30px",
      }}
    >
      {technologies.map((tech) => (
        <TechLogoCard key={tech.slug} tech={tech} />
      ))}
    </div>
  );
}
