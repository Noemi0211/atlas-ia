import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { LOCALE_PATHNAMES } from "@/lib/i18n/config";

export default function robots(): MetadataRoute.Robots {
  const disallow: string[] = [];
  for (const code of Object.values(LOCALE_PATHNAMES)) {
    disallow.push(`/${code}/auth/login`, `/${code}/auth/register`);
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow,
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
