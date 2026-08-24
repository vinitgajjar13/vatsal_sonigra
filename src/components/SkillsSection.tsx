import React from 'react';
import { motion } from 'motion/react';
import { skillCategories } from '../data/portfolioData';
import { Zap, DraftingCompass, ShieldCheck } from 'lucide-react';
import { SectionHeader } from './animations/SectionHeader';

export const SkillsSection: React.FC = () => {
  const categoryIcons: Record<string, React.ReactNode> = {
    'electrical-design': <Zap className="w-5 h-5 text-[#393E46]" />,
    'autocad': <DraftingCompass className="w-5 h-5 text-[#393E46]" />,
    'professional-skills': <ShieldCheck className="w-5 h-5 text-[#393E46]" />
  };

  return (
    <section id="skills" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#EEEEEE] border-b border-[#929AAB]/20 relative">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-cad-grid-dense opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          index="[ SECTION 03 // COMPETENCY MATRIX ]"
          title="Skills & Expertise"
          subtitle="Structured core competencies across electrical engineering fundamentals, precision AutoCAD 2D Design, and disciplined technical documentation."
          className="mb-12 sm:mb-16"
        />

        {/* 3 Structured Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((categoryGroup, idx) => (
            <motion.div
              key={categoryGroup.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              className="bg-[#F7F7F7] border border-[#929AAB]/30 p-6 sm:p-7 flex flex-col justify-between shadow-2xs relative group hover:border-[#393E46] transition-all duration-200"
            >
              {/* Category Top Indicator */}
              <div>
                <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#929AAB]/20">
                  <div className="flex items-center gap-2.5">
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      transition={{ duration: 0.15 }}
                    >
                      {categoryIcons[categoryGroup.id]}
                    </motion.div>
                    <span className="font-mono text-xs font-bold text-[#393E46] uppercase tracking-wider">
                      CAT 0{idx + 1}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#929AAB]">
                    [ 0{categoryGroup.skills.length} ITEMS ]
                  </span>
                </div>

                <h3 className="text-2xl font-normal text-[#393E46] font-serif mb-2.5">
                  {categoryGroup.category}
                </h3>

                <p className="text-xs text-[#393E46]/75 leading-relaxed font-sans mb-6">
                  {categoryGroup.description}
                </p>

                {/* Skills Item List */}
                <div className="space-y-2.5">
                  {categoryGroup.skills.map((skill, sIdx) => (
                    <motion.div 
                      key={sIdx}
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.1 }}
                      className="p-2.5 bg-[#EEEEEE] border border-[#929AAB]/20 space-y-0.5 hover:bg-[#EEEEEE]/90 hover:border-[#929AAB]/50 transition-all cursor-default"
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
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Card Bottom Meta */}
              <div className="mt-6 pt-3.5 border-t border-[#929AAB]/20 flex items-center justify-between text-[10px] font-mono text-[#929AAB]">
                <span>STANDARDIZED PRACTICE</span>
                <span className="text-[#393E46] font-semibold">VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
