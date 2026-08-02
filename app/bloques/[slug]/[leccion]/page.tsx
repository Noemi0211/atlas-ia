import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLeccionesBloque, getLeccion } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MDXRenderer } from "@/components/content/MDXRenderer";
import { LessonNav } from "@/components/content/LessonNav";
import { LessonSidebar } from "@/components/content/LessonSidebar";
import { TableOfContents } from "@/components/content/TableOfContents";
import { LessonCompleteButton } from "@/components/gamification/LessonCompleteButton";
import { FavoriteButton } from "@/components/gamification/FavoriteButton";
import { getLocale } from "@/lib/i18n/server";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getBloqueMeta } from "@/lib/i18n/data";

interface Props {
  params: Promise<{ slug: string; leccion: string }>;
}

export async function generateStaticParams() {
  const { BLOQUES } = await import("@/lib/constants");
  const params: { slug: string; leccion: string }[] = [];

  for (const bloque of BLOQUES) {
    const lecciones = getLeccionesBloque(bloque.slug);
    for (const leccion of lecciones) {
      params.push({ slug: bloque.slug, leccion: leccion.slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, leccion } = await params;
  const locale = await getLocale();
  const t = getDictionary(locale);
  const data = getLeccion(slug, leccion);
  if (!data) return { title: t.leccion.notFound };

  return {
    title: data.meta.titulo,
    description: data.meta.descripcion,
  };
}

function extractHeadings(mdxContent: string) {
  const headings: { id: string; text: string; level: number }[] = [];
  const regex = /^(#{2,3})\s+(.+)$/gm;
  let match;

  while ((match = regex.exec(mdxContent)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    headings.push({ id, text, level });
  }

  return headings;
}

export default async function LeccionPage({ params }: Props) {
  const { slug, leccion } = await params;
  const locale = await getLocale();
  const t = getDictionary(locale);
  const data = getLeccion(slug, leccion);
  if (!data) notFound();

  const bloque = getBloqueMeta(t, slug);
  if (!bloque) notFound();

  const lecciones = getLeccionesBloque(slug);
  const currentIndex = lecciones.findIndex((l) => l.slug === leccion);
  const anterior = currentIndex > 0 ? lecciones[currentIndex - 1] : null;
  const siguiente =
    currentIndex < lecciones.length - 1
      ? lecciones[currentIndex + 1]
      : null;

  const headings = extractHeadings(data.content);
  const lessonId = `${slug}/${leccion}`;

  return (
    <div className="max-w-wide mx-auto px-6 py-10">
      <Breadcrumbs
        items={[
          { label: t.bloques.title, href: "/bloques" },
          { label: bloque.titulo, href: `/bloques/${slug}` },
          { label: data.meta.titulo },
        ]}
        className="mb-8"
      />

      <div className="flex gap-12">
        <LessonSidebar
          bloqueSlug={slug}
          bloqueTitle={bloque.titulo}
          lecciones={lecciones}
        />

        <div className="flex-1 min-w-0 max-w-content">
          <header className="mb-8 pb-6 border-b border-border">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs text-fg-muted">
                <span>{t.bloques.label} {bloque.numero}</span>
                <span>·</span>
                <span>{t.bloques.leccion} {currentIndex + 1} {t.bloques.de} {lecciones.length}</span>
                {data.meta.duracion && (
                  <>
                    <span>·</span>
                    <span>{data.meta.duracion}</span>
                  </>
                )}
              </div>
              <FavoriteButton lessonId={lessonId} />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-fg leading-tight">
              {data.meta.titulo}
            </h1>
            <p className="text-fg-secondary text-lg mt-3">
              {data.meta.descripcion}
            </p>
          </header>

          <div className="flex gap-8">
            <div className="flex-1 min-w-0">
              <MDXRenderer source={data.content} />

              <div className="mt-8 flex items-center justify-between">
                <LessonCompleteButton lessonId={lessonId} />
              </div>

              <LessonNav
                bloqueSlug={slug}
                anterior={anterior}
                siguiente={siguiente}
              />
            </div>

            <TableOfContents headings={headings} />
          </div>
        </div>
      </div>
    </div>
  );
}
