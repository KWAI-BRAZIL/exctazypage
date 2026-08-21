import { CTA_LABEL, WHATSAPP } from "@/lib/constants";

export function CTA() {
  return (
    <section id="cta" className="border-t border-hairline px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="kicker">Última decisão</p>
        <h2 className="display mt-4 text-3xl md:text-5xl">
          Seu cliente já está formando uma opinião sobre sua empresa. A questão é: você está participando dessa construção?
        </h2>
        <p className="mt-6 max-w-[62ch] text-quiet">
          Antes de investir mais para ser visto. Antes de aumentar o tráfego. Antes de criar mais conteúdo. Entenda como o seu negócio está sendo percebido.
        </p>
        <div className="mt-10">
          <a href={WHATSAPP.consultants} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {CTA_LABEL}
          </a>
        </div>
        <p className="mt-6 text-sm text-quiet">
          Um ecossistema para empreendedores que querem transformar percepção em vantagem competitiva.
        </p>
      </div>
    </section>
  );
}
