"use client";

import { AnimatePresence, motion } from "motion/react";
import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import type { Content } from "@/content";
import { ease } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Magnetic, Reveal, WordReveal } from "@/components/motion-primitives";

type CopyState = keyof Content["contact"]["copy"];

type ContactProps = Readonly<{ contact: Content["contact"]; profile: Content["profile"] }>;

export const Contact = ({ contact, profile }: ContactProps) => {
  const [state, setState] = useState<CopyState>("idle");

  useEffect(() => {
    if (state === "idle") return;
    const timer = setTimeout(() => setState("idle"), 2200);
    return () => clearTimeout(timer);
  }, [state]);

  const copy = () =>
    navigator.clipboard
      .writeText(profile.email)
      .then(() => setState("copied"))
      .catch(() => setState("failed"));

  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 pt-28 pb-20">
      <div className="relative overflow-hidden rounded-[32px] border border-border/70 bg-night-2 px-8 py-16 sm:px-14 sm:py-20">
        <motion.div
          aria-hidden
          className="absolute -top-1/2 -right-1/4 size-[36rem] rounded-full bg-signal/15 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-1/2 -left-1/4 size-[30rem] rounded-full bg-pulse/10 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative">
          <WordReveal
            as="h2"
            text={contact.title}
            className="max-w-3xl font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.03] font-semibold text-fog"
          />
          <Reveal delay={0.2} className="mt-5 max-w-xl text-lg text-mist">
            {contact.body}
          </Reveal>

          <Reveal delay={0.35} className="mt-10 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Button asChild size="lg">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </Button>
            </Magnetic>
            <Button variant="outline" size="lg" onClick={copy} aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={state}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease }}
                  className="inline-flex items-center gap-2"
                >
                  {state === "copied" ? <Check className="text-pulse" /> : <Copy />}
                  {contact.copy[state]}
                </motion.span>
              </AnimatePresence>
            </Button>
          </Reveal>

          <Reveal delay={0.45} className="mt-10 flex gap-6 text-mist">
            {profile.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-border underline-offset-4 transition-colors hover:text-fog hover:decoration-signal"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resume}
              download
              className="underline decoration-border underline-offset-4 transition-colors hover:text-fog hover:decoration-signal"
            >
              {contact.resumeLink}
            </a>
          </Reveal>
        </div>
      </div>

      <footer className="mt-12 flex flex-wrap justify-between gap-4 text-sm text-mist">
        <p>
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <p>{profile.location}</p>
      </footer>
    </section>
  );
};
