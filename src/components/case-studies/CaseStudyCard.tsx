import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";

type CaseStudyCardProps = {
  study: CaseStudy;
  index: number;
};

export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  const preview =
    study.challenge[0]?.length > 160
      ? `${study.challenge[0].slice(0, 157)}…`
      : study.challenge[0];

  const number = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group flex h-full flex-col border border-[var(--border)] bg-white transition-[border-color,box-shadow] duration-300 hover:border-[var(--accent)] hover:shadow-[0_12px_40px_rgba(28,28,28,0.08)]"
    >
      <div className="flex flex-1 flex-col p-8 md:p-10">
        <div className="mb-6 flex items-start justify-between gap-4">
          <span className="font-display text-3xl font-light text-[var(--border-strong)]">
            {number}
          </span>
          <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]">
            View project
          </span>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {study.sectors.slice(0, 2).map((sector) => (
            <span
              key={sector}
              className="font-body border border-[var(--border)] px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-[var(--muted)]"
            >
              {sector}
            </span>
          ))}
        </div>

        <h2 className="font-display mb-3 text-2xl font-medium leading-snug text-[var(--ink)] md:text-[1.65rem]">
          {study.title}
        </h2>

        <p className="font-body mb-4 text-sm leading-relaxed text-[var(--accent)]">
          {study.tagline}
        </p>

        <p className="font-body mt-auto text-sm leading-relaxed text-[var(--muted)]">
          {preview}
        </p>

        <div className="mt-8 border-t border-[var(--border)] pt-4">
          <span className="font-body text-sm text-[var(--ink)] underline decoration-[var(--border-strong)] underline-offset-4 transition-colors group-hover:decoration-[var(--accent)]">
            Read case study
          </span>
        </div>
      </div>
    </Link>
  );
}
