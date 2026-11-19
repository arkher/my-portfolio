"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { navItems, profile } from "@/content/profile";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { ease, spring } from "@/lib/motion";

const sectionIds = navItems.map((item) => item.id);

export const SiteNav = () => {
  const active = useActiveSection(sectionIds);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-signal via-signal to-pulse"
        style={{ scaleX: progress }}
      />
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease, delay: 0.2 }}
        className="fixed inset-x-0 top-4 z-40 flex justify-center px-4"
      >
        <nav
          aria-label="Main"
          className="flex items-center gap-1 rounded-full border border-border/70 bg-night/70 p-1.5 pl-4 shadow-[0_20px_60px_-30px_rgb(0_0_0/0.9)] backdrop-blur-xl"
        >
          <a href="#top" className="mr-2 font-display text-[0.95rem] font-semibold tracking-tight text-fog">
            {profile.name}
          </a>
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li key={item.id} className={cn(item.id === "skills" || item.id === "research" ? "max-sm:hidden" : "")}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={cn(
                    "relative block rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300",
                    active === item.id ? "text-fog" : "text-mist hover:text-fog",
                  )}
                >
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={spring}
                      className="absolute inset-0 -z-10 rounded-full bg-night-3"
                    />
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.header>
    </>
  );
};
