import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Case Studies | Metasys Consulting",
  description:
    "Selected engagements across healthcare intelligence, clinical research AI, public-sector outreach, enterprise data platforms, marketing analytics, and automation.",
  openGraph: {
    title: "Case Studies | Metasys Consulting",
    description:
      "Deep dives into how Metasys delivers data, AI, and product outcomes for complex, regulated, and high-scale environments.",
    type: "website",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
