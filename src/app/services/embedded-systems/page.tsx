import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { SERVICE_PAGES } from "@/data/services";

export default function EmbeddedSystemsPage() {
  return <ServiceDetailPage content={SERVICE_PAGES["embedded-systems"]} />;
}
