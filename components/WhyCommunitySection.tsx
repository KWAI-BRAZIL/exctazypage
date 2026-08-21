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
    <section className="border-t border-hairline px-5 py-20 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="kicker">Por que uma comunidade?</p>
        <h2 className="display mt-4 text-3xl md:text-5xl">Porque estratégia muda. E seu negócio também.</h2>
        <p className="mt-6 text-quiet">Um curso termina. Uma aula acaba. Uma estratégia pode funcionar hoje e deixar de funcionar amanhã.</p>
        <p className="mt-4 text-quiet">
          A Neuro Business foi criada como um ambiente contínuo. Você não entra apenas para assistir um conteúdo. Você entra para acompanhar:
        </p>
        <ul className="mt-8 divide-y divide-hairline border-y border-hairline">
          {points.map((item) => (
            <li key={item} className="py-3 font-mono text-xs uppercase tracking-[0.16em] text-paper">
              {item}
            </li>
          ))}
        </ul>
        <p className="display mt-10 text-2xl italic text-signal">
          Seu negócio muda. Sua forma de pensar também precisa evoluir.
        </p>
      </div>
    </section>
  );
}
