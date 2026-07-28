import type { Metadata } from "next";
import { ServicePage } from "@/components/service/ServicePage";
import { getRelated } from "@/lib/services";
import { nearshoreBpo } from "@/lib/services/nearshore-bpo";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(nearshoreBpo);

export default function NearshoreBpoPage() {
  return <ServicePage service={nearshoreBpo} related={getRelated(nearshoreBpo)} />;
}
