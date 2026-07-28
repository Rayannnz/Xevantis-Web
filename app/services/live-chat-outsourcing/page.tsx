import type { Metadata } from "next";
import { ServicePage } from "@/components/service/ServicePage";
import { getRelated } from "@/lib/services";
import { liveChatOutsourcing } from "@/lib/services/live-chat-outsourcing";
import { serviceMetadata } from "@/lib/seo";

export const metadata: Metadata = serviceMetadata(liveChatOutsourcing);

export default function LiveChatOutsourcingPage() {
  return <ServicePage service={liveChatOutsourcing} related={getRelated(liveChatOutsourcing)} />;
}
