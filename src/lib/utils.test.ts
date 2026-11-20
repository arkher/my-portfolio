import { describe, expect, it } from "vitest";
import { cn, formatMonth, formatPeriod, toggleId } from "./utils";

const en = { months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], now: "Now" };
const pt = { months: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"], now: "atual" };

describe("formatMonth", () => {
  it("formats year-month with the given month names", () => {
    expect(formatMonth("2026-03", en.months)).toBe("Mar 2026");
    expect(formatMonth("2018-10", pt.months)).toBe("out 2018");
  });

  it("returns a bare year unchanged", () => {
    expect(formatMonth("2024", en.months)).toBe("2024");
  });

  it("falls back to the year for an out-of-range month", () => {
    expect(formatMonth("2024-13", en.months)).toBe("2024");
  });
});

describe("formatPeriod", () => {
  it("joins start and end with an en dash", () => {
    expect(formatPeriod({ start: "2022-03", end: "2025-08" }, en)).toBe("Mar 2022 – Aug 2025");
  });

  it("uses the locale's word for an open-ended period", () => {
    expect(formatPeriod({ start: "2026-02", end: null }, en)).toBe("Feb 2026 – Now");
    expect(formatPeriod({ start: "2026-02", end: null }, pt)).toBe("fev 2026 – atual");
  });
});

describe("toggleId", () => {
  it("adds a missing id without mutating the input", () => {
    const ids = Object.freeze(["a"]);
    expect(toggleId(ids, "b")).toEqual(["a", "b"]);
    expect(ids).toEqual(["a"]);
  });

  it("removes a present id", () => {
    expect(toggleId(["a", "b"], "a")).toEqual(["b"]);
  });
});

describe("cn", () => {
  it("lets later Tailwind utilities win", () => {
    expect(cn("px-2 text-sm", false && "hidden", "px-4")).toBe("text-sm px-4");
  });
});
