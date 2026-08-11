"use client";

import React from "react";
import Link from "next/link";
import { Compass, Tent, Waves, MapPin, ArrowRight } from "lucide-react";

export function OurServicesSection() {
  const services = [
    {
      id: "trekking",
      icon: Compass,
      title: "Highland & Ridge Treks",
      tagline: "Explore breathtaking summits & shola forests",
      description:
        "Guided high-altitude treks along Western Ghats monsoon ridges and Himalayan trails. Designed with safety, local naturalists, and small groups.",
      highlight: "Kudremukh • Sahyadri • Munnar",
    },
    {
      id: "camping",
      icon: Tent,
      title: "Wilderness & Forest Camping",
      tagline: "Unplug under starry skies & pine forests",
      description:
        "Cozy campfire nights, acoustic music sessions, stream-side camping, and outdoor barbecues in untouched natural spots.",
      highlight: "Wayanad • Vagamon • Coorg",
    },
    {
      id: "coastal",
      icon: Waves,
      title: "Coastal & Water Trails",
      tagline: "Ocean cliff walks & crystal river dips",
      description:
        "Seaside cliff exploration, quiet beach strolls, bamboo rafting, and kayaking in serene backwaters and hidden waterfalls.",
      highlight: "Varkala • Dawki • Kapu Beach",
    },
    {
      id: "custom",
      icon: MapPin,
      title: "Custom Group Expeditions",
      tagline: "Tailored road trips for friend circles & teams",
      description:
        "Bespoke itineraries for private friend groups, corporate teams, and solo traveler meetups with transparent pricing and total care.",
      highlight: "Spiti Valley • Meghalaya • Nepal",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F6F5F0] text-[#213327] relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-[#78857A] uppercase block mb-2">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#213327] tracking-tight">
            Handcrafted Travel Experiences.
          </h2>
          {/* Centered Olive Accent Underline */}
          <div className="w-12 h-[2px] bg-[#78857A] mx-auto mt-3" />
        </div>

        {/* Services Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-[#EFECE6] border border-[#E2DEC5] rounded-2xl p-6 sm:p-8 space-y-4 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#213327] text-[#FAF8F5] flex items-center justify-center group-hover:bg-[#AD6B4D] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium text-[#AD6B4D] uppercase tracking-wider block">
                    {item.highlight}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#213327]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A554D] leading-relaxed font-sans font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#D9D4C7] flex items-center justify-between">
                  <span className="text-xs text-[#78857A] italic font-serif">
                    {item.tagline}
                  </span>
                  <Link
                    href="/services"
                    className="text-xs font-semibold text-[#213327] group-hover:text-[#AD6B4D] flex items-center gap-1 transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-block bg-[#213327] hover:bg-[#2C4233] text-[#FAF8F5] text-xs sm:text-sm font-semibold uppercase tracking-wider px-9 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
