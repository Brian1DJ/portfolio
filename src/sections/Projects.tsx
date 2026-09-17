import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { Container } from "../components/Container";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectRow } from "../components/ProjectRow";
import { ProjectCaseStudyModal } from "../components/ProjectCaseStudyModal";
import { projects, type Project } from "../config/site";

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="border-b border-line py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <SectionHeader
            field=""
            title="Featured projects"
            note="Data analytics work first, software development alongside it."
          />

          <div className="col-span-12 space-y-5 md:col-span-9">
            {featured.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
              >
                <ProjectCard project={project} onViewCaseStudy={setActiveProject} />
              </motion.div>
            ))}

            {secondary.length > 0 && (
              <div className="pt-6">
                <p className="font-mono text-xs text-slate-light">other projects</p>
                <div className="mt-2">
                  {secondary.map((project) => (
                    <ProjectRow key={project.slug} project={project} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>

      <ProjectCaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
