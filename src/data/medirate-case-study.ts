import type { CaseStudy } from "@/data/case-study-types";

export const MEDIRATE_CASE_STUDY: CaseStudy = {
  slug: "medirate",
  title: "MediRate",
  tagline:
    "Medicaid reimbursement intelligence — from automated nationwide collection to production SaaS across all 50 states + DC",
  sectors: ["Healthcare", "Medicaid policy", "SaaS", "Full-stack"],
  challenge: [
    "Medicaid covers more than 80 million Americans and approaches roughly $1 trillion in annual program spend — the largest government-funded healthcare program in the United States — yet there is no single source of truth for how providers are paid. Every state publishes fee schedules differently: Excel workbooks, PDF bulletins, provider manuals, and ad-hoc portals, each with its own coding conventions and effective-date rules.",
    "Strategy teams need answers in days, not weeks: reimbursement accuracy, cross-state benchmarks, expansion economics, and the trajectory of rates over time. Without a dedicated platform, analysts manually chase documents across all jurisdictions — and often learn about material changes too late.",
  ],
  solutionIntro: [
    "Metasys partnered with MediRate to design and ship a full-stack platform: public marketing and SEO, subscriber SaaS, Stripe billing, and an internal operations suite for curators and campaigns.",
    "Today MediRate is positioned as the dedicated Medicaid fee-schedule intelligence layer — searchable by state, service line, billing code, program, and date, with comparison analytics, historical views, exports, and policy monitoring nationwide.",
  ],
  highlights: [
    {
      title: "National master data",
      description:
        "A single schema holds fee-for-service payment data across 51 jurisdictions — codes, modifiers, programs, regions, and effective dates — with filters and exports tuned for analyst workflows.",
    },
    {
      title: "Point-in-time & multi-snapshot exports",
      description:
        "“Rates in Effect As Of” and multi-date Excel exports reconstruct which rate applied on each snapshot date without forcing users to download full history — a non-trivial product and data problem at this scale.",
    },
    {
      title: "Reliable alert pipeline",
      description:
        "Subscriber preferences match state and service-line dimensions; operational tooling sends preview-identical HTML, deduplicates newly ingested items, and tracks delivery — treating alerts as a data pipeline, not a one-off mail merge.",
    },
    {
      title: "Enterprise access model",
      description:
        "Primary users, sub-users, and subscription managers with export quotas tied to plan tier — so teams scale seats and Excel volume without losing control.",
    },
    {
      title: "Documents & state resources",
      description:
        "A hierarchical library (billing manuals, service-line folders) on cloud storage, with full admin tooling for moves, archives, and state-level links.",
    },
    {
      title: "Operations & growth tooling",
      description:
        "Excel-driven ingestion sync, legislative change logging, marketing digest workflow, and usage analytics so the operator team can run the product day to day.",
    },
  ],
  techStack: [
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "Prisma",
    "Stripe",
    "Tailwind CSS",
    "Apache ECharts",
    "Azure Blob",
    "Playwright",
    "Serverless deployment",
  ],
  impact: [
    "A national reimbursement dataset bootstrapped through systematic browser automation across state portals, then transitioned to a curator-owned workflow as operations matured — without throwing away the unified schema.",
    "Subscribers move from weeks of fragmented manual research to minutes of filtered search, comparison, and governed export.",
    "Policy and rate-change signals (bulletins, SPAs, legislation) reach the right inbox through a preference-matched, production alert pipeline.",
  ],
  closing: [
    "MediRate is an enterprise-grade example of how we pair data engineering, product judgment, and full-stack delivery for regulated, high-stakes domains — the kind of build consulting buyers hire for when “digital product” means data truth, not just a landing page.",
  ],
  rich: {
    stats: [
      { value: "51", label: "States + DC" },
      { value: "~$1T", label: "Approx. annual Medicaid scale" },
      { value: "80M+", label: "Americans covered" },
      { value: "~97%", label: "Lighter filter delivery to browser" },
    ],
    executiveSummary: [
      "MediRate helps providers, consultants, and policy analysts answer Medicaid payment questions without hand-maintaining spreadsheets for fifty-plus fee schedules.",
      "The product combines master rate data, provider alerts, state plan amendments, and legislative tracking in one searchable, exportable surface — with billing, team seats, and an internal admin layer for ongoing operations.",
    ],
    dataFoundation: [
      "Before the polished SaaS experience, the platform’s data foundation was built with custom automation: Selenium-based scripts systematically traversed state Medicaid portals and related sources, extracting rate schedules from heterogeneous files — Excel workbooks, PDF bulletins, and agency downloads — and normalizing them into a single growing dataset.",
      "That pipeline was the fastest honest path to national coverage: repeatable runs across jurisdictions, with human review where sources were ambiguous. As MediRate’s operations team matured and stayed ahead of changes day to day, day-to-day curation shifted toward a streamlined manual workflow — editorial control over what ships, without abandoning the unified model the automation era proved out.",
    ],
    unifiedSchemaNote: [
      "Designing one schema for fifty-one jurisdictions is the hard part behind the demos. States disagree on how CPT/HCPCS codes are grouped, how modifiers stack, how effective dates are expressed, and what “program” means locally. The platform has to represent that nuance without flattening it into misleading averages — while still letting analysts filter, compare, and export at speed.",
    ],
    video: {
      url: "https://www.youtube.com/watch?v=i_agfm1GaK8",
      embedId: "i_agfm1GaK8",
      title: "See MediRate in Action",
      description:
        "Walkthrough of search, comparison, and monitoring across state Medicaid rates — as shown on the MediRate marketing site.",
    },
    keyQuestions: [
      "Are we being reimbursed accurately for the services we offer and populations we serve?",
      "How do payment rates in our market compare to other geographies and programs — and is there room to advocate for higher amounts?",
      "How do managed care payment rates compare to fee-for-service reimbursement?",
      "Can we design value-based contracting models with managed care payers to drive improved outcomes?",
      "Are there other service lines we can offer to broaden treatment options?",
      "Which expansion markets may be attractive organically or through acquisitions?",
      "How frequently are rates adjusted, and what is the historical trend?",
      "When considering acquisitions, how do we assess reimbursement stability and growth opportunity?",
    ],
    problemSolution: [
      {
        challenge: "Rates vary by state, program, code, modifier, and effective date",
        response:
          "One master model with advanced filtering, cross-state comparison, and governed exports",
      },
      {
        challenge: "Administrative and legislative changes are easy to miss",
        response:
          "Rate Developments (alerts, bills, SPAs) plus subscriber email preferences matched by geography and line of business",
      },
      {
        challenge: "Analysts need defensible snapshots, not only “current” screens",
        response:
          "Rate history visualizations and multi-date “as of” Excel workbooks for audit-ready comparisons",
      },
      {
        challenge: "Enterprises need seats, roles, and export discipline",
        response:
          "Primary vs sub-user vs subscription manager, with per-plan Excel row quotas and template save/load",
      },
      {
        challenge: "Operators must refresh authoritative sources on a schedule",
        response:
          "Admin sync from structured source files, change logs, and tooling that reflects what actually shipped to subscribers",
      },
    ],
    productModules: [
      {
        title: "Dashboard & rate lookup",
        description:
          "Cascading filters (service line, state, code, program, region, modifiers, dates), saved templates, code-definition reference, and pagination tuned for very large states.",
      },
      {
        title: "State rate comparison",
        description:
          "All-state or single-state comparison views with sortable analytics and export under plan limits.",
      },
      {
        title: "Rate history",
        description:
          "Time-series views of reimbursement movement with controls tuned for how analysts read Medicaid tables.",
      },
      {
        title: "Rates in Effect As Of & multi-date export",
        description:
          "Reconstruct point-in-time reimbursement: pick snapshot date(s), deduplicate to the active row per key, and land a wide workbook for year-over-year or acquisition-era review — the kind of feature that signals serious product thinking, not just a CSV dump.",
      },
      {
        title: "Recent rate changes",
        description:
          "Operational view of material movements in master data — old vs new, percent change, effective dating — for teams tracking volatility.",
      },
      {
        title: "Data Export Center",
        description:
          "Rate data and policy-export paths with column picker, templates, and tier-aware monthly row budgets.",
      },
      {
        title: "Subscription & teams",
        description:
          "Embedded checkout, portal management, optional alternate payment path, and seat administration aligned to how buyers actually procure.",
      },
    ],
    adminHeadings: [
      "Ingestion & source-of-truth sync",
      "Alert operations",
      "Growth & digest tooling",
      "Governance & quality",
    ],
    audiences: [
      "Behavioral health providers",
      "ABA & early intervention",
      "HCBS & personal care",
      "IDD services",
      "Substance use disorder",
      "Managed care organizations",
      "Healthcare consulting firms",
      "Investment & financial services",
      "Trade associations",
      "Healthcare law firms",
    ],
    serviceLines: [
      "Applied Behavior Analysis (ABA)",
      "Early intervention",
      "Home & community-based services",
      "Behavioral health",
      "Substance use disorder",
      "Intellectual & developmental disabilities",
      "Home health & private duty nursing",
      "Personal care",
    ],
    testimonial: {
      quote:
        "Before MediRate, our team manually scoured state websites for fee schedules, regulatory changes, and legislation — inconsistent formats, hard-to-find data, and late notice of rate changes. MediRate consolidates state-by-state schedules, historical and real-time data for trends, and regulatory context for market entry.",
      attribution: "Senior VP of Payor Development, multi-state ABA provider",
    },
    techStackPills: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "Tailwind CSS",
      "Apache ECharts",
      "ExcelJS",
      "Azure Blob",
      "Playwright",
      "Serverless hosting",
    ],
    architectureProse: [
      "Visitors and subscribers hit a single Next.js application: marketing routes for acquisition and SEO, authenticated routes for the product, and API routes on the same serverless deployment for auth checks, billing webhooks, exports, and internal tools.",
      "PostgreSQL (via Supabase) holds master reimbursement rows, subscription linkage, and operational metadata; object storage holds large source files and document-library assets. The browser loads heavily precomputed filter bundles so national dashboards stay responsive without round-tripping impossible payloads.",
    ],
    performanceNotes: [
      {
        title: "Compressed filter delivery",
        description:
          "Filter metadata ships in a gzip bundle orders of magnitude smaller than raw JSON — meaning faster first meaningful paint on data-heavy dashboards.",
      },
      {
        title: "Vector-quality charting",
        description:
          "Comparison and history charts render crisply at any zoom — important when executives screenshot slides from the product.",
      },
      {
        title: "Pagination that respects reality",
        description:
          "Largest states don’t collapse the UI: APIs page through result sets instead of pretending every jurisdiction fits in memory.",
      },
      {
        title: "Snapshot exports without shipping all history",
        description:
          "“As of” reconstruction runs over the minimum data needed so analysts get defensible workbooks without downloading the entire longitudinal warehouse.",
      },
    ],
    keyProductDecisions: [
      "Stay on one codebase for marketing and product — fewer integration seams for SEO, auth handoffs, and brand consistency.",
      "Push pre-aggregation and compression to the edge of the browser where national filter cardinality would otherwise choke latency.",
      "Model subscriptions, seats, and export quotas in the data layer so monetization rules stay enforceable — not a spreadsheet the team hopes people follow.",
      "Prefer managed Postgres and storage over bespoke clusters until throughput demands it — operational focus stays on the Medicaid domain, not racking servers.",
    ],
  },
};
