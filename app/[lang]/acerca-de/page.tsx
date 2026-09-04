import { Metadata } from "next";
import {
  Accessibility,
  CalendarDays,
  CreativeCommons,
  HeartHandshake,
  Layers,
  PenLine,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getLocaleFromParams } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildLanguagesAlternates, localeToIntl, prefixPath } from "@/lib/i18n/config";
import { formatDate } from "@/lib/utils";
import { gitFirstCommitDate, gitLastCommitDate } from "@/lib/git";

const CC_LICENSE_URL = "https://creativecommons.org/licenses/by-nc-sa/4.0/";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export const dynamic = "force-static";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = getLocaleFromParams(lang);
  const t = getDictionary(locale);

  return {
    title: t.acercaDe.title,
    description: t.acercaDe.subtitle,
    alternates: {
      canonical: prefixPath("/acerca-de", locale),
      languages: buildLanguagesAlternates("/acerca-de"),
    },
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

export default async function AcercaDePage({ params }: PageProps) {
  const { lang } = await params;
  const locale = getLocaleFromParams(lang);
  const t = getDictionary(locale);
  const p = t.acercaDe;
  const intl = localeToIntl(locale);

  const createdIso = gitFirstCommitDate();
  const updatedIso = gitLastCommitDate();
  const created = createdIso
    ? formatDate(new Date(createdIso), intl)
    : p.statusCreatedValue;
  const updated = updatedIso
    ? formatDate(new Date(updatedIso), intl)
    : p.statusUpdatedValue;
  const autoUpdated = updatedIso !== null;

  return (
    <div className="max-w-content mx-auto px-6 py-10" data-read-aloud>
      <Breadcrumbs items={[{ label: p.title }]} className="mb-6" />

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-fg mb-3">{p.title}</h1>
        <p className="text-fg-secondary text-lg max-w-3xl">{p.subtitle}</p>
        <p className="text-xs text-fg-muted mt-2">{p.lastUpdated.replace("{fecha}", updated)}</p>
      </div>

      <div className="space-y-12 max-w-3xl">
        <Section icon={Sparkles} title={p.whatTitle}>
          <p className="text-fg-secondary leading-relaxed">{p.whatText}</p>
        </Section>

        <Section icon={Target} title={p.objectiveTitle}>
          <p className="text-fg-secondary mb-4">{p.objectiveIntro}</p>
          <List items={p.objectiveItems} />
        </Section>

        <Section icon={HeartHandshake} title={p.philosophyTitle}>
          <p className="text-fg-secondary mb-4">{p.philosophyIntro}</p>
          <List items={p.philosophyItems} />
        </Section>

        <Section icon={PenLine} title={p.authorshipTitle}>
          <p className="text-fg-secondary mb-4">{p.authorshipIntro}</p>
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-transparent p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div
                className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white"
                aria-hidden="true"
              >
                NC
              </div>
              <div>
                <p className="text-lg font-bold text-fg">{p.authorshipName}</p>
                <p className="text-sm font-medium text-primary">{p.authorshipRole}</p>
                <p className="mt-2 text-sm text-fg-secondary leading-relaxed">{p.authorshipText}</p>
              </div>
            </div>
          </div>
        </Section>

        <Section icon={Layers} title={p.techTitle}>
          <p className="text-fg-secondary mb-4">{p.techIntro}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.techItems.map((tech) => (
              <div
                key={tech.name}
                className="rounded-xl border border-border bg-bg-secondary/50 p-5 transition-colors hover:border-border-strong"
              >
                <p className="font-semibold text-fg">{tech.name}</p>
                <p className="mt-1 text-sm text-fg-secondary leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section icon={ShieldCheck} title={p.responsibleTitle}>
          <p className="text-fg-secondary mb-4">{p.responsibleIntro}</p>
          <List items={p.responsibleItems} />
        </Section>

        <Section icon={Accessibility} title={p.accessibilityTitle}>
          <p className="text-fg-secondary mb-4">{p.accessibilityIntro}</p>
          <List items={p.accessibilityItems} />
        </Section>

        <Section icon={CreativeCommons} title={p.licenseTitle}>
          <p className="text-fg-secondary leading-relaxed mb-4">{p.licenseIntro}</p>
          <p className="font-semibold text-fg mb-2">{p.licenseWhatTitle}</p>
          <List items={p.licenseAllowedItems} />
          <p className="text-fg-secondary leading-relaxed mt-4">{p.licenseConditions}</p>
          <a
            href={CC_LICENSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white dark:text-slate-900 transition-opacity hover:opacity-90"
          >
            {p.licenseLink}
            <span aria-hidden="true">→</span>
          </a>
        </Section>

        <Section icon={CalendarDays} title={p.statusTitle}>
          <p className="text-fg-secondary leading-relaxed mb-5">{p.statusIntro}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-bg-secondary/50 p-5">
              <p className="flex items-center gap-2 text-sm font-medium text-fg">
                <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
                {p.statusCreated}
              </p>
              <p className="mt-1 text-lg font-semibold text-primary">{created}</p>
            </div>
            <div className="rounded-xl border border-border bg-bg-secondary/50 p-5">
              <p className="flex items-center gap-2 text-sm font-medium text-fg">
                <RefreshCcw className="h-4 w-4 text-primary" aria-hidden="true" />
                {p.statusUpdated}
              </p>
              <p className="mt-1 text-lg font-semibold text-primary">{updated}</p>
              {autoUpdated && <p className="mt-1 text-xs text-fg-muted">{p.statusUpdatedAuto}</p>}
            </div>
          </div>
          <p className="mt-4 text-sm text-fg-secondary leading-relaxed">{p.statusNote}</p>
        </Section>
      </div>
    </div>
  );
}
