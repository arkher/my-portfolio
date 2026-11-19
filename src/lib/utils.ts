import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind class lists, letting later utilities win. */
export const cn = (...inputs: readonly ClassValue[]): string => twMerge(clsx(inputs));

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

/** "2026-03" → "Mar 2026"; "2024" → "2024". Pure, no Date parsing quirks. */
export const formatMonth = (value: string): string => {
  const [year, month] = value.split("-");
  const index = month ? Number(month) - 1 : -1;
  const label = MONTHS[index];
  return label ? `${label} ${year}` : (year ?? value);
};

export const formatPeriod = ({ start, end }: Readonly<{ start: string; end: string | null }>): string =>
  `${formatMonth(start)} – ${end ? formatMonth(end) : "Now"}`;

/** Add `id` if absent, remove it if present. Returns a new array. */
export const toggleId = (ids: readonly string[], id: string): readonly string[] =>
  ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id];
