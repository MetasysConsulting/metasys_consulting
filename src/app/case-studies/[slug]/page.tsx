import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site/SiteHeader";
import { CaseStudyContent } from "@/components/case-studies/CaseStudyContent";
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

  return (
    <div className="min-h-screen bg-[var(--surface)]">
      <SiteHeader variant="light" />

      <div className="border-b border-[var(--border)] bg-white px-6 py-4 md:px-8">
        <div className="mx-auto flex max-w-3xl items-center gap-4 text-sm">
          <Link
            href="/case-studies"
            className="font-body text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
          >
            All case studies
          </Link>
          <span className="text-[var(--border-strong)]">/</span>
          <span className="font-body text-[var(--ink)]">{study.title}</span>
        </div>
      </div>

      <CaseStudyContent study={study} />

      <footer className="border-t border-[var(--border)] bg-white px-6 py-12 md:px-8">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/case-studies"
            className="font-body text-sm text-[var(--muted)] underline underline-offset-4 transition-colors hover:text-[var(--ink)]"
          >
            Back to all projects
          </Link>
          <Link
            href="/contact"
            className="font-body inline-flex border border-[var(--ink)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-white"
          >
            Start a conversation
          </Link>
        </div>
      </footer>
    </div>
  );
}

