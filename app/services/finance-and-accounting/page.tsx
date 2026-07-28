import type { Metadata } from "next";
import { ServicePage } from "@/components/service/ServicePage";
import { getRelated } from "@/lib/services";
import { financeAndAccounting } from "@/lib/services/finance-and-accounting";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(financeAndAccounting);

export default function FinanceAndAccountingPage() {
  return <ServicePage service={financeAndAccounting} related={getRelated(financeAndAccounting)} />;
}
