const traditional = ["Assiste", "Anota", "Fecha a aula", "Não aplica"];
const neuro = ["Aprende", "Analisa", "Observa casos", "Aplica", "Discute", "Mede", "Evolui"];

export function ComparisonSection() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">Diferencial</p>
        <h2 className="display mt-4 text-3xl text-white md:text-5xl">Duas formas de aprender. Só uma evolui o negócio.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 p-7">
            <p className="text-xs tracking-[0.18em] text-muted">CONHECIMENTO TRADICIONAL</p>
            <ul className="mt-5 space-y-3 text-muted">
              {traditional.map((item) => (
                <li key={item}>{item} <span className="block text-blue/50">↓</span></li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-[28px] p-7">
            <p className="text-xs tracking-[0.18em] text-blue">EXPERIÊNCIA NEURO BUSINESS</p>
            <ul className="mt-5 space-y-3 text-white">
              {neuro.map((item) => (
                <li key={item}>{item} <span className="block text-blue">↓</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
