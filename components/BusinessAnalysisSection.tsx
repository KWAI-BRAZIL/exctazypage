import { CTA_LABEL, WHATSAPP } from "@/lib/constants";

const scores = [
  { label: "Clareza", value: 82 },
  { label: "Confiança", value: 54 },
  { label: "Desejo", value: 76 },
  { label: "Autoridade", value: 61 },
  { label: "Atrito", value: 68 },
  { label: "Valor percebido", value: 59 },
];

export function BusinessAnalysisSection() {
  return (
    <section id="raio-x" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">Raio-X de operações</p>
        <h2 className="display mt-4 max-w-3xl text-3xl text-white md:text-5xl">
          Vamos abrir negócios e descobrir o que o cliente realmente está vendo.
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass rounded-[28px] p-7">
            <p className="text-xs tracking-[0.18em] text-blue">EMPRESA ANALISADA</p>
            <p className="mt-2 text-xl font-semibold text-white">Operação fictícia · exemplo didático</p>
            <div className="mt-8 rounded-3xl border border-blue/20 bg-black/40 p-6 text-center">
              <p className="text-xs tracking-[0.2em] text-muted">NEURO BUSINESS SCORE</p>
              <p className="display mt-2 text-6xl text-blue">72<span className="text-2xl text-muted"> / 100</span></p>
            </div>
            <div className="mt-6 space-y-4">
              {scores.map((score) => (
                <div key={score.label}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="uppercase tracking-wide text-muted">{score.label}</span>
                    <span className="text-white">{score.value}</span>
                  </div>
                  <div className="score-bar">
                    <span style={{ width: `${score.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <article className="glass rounded-[28px] p-7">
              <p className="text-xs tracking-[0.18em] text-blue">DIAGNÓSTICO</p>
              <p className="mt-3 leading-7 text-muted">
                A empresa possui um produto desejável. Porém, existem sinais insuficientes de confiança e diferenciação. O cliente demonstra interesse, mas encontra dificuldade para justificar racionalmente a escolha.
              </p>
            </article>
            <article className="glass rounded-[28px] p-7">
              <p className="text-xs tracking-[0.18em] text-blue">HIPÓTESE ESTRATÉGICA</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-white">Aumentar</p>
                  <p className="mt-2 text-sm text-muted">prova · clareza · autoridade</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Reduzir</p>
                  <p className="mt-2 text-sm text-muted">excesso de informação · fricção · comparação por preço</p>
                </div>
              </div>
            </article>
            <a href={WHATSAPP.consultants} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
              {CTA_LABEL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
