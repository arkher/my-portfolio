"use client";

import { motion } from "motion/react";
import { ArrowDownToLine, Mail } from "lucide-react";
import { facts, profile } from "@/content/profile";
import { ease } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { HeroDevices } from "@/components/hero-devices";
import { CountUp, Magnetic, WordReveal } from "@/components/motion-primitives";

const enter = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease, delay },
});

export const Hero = () => (
  <section id="top" className="relative overflow-hidden pt-32 pb-20 max-lg:pt-28 lg:min-h-[100svh] lg:flex lg:items-center">
    <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.2fr_1fr]">
      <div>
        <motion.p {...enter(0.1)} className="mb-6 inline-flex items-center gap-2.5 text-sm text-mist">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-pulse opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-pulse" />
          </span>
          {profile.role}, open to remote roles
        </motion.p>

        <WordReveal
          text={profile.headline}
          delay={0.25}
          className="font-display text-[clamp(2.3rem,4.2vw,3.6rem)] leading-[1.04] font-semibold text-fog"
        />

        <motion.p {...enter(0.9)} className="mt-7 max-w-[34rem] text-lg text-mist">
          {profile.intro}
        </motion.p>

        <motion.div {...enter(1.05)} className="mt-9 flex flex-wrap items-center gap-3">
          <Magnetic>
            <Button asChild size="lg">
              <a href={`mailto:${profile.email}`}>
                <Mail />
                Email me
              </a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button asChild variant="outline" size="lg">
              <a href={profile.resume} download>
                <ArrowDownToLine />
                Download résumé
              </a>
            </Button>
          </Magnetic>
        </motion.div>

        <motion.dl {...enter(1.25)} className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border/70 pt-6">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="sr-only">{fact.label}</dt>
              <dd className="font-display text-3xl font-semibold text-fog tabular-nums">
                <CountUp value={fact.value} />
                {fact.suffix}
              </dd>
              <dd className="mt-1 text-sm leading-snug text-mist">{fact.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <HeroDevices />
    </div>
  </section>
);
