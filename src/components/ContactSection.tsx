import React, { useState } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { Mail, ArrowUpRight, Copy, Check, MapPin, Linkedin, Send } from 'lucide-react';
import { SectionHeader } from './animations/SectionHeader';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = subject.trim()
      ? `[Inquiry] ${subject} - ${name}`
      : `[Inquiry] Project Contact from ${name || 'Engineering Client'}`;
    const mailBody = `Name: ${name}\nEmail: ${email}${subject ? `\nSubject: ${subject}` : ''}\n\nMessage:\n${message}`;

    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(mailBody)}`;
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#EEEEEE] border-b border-[#929AAB]/20 relative">
      {/* Background CAD grid hint */}
      <div className="absolute inset-0 bg-cad-grid-dense opacity-30 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Section Header with Expanding CAD Axis Line & Blur Title */}
        <SectionHeader
          index="[ SECTION 04 // CONTACT ]"
          title="Let's Connect"
          subtitle="Have a project in mind, an inquiry, or want to collaborate? Send a message below."
          align="center"
          className="mb-12 sm:mb-16"
        />

        {/* Minimalist Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#F7F7F7] border border-[#929AAB]/30 p-8 sm:p-12 shadow-xs"
        >
          {isSent ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="py-10 text-center space-y-4"
            >
              <div className="w-12 h-12 bg-[#393E46] text-[#F7F7F7] flex items-center justify-center mx-auto shadow-xs">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-normal text-[#393E46] font-serif">
                Message Prepared
              </h3>
              <p className="text-xs sm:text-sm text-[#393E46]/80 max-w-md mx-auto font-sans leading-relaxed">
                Opening your email client... If it doesn't trigger automatically, please email directly to{' '}
                <a href={`mailto:${personalInfo.email}`} className="font-mono font-semibold text-[#393E46] underline">
                  {personalInfo.email}
                </a>.
              </p>
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setIsSent(false);
                  setName('');
                  setEmail('');
                  setSubject('');
                  setMessage('');
                }}
                className="mt-4 px-6 py-2.5 bg-[#EEEEEE] border border-[#929AAB]/30 text-xs font-mono uppercase tracking-wider text-[#393E46] hover:bg-[#393E46] hover:text-[#F7F7F7] transition-colors cursor-pointer"
              >
                Send Another Message
              </motion.button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#393E46] mb-2 font-medium">
                    Your Name / Organization
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe / Apex Engineering"
                    className="w-full px-4 py-3 bg-[#EEEEEE] border border-[#929AAB]/30 text-sm text-[#393E46] placeholder-[#929AAB]/70 focus:outline-none focus:border-[#393E46] transition-colors font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#393E46] mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. j.doe@company.com"
                    className="w-full px-4 py-3 bg-[#EEEEEE] border border-[#929AAB]/30 text-sm text-[#393E46] placeholder-[#929AAB]/70 focus:outline-none focus:border-[#393E46] transition-colors font-sans"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-[#393E46] mb-2 font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Electrical Design Inquiry / Drawings Scope"
                  className="w-full px-4 py-3 bg-[#EEEEEE] border border-[#929AAB]/30 text-sm text-[#393E46] placeholder-[#929AAB]/70 focus:outline-none focus:border-[#393E46] transition-colors font-sans"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#393E46] mb-2 font-medium">
                  Message / Project Details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your project, drawing requirements, timeline, or inquiry..."
                  className="w-full px-4 py-3 bg-[#EEEEEE] border border-[#929AAB]/30 text-sm text-[#393E46] placeholder-[#929AAB]/70 focus:outline-none focus:border-[#393E46] transition-colors font-sans resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#393E46] text-[#F7F7F7] text-xs font-semibold uppercase tracking-wider hover:bg-[#393E46]/90 transition-all cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  <span>Send Message</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </motion.button>
              </div>
            </form>
          )}

          {/* Minimalist Direct Contact Info Links */}
          <div className="mt-10 pt-8 border-t border-[#929AAB]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#393E46]">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#929AAB]" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:underline text-[#393E46]"
              >
                {personalInfo.email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="ml-1 p-1 hover:text-black transition-colors cursor-pointer"
                title="Copy email address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#929AAB]" />}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#929AAB]" />
              <span className="text-[#929AAB]">{personalInfo.location}</span>
            </div>

            <div>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:underline text-[#393E46] group"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#929AAB]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
