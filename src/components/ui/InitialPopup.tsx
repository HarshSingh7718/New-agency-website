"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Building2, Mail, Phone, Star, Quote } from "lucide-react";
import clsx from "clsx";

export default function InitialPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    // Small delay for better UX
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  // Prevent hydration mismatch
  if (!hasMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl !border !border-white/20"
            style={{ backgroundColor: "var(--color-ink)", color: "var(--color-on-dark)" }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full !bg-white/10 hover:!bg-white/20 transition-colors !text-white"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Left Side - Testimonial & Stats */}
            <div className="hidden md:flex w-full md:w-1/2 p-8 md:p-10 flex-col justify-between relative md:border-r !border-white/10" style={{ backgroundColor: "var(--color-dark)" }}>
              <div className="space-y-14">
                {/* Testimonial Card */}
                <div className="rounded-2xl p-6 mb-2! !border !border-white/10 !bg-white/5 relative">
                  <Quote className="absolute top-4 left-4 !text-[var(--color-brand-magenta)] opacity-20 w-10 h-10" />
                  <p className="relative z-10 text-sm md:text-base leading-relaxed !text-white mt-4 mb-6 font-medium">
                    "We were impressed by the attention to detail and timely delivery. The entire experience was seamless, and we would gladly work with them again"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full !bg-[#10B981] flex items-center justify-center !text-white font-bold text-sm">
                      DH
                    </div>
                    <div>
                      <h4 className="font-semibold !text-white m-0">Dheeraj Arora</h4>
                      <p className="text-xs !text-white/70 m-0">Founder, Interiorpreneurs</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={14} className="!fill-[#FBBF24] !text-[#FBBF24]" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Carousel Dots */}
                <div className="flex justify-center gap-2">
                  <div className="w-6 h-1.5 rounded-full !bg-[#10B981]"></div>
                  {[1, 2, 3, 4].map((dot) => (
                    <div key={dot} className="w-1.5 h-1.5 rounded-full !bg-white/20"></div>
                  ))}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mt-2!">
                  {[
                    { label: "AI Solutions", value: "300+" },
                    { label: "Countries", value: "15+" },
                    { label: "Awards", value: "20+" },
                    { label: "Successes", value: "750+" },
                  ].map((stat, idx) => (
                    <div key={idx} className="rounded-xl p-4 !border !border-white/10 !bg-white/5 flex flex-col justify-center">
                      <p className="text-xs !text-white/70 mb-1">{stat.label}</p>
                      <h3 className="text-2xl font-bold !text-white m-0">{stat.value}</h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Info */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="font-semibold !text-white mb-1">Need Instant Help?</p>
                  <a href="mailto:info@rapidgrodigital.com" className="text-sm !text-[#10B981] hover:underline">
                    info@rapidgrodigital.com
                  </a>
                </div>
                <a href="tel:+919149050623" className="flex items-center gap-2 px-4 py-2 rounded-full !border !border-white/20 !bg-white/5 hover:!bg-white/10 transition-colors text-sm font-medium !text-[var(--color-brand-magenta)]">
                  <Phone size={14} className="!text-[var(--color-brand-magenta)]" />
                  +91 7292854317
                </a>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full md:w-1/2 p-5 md:p-10 flex flex-col justify-center relative bg-[var(--color-ink)]">
              <div className="mb-5! md:mb-6!">
                <h2 className="text-[26px] md:text-4xl font-bold mb-2 md:mb-3 leading-tight !text-[var(--color-brand-magenta)]">
                  Share Your Vision & Get Instant Revert
                </h2>
                <p className="!text-white/80 text-sm md:text-base mt-1!">
                  Reach our experts anytime to avail upfront insights on project overview.
                </p>
              </div>

              <form className="space-y-3! md:space-y-4!" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User size={16} className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 !text-white/50 scale-90 md:scale-100" />
                    <input 
                      type="text" 
                      placeholder="Full name *" 
                      required
                      className="w-full !bg-white/5 !border !border-white/20 rounded-lg py-2.5 md:py-3 pl-9 md:pl-10 pr-3 md:pr-4 !text-white !placeholder-white/60 focus:outline-none focus:!border-[var(--color-brand-magenta)] transition-colors text-xs md:text-sm"
                    />
                  </div>
                  <div className="relative">
                    <Building2 size={16} className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 !text-white/50 scale-90 md:scale-100" />
                    <input 
                      type="text" 
                      placeholder="Company Name" 
                      className="w-full !bg-white/5 !border !border-white/20 rounded-lg py-2.5 md:py-3 pl-9 md:pl-10 pr-3 md:pr-4 !text-white !placeholder-white/60 focus:outline-none focus:!border-[var(--color-brand-magenta)] transition-colors text-xs md:text-sm"
                    />
                  </div>
                </div>

                <div className="relative">
                  <Mail size={16} className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 !text-white/50 scale-90 md:scale-100" />
                  <input 
                    type="email" 
                    placeholder="example@youremail.com *" 
                    required
                    className="w-full !bg-white/5 !border !border-white/20 rounded-lg py-2.5 md:py-3 pl-9 md:pl-10 pr-3 md:pr-4 !text-white !placeholder-white/60 focus:outline-none focus:!border-[var(--color-brand-magenta)] transition-colors text-xs md:text-sm"
                  />
                </div>

                <div className="relative flex">
                  <div className="!bg-white/5 !border !border-white/20 !border-r-0 rounded-l-lg py-2.5 md:py-3 px-3 md:px-4 flex items-center justify-center !text-white/70 text-xs md:text-sm">
                    IN
                  </div>
                  <input 
                    type="tel" 
                    placeholder="+91 Phone Number *" 
                    required
                    className="w-full !bg-white/5 !border !border-white/20 rounded-r-lg py-2.5 md:py-3 px-3 md:px-4 !text-white !placeholder-white/60 focus:outline-none focus:!border-[var(--color-brand-magenta)] transition-colors text-xs md:text-sm"
                  />
                </div>

                <textarea 
                  placeholder="How can we help you?" 
                  rows={3}
                  className="w-full !bg-white/5 !border !border-white/20 rounded-lg py-2.5 md:py-3 px-3 md:px-4 !text-white !placeholder-white/60 focus:outline-none focus:!border-[var(--color-brand-magenta)] transition-colors text-xs md:text-sm resize-none"
                ></textarea>

                <button 
                  type="submit"
                  className="w-full py-3 md:py-3.5 rounded-lg text-sm md:text-base font-bold !text-white shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 !bg-[var(--color-brand-magenta)]"
                >
                  Book Free Consultation
                </button>
                
                <p className="text-center text-[10px] md:text-xs !text-white/60 pt-1 md:pt-2">
                  No spam, ever. We reply within one business day.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
