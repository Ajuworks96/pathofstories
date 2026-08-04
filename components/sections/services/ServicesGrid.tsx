"use client";

import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/shared/Heading";
import { Paragraph } from "@/components/shared/Paragraph";
import { Badge } from "@/components/shared/Badge";
import { Button } from "@/components/shared/Button";
import { ServiceModule } from "@/lib/wordpress/types";

export interface ServicesGridProps {
  services?: ServiceModule[];
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ services = [] }) => {
  return (
    <Section background="default" spacing="xl">
      <Container size="xl">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Badge className="bg-[#FF5733]/15 text-[#FF5733] border border-[#FF5733]/40 uppercase tracking-widest text-xs px-3.5 py-1.5 font-bold">
            WHAT WE OFFER
          </Badge>
          <Heading
            as="h2"
            variant="h1"
            align="center"
            className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-normal text-text-primary"
          >
            Storytelling Service Offerings
          </Heading>
          <Paragraph variant="large" align="center" className="text-text-secondary font-light">
            Every service is editable via WordPress Headless CMS and structured for deep engagement.
          </Paragraph>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-surface p-8 sm:p-12 rounded-2xl border border-border ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`lg:col-span-6 space-y-6 ${isEven ? "" : "lg:order-2"}`}>
                  <Badge className="bg-[#FF5733] text-white text-xs px-3 py-1 font-bold shadow-md">
                    Service Module #{index + 1}
                  </Badge>
                  <Heading as="h3" variant="h2" className="font-serif-heading text-3xl font-normal text-text-primary">
                    {service.title}
                  </Heading>
                  <Paragraph className="text-text-secondary text-base leading-relaxed font-light">
                    {service.longDescription}
                  </Paragraph>

                  <div className="space-y-2 pt-2">
                    <h4 className="font-serif-heading text-sm font-semibold text-text-primary">Key Service Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-text-secondary">
                          <span className="text-[#FF5733] font-bold">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button
                      variant="primary"
                      size="md"
                      className="bg-[#FF5733] text-white hover:bg-[#E04824] px-6 py-3 rounded-md font-semibold shadow-lg shadow-[#FF5733]/20"
                      onClick={() => {
                        const pkgSec = document.getElementById("packages");
                        if (pkgSec) pkgSec.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {service.buttonText}
                    </Button>
                  </div>
                </div>

                <div className={`lg:col-span-6 ${isEven ? "" : "lg:order-1"}`}>
                  <div className="rounded-xl overflow-hidden shadow-xl border border-border h-96">
                    <img
                      src={service.bannerImage || service.featuredImage}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
