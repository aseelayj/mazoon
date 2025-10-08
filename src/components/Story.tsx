import { TrendingUp, Award, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useEffect, useState } from 'react';

export default function Story() {
  const { elementRef, isVisible } = useScrollAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const stats = [
    {
      icon: TrendingUp,
      number: '13',
      suffix: '+',
      label: 'سنة من التميز والريادة',
      description: 'خبرة عميقة في مجال السلامة',
    },
    {
      icon: Award,
      number: '500',
      suffix: '+',
      label: 'مشروع منجز بنجاح',
      description: 'في مختلف القطاعات',
    },
    {
      icon: Users,
      number: '100',
      suffix: '+',
      label: 'عميل راضٍ وموثوق',
      description: 'شراكات طويلة الأمد',
    },
  ];

  return (
    <section ref={elementRef} id="about" className="relative py-32 bg-mazoon-navy overflow-hidden">
      {/* Subtle Background with Parallax */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute top-20 left-20 w-[500px] h-[500px] border border-white rounded-full transition-transform duration-300"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div
          className="absolute bottom-20 right-40 w-[300px] h-[300px] border border-mazoon-gold rounded-full transition-transform duration-300"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        ></div>
      </div>

      <div className="container mx-auto px-8 lg:px-16 max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          {/* Left Content */}
          <div className={`lg:col-span-6 space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3">
                <div className="w-16 h-[1px] bg-mazoon-gold"></div>
                <span className="text-xs font-light tracking-[0.3em] uppercase text-mazoon-gold">
                  قصة نجاحنا
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white leading-[1.15] tracking-tight break-words">
                نحن مزون<br />
                <span className="text-mazoon-gold/80 text-3xl sm:text-4xl lg:text-5xl">للسلامة</span>
              </h2>
            </div>

            <div className="space-y-8 text-white/60 font-light leading-[1.8] text-base sm:text-lg lg:text-xl max-w-2xl break-words">
              <p>
                منذ عام 2011، ونحن نقدم حلولاً شاملة للصحة والسلامة المهنية في سلطنة عمان. نركز على رفع مستوى الأمان والوقاية من المخاطر من خلال الفحص والتدقيق، وتصميم الأنظمة والسياسات.
              </p>

              <p className="text-white/40">
                نفخر بكوننا الشريك الموثوق للمؤسسات الرائدة، نساعدهم في بناء بيئات عمل آمنة ومستدامة تحمي أهم استثماراتهم - العنصر البشري.
              </p>
            </div>

            <div className="pt-8">
              <a
                href="#services"
                className="inline-flex items-center gap-4 text-white/60 hover:text-mazoon-gold font-light text-base tracking-wide group transition-colors duration-500"
              >
                <span>اكتشف رحلتنا</span>
                <div className="w-12 h-[1px] bg-mazoon-gold group-hover:w-24 transition-all duration-700"></div>
              </a>
            </div>
          </div>

          {/* Right - Image and Stats */}
          <div className="lg:col-span-6 space-y-12">
            {/* Team Image */}
            <div className="relative h-96 overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Mazoon Safety Team"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mazoon-navy via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 right-6 left-6">
                <p className="text-white text-lg font-light">فريق مزون للسلامة</p>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-12">
            {stats.map((stat, index) => {
              const delay = index * 200;
              return (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="flex items-start gap-8 pb-12 border-b border-white/5 hover:border-mazoon-gold/20 transition-all duration-700">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 border border-white/10 group-hover:border-mazoon-gold/40 flex items-center justify-center transition-all duration-700">
                    <stat.icon className="w-7 h-7 text-white/30 group-hover:text-mazoon-gold transition-all duration-700" strokeWidth={1} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-mazoon-gold leading-none">
                        {stat.number}
                      </span>
                      <span className="text-3xl sm:text-4xl font-extralight text-mazoon-gold/60">
                        {stat.suffix}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-light text-white group-hover:text-mazoon-gold transition-colors duration-700 break-words">
                      {stat.label}
                    </h3>

                    <p className="text-white/40 font-light text-base">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
