import { Button } from "@/components/ui/button";
import { MapPin, Send } from "lucide-react";
const Contact = () => {
  const telegramLink = "https://t.me/minpolska?text=Здравствуйте%21%20Хочу%20записатьс%20я%20на%20пробное%20занятие%20%3A%29";
  return <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-playful-orange/20 via-playful-pink/20 to-playful-yellow/20 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="hidden md:block absolute top-10 right-10 w-28 h-28 bg-playful-cyan rotate-12 opacity-20 border-thick border-foreground" />
      <div className="hidden md:block absolute bottom-10 left-10 w-36 h-36 rounded-full bg-playful-green opacity-20 border-thick border-foreground" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 sm:mb-12 font-archivo" style={{
        transform: 'rotate(-1deg)'
      }}>
          <span className="text-gradient text-blue-600">Контакты</span>
        </h2>

        <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
          {/* Location */}
          <div className="flex items-start sm:items-center justify-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold bg-background/80 p-4 sm:p-6 rounded-lg shadow-doodle border-thick border-border font-work-sans" style={{
          transform: 'rotate(0.5deg)'
        }}>
            <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-playful-green flex-shrink-0 mt-1 sm:mt-0" strokeWidth={3} />
            <p className="text-foreground text-left sm:text-center">
              Буэнос-Айрес, угол Federico Lacroze и Alvarez Thomas
            </p>
          </div>

          {/* Telegram */}
          
        </div>

        {/* CTA Button */}
        <Button size="lg" className="text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-6 sm:py-7 md:py-8 rounded-lg shadow-block hover:scale-105 hover:shadow-playful transition-all duration-500 bg-playful-pink hover:bg-playful-hot-pink font-black border-thick border-border w-full sm:w-auto" asChild>
          <a href={telegramLink} target="_blank" rel="noopener noreferrer">
            Записаться на пробное занятие
          </a>
        </Button>

        {/* Footer */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t-4 border-border">
          <p className="font-work-sans font-light text-indigo-800 text-sm sm:text-base">
            Творческое объединение "БЕЗОБРАЗИЕ" © 2025
          </p>
        </div>
      </div>
    </section>;
};
export default Contact;