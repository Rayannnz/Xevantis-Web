import type { Metadata } from "next";
import { ServicePage } from "@/components/service/ServicePage";
import { getRelated } from "@/lib/services";
import { maDealFlow } from "@/lib/services/ma-deal-flow";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(maDealFlow);

export default function MaDealFlowPage() {
  return <ServicePage service={maDealFlow} related={getRelated(maDealFlow)} />;
}
