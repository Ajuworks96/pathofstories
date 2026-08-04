import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/shared/Heading";
import { Paragraph } from "@/components/shared/Paragraph";
import { Badge } from "@/components/shared/Badge";
import { JourneyMilestone } from "@/lib/wordpress/types";

export interface JourneyTimelineProps {
  milestones?: JourneyMilestone[];
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ milestones = [] }) => {
  return (
    <Section background="default" spacing="xl">
      <Container size="xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Badge className="bg-[#FF5733]/15 text-[#FF5733] border border-[#FF5733]/40 uppercase tracking-widest text-xs px-3.5 py-1.5 font-bold">
            OUR EVOLUTION
          </Badge>
          <Heading
            as="h2"
            variant="h1"
            align="center"
            className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-normal text-text-primary"
          >
            The Journey Timeline
          </Heading>
          <Paragraph variant="large" align="center" className="text-text-secondary font-light">
            How a mountain conversation transformed into a global community of storytellers.
          </Paragraph>
        </div>

        {/* Timeline Items */}
        <div className="relative max-w-4xl mx-auto space-y-12 before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-border hidden md:block">
          {milestones.map((m, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={m.year}
                className={`relative flex items-center justify-between ${
                  isEven ? "flex-row-reverse" : ""
                }`}
              >
                {/* Content Box */}
                <div className="w-[45%] bg-surface p-8 rounded-xl border border-border shadow-md space-y-3">
                  <span className="font-serif-heading text-3xl font-bold text-[#FF5733] block">
                    {m.year}
                  </span>
                  <h3 className="font-serif-heading text-xl font-medium text-text-primary">
                    {m.title}
                  </h3>
                  <p className="text-text-secondary text-sm font-light leading-relaxed">
                    {m.description}
                  </p>
                </div>

                {/* Center Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary-800 border-4 border-background shadow-md z-10 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Media Box */}
                <div className="w-[45%] rounded-xl overflow-hidden shadow-md border border-border h-56">
                  <img
                    src={m.image}
                    alt={m.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View Timeline Stack */}
        <div className="space-y-8 md:hidden">
          {milestones.map((m) => (
            <div key={m.year} className="bg-surface p-6 rounded-xl border border-border space-y-3">
              <span className="font-serif-heading text-2xl font-bold text-primary-800 block">
                {m.year}
              </span>
              <h3 className="font-serif-heading text-lg font-medium text-text-primary">
                {m.title}
              </h3>
              <p className="text-text-secondary text-sm font-light">
                {m.description}
              </p>
              <img src={m.image} alt={m.title} className="w-full h-44 object-cover rounded-lg mt-3" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
