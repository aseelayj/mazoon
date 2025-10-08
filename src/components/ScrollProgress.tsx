import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-mazoon-navy/5 z-[99]">
      <div
        className="h-full bg-gradient-to-r from-mazoon-gold to-mazoon-navy transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
}
