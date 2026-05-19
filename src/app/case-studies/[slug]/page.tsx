import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetailView } from "../CaseStudyDetailView";
import {
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
} from "@/data/case-studies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: "Case study | Metasys Consulting" };

  return {
    title: `${study.title} | Metasys Consulting`,
    description: study.tagline,
    openGraph: {
      title: study.title,
      description: study.tagline,
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return <CaseStudyDetailView study={study} />;
}
