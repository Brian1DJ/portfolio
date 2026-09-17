import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { Container } from "../components/Container";
import { site } from "../config/site";

export function About() {
  return (
    <section id="about" className="border-b border-line py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <SectionHeader
            field=""
            title="Background"
            note={`${site.education.degree}, ${site.education.school}, ${site.education.year}`}
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="col-span-12 grid grid-cols-1 gap-8 md:col-span-9 md:grid-cols-[220px_1fr]"
          >
            <ImagePlaceholder
              label="Graduation photo"
              path="public/images/graduation.jpg"
              src={site.graduationPhoto}
              className="aspect-[3/4] w-full max-w-[220px] rounded-[var(--radius-card)]"
            />

            <div className="space-y-4 text-[15px] leading-relaxed text-slate">
              <p>
                  I'm a recent {site.education.degree} graduate from {site.education.school}, with hands-on
                  experience as a {site.role.title} at the {site.role.organization}. That role gave me practical
                  exposure to databases, web development, and computer vision work in a real government IT
                  environment. I was a Dean's Lister from 2023 to 2025.
                </p>
              <p>
                Since graduating, I've been focused on data analysis — using SQL, Python, and Tableau to turn
                raw datasets into findings someone can actually act on. I'm just as comfortable on the
                software development side: building interfaces, testing systems, and debugging code.
              </p>
              <p>
                I'm building this portfolio the same way I approach a dataset: methodically, with clear
                documentation of process, and without overstating what the numbers say.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
