"use client";

import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiVercel,
  SiPostgresql,
  SiFigma,
  SiMongodb,
  SiDocker,
  SiPython,
  SiPrisma,
  SiSupabase,
  SiGraphql,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { useAnimate } from "motion/react";

export const ClipPathLinks = () => {
  return (
    <section className="pt-20 lg:pt-32 pb-12 lg:pb-16 relative bg-white text-black border-t border-black/5">
      <div className="container relative z-20">
        <div className="rg-portfolio__head reveal mb-10! lg:mb-15! text-center">
          <h2 className="text-black! text-center text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Our <span className="serif">Tech Stack.</span>
          </h2>
          <p className="body-text text-center mx-auto max-w-[680px] text-black/60">
            We leverage cutting-edge technologies to build fast, scalable, and
            reliable digital experiences for modern brands.
          </p>
        </div>

        <div className="flex w-full items-center justify-center px-4 md:px-0">
          <div className="w-full max-w-5xl lg:max-w-6xl divide-y border divide-black/10 border-black/10 rounded-xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-5 divide-x divide-black/10">
              <LinkBox Icon={SiReact} />
              <LinkBox Icon={SiNextdotjs} />
              <LinkBox Icon={SiTailwindcss} />
              <LinkBox Icon={SiTypescript} />
              <LinkBox Icon={SiNodedotjs} />
            </div>
            <div className="grid grid-cols-5 divide-x divide-black/10">
              <LinkBox Icon={SiPython} />
              <LinkBox Icon={SiGraphql} />
              <LinkBox Icon={FaAws} />
              <LinkBox Icon={SiVercel} />
              <LinkBox Icon={SiDocker} />
            </div>
            <div className="grid grid-cols-5 divide-x divide-black/10">
              <LinkBox Icon={SiPostgresql} />
              <LinkBox Icon={SiMongodb} />
              <LinkBox Icon={SiPrisma} />
              <LinkBox Icon={SiSupabase} />
              <LinkBox Icon={SiFigma} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES: Record<string, string[]> = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: Record<string, string[]> = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon }: { Icon: any }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: React.MouseEvent<HTMLDivElement>) => {
    const box = (e.target as HTMLElement).getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36 bg-white text-black/60 hover:text-black cursor-default"
    >
      <Icon className="text-3xl sm:text-4xl md:text-5xl transition-colors duration-300" />

      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-[#E91E8C] text-white"
      >
        <Icon className="text-3xl sm:text-4xl md:text-5xl" />
      </div>
    </div>
  );
};
