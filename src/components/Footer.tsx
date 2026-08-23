import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowUp, 
  ArrowUpRight, 
  Linkedin, 
  Mail, 
  Globe, 
  DraftingCompass, 
  ChevronDown, 
  Send
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterLinkItem {
  label: string;
  id?: string;
  href?: string;
  isExternal?: boolean;
}

interface FooterSectionItem {
  title: string;
  links: FooterLinkItem[];
}

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end end'],
  });

  const watermarkY = useTransform(scrollYProgress, [0, 1], [30, 0]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    window.location.href = `mailto:${personalInfo.email}?subject=Portfolio%20Connection%20Request&body=Hello%20Vatsal,%20I%20would%20like%20to%20connect%20from%20${encodeURIComponent(newsletterEmail)}.`;
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 4000);
  };

  const footerSections: FooterSectionItem[] = [
    {
      title: 'NAVIGATION',
      links: [
        { label: 'Home', id: 'hero' },
        { label: 'About Me', id: 'about' },
        { label: 'Selected Projects', id: 'projects' },
        { label: 'Skills & CAD Standards', id: 'skills' },
        { label: 'Direct Inquiry', id: 'contact' },
      ],
    },
    {
      title: 'CONNECT',
      links: [
        { label: 'Send an Email', href: `mailto:${personalInfo.email}` },
        { label: 'LinkedIn Profile', href: personalInfo.linkedin, isExternal: true },
      ],
    },
  ];

  return (
    <footer 
      ref={footerRef}
      className="bg-[#EEEEEE] text-[#393E46] pt-16 pb-8 px-6 sm:px-10 lg:px-16 border-t border-[#929AAB]/20 relative overflow-hidden font-sans"
    >
      
      {/* Background CAD linework hint */}
      <div className="absolute inset-0 bg-cad-grid-dense opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. Top Bar: Brand Icon / Emblem on Left, Language Dropdown & Social Icons on Right */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-12 border-b border-[#929AAB]/20">
          
          {/* Brand Emblem */}
          <div className="flex items-center gap-3">
            <motion.div 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-10 h-10 rounded-full bg-[#393E46] text-[#F7F7F7] flex items-center justify-center shadow-xs cursor-default"
            >
              <DraftingCompass className="w-5 h-5" />
            </motion.div>
            <div>
              <span className="font-bold text-sm tracking-wider uppercase font-sans text-[#393E46] block">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-mono tracking-wider text-[#929AAB] uppercase">
                {personalInfo.title}
              </span>
            </div>
          </div>

          {/* Right Controls: Availability / Region & Social Icons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#393E46]">
            
            {/* Language / Region pill */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F7F7F7] border border-[#929AAB]/30 text-xs font-mono text-[#393E46]">
              <Globe className="w-3.5 h-3.5 text-[#929AAB]" />
              <span>English (Global)</span>
              <ChevronDown className="w-3 h-3 text-[#929AAB] ml-0.5" />
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, backgroundColor: '#393E46', color: '#F7F7F7' }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 flex items-center justify-center bg-[#F7F7F7] border border-[#929AAB]/30 text-[#393E46] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </motion.a>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.1, backgroundColor: '#393E46', color: '#F7F7F7' }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 flex items-center justify-center bg-[#F7F7F7] border border-[#929AAB]/30 text-[#393E46] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </motion.a>

              <motion.button
                onClick={() => onNavigate('contact')}
                whileHover={{ scale: 1.1, backgroundColor: '#393E46', color: '#F7F7F7' }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 flex items-center justify-center bg-[#F7F7F7] border border-[#929AAB]/30 text-[#393E46] transition-colors cursor-pointer"
                aria-label="Contact"
              >
                <Send className="w-3.5 h-3.5" />
              </motion.button>
            </div>

          </div>

        </div>

        {/* 2. Middle Multi-Column Grid + Quick Connect Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 py-12 border-b border-[#929AAB]/20">
          
          {/* Navigation Column */}
          <div className="col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-mono font-bold tracking-wider text-[#393E46] uppercase">
              {footerSections[0].title}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#393E46]/80 font-sans">
              {footerSections[0].links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  {link.id ? (
                    <button
                      onClick={() => onNavigate(link.id!)}
                      className="hover:text-[#393E46] hover:translate-x-1 transition-all text-left cursor-pointer inline-block"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="hover:text-[#393E46] hover:translate-x-1 transition-all inline-flex items-center gap-1"
                    >
                      <span>{link.label}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="col-span-1 sm:col-span-1 md:col-span-4 lg:col-span-4 space-y-4">
            <h4 className="text-[11px] font-mono font-bold tracking-wider text-[#393E46] uppercase">
              {footerSections[1].title}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#393E46]/80 font-sans">
              {footerSections[1].links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  {link.id ? (
                    <button
                      onClick={() => onNavigate(link.id!)}
                      className="hover:text-[#393E46] hover:translate-x-1 transition-all text-left cursor-pointer inline-block"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      target={link.isExternal ? '_blank' : undefined}
                      rel={link.isExternal ? 'noreferrer' : undefined}
                      className="hover:text-[#393E46] hover:translate-x-1 transition-all inline-flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      {link.isExternal && <ArrowUpRight className="w-2.5 h-2.5 text-[#929AAB] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Direct Connect / Quick Email Subscription Box */}
          <div className="col-span-1 sm:col-span-2 md:col-span-5 lg:col-span-5 space-y-4">
            <h4 className="text-[11px] font-mono font-bold tracking-wider text-[#393E46] uppercase">
              DIRECT INQUIRY DISPATCH
            </h4>
            <p className="text-xs text-[#393E46]/75 font-sans leading-relaxed max-w-md">
              Have a drawing scope or engineering consultation requirement? Connect directly with Vatsal.
            </p>

            <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-md">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="youremail@domain.com"
                className="flex-1 min-w-0 px-3.5 py-2.5 bg-[#F7F7F7] border border-[#929AAB]/30 text-xs text-[#393E46] placeholder-[#929AAB]/70 focus:outline-none focus:border-[#393E46] transition-colors font-sans"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-4 py-2.5 bg-[#393E46] text-[#F7F7F7] text-xs font-semibold uppercase tracking-wider hover:bg-[#393E46]/90 transition-colors whitespace-nowrap cursor-pointer shadow-xs"
              >
                {subscribed ? 'Sent' : 'Connect'}
              </motion.button>
            </form>

            <p className="text-[10px] text-[#929AAB] leading-relaxed font-sans max-w-md">
              By submitting, your email client will prepare a direct transmittal message to <span className="font-mono">{personalInfo.email}</span>.
            </p>
          </div>

        </div>

        {/* 3. Bottom Row: Copyright + Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#929AAB]">
          <div>
            © 2026 Vatsal Sonigra. All rights reserved. 
          </div>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.03, backgroundColor: '#393E46', color: '#F7F7F7' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F7F7F7] border border-[#929AAB]/30 text-xs font-mono uppercase tracking-wider text-[#393E46] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* 4. Giant Outlined Watermark Typography with Scroll Parallax */}
        <div className="pt-6 sm:pt-10 select-none pointer-events-none overflow-hidden text-center">
          <motion.span 
            className="font-serif font-black tracking-tight text-[12vw] sm:text-[13vw] leading-none uppercase block whitespace-nowrap will-change-transform"
            style={{ 
              WebkitTextStroke: '1.5px rgba(57, 62, 70, 0.18)', 
              color: 'transparent',
              y: watermarkY
            }}
          >
            Vatsal
          </motion.span>
        </div>

      </div>
    </footer>
  );
};
