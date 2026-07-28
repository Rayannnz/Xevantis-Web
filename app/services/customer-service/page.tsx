import type { Metadata } from "next";
import { ServicePage } from "@/components/service/ServicePage";
import { getRelated } from "@/lib/services";
import { customerService } from "@/lib/services/customer-service";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(customerService);

export default function CustomerServicePage() {
  return <ServicePage service={customerService} related={getRelated(customerService)} />;
}
