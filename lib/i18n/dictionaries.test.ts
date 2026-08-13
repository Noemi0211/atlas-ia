import { describe, it, expect } from "vitest";
import { esDict } from "./dictionaries/es";
import { enDict } from "./dictionaries/en";
import { valDict } from "./dictionaries/val";
import {
  isLocale,
  resolveLocale,
  localeToIntl,
  SUPPORTED_LOCALES,
} from "./config";
import {
  getGlosario,
  getCronologia,
  getHerramientas,
  getGlosarioTerminos,
  getNavItems,
  getBLOQUES,
} from "./data";

function leafKeys(obj: Record<string, unknown>, prefix = ""): string[] {
  const keys: string[] = [];
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      keys.push(...leafKeys(value as Record<string, unknown>, path));
    } else {
      keys.push(path);
    }
  }
  return keys.sort();
}

describe("diccionarios", () => {
  it("es, en y val tienen exactamente las mismas claves", () => {
    const esKeys = leafKeys(esDict);
    expect(leafKeys(enDict)).toEqual(esKeys);
    expect(leafKeys(valDict)).toEqual(esKeys);
  });

  it("expone las claves de a11y y rate limiting", () => {
    expect(typeof esDict.a11y.skipToContent).toBe("string");
    expect(typeof esDict.ai.rateLimited).toBe("string");
  });
});

describe("builders i18n", () => {
  it("glosario tiene la misma longitud en los 3 idiomas", () => {
    const n = getGlosario(esDict).length;
    expect(n).toBeGreaterThan(0);
    expect(getGlosario(enDict)).toHaveLength(n);
    expect(getGlosario(valDict)).toHaveLength(n);
    expect(getGlosarioTerminos(esDict)).toHaveLength(n);
    expect(getGlosarioTerminos(enDict)).toHaveLength(n);
    expect(getGlosarioTerminos(valDict)).toHaveLength(n);
  });

  it("cronología tiene la misma longitud en los 3 idiomas", () => {
    const n = getCronologia(esDict).length;
    expect(n).toBeGreaterThan(0);
    expect(getCronologia(enDict)).toHaveLength(n);
    expect(getCronologia(valDict)).toHaveLength(n);
  });

  it("herramientas tienen la misma longitud en los 3 idiomas", () => {
    const n = getHerramientas(esDict).length;
    expect(n).toBeGreaterThan(0);
    expect(getHerramientas(enDict)).toHaveLength(n);
    expect(getHerramientas(valDict)).toHaveLength(n);
  });

  it("la navegación y los bloques tienen la misma longitud en los 3 idiomas", () => {
    expect(getNavItems(enDict)).toHaveLength(getNavItems(esDict).length);
    expect(getNavItems(valDict)).toHaveLength(getNavItems(esDict).length);
    expect(getBLOQUES(enDict)).toHaveLength(getBLOQUES(esDict).length);
    expect(getBLOQUES(valDict)).toHaveLength(getBLOQUES(esDict).length);
  });
});

describe("config i18n", () => {
  it("isLocale valida solo los locales soportados", () => {
    expect(SUPPORTED_LOCALES).toEqual(["es", "en", "val"]);
    for (const locale of SUPPORTED_LOCALES) {
      expect(isLocale(locale)).toBe(true);
    }
    expect(isLocale("fr")).toBe(false);
    expect(isLocale(null)).toBe(false);
  });

  it("resolveLocale cae a español por defecto", () => {
    expect(resolveLocale("es")).toBe("es");
    expect(resolveLocale("en")).toBe("en");
    expect(resolveLocale("val")).toBe("val");
    expect(resolveLocale("fr")).toBe("es");
    expect(resolveLocale(null)).toBe("es");
  });

  it("localeToIntl mapea a los códigos correctos", () => {
    expect(localeToIntl("es")).toBe("es");
    expect(localeToIntl("en")).toBe("en");
    expect(localeToIntl("val")).toBe("ca-ES-valencia");
  });
});
