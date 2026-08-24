import React, { useState, useEffect } from 'react';

interface TextTypeProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorClassName?: string;
}

export const TextType: React.FC<TextTypeProps> = ({
  words,
  typingSpeed = 45,
  deletingSpeed = 24,
  pauseDuration = 1500,
  className = '',
  cursorClassName = 'bg-[#393E46]',
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayedText(words[0] || '');
      return;
    }

    const currentWord = words[currentWordIndex] || '';

    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentWord) {
      // Finished typing current word, pause before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && displayedText === '') {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      // Currently typing or deleting characters
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`inline-flex items-center ${className}`} aria-label={words[currentWordIndex]}>
      <span>{displayedText}</span>
      <span
        className={`inline-block w-[2px] h-[1em] ml-1 align-baseline animate-pulse ${cursorClassName}`}
        aria-hidden="true"
      />
    </span>
  );
};
