import { Badge } from "@/components/ui/badge";
import { buttonClasses } from "@/components/ui/button";
import { journalEntries } from "@/lib/data";

export function JournalPreview() {
  return (
    <section className="space-y-4 rounded-xl border border-slate-200/80 bg-white/80 p-6 shadow-[0_12px_36px_rgba(20,30,55,0.1)]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-1">
          <Badge variant="contrast">Journal</Badge>
          <h3 className="text-2xl font-[var(--font-display)] text-slate-900">
            Notes from the studio
          </h3>
        </div>
        <a
          href="/journal"
          className={buttonClasses({ variant: "ghost", size: "sm" })}
        >
          Read more
        </a>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {journalEntries.map((entry) => (
          <article
            key={entry.title}
            className="rounded-lg border border-slate-100 bg-slate-50/60 p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Studio note
            </p>
            <h4 className="text-lg font-semibold text-slate-900">
              {entry.title}
            </h4>
            <p className="text-sm text-slate-600">{entry.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
