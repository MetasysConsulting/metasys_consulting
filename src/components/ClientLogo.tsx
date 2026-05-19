"use client";

import { useState } from "react";

type ClientLogoProps = {
  name: string;
  logo?: string;
  size?: number;
};

export function ClientLogo({ name, logo, size = 52 }: ClientLogoProps) {
  const [failed, setFailed] = useState(false);
  const initial = name.charAt(0).toUpperCase();

  if (!logo || failed) {
    return (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: 12,
          background: "linear-gradient(135deg, rgba(232, 228, 220, 0.2), rgba(184, 168, 138, 0.12))",
          border: "1px solid rgba(200, 190, 170, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-display), Georgia, serif",
          fontSize: size * 0.42,
          fontWeight: 600,
          color: "#d4cfc4",
        }}
        aria-hidden
      >
        {initial}
      </div>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={logo}
      alt={`${name} logo`}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      style={{
        width: "auto",
        height: "auto",
        maxWidth: size,
        maxHeight: size,
        objectFit: "contain",
        display: "block",
        opacity: 0.95,
      }}
    />
  );
}
