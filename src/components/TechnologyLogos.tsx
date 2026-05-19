"use client";

import { gsap } from "gsap";
import { BrandIcon } from "@/components/BrandIcon";
import type { Technology } from "@/data/technologies";

type TechnologyLogosProps = {
  technologies: Technology[];
};

function TechLogoCard({ tech }: { tech: Technology }) {
  return (
    <div
      className="tech-logo-card"
      style={{
        background: "rgba(140, 200, 235, 0.1)",
        padding: "20px 16px 14px",
        borderRadius: "12px",
        border: "1px solid rgba(140, 200, 235, 0.2)",
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
          backgroundColor: "rgba(140, 200, 235, 0.2)",
          borderColor: "rgba(140, 200, 235, 0.4)",
          duration: 0.2,
        });
      }}
      onMouseLeave={(e) => {
        gsap.to(e.currentTarget, {
          scale: 1,
          backgroundColor: "rgba(140, 200, 235, 0.1)",
          borderColor: "rgba(140, 200, 235, 0.2)",
          duration: 0.2,
        });
      }}
    >
      <BrandIcon
        slug={tech.slug}
        color={tech.color}
        name={tech.name}
        size={48}
        legacy={tech.legacy}
        logo={tech.logo}
      />
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
        <TechLogoCard key={tech.name} tech={tech} />
      ))}
    </div>
  );
}
