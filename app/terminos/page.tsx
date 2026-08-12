import { Metadata } from "next";
import {
  BadgeCheck,
  Ban,
  Bot,
  CalendarDays,
  Copyright,
  FileCheck,
  GraduationCap,
  Lock,
  Mail,
  RefreshCcw,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getLocale } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SITE_CONFIG } from "@/lib/constants";

const CC_LICENSE_URL = "https://creativecommons.org/licenses/by-nc-sa/4.0/";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return {
    title: t.terminos.title,
    description: t.terminos.subtitle,
    alternates: { canonical: "/terminos" },
  };
}

function Section({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="flex items-center gap-2 text-xl font-semibold text-fg mb-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden="true">
          <Icon className="h-4.5 w-4.5" />
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2 text-fg-secondary">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default async function TerminosPage() {
  const locale = await getLocale();
  const t = getDictionary(locale);
  const p = t.terminos;
  const author = SITE_CONFIG.contactName;
  const email = SITE_CONFIG.contactEmail;

  const fill = (text: string) => text.replace("{autor}", author).replace("{email}", email);

  return (
    <div className="max-w-content mx-auto px-6 py-10" data-read-aloud>
      <Breadcrumbs items={[{ label: p.title }]} className="mb-6" />

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-fg mb-3">{p.title}</h1>
        <p className="text-fg-secondary text-lg max-w-3xl">{p.subtitle}</p>
        <p className="text-xs text-fg-muted mt-2">{p.lastUpdated}</p>
      </div>

      <div className="space-y-10 max-w-3xl">
        <Section icon={FileCheck} title={p.acceptanceTitle}>
          <p className="text-fg-secondary leading-relaxed">{p.acceptanceText}</p>
        </Section>

        <Section icon={GraduationCap} title={p.purposeTitle}>
          <p className="text-fg-secondary leading-relaxed">{p.purposeText}</p>
        </Section>

        <Section icon={BadgeCheck} title={p.allowedTitle}>
          <p className="text-fg-secondary mb-4">{p.allowedIntro}</p>
          <List items={p.allowedItems} />
        </Section>

        <Section icon={Ban} title={p.prohibitedTitle}>
          <p className="text-fg-secondary mb-4">{p.prohibitedIntro}</p>
          <List items={p.prohibitedItems} />
        </Section>

        <Section icon={Copyright} title={p.ipTitle}>
          <p className="text-fg-secondary leading-relaxed mb-3">{p.ipText}</p>
          <p className="text-sm font-semibold text-fg mb-3">{fill(p.ipCopyright)}</p>
          <p className="font-semibold text-fg mb-2">{p.ipLicenseTitle}</p>
          <List items={p.ipLicenseItems} />
          <a
            href={CC_LICENSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white dark:text-slate-900 transition-opacity hover:opacity-90"
          >
            {p.ipLinkLabel}
            <span aria-hidden="true">→</span>
          </a>
        </Section>

        <Section icon={Bot} title={p.aiTitle}>
          <List items={p.aiItems} />
        </Section>

        <Section icon={ShieldAlert} title={p.liabilityTitle}>
          <List items={p.liabilityItems} />
        </Section>

        <Section icon={Lock} title={p.privacyTitle}>
          <p className="text-fg-secondary leading-relaxed mb-4">{p.privacyText}</p>
          <a
            href="/privacidad"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white dark:text-slate-900 transition-opacity hover:opacity-90"
          >
            {p.privacyLinkLabel}
            <span aria-hidden="true">→</span>
          </a>
          <p className="text-fg-secondary leading-relaxed mt-4">{p.privacyNote}</p>
        </Section>

        <Section icon={RefreshCcw} title={p.changesTitle}>
          <p className="text-fg-secondary leading-relaxed">{p.changesText}</p>
        </Section>

        <Section icon={Mail} title={p.contactTitle}>
          <p className="text-fg-secondary leading-relaxed">{fill(p.contactText)}</p>
        </Section>

        <Section icon={CalendarDays} title={p.dateTitle}>
          <p className="text-fg-secondary leading-relaxed">{p.dateText}</p>
        </Section>
      </div>
    </div>
  );
}
