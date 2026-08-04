import React from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/shared/Heading";
import { Paragraph } from "@/components/shared/Paragraph";
import { CommunityStats } from "@/lib/wordpress/types";

export interface CommunityNumbersProps {
  stats?: CommunityStats;
}

export const CommunityNumbers: React.FC<CommunityNumbersProps> = ({
  stats = {
    journeysCompleted: 142,
    countriesExplored: 18,
    communityMembers: 3250,
    storiesShared: 8900,
    treesPlanted: 12400,
  },
}) => {
  const statItems = [
    { label: "Journeys Completed", value: `${stats.journeysCompleted}+` },
    { label: "Pristine Regions", value: `${stats.countriesExplored}` },
    { label: "Community Members", value: `${stats.communityMembers.toLocaleString()}+` },
    { label: "Native Trees Planted", value: `${stats.treesPlanted.toLocaleString()}+` },
  ];

  return (
    <Section background="dark" spacing="lg">
      <Container size="xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-center">
          {statItems.map((item, index) => (
            <div key={index} className="pt-6 sm:pt-0 sm:px-4 space-y-2">
              <Heading
                as="h3"
                variant="display"
                align="center"
                className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-secondary-100 font-light"
              >
                {item.value}
              </Heading>
              <Paragraph align="center" className="text-secondary-400 text-sm font-light uppercase tracking-widest">
                {item.label}
              </Paragraph>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
