import { GraduationCap, Shield, Users, Package, ClipboardCheck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Divisions() {
  const { elementRef, isVisible } = useScrollAnimation();
  const services = [
    {
      icon: GraduationCap,
      number: '01',
      title: 'التدريب والتطوير',
      description: 'برامج تدريبية معتمدة في الصحة والسلامة المهنية لرفع كفاءة فرق العمل',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Shield,
      number: '02',
      title: 'الاستشارات الأمنية',
      description: 'حلول استشارية متكاملة لإدارة المخاطر وتطوير أنظمة السلامة',
      image: 'https://images.pexels.com/photos/5989932/pexels-photo-5989932.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Package,
      number: '03',
      title: 'المعدات والتجهيزات',
      description: 'توفير وصيانة أحدث معدات السلامة المهنية المعتمدة عالمياً',
      image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Users,
      number: '04',
      title: 'الكوادر المتخصصة',
      description: 'توفير كوادر مؤهلة ومدربة في مجالات السلامة المختلفة',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: ClipboardCheck,
      number: '05',
      title: 'التفتيش والتدقيق',
      description: 'فحص وتدقيق شامل لأنظمة السلامة والصحة المهنية وفق المعايير الدولية',
      image: 'https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section
      ref={elementRef}
      id="services"
      className="relative py-32 bg-gradient-to-b from-white to-mazoon-navy/[0.02] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-40 right-20 w-96 h-96 border border-mazoon-gold rounded-full"></div>
        <div className="absolute bottom-20 left-40 w-64 h-64 border border-mazoon-navy rounded-full"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-16 max-w-[1600px] relative z-10">
        {/* Featured Image Banner */}
        <div className={`relative h-64 mb-20 overflow-hidden rounded-lg transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <img
            src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Safety services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mazoon-navy/90 via-mazoon-navy/70 to-transparent"></div>
          <div className="absolute inset-0 flex items-center px-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-16 h-[1px] bg-mazoon-gold"></div>
                <span className="text-xs font-light tracking-[0.3em] uppercase text-mazoon-gold">
                  ما نقدمه
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-white leading-[1.1] tracking-tight">
                حلول سلامة متكاملة
              </h2>
            </div>
          </div>
        </div>

        {/* Section Description */}
        <div className={`mb-20 max-w-3xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-base sm:text-lg lg:text-xl text-mazoon-navy/60 font-light leading-relaxed break-words">
            نقدم مجموعة شاملة من الخدمات المتخصصة التي تلبي جميع احتياجات السلامة والصحة المهنية في مؤسستكم
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-24">
          {services.map((service, index) => {
            const delay = index * 150;
            return (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div className="space-y-6 transform hover:translate-x-2 transition-transform duration-500">
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden group-hover:shadow-xl transition-shadow duration-700">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mazoon-navy/60 via-mazoon-navy/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="text-5xl font-extralight text-white/80 leading-none">
                      {service.number}
                    </div>
                  </div>
                </div>

                {/* Header */}
                <div className="flex items-start gap-6">
                  {/* Icon Container */}
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-16 h-16 border border-mazoon-navy/10 group-hover:border-mazoon-gold/40 transition-all duration-700">
                    <service.icon
                      className="w-8 h-8 text-mazoon-navy/40 group-hover:text-mazoon-gold transition-all duration-700 group-hover:scale-110"
                      strokeWidth={0.75}
                    />
                  </div>
                  <div className="flex-1"></div>
                </div>

                {/* Content */}
                <div className="space-y-6 pt-4">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-mazoon-navy group-hover:text-mazoon-gold transition-colors duration-700 tracking-tight break-words">
                    {service.title}
                  </h3>

                  <p className="text-mazoon-navy/50 font-light leading-relaxed text-lg group-hover:text-mazoon-navy/70 transition-colors duration-500">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-mazoon-gold text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <span>معرفة المزيد</span>
                    <span className="text-lg">←</span>
                  </a>

                  {/* Animated Line */}
                  <div className="relative pt-4">
                    <div className="h-[1px] w-full bg-mazoon-navy/5"></div>
                    <div className="absolute top-4 right-0 h-[1px] w-0 bg-mazoon-gold group-hover:w-full transition-all duration-1000 ease-out"></div>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-4 text-mazoon-navy/40 hover:text-mazoon-gold font-light text-lg tracking-wide group transition-colors duration-500"
          >
            <span>تعرف على المزيد من خدماتنا</span>
            <div className="w-0 h-[1px] bg-mazoon-gold group-hover:w-20 transition-all duration-700"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
