import { ImageIcon } from "lucide-react";

/**
 * A clearly-labeled placeholder box, used until a real photo or dashboard
 * screenshot is dropped into the path shown. Never renders a generated
 * or stock image in its place.
 */
export function ImagePlaceholder({
  label,
  path,
  src,
  className = "",
}: {
  label: string;
  path?: string;
  src?: string;
  className?: string;
}) {
  const imageSrc = src ?? path;

  if (imageSrc) {
    return <img src={imageSrc} alt={label} className={`block h-full w-full object-cover ${className}`} />;
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 border border-dashed border-line bg-paper-dim px-6 py-10 text-center ${className}`}
    >
      <ImageIcon size={20} className="text-slate-light" />
      <p className="text-sm text-slate">{label}</p>
      {path && <p className="font-mono text-xs text-slate-light">{path}</p>}
    </div>
  );
}
