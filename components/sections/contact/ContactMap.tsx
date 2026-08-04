import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/shared/Heading";
import { Paragraph } from "@/components/shared/Paragraph";

export const ContactMap: React.FC = () => {
  return (
    <Section background="muted" spacing="lg">
      <Container size="xl">
        <div className="space-y-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <Heading as="h3" variant="h2" align="center" className="font-serif-heading text-2xl font-normal text-text-primary">
              Our Basecamp Location
            </Heading>
            <Paragraph align="center" className="text-text-secondary text-sm font-light">
              Nestled at the foothills of Boulder, CO, where wilderness trails meet our editorial design studio.
            </Paragraph>
          </div>

          <div className="w-full h-80 bg-surface rounded-2xl border border-border shadow-md overflow-hidden relative flex items-center justify-center">
            <div className="absolute inset-0 bg-primary-950/10 mix-blend-multiply" />
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
              alt="Boulder Basecamp Surroundings"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute bg-background/95 backdrop-blur-md p-6 rounded-xl border border-border shadow-2xl max-w-sm text-center space-y-2 z-10">
              <span className="text-2xl block">📍</span>
              <h4 className="font-serif-heading text-lg font-semibold text-text-primary">
                Path of Stories HQ
              </h4>
              <p className="text-xs text-text-secondary">
                742 Wilderness Ridge Road, Boulder, CO 80302
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
