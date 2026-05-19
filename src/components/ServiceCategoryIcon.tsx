/** Conceptual service icons — clear at a glance, no brand logos */

import type { ServiceIconId } from "@/data/services";

export type { ServiceIconId };

const stroke = "#d4cfc4";
const strokeMuted = "rgba(212, 207, 196, 0.45)";

type ServiceCategoryIconProps = {
  id: ServiceIconId;
  size?: number;
};

export function ServiceCategoryIcon({ id, size = 44 }: ServiceCategoryIconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true as const,
  };

  switch (id) {
    case "ai":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="10" stroke={strokeMuted} strokeWidth="1.5" />
          <circle cx="24" cy="12" r="2.5" fill={stroke} />
          <circle cx="34" cy="19" r="2.5" fill={stroke} />
          <circle cx="31" cy="31" r="2.5" fill={stroke} />
          <circle cx="17" cy="31" r="2.5" fill={stroke} />
          <circle cx="14" cy="19" r="2.5" fill={stroke} />
          <path
            d="M24 14.5v5M29.5 20.5l-4.3 2.5M28.8 28.8l-4.8-2.8M19.2 28.8l4.8-2.8M16.5 20.5l4.3 2.5"
            stroke={strokeMuted}
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <path
            d="M20 24h8M24 20v8"
            stroke={stroke}
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );

    case "fullstack":
      return (
        <svg {...common}>
          <rect
            x="8"
            y="14"
            width="32"
            height="22"
            rx="3"
            stroke={stroke}
            strokeWidth="1.75"
          />
          <path
            d="M8 20h32"
            stroke={strokeMuted}
            strokeWidth="1.25"
          />
          <circle cx="12" cy="17" r="1" fill={stroke} />
          <circle cx="16" cy="17" r="1" fill={stroke} />
          <path
            d="M16 28l4 4 8-10"
            stroke={stroke}
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 10h20M18 10V14M30 10V14"
            stroke={strokeMuted}
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      );

    case "analytics":
      return (
        <svg {...common}>
          <path
            d="M10 36V28M18 36V22M26 36V16M34 36V10"
            stroke={stroke}
            strokeWidth="2.25"
            strokeLinecap="round"
          />
          <path
            d="M8 36h32"
            stroke={strokeMuted}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M30 14l4-4 4 4"
            stroke={stroke}
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "delivery":
      return (
        <svg {...common}>
          <rect
            x="10"
            y="10"
            width="28"
            height="28"
            rx="3"
            stroke={stroke}
            strokeWidth="1.75"
          />
          <path
            d="M16 18h16M16 24h12M16 30h8"
            stroke={stroke}
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <circle cx="34" cy="30" r="5" stroke={stroke} strokeWidth="1.5" />
          <path
            d="M32 30l1.5 1.5L36 28"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "talent":
      return (
        <svg {...common}>
          <circle cx="24" cy="16" r="5" stroke={stroke} strokeWidth="1.75" />
          <path
            d="M14 36c0-5.5 4.5-10 10-10s10 4.5 10 10"
            stroke={stroke}
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <circle cx="34" cy="20" r="3.5" stroke={strokeMuted} strokeWidth="1.5" />
          <path
            d="M38 34c0-3.5-1.8-6.5-4-8"
            stroke={strokeMuted}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="14" cy="20" r="3.5" stroke={strokeMuted} strokeWidth="1.5" />
          <path
            d="M10 34c0-3.5 1.8-6.5 4-8"
            stroke={strokeMuted}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "embedded":
      return (
        <svg {...common}>
          <rect
            x="14"
            y="14"
            width="20"
            height="20"
            rx="2"
            stroke={stroke}
            strokeWidth="1.75"
          />
          <path
            d="M14 20H10M14 24H10M14 28H10M34 20h4M34 24h4M34 28h4M20 14V10M24 14V10M28 14V10M20 34v4M24 34v4M28 34v4"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="24" cy="24" r="3" fill={strokeMuted} />
          <path
            d="M22 24h4M24 22v4"
            stroke={stroke}
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}
