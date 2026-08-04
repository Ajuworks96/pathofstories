"use client";

import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/shared/Heading";
import { Paragraph } from "@/components/shared/Paragraph";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { FounderModule } from "@/lib/wordpress/types";

export interface FoundersStoryProps {
  founders?: FounderModule[];
}

export const FoundersStory: React.FC<FoundersStoryProps> = ({ founders = [] }) => {
  const leadFounder = founders[0] || {
    name: "Arjun Dev & Maya Lin",
    role: "Co-Founders & Storytellers",
    bio: "We co-founded Path of Stories after years of witnessing how commercial tourism reduced nature to photo opps. We set out to create human-led expeditions built on genuine connection and quiet reverence.",
    storyQuote: "We don't create travel itineraries. We curate chapters of a story you will recount for the rest of your life.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85",
  };

  return (
    <Section background="default" spacing="xl">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Asymmetrical Image Column (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-border">
              <img
                src={leadFounder.image}
                alt={leadFounder.name}
                className="w-full h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Background Decorative Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#FF5733]/30 rounded-xl -z-0 hidden sm:block" />
            <div className="absolute top-6 -left-6 bg-surface text-white p-6 rounded-lg shadow-2xl border border-border max-w-xs hidden md:block z-20">
              <p className="font-serif-heading text-lg italic text-[#FF5733] leading-snug">
                &ldquo;{leadFounder.storyQuote}&rdquo;
              </p>
              <p className="text-xs text-text-secondary mt-3 font-semibold uppercase tracking-wider">
                — {leadFounder.name}
              </p>
            </div>
          </div>

          {/* Narrative Content Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <Badge className="bg-[#FF5733]/15 text-[#FF5733] border border-[#FF5733]/40 uppercase tracking-widest text-xs px-3.5 py-1.5 font-bold">
              FOUNDERS&apos; VISION
            </Badge>

            <Heading
              as="h2"
              variant="h1"
              className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-normal text-text-primary leading-tight"
            >
              <span className="text-[#FF5733]">Connection</span> Before Conversion. <span className="text-[#FF5733]">Story</span> Before Sales.
            </Heading>

            <Paragraph variant="large" className="text-text-secondary leading-relaxed font-light text-lg">
              {leadFounder.bio}
            </Paragraph>

            <Paragraph className="text-text-secondary leading-relaxed font-light">
              In a hyper-connected world, true luxury is no longer defined by marble foyers or gold-plated fixtures. Real luxury is deep silence, unhurried time, fireside conversations with indigenous elders, and standing on a high mountain pass alongside people who started as strangers and ended as family.
            </Paragraph>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                className="bg-primary-800 text-white hover:bg-primary-900 font-medium px-6 py-3 rounded-md"
                onClick={() => {
                  window.location.href = "/about";
                }}
              >
                Read The Full Story
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
