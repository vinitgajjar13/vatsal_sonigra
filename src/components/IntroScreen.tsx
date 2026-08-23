import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

/**
 * INTRO SCREEN CONFIGURATION
 * Easily adjust typing speeds, pauses, and display duration here.
 */
export const INTRO_CONFIG = {
  INITIAL_DELAY_MS: 400,     // Delay before typing begins
  TYPING_SPEED_MS: 80,       // Average delay between characters
  LINE_PAUSE_MS: 500,        // Pause between line 1 ("Hi") and line 2 ("I am Vatsal Sonigra")
  HOLD_DURATION_MS: 1500,    // Time to hold the completed text before fading out
  FADE_DURATION_S: 0.8,      // Duration of the fade-out transition
};

interface IntroScreenProps {
  onComplete: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [activeLine, setActiveLine] = useState<1 | 2>(1);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const isCompletedRef = useRef(false);

  const FULL_LINE_1 = 'Hi';
  const FULL_LINE_2 = 'I am Vatsal Sonigra';

  // Subtle synthesized keypress sound using Web Audio API
  const playTypingSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
      }

      // Create a soft, realistic mechanical key click
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Bandpass filter for natural acoustic key click
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400 + Math.random() * 300, ctx.currentTime);
      filter.Q.setValueAtTime(2.5, ctx.currentTime);

      // Short impulsive decay
      osc.type = 'sine';
      osc.frequency.setValueAtTime(340 + Math.random() * 60, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(90, ctx.currentTime + 0.022);

      // Very subtle and low volume
      gain.gain.setValueAtTime(0.035, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.022);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.022);
    } catch {
      // Gracefully handle any browser audio block
    }
  };

  const handleFinish = () => {
    if (isCompletedRef.current) return;
    isCompletedRef.current = true;
    onComplete();
  };

  useEffect(() => {
    // Prevent body scrolling during intro screen
    document.body.style.overflow = 'hidden';

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setLine1(FULL_LINE_1);
      setLine2(FULL_LINE_2);
      setIsTypingComplete(true);
      const timer = setTimeout(handleFinish, 1200);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }

    const timeouts: NodeJS.Timeout[] = [];

    // Helper for scheduling
    const schedule = (fn: () => void, delay: number) => {
      const id = setTimeout(fn, delay);
      timeouts.push(id);
      return delay;
    };

    let currentTime = INTRO_CONFIG.INITIAL_DELAY_MS;

    // Step 1: Type Line 1 ("Hi")
    for (let i = 0; i < FULL_LINE_1.length; i++) {
      const char = FULL_LINE_1[i];
      const charDelay = INTRO_CONFIG.TYPING_SPEED_MS + (Math.random() * 20 - 10);
      currentTime += charDelay;

      schedule(() => {
        setLine1((prev) => prev + char);
        playTypingSound();
      }, currentTime);
    }

    // Step 2: Pause between lines & switch active cursor
    currentTime += INTRO_CONFIG.LINE_PAUSE_MS;
    schedule(() => {
      setActiveLine(2);
    }, currentTime);

    // Step 3: Type Line 2 ("I am Vatsal Sonigra")
    for (let i = 0; i < FULL_LINE_2.length; i++) {
      const char = FULL_LINE_2[i];
      const charDelay = INTRO_CONFIG.TYPING_SPEED_MS + (Math.random() * 24 - 12);
      currentTime += charDelay;

      schedule(() => {
        setLine2((prev) => prev + char);
        playTypingSound();
      }, currentTime);
    }

    // Step 4: Typing completed
    currentTime += 100;
    schedule(() => {
      setIsTypingComplete(true);
    }, currentTime);

    // Step 5: Hold completed screen before starting smooth exit
    currentTime += INTRO_CONFIG.HOLD_DURATION_MS;
    schedule(() => {
      handleFinish();
    }, currentTime);

    // Keyboard listener: allow user to press Escape or Space to skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        handleFinish();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      timeouts.forEach(clearTimeout);
      window.removeEventListener('keydown', handleKeyDown);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
    };
  }, []);

  return (
    <motion.div
      key="intro-screen-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: INTRO_CONFIG.FADE_DURATION_S, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 bg-[#EEEEEE] flex flex-col items-center justify-center px-6 sm:px-12 select-none overflow-hidden"
      aria-live="polite"
      role="region"
      aria-label="Welcome introduction"
    >
      {/* Subtle CAD Linework Watermark */}
      <div className="absolute inset-0 bg-cad-grid-dense opacity-20 pointer-events-none" />

      {/* Main Centered Content Container */}
      <div className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center justify-center space-y-3 sm:space-y-4">
        
        {/* Line 1: "Hi" */}
        <div className="min-h-[2.5rem] sm:min-h-[3.5rem] flex items-center justify-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#393E46]/85 tracking-tight">
            {line1}
            {activeLine === 1 && !isTypingComplete && (
              <span className="inline-block w-[2px] sm:w-[3px] h-[0.9em] bg-[#393E46] ml-1.5 align-baseline animate-pulse" />
            )}
          </h2>
        </div>

        {/* Line 2: "I am Vatsal Sonigra" */}
        <div className="min-h-[3.5rem] sm:min-h-[5.5rem] flex items-center justify-center">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#393E46] tracking-tight leading-none">
            {line2}
            {activeLine === 2 && !isTypingComplete && (
              <span className="inline-block w-[2.5px] sm:w-[4px] h-[0.9em] bg-[#393E46] ml-2 align-baseline animate-pulse" />
            )}
          </h1>
        </div>

      </div>

      {/* Subtle, unobtrusive Skip button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        whileHover={{ opacity: 1 }}
        onClick={handleFinish}
        className="absolute bottom-8 sm:bottom-10 right-8 sm:right-10 text-[11px] font-mono tracking-widest uppercase text-[#929AAB] hover:text-[#393E46] transition-colors cursor-pointer focus:outline-none"
      >
        [ Skip Intro ]
      </motion.button>
    </motion.div>
  );
};
