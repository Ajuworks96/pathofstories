"use client";

import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/shared/Heading";
import { Paragraph } from "@/components/shared/Paragraph";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { ServiceModule } from "@/lib/wordpress/types";

export interface FeaturedExperiencesProps {
  services?: ServiceModule[];
}

export const FeaturedExperiences: React.FC<FeaturedExperiencesProps> = ({ services = [] }) => {
  return (
    <Section background="default" spacing="xl" id="experiences">
      <Container size="xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <Badge className="bg-[#FF5733]/15 text-[#FF5733] border border-[#FF5733]/40 uppercase tracking-widest text-xs px-3.5 py-1.5 font-bold">
              CURATED JOURNEYS
            </Badge>
            <Heading
              as="h2"
              variant="h1"
              className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-normal text-text-primary"
            >
              Featured Story Experiences
            </Heading>
            <Paragraph variant="large" className="text-text-secondary font-light">
              Crafted for individuals who seek high-alpine silence, creative wilderness solitude, and deep heritage connections.
            </Paragraph>
          </div>

          <Button
            variant="primary"
            size="md"
            className="bg-[#FF5733] text-white hover:bg-[#E04824] px-6 py-3 rounded-md transition-all self-start md:self-auto font-semibold shadow-lg shadow-[#FF5733]/20"
            onClick={() => {
              window.location.href = "/services";
            }}
          >
            View All Services
          </Button>
        </div>

        {/* Services Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-surface rounded-xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-normal flex flex-col"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={service.featuredImage}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs text-white/80 font-light tracking-wider uppercase bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">
                    {service.features[0] || "Small Group Expedition"}
                  </span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <Heading as="h3" variant="h3" className="font-serif-heading text-2xl font-medium text-text-primary group-hover:text-primary-800 transition-colors">
                    {service.title}
                  </Heading>
                  <Paragraph className="text-text-secondary text-sm leading-relaxed font-light">
                    {service.shortDescription}
                  </Paragraph>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <Button
                    variant="link"
                    className="text-primary-800 font-semibold text-sm hover:underline p-0 flex items-center gap-2"
                    onClick={() => {
                      window.location.href = `/services#${service.slug}`;
                    }}
                  >
                    <span>{service.buttonText}</span>
                    <span>→</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
