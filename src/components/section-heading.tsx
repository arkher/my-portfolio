import type { ReactNode } from "react";
import { WordReveal, Reveal } from "@/components/motion-primitives";

export const SectionHeading = ({ title, children }: Readonly<{ title: string; children?: ReactNode }>) => (
  <div className="mb-12">
    <WordReveal as="h2" text={title} className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-semibold text-fog" />
    {children ? (
      <Reveal delay={0.15} className="mt-4 max-w-xl text-mist">
        {children}
      </Reveal>
    ) : null}
  </div>
);
