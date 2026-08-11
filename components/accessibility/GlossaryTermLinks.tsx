"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n/provider";
import { getGlosarioTerminos } from "@/lib/i18n/data";
import {
  buildGlossaryMatcher,
  type GlossaryMatcher,
  type GlossaryMatch,
} from "@/lib/glossary-match";
import { useGlossary } from "./GlossaryProvider";

const BLOCK_SELECTOR =
  "p, li, h1, h2, h3, h4, h5, td, th, dt, dd, blockquote, figcaption";
const SKIP_BLOCK_SELECTOR =
  "code, pre, a, button, select, input, textarea, [data-glossary-term]";
const SKIP_TEXT_PARENT_SELECTOR =
  "code, pre, a, button, select, input, textarea, kbd, samp, var, [data-glossary-term]";

const processedBlocks = new WeakSet<Element>();

function wrapMatches(
  node: Text,
  matches: GlossaryMatch[],
  open: (slug: string, trigger: HTMLElement) => void
) {
  const fragment = document.createDocumentFragment();
  let cursor = 0;
  for (const match of matches) {
    if (match.start > cursor) {
      fragment.appendChild(
        document.createTextNode(node.data.slice(cursor, match.start))
      );
    }
    const span = document.createElement("span");
    span.dataset.glossaryTerm = match.slug;
    span.className = "glossary-term";
    span.setAttribute("role", "button");
    span.setAttribute("tabindex", "0");
    span.setAttribute("aria-haspopup", "dialog");
    span.setAttribute("aria-expanded", "false");
    span.textContent = node.data.slice(match.start, match.end);
    span.addEventListener("click", (event) => {
      event.stopPropagation();
      open(match.slug, span);
    });
    span.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        event.stopPropagation();
        open(match.slug, span);
      }
    });
    fragment.appendChild(span);
    cursor = match.end;
  }
  if (cursor < node.data.length) {
    fragment.appendChild(document.createTextNode(node.data.slice(cursor)));
  }
  node.parentNode?.replaceChild(fragment, node);
}

function processBlock(
  block: HTMLElement,
  matcher: GlossaryMatcher,
  open: (slug: string, trigger: HTMLElement) => void
) {
  const seen = new Set<string>();
  const textNodes: Text[] = [];
  const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = (node as Text).parentElement;
      if (!parent || parent.closest(SKIP_TEXT_PARENT_SELECTOR)) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode as Text);
  }

  for (const node of textNodes) {
    const matches = matcher
      .find(node.data)
      .filter((match) => !seen.has(match.slug));
    if (matches.length === 0) continue;
    for (const match of matches) seen.add(match.slug);
    wrapMatches(node, matches, open);
  }
}

export function GlossaryTermLinks() {
  const { t, locale } = useI18n();
  const pathname = usePathname();
  const { openTerm, closeTerm } = useGlossary();

  useEffect(() => {
    closeTerm();

    const scope = document.querySelector<HTMLElement>("[data-read-aloud]");
    if (!scope) return;

    const terminos = getGlosarioTerminos(t);
    const matcher = buildGlossaryMatcher(
      terminos.map((term) => ({ slug: term.slug, termino: term.termino }))
    );
    const open = (slug: string, trigger: HTMLElement) => openTerm(slug, trigger);

    const processAddedBlock = (block: Element) => {
      if (!(block instanceof HTMLElement)) return;
      if (block.closest(SKIP_BLOCK_SELECTOR)) return;
      if (processedBlocks.has(block)) return;
      processBlock(block, matcher, open);
      processedBlocks.add(block);
    };

    scope.querySelectorAll(BLOCK_SELECTOR).forEach(processAddedBlock);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const addedNode of mutation.addedNodes) {
          if (!(addedNode instanceof HTMLElement)) continue;
          if (addedNode.matches(BLOCK_SELECTOR)) processAddedBlock(addedNode);
          addedNode.querySelectorAll(BLOCK_SELECTOR).forEach(processAddedBlock);
        }
      }
    });
    observer.observe(scope, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [pathname, locale, t, openTerm, closeTerm]);

  return null;
}
