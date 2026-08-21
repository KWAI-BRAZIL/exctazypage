import { CTA_LABEL, WHATSAPP } from "@/lib/constants";

export function WhatsAppButton({ href = WHATSAPP.consultants }: { href?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={CTA_LABEL}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition hover:scale-105"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M20.5 3.5A11 11 0 0 0 2.1 17.4L1 23l5.8-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.4.7.7-3.3-.2-.3a9.1 9.1 0 1 1 7.8 4.4Zm5-6.8c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.1-.3c0-.1 0-.3-.1-.4s-.6-1.4-.8-1.9-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3s-.8.8-.8 1.9.8 2.2.9 2.3a13.5 13.5 0 0 0 5.2 4.4c.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.6-.7 1.9-1.3s.3-1.2.2-1.3-.3-.2-.6-.3Z" />
      </svg>
    </a>
  );
}
