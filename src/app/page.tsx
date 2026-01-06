"use client";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { useEffect, useMemo, useState } from "react";
import { CartPanel } from "@/components/cart/cart-panel";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PRICES_DISABLED, Price } from "@/components/ui/price";
import type { Artwork } from "@/lib/data";

type CartEntry = { artId: string; quantity: number };

export default function Home() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [cart, setCart] = useState<CartEntry[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    async function fetchArtworks() {
      try {
        const res = await fetch("/api/artworks", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch artworks");
        const data = await res.json();
        setArtworks(data);
      } catch (error) {
        console.error("Error fetching artworks:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchArtworks();
  }, []);

  const cartMap = useMemo(() => {
    return cart.reduce<Record<string, number>>((acc, item) => {
      acc[item.artId] = item.quantity;
      return acc;
    }, {});
  }, [cart]);

  const cartItems = useMemo(() => {
    return cart
      .map((entry) => {
        const art = artworks.find((item) => item.id === entry.artId);
        if (!art) return null;
        return { ...art, quantity: entry.quantity };
      })
      .filter(Boolean) as (Artwork & { quantity: number })[];
  }, [cart, artworks]);

  const totalItems = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.quantity, 0),
    [cartItems],
  );

  const totalPrice = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cartItems],
  );

  const addToCart = (artId: string) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.artId === artId);
      if (exists) {
        return prev.map((item) =>
          item.artId === artId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { artId, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const removeOne = (artId: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.artId === artId
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const deleteFromCart = (artId: string) => {
    setCart((prev) => prev.filter((item) => item.artId !== artId));
  };

  const filteredArtworks = useMemo(() => {
    if (activeFilter === "all") return artworks;
    return artworks.filter((art) => art.style === activeFilter);
  }, [activeFilter, artworks]);

  const availableStyles = useMemo(() => {
    const styles = new Set(artworks.map((art) => art.style));
    return ["all", ...Array.from(styles).sort()];
  }, [artworks]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <SiteHeader totalItems={0} onCartClick={undefined} />
        <main className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex items-center justify-center py-20">
            <p className="text-neutral-600">Loading artworks...</p>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader
        totalItems={PRICES_DISABLED ? 0 : totalItems}
        onCartClick={PRICES_DISABLED ? undefined : () => setCartOpen(true)}
      />

      <main className="mx-auto max-w-7xl px-6 py-16">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <h1 className="mb-4 font-[var(--font-display)] text-5xl tracking-tight text-neutral-900">
            Contemporary Art
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600">
            Original paintings and limited editions from the studio
          </p>
        </section>

        {/* Filter Tabs */}
        <div className="mb-8 flex justify-center gap-4">
          {availableStyles.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm transition-colors ${
                activeFilter === filter
                  ? "border-b-2 border-neutral-900 font-medium text-neutral-900"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {filter === "all" ? "All" : filter}
            </button>
          ))}
        </div>

        {/* Artwork Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArtworks.map((artwork) => (
            <article key={artwork.id} className="group">
              <Link href={`/artwork/${artwork.id}`}>
                <div className="relative mb-4 aspect-[4/5] overflow-hidden bg-neutral-100">
                  <CldImage
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {!artwork.available && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <span className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-neutral-900">
                        Sold
                      </span>
                    </div>
                  )}
                </div>
              </Link>
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <Link href={`/artwork/${artwork.id}`}>
                      <h3 className="font-medium text-neutral-900 transition hover:text-neutral-600">
                        {artwork.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-neutral-500">{artwork.style}</p>
                  </div>
                  <Price amount={artwork.price} variant="inline" />
                </div>
                <p className="text-xs text-neutral-500">{artwork.size}</p>

                {!PRICES_DISABLED &&
                  (artwork.available ? (
                    cartMap[artwork.id] ? (
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => removeOne(artwork.id)}
                          className="flex h-8 w-8 items-center justify-center border border-neutral-300 text-sm transition hover:bg-neutral-50"
                        >
                          −
                        </button>
                        <span className="text-sm font-medium">
                          {cartMap[artwork.id]}
                        </span>
                        <button
                          type="button"
                          onClick={() => addToCart(artwork.id)}
                          className="flex h-8 w-8 items-center justify-center border border-neutral-300 text-sm transition hover:bg-neutral-50"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => addToCart(artwork.id)}
                        className="w-full border border-neutral-900 px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
                      >
                        Add to Cart
                      </button>
                    )
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="w-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-400"
                    >
                      Sold Out
                    </button>
                  ))}
              </div>
            </article>
          ))}
        </div>
      </main>

      <SiteFooter />

      {/* Cart Panel */}
      {!PRICES_DISABLED && (
        <CartPanel
          items={cartItems}
          totalItems={totalItems}
          totalPrice={totalPrice}
          isOpen={cartOpen}
          onToggle={() => setCartOpen((prev) => !prev)}
          onAdd={(id) => addToCart(id)}
          onRemove={(id) => removeOne(id)}
          onDelete={deleteFromCart}
        />
      )}
    </div>
  );
}
