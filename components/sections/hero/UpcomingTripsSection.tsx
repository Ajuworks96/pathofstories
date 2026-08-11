"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X, Check } from "lucide-react";


export interface TripCard {
  id: string;
  title: string;
  duration: string;
  difficulty: string;
  image: string;
  location: string;
  price: string;
  description: string;
}

export function UpcomingTripsSection() {
  const [selectedTrip, setSelectedTrip] = useState<TripCard | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const featuredTrips: TripCard[] = [
    {
      id: "kudremukh",
      title: "Kudremukh Trek",
      duration: "3 Days",
      difficulty: "Moderate",
      image: "/images/kudremukh_trek.png",
      location: "Chikkamagaluru, Karnataka",
      price: "₹4,999",
      description: "Trek through the rolling green horse-face peak, lush shola forests, and pristine mist-shrouded mountain streams.",
    },
    {
      id: "wayanad",
      title: "Wayanad Escape",
      duration: "2 Days",
      difficulty: "Easy",
      image: "/images/wayanad_escape.png",
      location: "Wayanad, Kerala",
      price: "₹3,499",
      description: "Experience forest camping under glowing lanterns, pine trees, natural water stream dips, and campfire acoustic sessions.",
    },
    {
      id: "varkala",
      title: "Varkala Getaway",
      duration: "2 Days",
      difficulty: "Easy",
      image: "/images/varkala_getaway.png",
      location: "Varkala Cliff, Kerala",
      price: "₹3,999",
      description: "Sunset beach cliff walks, serene ocean views, seaside cafes, and relaxed coastal vibes along Kerala's iconic red cliffs.",
    },
  ];

  return (
    <section id="trips" className="py-16 sm:py-24 bg-[#F6F5F0] text-[#213327] relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#213327] tracking-tight">
            Featured Trips
          </h2>
          {/* Centered Olive Accent Underline */}
          <div className="w-12 h-[2px] bg-[#78857A] mx-auto mt-3" />
        </div>

        {/* 3 Trip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredTrips.map((trip) => (
            <div
              key={trip.id}
              onClick={() => {
                setSelectedTrip(trip);
                setBookingSuccess(false);
              }}
              className="group cursor-pointer rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 bg-[#213327] flex flex-col justify-between"
            >
              {/* Card Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  quality={90}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Dark Forest Green Banner Footer */}
              <div className="p-5 bg-[#213327] text-[#FAF8F5] flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-serif font-medium text-[#FAF8F5] leading-snug group-hover:text-[#AD6B4D] transition-colors">
                    {trip.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C5CEC8] font-sans font-light">
                    {trip.duration} &bull; {trip.difficulty}
                  </p>
                </div>

                {/* Right Arrow Button */}
                <button
                  aria-label={`View ${trip.title}`}
                  className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#AD6B4D] text-[#FAF8F5] flex items-center justify-center flex-shrink-0 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Trips Pill Outline Button */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-block border border-[#213327] text-[#213327] hover:bg-[#213327] hover:text-[#FAF8F5] text-xs sm:text-sm font-medium uppercase tracking-wider px-9 py-3 rounded-full transition-all duration-300"
          >
            View All Trips
          </Link>
        </div>
      </div>

      {/* Trip Details Modal */}
      {selectedTrip && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-[#F6F5F0] rounded-3xl overflow-hidden shadow-2xl border border-[#DCD7CD]">
            <button
              onClick={() => setSelectedTrip(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#213327] text-white hover:bg-[#AD6B4D] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative h-56 w-full">
              <Image src={selectedTrip.image} alt={selectedTrip.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#213327] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-wider text-[#AD6B4D] font-semibold block">
                  {selectedTrip.location}
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#FAF8F5]">{selectedTrip.title}</h3>
              </div>
            </div>

            <div className="p-6 space-y-4 text-[#213327]">
              <div className="flex items-center justify-between text-xs sm:text-sm border-b border-[#DCD7CD] pb-3">
                <span className="font-medium text-[#78857A]">
                  Duration: {selectedTrip.duration}
                </span>
                <span className="font-medium text-[#78857A]">
                  Difficulty: {selectedTrip.difficulty}
                </span>
                <span className="font-bold text-[#AD6B4D] text-base">
                  {selectedTrip.price}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#4A554D] leading-relaxed">
                {selectedTrip.description}
              </p>

              {bookingSuccess ? (
                <div className="bg-[#213327] text-[#FAF8F5] rounded-2xl p-4 text-center space-y-1">
                  <div className="w-8 h-8 rounded-full bg-[#AD6B4D] flex items-center justify-center mx-auto text-white">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base font-semibold">Booking Inquiry Received!</h4>
                  <p className="text-xs text-[#C5CEC8]">Our team will reach out with complete trek itinerary and preparation details.</p>
                </div>
              ) : (
                <button
                  onClick={() => setBookingSuccess(true)}
                  className="w-full bg-[#213327] hover:bg-[#2C4233] text-[#FAF8F5] font-semibold text-xs uppercase tracking-wider py-3 rounded-full transition-all shadow-md"
                >
                  Reserve Seat For {selectedTrip.price}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

