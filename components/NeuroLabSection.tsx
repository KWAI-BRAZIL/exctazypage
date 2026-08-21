const steps = ["Observar", "Analisar", "Criar hipótese", "Aplicar", "Medir", "Otimizar"];

export function NeuroLabSection() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">Neuro Business Lab</p>
        <h2 className="display mt-4 max-w-3xl text-3xl text-white md:text-5xl">
          Aqui, estratégia não é opinião. É hipótese, teste, aprendizado e evolução.
        </h2>
        <p className="mt-5 max-w-3xl text-muted">
          Dentro da comunidade serão estudados cases reais, campanhas, páginas, ofertas, produtos, estratégias, comportamentos e decisões de compra.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {steps.map((step, i) => (
            <div key={step} className="glass rounded-2xl p-4 text-center">
              <p className="text-[11px] tracking-[0.2em] text-blue">0{i + 1}</p>
              <p className="mt-2 font-semibold text-white">{step}</p>
              {i < steps.length - 1 && <p className="mt-2 text-blue">↓</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
