const nodes = [
  { icon: "🧠", label: "Neuromarketing" },
  { icon: "📊", label: "Análises de operações" },
  { icon: "🎯", label: "Método S.E.P." },
  { icon: "🔥", label: "Estudos de casos" },
  { icon: "📚", label: "Aulas mensais" },
  { icon: "🔬", label: "Diagnósticos estratégicos" },
  { icon: "💬", label: "Comunidade de empreendedores" },
  { icon: "⚡", label: "Desafios de aplicação" },
  { icon: "📈", label: "Estratégias de crescimento" },
  { icon: "🔎", label: "Raio-X de negócios" },
];

export function EcosystemSection() {
  return (
    <section id="ecossistema" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">O ecossistema</p>
        <h2 className="display mt-4 max-w-3xl text-3xl text-white md:text-5xl">
          Isto não é apenas uma comunidade. É um ambiente contínuo de evolução empresarial.
        </h2>
        <div className="relative mt-12 overflow-hidden rounded-[32px] border border-blue/15 bg-[#050b14] p-6 md:p-10">
          <div className="mx-auto mb-8 max-w-sm rounded-full border border-blue/40 bg-blue/10 px-6 py-5 text-center shadow-[0_0_50px_rgba(126,200,255,0.18)]">
            <p className="text-xs tracking-[0.24em] text-blue">CENTRO</p>
            <p className="display mt-1 text-2xl text-white">NEURO BUSINESS</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {nodes.map((node) => (
              <div key={node.label} className="glass-soft rounded-2xl px-4 py-4 text-sm text-white">
                <span className="mr-2">{node.icon}</span>
                {node.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
