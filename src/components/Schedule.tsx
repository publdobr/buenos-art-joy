import { Button } from "@/components/ui/button";
import { Clock, Users, Shirt, DollarSign } from "lucide-react";

const Schedule = () => {
  const telegramLink = "https://t.me/minpolska?text=Здравствуйте%21%20Хочу%20записатьс%20я%20на%20пробное%20занятие%20%3A%29";

  const info = [
    {
      icon: Clock,
      emoji: "✨",
      text: "Формат: занятия по 2 часа",
      color: "text-playful-pink"
    },
    {
      icon: Users,
      emoji: "👶",
      text: "Возраст: от 1,5 лет до бесконечности",
      color: "text-playful-blue"
    },
    {
      icon: Shirt,
      emoji: "🎨",
      text: "Нужно: сменная одежда, которую можно пачкать",
      color: "text-playful-green"
    }
  ];

  const pricing = [
    {
      title: "Один человек",
      subtitle: "(ребёнок или взрослый)",
      price: "25 $",
      package: "4 занятия за 80 $"
    },
    {
      title: "Ребёнок + взрослый",
      subtitle: "",
      price: "30 $",
      package: "4 занятия за 100 $"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-center">
          <span className="text-gradient">Расписание и цены</span>
        </h2>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {info.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-3xl bg-muted hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{item.emoji}</span>
                  <Icon className={`w-8 h-8 ${item.color}`} strokeWidth={2.5} />
                </div>
                <p className="text-lg font-semibold text-foreground">{item.text}</p>
              </div>
            );
          })}
        </div>

        {/* Pricing */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <DollarSign className="w-10 h-10 text-playful-coral" strokeWidth={2.5} />
            <h3 className="text-3xl md:text-4xl font-black text-foreground">Стоимость:</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {pricing.map((item, index) => (
              <div 
                key={index}
                className="p-8 rounded-3xl bg-gradient-to-br from-playful-pink/10 to-playful-yellow/10 border-2 border-border hover:border-playful-pink hover:scale-105 transition-all duration-300 shadow-soft"
              >
                <h4 className="text-2xl font-black text-foreground mb-2">{item.title}</h4>
                {item.subtitle && <p className="text-muted-foreground mb-4">{item.subtitle}</p>}
                <p className="text-4xl font-black text-playful-pink mb-3">{item.price}</p>
                <p className="text-xl font-semibold text-foreground">{item.package}</p>
              </div>
            ))}
          </div>

          <p className="text-xl text-center text-muted-foreground mb-8 font-medium">
            Расписание занятий скоро опубликуем, но уже можно смело записываться!
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg"
            className="text-xl px-10 py-7 rounded-full shadow-playful hover:scale-110 transition-transform duration-300 bg-playful-blue hover:bg-playful-green font-bold"
            asChild
          >
            <a href={telegramLink} target="_blank" rel="noopener noreferrer">
              Записаться на пробное занятие
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
