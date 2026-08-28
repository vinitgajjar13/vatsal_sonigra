import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2, Crosshair } from 'lucide-react';
import { SectionHeader } from './animations/SectionHeader';
import vatsalImage from '../../assets/vatsal_image.png';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  return (
    <section id="about" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#EEEEEE] border-b border-[#929AAB]/20 relative">
      
      {/* Background CAD grid hint */}
      <div className="absolute inset-0 bg-cad-grid-dense opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header with Expanding CAD Axis Line & Blur Title */}
        <SectionHeader 
          index="[ SECTION 01 // OVERVIEW ]"
          title="About Me"
          className="mb-10 sm:mb-14"
        />

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Side: Professional Photograph with Clean Editorial Treatment & Parallax */}
          <motion.div 
            ref={imageContainerRef}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Technical Outer Frame Container */}
            <div className="relative p-3 bg-[#F7F7F7] border border-[#929AAB]/40 shadow-xs group">
              
              {/* Corner CAD Crosshair Registration Marks */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="absolute -top-2 -left-2 font-mono text-[10px] text-[#393E46] leading-none select-none"
              >
                +
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.13 }}
                className="absolute -top-2 -right-2 font-mono text-[10px] text-[#393E46] leading-none select-none"
              >
                +
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.16 }}
                className="absolute -bottom-2 -left-2 font-mono text-[10px] text-[#393E46] leading-none select-none"
              >
                +
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.19 }}
                className="absolute -bottom-2 -right-2 font-mono text-[10px] text-[#393E46] leading-none select-none"
              >
                +
              </motion.div>

              {/* Technical Annotation Bar Top */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#929AAB]/20 text-[9px] font-mono text-[#525866] tracking-widest uppercase">
                <span>FIG 01.0 // ENGINEER PROFILE</span>
                <span>STATUS: VERIFIED</span>
              </div>

              {/* Image Frame with Refined Parallax & Reveal */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#393E46]/10 border border-[#929AAB]/30">
                <motion.img
                  style={{ y: imageY }}
                  src={vatsalImage}
                  alt="Vatsal Sonigra - Electrical Design Engineer"
                  className="w-full h-full object-cover object-center grayscale contrast-115 filter transition-all duration-400 group-hover:grayscale-0 group-hover:scale-103 will-change-transform"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Coordinate Watermark Overlay */}
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-[#393E46]/80 text-[#F7F7F7] text-[8px] font-mono tracking-wider backdrop-blur-xs">
                  VS // ELEC.ENG
                </div>
              </div>

              {/* Technical Annotation Bar Bottom */}
              <div className="pt-3 mt-1 flex items-center justify-between text-[10px] font-mono text-[#393E46]">
                <span className="font-semibold uppercase tracking-wider">{personalInfo.name}</span>
                <span className="text-[#525866]">AUTOCAD ELECTRICAL</span>
              </div>
            </div>

            {/* Quick Experience Detail Tag */}
            <motion.div 
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
              className="mt-4 p-4 bg-[#F7F7F7] border border-[#929AAB]/30 flex items-center justify-between text-xs font-mono group cursor-default"
            >
              <div className="flex items-center gap-2 text-[#393E46]">
                <Crosshair className="w-3.5 h-3.5 text-[#393E46] group-hover:rotate-90 transition-transform duration-200" />
                <span className="font-medium">Drawings & Schematics</span>
              </div>
              <span className="font-bold text-[#393E46]">{personalInfo.drawingsCount}</span>
            </motion.div>
          </motion.div>

          {/* Right Side: Editorial Biography & Technical Metadata Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              {/* Subheading with Expanding Line */}
              <div className="text-lg sm:text-xl font-medium text-[#393E46] tracking-tight mb-6 flex items-center gap-3 font-sans">
                <span>Electrical Design Engineer</span>
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="w-12 h-[1px] bg-[#929AAB] origin-left" 
                />
              </div>

              {/* Professional Biography Paragraphs */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ staggerChildren: 0.08 }}
                className="space-y-4 text-sm sm:text-base text-[#393E46]/85 leading-relaxed font-sans mb-8"
              >
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }
                  }}
                >
                  I am an <strong>Electrical Design Engineer</strong> specializing in <strong>AutoCAD-based electrical design and technical documentation</strong>. My work is anchored in translating complex power distribution architectures into structured, precise, and code-compliant 2D drawings.
                </motion.p>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }
                  }}
                >
                  From single line diagrams (SLD) and switchboard feeder routing to lighting circuit loops, conduit containment, and panel schedules, I approach every drawing set with an uncompromising focus on <strong>technical accuracy, dimensional rigor, and attention to detail</strong>.
                </motion.p>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }
                  }}
                >
                  By standardizing layer conventions, equipment symbology, and annotation hierarchies, I ensure engineering drawings are not only mathematically sound, but also seamlessly readable for electrical contractors, municipal inspectors, and site construction teams.
                </motion.p>
              </motion.div>

              {/* Technical Information Block */}
              <motion.div 
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-5 bg-[#F7F7F7] border border-[#929AAB]/30 mb-6 divide-y divide-[#929AAB]/20 shadow-2xs"
              >
                {/* ROLE */}
                <div className="pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-mono text-[11px] font-bold text-[#525866] uppercase tracking-wider">
                    ROLE
                  </span>
                  <span className="font-sans text-sm font-semibold text-[#393E46]">
                    Electrical Design Engineer
                  </span>
                </div>

                {/* SPECIALIZATION */}
                <div className="py-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-mono text-[11px] font-bold text-[#525866] uppercase tracking-wider">
                    SPECIALIZATION
                  </span>
                  <span className="font-sans text-sm font-semibold text-[#393E46]">
                    AutoCAD-Based Electrical Design & Documentation
                  </span>
                </div>

                {/* FOCUS */}
                <div className="pt-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-mono text-[11px] font-bold text-[#525866] uppercase tracking-wider">
                    CORE FOCUS
                  </span>
                  <span className="font-sans text-sm font-semibold text-[#393E46]">
                    Electrical Drawings • Documentation • CAD
                  </span>
                </div>
              </motion.div>

              {/* Core Strengths Bullet Indicators */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ staggerChildren: 0.05 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono text-[#393E46] mb-8"
              >
                {[
                  'Single Line Diagrams (SLD)',
                  '2D Power & Lighting Layouts',
                  'Conduit & Cable Tray Routing',
                  'Engineering Standards'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -8 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#393E46]" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Action Link */}
            <div>
              <motion.button
                onClick={onContactClick}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#393E46] group cursor-pointer pb-1 border-b border-[#393E46]"
              >
                <span>Discuss a Project or Collaboration</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
              </motion.button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
