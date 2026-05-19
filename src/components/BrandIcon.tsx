"use client";

import { useEffect, useState } from "react";
import { coloredLogoUrl, LEGACY_ICON_BASE } from "@/data/technologies";

function applyBrandColor(svgText: string, color: string): string {
  const hex = color.startsWith("#") ? color : `#${color}`;
  if (svgText.includes('fill="')) {
    return svgText.replace(/fill="[^"]*"/, `fill="${hex}"`);
  }
  return svgText.replace("<svg ", `<svg fill="${hex}" `);
}

export type BrandIconProps = {
  slug: string;
  color: string;
  name: string;
  size?: number;
  legacy?: boolean;
  logo?: string;
};

export function BrandIcon({
  slug,
  color,
  name,
  size = 48,
  legacy = false,
  logo,
}: BrandIconProps) {
  const [inlineSvg, setInlineSvg] = useState<string | null>(null);
  const [cdnFailed, setCdnFailed] = useState(false);

  const cdnSrc = coloredLogoUrl(slug, color);
  const legacySrc = `${LEGACY_ICON_BASE}/${slug}.svg`;
  const useLegacySvg = legacy || cdnFailed;

  useEffect(() => {
    if (logo || !useLegacySvg) return;

    let cancelled = false;
    fetch(legacySrc)
      .then((res) => (res.ok ? res.text() : Promise.reject()))
      .then((svg) => {
        if (!cancelled) setInlineSvg(applyBrandColor(svg, color));
      })
      .catch(() => {
        if (!cancelled) setInlineSvg(null);
      });

    return () => {
      cancelled = true;
    };
  }, [useLegacySvg, logo, slug, color, legacySrc]);

  const iconStyle = {
    width: "auto" as const,
    height: "auto" as const,
    maxWidth: size,
    maxHeight: size,
    objectFit: "contain" as const,
    display: "block" as const,
  };

  return (
    <div
      style={{
        width: size + 8,
        height: size + 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {logo ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={logo}
          alt={`${name} logo`}
          width={size}
          height={size}
          loading="lazy"
          decoding="async"
          style={iconStyle}
        />
      ) : inlineSvg ? (
        <span
          role="img"
          aria-label={`${name} logo`}
          style={{
            display: "flex",
            width: size,
            height: size,
            alignItems: "center",
            justifyContent: "center",
          }}
          dangerouslySetInnerHTML={{
            __html: inlineSvg.replace(
              "<svg ",
              `<svg width="${size}" height="${size}" style="width:${size}px;height:${size}px" `,
            ),
          }}
        />
      ) : useLegacySvg ? null : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={cdnSrc}
          alt={`${name} logo`}
          width={size}
          height={size}
          loading="lazy"
          decoding="async"
          onError={() => setCdnFailed(true)}
          style={iconStyle}
        />
      )}
    </div>
  );
}
