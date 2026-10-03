"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function AboutUs() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const boxesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      if (headingRef.current) {
        const rect = headingRef.current.getBoundingClientRect();
        const start = windowHeight * 0.9;
        const end = windowHeight * 0.2;
        let progress = (start - rect.top) / (start - end);
        progress = Math.max(0, Math.min(1, progress));
        headingRef.current.style.setProperty("--p", (progress * 1.3).toString());
      }

      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const start = windowHeight * 0.9;
        const end = windowHeight * 0.2;
        let progress = (start - rect.top) / (start - end);
        progress = Math.max(0, Math.min(1, progress));
        textRef.current.style.setProperty("--p", (progress * 1.3).toString());
      }

      if (boxesRef.current && boxesRef.current.parentElement) {
        const parentRect = boxesRef.current.parentElement.getBoundingClientRect();
        const distFromCenter = (windowHeight / 2) - (parentRect.top + parentRect.height / 2);
        boxesRef.current.style.transform = `translateY(calc(-50% + ${distFromCenter * 0.2}px))`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const text = "Regular as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult.";
  const words = text.split(" ");

  const headingWords = [
    { text: "Boost", br: false },
    { text: "the", br: false },
    { text: "growth", br: true },
    { text: "development", br: false },
    { text: "agency", br: true },
    { text: "your", br: false },
    { text: "branding!", br: false }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden" id="about-us">
      <style dangerouslySetInnerHTML={{ __html: `
        .scroll-reveal-text span {
          opacity: calc(0.15 + clamp(0, (var(--p, 0) - var(--i)) * 6, 0.85));
          transition: opacity 0.08s ease-out;
        }
      `}} />

      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">

          {/* Left: Image */}
          <div className="relative">
            <div className="relative z-10 w-full aspect-[4/5] lg:h-[600px] rounded-sm overflow-hidden bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/portfolio/about.png"
                alt="About us"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              ref={boxesRef}
              className="hidden lg:flex flex-col items-end absolute z-20 top-2/3 -right-15 transform -translate-y-1/2"
            >
              <div className="w-32 h-15 bg-white"></div>
              <div className="w-15 h-25 bg-[#3D1578]"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col z-30">
            <h2
              ref={headingRef}
              className="scroll-reveal-text text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0A0A0A]"
              style={{ marginBottom: "56px" }}
            >
              {headingWords.map((item, i) => (
                <React.Fragment key={i}>
                  <span style={{ "--i": i / headingWords.length } as React.CSSProperties}>
                    {item.text}
                  </span>
                  {item.br ? <br /> : " "}
                </React.Fragment>
              ))}
            </h2>

            <div className="flex flex-row items-start">
              <div className="flex items-center gap-4 shrink-0 w-[185px] pt-1">
                <span className="text-[17px] font-bold text-black whitespace-nowrap">About Us</span>
                <div className="h-[1.5px] w-16 bg-gray-300 shrink-0"></div>
              </div>

              <div className="flex-1">
                <p
                  ref={textRef}
                  className="scroll-reveal-text text-[16px] text-[#0A0A0A] leading-[1.85] font-medium mb-10"
                >
                  {words.map((word, i) => (
                    <React.Fragment key={i}>
                      <span style={{ "--i": i / words.length } as React.CSSProperties}>
                        {word}
                      </span>{" "}
                    </React.Fragment>
                  ))}
                </p>

                <Link
                  href="/about"
                  className="btn dark"
                  style={{ paddingTop: "11px", paddingBottom: "11px", marginTop: "32px", display: "inline-flex" }}
                  data-magnetic
                >
                  Know More <span className="arrow">&#x2197;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
