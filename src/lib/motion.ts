import type { Transition, Variants } from "motion/react";

/** Shared easing so every movement on the page feels like one system. */
export const ease = [0.22, 1, 0.36, 1] as const;

export const spring: Transition = { type: "spring", stiffness: 220, damping: 26, mass: 0.9 };

export const reveal: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease } },
};

export const stagger = (step = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: step, delayChildren: delay } },
});

/** Split a sentence into words, keeping spaces so line breaks stay natural. */
export const toWords = (text: string): readonly string[] => text.split(" ");

/**
 * Viewport options for scroll reveals: trigger as an element enters from the bottom,
 * and also catch anything already scrolled past (fast flicks, anchor jumps).
 */
export const inView = { once: true, margin: "100% 0px -10% 0px" } as const;
