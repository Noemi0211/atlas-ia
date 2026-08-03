import type { Locale } from "@/lib/i18n/config";
import { localeToIntl } from "@/lib/i18n/config";

const EXCLUDED_SELECTORS = [
  "pre",
  "code",
  "script",
  "style",
  "svg",
  "nav",
  "aside",
  "button",
  "select",
  "input",
  "textarea",
  "[aria-hidden='true']",
  "[data-read-aloud-exclude]",
];

export const MAIN_CONTENT_SELECTOR = "[data-read-aloud]";

export function isSpeechSupported(): boolean {
  return (
    typeof window !== "undefined" &&
    "speechSynthesis" in window &&
    "SpeechSynthesisUtterance" in window
  );
}

export function getSpeechVoices(): SpeechSynthesisVoice[] {
  if (!isSpeechSupported()) return [];
  return window.speechSynthesis.getVoices();
}

function voiceRank(lang: string, targetBase: string): number {
  const normalized = lang.toLowerCase().replace("_", "-");
  if (normalized === targetBase) return 0;
  if (normalized.startsWith(targetBase)) return 1;
  return -1;
}

export function getVoiceForLocale(
  locale: Locale,
  voices: SpeechSynthesisVoice[]
): SpeechSynthesisVoice | null {
  if (!voices.length) return null;

  const target = localeToIntl(locale).toLowerCase();
  const targetBase = locale === "val" ? "ca" : target.split("-")[0];

  const ranked = voices
    .map((voice) => ({ voice, rank: voiceRank(voice.lang, targetBase) }))
    .filter((entry) => entry.rank >= 0)
    .sort((a, b) => {
      if (a.rank !== b.rank) return a.rank - b.rank;
      const aPref = a.voice.name.includes("Google") || a.voice.name.includes("Natural");
      const bPref = b.voice.name.includes("Google") || b.voice.name.includes("Natural");
      if (aPref !== bPref) return aPref ? -1 : 1;
      return 0;
    });

  return ranked[0]?.voice ?? null;
}

export function extractReadableText(root: HTMLElement): string {
  const clone = root.cloneNode(true) as HTMLElement;
  clone.querySelectorAll(EXCLUDED_SELECTORS.join(",")).forEach((node) => {
    node.remove();
  });

  const text = (clone.textContent ?? "")
    .replace(/\s+/g, " ")
    .replace(/\u00A0/g, " ")
    .trim();

  return text;
}

export function splitTextForSpeech(text: string, maxLength = 280): string[] {
  const sentences = text
    .split(/(?<=[.!?;:])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);

  const chunks: string[] = [];
  let current = "";

  for (const sentence of sentences) {
    if (sentence.length > maxLength) {
      if (current) {
        chunks.push(current.trim());
        current = "";
      }
      const words = sentence.split(/\s+/);
      let partial = "";
      for (const word of words) {
        if ((partial + " " + word).trim().length > maxLength) {
          if (partial) chunks.push(partial.trim());
          partial = word;
        } else {
          partial = partial ? partial + " " + word : word;
        }
      }
      if (partial) current = partial;
      continue;
    }

    const candidate = current ? `${current} ${sentence}` : sentence;
    if (candidate.length > maxLength) {
      chunks.push(current.trim());
      current = sentence;
    } else {
      current = candidate;
    }
  }

  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

export function createUtterance(
  text: string,
  lang: string,
  rate: number,
  voice: SpeechSynthesisVoice | null
): SpeechSynthesisUtterance | null {
  if (!isSpeechSupported()) return null;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = rate;
  utterance.volume = 1;
  utterance.pitch = 1;
  if (voice) utterance.voice = voice;
  return utterance;
}
