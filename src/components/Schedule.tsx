import { Button } from "@/components/ui/button";
import { Clock, Users, Shirt, DollarSign } from "lucide-react";

const Schedule = () => {
  const telegramLink =
    "https://t.me/minpolska?text=Здравствуйте%21%20Хочу%20записаться%20на%20пробное%20занятие%20%3A%29";

  const info = [
    {
      icon: Clock,
      text: "Формат: занятия по 2 часа",
      color: "var(--color-yellow)",
    },
    {
      icon: Users,
      text: "Возраст: от 1,5 лет до бесконечности",
      color: "var(--color-pink)",
    },
    {
      icon: Shirt,
      text: "Нужно: сменная одежда, которую можно пачкать",
      color: "var(--color-blue)",
    },
  ];

  const pricing = [
    {
      title: "Один человек",
      subtitle: "(ребёнок или взрослый)",
      price: "25 $",
      package: "4 занятия за 80 $",
    },
    {
      title: "Ребёнок + взрослый",
      subtitle: "",
      price: "30 $",
      package: "4 занятия за 100 $",
    },
  ];

  return (
    <section
      id="schedule"
      className="py-24 relative overflow-hidden bg-white"
    >
      {/* Декор */}
      <div className="absolute top-10 right-20 w-24 h-24 border-4 border-[hsl(var(--color-blue))] opacity-60 animate-float" />
      <div className="absolute bottom-20 left-10 w-32 h-32 border-4 border-[hsl(var(--color-pink))] rounded-full opacity-50 animate-wiggle" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* --- ЦЕНЫ --- */}
          <div className="text-center space-y-6">
            <h2 className="relative inline-block text-4xl font-black font-archivo">
              Стоимость
              <div className="absolute -bottom-3 left-0 right-0 h-2 bg-[hsl(var(--color-cyan))] opacity-60 rotate-1" />
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pricing.map((item, index) => (
              <div
                key={index}
                className="relative p-8 bg-white border-4 border-black shadow-[6px_6px_0_hsl(0_0%_0%)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_hsl(0_0%_0%)] transition-all"
              >
                {/* Декоративный угол */}
                <div
                  className="absolute -top-2 -left-2 w-8 h-8 rounded-full"
                  style={{ backgroundColor: "hsl(var(--color-yellow))" }}
                />
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                {item.subtitle && (
                  <p className="text-base text-foreground/70 mb-2">
                    {item.subtitle}
                  </p>
                )}
                <p className="text-3xl font-black text-[hsl(var(--color-pink))] mb-1">
                  {item.price}
                </p>
                <p className="text-lg font-medium">{item.package}</p>
              </div>
            ))}
          </div>

          {/* --- РАСПИСАНИЕ --- */}
          <div className="text-center space-y-6">
            <h2 className="relative inline-block text-4xl font-black font-archivo">
              Расписание и цены
              <div className="absolute -bottom-3 left-0 right-0 h-2 bg-[hsl(var(--color-yellow))] opacity-60 -rotate-1" />
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {info.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative p-8 bg-[hsl(var(--color-yellow)/.15)] border-4 border-black shadow-[6px_6px_0_hsl(0_0%_0%)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_hsl(0_0%_0%)] transition-all"
                >
                  <div
                    className="absolute -top-2 -left-2 w-8 h-8 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="flex items-center gap-4 mb-4">
                    <Icon
                      className="w-8 h-8"
                      strokeWidth={3}
                      style={{ color: item.color }}
                    />
                    <h3 className="text-2xl font-semibold">Инфо</h3>
                  </div>
                  <p className="text-base leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="text-base sm:text-lg text-center text-foreground mb-8 p-6 bg-[hsl(var(--color-yellow)/.25)] rounded-lg border-4 border-black shadow-[4px_4px_0_hsl(0_0%_0%)]">
            Расписание занятий скоро опубликуем, но уже можно смело
            записываться!
          </p>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-lg shadow-[6px_6px_0_hsl(0_0%_0%)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_hsl(0_0%_0%)] transition-all bg-[hsl(var(--color-blue))] text-white font-bold border-4 border-black"
              asChild
            >
              <a href={telegramLink} target="_blank" rel="noopener noreferrer">
                Записаться на пробное занятие
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
