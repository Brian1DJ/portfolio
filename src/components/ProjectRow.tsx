import { ExternalLink } from "lucide-react";
import type { Project } from "../config/site";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line py-4 first:border-t-0">
      <div>
        <p className="text-sm font-medium text-ink">{project.title}</p>
        <p className="mt-0.5 font-mono text-xs text-slate-light">{project.tools.join(" · ")}</p>
      </div>
      {project.links.github && (
        <a
          href={project.links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm text-slate transition-colors hover:text-ledger"
        >
          GitHub
          <ExternalLink size={13} />
        </a>
      )}
    </div>
  );
}
