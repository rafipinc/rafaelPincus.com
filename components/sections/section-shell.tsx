type SectionShellProps = {
  kicker: string;
  labelledBy: string;
  children: React.ReactNode;
};

export function SectionShell({
  kicker,
  labelledBy,
  children,
}: SectionShellProps) {
  return (
    <section
      aria-labelledby={labelledBy}
      className="border-b border-border py-16 sm:py-20"
    >
      <div className="grid gap-8 md:grid-cols-[180px_1fr] md:gap-10">
        <div className="font-mono text-xs tracking-[0.06em] text-accent">
          {kicker}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
