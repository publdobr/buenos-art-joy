import { Button } from "@/components/ui/button";
import { Clock, Users, Shirt, DollarSign } from "lucide-react";
const Schedule = () => {
  const telegramLink = "https://t.me/minpolska?text=Здравствуйте%21%20Хочу%20записатьс%20я%20на%20пробное%20занятие%20%3A%29";
  const info = [{
    icon: Clock,
    emoji: "✨",
    text: "Формат: занятия по 2 часа",
    color: "text-playful-pink"
  }, {
    icon: Users,
    emoji: "👶",
    text: "Возраст: от 1,5 лет до бесконечности",
    color: "text-playful-blue"
  }, {
    icon: Shirt,
    emoji: "🎨",
    text: "Нужно: сменная одежда, которую можно пачкать",
    color: "text-playful-green"
  }];
  const pricing = [{
    title: "Один человек",
    subtitle: "(ребёнок или взрослый)",
    price: "25 $",
    package: "4 занятия за 80 $"
  }, {
    title: "Ребёнок + взрослый",
    subtitle: "",
    price: "30 $",
    package: "4 занятия за 100 $"
  }];
  return <section id="schedule" className="py-12 sm:py-16 md:py-20 px-4 bg-background relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="hidden md:block absolute top-20 left-10 w-32 h-32 rounded-full bg-playful-bright-blue opacity-20 border-thick border-foreground" />
      <div className="hidden md:block absolute bottom-20 right-20 w-28 h-28 bg-playful-orange rotate-12 opacity-20 border-thick border-foreground" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 sm:mb-12 md:mb-16 text-center font-archivo" style={{
        transform: 'rotate(1deg)'
      }}>
          <span className="text-gradient text-indigo-500">Расписание и цены</span>
        </h2>

        {/* Info Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {info.map((item, index) => {
          const Icon = item.icon;
          const rotations = ['rotate(-1deg)', 'rotate(1deg)', 'rotate(-0.5deg)'];
          return <div key={index} className="p-4 sm:p-6 rounded-lg bg-background border-thick border-border hover:scale-105 hover:-rotate-2 transition-all duration-300 shadow-doodle hover:shadow-block" style={{
            transform: rotations[index]
          }}>
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  
                  <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${item.color}`} strokeWidth={3} />
                </div>
                <p className="text-sm sm:text-base md:text-lg font-semibold text-foreground font-work-sans">{item.text}</p>
              </div>;
        })}
        </div>

        {/* Pricing */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center">
            <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-playful-orange" strokeWidth={3} />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-archivo text-orange-500">Стоимость:</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {pricing.map((item, index) => {
            const rotations = ['rotate(-1deg)', 'rotate(1deg)'];
            return <div key={index} className="p-6 sm:p-8 rounded-lg bg-gradient-to-br from-playful-pink/20 to-playful-yellow/20 border-thick border-border hover:border-playful-pink hover:scale-105 transition-all duration-500 shadow-block" style={{
              transform: rotations[index]
            }}>
                  <h4 className="text-xl sm:text-2xl font-black mb-2 font-archivo text-blue-800">{item.title}</h4>
                  {item.subtitle && <p className="text-sm sm:text-base text-foreground/70 mb-3 sm:mb-4 font-work-sans">{item.subtitle}</p>}
                  <p className="text-3xl sm:text-4xl font-black text-playful-pink mb-2 sm:mb-3 font-archivo">{item.price}</p>
                  <p className="text-lg sm:text-xl font-semibold text-foreground font-work-sans">{item.package}</p>
                </div>;
          })}
          </div>

          <p className="text-base sm:text-lg md:text-xl text-center text-foreground mb-6 sm:mb-8 font-medium bg-playful-yellow/20 p-4 sm:p-6 rounded-lg border-thick border-border shadow-doodle font-work-sans inline-block w-full" style={{
          transform: 'rotate(-0.5deg)'
        }}>
            Расписание занятий скоро опубликуем, но уже можно смело записываться!
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button size="lg" className="text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 rounded-lg shadow-block hover:scale-105 hover:shadow-playful transition-all duration-500 bg-playful-blue hover:bg-playful-bright-blue font-bold border-thick border-border" asChild>
            <a href={telegramLink} target="_blank" rel="noopener noreferrer">
              Записаться на пробное занятие
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default Schedule;