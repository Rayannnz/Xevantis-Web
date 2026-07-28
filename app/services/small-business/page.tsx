import type { Metadata } from "next";
import { ServicePage } from "@/components/service/ServicePage";
import { getRelated } from "@/lib/services";
import { smallBusiness } from "@/lib/services/small-business";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(smallBusiness);

export default function SmallBusinessPage() {
  return <ServicePage service={smallBusiness} related={getRelated(smallBusiness)} />;
}
