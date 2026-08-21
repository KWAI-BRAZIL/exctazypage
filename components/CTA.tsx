import { CTA_LABEL, WHATSAPP } from "@/lib/constants";
import { NeuralField } from "./NeuralField";

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden px-5 py-24">
      <NeuralField />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="kicker">Última decisão</p>
        <h2 className="display mt-4 text-3xl text-white md:text-5xl">
          Seu cliente já está formando uma opinião sobre sua empresa. A questão é: você está participando dessa construção?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-muted">
          Antes de investir mais para ser visto. Antes de aumentar o tráfego. Antes de criar mais conteúdo. Entenda como o seu negócio está sendo percebido.
        </p>
        <div className="mt-8 flex justify-center">
          <a href={WHATSAPP.consultants} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {CTA_LABEL}
          </a>
        </div>
        <p className="mt-5 text-sm text-muted">
          Um ecossistema para empreendedores que querem transformar percepção em vantagem competitiva.
        </p>
      </div>
    </section>
  );
}
