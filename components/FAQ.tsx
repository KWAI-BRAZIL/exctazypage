"use client";

import { useState } from "react";

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
    <section id="faq" className="px-5 py-20">
      <div className="mx-auto max-w-3xl">
        <p className="kicker">FAQ</p>
        <h2 className="display mt-4 text-3xl text-white md:text-5xl">Perguntas frequentes</h2>
        <div className="mt-8 space-y-3">
          {items.map((item, i) => (
            <button
              key={item.q}
              type="button"
              onClick={() => setOpen(open === i ? -1 : i)}
              className="glass w-full rounded-2xl p-5 text-left"
            >
              <p className="font-semibold text-white">{item.q}</p>
              {open === i && <p className="mt-3 text-sm leading-6 text-muted">{item.a}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
