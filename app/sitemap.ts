import type { MetadataRoute } from "next";
import { BLOQUES, SITE_CONFIG } from "@/lib/constants";
import { getLeccionesBloque } from "@/lib/content";
import { LOCALE_PATHNAMES, SUPPORTED_LOCALES } from "@/lib/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/bloques", priority: 0.9 },
    { path: "/glosario", priority: 0.8 },
    { path: "/cronologia", priority: 0.7 },
    { path: "/laboratorio", priority: 0.7 },
    { path: "/roadmap", priority: 0.5 },
    { path: "/acerca-de", priority: 0.5 },
    { path: "/privacidad", priority: 0.5 },
    { path: "/uso-de-ia", priority: 0.5 },
    { path: "/terminos", priority: 0.5 },
  ] as const;

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of SUPPORTED_LOCALES) {
    const prefix = `/${LOCALE_PATHNAMES[locale]}`;

    for (const route of staticRoutes) {
      entries.push({
        url: `${SITE_CONFIG.url}${prefix}${route.path}`,
        changeFrequency: "weekly",
        priority: route.priority,
      });
    }

    for (const bloque of BLOQUES) {
      entries.push({
        url: `${SITE_CONFIG.url}${prefix}/bloques/${bloque.slug}`,
        changeFrequency: "weekly",
        priority: 0.8,
      });

      for (const leccion of getLeccionesBloque(bloque.slug)) {
        entries.push({
          url: `${SITE_CONFIG.url}${prefix}/bloques/${bloque.slug}/${leccion.slug}`,
          changeFrequency: "weekly",
          priority: 0.6,
        });
      }
    }
  }

  return entries;
}
