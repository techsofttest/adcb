"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

interface SearchItem {
    name: string;
    category: "Courses" | "Universities";
    country: "India" | "UAE" | "United Kingdom" | "Australia" | "Canada";
    details: string;
    href: string;
}

const allSearchItems: SearchItem[] = [

    // UAE
    { name: "MDS (UAE Pathway)", category: "Courses", country: "UAE", details: "Fastest licensing pathway (DHA/DOH)", href: "#international" },
    { name: "RAK College of Dental Sciences", category: "Universities", country: "UAE", details: "Ras Al Khaimah, UAE", href: "#universities" },
    { name: "Sharjah University", category: "Universities", country: "UAE", details: "Sharjah, UAE", href: "#universities" },
    { name: "Gulf Medical University", category: "Universities", country: "UAE", details: "Ajman, UAE", href: "#universities" },

    // UK
    { name: "MDS (UK Pathway)", category: "Courses", country: "United Kingdom", details: "ORE/LDS registration pathway guidance", href: "#international" },
    { name: "King's College London", category: "Universities", country: "United Kingdom", details: "London, United Kingdom", href: "#international" },

    // Australia
    { name: "MDS (Australia Pathway)", category: "Courses", country: "Australia", details: "ADC registration pathway guidance", href: "#international" },
    { name: "University of Melbourne", category: "Universities", country: "Australia", details: "Melbourne, Victoria", href: "#international" },

    // Canada
    { name: "MDS (Canada Pathway)", category: "Courses", country: "Canada", details: "NDEB equivalency pathway guidance", href: "#international" },
    { name: "University of Toronto", category: "Universities", country: "Canada", details: "Toronto, Ontario", href: "#international" },
];

type CountryType = "All Countries" | "India" | "UAE" | "United Kingdom" | "Australia" | "Canada";

type SearchModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCountry, setActiveCountry] = useState<CountryType>("All Countries");

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    useEffect(() => {
        if (!isOpen) {
            setSearchTerm("");
            setActiveCountry("All Countries");
        }
    }, [isOpen]);

    const countriesList: CountryType[] = [
        "All Countries",
        "UAE",
        "United Kingdom",
        "Australia",
        "Canada"
    ];

    // Filter items based on search term and selected country tab
    const filteredItems = useMemo(() => {
        return allSearchItems.filter((item) => {
            const matchesSearch =
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.details.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesCountry = activeCountry === "All Countries" || item.country === activeCountry;

            return matchesSearch && matchesCountry;
        });
    }, [searchTerm, activeCountry]);

    // Split into Courses and Universities
    const coursesResults = useMemo(() => {
        return filteredItems.filter((item) => item.category === "Courses");
    }, [filteredItems]);

    const universitiesResults = useMemo(() => {
        return filteredItems.filter((item) => item.category === "Universities");
    }, [filteredItems]);

    return (
        <div
            className={`fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-start justify-center pt-6 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                }`}
            onClick={onClose}
        >
            {/* Modal Container - Strict Geometric edges (no rounded corners) */}
            <div
                className={`bg-white w-full max-w-5xl shadow-2xl transition-all duration-500 flex flex-col md:min-h-[550px] md:max-h-[75vh] md:rounded-lg overflow-hidden ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Navigation Bar */}
                <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100 gap-4">
                    <div className="flex items-center gap-3">
                        {/* Logo box matching header style */}
                        <Link href="/" className="flex items-center gap-3 group" onClick={onClose}>
                            <Image
                                src="/logo/logo.png"
                                alt="ADCB Consultancy Logo"
                                width={64}
                                height={64}
                                className="h-12 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Search Box with focus matching contact button highlight (Black border/text focus style) */}
                    <div className="flex-1 max-w-xl relative">
                        <svg
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search courses and universities..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-gray-50 text-black text-base pl-12 pr-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
                            autoFocus={isOpen}
                        />
                    </div>

                    {/* Header Action Buttons */}
                    <div className="flex items-center gap-4">
                        <a
                            href="#enquiry"
                            onClick={onClose}
                            className="bg-black text-white hover:bg-zinc-800 text-sm font-semibold px-6 py-3 rounded-md transition-colors duration-200 uppercase tracking-wider"
                        >
                            Contact Now
                        </a>
                        <button
                            onClick={onClose}
                            className="p-2 text-gray-400 hover:text-black hover:bg-gray-50 rounded-md transition-all"
                            aria-label="Close search"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-[#F8F9FA]">
                    {/* Left Country Selection Tabs Menu Drawer style */}
                    <div className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-r border-gray-200 p-4 flex flex-col gap-1 overflow-y-auto scrollbar scrollbar-track-white scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
                        <span className="text-xs tracking-widest uppercase text-black/50 font-semibold px-4 mb-3 block">
                            Filter by Country
                        </span>
                        {countriesList.map((country) => (
                            <button
                                key={country}
                                onClick={() => setActiveCountry(country)}
                                className={`flex items-center justify-between px-4 py-3 text-left text-sm rounded-md transition-all ${activeCountry === country
                                    ? "bg-black text-white font-medium"
                                    : "text-black/70 hover:bg-gray-50 hover:text-black"
                                    }`}
                            >
                                <span>{country}</span>
                                {activeCountry === country && <span className="text-[10px]">●</span>}
                            </button>
                        ))}
                    </div>

                    {/* Right List Panel (Plain drawer list style instead of card blocks) */}
                    <div className="flex-1 p-6 md:p-10 overflow-y-auto bg-white scrollbar scrollbar-track-white scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
                        <div className="max-w-4xl mx-auto space-y-12">
                            {/* Courses List Section */}
                            <div>
                                <h3 className="text-sm font-semibold uppercase tracking-widest text-black/50 mb-6 pb-2 border-b border-gray-200">
                                    Prominent Courses
                                </h3>
                                {coursesResults.length > 0 ? (
                                    <div className="divide-y divide-gray-800">
                                        {coursesResults.map((item, i) => (
                                            <a
                                                key={`${item.name}-${i}`}
                                                href={item.href}
                                                onClick={onClose}
                                                className="flex items-center justify-between py-4 group border-b border-gray-50 hover:border-black/20 transition-all"
                                            >
                                                <div className="flex flex-col text-left">
                                                    <span className="font-semibold text-base text-black group-hover:text-black/70 transition-colors">
                                                        {item.name}
                                                    </span>
                                                    <span className="text-xs text-black/60 font-md mt-1">
                                                        {item.details} • {item.country}
                                                    </span>
                                                </div>
                                                <span className="text-black/30 group-hover:text-black transition-transform duration-300 group-hover:translate-x-1.5 text-sm">
                                                    Explore →
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm text-black/40 font-light italic py-2">No matching courses found for this country.</p>
                                )}
                            </div>

                            {/* Universities List Section */}
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-black/60 mb-6 pb-2 border-b border-gray-100">
                                    Prominent Universities
                                </h3>
                                {universitiesResults.length > 0 ? (
                                    <div className="divide-y divide-gray-100">
                                        {universitiesResults.map((item, i) => (
                                            <a
                                                key={`${item.name}-${i}`}
                                                href={item.href}
                                                onClick={onClose}
                                                className="flex items-center justify-between py-4 group border-b border-gray-50 hover:border-black/20 transition-all"
                                            >
                                                <div className="flex flex-col text-left">
                                                    <span className="font-semibold text-base text-black group-hover:text-black/70 transition-colors">
                                                        {item.name}
                                                    </span>
                                                    <span className="text-xs text-black/60 font-md mt-1">
                                                        {item.details} • {item.country}
                                                    </span>
                                                </div>
                                                <span className="text-black/30 group-hover:text-black transition-transform duration-300 group-hover:translate-x-1.5 text-sm">
                                                    Explore →
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm text-black/40 font-light italic py-2">No matching universities found for this country.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}