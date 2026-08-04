"use client";

import React, { useState } from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/shared/Heading";
import { Paragraph } from "@/components/shared/Paragraph";
import { Badge } from "@/components/shared/Badge";
import { FAQItem } from "@/lib/wordpress/types";

export interface FAQAccordionProps {
  faqs?: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs = [] }) => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))];

  const filteredFaqs = activeCategory === "All" ? faqs : faqs.filter((f) => f.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Section background="muted" spacing="xl">
      <Container size="lg">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <Badge className="bg-secondary-200 text-primary-900 border border-secondary-300 uppercase tracking-widest text-xs px-3 py-1 font-semibold">
            CLEAR ANSWERS
          </Badge>
          <Heading
            as="h2"
            variant="h1"
            align="center"
            className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-normal text-text-primary"
          >
            Frequently Asked Questions
          </Heading>
          <Paragraph variant="large" align="center" className="text-text-secondary font-light">
            Everything you need to know about preparing for a Path of Stories expedition.
          </Paragraph>
        </div>

        {/* Category Tabs */}
        {categories.length > 2 && (
          <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary-800 text-white shadow-md"
                    : "bg-background text-text-secondary hover:bg-surface border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Accordion Items */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-background border border-border rounded-xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-primary-800"
                >
                  <span className="font-serif-heading text-lg font-medium text-text-primary">
                    {faq.question}
                  </span>
                  <span className="text-primary-800 font-bold text-xl flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-text-secondary text-sm font-light leading-relaxed border-t border-border/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
