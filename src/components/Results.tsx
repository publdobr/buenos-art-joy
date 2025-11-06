import { Sparkles, Heart, Palette } from "lucide-react";

const Results = () => {
  const results = [
    {
      icon: Sparkles,
      text: "Необходимый сенсорный опыт.",
      color: "text-playful-yellow",
      bg: "bg-playful-yellow/10"
    },
    {
      icon: Heart,
      text: "Удовлетворение в потребности шалить.",
      color: "text-playful-pink",
      bg: "bg-playful-pink/10"
    },
    {
      icon: Palette,
      text: "А ещё — выставки с работами участников и ваша личная коллекция шедевров.",
      color: "text-playful-blue",
      bg: "bg-playful-blue/10"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-playful-cyan opacity-20 border-thick border-foreground" style={{ transform: 'rotate(12deg)' }} />
      <div className="absolute bottom-20 left-20 w-20 h-20 rounded-full bg-playful-bright-yellow opacity-20 border-thick border-foreground" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-16 text-center text-foreground font-archivo" style={{ transform: 'rotate(1deg)' }}>
          Результат занятий
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => {
            const Icon = result.icon;
            const rotations = ['rotate(-1deg)', 'rotate(1deg)', 'rotate(-0.5deg)'];
            return (
              <div 
                key={index}
                className={`p-8 rounded-lg ${result.bg} hover:scale-105 hover:-rotate-2 transition-all duration-300 shadow-block border-thick border-border`}
                style={{ transform: rotations[index] }}
              >
                <Icon className={`w-16 h-16 mb-6 ${result.color}`} strokeWidth={3} />
                <p className="text-xl font-semibold text-foreground leading-relaxed font-work-sans">
                  {result.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Results;
