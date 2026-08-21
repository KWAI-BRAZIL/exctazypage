import Link from "next/link";
import { LogoLink } from "./Logo";
import { CTA_LABEL, WHATSAPP } from "@/lib/constants";

const links = [
  { href: "/ecossistema#beneficios", label: "Ecossistema" },
  { href: "/ecossistema#metodo", label: "Método S.E.P." },
  { href: "/ecossistema#raio-x", label: "Raio-X" },
  { href: "/ecossistema#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <LogoLink />
        <nav className="hidden items-center gap-6 font-mono text-[11px] uppercase tracking-[0.16em] text-quiet md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-signal">
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={WHATSAPP.consultants}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary !min-h-9 !px-3 !text-[10px]"
        >
          {CTA_LABEL}
        </a>
      </div>
    </header>
  );
}
