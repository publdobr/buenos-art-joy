import { Sparkles, Heart, Palette } from "lucide-react";
const Results = () => {
  const results = [{
    icon: Sparkles,
    text: "Необходимый сенсорный опыт.",
    color: "text-playful-yellow",
    bg: "bg-playful-yellow/10"
  }, {
    icon: Heart,
    text: "Удовлетворение в потребности шалить.",
    color: "text-playful-pink",
    bg: "bg-playful-pink/10"
  }, {
    icon: Palette,
    text: "А ещё — выставки с работами участников и ваша личная коллекция шедевров.",
    color: "text-playful-blue",
    bg: "bg-playful-blue/10"
  }];
  return <section id="results" className="py-12 sm:py-16 md:py-20 px-4 bg-background relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="hidden md:block absolute top-20 right-20 w-16 h-16 bg-playful-cyan opacity-20 border-thick border-foreground" style={{
      transform: 'rotate(12deg)'
    }} />
      <div className="hidden md:block absolute bottom-20 left-20 w-20 h-20 rounded-full bg-playful-bright-yellow opacity-20 border-thick border-foreground" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 style={{
        transform: 'rotate(1deg)'
      }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 sm:mb-12 md:mb-16 text-center font-archivo text-sky-500">
          Результат занятий
        </h2>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {results.map((result, index) => {
          const Icon = result.icon;
          const rotations = ['rotate(-1deg)', 'rotate(1deg)', 'rotate(-0.5deg)'];
          return <div key={index} className={`p-6 sm:p-8 rounded-lg ${result.bg} hover:scale-105 hover:-rotate-2 transition-all duration-300 shadow-block border-thick border-border`} style={{
            transform: rotations[index]
          }}>
                <Icon className={`w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 ${result.color}`} strokeWidth={3} />
                <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground leading-relaxed font-work-sans">
                  {result.text}
                </p>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default Results;