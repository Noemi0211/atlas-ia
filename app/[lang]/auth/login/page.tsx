import { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";
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
    title: t.auth.login.title,
    description: t.auth.login.subtitle,
    alternates: {
      canonical: prefixPath("/auth/login", locale),
      languages: buildLanguagesAlternates("/auth/login"),
    },
    robots: { index: false, follow: false },
  };
}

export default async function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <LoginForm />
    </div>
  );
}
