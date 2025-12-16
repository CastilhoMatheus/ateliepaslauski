import { Badge } from "@/components/ui/badge";
import { buttonClasses } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section className="grid gap-6 rounded-xl border border-slate-200/80 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-800 p-8 text-lime-50 shadow-[0_20px_60px_rgba(10,18,35,0.3)] lg:grid-cols-[1.1fr,0.9fr]">
      <div className="space-y-3">
        <Badge variant="contrast" className="bg-white text-slate-900">
          Schedule
        </Badge>
        <h3 className="text-3xl font-[var(--font-display)] leading-tight">
          Studio visits, commissions, and shipping answers within 24 hours.
        </h3>
        <p className="text-sm text-lime-100/90">
          Write with dimensions, budget, or preferred medium. We hold works for
          24 hours for collectors after a call.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:studio@ateliepaslauski.com"
            className={buttonClasses({
              variant: "subtle",
              className: "bg-lime-100 text-slate-900 hover:bg-white",
            })}
          >
            Email the studio
          </a>
          <a
            href="/contact"
            className={buttonClasses({
              variant: "ghost",
              className: "text-lime-50 hover:bg-white/10",
            })}
          >
            Book a visit
          </a>
        </div>
      </div>
      <div className="rounded-lg border border-white/10 bg-white/5 p-5 text-sm text-lime-100/90 backdrop-blur">
        <ul className="space-y-2">
          <li>• Worldwide shipping with insurance & tracking</li>
          <li>• Custom framing options on request</li>
          <li>• Certificate of authenticity signed by Paslauski</li>
          <li>• Payment plans available</li>
        </ul>
      </div>
    </section>
  );
}
