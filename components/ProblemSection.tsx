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
    <section className="px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="kicker">O problema</p>
          <h2 className="display mt-4 text-3xl text-white md:text-5xl">Você pode estar tentando escalar um problema.</h2>
          <p className="mt-6 text-muted">Muitos empreendedores acreditam que precisam de:</p>
          <ul className="mt-4 grid gap-2 text-white">
            {items.map((item) => (
              <li key={item} className="glass-soft rounded-xl px-4 py-3">{item}</li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-[28px] p-7">
          <p className="text-lg leading-8 text-white">
            Mas existe uma pergunta que quase ninguém faz:
            <span className="mt-3 block text-blue">O que acontece na mente do cliente quando ele encontra sua empresa?</span>
          </p>
          <div className="mt-6 space-y-3 text-sm leading-6 text-muted">
            <p>Antes de comprar, o cérebro interpreta.</p>
            <p>Antes de comparar preço, ele percebe.</p>
            <p>Antes de confiar, ele procura sinais.</p>
            <p>Antes de decidir, ele reduz riscos.</p>
          </div>
          <p className="mt-6 text-sm leading-6 text-muted">
            Se o seu negócio transmite pouca clareza, pouca confiança ou pouco valor percebido, colocar mais pessoas no funil pode apenas ampliar o problema.
          </p>
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-xs font-bold tracking-[0.2em] text-blue">MAIS TRÁFEGO</p>
            <p className="mt-2 text-sm text-muted">Não corrige automaticamente:</p>
            <ul className="mt-3 space-y-1 text-sm text-white">
              {fails.map((item) => (
                <li key={item}>→ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
