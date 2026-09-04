import { Metadata } from "next";
import { RegisterForm } from "@/components/auth/RegisterForm";
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
    title: t.auth.register.title,
    description: t.auth.register.subtitle,
    alternates: {
      canonical: prefixPath("/auth/register", locale),
      languages: buildLanguagesAlternates("/auth/register"),
    },
    robots: { index: false, follow: false },
  };
}

export default async function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <RegisterForm />
    </div>
  );
}
