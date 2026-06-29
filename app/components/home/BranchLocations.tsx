"use client";

import { useEffect, useRef, useState } from "react";

const branches = [
  {
    city: "Bangalore",
    address: "123 MG Road, Indiranagar, Bangalore 560038",
    phone: "+91 80 1234 5678",
    email: "bangalore@adcbconsultancy.com",
  },
  {
    city: "Chennai",
    address: "456 Anna Salai, T. Nagar, Chennai 600017",
    phone: "+91 44 2345 6789",
    email: "chennai@adcbconsultancy.com",
  },
  {
    city: "Hyderabad",
    address: "789 Banjara Hills, Road No. 12, Hyderabad 500034",
    phone: "+91 40 3456 7890",
    email: "hyderabad@adcbconsultancy.com",
  },
  {
    city: "Mumbai",
    address: "321 Linking Road, Bandra West, Mumbai 400050",
    phone: "+91 22 4567 8901",
    email: "mumbai@adcbconsultancy.com",
  },
];

export default function BranchLocations() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      {
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0
      }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 150) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="branches"
      ref={sectionRef}
      className="relative py-10 md:py-16 bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
        <div>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="inline-flex items-center justify-center gap-3 text-[11px] tracking-[0.3em] uppercase text-black font-medium mb-2">
              <span className="w-8 h-[1px] bg-black" />
              Our Offices
              <span className="w-8 h-[1px] bg-black" />
            </span>
            <h2 className="font-[var(--font-outfit)] text-4xl md:text-5xl font-medium tracking-tight leading-tight text-black">
              Branch
              <span className="font-semibold text-black"> Locations</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20 pt-16">
            {branches.map((branch, i) => (
              <div
                key={branch.city}
                className={`relative bg-gradient-to-br from-neutral-100 to-neutral-200/60 hover:from-neutral-100/90 hover:to-neutral-200 p-8 group rounded-lg flex flex-col justify-between min-h-[220px] transition-all duration-1000 transform ${
                  isVisible
                    ? "opacity-100 translate-x-0 translate-y-0 scale-100"
                    : i === 0
                    ? "opacity-0 -translate-x-12"
                    : i === 1
                    ? "opacity-0 translate-y-12"
                    : i === 2
                    ? "opacity-0 -translate-y-12"
                    : "opacity-0 translate-x-12"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Overlapping Branch/City Representative Image */}
                <div className="absolute -top-16 right-4 w-[45%] max-w-[210px] h-[140px] pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
                  <img
                    src={branch.city === "Bangalore" ? "/location/Bengaluru.png" : `/location/${branch.city}.png`}
                    alt={`${branch.city} Office`}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold mb-1 block">
                      OUR BRANCH
                    </span>
                    <h3 className="font-[var(--font-outfit)] text-3xl font-bold tracking-tight text-neutral-900 mb-4">
                      {branch.city}
                    </h3>
                    <p className="text-[13px] text-neutral-800 font-medium leading-relaxed max-w-[60%] mb-6">
                      {branch.address}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-x-6 gap-y-2 pt-4 border-t border-neutral-300">
                    <a
                      href={`tel:${branch.phone}`}
                      className="flex items-center gap-2 text-[12px] text-neutral-800 font-semibold hover:text-[#ED1C24] transition-colors"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-neutral-700">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      {branch.phone}
                    </a>
                    <a
                      href={`mailto:${branch.email}`}
                      className="flex items-center gap-2 text-[12px] text-neutral-800 font-semibold hover:text-[#ED1C24] transition-colors"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-neutral-700">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      {branch.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
