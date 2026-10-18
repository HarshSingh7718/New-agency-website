"use client";

import {usePathname} from "next/navigation";
import InitialPopup from "@/components/ui/InitialPopup";
import AgencyChatbot from "@/components/chat/AgencyChatbot";

export default function SiteTools() {
  const pathname = usePathname();
  if (pathname.startsWith("/studio")) return null;
  return (
    <>
      <InitialPopup />
      <AgencyChatbot />
    </>
  );
}
