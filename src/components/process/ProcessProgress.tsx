import { useEffect, useState } from 'react';

export const ProcessProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-background/50 backdrop-blur-sm">
      <div
        className="h-full bg-gradient-to-r from-accent via-accent/80 to-accent transition-all duration-150 shadow-[0_0_10px_hsl(var(--accent)/0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};