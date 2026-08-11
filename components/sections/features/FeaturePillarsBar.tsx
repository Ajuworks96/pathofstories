"use client";

import React from "react";

export function FeaturePillarsBar() {
  const pillars = [
    {
      titleLine1: "Curated",
      titleLine2: "Experiences",
      icon: (
        <svg className="w-8 h-8 text-[#213327]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
      ),
    },
    {
      titleLine1: "Small Group",
      titleLine2: "Adventures",
      icon: (
        <svg className="w-8 h-8 text-[#213327]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      titleLine1: "Responsible",
      titleLine2: "Travel",
      icon: (
        <svg className="w-8 h-8 text-[#213327]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.1 2 7 0 4.4-3.6 8-8 8" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      ),
    },
    {
      titleLine1: "Safety",
      titleLine2: "First",
      icon: (
        <svg className="w-8 h-8 text-[#213327]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      titleLine1: "Memories",
      titleLine2: "That Last",
      icon: (
        <svg className="w-8 h-8 text-[#213327]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 relative z-20">
      <div className="bg-[#EFECE6] border border-[#E2DEC5] rounded-2xl md:rounded-3xl shadow-xs py-8 px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#D8D3C5] gap-y-6 md:gap-y-0">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center text-center px-4 ${
                index > 0 ? "pt-4 md:pt-0" : ""
              }`}
            >
              <div className="mb-3 p-2 text-[#213327] hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>
              <span className="text-xs sm:text-sm font-medium text-[#213327] leading-tight font-sans">
                {pillar.titleLine1} <br /> {pillar.titleLine2}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
