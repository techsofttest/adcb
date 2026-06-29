"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/Button";

const countries = [
  {
    name: "United Arab Emirates",
    flag: "/c-flag/uae.png",
    image: "/pathway/united-arab-emirates.jpg",
    badge: "Fastest Pathway",
    tagline: "Tax-Free Income • Strongest Demand",
    description: "The UAE is the most practical and popular destination for Indian MDS graduates. Straightforward licensing, strong specialist demand, tax-efficient earnings, and geographic proximity make it the ideal first international step.",
    highlights: [
      "DHA / DOH / MOH licensing",
      "Average specialist salaries AED 15,000–35,000+/month",
      "Large Indian dentist community",
      "Geographic proximity to India",
    ],
    featured: true,
  },
  {
    name: "Saudi Arabia",
    flag: "/c-flag/sa.png",
    image: "/pathway/saudi-arabia.jpg",
    badge: "High Demand",
    tagline: "Tax-Free • Excellent Salaries",
    description: "Saudi Arabia presents a compelling opportunity with high demand for specialist dentists, excellent hospital and clinic infrastructure, an easier transition compared to Western countries, and strong specialist compensation.",
    highlights: [
      "High demand for specialist dentists",
      "Excellent hospital & clinic infrastructure",
      "Easier transition than Western countries",
      "Strong specialist compensation",
    ],
    featured: false,
  },
  {
    name: "United Kingdom",
    flag: "/c-flag/uk.png",
    image: "/pathway/united-kingdom.jpg",
    badge: "Long-term Growth",
    tagline: "ORE/LDS Pathway • NHS Opportunities",
    description: "The UK offers a stable, long-term career path for dentists through the ORE/LDS pathway. With a strong NHS healthcare system, it provides excellent opportunities for specialist recognition, career growth, and academic research.",
    highlights: [
      "Strong NHS healthcare system",
      "Specialist recognition & career growth",
      "Academic & research opportunities",
      "Stable long-term career path",
    ],
    featured: false,
  },
  {
    name: "Australia",
    flag: "/c-flag/au.webp",
    image: "/pathway/australia.jpg",
    badge: "Top Earning",
    tagline: "ADC Registration • Excellent Quality",
    description: "Australia is one of the highest-paying markets for dental specialists, offering an excellent work-life balance. The ADC registration pathway leads to opportunities within a world-class healthcare infrastructure with strong demand for specialists.",
    highlights: [
      "One of the highest-paying markets",
      "Excellent work-life balance",
      "Strong demand for dental specialists",
      "World-class healthcare infrastructure",
    ],
    featured: false,
  },
  {
    name: "Canada",
    flag: "/c-flag/ca.png",
    image: "/pathway/canada.jpg",
    badge: "Premium Destination",
    tagline: "NDEB Pathway • Long-term Excellence",
    description: "Canada is a premium destination with high long-term earning potential. The NDEB pathway, combined with an aging population and a strong focus on preventive care, creates significant demand and excellent immigration opportunities for dentists.",
    highlights: [
      "High long-term earning potential",
      "Aging population creates demand",
      "Strong preventive healthcare focus",
      "Excellent immigration pathways",
    ],
    featured: false,
  },
];

function PathwayCard({ country, index }: { country: typeof countries[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center transition-all duration-1000 transform ${
        isVisible
          ? "opacity-100 translate-x-0"
          : index % 2 === 0
          ? "opacity-0 -translate-x-16"
          : "opacity-0 translate-x-16"
      }`}
    >
      {/* Image */}
      <div
        className={`md:col-span-7 lg:col-span-6 relative h-80 md:h-[450px] rounded-xl overflow-hidden group ${
          index % 2 !== 0 ? "md:order-2" : ""
        }`}
      >
        <Image
          src={country.image}
          alt={country.name}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div
        className={`md:col-span-5 lg:col-span-6 flex flex-col ${
          index % 2 !== 0 ? "md:order-1" : ""
        }`}
      >
        <div className="relative w-12 h-8 border border-black/10 overflow-hidden rounded mb-4">
          <Image
            src={country.flag}
            alt={`${country.name} Flag`}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="font-[var(--font-outfit)] text-3xl md:text-4xl font-semibold tracking-tight text-black mb-4">
          {country.name}
        </h3>

        <p className="text-black/80 font-medium text-sm tracking-wide mb-4">
          {country.tagline}
        </p>

        <p className="text-neutral-700 text-sm font-medium leading-relaxed mb-8 max-w-2xl">
          {country.description}
        </p>

        <div className="mt-auto pt-4">
          <Button href="#enquiry" variant="black">
            Explore Pathway
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function InternationalPathways() {
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
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="international"
      ref={sectionRef}
      className="relative py-10 md:py-16 overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/international-banner.png"
          alt="International career pathways"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-20">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="inline-flex items-center justify-center gap-3 text-[11px] tracking-[0.3em] uppercase text-black font-medium mb-6">
            <span className="w-8 h-[1px] bg-black" />
            Global Opportunities
            <span className="w-8 h-[1px] bg-black" />
          </span>
          <h2 className="font-[var(--font-outfit)] text-4xl md:text-5xl font-medium tracking-tight leading-tight text-black">
            International
            <span className="font-semibold text-black"> Pathways</span>
          </h2>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 gap-16 md:gap-24">
          {countries.map((country, i) => (
            <PathwayCard key={country.name} country={country} index={i} />
          ))}
        </div>

        {/* Full-width callout box at the bottom */}
        <div className="mt-20 p-8 md:p-10 bg-neutral-950 text-white rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h4 className="font-[var(--font-outfit)] text-2xl font-bold tracking-tight text-white mb-2">
              Looking for other destinations?
            </h4>
            <p className="text-white/80 font-medium text-sm max-w-xl">
              We provide expert licensing and pathway guidance for Germany, Ireland, New Zealand, Singapore, and 12+ other countries globally.
            </p>
          </div>
          <Button href="#enquiry" variant="white" className="flex-shrink-0">
            See All Pathways
          </Button>
        </div>
      </div>
    </section>
  );
}
