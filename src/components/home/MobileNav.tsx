"use client";

import Image from "next/image";
import {ChevronDown, Mail, Phone} from "lucide-react";
import {usePathname} from "next/navigation";
import {CmsIcon} from "@/components/cms/CmsIcon";
import {useSiteSettings} from "@/sanity/SiteSettingsProvider";

export default function MobileNav() {
  const settings = useSiteSettings();
  const pathname = usePathname();
  return (
    <>
      <div className="nav-backdrop"></div>
      <aside className="mobile-nav" id="mobile-nav" aria-label="Mobile navigation" aria-hidden={true}>
        <div className="m-top">
          <span className="m-brand">
            {settings.logo?.url && <Image className="brand-logo" src={settings.logo.url} alt={settings.logo.alt || settings.brandName} width={500} height={500} />}
          </span>
          <button className="m-close" type="button" aria-label="Close menu"><span></span><span></span></button>
        </div>
        <nav className="m-links" aria-label="Mobile primary">
          {settings.navigation.map((item, index) =>
            item.groups?.length ? (
              <div className="m-item-sub" key={item._key || item.label}>
                <button className="m-sub-btn" type="button" aria-expanded={false}>
                  <span className="i">{String(index + 1).padStart(2, "0")}</span>{item.label}
                  <ChevronDown className="m-chev" aria-hidden="true" />
                </button>
                <div className="m-sub">
                  {item.groups.map((group) => (
                    <div key={group._key || group.title}>
                      {group.title && <div className="m-mega-title">{group.title}</div>}
                      {group.items.map((link) => (
                        <a href={link.href} key={link._key || link.label}><CmsIcon name={link.icon} />{link.label}</a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <a href={item.href} className={pathname === item.href ? "is-active" : ""} key={item._key || item.label}>
                <span className="i">{String(index + 1).padStart(2, "0")}</span>{item.label}
              </a>
            ),
          )}
        </nav>
        <div className="m-contact">
          <span className="m-label">Get in touch</span>
          <a href={`mailto:${settings.contact.email}`}><Mail />{settings.contact.email}</a>
          <a href={settings.contact.phoneHref}><Phone />{settings.contact.phoneDisplay}</a>
        </div>
        <div className="m-socials">
          {settings.socialLinks.map((social) => (
            <a href={social.url} aria-label={social.label} target="_blank" rel="noopener noreferrer" key={social._key || social.platform}>
              <iconify-icon icon={`simple-icons:${social.platform}`}></iconify-icon>
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
