import { describe, expect, it } from "vitest";
import { defaultLocale, isLocale, localeFromPath, parseAcceptLanguage, pickLocale } from "./i18n";

describe("isLocale", () => {
  it("accepts supported locales only", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("pt")).toBe(true);
    expect(isLocale("fr")).toBe(false);
    expect(isLocale(undefined)).toBe(false);
  });
});

describe("parseAcceptLanguage", () => {
  it("orders languages by quality and keeps the base tag", () => {
    expect(parseAcceptLanguage("en-US;q=0.5, pt-BR, fr;q=0.8")).toEqual(["pt", "fr", "en"]);
  });

  it("treats a missing quality as 1 and keeps header order for ties", () => {
    expect(parseAcceptLanguage("pt-PT, en")).toEqual(["pt", "en"]);
  });

  it("drops q=0 and wildcard entries", () => {
    expect(parseAcceptLanguage("pt;q=0, *, en")).toEqual(["en"]);
  });

  it("returns nothing for an empty or missing header", () => {
    expect(parseAcceptLanguage("")).toEqual([]);
    expect(parseAcceptLanguage(null)).toEqual([]);
  });
});

describe("pickLocale", () => {
  it("prefers a valid saved choice over the browser header", () => {
    expect(pickLocale({ saved: "en", acceptLanguage: "pt-BR" })).toBe("en");
  });

  it("ignores an invalid saved choice", () => {
    expect(pickLocale({ saved: "xx", acceptLanguage: "pt-BR,en;q=0.7" })).toBe("pt");
  });

  it("uses the first supported browser language", () => {
    expect(pickLocale({ acceptLanguage: "de, pt-BR;q=0.9, en;q=0.8" })).toBe("pt");
  });

  it("falls back to the default locale", () => {
    expect(pickLocale({ acceptLanguage: "de, fr" })).toBe(defaultLocale);
    expect(pickLocale({})).toBe(defaultLocale);
  });
});

describe("localeFromPath", () => {
  it("reads the first path segment", () => {
    expect(localeFromPath("/pt")).toBe("pt");
    expect(localeFromPath("/en/anything")).toBe("en");
  });

  it("returns null when the path has no locale", () => {
    expect(localeFromPath("/")).toBeNull();
    expect(localeFromPath("/pricing")).toBeNull();
    expect(localeFromPath("/ptx")).toBeNull();
  });
});
