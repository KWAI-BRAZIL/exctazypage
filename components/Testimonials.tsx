export function Testimonials() {
  return (
    <section className="border-t border-hairline px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="kicker">Prova e resultados</p>
        <h2 className="display mt-4 max-w-3xl text-3xl md:text-5xl">
          Quando a percepção muda, a conversa com o mercado também muda.
        </h2>
        <div className="mt-12 grid gap-px bg-hairline lg:grid-cols-3">
          <article className="bg-ink p-6">
            <p className="mono text-[10px] text-quiet">Antes</p>
            <p className="mt-4 text-sm leading-6 text-quiet">
              “Minha empresa tinha tráfego, mas as pessoas comparavam apenas preço.”
            </p>
          </article>
          <article className="bg-ink p-6">
            <p className="mono text-[10px] text-signal">Depois</p>
            <p className="mt-4 text-sm leading-6 text-paper">
              “Percebemos que o problema estava na comunicação e na ausência de elementos de confiança.”
            </p>
          </article>
          <article className="bg-plate p-6">
            <p className="mono text-[10px] text-signal">Mudança</p>
            <p className="mt-4 text-sm leading-6 text-paper">
              Oferta reestruturada + provas reposicionadas + comunicação simplificada.
            </p>
          </article>
        </div>
        <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-quiet">
          Espaço preparado para depoimentos, cases, prints e análises antes/depois de membros da Neuro Business.
        </p>
      </div>
    </section>
  );
}
