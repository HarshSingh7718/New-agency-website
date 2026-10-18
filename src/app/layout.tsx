import type { Metadata, Viewport } from "next";
import {draftMode} from "next/headers";
import Script from "next/script";
import SiteTools from "@/components/SiteTools";
import {getHomeContent, getSiteSettings} from "@/sanity/lib/content";
import {isSanityConfigured} from "@/sanity/env";
import {SiteSettingsProvider} from "@/sanity/SiteSettingsProvider";
import SanityRuntime from "@/sanity/SanityRuntime";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const [settings, home] = await Promise.all([getSiteSettings(), getHomeContent()]);
  const seo = home?.page?.seo;
  if (!settings || !seo) return {title: "Website content setup required", robots: {index: false, follow: false}};

  return {
    title: {default: seo.title, template: `%s | ${settings.brandName}`},
    description: seo.description,
    keywords: seo.keywords,
    icons: settings.logo?.url ? {icon: settings.logo.url} : undefined,
    openGraph: {type: "website", title: seo.title, description: seo.description, siteName: settings.brandName, images: seo.image?.url ? [seo.image.url] : undefined},
  };
}

export const viewport: Viewport = {
  themeColor: "#F8F6FB",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();
  const previewEnabled = (await draftMode()).isEnabled;

  return (
    <html lang="en-US" className="js">
      <head>
        <meta name="apple-mobile-web-app-title" content={settings?.shortBrandName || ""} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Fonts are global because this is the App Router root layout. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Instrument+Serif:ital@0;1&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="home">
        <Script
          src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"
          strategy="afterInteractive"
        />
        <SiteSettingsProvider settings={settings}>
          {children}
          {settings && <SiteTools />}
        </SiteSettingsProvider>
        <SanityRuntime enabled={isSanityConfigured} previewEnabled={previewEnabled} />
      </body>
    </html>
  );
}
