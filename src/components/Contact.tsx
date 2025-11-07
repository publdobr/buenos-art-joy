import { Button } from "@/components/ui/button";
import { MapPin, Send } from "lucide-react";
const Contact = () => {
  const telegramLink = "https://t.me/minpolska?text=Здравствуйте%21%20Хочу%20записатьс%20я%20на%20пробное%20занятие%20%3A%29";
  
  return <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl lg:text-6xl font-black mb-12 font-archivo uppercase">
          КОНТАКТЫ
        </h2>

        <div className="space-y-6 mb-12">
          {/* Location Card */}
          <div className="bg-background border-thick border-foreground rounded-lg p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-playful-pink rounded-lg border-thick border-foreground flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-background" strokeWidth={3} />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-black mb-2 font-archivo uppercase">ГДЕ</h3>
                <p className="text-base font-work-sans text-foreground leading-relaxed">
                  Буэнос-Айрес, угол Federico Lacroze и Alvarez Thomas. Район Colegiales. 5 минут от станции метро. Уютный дом, где живут и работают художники. Можно приехать на велосипеде. Есть парковка. Ближайший автобус — 127, 168.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-playful-yellow/40 border-thick border-foreground rounded-lg p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-playful-blue rounded-lg border-thick border-foreground flex items-center justify-center flex-shrink-0">
                <Send className="w-7 h-7 text-background" strokeWidth={3} />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-black mb-2 font-archivo uppercase">ЗАПИСАТЬСЯ</h3>
                <p className="text-base font-work-sans text-foreground leading-relaxed">
                  Очень легко: можно написать в Telegram, указать день и удобное время — и мы договоримся обо всём остальном.
                </p>
              </div>
            </div>
            
            <Button size="lg" className="text-lg px-8 py-6 rounded-lg border-thick border-foreground hover:scale-105 transition-all duration-300 bg-playful-yellow hover:bg-playful-bright-yellow text-foreground font-black uppercase w-full md:w-auto" asChild>
              <a href={telegramLink} target="_blank" rel="noopener noreferrer">
                ✉ Написать в Telegram
              </a>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6">
          <p className="font-work-sans text-sm text-foreground/60">
            Творческое объединение "БЕЗОБРАЗИЕ" © 2025
          </p>
        </div>
      </div>
    </section>;
};
export default Contact;