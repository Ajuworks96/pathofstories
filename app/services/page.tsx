import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Services & Expeditions | Path of Stories",
  description: "Explore curated small-group expeditions across Western Ghats, Meghalaya, Spiti, and Kerala with Path of Stories.",
};

export default function ServicesPage() {
  const expeditions = [
    {
      id: "ghats",
      title: "Western Ghats Monsoon Fort Trail",
      location: "Sahyadri, Maharashtra",
      duration: "4 Days / 3 Nights",
      price: "₹8,999",
      image: "/images/trip_maharashtra.jpg",
      description: "Misty fort ridge walks, ancient fortresses, waterfall showers, and acoustic campfire sessions with fellow conscious travelers.",
      highlights: ["Misty Fortress Ridges", "Campfire Acoustic Sessions", "Waterfall Trekking", "Local Homestay Dining"],
    },
    {
      id: "meghalaya",
      title: "Living Root Bridges & Cherrapunji",
      location: "Rainforest, Meghalaya",
      duration: "6 Days / 5 Nights",
      price: "₹14,500",
      image: "/images/trip_meghalaya.jpg",
      description: "Hike through double-decker living root bridges, turquoise natural pools, and fog-draped rainiest valleys on earth.",
      highlights: ["Double-Decker Root Bridges", "Dawki River Boating", "Nohkalikai Waterfalls", "Khasi Village Stays"],
    },
    {
      id: "spiti",
      title: "Spiti Monastery & Milky Way Stargazing",
      location: "Spiti Valley, Himachal",
      duration: "8 Days / 7 Nights",
      price: "₹21,000",
      image: "/images/trip_spiti.jpg",
      description: "High-altitude desert mountain sanctuary, morning chants at Key Gompa, and crystal-clear Milky Way night sky stargazing.",
      highlights: ["Key Gompa Monastery Chants", "Chandratal Lake Camping", "Milky Way Astrophotography", "Highest Post Office Visit"],
    },
    {
      id: "kerala",
      title: "Kerala Tea Highlands & Backwater Stays",
      location: "Munnar & Alleppey, Kerala",
      duration: "5 Days / 4 Nights",
      price: "₹11,500",
      image: "/images/trip_kerala.jpg",
      description: "Private tea plantation morning walks, traditional houseboat slow cruising, and authentic Ayurvedic spice culinary experiences.",
      highlights: ["Tea Plantation Ridge Sunrise", "Alleppey Houseboat Slow Cruise", "Local Spice Garden Tours", "Traditional Kathakali Evening"],
    },
    {
      id: "nepal",
      title: "Himalayan Ridge & Monastery Trek",
      location: "Annapurna Region, Nepal",
      duration: "9 Days / 8 Nights",
      price: "₹28,500",
      image: "/images/trip_nepal.jpg",
      description: "Iconic Himalayan snow peak panoramas, ancient mountain tea houses, and slow mindful high-altitude trekking.",
      highlights: ["Annapurna Panorama Views", "Sherpa Tea House Hospitality", "High Altitude Sacred Lakes", "Kathmandu Cultural Tour"],
    },
  ];

  return (
    <div className="pt-28 pb-20 text-[#213327] bg-[#F6F5F0] relative z-10 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <span className="text-xs font-semibold tracking-widest text-[#78857A] uppercase block">
          CURATED EXPEDITIONS &amp; SERVICES
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-[#213327] tracking-tight">
          Handcrafted <span className="text-[#AD6B4D] italic font-normal">Journeys &amp; Services</span>
        </h1>

        {/* Centered Accent Underline */}
        <div className="w-12 h-[2px] bg-[#78857A] mx-auto mt-2" />

        <p className="text-[#4A554D] text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed pt-2">
          From weekend monsoon ridge walks to 8-day Himalayan stargazing retreats. Every expedition is thoughtfully planned with safety, transparency, and high value.
        </p>
      </div>

      {/* Expeditions List */}
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {expeditions.map((item) => (
            <div
              key={item.id}
              className="bg-[#EFECE6] border border-[#E2DEC5] hover:border-[#AD6B4D]/50 rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 sm:h-72 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#213327] via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#FAF8F5]/90 text-[#213327] text-[10px] font-bold uppercase tracking-wider border border-[#DCD7CD]">
                      {item.duration}
                    </span>
                    <span className="px-3.5 py-1 rounded-full bg-[#213327] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider shadow-md">
                      {item.price}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-[#C5CEC8] uppercase font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#AD6B4D]" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="text-2xl font-bold font-serif text-[#213327]">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A554D] leading-relaxed font-light">
                    {item.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#78857A] block mb-2">
                      EXPEDITION HIGHLIGHTS:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] border border-[#DCD7CD] text-[10px] text-[#213327] font-medium"
                        >
                          &bull; {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <Link
                  href="/contact"
                  className="w-full bg-[#213327] hover:bg-[#2C4233] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2"
                >
                  <span>BOOK THIS EXPEDITION</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom & Corporate Journeys Banner */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-[#213327] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-md">
          <h2 className="text-3xl font-bold font-serif text-[#FAF8F5]">
            Custom &amp; Private Group Expeditions
          </h2>
          <p className="text-[#C5CEC8] text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Planning a trip for your corporate team, family, or close friends? Amal &amp; Jeena curate customized itineraries tailored to your budget and travel preferences.
          </p>
          <Link
            href="/contact"
            className="bg-[#AD6B4D] hover:bg-[#9E5D3B] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider px-8 py-3.5 rounded-full shadow-md inline-flex items-center gap-2 transition-all"
          >
            <span>REQUEST CUSTOM ITINERARY</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}
