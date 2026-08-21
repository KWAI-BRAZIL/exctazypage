import Link from "next/link";
import { Logo } from "./Logo";
import { CTA_LABEL, INSTAGRAM, WHATSAPP } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo size="sm" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Um ecossistema para empreendedores que querem transformar percepção em vantagem competitiva.
          </p>
        </div>
        <div className="grid gap-2 text-sm text-muted">
          <Link href="/ecossistema" className="hover:text-blue">Ecossistema</Link>
          <Link href="/servicos" className="hover:text-blue">Contratar serviços</Link>
          <Link href="/metodo-sep.html" className="hover:text-blue">Método S.E.P.®</Link>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-blue">Instagram</a>
          <a href={WHATSAPP.consultants} target="_blank" rel="noopener noreferrer" className="hover:text-blue">{CTA_LABEL}</a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-muted/70">
        Método S.E.P.® — Sistema de Engenharia da Percepção. Criado por Nara Batista · Arcano Digital LTDA · CNPJ 63.745.900/0001-88
      </p>
    </footer>
  );
}
