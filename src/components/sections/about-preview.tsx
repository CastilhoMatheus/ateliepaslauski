"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { buttonClasses } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <section className="grid gap-6 rounded-xl border border-slate-200/80 bg-white/80 p-6 shadow-[0_14px_40px_rgba(20,30,55,0.12)] lg:grid-cols-[1.1fr,0.9fr]">
      <div className="space-y-4">
        <Badge variant="neutral">About</Badge>
        <h3 className="text-3xl font-[var(--font-display)] text-slate-900">
          Paslauski paints the refraction between stillness and motion.
        </h3>
        <p className="text-base leading-relaxed text-slate-600">
          Working from a Lisbon studio, Paslauski blends oil, ink, and mineral
          pigments to capture Atlantic light. Every work ships with a personal
          note and archival care.
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-slate-700">
          <Chip>Archival materials</Chip>
          <Chip>Framing available</Chip>
          <Chip>Worldwide shipping</Chip>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="/about" className={buttonClasses({ variant: "default" })}>
            Read the full story
          </a>
          <a href="/contact" className={buttonClasses({ variant: "outline" })}>
            Schedule a visit
          </a>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg border border-slate-100/90">
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/15 via-transparent to-lime-100/30" />
        <Image
          src="https://images.unsplash.com/photo-1523419400525-4cfa0001f1a0?auto=format&fit=crop&w=1200&q=80"
          alt="Studio wall"
          width={900}
          height={720}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-4 left-4 rounded-md bg-slate-900/80 px-4 py-2 text-xs font-semibold text-lime-50 shadow">
          Lisbon Atelier — works in progress
        </div>
      </div>
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
      {children}
    </span>
  );
}
