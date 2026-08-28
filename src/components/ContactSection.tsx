import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { Mail, ArrowUpRight, Copy, Check, MapPin, Linkedin, Send, RotateCcw, ExternalLink } from 'lucide-react';
import { SectionHeader } from './animations/SectionHeader';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject = '' }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [lastSubmitted, setLastSubmitted] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
    mailSubject: string;
    mailBody: string;
  } | null>(null);

  useEffect(() => {
    if (initialSubject) {
      setSubject(initialSubject);
    }
  }, [initialSubject]);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(personalInfo.email);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = personalInfo.email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleCopyTransmittal = async () => {
    if (!lastSubmitted) return;
    const fullText = `To: ${personalInfo.email}\nSubject: ${lastSubmitted.mailSubject}\n\n${lastSubmitted.mailBody}`;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(fullText);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = fullText;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2500);
    } catch {
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2500);
    }
  };

  const triggerMailto = (mailSubject: string, mailBody: string) => {
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(mailBody)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = subject.trim()
      ? `[Inquiry] ${subject} - ${name}`
      : `[Inquiry] Project Contact from ${name || 'Engineering Client'}`;
    const mailBody = `Name: ${name}\nEmail: ${email}${subject ? `\nSubject: ${subject}` : ''}\n\nMessage:\n${message}`;

    setLastSubmitted({
      name,
      email,
      subject: subject || 'General Engineering Inquiry',
      message,
      mailSubject,
      mailBody
    });

    triggerMailto(mailSubject, mailBody);
    setIsSent(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#EEEEEE] border-b border-[#929AAB]/20 relative">
      {/* Background CAD grid hint */}
      <div className="absolute inset-0 bg-cad-grid-dense opacity-30 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          index="[ SECTION 04 // CONTACT ]"
          title="Let's Connect"
          subtitle="Have a project in mind, an inquiry, or want to collaborate? Send a message below."
          align="center"
          className="mb-10 sm:mb-14"
        />

        {/* Minimalist Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#F7F7F7] border border-[#929AAB]/30 p-6 sm:p-10 shadow-xs"
        >
          {isSent && lastSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="py-4 space-y-6 text-left font-sans"
            >
              {/* Visual Status Indicator Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#929AAB]/20">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#393E46] text-[#F7F7F7] flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-[#525866] uppercase tracking-wider block">
                      TRANSMITTAL DISPATCH READY
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#393E46] leading-none">
                      Email Dispatch Prepared
                    </h3>
                  </div>
                </div>
                <div className="px-2.5 py-1 bg-[#EEEEEE] border border-[#929AAB]/30 text-[11px] font-mono text-[#525866] self-start sm:self-auto">
                  STATUS: DISPATCHED
                </div>
              </div>

              {/* Explanatory Context */}
              <p className="text-xs sm:text-sm text-[#393E46]/85 leading-relaxed">
                Your system email application has been triggered with your pre-filled inquiry. If your email app did not open automatically, you can re-trigger it below or copy the formatted text directly into webmail (Gmail, Outlook, etc.).
              </p>

              {/* Submitted Details Snapshot Box */}
              <div className="p-4 bg-[#EEEEEE] border border-[#929AAB]/30 space-y-2 text-xs font-mono text-[#393E46]">
                <div className="flex flex-wrap gap-2 text-[11px]">
                  <span className="text-[#525866] font-semibold">FROM:</span>
                  <span>{lastSubmitted.name}</span>
                  <span className="text-[#525866]">({lastSubmitted.email})</span>
                </div>
                <div className="flex flex-wrap gap-2 text-[11px]">
                  <span className="text-[#525866] font-semibold">SUBJECT:</span>
                  <span>{lastSubmitted.subject}</span>
                </div>
                <div className="pt-2 border-t border-[#929AAB]/20 text-[11px] text-[#393E46]/80 line-clamp-3">
                  {lastSubmitted.message}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => triggerMailto(lastSubmitted.mailSubject, lastSubmitted.mailBody)}
                  className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 bg-[#393E46] text-[#F7F7F7] text-xs font-semibold uppercase tracking-wider hover:bg-[#393E46]/90 active:scale-98 transition-all cursor-pointer shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Launch Mail App Again</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyTransmittal}
                  className="min-h-[44px] inline-flex items-center gap-2 px-5 py-2.5 bg-[#EEEEEE] border border-[#929AAB]/30 text-xs font-mono uppercase tracking-wider text-[#393E46] hover:bg-[#EEEEEE]/80 active:scale-98 transition-colors cursor-pointer"
                >
                  {copiedMessage ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#525866]" />}
                  <span>{copiedMessage ? 'Transmittal Copied!' : 'Copy Message Details'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsSent(false);
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                  }}
                  className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-[#525866] hover:text-[#393E46] hover:underline transition-colors cursor-pointer ml-auto"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Compose New</span>
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#393E46] mb-1.5 font-medium">
                    Your Name / Organization
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Doe / Apex Engineering"
                    className="w-full px-3.5 py-3 min-h-[44px] bg-[#EEEEEE] border border-[#929AAB]/30 text-base sm:text-sm text-[#393E46] placeholder-[#525866]/60 focus:outline-none focus:border-[#393E46] transition-colors font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#393E46] mb-1.5 font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. j.doe@company.com"
                    className="w-full px-3.5 py-3 min-h-[44px] bg-[#EEEEEE] border border-[#929AAB]/30 text-base sm:text-sm text-[#393E46] placeholder-[#525866]/60 focus:outline-none focus:border-[#393E46] transition-colors font-sans"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-[#393E46] mb-1.5 font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Electrical Design Inquiry / Drawings Scope"
                  className="w-full px-3.5 py-3 min-h-[44px] bg-[#EEEEEE] border border-[#929AAB]/30 text-base sm:text-sm text-[#393E46] placeholder-[#525866]/60 focus:outline-none focus:border-[#393E46] transition-colors font-sans"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#393E46] mb-1.5 font-medium">
                  Message / Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your project, drawing requirements, timeline, or inquiry..."
                  className="w-full px-3.5 py-3 bg-[#EEEEEE] border border-[#929AAB]/30 text-base sm:text-sm text-[#393E46] placeholder-[#525866]/60 focus:outline-none focus:border-[#393E46] transition-colors font-sans resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="group w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#393E46] text-[#F7F7F7] text-xs font-semibold uppercase tracking-wider hover:bg-[#393E46]/90 transition-all cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
                  <span>Send Message</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                </motion.button>
              </div>
            </form>
          )}

          {/* Minimalist Direct Contact Info Links */}
          <div className="mt-8 pt-6 border-t border-[#929AAB]/20 flex flex-col sm:flex-row items-center justify-between gap-3.5 text-xs font-mono text-[#393E46]">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#525866]" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:underline text-[#393E46]"
              >
                {personalInfo.email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="ml-1 p-2 min-w-[36px] min-h-[36px] flex items-center justify-center hover:text-black transition-colors cursor-pointer"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#525866]" />}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#525866]" />
              <span className="text-[#525866]">{personalInfo.location}</span>
            </div>

            <div>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:underline text-[#393E46] group min-h-[36px]"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#525866]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
