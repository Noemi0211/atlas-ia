"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/provider";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const { t } = useI18n();

  return (
    <nav
      aria-label={t.breadcrumbs.home}
      className={cn("flex items-center gap-1.5 text-sm", className)}
    >
      <Link
        href="/"
        className="text-fg-muted hover:text-fg transition-colors p-0.5"
        aria-label={t.breadcrumbs.home}
      >
        <Home className="w-3.5 h-3.5" />
      </Link>

      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1.5">
          <ChevronRight className="w-3.5 h-3.5 text-fg-muted" />
          {item.href ? (
            <Link
              href={item.href}
              className="text-fg-muted hover:text-fg transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-fg font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
