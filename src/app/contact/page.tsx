import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/home/Header";
import MobileNav from "@/components/home/MobileNav";
import Footer from "@/components/home/Footer";
import BackToTop from "@/components/home/BackToTop";

export const metadata: Metadata = {
  title: "Contact | RapidGroDigital",
  description:
    "Get a quote from RapidGroDigital. Email connect@rapidgrodigital.com or call 094282 58943.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <MobileNav />
      <main id="main" className="section" style={{ paddingTop: "180px", paddingBottom: "120px" }}>
        <div className="container" style={{ maxWidth: "840px", margin: "0 auto" }}>
          
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <p
              className="eyebrow"
              style={{
                color: "var(--c-green)",
                marginBottom: "16px",
                letterSpacing: "0.12em",
                fontWeight: 700,
                fontSize: "13px"
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
                color: "var(--c-ink)"
              }}
            >
              Let us scope your <br />
              <span
                style={{
                  fontFamily: "var(--font-accent)",
                  fontStyle: "italic",
                  color: "var(--c-green)",
                  fontWeight: 400
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
                maxWidth: "580px",
                margin: "0 auto",
              }}
            >
              You have answers, you need to talk about your project and we need to hear. Get a quote within one business day. No obligations.
            </p>
          </div>

          <form className="cform">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "48px 34px",
              }}
            >
              <div className="field">
                <label
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--c-muted)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  First Name
                </label>
                <input type="text" placeholder="Your first name" required />
              </div>
              <div className="field">
                <label
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--c-muted)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Last Name
                </label>
                <input type="text" placeholder="Your last name" required />
              </div>
              <div className="field">
                <label
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--c-muted)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Email Address
                </label>
                <input type="email" placeholder="Your email address" required />
              </div>
              <div className="field">
                <label
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--c-muted)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Phone Number
                </label>
                <input type="tel" placeholder="+1 (555) 000-0000" />
              </div>
            </div>

            <div className="field" style={{ marginTop: "14px" }}>
              <label
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--c-muted)",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Company URL
              </label>
              <input type="url" placeholder="https://yourcompany.com" />
            </div>

            <div className="field" style={{ marginTop: "14px" }}>
              <label
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--c-muted)",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                Project Details
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your project and requirements."
                required
              ></textarea>
            </div>

            <div style={{ marginTop: "16px" }}>
              <button
                type="submit"
                className="btn dark"
                data-magnetic
                style={{
                  backgroundColor: "var(--c-green-deep)",
                  color: "white",
                  border: "none",
                }}
              >
                Send Message <span className="arrow">↗</span>
              </button>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--c-muted)",
                  marginTop: "24px",
                }}
              >
                By clicking this button, you agree to our terms and conditions and privacy policy.
              </p>
            </div>
          </form>

        </div>
      </main>
      <Footer />
      <BackToTop />
      
      {/* Initialize global scripts for navigation and interactions */}
      <Script src="/js/custom.js" strategy="afterInteractive" />
    </>
  );
}
