import React, { useState, useEffect, useCallback } from 'react';
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
  // Always show intro screen on page load / refresh
  const [showIntro, setShowIntro] = useState(true);

  // View state: 'home' or 'all-projects'
  const [currentView, setCurrentView] = useState<'home' | 'all-projects'>(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash === '#all-projects' ? 'all-projects' : 'home';
    }
    return 'home';
  });

  const [activeSection, setActiveSection] = useState('hero');
  const [contactSubject, setContactSubject] = useState('');
  const [pendingScrollSection, setPendingScrollSection] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 28,
    restDelta: 0.001
  });

  // Accurate, reliable cross-browser scroll executor
  const performSmoothScroll = useCallback((sectionId: string) => {
    // Ensure body scroll lock is cleared
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';

    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = window.innerWidth < 768 ? 65 : 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const targetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth',
      });
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    
    // Check if initial URL had a hash to scroll to
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash !== 'all-projects') {
        setTimeout(() => {
          performSmoothScroll(hash);
        }, 120);
      }
    }
  };

  // Primary navigation handler
  const handleNavigate = useCallback((sectionId: string) => {
    // 1. If currently in 'all-projects' view and user wants a home section
    if (currentView !== 'home') {
      if (window.location.hash !== `#${sectionId}`) {
        window.history.pushState(null, '', `#${sectionId}`);
      }
      setPendingScrollSection(sectionId);
      setCurrentView('home');
      return;
    }

    // 2. If already in home view
    if (window.location.hash !== `#${sectionId}`) {
      window.history.pushState(null, '', `#${sectionId}`);
    }
    performSmoothScroll(sectionId);
  }, [currentView, performSmoothScroll]);

  // Navigate to All Projects page
  const handleViewAllProjects = useCallback(() => {
    if (window.location.hash !== '#all-projects') {
      window.history.pushState(null, '', '#all-projects');
    }
    setCurrentView('all-projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Back to home view handler
  const handleBackToHome = useCallback((targetSection = 'projects') => {
    if (window.location.hash !== `#${targetSection}`) {
      window.history.pushState(null, '', `#${targetSection}`);
    }
    setPendingScrollSection(targetSection);
    setCurrentView('home');
  }, []);

  // When returning to home view, execute any pending scroll target
  useEffect(() => {
    if (currentView === 'home' && pendingScrollSection) {
      const target = pendingScrollSection;
      setPendingScrollSection(null);
      // Allow DOM to finish mounting
      const timer = setTimeout(() => {
        performSmoothScroll(target);
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [currentView, pendingScrollSection, performSmoothScroll]);

  const handleInquireFromProject = useCallback((projectTitle: string) => {
    setContactSubject(`Inquiry regarding: ${projectTitle}`);
    handleNavigate('contact');
  }, [handleNavigate]);

  // Synchronize browser history / URL hash changes (Back & Forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'all-projects') {
        setCurrentView('all-projects');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        if (currentView !== 'home') {
          setPendingScrollSection(hash || 'hero');
          setCurrentView('home');
        } else if (hash) {
          performSmoothScroll(hash);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, [currentView, performSmoothScroll]);

  // Active section observer on scroll
  useEffect(() => {
    if (currentView !== 'home') {
      setActiveSection('projects');
      return;
    }

    const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      
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

      {/* 0. Fullscreen Minimalist Intro Screen with Typing Animation (Plays on page load/refresh) */}
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
          currentView={currentView}
          onNavigate={handleNavigate}
        />

        {/* Views Container */}
        {currentView === 'home' ? (
          <main key="home-view" className="w-full">
            {/* 1. Hero Section */}
            <HeroSection 
              onViewWork={() => handleNavigate('projects')}
              onGetInTouch={() => handleNavigate('contact')}
            />

            {/* 2. About Section */}
            <AboutSection 
              onContactClick={() => handleNavigate('contact')}
            />

            {/* 3. Selected Work / Projects Section */}
            <ProjectsSection 
              onStartInquiry={handleInquireFromProject}
              onViewAllProjects={handleViewAllProjects}
            />

            {/* 4. Skills & Expertise */}
            <SkillsSection />

            {/* 5. Contact Section */}
            <ContactSection 
              initialSubject={contactSubject}
            />
          </main>
        ) : (
          <main key="all-projects-view" className="w-full">
            <AllProjectsPage 
              onBackToHome={handleBackToHome}
              onContactClick={() => handleNavigate('contact')}
            />
          </main>
        )}

        {/* 6. Footer */}
        <Footer 
          onNavigate={handleNavigate}
        />

      </div>
    </>
  );
}
