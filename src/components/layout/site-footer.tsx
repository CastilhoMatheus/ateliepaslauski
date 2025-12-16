import Link from "next/link";

const footerLinks = [
  { label: "Collection", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-[var(--font-display)] text-lg text-neutral-900">
              Ateliê Paslauski
            </p>
            <p className="mt-1 text-sm text-neutral-500">Lisbon, Portugal</p>
          </div>

          <nav className="flex gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-600 transition hover:text-neutral-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-neutral-200 pt-8 text-center text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} Ateliê Paslauski. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
