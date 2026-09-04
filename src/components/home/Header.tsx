"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { 
  Globe, Layers, Smartphone, BarChart3, Cloud, Users, Gamepad2, ShoppingCart, Palette, Code, ShieldCheck, Cpu,
  FileText, Share2, TrendingUp, SearchCheck,
  Settings2, Headset, Bot, Video, PenTool, Award 
} from "lucide-react";
import Script from "next/script";

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
            <div className="dropdown mega">
              <div className="mega-col">
                <div className="mega-title">DEVELOPMENT</div>
                <a href="/contact">
                  <span className="ico"><Globe /></span>
                  <span className="t">Website Development Services</span>
                </a>
                <a href="/contact">
                  <span className="ico"><Layers /></span>
                  <span className="t">SaaS Development</span>
                </a>
                <a href="/contact">
                  <span className="ico"><Smartphone /></span>
                  <span className="t">Mobile App Development</span>
                </a>
                <a href="/contact">
                  <span className="ico"><BarChart3 /></span>
                  <span className="t">Data Science & Analytics</span>
                </a>
                <a href="/contact">
                  <span className="ico"><Cloud /></span>
                  <span className="t">Cloud & DevOps</span>
                </a>
                <a href="/contact">
                  <span className="ico"><Users /></span>
                  <span className="t">Staff Augmentation</span>
                </a>
                <a href="/contact">
                  <span className="ico"><Gamepad2 /></span>
                  <span className="t">Game Development</span>
                </a>
                <a href="/contact">
                  <span className="ico"><ShoppingCart /></span>
                  <span className="t">E-Commerce</span>
                </a>
                <a href="/contact">
                  <span className="ico"><Palette /></span>
                  <span className="t">UX/UI Design</span>
                </a>
                <a href="/contact">
                  <span className="ico"><Code /></span>
                  <span className="t">Full-Stack Development</span>
                </a>
                <a href="/contact">
                  <span className="ico"><ShieldCheck /></span>
                  <span className="t">Cybersecurity</span>
                </a>
                <a href="/contact">
                  <span className="ico"><Cpu /></span>
                  <span className="t">AI & Machine Learning</span>
                </a>
              </div>
              <div className="mega-col">
                <div className="mega-title">MARKETING</div>
                <a href="/contact">
                  <span className="ico"><FileText /></span>
                  <span className="t">Content Marketing</span>
                </a>
                <a href="/contact">
                  <span className="ico"><Share2 /></span>
                  <span className="t">Social Media Marketing</span>
                </a>
                <a href="/contact">
                  <span className="ico"><TrendingUp /></span>
                  <span className="t">Performance Marketing Services</span>
                </a>
                <a href="/contact">
                  <span className="ico"><SearchCheck /></span>
                  <span className="t">SEO (Search Engine Optimization)</span>
                </a>
              </div>
              <div className="mega-col">
                <div className="mega-title">CREATIVE & SUPPORT</div>
                <a href="/contact">
                  <span className="ico"><Settings2 /></span>
                  <span className="t">Website Maintenance</span>
                </a>
                <a href="/contact">
                  <span className="ico"><Headset /></span>
                  <span className="t">Technical Support</span>
                </a>
                <a href="/contact">
                  <span className="ico"><Bot /></span>
                  <span className="t">AI Automation</span>
                </a>
                <a href="/contact">
                  <span className="ico"><Video /></span>
                  <span className="t">Video Editing</span>
                </a>
                <a href="/contact">
                  <span className="ico"><PenTool /></span>
                  <span className="t">Graphic Designing</span>
                </a>
                <a href="/contact">
                  <span className="ico"><Award /></span>
                  <span className="t">Branding</span>
                </a>
              </div>
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
          <div className="has-children">
            <a href="/#industries" className="" aria-haspopup="true">
              Industries{" "}
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
            <div className="dropdown mega align-right">
              <div className="mega-col">
                <div className="mega-title">E-COMMERCE</div>
                <a href="/contact"><span className="t">Accounting Software Development Services</span></a>
                <a href="/contact"><span className="t">Amazon Clone App Development Company</span></a>
                <a href="/contact"><span className="t">Custom E-commerce App Development Company</span></a>
                <a href="/contact"><span className="t">Custom E-commerce Software Development Company</span></a>
                <a href="/contact"><span className="t">Custom Marketplace App Development Company</span></a>
                <a href="/contact"><span className="t">E-commerce App & Website Development Company</span></a>

                <div className="mega-title" style={{ marginTop: '16px' }}>FOOD & BEVERAGE</div>
                <a href="/contact"><span className="t">Custom Grocery Delivery App Development Company</span></a>
                <a href="/contact"><span className="t">Custom Restaurant Management Software Development Company</span></a>
                <a href="/contact"><span className="t">Food Delivery App Development Company</span></a>
                <a href="/contact"><span className="t">Food Ordering System Development</span></a>
              </div>
              <div className="mega-col">
                <div className="mega-title">EDUCATION</div>
                <a href="/contact"><span className="t">Learning Management System (LMS) Development</span></a>
                <a href="/contact"><span className="t">School Management Software Development</span></a>
                <a href="/contact"><span className="t">Student Information System (SIS) Development</span></a>

                <div className="mega-title" style={{ marginTop: '16px' }}>REAL ESTATE</div>
                <a href="/contact"><span className="t">Custom Real Estate Platform Solutions</span></a>
              </div>
              <div className="mega-col">
                <div className="mega-title">ENTERPRISE</div>
                <a href="/contact"><span className="t">CRM Software Development</span></a>
                <a href="/contact"><span className="t">ERP Software Development</span></a>
                <a href="/contact"><span className="t">HRM Software Development</span></a>
                <a href="/contact"><span className="t">HRMS Software Development</span></a>
                <a href="/contact"><span className="t">Inventory Management Software Development</span></a>

                <div className="mega-title" style={{ marginTop: '16px' }}>SOCIAL MEDIA</div>
                <a href="/contact"><span className="t">Custom Chat App Development Company</span></a>
                <a href="/contact"><span className="t">Custom Dating App Development Company</span></a>
                <a href="/contact"><span className="t">Custom Influencer App Development Company</span></a>
                <a href="/contact"><span className="t">Social Media App Development Company</span></a>
              </div>
            </div>
          </div>

        </nav>
        <a className="btn dark sm header-cta" href="https://wa.me/917292854317" data-magnetic>
          📞 7292854317 <span className="arrow">↗</span>
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
