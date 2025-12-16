import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-[var(--font-display)] text-5xl tracking-tight text-neutral-900">
            Get in Touch
          </h1>
          <p className="text-lg text-neutral-600">
            Inquiries about available works, commissions, and studio visits
          </p>
        </div>

        <div className="mb-20 grid gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-sm uppercase tracking-wider text-neutral-500">
                Email
              </h2>
              <a
                href="mailto:studio@ateliepaslauski.com"
                className="text-lg text-neutral-900 hover:text-neutral-600"
              >
                studio@ateliepaslauski.com
              </a>
            </div>

            <div>
              <h2 className="mb-4 text-sm uppercase tracking-wider text-neutral-500">
                Phone
              </h2>
              <a
                href="tel:+351000000000"
                className="text-lg text-neutral-900 hover:text-neutral-600"
              >
                +351 000 000 000
              </a>
            </div>

            <div>
              <h2 className="mb-4 text-sm uppercase tracking-wider text-neutral-500">
                Studio Location
              </h2>
              <p className="text-lg text-neutral-900">
                Lisbon, Portugal
                <br />
                <span className="text-base text-neutral-600">
                  Visits by appointment only
                </span>
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-sm uppercase tracking-wider text-neutral-500">
                Hours
              </h2>
              <p className="text-neutral-900">
                Tuesday – Saturday
                <br />
                10:00 – 18:00
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="mb-6 text-sm uppercase tracking-wider text-neutral-500">
              Send a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-neutral-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-neutral-300 px-4 py-2 text-neutral-900 transition focus:border-neutral-900 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-neutral-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-neutral-300 px-4 py-2 text-neutral-900 transition focus:border-neutral-900 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm text-neutral-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full border border-neutral-300 px-4 py-2 text-neutral-900 transition focus:border-neutral-900 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-neutral-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full resize-none border border-neutral-300 px-4 py-2 text-neutral-900 transition focus:border-neutral-900 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full border border-neutral-900 px-8 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="border-t border-neutral-200 pt-16">
          <h2 className="mb-6 text-center font-[var(--font-display)] text-2xl tracking-tight text-neutral-900">
            Before You Reach Out
          </h2>
          <div className="mx-auto max-w-2xl space-y-4 text-neutral-600">
            <p>
              To help us respond quickly and accurately to your inquiry, please
              include:
            </p>
            <ul className="space-y-2 pl-6">
              <li className="list-disc">
                Which pieces you're interested in or the type of work you're
                looking for
              </li>
              <li className="list-disc">
                Your budget range and preferred dimensions
              </li>
              <li className="list-disc">
                Your location for shipping estimates
              </li>
              <li className="list-disc">
                Any framing preferences or special requirements
              </li>
            </ul>
            <p className="pt-4">
              We typically respond within 24-48 hours. For urgent inquiries,
              please call the studio directly.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-block text-sm text-neutral-600 hover:text-neutral-900"
          >
            ← Back to Collection
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
