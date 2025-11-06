import { Button } from "@/components/ui/button";
import { MapPin, Send } from "lucide-react";
const Contact = () => {
  const telegramLink = "https://t.me/minpolska?text=Здравствуйте%21%20Хочу%20записатьс%20я%20на%20пробное%20занятие%20%3A%29";
  return <section className="py-20 px-4 bg-gradient-to-br from-playful-orange/20 via-playful-pink/20 to-playful-yellow/20 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 right-10 w-28 h-28 bg-playful-cyan rotate-12 opacity-20 border-thick border-foreground" />
      <div className="absolute bottom-10 left-10 w-36 h-36 rounded-full bg-playful-green opacity-20 border-thick border-foreground" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-12 font-archivo" style={{
        transform: 'rotate(-1deg)'
      }}>
          <span className="text-gradient text-blue-600">Контакты</span>
        </h2>

        <div className="space-y-8 mb-12">
          {/* Location */}
          <div className="flex items-center justify-center gap-4 text-xl md:text-2xl font-semibold bg-background/80 p-6 rounded-lg shadow-doodle border-thick border-border font-work-sans" style={{
          transform: 'rotate(0.5deg)'
        }}>
            <MapPin className="w-8 h-8 text-playful-green flex-shrink-0" strokeWidth={3} />
            <p className="text-foreground">
              Буэнос-Айрес, угол Federico Lacroze и Alvarez Thomas
            </p>
          </div>

          {/* Telegram */}
          
        </div>

        {/* CTA Button */}
        <Button size="lg" className="text-xl px-12 py-8 rounded-lg shadow-block hover:scale-105 hover:shadow-playful transition-all duration-500 bg-playful-pink hover:bg-playful-hot-pink font-black border-thick border-border" asChild>
          <a href={telegramLink} target="_blank" rel="noopener noreferrer">
            Записаться на пробное занятие
          </a>
        </Button>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t-4 border-border">
          <p className="font-work-sans font-light text-indigo-800">
            Творческое объединение "БЕЗОБРАЗИЕ" © 2025
          </p>
        </div>
      </div>
    </section>;
};
export default Contact;