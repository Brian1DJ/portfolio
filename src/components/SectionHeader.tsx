import type { ReactNode } from "react";

/**
 * Every content section is framed like a labeled record: a short field
 * name on the left, the actual heading and any meta note beneath it,
 * content on the right. Reused by About, Skills, Projects, Process,
 * Learning, and Contact so the page reads as one coherent system.
 */
export function SectionHeader({
  field,
  title,
  note,
}: {
  field: string;
  title: string;
  note?: ReactNode;
}) {
  return (
    <div className="col-span-12 md:col-span-3">
      <p className="font-mono text-xs tracking-tight text-slate-light">{field}</p>
      <h2 className="mt-2 text-2xl font-semibold text-ink md:text-[28px]">{title}</h2>
      {note ? <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate">{note}</p> : null}
    </div>
  );
}
