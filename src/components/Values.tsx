import { Target, Eye, Award, Shield, Users, Heart, Lightbulb } from 'lucide-react';

export default function Values() {
  const values = [
    { icon: Award, title: 'الالتزام', subtitle: 'نلتزم بأعلى معايير الجودة', description: 'نحرص على التميز في كل ما نقدمه من خدمات وحلول' },
    { icon: Lightbulb, title: 'الابتكار', subtitle: 'نبحث دائماً عن حلول جديدة', description: 'نطور أساليبنا باستمرار لمواكبة أحدث المعايير' },
    { icon: Shield, title: 'الاحترافية', subtitle: 'نقدم خدمات بمعايير عالمية', description: 'فريق متخصص ومؤهل بشهادات دولية' },
    { icon: Heart, title: 'الثقة', subtitle: 'نبني علاقات طويلة الأمد', description: 'نحرص على رضا عملائنا وبناء شراكات ناجحة' },
    { icon: Users, title: 'المسؤولية', subtitle: 'نحمي الأرواح والممتلكات', description: 'نضع السلامة في أولوياتنا القصوى' },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-40 right-40 w-[400px] h-[400px] border border-mazoon-navy rounded-full"></div>
      </div>

      <div className="container mx-auto px-8 lg:px-16 max-w-[1600px] relative z-10">
        {/* Values Section */}
        <div className="mb-32">
          <div className="mb-24 text-center max-w-4xl mx-auto">
            <div className="mb-10 flex items-center justify-center gap-3">
              <div className="w-16 h-[1px] bg-mazoon-gold"></div>
              <span className="text-xs font-light tracking-[0.3em] uppercase text-mazoon-gold">
                قيمنا الأساسية
              </span>
              <div className="w-16 h-[1px] bg-mazoon-gold"></div>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extralight text-mazoon-navy leading-[1.1] mb-8 tracking-tight break-words">
              ما نؤمن به
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-mazoon-navy/40 font-light leading-relaxed break-words">
              قيمنا هي البوصلة التي توجه كل قراراتنا وتصرفاتنا
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group cursor-pointer p-8 border border-mazoon-navy/5 hover:border-mazoon-gold/30 hover:shadow-xl hover:shadow-mazoon-gold/10 transition-all duration-700 relative overflow-hidden bg-white"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-mazoon-gold/0 to-mazoon-gold/0 group-hover:from-mazoon-gold/[0.03] group-hover:to-transparent transition-all duration-700"></div>

                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 border border-mazoon-navy/10 group-hover:border-mazoon-gold/40 transition-all duration-700">
                    <value.icon className="w-8 h-8 text-mazoon-gold/60 group-hover:text-mazoon-gold transition-all duration-700 group-hover:scale-110" strokeWidth={1} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-light text-mazoon-navy group-hover:text-mazoon-gold transition-colors duration-700">
                    {value.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm text-mazoon-navy/60 font-light">
                    {value.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-mazoon-navy/40 font-light leading-relaxed">
                    {value.description}
                  </p>

                  {/* Number Badge */}
                  <div className="absolute top-6 left-6 text-6xl font-extralight text-mazoon-gold/5 group-hover:text-mazoon-gold/10 transition-colors duration-700">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Divider */}
        <div className="relative h-80 overflow-hidden my-24">
          <img
            src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Safety equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-white/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4 px-8">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-mazoon-navy">
                التميز في كل ما نفعل
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
          {/* Vision */}
          <div className="group cursor-pointer">
            <div className="space-y-8 p-16 border border-mazoon-navy/5 hover:border-mazoon-gold/20 transition-all duration-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-0 h-full bg-mazoon-gold/[0.02] group-hover:w-full transition-all duration-1000"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 border border-mazoon-gold/20 mb-8">
                  <Eye className="w-7 h-7 text-mazoon-gold" strokeWidth={1} />
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-[1px] bg-mazoon-gold"></div>
                    <span className="text-xs font-light tracking-[0.3em] uppercase text-mazoon-gold">
                      الرؤية
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-mazoon-navy leading-tight tracking-tight break-words">
                    أن نكون الخيار الأول لحلول الصحة والسلامة المهنية في سلطنة عمان والمنطقة
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="group cursor-pointer">
            <div className="space-y-8 p-16 border border-mazoon-navy/5 hover:border-mazoon-gold/20 transition-all duration-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-0 h-full bg-mazoon-gold/[0.02] group-hover:w-full transition-all duration-1000"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 border border-mazoon-gold/20 mb-8">
                  <Target className="w-7 h-7 text-mazoon-gold" strokeWidth={1} />
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-[1px] bg-mazoon-gold"></div>
                    <span className="text-xs font-light tracking-[0.3em] uppercase text-mazoon-gold">
                      الرسالة
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-mazoon-navy leading-tight tracking-tight break-words">
                    تقديم خدمات عالية الجودة ومتكاملة في مجالات الصحة والسلامة المهنية بما يحقق رضا العملاء
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
