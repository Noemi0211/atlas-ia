import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getLocale } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SITE_CONFIG } from "@/lib/constants";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return {
    title: t.terminos.title,
    description: t.terminos.subtitle,
    alternates: { canonical: "/terminos" },
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

export default async function TerminosPage() {
  const locale = await getLocale();
  const t = getDictionary(locale);
  const p = t.terminos;
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
        <Section title={p.acceptanceTitle}>
          <p className="text-fg-secondary leading-relaxed">{p.acceptanceText}</p>
        </Section>

        <Section title={p.serviceTitle}>
          <List items={p.serviceItems} />
        </Section>

        <Section title={p.accountsTitle}>
          <List items={p.accountsItems} />
        </Section>

        <Section title={p.contentTitle}>
          <List items={p.contentItems} />
        </Section>

        <Section title={p.conductTitle}>
          <List items={p.conductItems} />
        </Section>

        <Section title={p.chatTitle}>
          <p className="text-fg-secondary leading-relaxed">{p.chatText}</p>
        </Section>

        <Section title={p.teacherTitle}>
          <p className="text-fg-secondary leading-relaxed">{p.teacherText}</p>
        </Section>

        <Section title={p.liabilityTitle}>
          <List items={p.liabilityItems} />
        </Section>

        <Section title={p.suspensionTitle}>
          <p className="text-fg-secondary leading-relaxed">{p.suspensionText}</p>
        </Section>

        <Section title={p.changesTitle}>
          <p className="text-fg-secondary leading-relaxed">{p.changesText}</p>
        </Section>

        <Section title={p.lawTitle}>
          <p className="text-fg-secondary leading-relaxed">{fill(p.lawText)}</p>
        </Section>

        <Section title={p.contactTitle}>
          <p className="text-fg-secondary leading-relaxed">{fill(p.contactText)}</p>
        </Section>
      </div>
    </div>
  );
}
