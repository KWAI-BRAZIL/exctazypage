import Link from "next/link";
import { Briefcase, Network } from "lucide-react";
import { Logo } from "@/components/Logo";
import { NeuralField } from "@/components/NeuralField";
import { CTA_LABEL, WHATSAPP } from "@/lib/constants";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <main className="neural-bg relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10">
      <NeuralField />
      <WhatsAppButton />
      <section className="plate relative z-10 w-full max-w-[520px] px-6 py-10 text-center sm:px-10">
        <div className="mx-auto flex justify-center">
          <Logo size="lg" />
        </div>
        <h1 className="display mt-8 text-[28px] sm:text-[34px]">
          O que traz você até aqui?
        </h1>
        <p className="mt-3 text-sm text-quiet">
          Escolha o caminho. O ecossistema contínuo ou a contratação dos serviços.
        </p>
        <div className="mt-8 grid gap-3">
          <Link href="/ecossistema" className="btn-outline is-primary">
            <Network size={18} strokeWidth={1.5} className="shrink-0 text-signal" />
            <span className="flex-1 text-left leading-tight">
              Me matricular ao Ecossistema Neurobusiness
            </span>
          </Link>
          <Link href="/servicos" className="btn-outline">
            <Briefcase size={18} strokeWidth={1.5} className="shrink-0 text-quiet" />
            <span className="flex-1 text-left leading-tight">Contratar nossos serviços</span>
          </Link>
        </div>
        <a
          href={WHATSAPP.consultants}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex font-mono text-[11px] uppercase tracking-[0.16em] text-signal hover:underline"
        >
          {CTA_LABEL}
        </a>
      </section>
    </main>
  );
}
