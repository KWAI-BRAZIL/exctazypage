import { BookOpen, LineChart, PencilRuler, ScanSearch } from "lucide-react";
import { ProcessRail } from "./ProcessRail";

const weeks = [
  { week: "Semana 1", icon: BookOpen, title: "Novo conhecimento", text: "Aula ou tema estratégico." },
  { week: "Semana 2", icon: ScanSearch, title: "Análise", text: "Raio-X de empresas ou operações." },
  { week: "Semana 3", icon: PencilRuler, title: "Aplicação", text: "Desafio estratégico para implementar no próprio negócio." },
  { week: "Semana 4", icon: LineChart, title: "Evolução", text: "Discussão, análise, aprendizados e próximos ajustes." },
];

export function MonthlyExperienceSection() {
  return (
    <section className="border-t border-hairline px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">A experiência mensal</p>
        <h2 className="display mt-4 max-w-3xl text-3xl md:text-5xl">Todo mês, seu negócio ganha novos estímulos.</h2>
        <div className="mt-12">
          <ProcessRail
            steps={weeks.map((item) => ({
              label: item.week,
              caption: item.title,
            }))}
          />
        </div>
        <div className="mt-8 grid gap-px bg-hairline md:grid-cols-4">
          {weeks.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.week} className="bg-ink p-5">
                <Icon size={20} strokeWidth={1.5} className="text-signal" />
                <h3 className="mt-4 text-lg font-medium text-paper">{item.title}</h3>
                <p className="mt-2 text-sm text-quiet">{item.text}</p>
              </article>
            );
          })}
        </div>
        <p className="mt-10 text-center text-quiet">A ideia não é acumular conhecimento. É criar um ciclo contínuo:</p>
        <div className="mt-6">
          <ProcessRail
            steps={[
              { label: "Aprender" },
              { label: "Analisar" },
              { label: "Aplicar" },
              { label: "Evoluir" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
