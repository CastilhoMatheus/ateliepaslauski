"use client";
import { cn } from "@/lib/utils";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// Set this to true to hide all prices (portfolio mode)
export const PRICES_DISABLED = true;

interface PriceProps {
  amount: number;
  className?: string;
  variant?: "default" | "large" | "inline";
  label?: string;
}

export function Price({
  amount,
  className,
  variant = "default",
  label,
}: PriceProps) {
  // If prices are disabled, don't render anything
  if (PRICES_DISABLED) {
    return null;
  }

  const formattedPrice = currency.format(amount);

  if (variant === "large") {
    return (
      <div className={cn("space-y-1", className)}>
        {label && (
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
            {label}
          </p>
        )}
        <p className="text-3xl font-semibold text-slate-900">
          {formattedPrice}
        </p>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <span className={cn("text-sm font-medium text-neutral-900", className)}>
        {formattedPrice}
      </span>
    );
  }

  // Default variant - badge style
  return (
    <span
      className={cn(
        "rounded-md bg-slate-900 px-3 py-1 text-sm font-semibold text-lime-50",
        className,
      )}
    >
      {formattedPrice}
    </span>
  );
}
