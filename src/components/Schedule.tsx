import { Button } from "@/components/ui/button";
import { ArrowRight, PartyPopper, Heart, Palette, Users, Camera, Sun } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Schedule = () => {
  const { t } = useLanguage();

  const handleTelegramClick = () => {
    window.open(
      "https://t.me/minpolska?text=Здравствуйте%21%20Хочу%20узнать%20подробности%20про%20«Безобразие»%20%3A%29",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const formats = [
    {
      icon: PartyPopper,
      title: t('schedule.events'),
      text: t('schedule.eventsText'),
      color: "text-playful-pink",
      bgAccent: "hsl(var(--color-pink))",
      rotation: "rotate(-1.5deg)",
    },
    {
      icon: Heart,
      title: t('schedule.therapy'),
      text: t('schedule.therapyText'),
      color: "text-playful-blue",
      bgAccent: "hsl(var(--color-blue))",
      rotation: "rotate(1deg)",
    },
    {
      icon: Palette,
      title: t('schedule.dates'),
      text: t('schedule.datesText'),
      color: "text-playful-green",
      bgAccent: "hsl(var(--color-green))",
      rotation: "rotate(-0.5deg)",
    },
    {
      icon: Users,
      title: t('schedule.friends'),
      text: t('schedule.friendsText'),
      color: "text-playful-orange",
      bgAccent: "hsl(var(--color-orange))",
      rotation: "rotate(1.5deg)",
    },
    {
      icon: Camera,
      title: t('schedule.photoshoots'),
      text: null,
      richText: true,
      color: "text-playful-cyan",
      bgAccent: "hsl(var(--color-cyan))",
      rotation: "rotate(-1deg)",
    },
    {
      icon: Sun,
      title: t('schedule.kids'),
      text: t('schedule.kidsText'),
      color: "text-playful-red",
      bgAccent: "hsl(var(--color-red))",
      rotation: "rotate(0.5deg)",
      paused: true,
      pausedText: t('schedule.kidsPaused'),
    },
  ];

  return (
    <section
      id="schedule"
      className="py-24 relative overflow-hidden bg-white px-4"
    >
      {/* Декор */}
      <div className="absolute top-10 left-20 w-24 h-24 border-4 border-[hsl(var(--color-blue))] opacity-60 animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border-4 border-[hsl(var(--color-pink))] rounded-full opacity-50 animate-wiggle" />
      <div className="absolute top-40 right-1/4 w-3 h-3 bg-[hsl(var(--color-yellow))] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        {/* Заголовок */}
        <div className="text-center space-y-6">
          <h2 className="relative inline-block text-4xl sm:text-5xl md:text-6xl font-black font-archivo">
            {t('schedule.title')}
            <div className="absolute -bottom-3 left-0 right-0 h-2 bg-[hsl(var(--color-cyan))] opacity-60 rotate-1" />
          </h2>
        </div>

        {/* Format Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {formats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative p-6 bg-white border-thick border-border shadow-[6px_6px_0_hsl(0_0%_0%)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_hsl(0_0%_0%)] transition-all rounded-lg"
                style={{ transform: item.rotation }}
              >
                {/* Accent dot */}
                <div
                  className="absolute -top-2 -left-2 w-8 h-8 rounded-full"
                  style={{ backgroundColor: item.bgAccent }}
                />

                <div className="flex items-start gap-3 mb-3">
                  <Icon
                    className={`w-7 h-7 flex-shrink-0 mt-1 ${item.color}`}
                    strokeWidth={3}
                  />
                  <h3 className="text-xl sm:text-2xl font-bold font-archivo leading-tight">
                    {item.title}
                  </h3>
                </div>

                {item.richText ? (
                  <p className="text-base font-medium font-work-sans leading-relaxed">
                    {t('schedule.photoshootsText1')}
                    <a
                      href="https://www.instagram.com/markboyarsky/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-playful-blue hover:text-playful-bright-blue transition-colors font-bold"
                    >
                      {t('schedule.photoshootsLinkName')}
                    </a>
                    {t('schedule.photoshootsText2')}
                  </p>
                ) : (
                  <p className="text-base font-medium font-work-sans leading-relaxed">
                    {item.text}
                  </p>
                )}

                {item.paused && (
                  <span
                    className="inline-block mt-3 px-3 py-1 text-sm font-bold rounded-md border-2 border-[hsl(var(--color-red))]"
                    style={{
                      color: "hsl(var(--color-red))",
                      backgroundColor: "hsl(0 80% 95%)",
                    }}
                  >
                    {item.pausedText}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer text */}
        <p className="text-center text-base sm:text-lg font-medium font-work-sans text-foreground/80">
          {t('schedule.footer')}
        </p>

        {/* CTA Button */}
        <div className="animate-in fade-in slide-in-from-bottom duration-700 delay-300 px-4 text-center">
          <Button
            variant="playful"
            size="lg"
            onClick={handleTelegramClick}
            className="group relative text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 md:py-6 bg-playful-blue hover:bg-playful-bright-blue border-thick border-border shadow-block hover:scale-105 transition-all duration-500 font-bold text-white"
          >
            {t('schedule.cta')}
            <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
            <div className="hidden sm:block absolute -top-3 -right-3 w-6 h-6 text-[hsl(var(--color-red))] text-3xl">
              ✦
            </div>
          </Button>
        </div>
      </div>

      {/* SVG декор */}
      <svg
        className="absolute top-32 right-10 w-32 h-32 opacity-50"
        viewBox="0 0 100 100"
      >
        <path
          d="M20,50 Q40,20 60,50 T100,50"
          stroke="hsl(var(--color-orange))"
          strokeWidth="4"
          fill="none"
          className="animate-float"
        />
      </svg>
    </section>
  );
};

export default Schedule;
