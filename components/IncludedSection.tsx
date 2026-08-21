const included = [
  "Mentoria mensal",
  "Acompanhamento estratégico e de crescimento",
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
    <section className="border-t border-hairline px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">O que está incluso</p>
        <h2 className="display mt-4 max-w-3xl text-3xl md:text-5xl">
          Ao entrar na Neuro Business você terá acesso a:
        </h2>
        <ul className="mt-12 grid sm:grid-cols-2">
          {included.map((item) => (
            <li key={item} className="flex items-start gap-4 border-t border-hairline py-4 text-sm text-paper">
              <span className="mt-2 h-px w-5 shrink-0 bg-signal" />
              {item}
            </li>
          ))}
        </ul>
        <p className="display mx-auto mt-12 max-w-3xl text-center text-2xl">
          Você não entra para receber mais conteúdo. Você entra para desenvolver uma nova forma de enxergar o seu negócio.
        </p>
      </div>
    </section>
  );
}
