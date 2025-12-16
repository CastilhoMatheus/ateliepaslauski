import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "outline" | "ghost" | "subtle";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  default:
    "bg-slate-900 text-amber-50 hover:bg-black shadow-[0_12px_30px_rgba(15,23,42,0.16)]",
  outline:
    "border border-slate-200 bg-white text-slate-900 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm",
  ghost:
    "text-slate-800 hover:bg-slate-900/5 hover:text-slate-950 active:bg-slate-900/10",
  subtle:
    "bg-amber-50 text-slate-900 border border-amber-200 hover:bg-white hover:-translate-y-0.5",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-sm",
};

export function buttonClasses({
  variant = "default",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/80 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "md", type = "button", ...props },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      className={buttonClasses({ variant, size, className })}
      {...props}
    />
  ),
);

Button.displayName = "Button";
