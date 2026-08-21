const pillars = [
  {
    letter: "S",
    title: "Sintonia Cognitiva",
    line: "Antes de convencer, você precisa entender.",
    study: [
      "comportamento do consumidor",
      "emoções",
      "necessidades",
      "desejos",
      "medos",
      "objeções",
      "linguagem",
      "atenção",
      "tomada de decisão",
      "heurísticas",
      "vieses cognitivos",
    ],
    deliver: "MAPA COGNITIVO",
    question: "Como o cérebro do meu cliente interpreta este problema?",
  },
  {
    letter: "E",
    title: "Engenharia da Percepção",
    line: "Descubra como sua empresa está sendo interpretada.",
    study: [
      "marca",
      "oferta",
      "comunicação",
      "Instagram",
      "site",
      "página de vendas",
      "atendimento",
      "WhatsApp",
      "autoridade",
      "provas",
      "preço",
      "experiência",
      "jornada do cliente",
    ],
    deliver: "MAPA DE PERCEPÇÃO",
    question: "O que o cliente percebe antes de decidir comprar?",
  },
  {
    letter: "P",
    title: "Projeção Estratégica",
    line: "Agora a percepção deixa de ser acidental.",
    study: [
      "comunicação",
      "oferta",
      "posicionamento",
      "autoridade",
      "provas",
      "experiência",
      "conteúdo",
      "scripts",
      "funis",
      "páginas",
      "jornada",
    ],
    deliver: "PLANO DE PROJEÇÃO ESTRATÉGICA",
    question: "Como queremos que o mercado passe a perceber esta empresa?",
  },
];

export function SEPMethodSection() {
  return (
    <section id="metodo" className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">Método S.E.P.®</p>
        <h2 className="display mt-4 max-w-3xl text-3xl text-white md:text-5xl">
          O método que está no centro da Neuro Business.
        </h2>
        <p className="mt-3 text-xl text-blue">S.E.P.® · Sistema de Engenharia da Percepção®</p>
        <p className="mt-5 max-w-3xl text-muted">
          O S.E.P. é um método criado para analisar e projetar a forma como o mercado percebe uma empresa antes mesmo da decisão de compra. O método possui três pilares.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
          {["ENTENDER", "ANALISAR", "PROJETAR"].map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <span className="rounded-full border border-blue/40 bg-blue/10 px-4 py-2 font-semibold tracking-[0.16em] text-blue">
                {["S", "E", "P"][i]} · {step}
              </span>
              {i < 2 && <span className="hidden text-blue md:inline">↓</span>}
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.letter} className="glass rounded-[28px] p-6">
              <div className="display text-5xl text-blue">{pillar.letter}</div>
              <h3 className="mt-3 text-xl font-semibold text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm text-muted">{pillar.line}</p>
              <p className="mt-5 text-xs tracking-[0.16em] text-blue">ESTUDO DE</p>
              <p className="mt-2 text-sm leading-6 text-white/85">{pillar.study.join("; ")}.</p>
              <p className="mt-5 text-xs tracking-[0.16em] text-blue">ENTREGA</p>
              <p className="mt-2 font-semibold text-white">{pillar.deliver}</p>
              <p className="mt-4 text-sm italic text-muted">{pillar.question}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
