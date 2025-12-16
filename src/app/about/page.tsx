import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-6 py-16">
        {/* Artist Photo & Bio */}
        <div className="mb-20 grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
            <Image
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
              alt="Artist portrait"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <p className="mb-2 text-sm uppercase tracking-wider text-neutral-500">
                About the Artist
              </p>
              <h1 className="mb-6 font-[var(--font-display)] text-4xl tracking-tight text-neutral-900">
                Ana Paslauski
              </h1>
            </div>

            <div className="space-y-4 text-neutral-600">
              <p>
                Based in Lisbon, Ana Paslauski creates contemporary paintings
                that explore the interplay between light, texture, and form. Her
                work captures fleeting moments of stillness and motion through
                layered compositions.
              </p>

              <p>
                Working primarily with oil, ink, and mineral pigments, Ana's
                process is deeply intuitive. Each piece begins with gestural
                marks that evolve through careful layering, allowing the canvas
                to breathe beneath translucent glazes.
              </p>

              <p>
                Her Atlantic Nocturnes series draws inspiration from coastal
                light patterns, while her recent Structures collection
                investigates architectural forms through warm, earthy palettes.
              </p>

              <p>
                Ana holds an MFA from the Royal College of Art, London. Her work
                has been exhibited in galleries across Europe and is held in
                private collections worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Studio & Process */}
        <div className="mb-20 border-t border-neutral-200 pt-16">
          <h2 className="mb-8 font-[var(--font-display)] text-3xl tracking-tight text-neutral-900">
            Studio & Process
          </h2>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4 text-neutral-600">
              <h3 className="text-lg font-medium text-neutral-900">
                The Studio
              </h3>
              <p>
                The Lisbon studio overlooks a quiet courtyard in Alfama, where
                natural light filters through large north-facing windows. This
                consistent, diffused light is essential to Ana's process,
                allowing her to work with subtle tonal shifts and delicate
                glazing techniques.
              </p>

              <p>
                The space is intentionally minimal—white walls, concrete floors,
                and organized materials create an environment where the work can
                speak without distraction.
              </p>
            </div>

            <div className="space-y-4 text-neutral-600">
              <h3 className="text-lg font-medium text-neutral-900">
                The Process
              </h3>
              <p>
                Each painting begins with loose gestural marks in charcoal or
                ink, mapping out compositional rhythms. Oil paint is then
                applied in thin, translucent layers, building depth gradually
                over weeks or months.
              </p>

              <p>
                Ana uses a limited palette of earth tones, indigos, and neutral
                grays, mixing custom colors from mineral pigments. The slow
                drying time of oil allows for subtle blending and reworking,
                creating atmospheric depth.
              </p>
            </div>
          </div>
        </div>

        {/* Studio Visit CTA */}
        <div className="border-t border-neutral-200 pt-16 text-center">
          <h2 className="mb-4 font-[var(--font-display)] text-2xl tracking-tight text-neutral-900">
            Visit the Studio
          </h2>
          <p className="mb-8 text-neutral-600">
            Studio visits are available by appointment. View works in person and
            discuss commissions or specific pieces.
          </p>
          <Link
            href="/contact"
            className="inline-block border border-neutral-900 px-8 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
          >
            Get in Touch
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
