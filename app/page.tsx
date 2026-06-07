import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
