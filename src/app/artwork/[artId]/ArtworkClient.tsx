// app/artwork/[artId]/ArtworkClient.tsx
"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Price } from "@/components/ui/price";
import type { Artwork } from "@/lib/data";

export default function ArtworkClient({ artwork }: { artwork: Artwork }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" size="sm">
              ← Back to Collection
            </Button>
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr,1fr]">
          {/* Image */}
          <div className="relative overflow-hidden rounded-xl border bg-white">
            <CldImage
              src={artwork.image}
              alt={artwork.title}
              width={1200}
              height={900}
              className="w-full object-contain"
              priority
            />
            {!artwork.available && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <span className="rounded-md bg-white px-6 py-3 font-semibold">
                  Sold
                </span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <Badge variant="neutral">{artwork.style}</Badge>

            <h1 className="text-4xl font-[var(--font-display)]">
              {artwork.title}
            </h1>

            <Price amount={artwork.price} variant="large" label="Price" />

            <p className="text-sm text-slate-600">Size: {artwork.size}</p>

            <Link href="/">
              <Button size="lg">View More Works</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
