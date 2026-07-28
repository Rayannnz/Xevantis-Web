import type { Metadata } from "next";
import { ServicePage } from "@/components/service/ServicePage";
import { getRelated } from "@/lib/services";
import { financeOutsourcing } from "@/lib/services/finance-outsourcing";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(financeOutsourcing);

export default function FinanceOutsourcingPage() {
  return <ServicePage service={financeOutsourcing} related={getRelated(financeOutsourcing)} />;
}
