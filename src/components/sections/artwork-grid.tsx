"use client";

import { useMemo } from "react";
import { ArtworkCard } from "@/components/artwork/artwork-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Artwork } from "@/lib/data";

export type FilterId = "all" | Artwork["tag"];

const filters: Array<{ id: FilterId; label: string }> = [
  { id: "all", label: "All works" },
  { id: "Original", label: "Originals" },
  { id: "Edition", label: "Editions" },
  { id: "Miniature", label: "Small works" },
];

export function ArtworkGrid({
  artworks,
  activeFilter,
  onFilterChange,
  cart,
  onAdd,
  onRemove,
}: {
  artworks: Artwork[];
  activeFilter: FilterId;
  onFilterChange: (id: FilterId) => void;
  cart: Record<string, number>;
  onAdd: (id: string) => void;
  onRemove: (id: string) => void;
}) {
  const filtered = useMemo(() => {
    if (activeFilter === "all") return artworks;
    return artworks.filter((art) => art.tag === activeFilter);
  }, [artworks, activeFilter]);

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-2">
          <Badge variant="neutral">Refractions collection</Badge>
          <h2 className="text-2xl font-[var(--font-display)] text-slate-900">
            Originals, editions, small works
          </h2>
          <p className="text-sm text-slate-600">
            Filter to explore by format. Each piece ships from the Lisbon studio
            with insurance.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => onFilterChange(filter.id)}
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((art) => (
          <ArtworkCard
            key={art.id}
            artwork={art}
            quantity={cart[art.id] ?? 0}
            onAdd={() => onAdd(art.id)}
            onRemove={() => onRemove(art.id)}
          />
        ))}
      </div>
    </section>
  );
}
