import Script from "next/script";
import { homeBodyHtml } from "@/lib/home-body";

export default function HomePage() {
  return (
    <>
      <div
        id="rgd-home-root"
        dangerouslySetInnerHTML={{ __html: homeBodyHtml }}
      />
      <Script src="/js/hero-smoke.js" strategy="afterInteractive" />
      <Script src="/js/apart-steps.js" strategy="afterInteractive" />
      <Script src="/js/team.js" strategy="afterInteractive" />
      <Script src="/js/custom.js" strategy="afterInteractive" />
    </>
  );
}
