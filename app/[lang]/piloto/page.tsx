import { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardCheck,
  HeartHandshake,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getLocaleFromParams } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildLanguagesAlternates, prefixPath } from "@/lib/i18n/config";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export const dynamic = "force-static";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = getLocaleFromParams(lang);
  const t = getDictionary(locale);

  return {
    title: t.piloto.title,
    description: t.piloto.description,
    alternates: {
      canonical: prefixPath("/piloto", locale),
      languages: buildLanguagesAlternates("/piloto"),
    },
  };
}

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="flex items-center gap-2 text-xl font-semibold text-fg mb-3">
        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
        {title}
      </h2>
      {children}
    </section>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-fg-secondary">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span
            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
            aria-hidden="true"
          />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function PilotoPage({ params }: PageProps) {
  const { lang } = await params;
  const locale = getLocaleFromParams(lang);
  const t = getDictionary(locale);
  const p = t.piloto;

  return (
    <div className="max-w-content mx-auto px-6 py-10" data-read-aloud>
      <Breadcrumbs items={[{ label: p.title }]} className="mb-6" />

      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-fg mb-2">{p.title}</h1>

        <div className="mt-6 space-y-4 text-fg-secondary leading-relaxed">
          <p className="font-medium text-fg">{p.greeting}</p>
          <p>{p.intro1}</p>
          <p>{p.intro2}</p>
        </div>

        <div className="mt-10 space-y-8">
          <Section icon={HeartHandshake} title={p.interestsTitle}>
            <CheckList items={p.interests} />
          </Section>

          <Section icon={ClipboardCheck} title={p.asksTitle}>
            <CheckList items={p.asks} />
          </Section>

          <Section icon={ShieldCheck} title={p.infoTitle}>
            <CheckList items={p.info} />
          </Section>

          <Section icon={MessageSquare} title={p.valueTitle}>
            <p className="text-fg-secondary leading-relaxed mb-3">{p.valueIntro}</p>
            <CheckList items={p.valueItems} />
            <p className="mt-4 font-medium text-fg">{p.valueClosing}</p>
          </Section>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-bg-secondary/40 p-6">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-fg mb-3">
            <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
            {p.thanksTitle}
          </h2>
          <p className="text-fg-secondary leading-relaxed">{p.thanks1}</p>
          <p className="text-fg-secondary leading-relaxed mt-3">{p.thanks2}</p>
          <p className="mt-5 font-semibold text-fg">{p.signature}</p>
        </div>

        <div className="mt-8">
          <Link
            href={prefixPath("/bloques", locale)}
            className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-primary text-white dark:text-slate-900 font-medium hover:bg-primary-hover transition-colors shadow-sm"
          >
            {p.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}