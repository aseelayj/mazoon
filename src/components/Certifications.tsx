import { Award, CheckCircle2, Shield } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Certifications() {
  const { elementRef, isVisible } = useScrollAnimation();

  const certifications = [
    {
      icon: Shield,
      title: 'ISO 45001',
      subtitle: 'نظام إدارة الصحة والسلامة المهنية',
      year: '2020',
    },
    {
      icon: Award,
      title: 'NEBOSH',
      subtitle: 'شهادة السلامة المهنية البريطانية',
      year: '2018',
    },
    {
      icon: CheckCircle2,
      title: 'OSHA',
      subtitle: 'معايير السلامة والصحة المهنية الأمريكية',
      year: '2019',
    },
    {
      icon: Award,
      title: 'ISO 9001',
      subtitle: 'نظام إدارة الجودة',
      year: '2021',
    },
  ];

  const achievements = [
    { number: '100%', label: 'نسبة رضا العملاء' },
    { number: '0', label: 'حوادث في المشاريع' },
    { number: '13+', label: 'سنة من التميز' },
    { number: '50+', label: 'شهادة وتصريح' },
  ];

  return (
    <section
      ref={elementRef}
      className="relative py-32 bg-mazoon-navy overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Certifications background"
          className="w-full h-full object-cover opacity-[0.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mazoon-navy via-mazoon-navy/98 to-mazoon-navy"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-16 max-w-[1600px] relative z-10">
        {/* Section Header */}
        <div className={`mb-24 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-16 h-[1px] bg-mazoon-gold"></div>
            <span className="text-xs font-light tracking-[0.3em] uppercase text-mazoon-gold">
              الاعتمادات والشهادات
            </span>
            <div className="w-16 h-[1px] bg-mazoon-gold"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white leading-[1.1] mb-8 tracking-tight break-words">
            معتمدون ومؤهلون<br />
            <span className="text-mazoon-gold/80 text-3xl sm:text-4xl lg:text-5xl">على أعلى المستويات</span>
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {certifications.map((cert, index) => {
            const delay = index * 100;
            return (
              <div
                key={index}
                className={`group transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="p-8 border border-white/10 hover:border-mazoon-gold/40 transition-all duration-700 relative overflow-hidden h-full bg-white/5 backdrop-blur-sm hover:bg-white/10">
                  <div className="absolute top-0 right-0 w-0 h-full bg-mazoon-gold/[0.05] group-hover:w-full transition-all duration-1000"></div>

                  <div className="relative z-10 space-y-6 text-center">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 border border-mazoon-gold/30 group-hover:border-mazoon-gold transition-all duration-700 mx-auto">
                      <cert.icon className="w-8 h-8 text-mazoon-gold/60 group-hover:text-mazoon-gold transition-all duration-700 group-hover:scale-110" strokeWidth={1} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-light text-white group-hover:text-mazoon-gold transition-colors duration-700">
                      {cert.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm text-white/50 font-light leading-relaxed">
                      {cert.subtitle}
                    </p>

                    {/* Year */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 text-xs text-mazoon-gold/60 font-light">
                      <span>معتمد منذ</span>
                      <span className="font-medium">{cert.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements Stats */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center p-8 border border-white/5 hover:border-mazoon-gold/20 transition-all duration-700 bg-white/[0.02] backdrop-blur-sm"
            >
              <div className="text-4xl sm:text-5xl font-extralight text-mazoon-gold mb-4">
                {achievement.number}
              </div>
              <div className="text-sm text-white/60 font-light">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
