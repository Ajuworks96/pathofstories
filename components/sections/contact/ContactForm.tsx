"use client";

import React, { useState } from "react";
import { Heading } from "@/components/shared/Heading";
import { Paragraph } from "@/components/shared/Paragraph";
import { Button } from "@/components/shared/Button";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    packagePreference: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background border border-border p-8 sm:p-12 rounded-2xl shadow-xl space-y-6">
      <div className="space-y-2">
        <Heading as="h3" variant="h2" className="font-serif-heading text-2xl font-normal text-text-primary">
          Begin Your Story Inquiry
        </Heading>
        <Paragraph className="text-text-secondary text-sm font-light">
          Tell us about yourself and which expedition chapter speaks to your soul.
        </Paragraph>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Elena Rostova"
                className="w-full bg-surface border border-border px-4 py-3 rounded-md text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-800"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="elena@example.com"
                className="w-full bg-surface border border-border px-4 py-3 rounded-md text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-800"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-surface border border-border px-4 py-3 rounded-md text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-800"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                Interested Journey
              </label>
              <select
                value={formData.packagePreference}
                onChange={(e) => setFormData({ ...formData, packagePreference: e.target.value })}
                className="w-full bg-surface border border-border px-4 py-3 rounded-md text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-800"
              >
                <option value="general">General Inquiry</option>
                <option value="silent-ridge">Silent Ridge: High Himalayan Traverse</option>
                <option value="nordic-fjords">Nordic Fjords & Aurora Solitude</option>
                <option value="canopy-forest">Canopy & Cloud Forest Secret Trails</option>
                <option value="custom">Custom Private Story Journey</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
              Your Message or Story Intent *
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us what you hope to experience or any questions you have..."
              className="w-full bg-surface border border-border px-4 py-3 rounded-md text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-800"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full bg-primary-800 text-white hover:bg-primary-900 py-3.5 rounded-md font-medium"
          >
            Send Story Inquiry
          </Button>
        </form>
      ) : (
        <div className="p-8 bg-emerald-50 text-emerald-950 border border-emerald-200 rounded-xl space-y-3 text-center">
          <span className="text-4xl block">✨</span>
          <h4 className="font-serif-heading text-2xl font-semibold">Message Received</h4>
          <p className="text-sm font-light">
            Thank you, {formData.fullName}. Arjun or Maya will personally respond to your inquiry within 24 hours.
          </p>
        </div>
      )}
    </div>
  );
};
