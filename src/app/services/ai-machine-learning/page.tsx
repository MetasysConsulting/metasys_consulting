import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { SERVICE_PAGES } from "@/data/services";

export default function AiMachineLearningPage() {
  return <ServiceDetailPage content={SERVICE_PAGES["ai-machine-learning"]} />;
}
