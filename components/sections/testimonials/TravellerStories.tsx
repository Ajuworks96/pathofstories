"use client";

import React, { useState } from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/shared/Heading";
import { Paragraph } from "@/components/shared/Paragraph";
import { Badge } from "@/components/shared/Badge";
import { TestimonialModule } from "@/lib/wordpress/types";

export interface TravellerStoriesProps {
  testimonials?: TestimonialModule[];
}

export const TravellerStories: React.FC<TravellerStoriesProps> = ({ testimonials = [] }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <Section background="muted" spacing="xl">
      <Container size="2xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Badge className="bg-[#00D2FF]/15 text-[#00D2FF] border border-[#00D2FF]/40 uppercase tracking-widest text-xs px-3.5 py-1.5 font-bold">
            VOICES OF OUR COMMUNITY
          </Badge>
          <Heading
            as="h2"
            variant="h1"
            align="center"
            className="font-sans text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white"
          >
            Traveller Stories & Reflections
          </Heading>
          <Paragraph variant="large" align="center" className="text-slate-300 font-light">
            Read and watch how journeys with Path of Stories transformed our community members.
          </Paragraph>
        </div>

        {/* Video Stories Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials
            .filter((t) => t.videoThumbnail)
            .map((item) => (
              <div
                key={item.id}
                className="relative rounded-2xl overflow-hidden shadow-xl border border-border group cursor-pointer h-80"
                onClick={() => setActiveVideo(item.videoUrl || "https://youtube.com")}
              >
                <img
                  src={item.videoThumbnail}
                  alt={item.authorName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#00D2FF] text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <span className="text-xl pl-1">▶</span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <Badge className="bg-[#00D2FF] text-black text-xs px-2.5 py-1 font-bold">
                    Video Journal • {item.journeyName}
                  </Badge>
                  <p className="font-serif-heading text-xl italic font-light">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="text-xs text-secondary-200 font-medium uppercase tracking-wider">
                    — {item.authorName}, {item.authorLocation}
                  </p>
                </div>
              </div>
            ))}
        </div>

        {/* Testimonials Quote Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-background border border-border p-8 rounded-xl space-y-6 shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-500 text-sm">
                  {"★".repeat(t.rating)}
                </div>
                <p className="font-serif-heading text-lg italic text-text-primary leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <Paragraph className="text-text-secondary text-sm font-light leading-relaxed">
                  {t.fullStory}
                </Paragraph>
              </div>

              <div className="pt-4 border-t border-border flex items-center gap-4">
                <img
                  src={t.authorImage}
                  alt={t.authorName}
                  className="w-12 h-12 rounded-full object-cover border border-border"
                />
                <div>
                  <h4 className="font-serif-heading text-sm font-semibold text-text-primary">
                    {t.authorName}
                  </h4>
                  <p className="text-xs text-text-secondary">
                    {t.authorLocation} • {t.journeyName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Player Modal */}
        {activeVideo && (
          <div className="fixed inset-0 z-modal bg-black/90 flex items-center justify-center p-4" onClick={() => setActiveVideo(null)}>
            <div className="max-w-4xl w-full bg-black rounded-xl overflow-hidden border border-white/20 p-4 space-y-4 text-white" onClick={(e) => e.stopPropagation()}>
              <div className="aspect-video w-full bg-zinc-900 rounded-lg flex items-center justify-center text-secondary-300">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
                  title="Traveller Story Video"
                  allowFullScreen
                />
              </div>
              <div className="flex justify-end">
                <button onClick={() => setActiveVideo(null)} className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-md text-sm">
                  Close Video
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};
