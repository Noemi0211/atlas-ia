export interface GlossaryTermRef {
  slug: string;
  termino: string;
}

export interface GlossaryMatch {
  slug: string;
  termino: string;
  start: number;
  end: number;
}

interface TrieNode {
  children: Map<string, TrieNode>;
  slug?: string;
}

const WORD_CHAR = /[\w\u00C0-\u024F]/;

export function normalizeGlossaryText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function normalizeGlossaryChar(ch: string): string {
  return normalizeGlossaryText(ch);
}

export function buildGlossaryMatcher(
  terms: GlossaryTermRef[]
): GlossaryMatcher {
  return GlossaryMatcher.build(terms);
}

export class GlossaryMatcher {
  private constructor(
    private readonly root: TrieNode,
    private readonly bySlug: Map<string, GlossaryTermRef>
  ) {}

  static build(terms: GlossaryTermRef[]): GlossaryMatcher {
    const root: TrieNode = { children: new Map() };
    const bySlug = new Map<string, GlossaryTermRef>();
    for (const term of terms) {
      bySlug.set(term.slug, term);
      let node = root;
      for (const ch of normalizeGlossaryText(term.termino)) {
        let next = node.children.get(ch);
        if (!next) {
          next = { children: new Map() };
          node.children.set(ch, next);
        }
        node = next;
      }
      node.slug = term.slug;
    }
    return new GlossaryMatcher(root, bySlug);
  }

  find(text: string): GlossaryMatch[] {
    const units: { ch: string; orig: number }[] = [];
    for (let i = 0; i < text.length; i++) {
      const ch = normalizeGlossaryChar(text[i]);
      if (ch) units.push({ ch, orig: i });
    }

    const matches: GlossaryMatch[] = [];
    let u = 0;
    while (u < units.length) {
      let node = this.root;
      let lastEnd = -1;
      let lastSlug: string | undefined;
      let v = u;
      while (v < units.length) {
        const next = node.children.get(units[v].ch);
        if (!next) break;
        node = next;
        if (node.slug !== undefined) {
          lastEnd = v;
          lastSlug = node.slug;
        }
        v++;
      }
      if (lastEnd >= 0 && lastSlug !== undefined) {
        const start = units[u].orig;
        const end = units[lastEnd].orig + 1;
        const prevChar = start > 0 ? text[start - 1] : "";
        const nextChar = end < text.length ? text[end] : "";
        if (!WORD_CHAR.test(prevChar) && !WORD_CHAR.test(nextChar)) {
          const ref = this.bySlug.get(lastSlug);
          if (ref) {
            matches.push({ slug: ref.slug, termino: ref.termino, start, end });
          }
        }
        u = lastEnd + 1;
      } else {
        u++;
      }
    }
    return matches;
  }
}
