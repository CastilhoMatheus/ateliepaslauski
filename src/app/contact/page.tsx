import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-(--font-display) text-5xl tracking-tight text-neutral-900">
            Entre em Contato
          </h1>
          <p className="text-lg text-neutral-600">
            Informações sobre obras disponíveis, encomendas e visitas ao ateliê
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
                Telefone
              </h2>
              <a
                href="tel:+351000000000"
                className="text-lg text-neutral-900 hover:text-neutral-600"
              >
                +55 (47) 99204-5663
              </a>
            </div>

            <div>
              <h2 className="mb-4 text-sm uppercase tracking-wider text-neutral-500">
                Local do Ateliê
              </h2>
              <p className="text-lg text-neutral-900">
                Rio Negrinho, SC, Brasil
                <br />
                <span className="text-base text-neutral-600">
                  Visitas somente com agendamento prévio
                </span>
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-sm uppercase tracking-wider text-neutral-500">
                Horários
              </h2>
              <p className="text-neutral-900">
                Segunda – Sexta
                <br />
                09:00 – 18:00
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="mb-6 text-sm uppercase tracking-wider text-neutral-500">
              Entre em contato
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-neutral-700"
                >
                  Nome
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
                  Assunto
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
                  Mensagem
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
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="border-t border-neutral-200 pt-16">
          <h2 className="mb-6 text-center font-(--font-display) text-2xl tracking-tight text-neutral-900">
            Antes de entrar em contato
          </h2>
          <div className="mx-auto max-w-2xl space-y-4 text-neutral-600">
            <p>
              Para que possamos responder à sua solicitação com rapidez e
              precisão, inclua as seguintes informações:
            </p>
            <ul className="space-y-2 pl-6">
              <li className="list-disc">
                Quais peças lhe interessam ou o tipo de obra que procura
              </li>
              <li className="list-disc">
                Seu orçamento e dimensões preferidas
              </li>
              <li className="list-disc">
                Sua localização para que possamos calcular o frete
              </li>
              <li className="list-disc">
                Quaisquer preferências de moldura ou requisitos especiais
              </li>
            </ul>
            <p className="pt-4">
              Normalmente, respondemos em 24 a 48 horas. Para solicitações
              urgentes, entre em contato diretamente com o estúdio.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-block text-sm text-neutral-600 hover:text-neutral-900"
          >
            ← Voltar a Coleção
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
