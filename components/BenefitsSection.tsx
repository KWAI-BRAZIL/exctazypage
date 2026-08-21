import { Brain, GraduationCap, Microscope } from "lucide-react";

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
    <section className="border-t border-hairline px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">O que você vai encontrar</p>
        <h2 className="display mt-4 max-w-3xl text-3xl md:text-5xl">
          Dentro da Neuro Business, o aprendizado não fica parado.
        </h2>
        <div className="mt-12 grid gap-px bg-hairline lg:grid-cols-3">
          <article className="bg-ink p-6 md:p-7">
            <Brain size={20} strokeWidth={1.5} className="text-signal" />
            <h3 className="mt-4 text-lg font-medium text-paper">Neuromarketing aplicado</h3>
            <p className="mt-3 text-sm leading-6 text-quiet">
              Entenda como princípios de atenção, emoção, memória, confiança, percepção e tomada de decisão podem ser aplicados em negócios reais.
            </p>
          </article>
          <article className="bg-ink p-6 md:p-7">
            <GraduationCap size={20} strokeWidth={1.5} className="text-signal" />
            <h3 className="mt-4 text-lg font-medium text-paper">Aulas mensais</h3>
            <p className="mt-3 text-sm leading-6 text-quiet">
              Todos os meses, novos encontros e aulas aprofundando temas estratégicos.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {themes.map((theme) => (
                <span key={theme} className="border border-hairline px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-quiet">
                  {theme}
                </span>
              ))}
            </div>
          </article>
          <article className="bg-ink p-6 md:p-7">
            <Microscope size={20} strokeWidth={1.5} className="text-signal" />
            <h3 className="mt-4 text-lg font-medium text-paper">Análise de operações</h3>
            <p className="mt-3 text-sm leading-6 text-quiet">
              Empresas e operações reais poderão ser analisadas.
            </p>
            <p className="mono mt-5 text-[10px] text-signal">Exemplos</p>
            <p className="mt-2 text-sm text-paper/90">{analyses.join(" · ")}</p>
            <p className="mono mt-5 text-[10px] text-signal">A análise pode observar</p>
            <p className="mt-2 text-sm text-paper/90">{observe.join(" · ")}</p>
          </article>
        </div>
        <p className="display mx-auto mt-12 max-w-3xl text-center text-2xl md:text-3xl">
          Às vezes você não precisa de uma nova estratégia. Precisa descobrir onde a estratégia atual está quebrando.
        </p>
      </div>
    </section>
  );
}
