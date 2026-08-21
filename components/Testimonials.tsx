export function Testimonials() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">Prova e resultados</p>
        <h2 className="display mt-4 max-w-3xl text-3xl text-white md:text-5xl">
          Quando a percepção muda, a conversa com o mercado também muda.
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <article className="rounded-[28px] border border-white/10 p-6">
            <p className="text-xs tracking-[0.18em] text-muted">ANTES</p>
            <p className="mt-3 text-sm leading-6 text-muted">
              “Minha empresa tinha tráfego, mas as pessoas comparavam apenas preço.”
            </p>
          </article>
          <article className="glass rounded-[28px] p-6">
            <p className="text-xs tracking-[0.18em] text-blue">DEPOIS</p>
            <p className="mt-3 text-sm leading-6 text-white">
              “Percebemos que o problema estava na comunicação e na ausência de elementos de confiança.”
            </p>
          </article>
          <article className="rounded-[28px] border border-blue/20 bg-blue/8 p-6">
            <p className="text-xs tracking-[0.18em] text-blue">MUDANÇA</p>
            <p className="mt-3 text-sm leading-6 text-white">
              Oferta reestruturada + provas reposicionadas + comunicação simplificada.
            </p>
          </article>
        </div>
        <p className="mt-6 text-center text-xs text-muted">
          Espaço preparado para depoimentos, cases, prints e análises antes/depois de membros da Neuro Business.
        </p>
      </div>
    </section>
  );
}
