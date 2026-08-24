import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | RapidGroDigital",
  description:
    "Get a quote from RapidGroDigital. Email connect@rapidgrodigital.com or call 094282 58943.",
};

export default function ContactPage() {
  return (
    <main className="section" style={{ padding: "120px 24px 80px" }}>
      <div className="container" style={{ maxWidth: 720, margin: "0 auto" }}>
        <p className="eyebrow" style={{ marginBottom: 12 }}>
          Contact
        </p>
        <h1
          style={{
            fontFamily: "Urbanist, system-ui, sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            fontWeight: 700,
            color: "#1a1525",
            marginBottom: 16,
          }}
        >
          Get a quote
        </h1>
        <p style={{ color: "#5b5568", lineHeight: 1.7, marginBottom: 28 }}>
          Tell us about your project. We build websites, ecommerce, SaaS, and
          growth systems for modern brands.
        </p>
        <div style={{ display: "grid", gap: 12, marginBottom: 36 }}>
          <a href="mailto:connect@rapidgrodigital.com">
            connect@rapidgrodigital.com
          </a>
          <a href="tel:+919428258943">094282 58943</a>
          <p style={{ color: "#5b5568", margin: 0 }}>
            Dehradun, Near Jigyasa University Gajender vihar AWHO Road Lane no
            2
          </p>
        </div>
        <Link className="btn dark" href="/">
          Back to home <span className="arrow">&#8599;</span>
        </Link>
      </div>
    </main>
  );
}
