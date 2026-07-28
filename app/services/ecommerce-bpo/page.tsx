import type { Metadata } from "next";
import { ServicePage } from "@/components/service/ServicePage";
import { getRelated } from "@/lib/services";
import { ecommerceBpo } from "@/lib/services/ecommerce-bpo";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(ecommerceBpo);

export default function EcommerceBpoPage() {
  return <ServicePage service={ecommerceBpo} related={getRelated(ecommerceBpo)} />;
}
