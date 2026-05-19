import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(200,190,170,0.2)] bg-[rgba(0,20,40,0.92)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-5 md:px-10">
        <Link href="/" className="font-display text-xl font-semibold tracking-wide md:text-2xl">
          <span
            className="bg-gradient-to-br from-[#e8e4dc] to-[#b8a88a] bg-clip-text text-transparent"
            style={{ textShadow: "0 0 24px rgba(200, 190, 170, 0.25)" }}
          >
            Metasys Consulting
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-5 md:gap-8" aria-label="Main">
          <Link
            href="/case-studies"
            className="font-body text-sm font-medium text-white/85 transition-colors hover:text-[#d4cfc4]"
          >
            Case studies
          </Link>
          <Link
            href="/contact"
            className="font-body text-sm font-medium text-white/85 transition-colors hover:text-[#d4cfc4]"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="font-body rounded-lg bg-gradient-to-br from-[#e8e4dc] to-[#b8a88a] px-5 py-2.5 text-sm font-semibold text-[#0a0a0a] shadow-[0_4px_16px_rgba(200,190,170,0.25)] transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
