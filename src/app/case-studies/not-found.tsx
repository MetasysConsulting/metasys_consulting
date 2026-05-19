import Link from "next/link";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function CaseStudyNotFound() {
  return (
    <>
      <SiteHeader />
      <div
        className="mx-auto max-w-xl px-6 py-24 text-center md:px-10"
        style={{ background: "linear-gradient(135deg, #0a0a0a, #1a1a2e)" }}
      >
        <h1 className="font-display mb-4 text-3xl text-white">Case study not found</h1>
        <p className="font-body mb-8 text-white/65">
          This project may have moved or the link is incorrect.
        </p>
        <Link
          href="/case-studies"
          className="font-body inline-flex rounded-lg bg-gradient-to-br from-[#e8e4dc] to-[#b8a88a] px-5 py-2.5 text-sm font-semibold text-[#0a0a0a]"
        >
          View all case studies
        </Link>
      </div>
    </>
  );
}
