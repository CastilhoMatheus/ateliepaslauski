"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Coleção", href: "/" },
  { label: "Sobre", href: "/about" },
  { label: "Contato", href: "/contact" },
];

export function SiteHeader({
  totalItems = 0,
  onCartClick,
}: {
  totalItems?: number;
  onCartClick?: () => void;
}) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-[var(--font-display)] tracking-tight text-neutral-900"
        >
          Ateliê Paslauski
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive
                    ? "font-medium text-neutral-900"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Cart Button */}
          {onCartClick && (
            <button
              type="button"
              onClick={onCartClick}
              className="relative text-sm text-neutral-600 transition-colors hover:text-neutral-900"
              aria-label="Shopping cart"
            >
              <span className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                  role="img"
                  aria-label="Shopping bag"
                >
                  <title>Shopping bag</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                {totalItems > 0 && (
                  <span className="rounded-full bg-neutral-900 px-1.5 py-0.5 text-xs font-medium text-white">
                    {totalItems}
                  </span>
                )}
              </span>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
