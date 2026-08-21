import Link from "next/link";
import { LogoLink } from "./Logo";
import { CTA_LABEL, WHATSAPP } from "@/lib/constants";

const links = [
  { href: "/ecossistema#ecossistema", label: "Ecossistema" },
  { href: "/ecossistema#metodo", label: "Método S.E.P." },
  { href: "/ecossistema#raio-x", label: "Raio-X" },
  { href: "/ecossistema#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <LogoLink />
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-blue">
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={WHATSAPP.consultants}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary !min-h-10 !px-4 !text-[11px]"
        >
          {CTA_LABEL}
        </a>
      </div>
    </header>
  );
}
