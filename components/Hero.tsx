'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Download, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <span className="text-[#ff2e2e] font-medium tracking-wider uppercase text-sm">Welcome</span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Hello Everyone <br /> I'm <span className="text-[#ff2e2e] glow-text">Muhamad Noval</span>
          </h1>
          <p className="text-[#b3b3b3] text-lg max-w-lg leading-relaxed">
            A modern web developer specializing in building exceptional, responsive, and high-end digital experiences.
          </p>

          <div className="flex gap-6 my-4">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">2+</span>
              <span className="text-[#b3b3b3] text-sm uppercase tracking-wider">Project Completed</span>
            </div>
            <div className="w-[1px] bg-[#222]"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">2+</span>
              <span className="text-[#b3b3b3] text-sm uppercase tracking-wider">Years Experience</span>
            </div>
            <div className="w-[1px] bg-[#222]"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">0+</span>
              <span className="text-[#b3b3b3] text-sm uppercase tracking-wider">Happy Clients</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#contact"
              className="bg-[#ff2e2e] text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:scale-105 transition-transform glow-bg-hover"
            >
              Hire Me <ArrowRight size={18} />
            </a>
            <a
              href="#"
              className="border border-[#ff2e2e] text-[#ff2e2e] px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-[#ff2e2e] hover:text-white transition-all glow-border-hover"
            >
              Download CV <Download size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block h-[600px]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ff2e2e]/20 to-transparent rounded-full blur-3xl"></div>
          <motion.div
            className="relative w-full h-full rounded-3xl overflow-hidden border border-[#222] glow-border cursor-pointer"
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Image
              src="/foto/hero-profile.jpg"
              alt="Shadownex"
              fill
              className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
            />
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              initial={{ opacity: 0 }}
              whileTap={{ opacity: [0, 0.25, 0] }}
              transition={{ duration: 0.4 }}
              style={{ background: 'radial-gradient(circle, #ff2e2e 0%, transparent 70%)' }}
            />
          </motion.div>
          
          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute top-20 -left-10 bg-[#111111]/80 backdrop-blur-md border border-[#ff2e2e]/50 px-6 py-3 rounded-2xl glow-border"
          >
            <span className="text-white font-medium">Responsive</span>
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 -right-10 bg-[#111111]/80 backdrop-blur-md border border-[#ff2e2e]/50 px-6 py-3 rounded-2xl glow-border"
          >
            <span className="text-white font-medium">Clean Code</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
