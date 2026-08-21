import Link from "next/link";
import { CTA_LABEL, WHATSAPP } from "@/lib/constants";
import { NeuralField } from "./NeuralField";

const nodes = [
  { label: "Empresas", x: "6%", y: "18%" },
  { label: "Estratégias", x: "78%", y: "14%" },
  { label: "Dados", x: "8%", y: "72%" },
  { label: "Percepção", x: "76%", y: "70%" },
  { label: "Comportamento", x: "42%", y: "6%" },
  { label: "Crescimento", x: "44%", y: "86%" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-16 md:pb-28 md:pt-24">
      <NeuralField />
      <div className="relative mx-auto grid max-w-6xl items-end gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="reveal max-w-3xl">
          <p className="kicker">Neuro Business</p>
          <h1 className="display mt-6 text-[2.4rem] text-paper md:text-6xl">
            Seu negócio pode não precisar de mais marketing.
            <span className="mt-3 block italic text-signal">Pode precisar ser melhor percebido.</span>
          </h1>
          <p className="mt-8 max-w-[62ch] text-base leading-7 text-quiet md:text-lg">
            Antes de investir mais em anúncios, conteúdo ou vendas, descubra como o cérebro do seu cliente interpreta sua empresa.
          </p>
          <p className="mt-4 max-w-[62ch] text-base leading-7 text-quiet">
            A Neuro Business é um ecossistema de evolução para empreendedores que querem transformar percepção em valor, desejo, confiança e crescimento.
          </p>
          <div className="mt-10 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-8">
            <a href={WHATSAPP.consultants} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {CTA_LABEL}
            </a>
            <Link href="#beneficios" className="btn-ghost">
              Conhecer o ecossistema
            </Link>
          </div>
        </div>

        <div className="relative mx-auto hidden h-[380px] w-full max-w-md lg:block">
          <span className="absolute left-1/2 top-8 h-[78%] w-px -translate-x-1/2 bg-hairline" />
          <span className="absolute left-[12%] top-1/2 h-px w-[76%] bg-hairline" />
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="mono text-[10px] text-signal">Cérebro</p>
            <p className="mt-1 text-sm text-paper">decisão · percepção</p>
          </div>
          {nodes.map((node) => (
            <div
              key={node.label}
              className="absolute z-10 font-mono text-[10px] uppercase tracking-[0.16em] text-quiet"
              style={{ left: node.x, top: node.y }}
            >
              {node.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
