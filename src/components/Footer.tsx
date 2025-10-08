import { Shield, Linkedin, Twitter, Facebook, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-white to-mazoon-navy/[0.02] border-t border-mazoon-navy/10">
      <div className="container mx-auto px-8 lg:px-16 max-w-[1600px] py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-mazoon-gold" strokeWidth={1.5} />
              <div className="text-2xl font-light tracking-wide text-mazoon-navy">
                مزون للسلامة
              </div>
            </div>
            <p className="text-mazoon-navy/60 font-light leading-relaxed text-sm">
              شريكك الموثوق في حلول الصحة والسلامة المهنية منذ 2011
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a href="#" className="p-2 border border-mazoon-navy/10 hover:border-mazoon-gold hover:bg-mazoon-gold/5 transition-all duration-300 group">
                <Linkedin className="w-4 h-4 text-mazoon-navy/40 group-hover:text-mazoon-gold transition-colors" />
              </a>
              <a href="#" className="p-2 border border-mazoon-navy/10 hover:border-mazoon-gold hover:bg-mazoon-gold/5 transition-all duration-300 group">
                <Twitter className="w-4 h-4 text-mazoon-navy/40 group-hover:text-mazoon-gold transition-colors" />
              </a>
              <a href="#" className="p-2 border border-mazoon-navy/10 hover:border-mazoon-gold hover:bg-mazoon-gold/5 transition-all duration-300 group">
                <Facebook className="w-4 h-4 text-mazoon-navy/40 group-hover:text-mazoon-gold transition-colors" />
              </a>
              <a href="#" className="p-2 border border-mazoon-navy/10 hover:border-mazoon-gold hover:bg-mazoon-gold/5 transition-all duration-300 group">
                <Instagram className="w-4 h-4 text-mazoon-navy/40 group-hover:text-mazoon-gold transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-mazoon-navy">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-sm text-mazoon-navy/60 hover:text-mazoon-gold transition-colors font-light">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-mazoon-navy/60 hover:text-mazoon-gold transition-colors font-light">
                  الخدمات
                </a>
              </li>
              <li>
                <a href="#clients" className="text-sm text-mazoon-navy/60 hover:text-mazoon-gold transition-colors font-light">
                  العملاء
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-mazoon-navy/60 hover:text-mazoon-gold transition-colors font-light">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-mazoon-navy">خدماتنا</h3>
            <ul className="space-y-3">
              <li className="text-sm text-mazoon-navy/60 font-light">التدريب والتطوير</li>
              <li className="text-sm text-mazoon-navy/60 font-light">الاستشارات الأمنية</li>
              <li className="text-sm text-mazoon-navy/60 font-light">المعدات والتجهيزات</li>
              <li className="text-sm text-mazoon-navy/60 font-light">التفتيش والتدقيق</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-mazoon-navy">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-mazoon-gold mt-1 flex-shrink-0" />
                <a href="tel:+96895885449" className="text-sm text-mazoon-navy/60 hover:text-mazoon-gold transition-colors font-light">
                  +968 95885449
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-mazoon-gold mt-1 flex-shrink-0" />
                <a href="mailto:Info@mazoonsafety.com" className="text-sm text-mazoon-navy/60 hover:text-mazoon-gold transition-colors font-light break-all">
                  Info@mazoonsafety.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-mazoon-navy/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-mazoon-navy/40 font-light text-center md:text-right">
              © {new Date().getFullYear()} مزون للسلامة. جميع الحقوق محفوظة.
            </div>
            <div className="flex items-center gap-6 text-xs text-mazoon-navy/30 font-light">
              <a href="#" className="hover:text-mazoon-gold transition-colors">سياسة الخصوصية</a>
              <span>|</span>
              <a href="#" className="hover:text-mazoon-gold transition-colors">شروط الاستخدام</a>
            </div>
            <button
              onClick={scrollToTop}
              className="p-2 border border-mazoon-navy/10 hover:border-mazoon-gold hover:bg-mazoon-gold/5 transition-all duration-300 group"
              aria-label="العودة إلى الأعلى"
            >
              <svg className="w-4 h-4 text-mazoon-navy/40 group-hover:text-mazoon-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
