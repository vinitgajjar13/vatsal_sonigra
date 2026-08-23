import React, { useState } from 'react';
import { motion } from 'motion/react';
import { projectsList } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, DraftingCompass, Layers, FileText } from 'lucide-react';

interface ProjectsSectionProps {
  onStartInquiry: (projectName: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onStartInquiry }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#F7F7F7] border-b border-[#929AAB]/20 relative">
      
      {/* Background CAD grid */}
      <div className="absolute inset-0 bg-cad-grid opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#393E46] uppercase">
            [ SECTION 02 // PORTFOLIO ]
          </span>
          <div className="h-[1px] flex-1 bg-[#929AAB]/30" />
        </div>

        {/* Section Heading & Supporting Statement */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#393E46] tracking-tight leading-[1.08] mb-5 font-serif">
            Selected Projects
          </h2>
          <p className="text-base sm:text-lg text-[#393E46]/80 leading-relaxed font-sans">
            A collection of electrical design and documentation projects demonstrating technical knowledge, precision, and practical application.
          </p>
        </div>

        {/* Large Project Cards Showcase */}
        <div className="space-y-16 sm:space-y-24">
          {projectsList.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
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

              {/* Main Card Content: Two Columns (Visual Left/Right alternation or clean Grid) */}
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
                          className="px-2.5 py-1 bg-[#F7F7F7] border border-[#929AAB]/20 text-[11px] font-mono text-[#393E46]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Project Action Link */}
                  <div className="pt-4 border-t border-[#929AAB]/20 flex items-center justify-between">
                    <button
                      type="button"
                      className="font-mono text-xs font-semibold uppercase tracking-wider text-[#393E46] flex items-center gap-2 group-hover:underline cursor-pointer focus:outline-none"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>

                    <span className="text-[11px] font-mono text-[#929AAB]">
                      {project.scale}
                    </span>
                  </div>

                </div>

                {/* Right Side: Image / CAD Schematic Preview */}
                <div className="lg:col-span-6 relative bg-[#393E46]/5 border-t lg:border-t-0 lg:border-l border-[#929AAB]/30 overflow-hidden aspect-[16/10] lg:aspect-auto">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  {/* Technical Overlay Bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-[#393E46]/85 text-[#F7F7F7] text-[10px] font-mono flex items-center justify-between backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>CAD LAYER: 0_ELEC_PRIMARY</span>
                    <span className="uppercase">Click to Inspect Full Scope</span>
                  </div>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(projectName) => onStartInquiry(projectName)}
      />

    </section>
  );
};
