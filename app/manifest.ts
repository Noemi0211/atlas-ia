import type { MetadataRoute } from "next";
import { getLocale } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return {
    id: "/",
    name: `Atlas IA — ${t.home.subtitle1}`,
    short_name: "Atlas IA",
    description: t.home.subtitle1,
    lang: locale,
    dir: "ltr",
    start_url: "/",
    scope: "/",
    display: "standalone",
    display_override: ["standalone", "minimal-ui"],
    orientation: "portrait-primary",
    background_color: "#fafafa",
    theme_color: "#2563eb",
    categories: ["education", "books", "productivity"],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: t.nav.bloques,
        short_name: t.nav.bloques,
        description: t.bloques.subtitle,
        url: "/bloques",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
      {
        name: t.nav.glosario,
        short_name: t.nav.glosario,
        url: "/glosario",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
      {
        name: t.nav.laboratorio,
        short_name: t.nav.laboratorio,
        url: "/laboratorio",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
      {
        name: t.nav.cronologia,
        short_name: t.nav.cronologia,
        url: "/cronologia",
        icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }],
      },
    ],
  };
}
