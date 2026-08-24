import React from 'react';
import { motion } from 'motion/react';
import { BlurText } from './BlurText';

interface SectionHeaderProps {
  index: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  title,
  subtitle,
  className = 'mb-12 sm:mb-16',
  align = 'left',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'} ${className}`}>
      
      {/* 1. Section Index Marker & Expanding CAD Axis Line */}
      <div className={`flex items-center gap-3 mb-5 ${isCenter ? 'justify-center' : ''}`}>
        {isCenter && (
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="h-[1px] w-8 sm:w-16 bg-[#929AAB]/40 origin-right"
          />
        )}

        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-xs font-semibold tracking-[0.2em] text-[#393E46] uppercase shrink-0"
        >
          {index}
        </motion.span>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className={`h-[1px] bg-[#929AAB]/30 origin-left ${isCenter ? 'w-8 sm:w-16' : 'flex-1'}`}
        />
      </div>

      {/* 2. Main Heading with Blur Text Reveal */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#393E46] tracking-tight leading-[1.08] mb-4 font-serif">
        <BlurText text={title} delay={0.08} />
      </h2>

      {/* 3. Supporting Subtitle with Fade-up Stagger */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg text-[#393E46]/80 leading-relaxed font-sans"
        >
          {subtitle}
        </motion.p>
      )}

    </div>
  );
};
