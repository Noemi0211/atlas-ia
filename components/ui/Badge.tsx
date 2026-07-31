import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "default" | "primary" | "accent" | "purple" | "warning" | "error";
  size?: "sm" | "md";
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  default: "bg-bg-secondary text-fg-secondary border-border",
  primary: "bg-primary-light text-primary border-primary/20",
  accent: "bg-accent-light text-accent border-accent/20",
  purple: "bg-purple-light text-purple border-purple/20",
  warning: "bg-warning-light text-warning border-warning/20",
  error: "bg-error-light text-error border-error/20",
};

export function Badge({ variant = "default", size = "sm", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-medium",
        size === "sm" && "px-2 py-0.5 text-2xs",
        size === "md" && "px-2.5 py-1 text-xs",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
