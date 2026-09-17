import { ArrowUpRight, ExternalLink, FileText } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { BarChart3 } from "lucide-react";
import { ImagePlaceholder } from "./ImagePlaceholder";
import type { Project } from "../config/site";

export function ProjectCard({
  project,
  onViewCaseStudy,
}: {
  project: Project;
  onViewCaseStudy: (project: Project) => void;
}) {
  return (
    <div className="border border-line bg-paper p-6 transition-colors hover:border-slate-light md:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
            {project.status === "in-progress" && (
              <span className="rounded-[var(--radius-card)] bg-paper-dim px-2 py-0.5 font-mono text-[11px] text-slate">
                in progress
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-slate-light">{project.category}</p>
        </div>
      </div>

      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tools.map((tool, i) => (
          <span key={tool} className="font-mono text-xs text-slate-light">
            {tool}
            {i < project.tools.length - 1 && <span className="ml-1.5">·</span>}
          </span>
        ))}
      </div>

      <ImagePlaceholder
        label={`${project.title} — dashboard preview`}
        path={`public/dashboards/${project.slug}.png`}
        src={project.previewImage}
        className="mt-5 aspect-video w-full"
      />

      <div className="mt-5 flex flex-wrap items-center gap-3">
        {project.caseStudy && (
          <button
            type="button"
            onClick={() => onViewCaseStudy(project)}
            className="inline-flex items-center gap-1.5 rounded-[var(--radius-card)] bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-ledger"
          >
            View case study
            <ArrowUpRight size={15} />
          </button>
        )}
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-[var(--radius-card)] border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-ledger hover:text-ledger"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        )}
        {project.links.tableau && (
          <a
            href={project.links.tableau}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-[var(--radius-card)] border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-ledger hover:text-ledger"
          >
            <BarChart3 size={15} />
            Tableau
            <ExternalLink size={13} />
          </a>
        )}
        {project.links.academia && (
          <a
            href={project.links.academia}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-[var(--radius-card)] border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-ledger hover:text-ledger"
          >
            <FileText size={15} />
            Read paper
            <ExternalLink size={13} />
          </a>
        )}
      </div>
    </div>
  );
}
