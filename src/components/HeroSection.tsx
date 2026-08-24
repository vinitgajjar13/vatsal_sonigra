import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, ArrowUpRight, DraftingCompass, Layers, ShieldCheck, Compass } from 'lucide-react';
import { BlurText } from './animations/BlurText';
import { TextType } from './animations/TextType';

interface HeroSectionProps {
  onViewWork: () => void;
  onGetInTouch: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onViewWork, onGetInTouch }) => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const technicalRoles = [
    'AutoCAD 2D Specialist',
    'Electrical Design Engineer',
    'SLD & Schematic Drafter',
    'Power & Lighting Designer',
    'Panel Schedules & BOQ Analyst',
  ];

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between pt-36 sm:pt-40 pb-16 px-6 sm:px-10 lg:px-16 bg-[#F7F7F7] overflow-hidden border-b border-[#929AAB]/20"
    >
      {/* Subtle Background Architectural Grid with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-cad-grid opacity-60 pointer-events-none will-change-transform" 
      />

      {/* Main Centered Typography & Content Container */}
      <motion.div 
        style={{ y: contentY, opacity }}
        className="max-w-4xl mx-auto w-full relative z-10 my-auto text-center flex flex-col items-center will-change-transform"
      >
        
        {/* 1. Small Eyebrow with Symmetrical Expanding Line Accents */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center justify-center gap-3 mb-5"
        >
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.35, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="w-5 h-[1px] bg-[#393E46] origin-right" 
          />
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#393E46] uppercase">
            ELECTRICAL DESIGN ENGINEER
          </span>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.35, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="w-5 h-[1px] bg-[#393E46] origin-left" 
          />
        </motion.div>

        {/* 2. Main Headline (Vatsal Sonigra) in Editorial Playfair Display with Blur Text Reveal */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-normal text-[#393E46] tracking-tight leading-[1.04] mb-5 font-serif">
          <BlurText text="Vatsal Sonigra" delay={0.06} />
        </h1>

        {/* 3. Supporting Headline with Typewriter Subheading Rotator */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-[#393E46] tracking-tight leading-snug mb-5 font-sans max-w-3xl flex flex-wrap items-center justify-center gap-2"
        >
          <span>AutoCAD-Based</span>
          <TextType 
            words={technicalRoles} 
            typingSpeed={42} 
            deletingSpeed={22} 
            pauseDuration={1600}
            className="text-[#393E46] underline decoration-[#929AAB]/40 decoration-1 underline-offset-4"
          />
        </motion.div>

        {/* 4. Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg text-[#393E46]/80 leading-relaxed max-w-2xl mb-8 font-normal font-sans"
        >
          Designing precise electrical systems, drawings, and documentation with a focus on accuracy, clarity, and practical engineering solutions.
        </motion.p>

        {/* 5. CTAs with Fast, Crisp Micro-Interactions */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {/* Primary CTA */}
          <motion.button
            onClick={onViewWork}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#393E46] text-[#F7F7F7] text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#393E46]/90 transition-all duration-150 border border-[#393E46] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#393E46] shadow-xs"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4 text-[#F7F7F7] group-hover:translate-y-0.5 transition-transform duration-150" />
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            onClick={onGetInTouch}
            whileHover={{ scale: 1.02, backgroundColor: '#EEEEEE' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-[#393E46] text-xs sm:text-sm font-semibold tracking-wider uppercase border border-[#929AAB] hover:border-[#393E46] transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#393E46]"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4 text-[#393E46] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
          </motion.button>
        </motion.div>

      </motion.div>

      {/* Hero Bottom Technical Indicators Row */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto w-full relative z-10 pt-10 border-t border-[#929AAB]/20 mt-10 sm:mt-14"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono text-[#929AAB]">
          
          <motion.div 
            whileHover={{ y: -2 }}
            transition={{ duration: 0.15 }}
            className="flex items-center justify-center sm:justify-start gap-2.5 group cursor-default"
          >
            <DraftingCompass className="w-4 h-4 text-[#393E46] shrink-0 group-hover:rotate-12 transition-transform duration-200" />
            <div>
              <div className="text-[10px] text-[#929AAB] uppercase">CORE SPECIALIZATION</div>
              <div className="font-semibold text-[#393E46]">AutoCAD Designer</div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -2 }}
            transition={{ duration: 0.15 }}
            className="flex items-center justify-center sm:justify-start gap-2.5 group cursor-default"
          >
            <Layers className="w-4 h-4 text-[#393E46] shrink-0 group-hover:translate-y-[-1px] transition-transform duration-200" />
            <div>
              <div className="text-[10px] text-[#929AAB] uppercase">DOCUMENTATION</div>
              <div className="font-semibold text-[#393E46]">SLD & Panel Schedules</div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -2 }}
            transition={{ duration: 0.15 }}
            className="flex items-center justify-center sm:justify-start gap-2.5 group cursor-default"
          >
            <ShieldCheck className="w-4 h-4 text-[#393E46] shrink-0 group-hover:scale-110 transition-transform duration-200" />
            <div>
              <div className="text-[10px] text-[#929AAB] uppercase">ACCURACY STANDARD</div>
              <div className="font-semibold text-[#393E46]">Engineering Standards</div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -2 }}
            transition={{ duration: 0.15 }}
            className="flex items-center justify-center sm:justify-start gap-2.5 group cursor-default"
          >
            <Compass className="w-4 h-4 text-[#393E46] shrink-0 group-hover:rotate-45 transition-transform duration-200" />
            <div>
              <div className="text-[10px] text-[#929AAB] uppercase">Design METHOD</div>
              <div className="font-semibold text-[#393E46]">Structured Layer Sets</div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};
