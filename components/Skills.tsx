'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const skills = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  // { name: 'Type Script', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }, //
 // { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' }, //
  // { name: 'Termux', icon: 'https://cdn.simpleicons.org/termux' }, //
];

export default function Skills() {
  return (
    <section id="skill" className="py-24">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          My <span className="text-[#ff2e2e] glow-text">Skills</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#111111] border border-[#222] rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-[#ff2e2e] hover:-translate-y-2 transition-all duration-300 glow-border-hover group"
          >
            <div className="w-16 h-16 relative grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
              <Image src={skill.icon} alt={skill.name} fill className="object-contain" />
            </div>
            <span className="font-medium text-[#b3b3b3] group-hover:text-white transition-colors">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
