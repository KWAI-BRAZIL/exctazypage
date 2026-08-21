export function NeuralField({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1200 700"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="#3a7fbf" strokeOpacity="0.28" strokeWidth="1">
        <path d="M160 420 C 300 200, 520 160, 600 260 S 860 420, 1040 300" />
        <path d="M90 260 C 280 310, 430 90, 610 170 S 900 100, 1120 220" />
      </g>
      {[
        [180, 250], [470, 230], [600, 150], [760, 210], [1040, 250],
        [240, 430], [620, 390], [980, 400],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2" fill="#3a7fbf" fillOpacity="0.7" />
      ))}
    </svg>
  );
}
