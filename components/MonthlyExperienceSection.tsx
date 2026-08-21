const weeks = [
  { week: "Semana 1", icon: "🧠", title: "Novo conhecimento", text: "Aula ou tema estratégico." },
  { week: "Semana 2", icon: "🔬", title: "Análise", text: "Raio-X de empresas ou operações." },
  { week: "Semana 3", icon: "⚡", title: "Aplicação", text: "Desafio estratégico para implementar no próprio negócio." },
  { week: "Semana 4", icon: "📊", title: "Evolução", text: "Discussão, análise, aprendizados e próximos ajustes." },
];

export function MonthlyExperienceSection() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">A experiência mensal</p>
        <h2 className="display mt-4 max-w-3xl text-3xl text-white md:text-5xl">Todo mês, seu negócio ganha novos estímulos.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {weeks.map((item) => (
            <article key={item.week} className="glass rounded-[24px] p-5">
              <p className="text-xs tracking-[0.18em] text-blue">{item.week.toUpperCase()}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{item.icon} {item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-muted">A ideia não é acumular conhecimento. É criar um ciclo contínuo:</p>
        <p className="mt-3 text-center text-sm font-semibold tracking-[0.14em] text-blue">
          APRENDER → ANALISAR → APLICAR → EVOLUIR
        </p>
      </div>
    </section>
  );
}
