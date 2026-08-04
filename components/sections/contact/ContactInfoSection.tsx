import React from "react";
import { Heading } from "@/components/shared/Heading";
import { Paragraph } from "@/components/shared/Paragraph";
import { SiteSettings } from "@/lib/wordpress/types";

export interface ContactInfoSectionProps {
  settings?: SiteSettings;
}

export const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({
  settings = {
    brandName: "PATH OF STORIES",
    tagline: "Every Journey Tells A Story",
    contactEmail: "stories@pathofstories.com",
    contactPhone: "+1 (800) 845-7867",
    address: "742 Wilderness Ridge Road, Boulder, CO 80302",
    operatingHours: "Mon - Fri: 9:00 AM - 6:00 PM EST",
    socialLinks: {
      instagram: "https://instagram.com/pathofstories",
      facebook: "https://facebook.com/pathofstories",
      youtube: "https://youtube.com/pathofstories",
      linkedin: "https://linkedin.com/company/pathofstories",
      pinterest: "https://pinterest.com/pathofstories",
    },
    seo: { title: "", metaDesc: "" },
  },
}) => {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <span className="text-xs text-primary-800 uppercase tracking-widest font-bold block">
          GET IN TOUCH
        </span>
        <Heading as="h2" variant="h1" className="font-serif-heading text-3xl sm:text-4xl font-normal text-text-primary">
          Connect With Our Story Directors
        </Heading>
        <Paragraph className="text-text-secondary text-base font-light leading-relaxed">
          Whether you are seeking advice on choosing an expedition, inquiring about custom private group journeys, or simply want to chat about wilderness storytelling—we are here.
        </Paragraph>
      </div>

      <div className="space-y-6 pt-4 border-t border-border">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center flex-shrink-0 text-lg">
            📍
          </div>
          <div>
            <h4 className="font-serif-heading text-base font-semibold text-text-primary">Basecamp Address</h4>
            <p className="text-text-secondary text-sm font-light">{settings.address}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center flex-shrink-0 text-lg">
            ✉️
          </div>
          <div>
            <h4 className="font-serif-heading text-base font-semibold text-text-primary">Direct Email</h4>
            <p className="text-text-secondary text-sm font-light">{settings.contactEmail}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center flex-shrink-0 text-lg">
            📞
          </div>
          <div>
            <h4 className="font-serif-heading text-base font-semibold text-text-primary">Phone & WhatsApp</h4>
            <p className="text-text-secondary text-sm font-light">{settings.contactPhone}</p>
            <p className="text-xs text-text-secondary font-light mt-0.5">{settings.operatingHours}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
