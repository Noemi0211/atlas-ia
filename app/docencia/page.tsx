import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { DocenciaDashboard } from "./DocenciaDashboard";
import { getServerSession } from "@/lib/getServerSession";
import { getLocale } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { ROLE_TEACHER } from "@/lib/auth";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return {
    title: t.docencia.title,
    description: t.docencia.subtitle,
    alternates: { canonical: "/docencia" },
  };
}

export default async function DocenciaPage() {
  const locale = await getLocale();
  const t = getDictionary(locale);
  const session = await getServerSession();

  if (session?.user?.role !== ROLE_TEACHER) {
    redirect("/perfil");
  }

  return (
    <div className="max-w-content mx-auto px-6 py-10">
      <Breadcrumbs items={[{ label: t.docencia.title }]} className="mb-6" />

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-fg mb-3">{t.docencia.title}</h1>
        <p className="text-fg-secondary text-lg max-w-2xl">{t.docencia.subtitle}</p>
      </div>

      <DocenciaDashboard />
    </div>
  );
}
