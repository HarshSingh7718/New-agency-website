"use client";

import Link from "next/link";
import {ArrowUpRight, ChevronDown} from "lucide-react";
import type {CmsImage, SocialLink} from "@/sanity/lib/types";

type HeroStat = {value: number; suffix?: string; label: string};

export type VideoHeroContent = {
  title: string;
  accentTitle: string;
  description: string;
  videoUrl?: string;
  poster?: CmsImage;
  primaryCta: {label: string; href: string};
  secondaryCta: {label: string; href: string};
  showSocialLinks?: boolean;
};

export default function VideoHero({content, socialLinks, stats}: {content: VideoHeroContent; socialLinks: SocialLink[]; stats: HeroStat[]}) {
  const navbarSpacing = "var(--navbar-spacing, 124px)";
  return (
    <section className="video-hero-section relative w-full overflow-hidden bg-[#0D041A] text-white flex flex-col justify-end" style={{marginTop: navbarSpacing, minHeight: `calc(100vh - ${navbarSpacing})`}}>
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
        <div className="relative w-full max-w-[1360px] h-full flex items-center justify-center">
          {content.videoUrl && (
            <video autoPlay loop muted playsInline preload="metadata" poster={content.poster?.url} className="w-full h-full object-cover object-center pointer-events-none select-none" aria-hidden="true">
              <source src={content.videoUrl} type="video/mp4" />
            </video>
          )}
          <div className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(90deg, #0D041A 0%, rgba(13,4,26,0) 8%, rgba(13,4,26,0) 92%, #0D041A 100%)"}} />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none z-[1]" style={{background: "linear-gradient(180deg, rgba(26,11,46,.25) 0%, rgba(61,21,120,.18) 40%, rgba(13,4,26,.85) 95%)"}} />
      <div className="absolute inset-0 pointer-events-none z-[2]" style={{background: "radial-gradient(ellipse at 20% 85%, rgba(123,31,162,.28) 0%, transparent 60%), radial-gradient(ellipse at 85% 15%, rgba(233,30,140,.18) 0%, transparent 55%)"}} />

      {content.showSocialLinks && (
        <div className="hidden md:flex fixed left-6 top-[calc(50%+24px)] -translate-y-1/2 flex-col items-center gap-3 z-40" aria-label="Social links">
          {socialLinks.map((social) => (
            <a key={social._key || social.platform} href={social.url} aria-label={social.label} target="_blank" rel="noopener noreferrer" className="grid h-11 w-11 place-items-center rounded-full bg-[#9e9e9e] text-black transition hover:scale-110 hover:bg-[#FF4DB8]">
              <iconify-icon icon={`simple-icons:${social.platform}`}></iconify-icon>
            </a>
          ))}
        </div>
      )}

      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-20! sm:px-10 lg:px-12 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 flex flex-col justify-end items-start text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] max-w-4xl mb-5! sm:mb-6 text-white">
          {content.title}<br />
          <span className="accent-pink font-normal italic text-[#FF4DB8]" style={{fontFamily: "var(--font-accent, serif)", textShadow: "0 0 28px rgba(255,77,184,.4)"}}>{content.accentTitle}</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-normal max-w-2xl leading-relaxed mb-12! sm:mb-10 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,.6)]">{content.description}</p>
        <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto">
          <Link href={content.primaryCta.href} className="group inline-flex items-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-base bg-[#E91E8C] text-white transition hover:scale-[1.03]">
            {content.primaryCta.label}<ArrowUpRight size={18} />
          </Link>
          <a href={content.secondaryCta.href} className="inline-flex items-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full font-semibold text-base border border-[#FF4DB8]/40 bg-white/10 text-white backdrop-blur-md transition hover:border-[#FF4DB8]">
            {content.secondaryCta.label}<ChevronDown size={18} className="text-[#FF4DB8]" />
          </a>
        </div>
        <div className="mt-10! sm:mt-12 pt-6! sm:pt-8 border-t border-[#FF4DB8]/30 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 w-full max-w-3xl">
          {stats.map((stat, index) => (
            <div key={stat.label}>
              <div className={`text-2xl sm:text-3xl font-extrabold ${index % 2 ? "text-[#FF4DB8]" : "text-white"}`}>{stat.value}{stat.suffix}</div>
              <div className="text-xs sm:text-sm font-medium mt-1 text-white">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
