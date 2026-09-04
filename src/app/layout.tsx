import type { Metadata, Viewport } from "next";
import Script from "next/script";
import AgencyChatbot from "@/components/chat/AgencyChatbot";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Full Service Digital Marketing Agency | RapidGroDigital",
    template: "%s | RapidGroDigital",
  },
  description:
    "RapidGroDigital is a full service digital marketing agency. Websites, ecommerce and SEO built for traffic and leads.",
  icons: {
    icon: "/images/Agency-logo-bg-removed.png",
  },
  openGraph: {
    type: "website",
    title: "RapidGroDigital",
    description:
      "Websites, ecommerce, SaaS and digital marketing built for growth.",
  },
};

export const viewport: Viewport = {
  themeColor: "#F8F6FB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className="js">
      <head>
        <meta name="apple-mobile-web-app-title" content="RapidGro" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Instrument+Serif:ital@0;1&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/theme.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        <link rel="stylesheet" href="/css/sections-v2.css" />
        <link rel="stylesheet" href="/css/portfolio-showcase.css" />
        <link rel="stylesheet" href="/css/apart-steps.css" />
        <link rel="stylesheet" href="/css/team.css" />
        <link rel="stylesheet" href="/css/modern-stacks.css" />
        <link rel="stylesheet" href="/css/testimonials-loop.css" />
        <link rel="stylesheet" href="/css/faq.css" />
      </head>
      <body className="home">
        <Script
          src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"
          strategy="afterInteractive"
        />
        {children}
        <AgencyChatbot />
      </body>
    </html>
  );
}
