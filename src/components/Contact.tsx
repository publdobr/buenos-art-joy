import { Button } from "@/components/ui/button";
import { MapPin, Send } from "lucide-react";

const Contact = () => {
  const telegramLink =
    "https://t.me/minpolska?text=Здравствуйте%21%20Хочу%20записаться%20на%20пробное%20занятие%20%3A%29";

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-pink-50"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border-4 border-[hsl(var(--color-pink))] opacity-60 animate-float" />
      <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-[hsl(var(--color-blue))] rounded-full opacity-50 animate-wiggle" />
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-[hsl(var(--color-yellow))] rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[hsl(var(--color-red))] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="relative inline-block font-black text-5xl sm:text-6xl">
              Контакты
              <div className="absolute -bottom-3 left-0 right-0 h-2 bg-[hsl(var(--color-cyan))] opacity-60 rotate-1" />
            </h2>
          </div>

          <div className="space-y-10">
            {/* Location block */}
            <div className="relative p-8 bg-white border-4 border-black shadow-[6px_6px_0_hsl(0_0%_0%)]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-[hsl(var(--color-green))] border-4 border-black">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="mb-3 text-2xl font-semibold">Где</h3>
                  <p className="text-lg leading-relaxed font-medium">
                    📍 Буэнос-Айрес, <a href="https://maps.app.goo.gl/JZVaQyJc229dEBNC9" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground transition-colors"> 
                      угол Federico Lacroze и Alvarez Thomas </a>
                  </p>
                </div>
              </div>
              {/* Decorative circle */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-[hsl(var(--color-yellow))] rounded-full" />
            </div>

            {/* Telegram block */}
            <div className="relative p-8 bg-[hsl(var(--color-yellow))]/30 border-4 border-black shadow-[6px_6px_0_hsl(0_0%_0%)]">
              <div className="flex flex-col items-center text-center gap-6">
                <div>
                  
                  <p className="text-lg mb-6 font-medium">
                    Напишите нам в Telegram, чтобы узнать подробности и
                    записаться на пробное занятие
                  </p>
                  <Button
                    size="lg"
                    variant="playful"
                    onClick={() => window.open(telegramLink, "_blank")}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Написать
                  </Button>
                </div>
              </div>
              {/* Decorative accents */}
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-[hsl(var(--color-cyan))] rotate-45" />
              <div className="absolute -top-3 -right-3 text-4xl text-[hsl(var(--color-pink))]">
                ✦
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="text-center py-8 border-t-4 border-black">
            <p className="text-lg font-medium italic">
              Давайте творить вместе!
            </p>
          </div>
        </div>
      </div>

      {/* Decorative squiggle */}
      <svg
        className="absolute bottom-20 right-32 w-40 h-40 opacity-50"
        viewBox="0 0 100 100"
      >
        <path
          d="M10,50 Q30,20 50,50 T90,50"
          stroke="hsl(var(--color-orange))"
          strokeWidth="5"
          fill="none"
          className="animate-float-delayed"
        />
      </svg>
    </section>
  );
};

export default Contact;
