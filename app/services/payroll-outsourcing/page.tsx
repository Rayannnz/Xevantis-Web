import type { Metadata } from "next";
import { ServicePage } from "@/components/service/ServicePage";
import { getRelated } from "@/lib/services";
import { payrollOutsourcing } from "@/lib/services/payroll-outsourcing";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(payrollOutsourcing);

export default function PayrollOutsourcingPage() {
  return <ServicePage service={payrollOutsourcing} related={getRelated(payrollOutsourcing)} />;
}
