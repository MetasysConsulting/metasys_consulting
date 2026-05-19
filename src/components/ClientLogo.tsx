"use client";

import Image from "next/image";
import { useState } from "react";

type ClientLogoProps = {
  name: string;
  logo: string;
  size?: number;
  variant?: "standard" | "direct";
};

export function ClientLogo({
  name,
  logo,
  size = 72,
  variant = "standard",
}: ClientLogoProps) {
  const [failed, setFailed] = useState(false);
  const initial = name.charAt(0).toUpperCase();

  if (failed) {
    return (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: variant === "direct" ? 0 : 12,
          background:
            variant === "direct"
              ? "transparent"
              : "linear-gradient(135deg, rgba(232, 228, 220, 0.2), rgba(100, 180, 220, 0.12))",
          border:
            variant === "direct"
              ? "none"
              : "1px solid rgba(140, 200, 235, 0.3)",
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

  if (variant === "direct") {
    const height = size;
    return (
      <Image
        src={logo}
        alt={`${name} logo`}
        width={320}
        height={100}
        loading="lazy"
        onError={() => setFailed(true)}
        style={{
          width: "auto",
          height,
          maxWidth: "100%",
          maxHeight: height,
          objectFit: "contain",
          display: "block",
        }}
      />
    );
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: size,
        maxHeight: size + 24,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo}
        alt={`${name} logo`}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        style={{
          width: "auto",
          height: "auto",
          maxHeight: size + 16,
          maxWidth: "min(100%, 240px)",
          objectFit: "contain",
          display: "block",
        }}
      />
    </div>
  );
}
