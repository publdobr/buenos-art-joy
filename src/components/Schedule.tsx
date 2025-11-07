import { Button } from "@/components/ui/button";
import { Clock, Users, Shirt, DollarSign } from "lucide-react";

const Schedule = () => {
  const telegramLink =
    "https://t.me/minpolska?text=Здравствуйте%21%20Хочу%20записаться%20на%20пробное%20занятие%20%3A%29";

  const info = [
    {
      icon: Clock,
      text: "Формат: занятия по 2 часа",
      color: "text-playful-pink",
    },
    {
      icon: Users,
      text: "Возраст: от 1,5 лет до бесконечности",
      color: "text-playful-blue",
    },
    {
      icon: Shirt,
      text: "Нужно: сменная одежда, которую можно пачкать",
      color: "text-playful-green",
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
      className="py-24 relative overflow-hidden bg-white px-4"
    >
      {/* Decorative elements (из КОД2, но переставлены местами) */}
      <div className="absolute top-10 left-20 w-24 h-24 border-4 border-[hsl(var(--color-blue))] opacity-60 animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border-4 border-[hsl(var(--color-pink))] rounded-full opacity-50 animate-wiggle" />
      <div className="absolute top-40 right-1/4 w-3 h-3 bg-[hsl(var(--color-yellow))] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Заголовок "Расписание и цены" в стиле КОД2 */}
        <div className="text-center space-y-6">
          <h2 className="relative inline-block text-4xl sm:text-5xl md:text-6xl font-black font-archivo">
            Расписание и цены
            <div className="absolute -bottom-3 left-0 right-0 h-2 bg-[hsl(var(--color-cyan))] opacity-60 rotate-1" />
          </h2>
        </div>

        {/* Info Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {info.map((item, index) => {
            const Icon = item.icon;
            const rotations = ["rotate(-1deg)", "rotate(1deg)", "rotate(-0.5deg)"];
            return (
              <div
                key={index}
                className="relative p-6 sm:p-8 bg-white border-thick border-border shadow-[6px_6px_0_hsl(0_0%_0%)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_hsl(0_0%_0%)] transition-all rounded-lg"
                style={{ transform: rotations[index] }}
              >
                {/* Декоративный уголок */}
                <div
                  className="absolute -top-2 -left-2 w-8 h-8 rounded-full"
                  style={{ backgroundColor: "hsl(var(--color-yellow))" }}
                />
                <div className="flex items-center gap-3 mb-4">
                  <Icon
                    className={`w-8 h-8 ${item.color}`}
                    strokeWidth={3}
                  />
                  <h3 className="text-2xl font-semibold font-archivo">
                    {item.text.split(":")[0]}
                  </h3>
                </div>
                <p className="text-base font-medium font-work-sans">
                  {item.text.split(":")[1]?.trim()}
                </p>
              </div>
            );
          })}
        </div>

        {/* Стоимость */}
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h3 className="relative inline-block text-3xl sm:text-4xl md:text-5xl font-black font-archivo">
              Стоимость
              <div className="absolute -bottom-3 left-0 right-0 h-2 bg-[hsl(var(--color-yellow))] opacity-60 rotate-1" />
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {pricing.map((item, index) => {
              const rotations = ["rotate(-1deg)", "rotate(1deg)"];
              return (
                <div
                  key={index}
                  className="p-8 rounded-lg bg-playful-yellow/20 border-thick border-border hover:scale-105 transition-all duration-500 shadow-block"
                  style={{ transform: rotations[index] }}
                >
                  <h4 className="text-2xl font-black mb-2 font-archivo text-blue-800">
                    {item.title}
                  </h4>
                  {item.subtitle && (
                    <p className="text-sm text-foreground/70 mb-3 font-work-sans">
                      {item.subtitle}
                    </p>
                  )}
                  <p className="text-4xl font-black text-playful-pink mb-2 font-archivo">
                    {item.price}
                  </p>
                  <p className="text-lg font-semibold text-foreground font-work-sans">
                    {item.package}
                  </p>
                </div>
              );
            })}
          </div>

          <p
            className="text-lg text-center text-foreground font-medium bg-playful-pink/20 p-6 rounded-lg border-thick border-border shadow-doodle font-work-sans inline-block w-full"
            style={{ transform: "rotate(-0.5deg)" }}
          >
            Расписание занятий скоро опубликуем, но уже можно смело записываться!
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="text-lg px-8 py-6 rounded-lg shadow-block hover:scale-105 hover:shadow-playful transition-all duration-500 bg-playful-blue hover:bg-playful-bright-blue font-bold border-thick border-border"
            asChild
          >
            <a href={telegramLink} target="_blank" rel="noopener noreferrer">
              Записаться на пробное занятие
            </a>
          </Button>
        </div>
      </div>

      {/* Дополнительный декоративный элемент из КОД2 */}
      <svg
        className="absolute top-32 right-10 w-32 h-32 opacity-50"
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

export default Schedule;
