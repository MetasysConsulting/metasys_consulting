import type { CaseStudy } from "@/data/case-study-types";

export const CLINICAL_RESEARCH_CASE_STUDY: CaseStudy = {
  slug: "clinical-research-assistant",
  title: "AI-Powered Clinical Research Assistant",
  tagline:
    "From information overload to citation-grounded intelligence",
  sectors: ["Life sciences", "Clinical research", "Regulated AI"],
  challenge: [
    "Clinical research generates thousands of pages across protocols, investigator brochures, literature, agency guidance, and real-world evidence. Keyword search is slow, brittle, and often incomplete — stretching review cycles and delaying decisions that affect patients.",
    "The industry needed an intelligence layer that could read, reason, and return answers with context and traceability — not just another static repository.",
  ],
  solutionIntro: [
    "Metasys built a GenAI and agentic research assistant that turns static documentation into on-demand, citation-grounded intelligence for clinical and regulatory teams.",
    "Large language models adapted on biomedical corpora, retrieval-augmented generation over verified trial and regulatory documents, and multi-agent orchestration coordinate citation validation, endpoint extraction, and cross-study synthesis — delivered through a React and Next.js experience built for explainability and audit.",
  ],
  highlights: [],
  techStack: [
    "LLMs",
    "RAG",
    "pgvector",
    "Pinecone",
    "LangChain",
    "crewAI",
    "AWS",
    "Azure",
    "React",
    "Next.js",
  ],
  impact: [],
  closing: [
    "The system is positioned as a collaborative research partner: domain-specialized, explainable, and embedded in regulated workflows — not a generic chat interface.",
  ],
  rich: {
    accent: "violet",
    heroTags: [
      "Multi-agent orchestration",
      "RAG + pgvector / Pinecone",
      "HIPAA-aligned",
      "Clinical research teams",
    ],
    stats: [
      { value: "10k+", label: "Pages per study across protocols and literature" },
      { value: "Weeks", label: "Typical literature review cycle before AI" },
      { value: "0", label: "Traceability from keyword search alone" },
    ],
    executiveSummary: [
      "Researchers ask complex, cross-document questions — adverse event profiles across trials, endpoint definitions, regulatory alignment — and need answers that cite sources, flag conflicts, and arrive in minutes instead of weeks.",
    ],
    platformPreview: {
      title: "Research Assistant — Query Interface",
      badge: "Agent pipeline",
      query:
        "Summarize adverse event profiles for GLP-1 agonists in T2D trials — compare across SUSTAIN-6, LEADER, and REWIND. Flag any endpoint conflicts.",
      pipelineSteps: [
        {
          label: "Source aggregation",
          detail: "PubMed, NCBI, internal repositories",
          duration: "3.5s",
          status: "complete",
        },
        {
          label: "Vector retrieval",
          detail: "117 chunks reviewed",
          duration: "0.9s",
          status: "complete",
        },
        {
          label: "Citation validation agent",
          detail: "32 citations verified",
          duration: "1.4s",
          status: "complete",
        },
        {
          label: "Endpoint conflict detection",
          detail: "2 conflicts flagged",
          duration: "1.2s",
          status: "complete",
        },
        {
          label: "Synthesis & narrative generation",
          detail: "Ready",
          duration: "2.8s",
          status: "ready",
        },
      ],
      response:
        "Across SUSTAIN-6, LEADER, and REWIND, GLP-1 agonists show consistent HbA1c reduction (~1.0–1.3%) and meaningful weight loss. Cardiovascular outcomes differ: LEADER demonstrated significant MACE reduction; SUSTAIN-6 showed CV benefit in secondary analysis; REWIND confirmed CV risk reduction in broader population. GI adverse events are the primary discontinuation driver across all three trials.",
      conflict: {
        label: "Conflict",
        text: "eGFR endpoint definitions differ across trials — SUSTAIN-6 uses confirmed eGFR decline, LEADER uses sustained eGFR <45 mL/min.",
      },
      sources: [
        "NEJM SUSTAIN-6 (2016)",
        "NEJM LEADER (2016)",
        "Lancet REWIND (2019)",
        "FDA GLP-1 guidance",
      ],
    },
    video: {
      url: "https://www.youtube.com/watch?v=dfmSzZyI4no",
      embedId: "dfmSzZyI4no",
      title: "Platform walkthrough video",
      description:
        "Walkthrough of the research assistant query interface, agent pipeline, and citation-grounded responses.",
    },
    howItWorks: [
      {
        number: "01",
        title: "Aggregate",
        description: "PubMed, NCBI, regulatory PDFs, internal repositories.",
        accent: "#a78bfa",
      },
      {
        number: "02",
        title: "Index & embed",
        description: "Unstructured content vectorized into searchable embeddings.",
        accent: "#818cf8",
      },
      {
        number: "03",
        title: "Retrieve & ground",
        description: "Answers grounded in verified trial and regulatory documents.",
        accent: "#34d399",
      },
      {
        number: "04",
        title: "Reason & reconcile",
        description: "Multi-agent pipeline flags conflicts and synthesizes evidence.",
        accent: "#fb923c",
      },
      {
        number: "05",
        title: "Deliver",
        description: "Summaries, structured tables, and decision-ready narratives.",
        accent: "#2dd4bf",
      },
    ],
    techCategories: [
      {
        category: "AI layer",
        detail: "LLMs + biomedical adaptation",
        accent: "#a78bfa",
      },
      {
        category: "Retrieval",
        detail: "pgvector + Pinecone",
        accent: "#818cf8",
      },
      {
        category: "Orchestration",
        detail: "LangChain + crewAI",
        accent: "#34d399",
      },
      {
        category: "Infrastructure",
        detail: "AWS + Azure serverless",
        accent: "#fb923c",
      },
      {
        category: "Interface",
        detail: "React + Next.js",
        accent: "#2dd4bf",
      },
      {
        category: "Compliance",
        detail: "HIPAA-aligned controls",
        accent: "#f472b6",
      },
    ],
    outcomes: [
      {
        title: "Materially faster review cycles",
        description:
          "Literature and protocol review compressed from weeks to hours with grounded retrieval.",
      },
      {
        title: "Full citation traceability",
        description:
          "Every output anchored in sources — auditable and reproducible for regulatory review.",
      },
      {
        title: "Unified knowledge surface",
        description:
          "Global teams share a single, always-current research intelligence layer.",
      },
      {
        title: "More time on scientific judgment",
        description:
          "Researchers freed from search-and-read to focus on interpretation and decision-making.",
      },
    ],
  },
};
