import { Metadata } from "next";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { getLocale } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return {
    title: t.auth.register.title,
    description: t.auth.register.subtitle,
  };
}

export default async function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <RegisterForm />
    </div>
  );
}
