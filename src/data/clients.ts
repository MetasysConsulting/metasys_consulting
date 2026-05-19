export type Client = {
  name: string;
  industry: string;
  description: string;
  /** Path under /public/clients — letter fallback if missing or broken */
  logo: string;
  /** Full-width brand mark on dark background (no tile), like the site nav logo */
  logoDisplay?: "direct" | "standard";
};

export const CLIENTS: Client[] = [
  {
    name: "Barclays",
    industry: "Financial Services",
    description:
      "Enterprise data, analytics, and technology delivery for global banking operations.",
    logo: "/clients/barclays.svg",
  },
  {
    name: "Al Jazeera",
    industry: "Media & Broadcasting",
    description:
      "Digital platforms, content systems, and audience analytics for international media.",
    logo: "/clients/al-jazeera.svg",
  },
  {
    name: "EY",
    industry: "Professional Services",
    description:
      "Consulting and technology programs — data engineering, reporting, and client delivery tooling.",
    logo: "/clients/ey.svg",
  },
  {
    name: "Odessa",
    industry: "Technology",
    description:
      "Software and analytics engagements for lease-management and asset-finance platforms.",
    logo: "/clients/odessa.png",
  },
  {
    name: "Community Connect Labs",
    industry: "Civic Tech · SaaS",
    description:
      "Product discovery and roadmap for SMS-first outreach SaaS — feature scoping, user-journey mapping, and analytics instrumentation.",
    logo: "/clients/community-connect-labs.png",
  },
  {
    name: "Cook & Boardman",
    industry: "Construction · Supply",
    description:
      "Sales-ops analytics and dashboard build — pipeline health, regional performance, and quoting velocity for the field team.",
    logo: "/clients/cook-boardman.png",
  },
  {
    name: "Prepay Nation",
    industry: "Fintech · Telecom",
    description:
      "Product analytics, partner-portal UX, and reporting automation for cross-border airtime transfer flows.",
    logo: "/clients/prepay-nation.png",
  },
  {
    name: "Innovative Analytics — CDAP",
    industry: "Consulting · CDAP",
    description:
      "Led 12+ Digital Adoption Plans under Canada Digital Adoption Program — gap analysis, ROI modeling, CRM/ERP blueprints.",
    logo: "/clients/innovative-analytics.png",
  },
  {
    name: "MediRate",
    industry: "Healthcare · Data",
    description:
      "Healthcare reimbursement data product — schema design, ingestion automation, and analyst-facing dashboards.",
    logo: "/clients/medirate.png",
    logoDisplay: "direct",
  },
  {
    name: "Trusum Solutions",
    industry: "Tech Services",
    description:
      "Discovery & BA for a workforce-management SaaS — user stories, wireframes, and acceptance criteria across 3 modules.",
    logo: "/clients/trusum-solutions.png",
  },
  {
    name: "Timebox Solutions",
    industry: "SaaS · Productivity",
    description:
      "End-to-end product management for a B2B scheduling SaaS — onboarding, billing, and analytics instrumentation.",
    logo: "/clients/timebox-solutions.png",
  },
  {
    name: "Everstell",
    industry: "E-commerce · SaaS",
    description:
      "Storefront analytics + GenAI-assisted merchandising research — competitor scraping pipelines and Hex notebooks.",
    logo: "/clients/everstell.svg",
  },
  {
    name: "Ebunch Marketing",
    industry: "Digital Marketing",
    description:
      "Marketing-ops dashboards (GA4, Looker, Mixpanel) and campaign performance attribution for multi-channel agencies.",
    logo: "/clients/ebunch-marketing.png",
  },
  {
    name: "Designer Metals",
    industry: "Manufacturing · Retail",
    description:
      "Order-management product redesign and inventory analytics — built quoting workflow + reporting for ops team.",
    logo: "/clients/designer-metals.jpeg",
    logoDisplay: "direct",
  },
  {
    name: "Empire Sports",
    industry: "E-commerce · Retail",
    description:
      "Shopify analytics, GenAI product-description automation, and SEO/conversion dashboards.",
    logo: "/clients/empire-sports.png",
  },
];
