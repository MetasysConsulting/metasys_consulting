import type { CaseStudy } from "@/data/case-studies";

export function CaseStudyContent({ study }: { study: CaseStudy }) {
  return (
    <article className="prose-case-dark mx-auto max-w-3xl px-6 py-12 md:px-10 md:py-16">
      <header className="mb-12 border-b border-[rgba(200,190,170,0.2)] pb-10">
        <div className="mb-4 flex flex-wrap gap-2">
          {study.sectors.map((sector) => (
            <span
              key={sector}
              className="font-body rounded-md border border-[rgba(200,190,170,0.25)] bg-[rgba(0,20,40,0.5)] px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-white/70"
            >
              {sector}
            </span>
          ))}
        </div>
        <h1 className="font-display mb-4 text-4xl font-medium leading-tight text-white md:text-5xl">
          {study.title}
        </h1>
        <p className="font-body text-lg leading-relaxed text-[#d4cfc4]">{study.tagline}</p>
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
        <ul className="!mt-6 !list-none space-y-4 !pl-0">
          {study.highlights.map((item) => (
            <li
              key={item.title}
              className="relative overflow-hidden rounded-xl border border-[rgba(200,190,170,0.2)] bg-[rgba(0,20,40,0.45)] p-6 backdrop-blur-[12px]"
            >
              <div
                className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#d4cfc4] to-[#b8a88a]"
                aria-hidden
              />
              <p className="font-body mb-2 text-base font-semibold text-[#d4cfc4]">{item.title}</p>
              <p className="font-body text-sm leading-relaxed text-white/70">{item.description}</p>
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
                className="font-body rounded-md border border-[rgba(200,190,170,0.2)] bg-[rgba(0,20,40,0.4)] px-3 py-1.5 text-xs text-white/70"
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
        <section className="mt-10 border-t border-[rgba(200,190,170,0.2)] pt-8">
          {study.closing.map((paragraph, i) => (
            <p
              key={`closing-${i}`}
              className="font-display text-xl italic leading-relaxed text-[#d4cfc4]"
            >
              {paragraph}
            </p>
          ))}
        </section>
      )}
    </article>
  );
}
