"use client";
import { motion, useSpring, useMotionValue } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Marketing & SEO",
    description: "Data-driven marketing and SEO optimization to boost your reach.",
    src: "/images/portfolio/seo.jpg",
    color: "#0f0a1e",
  },
  {
    title: "App & Web Dev",
    description: "Scalable mobile and web applications built for speed.",
    src: "/images/portfolio/web.png",
    color: "#1c0b2e",
  },
  {
    title: "UI/UX Design",
    description: "Premium user interfaces and intuitive user experiences.",
    src: "/images/portfolio/ui.png",
    color: "#0f0a1e",
  },
  {
    title: "Latest Tech",
    description: "Access to cutting-edge technology stacks.",
    src: "/images/portfolio/latest-tech.png",
    color: "#E91E8C",
  },
];

const scaleAnimation = {
  closed: {
    scale: 0,
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] as [number, number, number, number] },
  },
  enter: {
    scale: 1,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
  initial: { scale: 0 },
};

export default function Services() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>

      <section className="py-20 lg:py-32 relative bg-[#140820] text-white overflow-hidden" id="services">
        <div className="container relative z-20">
          <div className="rg-portfolio__head reveal mb-16 lg:mb-24">
            <h2 className="text-white! text-center text-5xl md:text-7xl lg:text-[5rem]! font-bold tracking-tight mb-6 mt-[-45]!">
              Featured <span className="serif">Services.</span>
            </h2>
            <p className="body-text text-center mx-auto max-w-[680px] text-white! mb-8!">
              Our solutions are tailored to meet the unique challenges of modern
              digital landscapes, providing speed.
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            {services.map((service, index) => (
              <Project
                index={index}
                key={service.title}
                setModal={setModal}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        <Modal modal={modal} projects={services} />
      </section>
    </>
  );
}

function Project({ index, title, description, setModal }: any) {
  return (
    <div
      className="group flex w-full cursor-pointer items-center justify-between border-t border-white/10 px-4 md:px-10 py-10 lg:py-14 transition-all duration-300 last:border-b hover:bg-white/5 hover:opacity-100"
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
    >
      <h2 className="m-0 font-extrabold text-3xl md:text-5xl lg:text-6xl transition-transform duration-300 group-hover:translate-x-4 text-white!">
        {title}
      </h2>
      <p className="font-medium text-white/60 transition-transform duration-300 group-hover:-translate-x-4 max-w-[200px] md:max-w-sm text-right text-sm md:text-base hidden sm:block">
        {description}
      </p>
    </div>
  );
}

function Modal({ modal, projects }: any) {
  const { active, index } = modal;

  // Use framer motion values for custom cursor
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        animate={active ? "enter" : "closed"}
        initial="initial"
        variants={scaleAnimation}
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed top-0 left-0 z-50 flex h-[350px] w-[400px] items-center justify-center overflow-hidden rounded-2xl shadow-2xl bg-[#0f0a1e] hidden md:flex"
      >
        <div
          className="absolute h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{ top: `${index * -100}%` }}
        >
          {projects.map((project: any, idx: number) => (
            <div
              className="relative flex h-full w-full items-center justify-center p-4"
              key={project.title}
              style={{ backgroundColor: project.color }}
            >
              <Image
                alt={project.title}
                src={project.src}
                fill
                className="object-cover opacity-80"
                sizes="400px"
              />
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        animate={active ? "enter" : "closed"}
        initial="initial"
        variants={scaleAnimation}
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none fixed top-0 left-0 z-50 flex h-20 w-20 items-center justify-center rounded-full bg-[#E91E8C] font-bold text-sm text-white hidden md:flex"
      >
        View
      </motion.div>
    </>
  );
}
