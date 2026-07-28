import type { Metadata } from "next";
import { ServicePage } from "@/components/service/ServicePage";
import { getRelated } from "@/lib/services";
import { adminSupport } from "@/lib/services/admin-support";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(adminSupport);

export default function AdminSupportPage() {
  return <ServicePage service={adminSupport} related={getRelated(adminSupport)} />;
}
