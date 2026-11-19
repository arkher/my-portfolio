"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, type ComponentProps, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ease, inView, reveal, stagger, toWords } from "@/lib/motion";

/** Headline whose words rise into place one after another. */
export const WordReveal = ({
  text,
  as: Tag = "h1",
  className,
  delay = 0,
}: Readonly<{ text: string; as?: "h1" | "h2"; className?: string; delay?: number }>) => {
  const MotionTag = Tag === "h1" ? motion.h1 : motion.h2;
  return (
    <MotionTag
      className={className}
      variants={stagger(0.045, delay)}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      aria-label={text}
    >
      {toWords(text).map((word, i) => (
        <span key={`${word}-${i}`} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: "110%", rotate: 4 },
              show: { y: "0%", rotate: 0, transition: { duration: 0.9, ease } },
            }}
          >
            {word}
            {" "}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
};

/** Fades and lifts its children once they enter the viewport. */
export const Reveal = ({ className, children, delay = 0, ...rest }: ComponentProps<typeof motion.div> & { delay?: number }) => (
  <motion.div
    className={className}
    variants={reveal}
    initial="hidden"
    whileInView="show"
    viewport={inView}
    transition={{ delay }}
    {...rest}
  >
    {children}
  </motion.div>
);

/** Staggers direct `Reveal`-style children. */
export const RevealGroup = ({
  className,
  children,
  step = 0.08,
}: Readonly<{ className?: string; children: ReactNode; step?: number }>) => (
  <motion.div
    className={className}
    variants={stagger(step)}
    initial="hidden"
    whileInView="show"
    viewport={inView}
  >
    {children}
  </motion.div>
);

export const RevealItem = ({ className, children }: Readonly<{ className?: string; children: ReactNode }>) => (
  <motion.div className={className} variants={reveal}>
    {children}
  </motion.div>
);

/** Counts from 0 to `value` the first time it scrolls into view. */
export const CountUp = ({ value, className }: Readonly<{ value: number; className?: string }>) => {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  // Always start at 0 so server and client markup match; reduced motion jumps straight to the value.
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!visible) return;
    if (reduce) {
      mv.set(value);
      return;
    }
    const controls = animate(mv, value, { duration: 1.6, ease });
    return () => controls.stop();
  }, [visible, reduce, mv, value]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
};

/** Wrapper that drifts toward the pointer, then springs back. */
export const Magnetic = ({
  children,
  className,
  strength = 0.25,
}: Readonly<{ children: ReactNode; className?: string; strength?: number }>) => {
  const reduce = useReducedMotion();
  const x = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });
  const y = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div className={cn("inline-block", className)} style={{ x, y }} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </motion.div>
  );
};
