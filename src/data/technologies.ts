export type Technology = {
  name: string;
  /** Direct URL to brand SVG (Simple Icons v12 — last release with most Microsoft/enterprise logos) */
  logo: string;
};

/** Simple Icons on jsDelivr — pinned to v12 so logos like Power BI stay available */
const si = (slug: string) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@12.4.0/icons/${slug}.svg`;

export const TECHNOLOGIES: Technology[] = [
  { name: "Google Analytics", logo: si("googleanalytics") },
  { name: "Power BI", logo: si("powerbi") },
  { name: "Salesforce", logo: si("salesforce") },
  { name: "Python", logo: si("python") },
  { name: "R", logo: si("r") },
  { name: "AWS", logo: si("amazonwebservices") },
  { name: "Azure", logo: si("microsoftazure") },
  { name: "SQL Server", logo: si("microsoftsqlserver") },
  { name: "HTML5", logo: si("html5") },
  { name: "GitHub", logo: si("github") },
  { name: "HubSpot", logo: si("hubspot") },
  { name: "Tableau", logo: si("tableau") },
  { name: "QuickBooks", logo: si("quickbooks") },
  { name: "Jira", logo: si("jira") },
  { name: "Confluence", logo: si("confluence") },
  {
    name: "Monday.com",
    logo: "https://cdn.worldvectorlogo.com/logos/monday-1.svg",
  },
  { name: "Excel", logo: si("microsoftexcel") },
  { name: "Canva", logo: si("canva") },
];
