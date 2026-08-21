const included = [
  "Comunidade exclusiva de empreendedores",
  "Conteúdos sobre Neuromarketing",
  "Método S.E.P.®",
  "Aulas e encontros mensais",
  "Análises de negócios e operações",
  "Estudos de casos",
  "Raio-X de ofertas",
  "Análises de funis",
  "Discussões estratégicas",
  "Desafios de aplicação",
  "Conteúdos sobre comportamento do consumidor",
  "Atualizações e novos materiais",
  "Ambiente para troca entre empreendedores",
  "Participação em análises coletivas",
];

export function IncludedSection() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">O que está incluso</p>
        <h2 className="display mt-4 max-w-3xl text-3xl text-white md:text-5xl">
          Ao entrar na Neuro Business você terá acesso a:
        </h2>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {included.map((item) => (
            <div key={item} className="glass-soft rounded-2xl px-4 py-4 text-sm text-white">
              ✓ {item}
            </div>
          ))}
        </div>
        <p className="display mx-auto mt-10 max-w-3xl text-center text-2xl text-white">
          Você não entra para receber mais conteúdo. Você entra para desenvolver uma nova forma de enxergar o seu negócio.
        </p>
      </div>
    </section>
  );
}
