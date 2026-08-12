"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, X, Compass, Calendar, MessageCircle, Sparkles } from "lucide-react";

export interface DestinationService {
  id: string;
  title: string;
  location: string;
  tagline: string;
  description: string;
  image: string;
  duration: string;
  highlights: string[];
}

export const servicesData: DestinationService[] = [
  {
    id: "arunachal_pradesh",
    title: "Land of Monasteries and Waterfalls - Arunachal Pradesh",
    location: "Arunachal Pradesh",
    tagline: "Sacred monasteries, roaring waterfalls & high border passes",
    description:
      "Journey across soaring Himalayan passes, ancient sacred Gompas, dramatic waterfalls, and historic border frontiers.",
    image: "/images/service_arunachal_pradesh.jpg",
    duration: "8 Days / 7 Nights",
    highlights: [
      "Bhutan border",
      "Dirang monastery",
      "History of China War",
      "Bumla pass",
      "Tawang monastery",
      "Jang falls",
    ],
  },
  {
    id: "anini_mechuka_ziro",
    title: "Anini, Mechuka & Ziro Valley",
    location: "Dong Valley & Shi-Yomi District",
    tagline: "Land of Apatani Tribe & First Sunrise in India",
    description:
      "Trek pristine frontier alpine valleys, experience ancient Apatani tribal heritage in Ziro, and witness India's first sunrise in Dong Valley.",
    image: "/images/service_anini.jpg",
    duration: "7 Days / 6 Nights",
    highlights: [
      "Anini Valley",
      "Mechuka Valley",
      "Ziro (Land of Apatani Tribe)",
      "Dong Valley (First Sunrise in India)",
    ],
  },
  {
    id: "assam",
    title: "One Horned Rhinos and Assam",
    location: "Assam, Northeast India",
    tagline: "Kaziranga wildlife & the mighty Brahmaputra river",
    description:
      "Explore Kaziranga National Park sanctuary of one-horned rhinoceroses, tea plantations, and scenic cruises along the mighty Brahmaputra.",
    image: "/images/service_assam.jpg",
    duration: "5 Days / 4 Nights",
    highlights: [
      "Kaziranga Wild life",
      "The mighty Brahmaputra",
      "Majuli Island Culture",
      "Heritage Tea Estates",
    ],
  },
  {
    id: "nagaland",
    title: "Hornbill Festival and Nagaland",
    location: "Nagaland, Northeast India",
    tagline: "Dzoku valley trek & Land of Head Hunters",
    description:
      "Trek through the emerald waves of Dzoku Valley, immerse in the world-famous Hornbill Festival, and visit historic Longwa tribal hamlets.",
    image: "/images/service_nagaland.jpg",
    duration: "6 Days / 5 Nights",
    highlights: [
      "Dzoku valley trek",
      "Hornbill Festival",
      "Longwa (Land of head hunters)",
    ],
  },
  {
    id: "meghalaya",
    title: "Meghalaya - Land of Water Activities",
    location: "Cherrapunji, Jaintia & Khasi Hills",
    tagline: "Waterfalls, canyons, Dawki river & Wari Chora",
    description:
      "Explore mist-laden Cherrapunji, serene Jaintia & Khasi hills, glass-like Dawki river, and the natural water canyon of Wari Chora.",
    image: "/images/service_meghalaya.jpg",
    duration: "6 Days / 5 Nights",
    highlights: [
      "Cherrapunji",
      "Jaintia Hills",
      "Khasi hills",
      "Dawki river",
      "Wari Chora",
      "Land of water activities",
    ],
  },
  {
    id: "lakshadweep",
    title: "Lakshadweep Tropical Island Getaway",
    location: "Lakshadweep Archipelago, India",
    tagline: "Turquoise lagoons, coral reefs & coconut groves",
    description:
      "Escape to pristine island coral atolls, crystal turquoise lagoons, scuba diving, and tranquil coconut beach retreats.",
    image: "/images/service_lakshadweep.jpg",
    duration: "5 Days / 4 Nights",
    highlights: [
      "Agatti & Bangaram Atolls",
      "Scuba Diving & Coral Reefs",
      "Kayaking & Lagoon Snorkeling",
      "Tropical Island Sunset Cruise",
    ],
  },
];

