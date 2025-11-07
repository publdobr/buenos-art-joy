import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Главная", href: "#hero" },
    { title: "Философия", href: "#philosophy" },
    { title: "Результаты", href: "#results" },
    { title: "Видео", href: "#video" },
    { title: "Расписание", href: "#schedule" },
    { title: "Галерея", href: "#gallery" },
    { title: "FAQ", href: "#faq" },
    { title: "Контакты", href: "#contact" },
  ];

  const handleClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full border-4 border-black bg-[hsl(var(--color-pink))] hover:bg-[hsl(var(--color-hot-pink))] shadow-[4px_4px_0_hsl(0_0%_0%)] hover:shadow-[6px_6px_0_hsl(0_0%_0%)] transition-all"
          >
            <Menu className="h-6 w-6 text-white" strokeWidth={3} />
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="right" 
          className="w-[300px] sm:w-[400px] bg-white border-l-4 border-black"
        >
          <SheetHeader className="border-b-4 border-black pb-4 mb-6">
            <SheetTitle className="text-2xl font-black font-archivo uppercase text-[hsl(var(--color-pink))]">
              Меню
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleClick(item.href)}
                className="text-left text-lg font-semibold font-work-sans py-3 px-4 rounded-lg border-4 border-black bg-white hover:bg-[hsl(var(--color-yellow))]/20 transition-all hover:translate-x-1 shadow-[2px_2px_0_hsl(0_0%_0%)] hover:shadow-[4px_4px_0_hsl(0_0%_0%)]"
              >
                {item.title}
              </button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
