import {
  BarChart3,
  Brain,
  FileSearch,
  LineChart,
  MessagesSquare,
  Repeat,
  ScanLine,
  ScanSearch,
  Target,
  TrendingUp,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

const nodes: { icon: LucideIcon; label: string }[] = [
  { icon: Brain, label: "Neuromarketing" },
  { icon: BarChart3, label: "Análises de operações" },
  { icon: Target, label: "Método S.E.P." },
  { icon: FileSearch, label: "Estudos de casos" },
  { icon: UsersRound, label: "Mentoria mensal" },
  { icon: TrendingUp, label: "Acompanhamento estratégico" },
  { icon: ScanLine, label: "Diagnósticos estratégicos" },
  { icon: MessagesSquare, label: "Comunidade de empreendedores" },
  { icon: Repeat, label: "Desafios de aplicação" },
  { icon: LineChart, label: "Estratégias de crescimento" },
  { icon: ScanSearch, label: "Raio-X de negócios" },
];

export function EcosystemSection() {
  return (
    <section id="ecossistema" className="border-t border-hairline px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">O ecossistema</p>
        <h2 className="display mt-4 max-w-3xl text-3xl md:text-5xl">
          Isto não é apenas uma comunidade. É um ambiente contínuo de evolução empresarial.
        </h2>
        <div className="relative mt-12 border border-hairline bg-plate p-6 md:p-10">
          <div className="mx-auto mb-10 max-w-sm border border-hairline px-6 py-5 text-center">
            <p className="mono text-[10px] text-signal">Centro</p>
            <p className="display mt-1 text-2xl">NEURO BUSINESS</p>
          </div>
          <div className="grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
            {nodes.map((node) => {
              const Icon = node.icon;
              return (
                <div key={node.label} className="flex items-center gap-3 bg-plate px-4 py-4 text-sm text-paper">
                  <Icon size={20} strokeWidth={1.5} className="shrink-0 text-signal" />
                  {node.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
