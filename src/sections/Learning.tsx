import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { Container } from "../components/Container";
import { currentlyLearning } from "../config/site";

export function Learning() {
  return (
    <section className="border-b border-line py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <SectionHeader
            field=""
            title="Currently learning"
            note="In progress, not completed certifications or professional experience."
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="col-span-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-9"
          >
            {currentlyLearning.map((item) => (
              <div key={item.name} className="border border-line px-5 py-4">
                <p className="font-medium text-ink">{item.name}</p>
                <p className="mt-1 text-sm text-slate">{item.note}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
