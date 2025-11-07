import { Sparkles, Heart, Palette } from "lucide-react";
const Results = () => {
  const results = [{
    icon: Sparkles,
    title: "СЕНСОРНЫЙ ОПЫТ",
    text: "Гармоничное сенсорное развитие малышей через игру.",
    iconBg: "bg-playful-pink",
  }, {
    icon: Heart,
    title: "ВЫСТАВКИ",
    text: "Для малышей, «наделать» — это дать себе волю, отпустить страх и делать то, что хочется и как хочется.",
    iconBg: "bg-foreground",
  }, {
    icon: Palette,
    title: "КОЛЛЕКЦИЯ",
    text: "Ваша личная коллекция уникальных шедевров, созданных с любовью.",
    iconBg: "bg-playful-orange",
  }];
  
  return <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl lg:text-6xl font-black mb-16 text-center font-archivo uppercase">
          ЧТО В ИТОГЕ
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {results.map((result, index) => {
          const Icon = result.icon;
          return <div key={index} className="bg-background rounded-lg border-thick border-foreground p-6 hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 ${result.iconBg} rounded-lg border-thick border-foreground flex items-center justify-center mb-4`}>
                  <Icon className="w-8 h-8 text-background" strokeWidth={3} />
                </div>
                <h3 className="text-xl font-black mb-3 font-archivo uppercase">{result.title}</h3>
                <p className="text-base text-foreground leading-relaxed font-work-sans">
                  {result.text}
                </p>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default Results;