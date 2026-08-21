import Link from "next/link";
import { Logo } from "./Logo";
import { CTA_LABEL, INSTAGRAM, WHATSAPP } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo size="sm" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-quiet">
            Um ecossistema para empreendedores que querem transformar percepção em vantagem competitiva.
          </p>
        </div>
        <div className="grid gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-quiet">
          <Link href="/ecossistema" className="hover:text-signal">Ecossistema</Link>
          <Link href="/servicos" className="hover:text-signal">Contratar serviços</Link>
          <Link href="/metodo-sep.html" className="hover:text-signal">Método S.E.P.®</Link>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-signal">Instagram</a>
          <a href={WHATSAPP.consultants} target="_blank" rel="noopener noreferrer" className="hover:text-signal">{CTA_LABEL}</a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl font-mono text-[10px] uppercase tracking-[0.12em] text-quiet">
        Método S.E.P.® — Sistema de Engenharia da Percepção. Criado por Nara Batista · Arcano Digital LTDA · CNPJ 63.745.900/0001-88
      </p>
    </footer>
  );
}
