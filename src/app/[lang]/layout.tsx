import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { getContent } from "@/content";
import { isLocale, locales } from "@/lib/i18n";
import { SiteNav } from "@/components/site-nav";
import { SmoothScroll } from "@/components/smooth-scroll";
import "../globals.css";

// Self-hosted variable fonts (SIL OFL): no third-party request, no layout shift.
const display = localFont({
  src: "../../fonts/bricolage-grotesque-latin-wght-normal.woff2",
  variable: "--font-bricolage",
  weight: "200 800",
  display: "swap",
});
const sans = localFont({
  src: "../../fonts/instrument-sans-latin-wght-normal.woff2",
  variable: "--font-instrument",
  weight: "400 700",
  display: "swap",
});

const siteUrl = "https://paulo-gomes.dev";

export const dynamicParams = false;
export const generateStaticParams = () => locales.map((lang) => ({ lang }));

export const generateMetadata = async ({ params }: LayoutProps<"/[lang]">): Promise<Metadata> => {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta, profile } = getContent(lang);
  return {
    metadataBase: new URL(siteUrl),
    title: { default: meta.title, template: `%s · ${profile.name}` },
    description: meta.description,
    authors: [{ name: profile.fullName, url: siteUrl }],
    creator: profile.fullName,
    keywords: ["Tech Lead", "Senior Software Engineer", "React", "React Native", "Next.js", "TypeScript", profile.name],
    alternates: {
      canonical: `/${lang}`,
      languages: { ...Object.fromEntries(locales.map((l) => [l === "pt" ? "pt-BR" : l, `/${l}`])), "x-default": "/en" },
    },
    openGraph: {
      type: "profile",
      url: `${siteUrl}/${lang}`,
      title: meta.title,
      description: meta.description,
      siteName: profile.name,
      locale: meta.ogLocale,
      alternateLocale: locales.filter((l) => l !== lang).map((l) => getContent(l).meta.ogLocale),
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
  };
};

export const viewport: Viewport = { themeColor: "#0c0f1a", colorScheme: "dark" };

const RootLayout = async ({ children, params }: LayoutProps<"/[lang]">) => {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const content = getContent(lang);

  return (
    <html lang={lang === "pt" ? "pt-BR" : "en"} className={`${display.variable} ${sans.variable}`}>
      <body className="grain">
        <a
          href="#work"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-full focus:bg-signal focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          {content.nav.skip}
        </a>
        <SmoothScroll>
          <SiteNav locale={lang} name={content.profile.name} nav={content.nav} />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
};

export default RootLayout;
