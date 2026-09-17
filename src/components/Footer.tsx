import { BarChart3, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { Container } from "./Container";
import { site } from "../config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-ink">{site.name}</p>
          <p className="mt-0.5 text-xs text-slate-light">Data Analytics &amp; Software Development</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-light transition-colors hover:text-ledger"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate-light transition-colors hover:text-ledger"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={site.links.tableau}
            target="_blank"
            rel="noreferrer"
            aria-label="Tableau Public"
            className="text-slate-light transition-colors hover:text-ledger"
          >
            <BarChart3 size={16} />
          </a>
          <a
            href={`mailto:${site.links.email}`}
            aria-label="Email"
            className="text-slate-light transition-colors hover:text-ledger"
          >
            <Mail size={16} />
          </a>
        </div>

        <p className="text-xs text-slate-light">
          © {year} {site.name}
        </p>
      </Container>
    </footer>
  );
}
