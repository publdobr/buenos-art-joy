import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Tabs
      defaultValue={language}
      value={language}
      onValueChange={(value) => setLanguage(value as "en" | "es" | "ru")}
      className="w-auto"
    >
      <TabsList className="grid w-full grid-cols-3 h-auto p-1 items-center justify-center rounded-full bg-white/50 backdrop-blur-sm border border-gray-200">
        <TabsTrigger
          value="ru"
          className="rounded-full px-4 py-1 text-sm font-medium transition-all data-[state=active]:bg-[#ec4899] data-[state=active]:text-white data-[state=active]:shadow-sm"
        >
          RU
        </TabsTrigger>
        <TabsTrigger
          value="es"
          className="rounded-full px-4 py-1 text-sm font-medium transition-all data-[state=active]:bg-[#ec4899] data-[state=active]:text-white data-[state=active]:shadow-sm"
        >
          ES
        </TabsTrigger>
        <TabsTrigger
          value="en"
          className="rounded-full px-4 py-1 text-sm font-medium transition-all data-[state=active]:bg-[#ec4899] data-[state=active]:text-white data-[state=active]:shadow-sm"
        >
          EN
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
