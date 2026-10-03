'use client';
import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  featured?: boolean;
}

const services: Service[] = [
  {
    title: 'Web Design & Development',
    description: 'Pixel-perfect, blazing-fast websites engineered for conversion — from marketing sites to complex SaaS platforms.',
    href: '/services#web',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="6" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M2 11h28" stroke="currentColor" strokeWidth="2"/>
        <circle cx="7" cy="8.5" r="1" fill="currentColor"/>
        <circle cx="11" cy="8.5" r="1" fill="currentColor"/>
        <circle cx="15" cy="8.5" r="1" fill="currentColor"/>
        <path d="M9 17l3 3-3 3M15 23h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps that deliver seamless experiences on iOS and Android — built to scale.',
    href: '/services#mobile',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="9" y="2" width="14" height="28" rx="3" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="16" cy="27" r="1.5" fill="currentColor"/>
        <path d="M13 6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    featured: true,
  },
  {
    title: 'UI/UX Design',
    description: 'Research-driven, human-centred design that turns complex problems into beautiful, intuitive interfaces.',
    href: '/services#design',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3L29 24H3L16 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
        <circle cx="16" cy="18" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Marketing & SEO',
    description: 'Data-backed growth strategies — organic search, paid campaigns, and conversion optimisation that compound over time.',
    href: '/services#seo',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M22 22l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 14h8M14 10v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function FeaturedServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="rg-services py-24 lg:py-32"
      id="services"
      aria-labelledby="services-h"
      style={{ background: 'var(--color-dark)' }}
    >
      <div className="container">
        {/* Heading */}
        <div className="mb-14 lg:mb-18 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.18em] mb-4"
            style={{ color: 'var(--color-brand-on-dark)' }}
          >
            What we do
          </motion.p>
          <motion.h2
            id="services-h"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]"
            style={{ color: 'var(--color-on-dark)', fontFamily: 'var(--font-body)' }}
          >
            Featured{' '}
            <span style={{ color: 'var(--color-brand-magenta)', fontFamily: 'var(--font-accent)', fontStyle: 'italic' }}>
              services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5 mx-auto max-w-[580px] text-[15px] leading-relaxed"
            style={{ color: 'var(--color-on-dark-muted)' }}
          >
            End-to-end digital solutions that accelerate growth, delight users, and give your brand an unfair advantage.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => (
            <motion.a
              key={svc.title}
              href={svc.href}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="group flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 cursor-pointer"
              style={{
                background: svc.featured ? 'var(--color-brand-deep)' : '#1A0D2B',
                border: `1px solid ${svc.featured ? 'var(--color-brand-magenta)' : 'rgba(255,255,255,0.07)'}`,
              }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 transition-colors duration-300"
                style={{
                  background: svc.featured
                    ? 'rgba(233,30,140,0.18)'
                    : 'rgba(255,255,255,0.06)',
                  color: svc.featured ? 'var(--color-brand-magenta)' : 'var(--color-on-dark)',
                }}
              >
                {svc.icon}
              </div>

              {/* Title + description */}
              <div className="flex-1">
                <h3
                  className="text-lg font-bold leading-snug mb-3"
                  style={{ color: 'var(--color-on-dark)', fontFamily: 'var(--font-body)' }}
                >
                  {svc.title}
                </h3>
                <p
                  className="text-[13px] leading-[1.7]"
                  style={{ color: 'var(--color-on-dark-muted)' }}
                >
                  {svc.description}
                </p>
              </div>

              {/* CTA row */}
              <div className="mt-8 flex items-center justify-between">
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: svc.featured ? 'var(--color-brand-magenta)' : 'var(--color-on-dark-muted)' }}
                >
                  Read More
                </span>
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: svc.featured ? 'var(--color-brand-magenta)' : 'rgba(255,255,255,0.08)',
                    color: 'var(--color-on-dark)',
                  }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
