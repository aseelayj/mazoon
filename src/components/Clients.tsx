import { Building2, Briefcase, Heart, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Clients() {
  const { elementRef, isVisible } = useScrollAnimation();
  const sectors = [
    {
      icon: Building2,
      name: 'المؤسسات الحكومية',
      count: '50',
      description: 'شراكات استراتيجية مع الجهات الحكومية',
    },
    {
      icon: Briefcase,
      name: 'الشركات الكبرى',
      count: '120',
      description: 'خدمات متكاملة للقطاع الخاص',
    },
    {
      icon: Heart,
      name: 'القطاع الصحي',
      count: '30',
      description: 'حلول سلامة متخصصة للمرافق الطبية',
    },
    {
      icon: GraduationCap,
      name: 'القطاع التعليمي',
      count: '40',
      description: 'بيئات آمنة للطلاب والمعلمين',
    },
  ];

  return (
    <section ref={elementRef} id="clients" className="relative py-32 bg-gradient-to-b from-mazoon-navy/[0.02] to-white overflow-hidden">
      <div className="container mx-auto px-8 lg:px-16 max-w-[1600px] relative z-10">
        {/* Hero Image */}
        <div className="relative h-80 mb-20 overflow-hidden rounded-lg">
          <img
            src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Our clients"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mazoon-navy/80 via-mazoon-navy/60 to-transparent"></div>
          <div className="absolute inset-0 flex items-center px-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-16 h-[1px] bg-mazoon-gold"></div>
                <span className="text-xs font-light tracking-[0.3em] uppercase text-mazoon-gold">
                  شركاؤنا
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white leading-[1.1] mb-4 tracking-tight">
                يثق بنا الرواد في جميع القطاعات
              </h2>
              <p className="text-white/70 text-lg font-light">
                نخدم مؤسسات رائدة في النفط والغاز، الصحة، البناء، والصناعة
              </p>
            </div>
          </div>
        </div>

        {/* Section Description */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <p className="text-base sm:text-lg text-mazoon-navy/60 font-light leading-relaxed break-words">
            نفخر بشراكاتنا مع مؤسسات رائدة تعتمد علينا لحماية منشآتها وموظفيها
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {sectors.map((sector, index) => {
            const delay = index * 100;
            return (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div className="space-y-8 p-10 border border-mazoon-navy/5 hover:border-mazoon-gold/30 hover:shadow-lg hover:shadow-mazoon-gold/10 transition-all duration-700 relative overflow-hidden h-full transform hover:-translate-y-2">
                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-mazoon-gold/0 to-mazoon-gold/0 group-hover:from-mazoon-gold/[0.03] group-hover:to-transparent transition-all duration-700"></div>

                <div className="relative z-10 space-y-8">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 border border-mazoon-navy/10 group-hover:border-mazoon-gold/40 transition-all duration-700 group-hover:rotate-6">
                    <sector.icon className="w-8 h-8 text-mazoon-navy/30 group-hover:text-mazoon-gold transition-all duration-700 group-hover:scale-110" strokeWidth={1} />
                  </div>

                  {/* Count */}
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl sm:text-6xl font-extralight text-mazoon-gold leading-none">
                        {sector.count}
                      </span>
                      <span className="text-2xl sm:text-3xl font-extralight text-mazoon-gold/60">+</span>
                    </div>
                    <div className="w-16 h-[1px] bg-mazoon-gold/20 group-hover:w-full transition-all duration-1000"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-light text-mazoon-navy group-hover:text-mazoon-gold transition-colors duration-700 break-words">
                      {sector.name}
                    </h3>
                    <p className="text-mazoon-navy/40 font-light text-sm leading-relaxed">
                      {sector.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="w-24 h-[1px] bg-mazoon-gold/20 mx-auto"></div>
            <p className="text-xl sm:text-2xl lg:text-3xl font-extralight text-mazoon-navy/60 leading-relaxed break-words">
              "نفخر بثقة عملائنا ونسعى دائماً لتجاوز توقعاتهم"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
