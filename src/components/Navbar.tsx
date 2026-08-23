import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#F7F7F7]/92 backdrop-blur-md border-b border-[#929AAB]/20 py-3 shadow-xs' 
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        
        {/* Left: Name and Title in Clean Swiss Engineering Style */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#393E46]"
        >
          <div className="w-8 h-8 border border-[#393E46] flex items-center justify-center bg-[#EEEEEE] text-[#393E46] font-mono text-xs font-semibold group-hover:bg-[#393E46] group-hover:text-[#F7F7F7] transition-colors duration-200">
            VS
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base tracking-[0.08em] uppercase text-[#393E46] leading-none font-sans group-hover:text-black transition-colors">
              VATSAL SONIGRA
            </span>
            <span className="text-[10px] font-mono tracking-wider text-[#929AAB] uppercase mt-1">
              Electrical Design Engineer
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-xs font-medium tracking-wider uppercase">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative py-1 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#393E46] ${
                  isActive ? 'text-[#393E46] font-semibold' : 'text-[#929AAB] hover:text-[#393E46]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#393E46]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <motion.button
            onClick={() => handleLinkClick('contact')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase border border-[#393E46] text-[#393E46] hover:bg-[#393E46] hover:text-[#F7F7F7] transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#393E46]"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </motion.button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#393E46] hover:text-[#393E46] hover:bg-[#EEEEEE] border border-[#929AAB]/30 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#F7F7F7] border-b border-[#929AAB]/30 px-6 py-6 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col gap-4 font-sans text-xs tracking-wider uppercase">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-left py-2.5 border-b border-[#EEEEEE] flex items-center justify-between ${
                      isActive ? 'text-[#393E46] font-bold' : 'text-[#929AAB]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 bg-[#393E46]" />}
                  </button>
                );
              })}
              <button
                onClick={() => handleLinkClick('contact')}
                className="mt-2 w-full py-3 bg-[#393E46] text-[#F7F7F7] font-semibold text-center uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
