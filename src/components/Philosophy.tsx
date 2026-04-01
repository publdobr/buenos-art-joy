import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Philosophy = () => {
  const { t } = useLanguage();

  const manifestoItems = [
    { key: "method" },
    { key: "pickle" },
    { key: "experience" },
    { key: "play" },
    { key: "zone" },
  ];
  
  return (
    <section
      id="philosophy"
      className="py-24 relative overflow-hidden bg-[hsl(var(--color-yellow))]/20"
    >
      {/* Doodles */}
      <div className="hidden md:block absolute top-10 left-10 w-20 h-20 border-4 border-[hsl(var(--color-pink))] rotate-12 opacity-60 animate-wiggle" />
      <div className="hidden md:block absolute bottom-10 right-10 w-24 h-24 border-4 border-[hsl(var(--color-blue))] rounded-full opacity-50 animate-float" />
      <div className="hidden lg:block absolute top-1/2 right-20 w-3 h-3 bg-[hsl(var(--color-red))] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="relative inline-block text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
            {t('philosophy.title')}
            <div className="absolute -bottom-2 md:-bottom-3 left-0 right-0 h-2 bg-[hsl(var(--color-pink))] opacity-60 -rotate-1" />
          </h2>

          <div className="relative p-6 sm:p-8 md:p-10 lg:p-16 bg-white border-4 border-black shadow-[4px_4px_0_hsl(0_0%_0%)] md:shadow-[8px_8px_0_hsl(0_0%_0%)]">
            {/* Decorative corners */}
            <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-8 h-8 md:w-10 md:h-10 bg-[hsl(var(--color-cyan))] rounded-full" />
            <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-8 h-8 md:w-10 md:h-10 bg-[hsl(var(--color-orange))]" />
            <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-6 h-6 md:w-8 md:h-8 border-4 border-[hsl(var(--color-pink))] rotate-45" />

            <div className="space-y-6 md:space-y-8 text-center">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed max-w-3xl mx-auto font-work-sans">
                  {t('philosophy.text')}{" "}
                  <span className="font-bold text-playful-pink">
                    {t('philosophy.dirty')}
                  </span>
                  .{" "} {t('philosophy.sometimes')}{" "}
                  <span className="font-bold text-playful-blue">{t('philosophy.draw')}</span>.{" "}
                  {t('philosophy.sometimesss')}{" "}
                  <span className="font-bold text-playful-green">
                    {t('philosophy.learn')}
                  </span>
                  .{" "} {t('philosophy.sometimes')}{" "}
                  <span className="font-bold text-playful-orange">{t('philosophy.music')}</span>.{" "}
                  {t('philosophy.sometimes')}{" "}
                  <span className="font-bold text-playful-yellow">{t('philosophy.paint')}</span>.{" "}
                  {t('philosophy.all')}{" "}
                  <span className="font-black text-playful-pink text-3xl font-archivo">
                    {t('philosophy.pleasure')}
                  </span>
                </p>

              {/* Hand-drawn star */}
              <div className="absolute top-4 left-4 text-4xl text-[hsl(var(--color-yellow))]">
                ✦
              </div>
            </div>
          </div>

          {/* Манифест */}
          <div className="mt-12 space-y-6">
            <h3 className="relative inline-block text-2xl sm:text-3xl md:text-4xl font-black font-archivo">
              {t('manifesto.title')}
              <div className="absolute -bottom-2 left-0 right-0 h-2 bg-[hsl(var(--color-cyan))] opacity-60 rotate-1" />
            </h3>
            <p className="text-base sm:text-lg text-foreground/80 font-work-sans">
              {t('manifesto.intro')}
            </p>
            <p className="text-lg font-bold font-archivo text-playful-pink">
              {t('manifesto.laws')}
            </p>
            <Accordion type="multiple" className="space-y-3">
              {manifestoItems.map((item, index) => (
                <AccordionItem
                  key={item.key}
                  value={item.key}
                  className="border-thick border-border bg-[hsl(330_80%_95%)] shadow-[4px_4px_0_hsl(0_0%_0%)] rounded-lg overflow-hidden px-4"
                  style={{ transform: index % 2 === 0 ? "rotate(-0.5deg)" : "rotate(0.5deg)" }}
                >
                  <AccordionTrigger className="text-left text-base sm:text-lg font-bold font-archivo hover:no-underline py-4 text-[hsl(220_80%_40%)]">
                    {t(`manifesto.${item.key}.title`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base font-work-sans text-foreground/80 leading-relaxed pb-4">
                    {t(`manifesto.${item.key}.text`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => window.open('https://t.me/minpolska?text=Здравствуйте%21%20Хочу%20записаться%20на%20пробное%20занятие%20%3A%29', '_blank')}
            className="bg-[hsl(145_60%_45%)] hover:bg-[hsl(145_60%_38%)] text-white border-4 border-foreground shadow-[4px_4px_0_hsl(var(--foreground))] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_hsl(var(--foreground))] transition-all text-lg md:text-xl font-bold px-8 py-6 rounded-xl"
          >
            {t('hero.cta')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
