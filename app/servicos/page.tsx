import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { CTA_LABEL, WHATSAPP } from "@/lib/constants";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const services = [
  "Diagnóstico de percepção da marca e da oferta",
  "Raio-X de funil, página e comunicação",
  "Reestruturação de posicionamento e valor percebido",
  "Aplicação do Método S.E.P.® no seu negócio",
  "Análise de operação física ou digital",
];

export default function ServicosPage() {
  return (
    <div className="neural-bg min-h-screen">
      <Header />
      <WhatsAppButton />
      <main className="px-5 py-20">
        <section className="mx-auto max-w-3xl">
          <Logo size="md" />
          <p className="kicker mt-8">Contratar nossos serviços</p>
          <h1 className="display mt-4 text-4xl md:text-5xl">
            Antes de investir mais para ser visto, entenda como o seu negócio está sendo percebido.
          </h1>
          <p className="mt-5 text-quiet">
            Atendimento estratégico para empreendedores que querem clareza, confiança, desejo e conversão com base em como o cliente realmente interpreta a empresa.
          </p>
          <ul className="mt-8">
            {services.map((item) => (
              <li key={item} className="flex gap-4 border-t border-hairline py-3 text-sm text-paper">
                <span className="mt-2 h-px w-5 shrink-0 bg-signal" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-8">
            <a href={WHATSAPP.consultants} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {CTA_LABEL}
            </a>
            <Link href="/ecossistema" className="btn-ghost">
              Conhecer o ecossistema
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
