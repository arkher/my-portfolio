"use client";

import type { ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";
import "lenis/dist/lenis.css";

/**
 * Inertial page scrolling. The tree is identical on server and client;
 * for people who prefer reduced motion, wheel smoothing is simply switched off.
 */
export const SmoothScroll = ({ children }: Readonly<{ children: ReactNode }>) => {
  const reduce = useReducedMotion();
  return (
    <ReactLenis
      root
      options={{ lerp: 0.09, wheelMultiplier: 0.95, smoothWheel: !reduce, anchors: { offset: -80, immediate: Boolean(reduce) } }}
    >
      {children}
    </ReactLenis>
  );
};
