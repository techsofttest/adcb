"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/Button";

const courses = [
  {
    code: "MBBS",
    title: "Bachelor of Medicine & Surgery",
    description: "Foundation of medical excellence. The gateway to a career in clinical medicine and healthcare leadership.",
    image: "/courses/mbbs.jpg",
  },
  {
    code: "MD/MS",
    title: "Doctor of Medicine / Master of Surgery",
    description: "Advanced clinical specialisation across medical and surgical disciplines for physicians seeking mastery.",
    image: "/courses/md-ms.jpg",
  },
  {
    code: "MDS",
    title: "Master of Dental Surgery",
    description: "Premier dental specialisation covering nine clinical and non-clinical branches for dentistry excellence.",
    image: "/courses/mds.jpg",
  },
  {
    code: "MBA",
    title: "Master of Business Administration",
    description: "Strategic leadership and management education for future business leaders and healthcare administrators.",
    image: "/courses/mba.jpg",
  },
  {
    code: "MTTM",
    title: "Master of Tourism & Travel Management",
    description: "Comprehensive programme in tourism management, hospitality operations, and travel industry leadership.",
    image: "/courses/mttm.jpg",
  },
];

export default function FeaturedCourses() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          courses.forEach((_, i) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, i]);
            }, i * 100);
          });
        }
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
      id="courses"
      ref={sectionRef}
      className="relative py-10 md:py-16 bg-white"
    >
      {/* Section Divider Top - Removed as requested for cleaner look */}
      {/* <div className="section-divider mb-32" /> */}

      <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="inline-flex items-center justify-center gap-3 text-[11px] tracking-[0.3em] uppercase text-black font-medium mb-2">
            <span className="w-8 h-[1px] bg-black" />
            Academic Programs
            <span className="w-8 h-[1px] bg-black" />
          </span>
          <h2 className="font-[var(--font-outfit)] text-4xl md:text-5xl font-medium tracking-tight leading-tight text-black">
            Featured
            <span className="font-semibold text-black"> Courses</span>
          </h2>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 gap-6">
          {courses.map((course, i) => (
            <div
              key={course.code}
              className={`relative rounded-xl overflow-hidden group bg-black transition-all duration-500 ease-in-out transform flex flex-col
                ${i === 0 ? 'lg:col-span-3' : ''}
                ${i === 1 ? 'lg:col-span-3' : ''}
                ${i === 2 ? 'lg:col-span-2' : ''}
                ${i === 3 ? 'lg:col-span-2' : ''}
                ${i === 4 ? 'lg:col-span-2' : ''}
                ${visibleCards.includes(i)
                  ? "opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0"
                  : i === 0
                  ? "opacity-0 -translate-x-16"
                  : i === 1
                  ? "opacity-0 translate-y-16"
                  : i === 2
                  ? "opacity-0 scale-75"
                  : i === 3
                  ? "opacity-0 translate-x-16"
                  : "opacity-0 -translate-y-16"
                }`
              }
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-70 overflow-hidden">
                <Image src={course.image} alt={course.title} fill className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>
              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="max-w-sm">
                  <h3 className="font-[var(--font-outfit)] text-3xl font-bold tracking-tight text-white">
                    {course.code}
                  </h3>
                  <p className="text-[12px] tracking-[0.15em] uppercase text-white font-bold mt-1 mb-4">
                    {course.title}
                  </p>
                  <p className="text-sm text-white font-medium leading-relaxed mb-6 flex-grow">
                    {course.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <Button href="#enquiry" className="self-start">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
