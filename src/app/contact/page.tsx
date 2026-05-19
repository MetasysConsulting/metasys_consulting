"use client";

import { AppNavigation } from "@/components/site/AppNavigation";
import { ContactSection } from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <div
      style={{ backgroundColor: "#0a0a0a", minHeight: "100vh" }}
    >
      <AppNavigation variant="static" />
      <div style={{ paddingTop: "80px" }}>
        <ContactSection showHeading />
      </div>
    </div>
  );
}
