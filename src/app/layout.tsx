import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { profile } from "@/content/profile";
import { SiteNav } from "@/components/site-nav";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

// Self-hosted variable fonts (SIL OFL): no third-party request, no layout shift.
const display = localFont({
  src: "../fonts/bricolage-grotesque-latin-wght-normal.woff2",
  variable: "--font-bricolage",
  weight: "200 800",
  display: "swap",
});
const sans = localFont({
  src: "../fonts/instrument-sans-latin-wght-normal.woff2",
  variable: "--font-instrument",
  weight: "400 700",
  display: "swap",
});

const description =
  "Tech Lead and Senior Software Engineer building web and mobile products with React, React Native, Next.js and TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL("https://paulo-gomes.dev"),
  title: { default: `${profile.name} · ${profile.role}`, template: `%s · ${profile.name}` },
  description,
  authors: [{ name: profile.fullName, url: "https://paulo-gomes.dev" }],
  creator: profile.fullName,
  keywords: [
    "Tech Lead",
    "Senior Software Engineer",
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "Frontend",
    "Mobile",
    "Paulo Gomes",
  ],
  openGraph: {
    type: "profile",
    url: "https://paulo-gomes.dev",
    title: `${profile.name} · ${profile.role}`,
    description,
    siteName: profile.name,
  },
  twitter: { card: "summary_large_image", title: `${profile.name} · ${profile.role}`, description },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#0c0f1a", colorScheme: "dark" };

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
  <html lang="en" className={`${display.variable} ${sans.variable}`}>
    <body className="grain">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-full focus:bg-signal focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SmoothScroll>
        <SiteNav />
        {children}
      </SmoothScroll>
    </body>
  </html>
);

export default RootLayout;
