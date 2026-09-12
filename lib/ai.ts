import OpenAI from "openai";
import { getDictionary } from "./i18n/dictionaries";
import { DEFAULT_LOCALE, type Locale } from "./i18n/config";
import { getGlosarioTerminos, getHerramientas } from "./i18n/data";

import {
  FALLBACK_RESPONSES,
  GENERAL_KNOWLEDGE,
  TOPIC_CATEGORIES,
  type FallbackEntry,
  type TopicCategory,
} from "./ai-knowledge";

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

interface MatchResult {
  text: string;
  score: number;
  source: "course" | "general";
  noPrefix?: boolean;
}

interface KnowledgeSource {
  entry: FallbackEntry;
  source: "course" | "general";
}

const KNOWLEDGE_ENTRIES: KnowledgeSource[] = [
  ...FALLBACK_RESPONSES.map((entry) => ({ entry, source: "course" as const })),
  ...GENERAL_KNOWLEDGE.map((entry) => ({ entry, source: "general" as const })),
];

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function tokenize(text: string): string[] {
  return normalize(text)
    .replace(/[^a-z0-9]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1);
}

function tokenMatches(token: string, keyword: string): boolean {
  if (token === keyword) return true;
  if (keyword.length >= 4 && token.startsWith(keyword)) return true;
  if (
    keyword.length >= 4 &&
    token.length >= 4 &&
    keyword.startsWith(token) &&
    /^(s|es)$/.test(keyword.slice(token.length))
  )
    return true;
  return false;
}

function phraseMatches(queryTokens: string[], phrase: string[]): boolean {
  if (phrase.length === 0) return false;

  const maxGap = phrase.length === 2 ? 2 : phrase.length === 3 ? 1 : 0;

  outer: for (let i = 0; i < queryTokens.length; i++) {
    if (!tokenMatches(queryTokens[i], phrase[0])) continue;

    let last = i;
    for (let j = 1; j < phrase.length; j++) {
      let found = false;
      for (
        let k = last + 1;
        k < queryTokens.length && k <= last + 1 + maxGap;
        k++
      ) {
        if (tokenMatches(queryTokens[k], phrase[j])) {
          last = k;
          found = true;
          break;
        }
      }
      if (!found) continue outer;
    }
    return true;
  }

  return false;
}

function findKnowledgeResponse(query: string): MatchResult | null {
  const tokens = tokenize(query);
  if (tokens.length === 0) return null;

  let best: MatchResult | null = null;

  for (const { entry, source } of KNOWLEDGE_ENTRIES) {
    for (const group of entry.keywords) {
      if (phraseMatches(tokens, group) && (!best || group.length > best.score)) {
        best = {
          text: entry.fn(query),
          score: group.length,
          source,
          noPrefix: entry.noPrefix,
        };
      }
    }
  }

  return best;
}

function findGlossaryResponse(query: string, locale: Locale): MatchResult | null {
  const t = getDictionary(locale);
  const tokens = tokenize(query);
  const terms = getGlosarioTerminos(t);

  let best: { termino: string; definicion: string; categoria: string } | null =
    null;
  let bestScore = 0;

  for (const term of terms) {
    const termTokens = tokenize(term.termino);
    if (termTokens.length === 0) continue;
    if (phraseMatches(tokens, termTokens) && termTokens.length > bestScore) {
      bestScore = termTokens.length;
      best = term;
    }
  }

  if (!best) return null;

  return {
    text: `**${best.termino}** — ${best.categoria}\n\n${best.definicion}`,
    score: bestScore,
    source: "course",
  };
}

function findToolResponse(query: string, locale: Locale): MatchResult | null {
  const t = getDictionary(locale);
  const tokens = tokenize(query);
  const tools = getHerramientas(t);

  let bestScore = 0;
  const matched = tools.filter((tool) => {
    const nameTokens = tokenize(tool.nombre);
    if (nameTokens.length === 0) return false;
    if (phraseMatches(tokens, nameTokens)) {
      bestScore = Math.max(bestScore, nameTokens.length);
      return true;
    }
    return false;
  });

  if (matched.length === 0) return null;

  let text: string;
  if (matched.length >= 2) {
    const lines = [
      "He encontrado varias herramientas que encajan. Comparativa rápida:",
      "",
      ...matched.map(
        (tool) =>
          `- **${tool.nombre}** (${tool.empresa}): ${tool.fortalezaPrincipal}. Ideal para ${tool.idealPara.join(", ") || "uso general"}.`,
      ),
    ];
    text = lines.join("\n");
  } else {
    const tool = matched[0];
    const ideal = tool.idealPara.join(", ");
    const precio = tool.precioDetalle || tool.precio;
    text = [
      `**${tool.nombre}** — ${tool.empresa}`,
      "",
      tool.descripcion,
      "",
      `**Fortaleza principal:** ${tool.fortalezaPrincipal}`,
      tool.debilidadPrincipal
        ? `**Debilidad principal:** ${tool.debilidadPrincipal}`
        : null,
      ideal ? `**Ideal para:** ${ideal}` : null,
      precio ? `**Precio:** ${precio}` : null,
      tool.url ? `Más información: ${tool.url}` : null,
    ]
      .filter(Boolean)
      .join("\n");
  }

  return { text, score: bestScore || 1, source: "course" };
}

