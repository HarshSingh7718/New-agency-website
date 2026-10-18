import type {Metadata} from "next";
import {redirect} from "next/navigation";
import {studioUrl} from "@/sanity/env";

export const metadata: Metadata = {
  title: "Content Studio",
  robots: {index: false, follow: false},
};

export default function StudioRedirectPage() {
  redirect(studioUrl);
}
