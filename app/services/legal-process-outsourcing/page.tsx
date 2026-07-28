import type { Metadata } from "next";
import { ServicePage } from "@/components/service/ServicePage";
import { getRelated } from "@/lib/services";
import { legalProcessOutsourcing } from "@/lib/services/legal-process-outsourcing";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(legalProcessOutsourcing);

export default function LegalProcessOutsourcingPage() {
  return <ServicePage service={legalProcessOutsourcing} related={getRelated(legalProcessOutsourcing)} />;
}
