export type CaseStudyHighlight = {
  title: string;
  description: string;
};

export type CaseStudyStat = {
  value: string;
  label: string;
};

export type CaseStudyRich = {
  stats: CaseStudyStat[];
  executiveSummary: string[];
  /** How the dataset was bootstrapped (e.g. automation → curation) */
  dataFoundation?: string[];
  /** Unified schema / multi-jurisdiction normalization */
  unifiedSchemaNote?: string[];
  video: {
    url: string;
    embedId: string;
    title: string;
    description: string;
  };
  keyQuestions: string[];
  problemSolution: { challenge: string; response: string }[];
  productModules: CaseStudyHighlight[];
  adminCapabilities: CaseStudyHighlight[];
  /** Stakeholder segments */
  audiences: string[];
  /** Coverage areas / service lines — rendered with audiences in one section */
  serviceLines: string[];
  testimonial: { quote: string; attribution: string };
  /** Grouped tech (optional); prefer techStackPills for a cleaner case study */
  techStackGroups?: { name: string; items: string[] }[];
  /** Single-row professional stack callout */
  techStackPills?: string[];
  /** Legacy ASCII diagram — avoid for client-facing pages */
  architecture?: string;
  /** Plain-language architecture tiers */
  architectureProse?: string[];
  performanceNotes: CaseStudyHighlight[];
  keyProductDecisions?: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  sectors: string[];
  challenge: string[];
  solutionIntro: string[];
  highlights: CaseStudyHighlight[];
  process?: { title: string; steps: string[] };
  techStack?: string[];
  impact: string[];
  closing?: string[];
  rich?: CaseStudyRich;
};
