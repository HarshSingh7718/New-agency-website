"use client";

import {motion, useMotionValue, useSpring} from "motion/react";
import Image from "next/image";
import {useEffect, useState} from "react";
import type {Service} from "@/sanity/lib/types";

const scaleAnimation = {
  closed: {scale: 0, transition: {duration: .4, ease: [0.32, 0, 0.67, 0] as const}},
  enter: {scale: 1, transition: {duration: .4, ease: [0.76, 0, 0.24, 1] as const}},
  initial: {scale: 0},
};

export default function Services({heading, services}: {heading: {title: string; accentTitle?: string; description?: string}; services: Service[]}) {
  const [modal, setModal] = useState({active: false, index: 0});
  return (
    <section className="py-20 lg:py-32 relative bg-[#140820] text-white overflow-hidden" id="services">
      <div className="container relative z-20">
        <div className="rg-portfolio__head reveal mb-16 lg:mb-24">
          <h2 className="text-white! text-center text-5xl md:text-7xl lg:text-[5rem]! font-bold tracking-tight mb-6 mt-[-45]!">{heading.title} {heading.accentTitle && <span className="serif">{heading.accentTitle}</span>}</h2>
          {heading.description && <p className="body-text text-center mx-auto max-w-[680px] text-white! mb-8!">{heading.description}</p>}
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          {services.map((service, index) => (
            <div key={service._id} className="group flex w-full cursor-pointer flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6 border-t border-white/10 px-4 md:px-10 py-8 lg:py-12 transition-all duration-300 last:border-b hover:bg-white/5" onMouseEnter={() => setModal({active: true, index})} onMouseLeave={() => setModal({active: false, index})}>
              <h3 className="m-0 font-extrabold text-3xl md:text-5xl lg:text-6xl transition-transform duration-300 group-hover:translate-x-4 text-white!">{service.title}</h3>
              <p className="font-medium text-white/70 transition-transform duration-300 group-hover:-translate-x-4 max-w-md sm:text-right text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <ServiceModal modal={modal} services={services} />
    </section>
  );
}

function ServiceModal({modal, services}: {modal: {active: boolean; index: number}; services: Service[]}) {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, {damping: 25, stiffness: 300, mass: .5});
  const springY = useSpring(cursorY, {damping: 25, stiffness: 300, mass: .5});
  useEffect(() => {
    const move = (event: MouseEvent) => {cursorX.set(event.clientX); cursorY.set(event.clientY);};
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);
  return (
    <>
      <motion.div animate={modal.active ? "enter" : "closed"} initial="initial" variants={scaleAnimation} style={{x: springX, y: springY, translateX: "-50%", translateY: "-50%"}} className="pointer-events-none fixed top-0 left-0 z-50 flex h-[220px] w-[280px] md:h-[350px] md:w-[400px] items-center justify-center overflow-hidden rounded-2xl shadow-2xl bg-[#0f0a1e]">
        <div className="absolute h-full w-full transition-[top] duration-500" style={{top: `${modal.index * -100}%`}}>
          {services.map((service) => <div className="relative flex h-full w-full items-center justify-center" key={service._id} style={{backgroundColor: service.cardColor}}>{service.image?.url && <Image alt={service.image.alt || service.title} src={service.image.url} fill className="object-cover opacity-80" sizes="400px" />}</div>)}
        </div>
      </motion.div>
      <motion.div animate={modal.active ? "enter" : "closed"} initial="initial" variants={scaleAnimation} style={{x: springX, y: springY, translateX: "-50%", translateY: "-50%"}} className="pointer-events-none fixed top-0 left-0 z-50 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-[#E91E8C] font-bold text-xs md:text-sm text-white">View</motion.div>
    </>
  );
}
