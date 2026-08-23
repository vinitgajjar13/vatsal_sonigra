import React from 'react';
import { motion } from 'motion/react';
import { skillCategories } from '../data/portfolioData';
import { Zap, DraftingCompass, CheckCircle, ShieldCheck } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const categoryIcons: Record<string, React.ReactNode> = {
    'electrical-design': <Zap className="w-5 h-5 text-[#393E46]" />,
    'autocad': <DraftingCompass className="w-5 h-5 text-[#393E46]" />,
    'professional-skills': <ShieldCheck className="w-5 h-5 text-[#393E46]" />
  };

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#EEEEEE] border-b border-[#929AAB]/20 relative">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-cad-grid-dense opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#393E46] uppercase">
            [ SECTION 03 // COMPETENCY MATRIX ]
          </span>
          <div className="h-[1px] flex-1 bg-[#929AAB]/30" />
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#393E46] tracking-tight leading-[1.08] mb-5 font-serif">
            Skills & Expertise
          </h2>
          <p className="text-base sm:text-lg text-[#393E46]/80 leading-relaxed font-sans">
            Structured core competencies across electrical engineering fundamentals, precision AutoCAD 2D drafting, and disciplined technical documentation.
          </p>
        </div>

        {/* 3 Structured Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((categoryGroup, idx) => (
            <motion.div
              key={categoryGroup.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#F7F7F7] border border-[#929AAB]/30 p-6 sm:p-8 flex flex-col justify-between shadow-2xs relative group hover:border-[#393E46] transition-colors duration-200"
            >
              {/* Category Top Indicator */}
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#929AAB]/20">
                  <div className="flex items-center gap-2.5">
                    {categoryIcons[categoryGroup.id]}
                    <span className="font-mono text-xs font-bold text-[#393E46] uppercase tracking-wider">
                      CAT 0{idx + 1}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#929AAB]">
                    [ 0{categoryGroup.skills.length} ITEMS ]
                  </span>
                </div>

                <h3 className="text-2xl font-normal text-[#393E46] font-serif mb-3">
                  {categoryGroup.category}
                </h3>

                <p className="text-xs text-[#393E46]/75 leading-relaxed font-sans mb-8">
                  {categoryGroup.description}
                </p>

                {/* Skills Item List */}
                <div className="space-y-4">
                  {categoryGroup.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-3 bg-[#EEEEEE] border border-[#929AAB]/20 space-y-1 hover:bg-[#EEEEEE]/80 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#393E46]" />
                        <h4 className="font-mono text-xs font-bold text-[#393E46] uppercase tracking-tight">
                          {skill.name}
                        </h4>
                      </div>
                      <p className="text-[11px] text-[#393E46]/80 leading-normal pl-3.5">
                        {skill.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom Meta */}
              <div className="mt-8 pt-4 border-t border-[#929AAB]/20 flex items-center justify-between text-[10px] font-mono text-[#929AAB]">
                <span>STANDARDIZED PRACTICE</span>
                <span>STATUS: VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
