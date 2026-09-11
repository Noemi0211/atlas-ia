import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ValoracionContent } from "./ValoracionContent";
import { getLocaleFromParams } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildLanguagesAlternates, prefixPath } from "@/lib/i18n/config";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = getLocaleFromParams(lang);
  const t = getDictionary(locale);

  return {
    title: t.feedback.title,
    description: t.feedback.subtitle,
    alternates: {
      canonical: prefixPath("/valoracion", locale),
      languages: buildLanguagesAlternates("/valoracion"),
    },
  };
}

export default async function ValoracionPage({ params }: PageProps) {
  const { lang } = await params;
  const locale = getLocaleFromParams(lang);
  const t = getDictionary(locale);

  return (
    <div className="max-w-content mx-auto px-6 py-10" data-read-aloud>
      <Breadcrumbs items={[{ label: t.feedback.title }]} className="mb-6" />

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-fg mb-3">{t.feedback.title}</h1>
        <p className="text-fg-secondary text-lg max-w-2xl">
          {t.feedback.subtitle}
        </p>
      </div>

      <ValoracionContent />
    </div>
  );
}