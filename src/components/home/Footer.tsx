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
          <a className="footer-email" style={{ fontSize: "medium" }} href="mailto:rapidgrodigitalforyou@gmail.com">
            rapidgrodigitalforyou@gmail.com
          </a>
          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/lucky-kumar-62b722434?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              aria-label="LinkedIn"
            >
              <iconify-icon icon="simple-icons:linkedin"></iconify-icon>
            </a>
            <a
              href="https://www.instagram.com/rapidgrodigital?stkn=MTY4enptcnZnb2hwdg=="
              aria-label="Instagram"
            >
              <iconify-icon icon="simple-icons:instagram"></iconify-icon>
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
                <a href="/#services">Services</a>
              </li>
              <li
                id="menu-item-427"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-427"
              >
                <a href="/#work">Work</a>
              </li>
              <li
                id="menu-item-428"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-428"
              >
                <a href="/#team">About</a>
              </li>
             
              <li
                id="menu-item-430"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-430"
              >
                <a href="/#testimonials">Our clients</a>
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
            <a href="/contact">Hire WordPress Developer</a>
            <a href="/contact">Hire Shopify Developer</a>
            <a href="/contact">Custom SaaS Applications</a>
            <a href="/contact">Search Engine Optimization</a>
            <a href="/contact">Social Media Marketing</a>
            <a href="/contact">WooCommerce Development</a>
            <a href="/contact">Webflow Development</a>{" "}
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
            <a className="footer-contact" href="tel:+917292854317">
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
            &copy; 2026 RapidGroDigital. All rights reserved.
           
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
