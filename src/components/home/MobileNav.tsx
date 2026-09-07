"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  ChevronDown,
  Globe, Layers, Smartphone, BarChart3, Cloud, Users, Gamepad2, ShoppingCart, Palette, Code, ShieldCheck, Cpu,
  FileText, Share2, TrendingUp, SearchCheck,
  Settings2, Headset, Bot, Video, PenTool, Award,
  Mail, Phone,
} from "lucide-react";
import Script from "next/script";

export default function MobileNav() {
  const pathname = usePathname();
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
          <a href="/" className={pathname === "/" ? "is-active" : ""}>
            <span className="i">01</span>Home
          </a>
          <a href="/about" className={pathname === "/about" ? "is-active" : ""}>
            <span className="i">02</span>About
          </a>
          <div className="m-item-sub">
            <button className="m-sub-btn" type="button" aria-expanded={false}>
              <span className="i">03</span>Services
              <ChevronDown className="m-chev" aria-hidden={true}></ChevronDown>
            </button>
            <div className="m-sub">
              <div className="m-mega-title">DEVELOPMENT</div>
              <a href="/contact"><Globe size={18} /> Website Development Services</a>
              <a href="/contact"><Layers size={18} /> SaaS Development</a>
              <a href="/contact"><Smartphone size={18} /> Mobile App Development</a>
              <a href="/contact"><BarChart3 size={18} /> Data Science &amp; Analytics</a>
              <a href="/contact"><Cloud size={18} /> Cloud &amp; DevOps</a>
              <a href="/contact"><Users size={18} /> Staff Augmentation</a>
              <a href="/contact"><Gamepad2 size={18} /> Game Development</a>
              <a href="/contact"><ShoppingCart size={18} /> E-Commerce</a>
              <a href="/contact"><Palette size={18} /> UX/UI Design</a>
              <a href="/contact"><Code size={18} /> Full-Stack Development</a>
              <a href="/contact"><ShieldCheck size={18} /> Cybersecurity</a>
              <a href="/contact"><Cpu size={18} /> AI &amp; Machine Learning</a>

              <div className="m-mega-title">MARKETING</div>
              <a href="/contact"><FileText size={18} /> Content Marketing</a>
              <a href="/contact"><Share2 size={18} /> Social Media Marketing</a>
              <a href="/contact"><TrendingUp size={18} /> Performance Marketing Services</a>
              <a href="/contact"><SearchCheck size={18} /> SEO</a>

              <div className="m-mega-title">CREATIVE &amp; SUPPORT</div>
              <a href="/contact"><Settings2 size={18} /> Website Maintenance</a>
              <a href="/contact"><Headset size={18} /> Technical Support</a>
              <a href="/contact"><Bot size={18} /> AI Automation</a>
              <a href="/contact"><Video size={18} /> Video Editing</a>
              <a href="/contact"><PenTool size={18} /> Graphic Designing</a>
              <a href="/contact"><Award size={18} /> Branding</a>
            </div>
          </div>
          <a href="/#work">
            <span className="i">04</span>Work
          </a>
          <a href="/#testimonials">
            <span className="i">05</span>Our clients
          </a>
          <a href="/contact" className={pathname === "/contact" ? "is-active" : ""}>
            <span className="i">06</span>Contact
          </a>
          <div className="m-item-sub">
            <button className="m-sub-btn" type="button" aria-expanded={false}>
              <span className="i">07</span>Industries
              <ChevronDown className="m-chev" aria-hidden={true}></ChevronDown>
            </button>
            <div className="m-sub">
              <div className="m-mega-title">E-COMMERCE</div>
              <a href="/contact">Accounting Software Development</a>
              <a href="/contact">Amazon Clone App Development</a>
              <a href="/contact">B2B E-commerce</a>
              <a href="/contact">B2C E-commerce</a>
              <a href="/contact">BigCommerce Development</a>
              <a href="/contact">eBay Clone App Development</a>
              <a href="/contact">Flipkart Clone App Development</a>
              <a href="/contact">Shopify Development</a>

              <div className="m-mega-title">REAL ESTATE</div>
              <a href="/contact">Real Estate Website Development</a>
              <a href="/contact">Auction Web Portal</a>
              <a href="/contact">CRM Development</a>
              <a href="/contact">Commercial Real Estate</a>
              <a href="/contact">IDX Real Estate</a>
              <a href="/contact">Lead Management Software</a>
              <a href="/contact">Property Management Software</a>

              <div className="m-mega-title">HEALTHCARE</div>
              <a href="/contact">EMR / EHR Software</a>
              <a href="/contact">Doctor Appointment App</a>
              <a href="/contact">Healthcare Marketplace</a>
              <a href="/contact">Pharmacy App</a>
              <a href="/contact">Medical Billing Software</a>
              <a href="/contact">Practise Management Software</a>
              <a href="/contact">Healthcare CRM</a>

              <div className="m-mega-title">FINTECH</div>
              <a href="/contact">Blockchain / Crypto Software</a>
              <a href="/contact">Insurance Software</a>
              <a href="/contact">Investment App</a>
              <a href="/contact">Loan Origin App</a>
              <a href="/contact">Personal Finance App</a>
              <a href="/contact">P2P Lending App</a>
              <a href="/contact">Payment Gateway App</a>
            </div>
          </div>

        </nav>{" "}
        <div className="m-contact">
          <span className="m-label">Get in touch</span>
          <a href="mailto:rapidgrodigitalforyou@gmail.com">
            <Mail></Mail>rapidgrodigitalforyou@gmail.com
          </a>
          <a href="tel:+917292854317">
            <Phone></Phone>072928 54317
          </a>
        </div>
        <div className="m-socials">
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
      </aside>
    </>
  );
}
