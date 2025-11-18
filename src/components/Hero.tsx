import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-oli.jpeg";
import { LanguageSwitcher } from "./LanguageSwitcher"; 
import MobileMenu from "./MobileMenu"; // [!code ++] Исправленный импорт (без фигурных скобок)

const Hero = () => {
  const { t } = useLanguage();

  const handleTelegramClick = () => {
    window.open('https://t.me/minpolska?text=Здравствуйте%21%20Хочу%20записаться%20на%20пробное%20занятие%20%3A%29', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      
      {/* --- ВЕРХНЯЯ ПАНЕЛЬ (НАВИГАЦИЯ) --- */}
      <nav className="absolute top-0 left-0 right-0 z-50 w-full p-4 md:p-6 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tighter text-gray-800">
          {/* Logo */} 
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </nav>

      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
        backgroundImage: `url(${heroImage})`
      }} />
      
      {/* Decorative doodles */}
      <div className="hidden md:block absolute top-20 left-10 w-32 h-32 border-4 border-[hsl(var(--color-pink))] rounded-full opacity-70 animate-float" />
      <div className="hidden md:block absolute top-40 right-20 w-24 h-24 border-4 border-[hsl(var(--color-blue))] rotate-45 opacity-60 animate-wiggle" />
      <div className="hidden md:block absolute bottom-32 left-20 w-40 h-2 bg-[hsl(var(--color-yellow))] rotate-12 opacity-80" />
      <div className="absolute bottom-20 right-10 md:right-32 w-3 h-3 bg-[hsl(var(--color-red))] rounded-full" />
      <div className="hidden lg:block absolute top-60 left-40 w-3 h-3 bg-[hsl(var(--color-blue))] rounded-full" />
      <div className="hidden lg:block absolute top-32 right-60 w-3 h-3 bg-[hsl(var(--color-pink))] rounded-full" />
      
      <svg className="absolute top-10 right-10 w-40 h-40 opacity-60" viewBox="0 0 100 100">
        <path d="M10,50 Q30,20 50,40 T90,50" stroke="hsl(var(--color-cyan))" strokeWidth="4" fill="none" className="animate-float-delayed" />
      </svg>
      
      <svg className="absolute bottom-20 left-40 w-32 h-32 opacity-60" viewBox="0 0 100 100">
        <path d="M20,80 Q40,20 60,60 T90,30" stroke="hsl(var(--color-orange))" strokeWidth="4" fill="none" className="animate-wiggle" />
      </svg>

      <div className="container mx-auto px-4 py-20 relative z-10 mt-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-12">
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
            <div className="relative inline-block mt-8">
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl px-4 font-bold text-gray-800">{t('hero.subtitle')}</h2>
              <div className="hidden md:block absolute -top-8 -right-12 w-20 h-20 border-4 border-[hsl(var(--color-yellow))] rounded-full opacity-70 animate-spin-slow" />
            </div>

            <h1 className="relative inline-block px-4">
              <span className="relative z-10 font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-wiggle text-black">{t('hero.title')}</span>
              <div className="absolute -bottom-2 md:-bottom-4 left-0 right-0 h-2 md:h-3 bg-[hsl(var(--color-pink))] opacity-50 -rotate-1" />
            </h1>
          </div>
          
          <div className="relative max-w-2xl mx-auto px-4">
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed font-medium text-gray-700 animate-in fade-in slide-in-from-bottom duration-700 delay-150">
              {t('hero.description')}
            </p>
            <div className="hidden sm:block absolute -top-4 -left-4 w-6 h-6 bg-[hsl(var(--color-red))] rounded-full opacity-80" />
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-4 h-4 bg-[hsl(var(--color-blue))] rounded-full opacity-80" />
          </div>
          
          <div className="animate-in fade-in slide-in-from-bottom duration-700 delay-300 px-4">
            <Button variant="playful" size="lg" onClick={handleTelegramClick} className="group relative text-sm sm:text-base md:text-lg px-6 md:px-8 py-4 md:py-6">
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
              <div className="hidden sm:block absolute -top-3 -right-3 w-6 h-6 text-[hsl(var(--color-red))] text-3xl">✦</div>
            </Button>
          </div>

          <div className="hidden md:block absolute top-0 left-0 text-6xl text-[hsl(var(--color-pink))] opacity-50 animate-wiggle">
            ◯
          </div>
          <div className="hidden md:block absolute bottom-10 right-10 text-8xl text-[hsl(var(--color-blue))] opacity-40 rotate-12">
            ×
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
