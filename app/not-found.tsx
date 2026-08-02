import Link from "next/link";
import { getLocale } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function NotFound() {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return (
    <div className="flex items-center justify-center min-h-[60vh] px-6">
      <div className="text-center max-w-md">
        <div className="text-7xl font-bold text-primary/20 mb-4">404</div>
        <h1 className="text-2xl font-bold text-fg mb-3">{t.notFound.title}</h1>
        <p className="text-fg-secondary mb-8">
          {t.notFound.subtitle}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 h-10 px-5 rounded-lg bg-primary text-white dark:text-slate-900 font-medium text-sm hover:bg-primary-hover transition-colors"
        >
          {t.notFound.backHome}
        </Link>
      </div>
    </div>
  );
}
