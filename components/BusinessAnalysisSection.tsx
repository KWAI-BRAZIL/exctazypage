import { CTA_LABEL, WHATSAPP } from "@/lib/constants";
import { RadarChart, ScoreRing } from "./RadarChart";

export function BusinessAnalysisSection() {
  return (
    <section id="raio-x" className="border-t border-hairline px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">Raio-X de operações</p>
        <h2 className="display mt-4 max-w-3xl text-3xl md:text-5xl">
          Vamos abrir negócios e descobrir o que o cliente realmente está vendo.
        </h2>
        <div className="mt-12 grid gap-px bg-hairline lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden bg-ink p-6 md:p-8">
            <div className="scan-line pointer-events-none absolute inset-y-0 left-0 z-10" />
            <p className="mono text-[10px] text-signal">Empresa analisada</p>
            <p className="mt-2 text-xl font-medium text-paper">Operação fictícia · exemplo didático</p>
            <div className="mt-8 grid items-center gap-6 lg:grid-cols-[auto_1fr]">
              <ScoreRing value={72} />
              <div className="h-[280px] min-h-[240px]">
                <RadarChart />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <article className="flex-1 bg-ink p-6 md:p-8">
              <p className="mono text-[10px] text-signal">Diagnóstico</p>
              <p className="mt-3 leading-7 text-quiet">
                A empresa possui um produto desejável. Porém, existem sinais insuficientes de confiança e diferenciação. O cliente demonstra interesse, mas encontra dificuldade para justificar racionalmente a escolha.
              </p>
            </article>
            <article className="flex-1 border-t border-hairline bg-ink p-6 md:p-8">
              <p className="mono text-[10px] text-signal">Hipótese estratégica</p>
              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-paper">Aumentar</p>
                  <p className="mt-2 text-sm text-quiet">prova · clareza · autoridade</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-paper">Reduzir</p>
                  <p className="mt-2 text-sm text-quiet">excesso de informação · fricção · comparação por preço</p>
                </div>
              </div>
            </article>
            <div className="border-t border-hairline bg-ink p-6">
              <a href={WHATSAPP.consultants} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                {CTA_LABEL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
