import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Header from "@/components/home/Header";
import MobileNav from "@/components/home/MobileNav";
import Footer from "@/components/home/Footer";
import BackToTop from "@/components/home/BackToTop";
import {
  Rocket, Eye, Target, BrainCircuit, Users, BarChart3, Sparkles,
  Cpu, Settings, Code, Megaphone, PieChart, Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | RapidGroDigital",
  description: "Learn about RapidGroDigital's story, mission, and how we help businesses move faster.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <MobileNav />

      <main id="main">
        {/* HERO SECTION */}
        <section className="section relative" style={{ paddingTop: "120px", paddingBottom: "80px", overflow: "hidden", backgroundColor: "#F6EFFB" }}>
          <div className="container relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10">
              <div className="flex-1">
                <h1 className="heading lg mb-6 reveal" style={{ color: "var(--c-ink)" }}>
                  <span className="whitespace-nowrap">We're building the future</span><br />
                  of digital growth with <br />
                  <span className="serif" style={{ color: "var(--c-green-link)" }}>intelligence &amp; creativity.</span>
                </h1>
                <p className="body-text max-w-[540px] reveal reveal-d2" style={{ color: "var(--c-body)", marginBottom: "30px" }}>
                  RapidGro Digital is an AI consultancy and digital growth partner helping businesses automate, innovate, and scale with intelligent technology solutions.
                </p>
                <a href="https://wa.me/917292854317" target="_blank" rel="noopener noreferrer" className="btn dark sm inline-flex items-center justify-center overflow-hidden group relative hover:!bg-[var(--c-ink)] transition-colors duration-300 reveal reveal-d3" style={{ background: "var(--c-green-deep)", color: "#fff", height: "54px", minWidth: "240px" }} data-magnetic>
                  <div className="flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-12">
                    Start a conversation <span className="arrow">↗</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center gap-2 transition-transform duration-300 translate-y-12 group-hover:translate-y-0">
                    <Phone size={18} fill="currentColor" strokeWidth={0} /> 7292854317 <span className="arrow">↗</span>
                  </div>
                </a>
              </div>
              <div className="flex-1 relative w-full max-w-[450px] mx-auto lg:mx-0 lg:ml-auto flex items-center justify-center reveal-img">
                {/* Simulated floor shadow */}
                <div className="absolute w-[45%] h-[20px] bg-[rgba(160,80,240,0.4)] blur-[12px] rounded-[100%] bottom-[8%] right-[15%] pointer-events-none"></div>

                {/* 3D abstract object image */}
                <Image
                  src="/images/about-hero-3d.png"
                  alt="Abstract 3D Shape"
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain relative z-10"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* OUR STORY SECTION */}
        <section className="section alt" style={{ padding: "100px 0" }}>
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="flex-1">
                <p className="eyebrow mb-6 uppercase text-[13px] font-bold tracking-widest reveal" style={{ color: "var(--c-green-link)" }}>
                  OUR STORY
                </p>
                <h2 className="heading mb-8 reveal reveal-d1">
                  Built to make businesses move <span className="serif" style={{ color: "var(--c-green-link)" }}>faster.</span>
                </h2>
                <div className="space-y-6 text-[18px] reveal reveal-d2" style={{ color: "var(--c-body)" }}>
                  <p>
                    RapidGro Digital was founded with a clear vision — to help businesses unlock growth through smart automation, AI, and digital innovation.
                  </p>
                  <p>
                    We noticed that most businesses struggle with time-consuming manual tasks, disconnected systems, and slow adoption of technology. RapidGro exists to change that.
                  </p>
                  <p>
                    We combine strategy, creativity, and AI-powered solutions to build systems that save time, reduce costs, and drive measurable growth.
                  </p>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-6 justify-center">

                {/* Mission Card */}
                <div className="p-8 rounded-3xl bg-[var(--c-white)] border border-[var(--c-line-2)] shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row gap-6 items-start transition-transform hover:-translate-y-1 reveal reveal-right">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "var(--c-icon-bg)", color: "var(--c-green-link)" }}>
                    <Rocket size={28} />
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold mb-2" style={{ color: "var(--c-ink)" }}>Our Mission</h3>
                    <p style={{ color: "var(--c-secondary)", lineHeight: 1.6 }}>To empower businesses with intelligent solutions that simplify operations and accelerate growth.</p>
                  </div>
                </div>

                {/* Vision Card */}
                <div className="p-8 rounded-3xl bg-[var(--c-white)] border border-[var(--c-line-2)] shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row gap-6 items-start transition-transform hover:-translate-y-1 reveal reveal-right reveal-d2">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "var(--c-icon-bg)", color: "var(--c-green-link)" }}>
                    <Eye size={28} />
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold mb-2" style={{ color: "var(--c-ink)" }}>Our Vision</h3>
                    <p style={{ color: "var(--c-secondary)", lineHeight: 1.6 }}>To become the most trusted AI-powered growth partner for businesses across the globe.</p>
                  </div>
                </div>

                {/* Promise Card */}
                <div className="p-8 rounded-3xl bg-[var(--c-white)] border border-[var(--c-line-2)] shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row gap-6 items-start transition-transform hover:-translate-y-1 reveal reveal-right reveal-d3">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "var(--c-icon-bg)", color: "var(--c-green-link)" }}>
                    <Target size={28} />
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold mb-2" style={{ color: "var(--c-ink)" }}>Our Promise</h3>
                    <p style={{ color: "var(--c-secondary)", lineHeight: 1.6 }}>We deliver smart, scalable, and results-driven solutions that create real impact.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* WHAT MAKES US DIFFERENT SECTION */}
        <section className="section" style={{ padding: "100px 0" }}>
          <div className="container">
            <div className="flex flex-col items-center justify-center w-full text-center reveal" style={{ marginBottom: "35px" }}>
              <p className="uppercase text-[13px] font-bold tracking-widest mb-4" style={{ color: "var(--c-green-link)" }}>
                WHAT MAKES US DIFFERENT?
              </p>
              <h2 className="heading" style={{ textAlign: "center", color: "var(--c-ink)", width: "100%" }}>
                Solutions that <span className="serif" style={{ color: "var(--c-green-link)" }}>think, create &amp; grow</span> with you.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="p-8 bg-[var(--c-white)] border border-[var(--c-line-2)] rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] text-center flex flex-col items-center hover:border-[var(--c-green-link)] transition-colors reveal reveal-d1">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: "var(--c-icon-bg)", color: "var(--c-green-link)" }}>
                  <BrainCircuit size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-[18px] font-bold mb-3" style={{ color: "var(--c-ink)" }}>AI-Powered Solutions</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--c-secondary)" }}>
                  We use intelligent technology to automate, optimize, and solve real business challenges.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-8 bg-[var(--c-white)] border border-[var(--c-line-2)] rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] text-center flex flex-col items-center hover:border-[var(--c-green-link)] transition-colors reveal reveal-d2">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: "var(--c-icon-bg)", color: "var(--c-green-link)" }}>
                  <Users size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-[18px] font-bold mb-3" style={{ color: "var(--c-ink)" }}>Business-First Approach</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--c-secondary)" }}>
                  Every solution we build is aligned with your goals and designed for real impact.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-8 bg-[var(--c-white)] border border-[var(--c-line-2)] rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] text-center flex flex-col items-center hover:border-[var(--c-green-link)] transition-colors reveal reveal-d3">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: "var(--c-icon-bg)", color: "var(--c-green-link)" }}>
                  <BarChart3 size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-[18px] font-bold mb-3" style={{ color: "var(--c-ink)" }}>Scalable &amp; Flexible</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--c-secondary)" }}>
                  Our solutions are built to scale with your business and adapt to your needs.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-8 bg-[var(--c-white)] border border-[var(--c-line-2)] rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] text-center flex flex-col items-center hover:border-[var(--c-green-link)] transition-colors reveal reveal-d4">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: "var(--c-icon-bg)", color: "var(--c-green-link)" }}>
                  <Sparkles size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-[18px] font-bold mb-3" style={{ color: "var(--c-ink)" }}>Creative + Technical</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: "var(--c-secondary)" }}>
                  A perfect blend of creativity and technology to deliver experiences that perform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO SECTION */}
        <section className="section" style={{ paddingBottom: "120px" }}>
          <div className="container">
            <div className="flex flex-col items-center justify-center w-full text-center reveal" style={{ marginBottom: "64px" }}>
              <span className="inline-block py-2 px-4 rounded-full text-[12px] font-bold tracking-widest uppercase mb-6" style={{ background: "var(--c-icon-bg)", color: "var(--c-green-link)" }}>
                WHAT WE DO
              </span>
              <h2 className="heading md" style={{ textAlign: "center", color: "var(--c-ink)", width: "100%" }}>
                From strategy to automation — we help you <span className="serif" style={{ color: "var(--c-green-link)" }}>grow.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 mt-12">

              {/* Item 1 */}
              <div className="flex gap-4 items-start lg:pr-6 lg:border-r border-[var(--c-line-2)] reveal reveal-d1">
                <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-[var(--c-icon-bg)] text-[var(--c-green-link)]">
                  <Cpu size={24} strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-[15px] mb-1.5" style={{ color: "var(--c-ink)" }}>AI Consulting</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--c-secondary)" }}>Strategic guidance to implement AI that drives real business value.</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4 items-start lg:px-6 lg:border-r border-[var(--c-line-2)] reveal reveal-d2">
                <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-[var(--c-icon-bg)] text-[var(--c-green-link)]">
                  <Settings size={24} strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-[15px] mb-1.5" style={{ color: "var(--c-ink)" }}>Automation</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--c-secondary)" }}>Automate workflows and processes to save time and resources.</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-4 items-start lg:px-6 lg:border-r border-[var(--c-line-2)] reveal reveal-d3">
                <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-[var(--c-icon-bg)] text-[var(--c-green-link)]">
                  <Code size={24} strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-[15px] mb-1.5" style={{ color: "var(--c-ink)" }}>Custom AI Solutions</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--c-secondary)" }}>Tailored AI systems built to solve your unique challenges.</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex gap-4 items-start lg:px-6 lg:border-r border-[var(--c-line-2)] reveal reveal-d4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-[var(--c-icon-bg)] text-[var(--c-green-link)]">
                  <Megaphone size={24} strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-[15px] mb-1.5" style={{ color: "var(--c-ink)" }}>Digital Growth</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--c-secondary)" }}>Data-driven digital strategies that attract, engage &amp; convert.</p>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex gap-4 items-start lg:pl-6 reveal reveal-d5">
                <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-[var(--c-icon-bg)] text-[var(--c-green-link)]">
                  <PieChart size={24} strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-[15px] mb-1.5" style={{ color: "var(--c-ink)" }}>Analytics &amp; Insights</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--c-secondary)" }}>Turn data into actionable insights and grow with confidence.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* BOTTOM CTA SECTION */}
        <section className="pb-[120px]">
          <div className="container">
            <div className="rounded-[32px] p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 reveal" style={{ background: "linear-gradient(135deg, var(--c-icon-bg) 0%, var(--c-bg-alt) 100%)" }}>
              <div className="text-center lg:text-left">
                <h2 className="heading mb-4 text-[36px] lg:text-[46px]">
                  Ready to grow <span className="serif" style={{ color: "var(--c-green-link)" }}>smarter?</span>
                </h2>
                <p className="text-[18px]" style={{ color: "var(--c-body)" }}>
                  Let's build intelligent solutions that take your business to the next level.
                </p>
              </div>
              <a href="/contact" className="btn dark lg whitespace-nowrap inline-flex items-center justify-center overflow-hidden group relative hover:!bg-[var(--c-ink)] transition-colors duration-300 reveal reveal-d2" style={{ background: "var(--c-green-deep)", color: "#fff", height: "56px", minWidth: "260px", padding: "0 36px", fontSize: "17px" }} data-magnetic>
                <div className="flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-14">
                  Let's build together <span className="arrow">↗</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center gap-2 transition-transform duration-300 translate-y-14 group-hover:translate-y-0">
                  Let's build together <span className="arrow">↗</span>
                </div>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <BackToTop />
      <Script src="/js/custom.js" strategy="afterInteractive" />
    </>
  );
}
