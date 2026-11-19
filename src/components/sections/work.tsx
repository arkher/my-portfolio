"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { roles, type Role } from "@/content/profile";
import { cn, formatPeriod, toggleId } from "@/lib/utils";
import { ease } from "@/lib/motion";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";

const RoleItem = ({ role, open, onToggle }: Readonly<{ role: Role; open: boolean; onToggle: () => void }>) => {
  const current = role.period.end === null;
  const panelId = `role-${role.id}`;

  return (
    <Reveal className="relative pl-10 sm:pl-14">
      <span
        aria-hidden
        className={cn(
          "absolute top-2 left-[7px] size-[11px] rounded-full border-2 sm:left-[15px]",
          current ? "border-pulse bg-pulse shadow-[0_0_0_6px_rgb(94_234_212/0.15)]" : "border-signal/70 bg-night",
        )}
      />
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <p className="text-sm text-mist tabular-nums">{formatPeriod(role.period)}</p>
        {current ? <Badge variant="live">Current</Badge> : null}
        {role.note ? <Badge variant="quiet">{role.note}</Badge> : null}
      </div>
      <h3 className="mt-2 text-2xl font-semibold text-fog">
        {role.title} <span className="text-mist">at</span> {role.company}
      </h3>
      <p className="mt-1 text-sm text-mist">{role.location}</p>
      <p className="mt-4 max-w-[60ch] text-fog/85">{role.summary}</p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Stack">
        {role.stack.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="group mt-5 inline-flex items-center gap-1.5 text-sm text-signal transition-colors hover:text-fog"
      >
        {open ? "Hide details" : "Show details"}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.4, ease }}>
          <ChevronDown className="size-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.ul
            id={panelId}
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease }}
            className="max-w-[60ch] overflow-hidden"
          >
            {role.highlights.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, ease, delay: 0.08 + i * 0.05 }}
                className="relative mt-3 pl-5 text-[0.98rem] text-mist before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-2.5 before:bg-signal/70"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </Reveal>
  );
};

export const Work = () => {
  const [openIds, setOpenIds] = useState<readonly string[]>([roles[0]?.id ?? ""]);
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <div className="grid gap-12 lg:grid-cols-[18rem_1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading title="Where I've worked">
            Seven years across healthcare, fintech, conversational platforms and retail, most of them remote for US
            companies.
          </SectionHeading>
        </div>

        <div ref={listRef} className="relative">
          <div aria-hidden className="absolute top-2 bottom-2 left-3 w-px bg-border sm:left-5" />
          <motion.div
            aria-hidden
            className="absolute top-2 bottom-2 left-3 w-px origin-top bg-gradient-to-b from-pulse via-signal to-signal sm:left-5"
            style={{ scaleY: progress }}
          />
          <div className="flex flex-col gap-16">
            {roles.map((role) => (
              <RoleItem
                key={role.id}
                role={role}
                open={openIds.includes(role.id)}
                onToggle={() => setOpenIds((ids) => toggleId(ids, role.id))}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
