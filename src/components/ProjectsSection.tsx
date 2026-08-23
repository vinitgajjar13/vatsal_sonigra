import React, { useState } from 'react';
import { motion } from 'motion/react';
import { projectsList } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, DraftingCompass, ArrowRight } from 'lucide-react';
import { SectionHeader } from './animations/SectionHeader';

interface ProjectsSectionProps {
  onStartInquiry: (projectName: string) => void;
  onViewAllProjects: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  onStartInquiry, 
  onViewAllProjects 
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Show only first 3 featured projects in the home section
  const featuredProjects = projectsList.slice(0, 3);

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#F7F7F7] border-b border-[#929AAB]/20 relative">
      
      {/* Background CAD grid */}
      <div className="absolute inset-0 bg-cad-grid opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header with Expanding Axis Line & Blur Title */}
        <SectionHeader
          index="[ SECTION 02 // SELECTED PORTFOLIO ]"
          title="Selected Projects"
          subtitle="A curated selection of electrical design and documentation projects demonstrating technical knowledge, precision, and practical application."
          className="mb-16 sm:mb-20"
        />

        {/* 3 Featured Project Cards Showcase */}
        <div className="space-y-16 sm:space-y-24">
          {featuredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-[#EEEEEE] border border-[#929AAB]/30 hover:border-[#393E46] transition-all duration-300 cursor-pointer overflow-hidden shadow-2xs"
            >
              {/* Technical Header Strip on Card */}
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

              {/* Main Card Content: Two Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left Side: Technical Info & Details */}
                <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                  
                  <div>
                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl font-normal text-[#393E46] leading-tight font-serif mb-4 group-hover:text-[#393E46] transition-colors">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-[#393E46]/85 leading-relaxed font-sans mb-6">
                      {project.description}
                    </p>

                    {/* TOOLS Block */}
                    <div className="p-3.5 bg-[#F7F7F7] border border-[#929AAB]/30 mb-6">
                      <div className="font-mono text-[10px] font-bold text-[#929AAB] uppercase tracking-wider mb-1.5">
                        TOOLS
                      </div>
                      <div className="font-mono text-xs text-[#393E46] font-semibold">
                        {project.tools.join(' • ')}
                      </div>
                    </div>

                    {/* Relevant Skills Badges */}
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

                  {/* Card Bottom CTA & Metadata Bar */}
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

                {/* Right Side: Architectural Drawing Visual / Preview with Subtle Zoom */}
                <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#393E46]/10 border-t lg:border-t-0 lg:border-l border-[#929AAB]/30">
                  <motion.img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out will-change-transform"
                    referrerPolicy="no-referrer"
                  />

                  {/* CAD Overlay Metadata Tags */}
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
        </div>

        {/* View All / Other Projects Button Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 sm:mt-20 p-8 sm:p-10 bg-[#EEEEEE] border border-[#929AAB]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div className="space-y-1">
            <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[#393E46]">
              ENGINEERING DRAWING ARCHIVE
            </div>
            <p className="text-xs sm:text-sm text-[#393E46]/75 font-sans">
              Displaying 3 of {projectsList.length} featured works. Explore the complete repository of substation, healthcare, and residential schematics.
            </p>
          </div>

          <motion.button
            onClick={onViewAllProjects}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#393E46] text-[#F7F7F7] text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#393E46]/90 transition-all cursor-pointer shadow-xs border border-[#393E46] whitespace-nowrap"
          >
            <span>View All Projects ({projectsList.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>

      </div>

      {/* Full Drawing Specification Modal */}
      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(projectName) => {
          setSelectedProject(null);
          onStartInquiry(projectName);
        }}
      />
    </section>
  );
};
