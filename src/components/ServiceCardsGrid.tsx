"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BarChart3,
  BrainCircuit,
  Code2,
  Cpu,
  KanbanSquare,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { HomeService, HomeServiceIcon } from "@/data/services";

const ICON_MAP: Record<HomeServiceIcon, LucideIcon> = {
  "ai-ml": BrainCircuit,
  "web-development": Code2,
  "data-analytics": BarChart3,
  "program-management": KanbanSquare,
  "talent-resourcing": Users,
  "embedded-systems": Cpu,
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

type ServiceCardsGridProps = {
  services: HomeService[];
};

export function ServiceCardsGrid({ services }: ServiceCardsGridProps) {
  const prefersReducedMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });

  return (
    <div
      ref={ref}
      className="grid gap-8 sm:gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
    >
      {services.map((service, index) => {
        const Icon = ICON_MAP[service.icon];

        return (
          <motion.div
            key={service.title}
            custom={index}
            initial={prefersReducedMotion ? false : "hidden"}
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            className="h-full"
          >
            <Link
              href={service.link}
              className="group block h-full no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4cfc4]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a2e] rounded-[20px]"
            >
              <article className="service-card-shine relative h-full rounded-[20px] p-px transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-focus-visible:-translate-y-1.5">
                <motion.div
                  className="service-card-inner relative flex h-full flex-col rounded-[19px] p-8 md:p-9 overflow-hidden"
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : { boxShadow: "0 24px 48px rgba(0, 0, 0, 0.45)" }
                  }
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(212, 207, 196, 0.18) 0%, transparent 70%)",
                    }}
                    aria-hidden
                  />

                  <div className="mb-6 flex justify-center">
                    <div
                      className="service-icon-ring relative flex h-[72px] w-[72px] items-center justify-center rounded-2xl"
                    >
                      <Icon
                        className="relative z-10 h-9 w-9 text-[#d4cfc4] transition-transform duration-500 group-hover:scale-110"
                        strokeWidth={1.65}
                        aria-hidden
                      />
                    </div>
                  </div>

                  <h3 className="font-body mb-3 text-center text-xl font-semibold tracking-tight text-[#d4cfc4] md:text-2xl">
                    {service.title}
                  </h3>

                  <p className="font-body mb-6 flex-grow text-center text-[0.95rem] leading-relaxed text-white/75">
                    {service.description}
                  </p>

                  <ul className="m-0 list-none space-y-2.5 p-0">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="font-body relative pl-5 text-sm leading-snug text-white/65 before:absolute before:left-0 before:text-[#d4cfc4] before:content-['•']"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </article>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
