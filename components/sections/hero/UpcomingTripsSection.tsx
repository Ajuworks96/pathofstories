"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, Sparkles, X, Check, Send, MapPin, Calendar, Compass, ShieldCheck, Flame, ArrowRight } from "lucide-react";

export interface Trip {
  id: string;
  title: string;
  location: string;
  category: "Western Ghats" | "Himalayas" | "Monsoon Escapes" | "Kerala Trails";
  duration: string;
  price: string;
  date: string;
  difficulty: string;
  seatsLeft: number;
  featured?: boolean;
  image: string;
  description: string;
  highlights: string[];
  inclusions: string[];
}

export function UpcomingTripsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const trips: Trip[] = [
    {
      id: "maharashtra",
      title: "Western Ghats Monsoon Fort Trail",
      location: "Sahyadri, Maharashtra",
      category: "Western Ghats",
      duration: "4 Days / 3 Nights",
      price: "₹8,999",
      date: "Sep 12 - Sep 15",
      difficulty: "Moderate",
      seatsLeft: 4,
      featured: true,
      image: "/images/trip_maharashtra.jpg",
      description: "Traverse misty green ridges, roaring waterfalls, and historic mountain fortresses hidden in the monsoon clouds of Maharashtra.",
      highlights: ["Cliffside valley camping", "Waterfall rappelling & natural pools", "Ancient fortress exploration"],
      inclusions: ["All meals & stays", "Trek leader & local guide", "Safety gear & permits"],
    },
    {
      id: "meghalaya",
      title: "Living Root Bridges & Hidden Caves",
      location: "Cherrapunji, Meghalaya",
      category: "Monsoon Escapes",
      duration: "6 Days / 5 Nights",
      price: "₹14,500",
      date: "Oct 05 - Oct 10",
      difficulty: "Moderate",
      seatsLeft: 3,
      image: "/images/trip_meghalaya.jpg",
      description: "Immerse in the rainforest paradise of Cherrapunji, crossing century-old living root bridges and crystal clear turquoise canyons.",
      highlights: ["Double Decker Living Root Bridge", "Dawki river crystal kayaking", "Nohkalikai Waterfall trek"],
      inclusions: ["Guwahati transfers", "Homestays & Khasi meals", "Experienced local guide"],
    },
    {
      id: "spiti",
      title: "High Altitude Monastery & Stargazing",
      location: "Spiti Valley, Himachal",
      category: "Himalayas",
      duration: "8 Days / 7 Nights",
      price: "₹21,000",
      date: "Oct 18 - Oct 25",
      difficulty: "Challenging",
      seatsLeft: 5,
      image: "/images/trip_spiti.jpg",
      description: "Journey into the cold desert sanctuary of Spiti. Experience Milky Way stargazing, Key Gompa monastery, and high-altitude lakes.",
      highlights: ["Stargazing at 14,000 ft", "Key Monastery monk interaction", "Chandratal Lake sunset walk"],
      inclusions: ["4x4 SUV transport from Manali", "Cozy wooden stays", "Permits & oxygen cylinders"],
    },
    {
      id: "nepal",
      title: "Himalayan Ridge & Heritage Expedition",
      location: "Annapurna, Nepal",
      category: "Himalayas",
      duration: "10 Days / 9 Nights",
      price: "₹32,500",
      date: "Nov 02 - Nov 11",
      difficulty: "Challenging",
      seatsLeft: 2,
      image: "/images/trip_nepal.jpg",
      description: "Experience the spiritual grandeur of Kathmandu stupas and trek along pristine Himalayan ridges facing snow-capped peaks.",
      highlights: ["Annapurna panorama viewpoints", "Pashupatinath & Swayambhunath tour", "Tea house stays"],
      inclusions: ["Kathmandu transfers", "TIMS card & permits", "Sherpa guide support"],
    },
    {
      id: "kerala",
      title: "Misty Rainforest & Tea Highlands",
      location: "Munnar & Wayanad",
      category: "Kerala Trails",
      duration: "3 Days / 2 Nights",
      price: "₹6,500",
      date: "Nov 20 - Nov 22",
      difficulty: "Easy",
      seatsLeft: 6,
      image: "/images/trip_kerala.jpg",
      description: "Wake up above the clouds in Munnar's tea garden estates, explore secret rainforest trails, and gather around evening campfires.",
      highlights: ["Tea estate sunrise walking trail", "Secret river pool swim", "Campfire acoustic storytelling"],
      inclusions: ["Earthy eco-lodge stay", "Organic farm dining", "Naturalist leader"],
    },
  ];

  const categories = ["All", "Western Ghats", "Himalayas", "Monsoon Escapes", "Kerala Trails"];

  const filteredTrips = selectedCategory === "All"
    ? trips
    : trips.filter((t) => t.category === selectedCategory);

  const featuredTrip = trips.find((t) => t.featured) || trips[0];

  return (
    <section id="trips" className="relative py-24 bg-transparent text-white overflow-hidden border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-700/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-amber-300 text-xs font-semibold tracking-widest uppercase shadow-xl">
            <Sparkles className="w-3.5 h-3.5" />
            <span>UPCOMING EXPEDITIONS &amp; TRIALS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-sans tracking-tight leading-tight">
            Handcrafted Journeys. <br />
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300">
              Small-Group Wilderness Expeditions.
            </span>
          </h2>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => {
              const count = cat === "All" ? trips.length : trips.filter((t) => t.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-black shadow-lg shadow-amber-500/25 font-bold scale-105"
                      : "bg-white/5 hover:bg-white/10 text-white/70 border border-white/10"
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    selectedCategory === cat ? "bg-black/20 text-black" : "bg-white/10 text-white/80"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Spotlight Card & Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Featured Expedition Spotlight Card (Span 7) */}
          <div className="lg:col-span-7 flex">
            <div
              onClick={() => {
                setSelectedTrip(featuredTrip);
                setBookingSuccess(false);
              }}
              className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#18211e] group cursor-pointer w-full flex flex-col justify-between hover:border-amber-400/50 transition-all duration-500 min-h-[460px] sm:min-h-[520px]"
            >
              <Image
                src={featuredTrip.image}
                alt={featuredTrip.title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />

              {/* Top Badges */}
              <div className="relative z-10 p-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-amber-500 text-black font-extrabold text-[11px] tracking-widest uppercase flex items-center gap-1.5 shadow-lg">
                    <Flame className="w-3.5 h-3.5 fill-current" />
                    SPOTLIGHT EXPEDITION
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-emerald-400 font-bold text-[11px]">
                    ⚡ {featuredTrip.seatsLeft} SEATS LEFT
                  </span>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 font-serif font-bold text-lg">
                  {featuredTrip.price}
                </span>
              </div>

              {/* Bottom Info Section */}
              <div className="relative z-10 p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>{featuredTrip.location}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold font-serif text-white group-hover:text-amber-200 transition-colors">
                  {featuredTrip.title}
                </h3>

                <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed line-clamp-2">
                  {featuredTrip.description}
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 text-xs text-white/80">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-amber-400" />
                      {featuredTrip.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-amber-400" />
                      {featuredTrip.date}
                    </span>
                  </div>

                  <span className="text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>EXPLORE SPOT &rarr;</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Grid of Other Active Expeditions (Span 5) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {filteredTrips.slice(1, 4).map((trip) => (
              <div
                key={trip.id}
                onClick={() => {
                  setSelectedTrip(trip);
                  setBookingSuccess(false);
                }}
                className="bg-[#18211d]/90 hover:bg-[#202b26] backdrop-blur-xl border border-white/10 hover:border-amber-400/40 rounded-2xl p-4 transition-all duration-300 shadow-xl group cursor-pointer flex gap-4 items-center"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-amber-300 font-bold">
                    <span>{trip.date}</span>
                    <span className="text-white/90 font-serif">{trip.price}</span>
                  </div>

                  <h4 className="text-sm font-bold font-serif text-white group-hover:text-amber-200 transition-colors line-clamp-1">
                    {trip.title}
                  </h4>

                  <span className="text-[11px] text-white/60 block">
                    {trip.location}
                  </span>

                  <div className="pt-1 flex items-center justify-between text-[10px] text-white/50">
                    <span>{trip.duration}</span>
                    <span className="text-amber-400 font-semibold uppercase flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                      <span>BOOK</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Interactive Expedition Booking & Details Modal */}
      {selectedTrip && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-[#18211e] rounded-3xl overflow-hidden border border-white/20 shadow-2xl my-8">
            <button
              onClick={() => setSelectedTrip(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-amber-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 w-full">
              <Image src={selectedTrip.image} alt={selectedTrip.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18211e] via-[#18211e]/40 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-bold uppercase tracking-wider">
                  {selectedTrip.location}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-white mt-2">
                  {selectedTrip.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 bg-white/5 rounded-2xl p-4 border border-white/10 text-xs sm:text-sm">
                <div>
                  <span className="text-white/50 block text-[10px] uppercase font-bold">Duration</span>
                  <span className="font-semibold text-white">{selectedTrip.duration}</span>
                </div>
                <div>
                  <span className="text-white/50 block text-[10px] uppercase font-bold">Dates</span>
                  <span className="font-semibold text-amber-300">{selectedTrip.date}</span>
                </div>
                <div>
                  <span className="text-white/50 block text-[10px] uppercase font-bold">Difficulty</span>
                  <span className="font-semibold text-emerald-400">{selectedTrip.difficulty}</span>
                </div>
                <div>
                  <span className="text-white/50 block text-[10px] uppercase font-bold">Investment</span>
                  <span className="font-bold text-lg text-white">{selectedTrip.price}</span>
                </div>
              </div>

              <p className="text-white/80 text-sm leading-relaxed">{selectedTrip.description}</p>

              <div>
                <h4 className="text-xs font-bold tracking-widest text-amber-400 uppercase mb-3">Highlights</h4>
                <ul className="space-y-2">
                  {selectedTrip.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-white/90">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {bookingSuccess ? (
                <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-black flex items-center justify-center mx-auto font-bold">
                    <Check className="w-6 h-6" />
                  </div>
                  <h5 className="text-lg font-bold text-white">Expedition Seat Requested!</h5>
                  <p className="text-xs text-white/70">
                    Our trip coordinator will reach out to you on WhatsApp/Phone with the complete itinerary details shortly.
                  </p>
                </div>
              ) : (
                <div className="pt-2">
                  <button
                    onClick={() => setBookingSuccess(true)}
                    className="w-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-400 text-black font-bold py-3.5 rounded-2xl uppercase tracking-wider text-xs shadow-xl hover:brightness-110 transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Reserve Seat For {selectedTrip.price}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
