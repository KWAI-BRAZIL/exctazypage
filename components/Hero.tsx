import Link from "next/link";
import { CTA_LABEL, WHATSAPP } from "@/lib/constants";
import { NeuralField } from "./NeuralField";

const nodes = [
  { label: "Empresas", x: "8%", y: "22%" },
  { label: "Estratégias", x: "82%", y: "18%" },
  { label: "Dados", x: "12%", y: "72%" },
  { label: "Percepção", x: "78%", y: "68%" },
  { label: "Comportamento", x: "50%", y: "8%" },
  { label: "Crescimento", x: "50%", y: "86%" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-16 md:pt-24">
      <NeuralField />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="reveal">
          <p className="kicker">Neuro Business</p>
          <h1 className="display mt-4 max-w-3xl text-4xl text-white md:text-6xl">
            Seu negócio pode não precisar de mais marketing.
            <span className="block text-blue">Pode precisar ser melhor percebido.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
            Antes de investir mais em anúncios, conteúdo ou vendas, descubra como o cérebro do seu cliente interpreta sua empresa.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            A Neuro Business é um ecossistema de evolução para empreendedores que querem transformar percepção em valor, desejo, confiança e crescimento.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={WHATSAPP.consultants} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {CTA_LABEL}
            </a>
            <Link href="#ecossistema" className="btn-ghost">
              Conhecer o ecossistema
            </Link>
          </div>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-md">
          <div className="glass absolute inset-0 rounded-[32px]" />
          <svg className="absolute inset-6 h-[calc(100%-48px)] w-[calc(100%-48px)]" viewBox="0 0 320 360" fill="none" aria-hidden="true">
            <path className="orbit-line" d="M160 180 C 80 90, 70 70, 40 70" stroke="#7ec8ff" strokeOpacity="0.4" />
            <path className="orbit-line" d="M160 180 C 240 80, 250 60, 280 55" stroke="#7ec8ff" strokeOpacity="0.4" />
            <path className="orbit-line" d="M160 180 C 60 220, 50 270, 40 300" stroke="#7ec8ff" strokeOpacity="0.4" />
            <path className="orbit-line" d="M160 180 C 250 230, 270 270, 280 305" stroke="#7ec8ff" strokeOpacity="0.4" />
            <path className="orbit-line" d="M160 180 C 160 90, 160 50, 160 28" stroke="#7ec8ff" strokeOpacity="0.4" />
            <path className="orbit-line" d="M160 180 C 160 250, 160 300, 160 332" stroke="#7ec8ff" strokeOpacity="0.4" />
            <ellipse cx="160" cy="178" rx="54" ry="64" fill="rgba(126,200,255,0.08)" stroke="#7ec8ff" strokeOpacity="0.7" />
            <path d="M160 120 C 130 125, 118 155, 122 178 C 126 205, 142 228, 160 232 C 178 228, 194 205, 198 178 C 202 155, 190 125, 160 120 Z" stroke="#7ec8ff" strokeWidth="1.4" />
            <path d="M160 128 V 224" stroke="#7ec8ff" strokeOpacity="0.4" />
          </svg>
          <div className="absolute left-1/2 top-1/2 z-10 w-36 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-blue">CÉREBRO</p>
            <p className="mt-1 text-sm text-white">decisão · percepção</p>
          </div>
          {nodes.map((node) => (
            <div
              key={node.label}
              className="glass-soft absolute z-10 rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wide text-blue"
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
