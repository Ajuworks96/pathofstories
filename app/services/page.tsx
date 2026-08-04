import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, MapPin, ArrowRight, Shield, Compass, Star, Users } from "lucide-react";

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
    <div className="pt-28 pb-20 text-[#FAF7F1] relative z-10 space-y-16">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#162E27]/90 border border-[#2F5D50] text-[#E8DCC8] text-xs font-semibold tracking-widest uppercase shadow-xl">
          <Sparkles className="w-3.5 h-3.5 text-[#E8DCC8]" />
          <span>CURATED EXPEDITIONS &amp; SERVICES</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold font-sans tracking-tight">
          Handcrafted <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#E8DCC8] via-[#FAF7F1] to-[#6B8A6E]">Journeys &amp; Services</span>
        </h1>

        <p className="text-[#E8DCC8]/90 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
          From weekend monsoon ridge walks to 8-day Himalayan stargazing retreats. Every expedition is thoughtfully planned with safety, transparency, and high value.
        </p>
      </div>

      {/* Expeditions List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {expeditions.map((item) => (
            <div
              key={item.id}
              className="bg-[#162E27]/90 backdrop-blur-xl border border-[#2F5D50] hover:border-[#E8DCC8]/50 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 sm:h-72 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#162E27] via-[#162E27]/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#0E1F1A]/90 text-[#E8DCC8] text-[10px] font-bold uppercase tracking-wider border border-[#2F5D50]">
                      {item.duration}
                    </span>
                    <span className="px-3.5 py-1 rounded-full bg-[#2F5D50] text-[#FAF7F1] text-xs font-extrabold uppercase tracking-wider shadow-lg">
                      {item.price}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-[#E8DCC8] uppercase font-bold tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-[#E8DCC8]" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="text-2xl font-bold font-serif text-[#FAF7F1]">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#E8DCC8]/80 leading-relaxed font-light">
                    {item.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#E8DCC8]/60 block mb-2">
                      EXPEDITION HIGHLIGHTS:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-[#0E1F1A]/80 border border-[#2F5D50]/50 text-[10px] text-[#FAF7F1] font-medium"
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
                  className="w-full bg-[#2F5D50] hover:bg-[#6B8A6E] text-[#FAF7F1] text-xs font-extrabold uppercase tracking-wider py-3.5 rounded-xl shadow-xl transition flex items-center justify-center gap-2 border border-[#E8DCC8]/30"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#162E27]/90 backdrop-blur-xl border border-[#2F5D50] rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl font-bold font-serif text-[#FAF7F1]">
            Custom &amp; Private Group Expeditions
          </h2>
          <p className="text-[#E8DCC8]/80 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Planning a trip for your corporate team, family, or close friends? Amal &amp; Jeena curate customized itineraries tailored to your budget and travel preferences.
          </p>
          <Link
            href="/contact"
            className="bg-[#2F5D50] hover:bg-[#6B8A6E] text-[#FAF7F1] text-xs font-extrabold uppercase tracking-wider px-8 py-4 rounded-full shadow-2xl inline-flex items-center gap-2 border border-[#E8DCC8]/30"
          >
            <span>REQUEST CUSTOM ITINERARY</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}
