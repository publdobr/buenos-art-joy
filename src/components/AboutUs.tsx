import { useLanguage } from "@/contexts/LanguageContext";
import polinaImg from "@/assets/polina.jpg";
import nastyaImg from "@/assets/nastya.jpg";

const team = [
  { image: polinaImg, nameKey: "about.polina", roleKey: "about.polinaRole" },
  { image: nastyaImg, nameKey: "about.nastya", roleKey: "about.nastyaRole" },
];

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 px-4 bg-gradient-to-b from-[hsl(195_100%_95%)] to-[hsl(195_80%_88%)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-12 uppercase tracking-tighter rotate-[-1deg]">
          <span className="relative inline-block">
            {t("about.title")}
            <div className="absolute -bottom-2 left-0 right-0 h-3 bg-[hsl(var(--color-yellow))] -rotate-1 -z-10" />
          </span>
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
          {team.map((member) => (
            <div key={member.nameKey} className="flex flex-col items-center text-center max-w-[280px]">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] mb-4">
                <img
                  src={member.image}
                  alt={t(member.nameKey)}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{t(member.nameKey)}</h3>
              <p className="text-muted-foreground text-sm">{t(member.roleKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
