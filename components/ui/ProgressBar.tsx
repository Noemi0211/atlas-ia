import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  color?: "primary" | "accent" | "purple";
  className?: string;
}

const colorStyles = {
  primary: "bg-primary",
  accent: "bg-accent",
  purple: "bg-purple",
};

export function ProgressBar({
  value,
  max = 100,
  size = "md",
  showLabel = false,
  color = "primary",
  className,
}: ProgressBarProps) {
  const percentage = Math.min(Math.round((value / max) * 100), 100);

  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs text-fg-muted">Progreso</span>
          <span className="text-xs font-medium text-fg-secondary">{percentage}%</span>
        </div>
      )}
      <div
        className={cn(
          "w-full rounded-full bg-bg-tertiary overflow-hidden",
          {
            "h-1.5": size === "sm",
            "h-2": size === "md",
            "h-3": size === "lg",
          }
        )}
      >
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500 ease-out",
            colorStyles[color]
          )}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
}
