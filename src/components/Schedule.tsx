import { Button } from "@/components/ui/button";
import { Clock, Users, Shirt, DollarSign } from "lucide-react";
const Schedule = () => {
  const telegramLink = "https://t.me/minpolska?text=Здравствуйте%21%20Хочу%20записатьс%20я%20на%20пробное%20занятие%20%3A%29";
  
  const conditions = [
    {
      icon: Users,
      title: "ПРОПОРЦИОНАЛЬНОСТЬ",
      text: "Здесь никто не сравнивает и не оценивает, не хвалит и не ругает.",
      iconBg: "bg-playful-pink",
    },
    {
      icon: Clock,
      title: "ВОЗРАСТ",
      text: "От 1,5 лет до бесконечности. Чем раньше, тем лучше. Но никогда не поздно!",
      iconBg: "bg-playful-blue",
    },
    {
      icon: Shirt,
      title: "ЧТО ВЗЯТЬ",
      text: "Сменную одежду, которую можно пачкать. Всё остальное ждёт вас здесь.",
      iconBg: "bg-playful-yellow",
    },
    {
      icon: Users,
      title: "ОДИН ЧЕЛОВЕК",
      text: "25$ за занятие. Пакет из 4 занятий — 80$. Ребёнок + взрослый — 30$ за занятие.",
      iconBg: "bg-playful-cyan",
    },
    {
      icon: DollarSign,
      title: "РЕБЁНОК + ВЗРОСЛЫЙ",
      text: "30$ за одно занятие. Пакет из 4 занятий — 100$. Вместе веселее!",
      iconBg: "bg-playful-orange",
    },
  ];

  return <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl lg:text-6xl font-black mb-16 text-center font-archivo uppercase">
          УСЛОВИЯ
        </h2>

        <div className="space-y-4 mb-12">
          {conditions.map((item, index) => {
            const Icon = item.icon;
            return <div key={index} className="bg-background rounded-lg border-thick border-foreground p-6 flex items-start gap-4 hover:scale-[1.02] transition-all duration-300">
                <div className={`w-14 h-14 ${item.iconBg} rounded-lg border-thick border-foreground flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-7 h-7 text-background" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="text-lg font-black mb-2 font-archivo uppercase">{item.title}</h3>
                  <p className="text-base text-foreground font-work-sans leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>;
          })}
        </div>

        <p className="text-lg text-center text-foreground mb-8 font-work-sans bg-playful-yellow/20 p-6 rounded-lg border-thick border-foreground">
          Расписание занятий скоро опубликуем, но уже можно смело записываться!
        </p>

        <div className="text-center">
          <Button size="lg" className="text-xl px-10 py-7 rounded-lg border-thick border-foreground hover:scale-105 transition-all duration-300 bg-playful-yellow hover:bg-playful-bright-yellow text-foreground font-black uppercase" asChild>
            <a href={telegramLink} target="_blank" rel="noopener noreferrer">
              Записаться на пробное занятие →
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default Schedule;