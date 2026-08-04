import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/shared/Heading";
import { Paragraph } from "@/components/shared/Paragraph";
import { Badge } from "@/components/shared/Badge";
import { FounderModule } from "@/lib/wordpress/types";

export interface MeetFoundersProps {
  founders?: FounderModule[];
}

export const MeetFounders: React.FC<MeetFoundersProps> = ({ founders = [] }) => {
  return (
    <Section background="default" spacing="xl">
      <Container size="xl">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Badge className="bg-[#FF5733]/15 text-[#FF5733] border border-[#FF5733]/40 uppercase tracking-widest text-xs px-3.5 py-1.5 font-bold">
            THE LEADERSHIP
          </Badge>
          <Heading
            as="h2"
            variant="h1"
            align="center"
            className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-normal text-text-primary"
          >
            Meet The Founders
          </Heading>
          <Paragraph variant="large" align="center" className="text-text-secondary font-light">
            The visionaries and wilderness leads crafting every chapter of Path of Stories.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {founders.map((f) => (
            <div key={f.id} className="bg-surface rounded-2xl overflow-hidden border border-border shadow-lg flex flex-col justify-between">
              <div className="h-96 overflow-hidden relative">
                <img src={f.image} alt={f.name} className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <h3 className="font-serif-heading text-2xl font-normal">{f.name}</h3>
                  <p className="text-[#FF5733] text-xs uppercase tracking-widest font-bold">{f.role}</p>
                </div>
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-text-secondary text-sm font-light leading-relaxed">{f.bio}</p>
                <div className="p-4 bg-background rounded-xl border border-border italic text-[#FF5733] text-sm font-serif-heading">
                  &ldquo;{f.storyQuote}&rdquo;
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
