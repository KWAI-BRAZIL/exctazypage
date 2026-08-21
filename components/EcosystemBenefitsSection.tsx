import Link from "next/link";
import { CTA_LABEL, WHATSAPP } from "@/lib/constants";

const highlights = [
  {
    title: "Mentoria mensal",
    text: "Encontros para revisar o seu negócio, tirar decisões do escuro e aplicar o Método S.E.P.® com direção. Não é aula genérica: é orientação sobre o que o seu mercado está percebendo agora.",
  },
  {
    title: "Acompanhamento estratégico e de crescimento",
    text: "Um ciclo contínuo de leitura, ajuste e evolução. Oferta, comunicação, percepção, funil e experiência são acompanhados para o crescimento deixar de ser tentativa e virar método.",
  },
];

const extras = [
  {
    title: "Método S.E.P.®",
    text: "Sintonia cognitiva, engenharia da percepção e projeção estratégica — o sistema no centro do ecossistema.",
  },
  {
    title: "Raio-X de operações",
    text: "Diagnóstico de clareza, confiança, desejo, autoridade, atrito e valor percebido no seu negócio.",
  },
  {
    title: "Comunidade de empreendedores",
    text: "Ambiente para trocar análises, cases e decisões reais — físicos e digitais — sem fórmula mágica.",
  },
  {
    title: "Aplicação no próprio negócio",
    text: "Desafios, hipóteses e ajustes para o aprendizado virar movimento: aprender, analisar, aplicar e evoluir.",
  },
];

export function EcosystemBenefitsSection() {
  return (
    <section id="beneficios" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">Benefícios do ecossistema</p>
        <h2 className="display mt-4 max-w-3xl text-3xl text-white md:text-5xl">
          Você não entra para consumir conteúdo. Entra para ser acompanhado.
        </h2>
        <p className="mt-5 max-w-3xl text-muted">
          A Neuro Business combina mentoria, método e leitura constante do mercado. O objetivo é reduzir a distância entre o que a sua empresa acredita transmitir e o que o cliente realmente percebe.
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {highlights.map((item) => (
            <article key={item.title} className="glass rounded-[28px] p-7">
              <p className="text-xs tracking-[0.18em] text-blue">PILAR</p>
              <h3 className="display mt-3 text-2xl text-white md:text-3xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {extras.map((item) => (
            <article key={item.title} className="glass-soft rounded-[24px] p-5">
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <a href={WHATSAPP.consultants} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {CTA_LABEL}
          </a>
          <Link href="#ecossistema" className="text-sm text-blue hover:underline">
            Ver o mapa do ecossistema
          </Link>
        </div>
      </div>
    </section>
  );
}
