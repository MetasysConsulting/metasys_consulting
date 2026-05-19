"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import {
  coloredLogoUrl,
  LEGACY_ICON_BASE,
  type Technology,
} from "@/data/technologies";

type TechnologyLogosProps = {
  technologies: Technology[];
};

function applyBrandColor(svgText: string, color: string): string {
  const hex = color.startsWith("#") ? color : `#${color}`;
  if (svgText.includes('fill="')) {
    return svgText.replace(/fill="[^"]*"/, `fill="${hex}"`);
  }
  return svgText.replace("<svg ", `<svg fill="${hex}" `);
}

function BrandLogo({ tech }: { tech: Technology }) {
  const [inlineSvg, setInlineSvg] = useState<string | null>(null);
  const [cdnFailed, setCdnFailed] = useState(false);

  const cdnSrc = coloredLogoUrl(tech.slug, tech.color);
  const legacySrc = `${LEGACY_ICON_BASE}/${tech.slug}.svg`;
  const useLegacySvg = Boolean(tech.legacy) || cdnFailed;

  useEffect(() => {
    if (tech.logo || !useLegacySvg) return;

    let cancelled = false;
    fetch(legacySrc)
      .then((res) => (res.ok ? res.text() : Promise.reject()))
      .then((svg) => {
        if (!cancelled) setInlineSvg(applyBrandColor(svg, tech.color));
      })
      .catch(() => {
        if (!cancelled) setInlineSvg(null);
      });

    return () => {
      cancelled = true;
    };
  }, [useLegacySvg, tech.logo, tech.slug, tech.color, legacySrc]);

  const iconStyle = {
    width: "auto" as const,
    height: "auto" as const,
    maxWidth: 48,
    maxHeight: 48,
    objectFit: "contain" as const,
    display: "block" as const,
  };

  return (
    <div
      style={{
        width: 52,
        height: 52,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {tech.logo ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={tech.logo}
          alt={`${tech.name} logo`}
          width={48}
          height={48}
          loading="lazy"
          decoding="async"
          style={iconStyle}
        />
      ) : inlineSvg ? (
        <span
          role="img"
          aria-label={`${tech.name} logo`}
          style={{
            display: "flex",
            width: 48,
            height: 48,
            alignItems: "center",
            justifyContent: "center",
          }}
          dangerouslySetInnerHTML={{
            __html: inlineSvg.replace(
              "<svg ",
              '<svg width="48" height="48" style="width:48px;height:48px" ',
            ),
          }}
        />
      ) : useLegacySvg ? null : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={cdnSrc}
          alt={`${tech.name} logo`}
          width={48}
          height={48}
          loading="lazy"
          decoding="async"
          onError={() => setCdnFailed(true)}
          style={iconStyle}
        />
      )}
    </div>
  );
}

function TechLogoCard({ tech }: { tech: Technology }) {
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
      <BrandLogo tech={tech} />
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
