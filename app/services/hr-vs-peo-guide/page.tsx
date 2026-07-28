import type { Metadata } from "next";
import { ServicePage } from "@/components/service/ServicePage";
import { getRelated } from "@/lib/services";
import { hrVsPeoGuide } from "@/lib/services/hr-vs-peo-guide";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(hrVsPeoGuide);

export default function HrVsPeoGuidePage() {
  return <ServicePage service={hrVsPeoGuide} related={getRelated(hrVsPeoGuide)} />;
}
