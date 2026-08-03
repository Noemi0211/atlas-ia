import type { MetadataRoute } from "next";
import { BLOQUES, SITE_CONFIG } from "@/lib/constants";
import { getLeccionesBloque } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", priority: 1 },
    { path: "/bloques", priority: 0.9 },
    { path: "/glosario", priority: 0.8 },
    { path: "/cronologia", priority: 0.7 },
    { path: "/laboratorio", priority: 0.7 },
  ] as const;

  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE_CONFIG.url}${route.path}`,
    changeFrequency: "weekly",
    priority: route.priority,
  }));

  for (const bloque of BLOQUES) {
    entries.push({
      url: `${SITE_CONFIG.url}/bloques/${bloque.slug}`,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    for (const leccion of getLeccionesBloque(bloque.slug)) {
      entries.push({
        url: `${SITE_CONFIG.url}/bloques/${bloque.slug}/${leccion.slug}`,
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
