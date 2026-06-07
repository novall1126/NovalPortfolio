'use client';

import { motion } from 'motion/react';
import { Code2, PenTool, Headphones, ShieldCheck, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive, high-performance, and scalable web applications using modern technologies.',
    icon: <Code2 size={32} />,
  },
  {
    title: 'UI/UX Designer',
    description: 'Crafting intuitive, engaging, and visually stunning user interfaces with a focus on user experience.',
    icon: <PenTool size={32} />,
  },
  {
    title: 'IT Support',
    description: 'Providing reliable technical support, troubleshooting, and system maintenance for seamless operations.',
    icon: <Headphones size={32} />,
  },
  {
    title: 'Cyber Security',
    description: 'Implementing robust security measures to protect applications and data from potential threats.',
    icon: <ShieldCheck size={32} />,
  },
];

export default function Services() {
  return (
    <section id="service" className="py-24">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          My <span className="text-[#ff2e2e] glow-text">Services</span>
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#111111] p-8 rounded-3xl border border-[#222] hover:-translate-y-2 hover:border-[#ff2e2e] transition-all duration-300 group glow-border-hover relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff2e2e]/5 rounded-full blur-3xl group-hover:bg-[#ff2e2e]/20 transition-colors"></div>
            
            <div className="w-16 h-16 bg-[#ff2e2e]/10 rounded-full flex items-center justify-center text-[#ff2e2e] mb-6 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#ff2e2e] transition-colors">{service.title}</h3>
            <p className="text-[#b3b3b3] mb-8 leading-relaxed">
              {service.description}
            </p>
            <button className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-[#ff2e2e] transition-colors">
              Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
