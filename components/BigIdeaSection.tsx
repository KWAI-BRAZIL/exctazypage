const company = ["Premium", "Autoridade", "Qualidade", "Confiança", "Especialização"];
const client = ["Genérico?", "Caro?", "Confuso?", "Arriscado?", "Igual aos outros?"];

export function BigIdeaSection() {
  return (
    <section className="border-t border-hairline px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">A grande ideia</p>
        <h2 className="display mt-4 max-w-3xl text-3xl md:text-5xl">
          O cérebro não compra apenas produtos. Ele compra interpretações.
        </h2>

        <div className="mt-12 grid items-stretch md:grid-cols-[1fr_72px_1fr]">
          <div className="border-y border-hairline py-6 md:border-y-0 md:pr-8">
            <p className="mono text-[10px] text-quiet">O que a empresa acredita que transmite</p>
            <ul className="mt-6 space-y-0">
              {company.map((item) => (
                <li key={item} className="border-b border-hairline py-3 text-right text-lg text-paper md:text-xl">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative hidden md:flex" aria-hidden="true">
            <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-hairline" />
            <span className="absolute left-1/2 top-[12%] h-8 w-px -translate-x-1/2 bg-ink" />
            <span className="absolute left-1/2 top-[38%] h-8 w-px -translate-x-1/2 bg-ink" />
            <span className="absolute left-1/2 top-[62%] h-8 w-px -translate-x-1/2 bg-ink" />
            <span className="absolute left-1/2 top-[8%] -translate-x-1/2 -rotate-90 whitespace-nowrap font-mono text-[9px] tracking-[0.22em] text-signal">
              Distância de percepção
            </span>
          </div>

          <div className="border-y border-hairline py-6 md:border-y-0 md:pl-8">
            <p className="mono text-[10px] text-signal">O que o cliente realmente percebe</p>
            <ul className="mt-6">
              {client.map((item) => (
                <li key={item} className="border-b border-hairline py-3 text-lg italic text-quiet md:text-xl">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-quiet">
          Existe uma diferença entre o valor que sua empresa entrega e o valor que o cliente consegue perceber. A Neuro Business existe para ajudar empreendedores a reduzir essa distância.
        </p>
      </div>
    </section>
  );
}
