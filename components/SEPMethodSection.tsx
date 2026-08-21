import { ProcessRail } from "./ProcessRail";

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
    <section id="metodo" className="border-t border-hairline px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">Método S.E.P.®</p>
        <h2 className="display mt-4 max-w-3xl text-3xl md:text-5xl">
          O método que está no centro da Neuro Business.
        </h2>
        <p className="mt-3 font-mono text-sm tracking-[0.12em] text-signal">S.E.P.® · Sistema de Engenharia da Percepção®</p>
        <p className="mt-5 max-w-3xl text-quiet">
          O S.E.P. é um método criado para analisar e projetar a forma como o mercado percebe uma empresa antes mesmo da decisão de compra. O método possui três pilares.
        </p>

        <div className="mt-10">
          <ProcessRail
            steps={[
              { label: "S · Entender" },
              { label: "E · Analisar" },
              { label: "P · Projetar" },
            ]}
          />
        </div>

        <div className="mt-10 grid gap-px bg-hairline lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.letter} className="group bg-ink p-6 transition-colors hover:bg-plate md:p-7">
              <p className="font-mono text-4xl text-signal">{pillar.letter}</p>
              <h3 className="mt-3 text-xl font-medium text-paper">{pillar.title}</h3>
              <p className="mt-2 text-sm text-quiet">{pillar.line}</p>
              <p className="mono mt-6 text-[10px] text-signal">Estudo de</p>
              <p className="mt-2 text-sm leading-6 text-paper/90">{pillar.study.join("; ")}.</p>
              <p className="mono mt-6 text-[10px] text-signal">Entrega</p>
              <p className="mt-2 font-medium text-paper">{pillar.deliver}</p>
              <p className="mt-4 text-sm italic text-quiet">{pillar.question}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
