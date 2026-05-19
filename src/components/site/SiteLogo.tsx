"use client";

import Image from "next/image";
import Link from "next/link";
import { markSkipHomeIntro } from "@/lib/home-intro";
import { SITE_LOGO } from "@/lib/site-config";

type SiteLogoProps = {
  height?: number;
  linkToHome?: boolean;
};

export function SiteLogo({ height = 44, linkToHome = true }: SiteLogoProps) {
  const image = (
    <Image
      src={SITE_LOGO}
      alt="Metasys Consulting"
      width={220}
      height={56}
      priority
      style={{
        width: "auto",
        height,
        maxWidth: 220,
        objectFit: "contain",
        display: "block",
      }}
    />
  );

  if (!linkToHome) {
    return image;
  }

  return (
    <Link
      href="/"
      onClick={markSkipHomeIntro}
      style={{
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
      }}
    >
      {image}
    </Link>
  );
}
