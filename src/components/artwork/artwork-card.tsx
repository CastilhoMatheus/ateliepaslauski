"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Artwork } from "@/lib/data";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function ArtworkCard({
  artwork,
  quantity,
  onAdd,
  onRemove,
}: {
  artwork: Artwork;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}) {
  return (
    <article className="flex h-full flex-col gap-3 rounded-xl border border-slate-200/80 bg-white/80 p-3 shadow-[0_12px_30px_rgba(20,30,55,0.12)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(20,30,55,0.18)]">
      <div className="relative overflow-hidden rounded-lg border border-slate-100/90">
        <div
          className="absolute inset-0 opacity-80 mix-blend-overlay"
          style={{
            background: `radial-gradient(circle at 22% 18%, ${artwork.accent}22, transparent 38%)`,
          }}
        />
        <Image
          src={artwork.image}
          alt={artwork.title}
          width={500}
          height={360}
          className="h-48 w-full object-cover transition duration-700"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge
            variant={artwork.tag === "Original" ? "neutral" : "outline"}
            className="normal-case tracking-tight"
          >
            {artwork.tag}
          </Badge>
          <Badge variant="contrast" className="normal-case">
            {artwork.series}
          </Badge>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-slate-900">
              {artwork.title}
            </h3>
            <p className="text-sm text-slate-600">{artwork.description}</p>
          </div>
          <span className="rounded-md bg-slate-900 px-3 py-1 text-sm font-semibold text-lime-50">
            {currency.format(artwork.price)}
          </span>
        </div>
        <p className="text-xs text-slate-500">{artwork.medium}</p>
      </div>
      <div className="mt-auto flex items-center justify-between gap-3">
        <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
          {artwork.size}
        </span>
        {quantity > 0 ? (
          <div className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1 shadow-sm">
            <IconButton ariaLabel="Remove one" onClick={onRemove}>
              −
            </IconButton>
            <span className="text-sm font-semibold text-slate-900">
              {quantity}
            </span>
            <IconButton ariaLabel="Add one" onClick={onAdd}>
              +
            </IconButton>
          </div>
        ) : (
          <Button size="sm" onClick={onAdd}>
            Add
          </Button>
        )}
      </div>
    </article>
  );
}

function IconButton({
  children,
  ariaLabel,
  onClick,
}: {
  children: React.ReactNode;
  ariaLabel: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className="grid h-7 w-7 place-items-center rounded-md border border-slate-200 text-slate-700 transition hover:border-slate-300"
    >
      {children}
    </button>
  );
}
