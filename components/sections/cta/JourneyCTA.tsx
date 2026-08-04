"use client";

import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/shared/Heading";
import { Paragraph } from "@/components/shared/Paragraph";
import { Button } from "@/components/shared/Button";

export interface JourneyCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export const JourneyCTA: React.FC<JourneyCTAProps> = ({
  title = "Ready To Become Part Of A Story?",
  subtitle = "Join our upcoming small-group expeditions or collaborate with us on a custom storytelling journey.",
  buttonText = "Begin Your Chapter",
  buttonLink = "/contact",
}) => {
  return (
    <Section background="dark" spacing="xl">
      <Container size="lg" className="text-center">
        <div className="space-y-6 max-w-3xl mx-auto">
          <Heading
            as="h2"
            variant="h1"
            align="center"
            className="font-serif-heading text-3xl sm:text-5xl md:text-6xl font-normal text-secondary-100 leading-tight"
          >
            {title}
          </Heading>

          <Paragraph
            variant="large"
            align="center"
            className="text-secondary-300 font-light text-lg sm:text-xl max-w-xl mx-auto leading-relaxed"
          >
            {subtitle}
          </Paragraph>

          <div className="pt-4 flex justify-center">
            <Button
              variant="primary"
              size="lg"
              className="bg-[#FF5733] text-white hover:bg-[#E04824] px-9 py-4 text-base font-semibold rounded-md shadow-2xl shadow-[#FF5733]/30 transition-transform hover:scale-105"
              onClick={() => {
                window.location.href = buttonLink;
              }}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
