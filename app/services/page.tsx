import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Compass, Shield, Sparkles } from "lucide-react";

export const metadata = {
  title: "Services & Expeditions | Path of Stories",
  description: "Explore curated small-group services & expeditions across Assam, Meghalaya, Tawang, Nagaland, Arunachal Pradesh, Anini, Mechuka, and Lakshadweep.",
};

export default function ServicesPage() {
  const expeditions = [
    {
      id: "assam",
      title: "Assam Wilderness & Heritage Trail",
      location: "Assam, Northeast India",
      duration: "5 Days / 4 Nights",
      image: "/images/service_assam.jpg",
      description: "Explore the world's largest river island of Majuli, lush rolling tea estates, Kaziranga rhino safaris, and Brahmaputra sunset cruises.",
      highlights: ["Kaziranga Wildlife", "Majuli Island Culture", "Brahmaputra Sunset Cruise", "Heritage Tea Estates"],
    },
    {
      id: "meghalaya",
      title: "Meghalaya Cloud & Waterfalls Trail",
      location: "Cherrapunji & Dawki, Meghalaya",
      duration: "6 Days / 5 Nights",
      image: "/images/service_meghalaya.jpg",
      description: "Hike through double-decker living root bridges, turquoise natural pools, and fog-draped rainiest valleys on earth.",
      highlights: ["Double-Decker Root Bridges", "Dawki River Boating", "Nohkalikai Waterfalls", "Khasi Village Stays"],
    },
    {
      id: "tawang",
      title: "Tawang Monastery & Alpine Expedition",
      location: "Tawang, Arunachal Pradesh",
      duration: "7 Days / 6 Nights",
      image: "/images/service_tawang.jpg",
      description: "High-altitude monastery sanctuary, morning chants at 400-year-old Tawang Gompa, Sela Pass snow peaks, and Madhuri lake.",
      highlights: ["Tawang Monastery Chants", "Sela Pass & Lake", "Madhuri Lake Hike", "Monpa Tribal Culture"],
    },
    {
      id: "nagaland",
      title: "Nagaland Dzukou Valley & Tribal Trail",
      location: "Dzukou Valley & Kohima, Nagaland",
      duration: "6 Days / 5 Nights",
      image: "/images/service_nagaland.jpg",
      description: "Trek through the rolling green carpets of Dzukou Valley, experience authentic Naga village hospitality, and explore vibrant traditions.",
      highlights: ["Dzukou Valley Trek", "Kisama Heritage Village", "Kohima Cultural Stays", "Local Naga Culinary Trails"],
    },
    {
      id: "arunachal_pradesh",
      title: "Arunachal Frontier & Dawn Peaks",
      location: "Arunachal Pradesh, Northeast India",
      duration: "8 Days / 7 Nights",
      image: "/images/service_arunachal_pradesh.jpg",
      description: "Traverse snow-fed rivers, misty pine forests, remote tribal hamlets, and dawn-lit mountain passes along India's northeastern frontier.",
      highlights: ["Sangti Valley Stays", "Dirang River Rafting", "High-Altitude Passes", "Authentic Homestays"],
    },
    {
      id: "anini",
      title: "Anini Dibang Valley Frontier Trek",
      location: "Anini, Dibang Valley",
      duration: "7 Days / 6 Nights",
      image: "/images/service_anini.jpg",
      description: "Journey to Dibang Valley's misty mountains, experience Idu Mishmi tribal culture, emerald rivers, and raw, undisturbed nature.",
      highlights: ["Dibang Valley Exploration", "Idu Mishmi Culture", "Prismatic Alpine Rivers", "Unexplored Trail Treks"],
    },
    {
      id: "mechuka",
      title: "Mechuka Valley Shangri-La Trail",
      location: "Mechuka, Shi-Yomi District",
      duration: "7 Days / 6 Nights",
      image: "/images/service_mechuka.jpg",
      description: "Discover the hidden paradise near Tibetan border with wooden bridges over Yargyap Chu river, ancient monasteries, and pine meadows.",
      highlights: ["Yargyap Chu River Walks", "400-Yr Samten Yongcha Gompa", "Pine Forest Camping", "Border Valley Culture"],
    },
    {
      id: "lakshadweep",
      title: "Lakshadweep Turquoise Lagoon Getaway",
      location: "Lakshadweep Islands",
      duration: "5 Days / 4 Nights",
      image: "/images/service_lakshadweep.jpg",
      description: "Unwind on secluded island beaches, kayak through translucent turquoise lagoons, and snorkel vibrant coral reef sanctuaries.",
      highlights: ["Coral Reef Snorkeling", "Turquoise Lagoon Kayaking", "White Sand Beach Camps", "Island Coconut Stays"],
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
          From Assam tea gardens to the untouched alpine valleys of Anini, Mechuka, and the turquoise lagoons of Lakshadweep. Every service is thoughtfully planned with safety, transparent pricing, and authenticity.
        </p>
      </div>

      {/* Expeditions List (8 Services) */}
      <div className="max-w-6xl mx-auto px-4">
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
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#213327] via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#FAF8F5]/90 text-[#213327] text-[10px] font-bold uppercase tracking-wider border border-[#DCD7CD]">
                      {item.duration}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-[#FAF8F5] uppercase font-medium">
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
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#78857A] block mb-2 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#AD6B4D]" />
                      SERVICE HIGHLIGHTS:
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
                  <span>INQUIRE ABOUT THIS SERVICE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom & Corporate Journeys Banner */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-[#213327] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-md relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-semibold tracking-widest text-[#AD6B4D] uppercase block">
              BESPOKE EXPEDITIONS
            </span>
            <h2 className="text-3xl font-bold font-serif text-[#FAF8F5]">
              Custom &amp; Private Group Expeditions
            </h2>
            <p className="text-[#C5CEC8] text-xs sm:text-sm font-light leading-relaxed">
              Planning a trip for your corporate team, family, or close friends to Assam, Meghalaya, Lakshadweep, or Arunachal Pradesh? Amal &amp; Jeena curate customized itineraries tailored to your exact travel preferences.
            </p>
            <div className="pt-2">
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
      </div>

    </div>
  );
}
