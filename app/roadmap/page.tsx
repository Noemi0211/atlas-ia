import { Metadata } from "next";
import { CheckCircle2, Flag, ListChecks } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getLocale } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { localeToIntl } from "@/lib/i18n/config";
import { gitLastCommitDate } from "@/lib/git";
import { formatDate } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return {
    title: t.roadmap.title,
    description: t.roadmap.subtitle,
    alternates: { canonical: "/roadmap" },
  };
}

function Milestone({ titulo, descripcion }: { titulo: string; descripcion: string }) {
  return (
    <li className="relative pl-10">
      <span
        className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary"
        aria-hidden="true"
      >
        <CheckCircle2 className="h-4 w-4" />
      </span>
      <h3 className="font-semibold text-fg">{titulo}</h3>
      <p className="text-sm text-fg-secondary mt-1 leading-relaxed">{descripcion}</p>
    </li>
  );
}

function BlockList({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ElementType;
  title: string;
  items: string[];
}) {
  return (
    <section>
      <h2 className="flex items-center gap-2 text-xl font-semibold text-fg mb-3">
        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
        {title}
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-fg-secondary">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default async function RoadmapPage() {
  const locale = await getLocale();
  const t = getDictionary(locale);
  const p = t.roadmap;

  const updatedIso = gitLastCommitDate();
  const lastUpdated = p.lastUpdated.replace(
    "{fecha}",
    updatedIso ? formatDate(new Date(updatedIso), localeToIntl(locale)) : p.lastUpdatedValue,
  );

  return (
    <div className="max-w-content mx-auto px-6 py-10" data-read-aloud>
      <Breadcrumbs items={[{ label: p.title }]} className="mb-6" />

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-fg mb-3">{p.title}</h1>
        <p className="text-fg-secondary text-lg max-w-3xl">{p.subtitle}</p>
        <p className="text-xs text-fg-muted mt-2">{lastUpdated}</p>
      </div>

      <div className="space-y-10 max-w-3xl">
        <section>
          <p className="text-fg-secondary leading-relaxed">{p.intro}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-fg mb-5">{p.milestonesTitle}</h2>
          <ol className="space-y-6">
            {p.milestones.map((m) => (
              <Milestone key={m.titulo} titulo={m.titulo} descripcion={m.descripcion} />
            ))}
          </ol>
        </section>

        <BlockList icon={ListChecks} title={p.currentTitle} items={p.currentItems} />
        <BlockList icon={Flag} title={p.nextTitle} items={p.nextItems} />
      </div>
    </div>
  );
}
