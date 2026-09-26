import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { site } from "../config/site";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu automatically if the viewport grows past mobile
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight text-ink">
          Brian Mathew De Jesus
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.resumeReady ? site.links.resume : "#contact"}
            className="rounded-[var(--radius-card)] border border-ink bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-ledger hover:border-ledger"
          >
            {site.resumeReady ? "Download resume" : "Get in touch"}
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="text-ink md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full overflow-hidden border-b border-line bg-paper shadow-sm md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-[var(--radius-card)] px-2 py-2.5 text-sm text-ink hover:bg-paper-dim"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={site.resumeReady ? site.links.resume : "#contact"}
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-[var(--radius-card)] border border-ink bg-ink px-2 py-2.5 text-center text-sm font-medium text-paper"
              >
                {site.resumeReady ? "Download resume" : "Get in touch"}
              </a>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
