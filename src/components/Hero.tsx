import { Shield, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-white flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Safety professional"
          className="w-full h-full object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80"></div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 right-20 w-[600px] h-[600px] border border-mazoon-gold rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-40 w-[400px] h-[400px] border border-mazoon-navy rounded-full animate-float delay-300"></div>
      </div>

      {/* Floating Badges */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-1/4 right-32 animate-bounce-slow opacity-20">
          <Shield className="w-12 h-12 text-mazoon-gold" strokeWidth={1} />
        </div>
        <div className="absolute bottom-1/3 left-24 animate-bounce-slow opacity-20" style={{ animationDelay: '1s' }}>
          <Shield className="w-8 h-8 text-mazoon-navy" strokeWidth={1} />
        </div>
      </div>

      <div className="container mx-auto px-8 lg:px-16 max-w-[1600px] relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-12">
            {/* Subtle Label */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-3 px-6 py-3 border border-mazoon-gold/20 backdrop-blur-sm">
                <Shield className="w-4 h-4 text-mazoon-gold" strokeWidth={1} />
                <span className="text-xs font-light tracking-[0.3em] text-mazoon-navy/60 uppercase">
                  Your Safety Partner
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-6 animate-slide-in delay-200">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight text-mazoon-navy leading-[1.05] tracking-tight break-words">
                درع<br />
                <span className="text-mazoon-gold italic">متين</span>
              </h1>
              <div className="w-32 h-[2px] bg-gradient-to-r from-mazoon-gold to-transparent"></div>
            </div>

            {/* Subheading */}
            <p className="text-lg sm:text-xl lg:text-2xl text-mazoon-navy/50 font-extralight max-w-2xl leading-[1.7] animate-fade-in-up delay-400 break-words">
              نحمي أعمالك في كل اتجاه<br />
              <span className="text-sm sm:text-base text-mazoon-navy/30 mt-4 block">الشريك الموثوق للصحة والسلامة المهنية منذ 2011</span>
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 pt-8 animate-fade-in delay-500">
              <a
                href="#contact"
                className="group relative px-12 sm:px-16 py-5 sm:py-6 bg-mazoon-gold text-mazoon-navy font-medium text-sm sm:text-base tracking-wide overflow-hidden shadow-lg shadow-mazoon-gold/20 hover:shadow-2xl hover:shadow-mazoon-gold/50 transition-all duration-500 hover:scale-[1.05] hover:-translate-y-1 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-mazoon-gold to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center justify-center gap-3">
                  احصل على استشارة مجانية
                  <ArrowDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>

              <a
                href="#services"
                className="group px-12 sm:px-16 py-5 sm:py-6 border-2 border-mazoon-navy text-mazoon-navy font-light text-sm sm:text-base tracking-wide hover:bg-mazoon-navy hover:text-white transition-all duration-500 hover:scale-[1.05] hover:-translate-y-1 text-center relative overflow-hidden"
              >
                <span className="relative z-10">استكشف خدماتنا</span>
                <div className="absolute inset-0 bg-gradient-to-r from-mazoon-navy to-mazoon-navy/90 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12 pt-8 animate-fade-in-up delay-500">
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-extralight text-mazoon-gold">13+</div>
                <div className="text-[10px] sm:text-xs font-light text-mazoon-navy/40 tracking-wider">سنة خبرة</div>
              </div>
              <div className="space-y-2 border-r border-l border-mazoon-navy/10 px-3 sm:px-6">
                <div className="text-3xl sm:text-4xl font-extralight text-mazoon-gold">500+</div>
                <div className="text-[10px] sm:text-xs font-light text-mazoon-navy/40 tracking-wider">مشروع منجز</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-extralight text-mazoon-gold">100+</div>
                <div className="text-[10px] sm:text-xs font-light text-mazoon-navy/40 tracking-wider">عميل راضٍ</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-5 relative h-[700px] hidden lg:block">
            <div className="relative w-full h-full overflow-hidden">
              {/* Main Hero Image */}
              <div className="absolute inset-0 rounded-lg overflow-hidden animate-scale-in">
                <img
                  src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Safety professionals at work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mazoon-navy/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm p-6 shadow-xl animate-fade-in delay-500 border-l-4 border-mazoon-gold">
                <div className="flex items-center gap-4">
                  <Shield className="w-12 h-12 text-mazoon-gold" strokeWidth={1} />
                  <div>
                    <div className="text-2xl font-light text-mazoon-navy">ISO</div>
                    <div className="text-xs text-mazoon-navy/60 font-light">معتمد دولياً</div>
                  </div>
                </div>
              </div>

              {/* Animated Geometric Shapes */}
              <div className="absolute top-0 left-0 w-32 h-32 border-2 border-mazoon-gold/20 animate-float"></div>
              <div className="absolute bottom-32 left-8 w-24 h-24 border-2 border-white/30 animate-float delay-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#services" className="absolute bottom-12 right-1/2 transform translate-x-1/2 animate-fade-in delay-500">
        <div className="flex flex-col items-center gap-4 cursor-pointer group">
          <div className="text-xs text-mazoon-navy/30 font-light tracking-[0.3em] uppercase">اكتشف المزيد</div>
          <div className="w-[1px] h-20 bg-gradient-to-b from-mazoon-gold/40 to-transparent group-hover:h-24 transition-all duration-500"></div>
          <ArrowDown className="w-4 h-4 text-mazoon-gold/60 animate-bounce" />
        </div>
      </a>
    </section>
  );
}
