const yes = [
  "É empreendedor.",
  "Possui uma empresa física ou digital.",
  "Quer entender melhor o comportamento do cliente.",
  "Está cansado de copiar estratégias sem entender por que funcionam.",
  "Quer melhorar oferta, comunicação e percepção.",
  "Busca crescimento estratégico.",
  "Quer participar de análises e discussões reais.",
  "Quer aprender neuromarketing de forma aplicada.",
  "Entende que marketing não é apenas postar ou anunciar.",
];

const no = [
  "Procura fórmula mágica.",
  "Quer copiar scripts sem entender estratégia.",
  "Acredita que um único gatilho mental resolve vendas.",
  "Não pretende aplicar nada.",
  "Quer apenas assistir aulas passivamente.",
];

export function AudienceSection() {
  return (
    <section className="border-t border-hairline px-5 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl md:grid-cols-2">
        <article className="border-b border-hairline py-2 pr-0 md:border-b-0 md:border-r md:pr-10">
          <p className="mono text-[10px] text-signal">Indicação</p>
          <h2 className="display mt-3 text-2xl md:text-3xl">A Neuro Business é para você que:</h2>
          <ul className="mt-8">
            {yes.map((item) => (
              <li key={item} className="border-t border-hairline py-3 text-sm leading-6 text-paper">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="py-2 md:pl-10">
          <p className="mono text-[10px] text-quiet">Contraindicação</p>
          <h2 className="display mt-3 text-2xl text-quiet md:text-3xl">Talvez não seja para você se:</h2>
          <ul className="mt-8">
            {no.map((item) => (
              <li key={item} className="border-t border-hairline py-3 text-sm leading-6 italic text-quiet">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
