"use client";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PRICES_DISABLED, Price } from "@/components/ui/price";
import type { Artwork } from "@/lib/data";

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
      <Link href={`/artwork/${artwork.id}`} className="group">
        <div className="relative overflow-hidden rounded-lg border border-slate-100/90">
          <CldImage
            src={artwork.image}
            alt={artwork.title}
            width={500}
            height={360}
            className="h-48 w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3">
            <Badge variant="neutral" className="normal-case tracking-tight">
              {artwork.style}
            </Badge>
          </div>
          {!artwork.available && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <span className="rounded-md bg-white px-3 py-1 text-sm font-semibold text-slate-900">
                Sold
              </span>
            </div>
          )}
        </div>
      </Link>
      <div className="flex flex-col gap-1">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/artwork/${artwork.id}`}>
            <h3 className="text-lg font-semibold text-slate-900 transition hover:text-slate-600">
              {artwork.title}
            </h3>
          </Link>
          <Price amount={artwork.price} />
        </div>
      </div>
      <div className="mt-auto flex items-center justify-between gap-3">
        <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
          {artwork.size}
        </span>
        {!PRICES_DISABLED && artwork.available && quantity > 0 && (
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
        )}
        {!PRICES_DISABLED && artwork.available && quantity === 0 && (
          <Button size="sm" onClick={onAdd}>
            Add
          </Button>
        )}
        {!PRICES_DISABLED && !artwork.available && (
          <Button size="sm" disabled>
            Sold Out
          </Button>
        )}
        {PRICES_DISABLED && (
          <Link href={`/artwork/${artwork.id}`}>
            <Button size="sm" variant="ghost">
              View Details
            </Button>
          </Link>
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
