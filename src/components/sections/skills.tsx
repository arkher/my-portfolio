"use client";

import { motion } from "motion/react";
import { skills } from "@/content/profile";
import { ease, inView, stagger } from "@/lib/motion";
import { SectionHeading } from "@/components/section-heading";

export const Skills = () => (
  <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
    <SectionHeading title="What I work with">
      The tools I reach for every week, grouped by the problem they solve.
    </SectionHeading>

    <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((group) => (
        <motion.div
          key={group.name}
          variants={stagger(0.04)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
        >
          <motion.h3
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
            className="mb-4 text-lg font-semibold text-fog"
          >
            {group.name}
          </motion.h3>
          <ul className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <motion.li
                key={item}
                variants={{
                  hidden: { opacity: 0, scale: 0.85, y: 8 },
                  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 20 } },
                }}
                whileHover={{ y: -3 }}
                className="cursor-default rounded-full border border-border bg-night-2 px-3.5 py-1.5 text-sm text-fog/85 transition-colors duration-300 hover:border-signal/60 hover:text-fog"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);
