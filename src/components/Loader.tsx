import { Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center animate-fade-out">
      <div className="text-center space-y-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-4 border-mazoon-gold/20 rounded-full animate-ping"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 border-4 border-t-mazoon-gold border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          </div>
          <div className="relative z-10 flex items-center justify-center h-32">
            <Shield className="w-16 h-16 text-mazoon-gold animate-pulse" strokeWidth={1.5} />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-light text-mazoon-navy tracking-wide">
            مزون للسلامة
          </h2>

          <div className="w-64 h-1 bg-mazoon-navy/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-mazoon-gold to-mazoon-navy transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
