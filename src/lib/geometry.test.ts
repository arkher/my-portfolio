import { describe, expect, it } from "vitest";
import { BEAT, BEAT_WIDTH, chartPath, ecgPath } from "./geometry";

/** Sum of the x deltas in a relative `l` path. */
const horizontalExtent = (segments: string): number =>
  [...segments.matchAll(/l(-?\d+(?:\.\d+)?)/g)].reduce((sum, [, dx]) => sum + Number(dx), 0);

describe("BEAT", () => {
  it("spans exactly BEAT_WIDTH so the ECG loop is seamless", () => {
    expect(horizontalExtent(BEAT)).toBe(BEAT_WIDTH);
  });

  it("returns to the baseline it started from", () => {
    const dy = [...BEAT.matchAll(/l-?\d+ (-?\d+)/g)].reduce((sum, [, v]) => sum + Number(v), 0);
    expect(dy).toBe(0);
  });
});

describe("ecgPath", () => {
  it("starts at the given point and repeats the beat n times", () => {
    const path = ecgPath(10, 20, 3);
    expect(path.startsWith("M10 20 ")).toBe(true);
    expect(horizontalExtent(path)).toBe(BEAT_WIDTH * 3);
  });

  it("handles zero or negative beats", () => {
    expect(ecgPath(0, 0, 0)).toBe("M0 0");
    expect(ecgPath(0, 0, -2)).toBe("M0 0");
  });
});

describe("chartPath", () => {
  it("returns an empty path for no data", () => {
    expect(chartPath([], 100, 50)).toBe("");
  });

  it("draws a single point as a move", () => {
    expect(chartPath([10], 100, 50)).toBe("M0 40");
  });

  it("spreads points evenly across the width and ends at the last value", () => {
    const path = chartPath([0, 10, 20], 100, 50);
    expect(path.startsWith("M0 50")).toBe(true);
    expect(path.endsWith("100 30")).toBe(true);
    expect(path.match(/C/g)).toHaveLength(2);
  });
});
