import Link from "next/link";

type SiteHeaderProps = {
  variant?: "light" | "dark";
};

export function SiteHeader({ variant = "light" }: SiteHeaderProps) {
  const isLight = variant === "light";

  const logoClass = isLight
    ? "font-display text-lg font-medium tracking-[0.12em] text-[var(--ink)] uppercase"
    : "font-display text-lg font-medium tracking-[0.12em] text-[var(--surface)] uppercase";

  const linkClass = isLight
    ? "font-body text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
    : "font-body text-sm font-medium text-white/80 transition-colors hover:text-white";

  const ctaClass = isLight
    ? "font-body inline-flex items-center rounded-sm border border-[var(--ink)] bg-[var(--ink)] px-4 py-2 text-sm font-medium text-[var(--surface)] transition-colors hover:bg-[var(--accent)] hover:border-[var(--accent)]"
    : "font-body inline-flex items-center rounded-sm border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[var(--ink)]";

  return (
    <header
      className={
        isLight
          ? "sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-md"
          : "fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#0f0f0f]/90 backdrop-blur-md"
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5 md:px-8">
        <Link href="/" className={logoClass}>
          Metasys Consulting
        </Link>
        <nav className="flex flex-wrap items-center gap-6 md:gap-8" aria-label="Main">
          <Link href="/case-studies" className={linkClass}>
            Case studies
          </Link>
          <Link href="/contact" className={linkClass}>
            Contact
          </Link>
          <Link href="/contact" className={ctaClass}>
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
