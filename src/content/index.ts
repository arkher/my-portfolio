import type { Locale } from "@/lib/i18n";
import { en } from "./en";
import { pt } from "./pt";
import type { Content } from "./types";

const dictionaries: Readonly<Record<Locale, Content>> = { en, pt };

/** All copy for one locale. Synchronous: the dictionaries are small and statically rendered. */
export const getContent = (locale: Locale): Content => dictionaries[locale];

export type { Content } from "./types";
