"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Statistics() {
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
        <section ref={sectionRef} className="relative bg-white py-10 md:py-16">
            <div className="max-w-[1440px] mx-auto px-8 lg:px-20">
                {/* Section Header */}
                <div className={`max-w-2xl mx-auto text-center mb-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <span className="inline-flex items-center justify-center gap-3 text-[11px] tracking-[0.3em] uppercase text-black font-medium mb-2">
                        <span className="w-8 h-[1px] bg-black" />
                        Our Impact
                        <span className="w-8 h-[1px] bg-black" />
                    </span>
                    <h2 className="font-[var(--font-outfit)] text-4xl md:text-5xl font-medium tracking-tight leading-tight text-black">
                        By The
                        <span className="font-semibold text-black"> Numbers</span>
                    </h2>
                </div>

                <div>
                    {/* Main Layout Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

                        {/* Left Side: Students Placed Card (Full Height) */}
                        <div className={`lg:col-span-5 relative rounded-2xl overflow-hidden bg-black text-white p-6 md:p-8 flex flex-col justify-between min-h-[380px] lg:min-h-[440px] group shadow-xl transition-all duration-1000 delay-200 ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                        }`}>
                            {/* Background Image of Campus/Country */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/pathway/united-kingdom.jpg"
                                    alt="Campus Background"
                                    fill
                                    className="object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div>
                                    <div className="text-white/40 mb-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                                        </svg>
                                    </div>
                                    <div className="max-w-[60%]">
                                        <h3 className="font-[var(--font-outfit)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 leading-none">
                                            15,000+
                                        </h3>
                                        <p className="text-[10px] tracking-[0.15em] uppercase text-white/70 font-semibold leading-relaxed">
                                            Students Placed
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-auto max-w-[60%]">
                                    <p className="text-white font-medium text-[11px] leading-relaxed">
                                        Empowering dental, medical, and healthcare professionals to establish highly rewarding international careers globally.
                                    </p>
                                </div>
                            </div>

                            {/* Graduate Student PNG on the Right */}
                            <div className="absolute bottom-0 right-0 w-[50%] h-[85%] z-10 pointer-events-none">
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/statistics/graduate.png"
                                        alt="Graduate Student"
                                        fill
                                        className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>


                        {/* Right Side: Other cards (Partner Universities, Success Rate, Countries Covered, Expert Counsellors) */}
                        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-6">

                            {/* Card 1: Partner Universities */}
                            <div className={`md:col-span-6 bg-black/5 p-6 rounded-2xl group flex flex-col justify-between min-h-[170px] border border-black/5 hover:bg-black/10 transition-all duration-1000 transform ${
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
                            }`}>
                                <div className="text-black/40 w-8 h-8 bg-black/5 rounded-full flex items-center justify-center self-start">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        <path d="M2 17l10 5 10-5" />
                                        <path d="M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                <div className="mt-4">
                                    <h4 className="font-[var(--font-outfit)] text-3xl font-bold text-black mb-1">
                                        120+
                                    </h4>
                                    <p className="text-[10px] tracking-[0.1em] uppercase text-black/50 font-semibold">
                                        Partner Universities
                                    </p>
                                </div>
                            </div>

                            {/* Card 2: Success Rate */}
                            <div className={`md:col-span-6 relative overflow-hidden bg-black/5 p-6 rounded-2xl group flex flex-col justify-between min-h-[170px] border border-black/5 hover:bg-black/10 transition-all duration-1000 transform delay-100 ${
                                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                            }`}>
                                <div className="text-black/40 w-8 h-8 bg-black/5 rounded-full flex items-center justify-center self-start">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>
                                </div>

                                {/* Animated Zig Zag Success Graph SVG */}
                                <div className="absolute right-2 bottom-0 w-[45%] h-[60%] opacity-15 pointer-events-none">
                                    <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
                                        <path
                                            d="M 10 80 L 40 65 L 70 70 L 100 40 L 130 50 L 160 25 L 190 15"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-black animate-draw-path"
                                        />
                                        <circle cx="190" cy="15" r="5" fill="currentColor" className="text-black animate-pulse" />
                                    </svg>
                                </div>

                                <div className="mt-4 relative z-10">
                                    <h4 className="font-[var(--font-outfit)] text-3xl font-bold text-black mb-1">
                                        98%
                                    </h4>
                                    <p className="text-[10px] tracking-[0.1em] uppercase text-black/50 font-semibold">
                                        Success Rate
                                    </p>
                                </div>
                            </div>

                            {/* Card 3: Countries Covered (Wider Card with World Map on Right) */}
                            <div className={`md:col-span-7 relative overflow-hidden bg-neutral-900 text-white p-6 rounded-2xl group flex flex-col justify-between min-h-[170px] shadow-lg transition-all duration-1000 transform delay-200 ${
                                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                            }`}>
                                {/* World Map Background Image */}
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-[120%] opacity-20 pointer-events-none">
                                    <img
                                        src="/statistics/world-map.png"
                                        alt="World Map"
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <div className="relative z-10 text-white/40 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M2 12h20" />
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    </svg>
                                </div>

                                <div className="relative z-10 mt-4 max-w-[50%]">
                                    <h4 className="font-[var(--font-outfit)] text-4xl md:text-5xl font-bold text-white mb-1 leading-none">
                                        12+
                                    </h4>
                                    <p className="text-[10px] tracking-[0.15em] uppercase text-white/70 font-semibold mb-1">
                                        Countries Covered
                                    </p>
                                    <p className="text-white/80 font-medium text-[9px] leading-relaxed">
                                        UAE, UK, Australia, Canada, Saudi Arabia, etc.
                                    </p>
                                </div>
                            </div>

                            {/* Card 4: Expert Counsellors */}
                            <div className={`md:col-span-5 bg-black/5 p-6 rounded-2xl group flex flex-col justify-between min-h-[170px] border border-black/5 hover:bg-black/10 transition-all duration-1000 transform delay-300 ${
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            }`}>
                                <div className="text-black/40 w-8 h-8 bg-black/5 rounded-full flex items-center justify-center self-start">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                </div>
                                <div className="mt-4">
                                    <h4 className="font-[var(--font-outfit)] text-3xl font-bold text-black mb-1">
                                        50+
                                    </h4>
                                    <p className="text-[10px] tracking-[0.1em] uppercase text-black/50 font-semibold">
                                        Expert Counsellors
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}