import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PerfilContent } from "./PerfilContent";
import { getLocale } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return {
    title: t.perfil.title,
    description: t.perfil.subtitle,
  };
}

export default async function PerfilPage() {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return (
    <div className="max-w-content mx-auto px-6 py-10" data-read-aloud>
      <Breadcrumbs items={[{ label: t.perfil.title }]} className="mb-6" />

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-fg mb-3">{t.perfil.title}</h1>
        <p className="text-fg-secondary text-lg max-w-2xl">
          {t.perfil.subtitle}
        </p>
      </div>

      <PerfilContent />
    </div>
  );
}
