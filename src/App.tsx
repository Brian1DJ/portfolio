import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Process } from "./sections/Process";
import { Milestone } from "./sections/Milestone";
import { Learning } from "./sections/Learning";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <Milestone />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
