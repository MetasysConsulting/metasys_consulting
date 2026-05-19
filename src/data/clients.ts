export type Client = {
  name: string;
  industry: string;
  /** Brand logo URL (Simple Icons, Wikimedia, or site favicon) */
  logo?: string;
};

export const CLIENTS: Client[] = [
  {
    name: "Barclays",
    industry: "Financial Services",
    logo: "https://cdn.simpleicons.org/barclays/FFFFFF",
  },
  {
    name: "Al Jazeera",
    industry: "Media & Broadcasting",
    logo: "https://upload.wikimedia.org/wikipedia/en/7/71/Aljazeera.svg",
  },
  {
    name: "EY",
    industry: "Professional Services",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/EY_logo_2019.svg",
  },
  {
    name: "Prepay Nation",
    industry: "Fintech",
    logo: "https://icons.duckduckgo.com/ip3/prepaynation.com.ico",
  },
  {
    name: "Trusum Visions",
    industry: "Business Solutions",
    logo: "https://icons.duckduckgo.com/ip3/trusumvisions.com.ico",
  },
  { name: "Everstell", industry: "Technology" },
  { name: "Innova Analytics", industry: "Data Analytics" },
  { name: "TimeBox", industry: "Software Solutions" },
  { name: "Odessa", industry: "Technology" },
];
