"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/Button";

export default function PreFooterCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      {
        rootMargin: "-25% 0px -25% 0px",
        threshold: 0
      }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-10 md:py-16 overflow-visible"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20 overflow-visible">
        {/* Boxed Card wrapper designed like branch location cards */}
        <div
          className={`relative bg-gradient-to-br from-neutral-100 to-neutral-200/60 p-10 md:p-12 rounded-2xl flex flex-col justify-center transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
            }`}
        >
          {/* Stacked building images - positioned in the right background with low opacity */}
          <div className="absolute inset-y-0 right-0 w-[45%] pointer-events-none hidden lg:block z-0 opacity-20">
            <div className="relative w-full h-full">
              <img
                src="/cta/United Kingdom.png"
                alt="UK Building"
                className="absolute bottom-0 right-72 h-[45%] object-contain object-bottom"
              />
              <img
                src="/cta/Saudi Arabia.png"
                alt="Saudi Building"
                className="absolute bottom-0 right-56 h-[55%] object-contain object-bottom"
              />
              <img
                src="/cta/United Arab Emirates.png"
                alt="UAE Building"
                className="absolute bottom-0 right-40 h-[65%] object-contain object-bottom"
              />
              <img
                src="/cta/image (13) 1.png"
                alt="Cta Building 1"
                className="absolute bottom-0 right-28 h-[75%] object-contain object-bottom"
              />
              <img
                src="/cta/image (15) 1.png"
                alt="Cta Building 2"
                className="absolute bottom-0 right-14 h-[60%] object-contain object-bottom"
              />
              <img
                src="/cta/image (14) 1.png"
                alt="Cta Building 3"
                className="absolute bottom-0 right-0 h-[45%] object-contain object-bottom"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 w-full z-20">
            {/* Left: Text Content */}
            <div className="max-w-2xl text-left">
              <span className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold mb-1 block">
                START TODAY
              </span>
              <h3 className="font-[var(--font-outfit)] text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-2 leading-tight">
                Ready to Begin Your
                <span className="text-black font-extrabold"> Journey?</span>
              </h3>
              <p className="text-xs md:text-sm text-neutral-600 font-medium leading-relaxed">
                Connect with our expert counsellors for personalised admission guidance. Your future starts with the right decision.
              </p>
            </div>

            {/* Right: CTA buttons aligned to the right end */}
            <div className="flex flex-wrap sm:flex-nowrap gap-4 items-center shrink-0">
              <Button href="#enquiry" variant="primary" className="rounded-none whitespace-nowrap">
                Book Free Consultation
              </Button>
              <Button href="tel:+918012345678" variant="ghost" className="rounded-none whitespace-nowrap bg-neutral-200 text-neutral-800 hover:bg-neutral-300 border-none">
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
