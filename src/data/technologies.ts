export type Technology = {
  name: string;
  /** Simple Icons slug — https://simpleicons.org */
  slug: string;
  /** Brand hex without # */
  color: string;
};

export const TECHNOLOGIES: Technology[] = [
  { name: "Google Analytics", slug: "googleanalytics", color: "E37400" },
  { name: "Power BI", slug: "powerbi", color: "F2C811" },
  { name: "Salesforce", slug: "salesforce", color: "00A1E0" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "R", slug: "r", color: "276DC3" },
  { name: "AWS", slug: "amazonaws", color: "FF9900" },
  { name: "Azure", slug: "microsoftazure", color: "0078D4" },
  { name: "SQL Server", slug: "microsoftsqlserver", color: "CC2927" },
  { name: "HTML5", slug: "html5", color: "E34F26" },
  { name: "GitHub", slug: "github", color: "FFFFFF" },
  { name: "HubSpot", slug: "hubspot", color: "FF7A59" },
  { name: "Tableau", slug: "tableau", color: "E97627" },
  { name: "QuickBooks", slug: "quickbooks", color: "2CA01C" },
  { name: "Jira", slug: "jira", color: "0052CC" },
  { name: "Confluence", slug: "confluence", color: "172B4D" },
  { name: "Monday.com", slug: "mondaydotcom", color: "F62B54" },
  { name: "Excel", slug: "microsoftexcel", color: "217346" },
  { name: "Canva", slug: "canva", color: "00C4CC" },
];
