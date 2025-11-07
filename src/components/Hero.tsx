import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-oli.jpeg";
const Hero = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/minpolska?text=Здравствуйте%21%20Хочу%20записаться%20на%20пробное%20занятие%20%3A%29', '_blank');
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
      backgroundImage: `url(${heroImage})`
    }} />
      
      {/* Decorative doodles - scattered around like in the poster */}
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-[hsl(var(--color-pink))] rounded-full opacity-70 animate-float" />
      <div className="absolute top-40 right-20 w-24 h-24 border-4 border-[hsl(var(--color-blue))] rotate-45 opacity-60 animate-wiggle" />
      <div className="absolute bottom-32 left-20 w-40 h-2 bg-[hsl(var(--color-yellow))] rotate-12 opacity-80" />
      <div className="absolute bottom-20 right-32 w-3 h-3 bg-[hsl(var(--color-red))] rounded-full" />
      <div className="absolute top-60 left-40 w-3 h-3 bg-[hsl(var(--color-blue))] rounded-full" />
      <div className="absolute top-32 right-60 w-3 h-3 bg-[hsl(var(--color-pink))] rounded-full" />
      
      {/* Squiggly lines like crayon drawings */}
      <svg className="absolute top-10 right-10 w-40 h-40 opacity-60" viewBox="0 0 100 100">
        <path d="M10,50 Q30,20 50,40 T90,50" stroke="hsl(var(--color-cyan))" strokeWidth="4" fill="none" className="animate-float-delayed" />
      </svg>
      
      <svg className="absolute bottom-20 left-40 w-32 h-32 opacity-60" viewBox="0 0 100 100">
        <path d="M20,80 Q40,20 60,60 T90,30" stroke="hsl(var(--color-orange))" strokeWidth="4" fill="none" className="animate-wiggle" />
      </svg>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Main title - large grotesque typography */}
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
            
            <div className="relative inline-block mt-8">
              <h2 className="text-3xl md:text-5xl lg:text-6xl">ТВОРЧЕСКОЕ ОБЪЕДИНЕНИЕ</h2>
              {/* Decorative scribble */}
              <div className="absolute -top-8 -right-12 w-20 h-20 border-4 border-[hsl(var(--color-yellow))] rounded-full opacity-70 animate-spin-slow" />
            </div>

            <h1 className="relative inline-block">
              <span className="relative z-10 font-extrabold text-7xl animate-wiggle">БЕЗОБРАЗИЕ</span>
              {/* Hand-drawn underline */}
              <div className="absolute -bottom-4 left-0 right-0 h-3 bg-[hsl(var(--color-pink))] opacity-50 -rotate-1" />
            </h1>
          </div>
          
          {/* Description with hand-drawn style */}
          <div className="relative max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed font-medium animate-in fade-in slide-in-from-bottom duration-700 delay-150">
              Безобразно весело, безгранично свободно
            </p>
            {/* Decorative dots */}
            <div className="absolute -top-4 -left-4 w-6 h-6 bg-[hsl(var(--color-red))] rounded-full opacity-80" />
            <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-[hsl(var(--color-blue))] rounded-full opacity-80" />
          </div>
          
          {/* CTA Button */}
          <div className="animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <Button variant="playful" size="lg" onClick={handleTelegramClick} className="group relative">
              Записаться на пробное занятие
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              {/* Decorative star */}
              <div className="absolute -top-3 -right-3 w-6 h-6 text-[hsl(var(--color-red))] text-3xl">✦</div>
            </Button>
          </div>

          {/* More scattered doodle elements */}
          <div className="absolute top-0 left-0 text-6xl text-[hsl(var(--color-pink))] opacity-50 animate-wiggle">
            ◯
          </div>
          <div className="absolute bottom-10 right-10 text-8xl text-[hsl(var(--color-blue))] opacity-40 rotate-12">
            ×
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
