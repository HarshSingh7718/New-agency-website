import Link from "next/link";
import Image from "next/image";
import { Wrench, SearchCheck, Send, MapPin, Mail, Phone } from "lucide-react";
import Script from "next/script";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="in">
        <span className="footer-watermark" aria-hidden="true">
          rapidgrodigital
        </span>
        <div className="top">
          <a className="footer-email" href="mailto:rapidgrodigitalforyou@gmail.com">
            rapidgrodigitalforyou@gmail.com
          </a>
          <div className="footer-socials">
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
            <a
              href="https://in.pinterest.com/gap3agency/"
              aria-label="Pinterest"
            >
              <iconify-icon icon="simple-icons:pinterest"></iconify-icon>
            </a>
          </div>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>Pages</h4>
            <ul className="footer-menu">
              <li
                id="menu-item-425"
                className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-425"
              >
                <a href="/" aria-current="page">
                  Home
                </a>
              </li>
              <li
                id="menu-item-426"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-426"
              >
                <a href="#">About</a>
              </li>
              <li
                id="menu-item-427"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-427"
              >
                <a href="#">Services</a>
              </li>
              <li
                id="menu-item-428"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-428"
              >
                <a href="#">Work</a>
              </li>
              <li
                id="menu-item-656"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-656"
              >
                <a href="#">Partners</a>
              </li>
              <li
                id="menu-item-430"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-430"
              >
                <a href="#">Blog</a>
              </li>
              <li
                id="menu-item-431"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-431"
              >
                <a href="/contact">Contact</a>
              </li>
            </ul>{" "}
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <a href="#">Hire WordPress Developer</a>
            <a href="#">Hire Shopify Developer</a>
            <a href="#">Custom SaaS Applications</a>
            <a href="#">Search Engine Optimization</a>
            <a href="#">Social Media Marketing</a>
            <a href="#">WooCommerce Development</a>
            <a href="#">Webflow Development</a>{" "}
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <a
              className="footer-prod"
              href="https://wbiz.in/"
              target="_blank"
              rel="noopener"
            >
              <span className="p-ico">
                <iconify-icon icon="simple-icons:whatsapp"></iconify-icon>
              </span>
              <span>
                <span className="p-t">WBIZ</span>
                <span className="p-d">
                  WhatsApp automation &amp; business messaging
                </span>
              </span>
            </a>
            <a
              className="footer-prod"
              href="https://mytoolstudio.com/"
              target="_blank"
              rel="noopener"
            >
              <span className="p-ico">
                <Wrench></Wrench>
              </span>
              <span>
                <span className="p-t">MyToolStudio</span>
                <span className="p-d">
                  Free online tools for teams &amp; creators
                </span>
              </span>
            </a>
            <a
              className="footer-prod"
              href="https://mytoolstudio.com/tools/site-audit/"
              target="_blank"
              rel="noopener"
            >
              <span className="p-ico">
                <SearchCheck></SearchCheck>
              </span>
              <span>
                <span className="p-t">Site Audit</span>
                <span className="p-d">
                  Instant website health &amp; SEO check
                </span>
              </span>
            </a>
            <a
              className="footer-prod"
              href="https://mytoolstudio.com/tools/file-transfer/"
              target="_blank"
              rel="noopener"
            >
              <span className="p-ico">
                <Send></Send>
              </span>
              <span>
                <span className="p-t">File Transfer</span>
                <span className="p-d">Send large project files securely</span>
              </span>
            </a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a
              className="footer-contact"
              href="https://share.google/kCFvwivlDpB1shCFS"
              target="_blank"
              rel="noopener"
            >
              <MapPin></MapPin>
              <span>
                Dehradun, Near Jigyasa University Gajender vihar AWHO Road Lane
                no 2
              </span>
            </a>
            <a
              className="footer-contact"
              href="mailto:rapidgrodigitalforyou@gmail.com"
            >
              <Mail></Mail>
              <span>rapidgrodigitalforyou@gmail.com</span>
            </a>
            <a className="footer-contact" href="tel:+919428258943">
              <Phone></Phone>
              <span>7292854317</span>
            </a>
          </div>
        </div>
        <div className="footer-bar">
          <span className="footer-brand">
            <Image
              className="brand-logo"
              src="/images/Agency-logo-bg-removed.png"
              alt="RapidGroDigital logo"
              width="500"
              height="500"
            ></Image>
          </span>
          <span className="footer-copy">
            &copy; 2024 RapidGroDigital. All rights reserved.
           
          </span>
          <span className="footer-legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>{" "}
          </span>
        </div>
      </div>
    </footer>
  );
}
