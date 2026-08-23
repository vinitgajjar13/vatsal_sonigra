import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsList, personalInfo } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { SectionHeader } from './animations/SectionHeader';
import { ArrowLeft, ArrowUpRight, DraftingCompass, Filter, Layers, Mail, CheckCircle2 } from 'lucide-react';

interface AllProjectsPageProps {
  onBackToHome: (targetSection?: string) => void;
  onContactClick: () => void;
}

export const AllProjectsPage: React.FC<AllProjectsPageProps> = ({ onBackToHome, onContactClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categories = ['All', ...Array.from(new Set(projectsList.map((p) => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? projectsList
    : projectsList.filter((p) => p.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-[#F7F7F7] pt-28 sm:pt-36 pb-24 px-6 sm:px-10 lg:px-16 relative"
    >
      {/* Background CAD grid */}
      <div className="absolute inset-0 bg-cad-grid opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Back Navigation Bar */}
        <div className="flex items-center justify-between gap-4 pb-8 mb-12 border-b border-[#929AAB]/20">
          <motion.button
            onClick={() => onBackToHome('projects')}
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#EEEEEE] hover:bg-[#393E46] text-[#393E46] hover:text-[#F7F7F7] border border-[#929AAB]/30 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home Overview</span>
          </motion.button>

          <div className="text-xs font-mono text-[#929AAB] hidden sm:block">
            SHOWING {filteredProjects.length} OF {projectsList.length} TOTAL DRAWING PACKAGES
          </div>
        </div>

        {/* Section Header */}
        <SectionHeader
          index="[ COMPLETE ARCHIVE // ALL TECHNICAL PROJECTS ]"
          title="All Electrical Projects"
          subtitle="Explore the complete engineering archive of AutoCAD 2D drafting packages, single line diagrams, load distribution matrices, and critical facility schematics."
          className="mb-12 sm:mb-16"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-16 pb-6 border-b border-[#929AAB]/20">
          <div className="flex items-center gap-2 mr-2 text-xs font-mono text-[#929AAB]">
            <Filter className="w-3.5 h-3.5" />
            <span className="uppercase">Filter:</span>
          </div>

          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            const count = category === 'All' 
              ? projectsList.length 
              : projectsList.filter((p) => p.category === category).length;

            return (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#393E46] text-[#F7F7F7] border-[#393E46] shadow-xs'
                    : 'bg-[#EEEEEE] text-[#393E46] border-[#929AAB]/30 hover:border-[#393E46]'
                }`}
              >
                <span>{category}</span>
                <span className={`ml-1.5 text-[10px] ${isSelected ? 'text-[#929AAB]' : 'text-[#929AAB]'}`}>
                  ({count})
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Projects Grid / List */}
        <div className="space-y-16 sm:space-y-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-[#EEEEEE] border border-[#929AAB]/30 hover:border-[#393E46] transition-all duration-300 cursor-pointer overflow-hidden shadow-2xs"
              >
                {/* Technical Header Strip */}
                <div className="px-6 py-3 bg-[#EEEEEE] border-b border-[#929AAB]/20 flex items-center justify-between font-mono text-xs text-[#929AAB]">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[#393E46] transition-transform duration-300 group-hover:translate-x-1">
                      [{project.number}]
                    </span>
                    <span className="uppercase text-[11px] text-[#393E46]/80">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-[11px] hidden sm:inline">
                    {project.year} // {project.drawingCode}
                  </span>
                </div>

                {/* Main Card Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left Column: Details */}
                  <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-normal text-[#393E46] leading-tight font-serif mb-4 group-hover:text-[#393E46] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm text-[#393E46]/85 leading-relaxed font-sans mb-6">
                        {project.description}
                      </p>

                      {/* TOOLS */}
                      <div className="p-3.5 bg-[#F7F7F7] border border-[#929AAB]/30 mb-6">
                        <div className="font-mono text-[10px] font-bold text-[#929AAB] uppercase tracking-wider mb-1.5">
                          TOOLS & CAD DISCIPLINE
                        </div>
                        <div className="font-mono text-xs text-[#393E46] font-semibold">
                          {project.tools.join(' • ')}
                        </div>
                      </div>

                      {/* Skills Badges */}
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, sIdx) => (
                          <span 
                            key={sIdx}
                            className="px-2.5 py-1 bg-[#F7F7F7] border border-[#929AAB]/20 text-[11px] font-mono text-[#393E46] group-hover:border-[#929AAB]/50 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA Bar */}
                    <div className="pt-6 border-t border-[#929AAB]/20 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#929AAB]">
                        <DraftingCompass className="w-3.5 h-3.5" />
                        <span>{project.deliverables.length} Deliverables</span>
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#393E46] group-hover:underline">
                        <span>View Specifications</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual */}
                  <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#393E46]/10 border-t lg:border-t-0 lg:border-l border-[#929AAB]/30">
                    <motion.img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out will-change-transform"
                      referrerPolicy="no-referrer"
                    />

                    <div className="absolute top-3 right-3 px-2 py-1 bg-[#393E46]/85 backdrop-blur-xs text-[#F7F7F7] text-[9px] font-mono tracking-wider">
                      SCALE {project.scale}
                    </div>

                    <div className="absolute bottom-3 left-3 px-2 py-1 bg-[#F7F7F7]/90 text-[#393E46] text-[9px] font-mono tracking-wider border border-[#929AAB]/30">
                      SHEET: {project.sheetSize}
                    </div>
                  </div>

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-20 p-8 sm:p-12 bg-[#EEEEEE] border border-[#929AAB]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-normal text-[#393E46] font-serif">
              Require custom AutoCAD drawings or project schematics?
            </h4>
            <p className="text-xs sm:text-sm text-[#393E46]/80 font-sans max-w-xl">
              Available for remote and on-site engineering consultations, SLD development, and complete architectural CAD packages.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <motion.button
              onClick={() => onBackToHome('contact')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-[#393E46] text-[#F7F7F7] text-xs font-semibold uppercase tracking-wider hover:bg-[#393E46]/90 transition-all cursor-pointer shadow-xs whitespace-nowrap"
            >
              Get In Touch
            </motion.button>

            <motion.button
              onClick={() => onBackToHome('projects')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-[#F7F7F7] border border-[#929AAB]/40 text-[#393E46] text-xs font-semibold uppercase tracking-wider hover:bg-[#EEEEEE] transition-all cursor-pointer whitespace-nowrap"
            >
              Back to Home
            </motion.button>
          </div>
        </div>

      </div>

      {/* Project Specification Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(_projectName) => {
          setSelectedProject(null);
          onContactClick();
        }}
      />
    </motion.div>
  );
};
