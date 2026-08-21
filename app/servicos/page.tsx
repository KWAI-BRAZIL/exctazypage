import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { NeuralField } from "@/components/NeuralField";
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
      <main className="relative overflow-hidden px-5 py-20">
        <NeuralField />
        <section className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto flex justify-center">
            <Logo size="md" />
          </div>
          <p className="kicker mt-8">Contratar nossos serviços</p>
          <h1 className="display mt-4 text-4xl text-white md:text-5xl">
            Antes de investir mais para ser visto, entenda como o seu negócio está sendo percebido.
          </h1>
          <p className="mt-5 text-muted">
            Atendimento estratégico para empreendedores que querem clareza, confiança, desejo e conversão com base em como o cliente realmente interpreta a empresa.
          </p>
          <ul className="mt-8 space-y-3 text-left">
            {services.map((item) => (
              <li key={item} className="glass-soft rounded-2xl px-4 py-3 text-sm text-white">
                ✓ {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
