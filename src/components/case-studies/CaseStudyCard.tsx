import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";

type CaseStudyCardProps = {
  study: CaseStudy;
  index: number;
};

export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  const preview =
    study.challenge[0]?.length > 140
      ? `${study.challenge[0].slice(0, 137)}…`
      : study.challenge[0];

  const number = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[rgba(200,190,170,0.2)] bg-[rgba(0,20,40,0.45)] backdrop-blur-[15px] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(200,190,170,0.4)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
    >
      <div
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#d4cfc4] to-[#b8a88a]"
        aria-hidden
      />
      <div className="flex flex-1 flex-col p-8 md:p-9">
        <div className="mb-5 flex items-start justify-between gap-4">
          <span className="font-display text-3xl font-light text-white/25">{number}</span>
          <span className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#d4cfc4] opacity-80 transition-opacity group-hover:opacity-100">
            View project
          </span>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {study.sectors.slice(0, 2).map((sector) => (
            <span
              key={sector}
              className="font-body rounded-md border border-[rgba(200,190,170,0.25)] bg-[rgba(0,20,40,0.5)] px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-white/70"
            >
              {sector}
            </span>
          ))}
        </div>

        <h2 className="font-display mb-3 text-2xl font-medium leading-snug text-white md:text-[1.65rem]">
          {study.title}
        </h2>

        <p className="font-body mb-4 text-sm leading-relaxed text-[#d4cfc4]">{study.tagline}</p>

        <p className="font-body mt-auto text-sm leading-relaxed text-white/65">{preview}</p>

        <div className="mt-7 border-t border-[rgba(200,190,170,0.15)] pt-4">
          <span className="font-body text-sm font-medium text-[#d4cfc4] transition-colors group-hover:text-white">
            Read case study →
          </span>
        </div>
      </div>
    </Link>
  );
}
