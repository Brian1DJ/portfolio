import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { Container } from "../components/Container";
import { skillCategories } from "../config/site";

export function Skills() {
  return (
    <section id="skills" className="border-b border-line py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <SectionHeader
            field=""
            title="Technical skills"
            note="Grouped by how I use them day to day, not ranked by proficiency."
          />

          <div className="col-span-12 space-y-8 md:col-span-9">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
                className="border-t border-line pt-5 first:border-t-0 first:pt-0"
              >
                <p className="font-mono text-xs text-slate-light">{category.name}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-[var(--radius-card)] border border-line bg-paper px-3 py-1.5 text-sm text-ink transition-colors hover:border-ledger hover:text-ledger"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
