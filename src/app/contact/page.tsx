import type {Metadata} from "next";
import Script from "next/script";
import Header from "@/components/home/Header";
import MobileNav from "@/components/home/MobileNav";
import Footer from "@/components/home/Footer";
import BackToTop from "@/components/home/BackToTop";
import ContactForm, {type ContactFormContent} from "@/components/contact/ContactForm";
import CmsSetupRequired from "@/components/CmsSetupRequired";
import {getContactContent, getSiteSettings} from "@/sanity/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContactContent();
  return content?.seo ? {title: content.seo.title, description: content.seo.description, keywords: content.seo.keywords} : {};
}

export default async function ContactPage() {
  const [content, settings] = await Promise.all([getContactContent(), getSiteSettings()]);
  if (!content || !settings) return <CmsSetupRequired documentName={content ? "Site settings" : undefined} />;
  return (
    <>
      <Header /><MobileNav />
      <main id="main" className="section" style={{paddingTop: "calc(var(--navbar-spacing, 124px) + 68px)", paddingBottom: 120}}>
        <div className="container" style={{maxWidth: 840, margin: "0 auto"}}>
          <div style={{textAlign: "center", marginBottom: 72}}>
            <p className="eyebrow" style={{color: "var(--c-green)", marginBottom: 16, letterSpacing: ".12em", fontWeight: 700, fontSize: 13}}>{content.eyebrow}</p>
            <h1 className="title" style={{fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 1.1, marginBottom: 24, color: "var(--c-ink)"}}>
              {content.title}<br /><span style={{fontFamily: "var(--font-accent)", fontStyle: "italic", color: "var(--c-green)", fontWeight: 400}}>{content.accentTitle}</span>
            </h1>
            <p style={{fontSize: 18, color: "var(--c-body)", lineHeight: 1.7, maxWidth: 620, margin: "0 auto"}}>{content.description}</p>
          </div>
          <ContactForm content={content.form as ContactFormContent} />
        </div>
      </main>
      <Footer /><BackToTop /><Script src="/js/custom.js" strategy="afterInteractive" />
    </>
  );
}
