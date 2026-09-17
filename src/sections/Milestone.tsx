import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { Container } from "../components/Container";
import { site } from "../config/site";
import graduationPhoto from "../assets/images/graduation.jpg";

export function Milestone() {
  return (
    <section className="border-b border-line py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <SectionHeader
            field=""
            title="Graduation"
            note={`${site.education.school}, ${site.education.year}`}
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="col-span-12 grid grid-cols-1 gap-6 sm:grid-cols-[180px_1fr] md:col-span-9"

          >
            <ImagePlaceholder
                label="Graduation photo"
                src={graduationPhoto}
                className="aspect-[3/4] w-full max-w-[180px]"
              />
            <p className="max-w-xl self-center text-[15px] leading-relaxed text-slate">
              After completing my {site.education.degree}, I began building projects that combine my
              software development background with my growing interest in data analytics.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
