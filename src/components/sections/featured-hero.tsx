"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Artwork } from "@/lib/data";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function FeaturedHero({
  artwork,
  onAddToCart,
  cartContains,
}: {
  artwork: Artwork;
  onAddToCart: () => void;
  cartContains: number;
}) {
  return (
    <section className="relative overflow-hidden rounded-xl border border-slate-200/90 bg-gradient-to-r from-white via-white to-slate-50 shadow-[0_20px_60px_rgba(20,30,55,0.16)]">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/6 via-transparent to-lime-100/30" />
      <div className="relative grid gap-8 p-6 lg:grid-cols-[1.4fr,1fr] lg:items-center">
        <div className="relative overflow-hidden rounded-lg border border-slate-200/90">
          <Image
            src={artwork.image}
            alt={artwork.title}
            width={900}
            height={640}
            priority
            className="h-[360px] w-full object-cover"
          />
          <div className="absolute left-4 top-4 flex gap-2">
            <Badge variant="neutral">{artwork.series}</Badge>
            <Badge variant="contrast">{artwork.medium}</Badge>
          </div>
          <div className="absolute bottom-4 left-4 rounded-md bg-slate-900/85 px-4 py-2 text-xs font-semibold text-lime-50 shadow-lg">
            {artwork.size} · {artwork.tag}
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-slate-500">
            <span className="h-1.5 w-1.5 rounded-sm bg-lime-500 shadow-[0_0_0_6px_rgba(190,242,100,0.5)]" />
            New drop — 5 available
          </div>
          <h1 className="text-4xl font-[var(--font-display)] leading-tight text-slate-900">
            {artwork.title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">
            {artwork.description}
          </p>
          <div className="flex flex-wrap gap-2 text-sm text-slate-600">
            <Pill>Hand signed</Pill>
            <Pill>Certificate included</Pill>
            <Pill>Ships worldwide</Pill>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-slate-200/80 bg-white/80 p-4 shadow-inner shadow-lime-100/50">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Studio price
              </p>
              <p className="text-3xl font-semibold text-slate-900">
                {currency.format(artwork.price)}
              </p>
              <p className="text-xs text-slate-500">
                Reserve today · ships in 3 days
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button onClick={onAddToCart}>
                {cartContains > 0 ? "Add another" : "Add to cart"}
              </Button>
              {cartContains > 0 ? (
                <Badge variant="contrast" className="normal-case">
                  In cart: {cartContains}
                </Badge>
              ) : (
                <Badge variant="outline" className="normal-case">
                  Framing available
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
      <span className="h-1.5 w-1.5 rounded-sm bg-slate-400" />
      {children}
    </span>
  );
}
