import { Shield, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'الرئيسية', href: '#' },
    { name: 'من نحن', href: '#about' },
    { name: 'الخدمات', href: '#services' },
    { name: 'العملاء', href: '#clients' },
    { name: 'تواصل', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-mazoon-navy/10 py-3' : 'bg-white/70 backdrop-blur-md py-6'
      }`}
    >
      <div className="container mx-auto px-8 lg:px-16 max-w-[1400px]">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <Shield className="w-6 h-6 text-mazoon-gold transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
            <div className="text-xl font-light tracking-wide text-mazoon-navy">
              مزون للسلامة
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-sm font-light tracking-wide text-mazoon-navy hover:text-mazoon-gold transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 right-0 w-0 h-[2px] bg-mazoon-gold group-hover:w-full transition-all duration-500"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="px-8 py-3 bg-mazoon-gold text-mazoon-navy text-sm font-medium tracking-wide hover:bg-mazoon-navy hover:text-white transition-all duration-500"
            >
              استشر الآن
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-mazoon-navy p-2 hover:bg-mazoon-gold/10 transition-colors duration-300 rounded"
            aria-label="فتح القائمة"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-8 pb-6 flex flex-col gap-6 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-mazoon-navy hover:text-mazoon-gold font-light transition-colors py-2 text-lg border-b border-mazoon-navy/5 hover:border-mazoon-gold/30 hover:translate-x-2 transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-8 py-4 bg-mazoon-gold text-mazoon-navy text-center font-medium tracking-wide hover:bg-mazoon-navy hover:text-white transition-all duration-500"
            >
              استشر الآن
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
