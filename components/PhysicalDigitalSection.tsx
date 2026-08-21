export function PhysicalDigitalSection() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">Negócios físicos e digitais</p>
        <h2 className="display mt-4 max-w-3xl text-3xl text-white md:text-5xl">
          O cenário muda. O cérebro continua humano.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="glass rounded-[28px] p-7">
            <h3 className="text-xl font-semibold text-white">Negócios físicos</h3>
            <p className="mt-3 text-sm text-muted">Restaurantes · Clínicas · Lojas · Academias · Imobiliárias · Serviços</p>
            <p className="mt-5 text-xs tracking-[0.16em] text-blue">ANALISAR</p>
            <p className="mt-2 text-sm text-white/85">ambiente · experiência · atendimento · percepção · confiança · jornada</p>
          </article>
          <article className="glass rounded-[28px] p-7">
            <h3 className="text-xl font-semibold text-white">Negócios digitais</h3>
            <p className="mt-3 text-sm text-muted">Infoprodutos · E-commerce · SaaS · Experts · Comunidades</p>
            <p className="mt-5 text-xs tracking-[0.16em] text-blue">ANALISAR</p>
            <p className="mt-2 text-sm text-white/85">funis · páginas · ofertas · criativos · checkout · comunicação</p>
          </article>
        </div>
        <p className="mt-8 text-center text-muted">
          O objetivo é entender como cada ponto de contato influencia a decisão.
        </p>
      </div>
    </section>
  );
}
