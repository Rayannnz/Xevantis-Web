import type { Metadata } from "next";
import { ServicePage } from "@/components/service/ServicePage";
import { getRelated } from "@/lib/services";
import { hrOutsourcing } from "@/lib/services/hr-outsourcing";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(hrOutsourcing);

export default function HrOutsourcingPage() {
  return <ServicePage service={hrOutsourcing} related={getRelated(hrOutsourcing)} />;
}
