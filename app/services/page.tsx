import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, MessageCircle, Sparkles } from "lucide-react";

export const metadata = {
  title: "Services & Expeditions | Path of Stories",
  description: "Explore curated small-group expeditions across Arunachal Pradesh, Anini, Mechuka, Ziro, Assam, Nagaland, and Meghalaya with Path of Stories.",
};

export default function ServicesPage() {
  const expeditions = [
    {
      id: "arunachal_pradesh",
      title: "Land of Monasteries and Waterfalls - Arunachal Pradesh",
      location: "Arunachal Pradesh",
      duration: "8 Days / 7 Nights",
      image: "/images/service_arunachal_pradesh.jpg",
      description: "Journey across soaring Himalayan passes, ancient sacred Gompas, dramatic waterfalls, and historic border frontiers.",
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
      duration: "7 Days / 6 Nights",
      image: "/images/service_anini.jpg",
      description: "Trek pristine frontier alpine valleys, experience ancient Apatani tribal heritage in Ziro, and witness India's first sunrise in Dong Valley.",
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
      duration: "5 Days / 4 Nights",
      image: "/images/service_assam.jpg",
      description: "Explore Kaziranga National Park sanctuary of one-horned rhinoceroses, tea plantations, and scenic cruises along the mighty Brahmaputra.",
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
      duration: "6 Days / 5 Nights",
      image: "/images/service_nagaland.jpg",
      description: "Trek through the emerald waves of Dzoku Valley, immerse in the world-famous Hornbill Festival, and visit historic Longwa tribal hamlets.",
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
      duration: "6 Days / 5 Nights",
      image: "/images/service_meghalaya.jpg",
      description: "Explore mist-laden Cherrapunji, serene Jaintia & Khasi hills, glass-like Dawki river, and the natural water canyon of Wari Chora.",
      highlights: [
        "Cherrapunji",
        "Jaintia Hills",
        "Khasi hills",
        "Dawki river",
        "Wari Chora",
        "Land of water activities",
      ],
    },
  ];

  const getWhatsAppUrl = (title: string) => {
    const text = `Hi Path of Stories, I'm interested in inquiring about "${title}"! Please share the detailed itinerary and available dates.`;
    return `https://wa.me/916282603784?text=${encodeURIComponent(text)}`;
  };

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
          From the monasteries of Tawang to the Hornbill festival in Nagaland, one-horned rhinos in Assam, and the water canyons of Meghalaya. Connect directly on WhatsApp to reserve your seat or customize your trip.
        </p>
      </div>

      {/* Expeditions List */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {expeditions.map((item) => (
            <div
              key={item.id}
              className="bg-[#EFECE6] border border-[#E2DEC5] hover:border-[#AD6B4D]/50 rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="flex flex-col flex-1">
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

                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold font-serif text-[#213327]">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#4A554D] leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#78857A] block mb-2 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#AD6B4D]" />
                      EXPED HIGHLIGHTS:
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

              <div className="px-6 py-4 border-t border-[#D9D4C7]/70 flex flex-col sm:flex-row items-center gap-3 mt-auto bg-[#EAE6DE]/40">
                <a
                  href={getWhatsAppUrl(item.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>INQUIRE ON WHATSAPP</span>
                </a>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto bg-[#213327] hover:bg-[#2C4233] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2"
                >
                  <span>FORM</span>
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
              Planning a trip for your corporate team, family, or close friends? Amal &amp; Jeena curate customized itineraries tailored to your exact travel preferences.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/916282603784?text=Hi%20Path%20of%20Stories,%20I'd%20like%20to%20request%20a%20custom%20itinerary!"
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider px-8 py-3.5 rounded-full shadow-md inline-flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>CHAT ON WHATSAPP</span>
              </a>

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
