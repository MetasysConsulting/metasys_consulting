export type Client = {
  name: string;
  industry: string;
  /** Logo in /public/clients — add your own SVG/PNG to replace placeholders */
  logo: string;
};

export const CLIENTS: Client[] = [
  {
    name: "Barclays",
    industry: "Financial Services",
    logo: "/clients/barclays.svg",
  },
  {
    name: "Al Jazeera",
    industry: "Media & Broadcasting",
    logo: "/clients/al-jazeera.svg",
  },
  {
    name: "EY",
    industry: "Professional Services",
    logo: "/clients/ey.svg",
  },
  {
    name: "Prepay Nation",
    industry: "Fintech",
    logo: "/clients/prepay-nation.png",
  },
  {
    name: "Trusum Visions",
    industry: "Business Solutions",
    logo: "/clients/trusum-visions.png",
  },
  {
    name: "Everstell",
    industry: "Technology",
    logo: "/clients/everstell.svg",
  },
  {
    name: "Innova Analytics",
    industry: "Data Analytics",
    logo: "/clients/innova.png",
  },
  {
    name: "TimeBox",
    industry: "Software Solutions",
    logo: "/clients/timebox.png",
  },
  {
    name: "Odessa",
    industry: "Technology",
    logo: "/clients/odessa.png",
  },
];
