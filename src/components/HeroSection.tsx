import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, DraftingCompass, Layers, ShieldCheck, Compass } from 'lucide-react';

interface HeroSectionProps {
  onViewWork: () => void;
  onGetInTouch: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onViewWork, onGetInTouch }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between pt-36 sm:pt-40 pb-16 px-6 sm:px-10 lg:px-16 bg-[#F7F7F7] overflow-hidden border-b border-[#929AAB]/20"
    >
      {/* Subtle Background Architectural Grid */}
      <div className="absolute inset-0 bg-cad-grid opacity-60 pointer-events-none" />

      {/* Main Centered Typography & Content Container */}
      <div className="max-w-4xl mx-auto w-full relative z-10 my-auto text-center flex flex-col items-center">
        
        {/* 1. Small Eyebrow with Symmetrical Balanced Line Accents */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center justify-center gap-3 mb-6"
        >
          <div className="w-4 h-[1px] bg-[#393E46]" />
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#393E46] uppercase">
            ELECTRICAL DESIGN ENGINEER
          </span>
          <div className="w-4 h-[1px] bg-[#393E46]" />
        </motion.div>

        {/* 2. Main Headline (Vatsal Sonigra) in Editorial Playfair Display */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-normal text-[#393E46] tracking-tight leading-[1.04] mb-6 font-serif"
        >
          Vatsal Sonigra
        </motion.h1>

        {/* 3. Supporting Headline (AutoCAD-Based Electrical Design & Documentation) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-[#393E46] tracking-tight leading-snug mb-6 font-sans max-w-3xl"
        >
          AutoCAD-Based Electrical Design & Documentation
        </motion.h2>

        {/* 4. Supporting Copy (Clean, centered, comfortable reading width) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-[#393E46]/80 leading-relaxed max-w-2xl mb-10 font-normal font-sans"
        >
          Designing precise electrical systems, drawings, and documentation with a focus on accuracy, clarity, and practical engineering solutions.
        </motion.p>

        {/* 5. CTAs (Primary: View Projects, Secondary: Get In Touch - Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {/* Primary CTA */}
          <button
            onClick={onViewWork}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#393E46] text-[#F7F7F7] text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#393E46]/90 transition-all duration-200 border border-[#393E46] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#393E46] shadow-xs"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4 text-[#F7F7F7]" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onGetInTouch}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-[#393E46] text-xs sm:text-sm font-semibold tracking-wider uppercase border border-[#929AAB] hover:border-[#393E46] hover:bg-[#EEEEEE] transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#393E46]"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4 text-[#393E46]" />
          </button>
        </motion.div>

      </div>

      {/* Hero Bottom Technical Indicators Row */}
      <div className="max-w-5xl mx-auto w-full relative z-10 pt-12 border-t border-[#929AAB]/20 mt-12 sm:mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono text-[#929AAB]">
          
          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <DraftingCompass className="w-4 h-4 text-[#393E46] shrink-0" />
            <div>
              <div className="text-[10px] text-[#929AAB] uppercase">CORE SPECIALIZATION</div>
              <div className="font-semibold text-[#393E46]">AutoCAD Designer</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <Layers className="w-4 h-4 text-[#393E46] shrink-0" />
            <div>
              <div className="text-[10px] text-[#929AAB] uppercase">DOCUMENTATION</div>
              <div className="font-semibold text-[#393E46]">SLD & Panel Schedules</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#393E46] shrink-0" />
            <div>
              <div className="text-[10px] text-[#929AAB] uppercase">ACCURACY STANDARD</div>
              <div className="font-semibold text-[#393E46]">Engineering Standards</div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2.5">
            <Compass className="w-4 h-4 text-[#393E46] shrink-0" />
            <div>
              <div className="text-[10px] text-[#929AAB] uppercase">DRAFTING METHOD</div>
              <div className="font-semibold text-[#393E46]">Structured Layer Sets</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
