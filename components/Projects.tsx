'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'BudgetPro',
    description: 'Website Pencatatan Keuangan dan Transaksi Digital.',
    image: '/foto/project-budgetpro.png',
    tags: ['MEDIA SOSIAL'],
    url: 'https://budgetpro12.netlify.app',
    github: 'https://github.com/username/repo',
  },
  {
    title: 'Cat-Gallery',
    description: 'Website Galeri Kucing.',
    image: '/foto/project-catgallery.jpg',
    tags: ['Platform Galeri', 'Kucing'],
    url: 'https://catgallery.netlify.app',
    github: 'https://github.com/username/repo',
  },
];

export default function Projects() {
  return (
    <section id="project" className="py-24">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Latest <span className="text-[#ff2e2e] glow-text">Project</span>
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#111111] rounded-3xl overflow-hidden border border-[#222] group hover:border-[#ff2e2e] transition-all duration-500 glow-border-hover flex flex-col cursor-pointer"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#ff2e2e] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform glow-bg">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#222] rounded-full flex items-center justify-center text-white hover:bg-[#333] hover:scale-110 transition-all">
                    <Github size={20} />
                  </a>
                </div>
                {/* Tap ripple */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileTap={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 0.35 }}
                  style={{ background: 'radial-gradient(circle at center, #ff2e2e 0%, transparent 65%)' }}
                />
              </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#ff2e2e] transition-colors">{project.title}</h3>
              <p className="text-[#b3b3b3] text-sm mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 bg-[#222] text-[#b3b3b3] rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            </motion.div>
        ))}
      </div>
    </section>
  );
}
