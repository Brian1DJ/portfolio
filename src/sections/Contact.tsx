import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { Container } from "../components/Container";
import { site } from "../config/site";

function ContactRow({
  label,
  value,
  href,
  external = true,
}: {
  label: string;
  value: ReactNode;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-center justify-between gap-3 py-4">
      <span className="font-mono text-xs text-slate-light">{label}</span>
      <span className="inline-flex items-center gap-1.5 text-[15px] text-ink">
        {value}
        {href && external && <ExternalLink size={13} className="text-slate-light" />}
      </span>
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="block transition-colors hover:bg-paper-dim"
    >
      {content}
    </a>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <SectionHeader
            field=""
            title="Get in touch"
            note="Open to Data Analytics, Business Intelligence, Software Development, and related entry-level roles."
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="col-span-12 divide-y divide-line border-y border-line md:col-span-9"
          >
            <ContactRow label="email" value={site.links.email} href={`mailto:${site.links.email}`} external={false} />
            <ContactRow label="linkedin" value="linkedin.com/in/brianmathewdejesus" href={site.links.linkedin} />
            <ContactRow label="github" value="View profile" href={site.links.github} />
            <ContactRow label="tableau public" value="View dashboards" href={site.links.tableau} />
            <ContactRow
              label="resume"
              value={site.resumeReady ? "Download PDF" : "Available on request"}
              href={site.resumeReady ? site.links.resume : undefined}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
