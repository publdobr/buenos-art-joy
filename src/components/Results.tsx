import { Sparkles, Heart, Palette } from "lucide-react";

const Results = () => {
  const items = [
    {
      icon: Sparkles,
      title: "Сенсорный опыт",
      text: "Необходимый сенсорный опыт",
      color: "var(--color-yellow)",
      accent: "var(--color-cyan)",
    },
    {
      icon: Heart,
      title: "Шалость",
      text: "Удовлетворение потребности шалить",
      color: "var(--color-pink)",
      accent: "var(--color-blue)",
    },
    {
      icon: Palette,
      title: "Шедевры",
      text: "Выставки с работами участников и ваша личная коллекция шедевров",
      color: "var(--color-blue)",
      accent: "var(--color-yellow)",
    },
  ];

  return (
    <section id="results" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-24 h-24 border-4 border-[hsl(var(--color-blue))] opacity-60 animate-float" />
      <div className="absolute bottom-20 left-10 w-32 h-32 border-4 border-[hsl(var(--color-pink))] rounded-full opacity-50 animate-wiggle" />
      <div className="absolute top-40 left-1/4 w-3 h-3 bg-[hsl(var(--color-yellow))] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="relative inline-block">
              Результат занятий
              <div className="absolute -bottom-3 left-0 right-0 h-2 bg-[hsl(var(--color-cyan))] opacity-60 rotate-1" />
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative p-8 bg-white border-4 border-black shadow-[6px_6px_0_hsl(0_0%_0%)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_hsl(0_0%_0%)] transition-all"
                >
                  {/* Decorative corner */}
                  <div
                    className="absolute -top-2 -left-2 w-8 h-8 rounded-full"
                    style={{ backgroundColor: `hsl(${item.color})` }}
                  />

                  <div className="flex items-center gap-4 mb-4">
                    <Icon
                      className="w-8 h-8"
                      strokeWidth={3}
                      style={{ color: `hsl(${item.color})` }}
                    />
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                  </div>

                  <p className="text-base leading-relaxed font-medium">
                    {item.text}
                  </p>

                  {/* Random doodle element */}
                  {index === 0 && (
                    <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[hsl(var(--color-red))] rotate-45" />
                  )}
                  {index === 1 && (
                    <div className="absolute -top-3 -right-3 w-6 h-6 border-3 border-[hsl(var(--color-cyan))] rounded-full" />
                  )}
                  {index === 2 && (
                    <svg
                      className="absolute -bottom-2 -right-2 w-8 h-8"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M2,10 L10,2 L18,10 L10,18 Z"
                        fill="hsl(var(--color-orange))"
                      />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* More decorative elements */}
      <svg
        className="absolute top-32 left-10 w-32 h-32 opacity-50"
        viewBox="0 0 100 100"
      >
        <path
          d="M20,50 Q40,20 60,50 T100,50"
          stroke="hsl(var(--color-orange))"
          strokeWidth="4"
          fill="none"
          className="animate-float"
        />
      </svg>
    </section>
  );
};

export default Results;
