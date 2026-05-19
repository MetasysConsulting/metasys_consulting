import type { CaseStudy } from "@/data/case-studies";

export function CaseStudyContent({ study }: { study: CaseStudy }) {
  return (
    <article className="prose-case mx-auto max-w-3xl px-6 py-12 md:px-8 md:py-16">
      <header className="mb-12 border-b border-[var(--border)] pb-10">
        <div className="mb-4 flex flex-wrap gap-2">
          {study.sectors.map((sector) => (
            <span
              key={sector}
              className="font-body border border-[var(--border)] px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-[var(--muted)]"
            >
              {sector}
            </span>
          ))}
        </div>
        <h1 className="font-display mb-4 text-4xl font-medium leading-tight text-[var(--ink)] md:text-5xl">
          {study.title}
        </h1>
        <p className="font-body text-lg leading-relaxed text-[var(--accent)]">
          {study.tagline}
        </p>
      </header>

      <section>
        <h3>Challenge</h3>
        {study.challenge.map((paragraph, i) => (
          <p key={`challenge-${i}`} className="mb-4">
            {paragraph}
          </p>
        ))}
      </section>

      <section>
        <h3>Solution</h3>
        {study.solutionIntro.map((paragraph, i) => (
          <p key={`solution-intro-${i}`} className="mb-4">
            {paragraph}
          </p>
        ))}
        <ul className="!list-none space-y-4 !pl-0">
          {study.highlights.map((item) => (
            <li
              key={item.title}
              className="border border-[var(--border)] bg-white p-6 !text-[var(--muted)]"
            >
              <p className="!mb-2 !text-base !font-semibold !text-[var(--ink)]">
                {item.title}
              </p>
              <p className="!mb-0 !text-sm">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {study.process && (
        <section>
          <h3>{study.process.title}</h3>
          <ol>
            {study.process.steps.map((step, i) => (
              <li key={`step-${i}`} className="mb-2">
                {step}
              </li>
            ))}
          </ol>
        </section>
      )}

      {study.techStack && study.techStack.length > 0 && (
        <section>
          <h3>Technology footprint</h3>
          <div className="flex flex-wrap gap-2">
            {study.techStack.map((tech) => (
              <span
                key={tech}
                className="font-body border border-[var(--border)] bg-white px-3 py-1.5 text-xs text-[var(--muted)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      <section>
        <h3>Impact</h3>
        <ul>
          {study.impact.map((line, i) => (
            <li key={`impact-${i}`} className="mb-2">
              {line}
            </li>
          ))}
        </ul>
      </section>

      {study.closing && study.closing.length > 0 && (
        <section className="mt-10 border-t border-[var(--border)] pt-8">
          {study.closing.map((paragraph, i) => (
            <p
              key={`closing-${i}`}
              className="font-display text-xl italic leading-relaxed text-[var(--ink)]"
            >
              {paragraph}
            </p>
          ))}
        </section>
      )}
    </article>
  );
}
