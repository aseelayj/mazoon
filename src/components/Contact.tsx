import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: 'اتصل بنا',
      value: '+968 95885449',
      href: 'tel:+96895885449',
      description: 'متاحون على مدار الساعة',
    },
    {
      icon: Mail,
      label: 'راسلنا',
      value: 'Info@mazoonsafety.com',
      href: 'mailto:Info@mazoonsafety.com',
      description: 'نرد خلال 24 ساعة',
    },
    {
      icon: MapPin,
      label: 'موقعنا',
      value: 'الخوض، ولاية السيب\nسلطنة عمان',
      href: '#',
      description: 'مكتبنا الرئيسي',
    },
  ];

  return (
    <section id="contact" className="relative py-40 bg-gradient-to-b from-white via-mazoon-navy/[0.02] to-mazoon-navy/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-20 right-40 w-[500px] h-[500px] border border-mazoon-gold rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-[300px] h-[300px] border border-mazoon-navy rounded-full"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-16 max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side - Content */}
          <div className="space-y-12">
            <div>
              <div className="mb-6 inline-flex items-center gap-3">
                <div className="w-12 h-[1px] bg-mazoon-gold"></div>
                <span className="text-xs font-light tracking-[0.3em] uppercase text-mazoon-gold">
                  تواصل معنا
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-mazoon-navy leading-[1.1] mb-6 tracking-tight">
                لدينا الحلول<br />
                <span className="text-mazoon-gold/70 text-3xl sm:text-4xl lg:text-5xl">للسلامة التي تحتاجها</span>
              </h2>

              <p className="text-lg text-mazoon-navy/60 font-light leading-relaxed max-w-xl">
                فريقنا مستعد لمساعدتكم في تطوير بيئة عمل آمنة ومتوافقة مع أعلى المعايير الدولية.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  onClick={(e) => {
                    if (info.href === '#') {
                      e.preventDefault();
                    }
                  }}
                  className="group flex items-start gap-6 p-6 border border-mazoon-navy/10 hover:border-mazoon-gold/30 hover:shadow-lg hover:shadow-mazoon-gold/5 transition-all duration-500 bg-white/50 backdrop-blur-sm"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 border border-mazoon-navy/10 group-hover:border-mazoon-gold/40 group-hover:bg-mazoon-gold/5 transition-all duration-500">
                    <info.icon className="w-6 h-6 text-mazoon-navy/40 group-hover:text-mazoon-gold transition-all duration-500" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="text-sm text-mazoon-navy/50 font-light mb-2">
                      {info.label}
                    </div>
                    <div className="text-lg text-mazoon-navy font-light whitespace-pre-line group-hover:text-mazoon-gold transition-colors duration-500">
                      {info.value}
                    </div>
                    <div className="text-xs text-mazoon-navy/40 font-light mt-2">
                      {info.description}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-mazoon-navy/10">
              <div className="space-y-2">
                <Clock className="w-8 h-8 text-mazoon-gold" strokeWidth={1} />
                <div className="text-2xl font-extralight text-mazoon-navy">24/7</div>
                <div className="text-sm text-mazoon-navy/50 font-light">دعم مستمر</div>
              </div>
              <div className="space-y-2">
                <MessageCircle className="w-8 h-8 text-mazoon-gold" strokeWidth={1} />
                <div className="text-2xl font-extralight text-mazoon-navy">&lt;24h</div>
                <div className="text-sm text-mazoon-navy/50 font-light">زمن الرد</div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Card */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              {/* Image */}
              <div className="relative h-[600px]">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Contact us"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mazoon-navy via-mazoon-navy/60 to-transparent"></div>
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-10 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-light text-white">
                    احصل علة استشارة مجانية
                  </h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    تواصل معنا اليوم لتحصل على تقييم مجاني لاحتياجات السلامة في مؤسستك
                  </p>
                </div>

                <a
                  href="mailto:Info@mazoonsafety.com"
                  className="inline-flex items-center gap-3 px-12 py-4 bg-mazoon-gold text-mazoon-navy font-medium text-base tracking-wide shadow-xl shadow-mazoon-gold/30 hover:shadow-2xl hover:shadow-mazoon-gold/50 hover:scale-[1.05] hover:-translate-y-1 transition-all duration-500 group"
                >
                  <span>اطلب عرض سعر</span>
                  <Send className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-mazoon-gold p-8 shadow-xl">
              <div className="text-center">
                <div className="text-4xl font-extralight text-mazoon-navy">13+</div>
                <div className="text-xs text-mazoon-navy/60 font-light mt-1">سنة خبرة</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
