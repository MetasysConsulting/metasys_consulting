export type {
  CaseStudy,
  CaseStudyHighlight,
  CaseStudyRich,
  CaseStudyStat,
} from "@/data/case-study-types";

import type { CaseStudy } from "@/data/case-study-types";
import { CLINICAL_RESEARCH_CASE_STUDY } from "@/data/clinical-research-case-study";
import { MEDIRATE_CASE_STUDY } from "@/data/medirate-case-study";

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((study) => study.slug);
}

export const CASE_STUDIES: CaseStudy[] = [
  MEDIRATE_CASE_STUDY,
  CLINICAL_RESEARCH_CASE_STUDY,
  {
    slug: "public-health-outreach",
    title: "AI-Enabled Outreach for Public Health Programs",
    tagline: "Inclusive, multilingual engagement for Medicare and Medicaid populations",
    sectors: ["Public sector", "Healthcare programs", "Communications"],
    challenge: [
      "Federal and state programs serve more than one hundred million Americans through Medicare and Medicaid, yet outreach and enrollment remain difficult. Mailers, call centers, and static sites often miss the households that need benefits most, including lower-income families, seniors, and non-English-speaking communities. The result is underutilized benefits, missed prevention, and higher long-term cost.",
      "Governments required communication that is inclusive, scalable, and timely, with eligibility and enrollment guidance delivered in the right language and channel.",
    ],
    solutionIntro: [
      "We engineered a cloud-native engagement platform that pairs SMS-first accessibility with multilingual AI agents grounded in program rules.",
    ],
    highlights: [
      {
        title: "Messaging infrastructure",
        description:
          "Twilio and AWS Pinpoint support SMS and MMS delivery at national scale with reliable delivery telemetry.",
      },
      {
        title: "Generative AI layer",
        description:
          "GPT-4 and Llama-class agents trained on program FAQs and eligibility rules support two-way conversations.",
      },
      {
        title: "Translation and NLP",
        description:
          "Neural machine translation and hosted models enable sustained multilingual coverage across twenty or more languages.",
      },
      {
        title: "Eligibility integration",
        description:
          "Secure APIs connect to state Medicaid and Medicare data sources to personalize outreach where policy allows.",
      },
      {
        title: "Workflow automation",
        description:
          "LangChain and crewAI agents coordinate reminders, follow-ups, and escalation to human staff with preserved context.",
      },
      {
        title: "Analytics and compliance",
        description:
          "Power BI on Snowflake surfaces engagement and enrollment metrics alongside HIPAA-aligned encryption, audit trails, and role-based access control.",
      },
    ],
    process: {
      title: "Process flow",
      steps: [
        "Targeting and personalization from resident records and campaign design by demographics, language, and program.",
        "SMS and conversational AI that keeps language plain and supports natural-language replies.",
        "Agent responses for eligibility questions and enrollment guidance.",
        "Escalation paths for complex cases with full conversation context.",
        "Feedback loops into BI dashboards to refine campaigns and measure return on outreach investment.",
      ],
    },
    impact: [
      "Higher program participation within months of launch.",
      "Reduced language barriers to understanding and enrolling in benefits.",
      "Faster resolution of common questions without call-center load.",
      "Lower manual communication overhead through automation.",
    ],
    closing: [
      "The platform functions as a public-health engagement system: agentic workflows, accessible channels, and data-driven optimization of how governments deliver policy in the field.",
    ],
  },
  {
    slug: "sttms-construction",
    title: "STTMS",
    tagline: "From fragmented ERP data to a single construction intelligence hub",
    sectors: ["Construction", "Enterprise data", "Analytics"],
    challenge: [
      "A leading construction company operated with fragmented data: financials, schedules, resources, and compliance lived across ERP systems and state-specific stores. Reporting cycles were slow and leadership lacked trustworthy cross-region comparisons.",
      "Critical questions about budget alignment, labor productivity, and compliance exposure were hard to answer with confidence, which delayed decisions and hid efficiency opportunities.",
    ],
    solutionIntro: [
      "We partnered with the client to design STTMS, a statewide technology and tracking management system that harmonizes multiple ERPs into one governed analytics layer.",
    ],
    highlights: [
      {
        title: "Data mapping and harmonization",
        description:
          "Normalized metrics across legacy systems to enable consistent comparisons for the first time.",
      },
      {
        title: "Unified dashboards",
        description:
          "Executive scorecards consolidate KPIs for cost per project, labor efficiency, and compliance adherence in near real time.",
      },
      {
        title: "AI-driven analytics",
        description:
          "Natural-language queries over operational data use retrieval-augmented generation for transparent answers.",
      },
      {
        title: "Agentic workflows",
        description:
          "Multi-agent pipelines perform data quality checks, reconcile cross-system mismatches, and surface anomalies automatically.",
      },
      {
        title: "Cloud-native scale",
        description:
          "Azure Data Factory, Snowflake, and Power BI provide secure, elastic analytics suitable for large project portfolios.",
      },
    ],
    techStack: [
      "Azure Data Factory",
      "SQL Server",
      "Snowflake",
      "API and custom ETL connectors",
      "GPT-4 with LangChain",
      "Power BI",
      "Role-based access and SOC 2-aligned governance",
    ],
    process: {
      title: "Delivery process",
      steps: [
        "Mapped and standardized metrics across ERP and state systems.",
        "Built ETL flows to unify cost, compliance, and resource signals.",
        "Delivered dashboards and natural-language search for executives.",
        "Integrated Medicare- and Medicaid-related cost recovery checks for government contracts.",
        "Established feedback loops from dashboard usage into continuous improvement.",
      ],
    },
    impact: [
      "Month-end close and reporting cycles compressed from weeks to days.",
      "True cross-state and cross-project benchmarking on shared definitions.",
      "Leadership decisions anchored in current, reconciled metrics.",
      "Foundation for predictive analytics and deeper GenAI decision support.",
    ],
    closing: [
      "STTMS reframes decision-making in a fragmented industry by combining harmonized data, governed metrics, and agentic quality workflows.",
    ],
  },
  {
    slug: "agentic-data-extraction",
    title: "Agentic Data Extraction",
    tagline: "Any source, any system, structured for downstream AI",
    sectors: ["Data engineering", "Compliance-sensitive ingestion", "AI enablement"],
    challenge: [
      "Valuable enterprise data often remains trapped in silos: state Medicaid portals, e-commerce catalogs, government PDFs, construction compliance filings, and financial disclosures.",
      "Teams face fragmentation across portals, APIs, PDFs, and dynamic web applications; slow manual collection; incompatible formats; and strict security requirements for how data is collected and stored.",
    ],
    solutionIntro: [
      "We built a platform-agnostic ingestion framework that adapts to diverse environments and produces clean, normalized, AI-ready datasets.",
    ],
    highlights: [
      {
        title: "Extraction engines",
        description:
          "Python stacks including Scrapy, Playwright, and Selenium, plus Puppeteer for headless browser automation.",
      },
      {
        title: "Dynamic site handling",
        description:
          "Proxy rotation, resilient scheduling, and JavaScript-rendered page support where permitted and ethical.",
      },
      {
        title: "AI-assisted parsing",
        description:
          "Hosted models plus deterministic parsers interpret unstructured text, normalize fields, and apply contextual tags.",
      },
      {
        title: "Data modeling and orchestration",
        description:
          "Pandas, PySpark, and dbt pipelines normalize schemas; Snowflake, PostgreSQL, S3, Azure Data Lake, and Airflow manage storage and jobs.",
      },
      {
        title: "RAG readiness",
        description:
          "Outputs feed pgvector, Pinecone, or Weaviate for assistant and agent workloads.",
      },
      {
        title: "Security posture",
        description:
          "Controls aligned to SOC 2, HIPAA, and GDPR expectations for encryption, access, and logging.",
      },
    ],
    process: {
      title: "Process flow",
      steps: [
        "Discover and map structured and unstructured sources.",
        "Run automated scrapers that adapt to site changes within policy.",
        "Parse with AI where layouts are irregular or semi-structured.",
        "Normalize into unified schemas and comparable metrics.",
        "Integrate to BI tools, APIs, or GenAI pipelines.",
      ],
    },
    impact: [
      "Used across Medicaid and Medicare intelligence, retail pricing, construction compliance, and financial reporting use cases.",
      "Reduced manual collection windows from weeks to hours with repeatable daily refreshes.",
      "Structured feeds power assistants that answer comparative and temporal questions at scale.",
    ],
    closing: [
      "The framework treats ingestion, parsing, and normalization as one fabric so organizations can move from fragmented web and legacy data to a governed, model-ready asset.",
    ],
  },
  {
    slug: "marketing-intelligence-dashboard",
    title: "Cross-Channel Marketing Intelligence",
    tagline: "Google Ads to TikTok in one governed view",
    sectors: ["Marketing", "B2C", "Analytics"],
    challenge: [
      "A global B2C brand operated with fragmented performance data across Google Ads, Meta, TikTok, and email. Each platform reported on its own definitions, which obscured true return on spend and slowed in-flight optimization.",
    ],
    solutionIntro: [
      "We implemented a marketing intelligence dashboard that consolidates paid and owned channels into a single source of truth.",
    ],
    highlights: [
      {
        title: "Data integration",
        description:
          "Supermetrics and Fivetran land multi-channel spend and performance into BigQuery on a reliable schedule.",
      },
      {
        title: "Visualization",
        description:
          "Power BI and Looker Studio models expose consistent KPIs, cohorts, and creative-level performance.",
      },
      {
        title: "Natural-language analytics",
        description:
          "GPT-4 with LangChain answers questions such as channel-level customer acquisition cost for a selected window.",
      },
      {
        title: "Operational alerts",
        description:
          "Slack and email notifications fire on material changes to CTR, return on ad spend, and CAC versus LTV guardrails.",
      },
    ],
    impact: [
      "Manual reporting time reduced materially through automation.",
      "Clearer visibility into multi-channel return on investment.",
      "Budget reallocations driven by integrated insights improved campaign efficiency.",
    ],
  },
  {
    slug: "event-based-analytics",
    title: "Event-Based Product Analytics",
    tagline: "Retention, funnels, and churn signals across web and mobile",
    sectors: ["SaaS", "Product analytics", "Growth"],
    challenge: [
      "A SaaS company lacked a unified view of behavior across its web application, mobile application, and marketing sites. Product and growth teams could not reliably pinpoint friction or measure feature adoption.",
    ],
    solutionIntro: [
      "We implemented end-to-end behavioral instrumentation with event-based analytics, heatmaps, and funnel analysis tied to a common taxonomy.",
    ],
    highlights: [
      {
        title: "Analytics stack",
        description:
          "Google Analytics 4 and Amplitude provide complementary views on acquisition and in-product behavior.",
      },
      {
        title: "Event delivery",
        description:
          "Segment and Firebase collect normalized events with identity rules suited to multi-surface journeys.",
      },
      {
        title: "Visualization",
        description:
          "Mixpanel dashboards highlight cohorts, retention, and feature-level engagement.",
      },
      {
        title: "AI-assisted reporting",
        description:
          "A retrieval pipeline summarizes usage patterns in response to natural-language questions from product and marketing leaders.",
      },
    ],
    impact: [
      "Onboarding drop-offs identified and addressed, contributing to reduced churn.",
      "Feature adoption improved after UX changes informed by behavioral evidence.",
      "Weekly automated narratives replaced ad-hoc manual reporting for key stakeholders.",
    ],
  },
  {
    slug: "ga4-migration",
    title: "GA4 Migration and Advanced Attribution",
    tagline: "From Universal Analytics to event-driven measurement",
    sectors: ["E-commerce", "Marketing technology", "Attribution"],
    challenge: [
      "A mid-size e-commerce merchant still relied on Universal Analytics patterns that did not capture modern funnels or cross-domain checkout behavior, limiting attribution quality under GA4.",
    ],
    solutionIntro: [
      "We re-architected the GA4 implementation around an event model aligned to commerce outcomes and downstream modeling.",
    ],
    highlights: [
      {
        title: "Event-driven tracking",
        description:
          "Modeled add-to-cart, checkout initiation, and repeat visit signals with consistent parameters.",
      },
      {
        title: "Cross-domain measurement",
        description:
          "Configured cross-domain linking across storefront and checkout hosts to preserve sessions.",
      },
      {
        title: "Ads and warehouse linkage",
        description:
          "Connected GA4 to Google Ads and BigQuery exports for attribution modeling and SQL-based analysis.",
      },
      {
        title: "Anomaly monitoring",
        description:
          "Python and Prophet models flag unusual conversion or traffic patterns for investigation.",
      },
    ],
    impact: [
      "More accurate channel and campaign attribution.",
      "Quantified revenue leakage from cart abandonment surfaced for remediation.",
      "Predictive signals for repeat purchase propensity enabled targeted retention plays.",
    ],
  },
  {
    slug: "lead-intelligence-platform",
    title: "Lead Intelligence Platform",
    tagline: "From capture to conversion with automation and scoring",
    sectors: ["B2B services", "Revenue operations", "CRM"],
    challenge: [
      "A B2B services company received unstructured leads from LinkedIn, HubSpot forms, and inbound email without a unified scoring, routing, and nurture model. High-value opportunities were easy to miss.",
    ],
    solutionIntro: [
      "We deployed a lead intelligence layer that connects sources of truth, automates follow-up, and enriches records with AI-assisted scoring.",
    ],
    highlights: [
      {
        title: "Systems of record",
        description:
          "HubSpot CRM integrated with Salesforce to keep stages, owners, and revenue fields aligned.",
      },
      {
        title: "Acquisition connectors",
        description:
          "LinkedIn Ads API and Zapier workflows normalize campaign metadata into CRM objects.",
      },
      {
        title: "AI lead scoring",
        description:
          "Language models enrich firmographics and intent signals to prioritize outreach.",
      },
      {
        title: "Predictive nurture",
        description:
          "Automated sequences through Brevo and SendGrid respond within minutes of qualified inbound events.",
      },
    ],
    impact: [
      "Lead response times compressed from days to hours.",
      "Higher conversion rates on qualified pipeline.",
      "Predictive scoring consistently surfaced large-contract opportunities for sales focus.",
    ],
  },
  {
    slug: "social-media-command-center",
    title: "Social Media Command Center",
    tagline: "Scheduling, analytics, and engagement in one surface",
    sectors: ["Digital media", "Creator economy", "Customer engagement"],
    challenge: [
      "A fast-growing digital brand managed courses on Kajabi alongside Instagram, TikTok, and live chat on separate tools. The fragmentation produced duplicated work, inconsistent messaging, and weak cross-channel measurement.",
    ],
    solutionIntro: [
      "We delivered a command center that unifies content operations, performance analytics, and conversational engagement.",
    ],
    highlights: [
      {
        title: "Integrations",
        description:
          "APIs for Instagram, TikTok, LinkedIn, Kajabi, and Intercom feed a common operational datastore.",
      },
      {
        title: "Scheduling and optimization",
        description:
          "A custom React and Node.js scheduler uses AI to propose timing, hashtags, and copy variants.",
      },
      {
        title: "Analytics",
        description:
          "Power BI dashboards join paid, organic, and course revenue metrics for true multi-channel return.",
      },
      {
        title: "AI assistance",
        description:
          "GPT-4 agents support reply suggestions, campaign commentary, and structured competitor benchmarks.",
      },
    ],
    impact: [
      "Large reduction in manual scheduling and posting workload.",
      "Improved visibility into advertising versus organic versus course revenue contribution.",
      "Higher engagement through assisted replies and proactive messaging grounded in unified context.",
    ],
  },
];
