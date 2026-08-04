import React from "react";
import { BaseSection } from "./BaseSection";
import { SectionBackground } from "./SectionBackground";
import { SectionSpacing } from "./SectionSpacing";
import { SectionContainer } from "./SectionContainer";

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  containerSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  spacingSize?: "none" | "sm" | "md" | "lg" | "xl";
  background?: React.ReactNode;
}

export const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
  ({ as = "section", containerSize = "xl", spacingSize = "md", background, className, children, ...props }, ref) => {
    return (
      <BaseSection as={as} ref={ref} className={className} {...props}>
        {background && <SectionBackground>{background}</SectionBackground>}
        <SectionSpacing padding={spacingSize}>
          <SectionContainer size={containerSize}>
            {children}
          </SectionContainer>
        </SectionSpacing>
      </BaseSection>
    );
  }
);

SectionWrapper.displayName = "SectionWrapper";
