import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, FileCheck, Layers, Wrench, CheckCircle2, DraftingCompass, FileText } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  // Lock body scroll and handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {/* Unified single scroll context: no nested scroll trapping */}
      <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden p-3 sm:p-6 md:p-8 flex items-start justify-center">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#393E46]/70 backdrop-blur-xs"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#F7F7F7] border border-[#929AAB]/40 shadow-2xl z-10 text-[#393E46] my-4 sm:my-8"
        >
          {/* Sticky Technical Header (Always accessible at top on mobile) */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-8 py-3.5 sm:py-4 bg-[#EEEEEE] border-b border-[#929AAB]/30 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#393E46] text-[#F7F7F7] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                {project.number}
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#525866] uppercase tracking-wider block leading-none">
                  TECHNICAL PROJECT SPECIFICATION
                </span>
                <span className="font-mono text-xs font-semibold text-[#393E46]">
                  {project.drawingCode || 'DWG-REF-ELEC'}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#525866] hover:text-[#393E46] hover:bg-[#F7F7F7] border border-[#929AAB]/30 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body (Natural flow inside unified scroll container) */}
          <div className="p-5 sm:p-10 space-y-8 sm:space-y-10 font-sans">
            
            {/* Project Header */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3 text-xs font-mono text-[#525866]">
                <span className="px-2.5 py-1 bg-[#EEEEEE] border border-[#929AAB]/30 text-[#393E46] font-semibold">
                  {project.category}
                </span>
                <span>•</span>
                <span>{project.year}</span>
                {project.client && (
                  <>
                    <span>•</span>
                    <span>Client: {project.client}</span>
                  </>
                )}
              </div>

              <h2 className="text-2xl sm:text-4xl font-normal text-[#393E46] leading-tight font-serif mb-4">
                {project.title}
              </h2>

              <p className="text-sm sm:text-base text-[#393E46]/80 leading-relaxed font-sans">
                {project.tagline}
              </p>
            </div>

            {/* Drawing Preview Image with Technical Framing */}
            <div className="relative border border-[#929AAB]/40 bg-[#EEEEEE] overflow-hidden">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale contrast-110"
                />
              </div>

              {/* Technical Bottom Label Strip */}
              <div className="p-3 bg-[#EEEEEE] border-t border-[#929AAB]/30 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-[#393E46]">
                <span>SCALE: {project.scale || '1:50'}</span>
                <span>SHEET: {project.sheetSize || 'ISO A1'}</span>
                <span>STATUS: ISSUED FOR CONSTRUCTION</span>
              </div>
            </div>

            {/* Project Metadata Grid: Tools & Role */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-[#EEEEEE] border border-[#929AAB]/30 text-xs font-mono">
              <div>
                <div className="text-[10px] text-[#525866] uppercase mb-1">ENGINEERING ROLE</div>
                <div className="font-semibold text-[#393E46]">{project.role}</div>
              </div>
              <div className="sm:col-span-2">
                <div className="text-[10px] text-[#525866] uppercase mb-1">TOOLS USED</div>
                <div className="font-semibold text-[#393E46] flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-[#F7F7F7] border border-[#929AAB]/30">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 1: Overview & Objective */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-2">
                <div className="font-mono text-xs font-bold text-[#393E46] uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-[#393E46]" />
                  <span>Project Overview</span>
                </div>
                <p className="text-sm text-[#393E46]/85 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="space-y-2">
                <div className="font-mono text-xs font-bold text-[#393E46] uppercase tracking-wider flex items-center gap-2">
                  <DraftingCompass className="w-3.5 h-3.5 text-[#393E46]" />
                  <span>Engineering Objective</span>
                </div>
                <p className="text-sm text-[#393E46]/85 leading-relaxed">
                  {project.objective}
                </p>
              </div>
            </div>

            {/* Section 2: Key Responsibilities */}
            <div className="space-y-4">
              <div className="font-mono text-xs font-bold text-[#393E46] uppercase tracking-wider flex items-center gap-2">
                <Wrench className="w-3.5 h-3.5 text-[#393E46]" />
                <span>Responsibilities & Scope</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#393E46]/90">
                {project.responsibilities.map((resp, idx) => (
                  <div key={idx} className="p-3 bg-[#EEEEEE] border border-[#929AAB]/20 flex items-start gap-2.5">
                    <span className="font-mono text-[#525866] font-semibold">{idx + 1}.</span>
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Design Process & Deliverables */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Design Process */}
              <div className="space-y-4">
                <div className="font-mono text-xs font-bold text-[#393E46] uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[#393E46]" />
                  <span>Design & Workflow</span>
                </div>
                <div className="space-y-2 text-xs font-mono text-[#393E46]">
                  {project.designProcess.map((step, idx) => (
                    <div key={idx} className="p-2.5 bg-[#F7F7F7] border-l-2 border-[#393E46] pl-3">
                      <span className="text-[#525866] mr-2">STEP {idx + 1}:</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="space-y-4">
                <div className="font-mono text-xs font-bold text-[#393E46] uppercase tracking-wider flex items-center gap-2">
                  <FileCheck className="w-3.5 h-3.5 text-[#393E46]" />
                  <span>Key Deliverables</span>
                </div>
                <div className="space-y-2 text-xs text-[#393E46]">
                  {project.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#393E46] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 4: Final Result */}
            <div className="p-5 bg-[#EEEEEE] border border-[#929AAB]/30 space-y-2">
              <div className="font-mono text-xs font-bold text-[#393E46] uppercase tracking-wider">
                Final Result & Impact
              </div>
              <p className="text-sm text-[#393E46]/90 leading-relaxed font-sans">
                {project.finalResult}
              </p>
            </div>

          </div>

          {/* Sticky Modal Footer / Action CTA */}
          <div className="sticky bottom-0 z-20 px-5 sm:px-8 py-3.5 sm:py-4 bg-[#EEEEEE] border-t border-[#929AAB]/30 flex flex-wrap items-center justify-between gap-3 shadow-xs">
            <button
              type="button"
              onClick={onClose}
              className="min-h-[40px] px-3 py-2 text-xs font-mono uppercase tracking-wider text-[#525866] hover:text-[#393E46] transition-colors cursor-pointer"
            >
              [ Close Specification ]
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onInquire(project.title);
              }}
              className="min-h-[44px] inline-flex items-center gap-2 px-6 py-2.5 bg-[#393E46] text-[#F7F7F7] text-xs font-semibold uppercase tracking-wider hover:bg-[#393E46]/90 active:scale-98 transition-all cursor-pointer shadow-xs"
            >
              <span>Inquire About Similar Design Scope</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
