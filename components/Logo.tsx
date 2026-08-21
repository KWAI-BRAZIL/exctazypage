import Link from "next/link";

type LogoSize = "sm" | "md" | "lg";

const sizes: Record<LogoSize, { icon: number; word: string; digital: string; gap: string }> = {
  sm: { icon: 42, word: "text-[19px] sm:text-[21px]", digital: "mt-1 text-[8px]", gap: "gap-2.5" },
  md: { icon: 62, word: "text-[28px] sm:text-[32px]", digital: "mt-1.5 text-[11px]", gap: "gap-3.5" },
  lg: { icon: 86, word: "text-[36px] sm:text-[44px]", digital: "mt-2 text-[13px]", gap: "gap-4" },
};

function BrainMark({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className="shrink-0 drop-shadow-[0_0_14px_rgba(255,31,31,0.35)]"
    >
      <path
        d="M50 16c-11.5-7-29-4.5-36 12.5-2.8-5.5-13-3.8-14.5 7.5-1.5 10.5 5 16.5 13.5 18.2-10.5 5.2-12 21.5-1 30 4.5 3.5 10 4.6 15.2 3.6-4 8.2 2.4 19.2 14.8 20.2 8.2.7 15.2-3.6 18-10.8"
        stroke="#FF1F1F"
        strokeWidth="5.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 38c9.5-2.8 16.5 1.6 15.5 10.5M22 58c11-3 18 2.4 16.2 12"
        stroke="#FF1F1F"
        strokeWidth="5.2"
        strokeLinecap="round"
      />
      <path d="M50 16.5v67" stroke="#FF1F1F" strokeWidth="5.2" strokeLinecap="round" />
      <g stroke="#FF1F1F" strokeWidth="5.2" strokeLinecap="round">
        <path d="M50 26 L79 17" />
        <path d="M50 38 L88 34" />
        <path d="M50 50 L82 50" />
        <path d="M50 62 L88 66" />
        <path d="M50 72 L80 80" />
        <path d="M50 82 L70 90" />
      </g>
      <g fill="#FF1F1F">
        <circle cx="79" cy="17" r="4.6" />
        <circle cx="88" cy="34" r="4.6" />
        <circle cx="82" cy="50" r="4.6" />
        <circle cx="88" cy="66" r="4.6" />
        <circle cx="80" cy="80" r="4.6" />
        <circle cx="70" cy="90" r="4.6" />
      </g>
    </svg>
  );
}

type LogoProps = {
  className?: string;
  size?: LogoSize;
};

export function Logo({ className = "", size = "md" }: LogoProps) {
  const s = sizes[size];

  return (
    <div className={`inline-flex items-center ${s.gap} ${className}`}>
      <BrainMark size={s.icon} />
      <div className="flex min-w-0 flex-col">
        <p className={`whitespace-nowrap font-sans font-extrabold leading-none tracking-[-0.045em] ${s.word}`}>
          <span className="text-[#FF1F1F]">Neuro</span>
          <span className="text-white">business</span>
        </p>
        <p
          className={`flex w-full justify-between font-sans font-bold leading-none text-[#FF1F1F] ${s.digital}`}
          aria-label="Digital"
        >
          {"DIGITAL".split("").map((letter, i) => (
            <span key={`${letter}-${i}`}>{letter}</span>
          ))}
        </p>
      </div>
    </div>
  );
}

export function LogoLink({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="Neuro Business">
      <Logo size="sm" />
    </Link>
  );
}
