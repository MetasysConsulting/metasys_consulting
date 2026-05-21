export type CaseStudyHighlight = {
  title: string;
  description: string;
};

export type CaseStudyStat = {
  value: string;
  label: string;
};

export type CaseStudyVideo = {
  url: string;
  embedId: string;
  title: string;
  description: string;
  /** Show play placeholder until a video URL is ready */
  placeholder?: boolean;
};

export type CaseStudyPlatformPreview = {
  title: string;
  badge?: string;
  query: string;
  pipelineSteps: {
    label: string;
    detail: string;
    duration: string;
    status?: "complete" | "ready";
  }[];
  response: string;
  conflict?: { label: string; text: string };
  sources: string[];
};

export type CaseStudyHowItWorksStep = {
  number: string;
  title: string;
  description: string;
  accent: string;
};

export type CaseStudyTechCategory = {
  category: string;
  detail: string;
  accent: string;
};

export type CaseStudyRich = {
  stats: CaseStudyStat[];
  accent?: "blue" | "violet";
  productLink?: { url: string; label: string };
  heroTags?: string[];
  executiveSummary?: string[];
  dataFoundation?: string[];
  unifiedSchemaNote?: string[];
  video?: CaseStudyVideo;
  platformPreview?: CaseStudyPlatformPreview;
  howItWorks?: CaseStudyHowItWorksStep[];
  techCategories?: CaseStudyTechCategory[];
  outcomes?: CaseStudyHighlight[];
  keyQuestions?: string[];
  keyQuestionsTitle?: string;
  problemSolution?: { challenge: string; response: string }[];
  problemSolutionResponseLabel?: string;
  productModules?: CaseStudyHighlight[];
  productModulesTitle?: string;
  adminHeadings?: string[];
  audiences?: string[];
  serviceLines?: string[];
  audiencesSectionTitle?: string;
  testimonial?: { quote: string; attribution: string };
  techStackPills?: string[];
  techStackGroups?: { name: string; items: string[] }[];
  architecture?: string;
  architectureProse?: string[];
  performanceNotes?: CaseStudyHighlight[];
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
