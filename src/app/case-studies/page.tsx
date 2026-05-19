import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { CASE_STUDIES } from "@/data/case-studies";

export default function CaseStudiesIndexPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="px-6 pb-16 pt-12 md:px-10 md:pb-20 md:pt-16" style={{ background: "linear-gradient(135deg, #0a0a0a, #1a1a2e)" }}>
          <div className="mx-auto max-w-[1400px]">
            <p className="font-body mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d4cfc4]">Selected work</p>
            <h1 className="font-display mb-6 max-w-3xl text-4xl font-medium leading-tight md:text-5xl">
              <span className="bg-gradient-to-br from-[#f5f3ef] via-[#e8e4dc] to-[#b8a88a] bg-clip-text text-transparent">Case studies</span>
            </h1>
            <p className="font-body max-w-2xl text-lg leading-relaxed text-white/75">
              Representative engagements across healthcare, public programs, enterprise data, and digital operations.
            </p>
          </div>
        </section>
        <section className="px-6 py-16 md:px-10 md:py-20" style={{ background: "linear-gradient(135deg, #1a1a2e, #16213e)" }}>
          <div className="mx-auto grid max-w-[1400px] gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {CASE_STUDIES.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} index={index} />
            ))}
          </div>
        </section>
        <section className="border-t border-[rgba(200,190,170,0.15)] px-6 py-14 md:px-10" style={{ background: "linear-gradient(135deg, #16213e, #0a0a0a)" }}>
          <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="font-display text-2xl text-white">Discuss your initiative</p>
              <p className="font-body mt-2 text-white/65">We partner on strategy, data, and product delivery.</p>
            </div>
            <Link href="/contact" className="font-body rounded-lg bg-gradient-to-br from-[#e8e4dc] to-[#b8a88a] px-6 py-3 text-sm font-semibold text-[#0a0a0a] shadow-[0_4px_16px_rgba(200,190,170,0.25)] hover:opacity-90">
              Contact us
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
