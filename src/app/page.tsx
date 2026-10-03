import Script from "next/script";
import Header from "@/components/home/Header";
import MobileNav from "@/components/home/MobileNav";
import Hero from "@/components/home/Hero";
import AboutUs from "@/components/home/AboutUs";
import Portfolio from "@/components/home/Portfolio";
import Services from "@/components/home/Services";
import { ClipPathLinks } from "@/components/ui/clip-path-links";
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
        <AboutUs />
        <Portfolio />
        <Services />
        <ClipPathLinks />
        {/* <Team /> */}
        <Stats />
        <Approach />
        <Testimonials />
        <FAQ />
        {/* <CTA /> */}
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
