"use client";

import React from "react";
import { ShieldCheck, Leaf, Heart, Users, Compass } from "lucide-react";

export function ActionBadgesSection() {
  const brandPillars = [
    { label: "SAFE & TRUSTED", icon: ShieldCheck },
    { label: "RESPONSIBLE TRAVEL", icon: Leaf },
    { label: "MADE WITH PASSION", icon: Heart },
    { label: "COMMUNITY DRIVEN", icon: Users },
    { label: "EXPERIENCES THAT STAY", icon: Compass },
  ];

  return (
    <section className="py-8 bg-transparent border-t border-b border-[#2F5D50]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 py-2">
          {brandPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#162E27]/90 border border-[#2F5D50] text-[#E8DCC8] shadow-lg hover:border-[#E8DCC8] hover:text-[#FAF7F1] transition-all duration-300"
              >
                <Icon className="w-4 h-4 text-[#E8DCC8]" />
                <span className="text-xs font-extrabold tracking-widest uppercase font-sans">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
