import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind class lists, letting later utilities win. */
export const cn = (...inputs: readonly ClassValue[]): string => twMerge(clsx(inputs));

type DateWords = Readonly<{ months: readonly string[]; now: string }>;

/** "2026-03" → "Mar 2026" (with English month names); "2024" → "2024". Pure, no Date parsing quirks. */
export const formatMonth = (value: string, months: readonly string[]): string => {
  const [year, month] = value.split("-");
  const label = month ? months[Number(month) - 1] : undefined;
  return label ? `${label} ${year}` : (year ?? value);
};

export const formatPeriod = ({ start, end }: Readonly<{ start: string; end: string | null }>, words: DateWords): string =>
  `${formatMonth(start, words.months)} – ${end ? formatMonth(end, words.months) : words.now}`;

/** Add `id` if absent, remove it if present. Returns a new array. */
export const toggleId = (ids: readonly string[], id: string): readonly string[] =>
  ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id];
