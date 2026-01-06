"use client";
import { cn } from "@/lib/utils";

type Variant = "neutral" | "contrast" | "outline" | "amber";

export function Badge({
  children,
  className,
  variant = "neutral",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
}) {
  const variants: Record<Variant, string> = {
    neutral:
      "bg-slate-900/90 text-amber-50 border border-slate-900 shadow-sm shadow-amber-100",
    contrast:
      "bg-white/80 text-slate-900 border border-slate-200/80 shadow-sm backdrop-blur",
    outline:
      "border border-amber-200 bg-amber-50/80 text-slate-900 shadow-sm backdrop-blur",
    amber:
      "bg-gradient-to-r from-amber-200 to-amber-100 text-slate-900 border border-amber-200 shadow-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
