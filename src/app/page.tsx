import Script from "next/script";
import Header from "@/components/home/Header";
import MobileNav from "@/components/home/MobileNav";
import VideoHero from "@/components/home/VideoHero";
import Partners from "@/components/home/Partners";
import AboutUs from "@/components/home/AboutUs";
import Portfolio from "@/components/home/Portfolio";
import Services from "@/components/home/Services";
import { ClipPathLinks } from "@/components/ui/clip-path-links";
import Stats from "@/components/home/Stats";
import Approach from "@/components/home/Approach";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/home/Footer";
import BackToTop from "@/components/home/BackToTop";
import CmsSetupRequired from "@/components/CmsSetupRequired";
import {getHomeContent, getSiteSettings} from "@/sanity/lib/content";

export default async function HomePage() {
  const [content, settings] = await Promise.all([getHomeContent(), getSiteSettings()]);
  if (!content?.page || !settings) return <CmsSetupRequired documentName={content ? "Home page or Site settings" : undefined} />;
  const {page, projects, services, technologies, testimonials, faqs} = content;

  return (
    <>
      <Header />
      <MobileNav />
      <main id="main">
        {/* <Hero /> */}
        <VideoHero content={page.hero} socialLinks={settings.socialLinks} stats={page.statsSection.items} />
        <AboutUs content={page.aboutIntro} />
        <Portfolio heading={page.portfolioSection} projects={projects} cta={page.portfolioCta} />
        <Services heading={page.servicesSection} services={services} />
        <ClipPathLinks heading={page.technologySection} technologies={technologies} />
        {/* <Team /> */}
        <Stats items={page.statsSection.items} ariaLabel={page.statsSection.ariaLabel} />
        <Approach content={page.approachSection} />
        <Partners heading={page.clientLogosSection} logos={page.clientLogos ?? []} />
        <Testimonials content={page.testimonialsSection} testimonials={testimonials} />
        <FAQ content={page.faqSection} faqs={faqs} />
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
