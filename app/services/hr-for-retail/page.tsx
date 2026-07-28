import type { Metadata } from "next";
import { ServicePage } from "@/components/service/ServicePage";
import { getRelated } from "@/lib/services";
import { hrForRetail } from "@/lib/services/hr-for-retail";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(hrForRetail);

export default function HrForRetailPage() {
  return <ServicePage service={hrForRetail} related={getRelated(hrForRetail)} />;
}
