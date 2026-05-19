import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { CASE_STUDIES } from "@/data/case-studies";

export default function CaseStudiesIndexPage() {
  return (
    <div className="min-h-screen bg-[var(--surface)]">
      <SiteHeader variant="light" />

      <main>
        <section className="border-b border-[var(--border)] bg-white px-6 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="font-body mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              Selected work
            </p>
            <h1 className="font-display mb-6 max-w-3xl text-4xl font-medium leading-tight text-[var(--ink)] md:text-5xl">
              Case studies
            </h1>
            <p className="font-body max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
              Engagements across healthcare, public programs, enterprise data, and digital
              operations—presented with the clarity of a design practice portfolio.
            </p>
          </div>
        </section>

        <section className="px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {CASE_STUDIES.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} index={index} />
            ))}
          </div>
        </section>

        <section className="border-t border-[var(--border)] bg-white px-6 py-14 md:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="font-display text-2xl text-[var(--ink)]">Discuss your initiative</p>
              <p className="font-body mt-2 text-[var(--muted)]">
                We partner with organizations on strategy, data, and product delivery.
              </p>
            </div>
            <Link
              href="/contact"
              className="font-body inline-flex border border-[var(--ink)] bg-[var(--ink)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent)] hover:border-[var(--accent)]"
            >
              Contact us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
