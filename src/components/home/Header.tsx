"use client";

import {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {ChevronDown, Phone} from "lucide-react";
import {usePathname} from "next/navigation";
import {CmsIcon} from "@/components/cms/CmsIcon";
import {useSiteSettings} from "@/sanity/SiteSettingsProvider";

export default function Header() {
  const settings = useSiteSettings();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement)?.closest(".has-children")) {
        setOpenDropdown(null);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="top-strip">
        <div className="marquee-wrapper">
          <div className="top-marquee-track" data-marquee-clone>
            <div className="group">
              {[...settings.header.announcements, ...settings.header.announcements].map((item, index) => (
                <span key={item._key ? `${item._key}-${index}` : index}>
                  {item.text} {item.href && item.linkLabel && <a href={item.href}>{item.linkLabel}</a>}
                  <span className="sep">+</span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="top-strip-action">
          <a href="/contact" className="quick-consult-btn"><Phone size={14} strokeWidth={2.5} />{settings.header.quickConsultLabel}</a>
        </div>
      </div>
      <div className="w-full bg-[var(--navbar-bg,#ffffff)] transition-colors duration-300">
        <div className="bar">
          <Link className="brand" href="/" aria-label={`${settings.brandName} home`}>
            {settings.logo?.url && <Image className="brand-logo" src={settings.logo.url} alt={settings.logo.alt || settings.brandName} width={500} height={500} />}
          </Link>
          <nav className="main-nav" aria-label="Primary">
            {settings.navigation.map((item) => {
              const itemKey = item._key || item.label;
              const isOpen = openDropdown === itemKey;
              return item.groups?.length ? (
                <div
                  className={`has-children ${isOpen ? "is-open" : ""}`}
                  key={itemKey}
                >
                  <a
                    href={item.href}
                    className={pathname === item.href ? "is-active" : ""}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenDropdown((prev) => (prev === itemKey ? null : itemKey));
                    }}
                  >
                    {item.label}
                    <ChevronDown size={14} strokeWidth={2.25} aria-hidden="true" />
                  </a>
                  <div
                    className={`dropdown ${item.groups.length > 1 ? "mega" : ""} ${
                      item.label?.toLowerCase() === "industries" || item.groups.length > 3
                        ? "mega-industries"
                        : ""
                    }`}
                  >
                    {item.groups.map((group) => (
                      <div className="mega-col" key={group._key || group.title}>
                        {group.title && <div className="mega-title">{group.title}</div>}
                        {group.items.map((link) => (
                          <a
                            href={link.href}
                            key={link._key || link.label}
                            onClick={() => setOpenDropdown(null)}
                          >
                            {link.icon && <span className="ico"><CmsIcon name={link.icon} /></span>}
                            <span className="t">{link.label}</span>
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <a href={item.href} className={pathname === item.href ? "is-active" : ""} key={itemKey}>{item.label}</a>
              );
            })}
          </nav>
          <div className="header-actions">
            <a className="btn dark sm header-cta" href={settings.contact.whatsappUrl} data-magnetic>
              {settings.header.phoneCtaLabel} {settings.contact.phoneDisplay} <span className="arrow">↗</span>
            </a>
          </div>
          <button className="burger" aria-expanded={false} aria-controls="mobile-nav" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
