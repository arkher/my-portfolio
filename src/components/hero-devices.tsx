"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import type { PointerEvent } from "react";
import { ease } from "@/lib/motion";
import { BEAT_WIDTH, chartPath, ecgPath } from "@/lib/geometry";

const patients = [
  { w: 92, tag: "stable" },
  { w: 74, tag: "review" },
  { w: 108, tag: "stable" },
  { w: 64, tag: "stable" },
] as const;

const draw = (delay: number, duration = 1.4) => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: { pathLength: 1, opacity: 1 },
  transition: { pathLength: { duration, ease, delay }, opacity: { duration: 0.2, delay } },
});

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
});

/* ---------- component ---------- */

export const HeroDevices = () => {
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-7, 7]), { stiffness: 120, damping: 18 });
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  const chart = chartPath([18, 26, 22, 38, 34, 48, 42, 58, 54, 66], 196, 70);

  return (
    <div
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative mx-auto w-full max-w-[600px] [perspective:1200px]"
      aria-hidden
    >
      {/* soft glow that breathes behind the devices */}
      <motion.div
        className="absolute inset-[12%] -z-10 rounded-full bg-signal/20 blur-3xl"
        animate={reduce ? undefined : { scale: [1, 1.08, 1], opacity: [0.55, 0.8, 0.55] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.svg
        viewBox="0 0 600 470"
        className="h-auto w-full overflow-visible"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <defs>
          <linearGradient id="sync" x1="0" x2="1">
            <stop offset="0" stopColor="var(--pulse)" />
            <stop offset="1" stopColor="var(--signal)" />
          </linearGradient>
          <clipPath id="ecg-window">
            <rect x="34" y="214" width="132" height="70" rx="6" />
          </clipPath>
        </defs>

        {/* ===== Browser: clinician dashboard ===== */}
        <g>
          <motion.rect
            x="150" y="20" width="430" height="300" rx="18"
            fill="var(--night-2)" stroke="var(--line)" strokeWidth="1.5"
            {...draw(0.3, 1.6)}
          />
          <motion.line x1="150" y1="58" x2="580" y2="58" stroke="var(--line)" strokeWidth="1.5" {...draw(0.9, 0.8)} />
          {[0, 1, 2].map((i) => (
            <motion.circle key={i} cx={174 + i * 16} cy="39" r="4.5" fill="var(--night-3)" {...rise(1 + i * 0.06)} />
          ))}
          <motion.rect x="250" y="31" width="220" height="16" rx="8" fill="var(--night-3)" {...rise(1.1)} />

          {/* sidebar */}
          <motion.rect x="166" y="76" width="96" height="226" rx="10" fill="var(--night-3)" opacity="0.55" {...rise(1.15)} />
          {[0, 1, 2, 3].map((i) => (
            <motion.rect
              key={i} x="178" y={94 + i * 26} width={i === 0 ? 70 : 54} height="9" rx="4.5"
              fill={i === 0 ? "var(--signal)" : "var(--line)"} {...rise(1.2 + i * 0.05)}
            />
          ))}

          {/* patient list */}
          {patients.map((p, i) => (
            <motion.g key={i} {...rise(1.35 + i * 0.09)}>
              <rect x="278" y={78 + i * 36} width="150" height="28" rx="8" fill="var(--night-3)" opacity="0.6" />
              <circle cx="293" cy={92 + i * 36} r="7" fill="var(--line)" />
              <rect x="307" y={88 + i * 36} width={p.w * 0.8} height="8" rx="4" fill="var(--mist)" opacity="0.5" />
              <circle cx="418" cy={92 + i * 36} r="3.5" fill={p.tag === "review" ? "var(--signal)" : "var(--pulse)"} />
            </motion.g>
          ))}

          {/* trend chart */}
          <motion.rect x="440" y="78" width="124" height="142" rx="10" fill="var(--night-3)" opacity="0.6" {...rise(1.4)} />
          <g transform="translate(450 120) scale(0.53 1)">
            <motion.path d={chart} fill="none" stroke="var(--signal)" strokeWidth="5" strokeLinecap="round" {...draw(1.7, 1.6)} />
          </g>
          <motion.rect x="452" y="92" width="48" height="8" rx="4" fill="var(--mist)" opacity="0.5" {...rise(1.5)} />

          {/* appointments strip */}
          <motion.rect x="278" y="232" width="286" height="70" rx="10" fill="var(--night-3)" opacity="0.6" {...rise(1.6)} />
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.rect
              key={i} x={292 + i * 54} y="248" width="42" height="38" rx="7"
              fill={i === 2 ? "var(--signal)" : "var(--line)"} opacity={i === 2 ? 0.9 : 0.7}
              {...rise(1.7 + i * 0.06)}
            />
          ))}
        </g>

        {/* ===== Sync line between the two apps ===== */}
        <motion.path
          id="sync-path"
          d="M190 300 C 230 380, 300 400, 350 300"
          fill="none" stroke="url(#sync)" strokeWidth="1.5" strokeDasharray="4 6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        />
        <motion.circle
          r="4.5" fill="var(--pulse)"
          initial={{ opacity: 0 }}
          animate={reduce ? { opacity: 0 } : { opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: 3, ease: "easeInOut", times: [0, 0.15, 0.85, 1] }}
        >
          <animateMotion dur="2.4s" begin="3s" repeatCount="indefinite" path="M190 300 C 230 380, 300 400, 350 300" />
        </motion.circle>

        {/* ===== Phone: patient app ===== */}
        <g>
          <motion.rect
            x="20" y="120" width="160" height="330" rx="30"
            fill="var(--night)" stroke="var(--line)" strokeWidth="1.5"
            {...draw(0.6, 1.6)}
          />
          <motion.rect x="76" y="134" width="48" height="12" rx="6" fill="var(--night-3)" {...rise(1.2)} />

          <motion.rect x="38" y="164" width="70" height="9" rx="4.5" fill="var(--mist)" opacity="0.6" {...rise(1.4)} />
          <motion.text
            x="38" y="204" fill="var(--fog)" fontSize="30" fontWeight="600"
            style={{ fontFamily: "var(--font-display)" }} {...rise(1.5)}
          >
            72
          </motion.text>
          <motion.text x="82" y="204" fill="var(--mist)" fontSize="12" {...rise(1.55)}>
            bpm
          </motion.text>

          {/* live ECG */}
          <motion.rect x="34" y="214" width="132" height="70" rx="6" fill="var(--night-2)" {...rise(1.6)} />
          <g clipPath="url(#ecg-window)">
            <motion.path
              d={ecgPath(34, 254, 6)}
              fill="none" stroke="var(--pulse)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
              initial={{ opacity: 0, x: 0 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, x: [0, -BEAT_WIDTH * 2] }}
              transition={{
                opacity: { delay: 1.8, duration: 0.4 },
                x: { duration: 2.4, repeat: Infinity, ease: "linear", delay: 1.8 },
              }}
            />
          </g>

          {/* appointment card */}
          <motion.g {...rise(2)}>
            <rect x="34" y="298" width="132" height="58" rx="12" fill="var(--night-3)" />
            <rect x="46" y="312" width="64" height="8" rx="4" fill="var(--fog)" opacity="0.8" />
            <rect x="46" y="328" width="92" height="7" rx="3.5" fill="var(--mist)" opacity="0.5" />
            <circle cx="150" cy="316" r="6" fill="var(--signal)" />
          </motion.g>
          <motion.g {...rise(2.15)}>
            <rect x="34" y="366" width="132" height="40" rx="12" fill="var(--signal)" opacity="0.92" />
            <rect x="66" y="382" width="68" height="8" rx="4" fill="var(--primary-foreground)" opacity="0.7" />
          </motion.g>
          <motion.rect x="80" y="426" width="40" height="5" rx="2.5" fill="var(--line)" {...rise(2.2)} />
        </g>
      </motion.svg>
    </div>
  );
};
