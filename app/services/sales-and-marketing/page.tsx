import type { Metadata } from "next";
import { ServicePage } from "@/components/service/ServicePage";
import { getRelated } from "@/lib/services";
import { salesAndMarketing } from "@/lib/services/sales-and-marketing";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(salesAndMarketing);

export default function SalesAndMarketingPage() {
  return <ServicePage service={salesAndMarketing} related={getRelated(salesAndMarketing)} />;
}
