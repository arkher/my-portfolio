"use client";

import Link from "next/link";
import { motion, useScroll, useSpring } from "motion/react";
import { useMemo } from "react";
import type { Content } from "@/content";
import { useActiveSection } from "@/hooks/use-active-section";
import { localeCookie, locales, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { ease, spring } from "@/lib/motion";

const ONE_YEAR = 60 * 60 * 24 * 365;

/** Remember an explicit language choice so the proxy honours it next visit. */
const rememberLocale = (locale: Locale) => {
  document.cookie = `${localeCookie}=${locale}; path=/; max-age=${ONE_YEAR}; samesite=lax`;
};

const LanguageSwitch = ({ current, label }: Readonly<{ current: Locale; label: string }>) => (
  <div role="group" aria-label={label} className="ml-1 flex items-center rounded-full bg-night-2 p-0.5">
    {locales.map((locale) => {
      const active = locale === current;
      return (
        <Link
          key={locale}
          href={`/${locale}`}
          scroll={false}
          hrefLang={locale}
          lang={locale}
          aria-current={active ? "true" : undefined}
          onClick={() => rememberLocale(locale)}
          className={cn(
            "relative isolate rounded-full px-2.5 py-1 text-xs font-medium uppercase transition-colors duration-300",
            active ? "text-primary-foreground" : "text-mist hover:text-fog",
          )}
        >
          {active && (
            <motion.span layoutId="lang-pill" transition={spring} className="absolute inset-0 -z-10 rounded-full bg-signal" />
          )}
          {locale}
        </Link>
      );
    })}
  </div>
);

type SiteNavProps = Readonly<{ locale: Locale; name: string; nav: Content["nav"] }>;

export const SiteNav = ({ locale, name, nav }: SiteNavProps) => {
  const sectionIds = useMemo(() => nav.items.map((item) => item.id), [nav.items]);
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
          aria-label={nav.label}
          className="flex items-center gap-1 rounded-full border border-border/70 bg-night/70 p-1.5 pl-4 shadow-[0_20px_60px_-30px_rgb(0_0_0/0.9)] backdrop-blur-xl"
        >
          <a href="#top" className="mr-2 font-display text-[0.95rem] font-semibold tracking-tight text-fog max-sm:hidden">
            {name}
          </a>
          <ul className="flex items-center">
            {nav.items.map((item) => (
              <li key={item.id} className={cn(item.id === "skills" || item.id === "research" ? "max-md:hidden" : "")}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={cn(
                    "relative isolate block rounded-full px-3 py-1.5 text-sm transition-colors duration-300",
                    active === item.id ? "text-fog" : "text-mist hover:text-fog",
                  )}
                >
                  {active === item.id && (
                    <motion.span layoutId="nav-pill" transition={spring} className="absolute inset-0 -z-10 rounded-full bg-night-3" />
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitch current={locale} label={nav.language} />
        </nav>
      </motion.header>
    </>
  );
};
