const SCORES = [
  { label: "Clareza", value: 82 },
  { label: "Confiança", value: 54 },
  { label: "Desejo", value: 76 },
  { label: "Autoridade", value: 61 },
  { label: "Atrito", value: 68 },
  { label: "Valor percebido", value: 59 },
];

const CX = 160;
const CY = 160;
const R = 112;

function point(index: number, value: number, n = 6) {
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / n;
  const r = (value / 100) * R;
  return [CX + r * Math.cos(angle), CY + r * Math.sin(angle)] as const;
}

function ring(value: number) {
  return SCORES.map((_, i) => point(i, value).join(",")).join(" ");
}

export function RadarChart() {
  const polygon = SCORES.map((s, i) => point(i, s.value).join(",")).join(" ");
  const axes = SCORES.map((_, i) => point(i, 100));

  return (
    <svg viewBox="0 0 320 320" className="h-full w-full" role="img" aria-label="Raio-X com seis indicadores de percepção">
      {[40, 70, 100].map((v) => (
        <polygon key={v} points={ring(v)} fill="none" stroke="#3a342c" strokeWidth="1" />
      ))}
      {axes.map(([x, y], i) => (
        <line key={SCORES[i].label} x1={CX} y1={CY} x2={x} y2={y} stroke="#3a342c" strokeWidth="1" />
      ))}
      <polygon points={polygon} fill="rgba(62,95,122,0.22)" stroke="#3e5f7a" strokeWidth="1.4" />
      {SCORES.map((s, i) => {
        const [x, y] = point(i, s.value);
        const [lx, ly] = point(i, 118);
        return (
          <g key={s.label}>
            <circle cx={x} cy={y} r="3.2" fill="#3e5f7a" />
            <text
              x={lx}
              y={ly}
              textAnchor="middle"
              fill="#9a9184"
              fontSize="9"
              fontFamily="var(--font-plex-mono), ui-monospace, monospace"
              letterSpacing="0.12em"
            >
              {s.label.toUpperCase()} {s.value}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function ScoreRing({ value = 72 }: { value?: number }) {
  const r = 68;
  const c = 2 * Math.PI * r;
  const dash = (value / 100) * c;

  return (
    <div className="relative mx-auto h-44 w-44">
      <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
        <circle cx="80" cy="80" r={r} fill="none" stroke="#3a342c" strokeWidth="2" />
        <circle
          cx="80"
          cy="80"
          r={r}
          fill="none"
          stroke="#3e5f7a"
          strokeWidth="2.4"
          strokeDasharray={`${dash} ${c}`}
          strokeLinecap="square"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="mono text-[10px] text-quiet">Neuro Business Score</p>
        <p className="display mt-1 text-5xl text-paper">
          {value}
          <span className="ml-1 font-mono text-base text-quiet">/ 100</span>
        </p>
      </div>
    </div>
  );
}
