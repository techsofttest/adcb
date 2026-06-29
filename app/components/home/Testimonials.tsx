"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    course: "MDS — Conservative Dentistry",
    location: "Now practising in Dubai, UAE",
    quote:
      "ADCB Consultancy made my dream of practising in Dubai a reality. From selecting the right MDS branch to navigating the DHA licensing process, their guidance was impeccable. I'm now earning tax-free income as a specialist endodontist.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Dr. Rajesh Kumar",
    course: "MDS — Orthodontics",
    location: "Specialist in Abu Dhabi, UAE",
    quote:
      "The team at ADCB understood my aspirations and provided personalised counselling that helped me choose Orthodontics. Their international pathway guidance was instrumental in my UAE placement within months of completing MDS.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Dr. Sneha Patel",
    course: "MBBS — General Medicine",
    location: "Residency in United Kingdom",
    quote:
      "As a first-generation medical student, I was overwhelmed by the admission process. ADCB's counsellors walked me through every step — from NEET preparation to university selection. Their support was life-changing.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Dr. Arjun Menon",
    course: "MDS — Prosthodontics",
    location: "Implant Specialist, Saudi Arabia",
    quote:
      "The depth of knowledge ADCB counsellors have about dental specialities is remarkable. They helped me understand the scope of Prosthodontics globally and connected me with opportunities in Saudi Arabia's premium dental sector.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Aisha Mohammed",
    course: "MBA — Healthcare Management",
    location: "Hospital Administrator, Bangalore",
    quote:
      "ADCB didn't just help me get admission — they helped me build a career roadmap. Their MBA guidance covered everything from university selection to placement opportunities in healthcare administration.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [slidesToShow, setSlidesToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startAutoSlide = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const maxIndex = testimonials.length - slidesToShow;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000);
  }, [slidesToShow]);

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
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 250) {
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

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoSlide]);

  const goTo = (index: number) => {
    setActiveIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoSlide();
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-10 md:py-16 bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
        {/* Testimonials Section */}
        <div
          className={`transition-all duration-1000 transform ${isVisible ? "opacity-100 scale-100 blur-none" : "opacity-0 scale-97 blur-sm"
            }`}
        >
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="inline-flex items-center justify-center gap-3 text-[11px] tracking-[0.3em] uppercase text-black font-medium mb-2">
              <span className="w-8 h-[1px] bg-black" />
              Success Stories
              <span className="w-8 h-[1px] bg-black" />
            </span>
            <h2 className="font-[var(--font-outfit)] text-4xl md:text-5xl font-medium tracking-tight leading-tight text-black">
              Student
              <span className="font-semibold text-black"> Testimonials</span>
            </h2>
          </div>

          {/* Slider */}
          <div className="relative mt-12 px-2 md:px-12">
            {/* Left Arrow */}
            <button
              onClick={() => {
                setActiveIndex((prev) => {
                  const maxIndex = testimonials.length - slidesToShow;
                  const target = prev <= 0 ? maxIndex : prev - 1;
                  goTo(target);
                  return target;
                });
              }}
              className="absolute -left-4 md:left-0 top-[40%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-md border border-neutral-100 flex items-center justify-center text-black hover:bg-neutral-50 transition-colors"
              aria-label="Previous slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => {
                setActiveIndex((prev) => {
                  const maxIndex = testimonials.length - slidesToShow;
                  const target = prev >= maxIndex ? 0 : prev + 1;
                  goTo(target);
                  return target;
                });
              }}
              className="absolute -right-4 md:right-0 top-[40%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-md border border-neutral-100 flex items-center justify-center text-black hover:bg-neutral-50 transition-colors"
              aria-label="Next slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out -mx-4"
                style={{
                  transform: `translateX(-${activeIndex * (100 / slidesToShow)}%)`,
                }}
              >
                {testimonials.map((testimonial, i) => (
                  <div
                    key={testimonial.name}
                    className={`flex-shrink-0 w-full md:w-1/2 px-4 transition-all duration-1000 transform ${isVisible
                        ? "opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0"
                        : i % 3 === 0
                          ? "opacity-0 -translate-y-8"
                          : i % 3 === 1
                            ? "opacity-0 translate-y-8"
                            : "opacity-0 scale-95"
                      }`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="bg-gradient-to-br from-neutral-100 to-neutral-200/60 p-8 rounded-lg flex flex-col justify-between min-h-[300px] h-full transition-all duration-300">
                      <div>
                        {/* Stars */}
                        <div className="flex gap-1 mb-4">
                          {Array.from({ length: testimonial.rating }).map((_, j) => (
                            <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="black" stroke="none">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          ))}
                        </div>

                        {/* Quote */}
                        <p className="text-base md:text-lg font-semibold text-neutral-800 leading-relaxed mb-6 italic">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-neutral-300">
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-black/10 flex-shrink-0">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-[var(--font-outfit)] font-bold text-neutral-900 text-sm tracking-tight">
                            {testimonial.name}
                          </div>
                          <div className="text-[11px] text-neutral-700 font-semibold tracking-wide">
                            {testimonial.course}
                          </div>
                          <div className="text-[10px] text-neutral-500 font-semibold tracking-wider">
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: testimonials.length - slidesToShow + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${activeIndex === i
                    ? "w-8 bg-black"
                    : "w-2 bg-black/20 hover:bg-black/40"
                    }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
