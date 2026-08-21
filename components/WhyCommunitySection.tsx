const points = [
  "novas análises",
  "novos estudos",
  "novos casos",
  "novas aplicações",
  "novas discussões",
  "novos aprendizados",
];

export function WhyCommunitySection() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="kicker">Por que uma comunidade?</p>
        <h2 className="display mt-4 text-3xl text-white md:text-5xl">Porque estratégia muda. E seu negócio também.</h2>
        <p className="mt-6 text-muted">Um curso termina. Uma aula acaba. Uma estratégia pode funcionar hoje e deixar de funcionar amanhã.</p>
        <p className="mt-4 text-muted">
          A Neuro Business foi criada como um ambiente contínuo. Você não entra apenas para assistir um conteúdo. Você entra para acompanhar:
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {points.map((item) => (
            <span key={item} className="glass-soft rounded-full px-4 py-2 text-sm text-white">{item}</span>
          ))}
        </div>
        <p className="display mt-10 text-2xl text-blue">
          Seu negócio muda. Sua forma de pensar também precisa evoluir.
        </p>
      </div>
    </section>
  );
}
