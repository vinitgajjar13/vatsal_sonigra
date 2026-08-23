import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { IntroScreen } from './components/IntroScreen';
import { CustomCursor } from './components/animations/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AllProjectsPage } from './components/AllProjectsPage';
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

  const [currentView, setCurrentView] = useState<'home' | 'all-projects'>('home');
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

  const handleNavigate = (sectionId: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 80);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleViewAllProjects = () => {
    setCurrentView('all-projects');
  };

  const handleBackToHome = (targetSection = 'projects') => {
    setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById(targetSection);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 80);
  };

  // Active section observer on scroll (when on home page)
  useEffect(() => {
    if (currentView !== 'home') {
      setActiveSection('projects');
      return;
    }

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
  }, [currentView]);

  return (
    <>
      {/* Precision CAD Custom Cursor for Desktop */}
      <CustomCursor />

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
          onNavigate={handleNavigate}
        />

        <AnimatePresence mode="wait">
          {currentView === 'home' ? (
            <motion.main
              key="home-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* 1. Hero Section (Spacious, Typography-Driven, animated CAD linework) */}
              <HeroSection 
                onViewWork={() => handleNavigate('projects')}
                onGetInTouch={() => handleNavigate('contact')}
              />

              {/* 2. About Section (Editorial Portrait with Technical Frame, Biography & Info Block) */}
              <AboutSection 
                onContactClick={() => handleNavigate('contact')}
              />

              {/* 3. Selected Work / Projects Section (Displays 3 Featured Projects + View All Button) */}
              <ProjectsSection 
                onStartInquiry={(_projectName) => handleNavigate('contact')}
                onViewAllProjects={handleViewAllProjects}
              />

              {/* 4. Skills & Expertise (Electrical Design, AutoCAD, Professional Skills) */}
              <SkillsSection />

              {/* 5. Contact Section ("Let's Connect") */}
              <ContactSection />
            </motion.main>
          ) : (
            <motion.main
              key="all-projects-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AllProjectsPage 
                onBackToHome={handleBackToHome}
                onContactClick={() => handleNavigate('contact')}
              />
            </motion.main>
          )}
        </AnimatePresence>

        {/* 6. Footer (Minimal, Technical, Back to Top) */}
        <Footer 
          onNavigate={handleNavigate}
        />

      </div>
    </>
  );
}
