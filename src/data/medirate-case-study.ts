import type { CaseStudy } from "@/data/case-study-types";

export const MEDIRATE_CASE_STUDY: CaseStudy = {
  slug: "medirate",
  title: "MediRate",
  tagline: "Medicaid Rate Tracking Made Easy — production SaaS across all 50 states + DC",
  sectors: ["Healthcare", "Medicaid policy", "SaaS", "Full-stack"],
  challenge: [
    "Medicaid covers more than 80 million Americans and approaches $1 trillion in annual spend — the largest government-funded healthcare program in the U.S. Yet reimbursement intelligence remains fragmented: every state runs different program designs, fee schedules arrive in inconsistent formats, and legislative or administrative changes are easy to miss.",
    "Provider organizations, consultants, and investors routinely need answers that take weeks to assemble manually: Are we reimbursed accurately? How do our rates compare across states and programs? Where should we expand? How often do rates change, and what is the historical trend? Teams were scouring state websites, PDFs, and bulletins — often learning about rate changes too late.",
    "The market needed more than another spreadsheet. It needed a production platform that aggregates authoritative rate data, surfaces policy developments, and delivers customizable alerts — at national scale.",
  ],
  solutionIntro: [
    "Metasys partnered with MediRate to design, build, and operate a full-stack Medicaid reimbursement intelligence platform: a public marketing site, a subscriber SaaS application, Stripe billing, and a comprehensive admin operations suite.",
    "MediRate is the only platform offering automated access to Medicaid fee schedule data — searchable and monitorable by state, service line, billing code, program, and date, with real-time updates, trending tools, and policy monitoring across all 50 states and the District of Columbia.",
  ],
  highlights: [
    {
      title: "National master data model",
      description:
        "Unified fee schedule rows (CPT/HCPCS, modifiers, programs, regions, effective dates) curated from state agency sources, provider manuals, bulletins, appropriations, and regulatory actions.",
    },
    {
      title: "Subscriber analytics suite",
      description:
        "Dashboard rate lookup, multi-state comparison charts (ECharts), rate history time-series, recent rate change tracking, and state profiles — with saved filter templates and code-definition reference.",
    },
    {
      title: "Rate Developments & alerts",
      description:
        "Provider alerts, legislative bill tracking, and State Plan Amendments (SPAs) with customizable email preferences matched by state and service line.",
    },
    {
      title: "Data Export Center",
      description:
        "Excel exports with date-range, fee-schedule-date, and “Rates in Effect As Of” multi-snapshot modes; subscription-tier row quotas (5k–20k/month) with template save/load.",
    },
    {
      title: "Documents library",
      description:
        "Hierarchical state resource library (billing manuals, service-line folders) with cloud blob storage and full admin file-manager tooling.",
    },
    {
      title: "Admin operations layer",
      description:
        "Azure Excel ingestion sync, email alert campaigns (Brevo), marketing digest builder, master data version control, user analytics, and legislative change-log workflows.",
    },
  ],
  process: {
    title: "Platform delivery flow",
    steps: [
      "Ingest and normalize state fee schedules, provider alerts, bills, and SPAs into Supabase master data tables.",
      "Serve ultra-compressed filter bundles (~12MB → ~440KB gzip) for fast dashboard first paint.",
      "Enable subscriber search, comparison, history, export, and alert preferences on production APIs.",
      "Operate admin pipelines: database sync, email campaigns, document library, and release/version control.",
    ],
  },
  techStack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "PostgreSQL",
    "Prisma",
    "Stripe",
    "Kinde Auth",
    "Apache ECharts",
    "ExcelJS",
    "Brevo",
    "Azure Blob",
    "Playwright",
  ],
  impact: [
    "Reduced Medicaid rate research from weeks of manual state-portal work to minutes of filtered search and export.",
    "Single platform for 50-state + DC fee schedules, historical trends, cross-state comparison, and policy monitoring.",
    "Customizable daily alerts keep teams ahead of provider bulletins, legislative activity, and SPAs in their markets.",
    "Multi-seat subscriptions with role-based access (Primary User, Sub User, Subscription Manager) and export quotas for enterprise teams.",
    "Gzip filter bundles cut payload size ~97% for faster dashboard load on large national datasets.",
    "120+ API routes power auth, billing webhooks, admin ingestion, analytics, and export — deployed on serverless infrastructure.",
  ],
  closing: [
    "MediRate is an enterprise-grade Medicaid data platform combining subscriber SaaS, admin operations, and a modern web stack — built for healthcare reimbursement analysts, provider organizations, and consulting firms who need accurate, timely, and comparable rate intelligence.",
  ],
  rich: {
    stats: [
      { value: "51", label: "States + DC" },
      { value: "80M+", label: "Americans on Medicaid" },
      { value: "120+", label: "API endpoints" },
      { value: "~97%", label: "Filter payload reduction" },
    ],
    executiveSummary: [
      "MediRate serves healthcare providers, consultants, and policy analysts who need authoritative Medicaid payment answers without manually tracking 50+ state fee schedules.",
      "The platform aggregates master rate data, provider alerts, state plan amendments, and legislative bill tracking into one searchable, exportable, and alert-driven experience — with Kinde identity, Stripe subscriptions, Brevo email, and Supabase as the primary data store.",
    ],
    video: {
      url: "https://www.youtube.com/watch?v=i_agfm1GaK8",
      embedId: "i_agfm1GaK8",
      title: "See MediRate in Action",
      description:
        "Platform walkthrough: search, compare, and monitor Medicaid payment rates across all 50 states — featured on the MediRate marketing site.",
    },
    keyQuestions: [
      "Are we being reimbursed accurately for the services we offer and populations we serve?",
      "How do payment rates in our market compare to other geographies and programs — is there room to advocate for higher amounts?",
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
          "Unified master data model with advanced filtering and cross-state comparison",
      },
      {
        challenge: "Legislative and administrative changes are hard to monitor",
        response:
          "Rate Developments module + customizable email alerts (provider alerts, bills, SPAs)",
      },
      {
        challenge: "Analysts need historical trends and point-in-time snapshots",
        response:
          "Rate History charts + “Rates in Effect As Of” export with multi-date comparison",
      },
      {
        challenge: "Large organizations need team access and export controls",
        response:
          "Multi-seat subscriptions, sub-users, role-based access, monthly Excel row quotas",
      },
      {
        challenge: "Operations must ingest Excel from state sources",
        response:
          "Admin database sync from Azure Excel + refresh reports + change logging",
      },
    ],
    productModules: [
      {
        title: "Dashboard & rate lookup",
        description:
          "Cascading filters (service line, state, code, program, region, modifiers, effective date), saved templates, code definitions, pagination at California-scale volume.",
      },
      {
        title: "State rate comparison",
        description:
          "Compare all states or drill into individual states; ECharts bar charts, sort controls, Excel export with quota enforcement.",
      },
      {
        title: "Rate history",
        description:
          "Multi-series line charts by effective date, hourly-equivalent rate toggle, historical templates.",
      },
      {
        title: "Recent rate changes",
        description:
          "Dashboard of master-data movements — old vs new rate, percent change, effective date, filterable summaries.",
      },
      {
        title: "Data Export Center",
        description:
          "Rate data and Rate Developments tabs; column picker; up to four “as-of” snapshot dates in one wide Excel workbook.",
      },
      {
        title: "Subscription & team management",
        description:
          "Stripe embedded checkout, wire-transfer path, sub-user slots, Subscription Manager role, portal integration.",
      },
    ],
    adminCapabilities: [
      {
        title: "Database sync",
        description:
          "Azure Blob Excel ingestion for BillTrack, provider alerts, and SPAs with date-repair utilities and refresh reports.",
      },
      {
        title: "Email alert pipeline",
        description:
          "Preview-identical HTML sends, test vs production lists, preference matching, post-send `is_new` workflow.",
      },
      {
        title: "Marketing operations",
        description:
          "List CRUD, Excel import/export, AI-assisted templates, Brevo analytics (opens, clicks, bounces), monthly digest builder.",
      },
      {
        title: "Master data & analytics",
        description:
          "Environment version switching, user sign-in and page-view tracking, impersonation and auth diagnostics.",
      },
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
      "Early Intervention (EI)",
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
    techStackGroups: [
      {
        name: "Frontend",
        items: [
          "Next.js 16 App Router",
          "React 19",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "Apache ECharts",
          "ExcelJS",
        ],
      },
      {
        name: "Backend & data",
        items: [
          "120+ Next.js API routes",
          "Supabase PostgreSQL",
          "Prisma",
          "Azure Blob ingestion",
          "Gzip filter bundles",
        ],
      },
      {
        name: "Auth, billing & email",
        items: ["Kinde Auth", "Stripe Checkout & webhooks", "Brevo campaigns", "DOMPurify"],
      },
      {
        name: "Quality & ops",
        items: ["Playwright E2E", "Serverless hosting", "RLS + admin service role", "Page-view analytics"],
      },
    ],
    architecture: `┌─────────────────────────────────────────────────────────┐
│                   Client (Browser)                       │
│     Next.js · React · ECharts · ExcelJS · gzip filters   │
└──────────────────────────┬──────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────┐
│            Next.js API Routes (Serverless)               │
│   Auth · Stripe · Admin sync · Exports · Analytics       │
└─────┬────────────┬─────────────┬─────────────┬──────────┘
      ▼            ▼             ▼             ▼
  Supabase     Stripe        Brevo       Cloud storage
 (PostgreSQL)  (Billing)     (Email)     (Files/Blobs)`,
    performanceNotes: [
      {
        title: "Compressed filter bundles",
        description: "~12MB JSON compressed to ~440KB gzip — faster dashboard first paint nationally.",
      },
      {
        title: "ECharts SVG renderer",
        description: "Crisp comparison and history charts at any zoom level.",
      },
      {
        title: "Paginated rate APIs",
        description: "SQL pagination handles large state datasets (e.g. California) without choking the UI.",
      },
      {
        title: "Client-side as-of dedup",
        description: "Accurate snapshot exports without shipping full historical tables.",
      },
    ],
  },
};
