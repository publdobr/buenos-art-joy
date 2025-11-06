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
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-center text-foreground">
          Результат занятий
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <div 
                key={index}
                className={`p-8 rounded-3xl ${result.bg} hover:scale-105 transition-transform duration-300 shadow-soft`}
              >
                <Icon className={`w-16 h-16 mb-6 ${result.color}`} strokeWidth={2.5} />
                <p className="text-xl font-semibold text-foreground leading-relaxed">
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
