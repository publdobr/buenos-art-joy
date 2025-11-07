import { Clock, Users, Shirt, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const Schedule = () => {
  const telegramLink =
    "https://t.me/minpolska?text=Здравствуйте%21%20Хочу%20записаться%20на%20пробное%20занятие%20%3A%29";

  const infoItems = [
    {
      icon: Clock,
      title: "Формат",
      text: "Занятия по 2 часа",
      color: "var(--color-pink)",
      accent: "var(--color-yellow)",
    },
    {
      icon: Users,
      title: "Возраст",
      text: "От 1,5 лет до бесконечности",
      color: "var(--color-blue)",
      accent: "var(--color-cyan)",
    },
    {
      icon: Shirt,
      title: "Что взять",
      text: "Сменную одежду, которую можно пачкать",
      color: "var(--color-green)",
      accent: "var(--color-pink)",
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
    <section id="schedule" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative elements (переставлены местами) */}
      <div className="absolute bottom-20 left-10 w-28 h-28 border-4 border-[hsl(var(--color-orange))] opacity-50 animate-float" />
      <div className="absolute top-20 right-20 w-32 h-32 border-4 border-[hsl(var(--color-blue))] rounded-full opacity-60 animate-wiggle" />
      <div className="absolute bottom-10 right-1/4 w-3 h-3 bg-[hsl(var(--color-pink))] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Заголовок */}
          <div className="text-center space-y-6">
            <h2 className="relative inline-block font-black text-4xl sm:text-5xl md:text-6xl font-archivo">
              Расписание и цены
              <div className="absolute -bottom-3 left-0 right-0 h-2 bg-[hsl(var(--color-yellow))] opacity-60 rotate-1" />
            </h2>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {infoItems.map((item, index) => {
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

                  {/* Декоративные элементы для разнообразия */}
                  {index === 0 && (
                    <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[hsl(var(--color-pink))] rotate-45" />
                  )}
                  {index === 1 && (
                    <div className="absolute -top-3 -right-3 w-6 h-6 border-3 border-[hsl(var(--color-blue))] rounded-full" />
                  )}
                  {index === 2 && (
                    <svg
                      className="absolute -bottom-2 -right-2 w-8 h-8"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M2,10 L10,2 L18,10 L10,18 Z"
                        fill="hsl(var(--color-green))"
                      />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>

          {/* Pricing */}
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-3">
              <DollarSign
                className="w-10 h-10 text-[hsl(var(--color-orange))]"
                strokeWidth={3}
              />
              <h3 className="text-3xl sm:text-4xl font-black font-archivo text-[hsl(var(--color-orange))]">
                Стоимость
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {pricing.map((item, index) => (
                <div
                  key={index}
                  className="relative p-8 bg-white border-4 border-black shadow-[6px_6px_0_hsl(0_0%_0%)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_hsl(0_0%_0%)] transition-all"
                >
                  <h4 className="text-2xl font-black mb-2 font-archivo text-[hsl(var(--color-blue))]">
                    {item.title}
                  </h4>
                  {item.subtitle && (
                    <p className="text-base text-gray-600 mb-3 font-work-sans">
                      {item.subtitle}
                    </p>
                  )}
                  <p className="text-4xl font-black text-[hsl(var(--color-pink))] mb-2 font-archivo">
                    {item.price}
                  </p>
                  <p className="text-lg font-semibold">{item.package}</p>

                  {/* Accent doodle */}
                  {index === 0 && (
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-[hsl(var(--color-yellow))] rotate-45" />
                  )}
                  {index === 1 && (
                    <div className="absolute -bottom-3 -right-3 w-8 h-8 border-3 border-[hsl(var(--color-orange))] rounded-full" />
                  )}
                </div>
              ))}
            </div>

            <p className="text-center text-lg bg-[hsl(var(--color-yellow))]/20 border-4 border-black py-6 px-8 rounded-xl shadow-[6px_6px_0_hsl(0_0%_0%)] font-medium">
              Расписание занятий скоро опубликуем, но уже можно смело
              записываться!
            </p>

            <div className="text-center pt-6">
              <Button
                size="lg"
                className="text-xl px-8 py-6 rounded-xl shadow-[6px_6px_0_hsl(0_0%_0%)] border-4 border-black bg-[hsl(var(--color-blue))] hover:bg-[hsl(var(--color-cyan))] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_hsl(0_0%_0%)] transition-all font-bold"
                asChild
              >
                <a href={telegramLink} target="_blank" rel="noopener noreferrer">
                  Записаться на пробное занятие
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Дополнительные декоративные линии */}
      <svg
        className="absolute top-32 right-10 w-32 h-32 opacity-50"
        viewBox="0 0 100 100"
      >
        <path
          d="M20,50 Q40,20 60,50 T100,50"
          stroke="hsl(var(--color-pink))"
          strokeWidth="4"
          fill="none"
          className="animate-float"
        />
      </svg>
    </section>
  );
};

export default Schedule;
