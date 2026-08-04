"use client";

import React, { useState } from "react";
import { PackageModule } from "@/lib/wordpress/types";
import { Heading } from "@/components/shared/Heading";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";

export interface PackageModalProps {
  packageData: PackageModule | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PackageModal: React.FC<PackageModalProps> = ({
  packageData,
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<"overview" | "itinerary" | "included" | "map">("overview");

  if (!isOpen || !packageData) return null;

  return (
    <div className="fixed inset-0 z-modal flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-background border border-border rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto">
        {/* Header Hero Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={packageData.packageGallery[0] || "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"}
            alt={packageData.packageName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors border border-white/20 text-xl z-10"
            aria-label="Close dialog"
          >
            ✕
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-[#FF5733] text-white border border-[#FF5733] text-xs px-3 py-1 font-bold">
                {packageData.destination}
              </Badge>
              <Badge className="bg-white/20 text-white backdrop-blur-md text-xs px-3 py-1">
                {packageData.difficulty}
              </Badge>
              <Badge className="bg-white/20 text-white backdrop-blur-md text-xs px-3 py-1">
                Max {packageData.maxParticipants} Travellers
              </Badge>
            </div>
            <Heading as="h2" variant="h2" className="font-serif-heading text-white text-2xl sm:text-4xl font-normal">
              {packageData.packageName}
            </Heading>
            <p className="text-secondary-200 text-sm font-light">
              Duration: {packageData.duration}
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-border bg-surface px-6 overflow-x-auto">
          {(["overview", "itinerary", "included", "map"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-5 text-sm font-medium border-b-2 capitalize transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? "border-[#FF5733] text-[#FF5733] font-bold"
                  : "border-transparent text-text-secondary hover:text-text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif-heading text-xl font-medium mb-4 text-text-primary">
                  Expedition Highlights
                </h3>
                <ul className="space-y-3">
                  {packageData.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary text-sm">
                      <span className="text-primary-800 font-bold">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {packageData.packageGallery.length > 1 && (
                <div>
                  <h3 className="font-serif-heading text-lg font-medium mb-3 text-text-primary">
                    Gallery
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {packageData.packageGallery.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Gallery ${idx}`}
                        className="rounded-lg h-32 w-full object-cover border border-border"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "itinerary" && (
            <div className="space-y-6">
              <h3 className="font-serif-heading text-xl font-medium text-text-primary">
                Day-by-Day Schedule
              </h3>
              <div className="space-y-4">
                {packageData.schedule.map((item, index) => (
                  <div key={index} className="p-4 bg-surface rounded-xl border border-border space-y-2">
                    <span className="text-xs font-bold text-primary-800 uppercase tracking-widest block">
                      {item.day}
                    </span>
                    <h4 className="font-serif-heading text-base font-semibold text-text-primary">
                      {item.title}
                    </h4>
                    <p className="text-text-secondary text-sm font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "included" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif-heading text-lg font-semibold text-emerald-800 mb-4">
                  What Is Included
                </h3>
                <ul className="space-y-2">
                  {packageData.included.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif-heading text-lg font-semibold text-rose-800 mb-4">
                  What Is Excluded
                </h3>
                <ul className="space-y-2">
                  {packageData.excluded.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-rose-600 font-bold">✕</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === "map" && (
            <div className="space-y-4">
              <h3 className="font-serif-heading text-xl font-medium text-text-primary">
                Location & Region
              </h3>
              <div className="p-6 bg-surface rounded-xl border border-border space-y-3 text-center">
                <p className="font-serif-heading text-2xl text-primary-900 font-normal">
                  📍 {packageData.mapLocation.locationName}
                </p>
                <p className="text-text-secondary text-sm">
                  Region: {packageData.mapLocation.region} | Coordinates: {packageData.mapLocation.lat}°N, {packageData.mapLocation.lng}°E
                </p>
                <div className="h-48 bg-primary-100 rounded-lg flex items-center justify-center text-primary-900 border border-primary-200">
                  <span>Interactive Map Preview Bounds Coordinates [{packageData.mapLocation.lat}, {packageData.mapLocation.lng}]</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Price & Booking Action */}
        <div className="p-6 border-t border-border bg-surface flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs text-text-secondary block">Investment Per Person</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-serif-heading font-bold text-[#FF5733]">
                {packageData.offerPrice || packageData.price}
              </span>
              {packageData.offerPrice && (
                <span className="text-sm line-through text-text-secondary">
                  {packageData.price}
                </span>
              )}
            </div>
          </div>

          <Button
            variant="primary"
            size="lg"
            className="bg-[#FF5733] text-white hover:bg-[#E04824] px-8 py-3 rounded-md font-semibold shadow-lg shadow-[#FF5733]/20"
            onClick={() => {
              window.location.href = packageData.bookingButton.url;
            }}
          >
            {packageData.bookingButton.label}
          </Button>
        </div>
      </div>
    </div>
  );
};
