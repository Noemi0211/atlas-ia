"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function CodeBlock({
  code,
  language = "text",
  filename,
  showLineNumbers = false,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div className={cn("my-6 rounded-xl border border-border overflow-hidden", className)}>
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 bg-bg-secondary border-b border-border">
          <span className="text-xs font-mono text-fg-muted">{filename}</span>
          <div className="flex items-center gap-2">
            {language && (
              <span className="text-2xs text-fg-muted uppercase">{language}</span>
            )}
            <button
              onClick={handleCopy}
              className="p-1 rounded hover:bg-bg-tertiary text-fg-muted hover:text-fg transition-colors"
              aria-label="Copiar código"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-accent" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      )}
      <div className="relative">
        {!filename && (
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 p-1.5 rounded-lg bg-bg-secondary/80 backdrop-blur border border-border hover:bg-bg-tertiary text-fg-muted hover:text-fg transition-colors z-10"
            aria-label="Copiar código"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-accent" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        )}
        <pre className="!bg-bg-secondary !border-0 !rounded-none p-4 overflow-x-auto">
          <code className="text-sm font-mono">
            {showLineNumbers ? (
              lines.map((line, i) => (
                <div key={i} className="flex">
                  <span className="inline-block w-8 shrink-0 text-right pr-4 text-fg-muted/50 select-none text-xs leading-relaxed">
                    {i + 1}
                  </span>
                  <span>{line}</span>
                </div>
              ))
            ) : (
              code
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}
