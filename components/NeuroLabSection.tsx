import { ProcessRail } from "./ProcessRail";

const steps = ["Observar", "Analisar", "Criar hipótese", "Aplicar", "Medir", "Otimizar"];

export function NeuroLabSection() {
  return (
    <section className="border-t border-hairline px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">Neuro Business Lab</p>
        <h2 className="display mt-4 max-w-3xl text-3xl md:text-5xl">
          Aqui, estratégia não é opinião. É hipótese, teste, aprendizado e evolução.
        </h2>
        <p className="mt-5 max-w-3xl text-quiet">
          Dentro da comunidade serão estudados cases reais, campanhas, páginas, ofertas, produtos, estratégias, comportamentos e decisões de compra.
        </p>
        <div className="mt-12">
          <ProcessRail steps={steps.map((caption) => ({ label: caption, caption }))} />
        </div>
      </div>
    </section>
  );
}
