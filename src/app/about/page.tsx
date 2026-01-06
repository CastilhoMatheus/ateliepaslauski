"use client";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-6 py-16">
        {/* Artist Photo & Bio */}
        <div className="mb-20 grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-3/4 overflow-hidden bg-neutral-100">
            <CldImage
              src="profile"
              alt="Inês Paslauski"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <p className="mb-2 text-sm uppercase tracking-wider text-neutral-500">
                Sobre a artista
              </p>
              <h1 className="mb-6 font-(--font-display) text-4xl tracking-tight text-neutral-900">
                Inês Paslauski
              </h1>
            </div>

            <div className="space-y-4 text-neutral-600">
              <p>
                Natural do interior do Paraná, na cidade de Cascavel, Inês
                Paslauski é artista plástica cuja obra nasce do encontro entre
                memória, sensibilidade e a força expressiva das cores. Desde
                cedo, desenvolveu um olhar atento às misturas cromáticas e às
                sutilezas da luz, construindo de forma intuitiva sua relação com
                a pintura, muito antes de ter acesso a oportunidades formais de
                estudo.
              </p>

              <p>
                Sua trajetória profissional teve início em 1998, com a
                participação em sua primeira exposição coletiva. Em seguida,
                realizou exposições individuais que consolidaram sua linguagem
                artística. Em 2000, apresentou uma exposição solo no Banco do
                Brasil, na cidade de Aripuanã, Mato Grosso — um marco importante
                que ampliou sua visibilidade no cenário artístico. Em 2003,
                participou de sua primeira exposição internacional, abrindo sua
                produção ao diálogo com outros países e públicos, experiência
                que se estendeu a diversas outras mostras nacionais e
                internacionais ao longo dos anos.
              </p>
            </div>
          </div>
        </div>

        {/* Studio & Process */}
        <div className="mb-20 border-t border-neutral-200 pt-16">
          <h2 className="mb-8 font-(--font-display) text-3xl tracking-tight text-neutral-900">
            Ateliê & Processo
          </h2>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4 text-neutral-600">
              <h3 className="text-lg font-medium text-neutral-900">O Ateliê</h3>
              <p>
                Atualmente, mantém seu próprio ateliê, onde desenvolve uma
                produção autoral influenciada pelo impressionismo contemporâneo.
                Suas pinturas não buscam a representação literal da paisagem,
                mas sim registrar impressões sensíveis dos lugares que visita.
                Paisagens, atmosferas e fragmentos de memória se fundem às
                vivências da artista, resultando em obras carregadas de
                movimento, luz e emoção.
              </p>
            </div>

            <div className="space-y-4 text-neutral-600">
              <h3 className="text-lg font-medium text-neutral-900">
                O Processo
              </h3>
              <p>
                Cada pintura de Inês Paslauski é concebida como uma experiência
                contemplativa. Suas obras convidam o observador a uma pausa, a
                um encontro silencioso com o tempo e com a memória. São
                trabalhos que dialogam com espaços sofisticados e coleções que
                valorizam autenticidade, profundidade poética e uma narrativa
                visual atemporal.
              </p>
            </div>
          </div>
        </div>

        {/* Studio Visit CTA */}
        <div className="border-t border-neutral-200 pt-16 text-center">
          <h2 className="mb-4 font-(--font-display) text-2xl tracking-tight text-neutral-900">
            Visite o ateliê
          </h2>
          <p className="mb-8 text-neutral-600">
            Visitas ao ateliê estão disponíveis mediante agendamento. Veja as
            obras pessoalmente e discuta encomendas ou peças específicas.
          </p>
          <Link
            href="/contact"
            className="inline-block border border-neutral-900 px-8 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
          >
            Entre em Contato
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
