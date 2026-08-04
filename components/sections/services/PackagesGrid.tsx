"use client";

import React, { useState } from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/shared/Heading";
import { Paragraph } from "@/components/shared/Paragraph";
import { Button } from "@/components/shared/Button";
import { Badge } from "@/components/shared/Badge";
import { PackageModule } from "@/lib/wordpress/types";
import { PackageModal } from "./PackageModal";

export interface PackagesGridProps {
  packages: PackageModule[];
  title?: string;
  subtitle?: string;
}

export const PackagesGrid: React.FC<PackagesGridProps> = ({
  packages,
  title = "Active Trekking Expeditions",
  subtitle = "Small-group wilderness mountain traverses led by certified alpine guides. Strictly capped at 8 trekkers per group.",
}) => {
  const [selectedPackage, setSelectedPackage] = useState<PackageModule | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (pkg: PackageModule) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <Section background="dark" spacing="xl" id="treks" className="border-b border-border/40">
      <Container size="2xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Badge className="bg-[#FF5722]/15 text-[#FF5722] border border-[#FF5722]/40 uppercase tracking-widest text-xs px-3.5 py-1.5 font-bold">
            HIGH-ALTITUDE TRAVERSES
          </Badge>
          <Heading
            as="h2"
            variant="h1"
            align="center"
            className="font-sans text-3xl sm:text-5xl font-black uppercase text-white tracking-tight"
          >
            {title}
          </Heading>
          <Paragraph variant="large" align="center" className="text-slate-300 font-light">
            {subtitle}
          </Paragraph>
        </div>

        {/* Trekking Expedition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-surface rounded-2xl overflow-hidden border border-border shadow-2xl hover:border-[#FF5722]/60 transition-all duration-normal flex flex-col justify-between group"
            >
              {/* Card Header Image & Trail Badges */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={pkg.packageGallery[0] || "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"}
                  alt={pkg.packageName}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141A22] via-transparent to-black/40" />

                {/* Top Difficulty & Elevation Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <Badge className="bg-[#FF5722] text-white text-xs px-3 py-1 font-bold uppercase tracking-wider shadow-lg">
                    {pkg.difficulty || "STRENUOUS"}
                  </Badge>
                  <Badge className="bg-black/70 text-emerald-400 backdrop-blur-md text-xs px-3 py-1 font-bold border border-emerald-500/30">
                    Max 4,800m Alt
                  </Badge>
                </div>

                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-semibold border border-white/10">
                  ⛺ Max {pkg.maxParticipants} Trekkers
                </div>
              </div>

              {/* Card Body Details */}
              <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs text-[#FF5722] uppercase tracking-widest block font-bold">
                    📍 {pkg.destination} • {pkg.duration}
                  </span>
                  <Heading as="h3" variant="h3" className="font-sans text-xl font-bold text-white leading-snug">
                    {pkg.packageName}
                  </Heading>
                </div>

                {/* Trail Highlights */}
                <div className="space-y-2 pt-2 border-t border-border">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold block">
                    INCLUDED EXPEDITION FEATURES:
                  </span>
                  <ul className="space-y-2">
                    {pkg.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-[#FF5722] font-bold">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Action Button */}
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold block">TREK INVESTMENT</span>
                    <span className="font-sans text-2xl font-black text-[#FF5722]">
                      {pkg.offerPrice || pkg.price}
                    </span>
                  </div>

                  <Button
                    variant="primary"
                    size="sm"
                    className="bg-[#FF5722] text-white hover:bg-[#F4511E] px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#FF5722]/30"
                    onClick={() => handleOpenModal(pkg)}
                  >
                    VIEW ROUTE →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Package Modal */}
        <PackageModal
          isOpen={isModalOpen}
          packageData={selectedPackage}
          onClose={handleCloseModal}
        />
      </Container>
    </Section>
  );
};
