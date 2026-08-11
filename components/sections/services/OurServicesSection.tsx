"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, X, Check, Compass, Calendar, ShieldCheck } from "lucide-react";

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
    id: "assam",
    title: "Assam Wilderness & Heritage Trail",
    location: "Assam, Northeast India",
    tagline: "Tea gardens, Majuli island & Kaziranga wildlife",
    description:
      "Explore the world's largest river island of Majuli, lush rolling tea estates, Kaziranga rhino safaris, and Brahmaputra sunset cruises.",
    image: "/images/service_assam.jpg",
    duration: "5 Days / 4 Nights",
    highlights: ["Kaziranga Wildlife", "Majuli Island Culture", "Brahmaputra Sunset Cruise", "Heritage Tea Estates"],
  },
  {
    id: "meghalaya",
    title: "Meghalaya Cloud & Waterfalls Trail",
    location: "Cherrapunji & Dawki, Meghalaya",
    tagline: "Living root bridges & crystal turquoise waters",
    description:
      "Trek to double-decker living root bridges, ride clear boats on Dawki river, witness Nohkalikai waterfalls, and stay in Khasi homestays.",
    image: "/images/service_meghalaya.jpg",
    duration: "6 Days / 5 Nights",
    highlights: ["Double-Decker Root Bridges", "Dawki River Boating", "Nohkalikai Waterfalls", "Khasi Village Stays"],
  },
  {
    id: "tawang",
    title: "Tawang Monastery & Alpine Expedition",
    location: "Tawang, Arunachal Pradesh",
    tagline: "High-altitude monasteries & snow-capped Sela Pass",
    description:
      "Visit the 400-year-old Tawang monastery, cross high-altitude Sela Pass, witness Madhuri lake, and experience Monpa Buddhist culture.",
    image: "/images/service_tawang.jpg",
    duration: "7 Days / 6 Nights",
    highlights: ["Tawang Monastery Chants", "Sela Pass & Lake", "Madhuri Lake Hike", "Monpa Tribal Culture"],
  },
  {
    id: "nagaland",
    title: "Nagaland Dzukou Valley & Tribal Trail",
    location: "Dzukou Valley & Kohima, Nagaland",
    tagline: "Emerald valleys, mountain treks & rich tribal heritage",
    description:
      "Trek through the rolling green carpets of Dzukou Valley, experience authentic Naga village hospitality, and explore vibrant traditions.",
    image: "/images/service_nagaland.jpg",
    duration: "6 Days / 5 Nights",
    highlights: ["Dzukou Valley Trek", "Kisama Heritage Village", "Kohima Cultural Stays", "Local Naga Culinary Trails"],
  },
  {
    id: "arunachal_pradesh",
    title: "Arunachal Frontier & Dawn Peaks",
    location: "Arunachal Pradesh, Northeast India",
    tagline: "Untouched wilderness, river valleys & dawn mountains",
    description:
      "Traverse snow-fed rivers, misty pine forests, remote tribal hamlets, and dawn-lit mountain passes along India's northeastern frontier.",
    image: "/images/service_arunachal_pradesh.jpg",
    duration: "8 Days / 7 Nights",
    highlights: ["Sangti Valley Stays", "Dirang River Rafting", "High-Altitude Passes", "Authentic Homestays"],
  },
  {
    id: "anini",
    title: "Anini Dibang Valley Frontier Trek",
    location: "Anini, Dibang Valley",
    tagline: "Untouched alpine meadows & raw mountain wilderness",
    description:
      "Journey to Dibang Valley's misty mountains, experience Idu Mishmi tribal culture, emerald rivers, and raw, undisturbed nature.",
    image: "/images/service_anini.jpg",
    duration: "7 Days / 6 Nights",
    highlights: ["Dibang Valley Exploration", "Idu Mishmi Culture", "Prismatic Alpine Rivers", "Unexplored Trail Treks"],
  },
  {
    id: "mechuka",
    title: "Mechuka Valley Shangri-La Trail",
    location: "Mechuka, Shi-Yomi District",
    tagline: "Picturesque pine valleys, wooden bridges & snow peaks",
    description:
      "Discover the hidden paradise near Tibetan border with wooden bridges over Yargyap Chu river, ancient monasteries, and pine meadows.",
    image: "/images/service_mechuka.jpg",
    duration: "7 Days / 6 Nights",
    highlights: ["Yargyap Chu River Walks", "400-Yr Samten Yongcha Gompa", "Pine Forest Camping", "Border Valley Culture"],
  },
  {
    id: "lakshadweep",
    title: "Lakshadweep Turquoise Lagoon Getaway",
    location: "Lakshadweep Islands",
    tagline: "Crystal lagoons, coral snorkeling & palm-fringed beaches",
    description:
      "Unwind on secluded island beaches, kayak across translucent turquoise lagoons, and snorkel through vibrant coral reef sanctuaries.",
    image: "/images/service_lakshadweep.jpg",
    duration: "5 Days / 4 Nights",
    highlights: ["Coral Reef Snorkeling", "Turquoise Lagoon Kayaking", "White Sand Beach Camps", "Island Coconut Stays"],
  },
];

