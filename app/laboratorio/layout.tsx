import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return {
    title: t.laboratorio.title,
    description: t.laboratorio.subtitle,
    alternates: { canonical: "/laboratorio" },
  };
}

export default function LaboratorioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
