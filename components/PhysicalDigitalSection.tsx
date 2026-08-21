export function PhysicalDigitalSection() {
  return (
    <section className="border-t border-hairline px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">Negócios físicos e digitais</p>
        <h2 className="display mt-4 max-w-3xl text-3xl md:text-5xl">
          O cenário muda. O cérebro continua humano.
        </h2>
        <div className="mt-12 grid gap-px bg-hairline md:grid-cols-2">
          <article className="bg-ink p-7">
            <h3 className="text-xl font-medium text-paper">Negócios físicos</h3>
            <p className="mt-3 text-sm text-quiet">Restaurantes · Clínicas · Lojas · Academias · Imobiliárias · Serviços</p>
            <p className="mono mt-6 text-[10px] text-signal">Analisar</p>
            <p className="mt-2 text-sm text-paper/90">ambiente · experiência · atendimento · percepção · confiança · jornada</p>
          </article>
          <article className="bg-ink p-7">
            <h3 className="text-xl font-medium text-paper">Negócios digitais</h3>
            <p className="mt-3 text-sm text-quiet">Infoprodutos · E-commerce · SaaS · Experts · Comunidades</p>
            <p className="mono mt-6 text-[10px] text-signal">Analisar</p>
            <p className="mt-2 text-sm text-paper/90">funis · páginas · ofertas · criativos · checkout · comunicação</p>
          </article>
        </div>
        <p className="mt-10 text-center text-quiet">
          O objetivo é entender como cada ponto de contato influencia a decisão.
        </p>
      </div>
    </section>
  );
}
