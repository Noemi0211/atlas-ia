import type { Dictionary } from "./dictionaries/es";

let runtimeDict: Dictionary | null = null;

export function setRuntimeDictionary(dict: Dictionary | null): void {
  runtimeDict = dict;
}

export function getRuntimeDictionary(): Dictionary | null {
  return runtimeDict;
}
