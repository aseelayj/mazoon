import { Quote, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Testimonials() {
  const { elementRef, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      name: 'أحمد المعمري',
      position: 'مدير السلامة',
      company: 'شركة نفط عمان',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'مزون للسلامة شريك موثوق قدم لنا حلولاً متكاملة رفعت مستوى السلامة في منشآتنا بشكل ملحوظ. فريق محترف وخدمة ممتازة.',
      rating: 5,
    },
    {
      name: 'فاطمة الحارثية',
      position: 'مديرة الموارد البشرية',
      company: 'مستشفى السلطان قابوس',
      image: 'https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'التدريبات التي قدمها مزون للسلامة كانت شاملة واحترافية. أسلوب التدريب العملي ساعد فريقنا على فهم واستيعاب معايير السلامة بشكل أفضل.',
      rating: 5,
    },
    {
      name: 'سالم البلوشي',
      position: 'مهندس مشروع',
      company: 'شركة البناء والتطوير',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      text: 'خدمة الاستشارات والتدقيق التي حصلنا عليها كانت دقيقة ومفصلة. ساعدتنا على تحسين بيئة العمل وتقليل المخاطر بشكل كبير.',
      rating: 5,
    },
  ];

  return (
    <section
      ref={elementRef}
      className="relative py-32 bg-gradient-to-b from-white to-mazoon-navy/[0.02] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-20 left-20 w-96 h-96 border border-mazoon-gold rounded-full"></div>
        <div className="absolute bottom-40 right-40 w-64 h-64 border border-mazoon-navy rounded-full"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-16 max-w-[1600px] relative z-10">
        {/* Section Header */}
        <div className={`mb-24 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-16 h-[1px] bg-mazoon-gold"></div>
            <span className="text-xs font-light tracking-[0.3em] uppercase text-mazoon-gold">
              شهادات العملاء
            </span>
            <div className="w-16 h-[1px] bg-mazoon-gold"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extralight text-mazoon-navy leading-[1.1] mb-8 tracking-tight break-words">
            ماذا يقول<br />
            <span className="text-mazoon-gold/60 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">عملاؤنا</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-mazoon-navy/40 font-light leading-relaxed max-w-2xl mx-auto break-words">
            آراء حقيقية من شركاء النجاح الذين نفخر بخدمتهم
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => {
            const delay = index * 150;
            return (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="h-full p-10 border border-mazoon-navy/5 hover:border-mazoon-gold/30 hover:shadow-xl hover:shadow-mazoon-gold/10 transition-all duration-700 relative overflow-hidden bg-white">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-mazoon-gold/0 to-mazoon-gold/0 group-hover:from-mazoon-gold/[0.03] group-hover:to-transparent transition-all duration-700"></div>

                  <div className="relative z-10 space-y-8">
                    {/* Quote Icon */}
                    <Quote className="w-12 h-12 text-mazoon-gold/20 group-hover:text-mazoon-gold/40 transition-colors duration-700" strokeWidth={1} />

                    {/* Rating */}
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-mazoon-gold fill-mazoon-gold"
                          strokeWidth={0}
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-mazoon-navy/60 font-light leading-relaxed text-base group-hover:text-mazoon-navy/80 transition-colors duration-500">
                      "{testimonial.text}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-6 border-t border-mazoon-navy/5">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-mazoon-gold/20 group-hover:border-mazoon-gold/60 transition-colors duration-700"
                      />
                      <div>
                        <h4 className="text-lg font-medium text-mazoon-navy group-hover:text-mazoon-gold transition-colors duration-700">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-mazoon-navy/40 font-light">
                          {testimonial.position}
                        </p>
                        <p className="text-xs text-mazoon-gold/60 font-light">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
