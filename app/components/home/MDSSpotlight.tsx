"use client";

import { useEffect, useRef, useState } from "react";

const mdsSpecialties = [
  {
    name: "Conservative Dentistry & Endodontics",
    focus: "Aesthetic Restorations & Root Canals",
    description:
      "One of the most sought-after clinical branches in MDS, focusing on restoring teeth, aesthetic restorations, smile enhancement, and advanced root canal treatments.",
    highlights: [
      "Dental fillings & cavity management",
      "Tooth-colored fillings & veneers",
      "Root canal treatment & retreatment",
      "Surgical endodontics (apicoectomy)",
    ],
    icon: "✦",
    color: "from-amber-500/20 to-amber-900/5",
  },
  {
    name: "Orthodontics & Dentofacial Orthopaedics",
    focus: "Malaligned Teeth & Facial Growth",
    description:
      "Focuses on correcting malaligned teeth, managing bite-related issues, and guiding facial growth using various orthodontic appliances and treatment modalities.",
    highlights: [
      "Braces & clear aligners",
      "Bite correction & malocclusion",
      "Growth modification appliances",
      "Skeletal malocclusion treatment",
    ],
    icon: "◆",
    color: "from-blue-500/20 to-blue-900/5",
  },
  {
    name: "Prosthodontics & Crown and Bridge",
    focus: "Implants & Full-Mouth Rehabilitation",
    description:
      "Specialized in the replacement and rehabilitation of missing or damaged teeth through crowns, bridges, dentures, and implant-supported prostheses.",
    highlights: [
      "Dental implants",
      "Digital smile design",
      "Full-mouth rehabilitation",
      "Geriatric dental care",
    ],
    icon: "◇",
    color: "from-emerald-500/20 to-emerald-900/5",
  },
  {
    name: "Oral & Maxillofacial Surgery",
    focus: "Facial Trauma & Jaw Surgeries",
    description:
      "Deals with facial trauma, jaw surgeries, impacted teeth, oral pathologies, cysts and tumours, implant surgeries, and reconstructive procedures.",
    highlights: [
      "Facial trauma management",
      "Jaw corrective surgery",
      "Cyst & tumour excision",
      "Implant surgery & reconstruction",
    ],
    icon: "⬡",
    color: "from-red-500/20 to-red-900/5",
  },
  {
    name: "Periodontology",
    focus: "Gum Diseases & Implant Dentistry",
    description:
      "Focused on prevention, diagnosis, and treatment of gum diseases and supporting structures. Plays a major role in implant dentistry — one of the fastest-growing areas.",
    highlights: [
      "Periodontal surgery",
      "Dental implant placement",
      "Regenerative procedures",
      "Gum disease management",
    ],
    icon: "◈",
    color: "from-teal-500/20 to-teal-900/5",
  },
  {
    name: "Pediatric & Preventive Dentistry",
    focus: "Child Oral Health & Behavior Management",
    description:
      "Dedicated to oral health care of infants, children, adolescents, and patients with special needs. Combines clinical dentistry with child psychology.",
    highlights: [
      "Preventive dental care",
      "Growth & development management",
      "Special needs dentistry",
      "Behavior guidance techniques",
    ],
    icon: "❋",
    color: "from-pink-500/20 to-pink-900/5",
  },
  {
    name: "Oral Medicine & Radiology",
    focus: "Diagnosis & Advanced Imaging",
    description:
      "Focuses on diagnosis and non-surgical management of oral diseases with advanced dental imaging including CBCT and maxillofacial techniques.",
    highlights: [
      "CBCT & 3D imaging",
      "Oral cancer screening",
      "Diagnostic radiology",
      "Non-surgical disease management",
    ],
    icon: "⊕",
    color: "from-violet-500/20 to-violet-900/5",
  },
  {
    name: "Oral Pathology & Microbiology",
    focus: "Disease Diagnosis & Research",
    description:
      "Diagnosis and study of diseases at the microscopic level. Crucial for identifying oral lesions, cysts, tumours, and potentially malignant disorders.",
    highlights: [
      "Histopathological diagnosis",
      "Oral lesion identification",
      "Cancer diagnostics",
      "Research & laboratory work",
    ],
    icon: "◉",
    color: "from-orange-500/20 to-orange-900/5",
  },
  {
    name: "Public Health Dentistry",
    focus: "Community Health & Policy",
    description:
      "Focuses on improving oral health at the community level through health promotion, disease prevention, epidemiology, and healthcare planning.",
    highlights: [
      "Community health programs",
      "Healthcare policy & planning",
      "Epidemiological research",
      "Public health management",
    ],
    icon: "⬢",
    color: "from-cyan-500/20 to-cyan-900/5",
  },
];

export default function MDSSpotlight() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="mds"
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      {/* Background Geometry */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] border border-black/[0.03] rounded-full" />
        <div className="absolute bottom-20 right-10 w-[400px] h-[400px] border border-black/[0.03] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-8 lg:px-20 relative z-10">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-black font-medium mb-2">
              <span className="w-8 h-[1px] bg-black" />
              MDS Specialisation
            </span>
            <h2 className="font-[var(--font-outfit)] text-4xl md:text-5xl font-light tracking-tight leading-tight text-black">
              Dental Speciality
              <span className="font-semibold text-black"> Spotlight</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 border border-black/10 flex items-center justify-center hover:border-black/40 hover:bg-black/5 transition-all duration-300"
              aria-label="Scroll left"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 border border-black/10 flex items-center justify-center hover:border-black/40 hover:bg-black/5 transition-all duration-300"
              aria-label="Scroll right"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto horizontal-scroll pb-4"
        >
          {mdsSpecialties.map((specialty, i) => (
            <div
              key={specialty.name}
              className={`flex-shrink-0 w-[340px] md:w-[380px] bg-black/5 rounded-lg group p-8 transition-all duration-700 hover:bg-black/10 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`w-14 h-14 rounded-sm bg-black/10 flex items-center justify-center text-xl text-black`}
                >
                  {specialty.icon}
                </div>
                <span className="text-[10px] tracking-[0.2em] text-black/15 font-mono">
                  0{i + 1}
                </span>
              </div>

              {/* Title & Focus */}
              <h3 className="font-[var(--font-outfit)] text-lg font-semibold tracking-tight text-black group-hover:text-black/80 transition-colors duration-500 mb-2 leading-snug">
                {specialty.name}
              </h3>
              <p className="text-[11px] tracking-[0.12em] uppercase text-black/60 font-medium mb-4">
                {specialty.focus}
              </p>

              {/* Description */}
              <p className="text-[13px] text-black/50 font-light leading-relaxed mb-6">
                {specialty.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                {specialty.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-3 text-[12px] text-black/40"
                  >
                    <span className="w-1 h-1 rounded-full bg-black/40 flex-shrink-0" />
                    {h}
                  </div>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="mt-8 pt-6 border-t border-black/[0.04]">
                <span className="text-[11px] tracking-[0.15em] uppercase text-black/0 group-hover:text-black/60 transition-all duration-500 flex items-center gap-2">
                  Explore Pathway
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
