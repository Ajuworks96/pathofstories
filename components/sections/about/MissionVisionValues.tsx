import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/shared/Heading";
import { Paragraph } from "@/components/shared/Paragraph";
import { Badge } from "@/components/shared/Badge";
import { MissionVisionValues as MissionVisionValuesType } from "@/lib/wordpress/types";

export interface MissionVisionValuesProps {
  data?: MissionVisionValuesType;
}

export const MissionVisionValues: React.FC<MissionVisionValuesProps> = ({ data }) => {
  if (!data) return null;

  return (
    <Section background="muted" spacing="xl">
      <Container size="xl">
        {/* Mission & Vision 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Mission Box */}
          <div className="bg-background p-8 sm:p-12 rounded-2xl border border-border space-y-6 shadow-md">
            <Badge className="bg-primary-800 text-white text-xs px-3 py-1">
              MISSION STATEMENT
            </Badge>
            <Heading as="h2" variant="h2" className="font-serif-heading text-3xl font-normal text-text-primary">
              {data.mission.title}
            </Heading>
            <Paragraph className="text-text-secondary text-base leading-relaxed font-light">
              {data.mission.description}
            </Paragraph>
            <ul className="space-y-3 pt-2">
              {data.mission.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-text-secondary font-light">
                  <span className="text-primary-800 font-bold">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision Box */}
          <div className="bg-primary-950 text-white p-8 sm:p-12 rounded-2xl border border-primary-800/40 space-y-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <Badge className="bg-secondary-200 text-primary-950 text-xs px-3 py-1 font-semibold">
                OUR VISION
              </Badge>
              <Heading as="h2" variant="h2" className="font-serif-heading text-3xl font-normal text-white">
                {data.vision.title}
              </Heading>
              <Paragraph className="text-secondary-200 text-base leading-relaxed font-light">
                {data.vision.description}
              </Paragraph>
            </div>
            <div className="p-6 bg-white/10 rounded-xl backdrop-blur-md border border-white/15">
              <p className="font-serif-heading italic text-lg text-secondary-100 font-light">
                &ldquo;{data.vision.quote}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Header & Grid */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <Badge className="bg-secondary-200 text-primary-900 border border-secondary-300 uppercase tracking-widest text-xs px-3 py-1 font-semibold">
            WHAT GUIDES US
          </Badge>
          <Heading
            as="h2"
            variant="h2"
            align="center"
            className="font-serif-heading text-3xl sm:text-4xl font-normal text-text-primary"
          >
            Our Core Values
          </Heading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.values.map((v, i) => (
            <div key={i} className="bg-background p-8 rounded-xl border border-border space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <span className="w-12 h-12 rounded-full bg-primary-100 text-primary-800 font-serif-heading font-bold flex items-center justify-center text-lg">
                0{i + 1}
              </span>
              <h3 className="font-serif-heading text-xl font-medium text-text-primary">{v.title}</h3>
              <p className="text-text-secondary text-sm font-light leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
