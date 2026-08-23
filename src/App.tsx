import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { IntroScreen } from './components/IntroScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    // Check if visitor has already viewed the intro in this browser session
    if (typeof window !== 'undefined') {
      const hasSeen = sessionStorage.getItem('vatsal_portfolio_intro_seen');
      return !hasSeen;
    }
    return true;
  });

  const [activeSection, setActiveSection] = useState('hero');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  const handleIntroComplete = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('vatsal_portfolio_intro_seen', 'true');
    }
    setShowIntro(false);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Active section observer on scroll
  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 0. Fullscreen Minimalist Intro Screen with Typing Animation */}
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroScreen key="intro-screen" onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-[#F7F7F7] text-[#393E46] selection:bg-[#393E46] selection:text-[#F7F7F7] font-sans antialiased">
        
        {/* Top Precision Scroll Progress Line */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-[#393E46] origin-left z-50 pointer-events-none"
          style={{ scaleX }}
        />

        {/* Navigation Bar */}
        <Navbar 
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />

        <main>
          {/* 1. Hero Section (Spacious, Typography-Driven, animated CAD linework) */}
          <HeroSection 
            onViewWork={() => scrollToSection('projects')}
            onGetInTouch={() => scrollToSection('contact')}
          />

          {/* 2. About Section (Editorial Portrait with Technical Frame, Biography & Info Block) */}
          <AboutSection 
            onContactClick={() => scrollToSection('contact')}
          />

          {/* 3. Selected Work / Projects Section (Large Project Cards & Full Specification Modal) */}
          <ProjectsSection 
            onStartInquiry={(_projectName) => scrollToSection('contact')}
          />

          {/* 4. Skills & Expertise (Electrical Design, AutoCAD, Professional Skills) */}
          <SkillsSection />

          {/* 5. Contact Section ("Let's Connect") */}
          <ContactSection />
        </main>

        {/* 6. Footer (Minimal, Technical, Back to Top) */}
        <Footer 
          onNavigate={scrollToSection}
        />

      </div>
    </>
  );
}
