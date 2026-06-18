type SectionTitleProps = {
  eyebrow?: string;
  title: string;
};

export function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <div className="mb-4 px-1 text-ink">
      {eyebrow ? (
        <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-red">
          / {eyebrow}
        </p>
      ) : null}
      <h2 className="text-xl font-black tracking-normal text-ink">{title}</h2>
    </div>
  );
}
