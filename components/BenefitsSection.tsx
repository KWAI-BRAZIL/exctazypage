const themes = [
  "Como aumentar valor percebido",
  "Psicologia da decisão",
  "Como estruturar ofertas",
  "Autoridade e confiança",
  "Neurociência da atenção",
  "Emoção e comportamento",
  "Funis baseados em níveis de consciência",
  "Comunicação persuasiva",
  "Experiência do cliente",
  "Precificação e percepção",
  "Conteúdo estratégico",
  "Estruturação de produtos digitais",
  "Conversão",
  "Branding",
  "Posicionamento",
];

const analyses = [
  "Infoprodutos",
  "E-commerce",
  "Clínicas",
  "Restaurantes",
  "Agências",
  "Prestadores de serviço",
  "SaaS",
  "Lojas físicas",
  "Experts",
  "Negócios locais",
];

const observe = [
  "Produto",
  "Oferta",
  "Comunicação",
  "Funil",
  "Página",
  "Atendimento",
  "Conteúdo",
  "Posicionamento",
  "Valor percebido",
  "Pontos de atrito",
];

export function BenefitsSection() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">O que você vai encontrar</p>
        <h2 className="display mt-4 max-w-3xl text-3xl text-white md:text-5xl">
          Dentro da Neuro Business, o aprendizado não fica parado.
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <article className="glass rounded-[28px] p-6">
            <h3 className="text-lg font-semibold text-white">🧠 Neuromarketing aplicado</h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Entenda como princípios de atenção, emoção, memória, confiança, percepção e tomada de decisão podem ser aplicados em negócios reais.
            </p>
          </article>
          <article className="glass rounded-[28px] p-6">
            <h3 className="text-lg font-semibold text-white">🎓 Aulas mensais</h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Todos os meses, novos encontros e aulas aprofundando temas estratégicos.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {themes.map((theme) => (
                <span key={theme} className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-muted">
                  {theme}
                </span>
              ))}
            </div>
          </article>
          <article className="glass rounded-[28px] p-6">
            <h3 className="text-lg font-semibold text-white">🔬 Análise de operações</h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Empresas e operações reais poderão ser analisadas.
            </p>
            <p className="mt-4 text-xs tracking-[0.16em] text-blue">EXEMPLOS</p>
            <p className="mt-2 text-sm text-white/85">{analyses.join(" · ")}</p>
            <p className="mt-4 text-xs tracking-[0.16em] text-blue">A ANÁLISE PODE OBSERVAR</p>
            <p className="mt-2 text-sm text-white/85">{observe.join(" · ")}</p>
          </article>
        </div>
        <p className="display mx-auto mt-10 max-w-3xl text-center text-2xl text-white md:text-3xl">
          Às vezes você não precisa de uma nova estratégia. Precisa descobrir onde a estratégia atual está quebrando.
        </p>
      </div>
    </section>
  );
}
