/** Pure SVG path builders used by the hero illustration. */

/** One heartbeat as relative path segments; its horizontal extent is `BEAT_WIDTH`. */
export const BEAT = "l14 0 l4 -6 l4 6 l3 0 l3 -26 l4 44 l3 -18 l4 0 l5 -5 l5 5 l11 0";
export const BEAT_WIDTH = 60;

/** A continuous ECG trace made of `beats` heartbeats starting at (x, y). */
export const ecgPath = (x: number, y: number, beats: number): string =>
  [`M${x} ${y}`, ...Array.from({ length: Math.max(0, beats) }, () => BEAT)].join(" ");

/** Smooth cubic line through evenly spaced values, drawn upward from `baseY`. */
export const chartPath = (values: readonly number[], width: number, baseY: number): string => {
  if (values.length === 0) return "";
  if (values.length === 1) return `M0 ${baseY - (values[0] ?? 0)}`;
  const step = width / (values.length - 1);
  const y = (v: number) => baseY - v;
  return values
    .map((value, i) => {
      if (i === 0) return `M0 ${y(value)}`;
      const prev = values[i - 1] ?? value;
      const midX = (i - 0.5) * step;
      return `C${midX} ${y(prev)} ${midX} ${y(value)} ${i * step} ${y(value)}`;
    })
    .join(" ");
};
