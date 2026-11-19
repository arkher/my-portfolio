"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { Content } from "@/content";
import { ease, inView } from "@/lib/motion";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";
import portrait from "../../../public/images/paulo.jpg";

export const About = ({ about }: Readonly<{ about: Content["about"] }>) => {
  const { education } = about;
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-8%", "8%"]);

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          ref={ref}
          initial={{ clipPath: "inset(18% 18% 18% 18% round 28px)", opacity: 0 }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0% round 28px)", opacity: 1 }}
          viewport={inView}
          transition={{ duration: 1.3, ease }}
          className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-night-2"
        >
          <motion.div style={{ y }} className="absolute inset-[-10%]">
            <Image
              src={portrait}
              alt={about.photoAlt}
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-[60%_30%]"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
        </motion.div>

        <div>
          <SectionHeading title={about.title} />
          <RevealGroup className="space-y-5 text-lg text-fog/85" step={0.12}>
            {about.paragraphs.map((paragraph) => (
              <RevealItem key={paragraph}>
                <p className="max-w-[62ch]">{paragraph}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2} className="mt-10 border-t border-border/70 pt-6">
            <p className="font-display text-lg font-semibold text-fog">{education.degree}</p>
            <p className="text-mist">
              {education.school}, {education.period}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
