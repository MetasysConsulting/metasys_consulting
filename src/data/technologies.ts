export type Technology = {
  name: string;
  slug: string;
  color: string;
  legacy?: boolean;
  logo?: string;
};

export function coloredLogoUrl(slug: string, color: string): string {
  return `https://cdn.simpleicons.org/${slug}/${color}`;
}

export const LEGACY_ICON_BASE =
  "https://cdn.jsdelivr.net/npm/simple-icons@12.4.0/icons";

/** Alphabetical — AI/LLM, embedded, cloud, data, web, and delivery tools */
export const TECHNOLOGIES: Technology[] = [
  { name: "Anthropic", slug: "anthropic", color: "CC785C" },
  { name: "Arduino", slug: "arduino", color: "00878F" },
  { name: "AWS", slug: "amazonwebservices", color: "FF9900", legacy: true },
  { name: "Azure", slug: "microsoftazure", color: "0078D4", legacy: true },
  { name: "C++", slug: "cplusplus", color: "00599C" },
  { name: "Canva", slug: "canva", color: "00C4CC", legacy: true },
  { name: "Confluence", slug: "confluence", color: "2684FF", legacy: true },
  { name: "Docker", slug: "docker", color: "2496ED" },
  { name: "ESP32", slug: "espressif", color: "E7352C" },
  { name: "Excel", slug: "microsoftexcel", color: "217346", legacy: true },
  { name: "GitHub", slug: "github", color: "FFFFFF" },
  { name: "Google Analytics", slug: "googleanalytics", color: "E37400" },
  { name: "Google Gemini", slug: "googlegemini", color: "8E75B2" },
  { name: "HTML5", slug: "html5", color: "E34F26" },
  { name: "HubSpot", slug: "hubspot", color: "FF7A59" },
  { name: "Hugging Face", slug: "huggingface", color: "FFD21E" },
  { name: "Jira", slug: "jira", color: "0052CC" },
  { name: "KiCad", slug: "kicad", color: "314CB0" },
  { name: "Kubernetes", slug: "kubernetes", color: "326CE5" },
  { name: "LangChain", slug: "langchain", color: "FFFFFF" },
  { name: "Linux", slug: "linux", color: "FCC624" },
  { name: "Make", slug: "make", color: "6481EE" },
  { name: "MariaDB", slug: "mariadb", color: "003545" },
  {
    name: "Monday.com",
    slug: "mondaydotcom",
    color: "F62B54",
    logo: "https://cdn.worldvectorlogo.com/logos/monday-1.svg",
  },
  { name: "MQTT", slug: "mqtt", color: "660066" },
  { name: "MySQL", slug: "mysql", color: "4479A1" },
  { name: "n8n", slug: "n8n", color: "EA4B71" },
  { name: "Next.js", slug: "nextdotjs", color: "FFFFFF" },
  { name: "Node.js", slug: "nodedotjs", color: "339933" },
  { name: "OpenAI", slug: "openai", color: "412991", legacy: true },
  { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
  { name: "Power BI", slug: "powerbi", color: "F2C811", legacy: true },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "QuickBooks", slug: "quickbooks", color: "2CA01C" },
  { name: "R", slug: "r", color: "276DC3" },
  { name: "Raspberry Pi", slug: "raspberrypi", color: "A22846" },
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Salesforce", slug: "salesforce", color: "00A1E0", legacy: true },
  { name: "SQL Server", slug: "microsoftsqlserver", color: "CC2927", legacy: true },
  { name: "SQLite", slug: "sqlite", color: "003B57" },
  { name: "STM32", slug: "stmicroelectronics", color: "03234B" },
  { name: "Supabase", slug: "supabase", color: "3FCF8E" },
  { name: "Tableau", slug: "tableau", color: "E97627", legacy: true },
  { name: "TensorFlow", slug: "tensorflow", color: "FF6F00" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "Vercel", slug: "vercel", color: "FFFFFF" },
  { name: "Zapier", slug: "zapier", color: "FF4A00" },
];
