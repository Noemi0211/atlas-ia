import { cn } from "@/lib/utils";
import { Lightbulb, AlertTriangle, Info, XCircle } from "lucide-react";

interface CalloutProps {
  type?: "tip" | "warning" | "info" | "error";
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const typeConfig = {
  tip: {
    icon: Lightbulb,
    title: "Consejo",
    bg: "bg-accent-light",
    border: "border-accent/30",
    iconColor: "text-accent",
    titleColor: "text-accent",
  },
  warning: {
    icon: AlertTriangle,
    title: "Precaución",
    bg: "bg-warning-light",
    border: "border-warning/30",
    iconColor: "text-warning",
    titleColor: "text-warning",
  },
  info: {
    icon: Info,
    title: "Nota",
    bg: "bg-primary-light",
    border: "border-primary/30",
    iconColor: "text-primary",
    titleColor: "text-primary",
  },
  error: {
    icon: XCircle,
    title: "Error común",
    bg: "bg-error-light",
    border: "border-error/30",
    iconColor: "text-error",
    titleColor: "text-error",
  },
};

export function Callout({ type = "info", title, children, className }: CalloutProps) {
  const config = typeConfig[type];
  const Icon = config.icon;
  const displayTitle = title || config.title;

  return (
    <div
      className={cn(
        "rounded-xl border p-4 my-6",
        config.bg,
        config.border,
        className
      )}
    >
      <div className="flex items-start gap-3">
        <Icon className={cn("w-5 h-5 mt-0.5 shrink-0", config.iconColor)} />
        <div className="min-w-0 flex-1">
          <p className={cn("font-semibold text-sm mb-1", config.titleColor)}>
            {displayTitle}
          </p>
          <div className="text-sm text-fg-secondary leading-relaxed [&>p]:my-1 [&>p:first-child]:mt-0 [&>p:last-child]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
