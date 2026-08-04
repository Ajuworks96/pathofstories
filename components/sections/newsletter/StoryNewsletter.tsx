"use client";

import React, { useState } from "react";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/shared/Heading";
import { Paragraph } from "@/components/shared/Paragraph";
import { Button } from "@/components/shared/Button";
import { Badge } from "@/components/shared/Badge";

export const StoryNewsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <Section background="muted" spacing="xl">
      <Container size="xl">
        <div className="bg-surface border border-border p-8 sm:p-12 md:p-16 rounded-2xl shadow-2xl text-center space-y-6">
          <Badge className="bg-[#00D2FF]/15 text-[#00D2FF] border border-[#00D2FF]/40 uppercase tracking-widest text-xs px-3.5 py-1.5 font-bold">
            MONTHLY DISPATCH
          </Badge>

          <Heading
            as="h2"
            variant="h1"
            align="center"
            className="font-sans text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white"
          >
            Letters From The Wild
          </Heading>

          <Paragraph variant="large" align="center" className="text-slate-300 font-light max-w-xl mx-auto">
            Once a month, we publish intimate field notes, photography essays, and private invitations to unreleased small-group expeditions. No spam. Only quiet inspiration.
          </Paragraph>

          {!subscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-4">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background border border-border px-5 py-3.5 rounded-md text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-[#00D2FF]"
              />
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="bg-[#00D2FF] text-black hover:bg-[#00B8E6] px-6 py-3.5 rounded-md font-bold text-xs uppercase tracking-widest whitespace-nowrap shadow-lg shadow-[#00D2FF]/20"
              >
                Join Dispatch
              </Button>
            </form>
          ) : (
            <div className="p-4 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-md text-sm font-medium">
              ✓ Welcome to our story community. Check your inbox for our latest dispatch!
            </div>
          )}

          <p className="text-xs text-text-secondary font-light pt-2">
            Unsubscribe anytime. We safeguard your privacy strictly.
          </p>
        </div>
      </Container>
    </Section>
  );
};
