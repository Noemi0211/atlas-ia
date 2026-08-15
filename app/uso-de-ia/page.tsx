import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getLocale } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { localeToIntl } from "@/lib/i18n/config";
import { SITE_CONFIG } from "@/lib/constants";
import { gitLastCommitDate } from "@/lib/git";
import { formatDate } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return {
    title: t.usoIa.title,
    description: t.usoIa.subtitle,
    alternates: { canonical: "/uso-de-ia" },
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

export default async function UsoIaPage() {
  const locale = await getLocale();
  const t = getDictionary(locale);
  const p = t.usoIa;
  const email = SITE_CONFIG.contactEmail;
  const author = SITE_CONFIG.contactName;

  const updatedIso = gitLastCommitDate();
  const fecha = updatedIso
    ? formatDate(new Date(updatedIso), localeToIntl(locale))
    : p.lastUpdatedValue;

  const fill = (text: string) =>
    text
      .replace("{autor}", author)
      .replace("{email}", email)
      .replace("{fecha}", fecha);

  return (
    <div className="max-w-content mx-auto px-6 py-10" data-read-aloud>
      <Breadcrumbs items={[{ label: p.title }]} className="mb-6" />

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-fg mb-3">{p.title}</h1>
        <p className="text-fg-secondary text-lg max-w-3xl">{p.subtitle}</p>
        <p className="text-xs text-fg-muted mt-2">{fill(p.lastUpdated)}</p>
      </div>

      <div className="space-y-10 max-w-3xl">
        <Section title={p.whatTitle}>
          <p className="text-fg-secondary mb-4">{p.whatIntro}</p>
          <List items={p.whatItems} />
        </Section>

        <Section title={p.reviewTitle}>
          <p className="text-fg-secondary leading-relaxed">{fill(p.reviewText)}</p>
        </Section>

        <Section title={p.ethicsTitle}>
          <p className="text-fg-secondary mb-4">{p.ethicsIntro}</p>
          <List items={p.ethicsItems} />
        </Section>

        <Section title={p.transparencyTitle}>
          <p className="text-fg-secondary mb-4">{p.transparencyIntro}</p>
          <List items={p.transparencyItems} />
        </Section>

        <Section title={p.doubtsTitle}>
          <p className="text-fg-secondary leading-relaxed">{fill(p.doubtsText)}</p>
        </Section>
      </div>
    </div>
  );
}
