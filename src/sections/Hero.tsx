import { motion } from "framer-motion";
import { BarChart3, Mail } from "lucide-react";
import { Container } from "../components/Container";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import { site } from "../config/site";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <Container className="grid grid-cols-12 gap-6 py-20 md:py-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="col-span-12 md:col-span-10 md:col-start-2"
        >
          <motion.p variants={item} className="font-mono text-xs text-slate-light">
            {site.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl"
          >
            {site.name}
          </motion.h1>

          <motion.p variants={item} className="mt-4 max-w-2xl text-lg text-slate md:text-xl">
            {site.headline}
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-slate">
            {site.intro}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-[var(--radius-card)] bg-ledger px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-[#254a37]"
            >
              View projects
            </a>
            <a
              href={site.resumeReady ? site.links.resume : "#contact"}
              className="rounded-[var(--radius-card)] border border-ink px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ledger hover:text-ledger"
            >
              {site.resumeReady ? "Download resume" : "Contact me"}
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-5 border-t border-line pt-6">
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate transition-colors hover:text-ledger"
            >
              <GithubIcon className="h-[19px] w-[19px]" />
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate transition-colors hover:text-ledger"
            >
              <LinkedinIcon className="h-[19px] w-[19px]" />
            </a>
            <a
              href={site.links.tableau}
              target="_blank"
              rel="noreferrer"
              aria-label="Tableau Public"
              className="text-slate transition-colors hover:text-ledger"
            >
              <BarChart3 size={19} />
            </a>
            <a
              href={`mailto:${site.links.email}`}
              aria-label="Email"
              className="text-slate transition-colors hover:text-ledger"
            >
              <Mail size={19} />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
