import React from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2, FileText, Cpu, Crosshair } from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#EEEEEE] border-b border-[#929AAB]/20 relative">
      
      {/* Background CAD grid hint */}
      <div className="absolute inset-0 bg-cad-grid-dense opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#393E46] uppercase">
            [ SECTION 01 // OVERVIEW ]
          </span>
          <div className="h-[1px] flex-1 bg-[#929AAB]/30" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Professional Photograph with Clean Editorial Treatment & Technical Framing */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Technical Outer Frame Container */}
            <div className="relative p-3 bg-[#F7F7F7] border border-[#929AAB]/40 shadow-xs">
              
              {/* Corner CAD Crosshair Registration Marks */}
              <div className="absolute -top-2 -left-2 font-mono text-[10px] text-[#393E46] leading-none select-none">+</div>
              <div className="absolute -top-2 -right-2 font-mono text-[10px] text-[#393E46] leading-none select-none">+</div>
              <div className="absolute -bottom-2 -left-2 font-mono text-[10px] text-[#393E46] leading-none select-none">+</div>
              <div className="absolute -bottom-2 -right-2 font-mono text-[10px] text-[#393E46] leading-none select-none">+</div>

              {/* Technical Annotation Bar Top */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#929AAB]/20 text-[9px] font-mono text-[#929AAB] tracking-widest uppercase">
                <span>FIG 01.0 // ENGINEER PROFILE</span>
                <span>STATUS: VERIFIED</span>
              </div>

              {/* Image Frame with Refined Editorial Treatment */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#393E46]/10 border border-[#929AAB]/30">
                <img
                  src="assets/vatsal_image.png"
                  alt="Vatsal Sonigra - Electrical Design Engineer"
                  className="w-full h-full object-cover object-center grayscale contrast-115 filter transition-all duration-500 hover:grayscale-0 hover:scale-[1.02]"
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
                <span className="text-[#929AAB]">AUTOCAD ELECTRICAL</span>
              </div>
            </div>

            {/* Quick Experience Detail Tag */}
            <div className="mt-4 p-4 bg-[#F7F7F7] border border-[#929AAB]/30 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-[#393E46]">
                <Crosshair className="w-3.5 h-3.5 text-[#393E46]" />
                <span className="font-medium">Drawings & Schematics</span>
              </div>
              <span className="font-bold text-[#393E46]">{personalInfo.drawingsCount}</span>
            </div>
          </motion.div>

          {/* Right Side: Editorial Biography & Technical Metadata Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              {/* Heading */}
              <h2 className="text-4xl sm:text-5xl font-normal text-[#393E46] tracking-tight leading-tight mb-2 font-serif">
                About Me
              </h2>

              {/* Subheading */}
              <div className="text-lg sm:text-xl font-medium text-[#393E46] tracking-tight mb-8 flex items-center gap-3 font-sans">
                <span>Electrical Design Engineer</span>
                <div className="w-8 h-[1px] bg-[#929AAB]" />
              </div>

              {/* Professional Biography Paragraphs */}
              <div className="space-y-5 text-sm sm:text-base text-[#393E46]/85 leading-relaxed font-sans mb-10">
                <p>
                  I am an <strong>Electrical Design Engineer</strong> specializing in <strong>AutoCAD-based electrical design and technical documentation</strong>. My work is anchored in translating complex power distribution architectures into structured, precise, and code-compliant 2D drawings.
                </p>
                <p>
                  From single line diagrams (SLD) and switchboard feeder layouts to lighting circuit loops, conduit containment, and panel schedules, I approach every drawing set with an uncompromising focus on <strong>technical accuracy, dimensional rigor, and attention to detail</strong>.
                </p>
                <p>
                  By standardizing layer conventions, equipment symbology, and annotation hierarchies, I ensure engineering drawings are not only mathematically sound, but also seamlessly readable for electrical contractors, municipal inspectors, and site construction teams.
                </p>
              </div>

              {/* Technical Information Block (Exact prompt requirements) */}
              <div className="p-6 bg-[#F7F7F7] border border-[#929AAB]/30 mb-8 divide-y divide-[#929AAB]/20 shadow-2xs">
                
                {/* ROLE */}
                <div className="pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-mono text-[11px] font-bold text-[#929AAB] uppercase tracking-wider">
                    ROLE
                  </span>
                  <span className="font-sans text-sm font-semibold text-[#393E46]">
                    Electrical Design Engineer
                  </span>
                </div>

                {/* SPECIALIZATION */}
                <div className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-mono text-[11px] font-bold text-[#929AAB] uppercase tracking-wider">
                    SPECIALIZATION
                  </span>
                  <span className="font-sans text-sm font-semibold text-[#393E46]">
                    AutoCAD-Based Electrical Design & Documentation
                  </span>
                </div>

                {/* FOCUS */}
                <div className="pt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-mono text-[11px] font-bold text-[#929AAB] uppercase tracking-wider">
                    CORE FOCUS
                  </span>
                  <span className="font-sans text-sm font-semibold text-[#393E46]">
                    Electrical Drawings • Documentation • CAD
                  </span>
                </div>

              </div>

              {/* Core Strengths Bullet Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-[#393E46] mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#393E46]" />
                  <span>Single Line Diagrams (SLD)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#393E46]" />
                  <span>2D Power & Lighting Layouts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#393E46]" />
                  <span>Conduit & Cable Tray Routing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#393E46]" />
                  <span>IEC & IEEE Drafting Standards</span>
                </div>
              </div>
            </div>

            {/* Action Link */}
            <div>
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#393E46] hover:text-[#393E46] group cursor-pointer pb-1 border-b border-[#393E46]"
              >
                <span>Discuss a Project or Collaboration</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
