type Step = { label: string; caption?: string };

export function ProcessRail({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative grid gap-6 md:grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
      <span
        aria-hidden="true"
        className="absolute left-3 right-3 top-[13px] hidden h-px bg-hairline md:block"
      />
      {steps.map((step) => (
        <li key={step.label} className="relative">
          <span className="relative z-10 mb-3 block h-[7px] w-[7px] rounded-full bg-signal" />
          <p className="mono text-[10px] text-signal">{step.label}</p>
          {step.caption ? <p className="mt-2 text-sm text-paper">{step.caption}</p> : null}
        </li>
      ))}
    </ol>
  );
}
