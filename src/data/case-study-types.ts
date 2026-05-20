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
  audiences: string[];
  serviceLines: string[];
  testimonial: { quote: string; attribution: string };
  techStackGroups: { name: string; items: string[] }[];
  architecture: string;
  performanceNotes: CaseStudyHighlight[];
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
