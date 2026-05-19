export type Technology = {
  name: string;
  /** Simple Icons slug */
  slug: string;
  /** Brand hex without # */
  color: string;
  /** Icon removed from latest CDN — load from Simple Icons v12 and apply color client-side */
  legacy?: boolean;
  /** Full logo URL when not using Simple Icons */
  logo?: string;
};

/** Colored brand icon from Simple Icons CDN */
export function coloredLogoUrl(slug: string, color: string): string {
  return `https://cdn.simpleicons.org/${slug}/${color}`;
}

export const LEGACY_ICON_BASE =
  "https://cdn.jsdelivr.net/npm/simple-icons@12.4.0/icons";

/** Alphabetical by name — cloud, data, AI/LLM, and delivery tools for client-facing work */
export const TECHNOLOGIES: Technology[] = [
  { name: "Anthropic", slug: "anthropic", color: "CC785C" },
  { name: "AWS", slug: "amazonwebservices", color: "FF9900", legacy: true },
  { name: "Azure", slug: "microsoftazure", color: "0078D4", legacy: true },
  { name: "Canva", slug: "canva", color: "00C4CC", legacy: true },
  { name: "Confluence", slug: "confluence", color: "2684FF", legacy: true },
  { name: "Excel", slug: "microsoftexcel", color: "217346", legacy: true },
  { name: "GitHub", slug: "github", color: "FFFFFF" },
  { name: "Google Analytics", slug: "googleanalytics", color: "E37400" },
  { name: "Google Gemini", slug: "googlegemini", color: "8E75B2" },
  { name: "HTML5", slug: "html5", color: "E34F26" },
  { name: "HubSpot", slug: "hubspot", color: "FF7A59" },
  { name: "Hugging Face", slug: "huggingface", color: "FFD21E" },
  { name: "Jira", slug: "jira", color: "0052CC" },
  { name: "LangChain", slug: "langchain", color: "FFFFFF" },
  { name: "MariaDB", slug: "mariadb", color: "003545" },
  {
    name: "Monday.com",
    slug: "mondaydotcom",
    color: "F62B54",
    logo: "https://cdn.worldvectorlogo.com/logos/monday-1.svg",
  },
  { name: "MySQL", slug: "mysql", color: "4479A1" },
  { name: "Next.js", slug: "nextdotjs", color: "FFFFFF" },
  { name: "OpenAI", slug: "openai", color: "412991", legacy: true },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  { name: "Power BI", slug: "powerbi", color: "F2C811", legacy: true },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "QuickBooks", slug: "quickbooks", color: "2CA01C" },
  { name: "R", slug: "r", color: "276DC3" },
  { name: "Salesforce", slug: "salesforce", color: "00A1E0", legacy: true },
  { name: "SQL Server", slug: "microsoftsqlserver", color: "CC2927", legacy: true },
  { name: "SQLite", slug: "sqlite", color: "003B57" },
  { name: "Supabase", slug: "supabase", color: "3FCF8E" },
  { name: "Tableau", slug: "tableau", color: "E97627", legacy: true },
  { name: "Vercel", slug: "vercel", color: "FFFFFF" },
];
