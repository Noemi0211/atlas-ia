import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Callout } from "@/components/ui/Callout";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { ComparadorHerramientas } from "@/components/interactive/ComparadorHerramientas";
import { ArbolDecision } from "@/components/interactive/ArbolDecision";
import { CalculadoraPrompts } from "@/components/interactive/CalculadoraPrompts";

const components = {
  Callout,
  CodeBlock,
  ComparadorHerramientas,
  ArbolDecision,
  CalculadoraPrompts,

  h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-lg font-semibold text-fg mt-6 mb-2" {...props}>
      {children}
    </h4>
  ),

  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-fg-secondary leading-relaxed mb-4" {...props}>
      {children}
    </p>
  ),

  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside space-y-2 mb-4 text-fg-secondary pl-2" {...props}>
      {children}
    </ul>
  ),

  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 text-fg-secondary pl-2" {...props}>
      {children}
    </ol>
  ),

  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),

  strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-fg" {...props}>
      {children}
    </strong>
  ),

  em: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic text-fg-secondary" {...props}>
      {children}
    </em>
  ),

  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      href={href}
      className="text-primary hover:text-primary-hover underline underline-offset-2 transition-colors"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  ),

  blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-3 border-primary pl-4 my-6 text-fg-secondary italic"
      {...props}
    >
      {children}
    </blockquote>
  ),

  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-8 border-border" {...props} />
  ),

  table: ({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm" {...props}>
        {children}
      </table>
    </div>
  ),

  thead: ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-bg-secondary border-b border-border" {...props}>
      {children}
    </thead>
  ),

  th: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-3 text-left font-semibold text-fg text-sm" {...props}>
      {children}
    </th>
  ),

  td: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 text-fg-secondary border-b border-border" {...props}>
      {children}
    </td>
  ),
};

interface MDXRendererProps {
  source: string;
  headingIds?: string[];
}

function fallbackHeadingId(children: React.ReactNode) {
  return typeof children === "string"
    ? children
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
    : undefined;
}

export function MDXRenderer({ source, headingIds }: MDXRendererProps) {
  let headingIndex = -1;

  const renderComponents = {
    ...components,

    h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
      headingIndex++;
      return (
        <h2
          className="text-2xl font-bold text-fg mt-10 mb-4 pb-2 border-b border-border"
          id={
            headingIds && headingIndex < headingIds.length
              ? headingIds[headingIndex]
              : fallbackHeadingId(children)
          }
          {...props}
        >
          {children}
        </h2>
      );
    },

    h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
      headingIndex++;
      return (
        <h3
          className="text-xl font-semibold text-fg mt-8 mb-3"
          id={
            headingIds && headingIndex < headingIds.length
              ? headingIds[headingIndex]
              : fallbackHeadingId(children)
          }
          {...props}
        >
          {children}
        </h3>
      );
    },
  };

  return (
    <article className="prose-atlas">
      <MDXRemote source={source} components={renderComponents} options={{ mdxOptions: { development: false, remarkPlugins: [remarkGfm] } }} />
    </article>
  );
}
