import type { Metadata } from "next";
import { ServicePage } from "@/components/service/ServicePage";
import { getRelated } from "@/lib/services";
import { itOutsourcing } from "@/lib/services/it-outsourcing";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(itOutsourcing);

export default function ItOutsourcingPage() {
  return <ServicePage service={itOutsourcing} related={getRelated(itOutsourcing)} />;
}
