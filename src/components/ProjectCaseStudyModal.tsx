import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X, FileText } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { BarChart3 } from "lucide-react";
import { ImagePlaceholder } from "./ImagePlaceholder";
import type { Project } from "../config/site";

export function ProjectCaseStudyModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  // Escape to close, and lock background scroll while the dialog is open
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  const cs = project?.caseStudy;

  return (
    <AnimatePresence>
      {project && cs && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink/40 p-4 py-10 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl border border-line bg-paper p-6 md:p-9"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-slate-light">{project.category}</p>
                <h3 id="case-study-title" className="mt-1 text-2xl font-semibold text-ink">
                  {project.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="shrink-0 text-slate transition-colors hover:text-ink"
              >
                <X size={22} />
              </button>
            </div>

            <div className="mt-6 space-y-7 text-[15px] leading-relaxed text-slate">
              <p>{cs.overview}</p>

              <div>
                <p className="font-mono text-xs text-slate-light">business question</p>
                <p className="mt-1.5 text-ink">{cs.objective}</p>
              </div>

              <div>
                <p className="font-mono text-xs text-slate-light">dataset</p>
                <p className="mt-1.5">{cs.dataset}</p>
              </div>

              <div>
                <p className="font-mono text-xs text-slate-light">data preparation</p>
                <ul className="mt-2 space-y-1.5">
                  {cs.dataPreparation.map((step) => (
                    <li key={step} className="flex gap-2">
                      <span className="text-ledger">–</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {cs.kpis && (
                <div>
                  <p className="font-mono text-xs text-slate-light">key metrics</p>
                  <div className="mt-2 divide-y divide-line border-y border-line">
                    {cs.kpis.map((kpi) => (
                      <div key={kpi.label} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-3">
                        <span className="font-mono text-sm font-medium text-ink">{kpi.label}</span>
                        {kpi.value && (
                          <span className="font-mono text-sm font-semibold text-ledger">{kpi.value}</span>
                        )}
                        <span className="text-sm text-slate">{kpi.definition}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <p className="font-mono text-xs text-slate-light">
                  {cs.findings ? "findings" : "status"}
                </p>
                {cs.findings ? (
                  <ul className="mt-2 space-y-1.5">
                    {cs.findings.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="text-ledger">–</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-1.5">{cs.statusNote}</p>
                )}
              </div>

              <ImagePlaceholder
                label={`${project.title} — dashboard screenshot`}
                path={`src/assets/dashboards/${project.slug}.png`}
                className="aspect-video w-full"
              />
            </div>

            <div className="mt-7 flex flex-wrap gap-3 border-t border-line pt-6">
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
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
