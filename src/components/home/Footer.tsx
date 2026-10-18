"use client";

import Image from "next/image";
import DitheredFooter from "@/components/ui/dithered-footer";
import {CmsIcon} from "@/components/cms/CmsIcon";
import {useSiteSettings} from "@/sanity/SiteSettingsProvider";

export default function Footer() {
  const settings = useSiteSettings();
  const {footer} = settings;
  return (
    <DitheredFooter
      logo={settings.logo?.url ? <Image className="brand-logo" src={settings.logo.url} alt={settings.logo.alt || settings.brandName} width={500} height={500} /> : undefined}
      accent={footer.accent}
      largeText={footer.largeText}
      columns={footer.columns.map((column) => ({
        title: column.title,
        links: column.links.map((link) => ({...link, icon: link.icon ? <CmsIcon name={link.icon} size={16} /> : undefined})),
      }))}
      legal={footer.legal}
      copyright={footer.copyright.replace("{year}", String(new Date().getFullYear()))}
    />
  );
}
