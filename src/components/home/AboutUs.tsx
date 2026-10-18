"use client";

import {useEffect, useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import type {CmsImage} from "@/sanity/lib/types";

type Content = {label: string; title: string; description: string; image: CmsImage; cta: {label: string; href: string}};

export default function AboutUs({content}: {content: Content}) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      for (const element of [headingRef.current, textRef.current]) {
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (innerHeight * .9 - rect.top) / (innerHeight * .7)));
        element.style.setProperty("--p", String(progress * 1.3));
      }
    };
    addEventListener("scroll", handleScroll, {passive: true});
    handleScroll();
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  const headingWords = content.title.split(" ");
  const words = content.description.split(" ");
  return (
    <section className="pt-24 pb-12! md:pb-24 lg:py-32 bg-white relative overflow-hidden" id="about-us">
      <style>{`.scroll-reveal-text span{opacity:calc(.15 + clamp(0,(var(--p,0) - var(--i))*6,.85));transition:opacity .08s ease-out}`}</style>
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="relative z-10 w-full lg:h-[600px] rounded-sm overflow-hidden bg-gray-100">
              {content.image?.url && <Image src={content.image.url} alt={content.image.alt || content.label} width={900} height={1100} className="w-full h-auto lg:h-full object-cover block" />}
            </div>
          </div>
          <div className="flex flex-col z-30">
            <h2 ref={headingRef} className="scroll-reveal-text text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0A0A0A] mb-8! md:mb-14">
              {headingWords.map((word, index) => <span key={index} style={{"--i": index / headingWords.length} as React.CSSProperties}>{word} </span>)}
            </h2>
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-0">
              <div className="flex items-center gap-4 shrink-0 w-full md:w-[185px] pt-1"><span className="text-[17px] font-bold text-black whitespace-nowrap">{content.label}</span><div className="h-[1.5px] flex-1 md:w-16 bg-gray-300" /></div>
              <div className="flex-1">
                <p ref={textRef} className="scroll-reveal-text text-[16px] text-[#0A0A0A] leading-[1.85] font-medium mb-10">
                  {words.map((word, index) => <span key={index} style={{"--i": index / words.length} as React.CSSProperties}>{word} </span>)}
                </p>
                <Link href={content.cta.href} className="btn dark" data-magnetic>{content.cta.label}<span className="arrow">↗</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
