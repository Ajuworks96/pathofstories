"use client";

import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/shared/Heading";
import { Paragraph } from "@/components/shared/Paragraph";
import { Badge } from "@/components/shared/Badge";

export const WhyPathOfStories: React.FC = () => {
  return (
    <Section background="dark" spacing="xl" className="border-b border-border/40">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Title & 4 Minimal Icons (Matching Reference "Don't miss out") */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#00D2FF]/15 text-[#00D2FF] flex items-center justify-center font-bold text-xl border border-[#00D2FF]/30">
                ⛺
              </div>
              <Heading
                as="h2"
                variant="h1"
                className="font-sans text-4xl sm:text-5xl font-black uppercase text-white tracking-tight"
              >
                Don&apos;t Miss Out
              </Heading>
              <Paragraph className="text-slate-300 text-base font-light leading-relaxed max-w-md">
                Experience authentic wilderness travel crafted around human connection, slow pacing, and pristine natural solitude.
              </Paragraph>
            </div>

            {/* 4 Minimal Icons Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border">
              <div className="space-y-2">
                <span className="text-[#00D2FF] text-2xl block font-bold">✤</span>
                <h4 className="text-white text-sm font-semibold">140+ Expeditions</h4>
                <p className="text-slate-400 text-xs font-light">Small group Himalayan & Arctic traverses.</p>
              </div>

              <div className="space-y-2">
                <span className="text-[#00D2FF] text-2xl block font-bold">⯌</span>
                <h4 className="text-white text-sm font-semibold">18 Pristine Regions</h4>
                <p className="text-slate-400 text-xs font-light">Untouched mountain ridges & cloud forests.</p>
              </div>

              <div className="space-y-2">
                <span className="text-[#00D2FF] text-2xl block font-bold">❖</span>
                <h4 className="text-white text-sm font-semibold">3,200+ Members</h4>
                <p className="text-slate-400 text-xs font-light">Global community of authentic storytellers.</p>
              </div>

              <div className="space-y-2">
                <span className="text-[#00D2FF] text-2xl block font-bold">◈</span>
                <h4 className="text-white text-sm font-semibold">12,400+ Trees Planted</h4>
                <p className="text-slate-400 text-xs font-light">Direct ecological habitat stewardship.</p>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Featured Hiker Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="relative rounded-2xl overflow-hidden border border-border bg-surface h-96 group shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=85"
                alt="High Himalayan Explorer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-[#00D2FF] text-xs font-bold uppercase tracking-widest block">
                  EXPLORE TRAVERSE
                </span>
                <h3 className="font-black text-2xl uppercase tracking-tight">TO RUN</h3>
                <Badge className="bg-[#00D2FF] text-black text-xs px-3 py-1 font-bold shadow-lg">
                  $3,450 / 9 DAYS
                </Badge>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-2xl overflow-hidden border border-border bg-surface h-96 group shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=85"
                alt="Nordic Aurora Explorer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-[#00D2FF] text-xs font-bold uppercase tracking-widest block">
                  AURORA SOLITUDE
                </span>
                <h3 className="font-black text-2xl uppercase tracking-tight">TO ADD</h3>
                <Badge className="bg-[#00D2FF] text-black text-xs px-3 py-1 font-bold shadow-lg">
                  $4,200 / 7 DAYS
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
