import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getLocale } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SITE_CONFIG } from "@/lib/constants";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return {
    title: t.privacidad.title,
    description: t.privacidad.subtitle,
    alternates: { canonical: "/privacidad" },
  };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-fg mb-3">{title}</h2>
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

export default async function PrivacidadPage() {
  const locale = await getLocale();
  const t = getDictionary(locale);
  const p = t.privacidad;
  const email = SITE_CONFIG.contactEmail;
  const responsible = SITE_CONFIG.contactName;

  const fill = (text: string) =>
    text.replace("{responsable}", responsible).replace("{email}", email);

  return (
    <div className="max-w-content mx-auto px-6 py-10" data-read-aloud>
      <Breadcrumbs items={[{ label: p.title }]} className="mb-6" />

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-fg mb-3">{p.title}</h1>
        <p className="text-fg-secondary text-lg max-w-3xl">{p.subtitle}</p>
        <p className="text-xs text-fg-muted mt-2">{p.lastUpdated}</p>
      </div>

      <div className="space-y-10 max-w-3xl">
        <Section title={p.controllerTitle}>
          <p className="text-fg-secondary leading-relaxed">{fill(p.controllerText)}</p>
        </Section>

        <Section title={p.summaryTitle}>
          <List items={p.summaryItems} />
        </Section>

        <Section title={p.dataTitle}>
          <p className="text-fg-secondary mb-4">{p.dataIntro}</p>

          <h3 className="font-semibold text-fg mb-2">{p.dataWithoutAccountTitle}</h3>
          <div className="mb-6">
            <List items={p.dataWithoutAccountItems} />
          </div>

          <h3 className="font-semibold text-fg mb-2">{p.dataWithAccountTitle}</h3>
          <div className="mb-6">
            <List items={p.dataWithAccountItems} />
          </div>

          <h3 className="font-semibold text-fg mb-2">{p.dataChatTitle}</h3>
          <List items={p.dataChatItems} />
        </Section>

        <Section title={p.localTitle}>
          <p className="text-fg-secondary leading-relaxed mb-4">{p.localIntro}</p>
          <ul className="space-y-3">
            {p.localItems.map((item) => (
              <li
                key={item.key}
                className="flex flex-col gap-1 rounded-lg border border-border bg-bg-secondary/50 p-3 sm:flex-row sm:items-baseline sm:gap-3"
              >
                <code className="shrink-0 rounded bg-bg px-1.5 py-0.5 font-mono text-xs text-primary">
                  {item.key}
                </code>
                <span className="text-sm text-fg-secondary">{item.desc}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title={p.cookiesTitle}>
          <p className="text-fg-secondary mb-4">{p.cookiesIntro}</p>
          <div className="mb-4">
            <List items={p.cookiesItems} />
          </div>
          <p className="text-sm font-medium text-fg">{p.cookiesNoThird}</p>
        </Section>

        <Section title={p.noTrackingTitle}>
          <p className="text-fg-secondary leading-relaxed">{p.noTrackingText}</p>
        </Section>

        <Section title={p.purposeTitle}>
          <List items={p.purposeItems} />
        </Section>

        <Section title={p.legalTitle}>
          <List items={p.legalItems} />
        </Section>

        <Section title={p.retentionTitle}>
          <p className="text-fg-secondary leading-relaxed">{p.retentionText}</p>
        </Section>

        <Section title={p.rightsTitle}>
          <p className="text-fg-secondary mb-4">{p.rightsIntro}</p>
          <div className="mb-4">
            <List items={p.rightsItems} />
          </div>
          <p className="text-fg-secondary leading-relaxed">{fill(p.rightsHow)}</p>
        </Section>

        <Section title={p.minorsTitle}>
          <p className="text-fg-secondary leading-relaxed">{p.minorsText}</p>
        </Section>

        <Section title={p.securityTitle}>
          <List items={p.securityItems} />
        </Section>

        <Section title={p.changesTitle}>
          <p className="text-fg-secondary leading-relaxed">{p.changesText}</p>
        </Section>

        <Section title={p.contactTitle}>
          <p className="text-fg-secondary leading-relaxed">{fill(p.contactText)}</p>
        </Section>
      </div>
    </div>
  );
}
