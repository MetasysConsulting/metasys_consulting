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
    <>
      <SiteHeader />

      <div
        className="border-b border-[rgba(200,190,170,0.15)] px-6 py-4 md:px-10"
        style={{ background: "linear-gradient(135deg, #0a0a0a, #1a1a2e)" }}
      >
        <div className="mx-auto flex max-w-3xl items-center gap-3 text-sm">
          <Link
            href="/case-studies"
            className="font-body text-white/60 transition-colors hover:text-[#d4cfc4]"
          >
            All case studies
          </Link>
          <span className="text-white/30">/</span>
          <span className="font-body text-white/90">{study.title}</span>
        </div>
      </div>

      <div style={{ background: "linear-gradient(135deg, #1a1a2e, #16213e)" }}>
        <CaseStudyContent study={study} />
      </div>

      <footer
        className="border-t border-[rgba(200,190,170,0.15)] px-6 py-12 md:px-10"
        style={{ background: "linear-gradient(135deg, #16213e, #0a0a0a)" }}
      >
        <div className="mx-auto flex max-w-3xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/case-studies"
            className="font-body text-sm text-[#d4cfc4] underline underline-offset-4 transition-colors hover:text-white"
          >
            Back to all projects
          </Link>
          <Link
            href="/contact"
            className="font-body rounded-lg bg-gradient-to-br from-[#e8e4dc] to-[#b8a88a] px-5 py-2.5 text-sm font-semibold text-[#0a0a0a] hover:opacity-90"
          >
            Start a conversation
          </Link>
        </div>
      </footer>
    </>
  );
}
