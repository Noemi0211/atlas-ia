import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocaleFromParams } from "@/lib/i18n/server";
import { buildLanguagesAlternates, prefixPath } from "@/lib/i18n/config";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export const dynamic = "force-static";

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = getLocaleFromParams(lang);
  const t = getDictionary(locale);

  return {
    title: t.laboratorio.title,
    description: t.laboratorio.subtitle,
    alternates: {
      canonical: prefixPath("/laboratorio", locale),
      languages: buildLanguagesAlternates("/laboratorio"),
    },
  };
}

export default function LaboratorioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
