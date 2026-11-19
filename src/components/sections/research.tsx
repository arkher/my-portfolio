"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { publications } from "@/content/profile";
import { ease } from "@/lib/motion";
import { RevealGroup, RevealItem } from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";

export const Research = () => (
  <section id="research" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
    <SectionHeading title="Research">
      Before frontend, I spent two years in machine learning research. A few of the papers that came out of it.
    </SectionHeading>

    <RevealGroup className="border-t border-border/70">
      {publications.map((pub) => (
        <RevealItem key={pub.href}>
          <motion.a
            href={pub.href}
            target="_blank"
            rel="noreferrer"
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="group relative flex items-start justify-between gap-6 border-b border-border/70 py-7"
          >
            <motion.span
              aria-hidden
              variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
              transition={{ duration: 0.6, ease }}
              className="absolute inset-x-0 bottom-[-1px] h-px origin-left bg-signal"
            />
            <span>
              <span className="block max-w-[52ch] text-xl leading-snug text-fog transition-colors group-hover:text-white">
                {pub.title}
              </span>
              <span className="mt-2 block text-sm text-mist">
                {pub.venue}
                {pub.year ? `, ${pub.year}` : ""}
              </span>
            </span>
            <motion.span
              variants={{ rest: { x: 0, y: 0, opacity: 0.5 }, hover: { x: 4, y: -4, opacity: 1 } }}
              transition={{ duration: 0.4, ease }}
              className="mt-1 text-signal"
            >
              <ArrowUpRight className="size-6" />
              <span className="sr-only">Open paper</span>
            </motion.span>
          </motion.a>
        </RevealItem>
      ))}
    </RevealGroup>
  </section>
);
