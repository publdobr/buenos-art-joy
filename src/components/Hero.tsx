import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-oli.jpeg";

const Hero = () => {
  const telegramLink = "https://t.me/minpolska?text=Здравствуйте%21%20Хочу%20записатьс%20я%20на%20пробное%20занятие%20%3A%29";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black mb-6 text-background leading-tight font-archivo">
          Творческое объединение{" "}
          <span className="inline-block animate-wiggle text-playful-yellow">"БЕЗОБРАЗИЕ"</span>
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl text-background/95 mb-12 font-semibold font-work-sans">
          Безобразно весело, безгранично свободно
        </p>
        <Button 
          size="lg"
          className="text-xl px-10 py-7 rounded-lg shadow-block hover:scale-105 transition-all duration-300 bg-playful-pink hover:bg-playful-hot-pink font-bold border-thick border-border hover:shadow-playful"
          asChild
        >
          <a href={telegramLink} target="_blank" rel="noopener noreferrer">
            Записаться на пробное занятие
          </a>
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-playful-yellow/40 blur-xl animate-float border-thick border-foreground/20" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-playful-blue/40 blur-xl animate-float border-thick border-foreground/20" style={{ animationDelay: '2s', transform: 'rotate(45deg)' }} />
      <div className="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-playful-pink/40 blur-xl animate-float border-thick border-foreground/20" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;