export function OurServicesSection() {
  const [selectedService, setSelectedService] = useState<DestinationService | null>(null);

  const getWhatsAppUrl = (title: string) => {
    const text = `Hi Path of Stories, I'm interested in inquiring about "${title}"! Please share the detailed itinerary and available dates.`;
    return `https://wa.me/916282603784?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F6F5F0] text-[#213327] relative">
      <div className="max-w-6xl mx-auto px-4 space-y-14">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-[#78857A] uppercase block">
            OUR CURATED EXPEDITIONS &amp; SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#213327] tracking-tight">
            Explore Handcrafted Destinations.
          </h2>
          {/* Centered Olive Accent Underline */}
          <div className="w-12 h-[2px] bg-[#78857A] mx-auto mt-3" />
          <p className="text-[#4A554D] text-sm sm:text-base font-light leading-relaxed pt-2">
            Discover iconic itineraries across Arunachal Pradesh, Assam, Nagaland, Meghalaya, and pristine frontier valleys. Click any service to view expedition highlights or chat directly on WhatsApp.
          </p>
        </div>

        {/* 5 Destination Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className="bg-[#EFECE6] border border-[#E2DEC5] hover:border-[#AD6B4D]/60 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="flex flex-col flex-1">
                {/* Image Banner */}
                <div
                  onClick={() => setSelectedService(item)}
                  className="relative h-56 w-full overflow-hidden cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#213327]/85 via-transparent to-transparent" />
                  
                  {/* Top Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#FAF8F5]/90 text-[#213327] text-[10px] font-bold uppercase tracking-wider border border-[#DCD7CD] backdrop-blur-xs">
                      {item.duration}
                    </span>
                  </div>

                  {/* Bottom Location */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="flex items-center gap-1 text-[11px] text-[#FAF8F5] uppercase font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#AD6B4D]" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Card Details Body */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3
                      onClick={() => setSelectedService(item)}
                      className="text-xl font-serif font-semibold text-[#213327] leading-snug group-hover:text-[#AD6B4D] transition-colors cursor-pointer"
                    >
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#4A554D] leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlights Tags */}
                  <div className="pt-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#78857A] block mb-2 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#AD6B4D]" />
                      EXPED HIGHLIGHTS:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.highlights.map((h, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#DCD7CD] text-[10px] text-[#213327] font-medium"
                        >
                          &bull; {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer perfectly aligned vertically with equal padding top and bottom */}
              <div className="px-6 py-4 border-t border-[#D9D4C7]/70 flex items-center justify-between gap-3 mt-auto bg-[#EAE6DE]/40">
                <button
                  onClick={() => setSelectedService(item)}
                  className="text-xs font-semibold text-[#213327] hover:text-[#AD6B4D] flex items-center gap-1.5 transition-colors py-1"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={getWhatsAppUrl(item.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-full flex items-center gap-1.5 transition-all shadow-xs hover:shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#213327] hover:bg-[#2C4233] text-[#FAF8F5] text-xs sm:text-sm font-semibold uppercase tracking-wider px-9 py-3.5 rounded-full transition-all shadow-md"
          >
            <span>View All Services &amp; Expeditions</span>
            <Compass className="w-4 h-4 text-[#AD6B4D]" />
          </Link>

          <a
            href="https://wa.me/916282603784?text=Hi%20Path%20of%20Stories,%20I'd%20like%20to%20plan%20a%20custom%20expedition!"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-8 py-3.5 rounded-full transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-[#F6F5F0] rounded-3xl overflow-hidden shadow-2xl border border-[#DCD7CD] animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#213327] text-white hover:bg-[#AD6B4D] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative h-60 w-full">
              <Image src={selectedService.image} alt={selectedService.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#213327] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#AD6B4D] font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {selectedService.location}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FAF8F5] leading-tight">{selectedService.title}</h3>
              </div>
            </div>

            <div className="p-6 space-y-5 text-[#213327]">
              <div className="flex items-center justify-between text-xs sm:text-sm border-b border-[#DCD7CD] pb-3">
                <span className="font-medium text-[#78857A] flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#AD6B4D]" />
                  Duration: {selectedService.duration}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#4A554D] leading-relaxed">
                {selectedService.description}
              </p>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#78857A] block mb-2">
                  EXPED HIGHLIGHTS:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedService.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] border border-[#DCD7CD] text-xs text-[#213327] font-medium"
                    >
                      &bull; {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={getWhatsAppUrl(selectedService.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs uppercase tracking-wider py-3.5 rounded-full transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
