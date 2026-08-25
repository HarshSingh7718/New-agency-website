"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { Code, SearchCheck, MessagesSquare } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="bar">
        <a className="brand" href="/" aria-label="RapidGroDigital home">
          <Image
            className="brand-logo"
            src="/images/Agency-logo-bg-removed.png"
            alt="RapidGroDigital logo"
            width="500"
            height="500"
          ></Image>
        </a>
        <nav className="main-nav" aria-label="Primary">
          <a href="/" className={pathname === "/" ? "is-active" : ""}>
            Home
          </a>
          <div className="has-children">
            <a href="/#team" className="" aria-haspopup="true">
              About{" "}
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden={true}
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </a>
            <div className="dropdown">
              <a href="/#work">
                <span className="t">Areas We Serve</span>
              </a>
            </div>
          </div>
          <div className="has-children">
            <a href="/#services" className="" aria-haspopup="true">
              Services{" "}
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden={true}
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </a>
            <div className="dropdown">
              <a href="/contact">
                <span className="ico">
                  <iconify-icon icon="simple-icons:wordpress"></iconify-icon>
                </span>
                <span className="t">Hire WordPress Developer</span>
              </a>
              <a href="/contact">
                <span className="ico">
                  <iconify-icon icon="simple-icons:shopify"></iconify-icon>
                </span>
                <span className="t">Hire Shopify Developer</span>
              </a>
              <a href="/contact">
                <span className="ico">
                  <Code></Code>
                </span>
                <span className="t">Custom SaaS Applications</span>
              </a>
              <a href="/contact">
                <span className="ico">
                  <SearchCheck></SearchCheck>
                </span>
                <span className="t">Search Engine Optimization</span>
              </a>
              <a href="/contact">
                <span className="ico">
                  <MessagesSquare></MessagesSquare>
                </span>
                <span className="t">Social Media Marketing</span>
              </a>
              <a href="/contact">
                <span className="ico">
                  <iconify-icon icon="simple-icons:woocommerce"></iconify-icon>
                </span>
                <span className="t">WooCommerce Development</span>
              </a>
              <a href="/contact">
                <span className="ico">
                  <iconify-icon icon="simple-icons:webflow"></iconify-icon>
                </span>
                <span className="t">Webflow Development</span>
              </a>
            </div>
          </div>
          <a href="/#work" className="">
            Work
          </a>
          <a href="/#testimonials" className="">
            Our clients
          </a>
          <a href="/contact" className={pathname === "/contact" ? "is-active" : ""}>
            Contact
          </a>

        </nav>
        <a className="btn dark sm header-cta" href="/contact" data-magnetic>
          Get a quote <span className="arrow">↗</span>
        </a>
        <button
          className="burger"
          aria-expanded={false}
          aria-controls="mobile-nav"
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
