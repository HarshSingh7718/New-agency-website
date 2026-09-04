import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/home/Header";
import MobileNav from "@/components/home/MobileNav";
import Footer from "@/components/home/Footer";
import BackToTop from "@/components/home/BackToTop";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | RapidGroDigital",
  description:
    "Tell RapidGroDigital about your website, ecommerce, SaaS or digital marketing project.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <MobileNav />

      <main
        id="main"
        className="section"
        style={{ paddingTop: "180px", paddingBottom: "120px" }}
      >
        <div
          className="container"
          style={{ maxWidth: "840px", margin: "0 auto" }}
        >
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <p
              className="eyebrow"
              style={{
                color: "var(--c-green)",
                marginBottom: "16px",
                letterSpacing: "0.12em",
                fontWeight: 700,
                fontSize: "13px",
              }}
            >
              START YOUR PROJECT
            </p>

            <h1
              className="title"
              style={{
                fontSize: "clamp(3rem, 6vw, 5rem)",
                lineHeight: 1.1,
                marginBottom: "24px",
                color: "var(--c-ink)",
              }}
            >
              Let&apos;s scope your <br />
              <span
                style={{
                  fontFamily: "var(--font-accent)",
                  fontStyle: "italic",
                  color: "var(--c-green)",
                  fontWeight: 400,
                }}
              >
                project.
              </span>
            </h1>

            <p
              style={{
                fontSize: "18px",
                color: "var(--c-body)",
                lineHeight: 1.7,
                maxWidth: "620px",
                margin: "0 auto",
              }}
            >
              Share what you want to build, the outcome you need and any
              constraints we should know about. The team can use that context to
              scope the right approach.
            </p>
          </div>

          <ContactForm />
        </div>
      </main>

      <Footer />
      <BackToTop />
      <Script src="/js/custom.js" strategy="afterInteractive" />
    </>
  );
}
