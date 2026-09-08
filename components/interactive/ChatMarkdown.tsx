import React from "react";

const INLINE_RE = /\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`|\[([^\]]+)\]\(([^)\s]+)\)/g;

function renderInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  INLINE_RE.lastIndex = 0;
  while ((match = INLINE_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[1] !== undefined) {
      nodes.push(
        <strong key={key++} className="font-semibold text-fg">
          {match[1]}
        </strong>,
      );
    } else if (match[2] !== undefined) {
      nodes.push(
        <em key={key++} className="italic text-fg-secondary">
          {match[2]}
        </em>,
      );
    } else if (match[3] !== undefined) {
      nodes.push(
        <code
          key={key++}
          className="px-1.5 py-0.5 rounded bg-bg-secondary border border-border text-[0.85em] font-mono text-fg"
        >
          {match[3]}
        </code>,
      );
    } else if (match[4] !== undefined && match[5] !== undefined) {
      const url = match[5];
      nodes.push(
        <a
          key={key++}
          href={url}
          target={url.startsWith("http") ? "_blank" : undefined}
          rel={url.startsWith("http") ? "noreferrer noopener" : undefined}
          className="text-primary hover:text-primary-hover underline underline-offset-2 transition-colors break-all"
        >
          {match[4]}
        </a>,
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function isListLine(line: string): "ul" | "ol" | null {
  const t = line.trim();
  if (/^[-*]\s+/.test(t)) return "ul";
  if (/^\d+\.\s+/.test(t)) return "ol";
  return null;
}

function isTableSeparator(line: string): boolean {
  const t = line.trim();
  return /^\s*\|?[\s:|-]+\|?\s*$/.test(t) && t.includes("-") && t.includes("|");
}

function splitCells(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((c) => c.trim());
}

function parseTable(lines: string[], index: number): { node: React.ReactNode; nextIndex: number } {
  const header = splitCells(lines[index]);
  const body: string[][] = [];
  let i = index + 2;
  while (i < lines.length && lines[i].trim().startsWith("|")) {
    body.push(splitCells(lines[i]));
    i++;
  }

  return {
    nextIndex: i,
    node: (
      <div key={`table-${index}`} className="my-2 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-bg-secondary border-b border-border">
            <tr>
              {header.map((cell, j) => (
                <th key={j} className="px-3 py-2 text-left font-semibold text-fg text-xs">
                  {renderInline(cell)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, r) => (
              <tr key={r}>
                {row.map((cell, c) => (
                  <td key={c} className="px-3 py-2 text-fg-secondary border-b border-border text-xs">
                    {renderInline(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  };
}

function splitBlocks(text: string): React.ReactNode[] {
  const lines = text.split(/\r?\n/);
  const blocks: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const trimmed = lines[i].trim();
    if (!trimmed) {
      i++;
      continue;
    }

    if (trimmed.startsWith("```")) {
      const buf: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        buf.push(lines[i]);
        i++;
      }
      i++;
      blocks.push(
        <pre
          key={key++}
          className="my-2 p-3 rounded-lg bg-bg-secondary border border-border overflow-x-auto text-xs font-mono text-fg"
        >
          <code>{buf.join("\n")}</code>
        </pre>,
      );
      continue;
    }

    if (trimmed.startsWith("|") && i + 1 < lines.length && isTableSeparator(lines[i + 1])) {
      const { node, nextIndex } = parseTable(lines, i);
      blocks.push(node);
      i = nextIndex;
      continue;
    }

    const heading = /^(#{1,3})\s+(.+)$/.exec(trimmed);
    if (heading) {
      const level = heading[1].length;
      const size =
        level === 1 ? "text-base" : level === 2 ? "text-[15px]" : "text-sm";
      blocks.push(
        React.createElement(
          `h${level}`,
          { key: key++, className: `font-semibold text-fg mt-2 mb-1 ${size}` },
          renderInline(heading[2]),
        ),
      );
      i++;
      continue;
    }

    if (/^(-{3,}|\*{3,})$/.test(trimmed)) {
      blocks.push(<hr key={key++} className="my-3 border-border" />);
      i++;
      continue;
    }

    if (trimmed.startsWith("> ")) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("> ")) {
        buf.push(lines[i].trim().slice(2));
        i++;
      }
      blocks.push(
        <blockquote
          key={key++}
          className="border-l-3 border-primary pl-3 my-2 text-fg-secondary italic"
        >
          {renderInline(buf.join(" "))}
        </blockquote>,
      );
      continue;
    }

    const listType = isListLine(trimmed);
    if (listType) {
      const items: string[] = [];
      while (i < lines.length) {
        const current = lines[i].trim();
        const currentType = isListLine(current);
        if (!currentType || currentType !== listType) break;
        items.push(current.replace(listType === "ul" ? /^[-*]\s+/ : /^\d+\.\s+/, ""));
        i++;
      }
      const Tag = listType === "ul" ? "ul" : "ol";
      blocks.push(
        React.createElement(
          Tag,
          {
            key: key++,
            className:
              (listType === "ul" ? "list-disc" : "list-decimal") +
              " list-inside space-y-1 my-2 text-fg-secondary pl-1",
          },
          items.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {renderInline(item)}
            </li>
          )),
        ),
      );
      continue;
    }

    const buf: string[] = [];
    while (i < lines.length) {
      const t = lines[i].trim();
      if (!t) break;
      if (
        t.startsWith("```") ||
        (t.startsWith("|") &&
          i + 1 < lines.length &&
          isTableSeparator(lines[i + 1])) ||
        t.startsWith("> ") ||
        isListLine(t) ||
        /^(#{1,3})\s/.test(t) ||
        /^(-{3,}|\*{3,})$/.test(t)
      ) {
        break;
      }
      buf.push(t);
      i++;
    }
    blocks.push(
      <p key={key++} className="text-fg-secondary leading-relaxed mb-1.5">
        {renderInline(buf.join(" "))}
      </p>,
    );
  }

  return blocks;
}

interface ChatMarkdownProps {
  children: string;
}

export function ChatMarkdown({ children }: ChatMarkdownProps) {
  const text = String(children ?? "");
  return <div className="space-y-0.5">{splitBlocks(text)}</div>;
}
