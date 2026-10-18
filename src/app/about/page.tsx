import type {Metadata} from "next";
import Image from "next/image";
import Script from "next/script";
import Header from "@/components/home/Header";
import MobileNav from "@/components/home/MobileNav";
import Footer from "@/components/home/Footer";
import BackToTop from "@/components/home/BackToTop";
import Team from "@/components/home/Team";
import CmsSetupRequired from "@/components/CmsSetupRequired";
import {CmsIcon} from "@/components/cms/CmsIcon";
import {getAboutContent, getSiteSettings} from "@/sanity/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getAboutContent();
  const seo = content?.page?.seo;
  return seo ? {title: seo.title, description: seo.description, keywords: seo.keywords} : {};
}

export default async function AboutPage() {
  const [content, settings] = await Promise.all([getAboutContent(), getSiteSettings()]);
  if (!content?.page || !settings) return <CmsSetupRequired documentName={content ? "About page or Site settings" : undefined} />;
  const {page, team} = content;
  return (
    <>
      <Header /><MobileNav />
      <main id="main">
        <section className="section relative" style={{paddingTop: "calc(var(--navbar-spacing, 124px) + 68px)", paddingBottom: "80px", overflow: "hidden", backgroundColor: "#F6EFFB"}}>
          <div className="container relative z-10"><div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10">
            <div className="flex-1">
              <h1 className="heading lg mb-6 reveal">{page.hero.title}<br /><span className="serif" style={{color: "var(--c-green-link)"}}>{page.hero.accentTitle}</span></h1>
              <p className="body-text max-w-[540px] reveal reveal-d2" style={{marginBottom: 30}}>{page.hero.description}</p>
              <a href={page.hero.cta.href} className="btn dark sm inline-flex items-center justify-center reveal reveal-d3" data-magnetic>{page.hero.cta.label}<span className="arrow">↗</span></a>
            </div>
            <div className="flex-1 relative w-full max-w-[450px] mx-auto lg:ml-auto">{page.hero.image?.url && <Image src={page.hero.image.url} alt={page.hero.image.alt || page.hero.title} width={800} height={800} className="w-full h-auto object-contain" priority />}</div>
          </div></div>
        </section>

        <section className="section alt" style={{padding: "100px 0"}}><div className="container"><div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="flex-1">
            <p className="eyebrow mb-6 uppercase text-[13px] font-bold tracking-widest reveal">{page.story.eyebrow}</p>
            <h2 className="heading mb-8 reveal reveal-d1">{page.story.title} {page.story.accentTitle && <span className="serif">{page.story.accentTitle}</span>}</h2>
            <div className="space-y-6 text-[18px] reveal reveal-d2">{page.story.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
          </div>
          <div className="flex-1 flex flex-col gap-6 justify-center">{page.values.map((item) => <article className="p-8 rounded-3xl bg-white border shadow-sm flex gap-6 items-start" key={item._key || item.title}><div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-[var(--c-icon-bg)] text-[var(--c-green-link)]"><CmsIcon name={item.icon} size={28} /></div><div><h3 className="text-[20px] font-bold mb-2">{item.title}</h3><p>{item.description}</p></div></article>)}</div>
        </div></div></section>

        <section className="section" style={{padding: "100px 0"}}><div className="container">
          <SectionHeading content={page.differentiatorsSection.heading} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{page.differentiatorsSection.items.map((item) => <article className="p-8 bg-white border rounded-3xl text-center flex flex-col items-center" key={item._key || item.title}><div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-[var(--c-icon-bg)] text-[var(--c-green-link)]"><CmsIcon name={item.icon} size={28} /></div><h3 className="text-[18px] font-bold mb-3">{item.title}</h3><p className="text-[15px] leading-relaxed">{item.description}</p></article>)}</div>
        </div></section>

        <section className="section" style={{paddingBottom: 120}}><div className="container">
          <SectionHeading content={page.capabilitiesSection.heading} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">{page.capabilitiesSection.items.map((item) => <article className="flex gap-4 items-start" key={item._key || item.title}><div className="w-14 h-14 rounded-full flex items-center justify-center bg-[var(--c-icon-bg)] text-[var(--c-green-link)]"><CmsIcon name={item.icon} size={24} /></div><div><h3 className="font-bold text-[15px] mb-1.5">{item.title}</h3><p className="text-[13px] leading-relaxed">{item.description}</p></div></article>)}</div>
        </div></section>

        <Team heading={page.teamSection} members={team} />
        <section className="pt-[120px] pb-[120px]"><div className="container"><div className="rounded-[32px] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 bg-[var(--c-icon-bg)]"><div><h2 className="heading mb-4">{page.cta.title} {page.cta.accentTitle && <span className="serif">{page.cta.accentTitle}</span>}</h2>{page.cta.description && <p>{page.cta.description}</p>}</div><a href={page.cta.link.href} className="btn dark lg">{page.cta.link.label}<span className="arrow">↗</span></a></div></div></section>
      </main>
      <Footer /><BackToTop /><Script src="/js/team.js" strategy="afterInteractive" /><Script src="/js/custom.js" strategy="afterInteractive" />
    </>
  );
}

function SectionHeading({content}: {content: {eyebrow?: string; title: string; accentTitle?: string; description?: string}}) {
  return <div className="flex flex-col items-center text-center reveal" style={{marginBottom: 64}}>{content.eyebrow && <p className="uppercase text-[13px] font-bold tracking-widest mb-4">{content.eyebrow}</p>}<h2 className="heading">{content.title} {content.accentTitle && <span className="serif ">{content.accentTitle}</span>}</h2>{content.description && <p className="body-text mt-4 max-w-[680px]">{content.description}</p>}</div>;
}