export function findBestResponse(query: string, locale: Locale): MatchResult | null {
  const candidates = [
    findKnowledgeResponse(query),
    findToolResponse(query, locale),
    findGlossaryResponse(query, locale),
  ].filter((c): c is MatchResult => c !== null);

  let best: MatchResult | null = null;
  for (const candidate of candidates) {
    if (!best || candidate.score > best.score) best = candidate;
  }
  return best;
}

export function composeResult(result: MatchResult, locale: Locale): string {
  if (result.noPrefix) return result.text;
  const t = getDictionary(locale);
  if (result.source === "course") {
    return `**[${t.ai.courseSource}]**\n\n${result.text}`;
  }
  return `**[${t.ai.generalIntro}]**\n\n${result.text}`;
}

export function findTopicFallback(
  query: string,
  locale: Locale,
  subject: string | null,
): string | null {
  const tokens = tokenize(query);
  const t = getDictionary(locale);

  for (const category of TOPIC_CATEGORIES) {
    if (subject && !subjectMatchesCategory(subject, category)) continue;
    const hit = category.keywords.some((kw) =>
      tokens.some((tok) => tokenMatches(tok, kw)),
    );
    if (hit) {
      return `**[${t.ai.generalIntro}]**\n\n${category.text}`;
    }
  }

  return null;
}

const DEFINITION_PATTERNS = [
  /(?:que|qué)\s+es\s+(?:un|una|el|la|los|las|lo)?\s*([a-zñü][a-z0-9ñü-]{2,})/i,
  /(?:que|qué)\s+significa\s+(?:el|la|un|una)?\s*([a-zñü][a-z0-9ñü-]{2,})/i,
];

export function extractDefinitionSubject(query: string): string | null {
  for (const pattern of DEFINITION_PATTERNS) {
    const match = query.match(pattern);
    if (match) {
      return normalize(match[1]).replace(/[^a-z0-9]/g, "");
    }
  }
  return null;
}

function subjectMatchesCategory(
  subject: string,
  category: TopicCategory,
): boolean {
  const subjectTokens = tokenize(subject);
  return category.keywords.some((kw) =>
    subjectTokens.some((tok) => tokenMatches(tok, kw)),
  );
}

function composeNoAnswer(locale: Locale): string {
  const t = getDictionary(locale);
  return `**[${t.ai.generalIntro}]**\n\n${t.ai.noAnswer}`;
}

function isGreeting(query: string): boolean {
  const tokens = tokenize(query);
  return FALLBACK_RESPONSES.some(
    (entry) =>
      entry.memorySafe === false &&
      entry.keywords.some((group) => phraseMatches(tokens, group)),
  );
}

function looksLikeFollowUp(query: string): boolean {
  const followUpWords = new Set([
    "mas",
    "explica",
    "explicame",
    "detalla",
    "profundiza",
    "ejemplo",
    "ejemplos",
    "concreto",
    "concreta",
    "sigue",
    "continuar",
    "entonces",
    "eso",
    "esa",
    "ese",
    "pero",
    "vale",
    "gracias",
    "ok",
  ]);
  const tokens = tokenize(query);
  return tokens.length <= 4 && tokens.some((t) => followUpWords.has(t));
}

export function findResponseWithMemory(
  messages: { role: string; content: string }[],
  locale: Locale,
): string {
  const userMessages = messages
    .filter((m) => m.role === "user")
    .map((m) => m.content);

  const current = userMessages[userMessages.length - 1] || "";
  const direct = findBestResponse(current, locale);
  if (direct) return composeResult(direct, locale);

  if (looksLikeFollowUp(current)) {
    for (let i = userMessages.length - 2; i >= 0; i--) {
      const previous = userMessages[i];
      if (!previous || isGreeting(previous)) continue;
      const reused = findBestResponse(previous, locale);
      if (reused) return composeResult(reused, locale);
    }
  }

  const subject = extractDefinitionSubject(current);
  const topic = findTopicFallback(current, locale, subject);
  if (topic) return topic;

  return composeNoAnswer(locale);
}

export async function streamChatResponse(
  messages: { role: string; content: string }[],
  onToken: (token: string) => void,
  onDone: () => void,
  onError: (error: string) => void,
  locale: Locale = DEFAULT_LOCALE,
) {
  const t = getDictionary(locale);

  if (openai) {
    try {
      const stream = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: t.ai.systemPrompt },
          ...messages.map((m) => ({ role: m.role as "user" | "assistant", content: m.content })),
        ],
        stream: true,
        temperature: 0.7,
        max_tokens: 1024,
      });

      for await (const chunk of stream) {
        const token = chunk.choices[0]?.delta?.content || "";
        if (token) onToken(token);
      }
      onDone();
    } catch (err) {
      const message = err instanceof Error ? err.message : t.ai.error;
      onError(message);
    }
    return;
  }

  const response = findResponseWithMemory(messages, locale);
  const words = response.split(" ");
  for (let i = 0; i < words.length; i++) {
    onToken((i > 0 ? " " : "") + words[i]);
    await new Promise((r) => setTimeout(r, 20 + Math.random() * 30));
  }
  onDone();
}

