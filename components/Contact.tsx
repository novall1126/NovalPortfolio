'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setIsSubmitting(true);

    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram credentials are not configured.");
      setStatus('error');
      setIsSubmitting(false);
      return;
    }

    const text = `🚀 *New Message from Portfolio*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Message:*\n${formData.message}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'Markdown',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section id="contact" className="py-24">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-[#ff2e2e] glow-text">Me</span>
          </h2>
          <p className="text-[#b3b3b3] text-lg leading-relaxed max-w-md">
            Let's build something amazing together. Feel free to reach out for collaborations, freelance projects, or just to say hi.
          </p>
          
          <div className="mt-8">
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#111111] p-8 rounded-3xl border border-[#222]"
        >
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-[#b3b3b3]">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-[#0a0a0a] border border-[#222] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff2e2e] focus:ring-1 focus:ring-[#ff2e2e] transition-all"
                placeholder="Noval"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-[#b3b3b3]">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-[#0a0a0a] border border-[#222] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff2e2e] focus:ring-1 focus:ring-[#ff2e2e] transition-all"
                placeholder="Novall@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-[#b3b3b3]">Message</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="bg-[#0a0a0a] border border-[#222] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff2e2e] focus:ring-1 focus:ring-[#ff2e2e] transition-all resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            {status === 'error' && (
              <p className="text-[#ff2e2e] text-sm">Please fill out all fields or check bot configuration.</p>
            )}
            {status === 'success' && (
              <p className="text-green-500 text-sm flex items-center gap-2">
                <CheckCircle2 size={16} /> Message sent successfully!
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#ff2e2e] text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#e60000] transition-colors glow-bg mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : <>Send Email <Send size={18} /></>}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
