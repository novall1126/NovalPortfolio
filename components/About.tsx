'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { MapPin, Phone, Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <motion.div
            className="relative w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border-2 border-[#111111] hover:border-[#ff2e2e] transition-colors duration-500 glow-border-hover cursor-pointer"
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Image
              src="/foto/about-workspace.png"
              alt="Workspace"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60"></div>
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              initial={{ opacity: 0 }}
              whileTap={{ opacity: [0, 0.2, 0] }}
              transition={{ duration: 0.4 }}
              style={{ background: 'radial-gradient(circle at center, #ff2e2e 0%, transparent 70%)' }}
            />
          </motion.div>
          <div className="absolute -bottom-6 -right-6 bg-[#111111] border border-[#ff2e2e] p-6 rounded-2xl glow-border">
            <p className="text-3xl font-bold text-white">2+</p>
            <p className="text-[#ff2e2e] text-sm font-medium">Years Experience</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-[#ff2e2e] glow-text">Me</span>
          </h2>
          <p className="text-[#b3b3b3] leading-relaxed text-lg">
            I am a passionate Fullstack Developer and UI/UX Designer with a strong focus on creating high-end, futuristic, and highly interactive web experiences. I blend clean code with stunning aesthetics to build products that not only work flawlessly but also leave a lasting impression.
          </p>
          
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-4 bg-[#111111] p-4 rounded-2xl border border-[#222] hover:border-[#ff2e2e]/50 transition-colors">
              <div className="bg-[#ff2e2e]/10 p-3 rounded-full text-[#ff2e2e]">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-[#b3b3b3] text-sm">Location</p>
                <p className="text-white font-medium">Jakarta, Indonesia</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#111111] p-4 rounded-2xl border border-[#222] hover:border-[#ff2e2e]/50 transition-colors">
              <div className="bg-[#ff2e2e]/10 p-3 rounded-full text-[#ff2e2e]">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-[#b3b3b3] text-sm">Phone Number</p>
                <p className="text-white font-medium">+62 881 0244 72282</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-transparent border border-[#ff2e2e] text-[#ff2e2e] px-8 py-3 rounded-full font-medium hover:bg-[#ff2e2e] hover:text-white transition-all glow-border-hover"
            >
              Download CV <Download size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
