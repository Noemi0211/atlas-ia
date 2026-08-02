"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { Send, Bot, User, Loader2, Sparkles, AlertCircle } from "lucide-react";
import { useProgress } from "@/stores/progress";
import { useI18n } from "@/lib/i18n/provider";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AIChat() {
  const { t } = useI18n();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [streamingContent, setStreamingContent] = useState("");
  const [error, setError] = useState("");
  const [started, setStarted] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { addBadge } = useProgress();
  const suggestedQuestions = useMemo(() => t.lab.aiChat.suggestedQuestions, [t]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingContent]);

  useEffect(() => {
    if (started) inputRef.current?.focus();
  }, [started]);

  async function sendMessage(content: string) {
    if (!content.trim() || loading) return;

    if (!started) {
      setStarted(true);
      addBadge("chat-ia");
    }
    setShowSuggestions(false);

    const userMessage: Message = { role: "user", content: content.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setError("");
    setStreamingContent("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) {
        throw new Error(t.lab.aiChat.errorServer);
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error(t.lab.aiChat.errorStream);

      const decoder = new TextDecoder();

      function processLines(lines: string[], content: string): string {
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6);

          if (data === "[DONE]") {
            setMessages((prev) => [...prev, { role: "assistant", content }]);
            setStreamingContent("");
            setLoading(false);
            return content;
          }

          try {
            const parsed = JSON.parse(data);
            if (parsed.error) {
              setError(parsed.error);
              setLoading(false);
              return content;
            }
            if (parsed.token) {
              content += parsed.token;
              setStreamingContent(content);
            }
          } catch {
            // skip invalid JSON
          }
        }
        return content;
      }

      let acc = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        acc = processLines(chunk.split("\n"), acc);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : t.lab.aiChat.errorConnection);
      setLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  function handleSuggestion(q: string) {
    sendMessage(q);
  }

  return (
    <div className="flex flex-col h-[600px] rounded-xl border border-border bg-bg overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-secondary/50">
        <div className="p-1.5 rounded-lg bg-primary/20">
          <Bot className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-fg">{t.lab.aiChat.title}</h3>
          <p className="text-2xs text-fg-muted">
            {process.env.NEXT_PUBLIC_OPENAI_API_KEY
              ? t.lab.aiChat.poweredBy
              : t.lab.aiChat.demoMode}
          </p>
        </div>
        <Sparkles className="w-4 h-4 text-warning" />
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {!started && (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Bot className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-lg font-bold text-fg mb-2">
              {t.lab.aiChat.welcome}
            </h2>
            <p className="text-sm text-fg-muted max-w-md mx-auto mb-6">
              {t.lab.aiChat.welcomeDesc}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestedQuestions.slice(0, 3).map((q) => (
                <button
                  key={q}
                  onClick={() => handleSuggestion(q)}
                  className="px-3 py-1.5 rounded-full bg-bg-secondary border border-border text-xs text-fg-secondary hover:text-fg hover:border-border-strong transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`p-1.5 rounded-full shrink-0 ${
                msg.role === "user"
                  ? "bg-primary/20 text-primary"
                  : "bg-accent/20 text-accent"
              }`}
            >
              {msg.role === "user" ? (
                <User className="w-4 h-4" />
              ) : (
                <Bot className="w-4 h-4" />
              )}
            </div>
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2.5 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-primary text-white dark:text-slate-900"
                  : "bg-bg-secondary text-fg border border-border"
              }`}
            >
              <div className="prose prose-sm max-w-none dark:prose-invert">
                {msg.content.split("\n").map((line, j) => (
                  <p key={j} className={j > 0 ? "mt-2" : ""}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}

        {streamingContent && (
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-full shrink-0 bg-accent/20 text-accent">
              <Bot className="w-4 h-4" />
            </div>
            <div className="max-w-[80%] rounded-lg px-4 py-2.5 text-sm bg-bg-secondary text-fg border border-border">
              <div className="prose prose-sm max-w-none dark:prose-invert">
                {streamingContent}
                <span className="inline-block w-1.5 h-4 bg-primary ml-0.5 animate-pulse" />
              </div>
            </div>
          </div>
        )}

        {loading && !streamingContent && (
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-full shrink-0 bg-accent/20 text-accent">
              <Bot className="w-4 h-4" />
            </div>
            <div className="rounded-lg px-4 py-3 bg-bg-secondary border border-border">
              <Loader2 className="w-4 h-4 text-fg-muted animate-spin" />
            </div>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-error-light border border-error/20 text-sm text-error">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {error}
          </div>
        )}

        {showSuggestions && started && messages.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {suggestedQuestions.map((q) => (
              <button
                key={q}
                onClick={() => handleSuggestion(q)}
                className="px-3 py-1.5 rounded-full bg-bg-secondary border border-border text-xs text-fg-secondary hover:text-fg hover:border-border-strong transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-border">
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.lab.aiChat.placeholder}
            disabled={loading}
            className="flex-1 h-11 px-4 rounded-lg bg-bg-secondary border border-border text-sm text-fg placeholder:text-fg-muted focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="h-11 w-11 flex items-center justify-center rounded-lg bg-primary text-white dark:text-slate-900 hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
