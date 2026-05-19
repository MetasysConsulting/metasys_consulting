"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ServiceCategoryIcon } from "@/components/ServiceCategoryIcon";
import type { HomeService } from "@/data/services";

type ServiceCardProps = {
  service: HomeService;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  return (
    <Link href={service.link} style={{ textDecoration: "none" }}>
      <div className="service-card-shine-wrap">
        <div ref={shineRef} className="service-card-shine" aria-hidden="true" />
        <div
          ref={cardRef}
          className="service-card"
          style={{
            background: "rgba(0, 20, 40, 0.4)",
            backdropFilter: "blur(15px)",
            padding: "40px",
            borderRadius: "20px",
            border: "1px solid rgba(140, 200, 235, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={() => {
            if (!cardRef.current || !shineRef.current) return;
            gsap.to(cardRef.current, {
              y: -10,
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(140, 200, 235, 0.2)",
              duration: 0.3,
            });
            gsap.to(shineRef.current, {
              opacity: 0.95,
              scale: 1.02,
              duration: 0.35,
            });
          }}
          onMouseLeave={() => {
            if (!cardRef.current || !shineRef.current) return;
            gsap.to(cardRef.current, {
              y: 0,
              scale: 1,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              duration: 0.3,
            });
            gsap.to(shineRef.current, {
              opacity: 0.55,
              scale: 1,
              duration: 0.35,
            });
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              margin: "0 auto 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(135deg, rgba(232, 228, 220, 0.15), rgba(100, 180, 220, 0.08))",
              borderRadius: 16,
              border: "1px solid rgba(140, 200, 235, 0.2)",
            }}
          >
            <ServiceCategoryIcon id={service.icon} size={44} />
          </div>

          <h3
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              fontSize: "1.8rem",
              fontWeight: 600,
              color: "#9ec8e8",
              marginBottom: "15px",
            }}
          >
            {service.title}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              color: "rgba(255, 255, 255, 0.8)",
              lineHeight: 1.6,
              marginBottom: "25px",
            }}
          >
            {service.description}
          </p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {service.features.map((feature) => (
              <li
                key={feature}
                style={{
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                  color: "rgba(255, 255, 255, 0.7)",
                  marginBottom: "8px",
                  paddingLeft: "20px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    color: "#9ec8e8",
                  }}
                >
                  •
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}
