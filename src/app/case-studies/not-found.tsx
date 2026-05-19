import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function CaseStudyNotFound() {
  return (
    <div className="min-h-screen bg-[var(--surface)]">
      <SiteHeader variant="light" />
      <div className="mx-auto max-w-xl px-6 py-24 text-center md:px-8">
        <h1 className="font-display mb-4 text-3xl text-[var(--ink)]">Case study not found</h1>
        <p className="font-body mb-8 text-[var(--muted)]">
          This project may have moved or the link is incorrect.
        </p>
        <Link
          href="/case-studies"
          className="font-body inline-flex border border-[var(--ink)] px-5 py-2.5 text-sm font-medium text-[var(--ink)]"
        >
          View all case studies
        </Link>
      </div>
    </div>
  );
}
