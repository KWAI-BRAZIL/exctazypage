import Link from "next/link";
import { Logo } from "@/components/Logo";
import { NeuralField } from "@/components/NeuralField";
import { CTA_LABEL, WHATSAPP } from "@/lib/constants";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <main className="neural-bg relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10">
      <NeuralField />
      <WhatsAppButton />
      <section className="glass relative z-10 w-full max-w-[560px] rounded-[32px] px-6 py-10 text-center sm:px-10">
        <div className="mx-auto flex justify-center">
          <Logo size="lg" />
        </div>
        <h1 className="display mt-8 text-[28px] text-white sm:text-[34px]">
          O que traz você até aqui?
        </h1>
        <p className="mt-3 text-sm text-muted">
          Escolha o caminho. O ecossistema contínuo ou a contratação dos serviços.
        </p>
        <div className="mt-8 grid gap-3">
          <Link href="/ecossistema" className="btn-outline is-primary">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue/15 text-blue">
              NB
            </span>
            <span className="flex-1 text-left leading-tight">
              Me matricular ao Ecossistema Neurobusiness
            </span>
          </Link>
          <Link href="/servicos" className="btn-outline">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/8 text-white">
              →
            </span>
            <span className="flex-1 text-left leading-tight">Contratar nossos serviços</span>
          </Link>
        </div>
        <a
          href={WHATSAPP.consultants}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex text-sm text-blue hover:underline"
        >
          {CTA_LABEL}
        </a>
      </section>
    </main>
  );
}
