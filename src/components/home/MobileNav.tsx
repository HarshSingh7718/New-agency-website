"use client";
import Image from "next/image";
import {
  ChevronDown,
  Code,
  SearchCheck,
  MessagesSquare,
  Mail,
  Phone,
} from "lucide-react";

export default function MobileNav() {
  return (
    <>
      <div className="nav-backdrop"></div>
      <aside
        className="mobile-nav"
        id="mobile-nav"
        aria-label="Mobile navigation"
        aria-hidden={true}
      >
        <div className="m-top">
          <span className="m-brand">
            <Image
              className="brand-logo"
              src="/images/Agency-logo-bg-removed.png"
              alt="RapidGroDigital logo"
              width="500"
              height="500"
            ></Image>
          </span>
          <button className="m-close" type="button" aria-label="Close menu">
            <span></span>
            <span></span>
          </button>
        </div>
        <nav className="m-links" aria-label="Mobile primary">
          <a href="/">
            <span className="i">01</span>Home
          </a>
          <div className="m-item-sub">
            <button className="m-sub-btn" type="button" aria-expanded={false}>
              <span className="i">02</span>About
              <ChevronDown className="m-chev" aria-hidden={true}></ChevronDown>
            </button>
            <div className="m-sub">
              <a href="/#team">Employees Speak</a>
              <a href="/#work">Areas We Serve</a>
            </div>
          </div>
          <div className="m-item-sub">
            <button className="m-sub-btn" type="button" aria-expanded={false}>
              <span className="i">03</span>Services
              <ChevronDown className="m-chev" aria-hidden={true}></ChevronDown>
            </button>
            <div className="m-sub">
              <a href="/#services">All services</a>
              <a href="/contact">
                <iconify-icon icon="simple-icons:wordpress"></iconify-icon>Hire
                WordPress Developer
              </a>
              <a href="/contact">
                <iconify-icon icon="simple-icons:shopify"></iconify-icon>Hire
                Shopify Developer
              </a>
              <a href="/contact">
                <Code></Code>Custom SaaS Applications
              </a>
              <a href="/contact">
                <SearchCheck></SearchCheck>Search Engine Optimization
              </a>
              <a href="/contact">
                <MessagesSquare></MessagesSquare>Social Media Marketing
              </a>
              <a href="/contact">
                <iconify-icon icon="simple-icons:woocommerce"></iconify-icon>
                WooCommerce Development
              </a>
              <a href="/contact">
                <iconify-icon icon="simple-icons:webflow"></iconify-icon>Webflow
                Development
              </a>
            </div>
          </div>
          <a href="/#work">
            <span className="i">04</span>Work
          </a>
          <a href="/#testimonials">
            <span className="i">05</span>Our clients
          </a>
          <a href="/contact">
            <span className="i">06</span>Contact
          </a>

        </nav>{" "}
        <div className="m-contact">
          <span className="m-label">Get in touch</span>
          <a href="mailto:connect@rapidgrodigital.com">
            <Mail></Mail>connect@rapidgrodigital.com
          </a>
          <a href="tel:+919428258943">
            <Phone></Phone>094282 58943
          </a>
        </div>
        <div className="m-socials">
          <a
            href="https://www.linkedin.com/company/gap3agency/"
            aria-label="LinkedIn"
          >
            <iconify-icon icon="simple-icons:linkedin"></iconify-icon>
          </a>
          <a
            href="https://www.instagram.com/gap3agency/"
            aria-label="Instagram"
          >
            <iconify-icon icon="simple-icons:instagram"></iconify-icon>
          </a>
          <a href="https://in.pinterest.com/gap3agency/" aria-label="Pinterest">
            <iconify-icon icon="simple-icons:pinterest"></iconify-icon>
          </a>
        </div>
      </aside>
    </>
  );
}
