import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechStrip } from './components/TechStrip';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechStrip />
        <Projects />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
