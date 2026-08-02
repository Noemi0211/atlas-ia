import type { Locale } from "../config";
import type { Dictionary } from "./es";
import { esDict } from "./es";
import { enDict } from "./en";
import { valDict } from "./val";

export const dictionaries: Record<Locale, Dictionary> = {
  es: esDict,
  en: enDict,
  val: valDict,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
