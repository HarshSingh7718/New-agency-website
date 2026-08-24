import Script from "next/script";
import Header from "@/components/home/Header";
import MobileNav from "@/components/home/MobileNav";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Team from "@/components/home/Team";
import Stats from "@/components/home/Stats";
import Approach from "@/components/home/Approach";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";
import BackToTop from "@/components/home/BackToTop";

export default function HomePage() {
  return (
    <>
      <Header />
      <MobileNav />
      <main id="main">
        <Hero />
        <Services />
        <Portfolio />
        <Team />
        <Stats />
        <Approach />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <BackToTop />

      <Script src="/js/hero-smoke.js" strategy="afterInteractive" />
      <Script src="/js/apart-steps.js" strategy="afterInteractive" />
      <Script src="/js/team.js" strategy="afterInteractive" />
      <Script src="/js/custom.js" strategy="afterInteractive" />
    </>
  );
}
