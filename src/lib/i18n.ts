/** Locale primitives. Everything here is pure so it runs the same in the proxy, on the server and in tests. */

export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const localeCookie = "NEXT_LOCALE";

export const isLocale = (value: string | null | undefined): value is Locale =>
  locales.some((locale) => locale === value);

type Weighted = Readonly<{ tag: string; q: number; index: number }>;

const toWeighted = (part: string, index: number): Weighted => {
  const [rawTag = "", ...params] = part.trim().split(";");
  const qParam = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
  const q = qParam ? Number(qParam.slice(2)) : 1;
  return { tag: rawTag.trim().toLowerCase().split("-")[0] ?? "", q: Number.isFinite(q) ? q : 0, index };
};

/** "en-US;q=0.5, pt-BR" → ["pt", "en"]: base tags by descending quality, header order on ties. */
export const parseAcceptLanguage = (header: string | null | undefined): readonly string[] =>
  (header ?? "")
    .split(",")
    .filter((part) => part.trim() !== "")
    .map(toWeighted)
    .filter(({ tag, q }) => tag !== "" && tag !== "*" && q > 0)
    .toSorted((a, b) => b.q - a.q || a.index - b.index)
    .map(({ tag }) => tag)
    .filter((tag, i, all) => all.indexOf(tag) === i);

/** A saved choice wins, then the browser's languages, then the default. */
export const pickLocale = ({
  saved,
  acceptLanguage,
}: Readonly<{ saved?: string | null; acceptLanguage?: string | null }>): Locale =>
  isLocale(saved) ? saved : (parseAcceptLanguage(acceptLanguage).find(isLocale) ?? defaultLocale);

/** "/pt/x" → "pt"; "/" or "/ptx" → null. */
export const localeFromPath = (pathname: string): Locale | null => {
  const segment = pathname.split("/")[1];
  return isLocale(segment) ? segment : null;
};
