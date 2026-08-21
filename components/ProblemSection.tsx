const items = [
  "Mais tráfego.",
  "Mais seguidores.",
  "Mais conteúdo.",
  "Mais vendedores.",
  "Mais leads.",
];

const fails = [
  "Oferta confusa",
  "Comunicação fraca",
  "Baixa confiança",
  "Pouca diferenciação",
  "Experiência inconsistente",
  "Valor percebido baixo",
];

export function ProblemSection() {
  return (
    <section className="border-t border-hairline px-5 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="kicker">O problema</p>
          <h2 className="display mt-4 text-3xl md:text-5xl">Você pode estar tentando escalar um problema.</h2>
          <p className="mt-6 text-quiet">Muitos empreendedores acreditam que precisam de:</p>
          <ul className="mt-5 divide-y divide-hairline border-y border-hairline">
            {items.map((item) => (
              <li key={item} className="py-3 text-paper">{item}</li>
            ))}
          </ul>
        </div>
        <aside className="plate p-7 md:p-8">
          <p className="text-lg leading-8 text-paper">
            Mas existe uma pergunta que quase ninguém faz:
            <span className="mt-3 block italic text-signal">O que acontece na mente do cliente quando ele encontra sua empresa?</span>
          </p>
          <div className="mt-6 space-y-3 text-sm leading-6 text-quiet">
            <p>Antes de comprar, o cérebro interpreta.</p>
            <p>Antes de comparar preço, ele percebe.</p>
            <p>Antes de confiar, ele procura sinais.</p>
            <p>Antes de decidir, ele reduz riscos.</p>
          </div>
          <p className="mt-6 text-sm leading-6 text-quiet">
            Se o seu negócio transmite pouca clareza, pouca confiança ou pouco valor percebido, colocar mais pessoas no funil pode apenas ampliar o problema.
          </p>
          <div className="mt-8 border-t border-hairline pt-6">
            <p className="mono text-[10px] text-signal">Mais tráfego</p>
            <p className="mt-2 text-sm text-quiet">Não corrige automaticamente:</p>
            <ul className="mt-4 space-y-2">
              {fails.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-paper">
                  <span className="mt-[9px] h-px w-4 shrink-0 bg-hairline" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
