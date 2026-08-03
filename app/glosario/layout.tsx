import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return {
    title: t.glosario.title,
    description: t.glosario.subtitle,
    alternates: { canonical: "/glosario" },
  };
}

export default function GlosarioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
