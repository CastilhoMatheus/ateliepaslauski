import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Badge } from "@/components/ui/badge";
import { buttonClasses } from "@/components/ui/button";
import { journalEntries } from "@/lib/data";

export default function JournalPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10 px-6 pb-16 pt-12">
      <SiteHeader accentLabel="Journal" />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-2">
          <Badge variant="contrast">Journal</Badge>
          <h1 className="text-4xl font-[var(--font-display)] text-slate-900">
            Notes from the studio
          </h1>
          <p className="text-base text-slate-600">
            Process reflections, paper tests, and the music (or silence) behind
            the paintings.
          </p>
        </div>
        <Link href="/contact" className={buttonClasses({ variant: "outline" })}>
          Join collector list
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {journalEntries.map((entry) => (
          <article
            key={entry.title}
            className="rounded-lg border border-slate-200/80 bg-white/80 p-5 shadow-[0_12px_32px_rgba(20,30,55,0.1)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Studio note
            </p>
            <h2 className="text-xl font-semibold text-slate-900">
              {entry.title}
            </h2>
            <p className="text-sm text-slate-600">{entry.summary}</p>
            <Link
              href="/contact"
              className="text-sm font-semibold text-slate-900 underline-offset-4 hover:underline"
            >
              Discuss this
            </Link>
          </article>
        ))}
      </div>

      <SiteFooter />
    </div>
  );
}
