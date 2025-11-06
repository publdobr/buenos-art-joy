import { Button } from "@/components/ui/button";
import { MapPin, Send } from "lucide-react";

const Contact = () => {
  const telegramLink = "https://t.me/minpolska?text=Здравствуйте%21%20Хочу%20записатьс%20я%20на%20пробное%20занятие%20%3A%29";

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-playful-coral/10 via-playful-pink/10 to-playful-yellow/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-12">
          <span className="text-gradient">Контакты</span>
        </h2>

        <div className="space-y-8 mb-12">
          {/* Location */}
          <div className="flex items-center justify-center gap-4 text-xl md:text-2xl font-semibold">
            <MapPin className="w-8 h-8 text-playful-green flex-shrink-0" strokeWidth={2.5} />
            <p className="text-foreground">
              Буэнос-Айрес, угол Federico Lacroze и Alvarez Thomas
            </p>
          </div>

          {/* Telegram */}
          <div className="flex items-center justify-center gap-4 text-xl md:text-2xl font-semibold">
            <Send className="w-8 h-8 text-playful-blue flex-shrink-0" strokeWidth={2.5} />
            <a 
              href="https://t.me/minpolska" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-playful-blue hover:text-playful-pink transition-colors underline"
            >
              @minpolska
            </a>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          size="lg"
          className="text-xl px-12 py-8 rounded-full shadow-playful hover:scale-110 transition-transform duration-300 bg-playful-pink hover:bg-playful-coral font-black"
          asChild
        >
          <a href={telegramLink} target="_blank" rel="noopener noreferrer">
            Записаться на пробное занятие
          </a>
        </Button>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t-2 border-border">
          <p className="text-muted-foreground font-medium">
            Творческое объединение "БЕЗОБРАЗИЕ" © 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
