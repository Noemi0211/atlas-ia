import { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";
import { getLocale } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return {
    title: t.auth.login.title,
    description: t.auth.login.subtitle,
    alternates: { canonical: "/auth/login" },
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
