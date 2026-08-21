import { ProcessRail } from "./ProcessRail";

const traditional = ["Assiste", "Anota", "Fecha a aula", "Não aplica"];
const neuro = ["Aprende", "Analisa", "Observa casos", "Aplica", "Discute", "Mede", "Evolui"];

export function ComparisonSection() {
  return (
    <section className="border-t border-hairline px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">Diferencial</p>
        <h2 className="display mt-4 text-3xl md:text-5xl">Duas formas de aprender. Só uma evolui o negócio.</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <p className="mono text-[10px] text-quiet">Conhecimento tradicional</p>
            <div className="mt-6 opacity-70">
              <ProcessRail steps={traditional.map((label) => ({ label }))} />
            </div>
          </div>
          <div>
            <p className="mono text-[10px] text-signal">Experiência Neuro Business</p>
            <div className="mt-6">
              <ProcessRail steps={neuro.map((label) => ({ label }))} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
