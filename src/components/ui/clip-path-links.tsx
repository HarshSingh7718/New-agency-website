"use client";

import type {IconType} from "react-icons";
import {FaAws} from "react-icons/fa";
import {SiDocker, SiFigma, SiGraphql, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiPython, SiReact, SiSupabase, SiTailwindcss, SiTypescript, SiVercel} from "react-icons/si";
import {useAnimate} from "motion/react";

const icons: Record<string, IconType> = {
  react: SiReact, nextjs: SiNextdotjs, tailwind: SiTailwindcss, typescript: SiTypescript,
  nodejs: SiNodedotjs, python: SiPython, graphql: SiGraphql, aws: FaAws, vercel: SiVercel,
  docker: SiDocker, postgresql: SiPostgresql, mongodb: SiMongodb, prisma: SiPrisma,
  supabase: SiSupabase, figma: SiFigma,
};

export function ClipPathLinks({heading, technologies}: {heading: {title: string; accentTitle?: string; description?: string}; technologies: Array<{_id: string; name: string; icon: string}>}) {
  return (
    <section className="pt-20 lg:pt-32 pb-12 lg:pb-16 relative bg-white text-black border-t border-black/5">
      <div className="container relative z-20">
        <div className="rg-portfolio__head reveal mb-10! lg:mb-15! text-center">
          <h2 className="text-black! text-center text-4xl md:text-6xl font-bold tracking-tight mb-6">{heading.title} {heading.accentTitle && <span className="serif">{heading.accentTitle}</span>}</h2>
          {heading.description && <p className="body-text text-center mx-auto max-w-[680px] text-black/60">{heading.description}</p>}
        </div>
        <div className="flex w-full items-center justify-center px-4 md:px-0">
          <div className="w-full max-w-5xl lg:max-w-6xl grid grid-cols-5 border border-black/10 rounded-xl overflow-hidden shadow-2xl">
            {technologies.map((technology) => <LinkBox key={technology._id} Icon={icons[technology.icon]} label={technology.name} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

const NO_CLIP = "polygon(0 0,100% 0,100% 100%,0 100%)";
const OUT_CLIP = "polygon(0 0,100% 0,0 0,0 100%)";

function LinkBox({Icon, label}: {Icon?: IconType; label: string}) {
  const [scope, animate] = useAnimate();
  if (!Icon) return null;
  return (
    <div onMouseEnter={() => animate(scope.current, {clipPath: [OUT_CLIP, NO_CLIP]})} onMouseLeave={() => animate(scope.current, {clipPath: [NO_CLIP, OUT_CLIP]})} className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36 bg-white text-black/60 border-r border-b border-black/10 cursor-default" title={label}>
      <Icon className="text-3xl sm:text-4xl md:text-5xl" />
      <div ref={scope} style={{clipPath: OUT_CLIP}} className="absolute inset-0 grid place-content-center bg-[#E91E8C] text-white"><Icon className="text-3xl sm:text-4xl md:text-5xl" /></div>
    </div>
  );
}
