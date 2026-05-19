export type ServiceIconId =
  | "ai"
  | "fullstack"
  | "analytics"
  | "delivery"
  | "talent"
  | "embedded";

export type HomeService = {
  /** Conceptual icon — not a brand logo */
  icon: ServiceIconId;
  title: string;
  description: string;
  features: string[];
  link: string;
};

/** Home page service cards */
export const HOME_SERVICES: HomeService[] = [
  {
    icon: "ai",
    title: "AI & Machine Learning",
    description:
      "LLM integration, custom AI agents, RAG pipelines, and production AI systems for chatbots, automation, and intelligent products.",
    features: [
      "LLM integration & custom AI agents",
      "RAG pipelines & vector search",
      "AI chatbots & workflow automation",
      "Computer vision & NLP",
      "Model fine-tuning & deployment",
    ],
    link: "/services/ai-machine-learning",
  },
  {
    icon: "fullstack",
    title: "Full-Stack Development",
    description:
      "End-to-end web and mobile products with modern stacks, cloud deployment, UI/UX, and DevOps practices clients search for on Upwork.",
    features: [
      "Next.js, React & Node.js",
      "Mobile app development",
      "UI/UX design & responsive frontends",
      "AWS, Docker & CI/CD pipelines",
      "SEO, analytics & e-commerce",
    ],
    link: "/services/web-development",
  },
  {
    icon: "analytics",
    title: "Data Analytics & Science",
    description:
      "Turn raw data into decisions with analytics, machine learning, BI dashboards, and reliable data pipelines.",
    features: [
      "Python & R analytics",
      "Machine learning & predictive modeling",
      "Business intelligence & dashboards",
      "Data pipelines & ETL",
      "Data annotation & labeling",
    ],
    link: "/services/data-analytics",
  },
  {
    icon: "delivery",
    title: "Product & Project Management",
    description:
      "Product strategy and agile delivery—from roadmaps and prioritization to Scrum execution and transformation programs.",
    features: [
      "Agile / Scrum delivery",
      "Product strategy & roadmaps",
      "Feature prioritization & UX",
      "Change & transformation leadership",
      "Technology enablement",
    ],
    link: "/services/project-management",
  },
  {
    icon: "talent",
    title: "Talent Resourcing",
    description:
      "Find and onboard the right specialists for critical technical and leadership roles.",
    features: [
      "Professional search",
      "Interim executives",
      "Recruitment process outsourcing",
      "Global talent network",
      "Industry specialists",
    ],
    link: "/services/talent-resourcing",
  },
  {
    icon: "embedded",
    title: "Embedded Systems & IoT",
    description:
      "Firmware, connected devices, and hardware–software integration from prototype to production—including edge AI on microcontrollers.",
    features: [
      "ESP32, STM32, Arduino & Raspberry Pi",
      "Embedded C/C++ & FreeRTOS",
      "IoT connectivity (MQTT, BLE, Wi‑Fi)",
      "Edge AI & TensorFlow Lite (TinyML)",
      "PCB design support (KiCad)",
    ],
    link: "/services/embedded-systems",
  },
];

export type ServiceOffering = {
  title: string;
  description: string;
};

export type ServicePageContent = {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  highlights: string[];
  offerings: ServiceOffering[];
};

export const SERVICE_PAGES: Record<string, ServicePageContent> = {
  "ai-machine-learning": {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    tagline: "Production AI systems clients hire for on Upwork",
    intro:
      "We design and ship AI that works in production—not just demos. From OpenAI and Claude integrations to LangChain agents, RAG over your documents, and workflow automation with n8n, we help agencies and startups launch faster with maintainable code.",
    highlights: [
      "OpenAI, Anthropic & Google Gemini",
      "LangChain, RAG & vector databases",
      "Custom chatbots & AI agents",
      "n8n, Zapier & Make automations",
    ],
    offerings: [
      {
        title: "LLM integration & AI agents",
        description:
          "Connect GPT, Claude, or Gemini to your product with secure APIs, tool use, memory, and guardrails tailored to your domain.",
      },
      {
        title: "RAG pipelines & knowledge bases",
        description:
          "Ingest documents, embed content, and answer questions accurately with retrieval-augmented generation backed by PostgreSQL, Supabase, or vector stores.",
      },
      {
        title: "AI chatbots & customer automation",
        description:
          "Deploy support bots, sales assistants, and internal copilots integrated with your CRM, site, or Slack—aligned with Upwork’s fastest-growing AI job categories.",
      },
      {
        title: "Workflow automation (n8n / Make / Zapier)",
        description:
          "Automate lead routing, reporting, and multi-step AI workflows for non-technical teams who need outcomes without a full engineering build.",
      },
      {
        title: "Fine-tuning, evaluation & MLOps",
        description:
          "Benchmark models, fine-tune where it pays off, and set up monitoring so quality stays high after launch.",
      },
    ],
  },
  "embedded-systems": {
    slug: "embedded-systems",
    title: "Embedded Systems & IoT",
    tagline: "Firmware and connected hardware clients search by board name",
    intro:
      "Clients on Upwork search for ESP32, STM32, Arduino, and Raspberry Pi by name—we build firmware, drivers, and cloud connectivity that ships. We also bridge into AI at the edge with TensorFlow Lite when your product needs on-device intelligence.",
    highlights: [
      "ESP32, STM32, Arduino, Raspberry Pi",
      "Embedded C/C++, Python & FreeRTOS",
      "MQTT, BLE & Wi‑Fi IoT stacks",
      "Edge AI / TinyML on microcontrollers",
    ],
    offerings: [
      {
        title: "Microcontroller & SBC firmware",
        description:
          "Production firmware for ESP32, STM32, Arduino, and Raspberry Pi—sensor drivers, communication stacks, OTA updates, and low-power tuning.",
      },
      {
        title: "RTOS & embedded Linux",
        description:
          "FreeRTOS task design, driver integration, and Embedded Linux bring-up for gateways and industrial devices.",
      },
      {
        title: "IoT connectivity & cloud integration",
        description:
          "MQTT, BLE, and Wi‑Fi designs that connect devices to AWS, Azure, or your web backend with secure provisioning.",
      },
      {
        title: "Edge AI & TinyML",
        description:
          "Run TensorFlow Lite models on-device for vision, audio, or signal processing—ideal for battery-powered and latency-sensitive products.",
      },
      {
        title: "Hardware support & PCB (KiCad)",
        description:
          "Schematic review, bring-up, and KiCad PCB layout support so startups can move from prototype to manufacturable design with one team.",
      },
    ],
  },
};
