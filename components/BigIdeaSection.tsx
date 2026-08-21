const company = ["Premium", "Autoridade", "Qualidade", "Confiança", "Especialização"];
const client = ["Genérico?", "Caro?", "Confuso?", "Arriscado?", "Igual aos outros?"];

export function BigIdeaSection() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">A grande ideia</p>
        <h2 className="display mt-4 max-w-3xl text-3xl text-white md:text-5xl">
          O cérebro não compra apenas produtos. Ele compra interpretações.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="glass rounded-[28px] p-7">
            <p className="text-xs font-bold tracking-[0.18em] text-blue">O QUE A EMPRESA ACREDITA QUE TRANSMITE</p>
            <ul className="mt-5 space-y-3">
              {company.map((item) => (
                <li key={item} className="rounded-xl bg-white/4 px-4 py-3 text-white">{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[28px] border border-red/30 bg-red/8 p-7">
            <p className="text-xs font-bold tracking-[0.18em] text-red">O QUE O CLIENTE REALMENTE PERCEBE</p>
            <ul className="mt-5 space-y-3">
              {client.map((item) => (
                <li key={item} className="rounded-xl bg-black/30 px-4 py-3 text-white">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-muted">
          Existe uma diferença entre o valor que sua empresa entrega e o valor que o cliente consegue perceber. A Neuro Business existe para ajudar empreendedores a reduzir essa distância.
        </p>
      </div>
    </section>
  );
}
