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
    <section className="px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
        <article className="glass rounded-[28px] p-7">
          <h2 className="display text-2xl text-white md:text-3xl">A Neuro Business é para você que:</h2>
          <ul className="mt-6 space-y-3 text-sm text-white/90">
            {yes.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-[28px] border border-white/10 bg-white/3 p-7">
          <h2 className="display text-2xl text-white md:text-3xl">Talvez não seja para você se:</h2>
          <ul className="mt-6 space-y-3 text-sm text-muted">
            {no.map((item) => (
              <li key={item}>✕ {item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
