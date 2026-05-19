"use client";

import { useState } from "react";

type ClientLogoProps = {
  name: string;
  logo: string;
  size?: number;
};

export function ClientLogo({ name, logo, size = 56 }: ClientLogoProps) {
  const [failed, setFailed] = useState(false);
  const initial = name.charAt(0).toUpperCase();

  if (failed) {
    return (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: 12,
          background:
            "linear-gradient(135deg, rgba(232, 228, 220, 0.2), rgba(100, 180, 220, 0.12))",
          border: "1px solid rgba(140, 200, 235, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-display), system-ui, sans-serif",
          fontSize: size * 0.42,
          fontWeight: 600,
          color: "#9ec8e8",
        }}
        aria-hidden
      >
        {initial}
      </div>
    );
  }

  return (
    <div
      style={{
        width: size + 16,
        height: size + 16,
        borderRadius: 14,
        background: "rgba(255, 255, 255, 0.96)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.15)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
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
        }}
      />
    </div>
  );
}
