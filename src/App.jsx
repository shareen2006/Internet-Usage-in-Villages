import { useScroll, useSpring, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Hero, About, Objectives } from './sections/Home';
import { Survey, Activities } from './sections/Survey';
import { Analytics } from './sections/Analytics';
import { Learn } from './sections/Learn';
import { Gallery, Team, Conclusion } from './sections/Community';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-lemon"
        style={{ scaleX }} />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Objectives />
        <Survey />
        <Analytics />
        <Activities />
        <Learn />
        <Gallery />
        <Team />
        <Conclusion />
      </main>
      <Footer />
    </>
  );
}
