import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";
import { Container } from "../components/Container";
import { analysisProcess } from "../config/site";

export function Process() {
  return (
    <section id="process" className="border-b border-line py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <SectionHeader
            field=""
            title="How I approach analysis"
            note="The same six steps, whether the tool is SQL, Pandas, or Tableau."
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="col-span-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:col-span-9 lg:grid-cols-6"
          >
            {analysisProcess.map((step, i) => (
              <div key={step} className="border-t-2 border-ledger pt-4">
                <p className="font-mono text-sm text-ledger">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-2 text-sm leading-snug text-ink">{step}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