export function OurServicesSection() {
  const [selectedService, setSelectedService] = useState<DestinationService | null>(null);
  const [inquirySuccess, setInquirySuccess] = useState(false);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F6F5F0] text-[#213327] relative">
      <div className="max-w-6xl mx-auto px-4 space-y-14">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-[#78857A] uppercase block">
            OUR FEATURED DESTINATIONS &amp; SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#213327] tracking-tight">
            Handcrafted Expeditions &amp; Experiences.
          </h2>
          {/* Centered Olive Accent Underline */}
          <div className="w-12 h-[2px] bg-[#78857A] mx-auto mt-3" />
          <p className="text-[#4A554D] text-sm sm:text-base font-light leading-relaxed pt-2">
            Explore our curated range of travel services across North East India and coastal paradise. Every journey is designed with care, certified safety, and authentic local experiences.
          </p>
        </div>

        {/* 8 Destination Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedService(item);
                setInquirySuccess(false);
              }}
              className="bg-[#EFECE6] border border-[#E2DEC5] hover:border-[#AD6B4D]/60 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#213327]/80 via-transparent to-transparent" />
                  
                  {/* Top Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#FAF8F5]/90 text-[#213327] text-[10px] font-bold uppercase tracking-wider border border-[#DCD7CD] backdrop-blur-xs">
                      {item.duration}
                    </span>
                  </div>

                  {/* Bottom Location */}
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="flex items-center gap-1 text-[11px] text-[#FAF8F5] uppercase font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#AD6B4D]" />
                      <span className="truncate max-w-[200px]">{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-serif font-semibold text-[#213327] leading-snug group-hover:text-[#AD6B4D] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#4A554D] leading-relaxed line-clamp-3 font-light">
                    {item.description}
                  </p>

                  {/* Highlights Tags */}
                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {item.highlights.slice(0, 2).map((h, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-[#FAF8F5] border border-[#DCD7CD] text-[10px] text-[#213327] font-medium"
                      >
                        &bull; {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-0 mt-2 border-t border-[#D9D4C7]/60 flex items-center justify-between">
                <span className="text-[11px] text-[#78857A] italic font-serif truncate max-w-[170px]">
                  {item.tagline}
                </span>
                <span className="text-xs font-semibold text-[#213327] group-hover:text-[#AD6B4D] flex items-center gap-1 transition-colors flex-shrink-0">
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#213327] hover:bg-[#2C4233] text-[#FAF8F5] text-xs sm:text-sm font-semibold uppercase tracking-wider px-9 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            <span>Explore All 8 Services &amp; Expeditions</span>
            <Compass className="w-4 h-4 text-[#AD6B4D]" />
          </Link>
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-[#F6F5F0] rounded-3xl overflow-hidden shadow-2xl border border-[#DCD7CD] animate-in fade-in zoom-in-95 duration-200">
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
                <h3 className="text-2xl font-serif font-bold text-[#FAF8F5]">{selectedService.title}</h3>
              </div>
            </div>

            <div className="p-6 space-y-5 text-[#213327]">
              <div className="flex items-center justify-between text-xs sm:text-sm border-b border-[#DCD7CD] pb-3">
                <span className="font-medium text-[#78857A] flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#AD6B4D]" />
                  Duration: {selectedService.duration}
                </span>
                <span className="font-medium text-[#78857A] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#213327]" />
                  Small Group Guided
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#4A554D] leading-relaxed">
                {selectedService.description}
              </p>

              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#78857A] block mb-2">
                  EXPEDITION HIGHLIGHTS:
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

              {inquirySuccess ? (
                <div className="bg-[#213327] text-[#FAF8F5] rounded-2xl p-4 text-center space-y-1">
                  <div className="w-8 h-8 rounded-full bg-[#AD6B4D] flex items-center justify-center mx-auto text-white">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base font-semibold">Service Inquiry Sent!</h4>
                  <p className="text-xs text-[#C5CEC8]">Jeena &amp; Amal will contact you with full itinerary details on WhatsApp.</p>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setInquirySuccess(true)}
                    className="flex-1 bg-[#213327] hover:bg-[#2C4233] text-[#FAF8F5] font-semibold text-xs uppercase tracking-wider py-3 rounded-full transition-all shadow-md"
                  >
                    Inquire About {selectedService.title.split(" ")[0]}
                  </button>
                  <Link
                    href="/contact"
                    className="bg-[#AD6B4D] hover:bg-[#9E5D3B] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded-full transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
