"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const items = [
  {
    q: "O que é a Neuro Business?",
    a: "Uma comunidade/ecossistema de aprendizado e aplicação estratégica para empreendedores, com foco em neuromarketing, comportamento, percepção, comunicação e crescimento.",
  },
  {
    q: "É apenas para negócios digitais?",
    a: "Não. O conteúdo e as análises podem ser aplicados em empresas físicas e digitais.",
  },
  {
    q: "Preciso entender de neuromarketing?",
    a: "Não. Os conceitos serão apresentados de forma progressiva e aplicável.",
  },
  {
    q: "O Método S.E.P. está incluído?",
    a: "Sim. Os membros terão acesso ao Sistema de Engenharia da Percepção® como uma das metodologias centrais do ecossistema.",
  },
  {
    q: "Tem mentoria e acompanhamento?",
    a: "Sim. O ecossistema inclui mentoria mensal e acompanhamento estratégico de crescimento: o negócio é revisado, questionado e ajustado ao longo do tempo — não apenas assistido em aulas.",
  },
  {
    q: "Teremos aulas novas?",
    a: "Sim. A Neuro Business possui uma proposta de evolução contínua, com novos temas, análises e experiências.",
  },
  {
    q: "Posso participar mesmo estando no início?",
    a: "Sim. O objetivo é ajudar empreendedores em diferentes estágios, desde que estejam dispostos a analisar e aplicar.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="border-t border-hairline px-5 py-20 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="kicker">FAQ</p>
        <h2 className="display mt-4 text-3xl md:text-5xl">Perguntas frequentes</h2>
        <div className="mt-10 divide-y divide-hairline border-y border-hairline">
          {items.map((item, i) => (
            <button
              key={item.q}
              type="button"
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full py-5 text-left"
              aria-expanded={open === i}
            >
              <span className="flex items-start justify-between gap-4">
                <span className="font-medium text-paper">{item.q}</span>
                <ChevronDown
                  size={18}
                  strokeWidth={1.5}
                  className={`mt-0.5 shrink-0 text-signal transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </span>
              {open === i && <p className="mt-3 max-w-[58ch] text-sm leading-6 text-quiet">{item.a}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
