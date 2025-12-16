"use client";

import Image from "next/image";
import type { Artwork } from "@/lib/data";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function CartPanel({
  items,
  totalItems,
  totalPrice,
  isOpen,
  onToggle,
  onAdd,
  onRemove,
  onDelete,
}: {
  items: (Artwork & { quantity: number })[];
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  onToggle: () => void;
  onAdd: (id: string) => void;
  onRemove: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  const isEmpty = items.length === 0;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <button
          type="button"
          onClick={onToggle}
          className="fixed inset-0 z-40 bg-black/20 transition-opacity"
          aria-label="Close cart"
        />
      )}

      {/* Slide-in Panel */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-neutral-200 bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
            <h2 className="text-lg font-medium text-neutral-900">
              Cart {totalItems > 0 && `(${totalItems})`}
            </h2>
            <button
              type="button"
              onClick={onToggle}
              className="text-neutral-500 transition hover:text-neutral-900"
              aria-label="Close cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
                role="img"
                aria-label="Close"
              >
                <title>Close</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {isEmpty ? (
              <p className="text-center text-sm text-neutral-500">
                Your cart is empty
              </p>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4">
                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden bg-neutral-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-neutral-900">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-xs text-neutral-500">
                            {item.size}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onDelete(item.id)}
                          className="text-neutral-400 transition hover:text-neutral-600"
                          aria-label="Remove from cart"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5"
                            role="img"
                            aria-label="Remove"
                          >
                            <title>Remove</title>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18 18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => onRemove(item.id)}
                            className="flex h-7 w-7 items-center justify-center border border-neutral-300 text-sm transition hover:bg-neutral-50"
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="min-w-8 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onAdd(item.id)}
                            className="flex h-7 w-7 items-center justify-center border border-neutral-300 text-sm transition hover:bg-neutral-50"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-sm font-medium text-neutral-900">
                          {currency.format(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {!isEmpty && (
            <div className="border-t border-neutral-200 px-6 py-6">
              <div className="mb-4 flex items-center justify-between text-sm">
                <span className="text-neutral-600">Subtotal</span>
                <span className="text-lg font-medium text-neutral-900">
                  {currency.format(totalPrice)}
                </span>
              </div>
              <p className="mb-4 text-xs text-neutral-500">
                Shipping and taxes calculated at checkout
              </p>
              <button
                type="button"
                className="w-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
