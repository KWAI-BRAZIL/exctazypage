export function NeuralField({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1200 700"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="20%" r="50%">
          <stop offset="0%" stopColor="#7ec8ff" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#7ec8ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="600" cy="90" rx="380" ry="140" fill="url(#glow)" />
      <g stroke="#7ec8ff" strokeOpacity="0.22" strokeWidth="1">
        <path className="orbit-line" d="M140 420 C 280 180, 520 140, 600 250 S 860 430, 1060 280" />
        <path className="orbit-line" d="M80 250 C 260 300, 420 80, 610 160 S 900 90, 1140 210" />
        <path className="orbit-line" d="M180 560 C 360 430, 540 620, 720 470 S 980 390, 1120 520" />
      </g>
      {[
        [180, 250], [310, 180], [470, 230], [600, 140], [760, 200],
        [920, 160], [1040, 250], [240, 430], [430, 480], [620, 390],
        [810, 450], [980, 400], [150, 540], [700, 560], [1080, 520],
      ].map(([x, y], i) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 3.4 : 2.2}
          fill="#7ec8ff"
          style={{ animation: `pulse-node ${2.4 + (i % 5) * 0.4}s ease-in-out ${i * 0.12}s infinite` }}
        />
      ))}
    </svg>
  );
}
